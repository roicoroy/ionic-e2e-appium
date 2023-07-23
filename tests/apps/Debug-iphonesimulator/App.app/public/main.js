(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _providers_check_tutorial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/check-tutorial.service */ 358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






var routes = [{
  path: '',
  redirectTo: '/tutorial',
  pathMatch: 'full'
}, {
  path: 'account',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 8715)).then(function (m) {
      return m.AccountModule;
    });
  }
}, {
  path: 'support',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 4034)).then(function (m) {
      return m.SupportModule;
    });
  }
}, {
  path: 'login',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 2371)).then(function (m) {
      return m.LoginModule;
    });
  }
}, {
  path: 'signup',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 5783)).then(function (m) {
      return m.SignUpModule;
    });
  }
}, {
  path: 'app',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_tabs-page_tabs-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-page/tabs-page.module */ 8935)).then(function (m) {
      return m.TabsModule;
    });
  }
}, {
  path: 'tutorial',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_tutorial_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tutorial/tutorial.module */ 5440)).then(function (m) {
      return m.TutorialModule;
    });
  },
  canLoad: [_providers_check_tutorial_service__WEBPACK_IMPORTED_MODULE_2__.CheckTutorial]
}];
var AppRoutingModule = /*#__PURE__*/(0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 9859);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 61);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 8149);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/user-data */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 8713);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 7202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8346);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }




















function AppComponent_ion_menu_toggle_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-menu-toggle", 4)(1, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", p_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", p_r3.icon + "-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", p_r3.title, " ");
  }
}

function AppComponent_ion_list_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 1)(1, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-menu-toggle", 4)(4, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-menu-toggle", 4)(9, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ion_list_8_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}

function AppComponent_ion_list_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 1)(1, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-menu-toggle", 4)(4, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-menu-toggle", 4)(9, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Signup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Dark Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "ion-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppComponent_ion_list_9_Template_ion_toggle_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r7.dark = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.dark);
  }
}

var AppComponent = /*#__PURE__*/function () {
  function AppComponent(menu, platform, router, splashScreen, statusBar, storage, userData, swUpdate, toastCtrl) {
    (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.menu = menu;
    this.platform = platform;
    this.router = router;
    this.splashScreen = splashScreen;
    this.statusBar = statusBar;
    this.storage = storage;
    this.userData = userData;
    this.swUpdate = swUpdate;
    this.toastCtrl = toastCtrl;
    this.appPages = [{
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    }, {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    }, {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    }, {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }];
    this.loggedIn = false;
    this.dark = false;
    this.initializeApp();
  }

  (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.checkLoginStatus();
              this.listenForLoginEvents();
              this.swUpdate.available.subscribe(function (res) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var _this2 = this;

                  var toast;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.toastCtrl.create({
                          message: 'Update available!',
                          position: 'bottom',
                          buttons: [{
                            role: 'cancel',
                            text: 'Reload'
                          }]
                        });

                      case 2:
                        toast = _context.sent;
                        _context.next = 5;
                        return toast.present();

                      case 5:
                        toast.onDidDismiss().then(function () {
                          return _this2.swUpdate.activateUpdate();
                        }).then(function () {
                          return window.location.reload();
                        });

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, this);
                }));
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "initializeApp",
    value: function initializeApp() {
      var _this3 = this;

      this.platform.ready().then(function () {
        _this3.statusBar.styleDefault();

        _this3.splashScreen.hide();
      });
    }
  }, {
    key: "checkLoginStatus",
    value: function checkLoginStatus() {
      var _this4 = this;

      return this.userData.isLoggedIn().then(function (loggedIn) {
        return _this4.updateLoggedInStatus(loggedIn);
      });
    }
  }, {
    key: "updateLoggedInStatus",
    value: function updateLoggedInStatus(loggedIn) {
      var _this5 = this;

      setTimeout(function () {
        _this5.loggedIn = loggedIn;
      }, 300);
    }
  }, {
    key: "listenForLoginEvents",
    value: function listenForLoginEvents() {
      var _this6 = this;

      window.addEventListener('user:login', function () {
        _this6.updateLoggedInStatus(true);
      });
      window.addEventListener('user:signup', function () {
        _this6.updateLoggedInStatus(true);
      });
      window.addEventListener('user:logout', function () {
        _this6.updateLoggedInStatus(false);
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this7 = this;

      this.userData.logout().then(function () {
        return _this7.router.navigateByUrl('/app/tabs/schedule');
      });
    }
  }, {
    key: "openTutorial",
    value: function openTutorial() {
      this.menu.enable(false);
      this.storage.set('ion_did_tutorial', false);
      this.router.navigateByUrl('/tutorial');
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_4__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 19,
  vars: 5,
  consts: [["contentId", "main-content"], ["lines", "none"], ["autoHide", "false", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["autoHide", "false"], ["button", "", "detail", "false", 3, "click"], ["slot", "start", "name", "hammer"], ["id", "main-content"], ["routerLinkActive", "selected", "routerDirection", "root", "detail", "false", 3, "routerLink"], ["slot", "start", 3, "name"], ["routerLink", "/account", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "person"], ["routerLink", "/support", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "help"], ["slot", "start", "name", "log-out"], ["routerLink", "/login", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "log-in"], ["routerLink", "/signup", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "person-add"], ["slot", "start", "name", "moon-outline"], [3, "ngModel", "ngModelChange"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 0)(3, "ion-content")(4, "ion-list", 1)(5, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Conference ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_ion_menu_toggle_7_Template, 5, 3, "ion-menu-toggle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_ion_list_8_Template, 18, 0, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_ion_list_9_Template, 23, 1, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-list", 1)(11, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Tutorial ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_14_listener() {
        return ctx.openTutorial();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Show Tutorial");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "ion-router-outlet", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("dark-theme", ctx.dark);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.appPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    }
  },
  directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonListHeader, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet],
  styles: ["ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n/* Remove background transitions for switching themes */\n\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-left: 18px;\n  padding-right: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 450;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: #5f6368;\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\n\nion-menu.ios ion-list-header {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwyRUFBQTtBQUFGOztBQUdBLHVEQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0FBQUY7O0FBR0E7O0NBQUE7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsNEJBQUE7RUFFQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0RBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7O0VBRUUsY0FBQTtFQUFBLHlDQUFBO0FBSkY7O0FBT0E7RUFDRSxnQ0FBQTtFQUFBLDJEQUFBO0FBSkY7O0FBUUE7O0NBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsK0JBQUE7QUFORiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4vKiBSZW1vdmUgYmFja2dyb3VuZCB0cmFuc2l0aW9ucyBmb3Igc3dpdGNoaW5nIHRoZW1lcyAqL1xuaW9uLW1lbnUgaW9uLWl0ZW0ge1xuICAtLXRyYW5zaXRpb246IG5vbmU7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIE1lbnVcbiovXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcblxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcblxuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02NTAsICM1ZjYzNjgpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuXG4vKlxuICogaU9TIE1lbnVcbiovXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 71);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 61);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 8149);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ 8713);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 7202);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);


















var AppModule = /*#__PURE__*/(0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar],
  imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_13__.IonicStorageModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production
  })]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_13__.IonicStorageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 358:
/*!*****************************************************!*\
  !*** ./src/app/providers/check-tutorial.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckTutorial": function() { return /* binding */ CheckTutorial; }
/* harmony export */ });
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 8713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);







