/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client.configuration.subsystem.undertow;

import java.util.Arrays;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;
import javax.annotation.PostConstruct;

import org.jboss.hal.ballroom.VerticalNavigation;
import org.jboss.hal.ballroom.autocomplete.StaticAutoComplete;
import org.jboss.hal.ballroom.form.Form;
import org.jboss.hal.ballroom.form.FormItem;
import org.jboss.hal.ballroom.table.Api;
import org.jboss.hal.core.mbui.MbuiContext;
import org.jboss.hal.core.mbui.MbuiViewImpl;
import org.jboss.hal.core.mbui.table.NamedNodeTable;
import org.jboss.hal.dmr.ModelNode;
import org.jboss.hal.dmr.dispatch.ResponseHeader;
import org.jboss.hal.dmr.model.Composite;
import org.jboss.hal.dmr.model.CompositeResult;
import org.jboss.hal.dmr.model.NamedNode;
import org.jboss.hal.dmr.model.Operation;
import org.jboss.hal.dmr.model.ResourceAddress;
import org.jboss.hal.spi.MbuiElement;
import org.jboss.hal.spi.MbuiView;

import static java.util.stream.Collectors.toList;
import static org.jboss.hal.client.configuration.subsystem.undertow.AddressTemplates.HOST_TEMPLATE;
import static org.jboss.hal.dmr.ModelDescriptionConstants.*;
import static org.jboss.hal.dmr.ModelNodeHelper.asNamedNodes;
import static org.jboss.hal.dmr.ModelNodeHelper.failSafePropertyList;

/**
 * @author Harald Pehl
 */
