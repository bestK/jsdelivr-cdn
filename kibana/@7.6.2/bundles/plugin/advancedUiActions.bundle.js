/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements.
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */
var __kbnBundles__=typeof __kbnBundles__==="object"?__kbnBundles__:{};__kbnBundles__["plugin/advancedUiActions"]=function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var executeModules=data[2];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}deferredModules.push.apply(deferredModules,executeModules||[]);return checkDeferredModules()}function checkDeferredModules(){var result;for(var i=0;i<deferredModules.length;i++){var deferredModule=deferredModules[i];var fulfilled=true;for(var j=1;j<deferredModule.length;j++){var depId=deferredModule[j];if(installedChunks[depId]!==0)fulfilled=false}if(fulfilled){deferredModules.splice(i--,1);result=__webpack_require__(__webpack_require__.s=deferredModule[0])}}return result}var installedModules={};var installedChunks={18:0,24:0,29:0,32:0,39:0};var deferredModules=[];function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(){return Promise.resolve()};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="__REPLACE_WITH_PUBLIC_PATH__";var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;deferredModules.push([6946,0]);return checkDeferredModules()}({0:function(module,exports){module.exports=__kbnSharedDeps__.React},1:function(module,exports){module.exports=__kbnSharedDeps__.ElasticEui},17:function(module,exports){module.exports=vendors_3},18:function(module,exports){module.exports=__kbnSharedDeps__.ElasticEuiLightTheme},1877:function(module,exports,__webpack_require__){"use strict";function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj}}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof2(obj)}Object.defineProperty(exports,"__esModule",{value:true});exports.CustomizeTimeRangeModal=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _eui=__webpack_require__(1);var _i18n=__webpack_require__(2);var _does_inherit_time_range=__webpack_require__(1878);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return _typeof2(obj)}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj)}}return _typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach((function(key){_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var CustomizeTimeRangeModal=function(_Component){_inherits(CustomizeTimeRangeModal,_Component);function CustomizeTimeRangeModal(props){var _this;_classCallCheck(this,CustomizeTimeRangeModal);_this=_possibleConstructorReturn(this,_getPrototypeOf(CustomizeTimeRangeModal).call(this,props));_defineProperty(_assertThisInitialized(_this),"onTimeChange",(function(_ref){var start=_ref.start,end=_ref.end;_this.setState({timeRange:{from:start,to:end}})}));_defineProperty(_assertThisInitialized(_this),"cancel",(function(){_this.props.onClose()}));_defineProperty(_assertThisInitialized(_this),"onInheritToggle",(function(){_this.setState((function(prevState){return{inheritTimeRange:!prevState.inheritTimeRange}}))}));_defineProperty(_assertThisInitialized(_this),"addToPanel",(function(){var embeddable=_this.props.embeddable;embeddable.updateInput({timeRange:_this.state.timeRange});_this.props.onClose()}));_defineProperty(_assertThisInitialized(_this),"inheritFromParent",(function(){var embeddable=_this.props.embeddable;var parent=embeddable.parent;var parentPanels=parent.getInput().panels;parent.updateInput({panels:_objectSpread({},parentPanels,_defineProperty({},embeddable.id,_objectSpread({},parentPanels[embeddable.id],{explicitInput:_objectSpread({},parentPanels[embeddable.id].explicitInput,{timeRange:undefined})})))});_this.props.onClose()}));_this.state={timeRange:props.embeddable.getInput().timeRange,inheritTimeRange:(0,_does_inherit_time_range.doesInheritTimeRange)(props.embeddable)};return _this}_createClass(CustomizeTimeRangeModal,[{key:"render",value:function render(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_eui.EuiModalHeader,null,_react.default.createElement(_eui.EuiModalHeaderTitle,{"data-test-subj":"customizePanelTitle"},_i18n.i18n.translate("xpack.advancedUiActions.customizeTimeRange.modal.headerTitle",{defaultMessage:"Customize panel time range"}))),_react.default.createElement(_eui.EuiModalBody,null,_react.default.createElement(_eui.EuiFormRow,{label:_i18n.i18n.translate("xpack.advancedUiActions.customizePanelTimeRange.modal.optionsMenuForm.panelTitleFormRowLabel",{defaultMessage:"Time range"})},_react.default.createElement(_eui.EuiSuperDatePicker,{start:this.state.timeRange?this.state.timeRange.from:undefined,end:this.state.timeRange?this.state.timeRange.to:undefined,isPaused:false,onTimeChange:this.onTimeChange,showUpdateButton:false,dateFormat:this.props.dateFormat,commonlyUsedRanges:this.props.commonlyUsedRanges.map((function(_ref2){var from=_ref2.from,to=_ref2.to,display=_ref2.display;return{start:from,end:to,label:display}}))}))),_react.default.createElement(_eui.EuiModalFooter,null,_react.default.createElement(_eui.EuiFlexGroup,{gutterSize:"s",responsive:false,justifyContent:"spaceBetween"},_react.default.createElement(_eui.EuiFlexItem,{grow:true},_react.default.createElement("div",null,_react.default.createElement(_eui.EuiButtonEmpty,{onClick:this.inheritFromParent,color:"danger","data-test-subj":"removePerPanelTimeRangeButton",disabled:!this.props.embeddable.parent||this.state.inheritTimeRange,flush:"left"},_i18n.i18n.translate("xpack.advancedUiActions.customizePanelTimeRange.modal.removeButtonTitle",{defaultMessage:"Remove"})))),_react.default.createElement(_eui.EuiFlexItem,{grow:false},_react.default.createElement(_eui.EuiButtonEmpty,{onClick:this.cancel,"data-test-subj":"cancelPerPanelTimeRangeButton"},_i18n.i18n.translate("xpack.advancedUiActions.customizePanelTimeRange.modal.cancelButtonTitle",{defaultMessage:"Cancel"}))),_react.default.createElement(_eui.EuiFlexItem,{grow:false},_react.default.createElement(_eui.EuiButton,{"data-test-subj":"addPerPanelTimeRangeButton",onClick:this.addToPanel,fill:true},this.state.inheritTimeRange?_i18n.i18n.translate("xpack.advancedUiActions.customizePanelTimeRange.modal.addToPanelButtonTitle",{defaultMessage:"Add to panel"}):_i18n.i18n.translate("xpack.advancedUiActions.customizePanelTimeRange.modal.updatePanelTimeRangeButtonTitle",{defaultMessage:"Update"}))))))}}]);return CustomizeTimeRangeModal}(_react.Component);exports.CustomizeTimeRangeModal=CustomizeTimeRangeModal},1878:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.doesInheritTimeRange=doesInheritTimeRange;function doesInheritTimeRange(embeddable){if(!embeddable.parent){return false}var parent=embeddable.parent;if(!parent.getInput().panels[embeddable.id]){return false}return parent.getInput().panels[embeddable.id].explicitInput.timeRange===undefined}},2:function(module,exports){module.exports=__kbnSharedDeps__.KbnI18n},26:function(module,exports){module.exports=vendors_2},34:function(module,exports){module.exports=vendors_0},36:function(module,exports){module.exports=vendors_1},4:function(module,exports){module.exports=__kbnSharedDeps__.KbnI18nReact},50:function(module,exports){module.exports=__kbnSharedDeps__.ElasticEuiDarkTheme},6946:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.plugin=plugin;Object.defineProperty(exports,"Plugin",{enumerable:true,get:function get(){return _plugin.AdvancedUiActionsPublicPlugin}});var _plugin=__webpack_require__(6947);function plugin(initializerContext){return new _plugin.AdvancedUiActionsPublicPlugin(initializerContext)}},6947:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.AdvancedUiActionsPublicPlugin=void 0;var _public=__webpack_require__(16);var _public2=__webpack_require__(229);var _custom_time_range_action=__webpack_require__(6948);var _custom_time_range_badge=__webpack_require__(6949);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var AdvancedUiActionsPublicPlugin=function(){function AdvancedUiActionsPublicPlugin(initializerContext){_classCallCheck(this,AdvancedUiActionsPublicPlugin)}_createClass(AdvancedUiActionsPublicPlugin,[{key:"setup",value:function setup(core,_ref){var uiActions=_ref.uiActions}},{key:"start",value:function start(core,_ref2){var uiActions=_ref2.uiActions;var dateFormat=core.uiSettings.get("dateFormat");var commonlyUsedRanges=core.uiSettings.get("timepicker:quickRanges");var _createReactOverlays=(0,_public.createReactOverlays)(core),openModal=_createReactOverlays.openModal;var timeRangeAction=new _custom_time_range_action.CustomTimeRangeAction({openModal:openModal,dateFormat:dateFormat,commonlyUsedRanges:commonlyUsedRanges});uiActions.registerAction(timeRangeAction);uiActions.attachAction(_public2.CONTEXT_MENU_TRIGGER,timeRangeAction.id);var timeRangeBadge=new _custom_time_range_badge.CustomTimeRangeBadge({openModal:openModal,dateFormat:dateFormat,commonlyUsedRanges:commonlyUsedRanges});uiActions.registerAction(timeRangeBadge);uiActions.attachAction(_public2.PANEL_BADGE_TRIGGER,timeRangeBadge.id)}},{key:"stop",value:function stop(){}}]);return AdvancedUiActionsPublicPlugin}();exports.AdvancedUiActionsPublicPlugin=AdvancedUiActionsPublicPlugin},6948:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CustomTimeRangeAction=void 0;var _i18n=__webpack_require__(2);var _react=_interopRequireDefault(__webpack_require__(0));var _public=__webpack_require__(337);var _customize_time_range_modal=__webpack_require__(1877);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var CUSTOM_TIME_RANGE="CUSTOM_TIME_RANGE";var SEARCH_EMBEDDABLE_TYPE="search";function hasTimeRange(embeddable){return embeddable.getInput().timeRange!==undefined}var VISUALIZE_EMBEDDABLE_TYPE="visualization";function isVisualizeEmbeddable(embeddable){return embeddable.type===VISUALIZE_EMBEDDABLE_TYPE}var CustomTimeRangeAction=function(){function CustomTimeRangeAction(_ref){var openModal=_ref.openModal,dateFormat=_ref.dateFormat,commonlyUsedRanges=_ref.commonlyUsedRanges;_classCallCheck(this,CustomTimeRangeAction);_defineProperty(this,"type",CUSTOM_TIME_RANGE);_defineProperty(this,"openModal",void 0);_defineProperty(this,"dateFormat",void 0);_defineProperty(this,"commonlyUsedRanges",void 0);_defineProperty(this,"id",CUSTOM_TIME_RANGE);_defineProperty(this,"order",7);this.openModal=openModal;this.dateFormat=dateFormat;this.commonlyUsedRanges=commonlyUsedRanges}_createClass(CustomTimeRangeAction,[{key:"getDisplayName",value:function getDisplayName(){return _i18n.i18n.translate("xpack.advancedUiActions.customizeTimeRangeMenuItem.displayName",{defaultMessage:"Customize time range"})}},{key:"getIconType",value:function getIconType(){return"calendar"}},{key:"isCompatible",value:function isCompatible(_ref2){var embeddable,isInputControl,isMarkdown;return regeneratorRuntime.async((function isCompatible$(_context){while(1){switch(_context.prev=_context.next){case 0:embeddable=_ref2.embeddable;isInputControl=isVisualizeEmbeddable(embeddable)&&embeddable.getOutput().visTypeName==="input_control_vis";isMarkdown=isVisualizeEmbeddable(embeddable)&&embeddable.getOutput().visTypeName==="markdown";return _context.abrupt("return",Boolean(embeddable&&hasTimeRange(embeddable)&&embeddable.type!==SEARCH_EMBEDDABLE_TYPE&&!isInputControl&&!isMarkdown));case 4:case"end":return _context.stop()}}}))}},{key:"execute",value:function execute(_ref3){var embeddable,isCompatible,modalSession;return regeneratorRuntime.async((function execute$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:embeddable=_ref3.embeddable;_context2.next=3;return regeneratorRuntime.awrap(this.isCompatible({embeddable:embeddable}));case 3:isCompatible=_context2.sent;if(isCompatible){_context2.next=6;break}throw new _public.IncompatibleActionError;case 6:if(hasTimeRange(embeddable)){modalSession=this.openModal(_react.default.createElement(_customize_time_range_modal.CustomizeTimeRangeModal,{onClose:function onClose(){return modalSession.close()},embeddable:embeddable,dateFormat:this.dateFormat,commonlyUsedRanges:this.commonlyUsedRanges}))}case 7:case"end":return _context2.stop()}}}),null,this)}}]);return CustomTimeRangeAction}();exports.CustomTimeRangeAction=CustomTimeRangeAction},6949:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CustomTimeRangeBadge=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _eui=__webpack_require__(1);var _public=__webpack_require__(337);var _customize_time_range_modal=__webpack_require__(1877);var _does_inherit_time_range=__webpack_require__(1878);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var CUSTOM_TIME_RANGE_BADGE="CUSTOM_TIME_RANGE_BADGE";function hasTimeRange(embeddable){return embeddable.getInput().timeRange!==undefined}var CustomTimeRangeBadge=function(){function CustomTimeRangeBadge(_ref){var openModal=_ref.openModal,dateFormat=_ref.dateFormat,commonlyUsedRanges=_ref.commonlyUsedRanges;_classCallCheck(this,CustomTimeRangeBadge);_defineProperty(this,"type",CUSTOM_TIME_RANGE_BADGE);_defineProperty(this,"id",CUSTOM_TIME_RANGE_BADGE);_defineProperty(this,"order",7);_defineProperty(this,"openModal",void 0);_defineProperty(this,"dateFormat",void 0);_defineProperty(this,"commonlyUsedRanges",void 0);this.openModal=openModal;this.dateFormat=dateFormat;this.commonlyUsedRanges=commonlyUsedRanges}_createClass(CustomTimeRangeBadge,[{key:"getDisplayName",value:function getDisplayName(_ref2){var embeddable=_ref2.embeddable;return(0,_eui.prettyDuration)(embeddable.getInput().timeRange.from,embeddable.getInput().timeRange.to,_eui.commonDurationRanges,this.dateFormat)}},{key:"getIconType",value:function getIconType(){return"calendar"}},{key:"isCompatible",value:function isCompatible(_ref3){var embeddable;return regeneratorRuntime.async((function isCompatible$(_context){while(1){switch(_context.prev=_context.next){case 0:embeddable=_ref3.embeddable;return _context.abrupt("return",Boolean(embeddable&&hasTimeRange(embeddable)&&!(0,_does_inherit_time_range.doesInheritTimeRange)(embeddable)));case 2:case"end":return _context.stop()}}}))}},{key:"execute",value:function execute(_ref4){var embeddable,isCompatible,modalSession;return regeneratorRuntime.async((function execute$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:embeddable=_ref4.embeddable;_context2.next=3;return regeneratorRuntime.awrap(this.isCompatible({embeddable:embeddable}));case 3:isCompatible=_context2.sent;if(isCompatible){_context2.next=6;break}throw new _public.IncompatibleActionError;case 6:if(hasTimeRange(embeddable)){modalSession=this.openModal(_react.default.createElement(_customize_time_range_modal.CustomizeTimeRangeModal,{onClose:function onClose(){return modalSession.close()},embeddable:embeddable,dateFormat:this.dateFormat,commonlyUsedRanges:this.commonlyUsedRanges}))}case 7:case"end":return _context2.stop()}}}),null,this)}}]);return CustomTimeRangeBadge}();exports.CustomTimeRangeBadge=CustomTimeRangeBadge},9:function(module,exports){module.exports=__kbnSharedDeps__.ReactDom}})["plugin"];