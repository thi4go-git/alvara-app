function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/alvara.service.ts":
  /*!***********************************!*\
    !*** ./src/app/alvara.service.ts ***!
    \***********************************/

  /*! exports provided: AlvaraService */

  /***/
  function srcAppAlvaraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvaraService", function () {
      return AlvaraService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AlvaraService = /*#__PURE__*/function () {
      function AlvaraService(http) {
        _classCallCheck(this, AlvaraService);

        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/alvara";
      }

      _createClass(AlvaraService, [{
        key: "uploadPdf",
        value: function uploadPdf(formData) {
          // responseType: 'blob'
          return this.http.post(this.apiURL + '/pdf', formData, {
            responseType: 'blob'
          });
        }
      }, {
        key: "baixarArquivo",
        value: function baixarArquivo(id) {
          return this.http.get(this.apiURL + "/download/" + id);
        }
      }, {
        key: "listarTodos",
        value: function listarTodos(page, size) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
          return this.http.get(this.apiURL + "?" + params.toString());
        }
      }, {
        key: "listarTodosPorNome",
        value: function listarTodosPorNome(page, size, nome) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size).set('nome', nome);
          return this.http.get(this.apiURL + "/listarpornome?" + params.toString());
        }
      }, {
        key: "listarVencidos",
        value: function listarVencidos(page, size) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
          return this.http.get(this.apiURL + "/vencidos?" + params.toString());
        }
      }, {
        key: "listarVencerEmAte60Dias",
        value: function listarVencerEmAte60Dias(page, size) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
          return this.http.get(this.apiURL + "/vencerate60dias?" + params.toString());
        }
      }, {
        key: "listarDocumentosSemInfo",
        value: function listarDocumentosSemInfo(page, size) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
          return this.http.get(this.apiURL + "/seminfo?" + params.toString());
        }
      }, {
        key: "listarVencerApos60Dias",
        value: function listarVencerApos60Dias(page, size) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
          return this.http.get(this.apiURL + "/vencerapos60dias?" + params.toString());
        }
      }, {
        key: "obterArquivoPorId",
        value: function obterArquivoPorId(id) {
          return this.http.get(this.apiURL + "/" + id);
        }
      }, {
        key: "atualizarArquivoPorId",
        value: function atualizarArquivoPorId(alvara) {
          return this.http.put(this.apiURL + "/atualizar", alvara);
        }
      }, {
        key: "obterListaTipoDoc",
        value: function obterListaTipoDoc() {
          return this.http.get(this.apiURL + "/tipodocumento");
        } //-------------------------------------

      }, {
        key: "totalArquivos",
        value: function totalArquivos() {
          return this.http.get(this.apiURL + "/totalarquivos");
        }
      }, {
        key: "totalArquivosVencidos",
        value: function totalArquivosVencidos() {
          return this.http.get(this.apiURL + "/totalvencidos");
        }
      }, {
        key: "totalArquivosVencerEm60Dias",
        value: function totalArquivosVencerEm60Dias() {
          return this.http.get(this.apiURL + "/totalvencerem60dias");
        }
      }, {
        key: "totalArquivosSemInformacoes",
        value: function totalArquivosSemInformacoes() {
          return this.http.get(this.apiURL + "/totalseminformacoes");
        }
      }, {
        key: "totalArquivosVencerApos60Dias",
        value: function totalArquivosVencerApos60Dias() {
          return this.http.get(this.apiURL + "/totalvencerapos60dias");
        }
      }]);

      return AlvaraService;
    }();

    AlvaraService.??fac = function AlvaraService_Factory(t) {
      return new (t || AlvaraService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    AlvaraService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: AlvaraService,
      factory: AlvaraService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AlvaraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alvara/Alvara.ts":
  /*!**********************************!*\
    !*** ./src/app/alvara/Alvara.ts ***!
    \**********************************/

  /*! exports provided: Alvara */

  /***/
  function srcAppAlvaraAlvaraTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alvara", function () {
      return Alvara;
    });

    var Alvara = /*#__PURE__*/_createClass(function Alvara() {
      _classCallCheck(this, Alvara);
    });
    /***/

  },

  /***/
  "./src/app/alvara/alvara-form/alvara-form.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/alvara/alvara-form/alvara-form.component.ts ***!
    \*************************************************************/

  /*! exports provided: AlvaraFormComponent */

  /***/
  function srcAppAlvaraAlvaraFormAlvaraFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvaraFormComponent", function () {
      return AlvaraFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Alvara__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../Alvara */
    "./src/app/alvara/Alvara.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_alvara_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/alvara.service */
    "./src/app/alvara.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlvaraFormComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var erro_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erro_r4, " ");
      }
    }

    function AlvaraFormComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var tipo_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", tipo_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", tipo_r5, " ");
      }
    }

    function AlvaraFormComponent_button_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Atualizar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var AlvaraFormComponent = /*#__PURE__*/function () {
      function AlvaraFormComponent(router, service, activatedRoute, snackBar) {
        _classCallCheck(this, AlvaraFormComponent);

        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.alvara = new _Alvara__WEBPACK_IMPORTED_MODULE_1__["Alvara"]();
      }

      _createClass(AlvaraFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.definirComboBox();
          this.listarPorId();
        }
      }, {
        key: "listarPorId",
        value: function listarPorId() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (parametro) {
            if (parametro && parametro.id) {
              _this.id = parametro.id;

              _this.service.obterArquivoPorId(_this.id).subscribe(function (resposta) {
                _this.alvara = resposta;
              }, function (errorResponse) {
                console.log(errorResponse);
              });
            }
          });
        }
      }, {
        key: "definirComboBox",
        value: function definirComboBox() {
          var _this2 = this;

          this.service.obterListaTipoDoc().subscribe(function (resposta) {
            _this2.tipo_doc = resposta;
          }, function (errorResponse) {
            console.log(errorResponse);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.alvara);
          this.atualizar();
        }
      }, {
        key: "atualizar",
        value: function atualizar() {
          var _this3 = this;

          this.service.atualizarArquivoPorId(this.alvara).subscribe(function (resposta) {
            _this3.snackBar.open("SUCESSO Ao Atualizar Informa????es!", "SUCESSO!", {
              duration: 2000
            });

            _this3.router.navigate(['/alvara/lista']);
          }, function (errorResponse) {
            _this3.snackBar.open("ERRO Ao Atualizar Informa????es!", "ERRO!", {
              duration: 2000
            });

            _this3.listaErros = errorResponse.error.erros;
          });
        }
      }, {
        key: "voltarLista",
        value: function voltarLista() {
          this.router.navigate(['/alvara/lista']);
        }
      }]);

      return AlvaraFormComponent;
    }();

    AlvaraFormComponent.??fac = function AlvaraFormComponent_Factory(t) {
      return new (t || AlvaraFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_alvara_service__WEBPACK_IMPORTED_MODULE_3__["AlvaraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    AlvaraFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlvaraFormComponent,
      selectors: [["app-alvara-form"]],
      decls: 73,
      vars: 14,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"], [1, "container"], [3, "ngSubmit"], ["arquivoForm", "ngForm"], ["id", "row"], ["id", "col-md-12"], ["class", "alert alert-danger", "role", "alert", 4, "ngFor", "ngForOf"], ["id", "col-md-6"], ["id", "form-group"], ["type", "text", "disabled", "true", "name", "id", 1, "form-control", 3, "ngModel"], [1, "row"], [1, "col-md-12"], [1, "form-group"], [1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "name", "nome_arquivo", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "numero_alvara", "autoGrow", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "nome_empresa", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "cnpj_empresa", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "dataEmissao", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "dataVencimento", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "expira", "disabled", "true", 1, "form-control", 3, "ngModel"], ["type", "submit", "class", "btn btn-primary", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "ml-2", 3, "click"], [1, "fa", "fa-solid", "fa-arrow-alt-circle-left"], ["role", "alert", 1, "alert", "alert-danger"], [3, "ngValue"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-sync-alt"]],
      template: function AlvaraFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Editar Alvar\xE1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Edi\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AlvaraFormComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, AlvaraFormComponent_div_10_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Tipo Documento: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraFormComponent_Template_select_ngModelChange_24_listener($event) {
            return ctx.alvara.tipo_doc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, AlvaraFormComponent_option_25_Template, 2, 2, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Nome Arquivo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraFormComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.alvara.nome_arquivo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "N\xBA Alvar\xE1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraFormComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.alvara.numero_alvara = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Empresa: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraFormComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.alvara.nome_empresa = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "CNPJ: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraFormComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.alvara.cnpj_empresa = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Emiss\xE3o: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraFormComponent_Template_input_ngModelChange_55_listener($event) {
            return ctx.alvara.data_emissao = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Vencimento: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraFormComponent_Template_input_ngModelChange_61_listener($event) {
            return ctx.alvara.data_vencimento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Expira:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, AlvaraFormComponent_button_69_Template, 3, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlvaraFormComponent_Template_button_click_70_listener() {
            return ctx.voltarLista();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listaErros);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c0))("ngModel", ctx.alvara.tipo_doc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.tipo_doc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.nome_arquivo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.numero_alvara);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.nome_empresa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.cnpj_empresa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.data_emissao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.data_vencimento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.alvara.expira);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.alvara.id);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsdmFyYS9hbHZhcmEtZm9ybS9hbHZhcmEtZm9ybS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlvaraFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alvara-form',
          templateUrl: './alvara-form.component.html',
          styleUrls: ['./alvara-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_alvara_service__WEBPACK_IMPORTED_MODULE_3__["AlvaraService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alvara/alvara-lista/alvara-lista.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/alvara/alvara-lista/alvara-lista.component.ts ***!
    \***************************************************************/

  /*! exports provided: AlvaraListaComponent */

  /***/
  function srcAppAlvaraAlvaraListaAlvaraListaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvaraListaComponent", function () {
      return AlvaraListaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_alvara_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/alvara.service */
    "./src/app/alvara.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function AlvaraListaComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Aguarde Processando arquivos... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "mat-progress-bar", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AlvaraListaComponent_tr_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AlvaraListaComponent_tr_50_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

          var alvara_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r4.baixar(alvara_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "get_app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var alvara_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.tipo_doc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.nome_arquivo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.numero_alvara);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.nome_empresa);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.cnpj_empresa);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.data_emissao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.data_vencimento);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](alvara_r3.expira);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/alvara/form/", alvara_r3.id, "");
      }
    }

    var AlvaraListaComponent = /*#__PURE__*/function () {
      function AlvaraListaComponent(service, snackBar, activatedRoute) {
        _classCallCheck(this, AlvaraListaComponent);

        this.service = service;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.mostraProgresso = false;
        this.totalElementos = 0;
        this.pageSizeOptions = [10]; //

        this.nome = "";
        this.listaAlvaras = [];
        this.colunas = ['id', 'tipoDoc', 'nomeArquivo', 'numeroAlvara', 'nomeEmpresa', 'cnpjEmpresa', 'dataEmissao', 'dataVencimento', 'expira', 'pdf'];
      }

      _createClass(AlvaraListaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activatedRoute.params.subscribe(function (parametro) {
            if (parametro && parametro.tipoConsulta) {
              _this4.listarPersonalizado();
            } else {
              _this4.listarArquivos();
            }
          });
        }
      }, {
        key: "listarArquivos",
        value: function listarArquivos() {
          var _this5 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.mostraProgresso = true;
          this.service.listarTodos(pagina, tamanho).subscribe(function (resposta) {
            _this5.listaAlvaras = resposta.content;
            _this5.totalElementos = resposta.totalElements;
            _this5.pagina = resposta.number;
            _this5.qtdeRegistros = _this5.listaAlvaras.length;

            if (_this5.listaAlvaras.length == 0) {
              _this5.snackBar.open("Lista Vazia!", "Info!", {
                duration: 2000
              });
            }

            _this5.mostraProgresso = false;
          }, function (responseError) {
            console.log(responseError);

            _this5.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "listarPersonalizado",
        value: function listarPersonalizado() {
          var _this6 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.activatedRoute.params.subscribe(function (parametro) {
            if (parametro && parametro.tipoConsulta) {
              var consultaParam = parametro.tipoConsulta;

              if (consultaParam == 'totalVencidos') {
                _this6.listarVencidos();
              } else {
                if (consultaParam == 'venceEm60dias') {
                  _this6.listarVencerEmAte60Dias();
                } else {
                  if (consultaParam == 'totaDocumentosSemInfo') {
                    _this6.listarDocumentosSemInfo();
                  } else {
                    if (consultaParam == 'venceApos60dias') {
                      _this6.listarVencerApos60Dias();
                    }
                  }
                }
              }
            }
          });
        }
      }, {
        key: "listarVencidos",
        value: function listarVencidos() {
          var _this7 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.mostraProgresso = true;
          this.service.listarVencidos(pagina, tamanho).subscribe(function (resposta) {
            _this7.listaAlvaras = resposta.content;
            _this7.totalElementos = resposta.totalElements;
            _this7.pagina = resposta.number;

            _this7.listaAlvaras.sort(function (a, b) {
              return a.expira < b.expira ? -1 : 1;
            });

            _this7.qtdeRegistros = _this7.listaAlvaras.length;

            if (_this7.listaAlvaras.length == 0) {
              _this7.snackBar.open("Lista Vazia!", "Info!", {
                duration: 2000
              });
            }

            _this7.mostraProgresso = false;
          }, function (responseError) {
            console.log(responseError);

            _this7.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "listarVencerEmAte60Dias",
        value: function listarVencerEmAte60Dias() {
          var _this8 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.mostraProgresso = true;
          this.service.listarVencerEmAte60Dias(pagina, tamanho).subscribe(function (resposta) {
            _this8.listaAlvaras = resposta.content;
            _this8.totalElementos = resposta.totalElements;
            _this8.pagina = resposta.number;

            _this8.listaAlvaras.sort(function (a, b) {
              return a.expira < b.expira ? -1 : 1;
            });

            _this8.qtdeRegistros = _this8.listaAlvaras.length;

            if (_this8.listaAlvaras.length == 0) {
              _this8.snackBar.open("Lista Vazia!", "Info!", {
                duration: 2000
              });
            }

            _this8.mostraProgresso = false;
          }, function (responseError) {
            console.log(responseError);

            _this8.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "listarDocumentosSemInfo",
        value: function listarDocumentosSemInfo() {
          var _this9 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.mostraProgresso = true;
          this.service.listarDocumentosSemInfo(pagina, tamanho).subscribe(function (resposta) {
            _this9.listaAlvaras = resposta.content;
            _this9.totalElementos = resposta.totalElements;
            _this9.pagina = resposta.number;

            _this9.listaAlvaras.sort(function (a, b) {
              return a.expira < b.expira ? -1 : 1;
            });

            _this9.qtdeRegistros = _this9.listaAlvaras.length;

            if (_this9.listaAlvaras.length == 0) {
              _this9.snackBar.open("Lista Vazia!", "Info!", {
                duration: 2000
              });
            }

            _this9.mostraProgresso = false;
          }, function (responseError) {
            console.log(responseError);

            _this9.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "listarVencerApos60Dias",
        value: function listarVencerApos60Dias() {
          var _this10 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.mostraProgresso = true;
          this.service.listarVencerApos60Dias(pagina, tamanho).subscribe(function (resposta) {
            _this10.listaAlvaras = resposta.content;
            _this10.totalElementos = resposta.totalElements;
            _this10.pagina = resposta.number;

            _this10.listaAlvaras.sort(function (a, b) {
              return a.expira < b.expira ? -1 : 1;
            });

            _this10.qtdeRegistros = _this10.listaAlvaras.length;

            if (_this10.listaAlvaras.length == 0) {
              _this10.snackBar.open("Lista Vazia!", "Info!", {
                duration: 2000
              });
            }

            _this10.mostraProgresso = false;
          }, function (responseError) {
            console.log(responseError);

            _this10.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "paginar",
        value: function paginar(event) {
          this.pagina = event.pageIndex;
          this.listarArquivos(this.pagina, this.tamanho);
        }
      }, {
        key: "baixar",
        value: function baixar(alvara) {
          var _this11 = this;

          this.mostraProgresso = true;
          this.service.obterArquivoPorId(alvara.id).subscribe(function (resposta) {
            var sampleArr = _this11.base64ToArrayBuffer(resposta.pdf);

            _this11.saveByteArray("ARQUIVO.pdf", sampleArr);

            if (_this11.listaAlvaras.length == 0) {
              _this11.snackBar.open("Arquivo BAIXADO!", "Info!", {
                duration: 2000
              });
            }

            _this11.mostraProgresso = false;
          }, function (errorResponse) {
            console.log(errorResponse);

            _this11.snackBar.open("Erro ao BAIXAR Arquivo!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "base64ToArrayBuffer",
        value: function base64ToArrayBuffer(base64) {
          var binaryString = window.atob(base64);
          var binaryLen = binaryString.length;
          var bytes = new Uint8Array(binaryLen);

          for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
          }

          return bytes;
        }
      }, {
        key: "saveByteArray",
        value: function saveByteArray(reportName, _byte) {
          var blob = new Blob([_byte], {
            type: "application/pdf"
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          var fileName = reportName;
          link.download = fileName;
          link.click();
        }
      }, {
        key: "consultarAlvaraPorNome",
        value: function consultarAlvaraPorNome() {
          var _this12 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.mostraProgresso = true;
          this.service.listarTodosPorNome(pagina, tamanho, this.nome).subscribe(function (resposta) {
            _this12.listaAlvaras = resposta.content;
            _this12.totalElementos = resposta.totalElements;
            _this12.pagina = resposta.number;

            _this12.listaAlvaras.sort(function (a, b) {
              return a.expira < b.expira ? -1 : 1;
            });

            _this12.qtdeRegistros = _this12.listaAlvaras.length;

            if (_this12.listaAlvaras.length == 0) {
              _this12.snackBar.open("Lista Vazia!", "Info!", {
                duration: 2000
              });
            }

            _this12.mostraProgresso = false;
          }, function (responseError) {
            _this12.snackBar.open("Erro ao Listar por nome!", "Erro!", {
              duration: 2000
            });
          });
          this.mostraProgresso = false;
        }
      }]);

      return AlvaraListaComponent;
    }();

    AlvaraListaComponent.??fac = function AlvaraListaComponent_Factory(t) {
      return new (t || AlvaraListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_alvara_service__WEBPACK_IMPORTED_MODULE_1__["AlvaraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    AlvaraListaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlvaraListaComponent,
      selectors: [["app-alvara-lista"]],
      decls: 52,
      vars: 7,
      consts: [[4, "ngIf"], ["form", "", 3, "submit"], ["form", "ngForm"], [1, "row"], ["for", "inputNome"], [1, "col-md-6"], ["type", "text", "name", "nome", "id", "inputNome", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-3"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "card-header"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "table", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "data-fa-i2svg", "", 1, "svg-inline--fa", "fa-table", "fa-w-16", "mr-1"], ["fill", "currentColor", "d", "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"], [1, "col-md-12", "table-responsive"], [1, "table", "table-condensed", "table-hover", "table-striped"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["mode", "indeterminate", 1, "progress"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "routerLink"]],
      template: function AlvaraListaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Listagem de Alvar\xE1s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AlvaraListaComponent_div_6_Template, 3, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function AlvaraListaComponent_Template_form_submit_7_listener() {
            return ctx.consultarAlvaraPorNome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Nome Empresa: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AlvaraListaComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.nome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Consultar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "thead", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Tipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Nome Arq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "N\xBA Alvar\xE1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "CNPJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Emiss\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Vencimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Expira:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, AlvaraListaComponent_tr_50_Template, 27, 10, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "mat-paginator", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function AlvaraListaComponent_Template_mat_paginator_page_51_listener($event) {
            return ctx.paginar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mostraProgresso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Lista de Documentos - TamanhoLista: ", ctx.qtdeRegistros, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listaAlvaras);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("length", ctx.totalElementos)("pageSize", ctx.tamanho)("pageSizeOptions", ctx.pageSizeOptions);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.progress[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWx2YXJhL2FsdmFyYS1saXN0YS9hbHZhcmEtbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FsdmFyYS9hbHZhcmEtbGlzdGEvYWx2YXJhLWxpc3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlvaraListaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alvara-lista',
          templateUrl: './alvara-lista.component.html',
          styleUrls: ['./alvara-lista.component.css']
        }]
      }], function () {
        return [{
          type: src_app_alvara_service__WEBPACK_IMPORTED_MODULE_1__["AlvaraService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/alvara/alvara-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/alvara/alvara-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: AlvaraRoutingModule */

  /***/
  function srcAppAlvaraAlvaraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvaraRoutingModule", function () {
      return AlvaraRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pagina-nao-encontrada/pagina-nao-encontrada.component */
    "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
    /* harmony import */


    var _alvara_form_alvara_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alvara-form/alvara-form.component */
    "./src/app/alvara/alvara-form/alvara-form.component.ts");
    /* harmony import */


    var _alvara_lista_alvara_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alvara-lista/alvara-lista.component */
    "./src/app/alvara/alvara-lista/alvara-lista.component.ts");

    var routes = [{
      path: 'alvara',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: 'lista',
        component: _alvara_lista_alvara_lista_component__WEBPACK_IMPORTED_MODULE_6__["AlvaraListaComponent"]
      }, {
        path: 'form',
        component: _alvara_form_alvara_form_component__WEBPACK_IMPORTED_MODULE_5__["AlvaraFormComponent"]
      }, {
        path: 'form/:id',
        component: _alvara_form_alvara_form_component__WEBPACK_IMPORTED_MODULE_5__["AlvaraFormComponent"]
      }, {
        path: 'lista/:tipoConsulta',
        component: _alvara_lista_alvara_lista_component__WEBPACK_IMPORTED_MODULE_6__["AlvaraListaComponent"]
      }, {
        path: '',
        redirectTo: '/alvara/lista',
        pathMatch: 'full'
      }, {
        path: '**',
        component: _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__["PaginaNaoEncontradaComponent"]
      }]
    }];

    var AlvaraRoutingModule = /*#__PURE__*/_createClass(function AlvaraRoutingModule() {
      _classCallCheck(this, AlvaraRoutingModule);
    });

    AlvaraRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AlvaraRoutingModule
    });
    AlvaraRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AlvaraRoutingModule_Factory(t) {
        return new (t || AlvaraRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AlvaraRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlvaraRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/alvara/alvara.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/alvara/alvara.module.ts ***!
    \*****************************************/

  /*! exports provided: AlvaraModule */

  /***/
  function srcAppAlvaraAlvaraModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvaraModule", function () {
      return AlvaraModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _alvara_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alvara-routing.module */
    "./src/app/alvara/alvara-routing.module.ts");
    /* harmony import */


    var _alvara_lista_alvara_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alvara-lista/alvara-lista.component */
    "./src/app/alvara/alvara-lista/alvara-lista.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alvara_form_alvara_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./alvara-form/alvara-form.component */
    "./src/app/alvara/alvara-form/alvara-form.component.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var AlvaraModule = /*#__PURE__*/_createClass(function AlvaraModule() {
      _classCallCheck(this, AlvaraModule);
    });

    AlvaraModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({
      type: AlvaraModule
    });
    AlvaraModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({
      factory: function AlvaraModule_Factory(t) {
        return new (t || AlvaraModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _alvara_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlvaraRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](AlvaraModule, {
        declarations: [_alvara_lista_alvara_lista_component__WEBPACK_IMPORTED_MODULE_3__["AlvaraListaComponent"], _alvara_form_alvara_form_component__WEBPACK_IMPORTED_MODULE_14__["AlvaraFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _alvara_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlvaraRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["??setClassMetadata"](AlvaraModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__["NgModule"],
        args: [{
          declarations: [_alvara_lista_alvara_lista_component__WEBPACK_IMPORTED_MODULE_3__["AlvaraListaComponent"], _alvara_form_alvara_form_component__WEBPACK_IMPORTED_MODULE_14__["AlvaraFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _alvara_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlvaraRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    var routes = [{
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: '',
      redirectTo: '/home/inicio',
      pathMatch: 'full'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'alvara-app';
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _template_template_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./template/template.module */
    "./src/app/template/template.module.ts");
    /* harmony import */


    var _alvara_alvara_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alvara/alvara.module */
    "./src/app/alvara/alvara.module.ts");
    /* harmony import */


    var _alvara_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./alvara.service */
    "./src/app/alvara.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./token.interceptor */
    "./src/app/token.interceptor.ts");
    /* harmony import */


    var _preferencias_preferencias_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./preferencias/preferencias.module */
    "./src/app/preferencias/preferencias.module.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./usuario/usuario.module */
    "./src/app/usuario/usuario.module.ts");
    /* harmony import */


    var _usuario_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./usuario.service */
    "./src/app/usuario.service.ts");
    /* harmony import */


    var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pagina-nao-encontrada/pagina-nao-encontrada.component */
    "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_alvara_service__WEBPACK_IMPORTED_MODULE_7__["AlvaraService"], _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _usuario_service__WEBPACK_IMPORTED_MODULE_16__["UsuarioService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'pt-BR'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_5__["TemplateModule"], _alvara_alvara_module__WEBPACK_IMPORTED_MODULE_6__["AlvaraModule"], _preferencias_preferencias_module__WEBPACK_IMPORTED_MODULE_13__["PreferenciasModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__["UsuarioModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"], _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_17__["PaginaNaoEncontradaComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_5__["TemplateModule"], _alvara_alvara_module__WEBPACK_IMPORTED_MODULE_6__["AlvaraModule"], _preferencias_preferencias_module__WEBPACK_IMPORTED_MODULE_13__["PreferenciasModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__["UsuarioModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"], _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_17__["PaginaNaoEncontradaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_5__["TemplateModule"], _alvara_alvara_module__WEBPACK_IMPORTED_MODULE_6__["AlvaraModule"], _preferencias_preferencias_module__WEBPACK_IMPORTED_MODULE_13__["PreferenciasModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_15__["UsuarioModule"]],
          providers: [_alvara_service__WEBPACK_IMPORTED_MODULE_7__["AlvaraService"], _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _usuario_service__WEBPACK_IMPORTED_MODULE_16__["UsuarioService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
            multi: true
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'pt-BR'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          console.log("canActivate");
          return this.verificarAutenticacaoUser();
        }
      }, {
        key: "verificarAutenticacaoUser",
        value: function verificarAutenticacaoUser() {
          var autenticado = this.authService.isAuthenticated();

          if (autenticado) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }, {
        key: "canLoad",
        value: function canLoad(route, segments) {
          console.log("canLoad");
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/oauth/token";
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
      }

      _createClass(AuthService, [{
        key: "obterTokenStorage",
        value: function obterTokenStorage() {
          var tokenStr = localStorage.getItem('access_token');

          if (tokenStr) {
            var token = JSON.parse(tokenStr).access_token;
            return token;
          }

          return null;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = this.obterTokenStorage();

          if (token) {
            var expirado = this.jwtHelper.isTokenExpired(token);
            return !expirado;
          }

          return false;
        }
      }, {
        key: "obterToken",
        value: function obterToken(username, password) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('username', username).set('password', password).set('grant_type', 'password');
          var headers = {
            'Authorization': 'Basic ' + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CLI_ID + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CLI_SECRET),
            'Content-Type': 'application/x-www-form-urlencoded'
          };
          return this.http.post(this.apiURL, params.toString(), {
            headers: headers
          });
        }
      }, {
        key: "encerrarSessao",
        value: function encerrarSessao() {
          localStorage.removeItem('access_token');
        }
      }, {
        key: "getUsuarioAutenticado",
        value: function getUsuarioAutenticado() {
          var token = this.obterTokenStorage();

          if (token) {
            var usuario = this.jwtHelper.decodeToken(token).user_name;
            return usuario;
          }
        }
      }, {
        key: "getAuthoritiesToken",
        value: function getAuthoritiesToken() {
          var token = this.obterTokenStorage();

          if (token) {
            var authorities = this.jwtHelper.decodeToken(token).authorities;
            return authorities;
          }
        }
      }, {
        key: "isAdmin",
        value: function isAdmin(authorities) {
          for (var cont = 0; cont < authorities.length; cont++) {
            var role = authorities[cont];

            if (role == "ROLE_ADMIN" || role == "ADMIN") {
              return true;
            }
          }

          return false;
        }
      }]);

      return AuthService;
    }();

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pagina-nao-encontrada/pagina-nao-encontrada.component */
    "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/home/inicio/inicio.component.ts");

    var routes = [{
      path: 'home',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: 'inicio',
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"]
      }, {
        path: '',
        redirectTo: '/home/inicio',
        pathMatch: 'full'
      }, {
        path: '**',
        component: _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__["PaginaNaoEncontradaComponent"]
      }]
    }];

    var HomeRoutingModule = /*#__PURE__*/_createClass(function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    });

    HomeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/home/inicio/inicio.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var HomeModule = /*#__PURE__*/_createClass(function HomeModule() {
      _classCallCheck(this, HomeModule);
    });

    HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: HomeModule
    });
    HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](HomeModule, {
        declarations: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/inicio/inicio.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/inicio/inicio.component.ts ***!
    \*************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppHomeInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_alvara_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/alvara.service */
    "./src/app/alvara.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var InicioComponent = /*#__PURE__*/function () {
      function InicioComponent(service, snackBar) {
        _classCallCheck(this, InicioComponent);

        this.service = service;
        this.snackBar = snackBar;
        this.totalDocumentos = 0;
        this.totalVencidos = 0;
        this.venceEm60dias = 0;
        this.venceApos60dias = 0;
        this.totaDocumentosSemInfo = 0;
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.definirDashboard();
        }
      }, {
        key: "definirDashboard",
        value: function definirDashboard() {
          this.definirTotalArquivos();
          this.qtdeVencerApos60Dias();
          this.definirVencerEm60Dias();
          this.definirSemInformacoes();
          this.definirVencidos();
        }
      }, {
        key: "definirTotalArquivos",
        value: function definirTotalArquivos() {
          var _this13 = this;

          this.service.totalArquivos().subscribe(function (resposta) {
            _this13.totalDocumentos = resposta;
          }, function (responseError) {
            _this13.snackBar.open("Erro ao Obter totalDocumentos!", "ERRO!", {
              duration: 2000
            });

            console.log(responseError);
          });
        }
      }, {
        key: "definirVencidos",
        value: function definirVencidos() {
          var _this14 = this;

          this.service.totalArquivosVencidos().subscribe(function (resposta) {
            _this14.totalVencidos = resposta;
          }, function (responseError) {
            _this14.snackBar.open("Erro ao Obter totalVencidos!", "ERRO!", {
              duration: 2000
            });

            console.log(responseError);
          });
        }
      }, {
        key: "definirVencerEm60Dias",
        value: function definirVencerEm60Dias() {
          var _this15 = this;

          this.service.totalArquivosVencerEm60Dias().subscribe(function (resposta) {
            _this15.venceEm60dias = resposta;
          }, function (responseError) {
            _this15.snackBar.open("Erro ao Obter venceEm60dias!", "ERRO!", {
              duration: 2000
            });

            console.log(responseError);
          });
        }
      }, {
        key: "qtdeVencerApos60Dias",
        value: function qtdeVencerApos60Dias() {
          var _this16 = this;

          this.service.totalArquivosVencerApos60Dias().subscribe(function (resposta) {
            _this16.venceApos60dias = resposta;
          }, function (responseError) {
            _this16.snackBar.open("Erro ao Obter venceApos60dias!", "ERRO!", {
              duration: 2000
            });

            console.log(responseError);
          });
        }
      }, {
        key: "definirSemInformacoes",
        value: function definirSemInformacoes() {
          var _this17 = this;

          this.service.totalArquivosSemInformacoes().subscribe(function (resposta) {
            _this17.totaDocumentosSemInfo = resposta;
          }, function (responseError) {
            _this17.snackBar.open("Erro ao Obter totaDocumentosSemInfo!", "ERRO!", {
              duration: 2000
            });

            console.log(responseError);
          });
        }
      }]);

      return InicioComponent;
    }();

    InicioComponent.??fac = function InicioComponent_Factory(t) {
      return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_alvara_service__WEBPACK_IMPORTED_MODULE_1__["AlvaraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    InicioComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: InicioComponent,
      selectors: [["app-inicio"]],
      decls: 75,
      vars: 5,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "card", "bg-danger", "text-white", "mb-4"], [1, "card-body"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], ["routerLink", "/alvara/lista/totalVencidos", 1, "small", "text-white", "stretched-link"], [1, "small", "text-white"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "angle-right", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 256 512", "data-fa-i2svg", "", 1, "svg-inline--fa", "fa-angle-right", "fa-w-8"], ["fill", "currentColor", "d", "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"], ["routerLink", "/alvara/lista/totaDocumentosSemInfo", 1, "small", "text-white", "stretched-link"], [1, "card", "bg-warning", "text-white", "mb-4"], ["routerLink", "/alvara/lista/venceEm60dias", 1, "small", "text-white", "stretched-link"], [1, "card", "bg-primary", "text-white", "mb-4"], ["routerLink", "/alvara/lista/venceApos60dias", 1, "small", "text-white", "stretched-link"], [1, "card", "bg-success", "text-white", "mb-4"], ["routerLink", "/alvara/lista", 1, "small", "text-white", "stretched-link"], [1, "col-xl-6"], [1, "card", "mb-4"], [1, "card-header"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "chart-area", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "data-fa-i2svg", "", 1, "svg-inline--fa", "fa-chart-area", "fa-w-16", "mr-1"], ["fill", "currentColor", "d", "M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"], ["id", "myAreaChart", "width", "100%", "height", "40"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "chart-bar", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "data-fa-i2svg", "", 1, "svg-inline--fa", "fa-chart-bar", "fa-w-16", "mr-1"], ["fill", "currentColor", "d", "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"], ["id", "myBarChart", "width", "100%", "height", "40"]],
      template: function InicioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "assessment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Dashboard\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Total de Documentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "svg", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "svg", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Area Chart Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "canvas", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "svg", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Bar Chart Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "canvas", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.totalVencidos, " Vencidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.totaDocumentosSemInfo, " Sem Data de Vencimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.venceEm60dias, " Vencem em at\xE9 60 dias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.venceApos60dias, " Vencem ap\xF3s 60 dias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.totalDocumentos);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inicio',
          templateUrl: './inicio.component.html',
          styleUrls: ['./inicio.component.css']
        }]
      }], function () {
        return [{
          type: src_app_alvara_service__WEBPACK_IMPORTED_MODULE_1__["AlvaraService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _template_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../template/cabecalho/cabecalho.component */
    "./src/app/template/cabecalho/cabecalho.component.ts");
    /* harmony import */


    var _template_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../template/menu/menu.component */
    "./src/app/template/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _template_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../template/rodape/rodape.component */
    "./src/app/template/rodape/rodape.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          (function ($) {
            "use strict";

            var path = window.location.href;
            $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
              if (this instanceof HTMLAnchorElement && this.href === path) {
                $(this).addClass("active");
              }
            });
            $("#sidebarToggle").on("click", function (e) {
              e.preventDefault();
              $("body").toggleClass("sb-sidenav-toggled");
            });
          })(jQuery);
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.??fac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 8,
      vars: 0,
      consts: [["id", "layoutSidenav"], ["id", "layoutSidenav_content"], [1, "container-fluid"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-cabecalho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-rodape");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_template_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_1__["CabecalhoComponent"], _template_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _template_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__["RodapeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var erro_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erro_r2, " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this18 = this;

          this.authService.obterToken(this.username, this.password).subscribe(function (response) {
            var access_token = JSON.stringify(response);
            localStorage.setItem('access_token', access_token);

            _this18.router.navigate(['/home/inicio']);
          }, function (errorResponse) {
            _this18.loginError = true;
            _this18.erros = [errorResponse.error.error_description];
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 29,
      vars: 3,
      consts: [[1, "bg-primary"], ["id", "layoutAuthentication"], ["id", "layoutAuthentication_content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-5"], [1, "card", "shadow-lg", "border-0", "rounded-lg", "mt-5"], [1, "card-header"], [1, "text-center", "font-weight-light", "m-4"], [1, "card-body"], ["class", "alert alert-danger", "role", "alert", 4, "ngFor", "ngForOf"], [3, "submit"], ["loginForm", "ngForm"], [1, "form-group"], [1, "smal", "mb-1"], ["type", "text", "name", "username", "placeholder", "Digite Seu Login", 1, "form-control", "py-4", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Digite Sua Senha ", 1, "form-control", "py-4", 3, "ngModel", "ngModelChange"], [1, "form-group", "d-flex", "align-items-center", "justify-content-between", "mt-4", "mb-0"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card-footer", "text-center"], [1, "small"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Entrar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, LoginComponent_div_12_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function LoginComponent_Template_form_submit_13_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Senha ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Enviar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Efetuar Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.erros);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PaginaNaoEncontradaComponent */

  /***/
  function srcAppPaginaNaoEncontradaPaginaNaoEncontradaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaComponent", function () {
      return PaginaNaoEncontradaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaginaNaoEncontradaComponent = /*#__PURE__*/function () {
      function PaginaNaoEncontradaComponent() {
        _classCallCheck(this, PaginaNaoEncontradaComponent);
      }

      _createClass(PaginaNaoEncontradaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaginaNaoEncontradaComponent;
    }();

    PaginaNaoEncontradaComponent.??fac = function PaginaNaoEncontradaComponent_Factory(t) {
      return new (t || PaginaNaoEncontradaComponent)();
    };

    PaginaNaoEncontradaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PaginaNaoEncontradaComponent,
      selectors: [["app-pagina-nao-encontrada"]],
      decls: 2,
      vars: 0,
      template: function PaginaNaoEncontradaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "P\xC1GINA N\xC3O ENCONTRADA!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS1uYW8tZW5jb250cmFkYS9wYWdpbmEtbmFvLWVuY29udHJhZGEuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PaginaNaoEncontradaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pagina-nao-encontrada',
          templateUrl: './pagina-nao-encontrada.component.html',
          styleUrls: ['./pagina-nao-encontrada.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/preferencias/preferencias-form/preferencias-form.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/preferencias/preferencias-form/preferencias-form.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PreferenciasFormComponent */

  /***/
  function srcAppPreferenciasPreferenciasFormPreferenciasFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferenciasFormComponent", function () {
      return PreferenciasFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_alvara_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/alvara.service */
    "./src/app/alvara.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../usuario/usuario-list/usuario-list.component */
    "./src/app/usuario/usuario-list/usuario-list.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function PreferenciasFormComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "supervisor_account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Usu\xE1rios ");
      }
    }

    function PreferenciasFormComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "settings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Prefer\xEAncias PDF ");
      }
    }

    function PreferenciasFormComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "mat-progress-bar", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.descProgresso, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx_r2.percentProgress);
      }
    }

    var PreferenciasFormComponent = /*#__PURE__*/function () {
      function PreferenciasFormComponent(router, service, snackBar) {
        _classCallCheck(this, PreferenciasFormComponent);

        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.contSucessUp = 0;
        this.mostraProgresso = false;
        this.percentProgress = 0;
        this.descProgresso = "";
      }

      _createClass(PreferenciasFormComponent, [{
        key: "selecionarArquivosPDF",
        value: function selecionarArquivosPDF(event) {
          this.listaArquivos = event.target.files;
          var listaNomes = [];

          for (var cont = 0; cont < this.listaArquivos.length; cont++) {
            listaNomes.push(this.listaArquivos[cont].name);
          }

          document.getElementById('select').innerHTML = listaNomes.length + " Arquivos Selecionados...";
        }
      }, {
        key: "onUpload",
        value: function onUpload() {
          if (this.listaArquivos) {
            this.mostraProgresso = true;

            for (var index = 0; index < this.listaArquivos.length; index++) {
              var pdf = this.listaArquivos[index];
              var formData = new FormData();
              formData.append("pdf", pdf);
              this.upload(formData);
            }
          } else {
            this.snackBar.open("Selecione os Arquivos para UPLOAD!", "INFO!", {
              duration: 3000
            });
          }
        }
      }, {
        key: "upload",
        value: function upload(formData) {
          var _this19 = this;

          this.service.uploadPdf(formData).subscribe(function (response) {
            //
            _this19.contSucessUp = _this19.contSucessUp + 1;
            _this19.percentProgress = _this19.contSucessUp / _this19.listaArquivos.length * 100;
            _this19.descProgresso = "Aguarde, processando ( " + _this19.contSucessUp + " de " + _this19.listaArquivos.length + " ) " + " - " + _this19.percentProgress.toFixed(2) + "%";

            if (_this19.contSucessUp == _this19.listaArquivos.length) {
              _this19.mostraProgresso = false;
              document.getElementById('select').innerHTML = "Conclu??do!";
              _this19.listaArquivos = [];

              _this19.snackBar.open("Processo Conclu??do! (" + _this19.contSucessUp + ") Arquivos processados com Sucesso!", "Sucesso!", {
                duration: 4000
              });

              _this19.contSucessUp = 0;
              _this19.percentProgress = 0;
            } //

          }, function (responseError) {
            console.log("ERRO");
            console.log(responseError);

            _this19.snackBar.open("Erro ao Fazer upload!", "ERRO!", {
              duration: 3000
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreferenciasFormComponent;
    }();

    PreferenciasFormComponent.??fac = function PreferenciasFormComponent_Factory(t) {
      return new (t || PreferenciasFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_alvara_service__WEBPACK_IMPORTED_MODULE_2__["AlvaraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    PreferenciasFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PreferenciasFormComponent,
      selectors: [["app-preferencias-form"]],
      decls: 21,
      vars: 2,
      consts: [["mat-tab-label", ""], [4, "ngIf"], [1, "custom-file"], ["type", "file", "name", "pdf", "multiple", "", "id", "arquivosPdf", "data-allowed-file-extensions", "[\"pdf\"]", 1, "custom-file-input", 3, "change"], ["for", "custoFile", "id", "select", 1, "custom-file-label"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["mode", "determinate", 1, "progress", 3, "value"]],
      template: function PreferenciasFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PreferenciasFormComponent_ng_template_2_Template, 3, 0, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-usuario-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, PreferenciasFormComponent_ng_template_5_Template, 3, 0, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, PreferenciasFormComponent_div_7_Template, 4, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Processar Arquivos PDF / Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function PreferenciasFormComponent_Template_input_change_16_listener($event) {
            return ctx.selecionarArquivosPDF($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Clique para Selecionar...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PreferenciasFormComponent_Template_button_click_19_listener() {
            return ctx.onUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mostraProgresso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.listaArquivos);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLabel"], _usuario_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioListComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"]],
      styles: [".progress[_ngcontent-%COMP%] {\r\n    height: 35px;\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZmVyZW5jaWFzL3ByZWZlcmVuY2lhcy1mb3JtL3ByZWZlcmVuY2lhcy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJlZmVyZW5jaWFzL3ByZWZlcmVuY2lhcy1mb3JtL3ByZWZlcmVuY2lhcy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PreferenciasFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preferencias-form',
          templateUrl: './preferencias-form.component.html',
          styleUrls: ['./preferencias-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_alvara_service__WEBPACK_IMPORTED_MODULE_2__["AlvaraService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/preferencias/preferencias-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/preferencias/preferencias-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PreferenciasRoutingModule */

  /***/
  function srcAppPreferenciasPreferenciasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferenciasRoutingModule", function () {
      return PreferenciasRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pagina-nao-encontrada/pagina-nao-encontrada.component */
    "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
    /* harmony import */


    var _preferencias_form_preferencias_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./preferencias-form/preferencias-form.component */
    "./src/app/preferencias/preferencias-form/preferencias-form.component.ts");

    var routes = [{
      path: 'preferencias',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: 'form',
        component: _preferencias_form_preferencias_form_component__WEBPACK_IMPORTED_MODULE_5__["PreferenciasFormComponent"],
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: '',
        redirectTo: '/preferencias/form',
        pathMatch: 'full'
      }, {
        path: '**',
        component: _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__["PaginaNaoEncontradaComponent"]
      }]
    }];

    var PreferenciasRoutingModule = /*#__PURE__*/_createClass(function PreferenciasRoutingModule() {
      _classCallCheck(this, PreferenciasRoutingModule);
    });

    PreferenciasRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PreferenciasRoutingModule
    });
    PreferenciasRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PreferenciasRoutingModule_Factory(t) {
        return new (t || PreferenciasRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PreferenciasRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PreferenciasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/preferencias/preferencias.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/preferencias/preferencias.module.ts ***!
    \*****************************************************/

  /*! exports provided: PreferenciasModule */

  /***/
  function srcAppPreferenciasPreferenciasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreferenciasModule", function () {
      return PreferenciasModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _preferencias_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./preferencias-routing.module */
    "./src/app/preferencias/preferencias-routing.module.ts");
    /* harmony import */


    var _preferencias_form_preferencias_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preferencias-form/preferencias-form.component */
    "./src/app/preferencias/preferencias-form/preferencias-form.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../usuario/usuario.module */
    "./src/app/usuario/usuario.module.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var PreferenciasModule = /*#__PURE__*/_createClass(function PreferenciasModule() {
      _classCallCheck(this, PreferenciasModule);
    });

    PreferenciasModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: PreferenciasModule
    });
    PreferenciasModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function PreferenciasModule_Factory(t) {
        return new (t || PreferenciasModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferencias_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferenciasRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_10__["UsuarioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PreferenciasModule, {
        declarations: [_preferencias_form_preferencias_form_component__WEBPACK_IMPORTED_MODULE_3__["PreferenciasFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferencias_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferenciasRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_10__["UsuarioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PreferenciasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_preferencias_form_preferencias_form_component__WEBPACK_IMPORTED_MODULE_3__["PreferenciasFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _preferencias_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreferenciasRoutingModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _usuario_usuario_module__WEBPACK_IMPORTED_MODULE_10__["UsuarioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/cabecalho/cabecalho.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/template/cabecalho/cabecalho.component.ts ***!
    \***********************************************************/

  /*! exports provided: CabecalhoComponent */

  /***/
  function srcAppTemplateCabecalhoCabecalhoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CabecalhoComponent", function () {
      return CabecalhoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CabecalhoComponent = /*#__PURE__*/function () {
      function CabecalhoComponent() {
        _classCallCheck(this, CabecalhoComponent);
      }

      _createClass(CabecalhoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CabecalhoComponent;
    }();

    CabecalhoComponent.??fac = function CabecalhoComponent_Factory(t) {
      return new (t || CabecalhoComponent)();
    };

    CabecalhoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CabecalhoComponent,
      selectors: [["app-cabecalho"]],
      decls: 5,
      vars: 0,
      consts: [[1, "sb-topnav", "navbar", "navbar-expand", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["id", "sidebarToggle", "href", "#", 1, "btn", "btn-link", "btn-sm", "order-1", "order-lg-0"], [1, "fas", "fa-bars"]],
      template: function CabecalhoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Docs - WEB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CabecalhoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cabecalho',
          templateUrl: './cabecalho.component.html',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/menu/menu.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/template/menu/menu.component.ts ***!
    \*************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppTemplateMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_a_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "lock");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Administrador ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(authService, router) {
        _classCallCheck(this, MenuComponent);

        this.authService = authService;
        this.router = router;
        this.usuarioLogado = "Deslogado";
        this.authorities = [''];
        this.administrador = false;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuarioLogado = this.authService.getUsuarioAutenticado();
          this.authorities = this.authService.getAuthoritiesToken();
          this.administrador = this.authService.isAdmin(this.authorities);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.encerrarSessao();
          this.router.navigate(['/login']);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.??fac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 27,
      vars: 3,
      consts: [["id", "layoutSidenav_nav"], ["id", "sidenavAccordion", 1, "sb-sidenav", "accordion", "sb-sidenav-dark"], [1, "sb-sidenav-menu"], [1, "nav"], ["routerLink", "/home/inicio", 1, "nav-link", "active"], [1, "sb-sidenav-menu-heading"], ["routerLink", "/alvara/lista", 1, "nav-link", "active"], ["class", "nav-link active", "routerLink", "/preferencias/form", 4, "ngIf"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed", 3, "click"], [1, "sb-nav-link-icon"], [1, "fas", "fa-sign-out-alt"], [1, "sb-sidenav-footer"], [1, "small"], ["routerLink", "/preferencias/form", 1, "nav-link", "active"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " In\xEDcio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Version 1.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Alvar\xE1s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MenuComponent_a_14_Template, 4, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MenuComponent_Template_a_click_17_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Sair ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "perm_identity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Usu\xE1rio logado: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.administrador);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.usuarioLogado, " - ", ctx.authorities, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/rodape/rodape.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/template/rodape/rodape.component.ts ***!
    \*****************************************************/

  /*! exports provided: RodapeComponent */

  /***/
  function srcAppTemplateRodapeRodapeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RodapeComponent", function () {
      return RodapeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RodapeComponent = /*#__PURE__*/function () {
      function RodapeComponent() {
        _classCallCheck(this, RodapeComponent);
      }

      _createClass(RodapeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RodapeComponent;
    }();

    RodapeComponent.??fac = function RodapeComponent_Factory(t) {
      return new (t || RodapeComponent)();
    };

    RodapeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RodapeComponent,
      selectors: [["app-rodape"]],
      decls: 8,
      vars: 0,
      consts: [[1, "py-4", "bg-light", "mt-auto"], [1, "container-fluid"], [1, "d-flex", "align-items-center", "justify-content-between", "small"], [1, "text-muted"], ["href", "https://www.linkedin.com/in/thiago-junior-amorim-de-melo-84246a149/", "target", "_blank"]],
      template: function RodapeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Copyright \xA9 Vandolima Contabilidade 2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Criado por: Thiago JR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RodapeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rodape',
          templateUrl: './rodape.component.html',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/template.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/template/template.module.ts ***!
    \*********************************************/

  /*! exports provided: TemplateModule */

  /***/
  function srcAppTemplateTemplateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
      return TemplateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cabecalho/cabecalho.component */
    "./src/app/template/cabecalho/cabecalho.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/template/menu/menu.component.ts");
    /* harmony import */


    var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rodape/rodape.component */
    "./src/app/template/rodape/rodape.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var TemplateModule = /*#__PURE__*/_createClass(function TemplateModule() {
      _classCallCheck(this, TemplateModule);
    });

    TemplateModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: TemplateModule
    });
    TemplateModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function TemplateModule_Factory(t) {
        return new (t || TemplateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TemplateModule, {
        declarations: [_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_2__["CabecalhoComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__["RodapeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_2__["CabecalhoComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__["RodapeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_2__["CabecalhoComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__["RodapeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
          exports: [_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_2__["CabecalhoComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_4__["RodapeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/token.interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/token.interceptor.ts ***!
    \**************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor() {
        _classCallCheck(this, TokenInterceptor);
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var tokenString = localStorage.getItem('access_token');
          var url = request.url;

          if (tokenString && !url.endsWith('/oauth/token')) {
            var token = JSON.parse(tokenString);
            var jwt = token.access_token;
            request = request.clone({
              setHeaders: {
                Authorization: 'Bearer ' + jwt
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.??fac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)();
    };

    TokenInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/usuario.service.ts":
  /*!************************************!*\
    !*** ./src/app/usuario.service.ts ***!
    \************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(http) {
        _classCallCheck(this, UsuarioService);

        this.http = http;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/usuarios";
      }

      _createClass(UsuarioService, [{
        key: "listarTodos",
        value: function listarTodos(page, size) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('page', page).set('size', size);
          return this.http.get(this.apiURL + "?" + params.toString());
        }
      }, {
        key: "salvarUsuario",
        value: function salvarUsuario(usuarioDt) {
          return this.http.post(this.apiURL + '/novo', usuarioDt);
        }
      }, {
        key: "uploadFoto",
        value: function uploadFoto(id, formData) {
          return this.http.put(this.apiURL + '/foto/' + id, formData, {
            responseType: 'blob'
          });
        }
      }, {
        key: "ativarUsuario",
        value: function ativarUsuario(id) {
          return this.http.patch(this.apiURL + "/ativar/" + id, null);
        }
      }, {
        key: "ativarUsuarioAdm",
        value: function ativarUsuarioAdm(id) {
          return this.http.patch(this.apiURL + "/ativardesativaradm/" + id, null);
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.??fac = function UsuarioService_Factory(t) {
      return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    UsuarioService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
      token: UsuarioService,
      factory: UsuarioService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/usuario/Usuario.ts":
  /*!************************************!*\
    !*** ./src/app/usuario/Usuario.ts ***!
    \************************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppUsuarioUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });

    var Usuario = /*#__PURE__*/_createClass(function Usuario() {
      _classCallCheck(this, Usuario);
    });
    /***/

  },

  /***/
  "./src/app/usuario/UsuarioDTO.ts":
  /*!***************************************!*\
    !*** ./src/app/usuario/UsuarioDTO.ts ***!
    \***************************************/

  /*! exports provided: UsuarioDTO */

  /***/
  function srcAppUsuarioUsuarioDTOTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioDTO", function () {
      return UsuarioDTO;
    });

    var UsuarioDTO = /*#__PURE__*/_createClass(function UsuarioDTO() {
      _classCallCheck(this, UsuarioDTO);
    });
    /***/

  },

  /***/
  "./src/app/usuario/usuario-form/usuario-form.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/usuario/usuario-form/usuario-form.component.ts ***!
    \****************************************************************/

  /*! exports provided: UsuarioFormComponent */

  /***/
  function srcAppUsuarioUsuarioFormUsuarioFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioFormComponent", function () {
      return UsuarioFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _UsuarioDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../UsuarioDTO */
    "./src/app/usuario/UsuarioDTO.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/usuario.service */
    "./src/app/usuario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function UsuarioFormComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var erro_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", erro_r1, " ");
      }
    }

    var UsuarioFormComponent = /*#__PURE__*/function () {
      function UsuarioFormComponent(formBuild, snackBar, service, router) {
        _classCallCheck(this, UsuarioFormComponent);

        this.formBuild = formBuild;
        this.snackBar = snackBar;
        this.service = service;
        this.router = router;
        this.usuarioDto = new _UsuarioDTO__WEBPACK_IMPORTED_MODULE_1__["UsuarioDTO"]();
        this.listaErros = [];
      }

      _createClass(UsuarioFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.montarFormulario();
        }
      }, {
        key: "montarFormulario",
        value: function montarFormulario() {
          this.formulario = this.formBuild.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cpf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.salvarContato();
        }
      }, {
        key: "salvarContato",
        value: function salvarContato() {
          var _this20 = this;

          var formValues = this.formulario.value;
          var usuario = new _UsuarioDTO__WEBPACK_IMPORTED_MODULE_1__["UsuarioDTO"]();
          usuario.username = formValues.username;
          usuario.password = formValues.password;
          usuario.nome = formValues.nome;
          usuario.cpf = formValues.cpf;
          this.service.salvarUsuario(usuario).subscribe(function (resposta) {
            _this20.snackBar.open("SUCESSO ao salvar Usu??rio!", "SUCESSO!", {
              duration: 2000
            });

            _this20.router.navigate(['/preferencias/form']);
          }, function (errorResponse) {
            _this20.listaErros = errorResponse.error.erros;

            _this20.snackBar.open("ERRO ao salvar Usu??rio!!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "voltarPreferencias",
        value: function voltarPreferencias() {
          this.router.navigate(['/preferencias/form']);
        }
      }]);

      return UsuarioFormComponent;
    }();

    UsuarioFormComponent.??fac = function UsuarioFormComponent_Factory(t) {
      return new (t || UsuarioFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    UsuarioFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UsuarioFormComponent,
      selectors: [["app-usuario-form"]],
      decls: 32,
      vars: 3,
      consts: [["id", "row"], ["id", "col-md-12"], ["class", "alert alert-danger", "role", "alert", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["formControlName", "username", "matInput", "", "placeholder", "Digite o Username:"], ["formControlName", "password", "matInput", "", "placeholder", "Digite o Password:"], ["formControlName", "nome", "matInput", "", "placeholder", "Digite o nome:"], ["formControlName", "cpf", "matInput", "", "placeholder", "Digite o cpf:"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "fa", "fa-save"], ["type", "button", 1, "btn", "btn-danger", "ml-2", 3, "click"], [1, "fa", "fa-solid", "fa-arrow-alt-circle-left"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function UsuarioFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Cadastro de Usu\xE1rios ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, UsuarioFormComponent_div_8_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UsuarioFormComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Username:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "nome:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "cpf:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsuarioFormComponent_Template_button_click_29_listener() {
            return ctx.voltarPreferencias();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listaErros);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.formulario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.formulario.valid);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: [".full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpby91c3VhcmlvLWZvcm0vdXN1YXJpby1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c3VhcmlvL3VzdWFyaW8tZm9ybS91c3VhcmlvLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsuarioFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-usuario-form',
          templateUrl: './usuario-form.component.html',
          styleUrls: ['./usuario-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: src_app_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/usuario/usuario-info/usuario-info.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/usuario/usuario-info/usuario-info.component.ts ***!
    \****************************************************************/

  /*! exports provided: UsuarioInfoComponent */

  /***/
  function srcAppUsuarioUsuarioInfoUsuarioInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioInfoComponent", function () {
      return UsuarioInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Usuario */
    "./src/app/usuario/Usuario.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var UsuarioInfoComponent = /*#__PURE__*/function () {
      function UsuarioInfoComponent(dialogRef, usuario) {
        _classCallCheck(this, UsuarioInfoComponent);

        this.dialogRef = dialogRef;
        this.usuario = usuario;
      }

      _createClass(UsuarioInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fecharDialog",
        value: function fecharDialog() {
          this.dialogRef.close();
        }
      }]);

      return UsuarioInfoComponent;
    }();

    UsuarioInfoComponent.??fac = function UsuarioInfoComponent_Factory(t) {
      return new (t || UsuarioInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    UsuarioInfoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UsuarioInfoComponent,
      selectors: [["app-usuario-info"]],
      decls: 49,
      vars: 10,
      consts: [["stile", "text-align: center;"], ["mat-card-image", "", 1, "foto", 3, "src"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function UsuarioInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Usu\xE1rio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " ID: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " username: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " role: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " ativo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " nome: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " cpf: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " celular: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsuarioInfoComponent_Template_button_click_47_listener() {
            return ctx.fecharDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Fechar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx.usuario.foto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.ativo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.cpf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.usuario.celular);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: [".foto[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpby91c3VhcmlvLWluZm8vdXN1YXJpby1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby1pbmZvL3VzdWFyaW8taW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvdG8ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsuarioInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-usuario-info',
          templateUrl: './usuario-info.component.html',
          styleUrls: ['./usuario-info.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _Usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/usuario/usuario-list/usuario-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/usuario/usuario-list/usuario-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: UsuarioListComponent */

  /***/
  function srcAppUsuarioUsuarioListUsuarioListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioListComponent", function () {
      return UsuarioListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _usuario_info_usuario_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../usuario-info/usuario-info.component */
    "./src/app/usuario/usuario-info/usuario-info.component.ts");
    /* harmony import */


    var src_app_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/usuario.service */
    "./src/app/usuario.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function UsuarioListComponent_tr_41_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var usuario_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "data:image/jpeg;base64,", usuario_r1.foto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function UsuarioListComponent_tr_41_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function UsuarioListComponent_tr_41_div_3_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

          var usuario_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r5.uploadFoto($event, usuario_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UsuarioListComponent_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, UsuarioListComponent_tr_41_div_2_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, UsuarioListComponent_tr_41_div_3_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsuarioListComponent_tr_41_Template_mat_icon_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

          var usuario_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r8.ativarDesativar(usuario_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsuarioListComponent_tr_41_Template_mat_icon_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

          var usuario_r1 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r10.ativarDesativarAdm(usuario_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsuarioListComponent_tr_41_Template_mat_icon_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

          var usuario_r1 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r11.infoUsuario(usuario_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var usuario_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", usuario_r1.foto);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !usuario_r1.foto);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.cpf);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](usuario_r1.celular);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", usuario_r1.ativo ? "thumb_up" : "thumb_down", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", usuario_r1.admin ? "thumb_up" : "thumb_down", " ");
      }
    }

    var UsuarioListComponent = /*#__PURE__*/function () {
      function UsuarioListComponent(service, snackBar, authService, router, dialog) {
        _classCallCheck(this, UsuarioListComponent);

        this.service = service;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog; //

        this.totalElementos = 0;
        this.pageSizeOptions = [10]; //

        this.listaUsuarios = []; //

        this.colunas = ['foto', 'id', 'username', 'password', 'role', 'ativo', 'nome', 'cpf', 'email', 'celular', 'admin'];
      }

      _createClass(UsuarioListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listarUsuarios();
        }
      }, {
        key: "novoUsuario",
        value: function novoUsuario() {
          this.router.navigate(['/usuario/form']);
        }
      }, {
        key: "listarUsuarios",
        value: function listarUsuarios() {
          var _this21 = this;

          var pagina = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var tamanho = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          this.service.listarTodos(pagina, tamanho).subscribe(function (resposta) {
            _this21.listaUsuarios = resposta.content;
            _this21.totalElementos = resposta.totalElements;
            _this21.pagina = resposta.number;
            _this21.qtdeRegistros = _this21.listaUsuarios.length;

            for (var cont = 0; cont < _this21.listaUsuarios.length; cont++) {
              var user = _this21.listaUsuarios[cont];
              var roles = [user.role];
              user.admin = _this21.authService.isAdmin(roles);
              _this21.listaUsuarios[cont] = user;
            }

            if (_this21.listaUsuarios.length == 0) {
              _this21.snackBar.open("Lista Vazia!", "Info!", {
                duration: 2000
              });
            }
          }, function (responseError) {
            console.log(responseError);

            _this21.snackBar.open("Erro ao Obter Lista Usu??rios!", "ERRO!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "ativarDesativar",
        value: function ativarDesativar(usuario) {
          var _this22 = this;

          this.service.ativarUsuario(usuario.id).subscribe(function (resposta) {
            console.log(resposta);

            _this22.snackBar.open("SUCESSO!", "SUCESSO!", {
              duration: 2000
            });

            location.reload();
          }, function (erro) {
            console.log(erro);

            _this22.snackBar.open("erro ativarDesativar!", "Erro!", {
              duration: 2000
            });
          });
        }
      }, {
        key: "ativarDesativarAdm",
        value: function ativarDesativarAdm(usuario) {
          var _this23 = this;

          this.service.ativarUsuarioAdm(usuario.id).subscribe(function (resposta) {
            console.log(resposta);

            _this23.snackBar.open("SUCESSO!", "SUCESSO!", {
              duration: 2000
            });
          }, function (erro) {
            console.log(erro);

            _this23.snackBar.open("erro ativarDesativarAdm!", "Erro!", {
              duration: 2000
            });
          });
          location.reload();
        }
      }, {
        key: "uploadFoto",
        value: function uploadFoto(event, usuario) {
          var _this24 = this;

          var files = event.target.files;

          if (files) {
            var foto = files[0];
            var formData = new FormData();
            formData.append("foto", foto); //

            this.service.uploadFoto(usuario.id, formData).subscribe(function (response) {
              console.log("Sucesso UPLOAD " + response);

              _this24.listarUsuarios();
            }, function (responseError) {
              console.log("ERRO UPLOAD " + responseError);
            });
          }
        }
      }, {
        key: "paginar",
        value: function paginar(event) {
          this.pagina = event.pageIndex;
          this.listarUsuarios(this.pagina, this.tamanho);
        }
      }, {
        key: "prepararUsuarioUpdate",
        value: function prepararUsuarioUpdate(usuario) {
          this.usuarioUpdate = usuario;
        }
      }, {
        key: "infoUsuario",
        value: function infoUsuario(usuario) {
          this.dialog.open(_usuario_info_usuario_info_component__WEBPACK_IMPORTED_MODULE_1__["UsuarioInfoComponent"], {
            width: '400px',
            height: '450px',
            data: usuario
          });
        }
      }]);

      return UsuarioListComponent;
    }();

    UsuarioListComponent.??fac = function UsuarioListComponent_Factory(t) {
      return new (t || UsuarioListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
    };

    UsuarioListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UsuarioListComponent,
      selectors: [["app-usuario-list"]],
      decls: 42,
      vars: 1,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"], [1, "container"], ["id", "row"], ["id", "col-md-2"], [1, "btn", "btn-warning", 3, "click"], [1, "fa", "fa-plus"], [1, "row"], [1, "col-md-12"], [1, "table", "table-condensed", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], ["href", "/preferencias/form"], ["width", "50", "height", "50", 3, "src"], ["type", "file", "name", "foto", 3, "change"]],
      template: function UsuarioListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Usu\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Consulta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsuarioListComponent_Template_button_click_8_listener() {
            return ctx.novoUsuario();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Novo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "foto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "cpf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "celular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "ativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, UsuarioListComponent_tr_41_Template, 37, 12, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listaUsuarios);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby1saXN0L3VzdWFyaW8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsuarioListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-usuario-list',
          templateUrl: './usuario-list.component.html',
          styleUrls: ['./usuario-list.component.css']
        }]
      }], function () {
        return [{
          type: src_app_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/usuario/usuario-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/usuario/usuario-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: UsuarioRoutingModule */

  /***/
  function srcAppUsuarioUsuarioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioRoutingModule", function () {
      return UsuarioRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pagina-nao-encontrada/pagina-nao-encontrada.component */
    "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
    /* harmony import */


    var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./usuario-form/usuario-form.component */
    "./src/app/usuario/usuario-form/usuario-form.component.ts");
    /* harmony import */


    var _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./usuario-list/usuario-list.component */
    "./src/app/usuario/usuario-list/usuario-list.component.ts");

    var routes = [{
      path: 'usuario',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: 'lista',
        component: _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioListComponent"]
      }, {
        path: 'form',
        component: _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioFormComponent"]
      }, {
        path: '',
        redirectTo: '/usuario/lista',
        pathMatch: 'full'
      }, {
        path: '**',
        component: _pagina_nao_encontrada_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_4__["PaginaNaoEncontradaComponent"]
      }]
    }];

    var UsuarioRoutingModule = /*#__PURE__*/_createClass(function UsuarioRoutingModule() {
      _classCallCheck(this, UsuarioRoutingModule);
    });

    UsuarioRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UsuarioRoutingModule
    });
    UsuarioRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UsuarioRoutingModule_Factory(t) {
        return new (t || UsuarioRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UsuarioRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsuarioRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/usuario/usuario.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/usuario/usuario.module.ts ***!
    \*******************************************/

  /*! exports provided: UsuarioModule */

  /***/
  function srcAppUsuarioUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioModule", function () {
      return UsuarioModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./usuario-routing.module */
    "./src/app/usuario/usuario-routing.module.ts");
    /* harmony import */


    var _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuario-list/usuario-list.component */
    "./src/app/usuario/usuario-list/usuario-list.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./usuario-form/usuario-form.component */
    "./src/app/usuario/usuario-form/usuario-form.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _usuario_info_usuario_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./usuario-info/usuario-info.component */
    "./src/app/usuario/usuario-info/usuario-info.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var UsuarioModule = /*#__PURE__*/_createClass(function UsuarioModule() {
      _classCallCheck(this, UsuarioModule);
    });

    UsuarioModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UsuarioModule
    });
    UsuarioModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UsuarioModule_Factory(t) {
        return new (t || UsuarioModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UsuarioModule, {
        declarations: [_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioListComponent"], _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioFormComponent"], _usuario_info_usuario_info_component__WEBPACK_IMPORTED_MODULE_14__["UsuarioInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]],
        exports: [_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioListComponent"], _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioFormComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsuarioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioListComponent"], _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioFormComponent"], _usuario_info_usuario_info_component__WEBPACK_IMPORTED_MODULE_14__["UsuarioInfoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _usuario_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsuarioRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]],
          exports: [_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioListComponent"], _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuarioFormComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080',
      //apiUrl: 'http://cloudtecnologia.ddns.net:8085',
      CLI_ID: 'my-angular-app',
      CLI_SECRET: '@321'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\thiago.melo\angular-projects\alvara-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map