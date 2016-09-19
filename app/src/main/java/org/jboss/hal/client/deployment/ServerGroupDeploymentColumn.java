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
package org.jboss.hal.client.deployment;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;
import javax.inject.Provider;

import com.google.common.collect.Lists;
import com.google.web.bindery.event.shared.EventBus;
import elemental.client.Browser;
import elemental.dom.Element;
import org.jboss.gwt.flow.Async;
import org.jboss.gwt.flow.Function;
import org.jboss.gwt.flow.FunctionContext;
import org.jboss.gwt.flow.Outcome;
import org.jboss.gwt.flow.Progress;
import org.jboss.hal.ballroom.js.JsHelper;
import org.jboss.hal.ballroom.wizard.Wizard;
import org.jboss.hal.client.deployment.DeploymentFunctions.AddServerGroupDeployment;
import org.jboss.hal.client.deployment.DeploymentFunctions.CheckDeployment;
import org.jboss.hal.client.deployment.DeploymentFunctions.LoadDeploymentsFromRunningServer;
import org.jboss.hal.client.deployment.DeploymentFunctions.ReadServerGroupDeployments;
import org.jboss.hal.client.deployment.DeploymentFunctions.UploadOrReplace;
import org.jboss.hal.client.deployment.wizard.NamesStep;
import org.jboss.hal.client.deployment.wizard.UploadContext;
import org.jboss.hal.client.deployment.wizard.UploadDeploymentStep;
import org.jboss.hal.client.deployment.wizard.UploadState;
import org.jboss.hal.config.Environment;
import org.jboss.hal.core.finder.ColumnAction;
import org.jboss.hal.core.finder.ColumnActionFactory;
import org.jboss.hal.core.finder.Finder;
import org.jboss.hal.core.finder.FinderColumn;
import org.jboss.hal.core.finder.ItemAction;
import org.jboss.hal.core.finder.ItemActionFactory;
import org.jboss.hal.core.finder.ItemDisplay;
import org.jboss.hal.core.mvp.Places;
import org.jboss.hal.core.runtime.TopologyFunctions.RunningServersQuery;
import org.jboss.hal.dmr.ModelNode;
import org.jboss.hal.dmr.dispatch.Dispatcher;
import org.jboss.hal.meta.AddressTemplate;
import org.jboss.hal.meta.Metadata;
import org.jboss.hal.meta.MetadataRegistry;
import org.jboss.hal.meta.StatementContext;
import org.jboss.hal.resources.Icons;
import org.jboss.hal.resources.Ids;
import org.jboss.hal.resources.Names;
import org.jboss.hal.resources.Resources;
import org.jboss.hal.spi.AsyncColumn;
import org.jboss.hal.spi.Footer;
import org.jboss.hal.spi.Requires;

import static org.jboss.hal.client.deployment.ServerGroupDeploymentColumn.SERVER_GROUP_DEPLOYMENT_ADDRESS;
import static org.jboss.hal.client.deployment.wizard.UploadState.NAMES;
import static org.jboss.hal.client.deployment.wizard.UploadState.UPLOAD;
import static org.jboss.hal.dmr.ModelDescriptionConstants.DISABLED;
import static org.jboss.hal.dmr.ModelDescriptionConstants.ENABLED;
import static org.jboss.hal.dmr.ModelDescriptionConstants.SERVER_GROUP;
import static org.jboss.hal.resources.CSS.pfIcon;

/**
 * The deployments of a server group.
 *
 * @author Harald Pehl
 */
@AsyncColumn(Ids.SERVER_GROUP_DEPLOYMENT)
@Requires(SERVER_GROUP_DEPLOYMENT_ADDRESS)
public class ServerGroupDeploymentColumn extends FinderColumn<ServerGroupDeployment> {

    static final String SERVER_GROUP_DEPLOYMENT_ADDRESS = "/server-group=*/deployment=*";
    static final AddressTemplate SERVER_GROUP_DEPLOYMENT_TEMPLATE = AddressTemplate.of(SERVER_GROUP_DEPLOYMENT_ADDRESS);

