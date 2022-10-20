(() => {
  // ../frontend/frontend/public/js/services/forms/builder.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var fetch = ({method, args = {}}) => new Promise((resolve, reject) => frappe.call({method, type: "GET", args, callback: resolve}));
  var getFormConfiguration = ({name = ""}) => fetch({
    method: "clinical.api.forms.form_builder.get_form_configuration",
    args: {
      name
    }
  }).then(({message}) => message);
  var getFormsVersions = ({name = ""}) => fetch({
    method: "clinical.api.forms.form_builder.get_form_versions",
    args: {
      name
    }
  }).then(({message}) => message);
  var saveFormData = ({formData}) => api({
    method: "clinical.api.forms.form_builder.save_form_data",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/forms/FormRenderView.vue
  var __vue_script__ = {
    name: "FormRenderView",
    data: function() {
      return {
        some_data: "This is a vue demo",
        date: null,
        previewMode: false,
        title: "",
        department: "",
        tableName: "",
        configuration: {},
        formData: null,
        currentFormId: null,
        formName: null,
        selectedItem: null,
        formInputData: null,
        originalConfig: null
      };
    },
    props: {
      selectedDoctype: {type: String},
      selectedDoctypeReference: {type: String}
    },
    watch: {
      previewMode(newVal, oldVal) {
        if (newVal) {
          const conf = this.configuration;
          this.formData = conf;
        }
      },
      selectedDoctype(doctype) {
        if (doctype) {
          this.makeDoctypeItemControl(doctype);
        }
      }
    },
    methods: {
      clearData() {
        const val = {};
        const keys = Object.keys(this.formInputData);
        keys.forEach((key) => {
          val[key] = "";
        });
        this.setValues(val);
      },
      getFormData() {
        const formName = frappe.get_route()[2];
        this.tableName = formName.split("-")[1];
        this.showModal();
      },
      getFormInputData() {
      },
      exportData() {
        this.showModal();
      },
      previewForm() {
        this.previewMode = !this.previewMode;
      },
      showModal() {
        this.$refs["save_modal"].show();
      },
      clear() {
        this.formData = null;
        this.formData = this.originalConfig;
      },
      makeSelectDoctypeControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "reference",
            options: "DocType",
            placeholder: __("Search Reference"),
            onchange: function() {
              if (this.value) {
                me.selectedDoctype = this.value;
              }
            }
          },
          parent: this.$refs["doctype"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      makeDoctypeItemControl(doctype) {
        const div = $("#ref-field");
        div.empty();
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference Id"),
            fieldtype: "Link",
            fieldname: "itemControl",
            options: doctype,
            placeholder: __("Reference Id"),
            onchange: function() {
              if (this.value) {
                me.selectedDoctypeReference = this.value;
              }
            }
          },
          parent: this.$refs["docId"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      saveForm(formData) {
        this.hideModal();
        saveFormData(formData).then((saved) => {
          frappe.show_alert("Form Saved " + saved.name, 5);
          this.formInputData = null;
          this.clearData();
        });
      },
      getForm(name) {
        getFormConfiguration({name}).then((config) => {
          const formStringConfig = config.formdata;
          const configObject = JSON.parse(formStringConfig);
          console.log(configObject);
          this.formName = config.name;
          this.formData = configObject;
          this.originalConfig = configObject;
        });
      },
      hideModal() {
        this.$refs["save_modal"].hide();
      },
      navigateToList() {
        const formName = frappe.get_route()[2];
        this.tableName = formName.split("-")[1];
      },
      save() {
        this.hideModal();
        let form_content = this.formInputData;
        form_content = JSON.stringify(form_content);
        const form_name = this.formName;
        const reference_doctype = this.selectedDoctype;
        const reference_doctype_id = this.selectedDoctypeReference;
        let doctype = "Form Repository";
        let formData = {
          doctype,
          form_content,
          form_name,
          reference_doctype,
          reference_doctype_id
        };
        this.saveForm({formData});
      }
    },
    created() {
      let formName = frappe.get_route()[2];
      if (!frappe.get_route()[2]) {
        formName = frappe.get_route()[1];
      }
      this.getForm(formName);
    },
    mounted() {
      this.$formEvent.$on("submit", (value) => {
      });
      this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
        this.makeSelectDoctypeControl();
        console.log("Modal is about to be shown", bvEvent, modalId);
      });
    },
    components: {}
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-page"}, [
      _c("div", {staticClass: "spacer-left-5"}, [
        _c("b-row", {staticClass: "top-margin"}, [
          _c("b-container", [
            _c("b-row", {staticClass: "save-btn"}, [
              _c("b-col", {staticClass: "ref-field-input pull-right"}),
              _vm._v(" "),
              _c("b-col", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectedDoctype,
                    expression: "selectedDoctype"
                  }
                ],
                ref: "docId",
                staticClass: "ref-field-input pull-right"
              })
            ], 1)
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("b-row", [
          _c("div", {staticClass: "render-form row"}, [
            _c("b-row", {staticClass: "save-btn"}, [
              _c("b-button", {
                staticClass: "btn btn-primary white-text",
                on: {
                  click: function($event) {
                    return _vm.getFormData();
                  }
                }
              }, [_vm._v("\n            Save Data")])
            ], 1),
            _vm._v(" "),
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
        ]),
        _vm._v(" "),
        _c("b-modal", {
          ref: "save_modal",
          attrs: {size: "sm", "hide-footer": ""},
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [_vm._v(" Confirm save form data ")];
              },
              proxy: true
            }
          ])
        }, [
          _vm._v(" "),
          _c("b-row", {staticClass: "modal-padding", attrs: {id: "modal-body"}}, [
            _c("b-col", {
              ref: "doctype",
              staticClass: "ref-field-input",
              attrs: {cols: 12}
            }),
            _vm._v(" "),
            _c("b-col", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectedDoctype,
                  expression: "selectedDoctype"
                }
              ],
              ref: "docId",
              staticClass: "ref-field-input",
              attrs: {cols: 12, id: "ref-field"}
            })
          ], 1),
          _vm._v(" "),
          _c("b-button", {
            staticClass: "mt-3 btn btn-primary",
            attrs: {block: ""},
            on: {
              click: function($event) {
                return _vm.save();
              }
            }
          }, [_vm._v("Save")])
        ], 1)
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-1afac4c7_0", {source: '\n.spacer[data-v-1afac4c7] {\n  margin-top: 10px;\n}\n.space-right[data-v-1afac4c7] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-1afac4c7] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn[data-v-1afac4c7] {\n  color: white;\n  margin-left: 8px;\n  margin-top: 2%;\n}\n.spacer-left-5[data-v-1afac4c7] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-1afac4c7] {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n.white-text[data-v-1afac4c7] {\n  color: white;\n  margin-left: 10px;\n}\n.form-border[data-v-1afac4c7] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-1afac4c7] {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page[data-v-1afac4c7] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-1afac4c7] {\n  margin-top: 20px;\n}\n.card[data-v-1afac4c7] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-1afac4c7]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-1afac4c7] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-1afac4c7] {\n  background-color: white;\n  border-radius: 10px;\n}\n.space-left[data-v-1afac4c7] {\n  margin-left: 8px;\n}\n.ref-field-input[data-v-1afac4c7] {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width[data-v-1afac4c7] {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding[data-v-1afac4c7] {\n  padding-left: 15px;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FormRenderView.vue"], "names": [], "mappings": ";AA4OA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;AACA;AACA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;AACA;AACA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;AACA", "file": "FormRenderView.vue", "sourcesContent": ['<template>\n  <b-container class="main-page">\n    <div class="spacer-left-5">\n      <b-row class="top-margin">\n        <b-container>\n          <b-row class="save-btn">\n            <b-col class="ref-field-input pull-right" />\n            <b-col\n              v-show="selectedDoctype"\n              ref="docId"\n              class="ref-field-input pull-right"\n            />\n          </b-row>\n        </b-container>\n      </b-row>\n      <b-row>\n        <div class="render-form row">\n           <b-row class="save-btn">\n            <b-button class="btn btn-primary white-text" @click="getFormData()">\n              Save Data</b-button\n            >\n          </b-row>\n          <FormRenderer\n            :form-configuration="formData"\n            v-model="formInputData"\n          />\n         \n        </div>\n      </b-row>\n      <b-modal ref="save_modal" size="sm" hide-footer>\n        <template #modal-title> Confirm save form data </template>\n        <b-row class="modal-padding" id="modal-body">\n          <b-col :cols="12" ref="doctype" class="ref-field-input">\n            <!-- {{ tableName }}\n          <br />\n          {{ formInputData }} -->\n          </b-col>\n\n          <b-col\n            :cols="12"\n            v-show="selectedDoctype"\n            ref="docId"\n            id="ref-field"\n            class="ref-field-input"\n          />\n        </b-row>\n\n        <b-button class="mt-3 btn btn-primary" block @click="save()"\n          >Save</b-button\n        >\n      </b-modal>\n    </div>\n  </b-container>\n</template>\n<script>\nimport {\n  getFormConfiguration,\n  saveFormData,\n} from "../services/forms/builder.js";\nexport default {\n  name: "FormRenderView",\n\n  data: function () {\n    return {\n      some_data: "This is a vue demo",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      tableName: "",\n      configuration: {},\n      formData: null,\n      currentFormId:null,\n      formName: null,\n      selectedItem: null,\n      formInputData: null,\n      originalConfig: null,\n    };\n  },\n  props: {\n    selectedDoctype: { type: String },\n    selectedDoctypeReference: { type: String },\n  },\n  watch: {\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        this.formData = conf;\n      }\n    },\n    selectedDoctype(doctype) {\n      if (doctype) {\n        this.makeDoctypeItemControl(doctype);\n      }\n    },\n  },\n  methods: {\n     clearData() {\n      const val = {};\n      const keys = Object.keys(this.formInputData);\n      keys.forEach((key) => {\n        val[key] = "";\n      });\n\n      this.setValues(val);\n    },\n    getFormData() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n      this.showModal();\n    },\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      this.$refs["save_modal"].show();\n    },\n    clear() {\n      this.formData = null;\n      this.formData = this.originalConfig;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "DocType",\n          placeholder: __("Search Reference"),\n          onchange: function () {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n\n    makeDoctypeItemControl(doctype) {\n      const div = $("#ref-field");\n      div.empty();\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference Id"),\n          fieldtype: "Link",\n          fieldname: "itemControl",\n          options: doctype,\n          placeholder: __("Reference Id"),\n          onchange: function () {\n            if (this.value) {\n              me.selectedDoctypeReference = this.value;\n            }\n          },\n        },\n        parent: this.$refs["docId"],\n        render_input: true,\n      });\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    saveForm(formData) {\n      this.hideModal();\n      saveFormData(formData).then((saved) => {\n        frappe.show_alert("Form Saved " + saved.name, 5);\n        this.formInputData = null;\n       \n        this.clearData();\n      });\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        console.log(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    navigateToList() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n      // frappe.set_route("List", this.tableName);\n    },\n    save() {\n      this.hideModal();\n      let form_content = this.formInputData;\n      form_content = JSON.stringify(form_content);\n      const form_name = this.formName;\n      const reference_doctype = this.selectedDoctype;\n      const reference_doctype_id = this.selectedDoctypeReference;\n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        form_content,\n        form_name,\n        reference_doctype,\n        reference_doctype_id,\n      };\n      this.saveForm({ formData });\n    },\n  },\n  created() {\n    let formName = frappe.get_route()[2];\n\n    if(!frappe.get_route()[2]){\n      formName = frappe.get_route()[1]\n    }\n    this.getForm(formName);\n  },\n\n  mounted() {\n    this.$formEvent.$on("submit", (value) => {});\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.makeSelectDoctypeControl();\n      console.log("Modal is about to be shown", bvEvent, modalId);\n    });\n  },\n  components: {},\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn {\n  color: white;\n  margin-left: 8px;\n  margin-top: 2%;\n}\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n.white-text {\n  color: white;\n  margin-left: 10px;\n}\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.space-left {\n  margin-left: 8px;\n}\n\n.ref-field-input {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding {\n  padding-left: 15px;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-1afac4c7";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="main-page">\n    <div class="spacer-left-5">\n      <b-row class="top-margin">\n        <b-container>\n          <b-row class="save-btn">\n            <b-col class="ref-field-input pull-right" />\n            <b-col\n              v-show="selectedDoctype"\n              ref="docId"\n              class="ref-field-input pull-right"\n            />\n          </b-row>\n        </b-container>\n      </b-row>\n      <b-row>\n        <div class="render-form row">\n           <b-row class="save-btn">\n            <b-button class="btn btn-primary white-text" @click="getFormData()">\n              Save Data</b-button\n            >\n          </b-row>\n          <FormRenderer\n            :form-configuration="formData"\n            v-model="formInputData"\n          />\n         \n        </div>\n      </b-row>\n      <b-modal ref="save_modal" size="sm" hide-footer>\n        <template #modal-title> Confirm save form data </template>\n        <b-row class="modal-padding" id="modal-body">\n          <b-col :cols="12" ref="doctype" class="ref-field-input">\n            <!-- {{ tableName }}\n          <br />\n          {{ formInputData }} -->\n          </b-col>\n\n          <b-col\n            :cols="12"\n            v-show="selectedDoctype"\n            ref="docId"\n            id="ref-field"\n            class="ref-field-input"\n          />\n        </b-row>\n\n        <b-button class="mt-3 btn btn-primary" block @click="save()"\n          >Save</b-button\n        >\n      </b-modal>\n    </div>\n  </b-container>\n</template>\n<script>\nimport {\n  getFormConfiguration,\n  saveFormData,\n} from "../services/forms/builder.js";\nexport default {\n  name: "FormRenderView",\n\n  data: function () {\n    return {\n      some_data: "This is a vue demo",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      tableName: "",\n      configuration: {},\n      formData: null,\n      currentFormId:null,\n      formName: null,\n      selectedItem: null,\n      formInputData: null,\n      originalConfig: null,\n    };\n  },\n  props: {\n    selectedDoctype: { type: String },\n    selectedDoctypeReference: { type: String },\n  },\n  watch: {\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        this.formData = conf;\n      }\n    },\n    selectedDoctype(doctype) {\n      if (doctype) {\n        this.makeDoctypeItemControl(doctype);\n      }\n    },\n  },\n  methods: {\n     clearData() {\n      const val = {};\n      const keys = Object.keys(this.formInputData);\n      keys.forEach((key) => {\n        val[key] = "";\n      });\n\n      this.setValues(val);\n    },\n    getFormData() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n      this.showModal();\n    },\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      this.$refs["save_modal"].show();\n    },\n    clear() {\n      this.formData = null;\n      this.formData = this.originalConfig;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "DocType",\n          placeholder: __("Search Reference"),\n          onchange: function () {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n\n    makeDoctypeItemControl(doctype) {\n      const div = $("#ref-field");\n      div.empty();\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference Id"),\n          fieldtype: "Link",\n          fieldname: "itemControl",\n          options: doctype,\n          placeholder: __("Reference Id"),\n          onchange: function () {\n            if (this.value) {\n              me.selectedDoctypeReference = this.value;\n            }\n          },\n        },\n        parent: this.$refs["docId"],\n        render_input: true,\n      });\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    saveForm(formData) {\n      this.hideModal();\n      saveFormData(formData).then((saved) => {\n        frappe.show_alert("Form Saved " + saved.name, 5);\n        this.formInputData = null;\n       \n        this.clearData();\n      });\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        console.log(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    navigateToList() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n      // frappe.set_route("List", this.tableName);\n    },\n    save() {\n      this.hideModal();\n      let form_content = this.formInputData;\n      form_content = JSON.stringify(form_content);\n      const form_name = this.formName;\n      const reference_doctype = this.selectedDoctype;\n      const reference_doctype_id = this.selectedDoctypeReference;\n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        form_content,\n        form_name,\n        reference_doctype,\n        reference_doctype_id,\n      };\n      this.saveForm({ formData });\n    },\n  },\n  created() {\n    let formName = frappe.get_route()[2];\n\n    if(!frappe.get_route()[2]){\n      formName = frappe.get_route()[1]\n    }\n    this.getForm(formName);\n  },\n\n  mounted() {\n    this.$formEvent.$on("submit", (value) => {});\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.makeSelectDoctypeControl();\n      console.log("Modal is about to be shown", bvEvent, modalId);\n    });\n  },\n  components: {},\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn {\n  color: white;\n  margin-left: 8px;\n  margin-top: 2%;\n}\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n.white-text {\n  color: white;\n  margin-left: 10px;\n}\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.space-left {\n  margin-left: 8px;\n}\n\n.ref-field-input {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding {\n  padding-left: 15px;\n}\n</style>\n';
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
  var FormRenderView_default = __vue_component__;

  // ../frontend/frontend/public/js/forms/FormInspector.vue
  var __vue_script__2 = {
    name: "FormRenderView",
    data: function() {
      return {
        some_data: "This is a vue demo",
        date: null,
        previewMode: false,
        title: "",
        department: "",
        tableName: "",
        configuration: {},
        formData: null,
        currentFormId: null,
        formName: null,
        selectedItem: null,
        formInputData: null,
        originalConfig: null,
        sectionFields: ["headline", "subHeadline", "controls"],
        versions: []
      };
    },
    props: {
      selectedDoctype: {type: String},
      selectedDoctypeReference: {type: String}
    },
    watch: {
      previewMode(newVal, oldVal) {
        if (newVal) {
          const conf = this.configuration;
          this.formData = conf;
        }
      },
      selectedDoctype(doctype) {
        if (doctype) {
          this.makeDoctypeItemControl(doctype);
        }
      }
    },
    methods: {
      preview(configuration) {
        try {
          let conf = JSON.parse(configuration);
          this.formData = conf;
        } catch (e) {
          frappe.show_alert("Error configuration file has a problem");
        }
      },
      copyToClipBoard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          var successful = document.execCommand("copy");
          var msg = successful ? "successful" : "unsuccessful";
          frappe.show_alert("Copied to clipboard");
          console.log("Fallback: Copying text command was " + msg);
        } catch (err) {
          frappe.show_alert("Error");
          console.error("Fallback: Oops, unable to copy", err);
        }
        document.body.removeChild(textArea);
      },
      formatConfig(config) {
        var dd = config.replaceAll("<br>", "");
        var validJson = true;
        try {
          return Object.keys(JSON.parse(dd).controls).length;
        } catch (e) {
          return e;
        }
        return dd;
      },
      openLink(item) {
        const host = window.location.href.split("/app")[0];
        const url = host + "/app/dictionary-concept/" + item;
        window.open(url, "_blank");
      },
      clearData() {
        const val = {};
        const keys = Object.keys(this.formInputData);
        keys.forEach((key) => {
          val[key] = "";
        });
        this.setValues(val);
      },
      getFormData() {
        const formName = frappe.get_route()[2];
        this.tableName = formName.split("-")[1];
        this.showModal();
      },
      getFormInputData() {
      },
      exportData() {
        this.showModal();
      },
      previewForm() {
        this.previewMode = !this.previewMode;
      },
      showModal() {
        this.$refs["save_modal"].show();
      },
      clear() {
        this.formData = null;
        this.formData = this.originalConfig;
      },
      makeSelectDoctypeControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "reference",
            options: "DocType",
            placeholder: __("Search Reference"),
            onchange: function() {
              if (this.value) {
                me.selectedDoctype = this.value;
              }
            }
          },
          parent: this.$refs["doctype"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      makeDoctypeItemControl(doctype) {
        const div = $("#ref-field");
        div.empty();
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference Id"),
            fieldtype: "Link",
            fieldname: "itemControl",
            options: doctype,
            placeholder: __("Reference Id"),
            onchange: function() {
              if (this.value) {
                me.selectedDoctypeReference = this.value;
              }
            }
          },
          parent: this.$refs["docId"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      saveForm(formData) {
        this.hideModal();
        saveFormData(formData).then((saved) => {
          frappe.show_alert("Form Saved " + saved.name, 5);
          this.formInputData = null;
          this.clearData();
        });
      },
      getCurrentFormVersions(name) {
        getFormsVersions({name}).then((response) => this.versions = response);
      },
      getForm(name) {
        getFormConfiguration({name}).then((config) => {
          const formStringConfig = config.formdata;
          const configObject = JSON.parse(formStringConfig);
          console.log(configObject);
          this.formName = config.name;
          this.formData = configObject;
          this.originalConfig = configObject;
        });
      },
      hideModal() {
        this.$refs["save_modal"].hide();
      },
      navigateToList() {
        const formName = frappe.get_route()[2];
        this.tableName = formName.split("-")[1];
      },
      save() {
        this.hideModal();
        let form_content = this.formInputData;
        form_content = JSON.stringify(form_content);
        const form_name = this.formName;
        const reference_doctype = this.selectedDoctype;
        const reference_doctype_id = this.selectedDoctypeReference;
        let doctype = "Form Repository";
        let formData = {
          doctype,
          form_content,
          form_name,
          reference_doctype,
          reference_doctype_id
        };
        this.saveForm({formData});
      }
    },
    created() {
      let formName = frappe.get_route()[2];
      if (!frappe.get_route()[2]) {
        formName = frappe.get_route()[1];
      }
      this.getForm(formName);
      this.getCurrentFormVersions(formName);
    },
    mounted() {
      this.$formEvent.$on("submit", (value) => {
      });
      this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
        this.makeSelectDoctypeControl();
        console.log("Modal is about to be shown", bvEvent, modalId);
      });
    },
    components: {}
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-page"}, [
      _c("b-card", {attrs: {"no-body": ""}}, [
        _c("b-tabs", {attrs: {card: ""}}, [
          _c("b-tab", {attrs: {title: "Form Preview", active: ""}}, [
            _c("b-card-text", [
              _c("div", {staticClass: "spacer-left-5"}, [
                _c("b-row", {}, [
                  _c("b-container", [
                    _c("b-row", {staticClass: "save-btn"}, [
                      _c("b-col", {
                        staticClass: "ref-field-input pull-right"
                      }),
                      _vm._v(" "),
                      _c("b-col", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.selectedDoctype,
                            expression: "selectedDoctype"
                          }
                        ],
                        ref: "docId",
                        staticClass: "ref-field-input pull-right"
                      })
                    ], 1)
                  ], 1)
                ], 1),
                _vm._v(" "),
                _c("b-row", [
                  _c("div", {staticClass: "render-form row"}, [
                    _c("b-row", {
                      staticClass: "save-btn mr-3",
                      staticStyle: {width: "100%"}
                    }, [
                      _c("b-col"),
                      _vm._v(" "),
                      _c("b-button", {
                        staticClass: "btn btn-primary white-text",
                        on: {
                          click: function($event) {
                            return _vm.getFormData();
                          }
                        }
                      }, [_vm._v("\n                    Save Data")])
                    ], 1),
                    _vm._v(" "),
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
                ]),
                _vm._v(" "),
                _c("b-modal", {
                  ref: "save_modal",
                  attrs: {size: "sm", "hide-footer": ""},
                  scopedSlots: _vm._u([
                    {
                      key: "modal-title",
                      fn: function() {
                        return [_vm._v(" Confirm save form data ")];
                      },
                      proxy: true
                    }
                  ])
                }, [
                  _vm._v(" "),
                  _c("b-row", {
                    staticClass: "modal-padding",
                    attrs: {id: "modal-body"}
                  }, [
                    _c("b-col", {
                      ref: "doctype",
                      staticClass: "ref-field-input",
                      attrs: {cols: 12}
                    }),
                    _vm._v(" "),
                    _c("b-col", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selectedDoctype,
                          expression: "selectedDoctype"
                        }
                      ],
                      ref: "docId",
                      staticClass: "ref-field-input",
                      attrs: {cols: 12, id: "ref-field"}
                    })
                  ], 1),
                  _vm._v(" "),
                  _c("b-button", {
                    staticClass: "mt-0 btn btn-primary",
                    attrs: {block: ""},
                    on: {
                      click: function($event) {
                        return _vm.save();
                      }
                    }
                  }, [_vm._v("Save")])
                ], 1)
              ], 1)
            ])
          ], 1),
          _vm._v(" "),
          _c("b-tab", {attrs: {title: "Form Inspector"}}, [
            _c("b-card-text", [
              _vm.formData ? _c("b-row", {
                staticClass: "m-4",
                staticStyle: {width: "100%"}
              }, [
                _c("div", {
                  staticClass: "accordion",
                  staticStyle: {width: "100%"},
                  attrs: {role: "tablist"}
                }, [
                  _c("b-card", {
                    staticClass: "mb-1",
                    staticStyle: {width: "100%"},
                    attrs: {"no-body": ""}
                  }, [
                    _c("b-card-header", {
                      staticClass: "p-1",
                      attrs: {
                        "header-tag": "header",
                        role: "tab"
                      }
                    }, [
                      _c("b-button", {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.accordion-1",
                            modifiers: {
                              "accordion-1": true
                            }
                          }
                        ],
                        attrs: {
                          block: "",
                          variant: "primary"
                        }
                      }, [_vm._v("Form Config")])
                    ], 1),
                    _vm._v(" "),
                    _c("b-collapse", {
                      attrs: {
                        id: "accordion-1",
                        visible: "",
                        accordion: "my-accordion",
                        role: "tabpanel"
                      }
                    }, [
                      _c("b-card-body", [
                        _c("b-card-text", [
                          _c("b-table", {
                            attrs: {
                              items: [
                                _vm.formData.formConfig
                              ]
                            }
                          })
                        ], 1)
                      ], 1)
                    ], 1)
                  ], 1),
                  _vm._v(" "),
                  _c("b-card", {
                    staticClass: "mb-1",
                    attrs: {"no-body": ""}
                  }, [
                    _c("b-card-header", {
                      staticClass: "p-1",
                      attrs: {
                        "header-tag": "header",
                        role: "tab"
                      }
                    }, [
                      _c("b-button", {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.accordion-2",
                            modifiers: {
                              "accordion-2": true
                            }
                          }
                        ],
                        attrs: {
                          block: "",
                          variant: "primary"
                        }
                      }, [
                        _vm._v("Sections\n                    "),
                        _c("b-badge", {attrs: {variant: "light"}}, [
                          _vm._v(_vm._s(Object.keys(_vm.formData.sections).length))
                        ])
                      ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("b-collapse", {
                      attrs: {
                        id: "accordion-2",
                        accordion: "my-accordion",
                        role: "tabpanel"
                      }
                    }, [
                      _c("b-card-body", [
                        _c("b-list-group", _vm._l(Object.keys(_vm.formData.sections), function(section) {
                          return _c("b-list-group-item", {
                            key: section,
                            attrs: {
                              id: "accordion-100",
                              visible: ""
                            }
                          }, [
                            _c("b-row", [
                              _c("h4", [
                                _vm._v(_vm._s(_vm.formData.sections[section].headline))
                              ]),
                              _vm._v(" "),
                              _c("b-col"),
                              _vm._v(" "),
                              _c("b-button", {
                                attrs: {
                                  variant: "danger"
                                }
                              }, [
                                _vm._v(" Remove ")
                              ])
                            ], 1),
                            _vm._v(" "),
                            _c("b-table", {
                              attrs: {
                                stacked: true,
                                items: [
                                  _vm.formData.sections[section]
                                ],
                                fields: _vm.sectionFields
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "cell(controls)",
                                  fn: function(data) {
                                    return _vm._l(data.value, function(item) {
                                      return _c("b-button", {
                                        key: item,
                                        staticClass: "m-1",
                                        attrs: {
                                          variant: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.openLink(item);
                                          }
                                        }
                                      }, [
                                        _vm._v(_vm._s(item) + "\n                            ")
                                      ]);
                                    });
                                  }
                                }
                              ], null, true)
                            })
                          ], 1);
                        }), 1)
                      ], 1)
                    ], 1)
                  ], 1),
                  _vm._v(" "),
                  _c("b-card", {
                    staticClass: "mb-1",
                    attrs: {"no-body": ""}
                  }, [
                    _c("b-card-header", {
                      staticClass: "p-1",
                      attrs: {
                        "header-tag": "header",
                        role: "tab"
                      }
                    }, [
                      _c("b-button", {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.accordion-3",
                            modifiers: {
                              "accordion-3": true
                            }
                          }
                        ],
                        attrs: {
                          block: "",
                          variant: "primary"
                        }
                      }, [
                        _vm._v("Concepts\n                    "),
                        _c("b-badge", {attrs: {variant: "light"}}, [
                          _vm._v(_vm._s(Object.keys(_vm.formData.controls).length))
                        ])
                      ], 1)
                    ], 1),
                    _vm._v(" "),
                    _c("b-collapse", {
                      attrs: {
                        id: "accordion-3",
                        accordion: "my-accordion",
                        role: "tabpanel"
                      }
                    }, [
                      _c("b-card-body", [
                        _c("b-list-group", _vm._l(Object.keys(_vm.formData.controls), function(control) {
                          return _c("b-list-group-item", {key: control}, [
                            _c("b-row", {
                              staticStyle: {
                                width: "100%"
                              }
                            }, [
                              _vm._v("\n                          " + _vm._s(control) + " "),
                              _c("b-col"),
                              _vm._v(" "),
                              _c("b-button", {
                                attrs: {
                                  variant: "danger"
                                }
                              }, [
                                _vm._v(" Remove")
                              ])
                            ], 1)
                          ], 1);
                        }), 1)
                      ], 1)
                    ], 1)
                  ], 1)
                ], 1)
              ]) : _vm._e()
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("b-tab", {attrs: {title: "Form Versions"}}, [
            _c("b-card-text", [
              _c("b-list-group", _vm._l(_vm.versions, function(version) {
                return _c("b-list-group-item", {key: version}, [
                  JSON.parse(version.data).changed ? _c("span", [
                    _vm._v(" " + _vm._s(version.modified) + " :")
                  ]) : _vm._e(),
                  _vm._v(" "),
                  JSON.parse(version.data).changed ? _c("b-badge", {attrs: {variant: "primary", pill: ""}}, [
                    _vm._v("\n                " + _vm._s(_vm.formatConfig(JSON.parse(version.data).changed["0"]["1"])) + "\n              ")
                  ]) : _vm._e(),
                  _vm._v(" "),
                  JSON.parse(version.data).changed ? _c("b-button", {
                    on: {
                      click: function($event) {
                        _vm.copyToClipBoard(JSON.parse(version.data).changed["0"]["1"]);
                      }
                    }
                  }, [_vm._v(" Copy JSON To Clipboard")]) : _vm._e(),
                  _vm._v(" "),
                  JSON.parse(version.data).changed ? _c("b-button", {
                    on: {
                      click: function($event) {
                        _vm.preview(JSON.parse(version.data).changed["0"]["1"]);
                      }
                    }
                  }, [_vm._v(" Preview")]) : _c("span", [
                    _vm._v(_vm._s(version.modified) + " :  Configuration not changed")
                  ])
                ], 1);
              }), 1)
            ], 1)
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-b47e1b9a_0", {source: '\n.spacer[data-v-b47e1b9a] {\n  margin-top: 10px;\n}\n.space-right[data-v-b47e1b9a] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-b47e1b9a] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn[data-v-b47e1b9a] {\n  color: white;\n  margin-left: 8px;\n}\n.spacer-left-5[data-v-b47e1b9a] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-b47e1b9a] {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n.white-text[data-v-b47e1b9a] {\n  color: white;\n  margin-left: 10px;\n}\n.form-border[data-v-b47e1b9a] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-b47e1b9a] {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page[data-v-b47e1b9a] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-b47e1b9a] {\n  margin-top: 20px;\n}\n.card[data-v-b47e1b9a] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-b47e1b9a]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-b47e1b9a] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-b47e1b9a] {\n  background-color: white;\n  border-radius: 10px;\n}\n.space-left[data-v-b47e1b9a] {\n  margin-left: 8px;\n}\n.ref-field-input[data-v-b47e1b9a] {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width[data-v-b47e1b9a] {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding[data-v-b47e1b9a] {\n  padding-left: 15px;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FormInspector.vue"], "names": [], "mappings": ";AAmbA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,gBAAA;AACA;AACA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;AACA;AACA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;AACA", "file": "FormInspector.vue", "sourcesContent": [`<template>
  <b-container class="main-page">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Form Preview" active>
          <b-card-text>
            <div class="spacer-left-5">
              <b-row class="">
                <b-container>
                  <b-row class="save-btn">
                    <b-col class="ref-field-input pull-right" />
                    <b-col
                      v-show="selectedDoctype"
                      ref="docId"
                      class="ref-field-input pull-right"
                    />
                  </b-row>
                </b-container>
              </b-row>
              <b-row>
                <div class="render-form row">
                  <b-row class="save-btn mr-3" style="width: 100%">
                    <b-col></b-col>
                    <b-button
                      class="btn btn-primary white-text"
                      @click="getFormData()"
                    >
                      Save Data</b-button
                    >
                  </b-row>
                  <FormRenderer
                    :form-configuration="formData"
                    v-model="formInputData"
                  />
                </div>
              </b-row>
              <b-modal ref="save_modal" size="sm" hide-footer>
                <template #modal-title> Confirm save form data </template>
                <b-row class="modal-padding" id="modal-body">
                  <b-col :cols="12" ref="doctype" class="ref-field-input">
                    <!-- {{ tableName }}
          <br />
          {{ formInputData }} -->
                  </b-col>

                  <b-col
                    :cols="12"
                    v-show="selectedDoctype"
                    ref="docId"
                    id="ref-field"
                    class="ref-field-input"
                  />
                </b-row>

                <b-button class="mt-0 btn btn-primary" block @click="save()"
                  >Save</b-button
                >
              </b-modal>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="Form Inspector">
          <b-card-text>
            <b-row style="width: 100%" class="m-4" v-if="formData">
              <div class="accordion" role="tablist" style="width: 100%">
                <b-card no-body class="mb-1" style="width: 100%">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="primary"
                      >Form Config</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <b-table :items="[formData.formConfig]"></b-table>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="primary"
                      >Sections
                      <b-badge variant="light">{{
                        Object.keys(formData.sections).length
                      }}</b-badge></b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-list-group>
                        <b-list-group-item
                          id="accordion-100"
                          visible
                          v-for="section in Object.keys(formData.sections)"
                          :key="section"
                        >
                          <b-row>
                            <h4>{{ formData.sections[section].headline }}</h4>
                            <b-col></b-col>
                            <b-button variant="danger"> Remove </b-button>
                          </b-row>
                          <b-table
                            :stacked="true"
                            :items="[formData.sections[section]]"
                            :fields="sectionFields"
                          >
                            <template #cell(controls)="data">
                              <b-button
                                variant="primary"
                                class="m-1"
                                v-for="item in data.value"
                                :key="item"
                                @click="openLink(item)"
                                >{{ item }}
                              </b-button>
                            </template>
                          </b-table>
                        </b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="primary"
                      >Concepts
                      <b-badge variant="light">{{
                        Object.keys(formData.controls).length
                      }}</b-badge>
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-list-group>
                        <b-list-group-item
                          v-for="control in Object.keys(formData.controls)"
                          :key="control"
                        >
                          <b-row style="width: 100%">
                            {{ control }} <b-col></b-col>
                            <b-button variant="danger"> Remove</b-button>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </b-row></b-card-text
          >
        </b-tab>

        <b-tab title="Form Versions">
          <b-card-text>
            <b-list-group>
              <b-list-group-item
                v-for="version in versions"
                :key="version"
                 
              >
                <span v-if="JSON.parse(version.data).changed"> {{ version.modified }} :</span>

                <b-badge variant="primary" pill v-if="JSON.parse(version.data).changed">
                  {{ formatConfig(JSON.parse(version.data).changed["0"]["1"]) }}
                </b-badge>

                <b-button v-if="JSON.parse(version.data).changed"  @click="copyToClipBoard(JSON.parse(version.data).changed['0']['1'])"> Copy JSON To Clipboard</b-button>
                <b-button v-if="JSON.parse(version.data).changed"  @click="preview(JSON.parse(version.data).changed['0']['1'])"> Preview</b-button>
                <span v-else>{{ version.modified }} :  Configuration not changed</span>
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>
<script>
import {
  getFormConfiguration,
  getFormsVersions,
  saveFormData,
} from "../services/forms/builder.js";
export default {
  name: "FormRenderView",

  data: function () {
    return {
      some_data: "This is a vue demo",
      date: null,
      previewMode: false,
      title: "",
      department: "",
      tableName: "",
      configuration: {},
      formData: null,
      currentFormId: null,
      formName: null,
      selectedItem: null,
      formInputData: null,
      originalConfig: null,
      sectionFields: ["headline", "subHeadline", "controls"],
      versions: [],
    };
  },
  props: {
    selectedDoctype: { type: String },
    selectedDoctypeReference: { type: String },
  },
  watch: {
    previewMode(newVal, oldVal) {
      if (newVal) {
        const conf = this.configuration;
        this.formData = conf;
      }
    },
    selectedDoctype(doctype) {
      if (doctype) {
        this.makeDoctypeItemControl(doctype);
      }
    },
  },
  methods: {

    preview(configuration){
    try{
      let conf = JSON.parse(configuration);
      this.formData = conf;
      

    }catch(e){
     frappe.show_alert("Error configuration file has a problem")
    }
    },
    copyToClipBoard(text) {
  
    var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    frappe.show_alert("Copied to clipboard");
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
     frappe.show_alert("Error")
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
},
    formatConfig(config) {
      var dd = config.replaceAll("<br>", "");
      var validJson = true;
      try {
        return Object.keys(JSON.parse(dd).controls).length;
      } catch (e) {
        return e;
      }
      return dd;
    },
    openLink(item) {
      //app/form-design
      const host = window.location.href.split("/app")[0];
      const url = host + "/app/dictionary-concept/" + item;
      window.open(url, "_blank");
    },
    clearData() {
      const val = {};
      const keys = Object.keys(this.formInputData);
      keys.forEach((key) => {
        val[key] = "";
      });

      this.setValues(val);
    },
    getFormData() {
      const formName = frappe.get_route()[2];
      this.tableName = formName.split("-")[1];
      this.showModal();
    },
    getFormInputData() {},
    exportData() {
      this.showModal();
    },
    previewForm() {
      this.previewMode = !this.previewMode;
    },
    showModal() {
      this.$refs["save_modal"].show();
    },
    clear() {
      this.formData = null;
      this.formData = this.originalConfig;
    },
    makeSelectDoctypeControl() {
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference"),
          fieldtype: "Link",
          fieldname: "reference",
          options: "DocType",
          placeholder: __("Search Reference"),
          onchange: function () {
            if (this.value) {
              me.selectedDoctype = this.value;
            }
          },
        },
        parent: this.$refs["doctype"],
        render_input: true,
      });

      customer_field.toggle_label(false);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },

    makeDoctypeItemControl(doctype) {
      const div = $("#ref-field");
      div.empty();
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference Id"),
          fieldtype: "Link",
          fieldname: "itemControl",
          options: doctype,
          placeholder: __("Reference Id"),
          onchange: function () {
            if (this.value) {
              me.selectedDoctypeReference = this.value;
            }
          },
        },
        parent: this.$refs["docId"],
        render_input: true,
      });
      customer_field.toggle_label(false);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },
    saveForm(formData) {
      this.hideModal();
      saveFormData(formData).then((saved) => {
        frappe.show_alert("Form Saved " + saved.name, 5);
        this.formInputData = null;

        this.clearData();
      });
    },
    getCurrentFormVersions(name) {
      getFormsVersions({ name }).then((response) => (this.versions = response));
    },
    getForm(name) {
      getFormConfiguration({ name }).then((config) => {
        const formStringConfig = config.formdata;
        const configObject = JSON.parse(formStringConfig);
        console.log(configObject);
        this.formName = config.name;
        this.formData = configObject;
        this.originalConfig = configObject;
      });
    },
    hideModal() {
      this.$refs["save_modal"].hide();
    },
    navigateToList() {
      const formName = frappe.get_route()[2];
      this.tableName = formName.split("-")[1];
      // frappe.set_route("List", this.tableName);
    },
    save() {
      this.hideModal();
      let form_content = this.formInputData;
      form_content = JSON.stringify(form_content);
      const form_name = this.formName;
      const reference_doctype = this.selectedDoctype;
      const reference_doctype_id = this.selectedDoctypeReference;
      let doctype = "Form Repository";
      let formData = {
        doctype,
        form_content,
        form_name,
        reference_doctype,
        reference_doctype_id,
      };
      this.saveForm({ formData });
    },
  },
  created() {
    let formName = frappe.get_route()[2];

    if (!frappe.get_route()[2]) {
      formName = frappe.get_route()[1];
    }
    this.getForm(formName);
    this.getCurrentFormVersions(formName);
  },

  mounted() {
    this.$formEvent.$on("submit", (value) => {});
    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
      this.makeSelectDoctypeControl();
      console.log("Modal is about to be shown", bvEvent, modalId);
    });
  },
  components: {},
};
</script>
<style scoped>
.spacer {
  margin-top: 10px;
}
.space-right {
  margin-right: 10px !important;
  padding-right: 10px;
}
.spacer-left {
  margin-left: 10px !important;
  padding-left: 10px;
}
.save-btn {
  color: white;
  margin-left: 8px;
}
.spacer-left-5 {
  margin-left: 5px !important;
  padding-left: 5px;
}
.render-form {
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 50px;
}
.white-text {
  color: white;
  margin-left: 10px;
}
.form-border {
  border: 1px solid darkgray;

  margin-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 50px;
}
.main-padding {
  padding-bottom: 50px;
  padding-right: 50px;
}
.main-page {
  margin-top: 10px;
  padding-right: 30px;
}
.top-margin {
  margin-top: 20px;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.fb-area {
  padding-top: 20px;
  border-radius: 10px;
}

.container-fluid {
  background-color: white;
  border-radius: 10px;
}

.space-left {
  margin-left: 8px;
}

.ref-field-input {
  width: 160px;
  padding-left: 0px;
}
.input-max-width {
  width: 100% !important;
  min-width: 300px;
}
.modal-padding {
  padding-left: 15px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__2 = "data-v-b47e1b9a";
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="main-page">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Form Preview" active>
          <b-card-text>
            <div class="spacer-left-5">
              <b-row class="">
                <b-container>
                  <b-row class="save-btn">
                    <b-col class="ref-field-input pull-right" />
                    <b-col
                      v-show="selectedDoctype"
                      ref="docId"
                      class="ref-field-input pull-right"
                    />
                  </b-row>
                </b-container>
              </b-row>
              <b-row>
                <div class="render-form row">
                  <b-row class="save-btn mr-3" style="width: 100%">
                    <b-col></b-col>
                    <b-button
                      class="btn btn-primary white-text"
                      @click="getFormData()"
                    >
                      Save Data</b-button
                    >
                  </b-row>
                  <FormRenderer
                    :form-configuration="formData"
                    v-model="formInputData"
                  />
                </div>
              </b-row>
              <b-modal ref="save_modal" size="sm" hide-footer>
                <template #modal-title> Confirm save form data </template>
                <b-row class="modal-padding" id="modal-body">
                  <b-col :cols="12" ref="doctype" class="ref-field-input">
                    <!-- {{ tableName }}
          <br />
          {{ formInputData }} -->
                  </b-col>

                  <b-col
                    :cols="12"
                    v-show="selectedDoctype"
                    ref="docId"
                    id="ref-field"
                    class="ref-field-input"
                  />
                </b-row>

                <b-button class="mt-0 btn btn-primary" block @click="save()"
                  >Save</b-button
                >
              </b-modal>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="Form Inspector">
          <b-card-text>
            <b-row style="width: 100%" class="m-4" v-if="formData">
              <div class="accordion" role="tablist" style="width: 100%">
                <b-card no-body class="mb-1" style="width: 100%">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="primary"
                      >Form Config</b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <b-table :items="[formData.formConfig]"></b-table>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="primary"
                      >Sections
                      <b-badge variant="light">{{
                        Object.keys(formData.sections).length
                      }}</b-badge></b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-list-group>
                        <b-list-group-item
                          id="accordion-100"
                          visible
                          v-for="section in Object.keys(formData.sections)"
                          :key="section"
                        >
                          <b-row>
                            <h4>{{ formData.sections[section].headline }}</h4>
                            <b-col></b-col>
                            <b-button variant="danger"> Remove </b-button>
                          </b-row>
                          <b-table
                            :stacked="true"
                            :items="[formData.sections[section]]"
                            :fields="sectionFields"
                          >
                            <template #cell(controls)="data">
                              <b-button
                                variant="primary"
                                class="m-1"
                                v-for="item in data.value"
                                :key="item"
                                @click="openLink(item)"
                                >{{ item }}
                              </b-button>
                            </template>
                          </b-table>
                        </b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="primary"
                      >Concepts
                      <b-badge variant="light">{{
                        Object.keys(formData.controls).length
                      }}</b-badge>
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-list-group>
                        <b-list-group-item
                          v-for="control in Object.keys(formData.controls)"
                          :key="control"
                        >
                          <b-row style="width: 100%">
                            {{ control }} <b-col></b-col>
                            <b-button variant="danger"> Remove</b-button>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </b-row></b-card-text
          >
        </b-tab>

        <b-tab title="Form Versions">
          <b-card-text>
            <b-list-group>
              <b-list-group-item
                v-for="version in versions"
                :key="version"
                 
              >
                <span v-if="JSON.parse(version.data).changed"> {{ version.modified }} :</span>

                <b-badge variant="primary" pill v-if="JSON.parse(version.data).changed">
                  {{ formatConfig(JSON.parse(version.data).changed["0"]["1"]) }}
                </b-badge>

                <b-button v-if="JSON.parse(version.data).changed"  @click="copyToClipBoard(JSON.parse(version.data).changed['0']['1'])"> Copy JSON To Clipboard</b-button>
                <b-button v-if="JSON.parse(version.data).changed"  @click="preview(JSON.parse(version.data).changed['0']['1'])"> Preview</b-button>
                <span v-else>{{ version.modified }} :  Configuration not changed</span>
              </b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>
<script>
import {
  getFormConfiguration,
  getFormsVersions,
  saveFormData,
} from "../services/forms/builder.js";
export default {
  name: "FormRenderView",

  data: function () {
    return {
      some_data: "This is a vue demo",
      date: null,
      previewMode: false,
      title: "",
      department: "",
      tableName: "",
      configuration: {},
      formData: null,
      currentFormId: null,
      formName: null,
      selectedItem: null,
      formInputData: null,
      originalConfig: null,
      sectionFields: ["headline", "subHeadline", "controls"],
      versions: [],
    };
  },
  props: {
    selectedDoctype: { type: String },
    selectedDoctypeReference: { type: String },
  },
  watch: {
    previewMode(newVal, oldVal) {
      if (newVal) {
        const conf = this.configuration;
        this.formData = conf;
      }
    },
    selectedDoctype(doctype) {
      if (doctype) {
        this.makeDoctypeItemControl(doctype);
      }
    },
  },
  methods: {

    preview(configuration){
    try{
      let conf = JSON.parse(configuration);
      this.formData = conf;
      

    }catch(e){
     frappe.show_alert("Error configuration file has a problem")
    }
    },
    copyToClipBoard(text) {
  
    var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    frappe.show_alert("Copied to clipboard");
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
     frappe.show_alert("Error")
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
},
    formatConfig(config) {
      var dd = config.replaceAll("<br>", "");
      var validJson = true;
      try {
        return Object.keys(JSON.parse(dd).controls).length;
      } catch (e) {
        return e;
      }
      return dd;
    },
    openLink(item) {
      //app/form-design
      const host = window.location.href.split("/app")[0];
      const url = host + "/app/dictionary-concept/" + item;
      window.open(url, "_blank");
    },
    clearData() {
      const val = {};
      const keys = Object.keys(this.formInputData);
      keys.forEach((key) => {
        val[key] = "";
      });

      this.setValues(val);
    },
    getFormData() {
      const formName = frappe.get_route()[2];
      this.tableName = formName.split("-")[1];
      this.showModal();
    },
    getFormInputData() {},
    exportData() {
      this.showModal();
    },
    previewForm() {
      this.previewMode = !this.previewMode;
    },
    showModal() {
      this.$refs["save_modal"].show();
    },
    clear() {
      this.formData = null;
      this.formData = this.originalConfig;
    },
    makeSelectDoctypeControl() {
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference"),
          fieldtype: "Link",
          fieldname: "reference",
          options: "DocType",
          placeholder: __("Search Reference"),
          onchange: function () {
            if (this.value) {
              me.selectedDoctype = this.value;
            }
          },
        },
        parent: this.$refs["doctype"],
        render_input: true,
      });

      customer_field.toggle_label(false);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },

    makeDoctypeItemControl(doctype) {
      const div = $("#ref-field");
      div.empty();
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference Id"),
          fieldtype: "Link",
          fieldname: "itemControl",
          options: doctype,
          placeholder: __("Reference Id"),
          onchange: function () {
            if (this.value) {
              me.selectedDoctypeReference = this.value;
            }
          },
        },
        parent: this.$refs["docId"],
        render_input: true,
      });
      customer_field.toggle_label(false);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },
    saveForm(formData) {
      this.hideModal();
      saveFormData(formData).then((saved) => {
        frappe.show_alert("Form Saved " + saved.name, 5);
        this.formInputData = null;

        this.clearData();
      });
    },
    getCurrentFormVersions(name) {
      getFormsVersions({ name }).then((response) => (this.versions = response));
    },
    getForm(name) {
      getFormConfiguration({ name }).then((config) => {
        const formStringConfig = config.formdata;
        const configObject = JSON.parse(formStringConfig);
        console.log(configObject);
        this.formName = config.name;
        this.formData = configObject;
        this.originalConfig = configObject;
      });
    },
    hideModal() {
      this.$refs["save_modal"].hide();
    },
    navigateToList() {
      const formName = frappe.get_route()[2];
      this.tableName = formName.split("-")[1];
      // frappe.set_route("List", this.tableName);
    },
    save() {
      this.hideModal();
      let form_content = this.formInputData;
      form_content = JSON.stringify(form_content);
      const form_name = this.formName;
      const reference_doctype = this.selectedDoctype;
      const reference_doctype_id = this.selectedDoctypeReference;
      let doctype = "Form Repository";
      let formData = {
        doctype,
        form_content,
        form_name,
        reference_doctype,
        reference_doctype_id,
      };
      this.saveForm({ formData });
    },
  },
  created() {
    let formName = frappe.get_route()[2];

    if (!frappe.get_route()[2]) {
      formName = frappe.get_route()[1];
    }
    this.getForm(formName);
    this.getCurrentFormVersions(formName);
  },

  mounted() {
    this.$formEvent.$on("submit", (value) => {});
    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
      this.makeSelectDoctypeControl();
      console.log("Modal is about to be shown", bvEvent, modalId);
    });
  },
  components: {},
};
</script>
<style scoped>
.spacer {
  margin-top: 10px;
}
.space-right {
  margin-right: 10px !important;
  padding-right: 10px;
}
.spacer-left {
  margin-left: 10px !important;
  padding-left: 10px;
}
.save-btn {
  color: white;
  margin-left: 8px;
}
.spacer-left-5 {
  margin-left: 5px !important;
  padding-left: 5px;
}
.render-form {
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 50px;
}
.white-text {
  color: white;
  margin-left: 10px;
}
.form-border {
  border: 1px solid darkgray;

  margin-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 50px;
}
.main-padding {
  padding-bottom: 50px;
  padding-right: 50px;
}
.main-page {
  margin-top: 10px;
  padding-right: 30px;
}
.top-margin {
  margin-top: 20px;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.fb-area {
  padding-top: 20px;
  border-radius: 10px;
}

.container-fluid {
  background-color: white;
  border-radius: 10px;
}

.space-left {
  margin-left: 8px;
}

.ref-field-input {
  width: 160px;
  padding-left: 0px;
}
.input-max-width {
  width: 100% !important;
  min-width: 300px;
}
.modal-padding {
  padding-left: 15px;
}
</style>
`;
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
  function __vue_create_injector__2() {
    const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
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
  var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2}, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, __vue_create_injector__2, void 0, void 0);
  var FormInspector_default = __vue_component__2;

  // ../frontend/frontend/public/js/forms/forms-render.bundle.js
  Vue.use(VueFormBuilderPlugin, {});
  frappe.provide("frappe.forms");
  frappe.forms.PatientFormRender = class {
    constructor({parent}) {
      this.$parent = $(parent);
      this.page = parent.page;
      this.make_body();
    }
    make_body() {
      this.$body = this.$parent.find(".layout-main-section");
      this.$parent.find(".page-head").addClass("hidden").addClass("rv-head");
      this.$parent.find(".page-body").removeClass("container").addClass("rv-head");
      this.$parent.find(".content").removeClass("page-container");
      this.$parent.find(".page-content").removeClass("page-content");
      this.$page_container = $('<div class="hub-page-container">').appendTo(this.$body);
      new Vue({
        el: ".hub-page-container",
        render: (h) => h(FormRenderView_default)
      });
    }
  };
  Vue.use(VueFormBuilderPlugin, {});
  frappe.provide("frappe.forms");
  frappe.forms.Inspector = class {
    constructor({parent}) {
      this.$parent = $(parent);
      this.page = parent.page;
      this.make_body();
    }
    make_body() {
      this.$body = this.$parent.find(".layout-main-section");
      this.$parent.find(".page-head").addClass("hidden").addClass("rv-head");
      this.$parent.find(".page-body").removeClass("container").addClass("rv-head");
      this.$parent.find(".content").removeClass("page-container");
      this.$parent.find(".page-content").removeClass("page-content");
      this.$page_container = $('<div class="hub-page-container">').appendTo(this.$body);
      new Vue({
        el: ".hub-page-container",
        render: (h) => h(FormInspector_default)
      });
    }
  };
})();
//# sourceMappingURL=forms-render.bundle.TZJY6YQ3.js.map
