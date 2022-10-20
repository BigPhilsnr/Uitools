(() => {
  // ../frontend/frontend/public/js/services/forms/builder.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var fetch = ({method, args = {}}) => new Promise((resolve, reject) => frappe.call({method, type: "GET", args, callback: resolve}));
  var saveFormConfiguration = ({
    name = "",
    configuration = "",
    department = ""
  }) => api({
    method: "clinical.api.forms.form_builder.save_form_configuration",
    args: {
      name,
      configuration,
      department
    }
  }).then(({message}) => message);
  var getFormConfiguration = ({name = ""}) => fetch({
    method: "clinical.api.forms.form_builder.get_form_configuration",
    args: {
      name
    }
  }).then(({message}) => message);
  var saveFormDoctype = ({name = "", form, permissions}) => api({
    method: "clinical.api.forms.form_builder.save_form_doctype",
    args: {
      name,
      form,
      permissions
    }
  }).then(({message}) => message);
  var updateFormConfiguration = ({formData}) => api({
    method: "clinical.api.forms.form_builder.update_form_configuration",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);
  var searchConcept = (txt) => api({
    method: "clinical.api.forms.form_builder.concept_query",
    args: {
      txt
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/forms/FormBuilder.vue
  var __vue_script__ = {
    name: "Builder",
    data: function() {
      return {
        some_data: "This is a vue demo",
        date: null,
        previewMode: false,
        title: "",
        department: "",
        formId: null,
        configuration: {},
        formData: null,
        formInputData: null,
        conceptList: [],
        searchQuery: "",
        formForEditingName: null
      };
    },
    watch: {
      configuration(newValue, oldValue) {
        console.log("Old value ", oldValue);
        console.log("New Value ", newValue);
      },
      previewMode(newVal, oldVal) {
        if (newVal) {
          const conf = this.configuration;
          this.formData = conf;
        }
      },
      searchQuery(searchTearm) {
        this.searchConceptDictionary(searchTearm);
      }
    },
    methods: {
      getFormData() {
      },
      getFormInputData() {
      },
      exportData() {
        this.showModal();
      },
      searchConceptDictionary(searchTearm) {
        searchConcept(searchTearm).then((results) => this.conceptList = results);
      },
      previewForm() {
        this.previewMode = !this.previewMode;
      },
      showModal() {
        this.$refs["save_modal"].show();
        this.makeDepartmentControl;
      },
      getForm(name) {
        getFormConfiguration({name}).then((config) => {
          const formStringConfig = config.formdata;
          const configObject = JSON.parse(formStringConfig);
          console.log("Config from server");
          console.log(formStringConfig);
          console.log(configObject);
          this.configuration = configObject;
        });
      },
      saveForm(title, department, configuration) {
        this.hideModal();
        saveFormConfiguration({name: title, department, configuration}).then((saved) => {
          this.title = "";
          this.department = "";
          this.formForEditingName = saved.name;
        });
      },
      updateForm(name, configuration) {
        this.hideModal();
        let doctype = "Form Design";
        const formData = {doctype, name, formdata: configuration};
        updateFormConfiguration({formData}).then((saved) => {
          frappe.show_alert("Form Update Successful", 5);
        });
      },
      makeDepartmentControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Concept Dictionary"),
            fieldtype: "Link",
            fieldname: "concept_dictionary",
            options: "Concept Dictionary",
            placeholder: __("Search by customer name, phone, email."),
            onchange: function() {
              if (this.value) {
                const mime = this;
                console.log(mime);
                const frm = me.events.get_frm();
                alert(frm);
              }
            }
          },
          parent: this.$refs["comment-input"],
          render_input: true
        });
        customer_field.toggle_label(false);
      },
      saveFormTable(title, configuration) {
        let filtered = JSON.parse(configuration);
        let controls = Object.values(filtered.controls);
        let fields = controls.map((control) => {
          console.log(control);
          let required = 0;
          let datatype = "Data";
          if (control.validations && control.validations.length > 0) {
            control.validations.forEach((validation) => {
              if (validation.ruleType === "required") {
                required = 1;
              }
            });
          }
          if (control.type === "text") {
            datatype = "Text";
          }
          return {
            label: control.label,
            name: control.name,
            fieldname: control.name,
            fieldtype: datatype,
            rqd: required,
            docstatus: 0,
            doctype: "DocField",
            owner: "Administrator",
            non_negative: 0,
            hide_days: 0,
            hide_seconds: 0,
            search_index: 0,
            in_list_view: 1,
            in_standard_filter: 0,
            in_global_search: 0,
            in_preview: 0,
            allow_in_quick_entry: 0,
            bold: 0,
            translatable: 0,
            collapsible: 0,
            fetch_if_empty: 0,
            hidden: 0,
            read_only: 0,
            unique: 0,
            set_only_once: 0,
            allow_bulk_edit: 0,
            permlevel: 0,
            ignore_user_permissions: 0,
            allow_on_submit: 0,
            report_hide: 0,
            remember_last_selected_value: 0,
            ignore_xss_filter: 0,
            hide_border: 0,
            in_filter: 0,
            no_copy: 0,
            print_hide: 0,
            print_hide_if_no_value: 0,
            parentfield: "fields",
            parenttype: "DocType",
            idx: 1,
            __unedited: false
          };
        });
        console.log(fields);
        const permissions = [
          {
            docstatus: 0,
            doctype: "DocPerm",
            __islocal: 1,
            __unsaved: 1,
            owner: "Administrator",
            if_owner: 0,
            permlevel: 0,
            select: 0,
            read: 1,
            write: 1,
            create: 1,
            delete: 1,
            submit: 0,
            cancel: 0,
            amend: 0,
            report: 1,
            export: 1,
            import: 0,
            set_user_permissions: 0,
            share: 1,
            print: 1,
            email: 1,
            parentfield: "permissions",
            parenttype: "DocType",
            idx: 1,
            role: "System Manager"
          }
        ];
        saveFormDoctype({name: title, form: fields, permissions}).then((saved) => {
          frappe.show_alert("Form Saved " + saved.name, 5);
        });
      },
      hideModal() {
        this.$refs["save_modal"].hide();
      },
      update() {
        if (this.formForEditingName) {
          this.updateForm(this.formForEditingName, JSON.stringify(this.configuration));
          return;
        } else {
          alert("Name not found");
        }
      },
      save() {
        this.saveForm(this.title, this.department, JSON.stringify(this.configuration));
      }
    },
    created() {
      const formName = this.$router.currentRoute.params.id;
      if (formName) {
        this.formForEditingName = formName;
        this.getForm(formName);
      }
    },
    components: {},
    mounted() {
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-page"}, [
      _c("b-row", {staticClass: "spacer-left-5"}, [
        _c("b-col", {attrs: {cols: "4"}}, [
          _c("div", {staticStyle: {display: "inline-block"}}, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.previewMode,
                  expression: "previewMode"
                }
              ],
              attrs: {type: "checkbox"},
              domProps: {
                checked: Array.isArray(_vm.previewMode) ? _vm._i(_vm.previewMode, null) > -1 : _vm.previewMode
              },
              on: {
                change: function($event) {
                  var $$a = _vm.previewMode, $$el = $event.target, $$c = $$el.checked ? true : false;
                  if (Array.isArray($$a)) {
                    var $$v = null, $$i = _vm._i($$a, $$v);
                    if ($$el.checked) {
                      $$i < 0 && (_vm.previewMode = $$a.concat([$$v]));
                    } else {
                      $$i > -1 && (_vm.previewMode = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                    }
                  } else {
                    _vm.previewMode = $$c;
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("label", {attrs: {for: "preview"}}, [
              _vm._v("Preview Mode")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("b-col", {staticStyle: {"margin-bottom": "30px"}, attrs: {cols: "8"}}, [
          !_vm.formForEditingName ? _c("button", {
            staticClass: "btn btn-primary pull-right spacer-left",
            on: {click: _vm.exportData}
          }, [_vm._v("\n       EXPORT\n      ")]) : _vm._e(),
          _vm._v(" "),
          _vm.formForEditingName ? _c("button", {
            staticClass: "btn btn-primary pull-right spacer-left",
            on: {
              click: function($event) {
                return _vm.update();
              }
            }
          }, [_vm._v("\n        UPDATE\n      ")]) : _vm._e(),
          _vm._v(" "),
          _vm.previewMode ? _c("button", {
            staticClass: "btn btn-default pull-right spacer-right",
            on: {click: _vm.previewForm}
          }, [_vm._v("\n        DESIGN\n      ")]) : _vm._e(),
          _vm._v(" "),
          !_vm.previewMode ? _c("button", {
            staticClass: "btn btn-default pull-right spacer-right",
            on: {click: _vm.previewForm}
          }, [_vm._v("\n       PREVIEW\n      ")]) : _vm._e(),
          _vm._v(" "),
          _c("div", [
            false ? _c("b-button", {
              directives: [
                {
                  name: "b-toggle",
                  rawName: "v-b-toggle.sidebar-1",
                  modifiers: {"sidebar-1": true}
                }
              ]
            }, [_vm._v("Search Control")]) : _vm._e(),
            _vm._v(" "),
            _c("b-sidebar", {
              attrs: {id: "sidebar-1", title: "Sidebar", shadow: ""}
            }, [
              _c("div", {staticClass: "px-3 py-2 pull-right spacer-right"}, [
                _c("b-row", [
                  _c("b-form-group", [
                    _c("b-form-input", {
                      attrs: {placeholder: "Search dictionary"},
                      model: {
                        value: _vm.searchQuery,
                        callback: function($$v) {
                          _vm.searchQuery = $$v;
                        },
                        expression: "searchQuery"
                      }
                    })
                  ], 1)
                ], 1),
                _vm._v(" "),
                _c("b-row", [
                  _c("ul", _vm._l(_vm.conceptList, function(conceptItem) {
                    return _c("li", {key: conceptItem.name}, [
                      _vm._v("\n                  " + _vm._s(conceptItem[0]) + "\n                ")
                    ]);
                  }), 0)
                ])
              ], 1)
            ])
          ], 1)
        ]),
        _vm._v(" "),
        _c("b-col", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.previewMode,
              expression: "!previewMode"
            }
          ],
          attrs: {cols: "12"}
        }, [
          _c("FormBuilder", {
            staticClass: "fb-area",
            model: {
              value: _vm.configuration,
              callback: function($$v) {
                _vm.configuration = $$v;
              },
              expression: "configuration"
            }
          })
        ], 1),
        _vm._v(" "),
        _c("b-col", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.previewMode,
              expression: "previewMode"
            }
          ],
          staticClass: "top-margin",
          attrs: {cols: "12"}
        }, [
          _c("b-card", {staticClass: "render-form", attrs: {"no-body": ""}}, [
            _c("FormRenderer", {
              attrs: {"form-configuration": _vm.formData},
              model: {
                value: _vm.formInputData,
                callback: function($$v) {
                  _vm.formInputData = $$v;
                },
                expression: "formInputData"
              }
            })
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("b-modal", {
          ref: "save_modal",
          attrs: {"hide-footer": ""},
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [_vm._v(" Create Form ")];
              },
              proxy: true
            }
          ])
        }, [
          _vm._v(" "),
          _c("div", [
            _c("b-form-group", {attrs: {id: "fieldset-1", label: "Enter Form title "}}, [
              _c("b-form-input", {
                attrs: {id: "input-1", state: _vm.state, trim: ""},
                model: {
                  value: _vm.title,
                  callback: function($$v) {
                    _vm.title = $$v;
                  },
                  expression: "title"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("b-form-group", {attrs: {id: "fieldset-1", label: "Enter Department"}}, [
              _c("b-form-input", {
                attrs: {id: "input-1", state: _vm.state, trim: ""},
                model: {
                  value: _vm.department,
                  callback: function($$v) {
                    _vm.department = $$v;
                  },
                  expression: "department"
                }
              })
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("b-button", {
            staticClass: "mt-6 btn btn-primary",
            attrs: {block: ""},
            on: {
              click: function($event) {
                return _vm.save();
              }
            }
          }, [_vm._v("Save")])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-fea96db8_0", {source: '\n.spacer[data-v-fea96db8] {\n  margin-top: 10px;\n}\n.space-right[data-v-fea96db8] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-fea96db8] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.spacer-left-5[data-v-fea96db8] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-fea96db8] {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n.form-border[data-v-fea96db8] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-fea96db8] {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page[data-v-fea96db8] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-fea96db8] {\n  margin-top: 20px;\n}\n.card[data-v-fea96db8] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-fea96db8]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-fea96db8] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-fea96db8] {\n  background-color: white;\n  border-radius: 10px;\n}\n.save-data[data-v-fea96db8] {\n  margin-top: 20px !important;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FormBuilder.vue"], "names": [], "mappings": ";AAmXA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AAEA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;AACA;AAEA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,2BAAA;AACA", "file": "FormBuilder.vue", "sourcesContent": ['<template>\n  <b-container class="main-page">\n    <b-row class="spacer-left-5">\n      <b-col cols="4">\n        <div style="display: inline-block">\n          <input type="checkbox" v-model="previewMode" />\n          <label for="preview">Preview Mode</label>\n        </div>\n      </b-col>\n\n      <b-col cols="8" style="margin-bottom: 30px">\n        <button\n          v-if="!formForEditingName"\n          class="btn btn-primary pull-right spacer-left"\n          v-on:click="exportData"\n        >\n         EXPORT\n        </button>\n\n         <button\n           v-if="formForEditingName"\n          class="btn btn-primary pull-right spacer-left"\n          v-on:click="update()"\n        >\n          UPDATE\n        </button>\n        <button\n          v-if="previewMode"\n          class="btn btn-default pull-right spacer-right"\n          v-on:click="previewForm"\n        >\n          DESIGN\n        </button>\n\n        <button\n          v-if="!previewMode"\n          class="btn btn-default pull-right spacer-right"\n          v-on:click="previewForm"\n        >\n         PREVIEW\n        </button>\n\n        <div>\n          <b-button v-b-toggle.sidebar-1 v-if="false">Search Control</b-button>\n          <b-sidebar id="sidebar-1" title="Sidebar" shadow>\n            <div class="px-3 py-2 pull-right spacer-right">\n              <b-row>\n                <b-form-group>\n                  <b-form-input\n                    v-model="searchQuery"\n                    placeholder="Search dictionary"\n                  ></b-form-input>\n                </b-form-group>\n              </b-row>\n\n              <b-row>\n                <ul>\n                  <li\n                    v-for="conceptItem in conceptList"\n                    :key="conceptItem.name"\n                  >\n                    {{ conceptItem[0] }}\n                  </li>\n                </ul>\n              </b-row>\n            </div>\n          </b-sidebar>\n        </div>\n      </b-col>\n\n      <b-col cols="12" v-show="!previewMode">\n        <FormBuilder v-model="configuration" class="fb-area"></FormBuilder>\n      </b-col>\n\n      <b-col cols="12" v-show="previewMode" class="top-margin">\n        <b-card no-body class="render-form">\n          <FormRenderer\n            :form-configuration="formData"\n            v-model="formInputData"\n          />\n        </b-card>\n      </b-col>\n\n      <b-modal ref="save_modal" hide-footer>\n        <template #modal-title> Create Form </template>\n        <div>\n          <b-form-group id="fieldset-1" label="Enter Form title ">\n            <b-form-input\n              id="input-1"\n              v-model="title"\n              :state="state"\n              trim\n            ></b-form-input>\n          </b-form-group>\n          <b-form-group id="fieldset-1" label="Enter Department">\n            <b-form-input\n              id="input-1"\n              v-model="department"\n              :state="state"\n              trim\n            ></b-form-input>\n          </b-form-group>\n        </div>\n        <b-button\n        \n          class="mt-6 btn btn-primary"\n          block\n          @click="save()"\n          >Save</b-button\n        >\n\n       \n      </b-modal>\n    </b-row>\n  </b-container>\n</template>\n<script>\nimport {\n  saveFormConfiguration,\n  saveFormDoctype,\n  searchConcept,\n  getFormConfiguration,\n  updateFormData,\n  updateFormConfiguration,\n} from "../services/forms/builder.js";\nexport default {\n  name: "Builder",\n\n  data: function () {\n    return {\n      some_data: "This is a vue demo",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      formId: null,\n      configuration: {},\n      formData: null,\n      formInputData: null,\n      conceptList: [],\n      searchQuery: "",\n      formForEditingName: null,\n    };\n  },\n  watch: {\n    configuration(newValue, oldValue) {\n      console.log("Old value ", oldValue);\n      console.log("New Value ", newValue);\n    },\n\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        this.formData = conf;\n      }\n    },\n    searchQuery(searchTearm) {\n      this.searchConceptDictionary(searchTearm);\n    },\n  },\n  methods: {\n    getFormData() {},\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    searchConceptDictionary(searchTearm) {\n      searchConcept(searchTearm).then(\n        (results) => (this.conceptList = results)\n      );\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      this.$refs["save_modal"].show();\n      this.makeDepartmentControl;\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        console.log("Config from server");\n        console.log(formStringConfig);\n        console.log(configObject);\n        this.configuration = configObject;\n      });\n    },\n    saveForm(title, department, configuration) {\n      this.hideModal();\n      saveFormConfiguration({ name: title, department, configuration }).then(\n        (saved) => {\n          this.title = "";\n          this.department = "";\n          this.formForEditingName = saved.name;\n          //this.saveFormTable(title, configuration);\n        }\n      );\n    },\n    updateForm(name, configuration) {\n      this.hideModal();\n      let doctype = "Form Design";\n      const formData = { doctype, name, formdata: configuration };\n      updateFormConfiguration({ formData }).then((saved) => {\n       frappe.show_alert("Form Update Successful", 5);\n      });\n    },\n    makeDepartmentControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Concept Dictionary"),\n          fieldtype: "Link",\n          fieldname: "concept_dictionary",\n          options: "Concept Dictionary",\n          placeholder: __("Search by customer name, phone, email."),\n          onchange: function () {\n            if (this.value) {\n              const mime = this;\n              console.log(mime);\n              const frm = me.events.get_frm();\n              alert(frm);\n            }\n          },\n        },\n        parent: this.$refs["comment-input"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n    },\n\n    saveFormTable(title, configuration) {\n      let filtered = JSON.parse(configuration);\n      let controls = Object.values(filtered.controls);\n      let fields = controls.map((control) => {\n        console.log(control);\n        let required = 0;\n        let datatype = "Data";\n\n        if (control.validations && control.validations.length > 0) {\n          control.validations.forEach((validation) => {\n            if (validation.ruleType === "required") {\n              required = 1;\n            }\n          });\n        }\n\n        if (control.type === "text") {\n          datatype = "Text";\n        }\n\n        return {\n          label: control.label,\n          name: control.name,\n          fieldname: control.name,\n          fieldtype: datatype,\n          rqd: required,\n          docstatus: 0,\n          doctype: "DocField",\n          owner: "Administrator",\n          non_negative: 0,\n          hide_days: 0,\n          hide_seconds: 0,\n          search_index: 0,\n          in_list_view: 1,\n          in_standard_filter: 0,\n          in_global_search: 0,\n          in_preview: 0,\n          allow_in_quick_entry: 0,\n          bold: 0,\n          translatable: 0,\n          collapsible: 0,\n          fetch_if_empty: 0,\n          hidden: 0,\n          read_only: 0,\n          unique: 0,\n          set_only_once: 0,\n          allow_bulk_edit: 0,\n          permlevel: 0,\n          ignore_user_permissions: 0,\n          allow_on_submit: 0,\n          report_hide: 0,\n          remember_last_selected_value: 0,\n          ignore_xss_filter: 0,\n          hide_border: 0,\n          in_filter: 0,\n          no_copy: 0,\n          print_hide: 0,\n          print_hide_if_no_value: 0,\n          parentfield: "fields",\n          parenttype: "DocType",\n          idx: 1,\n          __unedited: false,\n        };\n      });\n\n      console.log(fields);\n\n      const permissions = [\n        {\n          docstatus: 0,\n          doctype: "DocPerm",\n          __islocal: 1,\n          __unsaved: 1,\n          owner: "Administrator",\n          if_owner: 0,\n          permlevel: 0,\n          select: 0,\n          read: 1,\n          write: 1,\n          create: 1,\n          delete: 1,\n          submit: 0,\n          cancel: 0,\n          amend: 0,\n          report: 1,\n          export: 1,\n          import: 0,\n          set_user_permissions: 0,\n          share: 1,\n          print: 1,\n          email: 1,\n          parentfield: "permissions",\n          parenttype: "DocType",\n          idx: 1,\n          role: "System Manager",\n        },\n      ];\n      saveFormDoctype({ name: title, form: fields, permissions }).then(\n        (saved) => {\n          frappe.show_alert("Form Saved " + saved.name, 5);\n        }\n      );\n    },\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    update() {\n      if (this.formForEditingName) {\n        this.updateForm(\n          this.formForEditingName,\n          JSON.stringify(this.configuration)\n        );\n        return;\n      } else {\n        alert("Name not found");\n      }\n    },\n    save() {\n      this.saveForm(\n        this.title,\n        this.department,\n        JSON.stringify(this.configuration)\n      );\n    },\n  },\n  created() {\n     const formName = this.$router.currentRoute.params.id;\n    if (formName) {\n      this.formForEditingName = formName;\n      this.getForm(formName);\n    }\n  },\n  components: {},\n  mounted() {\n    // this.makeDepartmentControl();\n  },\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.save-data {\n  margin-top: 20px !important;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-fea96db8";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="main-page">\n    <b-row class="spacer-left-5">\n      <b-col cols="4">\n        <div style="display: inline-block">\n          <input type="checkbox" v-model="previewMode" />\n          <label for="preview">Preview Mode</label>\n        </div>\n      </b-col>\n\n      <b-col cols="8" style="margin-bottom: 30px">\n        <button\n          v-if="!formForEditingName"\n          class="btn btn-primary pull-right spacer-left"\n          v-on:click="exportData"\n        >\n         EXPORT\n        </button>\n\n         <button\n           v-if="formForEditingName"\n          class="btn btn-primary pull-right spacer-left"\n          v-on:click="update()"\n        >\n          UPDATE\n        </button>\n        <button\n          v-if="previewMode"\n          class="btn btn-default pull-right spacer-right"\n          v-on:click="previewForm"\n        >\n          DESIGN\n        </button>\n\n        <button\n          v-if="!previewMode"\n          class="btn btn-default pull-right spacer-right"\n          v-on:click="previewForm"\n        >\n         PREVIEW\n        </button>\n\n        <div>\n          <b-button v-b-toggle.sidebar-1 v-if="false">Search Control</b-button>\n          <b-sidebar id="sidebar-1" title="Sidebar" shadow>\n            <div class="px-3 py-2 pull-right spacer-right">\n              <b-row>\n                <b-form-group>\n                  <b-form-input\n                    v-model="searchQuery"\n                    placeholder="Search dictionary"\n                  ></b-form-input>\n                </b-form-group>\n              </b-row>\n\n              <b-row>\n                <ul>\n                  <li\n                    v-for="conceptItem in conceptList"\n                    :key="conceptItem.name"\n                  >\n                    {{ conceptItem[0] }}\n                  </li>\n                </ul>\n              </b-row>\n            </div>\n          </b-sidebar>\n        </div>\n      </b-col>\n\n      <b-col cols="12" v-show="!previewMode">\n        <FormBuilder v-model="configuration" class="fb-area"></FormBuilder>\n      </b-col>\n\n      <b-col cols="12" v-show="previewMode" class="top-margin">\n        <b-card no-body class="render-form">\n          <FormRenderer\n            :form-configuration="formData"\n            v-model="formInputData"\n          />\n        </b-card>\n      </b-col>\n\n      <b-modal ref="save_modal" hide-footer>\n        <template #modal-title> Create Form </template>\n        <div>\n          <b-form-group id="fieldset-1" label="Enter Form title ">\n            <b-form-input\n              id="input-1"\n              v-model="title"\n              :state="state"\n              trim\n            ></b-form-input>\n          </b-form-group>\n          <b-form-group id="fieldset-1" label="Enter Department">\n            <b-form-input\n              id="input-1"\n              v-model="department"\n              :state="state"\n              trim\n            ></b-form-input>\n          </b-form-group>\n        </div>\n        <b-button\n        \n          class="mt-6 btn btn-primary"\n          block\n          @click="save()"\n          >Save</b-button\n        >\n\n       \n      </b-modal>\n    </b-row>\n  </b-container>\n</template>\n<script>\nimport {\n  saveFormConfiguration,\n  saveFormDoctype,\n  searchConcept,\n  getFormConfiguration,\n  updateFormData,\n  updateFormConfiguration,\n} from "../services/forms/builder.js";\nexport default {\n  name: "Builder",\n\n  data: function () {\n    return {\n      some_data: "This is a vue demo",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      formId: null,\n      configuration: {},\n      formData: null,\n      formInputData: null,\n      conceptList: [],\n      searchQuery: "",\n      formForEditingName: null,\n    };\n  },\n  watch: {\n    configuration(newValue, oldValue) {\n      console.log("Old value ", oldValue);\n      console.log("New Value ", newValue);\n    },\n\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        this.formData = conf;\n      }\n    },\n    searchQuery(searchTearm) {\n      this.searchConceptDictionary(searchTearm);\n    },\n  },\n  methods: {\n    getFormData() {},\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    searchConceptDictionary(searchTearm) {\n      searchConcept(searchTearm).then(\n        (results) => (this.conceptList = results)\n      );\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      this.$refs["save_modal"].show();\n      this.makeDepartmentControl;\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        console.log("Config from server");\n        console.log(formStringConfig);\n        console.log(configObject);\n        this.configuration = configObject;\n      });\n    },\n    saveForm(title, department, configuration) {\n      this.hideModal();\n      saveFormConfiguration({ name: title, department, configuration }).then(\n        (saved) => {\n          this.title = "";\n          this.department = "";\n          this.formForEditingName = saved.name;\n          //this.saveFormTable(title, configuration);\n        }\n      );\n    },\n    updateForm(name, configuration) {\n      this.hideModal();\n      let doctype = "Form Design";\n      const formData = { doctype, name, formdata: configuration };\n      updateFormConfiguration({ formData }).then((saved) => {\n       frappe.show_alert("Form Update Successful", 5);\n      });\n    },\n    makeDepartmentControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Concept Dictionary"),\n          fieldtype: "Link",\n          fieldname: "concept_dictionary",\n          options: "Concept Dictionary",\n          placeholder: __("Search by customer name, phone, email."),\n          onchange: function () {\n            if (this.value) {\n              const mime = this;\n              console.log(mime);\n              const frm = me.events.get_frm();\n              alert(frm);\n            }\n          },\n        },\n        parent: this.$refs["comment-input"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n    },\n\n    saveFormTable(title, configuration) {\n      let filtered = JSON.parse(configuration);\n      let controls = Object.values(filtered.controls);\n      let fields = controls.map((control) => {\n        console.log(control);\n        let required = 0;\n        let datatype = "Data";\n\n        if (control.validations && control.validations.length > 0) {\n          control.validations.forEach((validation) => {\n            if (validation.ruleType === "required") {\n              required = 1;\n            }\n          });\n        }\n\n        if (control.type === "text") {\n          datatype = "Text";\n        }\n\n        return {\n          label: control.label,\n          name: control.name,\n          fieldname: control.name,\n          fieldtype: datatype,\n          rqd: required,\n          docstatus: 0,\n          doctype: "DocField",\n          owner: "Administrator",\n          non_negative: 0,\n          hide_days: 0,\n          hide_seconds: 0,\n          search_index: 0,\n          in_list_view: 1,\n          in_standard_filter: 0,\n          in_global_search: 0,\n          in_preview: 0,\n          allow_in_quick_entry: 0,\n          bold: 0,\n          translatable: 0,\n          collapsible: 0,\n          fetch_if_empty: 0,\n          hidden: 0,\n          read_only: 0,\n          unique: 0,\n          set_only_once: 0,\n          allow_bulk_edit: 0,\n          permlevel: 0,\n          ignore_user_permissions: 0,\n          allow_on_submit: 0,\n          report_hide: 0,\n          remember_last_selected_value: 0,\n          ignore_xss_filter: 0,\n          hide_border: 0,\n          in_filter: 0,\n          no_copy: 0,\n          print_hide: 0,\n          print_hide_if_no_value: 0,\n          parentfield: "fields",\n          parenttype: "DocType",\n          idx: 1,\n          __unedited: false,\n        };\n      });\n\n      console.log(fields);\n\n      const permissions = [\n        {\n          docstatus: 0,\n          doctype: "DocPerm",\n          __islocal: 1,\n          __unsaved: 1,\n          owner: "Administrator",\n          if_owner: 0,\n          permlevel: 0,\n          select: 0,\n          read: 1,\n          write: 1,\n          create: 1,\n          delete: 1,\n          submit: 0,\n          cancel: 0,\n          amend: 0,\n          report: 1,\n          export: 1,\n          import: 0,\n          set_user_permissions: 0,\n          share: 1,\n          print: 1,\n          email: 1,\n          parentfield: "permissions",\n          parenttype: "DocType",\n          idx: 1,\n          role: "System Manager",\n        },\n      ];\n      saveFormDoctype({ name: title, form: fields, permissions }).then(\n        (saved) => {\n          frappe.show_alert("Form Saved " + saved.name, 5);\n        }\n      );\n    },\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    update() {\n      if (this.formForEditingName) {\n        this.updateForm(\n          this.formForEditingName,\n          JSON.stringify(this.configuration)\n        );\n        return;\n      } else {\n        alert("Name not found");\n      }\n    },\n    save() {\n      this.saveForm(\n        this.title,\n        this.department,\n        JSON.stringify(this.configuration)\n      );\n    },\n  },\n  created() {\n     const formName = this.$router.currentRoute.params.id;\n    if (formName) {\n      this.formForEditingName = formName;\n      this.getForm(formName);\n    }\n  },\n  components: {},\n  mounted() {\n    // this.makeDepartmentControl();\n  },\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.save-data {\n  margin-top: 20px !important;\n}\n</style>\n';
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__() {
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = {ids: [], parts: [], element: void 0});
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__ = /* @__PURE__ */ __vue_normalize__({render: __vue_render__, staticRenderFns: __vue_staticRenderFns__}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, void 0, void 0);
  var FormBuilder_default = __vue_component__;

  // ../frontend/frontend/public/js/forms/forms.bundle.js
  Vue.use(VueFormBuilderPlugin, {});
  frappe.provide("frappe.forms");
  frappe.forms.PatientFormBuilder = class {
    constructor({parent}) {
      this.$parent = $(parent);
      this.page = parent.page;
      this.make_body();
    }
    make_body() {
      this.$body = this.$parent.find(".layout-main-section");
      this.$parent.find(".page-head").addClass("hidden");
      this.$parent.find(".page-body").removeClass("container");
      this.$parent.find(".content").removeClass("page-container");
      this.$parent.find(".page-content").removeClass("page-content");
      this.$page_container = $('<div class="hub-page-container">').appendTo(this.$body);
      new Vue({
        el: ".hub-page-container",
        render: (h) => h(FormBuilder_default)
      });
    }
  };
})();
//# sourceMappingURL=forms.bundle.IFRCZF75.js.map
