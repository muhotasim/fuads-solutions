(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{42:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var _=0;_<t.length;_++){var a=t[_];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,_){return t&&_defineProperties(e.prototype,t),_&&_defineProperties(e,_),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var _,a=_getPrototypeOf(e);if(t){var l=_getPrototypeOf(this).constructor;_=Reflect.construct(a,arguments,l)}else _=a.apply(this,arguments);return _possibleConstructorReturn(this,_)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},Dashboard=function(_React$Component){_inherits(Dashboard,_React$Component);var _super=_createSuper(Dashboard);function Dashboard(e){var t;return _classCallCheck(this,Dashboard),(t=_super.call(this,e)).state={projects:[],defaultOption:"all"},t}return _createClass(Dashboard,[{key:"componentDidMount",value:function(){var e=this;fetch(window.origin+"/projects.json").then((function(e){return e.json()})).then((function(t){e.setState({projects:t})}))}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section",id:"about"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"section-headline"},"ABOUT"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center ",style:{padding:"20%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"indecator-icon-holder",style:{fontSize:"36px"}}," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"fa fa-fighter-jet"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Fast"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Fast load times and lag free interaction, my highest priority.")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center",style:{padding:"20%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"indecator-icon-holder",style:{fontSize:"36px"}}," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"fa fa-arrows-alt"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Responsive"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"My layouts will work on any device, big or small.")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center",style:{padding:"20%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"indecator-icon-holder",style:{fontSize:"36px"}}," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"fa fa-users"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Intuitive"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Strong preference for easy to use, intuitive UX/UI.")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text-center",style:{padding:"20%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"indecator-icon-holder",style:{fontSize:"36px"}}," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"fa fa-table"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Dynamic"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Websites don't have to be static, I love making pages come to life."))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{marginTop:"10%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},[{label:"HTML",width:"90%"},{label:"CSS",width:"90%"},{label:"REACT",width:"90%"},{label:"REACT NATIVE",width:"70%"},{label:"JAVASCRIPT",width:"90%"},{label:"EXPRESS",width:"70%"},{label:"NODE JS",width:"65%"},{label:"PHP",width:"70%"}].map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-12"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-2"},e.label),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-10"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"progress",style:{height:"20px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"progress-bar pg-color",role:"progressbar",style:{width:e.width},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})))))})))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"section",id:"portfolio"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"section-headline"},"Projects"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"portfolio-menu"},[{label:"All",value:"all"},{label:"Node js",value:"nodejs"},{label:"PHP",value:"php"},{label:"React",value:"react"},{label:"React Native",value:"rn"}].map((function(t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{className:"portfolio-menu-item",onClick:function(_){e.setState({defaultOption:t.value})}},t.label)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"clearfix"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,this.state.projects.filter((function(t){return"all"==e.state.defaultOption||t.val==e.state.defaultOption})).map((function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"portfolio-holder",style:{backgroundImage:"url("+e.img+")",height:"300px",width:"33.33%"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"card-info"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{display:"block"}},e.label),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"btn btn-md btn-readmore"},"Read More"))))})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:"clearfix"})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{style:{paddingTop:"15%",paddingBottom:"15%"},id:"contact"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"section-headline",style:{color:"white"}}," Contact"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col-md-6 offset-md-3"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{placeholder:"Name",className:"form-control",type:"text"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{placeholder:"Email",className:"form-control",type:"text"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea",{rows:6,placeholder:"Message",className:"form-control",type:"text"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"btn btn-lg  btn-send float-right",style:{backgroundColor:"transparent"}},"Send"))))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{style:{minHeight:"30vh",backgroundColor:"#192738",color:"deeppink",fontSize:"28px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:"social"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"fa fa-facebook-square"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"fa fa-envelope-open"}))," "),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"  ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"fa fa-linkedin"}))," ")))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Dashboard}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),_default=Dashboard,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(Dashboard,"Dashboard","C:\\Users\\Fuad\\Desktop\\fuads-solutions\\src\\components\\Dashboard\\index.jsx"),reactHotLoader.register(_default,"default","C:\\Users\\Fuad\\Desktop\\fuads-solutions\\src\\components\\Dashboard\\index.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(7)(module))}}]);