var CheckTutorial = /*#__PURE__*/function () {
  function CheckTutorial(storage, router) {
    (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CheckTutorial);

    this.storage = storage;
    this.router = router;
  }

  (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CheckTutorial, [{
    key: "canLoad",
    value: function canLoad() {
      var _this = this;

      return this.storage.get('ion_did_tutorial').then(function (res) {
        if (res) {
          _this.router.navigate(['/app', 'tabs', 'schedule']);

          return false;
        } else {
          return true;
        }
      });
    }
  }]);

  return CheckTutorial;
}();

CheckTutorial.ɵfac = function CheckTutorial_Factory(t) {
  return new (t || CheckTutorial)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

CheckTutorial.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CheckTutorial,
  factory: CheckTutorial.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3942:
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserData": function() { return /* binding */ UserData; }
/* harmony export */ });
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 8713);





var UserData = /*#__PURE__*/function () {
  function UserData(storage) {
    (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserData);

    this.storage = storage;
    this.favorites = [];
    this.HAS_LOGGED_IN = 'hasLoggedIn';
    this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  }

  (0,_Users_ricardobento_Documents_AUTOMATION_ionic_e2e_example_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserData, [{
    key: "hasFavorite",
    value: function hasFavorite(sessionName) {
      return this.favorites.indexOf(sessionName) > -1;
    }
  }, {
    key: "addFavorite",
    value: function addFavorite(sessionName) {
      this.favorites.push(sessionName);
    }
  }, {
    key: "removeFavorite",
    value: function removeFavorite(sessionName) {
      var index = this.favorites.indexOf(sessionName);

      if (index > -1) {
        this.favorites.splice(index, 1);
      }
    }
  }, {
    key: "login",
    value: function login(username) {
      var _this = this;

      return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
        _this.setUsername(username);

        return window.dispatchEvent(new CustomEvent('user:login'));
      });
    }
  }, {
    key: "signup",
    value: function signup(username) {
      var _this2 = this;

      return this.storage.set(this.HAS_LOGGED_IN, true).then(function () {
        _this2.setUsername(username);

        return window.dispatchEvent(new CustomEvent('user:signup'));
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this3 = this;

      return this.storage.remove(this.HAS_LOGGED_IN).then(function () {
        return _this3.storage.remove('username');
      }).then(function () {
        window.dispatchEvent(new CustomEvent('user:logout'));
      });
    }
  }, {
    key: "setUsername",
    value: function setUsername(username) {
      return this.storage.set('username', username);
    }
  }, {
    key: "getUsername",
    value: function getUsername() {
      return this.storage.get('username').then(function (value) {
        return value;
      });
    }
  }, {
    key: "isLoggedIn",
    value: function isLoggedIn() {
      return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
        return value === true;
      });
    }
  }, {
    key: "checkHasSeenTutorial",
    value: function checkHasSeenTutorial() {
      return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
        return value;
      });
    }
  }]);

  return UserData;
}();

UserData.ɵfac = function UserData_Factory(t) {
  return new (t || UserData)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage));
};

UserData.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UserData,
  factory: UserData.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 3396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 8260);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(function (err) {
  return console.log(err);
});

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4398,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		171,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(271); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map