    private final Environment environment;
    private final Dispatcher dispatcher;
    private final StatementContext statementContext;
    private final MetadataRegistry metadataRegistry;
    private final Provider<Progress> progress;
    private final Resources resources;

    @Inject
    public ServerGroupDeploymentColumn(final Finder finder,
            final ColumnActionFactory columnActionFactory,
            final ItemActionFactory itemActionFactory,
            final Environment environment,
            final EventBus eventBus,
            final Dispatcher dispatcher,
            final Places places,
            final StatementContext statementContext,
            final MetadataRegistry metadataRegistry,
            final @Footer Provider<Progress> progress,
            final Resources resources) {

        super(new FinderColumn.Builder<ServerGroupDeployment>(finder, Ids.SERVER_GROUP_DEPLOYMENT, Names.DEPLOYMENT)
                .pinnable()
                .showCount()
                .withFilter());

        this.environment = environment;
        this.dispatcher = dispatcher;
        this.statementContext = statementContext;
        this.metadataRegistry = metadataRegistry;
        this.progress = progress;
        this.resources = resources;

        List<ColumnAction<ServerGroupDeployment>> addActions = new ArrayList<>();
        addActions.add(new ColumnAction<>(Ids.SERVER_GROUP_DEPLOYMENT_UPLOAD, resources.constants().uploadDeployment(),
                column -> uploadDeployment()));
        addActions.add(new ColumnAction<>(Ids.SERVER_GROUP_DEPLOYMENT_ADD, resources.constants().deployContent(),
                column -> addDeployment()));
        addActions.add(new ColumnAction<>(Ids.SERVER_GROUP_DEPLOYMENT_UNMANAGED_ADD,
                resources.messages().addResourceTitle(Names.UNMANAGED_DEPLOYMENT),
                column -> addUnmanaged()));
        addColumnActions(Ids.SERVER_GROUP_DEPLOYMENT_ADD_ACTIONS, pfIcon("add-circle-o"), resources.constants().add(),
                addActions);
        addColumnAction(columnActionFactory.refresh(Ids.SERVER_GROUP_DEPLOYMENT_REFRESH));

        setItemsProvider((context, callback) -> {

            List<Function<FunctionContext>> functions = Lists.newArrayList(
                    new ReadServerGroupDeployments(environment, dispatcher, statementContext.selectedServerGroup()),
                    new RunningServersQuery(environment, dispatcher,
                            new ModelNode().set(SERVER_GROUP, statementContext.selectedServerGroup())),
                    new LoadDeploymentsFromRunningServer(environment, dispatcher));

            new Async<FunctionContext>(progress.get()).waterfall(new FunctionContext(),
                    new Outcome<FunctionContext>() {
                        @Override
                        public void onFailure(final FunctionContext context) {
                            callback.onFailure(context.getError());
                        }

                        @Override
                        public void onSuccess(final FunctionContext context) {
                            List<ServerGroupDeployment> serverGroupDeployments = context
                                    .get(DeploymentFunctions.SERVER_GROUP_DEPLOYMENTS);
                            callback.onSuccess(serverGroupDeployments);
                        }
                    }, functions.toArray(new Function[functions.size()]));

        });

        setItemRenderer(item -> new ItemDisplay<ServerGroupDeployment>() {
            @Override
            public String getId() {
                return Ids.serverGroupDeployment(statementContext.selectedServerGroup(), item.getName());
            }

            @Override
            public String getTitle() {
                return item.getName();
            }

            @Override
            public String getTooltip() {
                if (item.getDeployment() != null && item.getDeployment()
                        .getStatus() == Deployment.Status.FAILED) {
                    return resources.constants().failed();
                } else {
                    return item.isEnabled() ? resources.constants().enabled() : resources.constants()
                            .disabled();
                }
            }

            @Override
            public Element getIcon() {
                if (item.getDeployment() != null && item.getDeployment()
                        .getStatus() == Deployment.Status.FAILED) {
                    return Icons.unknown();
                } else {
                    return item.isEnabled() ? Icons.ok() : Icons.disabled();
                }
            }

            @Override
            public String getFilterData() {
                return item.getName() + " " + (item.isEnabled() ? ENABLED : DISABLED);
            }

            @Override
            public List<ItemAction<ServerGroupDeployment>> actions() {
                List<ItemAction<ServerGroupDeployment>> actions = new ArrayList<>();
                if (item.isEnabled()) {
                    actions.add(new ItemAction<>(resources.constants().disable(), itm -> disable(itm)));
                } else {
                    actions.add(new ItemAction<>(resources.constants().enable(), itm -> enable(itm)));
                }
                AddressTemplate template = SERVER_GROUP_DEPLOYMENT_TEMPLATE
                        .replaceWildcards(statementContext.selectedServerGroup());
                actions.add(itemActionFactory.remove(Names.DEPLOYMENT, item.getName(), template,
                        ServerGroupDeploymentColumn.this));
                return actions;
            }
        });

        setPreviewCallback(item -> new ServerGroupDeploymentPreview(this, item, places, resources));

        if (JsHelper.supportsAdvancedUpload()) {
            setOnDrop(event -> DeploymentFunctions.uploadAndDeploy(this, environment, dispatcher, eventBus, progress,
                    event.dataTransfer.files, statementContext.selectedServerGroup(), resources));
        }
    }

