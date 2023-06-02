/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements.
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */
var __kbnBundles__=typeof __kbnBundles__==="object"?__kbnBundles__:{};__kbnBundles__["plugin/cloud"]=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="__REPLACE_WITH_PUBLIC_PATH__";return __webpack_require__(__webpack_require__.s=6966)}({6966:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.plugin=plugin;Object.defineProperty(exports,"CloudSetup",{enumerable:true,get:function get(){return _plugin.CloudSetup}});var _plugin=__webpack_require__(6967);function plugin(initializerContext){return new _plugin.CloudPlugin(initializerContext)}},6967:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CloudPlugin=void 0;var _is_cloud_enabled=__webpack_require__(6968);var _constants=__webpack_require__(6969);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var CloudPlugin=function(){function CloudPlugin(initializerContext){_classCallCheck(this,CloudPlugin);this.initializerContext=initializerContext}_createClass(CloudPlugin,[{key:"setup",value:function setup(core,_ref){var home,_this$initializerCont,id,isCloudEnabled;return regeneratorRuntime.async((function setup$(_context){while(1){switch(_context.prev=_context.next){case 0:home=_ref.home;_this$initializerCont=this.initializerContext.config.get(),id=_this$initializerCont.id;isCloudEnabled=(0,_is_cloud_enabled.getIsCloudEnabled)(id);if(home){home.environment.update({cloud:isCloudEnabled});if(isCloudEnabled){home.tutorials.setVariable("cloud",{id:id})}}return _context.abrupt("return",{cloudId:id,isCloudEnabled:isCloudEnabled});case 5:case"end":return _context.stop()}}}),null,this)}},{key:"start",value:function start(coreStart){coreStart.chrome.setHelpSupportUrl(_constants.ELASTIC_SUPPORT_LINK)}}]);return CloudPlugin}();exports.CloudPlugin=CloudPlugin},6968:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.getIsCloudEnabled=getIsCloudEnabled;function getIsCloudEnabled(cloudId){return typeof cloudId==="string"}},6969:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ELASTIC_SUPPORT_LINK=exports.KIBANA_CLOUD_STATS_TYPE=void 0;var KIBANA_CLOUD_STATS_TYPE="cloud";exports.KIBANA_CLOUD_STATS_TYPE=KIBANA_CLOUD_STATS_TYPE;var ELASTIC_SUPPORT_LINK="https://support.elastic.co/";exports.ELASTIC_SUPPORT_LINK=ELASTIC_SUPPORT_LINK}})["plugin"];