$wnd.hal.runAsyncCallback28("defineClass(993, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\ndefineClass(249, 1, {1:1});\n_.onShow = function onShow(id_0, handler){\n  if (jsNotEquals(id_0, null)) {\n    $wnd.$(\"a[href='#\" + id_0 + \"']\").on('shown.bs.tab', handler);\n  }\n}\n;\ndefineClass(663, 1, {1:1, 11:1});\n_.setSurroundingHeight = function setSurroundingHeight(surroundingHeight){\n  this.surroundingHeight = surroundingHeight;\n  this.adjustHeight();\n}\n;\ndefineClass(735, 1, {1:1});\n_.setSurroundingHeight = function setSurroundingHeight_0(surroundingHeight){\n  this.modelBrowser.setSurroundingHeight_0(surroundingHeight);\n}\n;\nfunction $clinit_StandaloneDeploymentPresenter(){\n  $clinit_StandaloneDeploymentPresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction StandaloneDeploymentPresenter(eventBus, view, proxy, finder, finderPathFactory, dispatcher, progress, resources){\n  $clinit_StandaloneDeploymentPresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_1067();\n  this.finderPathFactory = finderPathFactory;\n  this.dispatcher = dispatcher;\n  this.progress = progress;\n  this.resources = resources;\n}\n\ndefineClass(491, 105, {57:1, 47:1, 1:1, 32:1, 30:1, 491:1, 104:1}, StandaloneDeploymentPresenter);\n_.$init_1067 = function $init_1067(){\n}\n;\n_.lambda$0_84 = function lambda$0_157(result_0){\n  $clinit_StandaloneDeploymentPresenter();\n  var d, readContentResult;\n  {\n    readContentResult = result_0.step(0).get_17('result');\n    d = new Deployment(($clinit_Server() , STANDALONE_0), result_0.step(1).get_17('result'));\n    castTo(this.getView(), 752).update_14(readContentResult, d);\n  }\n}\n;\n_.lambda$1_55 = function lambda$1_91(deployment_1, result_1){\n  $clinit_StandaloneDeploymentPresenter();\n  {\n    castTo(this.progress.get_8(), 55).finish_0();\n    this.loadDeployment_0();\n    fire_18(this.getEventBus(), success_6(this.resources.messages_0().deploymentEnabledSuccess(deployment_1)));\n  }\n}\n;\n_.enable_4 = function enable_5(deployment){\n  var address, operation;\n  address = (new ResourceAddress).add_35('deployment', deployment);\n  castTo(this.progress.get_8(), 55).reset_0();\n  castTo(this.progress.get_8(), 55).tick();\n  operation = (new Operation$Builder('deploy', address)).build_15();\n  this.dispatcher.execute_12(operation, new StandaloneDeploymentPresenter$lambda$1$Type(this, deployment));\n}\n;\n_.finderPath = function finderPath_15(){\n  return this.finderPathFactory.deployment_2(this.deployment);\n}\n;\n_.loadDeployment_0 = function loadDeployment_0(){\n  var address, browseContent, composite, readDeployment;\n  address = (new ResourceAddress).add_35('deployment', this.deployment);\n  browseContent = (new Operation$Builder('browse-content', address)).build_15();\n  readDeployment = (new Operation$Builder('read-resource', address)).param_2('include-runtime', true).build_15();\n  composite = new Composite_0(browseContent, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_dmr_model_Operation_2_classLit, 1), {4:1, 1:1, 5:1, 148:1}, 97, 0, [readDeployment]));\n  this.dispatcher.execute_10(composite, new StandaloneDeploymentPresenter$lambda$0$Type(this));\n}\n;\n_.onBind = function onBind_18(){\n  getClassPrototype(91).onBind.call(this);\n  castTo(this.getView(), 752).setPresenter(this);\n}\n;\n_.onReset = function onReset_12(){\n  getClassPrototype(105).onReset.call(this);\n  castTo(this.getView(), 752).reset_0();\n  this.loadDeployment_0();\n}\n;\n_.prepareFromRequest = function prepareFromRequest_10(request){\n  getClassPrototype(154).prepareFromRequest.call(this, request);\n  this.deployment = request.getParameter_0('deployment', null);\n}\n;\nvar Lorg_jboss_hal_client_deployment_StandaloneDeploymentPresenter_2_classLit = createForClass('org.jboss.hal.client.deployment', 'StandaloneDeploymentPresenter', 491, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_StandaloneDeploymentPresenter$MyView(){\n  $clinit_StandaloneDeploymentPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_deployment_StandaloneDeploymentPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.deployment', 'StandaloneDeploymentPresenter/MyView');\nfunction $clinit_StandaloneDeploymentPresenter$lambda$0$Type(){\n  $clinit_StandaloneDeploymentPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction StandaloneDeploymentPresenter$lambda$0$Type($$outer_0){\n  $clinit_StandaloneDeploymentPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1234, 1, {1:1, 74:1}, StandaloneDeploymentPresenter$lambda$0$Type);\n_.onSuccess_0 = function onSuccess_186(arg0){\n  this.$$outer_0.lambda$0_84(arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_StandaloneDeploymentPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'StandaloneDeploymentPresenter/lambda$0$Type', 1234, Ljava_lang_Object_2_classLit);\nfunction $clinit_StandaloneDeploymentPresenter$lambda$1$Type(){\n  $clinit_StandaloneDeploymentPresenter$lambda$1$Type = emptyMethod;\n}\n\nfunction StandaloneDeploymentPresenter$lambda$1$Type($$outer_0, deployment_1){\n  $clinit_StandaloneDeploymentPresenter$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.deployment_1 = deployment_1;\n}\n\ndefineClass(1235, 1, {1:1, 25:1}, StandaloneDeploymentPresenter$lambda$1$Type);\n_.onSuccess_0 = function onSuccess_187(arg0){\n  this.$$outer_0.lambda$1_55(this.deployment_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_deployment_StandaloneDeploymentPresenter$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'StandaloneDeploymentPresenter/lambda$1$Type', 1235, Ljava_lang_Object_2_classLit);\nfunction $clinit_StandaloneDeploymentView(){\n  $clinit_StandaloneDeploymentView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n}\n\nfunction StandaloneDeploymentView(dispatcher, modelBrowser, resources){\n  $clinit_StandaloneDeploymentView();\n  HalViewImpl.call(this);\n  this.$init_1071();\n  this.browseContent = new BrowseContentElement(dispatcher, resources, new StandaloneDeploymentView$lambda$0$Type(this));\n  this.deploymentModel = new DeploymentModelElement(modelBrowser, resources);\n  this.tabs = (new Tabs).add_13(($clinit_Ids() , CONTENT_TAB), resources.constants_0().content_5(), this.browseContent.asElement_0(), stampJavaTypeInfo(getClassLiteralForArray(Lelemental_dom_Element_2_classLit, 1), {4:1, 1:1, 5:1}, 0, 2, [])).add_14(($clinit_Ids() , DEPLOYMENT_TAB), 'Management Model', this.deploymentModel.asElements());\n  this.initElement_0(this.tabs);\n}\n\ndefineClass(1613, 71, {1:1, 32:1, 30:1, 752:1, 52:1}, StandaloneDeploymentView);\n_.$init_1071 = function $init_1071(){\n}\n;\n_.lambda$0_85 = function lambda$0_159(){\n  $clinit_StandaloneDeploymentView();\n  this.presenter.loadDeployment_0();\n}\n;\n_.lambda$1_56 = function lambda$1_93(tabsHeight_1){\n  $clinit_StandaloneDeploymentView();\n  {\n    if (!this.initialHeightAdjusted) {\n      this.deploymentModel.setSurroundingHeight(tabsHeight_1);\n      this.initialHeightAdjusted = true;\n    }\n  }\n}\n;\n_.lambda$2_43 = function lambda$2_74(deployment_1){\n  $clinit_StandaloneDeploymentView();\n  this.presenter.enable_4(deployment_1.getName());\n}\n;\n_.setPresenter = function setPresenter_13(presenter){\n  this.setPresenter_7(castTo(presenter, 491));\n}\n;\n_.attach = function attach_28(){\n  var tabsHeight, ul;\n  getClassPrototype(71).attach.call(this);\n  this.browseContent.attach();\n  ul = $querySelector_1(this.tabs.asElement_0(), 'ul.' + 'nav-tabs-hal');\n  if (isNotNull(ul)) {\n    tabsHeight = $getOffsetHeight_0(ul) + 5;\n    this.browseContent.setSurroundingHeight(tabsHeight);\n    this.deploymentModel.setSurroundingHeight(tabsHeight);\n    this.tabs.onShow(($clinit_Ids() , DEPLOYMENT_TAB), makeLambdaFunction(StandaloneDeploymentView$lambda$1$Type.prototype.onSelect_0, StandaloneDeploymentView$lambda$1$Type, [this, tabsHeight]));\n  }\n}\n;\n_.reset_0 = function reset_14(){\n  this.tabs.showTab(0);\n}\n;\n_.setPresenter_7 = function setPresenter_14(presenter){\n  this.presenter = presenter;\n}\n;\n_.update_14 = function update_28(browseContentResult, deployment){\n  this.browseContent.setContent_0(deployment.getName(), browseContentResult);\n  this.deploymentModel.update_12(deployment, new StandaloneDeploymentView$lambda$2$Type(this, deployment));\n}\n;\n_.initialHeightAdjusted = false;\nvar Lorg_jboss_hal_client_deployment_StandaloneDeploymentView_2_classLit = createForClass('org.jboss.hal.client.deployment', 'StandaloneDeploymentView', 1613, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_StandaloneDeploymentView$lambda$0$Type(){\n  $clinit_StandaloneDeploymentView$lambda$0$Type = emptyMethod;\n}\n\nfunction StandaloneDeploymentView$lambda$0$Type($$outer_0){\n  $clinit_StandaloneDeploymentView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1614, 1, {1:1}, StandaloneDeploymentView$lambda$0$Type);\n_.refresh_0 = function refresh_3(){\n  this.$$outer_0.lambda$0_85();\n}\n;\nvar Lorg_jboss_hal_client_deployment_StandaloneDeploymentView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'StandaloneDeploymentView/lambda$0$Type', 1614, Ljava_lang_Object_2_classLit);\nfunction $clinit_StandaloneDeploymentView$lambda$1$Type(){\n  $clinit_StandaloneDeploymentView$lambda$1$Type = emptyMethod;\n}\n\nfunction StandaloneDeploymentView$lambda$1$Type($$outer_0, tabsHeight_1){\n  $clinit_StandaloneDeploymentView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n  this.tabsHeight_1 = tabsHeight_1;\n}\n\ndefineClass(4137, $wnd.Function, {1:1}, StandaloneDeploymentView$lambda$1$Type);\n_.onSelect_0 = function onSelect_5(){\n  this.$$outer_0.lambda$1_56(this.tabsHeight_1);\n}\n;\n_.tabsHeight_1 = 0;\nfunction $clinit_StandaloneDeploymentView$lambda$2$Type(){\n  $clinit_StandaloneDeploymentView$lambda$2$Type = emptyMethod;\n}\n\nfunction StandaloneDeploymentView$lambda$2$Type($$outer_0, deployment_1){\n  $clinit_StandaloneDeploymentView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n  this.deployment_1 = deployment_1;\n}\n\ndefineClass(1615, 1, {1:1}, StandaloneDeploymentView$lambda$2$Type);\n_.execute_0 = function execute_171(){\n  this.$$outer_0.lambda$2_43(this.deployment_1);\n}\n;\nvar Lorg_jboss_hal_client_deployment_StandaloneDeploymentView$lambda$2$Type_2_classLit = createForClass('org.jboss.hal.client.deployment', 'StandaloneDeploymentView/lambda$2$Type', 1615, Ljava_lang_Object_2_classLit);\ndefineClass(1067, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$deployment$StandaloneDeploymentPresenter_org$jboss$hal$client$deployment$StandaloneDeploymentPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_gwt_flow().get_Key$type$com$google$inject$Provider$org$jboss$gwt$flow$Progress$$_annotation$$org$jboss$hal$spi$Footer$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$deployment$StandaloneDeploymentView_org$jboss$hal$client$deployment$StandaloneDeploymentView_methodInjection(this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_modelbrowser().get_Key$type$org$jboss$hal$core$modelbrowser$ModelBrowser$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______________________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$deployment$StandaloneDeploymentPresenter_org$jboss$hal$client$deployment$StandaloneDeploymentPresenter_methodInjection = function org$jboss$hal$client$deployment$StandaloneDeploymentPresenter_org$jboss$hal$client$deployment$StandaloneDeploymentPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new StandaloneDeploymentPresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$deployment$StandaloneDeploymentView_org$jboss$hal$client$deployment$StandaloneDeploymentView_methodInjection = function org$jboss$hal$client$deployment$StandaloneDeploymentView_org$jboss$hal$client$deployment$StandaloneDeploymentView_methodInjection(_0, _1, _2){\n  return new StandaloneDeploymentView(_0, _1, _2);\n}\n;\ndefineClass(1074, 1, {58:1, 1:1});\n_.onSuccess_1 = function onSuccess_190(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$deployment$StandaloneDeploymentPresenter$_annotation$$none$$());\n}\n;\ndefineClass(2218, 1, {1:1});\n_.setSurroundingHeight_0 = function setSurroundingHeight_1(surroundingHeight){\n  this.surroundingHeight = surroundingHeight;\n  this.adjustHeight_4();\n}\n;\n$entry(onLoad)(28);\n\n//# sourceURL=hal-28.js\n")