    private void uploadDeployment() {
        Metadata metadata = metadataRegistry.lookup(SERVER_GROUP_DEPLOYMENT_TEMPLATE);
        Wizard<UploadContext, UploadState> wizard = new Wizard.Builder<UploadContext, UploadState>(
                resources.messages().addResourceTitle(resources.constants().content()), new UploadContext())

                .addStep(UPLOAD, new UploadDeploymentStep(resources))
                .addStep(NAMES, new NamesStep(metadata, resources))

                .onBack((context, currentState) -> currentState == NAMES ? UPLOAD : null)
                .onNext((context, currentState) -> currentState == UPLOAD ? NAMES : null)

                .stayOpenAfterFinish()
                .onFinish((wzd, context) -> {
                    String name = context.name;
                    String runtimeName = context.runtimeName;
                    wzd.showProgress(resources.constants().deploymentInProgress(),
                            resources.messages().deploymentInProgress(name));

                    Function[] functions = {
                            new CheckDeployment(dispatcher, name),
                            new UploadOrReplace(environment, dispatcher, name, runtimeName, context.file, false),
                            new AddServerGroupDeployment(environment, dispatcher, name, runtimeName,
                                    statementContext.selectedServerGroup())
                    };
                    new Async<FunctionContext>(progress.get()).waterfall(new FunctionContext(),
                            new Outcome<FunctionContext>() {
                                @Override
                                public void onFailure(final FunctionContext functionContext) {
                                    wzd.showError(resources.constants().deploymentError(),
                                            resources.messages().deploymentError(name),
                                            functionContext.getErrorMessage());
                                }

                                @Override
                                public void onSuccess(final FunctionContext functionContext) {
                                    refresh(Ids.serverGroupDeployment(statementContext.selectedServerGroup(), name));
                                    wzd.showSuccess(resources.constants().deploymentSuccessful(),
                                            resources.messages().deploymentSuccessful(name),
                                            resources.messages().view(Names.DEPLOYMENT),
                                            cxt -> { /* nothing to do, content is already selected */ });
                                }
                            }, functions);
                })
                .build();
        wizard.show();
    }

    private void addDeployment() {
        Browser.getWindow().alert(Names.NYI);
    }

    private void addUnmanaged() {
        Browser.getWindow().alert(Names.NYI);
    }

    void enable(ServerGroupDeployment sgd) {
        Browser.getWindow().alert(Names.NYI);
    }

    void disable(ServerGroupDeployment sgd) {
        Browser.getWindow().alert(Names.NYI);
    }
}
