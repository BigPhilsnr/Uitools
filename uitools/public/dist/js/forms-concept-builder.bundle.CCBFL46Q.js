(() => {
  // ../frontend/frontend/public/js/services/forms/builder.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var saveFormData = ({formData}) => api({
    method: "clinical.api.forms.form_builder.save_form_data",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/forms/FormConceptBuilder.vue
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
        concept: {
          doctype: "Concept Dictionary"
        },
        formData: null,
        formInputData: null,
        friend: {
          "uniqueId": "control-1042fd44-6173-4ffa-8601-1daf8c51816c",
          "type": "number",
          "name": "",
          "label": "Number Input Field",
          "subLabel": "",
          "isShowLabel": true,
          "placeholderText": "",
          "containerClass": "col-md-6 md-layout-item md-size-50",
          "additionalContainerClass": "",
          "additionalFieldClass": "",
          "additionalLabelClass": "",
          "defaultValue": "",
          "validations": [],
          "isReal": false,
          "decimalPlace": 1
        },
        defaultConfiguration: {
          formConfig: {
            headline: "New Concept",
            subHeadline: "Add control and use option to configure ",
            isShowHeadline: true,
            renderFormTag: true,
            formActionURL: "",
            formMethod: "POST"
          },
          sections: {
            "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6": {
              uniqueId: "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6",
              headline: "New Section",
              headlineAdditionalClass: "",
              subHeadline: "This is the sub-headline of the new section",
              subHeadlineAdditionalClass: "",
              isShowHeadline: false,
              sortOrder: 1,
              type: "concept",
              rows: [],
              controls: []
            }
          },
          rows: {},
          controls: {}
        }
      };
    },
    watch: {
      previewMode(newVal, oldVal) {
        if (newVal) {
          const conf = this.configuration;
          this.formData = conf;
        }
      },
      "formInputData.controls": function(n, o) {
        console.log(JSON.stringify(n));
        if (this.formInputData) {
          this.formInputData.sections["section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6"].controls = Object.keys(n);
          console.log(this.formInputData.sections);
        } else {
          console.log("data is null");
        }
      }
    },
    methods: {
      getFormData() {
      },
      getFormInputData() {
      },
      navigateToList() {
        frappe.set_route("List", "Concept Dictionary");
      },
      exportData() {
        this.showModal();
      },
      previewForm() {
        this.previewMode = !this.previewMode;
      },
      showModal() {
        this.$refs["save_modal"].show();
        this.makeDepartmentControl;
      },
      saveForm(formData) {
        this.hideModal();
        console.log(formData);
        saveFormData({formData}).then((saved) => {
          frappe.show_alert("Form Saved " + saved.name, 5);
          this.formInputData = this.defaultConfiguration;
        });
      },
      hideModal() {
        this.$refs["save_modal"].hide();
      },
      save() {
        const conf = Object.values(this.formInputData.controls)[0];
        if (!conf) {
          frappe.show_alert("Error no control added", 5);
          return;
        }
        this.concept.configuration = JSON.stringify(conf);
        this.saveForm(this.concept);
      }
    },
    created() {
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
          _c("div", {staticStyle: {display: "inline-block"}})
        ]),
        _vm._v(" "),
        _c("b-col", {staticStyle: {"margin-bottom": "30px"}, attrs: {cols: "8"}}, [
          _c("button", {
            staticClass: "btn btn-primary pull-right spacer-left",
            on: {click: _vm.exportData}
          }, [_vm._v("\n        Export\n      ")]),
          _vm._v(" "),
          !_vm.previewMode ? _c("button", {
            staticClass: "btn btn-default pull-right spacer-right",
            on: {click: _vm.navigateToList}
          }, [_vm._v("\n        Open dictionary\n      ")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-col", {attrs: {cols: "12"}}, [
          _c("div", {ref: "comment-input"})
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
          _c("FormConceptBuilder", {
            attrs: {"form-configuration": _vm.formData},
            model: {
              value: _vm.formInputData,
              callback: function($$v) {
                _vm.formInputData = $$v;
              },
              expression: "formInputData"
            }
          })
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
            _c("b-form-group", {
              attrs: {id: "fieldset-1", label: "Enter Concept Name "}
            }, [
              _c("b-form-input", {
                attrs: {id: "input-1", state: _vm.state, trim: ""},
                model: {
                  value: _vm.concept.cname,
                  callback: function($$v) {
                    _vm.$set(_vm.concept, "cname", $$v);
                  },
                  expression: "concept.cname"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("b-form-group", {
              attrs: {id: "fieldset-1", label: "Enter Concept Code  "}
            }, [
              _c("b-form-input", {
                attrs: {id: "input-1", state: _vm.state, trim: ""},
                model: {
                  value: _vm.concept.code,
                  callback: function($$v) {
                    _vm.$set(_vm.concept, "code", $$v);
                  },
                  expression: "concept.code"
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
    inject("data-v-5cf82329_0", {source: '\n.spacer[data-v-5cf82329] {\n  margin-top: 10px;\n}\n.space-right[data-v-5cf82329] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-5cf82329] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.spacer-left-5[data-v-5cf82329] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-5cf82329] {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n.form-border[data-v-5cf82329] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-5cf82329] {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page[data-v-5cf82329] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-5cf82329] {\n  margin-top: 20px;\n}\n.card[data-v-5cf82329] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-5cf82329]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-5cf82329] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-5cf82329] {\n  background-color: white;\n  border-radius: 10px;\n}\n.save-data[data-v-5cf82329] {\n  margin-top: 20px !important;\n}\n.padded[data-v-5cf82329] {\n  padding: 5%;\n}\n.form-padding[data-v-5cf82329] {\n  padding: 5%;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FormConceptBuilder.vue"], "names": [], "mappings": ";AAmMA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AAEA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;AACA;AAEA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,2BAAA;AACA;AAEA;EACA,WAAA;AACA;AACA;EACA,WAAA;AACA", "file": "FormConceptBuilder.vue", "sourcesContent": [`<template>
  <b-container class="main-page">
    <b-row class="spacer-left-5">
      <b-col cols="4">
        <div style="display: inline-block"></div>
      </b-col>

      <b-col cols="8" style="margin-bottom: 30px">
        <button
          class="btn btn-primary pull-right spacer-left"
          v-on:click="exportData"
        >
          Export
        </button>

        <button
          v-if="!previewMode"
          class="btn btn-default pull-right spacer-right"
          v-on:click="navigateToList"
        >
          Open dictionary
        </button>
      </b-col>

      <b-col cols="12">
        <div ref="comment-input"></div>
      </b-col>

      <b-col cols="12" v-show="!previewMode">
        <FormConceptBuilder
          :form-configuration="formData"
          v-model="formInputData"
        />
      </b-col>

      <b-modal ref="save_modal" hide-footer>
        <template #modal-title> Create Form </template>
        <div>
          <b-form-group id="fieldset-1" label="Enter Concept Name ">
            <b-form-input
              id="input-1"
              v-model="concept.cname"
              :state="state"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group id="fieldset-1" label="Enter Concept Code  ">
            <b-form-input
              id="input-1"
              v-model="concept.code"
              :state="state"
              trim
            ></b-form-input>
          </b-form-group>
        </div>
        <b-button class="mt-6 btn btn-primary" block @click="save()"
          >Save</b-button
        >
      </b-modal>
    </b-row>
  </b-container>
</template>
<script>
import { saveFormData } from "../services/forms/builder.js";
export default {
  name: "Builder",

  data: function () {
    return {
      some_data: "This is a vue demo",
      date: null,
      previewMode: false,
      title: "",
      department: "",
      formId: null,
      configuration: {},
      concept: {
        doctype: "Concept Dictionary",
      },
      formData: null,
      formInputData: null,
     friend: {
      "uniqueId": "control-1042fd44-6173-4ffa-8601-1daf8c51816c",
      "type": "number",
      "name": "",
      "label": "Number Input Field",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "",
      "containerClass": "col-md-6 md-layout-item md-size-50",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [],
      "isReal": false,
      "decimalPlace": 1
    },
      defaultConfiguration: {
        formConfig: {
          headline: "New Concept",
          subHeadline: "Add control and use option to configure ",
          isShowHeadline: true,
          renderFormTag: true,
          formActionURL: "",
          formMethod: "POST",
        },
        sections: {
          "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6": {
            uniqueId: "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6",
            headline: "New Section",
            headlineAdditionalClass: "",
            subHeadline: "This is the sub-headline of the new section",
            subHeadlineAdditionalClass: "",
            isShowHeadline: false,
            sortOrder: 1,
            type: "concept",
            rows: [],
            controls: [],
          },
        },

        rows: {},
        controls: {},
      },
    };
  },
  watch: {
    previewMode(newVal, oldVal) {
      if (newVal) {
        const conf = this.configuration;
        this.formData = conf;
      }
    },

    // 'formInputData.sections':function(n,o){
    //   console.log(JSON.stringify(n))
    // },

    "formInputData.controls": function (n, o) {
      console.log(JSON.stringify(n));
      if (this.formInputData) {
        this.formInputData.sections[
          "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6"
        ].controls = Object.keys(n);
        console.log(this.formInputData.sections);
      } else {
        console.log("data is null");
      }
    },
  },
  methods: {
    getFormData() {},
    getFormInputData() {},
    navigateToList() {
      frappe.set_route("List", "Concept Dictionary");
    },
    exportData() {
      this.showModal();
    },
    previewForm() {
      this.previewMode = !this.previewMode;
    },
    showModal() {
      this.$refs["save_modal"].show();
      this.makeDepartmentControl;
    },
    saveForm(formData) {
      this.hideModal();
      console.log(formData);
      saveFormData({ formData }).then((saved) => {
        frappe.show_alert("Form Saved " + saved.name, 5);
        this.formInputData = this.defaultConfiguration;
      });
    },

    hideModal() {
      this.$refs["save_modal"].hide();
    },
    save() {
      const conf = Object.values(this.formInputData.controls)[0];
      if (!conf) {
        frappe.show_alert("Error no control added", 5);
        return;
      }
      this.concept.configuration = JSON.stringify(conf);
      this.saveForm(this.concept);
    },
  },
  created() {},
  components: {},
  mounted() {},
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

.save-data {
  margin-top: 20px !important;
}

.padded {
  padding: 5%;
}
.form-padding {
  padding: 5%;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-5cf82329";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="main-page">
    <b-row class="spacer-left-5">
      <b-col cols="4">
        <div style="display: inline-block"></div>
      </b-col>

      <b-col cols="8" style="margin-bottom: 30px">
        <button
          class="btn btn-primary pull-right spacer-left"
          v-on:click="exportData"
        >
          Export
        </button>

        <button
          v-if="!previewMode"
          class="btn btn-default pull-right spacer-right"
          v-on:click="navigateToList"
        >
          Open dictionary
        </button>
      </b-col>

      <b-col cols="12">
        <div ref="comment-input"></div>
      </b-col>

      <b-col cols="12" v-show="!previewMode">
        <FormConceptBuilder
          :form-configuration="formData"
          v-model="formInputData"
        />
      </b-col>

      <b-modal ref="save_modal" hide-footer>
        <template #modal-title> Create Form </template>
        <div>
          <b-form-group id="fieldset-1" label="Enter Concept Name ">
            <b-form-input
              id="input-1"
              v-model="concept.cname"
              :state="state"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group id="fieldset-1" label="Enter Concept Code  ">
            <b-form-input
              id="input-1"
              v-model="concept.code"
              :state="state"
              trim
            ></b-form-input>
          </b-form-group>
        </div>
        <b-button class="mt-6 btn btn-primary" block @click="save()"
          >Save</b-button
        >
      </b-modal>
    </b-row>
  </b-container>
</template>
<script>
import { saveFormData } from "../services/forms/builder.js";
export default {
  name: "Builder",

  data: function () {
    return {
      some_data: "This is a vue demo",
      date: null,
      previewMode: false,
      title: "",
      department: "",
      formId: null,
      configuration: {},
      concept: {
        doctype: "Concept Dictionary",
      },
      formData: null,
      formInputData: null,
     friend: {
      "uniqueId": "control-1042fd44-6173-4ffa-8601-1daf8c51816c",
      "type": "number",
      "name": "",
      "label": "Number Input Field",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "",
      "containerClass": "col-md-6 md-layout-item md-size-50",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [],
      "isReal": false,
      "decimalPlace": 1
    },
      defaultConfiguration: {
        formConfig: {
          headline: "New Concept",
          subHeadline: "Add control and use option to configure ",
          isShowHeadline: true,
          renderFormTag: true,
          formActionURL: "",
          formMethod: "POST",
        },
        sections: {
          "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6": {
            uniqueId: "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6",
            headline: "New Section",
            headlineAdditionalClass: "",
            subHeadline: "This is the sub-headline of the new section",
            subHeadlineAdditionalClass: "",
            isShowHeadline: false,
            sortOrder: 1,
            type: "concept",
            rows: [],
            controls: [],
          },
        },

        rows: {},
        controls: {},
      },
    };
  },
  watch: {
    previewMode(newVal, oldVal) {
      if (newVal) {
        const conf = this.configuration;
        this.formData = conf;
      }
    },

    // 'formInputData.sections':function(n,o){
    //   console.log(JSON.stringify(n))
    // },

    "formInputData.controls": function (n, o) {
      console.log(JSON.stringify(n));
      if (this.formInputData) {
        this.formInputData.sections[
          "section-c0de97f2-fc27-47ac-9851-215c5b5b2cc6"
        ].controls = Object.keys(n);
        console.log(this.formInputData.sections);
      } else {
        console.log("data is null");
      }
    },
  },
  methods: {
    getFormData() {},
    getFormInputData() {},
    navigateToList() {
      frappe.set_route("List", "Concept Dictionary");
    },
    exportData() {
      this.showModal();
    },
    previewForm() {
      this.previewMode = !this.previewMode;
    },
    showModal() {
      this.$refs["save_modal"].show();
      this.makeDepartmentControl;
    },
    saveForm(formData) {
      this.hideModal();
      console.log(formData);
      saveFormData({ formData }).then((saved) => {
        frappe.show_alert("Form Saved " + saved.name, 5);
        this.formInputData = this.defaultConfiguration;
      });
    },

    hideModal() {
      this.$refs["save_modal"].hide();
    },
    save() {
      const conf = Object.values(this.formInputData.controls)[0];
      if (!conf) {
        frappe.show_alert("Error no control added", 5);
        return;
      }
      this.concept.configuration = JSON.stringify(conf);
      this.saveForm(this.concept);
    },
  },
  created() {},
  components: {},
  mounted() {},
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

.save-data {
  margin-top: 20px !important;
}

.padded {
  padding: 5%;
}
.form-padding {
  padding: 5%;
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
  var FormConceptBuilder_default = __vue_component__;

  // ../frontend/frontend/public/js/forms/forms-concept-builder.bundle.js
  Vue.use(VueFormBuilderPlugin, {});
  frappe.provide("frappe.forms");
  frappe.forms.PatientFormConceptBuilder = class {
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
        render: (h) => h(FormConceptBuilder_default)
      });
    }
  };
})();
//# sourceMappingURL=forms-concept-builder.bundle.CCBFL46Q.js.map
