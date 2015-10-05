/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.hal.meta.processing;

import org.jboss.gwt.flow.Control;
import org.jboss.gwt.flow.Function;
import org.jboss.gwt.flow.FunctionContext;
import org.jboss.hal.dmr.ModelNode;
import org.jboss.hal.dmr.dispatch.Dispatcher;
import org.jboss.hal.dmr.model.Composite;
import org.jboss.hal.dmr.model.CompositeResult;
import org.jboss.hal.dmr.model.ResourceAddress;
import org.jboss.hal.meta.description.ResourceDescriptions;
import org.jboss.hal.meta.security.SecurityFramework;

import java.util.List;

import static org.jboss.hal.dmr.ModelDescriptionConstants.ADDRESS;
import static org.jboss.hal.dmr.ModelDescriptionConstants.RESULT;
import static org.jboss.hal.dmr.ModelDescriptionConstants.STEPS;

/**
 * @author Harald Pehl
 */
class RrdFunction implements Function<FunctionContext> {

    private final ResourceDescriptions resourceDescriptions;
    private final SecurityFramework securityFramework;
    private final Dispatcher dispatcher;
    private final Composite composite;
    private final RrdResultStrategy strategy;

    RrdFunction(final ResourceDescriptions resourceDescriptions, final SecurityFramework securityFramework,
            final Dispatcher dispatcher, final Composite composite) {
        this.resourceDescriptions = resourceDescriptions;
        this.securityFramework = securityFramework;
        this.dispatcher = dispatcher;
        this.composite = composite;
        this.strategy = new RrdResultStrategy();
    }

    @Override
    public void execute(final Control<FunctionContext> control) {
        dispatcher.executeInFunction(control, composite,
                (CompositeResult result) -> {
                    try {
                        int index = 0;
                        for (ModelNode step : result) {
                            ModelNode stepResult = step.get(RESULT);
                            RrdResultParser parser = strategy.choose(operationAddress(index), stepResult);
                            List<RrdResult> results = parser.parse(step);
                            for (RrdResult rr : results) {
                                if (rr.resourceDescription != null) {
                                    resourceDescriptions.add(rr.address, rr.resourceDescription);
                                }
                                if (rr.securityContext != null) {
                                    securityFramework.add(rr.address, rr.securityContext);
                                }
                            }
                            index++;
                        }
                    } catch (ParserException e) {
                        control.getContext().setError(e);
                        control.abort();
                    }
                });
    }

    private ResourceAddress operationAddress(int index) {
        List<ModelNode> steps = composite.get(STEPS).asList();
        if (index >= steps.size()) {
            throw new ParserException(
                    "Cannot get operation at index " + index + " from composite " + composite);
        }
        ModelNode operation = steps.get(index);
        return new ResourceAddress(operation.get(ADDRESS));
    }
}