@MbuiView
@SuppressWarnings({"DuplicateStringLiteralInspection", "HardCodedStringLiteral"})
public abstract class FilterView extends MbuiViewImpl<FilterPresenter>
        implements FilterPresenter.MyView {

    public static FilterView create(final MbuiContext mbuiContext) {
        return new Mbui_FilterView(mbuiContext);
    }

    @MbuiElement("undertow-filter-vertical-navigation") VerticalNavigation navigation;
    @MbuiElement("undertow-custom-filter-table") NamedNodeTable<NamedNode> customFilterTable;
    @MbuiElement("undertow-custom-filter-form") Form<NamedNode> customFilterForm;
    @MbuiElement("undertow-error-page-table") NamedNodeTable<NamedNode> errorPageTable;
    @MbuiElement("undertow-error-page-form") Form<NamedNode> errorPageForm;
    @MbuiElement("undertow-expression-filter-table") NamedNodeTable<NamedNode> expressionFilterTable;
    @MbuiElement("undertow-expression-filter-form") Form<NamedNode> expressionFilterForm;
    @MbuiElement("undertow-gzip-table") NamedNodeTable<NamedNode> gzipTable;
    @MbuiElement("undertow-gzip-form") Form<NamedNode> gzipForm;
    @MbuiElement("undertow-mod-cluster-table") NamedNodeTable<NamedNode> modClusterTable;
    @MbuiElement("undertow-mod-cluster-form") Form<NamedNode> modClusterForm;
    @MbuiElement("undertow-request-limit-table") NamedNodeTable<NamedNode> requestLimitTable;
    @MbuiElement("undertow-request-limit-form") Form<NamedNode> requestLimitForm;
    @MbuiElement("undertow-response-header-table") NamedNodeTable<NamedNode> responseHeaderTable;
    @MbuiElement("undertow-response-header-form") Form<NamedNode> responseHeaderForm;
    @MbuiElement("undertow-rewrite-table") NamedNodeTable<NamedNode> rewriteTable;
    @MbuiElement("undertow-rewrite-form") Form<NamedNode> rewriteForm;

    FilterView(final MbuiContext mbuiContext) {
        super(mbuiContext);
    }

    @PostConstruct
    void init() {
        List<String> responseHeader = Arrays.stream(ResponseHeader.values())
                .map(ResponseHeader::header)
                .collect(toList());
        responseHeaderForm.getFormItem(HEADER_NAME).registerSuggestHandler(new StaticAutoComplete(responseHeader));
        clearHostFields();
    }

    private void clearHostFields() {
        customFilterForm.getFormItem(HOSTS).setEnabled(false);
        errorPageForm.getFormItem(HOSTS).setEnabled(false);
        expressionFilterForm.getFormItem(HOSTS).setEnabled(false);
        gzipForm.getFormItem(HOSTS).setEnabled(false);
        modClusterForm.getFormItem(HOSTS).setEnabled(false);
        requestLimitForm.getFormItem(HOSTS).setEnabled(false);
        responseHeaderForm.getFormItem(HOSTS).setEnabled(false);
        rewriteForm.getFormItem(HOSTS).setEnabled(false);
    }

    @Override
    public void attach() {
        super.attach();
        customFilterTable.api().onSelectionChange(api -> updateHostRefs(api, customFilterForm));
        errorPageTable.api().onSelectionChange(api -> updateHostRefs(api, errorPageForm));
        expressionFilterTable.api().onSelectionChange(api -> updateHostRefs(api, expressionFilterForm));
        gzipTable.api().onSelectionChange(api -> updateHostRefs(api, gzipForm));
        modClusterTable.api().onSelectionChange(api -> updateHostRefs(api, modClusterForm));
        requestLimitTable.api().onSelectionChange(api -> updateHostRefs(api, requestLimitForm));
        responseHeaderTable.api().onSelectionChange(api -> updateHostRefs(api, responseHeaderForm));
        rewriteTable.api().onSelectionChange(api -> updateHostRefs(api, rewriteForm));
    }

    @SuppressWarnings("ConstantConditions")
    private void updateHostRefs(final Api<NamedNode> api, final Form<NamedNode> form) {
        FormItem<String> formItem = form.getFormItem(HOSTS);
        if (formItem != null) {
            if (api.hasSelection()) {
                ResourceAddress filterRefAddress = HOST_TEMPLATE.append(FILTER_REF + "=" + api.selectedRow().getName())
                        .resolve(mbuiContext.statementContext());
                Operation filterRefOp = new Operation.Builder(READ_RESOURCE_OPERATION, filterRefAddress).build();
                ResourceAddress locationFilterRefAddress = HOST_TEMPLATE
                        .append(LOCATION + "=*")
                        .append(FILTER_REF + "=" + api.selectedRow().getName())
                        .resolve(mbuiContext.statementContext());
                Operation locationFilterRefOp = new Operation.Builder(READ_RESOURCE_OPERATION, locationFilterRefAddress)
                        .build();

                mbuiContext.dispatcher().execute(new Composite(filterRefOp, locationFilterRefOp),
                        (CompositeResult result) -> {
                            SortedSet<String> hosts = new TreeSet<>();
                            result.step(0).get(RESULT).asList().stream()
                                    .map(node -> {
                                        ResourceAddress adr = new ResourceAddress(node.get(ADDRESS));
                                        ResourceAddress host = adr.getParent();
                                        ResourceAddress server = host.getParent();
                                        return server.lastValue() + "/" + host.lastValue();
                                    })
                                    .forEach(hosts::add);
                            result.step(1).get(RESULT).asList().stream()
                                    .map(node -> {
                                        ResourceAddress adr = new ResourceAddress(node.get(ADDRESS));
                                        ResourceAddress host = adr.getParent().getParent();
                                        ResourceAddress server = host.getParent();
                                        return server.lastValue() + "/" + host.lastValue();
                                    })
                                    .forEach(hosts::add);
                            formItem.setValue(String.join(", ", hosts));
                        },
                        (op1, failure) -> formItem.clearValue());
            } else {
                formItem.clearValue();
            }
        }
    }

    @Override
    public void update(final ModelNode modelNode) {
        clearHostFields();

        customFilterForm.clear();
        customFilterTable.update(asNamedNodes(failSafePropertyList(modelNode, "custom-filter")));
        errorPageForm.clear();
        errorPageTable.update(asNamedNodes(failSafePropertyList(modelNode, "error-page")));
        expressionFilterForm.clear();
        expressionFilterTable.update(asNamedNodes(failSafePropertyList(modelNode, "expression-filter")));
        gzipTable.update(asNamedNodes(failSafePropertyList(modelNode, "gzip")));
        modClusterForm.clear();
        modClusterTable.update(asNamedNodes(failSafePropertyList(modelNode, "mod-cluster")));
        requestLimitForm.clear();
        requestLimitTable.update(asNamedNodes(failSafePropertyList(modelNode, "request-limit")));
        responseHeaderForm.clear();
        responseHeaderTable.update(asNamedNodes(failSafePropertyList(modelNode, "response-header")));
        rewriteForm.clear();
        rewriteTable.update(asNamedNodes(failSafePropertyList(modelNode, "rewrite")));
    }

    void noop() {
        // noop
    }
}