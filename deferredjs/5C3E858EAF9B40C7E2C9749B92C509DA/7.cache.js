$wnd.hal.runAsyncCallback7("defineClass(994, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction InterfacePresenter(eventBus, view, proxy, finder, dispatcher, statementContext, operationFactory, resources){\n  $clinit_InterfacePresenter();\n  MbuiPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_838();\n  this.dispatcher = dispatcher;\n  this.statementContext = statementContext;\n  this.operationFactory = operationFactory;\n  this.resources = resources;\n}\n\ndefineClass(484, 106, {57:1, 47:1, 1:1, 32:1, 30:1, 484:1, 106:1, 157:1, 104:1}, InterfacePresenter);\n_.$init_838 = function $init_838(){\n}\n;\n_.lambda$0_39 = function lambda$0_77(result_0){\n  $clinit_InterfacePresenter();\n  castTo(this.getView(), 748).update_6(result_0);\n}\n;\n_.lambda$1_20 = function lambda$1_37(result_0){\n  $clinit_InterfacePresenter();\n  {\n    fire_18(this.getEventBus(), success_6(this.resources.messages_0().modifyResourceSuccess('Interface', this.interfce)));\n    this.reload_0();\n  }\n}\n;\n_.finderPath = function finderPath_0(){\n  return (new FinderPath).append_17('configuration', asId('Interfaces'), 'Configuration', 'Interfaces').append_17('interface', this.interfce, 'Interface', this.interfce);\n}\n;\n_.onBind = function onBind_3(){\n  getClassPrototype(91).onBind.call(this);\n  castTo(this.getView(), 748).setPresenter(this);\n}\n;\n_.prepareFromRequest = function prepareFromRequest_4(request){\n  getClassPrototype(154).prepareFromRequest.call(this, request);\n  this.interfce = request.getParameter_0('name', null);\n}\n;\n_.reload_0 = function reload_0(){\n  var address, operation;\n  address = ROOT_TEMPLATE_0.resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.interfce]));\n  operation = (new Operation$Builder('read-resource', address)).build_15();\n  this.dispatcher.execute_12(operation, new InterfacePresenter$lambda$0$Type(this));\n}\n;\n_.resourceAddress = function resourceAddress_0(){\n  return ROOT_TEMPLATE_0.resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.interfce]));\n}\n;\n_.saveInterface = function saveInterface(form_0, changedValues){\n  var composite;\n  composite = this.operationFactory.fromChangeSet(ROOT_TEMPLATE_0.resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [this.interfce])), changedValues);\n  this.dispatcher.execute_10(composite, new InterfacePresenter$lambda$1$Type(this));\n}\n;\nvar Lorg_jboss_hal_client_configuration_InterfacePresenter_2_classLit = createForClass('org.jboss.hal.client.configuration', 'InterfacePresenter', 484, Lorg_jboss_hal_core_mbui_MbuiPresenter_2_classLit);\nfunction $clinit_InterfacePresenter$MyView(){\n  $clinit_InterfacePresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_InterfacePresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration', 'InterfacePresenter/MyView');\nfunction $clinit_InterfacePresenter$lambda$0$Type(){\n  $clinit_InterfacePresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction InterfacePresenter$lambda$0$Type($$outer_0){\n  $clinit_InterfacePresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1189, 1, {1:1, 25:1}, InterfacePresenter$lambda$0$Type);\n_.onSuccess_0 = function onSuccess_53(arg0){\n  this.$$outer_0.lambda$0_39(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_InterfacePresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'InterfacePresenter/lambda$0$Type', 1189, Ljava_lang_Object_2_classLit);\nfunction $clinit_InterfacePresenter$lambda$1$Type(){\n  $clinit_InterfacePresenter$lambda$1$Type = emptyMethod;\n}\n\nfunction InterfacePresenter$lambda$1$Type($$outer_0){\n  $clinit_InterfacePresenter$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1190, 1, {1:1, 74:1}, InterfacePresenter$lambda$1$Type);\n_.onSuccess_0 = function onSuccess_54(arg0){\n  this.$$outer_0.lambda$1_20(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_InterfacePresenter$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'InterfacePresenter/lambda$1$Type', 1190, Ljava_lang_Object_2_classLit);\nfunction $clinit_InterfaceView(){\n  $clinit_InterfaceView = emptyMethod;\n  $clinit_MbuiViewImpl();\n  $clinit_HalView();\n}\n\nfunction InterfaceView(mbuiContext){\n  $clinit_InterfaceView();\n  MbuiViewImpl.call(this, mbuiContext);\n  this.$init_842();\n}\n\nfunction create_16(mbuiContext){\n  $clinit_InterfaceView();\n  return new Mbui_InterfaceView(mbuiContext);\n}\n\ndefineClass(2765, 164, {1:1, 32:1, 30:1, 748:1, 52:1});\n_.$init_842 = function $init_842(){\n}\n;\n_.update_6 = function update_12(interfce){\n  this.form_0.view_0(interfce);\n}\n;\nvar Lorg_jboss_hal_client_configuration_InterfaceView_2_classLit = createForClass('org.jboss.hal.client.configuration', 'InterfaceView', 2765, Lorg_jboss_hal_core_mbui_MbuiViewImpl_2_classLit);\nfunction $clinit_Mbui_InterfaceView(){\n  $clinit_Mbui_InterfaceView = emptyMethod;\n  $clinit_InterfaceView();\n}\n\nfunction Mbui_InterfaceView(mbuiContext){\n  $clinit_Mbui_InterfaceView();\n  var layoutBuilder, metadata0Template, root;\n  InterfaceView.call(this, mbuiContext);\n  this.$init_843();\n  metadata0Template = of_14('/interface=*');\n  this.metadata0 = castTo(mbuiContext.metadataRegistry_1().lookup_1(metadata0Template), 27);\n  this.handlebarElements = new HashMap;\n  this.form_0 = (new ModelNodeForm$Builder('interface-form', this.metadata0)).onSave_0(new Mbui_InterfaceView$lambda$0$Type(this)).build_14();\n  layoutBuilder = castTo(castTo(castTo(castTo(castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().div_0(), 9).innerHtml(fromSafeConstant('<h1>Interface<\\/h1><p>{{metadata0.getDescription().getDescription()}}<\\/p>')), 9).rememberAs('html0'), 9).end(), 9).add_12(this.form_0), 9).end(), 9).end(), 9);\n  this.handlebarElements.put_0('html0', layoutBuilder.referenceFor('html0'));\n  this.registerAttachable(this.form_0, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 11, 0, []));\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\ndefineClass(2838, 2765, {1:1, 32:1, 30:1, 748:1, 52:1}, Mbui_InterfaceView);\n_.$init_843 = function $init_843(){\n}\n;\n_.lambda$0_41 = function lambda$0_79(form_0, changedValues_1){\n  $clinit_Mbui_InterfaceView();\n  castTo(this.presenter, 484).saveInterface(form_0, changedValues_1);\n}\n;\n_.attach = function attach_15(){\n  getClassPrototype(71).attach.call(this);\n  replaceHandlebar(castToJso(this.handlebarElements.get_2('html0')), '{{metadata0.getDescription().getDescription()}}', valueOf_29(this.metadata0.getDescription_0().getDescription()));\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1InterfaceView_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_InterfaceView', 2838, Lorg_jboss_hal_client_configuration_InterfaceView_2_classLit);\nfunction $clinit_Mbui_InterfaceView$lambda$0$Type(){\n  $clinit_Mbui_InterfaceView$lambda$0$Type = emptyMethod;\n}\n\nfunction Mbui_InterfaceView$lambda$0$Type($$outer_0){\n  $clinit_Mbui_InterfaceView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2839, 1, {1:1}, Mbui_InterfaceView$lambda$0$Type);\n_.onSave = function onSave_0(arg0, arg1){\n  this.$$outer_0.lambda$0_41(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1InterfaceView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_InterfaceView/lambda$0$Type', 2839, Ljava_lang_Object_2_classLit);\nfunction $clinit_Mbui_InterfaceView_Provider(){\n  $clinit_Mbui_InterfaceView_Provider = emptyMethod;\n  $clinit_Object();\n}\n\nfunction Mbui_InterfaceView_Provider(mbuiContext){\n  $clinit_Mbui_InterfaceView_Provider();\n  Object_0.call(this);\n  this.$init_844();\n  this.mbuiContext = mbuiContext;\n}\n\ndefineClass(2764, 1, {1:1, 61:1}, Mbui_InterfaceView_Provider);\n_.$init_844 = function $init_844(){\n}\n;\n_.get_8 = function get_90(){\n  return this.get_22();\n}\n;\n_.get_22 = function get_91(){\n  return create_16(this.mbuiContext);\n}\n;\nvar Lorg_jboss_hal_client_configuration_Mbui_1InterfaceView_1Provider_2_classLit = createForClass('org.jboss.hal.client.configuration', 'Mbui_InterfaceView_Provider', 2764, Ljava_lang_Object_2_classLit);\ndefineClass(1014, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$MyView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$MyView$_annotation$$none$$)) {\n    result = this.get_Key$type$org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider$_annotation$$none$$().get_22();\n    this.singleton_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$MyView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$MyView$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$InterfacePresenter_org$jboss$hal$client$configuration$InterfacePresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_model().get_Key$type$org$jboss$hal$dmr$model$OperationFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider$_annotation$$none$$(){\n  var result;\n  result = this.org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider_org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider_methodInjection(this.injector.getFragment_org_jboss_hal_core_mbui().get_Key$type$org$jboss$hal$core$mbui$MbuiContext$_annotation$$none$$());\n  this.memberInject_Key$type$org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider$_annotation$$none$$(result);\n  return result;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection_______(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$InterfacePresenter_org$jboss$hal$client$configuration$InterfacePresenter_methodInjection = function org$jboss$hal$client$configuration$InterfacePresenter_org$jboss$hal$client$configuration$InterfacePresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7){\n  return new InterfacePresenter(_0, _1, _2, _3, _4, _5, _6, _7);\n}\n;\n_.org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider_org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider_methodInjection = function org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider_org$jboss$hal$client$configuration$Mbui_InterfaceView_Provider_methodInjection(_0){\n  return new Mbui_InterfaceView_Provider(_0);\n}\n;\ndefineClass(1017, 1, {58:1, 1:1});\n_.onSuccess_1 = function onSuccess_62(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$InterfacePresenter$_annotation$$none$$());\n}\n;\n$entry(onLoad)(7);\n\n//# sourceURL=hal-7.js\n")