(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // ../frontend/node_modules/vue-select/dist/vue-select.js
  var require_vue_select = __commonJS({
    "../frontend/node_modules/vue-select/dist/vue-select.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof exports == "object" ? exports.VueSelect = e() : t.VueSelect = e();
      }(typeof self != "undefined" ? self : exports, function() {
        return (() => {
          var t = {646: (t2) => {
            t2.exports = function(t3) {
              if (Array.isArray(t3)) {
                for (var e2 = 0, n2 = new Array(t3.length); e2 < t3.length; e2++)
                  n2[e2] = t3[e2];
                return n2;
              }
            };
          }, 713: (t2) => {
            t2.exports = function(t3, e2, n2) {
              return e2 in t3 ? Object.defineProperty(t3, e2, {value: n2, enumerable: true, configurable: true, writable: true}) : t3[e2] = n2, t3;
            };
          }, 860: (t2) => {
            t2.exports = function(t3) {
              if (Symbol.iterator in Object(t3) || Object.prototype.toString.call(t3) === "[object Arguments]")
                return Array.from(t3);
            };
          }, 206: (t2) => {
            t2.exports = function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance");
            };
          }, 319: (t2, e2, n2) => {
            var o2 = n2(646), i = n2(860), s = n2(206);
            t2.exports = function(t3) {
              return o2(t3) || i(t3) || s();
            };
          }, 8: (t2) => {
            function e2(n2) {
              return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t2.exports = e2 = function(t3) {
                return typeof t3;
              } : t2.exports = e2 = function(t3) {
                return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
              }, e2(n2);
            }
            t2.exports = e2;
          }}, e = {};
          function n(o2) {
            var i = e[o2];
            if (i !== void 0)
              return i.exports;
            var s = e[o2] = {exports: {}};
            return t[o2](s, s.exports, n), s.exports;
          }
          n.n = (t2) => {
            var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
            return n.d(e2, {a: e2}), e2;
          }, n.d = (t2, e2) => {
            for (var o2 in e2)
              n.o(e2, o2) && !n.o(t2, o2) && Object.defineProperty(t2, o2, {enumerable: true, get: e2[o2]});
          }, n.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), n.r = (t2) => {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t2, "__esModule", {value: true});
          };
          var o = {};
          return (() => {
            "use strict";
            n.r(o), n.d(o, {VueSelect: () => m, default: () => O, mixins: () => _});
            var t2 = n(319), e2 = n.n(t2), i = n(8), s = n.n(i), r = n(713), a = n.n(r);
            const l = {props: {autoscroll: {type: Boolean, default: true}}, watch: {typeAheadPointer: function() {
              this.autoscroll && this.maybeAdjustScroll();
            }, open: function(t3) {
              var e3 = this;
              this.autoscroll && t3 && this.$nextTick(function() {
                return e3.maybeAdjustScroll();
              });
            }}, methods: {maybeAdjustScroll: function() {
              var t3, e3 = ((t3 = this.$refs.dropdownMenu) === null || t3 === void 0 ? void 0 : t3.children[this.typeAheadPointer]) || false;
              if (e3) {
                var n2 = this.getDropdownViewport(), o2 = e3.getBoundingClientRect(), i2 = o2.top, s2 = o2.bottom, r2 = o2.height;
                if (i2 < n2.top)
                  return this.$refs.dropdownMenu.scrollTop = e3.offsetTop;
                if (s2 > n2.bottom)
                  return this.$refs.dropdownMenu.scrollTop = e3.offsetTop - (n2.height - r2);
              }
            }, getDropdownViewport: function() {
              return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.getBoundingClientRect() : {height: 0, top: 0, bottom: 0};
            }}}, c = {data: function() {
              return {typeAheadPointer: -1};
            }, watch: {filteredOptions: function() {
              for (var t3 = 0; t3 < this.filteredOptions.length; t3++)
                if (this.selectable(this.filteredOptions[t3])) {
                  this.typeAheadPointer = t3;
                  break;
                }
            }, open: function(t3) {
              t3 && this.typeAheadToLastSelected();
            }, selectedValue: function() {
              this.open && this.typeAheadToLastSelected();
            }}, methods: {typeAheadUp: function() {
              for (var t3 = this.typeAheadPointer - 1; t3 >= 0; t3--)
                if (this.selectable(this.filteredOptions[t3])) {
                  this.typeAheadPointer = t3;
                  break;
                }
            }, typeAheadDown: function() {
              for (var t3 = this.typeAheadPointer + 1; t3 < this.filteredOptions.length; t3++)
                if (this.selectable(this.filteredOptions[t3])) {
                  this.typeAheadPointer = t3;
                  break;
                }
            }, typeAheadSelect: function() {
              var t3 = this.filteredOptions[this.typeAheadPointer];
              t3 && this.selectable(t3) && this.select(t3);
            }, typeAheadToLastSelected: function() {
              this.typeAheadPointer = this.selectedValue.length !== 0 ? this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length - 1]) : -1;
            }}}, u = {props: {loading: {type: Boolean, default: false}}, data: function() {
              return {mutableLoading: false};
            }, watch: {search: function() {
              this.$emit("search", this.search, this.toggleLoading);
            }, loading: function(t3) {
              this.mutableLoading = t3;
            }}, methods: {toggleLoading: function() {
              var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
              return this.mutableLoading = t3 == null ? !this.mutableLoading : t3;
            }}};
            function p(t3, e3, n2, o2, i2, s2, r2, a2) {
              var l2, c2 = typeof t3 == "function" ? t3.options : t3;
              if (e3 && (c2.render = e3, c2.staticRenderFns = n2, c2._compiled = true), o2 && (c2.functional = true), s2 && (c2._scopeId = "data-v-" + s2), r2 ? (l2 = function(t4) {
                (t4 = t4 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ == "undefined" || (t4 = __VUE_SSR_CONTEXT__), i2 && i2.call(this, t4), t4 && t4._registeredComponents && t4._registeredComponents.add(r2);
              }, c2._ssrRegister = l2) : i2 && (l2 = a2 ? function() {
                i2.call(this, (c2.functional ? this.parent : this).$root.$options.shadowRoot);
              } : i2), l2)
                if (c2.functional) {
                  c2._injectStyles = l2;
                  var u2 = c2.render;
                  c2.render = function(t4, e4) {
                    return l2.call(e4), u2(t4, e4);
                  };
                } else {
                  var p2 = c2.beforeCreate;
                  c2.beforeCreate = p2 ? [].concat(p2, l2) : [l2];
                }
              return {exports: t3, options: c2};
            }
            const h = {Deselect: p({}, function() {
              var t3 = this.$createElement, e3 = this._self._c || t3;
              return e3("svg", {attrs: {xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10"}}, [e3("path", {attrs: {d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})]);
            }, [], false, null, null, null).exports, OpenIndicator: p({}, function() {
              var t3 = this.$createElement, e3 = this._self._c || t3;
              return e3("svg", {attrs: {xmlns: "http://www.w3.org/2000/svg", width: "14", height: "10"}}, [e3("path", {attrs: {d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})]);
            }, [], false, null, null, null).exports}, d = {inserted: function(t3, e3, n2) {
              var o2 = n2.context;
              if (o2.appendToBody) {
                var i2 = o2.$refs.toggle.getBoundingClientRect(), s2 = i2.height, r2 = i2.top, a2 = i2.left, l2 = i2.width, c2 = window.scrollX || window.pageXOffset, u2 = window.scrollY || window.pageYOffset;
                t3.unbindPosition = o2.calculatePosition(t3, o2, {width: l2 + "px", left: c2 + a2 + "px", top: u2 + r2 + s2 + "px"}), document.body.appendChild(t3);
              }
            }, unbind: function(t3, e3, n2) {
              n2.context.appendToBody && (t3.unbindPosition && typeof t3.unbindPosition == "function" && t3.unbindPosition(), t3.parentNode && t3.parentNode.removeChild(t3));
            }};
            const f = function(t3) {
              var e3 = {};
              return Object.keys(t3).sort().forEach(function(n2) {
                e3[n2] = t3[n2];
              }), JSON.stringify(e3);
            };
            var y = 0;
            const b = function() {
              return ++y;
            };
            function g(t3, e3) {
              var n2 = Object.keys(t3);
              if (Object.getOwnPropertySymbols) {
                var o2 = Object.getOwnPropertySymbols(t3);
                e3 && (o2 = o2.filter(function(e4) {
                  return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
                })), n2.push.apply(n2, o2);
              }
              return n2;
            }
            function v(t3) {
              for (var e3 = 1; e3 < arguments.length; e3++) {
                var n2 = arguments[e3] != null ? arguments[e3] : {};
                e3 % 2 ? g(Object(n2), true).forEach(function(e4) {
                  a()(t3, e4, n2[e4]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : g(Object(n2)).forEach(function(e4) {
                  Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(n2, e4));
                });
              }
              return t3;
            }
            const m = p({components: v({}, h), directives: {appendToBody: d}, mixins: [l, c, u], props: {value: {}, components: {type: Object, default: function() {
              return {};
            }}, options: {type: Array, default: function() {
              return [];
            }}, disabled: {type: Boolean, default: false}, clearable: {type: Boolean, default: true}, deselectFromDropdown: {type: Boolean, default: false}, searchable: {type: Boolean, default: true}, multiple: {type: Boolean, default: false}, placeholder: {type: String, default: ""}, transition: {type: String, default: "vs__fade"}, clearSearchOnSelect: {type: Boolean, default: true}, closeOnSelect: {type: Boolean, default: true}, label: {type: String, default: "label"}, autocomplete: {type: String, default: "off"}, reduce: {type: Function, default: function(t3) {
              return t3;
            }}, selectable: {type: Function, default: function(t3) {
              return true;
            }}, getOptionLabel: {type: Function, default: function(t3) {
              return s()(t3) === "object" ? t3.hasOwnProperty(this.label) ? t3[this.label] : console.warn('[vue-select warn]: Label key "option.'.concat(this.label, '" does not') + " exist in options object ".concat(JSON.stringify(t3), ".\n") + "https://vue-select.org/api/props.html#getoptionlabel") : t3;
            }}, getOptionKey: {type: Function, default: function(t3) {
              if (s()(t3) !== "object")
                return t3;
              try {
                return t3.hasOwnProperty("id") ? t3.id : f(t3);
              } catch (e3) {
                return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey", t3, e3);
              }
            }}, onTab: {type: Function, default: function() {
              this.selectOnTab && !this.isComposing && this.typeAheadSelect();
            }}, taggable: {type: Boolean, default: false}, tabindex: {type: Number, default: null}, pushTags: {type: Boolean, default: false}, filterable: {type: Boolean, default: true}, filterBy: {type: Function, default: function(t3, e3, n2) {
              return (e3 || "").toLocaleLowerCase().indexOf(n2.toLocaleLowerCase()) > -1;
            }}, filter: {type: Function, default: function(t3, e3) {
              var n2 = this;
              return t3.filter(function(t4) {
                var o2 = n2.getOptionLabel(t4);
                return typeof o2 == "number" && (o2 = o2.toString()), n2.filterBy(t4, o2, e3);
              });
            }}, createOption: {type: Function, default: function(t3) {
              return s()(this.optionList[0]) === "object" ? a()({}, this.label, t3) : t3;
            }}, resetOnOptionsChange: {default: false, validator: function(t3) {
              return ["function", "boolean"].includes(s()(t3));
            }}, clearSearchOnBlur: {type: Function, default: function(t3) {
              var e3 = t3.clearSearchOnSelect, n2 = t3.multiple;
              return e3 && !n2;
            }}, noDrop: {type: Boolean, default: false}, inputId: {type: String}, dir: {type: String, default: "auto"}, selectOnTab: {type: Boolean, default: false}, selectOnKeyCodes: {type: Array, default: function() {
              return [13];
            }}, searchInputQuerySelector: {type: String, default: "[type=search]"}, mapKeydown: {type: Function, default: function(t3, e3) {
              return t3;
            }}, appendToBody: {type: Boolean, default: false}, calculatePosition: {type: Function, default: function(t3, e3, n2) {
              var o2 = n2.width, i2 = n2.top, s2 = n2.left;
              t3.style.top = i2, t3.style.left = s2, t3.style.width = o2;
            }}, dropdownShouldOpen: {type: Function, default: function(t3) {
              var e3 = t3.noDrop, n2 = t3.open, o2 = t3.mutableLoading;
              return !e3 && (n2 && !o2);
            }}, uid: {type: [String, Number], default: function() {
              return b();
            }}}, data: function() {
              return {search: "", open: false, isComposing: false, pushedTags: [], _value: []};
            }, computed: {isTrackingValues: function() {
              return this.value === void 0 || this.$options.propsData.hasOwnProperty("reduce");
            }, selectedValue: function() {
              var t3 = this.value;
              return this.isTrackingValues && (t3 = this.$data._value), t3 != null && t3 !== "" ? [].concat(t3) : [];
            }, optionList: function() {
              return this.options.concat(this.pushTags ? this.pushedTags : []);
            }, searchEl: function() {
              return this.$scopedSlots.search ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector) : this.$refs.search;
            }, scope: function() {
              var t3 = this, e3 = {search: this.search, loading: this.loading, searching: this.searching, filteredOptions: this.filteredOptions};
              return {search: {attributes: v({disabled: this.disabled, placeholder: this.searchPlaceholder, tabindex: this.tabindex, readonly: !this.searchable, id: this.inputId, "aria-autocomplete": "list", "aria-labelledby": "vs".concat(this.uid, "__combobox"), "aria-controls": "vs".concat(this.uid, "__listbox"), ref: "search", type: "search", autocomplete: this.autocomplete, value: this.search}, this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {"aria-activedescendant": "vs".concat(this.uid, "__option-").concat(this.typeAheadPointer)} : {}), events: {compositionstart: function() {
                return t3.isComposing = true;
              }, compositionend: function() {
                return t3.isComposing = false;
              }, keydown: this.onSearchKeyDown, blur: this.onSearchBlur, focus: this.onSearchFocus, input: function(e4) {
                return t3.search = e4.target.value;
              }}}, spinner: {loading: this.mutableLoading}, noOptions: {search: this.search, loading: this.mutableLoading, searching: this.searching}, openIndicator: {attributes: {ref: "openIndicator", role: "presentation", class: "vs__open-indicator"}}, listHeader: e3, listFooter: e3, header: v({}, e3, {deselect: this.deselect}), footer: v({}, e3, {deselect: this.deselect})};
            }, childComponents: function() {
              return v({}, h, {}, this.components);
            }, stateClasses: function() {
              return {"vs--open": this.dropdownOpen, "vs--single": !this.multiple, "vs--multiple": this.multiple, "vs--searching": this.searching && !this.noDrop, "vs--searchable": this.searchable && !this.noDrop, "vs--unsearchable": !this.searchable, "vs--loading": this.mutableLoading, "vs--disabled": this.disabled};
            }, searching: function() {
              return !!this.search;
            }, dropdownOpen: function() {
              return this.dropdownShouldOpen(this);
            }, searchPlaceholder: function() {
              return this.isValueEmpty && this.placeholder ? this.placeholder : void 0;
            }, filteredOptions: function() {
              var t3 = [].concat(this.optionList);
              if (!this.filterable && !this.taggable)
                return t3;
              var e3 = this.search.length ? this.filter(t3, this.search, this) : t3;
              if (this.taggable && this.search.length) {
                var n2 = this.createOption(this.search);
                this.optionExists(n2) || e3.unshift(n2);
              }
              return e3;
            }, isValueEmpty: function() {
              return this.selectedValue.length === 0;
            }, showClearButton: function() {
              return !this.multiple && this.clearable && !this.open && !this.isValueEmpty;
            }}, watch: {options: function(t3, e3) {
              var n2 = this;
              !this.taggable && (typeof n2.resetOnOptionsChange == "function" ? n2.resetOnOptionsChange(t3, e3, n2.selectedValue) : n2.resetOnOptionsChange) && this.clearSelection(), this.value && this.isTrackingValues && this.setInternalValueFromOptions(this.value);
            }, value: {immediate: true, handler: function(t3) {
              this.isTrackingValues && this.setInternalValueFromOptions(t3);
            }}, multiple: function() {
              this.clearSelection();
            }, open: function(t3) {
              this.$emit(t3 ? "open" : "close");
            }}, created: function() {
              this.mutableLoading = this.loading, this.$on("option:created", this.pushTag);
            }, methods: {setInternalValueFromOptions: function(t3) {
              var e3 = this;
              Array.isArray(t3) ? this.$data._value = t3.map(function(t4) {
                return e3.findOptionFromReducedValue(t4);
              }) : this.$data._value = this.findOptionFromReducedValue(t3);
            }, select: function(t3) {
              this.$emit("option:selecting", t3), this.isOptionSelected(t3) ? this.deselectFromDropdown && (this.clearable || this.multiple && this.selectedValue.length > 1) && this.deselect(t3) : (this.taggable && !this.optionExists(t3) && this.$emit("option:created", t3), this.multiple && (t3 = this.selectedValue.concat(t3)), this.updateValue(t3), this.$emit("option:selected", t3)), this.onAfterSelect(t3);
            }, deselect: function(t3) {
              var e3 = this;
              this.$emit("option:deselecting", t3), this.updateValue(this.selectedValue.filter(function(n2) {
                return !e3.optionComparator(n2, t3);
              })), this.$emit("option:deselected", t3);
            }, clearSelection: function() {
              this.updateValue(this.multiple ? [] : null);
            }, onAfterSelect: function(t3) {
              var e3 = this;
              this.closeOnSelect && (this.open = !this.open, this.searchEl.blur()), this.clearSearchOnSelect && (this.search = ""), this.noDrop && this.multiple && this.$nextTick(function() {
                return e3.$refs.search.focus();
              });
            }, updateValue: function(t3) {
              var e3 = this;
              this.value === void 0 && (this.$data._value = t3), t3 !== null && (t3 = Array.isArray(t3) ? t3.map(function(t4) {
                return e3.reduce(t4);
              }) : this.reduce(t3)), this.$emit("input", t3);
            }, toggleDropdown: function(t3) {
              var n2 = t3.target !== this.searchEl;
              n2 && t3.preventDefault();
              var o2 = [].concat(e2()(this.$refs.deselectButtons || []), e2()([this.$refs.clearButton]));
              this.searchEl === void 0 || o2.filter(Boolean).some(function(e3) {
                return e3.contains(t3.target) || e3 === t3.target;
              }) ? t3.preventDefault() : this.open && n2 ? this.searchEl.blur() : this.disabled || (this.open = true, this.searchEl.focus());
            }, isOptionSelected: function(t3) {
              var e3 = this;
              return this.selectedValue.some(function(n2) {
                return e3.optionComparator(n2, t3);
              });
            }, isOptionDeselectable: function(t3) {
              return this.isOptionSelected(t3) && this.deselectFromDropdown;
            }, optionComparator: function(t3, e3) {
              return this.getOptionKey(t3) === this.getOptionKey(e3);
            }, findOptionFromReducedValue: function(t3) {
              var n2 = this, o2 = [].concat(e2()(this.options), e2()(this.pushedTags)).filter(function(e3) {
                return JSON.stringify(n2.reduce(e3)) === JSON.stringify(t3);
              });
              return o2.length === 1 ? o2[0] : o2.find(function(t4) {
                return n2.optionComparator(t4, n2.$data._value);
              }) || t3;
            }, closeSearchOptions: function() {
              this.open = false, this.$emit("search:blur");
            }, maybeDeleteValue: function() {
              if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
                var t3 = null;
                this.multiple && (t3 = e2()(this.selectedValue.slice(0, this.selectedValue.length - 1))), this.updateValue(t3);
              }
            }, optionExists: function(t3) {
              var e3 = this;
              return this.optionList.some(function(n2) {
                return e3.optionComparator(n2, t3);
              });
            }, normalizeOptionForSlot: function(t3) {
              return s()(t3) === "object" ? t3 : a()({}, this.label, t3);
            }, pushTag: function(t3) {
              this.pushedTags.push(t3);
            }, onEscape: function() {
              this.search.length ? this.search = "" : this.searchEl.blur();
            }, onSearchBlur: function() {
              if (!this.mousedown || this.searching) {
                var t3 = this.clearSearchOnSelect, e3 = this.multiple;
                return this.clearSearchOnBlur({clearSearchOnSelect: t3, multiple: e3}) && (this.search = ""), void this.closeSearchOptions();
              }
              this.mousedown = false, this.search.length !== 0 || this.options.length !== 0 || this.closeSearchOptions();
            }, onSearchFocus: function() {
              this.open = true, this.$emit("search:focus");
            }, onMousedown: function() {
              this.mousedown = true;
            }, onMouseUp: function() {
              this.mousedown = false;
            }, onSearchKeyDown: function(t3) {
              var e3 = this, n2 = function(t4) {
                return t4.preventDefault(), !e3.isComposing && e3.typeAheadSelect();
              }, o2 = {8: function(t4) {
                return e3.maybeDeleteValue();
              }, 9: function(t4) {
                return e3.onTab();
              }, 27: function(t4) {
                return e3.onEscape();
              }, 38: function(t4) {
                return t4.preventDefault(), e3.typeAheadUp();
              }, 40: function(t4) {
                return t4.preventDefault(), e3.typeAheadDown();
              }};
              this.selectOnKeyCodes.forEach(function(t4) {
                return o2[t4] = n2;
              });
              var i2 = this.mapKeydown(o2, this);
              if (typeof i2[t3.keyCode] == "function")
                return i2[t3.keyCode](t3);
            }}}, function() {
              var t3 = this, e3 = t3.$createElement, n2 = t3._self._c || e3;
              return n2("div", {staticClass: "v-select", class: t3.stateClasses, attrs: {dir: t3.dir}}, [t3._t("header", null, null, t3.scope.header), t3._v(" "), n2("div", {ref: "toggle", staticClass: "vs__dropdown-toggle", attrs: {id: "vs" + t3.uid + "__combobox", role: "combobox", "aria-expanded": t3.dropdownOpen.toString(), "aria-owns": "vs" + t3.uid + "__listbox", "aria-label": "Search for option"}, on: {mousedown: function(e4) {
                return t3.toggleDropdown(e4);
              }}}, [n2("div", {ref: "selectedOptions", staticClass: "vs__selected-options"}, [t3._l(t3.selectedValue, function(e4) {
                return t3._t("selected-option-container", [n2("span", {key: t3.getOptionKey(e4), staticClass: "vs__selected"}, [t3._t("selected-option", [t3._v("\n            " + t3._s(t3.getOptionLabel(e4)) + "\n          ")], null, t3.normalizeOptionForSlot(e4)), t3._v(" "), t3.multiple ? n2("button", {ref: "deselectButtons", refInFor: true, staticClass: "vs__deselect", attrs: {disabled: t3.disabled, type: "button", title: "Deselect " + t3.getOptionLabel(e4), "aria-label": "Deselect " + t3.getOptionLabel(e4)}, on: {click: function(n3) {
                  return t3.deselect(e4);
                }}}, [n2(t3.childComponents.Deselect, {tag: "component"})], 1) : t3._e()], 2)], {option: t3.normalizeOptionForSlot(e4), deselect: t3.deselect, multiple: t3.multiple, disabled: t3.disabled});
              }), t3._v(" "), t3._t("search", [n2("input", t3._g(t3._b({staticClass: "vs__search"}, "input", t3.scope.search.attributes, false), t3.scope.search.events))], null, t3.scope.search)], 2), t3._v(" "), n2("div", {ref: "actions", staticClass: "vs__actions"}, [n2("button", {directives: [{name: "show", rawName: "v-show", value: t3.showClearButton, expression: "showClearButton"}], ref: "clearButton", staticClass: "vs__clear", attrs: {disabled: t3.disabled, type: "button", title: "Clear Selected", "aria-label": "Clear Selected"}, on: {click: t3.clearSelection}}, [n2(t3.childComponents.Deselect, {tag: "component"})], 1), t3._v(" "), t3._t("open-indicator", [t3.noDrop ? t3._e() : n2(t3.childComponents.OpenIndicator, t3._b({tag: "component"}, "component", t3.scope.openIndicator.attributes, false))], null, t3.scope.openIndicator), t3._v(" "), t3._t("spinner", [n2("div", {directives: [{name: "show", rawName: "v-show", value: t3.mutableLoading, expression: "mutableLoading"}], staticClass: "vs__spinner"}, [t3._v("Loading...")])], null, t3.scope.spinner)], 2)]), t3._v(" "), n2("transition", {attrs: {name: t3.transition}}, [t3.dropdownOpen ? n2("ul", {directives: [{name: "append-to-body", rawName: "v-append-to-body"}], key: "vs" + t3.uid + "__listbox", ref: "dropdownMenu", staticClass: "vs__dropdown-menu", attrs: {id: "vs" + t3.uid + "__listbox", role: "listbox", tabindex: "-1"}, on: {mousedown: function(e4) {
                return e4.preventDefault(), t3.onMousedown(e4);
              }, mouseup: t3.onMouseUp}}, [t3._t("list-header", null, null, t3.scope.listHeader), t3._v(" "), t3._l(t3.filteredOptions, function(e4, o2) {
                return n2("li", {key: t3.getOptionKey(e4), staticClass: "vs__dropdown-option", class: {"vs__dropdown-option--deselect": t3.isOptionDeselectable(e4) && o2 === t3.typeAheadPointer, "vs__dropdown-option--selected": t3.isOptionSelected(e4), "vs__dropdown-option--highlight": o2 === t3.typeAheadPointer, "vs__dropdown-option--disabled": !t3.selectable(e4)}, attrs: {id: "vs" + t3.uid + "__option-" + o2, role: "option", "aria-selected": o2 === t3.typeAheadPointer || null}, on: {mouseover: function(n3) {
                  t3.selectable(e4) && (t3.typeAheadPointer = o2);
                }, click: function(n3) {
                  n3.preventDefault(), n3.stopPropagation(), t3.selectable(e4) && t3.select(e4);
                }}}, [t3._t("option", [t3._v("\n          " + t3._s(t3.getOptionLabel(e4)) + "\n        ")], null, t3.normalizeOptionForSlot(e4))], 2);
              }), t3._v(" "), t3.filteredOptions.length === 0 ? n2("li", {staticClass: "vs__no-options"}, [t3._t("no-options", [t3._v("\n          Sorry, no matching options.\n        ")], null, t3.scope.noOptions)], 2) : t3._e(), t3._v(" "), t3._t("list-footer", null, null, t3.scope.listFooter)], 2) : n2("ul", {staticStyle: {display: "none", visibility: "hidden"}, attrs: {id: "vs" + t3.uid + "__listbox", role: "listbox"}})]), t3._v(" "), t3._t("footer", null, null, t3.scope.footer)], 2);
            }, [], false, null, null, null).exports, _ = {ajax: u, pointer: c, pointerScroll: l}, O = m;
          })(), o;
        })();
      });
    }
  });

  // ../frontend/node_modules/moment/moment.js
  var require_moment = __commonJS({
    "../frontend/node_modules/moment/moment.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.moment = factory();
      })(exports, function() {
        "use strict";
        var hookCallback;
        function hooks() {
          return hookCallback.apply(null, arguments);
        }
        function setHookCallback(callback) {
          hookCallback = callback;
        }
        function isArray(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
        }
        function isObject(input) {
          return input != null && Object.prototype.toString.call(input) === "[object Object]";
        }
        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }
        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;
            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }
            return true;
          }
        }
        function isUndefined(input) {
          return input === void 0;
        }
        function isNumber(input) {
          return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
        }
        function isDate(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
        }
        function map(arr, fn) {
          var res = [], i;
          for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
          }
          return res;
        }
        function extend(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }
          if (hasOwnProp(b, "toString")) {
            a.toString = b.toString;
          }
          if (hasOwnProp(b, "valueOf")) {
            a.valueOf = b.valueOf;
          }
          return a;
        }
        function createUTC(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, true).utc();
        }
        function defaultParsingFlags() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }
        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }
          return m._pf;
        }
        var some;
        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function(fun) {
            var t = Object(this), len = t.length >>> 0, i;
            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }
            return false;
          };
        }
        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
              return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }
          return m._isValid;
        }
        function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }
          return m;
        }
        var momentProperties = hooks.momentProperties = [], updateInProgress = false;
        function copyConfig(to2, from2) {
          var i, prop, val;
          if (!isUndefined(from2._isAMomentObject)) {
            to2._isAMomentObject = from2._isAMomentObject;
          }
          if (!isUndefined(from2._i)) {
            to2._i = from2._i;
          }
          if (!isUndefined(from2._f)) {
            to2._f = from2._f;
          }
          if (!isUndefined(from2._l)) {
            to2._l = from2._l;
          }
          if (!isUndefined(from2._strict)) {
            to2._strict = from2._strict;
          }
          if (!isUndefined(from2._tzm)) {
            to2._tzm = from2._tzm;
          }
          if (!isUndefined(from2._isUTC)) {
            to2._isUTC = from2._isUTC;
          }
          if (!isUndefined(from2._offset)) {
            to2._offset = from2._offset;
          }
          if (!isUndefined(from2._pf)) {
            to2._pf = getParsingFlags(from2);
          }
          if (!isUndefined(from2._locale)) {
            to2._locale = from2._locale;
          }
          if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
              prop = momentProperties[i];
              val = from2[prop];
              if (!isUndefined(val)) {
                to2[prop] = val;
              }
            }
          }
          return to2;
        }
        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
            this._d = new Date(NaN);
          }
          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }
        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }
        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg);
          }
        }
        function deprecate(msg, fn) {
          var firstTime = true;
          return extend(function() {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
              var args = [], arg, i, key;
              for (i = 0; i < arguments.length; i++) {
                arg = "";
                if (typeof arguments[i] === "object") {
                  arg += "\n[" + i + "] ";
                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ": " + arguments[0][key] + ", ";
                    }
                  }
                  arg = arg.slice(0, -2);
                } else {
                  arg = arguments[i];
                }
                args.push(arg);
              }
              warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
              firstTime = false;
            }
            return fn.apply(this, arguments);
          }, fn);
        }
        var deprecations = {};
        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }
        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;
        function isFunction(input) {
          return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
        }
        function set(config) {
          var prop, i;
          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];
              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this["_" + i] = prop;
              }
            }
          }
          this._config = config;
          this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }
        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig), prop;
          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }
          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
              res[prop] = extend({}, res[prop]);
            }
          }
          return res;
        }
        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }
        var keys2;
        if (Object.keys) {
          keys2 = Object.keys;
        } else {
          keys2 = function(obj) {
            var i, res = [];
            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }
            return res;
          };
        }
        var defaultCalendar = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function calendar(key, mom, now2) {
          var output = this._calendar[key] || this._calendar["sameElse"];
          return isFunction(output) ? output.call(mom, now2) : output;
        }
        function zeroFill(number, targetLength, forceSign) {
          var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
          return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }
        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
        function addFormatToken(token2, padded, ordinal2, callback) {
          var func = callback;
          if (typeof callback === "string") {
            func = function() {
              return this[callback]();
            };
          }
          if (token2) {
            formatTokenFunctions[token2] = func;
          }
          if (padded) {
            formatTokenFunctions[padded[0]] = function() {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }
          if (ordinal2) {
            formatTokenFunctions[ordinal2] = function() {
              return this.localeData().ordinal(func.apply(this, arguments), token2);
            };
          }
        }
        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
          }
          return input.replace(/\\/g, "");
        }
        function makeFormatFunction(format2) {
          var array = format2.match(formattingTokens), i, length;
          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }
          return function(mom) {
            var output = "", i2;
            for (i2 = 0; i2 < length; i2++) {
              output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
            }
            return output;
          };
        }
        function formatMoment(m, format2) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }
          format2 = expandFormat(format2, m.localeData());
          formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
          return formatFunctions[format2](m);
        }
        function expandFormat(format2, locale2) {
          var i = 5;
          function replaceLongDateFormatTokens(input) {
            return locale2.longDateFormat(input) || input;
          }
          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format2)) {
            format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }
          return format2;
        }
        var defaultLongDateFormat = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function longDateFormat(key) {
          var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
          if (format2 || !formatUpper) {
            return format2;
          }
          this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
              return tok.slice(1);
            }
            return tok;
          }).join("");
          return this._longDateFormat[key];
        }
        var defaultInvalidDate = "Invalid date";
        function invalidDate() {
          return this._invalidDate;
        }
        var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
        function ordinal(number) {
          return this._ordinal.replace("%d", number);
        }
        var defaultRelativeTime = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }
        function pastFuture(diff2, output) {
          var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
          return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
        }
        var aliases = {};
        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
        }
        function normalizeUnits(units) {
          return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
        }
        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {}, normalizedProp, prop;
          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }
          return normalizedInput;
        }
        var priorities = {};
        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }
        function getPrioritizedUnits(unitsObj) {
          var units = [], u;
          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({unit: u, priority: priorities[u]});
            }
          }
          units.sort(function(a, b) {
            return a.priority - b.priority;
          });
          return units;
        }
        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }
        function absFloor(number) {
          if (number < 0) {
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }
        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion, value = 0;
          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }
          return value;
        }
        function makeGetSet(unit, keepTime) {
          return function(value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }
        function get(mom, unit) {
          return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
        }
        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              value = toInt(value);
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else {
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
            }
          }
        }
        function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units]();
          }
          return this;
        }
        function stringSet(units, value) {
          if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i;
            for (i = 0; i < prioritized.length; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
              return this[units](value);
            }
          }
          return this;
        }
        var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
        regexes = {};
        function addRegexToken(token2, regex, strictRegex) {
          regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }
        function getParseRegexForToken(token2, config) {
          if (!hasOwnProp(regexes, token2)) {
            return new RegExp(unescapeFormat(token2));
          }
          return regexes[token2](config._strict, config._locale);
        }
        function unescapeFormat(s) {
          return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }));
        }
        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var tokens = {};
        function addParseToken(token2, callback) {
          var i, func = callback;
          if (typeof token2 === "string") {
            token2 = [token2];
          }
          if (isNumber(callback)) {
            func = function(input, array) {
              array[callback] = toInt(input);
            };
          }
          for (i = 0; i < token2.length; i++) {
            tokens[token2[i]] = func;
          }
        }
        function addWeekParseToken(token2, callback) {
          addParseToken(token2, function(input, array, config, token3) {
            config._w = config._w || {};
            callback(input, config._w, config, token3);
          });
        }
        function addTimeToArrayFromToken(token2, input, config) {
          if (input != null && hasOwnProp(tokens, token2)) {
            tokens[token2](input, config._a, config, token2);
          }
        }
        var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
        function mod(n, x) {
          return (n % x + x) % x;
        }
        var indexOf;
        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function(o) {
            var i;
            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }
            return -1;
          };
        }
        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }
          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }
        addFormatToken("M", ["MM", 2], "Mo", function() {
          return this.month() + 1;
        });
        addFormatToken("MMM", 0, 0, function(format2) {
          return this.localeData().monthsShort(this, format2);
        });
        addFormatToken("MMMM", 0, 0, function(format2) {
          return this.localeData().months(this, format2);
        });
        addUnitAlias("month", "M");
        addUnitPriority("month", 8);
        addRegexToken("M", match1to2);
        addRegexToken("MM", match1to2, match2);
        addRegexToken("MMM", function(isStrict, locale2) {
          return locale2.monthsShortRegex(isStrict);
        });
        addRegexToken("MMMM", function(isStrict, locale2) {
          return locale2.monthsRegex(isStrict);
        });
        addParseToken(["M", "MM"], function(input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
          var month = config._locale.monthsParse(input, token2, config._strict);
          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
        function localeMonths(m, format2) {
          if (!m) {
            return isArray(this._months) ? this._months : this._months["standalone"];
          }
          return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
        }
        function localeMonthsShort(m, format2) {
          if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
          }
          return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
        }
        function handleStrictParse(monthName, format2, strict) {
          var i, ii, mom, llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
              mom = createUTC([2e3, i]);
              this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeMonthsParse(monthName, format2, strict) {
          var i, mom, regex;
          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format2, strict);
          }
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
              this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
            }
            if (!strict && !this._monthsParse[i]) {
              regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
              this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }
        function setMonth(mom, value) {
          var dayOfMonth;
          if (!mom.isValid()) {
            return mom;
          }
          if (typeof value === "string") {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value);
              if (!isNumber(value)) {
                return mom;
              }
            }
          }
          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
          return mom;
        }
        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, "Month");
          }
        }
        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }
        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }
        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsRegex")) {
              this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }
        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""));
          }
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }
          this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
          this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        }
        addFormatToken("Y", 0, 0, function() {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : "+" + y;
        });
        addFormatToken(0, ["YY", 2], 0, function() {
          return this.year() % 100;
        });
        addFormatToken(0, ["YYYY", 4], 0, "year");
        addFormatToken(0, ["YYYYY", 5], 0, "year");
        addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
        addUnitAlias("year", "y");
        addUnitPriority("year", 1);
        addRegexToken("Y", matchSigned);
        addRegexToken("YY", match1to2, match2);
        addRegexToken("YYYY", match1to4, match4);
        addRegexToken("YYYYY", match1to6, match6);
        addRegexToken("YYYYYY", match1to6, match6);
        addParseToken(["YYYYY", "YYYYYY"], YEAR);
        addParseToken("YYYY", function(input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken("YY", function(input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken("Y", function(input, array) {
          array[YEAR] = parseInt(input, 10);
        });
        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }
        hooks.parseTwoDigitYear = function(input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
        };
        var getSetYear = makeGetSet("FullYear", true);
        function getIsLeapYear() {
          return isLeapYear(this.year());
        }
        function createDate(y, m, d, h, M, s, ms) {
          var date;
          if (y < 100 && y >= 0) {
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }
          return date;
        }
        function createUTCDate(y) {
          var date, args;
          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }
          return date;
        }
        function firstWeekOffset(year, dow, doy) {
          var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        }
        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }
          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }
        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }
          return {
            week: resWeek,
            year: resYear
          };
        }
        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }
        addFormatToken("w", ["ww", 2], "wo", "week");
        addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
        addUnitAlias("week", "w");
        addUnitAlias("isoWeek", "W");
        addUnitPriority("week", 5);
        addUnitPriority("isoWeek", 5);
        addRegexToken("w", match1to2);
        addRegexToken("ww", match1to2, match2);
        addRegexToken("W", match1to2);
        addRegexToken("WW", match1to2, match2);
        addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token2) {
          week[token2.substr(0, 1)] = toInt(input);
        });
        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }
        var defaultLocaleWeek = {
          dow: 0,
          doy: 6
        };
        function localeFirstDayOfWeek() {
          return this._week.dow;
        }
        function localeFirstDayOfYear() {
          return this._week.doy;
        }
        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        addFormatToken("d", 0, "do", "day");
        addFormatToken("dd", 0, 0, function(format2) {
          return this.localeData().weekdaysMin(this, format2);
        });
        addFormatToken("ddd", 0, 0, function(format2) {
          return this.localeData().weekdaysShort(this, format2);
        });
        addFormatToken("dddd", 0, 0, function(format2) {
          return this.localeData().weekdays(this, format2);
        });
        addFormatToken("e", 0, 0, "weekday");
        addFormatToken("E", 0, 0, "isoWeekday");
        addUnitAlias("day", "d");
        addUnitAlias("weekday", "e");
        addUnitAlias("isoWeekday", "E");
        addUnitPriority("day", 11);
        addUnitPriority("weekday", 11);
        addUnitPriority("isoWeekday", 11);
        addRegexToken("d", match1to2);
        addRegexToken("e", match1to2);
        addRegexToken("E", match1to2);
        addRegexToken("dd", function(isStrict, locale2) {
          return locale2.weekdaysMinRegex(isStrict);
        });
        addRegexToken("ddd", function(isStrict, locale2) {
          return locale2.weekdaysShortRegex(isStrict);
        });
        addRegexToken("dddd", function(isStrict, locale2) {
          return locale2.weekdaysRegex(isStrict);
        });
        addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
          var weekday = config._locale.weekdaysParse(input, token2, config._strict);
          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
          week[token2] = toInt(input);
        });
        function parseWeekday(input, locale2) {
          if (typeof input !== "string") {
            return input;
          }
          if (!isNaN(input)) {
            return parseInt(input, 10);
          }
          input = locale2.weekdaysParse(input);
          if (typeof input === "number") {
            return input;
          }
          return null;
        }
        function parseIsoWeekday(input, locale2) {
          if (typeof input === "string") {
            return locale2.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
        }
        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
        function localeWeekdays(m, format2) {
          var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }
        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }
        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }
        function handleStrictParse$1(weekdayName, format2, strict) {
          var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
              mom = createUTC([2e3, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeWeekdaysParse(weekdayName, format2, strict) {
          var i, mom, regex;
          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format2, strict);
          }
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
              this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
              this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
            }
            if (!this._weekdaysParse[i]) {
              regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
              this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        }
        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
          } else {
            return day;
          }
        }
        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, "d");
        }
        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }
        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }
        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }
        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }
        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }
          var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ""));
            shortp = regexEscape(this.weekdaysShort(mom, ""));
            longp = regexEscape(this.weekdays(mom, ""));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          }
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
          this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
          this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
        }
        function hFormat() {
          return this.hours() % 12 || 12;
        }
        function kFormat() {
          return this.hours() || 24;
        }
        addFormatToken("H", ["HH", 2], 0, "hour");
        addFormatToken("h", ["hh", 2], 0, hFormat);
        addFormatToken("k", ["kk", 2], 0, kFormat);
        addFormatToken("hmm", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken("hmmss", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken("Hmm", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken("Hmmss", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        function meridiem(token2, lowercase) {
          addFormatToken(token2, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
          });
        }
        meridiem("a", true);
        meridiem("A", false);
        addUnitAlias("hour", "h");
        addUnitPriority("hour", 13);
        function matchMeridiem(isStrict, locale2) {
          return locale2._meridiemParse;
        }
        addRegexToken("a", matchMeridiem);
        addRegexToken("A", matchMeridiem);
        addRegexToken("H", match1to2);
        addRegexToken("h", match1to2);
        addRegexToken("k", match1to2);
        addRegexToken("HH", match1to2, match2);
        addRegexToken("hh", match1to2, match2);
        addRegexToken("kk", match1to2, match2);
        addRegexToken("hmm", match3to4);
        addRegexToken("hmmss", match5to6);
        addRegexToken("Hmm", match3to4);
        addRegexToken("Hmmss", match5to6);
        addParseToken(["H", "HH"], HOUR);
        addParseToken(["k", "kk"], function(input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(["a", "A"], function(input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(["h", "hh"], function(input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("Hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken("Hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        });
        function localeIsPM(input) {
          return (input + "").toLowerCase().charAt(0) === "p";
        }
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
        function localeMeridiem(hours2, minutes2, isLower) {
          if (hours2 > 11) {
            return isLower ? "pm" : "PM";
          } else {
            return isLower ? "am" : "AM";
          }
        }
        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        };
        var locales = {}, localeFamilies = {}, globalLocale;
        function commonPrefix(arr1, arr2) {
          var i, minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }
          return minl;
        }
        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace("_", "-") : key;
        }
        function chooseLocale(names) {
          var i = 0, j, next, locale2, split;
          while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
              locale2 = loadLocale(split.slice(0, j).join("-"));
              if (locale2) {
                return locale2;
              }
              if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                break;
              }
              j--;
            }
            i++;
          }
          return globalLocale;
        }
        function loadLocale(name) {
          var oldLocale = null, aliasedRequire;
          if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = require;
              aliasedRequire("./locale/" + name);
              getSetGlobalLocale(oldLocale);
            } catch (e) {
              locales[name] = null;
            }
          }
          return locales[name];
        }
        function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }
            if (data) {
              globalLocale = data;
            } else {
              if (typeof console !== "undefined" && console.warn) {
                console.warn("Locale " + key + " not found. Did you forget to load it?");
              }
            }
          }
          return globalLocale._abbr;
        }
        function defineLocale(name, config) {
          if (config !== null) {
            var locale2, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
              deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale2 = loadLocale(config.parentLocale);
                if (locale2 != null) {
                  parentConfig = locale2._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                    name,
                    config
                  });
                  return null;
                }
              }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
              });
            }
            getSetGlobalLocale(name);
            return locales[name];
          } else {
            delete locales[name];
            return null;
          }
        }
        function updateLocale(name, config) {
          if (config != null) {
            var locale2, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) {
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              tmpLocale = loadLocale(name);
              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }
              config = mergeConfigs(parentConfig, config);
              if (tmpLocale == null) {
                config.abbr = name;
              }
              locale2 = new Locale(config);
              locale2.parentLocale = locales[name];
              locales[name] = locale2;
            }
            getSetGlobalLocale(name);
          } else {
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }
          return locales[name];
        }
        function getLocale(key) {
          var locale2;
          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }
          if (!key) {
            return globalLocale;
          }
          if (!isArray(key)) {
            locale2 = loadLocale(key);
            if (locale2) {
              return locale2;
            }
            key = [key];
          }
          return chooseLocale(key);
        }
        function listLocales() {
          return keys2(locales);
        }
        function checkOverflow(m) {
          var overflow, a = m._a;
          if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
          }
          return m;
        }
        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, false],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, false],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, false],
          ["YYYY", /\d{4}/, false]
        ], isoTimes = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };
        function configFromISO(config) {
          var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
          if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }
            if (dateFormat == null) {
              config._isValid = false;
              return;
            }
            if (match[3]) {
              for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  timeFormat = (match[2] || " ") + isoTimes[i][0];
                  break;
                }
              }
              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }
            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }
            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = "Z";
              } else {
                config._isValid = false;
                return;
              }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }
        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
          ];
          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }
          return result;
        }
        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
            return 2e3 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }
          return year;
        }
        function preprocessRFC2822(s) {
          return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }
          return true;
        }
        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            return 0;
          } else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
          }
        }
        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
          if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        }
        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
          }
          configFromISO(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          configFromRFC2822(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          if (config._strict) {
            config._isValid = false;
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
          config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
        });
        function defaults(a, b, c) {
          if (a != null) {
            return a;
          }
          if (b != null) {
            return b;
          }
          return c;
        }
        function currentDateArray(config) {
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
            return [
              nowValue.getUTCFullYear(),
              nowValue.getUTCMonth(),
              nowValue.getUTCDate()
            ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        }
        function configFromArray(config) {
          var i, date, input = [], currentDate, expectedWeekday, yearToUse;
          if (config._d) {
            return;
          }
          currentDate = currentDateArray(config);
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          }
          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          }
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          }
          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          }
          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }
          config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }
          if (config._nextDay) {
            config._a[HOUR] = 24;
          }
          if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }
        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              weekday = dow;
            }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        }
        hooks.ISO_8601 = function() {
        };
        hooks.RFC_2822 = function() {
        };
        function configFromStringAndFormat(config) {
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }
          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;
          var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
          tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
          for (i = 0; i < tokens2.length; i++) {
            token2 = tokens2[i];
            parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
              totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token2]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token2);
              }
              addTimeToArrayFromToken(token2, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token2);
            }
          }
          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          }
          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
          }
          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
          era = getParsingFlags(config).era;
          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }
          configFromArray(config);
          checkOverflow(config);
        }
        function meridiemFixWrap(locale2, hour, meridiem2) {
          var isPm;
          if (meridiem2 == null) {
            return hour;
          }
          if (locale2.meridiemHour != null) {
            return locale2.meridiemHour(hour, meridiem2);
          } else if (locale2.isPM != null) {
            isPm = locale2.isPM(meridiem2);
            if (isPm && hour < 12) {
              hour += 12;
            }
            if (!isPm && hour === 12) {
              hour = 0;
            }
            return hour;
          } else {
            return hour;
          }
        }
        function configFromStringAndArray(config) {
          var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
          if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
          }
          for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) {
              validFormatFound = true;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
              if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }
          extend(config, bestMoment || tempConfig);
        }
        function configFromObject(config) {
          if (config._d) {
            return;
          }
          var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
          config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function(obj) {
            return obj && parseInt(obj, 10);
          });
          configFromArray(config);
        }
        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = void 0;
          }
          return res;
        }
        function prepareConfig(config) {
          var input = config._i, format2 = config._f;
          config._locale = config._locale || getLocale(config._l);
          if (input === null || format2 === void 0 && input === "") {
            return createInvalid({nullInput: true});
          }
          if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
          }
          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format2)) {
            configFromStringAndArray(config);
          } else if (format2) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }
          if (!isValid(config)) {
            config._d = null;
          }
          return config;
        }
        function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === "string") {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
          var c = {};
          if (format2 === true || format2 === false) {
            strict = format2;
            format2 = void 0;
          }
          if (locale2 === true || locale2 === false) {
            strict = locale2;
            locale2 = void 0;
          }
          if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = void 0;
          }
          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale2;
          c._i = input;
          c._f = format2;
          c._strict = strict;
          return createFromConfig(c);
        }
        function createLocal(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, false);
        }
        var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        }), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        });
        function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }
          if (!moments.length) {
            return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }
          return res;
        }
        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isBefore", args);
        }
        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isAfter", args);
        }
        var now = function() {
          return Date.now ? Date.now() : +new Date();
        };
        var ordering = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond"
        ];
        function isDurationValid(m) {
          var key, unitHasDecimal = false, i;
          for (key in m) {
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }
          for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false;
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }
          return true;
        }
        function isValid$1() {
          return this._isValid;
        }
        function createInvalid$1() {
          return createDuration(NaN);
        }
        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput);
          this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
          this._days = +days2 + weeks2 * 7;
          this._months = +months2 + quarters * 3 + years2 * 12;
          this._data = {};
          this._locale = getLocale();
          this._bubble();
        }
        function isDuration(obj) {
          return obj instanceof Duration;
        }
        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        }
        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }
          return diffs + lengthDiff;
        }
        function offset(token2, separator) {
          addFormatToken(token2, 0, 0, function() {
            var offset2 = this.utcOffset(), sign2 = "+";
            if (offset2 < 0) {
              offset2 = -offset2;
              sign2 = "-";
            }
            return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
          });
        }
        offset("Z", ":");
        offset("ZZ", "");
        addRegexToken("Z", matchShortOffset);
        addRegexToken("ZZ", matchShortOffset);
        addParseToken(["Z", "ZZ"], function(input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        function offsetFromString(matcher, string) {
          var matches = (string || "").match(matcher), chunk, parts, minutes2;
          if (matches === null) {
            return null;
          }
          chunk = matches[matches.length - 1] || [];
          parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
          minutes2 = +(parts[1] * 60) + toInt(parts[2]);
          return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
        }
        function cloneWithOffset(input, model) {
          var res, diff2;
          if (model._isUTC) {
            res = model.clone();
            diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff2);
            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }
        function getDateOffset(m) {
          return -Math.round(m._d.getTimezoneOffset());
        }
        hooks.updateOffset = function() {
        };
        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset2 = this._offset || 0, localAdjust;
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            if (typeof input === "string") {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
              this.add(localAdjust, "m");
            }
            if (offset2 !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset2, "m"), 1, false);
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }
            return this;
          } else {
            return this._isUTC ? offset2 : getDateOffset(this);
          }
        }
        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== "string") {
              input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }
        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }
        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
              this.subtract(getDateOffset(this), "m");
            }
          }
          return this;
        }
        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }
          return this;
        }
        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }
        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }
          var c = {}, other;
          copyConfig(c, this);
          c = prepareConfig(c);
          if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }
          return this._isDSTShifted;
        }
        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }
        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }
        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function createDuration(input, key) {
          var duration = input, match = null, sign2, ret, diffRes;
          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if (match = aspNetRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign2,
              h: toInt(match[HOUR]) * sign2,
              m: toInt(match[MINUTE]) * sign2,
              s: toInt(match[SECOND]) * sign2,
              ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
            };
          } else if (match = isoRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign2),
              M: parseIso(match[3], sign2),
              w: parseIso(match[4], sign2),
              d: parseIso(match[5], sign2),
              h: parseIso(match[6], sign2),
              m: parseIso(match[7], sign2),
              s: parseIso(match[8], sign2)
            };
          } else if (duration == null) {
            duration = {};
          } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }
          ret = new Duration(duration);
          if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
          }
          if (isDuration(input) && hasOwnProp(input, "_isValid")) {
            ret._isValid = input._isValid;
          }
          return ret;
        }
        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;
        function parseIso(inp, sign2) {
          var res = inp && parseFloat(inp.replace(",", "."));
          return (isNaN(res) ? 0 : res) * sign2;
        }
        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
          }
          res.milliseconds = +other - +base.clone().add(res.months, "M");
          return res;
        }
        function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
          }
          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }
          return res;
        }
        function createAdder(direction, name) {
          return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
              deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
              tmp = val;
              val = period;
              period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }
        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
          if (!mom.isValid()) {
            return;
          }
          updateOffset = updateOffset == null ? true : updateOffset;
          if (months2) {
            setMonth(mom, get(mom, "Month") + months2 * isAdding);
          }
          if (days2) {
            set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
          }
          if (milliseconds2) {
            mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
          }
          if (updateOffset) {
            hooks.updateOffset(mom, days2 || months2);
          }
        }
        var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
        function isString(input) {
          return typeof input === "string" || input instanceof String;
        }
        function isMomentInput(input) {
          return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
        }
        function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function isNumberOrStringArray(input) {
          var arrayTest = isArray(input), dataTypeTest = false;
          if (arrayTest) {
            dataTypeTest = input.filter(function(item) {
              return !isNumber(item) && isString(input);
            }).length === 0;
          }
          return arrayTest && dataTypeTest;
        }
        function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function getCalendarFormat(myMoment, now2) {
          var diff2 = myMoment.diff(now2, "days", true);
          return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
        }
        function calendar$1(time, formats) {
          if (arguments.length === 1) {
            if (!arguments[0]) {
              time = void 0;
              formats = void 0;
            } else if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = void 0;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = void 0;
            }
          }
          var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
          return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
        }
        function clone() {
          return new Moment(this);
        }
        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }
        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }
        function isBetween(from2, to2, units, inclusivity) {
          var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }
          inclusivity = inclusivity || "()";
          return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }
        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input), inputMs;
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }
        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }
        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }
        function diff(input, units, asFloat) {
          var that, zoneDelta, output;
          if (!this.isValid()) {
            return NaN;
          }
          that = cloneWithOffset(input, this);
          if (!that.isValid()) {
            return NaN;
          }
          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);
          switch (units) {
            case "year":
              output = monthDiff(this, that) / 12;
              break;
            case "month":
              output = monthDiff(this, that);
              break;
            case "quarter":
              output = monthDiff(this, that) / 3;
              break;
            case "second":
              output = (this - that) / 1e3;
              break;
            case "minute":
              output = (this - that) / 6e4;
              break;
            case "hour":
              output = (this - that) / 36e5;
              break;
            case "day":
              output = (this - that - zoneDelta) / 864e5;
              break;
            case "week":
              output = (this - that - zoneDelta) / 6048e5;
              break;
            default:
              output = this - that;
          }
          return asFloat ? output : absFloor(output);
        }
        function monthDiff(a, b) {
          if (a.date() < b.date()) {
            return -monthDiff(b, a);
          }
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b - anchor) / (anchor2 - anchor);
          }
          return -(wholeMonthDiff + adjust) || 0;
        }
        hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function toString() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }
          var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
          }
          if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
            }
          }
          return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        function inspect() {
          if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)";
          }
          var func = "moment", zone = "", prefix, year, datetime, suffix;
          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
          }
          prefix = "[" + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
          datetime = "-MM-DD[T]HH:mm:ss.SSS";
          suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }
        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }
        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }
        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        }
        function locale(key) {
          var newLocaleData;
          if (key === void 0) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }
            return this;
          }
        }
        var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
          if (key === void 0) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        });
        function localeData() {
          return this._locale;
        }
        var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }
        function localStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }
        function utcStartOfDate(y, m, d) {
          if (y < 100 && y >= 0) {
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }
        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year(), 0, 1);
              break;
            case "quarter":
              time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
              break;
            case "month":
              time = startOfDate(this.year(), this.month(), 1);
              break;
            case "week":
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date());
              break;
            case "hour":
              time = this._d.valueOf();
              time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
              break;
            case "minute":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;
            case "second":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
              break;
            case "month":
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;
            case "isoWeek":
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
              break;
            case "minute":
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;
            case "second":
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function unix() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function toDate() {
          return new Date(this.valueOf());
        }
        function toArray() {
          var m = this;
          return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
          ];
        }
        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }
        function toJSON() {
          return this.isValid() ? this.toISOString() : null;
        }
        function isValid$2() {
          return isValid(this);
        }
        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }
        function invalidAt() {
          return getParsingFlags(this).overflow;
        }
        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        addFormatToken("N", 0, 0, "eraAbbr");
        addFormatToken("NN", 0, 0, "eraAbbr");
        addFormatToken("NNN", 0, 0, "eraAbbr");
        addFormatToken("NNNN", 0, 0, "eraName");
        addFormatToken("NNNNN", 0, 0, "eraNarrow");
        addFormatToken("y", ["y", 1], "yo", "eraYear");
        addFormatToken("y", ["yy", 2], 0, "eraYear");
        addFormatToken("y", ["yyy", 3], 0, "eraYear");
        addFormatToken("y", ["yyyy", 4], 0, "eraYear");
        addRegexToken("N", matchEraAbbr);
        addRegexToken("NN", matchEraAbbr);
        addRegexToken("NNN", matchEraAbbr);
        addRegexToken("NNNN", matchEraName);
        addRegexToken("NNNNN", matchEraNarrow);
        addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token2) {
          var era = config._locale.erasParse(input, token2, config._strict);
          if (era) {
            getParsingFlags(config).era = era;
          } else {
            getParsingFlags(config).invalidEra = input;
          }
        });
        addRegexToken("y", matchUnsigned);
        addRegexToken("yy", matchUnsigned);
        addRegexToken("yyy", matchUnsigned);
        addRegexToken("yyyy", matchUnsigned);
        addRegexToken("yo", matchEraYearOrdinal);
        addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
        addParseToken(["yo"], function(input, array, config, token2) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }
          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });
        function localeEras(m, format2) {
          var i, l, date, eras = this._eras || getLocale("en")._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case "string":
                date = hooks(eras[i].since).startOf("day");
                eras[i].since = date.valueOf();
                break;
            }
            switch (typeof eras[i].until) {
              case "undefined":
                eras[i].until = Infinity;
                break;
              case "string":
                date = hooks(eras[i].until).startOf("day").valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }
          return eras;
        }
        function localeErasParse(eraName, format2, strict) {
          var i, l, eras = this.eras(), name, abbr, narrow;
          eraName = eraName.toUpperCase();
          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) {
              switch (format2) {
                case "N":
                case "NN":
                case "NNN":
                  if (abbr === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNN":
                  if (name === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNNN":
                  if (narrow === eraName) {
                    return eras[i];
                  }
                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }
        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? 1 : -1;
          if (year === void 0) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }
        function getEraName() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }
          return "";
        }
        function getEraNarrow() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }
          return "";
        }
        function getEraAbbr() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }
          return "";
        }
        function getEraYear() {
          var i, l, dir, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
              return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
            }
          }
          return this.year();
        }
        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNameRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
        }
        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, "_erasAbbrRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }
        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNarrowRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }
        function matchEraAbbr(isStrict, locale2) {
          return locale2.erasAbbrRegex(isStrict);
        }
        function matchEraName(isStrict, locale2) {
          return locale2.erasNameRegex(isStrict);
        }
        function matchEraNarrow(isStrict, locale2) {
          return locale2.erasNarrowRegex(isStrict);
        }
        function matchEraYearOrdinal(isStrict, locale2) {
          return locale2._eraYearOrdinalRegex || matchUnsigned;
        }
        function computeErasParse() {
          var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
          }
          this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
          this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
          this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
        }
        addFormatToken(0, ["gg", 2], 0, function() {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ["GG", 2], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function addWeekYearFormatToken(token2, getter) {
          addFormatToken(0, [token2, token2.length], 0, getter);
        }
        addWeekYearFormatToken("gggg", "weekYear");
        addWeekYearFormatToken("ggggg", "weekYear");
        addWeekYearFormatToken("GGGG", "isoWeekYear");
        addWeekYearFormatToken("GGGGG", "isoWeekYear");
        addUnitAlias("weekYear", "gg");
        addUnitAlias("isoWeekYear", "GG");
        addUnitPriority("weekYear", 1);
        addUnitPriority("isoWeekYear", 1);
        addRegexToken("G", matchSigned);
        addRegexToken("g", matchSigned);
        addRegexToken("GG", match1to2, match2);
        addRegexToken("gg", match1to2, match2);
        addRegexToken("GGGG", match1to4, match4);
        addRegexToken("gggg", match1to4, match4);
        addRegexToken("GGGGG", match1to6, match6);
        addRegexToken("ggggg", match1to6, match6);
        addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token2) {
          week[token2.substr(0, 2)] = toInt(input);
        });
        addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
          week[token2] = hooks.parseTwoDigitYear(input);
        });
        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }
        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }
        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }
        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }
        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }
        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
              week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }
        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        }
        addFormatToken("Q", 0, "Qo", "quarter");
        addUnitAlias("quarter", "Q");
        addUnitPriority("quarter", 7);
        addRegexToken("Q", match1);
        addParseToken("Q", function(input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        });
        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }
        addFormatToken("D", ["DD", 2], "Do", "date");
        addUnitAlias("date", "D");
        addUnitPriority("date", 9);
        addRegexToken("D", match1to2);
        addRegexToken("DD", match1to2, match2);
        addRegexToken("Do", function(isStrict, locale2) {
          return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(["D", "DD"], DATE);
        addParseToken("Do", function(input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        });
        var getSetDayOfMonth = makeGetSet("Date", true);
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
        addUnitAlias("dayOfYear", "DDD");
        addUnitPriority("dayOfYear", 4);
        addRegexToken("DDD", match1to3);
        addRegexToken("DDDD", match3);
        addParseToken(["DDD", "DDDD"], function(input, array, config) {
          config._dayOfYear = toInt(input);
        });
        function getSetDayOfYear(input) {
          var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
        }
        addFormatToken("m", ["mm", 2], 0, "minute");
        addUnitAlias("minute", "m");
        addUnitPriority("minute", 14);
        addRegexToken("m", match1to2);
        addRegexToken("mm", match1to2, match2);
        addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", false);
        addFormatToken("s", ["ss", 2], 0, "second");
        addUnitAlias("second", "s");
        addUnitPriority("second", 15);
        addRegexToken("s", match1to2);
        addRegexToken("ss", match1to2, match2);
        addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", false);
        addFormatToken("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ["SSS", 3], 0, "millisecond");
        addFormatToken(0, ["SSSS", 4], 0, function() {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ["SSSSS", 5], 0, function() {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ["SSSSSS", 6], 0, function() {
          return this.millisecond() * 1e3;
        });
        addFormatToken(0, ["SSSSSSS", 7], 0, function() {
          return this.millisecond() * 1e4;
        });
        addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
          return this.millisecond() * 1e5;
        });
        addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
          return this.millisecond() * 1e6;
        });
        addUnitAlias("millisecond", "ms");
        addUnitPriority("millisecond", 16);
        addRegexToken("S", match1to3, match1);
        addRegexToken("SS", match1to3, match2);
        addRegexToken("SSS", match1to3, match3);
        var token, getSetMillisecond;
        for (token = "SSSS"; token.length <= 9; token += "S") {
          addRegexToken(token, matchUnsigned);
        }
        function parseMs(input, array) {
          array[MILLISECOND] = toInt(("0." + input) * 1e3);
        }
        for (token = "S"; token.length <= 9; token += "S") {
          addParseToken(token, parseMs);
        }
        getSetMillisecond = makeGetSet("Milliseconds", false);
        addFormatToken("z", 0, 0, "zoneAbbr");
        addFormatToken("zz", 0, 0, "zoneName");
        function getZoneAbbr() {
          return this._isUTC ? "UTC" : "";
        }
        function getZoneName() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        if (typeof Symbol !== "undefined" && Symbol.for != null) {
          proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">";
          };
        }
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.eraName = getEraName;
        proto.eraNarrow = getEraNarrow;
        proto.eraAbbr = getEraAbbr;
        proto.eraYear = getEraYear;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.weeksInWeekYear = getWeeksInWeekYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
        proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
        proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
        proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
        proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
        function createUnix(input) {
          return createLocal(input * 1e3);
        }
        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }
        function preParsePostFormat(string) {
          return string;
        }
        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;
        function get$1(format2, index, field, setter) {
          var locale2 = getLocale(), utc = createUTC().set(setter, index);
          return locale2[field](utc, format2);
        }
        function listMonthsImpl(format2, index, field) {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
          if (index != null) {
            return get$1(format2, index, field, "month");
          }
          var i, out = [];
          for (i = 0; i < 12; i++) {
            out[i] = get$1(format2, i, field, "month");
          }
          return out;
        }
        function listWeekdaysImpl(localeSorted, format2, index, field) {
          if (typeof localeSorted === "boolean") {
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          } else {
            format2 = localeSorted;
            index = format2;
            localeSorted = false;
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          }
          var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
          if (index != null) {
            return get$1(format2, (index + shift) % 7, field, "day");
          }
          for (i = 0; i < 7; i++) {
            out[i] = get$1(format2, (i + shift) % 7, field, "day");
          }
          return out;
        }
        function listMonths(format2, index) {
          return listMonthsImpl(format2, index, "months");
        }
        function listMonthsShort(format2, index) {
          return listMonthsImpl(format2, index, "monthsShort");
        }
        function listWeekdays(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
        }
        function listWeekdaysShort(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
        }
        function listWeekdaysMin(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
        }
        getSetGlobalLocale("en", {
          eras: [
            {
              since: "0001-01-01",
              until: Infinity,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            },
            {
              since: "0000-12-31",
              until: -Infinity,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return number + output;
          }
        });
        hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
        hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
        var mathAbs = Math.abs;
        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }
        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        }
        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        }
        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }
        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }
        function bubble() {
          var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
          if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
            milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
            days2 = 0;
            months2 = 0;
          }
          data.milliseconds = milliseconds2 % 1e3;
          seconds2 = absFloor(milliseconds2 / 1e3);
          data.seconds = seconds2 % 60;
          minutes2 = absFloor(seconds2 / 60);
          data.minutes = minutes2 % 60;
          hours2 = absFloor(minutes2 / 60);
          data.hours = hours2 % 24;
          days2 += absFloor(hours2 / 24);
          monthsFromDays = absFloor(daysToMonths(days2));
          months2 += monthsFromDays;
          days2 -= absCeil(monthsToDays(monthsFromDays));
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          data.days = days2;
          data.months = months2;
          data.years = years2;
          return this;
        }
        function daysToMonths(days2) {
          return days2 * 4800 / 146097;
        }
        function monthsToDays(months2) {
          return months2 * 146097 / 4800;
        }
        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }
          var days2, months2, milliseconds2 = this._milliseconds;
          units = normalizeUnits(units);
          if (units === "month" || units === "quarter" || units === "year") {
            days2 = this._days + milliseconds2 / 864e5;
            months2 = this._months + daysToMonths(days2);
            switch (units) {
              case "month":
                return months2;
              case "quarter":
                return months2 / 3;
              case "year":
                return months2 / 12;
            }
          } else {
            days2 = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
              case "week":
                return days2 / 7 + milliseconds2 / 6048e5;
              case "day":
                return days2 + milliseconds2 / 864e5;
              case "hour":
                return days2 * 24 + milliseconds2 / 36e5;
              case "minute":
                return days2 * 1440 + milliseconds2 / 6e4;
              case "second":
                return days2 * 86400 + milliseconds2 / 1e3;
              case "millisecond":
                return Math.floor(days2 * 864e5) + milliseconds2;
              default:
                throw new Error("Unknown unit " + units);
            }
          }
        }
        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }
          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }
        function makeAs(alias) {
          return function() {
            return this.as(alias);
          };
        }
        var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
        function clone$1() {
          return createDuration(this);
        }
        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + "s"]() : NaN;
        }
        function makeGetter(name) {
          return function() {
            return this.isValid() ? this._data[name] : NaN;
          };
        }
        var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
        function weeks() {
          return absFloor(this.days() / 7);
        }
        var round = Math.round, thresholds = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11
        };
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
          return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }
        function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
          var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
          if (thresholds2.w != null) {
            a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
          }
          a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale2;
          return substituteTimeAgo.apply(null, a);
        }
        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === void 0) {
            return round;
          }
          if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
          }
          return false;
        }
        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === void 0) {
            return false;
          }
          if (limit === void 0) {
            return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === "s") {
            thresholds.ss = limit - 1;
          }
          return true;
        }
        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var withSuffix = false, th = thresholds, locale2, output;
          if (typeof argWithSuffix === "object") {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }
          if (typeof argWithSuffix === "boolean") {
            withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === "object") {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }
          locale2 = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale2);
          if (withSuffix) {
            output = locale2.pastFuture(+this, output);
          }
          return locale2.postformat(output);
        }
        var abs$1 = Math.abs;
        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }
        function toISOString$1() {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
          if (!total) {
            return "P0D";
          }
          minutes2 = absFloor(seconds2 / 60);
          hours2 = absFloor(minutes2 / 60);
          seconds2 %= 60;
          minutes2 %= 60;
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
          totalSign = total < 0 ? "-" : "";
          ymSign = sign(this._months) !== sign(total) ? "-" : "";
          daysSign = sign(this._days) !== sign(total) ? "-" : "";
          hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
          return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
        }
        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
        proto$2.lang = lang;
        addFormatToken("X", 0, 0, "unix");
        addFormatToken("x", 0, 0, "valueOf");
        addRegexToken("x", matchSigned);
        addRegexToken("X", matchTimestamp);
        addParseToken("X", function(input, array, config) {
          config._d = new Date(parseFloat(input) * 1e3);
        });
        addParseToken("x", function(input, array, config) {
          config._d = new Date(toInt(input));
        });
        hooks.version = "2.29.1";
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto;
        hooks.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM"
        };
        return hooks;
      });
    }
  });

  // ../frontend/node_modules/vuex/dist/vuex.common.js
  var require_vuex_common = __commonJS({
    "../frontend/node_modules/vuex/dist/vuex.common.js"(exports, module) {
      "use strict";
      function applyMixin(Vue3) {
        var version = Number(Vue3.version.split(".")[0]);
        if (version >= 2) {
          Vue3.mixin({beforeCreate: vuexInit});
        } else {
          var _init = Vue3.prototype._init;
          Vue3.prototype._init = function(options) {
            if (options === void 0)
              options = {};
            options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
            _init.call(this, options);
          };
        }
        function vuexInit() {
          var options = this.$options;
          if (options.store) {
            this.$store = typeof options.store === "function" ? options.store() : options.store;
          } else if (options.parent && options.parent.$store) {
            this.$store = options.parent.$store;
          }
        }
      }
      var target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
      var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
      function devtoolPlugin(store) {
        if (!devtoolHook) {
          return;
        }
        store._devtoolHook = devtoolHook;
        devtoolHook.emit("vuex:init", store);
        devtoolHook.on("vuex:travel-to-state", function(targetState) {
          store.replaceState(targetState);
        });
        store.subscribe(function(mutation, state5) {
          devtoolHook.emit("vuex:mutation", mutation, state5);
        }, {prepend: true});
        store.subscribeAction(function(action, state5) {
          devtoolHook.emit("vuex:action", action, state5);
        }, {prepend: true});
      }
      function find(list, f) {
        return list.filter(f)[0];
      }
      function deepCopy(obj, cache) {
        if (cache === void 0)
          cache = [];
        if (obj === null || typeof obj !== "object") {
          return obj;
        }
        var hit = find(cache, function(c) {
          return c.original === obj;
        });
        if (hit) {
          return hit.copy;
        }
        var copy = Array.isArray(obj) ? [] : {};
        cache.push({
          original: obj,
          copy
        });
        Object.keys(obj).forEach(function(key) {
          copy[key] = deepCopy(obj[key], cache);
        });
        return copy;
      }
      function forEachValue(obj, fn) {
        Object.keys(obj).forEach(function(key) {
          return fn(obj[key], key);
        });
      }
      function isObject(obj) {
        return obj !== null && typeof obj === "object";
      }
      function isPromise(val) {
        return val && typeof val.then === "function";
      }
      function assert(condition, msg) {
        if (!condition) {
          throw new Error("[vuex] " + msg);
        }
      }
      function partial(fn, arg) {
        return function() {
          return fn(arg);
        };
      }
      var Module = function Module2(rawModule, runtime) {
        this.runtime = runtime;
        this._children = Object.create(null);
        this._rawModule = rawModule;
        var rawState = rawModule.state;
        this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
      };
      var prototypeAccessors = {namespaced: {configurable: true}};
      prototypeAccessors.namespaced.get = function() {
        return !!this._rawModule.namespaced;
      };
      Module.prototype.addChild = function addChild(key, module2) {
        this._children[key] = module2;
      };
      Module.prototype.removeChild = function removeChild(key) {
        delete this._children[key];
      };
      Module.prototype.getChild = function getChild(key) {
        return this._children[key];
      };
      Module.prototype.hasChild = function hasChild(key) {
        return key in this._children;
      };
      Module.prototype.update = function update2(rawModule) {
        this._rawModule.namespaced = rawModule.namespaced;
        if (rawModule.actions) {
          this._rawModule.actions = rawModule.actions;
        }
        if (rawModule.mutations) {
          this._rawModule.mutations = rawModule.mutations;
        }
        if (rawModule.getters) {
          this._rawModule.getters = rawModule.getters;
        }
      };
      Module.prototype.forEachChild = function forEachChild(fn) {
        forEachValue(this._children, fn);
      };
      Module.prototype.forEachGetter = function forEachGetter(fn) {
        if (this._rawModule.getters) {
          forEachValue(this._rawModule.getters, fn);
        }
      };
      Module.prototype.forEachAction = function forEachAction(fn) {
        if (this._rawModule.actions) {
          forEachValue(this._rawModule.actions, fn);
        }
      };
      Module.prototype.forEachMutation = function forEachMutation(fn) {
        if (this._rawModule.mutations) {
          forEachValue(this._rawModule.mutations, fn);
        }
      };
      Object.defineProperties(Module.prototype, prototypeAccessors);
      var ModuleCollection = function ModuleCollection2(rawRootModule) {
        this.register([], rawRootModule, false);
      };
      ModuleCollection.prototype.get = function get(path) {
        return path.reduce(function(module2, key) {
          return module2.getChild(key);
        }, this.root);
      };
      ModuleCollection.prototype.getNamespace = function getNamespace(path) {
        var module2 = this.root;
        return path.reduce(function(namespace, key) {
          module2 = module2.getChild(key);
          return namespace + (module2.namespaced ? key + "/" : "");
        }, "");
      };
      ModuleCollection.prototype.update = function update$1(rawRootModule) {
        update([], this.root, rawRootModule);
      };
      ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
        var this$1 = this;
        if (runtime === void 0)
          runtime = true;
        if (true) {
          assertRawModule(path, rawModule);
        }
        var newModule = new Module(rawModule, runtime);
        if (path.length === 0) {
          this.root = newModule;
        } else {
          var parent = this.get(path.slice(0, -1));
          parent.addChild(path[path.length - 1], newModule);
        }
        if (rawModule.modules) {
          forEachValue(rawModule.modules, function(rawChildModule, key) {
            this$1.register(path.concat(key), rawChildModule, runtime);
          });
        }
      };
      ModuleCollection.prototype.unregister = function unregister(path) {
        var parent = this.get(path.slice(0, -1));
        var key = path[path.length - 1];
        var child = parent.getChild(key);
        if (!child) {
          if (true) {
            console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
          }
          return;
        }
        if (!child.runtime) {
          return;
        }
        parent.removeChild(key);
      };
      ModuleCollection.prototype.isRegistered = function isRegistered(path) {
        var parent = this.get(path.slice(0, -1));
        var key = path[path.length - 1];
        if (parent) {
          return parent.hasChild(key);
        }
        return false;
      };
      function update(path, targetModule, newModule) {
        if (true) {
          assertRawModule(path, newModule);
        }
        targetModule.update(newModule);
        if (newModule.modules) {
          for (var key in newModule.modules) {
            if (!targetModule.getChild(key)) {
              if (true) {
                console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
              }
              return;
            }
            update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
          }
        }
      }
      var functionAssert = {
        assert: function(value) {
          return typeof value === "function";
        },
        expected: "function"
      };
      var objectAssert = {
        assert: function(value) {
          return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
        },
        expected: 'function or object with "handler" function'
      };
      var assertTypes = {
        getters: functionAssert,
        mutations: functionAssert,
        actions: objectAssert
      };
      function assertRawModule(path, rawModule) {
        Object.keys(assertTypes).forEach(function(key) {
          if (!rawModule[key]) {
            return;
          }
          var assertOptions = assertTypes[key];
          forEachValue(rawModule[key], function(value, type) {
            assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
          });
        });
      }
      function makeAssertionMessage(path, key, type, value, expected) {
        var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
        if (path.length > 0) {
          buf += ' in module "' + path.join(".") + '"';
        }
        buf += " is " + JSON.stringify(value) + ".";
        return buf;
      }
      var Vue2;
      var Store = function Store2(options) {
        var this$1 = this;
        if (options === void 0)
          options = {};
        if (!Vue2 && typeof window !== "undefined" && window.Vue) {
          install(window.Vue);
        }
        if (true) {
          assert(Vue2, "must call Vue.use(Vuex) before creating a store instance.");
          assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
          assert(this instanceof Store2, "store must be called with the new operator.");
        }
        var plugins = options.plugins;
        if (plugins === void 0)
          plugins = [];
        var strict = options.strict;
        if (strict === void 0)
          strict = false;
        this._committing = false;
        this._actions = Object.create(null);
        this._actionSubscribers = [];
        this._mutations = Object.create(null);
        this._wrappedGetters = Object.create(null);
        this._modules = new ModuleCollection(options);
        this._modulesNamespaceMap = Object.create(null);
        this._subscribers = [];
        this._watcherVM = new Vue2();
        this._makeLocalGettersCache = Object.create(null);
        var store = this;
        var ref = this;
        var dispatch = ref.dispatch;
        var commit = ref.commit;
        this.dispatch = function boundDispatch(type, payload) {
          return dispatch.call(store, type, payload);
        };
        this.commit = function boundCommit(type, payload, options2) {
          return commit.call(store, type, payload, options2);
        };
        this.strict = strict;
        var state5 = this._modules.root.state;
        installModule(this, state5, [], this._modules.root);
        resetStoreVM(this, state5);
        plugins.forEach(function(plugin) {
          return plugin(this$1);
        });
        var useDevtools = options.devtools !== void 0 ? options.devtools : Vue2.config.devtools;
        if (useDevtools) {
          devtoolPlugin(this);
        }
      };
      var prototypeAccessors$1 = {state: {configurable: true}};
      prototypeAccessors$1.state.get = function() {
        return this._vm._data.$$state;
      };
      prototypeAccessors$1.state.set = function(v) {
        if (true) {
          assert(false, "use store.replaceState() to explicit replace store state.");
        }
      };
      Store.prototype.commit = function commit(_type, _payload, _options) {
        var this$1 = this;
        var ref = unifyObjectStyle(_type, _payload, _options);
        var type = ref.type;
        var payload = ref.payload;
        var options = ref.options;
        var mutation = {type, payload};
        var entry = this._mutations[type];
        if (!entry) {
          if (true) {
            console.error("[vuex] unknown mutation type: " + type);
          }
          return;
        }
        this._withCommit(function() {
          entry.forEach(function commitIterator(handler) {
            handler(payload);
          });
        });
        this._subscribers.slice().forEach(function(sub) {
          return sub(mutation, this$1.state);
        });
        if (options && options.silent) {
          console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
        }
      };
      Store.prototype.dispatch = function dispatch(_type, _payload) {
        var this$1 = this;
        var ref = unifyObjectStyle(_type, _payload);
        var type = ref.type;
        var payload = ref.payload;
        var action = {type, payload};
        var entry = this._actions[type];
        if (!entry) {
          if (true) {
            console.error("[vuex] unknown action type: " + type);
          }
          return;
        }
        try {
          this._actionSubscribers.slice().filter(function(sub) {
            return sub.before;
          }).forEach(function(sub) {
            return sub.before(action, this$1.state);
          });
        } catch (e) {
          if (true) {
            console.warn("[vuex] error in before action subscribers: ");
            console.error(e);
          }
        }
        var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
          return handler(payload);
        })) : entry[0](payload);
        return new Promise(function(resolve, reject) {
          result.then(function(res) {
            try {
              this$1._actionSubscribers.filter(function(sub) {
                return sub.after;
              }).forEach(function(sub) {
                return sub.after(action, this$1.state);
              });
            } catch (e) {
              if (true) {
                console.warn("[vuex] error in after action subscribers: ");
                console.error(e);
              }
            }
            resolve(res);
          }, function(error) {
            try {
              this$1._actionSubscribers.filter(function(sub) {
                return sub.error;
              }).forEach(function(sub) {
                return sub.error(action, this$1.state, error);
              });
            } catch (e) {
              if (true) {
                console.warn("[vuex] error in error action subscribers: ");
                console.error(e);
              }
            }
            reject(error);
          });
        });
      };
      Store.prototype.subscribe = function subscribe(fn, options) {
        return genericSubscribe(fn, this._subscribers, options);
      };
      Store.prototype.subscribeAction = function subscribeAction(fn, options) {
        var subs = typeof fn === "function" ? {before: fn} : fn;
        return genericSubscribe(subs, this._actionSubscribers, options);
      };
      Store.prototype.watch = function watch(getter, cb, options) {
        var this$1 = this;
        if (true) {
          assert(typeof getter === "function", "store.watch only accepts a function.");
        }
        return this._watcherVM.$watch(function() {
          return getter(this$1.state, this$1.getters);
        }, cb, options);
      };
      Store.prototype.replaceState = function replaceState(state5) {
        var this$1 = this;
        this._withCommit(function() {
          this$1._vm._data.$$state = state5;
        });
      };
      Store.prototype.registerModule = function registerModule(path, rawModule, options) {
        if (options === void 0)
          options = {};
        if (typeof path === "string") {
          path = [path];
        }
        if (true) {
          assert(Array.isArray(path), "module path must be a string or an Array.");
          assert(path.length > 0, "cannot register the root module by using registerModule.");
        }
        this._modules.register(path, rawModule);
        installModule(this, this.state, path, this._modules.get(path), options.preserveState);
        resetStoreVM(this, this.state);
      };
      Store.prototype.unregisterModule = function unregisterModule(path) {
        var this$1 = this;
        if (typeof path === "string") {
          path = [path];
        }
        if (true) {
          assert(Array.isArray(path), "module path must be a string or an Array.");
        }
        this._modules.unregister(path);
        this._withCommit(function() {
          var parentState = getNestedState(this$1.state, path.slice(0, -1));
          Vue2.delete(parentState, path[path.length - 1]);
        });
        resetStore(this);
      };
      Store.prototype.hasModule = function hasModule(path) {
        if (typeof path === "string") {
          path = [path];
        }
        if (true) {
          assert(Array.isArray(path), "module path must be a string or an Array.");
        }
        return this._modules.isRegistered(path);
      };
      Store.prototype.hotUpdate = function hotUpdate(newOptions) {
        this._modules.update(newOptions);
        resetStore(this, true);
      };
      Store.prototype._withCommit = function _withCommit(fn) {
        var committing = this._committing;
        this._committing = true;
        fn();
        this._committing = committing;
      };
      Object.defineProperties(Store.prototype, prototypeAccessors$1);
      function genericSubscribe(fn, subs, options) {
        if (subs.indexOf(fn) < 0) {
          options && options.prepend ? subs.unshift(fn) : subs.push(fn);
        }
        return function() {
          var i = subs.indexOf(fn);
          if (i > -1) {
            subs.splice(i, 1);
          }
        };
      }
      function resetStore(store, hot) {
        store._actions = Object.create(null);
        store._mutations = Object.create(null);
        store._wrappedGetters = Object.create(null);
        store._modulesNamespaceMap = Object.create(null);
        var state5 = store.state;
        installModule(store, state5, [], store._modules.root, true);
        resetStoreVM(store, state5, hot);
      }
      function resetStoreVM(store, state5, hot) {
        var oldVm = store._vm;
        store.getters = {};
        store._makeLocalGettersCache = Object.create(null);
        var wrappedGetters = store._wrappedGetters;
        var computed = {};
        forEachValue(wrappedGetters, function(fn, key) {
          computed[key] = partial(fn, store);
          Object.defineProperty(store.getters, key, {
            get: function() {
              return store._vm[key];
            },
            enumerable: true
          });
        });
        var silent = Vue2.config.silent;
        Vue2.config.silent = true;
        store._vm = new Vue2({
          data: {
            $$state: state5
          },
          computed
        });
        Vue2.config.silent = silent;
        if (store.strict) {
          enableStrictMode(store);
        }
        if (oldVm) {
          if (hot) {
            store._withCommit(function() {
              oldVm._data.$$state = null;
            });
          }
          Vue2.nextTick(function() {
            return oldVm.$destroy();
          });
        }
      }
      function installModule(store, rootState, path, module2, hot) {
        var isRoot = !path.length;
        var namespace = store._modules.getNamespace(path);
        if (module2.namespaced) {
          if (store._modulesNamespaceMap[namespace] && true) {
            console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
          }
          store._modulesNamespaceMap[namespace] = module2;
        }
        if (!isRoot && !hot) {
          var parentState = getNestedState(rootState, path.slice(0, -1));
          var moduleName = path[path.length - 1];
          store._withCommit(function() {
            if (true) {
              if (moduleName in parentState) {
                console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
              }
            }
            Vue2.set(parentState, moduleName, module2.state);
          });
        }
        var local = module2.context = makeLocalContext(store, namespace, path);
        module2.forEachMutation(function(mutation, key) {
          var namespacedType = namespace + key;
          registerMutation(store, namespacedType, mutation, local);
        });
        module2.forEachAction(function(action, key) {
          var type = action.root ? key : namespace + key;
          var handler = action.handler || action;
          registerAction(store, type, handler, local);
        });
        module2.forEachGetter(function(getter, key) {
          var namespacedType = namespace + key;
          registerGetter(store, namespacedType, getter, local);
        });
        module2.forEachChild(function(child, key) {
          installModule(store, rootState, path.concat(key), child, hot);
        });
      }
      function makeLocalContext(store, namespace, path) {
        var noNamespace = namespace === "";
        var local = {
          dispatch: noNamespace ? store.dispatch : function(_type, _payload, _options) {
            var args = unifyObjectStyle(_type, _payload, _options);
            var payload = args.payload;
            var options = args.options;
            var type = args.type;
            if (!options || !options.root) {
              type = namespace + type;
              if (!store._actions[type]) {
                console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
                return;
              }
            }
            return store.dispatch(type, payload);
          },
          commit: noNamespace ? store.commit : function(_type, _payload, _options) {
            var args = unifyObjectStyle(_type, _payload, _options);
            var payload = args.payload;
            var options = args.options;
            var type = args.type;
            if (!options || !options.root) {
              type = namespace + type;
              if (!store._mutations[type]) {
                console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
                return;
              }
            }
            store.commit(type, payload, options);
          }
        };
        Object.defineProperties(local, {
          getters: {
            get: noNamespace ? function() {
              return store.getters;
            } : function() {
              return makeLocalGetters(store, namespace);
            }
          },
          state: {
            get: function() {
              return getNestedState(store.state, path);
            }
          }
        });
        return local;
      }
      function makeLocalGetters(store, namespace) {
        if (!store._makeLocalGettersCache[namespace]) {
          var gettersProxy = {};
          var splitPos = namespace.length;
          Object.keys(store.getters).forEach(function(type) {
            if (type.slice(0, splitPos) !== namespace) {
              return;
            }
            var localType = type.slice(splitPos);
            Object.defineProperty(gettersProxy, localType, {
              get: function() {
                return store.getters[type];
              },
              enumerable: true
            });
          });
          store._makeLocalGettersCache[namespace] = gettersProxy;
        }
        return store._makeLocalGettersCache[namespace];
      }
      function registerMutation(store, type, handler, local) {
        var entry = store._mutations[type] || (store._mutations[type] = []);
        entry.push(function wrappedMutationHandler(payload) {
          handler.call(store, local.state, payload);
        });
      }
      function registerAction(store, type, handler, local) {
        var entry = store._actions[type] || (store._actions[type] = []);
        entry.push(function wrappedActionHandler(payload) {
          var res = handler.call(store, {
            dispatch: local.dispatch,
            commit: local.commit,
            getters: local.getters,
            state: local.state,
            rootGetters: store.getters,
            rootState: store.state
          }, payload);
          if (!isPromise(res)) {
            res = Promise.resolve(res);
          }
          if (store._devtoolHook) {
            return res.catch(function(err) {
              store._devtoolHook.emit("vuex:error", err);
              throw err;
            });
          } else {
            return res;
          }
        });
      }
      function registerGetter(store, type, rawGetter, local) {
        if (store._wrappedGetters[type]) {
          if (true) {
            console.error("[vuex] duplicate getter key: " + type);
          }
          return;
        }
        store._wrappedGetters[type] = function wrappedGetter(store2) {
          return rawGetter(local.state, local.getters, store2.state, store2.getters);
        };
      }
      function enableStrictMode(store) {
        store._vm.$watch(function() {
          return this._data.$$state;
        }, function() {
          if (true) {
            assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
          }
        }, {deep: true, sync: true});
      }
      function getNestedState(state5, path) {
        return path.reduce(function(state6, key) {
          return state6[key];
        }, state5);
      }
      function unifyObjectStyle(type, payload, options) {
        if (isObject(type) && type.type) {
          options = payload;
          payload = type;
          type = type.type;
        }
        if (true) {
          assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
        }
        return {type, payload, options};
      }
      function install(_Vue) {
        if (Vue2 && _Vue === Vue2) {
          if (true) {
            console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");
          }
          return;
        }
        Vue2 = _Vue;
        applyMixin(Vue2);
      }
      var mapState = normalizeNamespace(function(namespace, states) {
        var res = {};
        if (!isValidMap(states)) {
          console.error("[vuex] mapState: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(states).forEach(function(ref) {
          var key = ref.key;
          var val = ref.val;
          res[key] = function mappedState() {
            var state5 = this.$store.state;
            var getters5 = this.$store.getters;
            if (namespace) {
              var module2 = getModuleByNamespace(this.$store, "mapState", namespace);
              if (!module2) {
                return;
              }
              state5 = module2.context.state;
              getters5 = module2.context.getters;
            }
            return typeof val === "function" ? val.call(this, state5, getters5) : state5[val];
          };
          res[key].vuex = true;
        });
        return res;
      });
      var mapMutations = normalizeNamespace(function(namespace, mutations5) {
        var res = {};
        if (!isValidMap(mutations5)) {
          console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(mutations5).forEach(function(ref) {
          var key = ref.key;
          var val = ref.val;
          res[key] = function mappedMutation() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            var commit = this.$store.commit;
            if (namespace) {
              var module2 = getModuleByNamespace(this.$store, "mapMutations", namespace);
              if (!module2) {
                return;
              }
              commit = module2.context.commit;
            }
            return typeof val === "function" ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
          };
        });
        return res;
      });
      var mapGetters = normalizeNamespace(function(namespace, getters5) {
        var res = {};
        if (!isValidMap(getters5)) {
          console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(getters5).forEach(function(ref) {
          var key = ref.key;
          var val = ref.val;
          val = namespace + val;
          res[key] = function mappedGetter() {
            if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
              return;
            }
            if (!(val in this.$store.getters)) {
              console.error("[vuex] unknown getter: " + val);
              return;
            }
            return this.$store.getters[val];
          };
          res[key].vuex = true;
        });
        return res;
      });
      var mapActions = normalizeNamespace(function(namespace, actions5) {
        var res = {};
        if (!isValidMap(actions5)) {
          console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
        }
        normalizeMap(actions5).forEach(function(ref) {
          var key = ref.key;
          var val = ref.val;
          res[key] = function mappedAction() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            var dispatch = this.$store.dispatch;
            if (namespace) {
              var module2 = getModuleByNamespace(this.$store, "mapActions", namespace);
              if (!module2) {
                return;
              }
              dispatch = module2.context.dispatch;
            }
            return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
          };
        });
        return res;
      });
      var createNamespacedHelpers = function(namespace) {
        return {
          mapState: mapState.bind(null, namespace),
          mapGetters: mapGetters.bind(null, namespace),
          mapMutations: mapMutations.bind(null, namespace),
          mapActions: mapActions.bind(null, namespace)
        };
      };
      function normalizeMap(map) {
        if (!isValidMap(map)) {
          return [];
        }
        return Array.isArray(map) ? map.map(function(key) {
          return {key, val: key};
        }) : Object.keys(map).map(function(key) {
          return {key, val: map[key]};
        });
      }
      function isValidMap(map) {
        return Array.isArray(map) || isObject(map);
      }
      function normalizeNamespace(fn) {
        return function(namespace, map) {
          if (typeof namespace !== "string") {
            map = namespace;
            namespace = "";
          } else if (namespace.charAt(namespace.length - 1) !== "/") {
            namespace += "/";
          }
          return fn(namespace, map);
        };
      }
      function getModuleByNamespace(store, helper, namespace) {
        var module2 = store._modulesNamespaceMap[namespace];
        if (!module2) {
          console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
        }
        return module2;
      }
      function createLogger(ref) {
        if (ref === void 0)
          ref = {};
        var collapsed = ref.collapsed;
        if (collapsed === void 0)
          collapsed = true;
        var filter = ref.filter;
        if (filter === void 0)
          filter = function(mutation, stateBefore, stateAfter) {
            return true;
          };
        var transformer = ref.transformer;
        if (transformer === void 0)
          transformer = function(state5) {
            return state5;
          };
        var mutationTransformer = ref.mutationTransformer;
        if (mutationTransformer === void 0)
          mutationTransformer = function(mut) {
            return mut;
          };
        var actionFilter = ref.actionFilter;
        if (actionFilter === void 0)
          actionFilter = function(action, state5) {
            return true;
          };
        var actionTransformer = ref.actionTransformer;
        if (actionTransformer === void 0)
          actionTransformer = function(act) {
            return act;
          };
        var logMutations = ref.logMutations;
        if (logMutations === void 0)
          logMutations = true;
        var logActions = ref.logActions;
        if (logActions === void 0)
          logActions = true;
        var logger = ref.logger;
        if (logger === void 0)
          logger = console;
        return function(store) {
          var prevState = deepCopy(store.state);
          if (typeof logger === "undefined") {
            return;
          }
          if (logMutations) {
            store.subscribe(function(mutation, state5) {
              var nextState = deepCopy(state5);
              if (filter(mutation, prevState, nextState)) {
                var formattedTime = getFormattedTime();
                var formattedMutation = mutationTransformer(mutation);
                var message = "mutation " + mutation.type + formattedTime;
                startMessage(logger, message, collapsed);
                logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
                logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
                logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
                endMessage(logger);
              }
              prevState = nextState;
            });
          }
          if (logActions) {
            store.subscribeAction(function(action, state5) {
              if (actionFilter(action, state5)) {
                var formattedTime = getFormattedTime();
                var formattedAction = actionTransformer(action);
                var message = "action " + action.type + formattedTime;
                startMessage(logger, message, collapsed);
                logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
                endMessage(logger);
              }
            });
          }
        };
      }
      function startMessage(logger, message, collapsed) {
        var startMessage2 = collapsed ? logger.groupCollapsed : logger.group;
        try {
          startMessage2.call(logger, message);
        } catch (e) {
          logger.log(message);
        }
      }
      function endMessage(logger) {
        try {
          logger.groupEnd();
        } catch (e) {
          logger.log("\u2014\u2014 log end \u2014\u2014");
        }
      }
      function getFormattedTime() {
        var time = new Date();
        return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
      }
      function repeat(str, times) {
        return new Array(times + 1).join(str);
      }
      function pad(num, maxLength) {
        return repeat("0", maxLength - num.toString().length) + num;
      }
      var index_cjs = {
        Store,
        install,
        version: "3.6.2",
        mapState,
        mapMutations,
        mapGetters,
        mapActions,
        createNamespacedHelpers,
        createLogger
      };
      module.exports = index_cjs;
    }
  });

  // ../frontend/frontend/public/js/records/components/NavBarItemComponent.vue
  var __vue_script__ = {
    name: "NavBarItemComponent",
    props: {
      title: {type: String, default: "Title"},
      subTitle: {type: String, default: "Subtitle"},
      icon: {type: String, default: "fa-user"},
      background: {type: String, default: "blue"},
      routeName: {type: String, default: "#"}
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-row", {staticClass: "mt-3 item-link"}, [
      _c("b-col", {staticClass: "mr-1", attrs: {cols: "2"}}, [
        _c("b-button", {
          staticClass: "psm",
          staticStyle: {color: "white"},
          style: {background: _vm.background},
          attrs: {variant: "primary"}
        }, [
          _c("i", {
            staticClass: "fa mt-1",
            class: [_vm.icon],
            attrs: {id: "ico", "aria-hidden": "true"}
          })
        ])
      ], 1),
      _vm._v(" "),
      _c("b-col", {staticClass: "title"}, [
        _c("b-row", [
          _c("b-col", {staticClass: "pull-left title", attrs: {cols: "12"}}, [
            _c("router-link", {
              staticClass: "pull-left title",
              staticStyle: {"font-size": "12px"},
              attrs: {to: {name: _vm.routeName}}
            }, [
              _vm._v("\n                    " + _vm._s(_vm.title) + "\n                ")
            ])
          ], 1),
          _vm._v(" "),
          _c("b-col", {staticClass: "pull-left sub-title", attrs: {cols: "12"}}, [_vm._v(_vm._s(_vm.subTitle))])
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-col", {staticClass: "pull-right vs-align-center", attrs: {cols: "2"}}, [
        _c("i", {
          staticClass: "fa fa-chevron-right pull-right vs-align-center mt-1 mr-1",
          attrs: {"aria-hidden": "true"}
        })
      ])
    ], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-d795383a_0", {source: "\n.item-link[data-v-d795383a] {\n    border-bottom: 1px solid white;\n    color: #fff !important;\n    padding-left: 4px;\n}\n.title[data-v-d795383a] {\n    font-weight: bold;\n    color: black !important;\n    margin-left: 4px;\n}\n.sub-title[data-v-d795383a] {\n    color: gray !important;\n    font-size: 10px;\n    margin-left: 8px;\n    font-weight: 400;\n}\n.psm[data-v-d795383a] {\n    display: inline-block;\n    border-radius: 50px;\n    box-shadow: 0px 0px 2px #888;\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    position: relative;\n    padding-bottom:10px ;\n    position: relative;\n}\n#ico[data-v-d795383a]{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    display: block;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/records/components/NavBarItemComponent.vue"], "names": [], "mappings": ";AAsCA;IACA,8BAAA;IACA,sBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,uBAAA;IACA,gBAAA;AACA;AAEA;IACA,sBAAA;IACA,eAAA;IACA,gBAAA;IACA,gBAAA;AACA;AAEA;IACA,qBAAA;IACA,mBAAA;IACA,4BAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;IACA,oBAAA;IACA,kBAAA;AACA;AACA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,WAAA;IACA,gCAAA;IACA,WAAA;IACA,YAAA;IACA,cAAA;AACA", "file": "NavBarItemComponent.vue", "sourcesContent": ['<template>\n    <b-row class="mt-3 item-link">\n        <b-col cols="2" class="mr-1">\n            <b-button variant="primary" class="psm" style="color: white" :style="{ background }">\n                <i id="ico" class="fa mt-1" aria-hidden="true" :class="[icon]"></i>\n            </b-button>\n        </b-col>\n        <b-col class="title">\n            <b-row>\n                <b-col cols="12" class="pull-left title">\n                    <router-link :to="{ name: routeName }" class="pull-left title" style="font-size:12px">\n                        {{title}}\n                    </router-link>\n                </b-col>\n                <b-col cols="12" class="pull-left sub-title">{{ subTitle }}</b-col>\n            </b-row>\n        </b-col>\n        <b-col cols="2" class="pull-right vs-align-center">\n            <i class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1" aria-hidden="true"></i\n        ></b-col>\n      </b-row>\n</template>\n\n<script>\nexport default {\n    name: "NavBarItemComponent",\n    props: {\n        title: { type: String, default: "Title" },\n        subTitle: { type: String, default: "Subtitle" },\n        icon: { type: String, default: "fa-user" },\n        background: { type: String, default: "blue" },\n        routeName: { type: String, default: "#" },\n\n    },\n};\n</script>\n\n<style scoped>\n.item-link {\n    border-bottom: 1px solid white;\n    color: #fff !important;\n    padding-left: 4px;\n}\n\n.title {\n    font-weight: bold;\n    color: black !important;\n    margin-left: 4px;\n}\n\n.sub-title {\n    color: gray !important;\n    font-size: 10px;\n    margin-left: 8px;\n    font-weight: 400;\n}\n\n.psm {\n    display: inline-block;\n    border-radius: 50px;\n    box-shadow: 0px 0px 2px #888;\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    position: relative;\n    padding-bottom:10px ;\n    position: relative;\n}\n#ico{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    display: block;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-d795383a";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n    <b-row class="mt-3 item-link">\n        <b-col cols="2" class="mr-1">\n            <b-button variant="primary" class="psm" style="color: white" :style="{ background }">\n                <i id="ico" class="fa mt-1" aria-hidden="true" :class="[icon]"></i>\n            </b-button>\n        </b-col>\n        <b-col class="title">\n            <b-row>\n                <b-col cols="12" class="pull-left title">\n                    <router-link :to="{ name: routeName }" class="pull-left title" style="font-size:12px">\n                        {{title}}\n                    </router-link>\n                </b-col>\n                <b-col cols="12" class="pull-left sub-title">{{ subTitle }}</b-col>\n            </b-row>\n        </b-col>\n        <b-col cols="2" class="pull-right vs-align-center">\n            <i class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1" aria-hidden="true"></i\n        ></b-col>\n      </b-row>\n</template>\n\n<script>\nexport default {\n    name: "NavBarItemComponent",\n    props: {\n        title: { type: String, default: "Title" },\n        subTitle: { type: String, default: "Subtitle" },\n        icon: { type: String, default: "fa-user" },\n        background: { type: String, default: "blue" },\n        routeName: { type: String, default: "#" },\n\n    },\n};\n</script>\n\n<style scoped>\n.item-link {\n    border-bottom: 1px solid white;\n    color: #fff !important;\n    padding-left: 4px;\n}\n\n.title {\n    font-weight: bold;\n    color: black !important;\n    margin-left: 4px;\n}\n\n.sub-title {\n    color: gray !important;\n    font-size: 10px;\n    margin-left: 8px;\n    font-weight: 400;\n}\n\n.psm {\n    display: inline-block;\n    border-radius: 50px;\n    box-shadow: 0px 0px 2px #888;\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    position: relative;\n    padding-bottom:10px ;\n    position: relative;\n}\n#ico{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    display: block;\n}\n</style>\n';
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
  var NavBarItemComponent_default = __vue_component__;

  // ../frontend/frontend/public/js/services/appointment/appointment_count.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: ({message}) => resolve(message), error: reject}));
  var getPatientAppointmentsCount = ({practitioner, service_unit}) => {
    return api({
      method: "clinical.api.appointment.appointment.get_patient_appointment_count",
      args: {
        practitioner,
        service_unit
      }
    });
  };

  // ../frontend/frontend/public/js/records/core/Sidebar.vue
  var __vue_script__2 = {
    components: {NavBarItemComponent: NavBarItemComponent_default},
    name: "Sidebar",
    data() {
      return {
        center: "center"
      };
    },
    mounted() {
      this.getPatientAppointment();
    },
    methods: {
      getPatientAppointment() {
        getPatientAppointmentsCount({practitioner: "", service_unit: ""}).then((res) => {
          this.$store.dispatch("appointments/setAppointmentsCount", res);
        });
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "side-bar-area aside-bottom-padding"}, [
      _c("div", {staticClass: "content-area"}, [
        _c("b-row", [
          _c("b-col", {attrs: {cols: "12"}}, [
            _c("b-row", {staticClass: "mt-3 mb-2 ml-1"}, [
              _c("div", {
                staticClass: "mx-auto menu-header",
                staticStyle: {
                  width: "100%",
                  padding: "3px",
                  color: "darkgray"
                }
              }, [
                _c("div", {staticClass: "pull-left"}, [
                  _vm._v("MY ACTIONS")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Register patient",
                subTitle: "Add  new patient",
                icon: "fa-user",
                background: "#28a745",
                routeName: "new-patient"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Import patient",
                subTitle: "Import exsting patient details",
                icon: "fa-cloud-download",
                background: "rgb(10 26 156)",
                routeName: "import-patient"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Patient Matching",
                subTitle: "Find and merge patients",
                icon: "fa fa-link",
                background: "rgb(164 51 97)",
                routeName: "match-patient"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Item Matching",
                subTitle: "Find and merge items",
                icon: "fa fa-hdd-o",
                background: "rgb(164 51 97)",
                routeName: "match-item"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Build a form",
                subTitle: "Form builder interface to build forms",
                icon: "fa fa-wrench",
                background: "#a4a433",
                routeName: "form-builder"
              }
            }),
            _vm._v(" "),
            _c("hr", {
              staticStyle: {height: "0.5px", "margin-right": "20px"}
            }),
            _vm._v(" "),
            _c("b-row", {staticClass: "mt-4 mb-2 ml-1"}, [
              _c("div", {
                staticClass: "mx-auto menu-header",
                staticStyle: {
                  width: "100%",
                  padding: "3px",
                  color: "darkgray"
                }
              }, [
                _c("div", {staticClass: "pull-left"}, [
                  _vm._v("MY LISTS")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Patients",
                subTitle: "List of all registered patients",
                icon: "fa-users",
                background: "#E24C4C",
                routeName: "patient-list"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Appointments",
                subTitle: "List of all appointments",
                icon: "fa-calendar",
                background: "#ffc107",
                routeName: "appointment-list"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Doctor Calendar",
                subTitle: "Doctor calendar list",
                icon: "fa-user-md",
                background: "#ffc107",
                routeName: "doctor-calendar"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Forms Repository",
                subTitle: "All data collected by forms",
                icon: "fa-book",
                background: "rgb(31 134 69)",
                routeName: "mtrh-forms"
              }
            }),
            _vm._v(" "),
            _c("hr", {
              staticStyle: {height: "0.5px", "margin-right": "20px"}
            }),
            _vm._v(" "),
            _c("b-row", {staticClass: "mt-4 mb-2 ml-1"}, [
              _c("div", {
                staticClass: "mx-auto menu-header",
                staticStyle: {
                  width: "100%",
                  padding: "3px",
                  color: "darkgray"
                }
              }, [
                _c("div", {staticClass: "pull-left"}, [
                  _vm._v("FORMS")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Concept Dictionary",
                subTitle: "List of all concept in dictionary",
                icon: "fa-folder-open",
                background: "royalblue",
                routeName: "concept-dictionary"
              }
            }),
            _vm._v(" "),
            _c("nav-bar-item-component", {
              attrs: {
                title: "Form Formula",
                subTitle: "List of all form formula",
                icon: "fa-calculator",
                background: "#0e9595",
                routeName: "form-formula"
              }
            })
          ], 1)
        ], 1)
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-699f2fbc_0", {source: "\n.no-sides[data-v-699f2fbc] {\n    margin-left: 0px;\n    margin-right: 8px;\n}\n.side-bar-area[data-v-699f2fbc] {\n    background: white;\n    width: 100% !important;\n    padding-top: 20px;\n    min-height: 600px;\n    height: 100vh;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    background-color: white;\n    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);\n    padding-left: 11px !important;\n    padding-right: 11px !important;\n}\n.item-link[data-v-699f2fbc] {\n    border-bottom: 1px solid white;\n    color: #fff !important;\n    padding-left: 4px;\n}\n.title[data-v-699f2fbc] {\n    font-weight: bold;\n    color: black !important;\n    margin-left: 4px;\n}\n.user-area[data-v-699f2fbc] {\n    background: #17161659;\n    padding: 13px;\n    border-radius: 4px;\n    color: white;\n}\n.menu-header[data-v-699f2fbc] {\n    width: 100%;\n    padding: 10px;\n    background: white;\n    font-size: 12px;\n    font-weight: bold;\n    /* box-shadow: 0px 7px 0px -5px #ccc; */\n}\n.sub-title[data-v-699f2fbc] {\n    color: gray !important;\n    font-size: 10px;\n    margin-left: 4px;\n    font-weight: 400;\n}\n.vs-align-center[data-v-699f2fbc] {\n    color: white\n}\n.content-area[data-v-699f2fbc]{\nheight: 87vh;\noverflow-y: scroll;\noverflow-x: hidden;\nscrollbar-width:thin;\nbackground: white;\npadding-bottom: 16px;\npadding-left: 16px;\nborder-radius: 5px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/records/core/Sidebar.vue"], "names": [], "mappings": ";AA+EA;IACA,gBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,sBAAA;IACA,iBAAA;IACA,iBAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,uBAAA;IACA,kEAAA;IACA,6BAAA;IACA,8BAAA;AACA;AAEA;IACA,8BAAA;IACA,sBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,uBAAA;IACA,gBAAA;AACA;AAEA;IACA,qBAAA;IACA,aAAA;IACA,kBAAA;IACA,YAAA;AACA;AAEA;IACA,WAAA;IACA,aAAA;IACA,iBAAA;IACA,eAAA;IACA,iBAAA;IACA,uCAAA;AACA;AAEA;IACA,sBAAA;IACA,eAAA;IACA,gBAAA;IACA,gBAAA;AACA;AAEA;IACA;AACA;AACA;AACA,YAAA;AACA,kBAAA;AACA,kBAAA;AACA,oBAAA;AACA,iBAAA;AACA,oBAAA;AACA,kBAAA;AACA,kBAAA;AACA", "file": "Sidebar.vue", "sourcesContent": [`<template>
    <b-container class="side-bar-area aside-bottom-padding">
      
  <div class="content-area">
    <b-row>
      <b-col cols="12">
        

      <b-row class="mt-3 mb-2 ml-1">
            <div class="mx-auto menu-header" style="width: 100%; padding: 3px; color:darkgray">
                <div class="pull-left">MY ACTIONS</div>
            </div>
        </b-row>
    
        <nav-bar-item-component :title="'Register patient'" :subTitle="'Add  new patient'" :icon="'fa-user'" :background="'#28a745'" :routeName="'new-patient'" />
        <nav-bar-item-component :title="'Import patient'" :subTitle="'Import exsting patient details'" :icon="'fa-cloud-download'" :background="'rgb(10 26 156)'" :routeName="'import-patient'" />
        <nav-bar-item-component :title="'Patient Matching'" :subTitle="'Find and merge patients'" :icon="'fa fa-link'" :background="'rgb(164 51 97)'" :routeName="'match-patient'" />
        <nav-bar-item-component :title="'Item Matching'" :subTitle="'Find and merge items'" :icon="'fa fa-hdd-o'" :background="'rgb(164 51 97)'" :routeName="'match-item'" />
        <nav-bar-item-component :title="'Build a form'" :subTitle="'Form builder interface to build forms'" :icon="'fa fa-wrench'" :background="'#a4a433'" :routeName="'form-builder'" />
        
    <hr style="height:0.5px;margin-right:20px;">
    
        <b-row class="mt-4 mb-2 ml-1">
            <div class="mx-auto menu-header" style="width: 100%; padding: 3px; color:darkgray">
                <div class="pull-left">MY LISTS</div>
            </div>
        </b-row>
    
        <nav-bar-item-component :title="'Patients'" :subTitle="'List of all registered patients'" :icon="'fa-users'" :background="'#E24C4C'" :routeName="'patient-list'" />
    
        <nav-bar-item-component :title="'Appointments'" :subTitle="'List of all appointments'" :icon="'fa-calendar'" :background="'#ffc107'" :routeName="'appointment-list'" />
    
        <nav-bar-item-component :title="'Doctor Calendar'" :subTitle="'Doctor calendar list'" :icon="'fa-user-md'" :background="'#ffc107'" :routeName="'doctor-calendar'" />
    
        <nav-bar-item-component :title="'Forms Repository'" :subTitle="'All data collected by forms'" :icon="'fa-book'" :background="'rgb(31 134 69)'" :routeName="'mtrh-forms'" />
    
    <hr style="height:0.5px;margin-right:20px;">

        <b-row class="mt-4 mb-2 ml-1">
            <div class="mx-auto menu-header" style="width: 100%; padding: 3px; color:darkgray">
                <div class="pull-left">FORMS</div>
            </div>
        </b-row>
    
        <nav-bar-item-component :title="'Concept Dictionary'" :subTitle="'List of all concept in dictionary'" :icon="'fa-folder-open'" :background="'royalblue'" :routeName="'concept-dictionary'" />
    
        <nav-bar-item-component :title="'Form Formula'" :subTitle="'List of all form formula'" :icon="'fa-calculator'" :background="'#0e9595'" :routeName="'form-formula'" />
      </b-col>
    </b-row>
  </div> 
    </b-container>
</template>

<script>
import NavBarItemComponent from '../components/NavBarItemComponent.vue';
import { getPatientAppointmentsCount } from './../../services/appointment/appointment_count'

export default {
    components: { NavBarItemComponent },
    name: "Sidebar",
    data() {
        return {
            center: "center"
        }
    },
    mounted() {
        this.getPatientAppointment()
    },
    methods: {
        getPatientAppointment() {
            getPatientAppointmentsCount({practitioner:"",service_unit:""}).then((res) => {
                this.$store.dispatch("appointments/setAppointmentsCount", res);
            });
        },
    }
};
</script>

<style scoped>
.no-sides {
    margin-left: 0px;
    margin-right: 8px;
}

.side-bar-area {
    background: white;
    width: 100% !important;
    padding-top: 20px;
    min-height: 600px;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: white;
    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);
    padding-left: 11px !important;
    padding-right: 11px !important;
}

.item-link {
    border-bottom: 1px solid white;
    color: #fff !important;
    padding-left: 4px;
}

.title {
    font-weight: bold;
    color: black !important;
    margin-left: 4px;
}

.user-area {
    background: #17161659;
    padding: 13px;
    border-radius: 4px;
    color: white;
}

.menu-header {
    width: 100%;
    padding: 10px;
    background: white;
    font-size: 12px;
    font-weight: bold;
    /* box-shadow: 0px 7px 0px -5px #ccc; */
}

.sub-title {
    color: gray !important;
    font-size: 10px;
    margin-left: 4px;
    font-weight: 400;
}

.vs-align-center {
    color: white
}
.content-area{
height: 87vh;
overflow-y: scroll;
overflow-x: hidden;
scrollbar-width:thin;
background: white;
padding-bottom: 16px;
padding-left: 16px;
border-radius: 5px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__2 = "data-v-699f2fbc";
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <b-container class="side-bar-area aside-bottom-padding">
      
  <div class="content-area">
    <b-row>
      <b-col cols="12">
        

      <b-row class="mt-3 mb-2 ml-1">
            <div class="mx-auto menu-header" style="width: 100%; padding: 3px; color:darkgray">
                <div class="pull-left">MY ACTIONS</div>
            </div>
        </b-row>
    
        <nav-bar-item-component :title="'Register patient'" :subTitle="'Add  new patient'" :icon="'fa-user'" :background="'#28a745'" :routeName="'new-patient'" />
        <nav-bar-item-component :title="'Import patient'" :subTitle="'Import exsting patient details'" :icon="'fa-cloud-download'" :background="'rgb(10 26 156)'" :routeName="'import-patient'" />
        <nav-bar-item-component :title="'Patient Matching'" :subTitle="'Find and merge patients'" :icon="'fa fa-link'" :background="'rgb(164 51 97)'" :routeName="'match-patient'" />
        <nav-bar-item-component :title="'Item Matching'" :subTitle="'Find and merge items'" :icon="'fa fa-hdd-o'" :background="'rgb(164 51 97)'" :routeName="'match-item'" />
        <nav-bar-item-component :title="'Build a form'" :subTitle="'Form builder interface to build forms'" :icon="'fa fa-wrench'" :background="'#a4a433'" :routeName="'form-builder'" />
        
    <hr style="height:0.5px;margin-right:20px;">
    
        <b-row class="mt-4 mb-2 ml-1">
            <div class="mx-auto menu-header" style="width: 100%; padding: 3px; color:darkgray">
                <div class="pull-left">MY LISTS</div>
            </div>
        </b-row>
    
        <nav-bar-item-component :title="'Patients'" :subTitle="'List of all registered patients'" :icon="'fa-users'" :background="'#E24C4C'" :routeName="'patient-list'" />
    
        <nav-bar-item-component :title="'Appointments'" :subTitle="'List of all appointments'" :icon="'fa-calendar'" :background="'#ffc107'" :routeName="'appointment-list'" />
    
        <nav-bar-item-component :title="'Doctor Calendar'" :subTitle="'Doctor calendar list'" :icon="'fa-user-md'" :background="'#ffc107'" :routeName="'doctor-calendar'" />
    
        <nav-bar-item-component :title="'Forms Repository'" :subTitle="'All data collected by forms'" :icon="'fa-book'" :background="'rgb(31 134 69)'" :routeName="'mtrh-forms'" />
    
    <hr style="height:0.5px;margin-right:20px;">

        <b-row class="mt-4 mb-2 ml-1">
            <div class="mx-auto menu-header" style="width: 100%; padding: 3px; color:darkgray">
                <div class="pull-left">FORMS</div>
            </div>
        </b-row>
    
        <nav-bar-item-component :title="'Concept Dictionary'" :subTitle="'List of all concept in dictionary'" :icon="'fa-folder-open'" :background="'royalblue'" :routeName="'concept-dictionary'" />
    
        <nav-bar-item-component :title="'Form Formula'" :subTitle="'List of all form formula'" :icon="'fa-calculator'" :background="'#0e9595'" :routeName="'form-formula'" />
      </b-col>
    </b-row>
  </div> 
    </b-container>
</template>

<script>
import NavBarItemComponent from '../components/NavBarItemComponent.vue';
import { getPatientAppointmentsCount } from './../../services/appointment/appointment_count'

export default {
    components: { NavBarItemComponent },
    name: "Sidebar",
    data() {
        return {
            center: "center"
        }
    },
    mounted() {
        this.getPatientAppointment()
    },
    methods: {
        getPatientAppointment() {
            getPatientAppointmentsCount({practitioner:"",service_unit:""}).then((res) => {
                this.$store.dispatch("appointments/setAppointmentsCount", res);
            });
        },
    }
};
</script>

<style scoped>
.no-sides {
    margin-left: 0px;
    margin-right: 8px;
}

.side-bar-area {
    background: white;
    width: 100% !important;
    padding-top: 20px;
    min-height: 600px;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: white;
    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);
    padding-left: 11px !important;
    padding-right: 11px !important;
}

.item-link {
    border-bottom: 1px solid white;
    color: #fff !important;
    padding-left: 4px;
}

.title {
    font-weight: bold;
    color: black !important;
    margin-left: 4px;
}

.user-area {
    background: #17161659;
    padding: 13px;
    border-radius: 4px;
    color: white;
}

.menu-header {
    width: 100%;
    padding: 10px;
    background: white;
    font-size: 12px;
    font-weight: bold;
    /* box-shadow: 0px 7px 0px -5px #ccc; */
}

.sub-title {
    color: gray !important;
    font-size: 10px;
    margin-left: 4px;
    font-weight: 400;
}

.vs-align-center {
    color: white
}
.content-area{
height: 87vh;
overflow-y: scroll;
overflow-x: hidden;
scrollbar-width:thin;
background: white;
padding-bottom: 16px;
padding-left: 16px;
border-radius: 5px;
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
  var Sidebar_default = __vue_component__2;

  // ../frontend/frontend/public/js/records/core/WorkingArea.vue
  var __vue_script__3 = {
    name: "WorkingArea"
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "area-background"});
  };
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-0cdfc22a_0", {source: "\n.area-background[data-v-0cdfc22a] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/records/core/WorkingArea.vue"], "names": [], "mappings": ";AAcA;EACA,4BAAA;EACA,6BAAA;AACA", "file": "WorkingArea.vue", "sourcesContent": ['<template>\n  <b-container class="area-background">\n\n  </b-container>\n</template>\n\n<script>\n\nexport default {\n  name: "WorkingArea",\n};\n</script>\n\n<style scoped>\n.area-background {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__3 = "data-v-0cdfc22a";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="area-background">\n\n  </b-container>\n</template>\n\n<script>\n\nexport default {\n  name: "WorkingArea",\n};\n</script>\n\n<style scoped>\n.area-background {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n</style>\n';
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
  function __vue_create_injector__3() {
    const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
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
  var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3}, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, __vue_create_injector__3, void 0, void 0);
  var WorkingArea_default = __vue_component__3;

  // ../frontend/frontend/public/js/records/core/TopHeader.vue
  var __vue_script__4 = {
    name: "TopHeader",
    data() {
      return {
        notificationList: [],
        paths: []
      };
    },
    watch: {
      $route(val) {
        const fullPath = val.fullPath;
        this.paths = fullPath.split("/").filter((item) => item && item.length > 0 && item !== "app" && item !== "records").map((item) => item.replaceAll("%20", " "));
      }
    },
    created() {
      const fullPath = this.$route.fullPath;
      this.paths = fullPath.split("/").filter((item) => item && item.length > 0 && item !== "app" && item !== "records").map((item) => item.replaceAll("%20", " "));
    },
    mounted() {
      const user = frappe.session.user;
      this.getNotifications(user);
    },
    methods: {
      getNotifications(user) {
        const payload = {ref: user};
      },
      clearNotification(name) {
        const payload = {name, user: frappe.session.user};
      }
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("header", {
        staticClass: "navbar navbar-expand sticky-top",
        attrs: {role: "navigation"}
      }, [
        _c("b-container", {staticClass: "top-bar-spacing"}, [
          _c("a", {
            staticClass: "navbar-brand navbar-home pull-left",
            attrs: {href: "/app", target: "_blank"}
          }, [
            _c("img", {
              staticClass: "app-logo",
              staticStyle: {width: "24px"},
              attrs: {src: "/assets/mtrh_dev/images/logo.jpg"}
            })
          ]),
          _vm._v(" "),
          _c("ul", {
            staticClass: "nav navbar-nav d-none d-sm-flex",
            attrs: {id: "navbar-breadcrumbs"}
          }, [
            _c("li", [
              _c("a", {attrs: {href: "/app/records", target: "_blank"}}, [
                _vm._v("Records Workspace")
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.paths, function(path) {
              return _c("li", {key: path}, [
                _c("a", {attrs: {href: path, target: "_blank"}}, [
                  _vm._v(_vm._s(path))
                ])
              ]);
            })
          ], 2),
          _vm._v(" "),
          _c("div", {
            staticClass: "collapse navbar-collapse justify-content-end hidden"
          }, [
            _c("form", {
              staticClass: "form-inline fill-width justify-content-end",
              attrs: {role: "search", onsubmit: "return false;"}
            }, [
              _c("div", {staticClass: "input-group search-bar text-muted hidden"}, [
                _c("div", {staticClass: "awesomplete"}, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      id: "navbar-search",
                      type: "text",
                      placeholder: "Search or type a command (Ctrl + G)",
                      "aria-haspopup": "true",
                      autocomplete: "off",
                      "aria-expanded": "false",
                      "aria-owns": "awesomplete_list_1",
                      role: "combobox",
                      "aria-activedescendant": "awesomplete_list_1_item_0"
                    }
                  }),
                  _vm._v(" "),
                  _c("ul", {
                    attrs: {
                      role: "listbox",
                      id: "awesomplete_list_1",
                      hidden: ""
                    }
                  }, [
                    _c("li", {attrs: {"aria-selected": "true"}}, [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _c("span", {
                            staticClass: "flex justify-between text-medium"
                          }, [
                            _c("span", {staticClass: "ellipsis"}, [
                              _vm._v("Search for "),
                              _c("b", [_vm._v("Patient C")])
                            ]),
                            _vm._v(" "),
                            _c("kbd", [_vm._v("\u21B5")])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _vm._v("Open "),
                          _c("mark", [_vm._v("Patient C")]),
                          _vm._v("hart")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _c("mark", [_vm._v("P")]),
                          _c("mark", [_vm._v("a")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark", [_vm._v("i")]),
                          _c("mark", [_vm._v("e")]),
                          _c("mark", [_vm._v("n")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark"),
                          _vm._v("En"),
                          _c("mark", [_vm._v("c")]),
                          _vm._v("ounter List")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _c("mark", [_vm._v("P")]),
                          _c("mark", [_vm._v("a")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark", [_vm._v("i")]),
                          _c("mark", [_vm._v("e")]),
                          _c("mark", [_vm._v("n")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark"),
                          _vm._v("En"),
                          _c("mark", [_vm._v("c")]),
                          _vm._v("ounter Report")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _vm._v("New "),
                          _c("mark", [_vm._v("P")]),
                          _c("mark", [_vm._v("a")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark", [_vm._v("i")]),
                          _c("mark", [_vm._v("e")]),
                          _c("mark", [_vm._v("n")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark"),
                          _vm._v("En"),
                          _c("mark", [_vm._v("c")]),
                          _vm._v("ounter")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _vm._v("In"),
                          _c("mark", [_vm._v("p")]),
                          _c("mark", [_vm._v("a")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark", [_vm._v("i")]),
                          _c("mark", [_vm._v("e")]),
                          _c("mark", [_vm._v("n")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark"),
                          _vm._v("Re"),
                          _c("mark", [_vm._v("c")]),
                          _vm._v("ord List")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _vm._v("In"),
                          _c("mark", [_vm._v("p")]),
                          _c("mark", [_vm._v("a")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark", [_vm._v("i")]),
                          _c("mark", [_vm._v("e")]),
                          _c("mark", [_vm._v("n")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark"),
                          _vm._v("Re"),
                          _c("mark", [_vm._v("c")]),
                          _vm._v("ord Report")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [
                        _c("span", [
                          _vm._v("New In"),
                          _c("mark", [_vm._v("p")]),
                          _c("mark", [_vm._v("a")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark", [_vm._v("i")]),
                          _c("mark", [_vm._v("e")]),
                          _c("mark", [_vm._v("n")]),
                          _c("mark", [_vm._v("t")]),
                          _c("mark"),
                          _vm._v("Re"),
                          _c("mark", [_vm._v("c")]),
                          _vm._v("ord")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", {staticStyle: {"font-weight": "normal"}}, [_c("span", [_vm._v("Help on Search")])])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "visually-hidden",
                    attrs: {
                      role: "status",
                      "aria-live": "assertive",
                      "aria-atomic": "true",
                      hidden: ""
                    }
                  }, [_vm._v("9 results found")])
                ]),
                _vm._v(" "),
                _c("span", {staticClass: "search-icon"}, [
                  _c("svg", {staticClass: "icon icon-sm"}, [
                    _c("use", {attrs: {"xlink:href": "#icon-search"}})
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("ul", {staticClass: "navbar-nav"}, [
              _c("li", {
                staticClass: "nav-item dropdown dropdown-notifications dropdown-mobile"
              }, [
                _c("a", {
                  staticClass: "nav-link notifications-icon text-muted",
                  attrs: {
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "true",
                    href: "#",
                    onclick: "return false;",
                    title: "",
                    "data-original-title": "Notifications"
                  }
                }, [
                  _c("div", [
                    _c("span", {staticClass: "notifications-seen"}, [
                      _c("svg", {staticClass: "icon icon-md"}, [
                        _c("use", {
                          attrs: {href: "#icon-notification"}
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.notificationList.length > 0 ? _c("b-badge", {
                      staticClass: "notification-badge",
                      attrs: {variant: "danger"}
                    }, [_vm._v(_vm._s(_vm.notificationList.length))]) : _vm._e()
                  ], 1),
                  _vm._v(" "),
                  _c("span", {staticClass: "notifications-unseen"}, [
                    _c("svg", {staticClass: "icon icon-md"}, [
                      _c("use", {
                        attrs: {
                          href: "#icon-notification-with-indicator"
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "dropdown-menu notifications-list dropdown-menu-right",
                  attrs: {role: "menu"}
                }, [
                  _c("div", {staticClass: "notification-list-header"}, [
                    _c("div", {staticClass: "header-items"}, [
                      _c("ul", {
                        staticClass: "notification-item-tabs nav nav-tabs",
                        attrs: {role: "tablist"}
                      }, [
                        _c("li", {
                          staticClass: "notifications-category",
                          attrs: {
                            id: "notifications",
                            "data-toggle": "collapse"
                          }
                        }, [
                          _vm._v("\n                      Notifications\n                    ")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", {staticClass: "header-actions"}, [
                      _vm.notificationList.length > 0 ? _c("span", {
                        staticClass: "mark-all-read pull-right",
                        attrs: {
                          "data-action": "mark_all_as_read",
                          title: "",
                          "data-original-title": "Mark all as read"
                        },
                        on: {
                          click: function($event) {
                            return _vm.clearNotification();
                          }
                        }
                      }, [
                        _c("svg", {staticClass: "icon icon-sm"}, [
                          _c("use", {
                            attrs: {href: "#icon-mark-as-read"}
                          })
                        ])
                      ]) : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "notification-list-body"}, [
                    _c("div", {staticClass: "panel-notifications"}, [
                      _c("div", {staticStyle: {display: "block"}}, _vm._l(_vm.notificationList, function(notification) {
                        return _c("a", {
                          key: notification.name,
                          staticClass: "recent-item notification-item unread",
                          attrs: {
                            href: "javascript:function() { return false; }",
                            "data-name": "0a283f5b8f"
                          },
                          on: {
                            click: function($event) {
                              return _vm.clearNotification(notification.name);
                            }
                          }
                        }, [
                          _c("div", {staticClass: "notification-body"}, [
                            _c("span", {
                              staticClass: "avatar avatar-medium user-avatar",
                              attrs: {title: "P"}
                            }, [
                              _c("div", {
                                staticClass: "avatar-frame standard-image",
                                staticStyle: {
                                  "background-color": "var(--pink-avatar-bg)",
                                  color: "var(--pink-avatar-color)"
                                }
                              }, [
                                _c("i", {
                                  staticClass: "fa fa-comments-o",
                                  attrs: {
                                    "aria-hidden": "true"
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", {staticClass: "message"}, [
                              _c("div", [
                                _c("b", {staticClass: "subject-title"}, [
                                  _vm._v(_vm._s(notification.title) + " :")
                                ]),
                                _vm._v("\n                            " + _vm._s(notification.message) + "\n                          ")
                              ]),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "notification-timestamp text-muted"
                              }, [
                                _c("span", {
                                  staticClass: "frappe-timestamp",
                                  attrs: {
                                    "data-timestamp": "2021-04-14 11:50:27.887714",
                                    title: "14-04-2021 11:50:27"
                                  }
                                }, [_vm._v("53 minutes ago")])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "mark-as-read",
                            attrs: {
                              title: "",
                              "data-original-title": "Mark as Read"
                            }
                          })
                        ]);
                      }), 0)
                    ]),
                    _vm._v(" "),
                    _c("div", {staticClass: "panel-events"}, [
                      _vm.notificationList.length < 1 ? _c("div", [
                        _c("div", {staticClass: "notification-null-state"}, [
                          _c("div", {staticClass: "text-center"}, [
                            _c("img", {
                              staticClass: "null-state",
                              attrs: {
                                src: "/assets/frappe/images/ui-states/event-empty-state.svg",
                                alt: "Generic Empty State"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", {staticClass: "title"}, [
                              _vm._v("No notifications")
                            ]),
                            _vm._v(" "),
                            _c("div", {staticClass: "subtitle"}, [
                              _vm._v("\n                          All your notifications will be listed here\n                        ")
                            ])
                          ])
                        ])
                      ]) : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", {
                staticClass: "nav-item dropdown dropdown-message dropdown-mobile hidden"
              }, [
                _c("a", {
                  staticClass: "nav-link notifications-icon text-muted",
                  attrs: {
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "true",
                    href: "#",
                    onclick: "return false;"
                  }
                }, [
                  _c("span", [
                    _c("svg", {staticClass: "icon icon-md"}, [
                      _c("use", {
                        attrs: {href: "#icon-small-message"}
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", {staticClass: "vertical-bar d-none d-sm-block"}),
              _vm._v(" "),
              _c("li", {
                staticClass: "nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block"
              }, [
                _c("a", {
                  staticClass: "nav-link",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    onclick: "return false;"
                  }
                }, [
                  _vm._v("\n              Help\n              "),
                  _c("span", [
                    _c("svg", {staticClass: "icon icon-xs"}, [
                      _c("use", {attrs: {href: "#icon-small-down"}})
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "dropdown-menu dropdown-menu-right",
                  attrs: {id: "toolbar-help", role: "menu"}
                }, [
                  _c("div", {attrs: {id: "help-links"}}),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "dropdown-divider documentation-links",
                    staticStyle: {display: "none"}
                  }),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {onclick: "window.open( '/app', '_blank')"}
                  }, [
                    _vm._v("\n                Go back to Home page\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.show_shortcuts(event)"
                    }
                  }, [
                    _vm._v("\n                Step by step tutorial\n              ")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", {
                staticClass: "nav-item dropdown dropdown-navbar-user dropdown-mobile"
              }, [
                _c("a", {
                  staticClass: "nav-link",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    onclick: "return false;"
                  }
                }, [
                  _c("span", {
                    staticClass: "avatar avatar-medium",
                    attrs: {title: "Supplier Account"}
                  }, [
                    _c("div", {
                      staticClass: "avatar-frame standard-image",
                      staticStyle: {
                        "background-color": "var(--dark-green-avatar-bg)",
                        color: "var(--dark-green-avatar-color)"
                      }
                    }, [
                      _c("i", {
                        staticClass: "fa fa-user",
                        attrs: {"aria-hidden": "true"}
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "dropdown-menu dropdown-menu-right",
                  attrs: {id: "toolbar-user", role: "menu"}
                }, [
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      href: "/app/user-profile",
                      target: "_blank"
                    }
                  }, [
                    _vm._v("\n                My Profile\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.route_to_user()"
                    }
                  }, [
                    _vm._v("\n                My Settings\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.clear_cache()"
                    }
                  }, [_vm._v("\n                Reload\n              ")]),
                  _vm._v(" "),
                  _c("div", {staticClass: "dropdown-divider"}),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {onclick: "return frappe.app.logout()"}
                  }, [_vm._v("\n                Logout\n              ")])
                ])
              ])
            ])
          ])
        ])
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-951c7232_0", {source: "\n#page-patient-chart {\n  height: 100vh;\n}\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/records/core/TopHeader.vue"], "names": [], "mappings": ";AAucA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;AACA", "file": "TopHeader.vue", "sourcesContent": [`<template>
  <div>
    <header class="navbar navbar-expand sticky-top" role="navigation">
      <b-container class="top-bar-spacing">
        <a
          class="navbar-brand navbar-home pull-left"
          href="/app"
          target="_blank"
        >
          <img
            class="app-logo"
            style="width: 24px"
           
            src="/assets/mtrh_dev/images/logo.jpg"
          />
        </a>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>
            <a href="/app/records" target="_blank">Records Workspace</a>
          </li>
          <li v-for="path in paths" :key="path">
            <a :href="path" target="_blank">{{ path }}</a>
          </li>
        </ul>
        <div class="collapse navbar-collapse justify-content-end hidden">
          <form
            class="form-inline fill-width justify-content-end"
            role="search"
            onsubmit="return false;"
          >
            <div class="input-group search-bar text-muted hidden">
              <div class="awesomplete">
                <input
                  id="navbar-search"
                  type="text"
                  class="form-control"
                  placeholder="Search or type a command (Ctrl + G)"
                  aria-haspopup="true"
                  autocomplete="off"
                  aria-expanded="false"
                  aria-owns="awesomplete_list_1"
                  role="combobox"
                  aria-activedescendant="awesomplete_list_1_item_0"
                />
                <ul role="listbox" id="awesomplete_list_1" hidden="">
                  <li aria-selected="true">
                    <a style="font-weight: normal"
                      ><span>
                        <span class="flex justify-between text-medium">
                          <span class="ellipsis"
                            >Search for <b>Patient C</b></span
                          >
                          <kbd>\u21B5</kbd>
                        </span>
                      </span></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span>Open <mark>Patient C</mark>hart</span></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark
                        ><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>En<mark>c</mark>ounter List</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark
                        ><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>En<mark>c</mark>ounter Report</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >New <mark>P</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>En<mark>c</mark>ounter</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >In<mark>p</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>Re<mark>c</mark>ord List</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >In<mark>p</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>Re<mark>c</mark>ord Report</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >New In<mark>p</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>Re<mark>c</mark>ord</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span>Help on Search</span></a
                    >
                  </li>
                </ul>
                <span
                  class="visually-hidden"
                  role="status"
                  aria-live="assertive"
                  aria-atomic="true"
                  hidden=""
                  >9 results found</span
                >
              </div>
              <span class="search-icon">
                <svg class="icon icon-sm">
                  <use xlink:href="#icon-search"></use>
                </svg>
              </span>
            </div>
          </form>
          <ul class="navbar-nav">
            <li
              class="nav-item dropdown dropdown-notifications dropdown-mobile"
            >
              <a
                class="nav-link notifications-icon text-muted"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                href="#"
                onclick="return false;"
                title=""
                data-original-title="Notifications"
              >
                <div>
                  <span class="notifications-seen">
                    <svg class="icon icon-md">
                      <use href="#icon-notification"></use>
                    </svg>
                  </span>
                  <b-badge
                    v-if="notificationList.length > 0"
                    class="notification-badge"
                    variant="danger"
                    >{{ notificationList.length }}</b-badge
                  >
                </div>

                <span class="notifications-unseen">
                  <svg class="icon icon-md">
                    <use href="#icon-notification-with-indicator"></use>
                  </svg>
                </span>
              </a>
              <div
                class="dropdown-menu notifications-list dropdown-menu-right"
                role="menu"
              >
                <div class="notification-list-header">
                  <div class="header-items">
                    <ul
                      class="notification-item-tabs nav nav-tabs"
                      role="tablist"
                    >
                      <li
                        class="notifications-category"
                        id="notifications"
                        data-toggle="collapse"
                      >
                        Notifications
                      </li>
                    </ul>
                  </div>
                  <div class="header-actions">
                    <span
                      v-if="notificationList.length > 0"
                      class="mark-all-read pull-right"
                      data-action="mark_all_as_read"
                      title=""
                      data-original-title="Mark all as read"
                      @click="clearNotification()"
                    >
                      <svg class="icon icon-sm" style="">
                        <use class="" href="#icon-mark-as-read"></use>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="notification-list-body">
                  <div class="panel-notifications">
                    <div style="display: block">
                      <a
                        v-for="notification in notificationList"
                        :key="notification.name"
                        class="recent-item notification-item unread"
                        href="javascript:function() { return false; }"
                        data-name="0a283f5b8f"
                        @click="clearNotification(notification.name)"
                      >
                        <div class="notification-body">
                          <span
                            class="avatar avatar-medium user-avatar"
                            title="P"
                          >
                            <div
                              class="avatar-frame standard-image"
                              style="
                                background-color: var(--pink-avatar-bg);
                                color: var(--pink-avatar-color);
                              "
                            >
                              <i
                                class="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </span>
                          <div class="message">
                            <div>
                              <b class="subject-title"
                                >{{ notification.title }} :</b
                              >
                              {{ notification.message }}
                            </div>
                            <div class="notification-timestamp text-muted">
                              <span
                                class="frappe-timestamp"
                                data-timestamp="2021-04-14 11:50:27.887714"
                                title="14-04-2021 11:50:27"
                                >53 minutes ago</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          class="mark-as-read"
                          title=""
                          data-original-title="Mark as Read"
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="panel-events">
                    <div v-if="notificationList.length < 1">
                      <div class="notification-null-state">
                        <div class="text-center">
                          <img
                            src="/assets/frappe/images/ui-states/event-empty-state.svg"
                            alt="Generic Empty State"
                            class="null-state"
                          />
                          <div class="title">No notifications</div>
                          <div class="subtitle">
                            All your notifications will be listed here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="nav-item dropdown dropdown-message dropdown-mobile hidden"
            >
              <a
                class="nav-link notifications-icon text-muted"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                href="#"
                onclick="return false;"
              >
                <span>
                  <svg class="icon icon-md">
                    <use href="#icon-small-message"></use>
                  </svg>
                </span>
              </a>
            </li>
            <li class="vertical-bar d-none d-sm-block"></li>
            <li
              class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block"
            >
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
                Help
                <span>
                  <svg class="icon icon-xs">
                    <use href="#icon-small-down"></use>
                  </svg>
                </span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                id="toolbar-help"
                role="menu"
              >
                <div id="help-links"></div>
                <div
                  class="dropdown-divider documentation-links"
                  style="display: none"
                ></div>
                <a
                  class="dropdown-item"
                  onclick="window.open( '/app', '_blank')"
                >
                  Go back to Home page
                </a>

                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.show_shortcuts(event)"
                >
                  Step by step tutorial
                </a>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
                <span class="avatar avatar-medium" title="Supplier Account">
                  <div
                    class="avatar-frame standard-image"
                    style="
                      background-color: var(--dark-green-avatar-bg);
                      color: var(--dark-green-avatar-color);
                    "
                  >
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                </span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                id="toolbar-user"
                role="menu"
              >
                <a
                  class="dropdown-item"
                  href="/app/user-profile"
                  target="_blank"
                >
                  My Profile
                </a>

                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.route_to_user()"
                >
                  My Settings
                </a>

                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.clear_cache()"
                >
                  Reload
                </a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" onclick="return frappe.app.logout()">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </b-container>
    </header>
  </div>
</template>

<script>
// import notificationModule from "./../../state/notification/moduleNotification.js";
export default {
  name: "TopHeader",
  data() {
    return {
      notificationList: [],
      paths: [],
    };
  },
  
  watch: {
    $route(val) {
      const fullPath = val.fullPath;
      this.paths = fullPath
        .split("/")
        .filter(
          (item) =>
            item &&
            item.length > 0 &&
            item !== "app" &&
            item !== "records"
        ).map(item => item.replaceAll("%20", " " ));
    },
  },
  created() {
    const fullPath = this.$route.fullPath;
    this.paths = fullPath
      .split("/")
      .filter(
        (item) =>
          item &&
          item.length > 0 &&
          item !== "app" &&
          item !== "records"
      ).map(item => item.replaceAll("%20", " " ));
  },
  mounted() {
    const user = frappe.session.user;
    this.getNotifications(user);
  },

  methods: {
    getNotifications(user) {
      const payload = { ref: user };
      // this.$store.dispatch("notification/fetchNotifications", payload);
    },

    clearNotification(name) {
      const payload = { name, user: frappe.session.user };
      // this.$store.dispatch("notification/clearNotification", payload);
    },
  },
};
</script>
<style>
#page-patient-chart {
  height: 100vh;
}

.notification-badge {
  position: absolute;
  margin-left: -9px;
  top: -3px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__4 = void 0;
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div>
    <header class="navbar navbar-expand sticky-top" role="navigation">
      <b-container class="top-bar-spacing">
        <a
          class="navbar-brand navbar-home pull-left"
          href="/app"
          target="_blank"
        >
          <img
            class="app-logo"
            style="width: 24px"
           
            src="/assets/mtrh_dev/images/logo.jpg"
          />
        </a>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>
            <a href="/app/records" target="_blank">Records Workspace</a>
          </li>
          <li v-for="path in paths" :key="path">
            <a :href="path" target="_blank">{{ path }}</a>
          </li>
        </ul>
        <div class="collapse navbar-collapse justify-content-end hidden">
          <form
            class="form-inline fill-width justify-content-end"
            role="search"
            onsubmit="return false;"
          >
            <div class="input-group search-bar text-muted hidden">
              <div class="awesomplete">
                <input
                  id="navbar-search"
                  type="text"
                  class="form-control"
                  placeholder="Search or type a command (Ctrl + G)"
                  aria-haspopup="true"
                  autocomplete="off"
                  aria-expanded="false"
                  aria-owns="awesomplete_list_1"
                  role="combobox"
                  aria-activedescendant="awesomplete_list_1_item_0"
                />
                <ul role="listbox" id="awesomplete_list_1" hidden="">
                  <li aria-selected="true">
                    <a style="font-weight: normal"
                      ><span>
                        <span class="flex justify-between text-medium">
                          <span class="ellipsis"
                            >Search for <b>Patient C</b></span
                          >
                          <kbd>\u21B5</kbd>
                        </span>
                      </span></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span>Open <mark>Patient C</mark>hart</span></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark
                        ><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>En<mark>c</mark>ounter List</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark
                        ><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>En<mark>c</mark>ounter Report</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >New <mark>P</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>En<mark>c</mark>ounter</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >In<mark>p</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>Re<mark>c</mark>ord List</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >In<mark>p</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>Re<mark>c</mark>ord Report</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span
                        >New In<mark>p</mark><mark>a</mark><mark>t</mark
                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark
                        ><mark> </mark>Re<mark>c</mark>ord</span
                      ></a
                    >
                  </li>
                  <li>
                    <a style="font-weight: normal"
                      ><span>Help on Search</span></a
                    >
                  </li>
                </ul>
                <span
                  class="visually-hidden"
                  role="status"
                  aria-live="assertive"
                  aria-atomic="true"
                  hidden=""
                  >9 results found</span
                >
              </div>
              <span class="search-icon">
                <svg class="icon icon-sm">
                  <use xlink:href="#icon-search"></use>
                </svg>
              </span>
            </div>
          </form>
          <ul class="navbar-nav">
            <li
              class="nav-item dropdown dropdown-notifications dropdown-mobile"
            >
              <a
                class="nav-link notifications-icon text-muted"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                href="#"
                onclick="return false;"
                title=""
                data-original-title="Notifications"
              >
                <div>
                  <span class="notifications-seen">
                    <svg class="icon icon-md">
                      <use href="#icon-notification"></use>
                    </svg>
                  </span>
                  <b-badge
                    v-if="notificationList.length > 0"
                    class="notification-badge"
                    variant="danger"
                    >{{ notificationList.length }}</b-badge
                  >
                </div>

                <span class="notifications-unseen">
                  <svg class="icon icon-md">
                    <use href="#icon-notification-with-indicator"></use>
                  </svg>
                </span>
              </a>
              <div
                class="dropdown-menu notifications-list dropdown-menu-right"
                role="menu"
              >
                <div class="notification-list-header">
                  <div class="header-items">
                    <ul
                      class="notification-item-tabs nav nav-tabs"
                      role="tablist"
                    >
                      <li
                        class="notifications-category"
                        id="notifications"
                        data-toggle="collapse"
                      >
                        Notifications
                      </li>
                    </ul>
                  </div>
                  <div class="header-actions">
                    <span
                      v-if="notificationList.length > 0"
                      class="mark-all-read pull-right"
                      data-action="mark_all_as_read"
                      title=""
                      data-original-title="Mark all as read"
                      @click="clearNotification()"
                    >
                      <svg class="icon icon-sm" style="">
                        <use class="" href="#icon-mark-as-read"></use>
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="notification-list-body">
                  <div class="panel-notifications">
                    <div style="display: block">
                      <a
                        v-for="notification in notificationList"
                        :key="notification.name"
                        class="recent-item notification-item unread"
                        href="javascript:function() { return false; }"
                        data-name="0a283f5b8f"
                        @click="clearNotification(notification.name)"
                      >
                        <div class="notification-body">
                          <span
                            class="avatar avatar-medium user-avatar"
                            title="P"
                          >
                            <div
                              class="avatar-frame standard-image"
                              style="
                                background-color: var(--pink-avatar-bg);
                                color: var(--pink-avatar-color);
                              "
                            >
                              <i
                                class="fa fa-comments-o"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </span>
                          <div class="message">
                            <div>
                              <b class="subject-title"
                                >{{ notification.title }} :</b
                              >
                              {{ notification.message }}
                            </div>
                            <div class="notification-timestamp text-muted">
                              <span
                                class="frappe-timestamp"
                                data-timestamp="2021-04-14 11:50:27.887714"
                                title="14-04-2021 11:50:27"
                                >53 minutes ago</span
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          class="mark-as-read"
                          title=""
                          data-original-title="Mark as Read"
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="panel-events">
                    <div v-if="notificationList.length < 1">
                      <div class="notification-null-state">
                        <div class="text-center">
                          <img
                            src="/assets/frappe/images/ui-states/event-empty-state.svg"
                            alt="Generic Empty State"
                            class="null-state"
                          />
                          <div class="title">No notifications</div>
                          <div class="subtitle">
                            All your notifications will be listed here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="nav-item dropdown dropdown-message dropdown-mobile hidden"
            >
              <a
                class="nav-link notifications-icon text-muted"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                href="#"
                onclick="return false;"
              >
                <span>
                  <svg class="icon icon-md">
                    <use href="#icon-small-message"></use>
                  </svg>
                </span>
              </a>
            </li>
            <li class="vertical-bar d-none d-sm-block"></li>
            <li
              class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block"
            >
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
                Help
                <span>
                  <svg class="icon icon-xs">
                    <use href="#icon-small-down"></use>
                  </svg>
                </span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                id="toolbar-help"
                role="menu"
              >
                <div id="help-links"></div>
                <div
                  class="dropdown-divider documentation-links"
                  style="display: none"
                ></div>
                <a
                  class="dropdown-item"
                  onclick="window.open( '/app', '_blank')"
                >
                  Go back to Home page
                </a>

                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.show_shortcuts(event)"
                >
                  Step by step tutorial
                </a>
              </div>
            </li>
            <li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
                <span class="avatar avatar-medium" title="Supplier Account">
                  <div
                    class="avatar-frame standard-image"
                    style="
                      background-color: var(--dark-green-avatar-bg);
                      color: var(--dark-green-avatar-color);
                    "
                  >
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                </span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                id="toolbar-user"
                role="menu"
              >
                <a
                  class="dropdown-item"
                  href="/app/user-profile"
                  target="_blank"
                >
                  My Profile
                </a>

                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.route_to_user()"
                >
                  My Settings
                </a>

                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.clear_cache()"
                >
                  Reload
                </a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" onclick="return frappe.app.logout()">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </b-container>
    </header>
  </div>
</template>

<script>
// import notificationModule from "./../../state/notification/moduleNotification.js";
export default {
  name: "TopHeader",
  data() {
    return {
      notificationList: [],
      paths: [],
    };
  },
  
  watch: {
    $route(val) {
      const fullPath = val.fullPath;
      this.paths = fullPath
        .split("/")
        .filter(
          (item) =>
            item &&
            item.length > 0 &&
            item !== "app" &&
            item !== "records"
        ).map(item => item.replaceAll("%20", " " ));
    },
  },
  created() {
    const fullPath = this.$route.fullPath;
    this.paths = fullPath
      .split("/")
      .filter(
        (item) =>
          item &&
          item.length > 0 &&
          item !== "app" &&
          item !== "records"
      ).map(item => item.replaceAll("%20", " " ));
  },
  mounted() {
    const user = frappe.session.user;
    this.getNotifications(user);
  },

  methods: {
    getNotifications(user) {
      const payload = { ref: user };
      // this.$store.dispatch("notification/fetchNotifications", payload);
    },

    clearNotification(name) {
      const payload = { name, user: frappe.session.user };
      // this.$store.dispatch("notification/clearNotification", payload);
    },
  },
};
</script>
<style>
#page-patient-chart {
  height: 100vh;
}

.notification-badge {
  position: absolute;
  margin-left: -9px;
  top: -3px;
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
  function __vue_create_injector__4() {
    const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
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
  var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4({render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4}, __vue_inject_styles__4, __vue_script__4, __vue_scope_id__4, __vue_is_functional_template__4, __vue_module_identifier__4, false, __vue_create_injector__4, void 0, void 0);
  var TopHeader_default = __vue_component__4;

  // ../frontend/frontend/public/js/services/doctype/meta.js
  var api2 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var apix = ({method, args = {}}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    callback: ({results}) => resolve(results),
    error: reject
  }));
  var getDoctypeWithMeta = (payload) => api2({
    method: "clinical.api.doctype.meta.get_doctype_with_meta",
    args: {payload}
  });
  var getDoctypeWithMetaSlim = (payload) => api2({
    method: "clinical.api.doctype.meta.get_doctype_with_meta_slim",
    args: {payload}
  });
  var searchDoctype = (payload) => apix({
    method: "frappe.desk.search.search_link",
    args: {payload}
  });

  // ../frontend/frontend/public/js/services/doctype/list.js
  var getList = (payload) => api2({
    method: "mtrh_dev.api.supplier-portal.base.base.get_list",
    args: {payload}
  });
  var getDoctypeByName = (payload) => api2({
    method: "clinical.api.forms.form_builder.get_doctype_by_name",
    args: {payload}
  });
  var createDoctype = (payload) => api2({
    method: "mtrh_dev.api.supplier-portal.base.base.save_form_data",
    args: {payload}
  });

  // ../frontend/frontend/public/js/state/render/state.js
  var getUserInfo = () => {
    let userInfo = {};
    return userInfo;
  };
  var state = {
    AppActiveUser: getUserInfo(),
    tableData: []
  };
  var state_default = state;

  // ../frontend/frontend/public/js/state/render/getters.js
  var getters = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default = getters;

  // ../frontend/frontend/public/js/state/render/mutations.js
  var mutations = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default = mutations;

  // ../frontend/frontend/public/js/state/render/actions.js
  var actions = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default = actions;

  // ../frontend/frontend/public/js/state/render/module.js
  var module_default = {
    namespaced: true,
    state: state_default,
    mutations: mutations_default,
    actions: actions_default,
    getters: getters_default
  };

  // ../frontend/frontend/public/js/html/doctype/ChildTable.vue
  var __vue_script__5 = {
    name: "ChildTable",
    props: {
      doctype: {type: String},
      readOnly: {type: Boolean, default: true},
      tableData: {type: Array, default: []},
      fields: {type: Array, default: []},
      doc: {type: String, default: ""},
      tableMeta: null,
      selectedDoctype: null,
      selectedReference: null,
      parentName: null
    },
    data() {
      return {
        meta: {},
        actualTableData: [],
        inputFields: [],
        allFields: [],
        selectMode: "multi",
        selected: [],
        allowFields: []
      };
    },
    computed: {
      storedTableData() {
        return this.$store.getters["render/getTableData"];
      }
    },
    watch: {
      actualTableData: {
        deep: true,
        handler(val) {
          if (!this.readOnly) {
            this.$emit("childUpdated", val);
          }
        }
      }
    },
    methods: {
      addItem() {
        let fields = this.inputFields;
        const me = this;
        let d = new frappe.ui.Dialog({
          title: "Create",
          fields,
          primary_action_label: "Add",
          primary_action(values) {
            console.log(values);
            me.loadAddItemToTable(values);
            d.hide();
          }
        });
        d.show();
      },
      onRowSelected(items) {
        this.selected = items;
      },
      loadAddItemToTable(values) {
        this.actualTableData.push(values);
        const val = this.actualTableData;
        this.setTableData(val);
        this.$set(this, "actualTableData", val);
        console.log(this.actualTableData);
      },
      removeItem() {
        this.actualTableData = this.actualTableData.filter((item) => {
          return !(this.selected.filter((x) => x == item).length > 0);
        });
      },
      setTableData(data) {
        this.$store.dispatch("render/updateTable", data);
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows();
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected();
      },
      loadMetaData() {
        const payload = {doctype: this.doctype};
        getDoctypeWithMetaSlim(payload).then((data) => {
          this.meta = data.meta;
          this.allFields = data.meta.fields;
          if (data.allowed_fields && data.allowed_fields.allowed_fields) {
            this.allowedFields = data.allowed_fields.allowed_fields;
          }
          let checkList = [];
          if (this.allowedFields) {
            checkList = this.allowedFields.filter((x) => x.active).map((v) => v.field_name);
          }
          let tempFields = this.allFields.filter((field) => field.in_list_view === 1 || field.reqd === 1).map((field) => {
            field.key = field.fieldname;
            field.read_only = 0;
            return field;
          });
          let indexList = [];
          tempFields.forEach((field, index, arr) => {
            indexList.push({pos: index + 1});
          });
          this.fields = [...["_"], indexList, ...tempFields];
          this.inputFields = this.allFields.filter((field) => field.in_list_view === 1 || field.reqd === 1);
          if (this.checkList.length) {
            this.fields = this.fields.filter((item) => checkList.indexOf(item.fieldname) > -1);
            this.inputFields = this.inputFields.filter((item) => checkList.indexOf(item.fieldname) > -1);
          }
        });
      },
      updateRow(doctype, name) {
        const payload = {doctype, name};
        getDoctypeWithMeta(payload).then((data) => {
          actualTableData.push(data.data);
        });
      },
      getDataType(key) {
        return (this.fields || []).find((element) => element.fieldname === key) || {};
      },
      setCurrentDoctype(doctype, reference) {
        this.selectedDoctype = doctype;
        this.selectedReference = reference;
        this.$router.push({name: "viewer", params: {doctype, reference}});
      }
    },
    created() {
      this.$store.registerModule("render", module_default);
      this.actualTableData = this.tableData;
      this.loadMetaData();
    },
    mounted() {
    }
  };
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _vm.selectedDoctype ? _c("doctype-render", {
          staticStyle: {width: "100%"},
          attrs: {
            fields: [],
            doctypeInput: _vm.selectedDoctype,
            doc_ref: _vm.selectedReference
          }
        }) : _vm._e()
      ], 1),
      _vm._v(" "),
      _c("b-table", {
        ref: "selectableTable",
        attrs: {
          small: "",
          items: _vm.actualTableData,
          fields: _vm.fields,
          "select-mode": _vm.selectMode,
          responsive: "sm",
          selectable: "",
          bordered: "",
          stacked: false,
          "stacked-heading": _vm.doctype,
          striped: ""
        },
        on: {"row-selected": _vm.onRowSelected},
        scopedSlots: _vm._u([
          {
            key: "cell(_)",
            fn: function(ref) {
              var rowSelected = ref.rowSelected;
              return [
                rowSelected ? [
                  _c("span", {attrs: {"aria-hidden": "true"}}),
                  _vm._v(" "),
                  _c("span", {staticClass: "sr-only"}, [
                    _vm._v("Selected")
                  ])
                ] : [
                  _c("span", {attrs: {"aria-hidden": "true"}}),
                  _vm._v(" "),
                  _c("span", {staticClass: "sr-only"}, [
                    _vm._v("Not selected")
                  ])
                ]
              ];
            }
          },
          {
            key: "cell(pos)",
            fn: function(data) {
              return [_vm._v("\n      " + _vm._s(data.value) + "\n    ")];
            }
          },
          {
            key: "cell()",
            fn: function(data) {
              return [
                _vm.getDataType(data.field.key).fieldtype === "Link" ? _c("div", {staticStyle: {width: "100%"}}, [
                  _c("b-input-group", {staticClass: "mb-2"}, [
                    _c("b-form-input", {
                      staticClass: "table-input",
                      attrs: {type: "text"},
                      model: {
                        value: data.value,
                        callback: function($$v) {
                          _vm.$set(data, "value", $$v);
                        },
                        expression: "data.value"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-input-group-prepend", {
                      attrs: {"is-text": ""},
                      on: {
                        click: function($event) {
                          _vm.setCurrentDoctype(_vm.getDataType(data.field.key).options, data.value);
                        }
                      }
                    }, [_c("b-icon", {attrs: {icon: "link45deg"}})], 1)
                  ], 1)
                ], 1) : _vm.getDataType(data.field.key).fieldtype === "Text Editor" ? _c("div", {staticStyle: {width: "100%"}}, [
                  !data.value ? _c("b-input-group", {staticClass: "mb-2"}, [
                    _c("b-form-input", {
                      attrs: {type: "text"},
                      model: {
                        value: data.value,
                        callback: function($$v) {
                          _vm.$set(data, "value", $$v);
                        },
                        expression: "data.value"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-input-group-prepend", {
                      attrs: {"is-text": ""},
                      on: {
                        click: function($event) {
                          _vm.setCurrentDoctype(_vm.getDataType(data.field.key).options, data.value);
                        }
                      }
                    }, [
                      _c("b-icon", {
                        attrs: {icon: "link45deg"}
                      })
                    ], 1)
                  ], 1) : _c("span", {
                    domProps: {innerHTML: _vm._s(data.value)}
                  })
                ], 1) : _c("div", {staticStyle: {width: "100%"}}, [
                  _c("b-form-input", {
                    attrs: {type: "text", readonly: _vm.readOnly},
                    model: {
                      value: _vm.actualTableData[data.index][data.field.key],
                      callback: function($$v) {
                        _vm.$set(_vm.actualTableData[data.index], data.field.key, $$v);
                      },
                      expression: "actualTableData[data.index][data.field.key]"
                    }
                  })
                ], 1)
              ];
            }
          }
        ]),
        model: {
          value: _vm.actualTableData,
          callback: function($$v) {
            _vm.actualTableData = $$v;
          },
          expression: "actualTableData"
        }
      }),
      _vm._v(" "),
      !_vm.readOnly ? _c("b-row", {staticClass: "mt-2"}, [
        _c("b-col", {attrs: {cols: "12"}}, [
          _c("b-button", {
            staticClass: "pull-left mr-2",
            attrs: {variant: "outline-secondary", size: "sm"},
            on: {
              click: function($event) {
                return _vm.addItem();
              }
            }
          }, [
            _c("b-icon", {
              attrs: {
                icon: "plus-circle-fill",
                "aria-hidden": "true"
              }
            }),
            _vm._v(" Add\n      ")
          ], 1),
          _vm._v(" "),
          _c("b-button", {
            staticClass: "pull-left",
            attrs: {variant: "outline-danger", size: "sm"},
            on: {
              click: function($event) {
                return _vm.removeItem();
              }
            }
          }, [
            _c("b-icon", {
              attrs: {icon: "trash", "aria-hidden": "true"}
            }),
            _vm._v(" Remove\n      ")
          ], 1)
        ], 1)
      ], 1) : _vm._e()
    ], 1);
  };
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = function(inject) {
    if (!inject)
      return;
    inject("data-v-1c330300_0", {source: "\n.ql-editor[data-v-1c330300] {\n  background: white;\n  border-radius: 9px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\ninput[data-v-1c330300] {\n  background: transparent !important;\n  border: 1px  solid grey;\n  /* border-top: 0px;\n  border-bottom: 0px;\n  border-radius: 0px; */\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/html/doctype/ChildTable.vue"], "names": [], "mappings": ";AA6RA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;AACA;AACA;EACA,kCAAA;EACA,uBAAA;EACA;;uBAEA;AACA", "file": "ChildTable.vue", "sourcesContent": [`<template>
  <div>
   
    <b-row>
      <doctype-render
        v-if="selectedDoctype"
        style="width: 100%"
        :fields="[]"
        :doctypeInput="selectedDoctype"
        :doc_ref="selectedReference"
      />
    </b-row>
    <b-table
      small
      :items="actualTableData"
      v-model="actualTableData"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
      bordered
      :stacked="false"
      :stacked-heading="doctype"
      striped
    >
      <template #cell(_)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">
           
          </span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">
            
          </span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
      <template #cell(pos)="data">
        {{ data.value }}
      </template>
      <template #cell()="data">
        <div
          style="width: 100%"
          v-if="getDataType(data.field.key).fieldtype === 'Link'"
        >
          <b-input-group class="mb-2">
            <b-form-input
              type="text"
              v-model="data.value"
             
              class="table-input"
            ></b-form-input>
            <b-input-group-prepend
              is-text
              @click="
                setCurrentDoctype(
                  getDataType(data.field.key).options,
                  data.value
                )
              "
            >
              <b-icon icon="link45deg"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
        </div>
        <div
          style="width: 100%"
          v-else-if="getDataType(data.field.key).fieldtype === 'Text Editor'"
        >
          <b-input-group class="mb-2" v-if="!data.value">
            <b-form-input
              type="text"
              v-model="data.value"
            
            ></b-form-input>
            <b-input-group-prepend
              is-text
              @click="
                setCurrentDoctype(
                  getDataType(data.field.key).options,
                  data.value
                )
              "
            >
              <b-icon icon="link45deg"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
          <span v-else v-html="data.value" />
        </div>
        <div style="width: 100%" v-else>
          <!-- <p>{{data}}</p> -->
          <b-form-input :type="'text'" v-model="actualTableData[data.index][data.field.key]" :readonly="readOnly" />
        </div>
      </template>
    </b-table>

    <b-row class="mt-2" v-if="!readOnly">
      <b-col cols="12">
        <b-button
          variant="outline-secondary"
          class="pull-left mr-2"
          size="sm"
          @click="addItem()"
        >
          <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon> Add
        </b-button>
        <b-button
          variant="outline-danger"
          class="pull-left"
          size="sm"
          @click="removeItem()"
        >
          <b-icon icon="trash" aria-hidden="true"></b-icon> Remove
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  getDoctypeWithMetaSlim,
  getDoctypeWithMeta,
} from "./../../services/doctype/meta";
import renderModule from "../../state/render/module.js";
export default {
  name: "ChildTable",
  props: {
    doctype: { type: String },
    readOnly: { type: Boolean, default: true },
    tableData: { type: Array, default: [] },
    fields: { type: Array, default: [] },
    doc: { type: String, default: "" },
    tableMeta: null,
    selectedDoctype: null,
    selectedReference: null,
    parentName:null,
  },
  data() {
    return {
      meta: {},
      actualTableData: [],
      inputFields: [],
      allFields: [],
      selectMode: "multi",
      selected: [],
      allowFields: [],
    };
  },
  computed: {
    storedTableData() {
      return this.$store.getters["render/getTableData"];
    },
  },
  watch: {
    actualTableData: {
      deep:true,
      handler(val){
        if (!this.readOnly) {
        this.$emit("childUpdated", val);
      }
      }

      
    },
  },
  methods: {
    addItem() {
      let fields = this.inputFields;
      const me = this;

      let d = new frappe.ui.Dialog({
        title: "Create",
        fields: fields,
        primary_action_label: "Add",
        primary_action(values) {
          console.log(values);
          me.loadAddItemToTable(values);
          d.hide();
        },
      });

      d.show();
    },
    onRowSelected(items) {
      this.selected = items;
    },
    loadAddItemToTable(values) {
      this.actualTableData.push(values);
      const val = this.actualTableData;
      this.setTableData(val);
      this.$set(this, "actualTableData", val);
      console.log(this.actualTableData);
    },
    removeItem() {
      this.actualTableData =this.actualTableData.filter(item=>{
        return  !(this.selected.filter(x=> x ==item).length > 0);
      })
    },
    setTableData(data) {
      this.$store.dispatch("render/updateTable", data);
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    loadMetaData() {
      const payload = { doctype: this.doctype };
      getDoctypeWithMetaSlim(payload).then((data) => {
        this.meta = data.meta;
        this.allFields = data.meta.fields;
        if (data.allowed_fields && data.allowed_fields.allowed_fields) {
          this.allowedFields = data.allowed_fields.allowed_fields;
        }
        let checkList = [];
        if (this.allowedFields) {
          checkList = this.allowedFields
            .filter((x) => x.active)
            .map((v) => v.field_name);
        }

        let tempFields = this.allFields
          .filter((field) => field.in_list_view === 1 || field.reqd === 1)
          .map((field) => {
            field.key = field.fieldname;
            field.read_only = 0;
            return field;
          });

        let indexList = [];
        tempFields.forEach((field, index, arr) => {
          indexList.push({ pos: index + 1 });
        });

        this.fields = [...["_"], indexList, ...tempFields];

        this.inputFields = this.allFields.filter(
          (field) => field.in_list_view === 1 || field.reqd === 1
        );

        if (this.checkList.length) {
          this.fields = this.fields.filter(
            (item) => checkList.indexOf(item.fieldname) > -1
          );

          this.inputFields = this.inputFields.filter(
            (item) => checkList.indexOf(item.fieldname) > -1
          );
        }
      });
    },
    updateRow(doctype, name) {
      const payload = { doctype, name };
      getDoctypeWithMeta(payload).then((data) => {
        actualTableData.push(data.data);
      });
    },
    getDataType(key) {
      return (
        (this.fields || []).find((element) => element.fieldname === key) || {}
      );
    },
    setCurrentDoctype(doctype, reference) {
      this.selectedDoctype = doctype;
      this.selectedReference = reference;
      this.$router.push({ name: "viewer", params: { doctype, reference } });
      // this.$refs["my-modal-1993"].show();
    },
  },
  created() {
    this.$store.registerModule("render", renderModule);
    this.actualTableData = this.tableData;
    this.loadMetaData();
  },
  mounted() {},
};
</script>

<style scoped>
.ql-editor {
  background: white;
  border-radius: 9px;
  padding-top: 10px;
  padding-bottom: 10px;
}
input {
  background: transparent !important;
  border: 1px  solid grey;
  /* border-top: 0px;
  border-bottom: 0px;
  border-radius: 0px; */
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__5 = "data-v-1c330300";
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div>
   
    <b-row>
      <doctype-render
        v-if="selectedDoctype"
        style="width: 100%"
        :fields="[]"
        :doctypeInput="selectedDoctype"
        :doc_ref="selectedReference"
      />
    </b-row>
    <b-table
      small
      :items="actualTableData"
      v-model="actualTableData"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
      bordered
      :stacked="false"
      :stacked-heading="doctype"
      striped
    >
      <template #cell(_)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">
           
          </span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">
            
          </span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
      <template #cell(pos)="data">
        {{ data.value }}
      </template>
      <template #cell()="data">
        <div
          style="width: 100%"
          v-if="getDataType(data.field.key).fieldtype === 'Link'"
        >
          <b-input-group class="mb-2">
            <b-form-input
              type="text"
              v-model="data.value"
             
              class="table-input"
            ></b-form-input>
            <b-input-group-prepend
              is-text
              @click="
                setCurrentDoctype(
                  getDataType(data.field.key).options,
                  data.value
                )
              "
            >
              <b-icon icon="link45deg"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
        </div>
        <div
          style="width: 100%"
          v-else-if="getDataType(data.field.key).fieldtype === 'Text Editor'"
        >
          <b-input-group class="mb-2" v-if="!data.value">
            <b-form-input
              type="text"
              v-model="data.value"
            
            ></b-form-input>
            <b-input-group-prepend
              is-text
              @click="
                setCurrentDoctype(
                  getDataType(data.field.key).options,
                  data.value
                )
              "
            >
              <b-icon icon="link45deg"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
          <span v-else v-html="data.value" />
        </div>
        <div style="width: 100%" v-else>
          <!-- <p>{{data}}</p> -->
          <b-form-input :type="'text'" v-model="actualTableData[data.index][data.field.key]" :readonly="readOnly" />
        </div>
      </template>
    </b-table>

    <b-row class="mt-2" v-if="!readOnly">
      <b-col cols="12">
        <b-button
          variant="outline-secondary"
          class="pull-left mr-2"
          size="sm"
          @click="addItem()"
        >
          <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon> Add
        </b-button>
        <b-button
          variant="outline-danger"
          class="pull-left"
          size="sm"
          @click="removeItem()"
        >
          <b-icon icon="trash" aria-hidden="true"></b-icon> Remove
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  getDoctypeWithMetaSlim,
  getDoctypeWithMeta,
} from "./../../services/doctype/meta";
import renderModule from "../../state/render/module.js";
export default {
  name: "ChildTable",
  props: {
    doctype: { type: String },
    readOnly: { type: Boolean, default: true },
    tableData: { type: Array, default: [] },
    fields: { type: Array, default: [] },
    doc: { type: String, default: "" },
    tableMeta: null,
    selectedDoctype: null,
    selectedReference: null,
    parentName:null,
  },
  data() {
    return {
      meta: {},
      actualTableData: [],
      inputFields: [],
      allFields: [],
      selectMode: "multi",
      selected: [],
      allowFields: [],
    };
  },
  computed: {
    storedTableData() {
      return this.$store.getters["render/getTableData"];
    },
  },
  watch: {
    actualTableData: {
      deep:true,
      handler(val){
        if (!this.readOnly) {
        this.$emit("childUpdated", val);
      }
      }

      
    },
  },
  methods: {
    addItem() {
      let fields = this.inputFields;
      const me = this;

      let d = new frappe.ui.Dialog({
        title: "Create",
        fields: fields,
        primary_action_label: "Add",
        primary_action(values) {
          console.log(values);
          me.loadAddItemToTable(values);
          d.hide();
        },
      });

      d.show();
    },
    onRowSelected(items) {
      this.selected = items;
    },
    loadAddItemToTable(values) {
      this.actualTableData.push(values);
      const val = this.actualTableData;
      this.setTableData(val);
      this.$set(this, "actualTableData", val);
      console.log(this.actualTableData);
    },
    removeItem() {
      this.actualTableData =this.actualTableData.filter(item=>{
        return  !(this.selected.filter(x=> x ==item).length > 0);
      })
    },
    setTableData(data) {
      this.$store.dispatch("render/updateTable", data);
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    loadMetaData() {
      const payload = { doctype: this.doctype };
      getDoctypeWithMetaSlim(payload).then((data) => {
        this.meta = data.meta;
        this.allFields = data.meta.fields;
        if (data.allowed_fields && data.allowed_fields.allowed_fields) {
          this.allowedFields = data.allowed_fields.allowed_fields;
        }
        let checkList = [];
        if (this.allowedFields) {
          checkList = this.allowedFields
            .filter((x) => x.active)
            .map((v) => v.field_name);
        }

        let tempFields = this.allFields
          .filter((field) => field.in_list_view === 1 || field.reqd === 1)
          .map((field) => {
            field.key = field.fieldname;
            field.read_only = 0;
            return field;
          });

        let indexList = [];
        tempFields.forEach((field, index, arr) => {
          indexList.push({ pos: index + 1 });
        });

        this.fields = [...["_"], indexList, ...tempFields];

        this.inputFields = this.allFields.filter(
          (field) => field.in_list_view === 1 || field.reqd === 1
        );

        if (this.checkList.length) {
          this.fields = this.fields.filter(
            (item) => checkList.indexOf(item.fieldname) > -1
          );

          this.inputFields = this.inputFields.filter(
            (item) => checkList.indexOf(item.fieldname) > -1
          );
        }
      });
    },
    updateRow(doctype, name) {
      const payload = { doctype, name };
      getDoctypeWithMeta(payload).then((data) => {
        actualTableData.push(data.data);
      });
    },
    getDataType(key) {
      return (
        (this.fields || []).find((element) => element.fieldname === key) || {}
      );
    },
    setCurrentDoctype(doctype, reference) {
      this.selectedDoctype = doctype;
      this.selectedReference = reference;
      this.$router.push({ name: "viewer", params: { doctype, reference } });
      // this.$refs["my-modal-1993"].show();
    },
  },
  created() {
    this.$store.registerModule("render", renderModule);
    this.actualTableData = this.tableData;
    this.loadMetaData();
  },
  mounted() {},
};
</script>

<style scoped>
.ql-editor {
  background: white;
  border-radius: 9px;
  padding-top: 10px;
  padding-bottom: 10px;
}
input {
  background: transparent !important;
  border: 1px  solid grey;
  /* border-top: 0px;
  border-bottom: 0px;
  border-radius: 0px; */
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
  function __vue_create_injector__5() {
    const styles = __vue_create_injector__5.styles || (__vue_create_injector__5.styles = {});
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
  var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5({render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5}, __vue_inject_styles__5, __vue_script__5, __vue_scope_id__5, __vue_is_functional_template__5, __vue_module_identifier__5, false, __vue_create_injector__5, void 0, void 0);
  var ChildTable_default = __vue_component__5;

  // ../frontend/frontend/public/js/html/doctype/DocField.vue
  var __vue_script__6 = {
    components: {ChildTable: ChildTable_default},
    name: "DocField",
    props: {
      docField: {type: Object, default: {}},
      doc: {type: Object, default: {}},
      readOnly: {type: Boolean, default: true}
    },
    data() {
      return {
        selected: null,
        items: [],
        loading: false,
        timeoutId: null,
        noData: false
      };
    },
    mounted() {
      if (this.docField.fieldtype === "Link") {
        this.makeSelectDoctypeControl();
      } else if (this.docField.fieldtype === "Dynamic Link") {
        this.makeDynamicDoctypeControl();
      }
    },
    watch: {
      doc: {
        handler(val1, val2) {
          console.log(this.docField.fieldtype);
          if (this.docField.fieldtype === "Dynamic Link") {
            this.makeDynamicDoctypeControl();
          }
        },
        deep: true
      }
    },
    methods: {
      removeUnwanted(items) {
        if (!items || items.length === 0) {
          return [];
        }
        const unWanted = [
          "name",
          "owner",
          "creation",
          "modified",
          "parent",
          "parentfield",
          "modified_by",
          "parenttype",
          "doctype",
          "docstatus",
          "idx"
        ];
        let result = items.map((item) => {
          unWanted.forEach((key) => {
            delete item[key];
          });
          return item;
        });
        return result;
      },
      onSearch(search) {
        const lettersLimit = 2;
        this.noData = false;
        if (search.length < lettersLimit) {
          this.items = [];
          this.loading = false;
          return;
        }
        this.loading = true;
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(async () => {
          var args = {
            txt: search,
            doctype: this.docField.dt,
            reference_doctype: ""
          };
          searchDoctype(args).then((result) => {
            this.items = result.map((item) => item.value);
            this.loading = false;
            if (!this.items.length) {
              this.noData = true;
            }
            console.log(this.items);
          });
        }, 500);
      },
      change(val) {
        const data = this.docField.fieldname;
        this.$set(this.doc, data, val);
      },
      makeSelectDoctypeControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "reference",
            options: me.docField.options,
            placeholder: __(""),
            onchange: function() {
              if (this.value) {
                me.change(this.value);
              }
            }
          },
          parent: this.$refs["doctype"],
          render_input: true
        });
        customer_field.toggle_label(false);
        customer_field.$input.val(me.doc[me.docField.fieldname]);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      makeDynamicDoctypeControl() {
        $(`#${this.docField.fieldname}`).html("");
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "reference",
            options: me.doc[me.docField.options],
            placeholder: __(""),
            onchange: function() {
              if (this.value) {
                me.doc[me.docField.fieldname] = this.value;
              }
            }
          },
          parent: this.$refs["doctype"],
          render_input: true
        });
        customer_field.toggle_label(false);
        customer_field.$input.val(me.doc[me.docField.fieldname]);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      uploadFile() {
        const me = this;
        new frappe.ui.FileUploader({
          doctype: "Internal Memo",
          docname: me.parentId,
          on_success(file_doc) {
            const {file_url, filename} = file_doc;
            me.doc[me.docField.fieldname] = file_url;
          }
        });
      },
      setCurrentDoctype(doctype, reference) {
        this.selectedDoctype = doctype;
        this.selectedReference = reference;
        if (reference && doctype) {
          this.$router.push({name: "viewer", params: {doctype, reference}});
        }
      },
      processOptions(options) {
        if (!options) {
          return [];
        }
        let optionList = options.split("\n");
        return optionList;
      },
      childUpdated(val) {
        this.$emit("childUpdated", {val, fieldname: this.docField.fieldname});
      }
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "mt-1", staticStyle: {width: "100%"}}, [
      _vm.docField.fieldname.startsWith("column_break") ? _c("br", {staticStyle: {width: "100%"}}) : _vm.docField.fieldtype === "Link" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _c("b-icon", {attrs: {icon: "link45deg", "font-scale": "2"}}, [
            _vm.docField.reqd ? _c("span", {
              directives: [
                {
                  name: "align",
                  rawName: "v-align",
                  value: _vm.center,
                  expression: "center"
                }
              ],
              staticClass: "required"
            }, [_vm._v("*")]) : _vm._e()
          ])
        ], 1),
        _vm._v(" "),
        _c("div", {
          ref: "doctype",
          staticClass: "ref-field-input",
          staticStyle: {width: "100%"}
        })
      ]) : _vm.docField.fieldtype === "Dynamic Link" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _c("b-icon", {attrs: {icon: "link45deg", "font-scale": "2"}}, [
            _vm.docField.reqd ? _c("span", {
              directives: [
                {
                  name: "align",
                  rawName: "v-align",
                  value: _vm.center,
                  expression: "center"
                }
              ],
              staticClass: "required"
            }, [_vm._v("*")]) : _vm._e()
          ])
        ], 1),
        _vm._v(" "),
        _c("div", {
          ref: "doctype",
          staticClass: "ref-field-input",
          staticStyle: {width: "100%"},
          attrs: {id: "" + _vm.docField.fieldname}
        })
      ]) : _vm.docField.fieldtype === "Table" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("child-table", {
          staticStyle: {width: "100%"},
          attrs: {
            tableData: _vm.doc[_vm.docField.fieldname],
            readOnly: _vm.readOnly,
            doc: _vm.docField.fieldname,
            doctype: _vm.docField.options
          },
          on: {childUpdated: _vm.childUpdated}
        })
      ], 1) : _vm.docField.fieldtype === "Text" ? _c("div", {staticClass: "mb-2", staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-textarea", {
          attrs: {
            rows: "10",
            type: "text",
            "max-rows": "50",
            readonly: _vm.readOnly
          },
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Select" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-select", {
          attrs: {
            readonly: _vm.readOnly,
            options: _vm.processOptions(_vm.docField.options)
          },
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Float" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-input", {
          attrs: {type: "number", readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Currency" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-input", {
          attrs: {type: "number", readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Int" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-input", {
          attrs: {type: "number", readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Button" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("b-button", {
          directives: [
            {
              name: "align",
              rawName: "v-align",
              value: _vm.center,
              expression: "center"
            }
          ],
          attrs: {variant: "light"}
        }, [_vm._v("\n      " + _vm._s(_vm.docField.label))])
      ], 1) : _vm.docField.fieldtype === "Check" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("b-form-checkbox", {
          staticClass: "pt-4",
          attrs: {
            readonly: _vm.readOnly,
            value: "1",
            "unchecked-value": "0",
            variant: "primary"
          },
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        }, [_vm._v("\n      " + _vm._s(_vm.docField.label) + "\n    ")])
      ], 1) : _vm.docField.fieldtype === "Text Editor" ? _c("div", {staticClass: "mb-2", staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label)),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-textarea", {
          attrs: {
            rows: "10",
            type: "text",
            "max-rows": "50",
            readonly: _vm.readOnly
          },
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Date" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label)),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-datepicker", {
          staticClass: "mb-2",
          attrs: {readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Time" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label)),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-timepicker", {
          staticClass: "mb-2",
          attrs: {readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Datetime" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label)),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-datepicker", {
          staticClass: "mb-2",
          attrs: {readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Image" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label)),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("img", {staticStyle: {width: "10px", height: "10px"}})
      ]) : _vm.docField.fieldtype === "Data" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-form-input", {
          attrs: {type: "text", readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Attach Image" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("b-button", {
          staticClass: "mb-2 mt-2",
          attrs: {size: "sm"},
          on: {click: _vm.uploadFile}
        }, [
          _c("b-icon", {
            attrs: {icon: "paperclip", "aria-hidden": "true"}
          }),
          _vm._v(" Attach Image\n    ")
        ], 1)
      ], 1) : _vm.docField.fieldtype === "Small Text" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label) + "\n      "),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("b-form-input", {
          attrs: {type: "text", readonly: _vm.readOnly},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "HTML" ? _c("div", [
        _c("span", {
          domProps: {innerHTML: _vm._s(_vm.doc[_vm.docField.fieldname])}
        })
      ]) : _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label)),
          _vm.docField.reqd ? _c("span", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            staticClass: "required"
          }, [_vm._v("*")]) : _vm._e()
        ]),
        _vm._v("\n    " + _vm._s(_vm.docField.fieldtype) + "\n  ")
      ])
    ]);
  };
  var __vue_staticRenderFns__6 = [];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = function(inject) {
    if (!inject)
      return;
    inject("data-v-f42a2350_0", {source: "\n.required[data-v-f42a2350] {\n  color: red;\n  font-size: 14px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/html/doctype/DocField.vue"], "names": [], "mappings": ";AAwcA;EACA,UAAA;EACA,eAAA;AACA", "file": "DocField.vue", "sourcesContent": [`<template>
  <div style="width: 100%" class="mt-1">
    <br
      style="width: 100%"
      v-if="docField.fieldname.startsWith('column_break')"
    />

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Link'">
      <label for="input-live"
        >{{ docField.label }}
        <b-icon icon="link45deg" font-scale="2">
          <span v-if="docField.reqd" v-align="center" class="required"
            >*</span
          ></b-icon
        ></label
      >
      <div style="width: 100%" ref="doctype" class="ref-field-input"></div>
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Dynamic Link'">
      <label for="input-live"
        >{{ docField.label }}
        <b-icon icon="link45deg" font-scale="2">
          <span v-if="docField.reqd" v-align="center" class="required"
            >*</span
          ></b-icon
        ></label
      >
      <div
        style="width: 100%"
        ref="doctype"
        class="ref-field-input"
        :id="\`\${docField.fieldname}\`"
      ></div>
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Table'">
      
      <child-table
        style="width: 100%"
        :tableData="doc[docField.fieldname]"
        :readOnly="readOnly"
        :doc="docField.fieldname"
         @childUpdated="childUpdated"
        :doctype="docField.options"
      >
      </child-table>
    </div>

    <div
      style="width: 100%"
      class="mb-2"
      v-else-if="docField.fieldtype === 'Text'"
    >
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-textarea
        rows="10"
        :type="'text'"
        max-rows="50"
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Select'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-select
        :readonly="readOnly"
        :options="processOptions(docField.options)"
        v-model="doc[docField.fieldname]"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Float'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-input
        :type="'number'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Currency'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-input
        :type="'number'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Int'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required">*</span>
      </label>
      <b-form-input
        :type="'number'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Button'">
      <b-button variant="light" v-align="center">
        {{ docField.label }}</b-button
      >
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Check'">
      <b-form-checkbox
        class="pt-4"
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        value="1"
        unchecked-value="0"
        variant="primary"
      >
        {{ docField.label }}
      </b-form-checkbox>
    </div>

    <div
      style="width: 100%"
      class="mb-2"
      v-else-if="docField.fieldtype === 'Text Editor'"
    >
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >

      <b-form-textarea
        rows="10"
        :type="'text'"
        max-rows="50"
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Date'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-datepicker
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        class="mb-2"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Time'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-timepicker
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        class="mb-2"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Datetime'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-datepicker
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        class="mb-2"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Image'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <img style="width: 10px; height: 10px" />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Data'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-input
        :type="'text'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Attach Image'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-button size="sm" class="mb-2 mt-2" @click="uploadFile">
        <b-icon icon="paperclip" aria-hidden="true"></b-icon> Attach Image
      </b-button>
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Small Text'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <br />
      <b-form-input
        :type="'text'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div v-else-if="docField.fieldtype === 'HTML'">
      <span v-html="doc[docField.fieldname]"></span>
    </div>

    <div style="width: 100%" v-else>
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      {{ docField.fieldtype }}
    </div>
  </div>
</template>

<script>
import ChildTable from "./ChildTable.vue";
import { searchDoctype } from "./../../services/doctype/meta.js";
export default {
  components: { ChildTable },
  name: "DocField",
  props: {
    docField: { type: Object, default: {} },
    doc: { type: Object, default: {} },
    readOnly: { type: Boolean, default: true },
  },
  data() {
    return {
      selected: null,
      items: [],
      loading: false,
      timeoutId: null,
      noData: false,
    };
  },
  mounted() {
    if (this.docField.fieldtype === "Link") {
      this.makeSelectDoctypeControl();
    } else if (this.docField.fieldtype === "Dynamic Link") {
      this.makeDynamicDoctypeControl();
    }
  },
  watch: {
    doc: {
      handler(val1, val2) {
        console.log(this.docField.fieldtype);
        if (this.docField.fieldtype === "Dynamic Link") {
          this.makeDynamicDoctypeControl();
          // if (val1[this.docField.options] !== val2[this.docField.options]) {

          // }
        }
      },
      deep: true,
    },
  },
  methods: {
    removeUnwanted(items) {
   
      if (!items || items.length === 0) {
        return [];
      }
      const unWanted = [
        "name",
        "owner",
        "creation",
        "modified",
        "parent",
        "parentfield",
        "modified_by",
        "parenttype",
        "doctype",
        "docstatus",
        "idx",
      ];
      let result = items.map((item) => {
        unWanted.forEach((key) => {
          delete item[key];
        });

        return item;
      });
    
      return result;
    },
    onSearch(search) {
      const lettersLimit = 2;
      this.noData = false;
      if (search.length < lettersLimit) {
        this.items = [];
        this.loading = false;
        return;
      }
      this.loading = true;

      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(async () => {
        var args = {
          txt: search,
          doctype: this.docField.dt,
          reference_doctype: "",
        };
        searchDoctype(args).then((result) => {
          this.items = result.map((item) => item.value);
          this.loading = false;
          if (!this.items.length) {
            this.noData = true;
          }

          console.log(this.items);
        });
      }, 500);
    },
    change(val) {
      const data = this.docField.fieldname;
      this.$set(this.doc, data, val);
    },
    makeSelectDoctypeControl() {
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference"),
          fieldtype: "Link",
          fieldname: "reference",
          options: me.docField.options,
          placeholder: __(""),
          onchange: function () {
            if (this.value) {
              me.change(this.value);
            }
          },
        },
        parent: this.$refs["doctype"],
        render_input: true,
      });

      customer_field.toggle_label(false);
      customer_field.$input.val(me.doc[me.docField.fieldname]);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },
    makeDynamicDoctypeControl() {
      $(\`#\${this.docField.fieldname}\`).html("");
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference"),
          fieldtype: "Link",
          fieldname: "reference",
          options: me.doc[me.docField.options],
          placeholder: __(""),
          onchange: function () {
            if (this.value) {
              me.doc[me.docField.fieldname] = this.value;
            }
          },
        },
        parent: this.$refs["doctype"],
        render_input: true,
      });

      customer_field.toggle_label(false);
      customer_field.$input.val(me.doc[me.docField.fieldname]);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },
    uploadFile() {
      const me = this;
      new frappe.ui.FileUploader({
        doctype: "Internal Memo",
        docname: me.parentId,
        on_success(file_doc) {
          const { file_url, filename } = file_doc;
          me.doc[me.docField.fieldname] = file_url;
        },
      });
    },
    setCurrentDoctype(doctype, reference) {
      this.selectedDoctype = doctype;
      this.selectedReference = reference;
      if (reference && doctype) {
        this.$router.push({ name: "viewer", params: { doctype, reference } });
      }

      // this.$refs["my-modal-1993"].show();
    },
    processOptions(options) {
      if (!options) {
        return [];
      }
      let optionList = options.split("\\n");
      return optionList;
    },
    childUpdated(val) {
      this.$emit("childUpdated", { val, fieldname: this.docField.fieldname });
    },
  },
};
</script>

<style scoped>
.required {
  color: red;
  font-size: 14px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__6 = "data-v-f42a2350";
  var __vue_module_identifier__6 = void 0;
  var __vue_is_functional_template__6 = false;
  function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div style="width: 100%" class="mt-1">
    <br
      style="width: 100%"
      v-if="docField.fieldname.startsWith('column_break')"
    />

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Link'">
      <label for="input-live"
        >{{ docField.label }}
        <b-icon icon="link45deg" font-scale="2">
          <span v-if="docField.reqd" v-align="center" class="required"
            >*</span
          ></b-icon
        ></label
      >
      <div style="width: 100%" ref="doctype" class="ref-field-input"></div>
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Dynamic Link'">
      <label for="input-live"
        >{{ docField.label }}
        <b-icon icon="link45deg" font-scale="2">
          <span v-if="docField.reqd" v-align="center" class="required"
            >*</span
          ></b-icon
        ></label
      >
      <div
        style="width: 100%"
        ref="doctype"
        class="ref-field-input"
        :id="\`\${docField.fieldname}\`"
      ></div>
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Table'">
      
      <child-table
        style="width: 100%"
        :tableData="doc[docField.fieldname]"
        :readOnly="readOnly"
        :doc="docField.fieldname"
         @childUpdated="childUpdated"
        :doctype="docField.options"
      >
      </child-table>
    </div>

    <div
      style="width: 100%"
      class="mb-2"
      v-else-if="docField.fieldtype === 'Text'"
    >
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-textarea
        rows="10"
        :type="'text'"
        max-rows="50"
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Select'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-select
        :readonly="readOnly"
        :options="processOptions(docField.options)"
        v-model="doc[docField.fieldname]"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Float'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-input
        :type="'number'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Currency'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-input
        :type="'number'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Int'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required">*</span>
      </label>
      <b-form-input
        :type="'number'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Button'">
      <b-button variant="light" v-align="center">
        {{ docField.label }}</b-button
      >
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Check'">
      <b-form-checkbox
        class="pt-4"
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        value="1"
        unchecked-value="0"
        variant="primary"
      >
        {{ docField.label }}
      </b-form-checkbox>
    </div>

    <div
      style="width: 100%"
      class="mb-2"
      v-else-if="docField.fieldtype === 'Text Editor'"
    >
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >

      <b-form-textarea
        rows="10"
        :type="'text'"
        max-rows="50"
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Date'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-datepicker
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        class="mb-2"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Time'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-timepicker
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        class="mb-2"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Datetime'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-datepicker
        :readonly="readOnly"
        v-model="doc[docField.fieldname]"
        class="mb-2"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Image'">
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <img style="width: 10px; height: 10px" />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Data'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-form-input
        :type="'text'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Attach Image'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <b-button size="sm" class="mb-2 mt-2" @click="uploadFile">
        <b-icon icon="paperclip" aria-hidden="true"></b-icon> Attach Image
      </b-button>
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Small Text'">
      <label for="input-live"
        >{{ docField.label }}
        <span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      <br />
      <b-form-input
        :type="'text'"
        v-model="doc[docField.fieldname]"
        :readonly="readOnly"
      />
    </div>

    <div v-else-if="docField.fieldtype === 'HTML'">
      <span v-html="doc[docField.fieldname]"></span>
    </div>

    <div style="width: 100%" v-else>
      <label for="input-live"
        >{{ docField.label
        }}<span v-if="docField.reqd" v-align="center" class="required"
          >*</span
        ></label
      >
      {{ docField.fieldtype }}
    </div>
  </div>
</template>

<script>
import ChildTable from "./ChildTable.vue";
import { searchDoctype } from "./../../services/doctype/meta.js";
export default {
  components: { ChildTable },
  name: "DocField",
  props: {
    docField: { type: Object, default: {} },
    doc: { type: Object, default: {} },
    readOnly: { type: Boolean, default: true },
  },
  data() {
    return {
      selected: null,
      items: [],
      loading: false,
      timeoutId: null,
      noData: false,
    };
  },
  mounted() {
    if (this.docField.fieldtype === "Link") {
      this.makeSelectDoctypeControl();
    } else if (this.docField.fieldtype === "Dynamic Link") {
      this.makeDynamicDoctypeControl();
    }
  },
  watch: {
    doc: {
      handler(val1, val2) {
        console.log(this.docField.fieldtype);
        if (this.docField.fieldtype === "Dynamic Link") {
          this.makeDynamicDoctypeControl();
          // if (val1[this.docField.options] !== val2[this.docField.options]) {

          // }
        }
      },
      deep: true,
    },
  },
  methods: {
    removeUnwanted(items) {
   
      if (!items || items.length === 0) {
        return [];
      }
      const unWanted = [
        "name",
        "owner",
        "creation",
        "modified",
        "parent",
        "parentfield",
        "modified_by",
        "parenttype",
        "doctype",
        "docstatus",
        "idx",
      ];
      let result = items.map((item) => {
        unWanted.forEach((key) => {
          delete item[key];
        });

        return item;
      });
    
      return result;
    },
    onSearch(search) {
      const lettersLimit = 2;
      this.noData = false;
      if (search.length < lettersLimit) {
        this.items = [];
        this.loading = false;
        return;
      }
      this.loading = true;

      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(async () => {
        var args = {
          txt: search,
          doctype: this.docField.dt,
          reference_doctype: "",
        };
        searchDoctype(args).then((result) => {
          this.items = result.map((item) => item.value);
          this.loading = false;
          if (!this.items.length) {
            this.noData = true;
          }

          console.log(this.items);
        });
      }, 500);
    },
    change(val) {
      const data = this.docField.fieldname;
      this.$set(this.doc, data, val);
    },
    makeSelectDoctypeControl() {
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference"),
          fieldtype: "Link",
          fieldname: "reference",
          options: me.docField.options,
          placeholder: __(""),
          onchange: function () {
            if (this.value) {
              me.change(this.value);
            }
          },
        },
        parent: this.$refs["doctype"],
        render_input: true,
      });

      customer_field.toggle_label(false);
      customer_field.$input.val(me.doc[me.docField.fieldname]);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },
    makeDynamicDoctypeControl() {
      $(\`#\${this.docField.fieldname}\`).html("");
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Reference"),
          fieldtype: "Link",
          fieldname: "reference",
          options: me.doc[me.docField.options],
          placeholder: __(""),
          onchange: function () {
            if (this.value) {
              me.doc[me.docField.fieldname] = this.value;
            }
          },
        },
        parent: this.$refs["doctype"],
        render_input: true,
      });

      customer_field.toggle_label(false);
      customer_field.$input.val(me.doc[me.docField.fieldname]);
      $("#modal-body").find(".input-max-width").removeClass("input-max-width");
    },
    uploadFile() {
      const me = this;
      new frappe.ui.FileUploader({
        doctype: "Internal Memo",
        docname: me.parentId,
        on_success(file_doc) {
          const { file_url, filename } = file_doc;
          me.doc[me.docField.fieldname] = file_url;
        },
      });
    },
    setCurrentDoctype(doctype, reference) {
      this.selectedDoctype = doctype;
      this.selectedReference = reference;
      if (reference && doctype) {
        this.$router.push({ name: "viewer", params: { doctype, reference } });
      }

      // this.$refs["my-modal-1993"].show();
    },
    processOptions(options) {
      if (!options) {
        return [];
      }
      let optionList = options.split("\\n");
      return optionList;
    },
    childUpdated(val) {
      this.$emit("childUpdated", { val, fieldname: this.docField.fieldname });
    },
  },
};
</script>

<style scoped>
.required {
  color: red;
  font-size: 14px;
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
  function __vue_create_injector__6() {
    const styles = __vue_create_injector__6.styles || (__vue_create_injector__6.styles = {});
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
  var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6({render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6}, __vue_inject_styles__6, __vue_script__6, __vue_scope_id__6, __vue_is_functional_template__6, __vue_module_identifier__6, false, __vue_create_injector__6, void 0, void 0);
  var DocField_default = __vue_component__6;

  // ../frontend/frontend/public/js/html/doctype/DoctypeRender.vue
  var __vue_script__7 = {
    name: "DoctypeRender",
    data() {
      return {
        doctypeData: {},
        doctype: {},
        filterEmpty: false,
        sections: [],
        readOnly: false,
        iconUp: "fa-angle-up",
        iconDown: "fa-angle-down",
        collapsed: false,
        allowedFields: []
      };
    },
    components: {DocField: DocField_default},
    mounted() {
      this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
        this.loadDoctype();
      });
      this.loadDoctype();
    },
    created() {
      this.isReadonly = this.readOnly;
    },
    props: {
      doctypeInput: {type: String, default: ""},
      doc_ref: {type: String, default: null},
      fields: {type: Array, default: []},
      refresh: {type: String, required: false}
    },
    methods: {
      loadDoctype() {
        if (window.currentDoctype) {
          this.doctypeInput = window.currentDoctype;
        }
        if (window.currentDoctypeReference) {
          this.doc_ref = window.currentDoctypeReference;
        }
        if (this.doc_ref) {
          this.readOnly = true;
        }
        const payload = {doctype: this.doctypeInput, name: this.doc_ref};
        getDoctypeWithMeta(payload).then((data) => {
          this.doctypeData = data;
          this.fields = data.meta.fields;
          if (data.allowedFields && data.allowed_fields.allowed_fields) {
            this.allowedFields = data.allowed_fields.allowed_fields;
          }
          this.doctype = data.data;
          if (window.currentDoctype) {
            this.doctype.doctype = window.currentDoctype;
          }
          this.getSections(this.fields);
        });
      },
      getSections(fields) {
        this.sections = [];
        let currentSection = {fields: [], name: ""};
        let checkList = this.allowedFields.filter((x) => x.active).map((v) => v.field_name);
        fields.forEach((item) => {
          if (item.fieldtype !== "Section Break") {
            if (item.fieldname !== "workflow_state" && item.fieldname !== "naming_series" && item.fieldtype !== "Button" && item.fieldtype !== "Html") {
              if (checkList.indexOf(item.fieldname) > -1 || checkList.length == 0) {
                currentSection.fields.push(item);
              }
            }
          } else {
            this.sections.push(currentSection);
            currentSection = {fields: [], name: ""};
            currentSection.name = this.noSnake(item.fieldname);
            currentSection.collapsed = false;
            currentSection.collapsible = item.collapsible;
          }
        });
        if (this.sections.length === 0) {
          currentSection = {fields: [], name: ""};
          currentSection.collapsed = false;
          currentSection.collapsible = false;
          fields.forEach((item) => {
            if (item.fieldname !== "workflow_state" && item.fieldname !== "naming_series" && item.fieldtype !== "Button" && item.fieldtype !== "Html") {
              if (checkList.indexOf(item.fieldname) > -1) {
                currentSection.fields.push(item);
              }
            }
          });
          this.sections.push(currentSection);
        }
      },
      noSnake(stringItem) {
        if (!stringItem) {
          return "";
        }
        if (stringItem.startsWith("section_break")) {
          return null;
        }
        if (stringItem.startsWith("sb_")) {
          stringItem = stringItem.replace("_sb", "");
        }
        stringItem = stringItem.replaceAll("section_break", "section");
        let noSnakeString = stringItem.replaceAll("_", " ");
        return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);
      },
      getWidth(field) {
        if (field) {
          if (field.fieldname.startsWith("column_break")) {
            return "12";
          }
          if (field.fieldtype === "Table") {
            return "12";
          }
          if (field.fieldtype === "Text") {
            return "12";
          }
          if (field.fieldtype === "Text Editor") {
            return "12";
          }
        }
        return "6";
      },
      childUpdated(val) {
        if (this.doctype[val.fieldname] !== val.val) {
          this.$set(this.doctype, val.fieldname, val.val);
        }
      },
      create() {
        createDoctype(this.doctype).then((data) => {
        });
      }
    },
    watch: {
      $route(to, from) {
        this.loadDoctype();
      },
      refreshed(val) {
        this.loadDoctype();
      },
      doc_ref(vale) {
        this.loadDoctype();
      }
    }
  };
  var __vue_render__7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "mx-auto"}, [
      _c("b-row", _vm._l(_vm.sections, function(section) {
        return _c("b-col", {key: section, staticClass: "mb-3", attrs: {cols: "12"}}, [
          section.fields.length > 0 && !section.collapsible ? _c("b-card", {attrs: {title: section.name}}, [
            _c("b-card-text", [
              _c("b-row", {staticClass: "mt-2"}, _vm._l(section.fields, function(field) {
                return _c("b-col", {
                  key: field,
                  attrs: {cols: _vm.getWidth(field)}
                }, [
                  _c("doc-field", {
                    attrs: {
                      docField: field,
                      doc: _vm.doctype,
                      readOnly: _vm.readOnly
                    },
                    on: {childUpdated: _vm.childUpdated}
                  })
                ], 1);
              }), 1)
            ], 1)
          ], 1) : section.fields.length > 0 && section.collapsible ? _c("b-card", {staticClass: "mb-2"}, [
            _c("b-card-header", {
              staticClass: "p-1 header",
              attrs: {"header-tag": "header", role: "tab"}
            }, [
              _c("div", {
                staticClass: "head-toggle",
                on: {
                  click: function($event) {
                    section.collapsed = !section.collapsed;
                  }
                }
              }, [
                _c("b-row", [
                  _c("b-col", {attrs: {cols: "10"}}, [
                    _c("h5", {staticStyle: {margin: "0"}}, [
                      _vm._v(_vm._s(section.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-col", {attrs: {cols: "2"}}, [
                    _c("span", [
                      _c("i", {
                        staticClass: "toggler pull-right ml-4 fa",
                        class: section.collapsed ? _vm.iconUp : _vm.iconDown,
                        attrs: {"aria-hidden": "true"}
                      })
                    ])
                  ])
                ], 1)
              ], 1)
            ]),
            _vm._v(" "),
            _c("b-collapse", {
              attrs: {id: "accordion-1", role: "tabpanel"},
              model: {
                value: section.collapsed,
                callback: function($$v) {
                  _vm.$set(section, "collapsed", $$v);
                },
                expression: "section.collapsed"
              }
            }, [
              _c("b-card-body", [
                _c("b-row", {staticClass: "mt-2"}, _vm._l(section.fields, function(field) {
                  return _c("b-col", {
                    key: field,
                    attrs: {cols: _vm.getWidth(field)}
                  }, [
                    _c("doc-field", {
                      attrs: {
                        docField: field,
                        doc: _vm.doctype,
                        readOnly: _vm.readOnly
                      },
                      on: {childUpdated: _vm.childUpdated}
                    })
                  ], 1);
                }), 1)
              ], 1)
            ], 1)
          ], 1) : _vm._e()
        ], 1);
      }), 1),
      _vm._v(" "),
      _c("b-row", [
        !_vm.readOnly ? _c("b-button", {
          attrs: {variant: "primary"},
          on: {
            click: function($event) {
              return _vm.create();
            }
          }
        }, [_vm._v("\n      create")]) : _vm._e()
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__7 = [];
  __vue_render__7._withStripped = true;
  var __vue_inject_styles__7 = function(inject) {
    if (!inject)
      return;
    inject("data-v-88b8b55c_0", {source: '\n.card[data-v-88b8b55c] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n.head-toggle[data-v-88b8b55c] {\n  outline: 0;\n}\n.header[data-v-88b8b55c] {\n  background: transparent;\n}\n.card-header[data-v-88b8b55c] {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/html/doctype/DoctypeRender.vue"], "names": [], "mappings": ";AAoQA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;AAEA;EACA,UAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA;;wCAEA;EACA,6CAAA;AACA", "file": "DoctypeRender.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card\n          :title="section.name"\n          v-if="section.fields.length > 0 && !section.collapsible"\n        >\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field\n                  :docField="field"\n                  @childUpdated="childUpdated"\n                  :doc="doctype"\n                  :readOnly="readOnly"\n                />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n\n        <b-card\n          v-else-if="section.fields.length > 0 && section.collapsible"\n          class="mb-2"\n        >\n          <b-card-header header-tag="header" class="p-1 header" role="tab">\n            <div\n              class="head-toggle"\n              @click="section.collapsed = !section.collapsed"\n            >\n              <b-row>\n                <b-col cols="10">\n                  <h5 style="margin: 0">{{ section.name }}</h5>\n                </b-col>\n                <b-col cols="2">\n                  <span\n                    ><i\n                      class="toggler pull-right ml-4 fa"\n                      v-bind:class="section.collapsed ? iconUp : iconDown"\n                      aria-hidden="true"\n                    ></i>\n                  </span>\n                </b-col>\n              </b-row>\n            </div>\n          </b-card-header>\n          <b-collapse\n            v-model="section.collapsed"\n            id="accordion-1"\n            role="tabpanel"\n          >\n            <b-card-body>\n              <b-row class="mt-2">\n                <b-col\n                  :cols="getWidth(field)"\n                  v-for="field in section.fields"\n                  :key="field"\n                >\n                  <doc-field\n                    :docField="field"\n                    :doc="doctype"\n                    @childUpdated="childUpdated"\n                    :readOnly="readOnly"\n                  />\n                </b-col>\n              </b-row>\n            </b-card-body>\n          </b-collapse>\n        </b-card>\n      </b-col>\n    </b-row>\n    <b-row>\n      <b-button v-if="!readOnly" variant="primary" @click="create()">\n        create</b-button\n      >\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "./../../services/doctype/meta.js";\nimport { createDoctype } from "./../../services/doctype/list.js";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n      readOnly: false,\n      iconUp: "fa-angle-up",\n      iconDown: "fa-angle-down",\n      collapsed: false,\n      allowedFields: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {\n    this.isReadonly = this.readOnly;\n  },\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: null },\n    fields: { type: Array, default: [] },\n    refresh: { type: String, required: false },\n  },\n  methods: {\n    loadDoctype() {\n      //  frappe.show_alert("loading form..", 5);\n      if (window.currentDoctype) {\n        this.doctypeInput = window.currentDoctype;\n      }\n      if (window.currentDoctypeReference) {\n        this.doc_ref = window.currentDoctypeReference;\n      }\n\n      if (this.doc_ref) {\n        this.readOnly = true;\n      }\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        if (data.allowedFields && data.allowed_fields.allowed_fields) {\n          this.allowedFields = data.allowed_fields.allowed_fields;\n        }\n\n        this.doctype = data.data;\n        if (window.currentDoctype) {\n          this.doctype.doctype = window.currentDoctype;\n        }\n\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      let checkList = this.allowedFields\n        .filter((x) => x.active)\n        .map((v) => v.field_name);\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (\n              checkList.indexOf(item.fieldname) > -1 ||\n              checkList.length == 0\n            ) {\n              currentSection.fields.push(item);\n            }\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          currentSection.collapsed = false;\n          currentSection.collapsible = item.collapsible;\n        }\n      });\n\n      if (this.sections.length === 0) {\n        currentSection = { fields: [], name: "" };\n        currentSection.collapsed = false;\n        currentSection.collapsible = false;\n\n        fields.forEach((item) => {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (checkList.indexOf(item.fieldname) > -1) {\n              currentSection.fields.push(item);\n            }\n          }\n        });\n\n        this.sections.push(currentSection);\n      }\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n\n      if (stringItem.startsWith("section_break")) {\n        return null;\n      }\n\n      if (stringItem.startsWith("sb_")) {\n        stringItem = stringItem.replace("_sb", "");\n      }\n\n      stringItem = stringItem.replaceAll("section_break", "section");\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text Editor") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n    childUpdated(val) {\n      if (this.doctype[val.fieldname] !== val.val) {\n        this.$set(this.doctype, val.fieldname, val.val);\n      }\n    },\n    create() {\n      createDoctype(this.doctype).then((data) => {});\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n    refreshed(val) {\n      this.loadDoctype();\n    },\n    doc_ref(vale){\n      this.loadDoctype();\n    }\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.head-toggle {\n  outline: 0;\n}\n.header {\n  background: transparent;\n}\n.card-header {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__7 = "data-v-88b8b55c";
  var __vue_module_identifier__7 = void 0;
  var __vue_is_functional_template__7 = false;
  function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card\n          :title="section.name"\n          v-if="section.fields.length > 0 && !section.collapsible"\n        >\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field\n                  :docField="field"\n                  @childUpdated="childUpdated"\n                  :doc="doctype"\n                  :readOnly="readOnly"\n                />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n\n        <b-card\n          v-else-if="section.fields.length > 0 && section.collapsible"\n          class="mb-2"\n        >\n          <b-card-header header-tag="header" class="p-1 header" role="tab">\n            <div\n              class="head-toggle"\n              @click="section.collapsed = !section.collapsed"\n            >\n              <b-row>\n                <b-col cols="10">\n                  <h5 style="margin: 0">{{ section.name }}</h5>\n                </b-col>\n                <b-col cols="2">\n                  <span\n                    ><i\n                      class="toggler pull-right ml-4 fa"\n                      v-bind:class="section.collapsed ? iconUp : iconDown"\n                      aria-hidden="true"\n                    ></i>\n                  </span>\n                </b-col>\n              </b-row>\n            </div>\n          </b-card-header>\n          <b-collapse\n            v-model="section.collapsed"\n            id="accordion-1"\n            role="tabpanel"\n          >\n            <b-card-body>\n              <b-row class="mt-2">\n                <b-col\n                  :cols="getWidth(field)"\n                  v-for="field in section.fields"\n                  :key="field"\n                >\n                  <doc-field\n                    :docField="field"\n                    :doc="doctype"\n                    @childUpdated="childUpdated"\n                    :readOnly="readOnly"\n                  />\n                </b-col>\n              </b-row>\n            </b-card-body>\n          </b-collapse>\n        </b-card>\n      </b-col>\n    </b-row>\n    <b-row>\n      <b-button v-if="!readOnly" variant="primary" @click="create()">\n        create</b-button\n      >\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "./../../services/doctype/meta.js";\nimport { createDoctype } from "./../../services/doctype/list.js";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n      readOnly: false,\n      iconUp: "fa-angle-up",\n      iconDown: "fa-angle-down",\n      collapsed: false,\n      allowedFields: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {\n    this.isReadonly = this.readOnly;\n  },\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: null },\n    fields: { type: Array, default: [] },\n    refresh: { type: String, required: false },\n  },\n  methods: {\n    loadDoctype() {\n      //  frappe.show_alert("loading form..", 5);\n      if (window.currentDoctype) {\n        this.doctypeInput = window.currentDoctype;\n      }\n      if (window.currentDoctypeReference) {\n        this.doc_ref = window.currentDoctypeReference;\n      }\n\n      if (this.doc_ref) {\n        this.readOnly = true;\n      }\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        if (data.allowedFields && data.allowed_fields.allowed_fields) {\n          this.allowedFields = data.allowed_fields.allowed_fields;\n        }\n\n        this.doctype = data.data;\n        if (window.currentDoctype) {\n          this.doctype.doctype = window.currentDoctype;\n        }\n\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      let checkList = this.allowedFields\n        .filter((x) => x.active)\n        .map((v) => v.field_name);\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (\n              checkList.indexOf(item.fieldname) > -1 ||\n              checkList.length == 0\n            ) {\n              currentSection.fields.push(item);\n            }\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          currentSection.collapsed = false;\n          currentSection.collapsible = item.collapsible;\n        }\n      });\n\n      if (this.sections.length === 0) {\n        currentSection = { fields: [], name: "" };\n        currentSection.collapsed = false;\n        currentSection.collapsible = false;\n\n        fields.forEach((item) => {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (checkList.indexOf(item.fieldname) > -1) {\n              currentSection.fields.push(item);\n            }\n          }\n        });\n\n        this.sections.push(currentSection);\n      }\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n\n      if (stringItem.startsWith("section_break")) {\n        return null;\n      }\n\n      if (stringItem.startsWith("sb_")) {\n        stringItem = stringItem.replace("_sb", "");\n      }\n\n      stringItem = stringItem.replaceAll("section_break", "section");\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text Editor") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n    childUpdated(val) {\n      if (this.doctype[val.fieldname] !== val.val) {\n        this.$set(this.doctype, val.fieldname, val.val);\n      }\n    },\n    create() {\n      createDoctype(this.doctype).then((data) => {});\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n    refreshed(val) {\n      this.loadDoctype();\n    },\n    doc_ref(vale){\n      this.loadDoctype();\n    }\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.head-toggle {\n  outline: 0;\n}\n.header {\n  background: transparent;\n}\n.card-header {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n</style>\n';
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
  function __vue_create_injector__7() {
    const styles = __vue_create_injector__7.styles || (__vue_create_injector__7.styles = {});
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
  var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7({render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7}, __vue_inject_styles__7, __vue_script__7, __vue_scope_id__7, __vue_is_functional_template__7, __vue_module_identifier__7, false, __vue_create_injector__7, void 0, void 0);
  var DoctypeRender_default = __vue_component__7;

  // ../frontend/frontend/public/js/services/forms/builder.js
  var api3 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var fetch = ({method, args = {}}) => new Promise((resolve, reject) => frappe.call({method, type: "GET", args, callback: resolve}));
  var getFormConfiguration = ({name = ""}) => fetch({
    method: "clinical.api.forms.form_builder.get_form_configuration",
    args: {
      name
    }
  }).then(({message}) => message);
  var saveFormData2 = ({formData}) => api3({
    method: "clinical.api.forms.form_builder.save_form_data",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);
  var updateDoctypeData = ({formData}) => api3({
    method: "clinical.api.forms.form_builder.update_doctype_data",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);
  var updateFormData = ({formData}) => api3({
    method: "clinical.api.forms.form_builder.update_form_data",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/forms/Frm.vue
  var __vue_script__8 = {
    name: "FormRenderView",
    data: function() {
      return {
        some_data: "To",
        date: null,
        previewMode: false,
        title: "",
        department: "",
        tableName: "",
        configuration: {},
        draftForm: {},
        formData: null,
        formName: null,
        selectedItem: null,
        formInputData: null,
        originalConfig: null,
        changeLog: [],
        savedDocument: null,
        allFormConfigurationData: null,
        renderComponent: true,
        reference: {},
        mappedDoctypeName: null
      };
    },
    props: {
      selectedDoctype: {type: String},
      selectedDoctypeReference: {type: String},
      currentFormName: {type: String},
      patient: {type: Object},
      dataInput: {type: Object},
      prePopulate: {type: Object},
      isReadonly: {type: Boolean, default: false},
      isSaveOnly: {type: Boolean, default: false},
      hasOwner: {type: Boolean, default: false},
      powerThrough: {type: Boolean, default: false},
      parent: String
    },
    watch: {
      prePopulate(val) {
        this.dataPrepoulate(this.formData);
      },
      dataInput(newVal) {
        this.setValues(newVal);
      },
      previewMode(newVal, oldVal) {
        if (newVal) {
          const conf = this.configuration;
          keys = Object.keys(newVal);
          keys.forEach((key) => {
            this.formInputData[`${key}`] = newVal[`${key}`];
          });
          this.formData = conf;
        }
      },
      selectedDoctype(doctype) {
        if (doctype) {
          this.makeDoctypeItemControl(doctype);
        }
      },
      currentFormName(name) {
        if (name) {
          this.getForm(name);
        }
      }
    },
    methods: {
      forceRerender() {
        this.renderComponent = false;
        this.$nextTick(() => {
          this.renderComponent = true;
        });
      },
      populate() {
        this.setValues(this.dataInput);
      },
      dataPrepoulate(configuration) {
        if (this.prePopulate) {
          const keys2 = Object.keys(this.prePopulate);
          const controlValues = Object.values(configuration.controls);
          const transformedData = {};
          keys2.forEach((key) => {
            const currentControl = controlValues.find((control) => control.mappedField === key);
            if (currentControl) {
              const updatedKey = currentControl.name;
              transformedData[updatedKey] = this.prePopulate[key];
            }
          });
          this.dataInput = transformedData;
          this.draftForm = {name: this.prePopulate.name};
        }
      },
      clearData() {
        const val = {};
        const keys2 = Object.keys(this.formInputData);
        keys2.forEach((key) => {
          val[key] = "";
        });
        this.setValues(val);
      },
      setValues(val) {
        this.$set(this, "formInputData", val);
      },
      getFormData() {
        if (!this.currentFormName) {
          const formName2 = frappe.get_route()[2];
          this.tableName = formName2.split("-")[1];
          this.showModal();
        } else {
          if (!this.selectedDoctype || !this.selectedDoctypeReference) {
            this.showModal();
          } else {
            this.save();
          }
        }
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
        if (this.hasOwner) {
          this.$refs["save_modal"].show();
        } else if (!this.draftForm.name) {
          this.initialSave();
        } else {
          this.save();
        }
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
      get_new_frm(_frm) {
        const doctype = "Patient";
        const page = $("#form");
        const layout = new frappe.ui.form.Layout({
          parent: page,
          doctype,
          doctype_layout: null,
          frm: {},
          with_dashboard: false,
          card_layout: true
        });
        layout.make();
        console.log(layout);
        return frm;
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
        saveFormData2(formData).then((saved) => {
          frappe.show_alert("Form Saved " + saved.name, 5);
          this.formData = null;
          this.setValues({});
          this.selectedDoctype = null;
          this.selectedDoctypeReference = null;
          this.sendToTimeline(this.patient.patient, "Form Repository", saved.name, saved.owner);
        });
      },
      initialSave() {
        this.hideModal();
        let form_content = "{}";
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
          completion_status: "Initial"
        };
        saveFormData2({formData}).then((saved) => {
          this.draftForm = saved;
          if (this.powerThrough) {
            this.saveDoctype();
          }
        });
      },
      getForm(name) {
        getFormConfiguration({name}).then((config) => {
          this.allFormConfigurationData = config;
          const formStringConfig = config.formdata;
          const configObject = JSON.parse(formStringConfig);
          this.dataPrepoulate(configObject);
          this.formName = config.name;
          this.formData = configObject;
          this.originalConfig = configObject;
        });
      },
      hideModal() {
        this.$refs["save_modal"].hide();
      },
      navigateToList() {
        const formName2 = frappe.get_route()[2];
        this.tableName = formName2.split("-")[1];
      },
      sendToTimeline(patient, reference_doctype, reference_name, reference_owner) {
        let formData = {
          reference_doctype,
          reference_name,
          doctype: "Patient Medical Record",
          patient,
          status: "Open",
          reference_owner
        };
        saveFormData2({formData}).then((saved) => {
          frappe.show_alert("Timeline updated", 5);
        });
      },
      saveDoctype() {
        this.$bvModal.msgBoxConfirm("Are you sure you want to save the changes?").then((value) => {
          if (value) {
            alert("SAving to db");
            this.saveDoctypeToDb();
          }
          this.$bvModal.hide("add_l_modal");
        }).catch((err) => {
        });
      },
      saveDoctypeToDb() {
        if (this.formData.formConfig.mappedDoctype) {
          const keys2 = Object.keys(this.formInputData);
          let formData = {doctype: this.formData.formConfig.mappedDoctype};
          keys2.forEach((key) => {
            if (this.formData.controls[key]) {
              const control = this.formData.controls[key];
              if (control && (control.type === "radio" || control.type === "dropDown" || control.type === "checkbox")) {
                if (control.items.length) {
                  const erpValueObject = control.items.find((item) => item.value === this.formInputData[key]);
                  const field = this.formData.controls[key].mappedField;
                  if (field) {
                    formData[field] = erpValueObject.erpValue;
                  }
                }
              } else {
                const field = this.formData.controls[key].mappedField;
                if (field) {
                  formData[field] = this.formInputData[key];
                }
              }
            } else if (Array.isArray(this.formInputData[key])) {
              formData[key] = this.formInputData[key];
            }
            this.allFormConfigurationData.context_item.forEach((item) => {
              formData[item.key] = this.context[item.value];
            });
            if (this.allFormConfigurationData.extras && this.allFormConfigurationData.extras.length) {
              this.allFormConfigurationData.extras.forEach((item) => {
                formData[item.key] = item.value;
              });
            }
          });
          alert(JSON.stringify(formData));
          saveFormData2({formData}).then((saved) => {
            alert(JSON.stringify(saved));
            this.mappedDoctypeName = saved.name;
            frappe.show_alert("Saved", 3);
            this.savedDocument = saved;
            this.getFormData();
          });
        } else {
          console.log("FRM", "getFormData");
          this.getFormData();
        }
      },
      populateChildTableReference() {
        this.reference = {doctype: this.selectedDoctype, doctype_id: this.selectedDoctypeReference};
      },
      save() {
        this.hideModal();
        let form_content = this.formInputData;
        form_content = JSON.stringify(form_content);
        const form_name = this.formName;
        const reference_doctype = this.allFormConfigurationData.owner_doctype || this.selectedDoctype || this.formData.formConfig.mappedDoctype;
        let reference_doctype_id = null;
        if (this.allFormConfigurationData.context_reference) {
          reference_doctype_id = this.context[this.allFormConfigurationData.context_owner_name] || this.selectedDoctypeReference || this.savedDocument.name;
        } else {
          reference_doctype_id = this.allFormConfigurationData.owner_doctype_reference || this.selectedDoctypeReference || this.savedDocument.name;
        }
        let name = null;
        if (this.draftForm && this.draftForm.name) {
          name = this.draftForm.name;
        }
        let doctype = "Form Repository";
        let formData = {
          doctype,
          name,
          form_content,
          form_name,
          mapped_doctype_name: this.mappedDoctypeName,
          mapped_doctype: this.formData.formConfig.mappedDoctype,
          reference_doctype,
          reference_doctype_id,
          completion_status: "Completed",
          completed: 1
        };
        if (this.encounter && this.encounter.name) {
          formData.patient_encounter = this.encounter.name;
        }
        ;
        alert(JSON.stringify(formData));
        updateFormData({formData}).then((result) => {
          alert("Finale");
          frappe.show_alert("Form updated " + result.name, 5);
          this.draftForm = {};
          this.clearData();
          this.forceRerender();
          this.$emit("callback", {formData, document: this.savedDocument});
        });
      }
    },
    computed: {
      context() {
        return this.$store.getters["context/getContext"];
      },
      isShowOverlay() {
        return !this.draftForm.name;
      },
      opacity() {
        return this.isReadonly ? 0 : 0.2;
      },
      encounter() {
        return this.$store.getters["encounter/getEncounter"];
      }
    },
    created() {
      if (this.currentFormName) {
        this.getForm(this.currentFormName);
      }
      this.populateChildTableReference();
    },
    mounted() {
      this.$formEvent.$on("submit", (value) => {
      });
      this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
        if (modalId === "modal-id-1") {
          this.makeSelectDoctypeControl();
        }
      });
      const context = this;
      setTimeout(() => {
        context.populate();
      }, 1e3);
    },
    components: {}
  };
  var __vue_render__8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticStyle: {width: "100% !important"}}, [
      _c("b-overlay", {
        staticStyle: {width: "100% !important"},
        attrs: {
          show: _vm.isShowOverlay && !_vm.isReadonly || _vm.isReadonly,
          opacity: _vm.opacity,
          "no-center": "",
          rounded: "sm"
        },
        scopedSlots: _vm._u([
          {
            key: "overlay",
            fn: function() {
              return [
                _c("div", {staticClass: "text-center"}, [
                  !_vm.draftForm.name && _vm.formData && !_vm.isReadonly || !_vm.draftForm.name && _vm.isReadonly && _vm.isSaveOnly ? _c("b-button", {
                    staticClass: "white-text pull-right mr-5 mt-3",
                    attrs: {variant: "primary", size: "sm"},
                    on: {
                      click: function($event) {
                        return _vm.showModal();
                      }
                    }
                  }, [
                    _c("i", {staticClass: "fa fa-edit"}),
                    _vm._v(" Click to start\n        ")
                  ]) : _vm._e(),
                  _vm._v(" "),
                  _vm.isSaveOnly && _vm.draftForm.name && _vm.isReadonly ? _c("b-button", {
                    staticClass: "white-text pull-right mr-5 mt-3",
                    attrs: {variant: "primary", size: "sm"},
                    on: {
                      click: function($event) {
                        return _vm.saveDoctype();
                      }
                    }
                  }, [
                    _c("i", {staticClass: "fa fa-save"}),
                    _vm._v(" Save\n        ")
                  ]) : _vm._e()
                ], 1)
              ];
            },
            proxy: true
          }
        ])
      }, [
        _c("b-container", {
          staticClass: "main-page mb-4",
          staticStyle: {width: "100% !important"}
        }, [
          _c("div", {staticClass: "spacer-left-5"}, [
            _c("b-row", [
              _c("div", {staticClass: "render-form row"}, [
                _vm.formData && !_vm.isReadonly ? _c("b-row", {
                  staticClass: "save-btn mb-2",
                  staticStyle: {width: "100%"}
                }, [
                  _c("b-col", {attrs: {cols: "8"}}, [
                    _c("h3", {staticClass: "ml-2 upper-case"}, [
                      _vm._v(_vm._s(_vm.currentFormName))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-col", {
                    staticClass: "pull-right",
                    attrs: {cols: "4"}
                  }, [
                    _c("b-button-group", {staticClass: "pull-right"}, [
                      _vm.draftForm.name ? _c("b-button", {
                        staticClass: "white-text pull-right",
                        attrs: {variant: "primary"},
                        on: {
                          click: function($event) {
                            return _vm.saveDoctype();
                          }
                        }
                      }, [
                        _c("i", {
                          staticClass: "fa fa-save"
                        }),
                        _vm._v(" Save\n                  ")
                      ]) : _vm._e()
                    ], 1)
                  ], 1)
                ], 1) : _vm._e(),
                _vm._v(" "),
                _vm.renderComponent ? _c("FormRenderer", {
                  staticStyle: {width: "100% !important"},
                  attrs: {
                    "form-configuration": _vm.formData,
                    parent: _vm.draftForm.name || _vm.parent,
                    reference: _vm.reference
                  },
                  model: {
                    value: _vm.formInputData,
                    callback: function($$v) {
                      _vm.formInputData = $$v;
                    },
                    expression: "formInputData"
                  }
                }) : _vm._e()
              ], 1)
            ]),
            _vm._v(" "),
            _c("b-modal", {
              ref: "save_modal",
              attrs: {
                id: "modal-id-1",
                size: "sm",
                "hide-footer": ""
              },
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
                }),
                _vm._v(" "),
                _c("b-col", {
                  staticClass: "ref-field-input",
                  attrs: {cols: 12, id: "form"}
                })
              ], 1),
              _vm._v(" "),
              _c("b-button", {
                staticClass: "mt-3 btn btn-primary",
                attrs: {block: ""},
                on: {
                  click: function($event) {
                    return _vm.initialSave();
                  }
                }
              }, [_vm._v("Save")])
            ], 1)
          ], 1)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__8 = [];
  __vue_render__8._withStripped = true;
  var __vue_inject_styles__8 = function(inject) {
    if (!inject)
      return;
    inject("data-v-74881128_0", {source: '\n.spacer[data-v-74881128] {\n  margin-top: 10px;\n}\n.space-right[data-v-74881128] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-74881128] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn[data-v-74881128] {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5[data-v-74881128] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-74881128] {\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n  width:100% !important;\n}\n.white-text[data-v-74881128] {\n  color: white;\n  margin-left: 10px;\n}\n.form-border[data-v-74881128] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-74881128] {\n  padding-bottom: 50px;\n  /* padding-right: 50px; */\n}\n.main-page[data-v-74881128] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-74881128] {\n  margin-top: 20px;\n}\n.card[data-v-74881128] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-74881128]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-74881128] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-74881128] {\n  background-color: white;\n  border-radius: 10px;\n}\n.space-left[data-v-74881128] {\n  margin-left: 8px;\n}\n.ref-field-input[data-v-74881128] {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width[data-v-74881128] {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding[data-v-74881128] {\n  padding-left: 15px;\n}\n.upper-case[data-v-74881128] {\n  text-transform: uppercase;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/Frm.vue"], "names": [], "mappings": ";AAikBA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,cAAA;AACA;AACA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;AACA;AACA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,yBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,yBAAA;AACA", "file": "Frm.vue", "sourcesContent": ['<template>\n\n  <div style="width:100% !important">\n    <b-overlay  style="width:100% !important"\n      :show="(isShowOverlay && !isReadonly) || isReadonly"\n      :opacity="opacity"\n      no-center\n      rounded="sm"\n    >\n\n      <b-container class="main-page mb-4"  style="width:100% !important">\n        <div class="spacer-left-5">\n\n          <b-row>\n            <div class="render-form row">\n              <b-row\n                class="save-btn mb-2"\n                style="width:100%"\n                v-if="formData && !isReadonly"\n              >\n                <b-col cols="8">\n                  <h3 class="ml-2 upper-case">{{ currentFormName }}</h3>\n                </b-col>\n                <b-col cols="4" class="pull-right">\n                  <b-button-group class="pull-right">\n                    <b-button\n                      v-if="draftForm.name"\n                      variant="primary"\n                      class="white-text pull-right"\n                      @click="saveDoctype()"\n                    >\n                      <i class="fa fa-save"></i> Save\n                    </b-button>\n                  </b-button-group>\n                </b-col>\n              </b-row>\n\n              <FormRenderer\n                style="width:100% !important"\n                v-if="renderComponent"\n                :form-configuration="formData"\n                :parent="draftForm.name || parent"\n                :reference="reference"\n                v-model="formInputData"\n              />\n            </div>\n          </b-row>\n\n          <b-modal id="modal-id-1" ref="save_modal" size="sm" hide-footer>\n            <template #modal-title> Confirm save form data </template>\n            <b-row class="modal-padding" id="modal-body">\n\n              <b-col :cols="12" ref="doctype" class="ref-field-input">\n              </b-col>\n\n              <b-col\n                :cols="12"\n                v-show="selectedDoctype"\n                ref="docId"\n                id="ref-field"\n                class="ref-field-input"\n              />\n\n              <b-col :cols="12" id="form" class="ref-field-input" />\n            </b-row>\n\n            <b-button class="mt-3 btn btn-primary" block @click="initialSave()"\n              >Save</b-button\n            >\n          </b-modal>\n\n        </div>\n      </b-container>\n      <template #overlay>\n        <div class="text-center">\n          <b-button\n            v-if="\n              (!draftForm.name && formData && !isReadonly) ||\n                (!draftForm.name && isReadonly && isSaveOnly)\n            "\n            variant="primary"\n            class="white-text pull-right mr-5 mt-3"\n            size="sm"\n            @click="showModal()"\n          >\n            <i class="fa fa-edit"></i> Click to start\n          </b-button>\n\n          <b-button\n            v-if="isSaveOnly && draftForm.name && isReadonly"\n            variant="primary"\n            size="sm"\n            class="white-text pull-right mr-5 mt-3"\n            @click="saveDoctype()"\n          >\n            <i class="fa fa-save"></i> Save\n          </b-button>\n        </div>\n      </template>\n    </b-overlay>\n  </div>\n</template>\n<script>\nimport {\n  getFormConfiguration,\n  saveFormData,\n  updateFormData,\n} from "../services/forms/builder.js";\n\n\nexport default {\n  name: "FormRenderView",\n\n  data: function() {\n    return {\n      some_data: "To",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      tableName: "",\n      configuration: {},\n      draftForm: {},\n      formData: null,\n      formName: null,\n      selectedItem: null,\n      formInputData: null,\n      originalConfig: null,\n      changeLog: [],\n      savedDocument: null,\n      allFormConfigurationData: null,\n      renderComponent: true,\n      reference:{},\n      mappedDoctypeName: null, \n    };\n  },\n  props: {\n    selectedDoctype: { type: String },\n    selectedDoctypeReference: { type: String },\n    currentFormName: { type: String },\n    patient: { type: Object },\n    dataInput: { type: Object },\n    prePopulate: { type: Object },\n    isReadonly: { type: Boolean, default: false },\n    isSaveOnly: { type: Boolean, default: false },\n    hasOwner: { type: Boolean, default: false },\n    powerThrough: { type: Boolean, default: false },\n    parent: String,\n  },\n  watch: {\n    prePopulate(val){\n      this.dataPrepoulate(this.formData)    \n    },\n    dataInput(newVal) {\n      this.setValues(newVal);\n    },\n\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        keys = Object.keys(newVal);\n        keys.forEach((key) => {\n          this.formInputData[`${key}`] = newVal[`${key}`];\n        });\n\n        this.formData = conf;\n      }\n    },\n    selectedDoctype(doctype) {\n      if (doctype) {\n        this.makeDoctypeItemControl(doctype);\n      }\n    },\n    currentFormName(name) {\n      if (name) {\n        this.getForm(name);\n      }\n    },\n\n  },\n  methods: {\n    forceRerender() {\n      this.renderComponent = false;\n\n      this.$nextTick(() => {\n        this.renderComponent = true;\n      });\n    },\n    populate() {\n      this.setValues(this.dataInput);\n    },\n    dataPrepoulate(configuration) {\n      if (this.prePopulate) {\n        const keys = Object.keys(this.prePopulate);\n        const controlValues = Object.values(configuration.controls);\n        const transformedData = {};\n        keys.forEach((key) => {\n          const currentControl = controlValues.find(\n            (control) => control.mappedField === key\n          );\n          if (currentControl) {\n            const updatedKey = currentControl.name;\n            transformedData[updatedKey] = this.prePopulate[key];\n          }\n        });\n\n        this.dataInput = transformedData;\n        this.draftForm = { name: this.prePopulate.name };\n      }\n    },\n    clearData() {\n      const val = {};\n      const keys = Object.keys(this.formInputData);\n      keys.forEach((key) => {\n        val[key] = "";\n      });\n\n      this.setValues(val);\n    },\n\n    setValues(val) {\n      this.$set(this, "formInputData", val);\n    },\n    getFormData() {\n      if (!this.currentFormName) {\n        const formName = frappe.get_route()[2];\n        this.tableName = formName.split("-")[1];\n        this.showModal();\n      } else {\n        if (!this.selectedDoctype || !this.selectedDoctypeReference) {\n          this.showModal();\n        } else {\n          this.save();\n        }\n      }\n    },\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      if (this.hasOwner) {\n        this.$refs["save_modal"].show();\n      } else if (!this.draftForm.name) {\n        this.initialSave();\n      } else {\n        this.save();\n      }\n    },\n    clear() {\n      this.formData = null;\n      this.formData = this.originalConfig;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "DocType",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    get_new_frm(_frm) {\n      const doctype = "Patient";\n      const page = $("#form");\n\n      const layout = new frappe.ui.form.Layout({\n        parent: page,\n        doctype: doctype,\n        doctype_layout: null,\n        frm: {},\n        with_dashboard: false,\n        card_layout: true,\n      });\n      layout.make();\n      console.log(layout);\n\n      return frm;\n    },\n    makeDoctypeItemControl(doctype) {\n      const div = $("#ref-field");\n      div.empty();\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference Id"),\n          fieldtype: "Link",\n          fieldname: "itemControl",\n          options: doctype,\n          placeholder: __("Reference Id"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctypeReference = this.value;\n            }\n          },\n        },\n        parent: this.$refs["docId"],\n        render_input: true,\n      });\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    saveForm(formData) {\n    \n      this.hideModal();\n      saveFormData(formData).then((saved) => {\n        frappe.show_alert("Form Saved " + saved.name, 5);\n      \n        this.formData = null;\n        this.setValues({});\n        this.selectedDoctype = null;\n        this.selectedDoctypeReference = null;\n        this.sendToTimeline(\n          this.patient.patient,\n          "Form Repository",\n          saved.name,\n          saved.owner\n        );\n      });\n    },\n    initialSave() {\n      this.hideModal();\n      let form_content = "{}";\n      const form_name = this.formName;\n      const reference_doctype = this.selectedDoctype;\n      const reference_doctype_id = this.selectedDoctypeReference;\n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        form_content,\n        form_name,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Initial",\n      };\n      saveFormData({ formData }).then((saved) => {\n        this.draftForm = saved;\n        if (this.powerThrough) {\n          this.saveDoctype();\n        }\n      });\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        this.allFormConfigurationData = config;\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.dataPrepoulate(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    navigateToList() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n    },\n\n    sendToTimeline(\n      patient,\n      reference_doctype,\n      reference_name,\n      reference_owner\n    ) {\n     \n      let formData = {\n        reference_doctype,\n        reference_name,\n        doctype: "Patient Medical Record",\n        patient,\n        status: "Open",\n        reference_owner,\n      };\n\n      saveFormData({ formData }).then((saved) => {\n        frappe.show_alert("Timeline updated", 5);\n      });\n    },\n    saveDoctype() {\n      this.$bvModal\n        .msgBoxConfirm("Are you sure you want to save the changes?")\n        .then((value) => {\n          if (value) {\n            alert("SAving to db")\n            this.saveDoctypeToDb();\n          }\n          this.$bvModal.hide(\'add_l_modal\')\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n    saveDoctypeToDb() {  \n      if (this.formData.formConfig.mappedDoctype) {\n        const keys = Object.keys(this.formInputData);\n        let formData = { doctype: this.formData.formConfig.mappedDoctype };\n\n        keys.forEach((key) => {\n          if (this.formData.controls[key]) {\n            const control = this.formData.controls[key];\n            if (\n              control &&\n              (control.type === "radio" ||\n                control.type === "dropDown" ||\n                control.type === "checkbox")\n            ) {\n              if (control.items.length) {\n                const erpValueObject = control.items.find(\n                  (item) => item.value === this.formInputData[key]\n                );\n                const field = this.formData.controls[key].mappedField;\n                if (field) {\n                  formData[field] = erpValueObject.erpValue;\n                }\n              }\n            } else {\n              const field = this.formData.controls[key].mappedField;\n              if (field) {\n                formData[field] = this.formInputData[key];\n              }\n            }\n          } else if (Array.isArray(this.formInputData[key])) {\n            formData[key] = this.formInputData[key];\n          }\n\n\n          this.allFormConfigurationData.context_item.forEach((item) => {\n            formData[item.key] = this.context[item.value];\n          });\n\n            if(this.allFormConfigurationData.extras && this.allFormConfigurationData.extras.length ){\n            this.allFormConfigurationData.extras.forEach((item) => { \n                      \n                        formData[item.key] = item.value;\n                      });\n            }\n           \n        });\n        alert(JSON.stringify(formData))\n\n        saveFormData({ formData }).then((saved) => {\n          alert(JSON.stringify(saved))\n          this.mappedDoctypeName = saved.name;\n          frappe.show_alert("Saved", 3);\n          this.savedDocument = saved;\n          this.getFormData();\n        });\n      } else {\n           console.log("FRM", "getFormData");\n        this.getFormData();\n      }\n    },\n    populateChildTableReference(){\n      this.reference = {doctype:this.selectedDoctype,doctype_id:this.selectedDoctypeReference  }\n    },\n    save() {\n      this.hideModal();\n      let form_content = this.formInputData;\n      form_content = JSON.stringify(form_content);\n      const form_name = this.formName;\n      const reference_doctype =\n        this.allFormConfigurationData.owner_doctype ||\n        this.selectedDoctype ||\n        this.formData.formConfig.mappedDoctype;\n      let reference_doctype_id = null;\n      if (this.allFormConfigurationData.context_reference) {\n        reference_doctype_id =\n          this.context[this.allFormConfigurationData.context_owner_name] ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      } else {\n        reference_doctype_id =\n          this.allFormConfigurationData.owner_doctype_reference ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      }\n\n      let name = null;\n\n      if (this.draftForm && this.draftForm.name) {\n        name = this.draftForm.name;\n      }\n    \n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        name,\n        form_content,\n        form_name,\n        mapped_doctype_name : this.mappedDoctypeName,\n        mapped_doctype: this.formData.formConfig.mappedDoctype,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Completed",\n        completed:1,\n      };\n\n       if(this.encounter  && this.encounter.name){\n         formData.patient_encounter =this.encounter.name;      \n      };\n\n       alert(JSON.stringify(formData))\n\n      updateFormData({ formData }).then((result) => {\n        alert("Finale")\n        frappe.show_alert("Form updated " + result.name, 5);\n        this.draftForm = {};\n        this.clearData();\n        this.forceRerender();\n        this.$emit("callback", { formData, document: this.savedDocument });\n      });\n    },\n  },\n  computed: {\n    context() {\n      return this.$store.getters["context/getContext"];\n    },\n    isShowOverlay() {\n      return !this.draftForm.name;\n    },\n    opacity() {\n      return this.isReadonly ? 0 : 0.2;\n    },\n     encounter() {\n      return this.$store.getters["encounter/getEncounter"];\n    },\n  },\n  created() {\n    \n    if (this.currentFormName) {\n      this.getForm(this.currentFormName);\n    }\n    this.populateChildTableReference()\n \n  },\n\n  mounted() {\n\n    this.$formEvent.$on("submit", (value) => {});\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      if (modalId === "modal-id-1") {\n        this.makeSelectDoctypeControl();\n      }\n    });\n    const context = this;\n    setTimeout(() => {\n      context.populate();\n    }, 1000);\n  },\n  components: {},\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n  width:100% !important;\n}\n.white-text {\n  color: white;\n  margin-left: 10px;\n}\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  /* padding-right: 50px; */\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.space-left {\n  margin-left: 8px;\n}\n\n.ref-field-input {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding {\n  padding-left: 15px;\n}\n.upper-case {\n  text-transform: uppercase;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__8 = "data-v-74881128";
  var __vue_module_identifier__8 = void 0;
  var __vue_is_functional_template__8 = false;
  function __vue_normalize__8(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n\n  <div style="width:100% !important">\n    <b-overlay  style="width:100% !important"\n      :show="(isShowOverlay && !isReadonly) || isReadonly"\n      :opacity="opacity"\n      no-center\n      rounded="sm"\n    >\n\n      <b-container class="main-page mb-4"  style="width:100% !important">\n        <div class="spacer-left-5">\n\n          <b-row>\n            <div class="render-form row">\n              <b-row\n                class="save-btn mb-2"\n                style="width:100%"\n                v-if="formData && !isReadonly"\n              >\n                <b-col cols="8">\n                  <h3 class="ml-2 upper-case">{{ currentFormName }}</h3>\n                </b-col>\n                <b-col cols="4" class="pull-right">\n                  <b-button-group class="pull-right">\n                    <b-button\n                      v-if="draftForm.name"\n                      variant="primary"\n                      class="white-text pull-right"\n                      @click="saveDoctype()"\n                    >\n                      <i class="fa fa-save"></i> Save\n                    </b-button>\n                  </b-button-group>\n                </b-col>\n              </b-row>\n\n              <FormRenderer\n                style="width:100% !important"\n                v-if="renderComponent"\n                :form-configuration="formData"\n                :parent="draftForm.name || parent"\n                :reference="reference"\n                v-model="formInputData"\n              />\n            </div>\n          </b-row>\n\n          <b-modal id="modal-id-1" ref="save_modal" size="sm" hide-footer>\n            <template #modal-title> Confirm save form data </template>\n            <b-row class="modal-padding" id="modal-body">\n\n              <b-col :cols="12" ref="doctype" class="ref-field-input">\n              </b-col>\n\n              <b-col\n                :cols="12"\n                v-show="selectedDoctype"\n                ref="docId"\n                id="ref-field"\n                class="ref-field-input"\n              />\n\n              <b-col :cols="12" id="form" class="ref-field-input" />\n            </b-row>\n\n            <b-button class="mt-3 btn btn-primary" block @click="initialSave()"\n              >Save</b-button\n            >\n          </b-modal>\n\n        </div>\n      </b-container>\n      <template #overlay>\n        <div class="text-center">\n          <b-button\n            v-if="\n              (!draftForm.name && formData && !isReadonly) ||\n                (!draftForm.name && isReadonly && isSaveOnly)\n            "\n            variant="primary"\n            class="white-text pull-right mr-5 mt-3"\n            size="sm"\n            @click="showModal()"\n          >\n            <i class="fa fa-edit"></i> Click to start\n          </b-button>\n\n          <b-button\n            v-if="isSaveOnly && draftForm.name && isReadonly"\n            variant="primary"\n            size="sm"\n            class="white-text pull-right mr-5 mt-3"\n            @click="saveDoctype()"\n          >\n            <i class="fa fa-save"></i> Save\n          </b-button>\n        </div>\n      </template>\n    </b-overlay>\n  </div>\n</template>\n<script>\nimport {\n  getFormConfiguration,\n  saveFormData,\n  updateFormData,\n} from "../services/forms/builder.js";\n\n\nexport default {\n  name: "FormRenderView",\n\n  data: function() {\n    return {\n      some_data: "To",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      tableName: "",\n      configuration: {},\n      draftForm: {},\n      formData: null,\n      formName: null,\n      selectedItem: null,\n      formInputData: null,\n      originalConfig: null,\n      changeLog: [],\n      savedDocument: null,\n      allFormConfigurationData: null,\n      renderComponent: true,\n      reference:{},\n      mappedDoctypeName: null, \n    };\n  },\n  props: {\n    selectedDoctype: { type: String },\n    selectedDoctypeReference: { type: String },\n    currentFormName: { type: String },\n    patient: { type: Object },\n    dataInput: { type: Object },\n    prePopulate: { type: Object },\n    isReadonly: { type: Boolean, default: false },\n    isSaveOnly: { type: Boolean, default: false },\n    hasOwner: { type: Boolean, default: false },\n    powerThrough: { type: Boolean, default: false },\n    parent: String,\n  },\n  watch: {\n    prePopulate(val){\n      this.dataPrepoulate(this.formData)    \n    },\n    dataInput(newVal) {\n      this.setValues(newVal);\n    },\n\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        keys = Object.keys(newVal);\n        keys.forEach((key) => {\n          this.formInputData[`${key}`] = newVal[`${key}`];\n        });\n\n        this.formData = conf;\n      }\n    },\n    selectedDoctype(doctype) {\n      if (doctype) {\n        this.makeDoctypeItemControl(doctype);\n      }\n    },\n    currentFormName(name) {\n      if (name) {\n        this.getForm(name);\n      }\n    },\n\n  },\n  methods: {\n    forceRerender() {\n      this.renderComponent = false;\n\n      this.$nextTick(() => {\n        this.renderComponent = true;\n      });\n    },\n    populate() {\n      this.setValues(this.dataInput);\n    },\n    dataPrepoulate(configuration) {\n      if (this.prePopulate) {\n        const keys = Object.keys(this.prePopulate);\n        const controlValues = Object.values(configuration.controls);\n        const transformedData = {};\n        keys.forEach((key) => {\n          const currentControl = controlValues.find(\n            (control) => control.mappedField === key\n          );\n          if (currentControl) {\n            const updatedKey = currentControl.name;\n            transformedData[updatedKey] = this.prePopulate[key];\n          }\n        });\n\n        this.dataInput = transformedData;\n        this.draftForm = { name: this.prePopulate.name };\n      }\n    },\n    clearData() {\n      const val = {};\n      const keys = Object.keys(this.formInputData);\n      keys.forEach((key) => {\n        val[key] = "";\n      });\n\n      this.setValues(val);\n    },\n\n    setValues(val) {\n      this.$set(this, "formInputData", val);\n    },\n    getFormData() {\n      if (!this.currentFormName) {\n        const formName = frappe.get_route()[2];\n        this.tableName = formName.split("-")[1];\n        this.showModal();\n      } else {\n        if (!this.selectedDoctype || !this.selectedDoctypeReference) {\n          this.showModal();\n        } else {\n          this.save();\n        }\n      }\n    },\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      if (this.hasOwner) {\n        this.$refs["save_modal"].show();\n      } else if (!this.draftForm.name) {\n        this.initialSave();\n      } else {\n        this.save();\n      }\n    },\n    clear() {\n      this.formData = null;\n      this.formData = this.originalConfig;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "DocType",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    get_new_frm(_frm) {\n      const doctype = "Patient";\n      const page = $("#form");\n\n      const layout = new frappe.ui.form.Layout({\n        parent: page,\n        doctype: doctype,\n        doctype_layout: null,\n        frm: {},\n        with_dashboard: false,\n        card_layout: true,\n      });\n      layout.make();\n      console.log(layout);\n\n      return frm;\n    },\n    makeDoctypeItemControl(doctype) {\n      const div = $("#ref-field");\n      div.empty();\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference Id"),\n          fieldtype: "Link",\n          fieldname: "itemControl",\n          options: doctype,\n          placeholder: __("Reference Id"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctypeReference = this.value;\n            }\n          },\n        },\n        parent: this.$refs["docId"],\n        render_input: true,\n      });\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    saveForm(formData) {\n    \n      this.hideModal();\n      saveFormData(formData).then((saved) => {\n        frappe.show_alert("Form Saved " + saved.name, 5);\n      \n        this.formData = null;\n        this.setValues({});\n        this.selectedDoctype = null;\n        this.selectedDoctypeReference = null;\n        this.sendToTimeline(\n          this.patient.patient,\n          "Form Repository",\n          saved.name,\n          saved.owner\n        );\n      });\n    },\n    initialSave() {\n      this.hideModal();\n      let form_content = "{}";\n      const form_name = this.formName;\n      const reference_doctype = this.selectedDoctype;\n      const reference_doctype_id = this.selectedDoctypeReference;\n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        form_content,\n        form_name,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Initial",\n      };\n      saveFormData({ formData }).then((saved) => {\n        this.draftForm = saved;\n        if (this.powerThrough) {\n          this.saveDoctype();\n        }\n      });\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        this.allFormConfigurationData = config;\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.dataPrepoulate(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    navigateToList() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n    },\n\n    sendToTimeline(\n      patient,\n      reference_doctype,\n      reference_name,\n      reference_owner\n    ) {\n     \n      let formData = {\n        reference_doctype,\n        reference_name,\n        doctype: "Patient Medical Record",\n        patient,\n        status: "Open",\n        reference_owner,\n      };\n\n      saveFormData({ formData }).then((saved) => {\n        frappe.show_alert("Timeline updated", 5);\n      });\n    },\n    saveDoctype() {\n      this.$bvModal\n        .msgBoxConfirm("Are you sure you want to save the changes?")\n        .then((value) => {\n          if (value) {\n            alert("SAving to db")\n            this.saveDoctypeToDb();\n          }\n          this.$bvModal.hide(\'add_l_modal\')\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n    saveDoctypeToDb() {  \n      if (this.formData.formConfig.mappedDoctype) {\n        const keys = Object.keys(this.formInputData);\n        let formData = { doctype: this.formData.formConfig.mappedDoctype };\n\n        keys.forEach((key) => {\n          if (this.formData.controls[key]) {\n            const control = this.formData.controls[key];\n            if (\n              control &&\n              (control.type === "radio" ||\n                control.type === "dropDown" ||\n                control.type === "checkbox")\n            ) {\n              if (control.items.length) {\n                const erpValueObject = control.items.find(\n                  (item) => item.value === this.formInputData[key]\n                );\n                const field = this.formData.controls[key].mappedField;\n                if (field) {\n                  formData[field] = erpValueObject.erpValue;\n                }\n              }\n            } else {\n              const field = this.formData.controls[key].mappedField;\n              if (field) {\n                formData[field] = this.formInputData[key];\n              }\n            }\n          } else if (Array.isArray(this.formInputData[key])) {\n            formData[key] = this.formInputData[key];\n          }\n\n\n          this.allFormConfigurationData.context_item.forEach((item) => {\n            formData[item.key] = this.context[item.value];\n          });\n\n            if(this.allFormConfigurationData.extras && this.allFormConfigurationData.extras.length ){\n            this.allFormConfigurationData.extras.forEach((item) => { \n                      \n                        formData[item.key] = item.value;\n                      });\n            }\n           \n        });\n        alert(JSON.stringify(formData))\n\n        saveFormData({ formData }).then((saved) => {\n          alert(JSON.stringify(saved))\n          this.mappedDoctypeName = saved.name;\n          frappe.show_alert("Saved", 3);\n          this.savedDocument = saved;\n          this.getFormData();\n        });\n      } else {\n           console.log("FRM", "getFormData");\n        this.getFormData();\n      }\n    },\n    populateChildTableReference(){\n      this.reference = {doctype:this.selectedDoctype,doctype_id:this.selectedDoctypeReference  }\n    },\n    save() {\n      this.hideModal();\n      let form_content = this.formInputData;\n      form_content = JSON.stringify(form_content);\n      const form_name = this.formName;\n      const reference_doctype =\n        this.allFormConfigurationData.owner_doctype ||\n        this.selectedDoctype ||\n        this.formData.formConfig.mappedDoctype;\n      let reference_doctype_id = null;\n      if (this.allFormConfigurationData.context_reference) {\n        reference_doctype_id =\n          this.context[this.allFormConfigurationData.context_owner_name] ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      } else {\n        reference_doctype_id =\n          this.allFormConfigurationData.owner_doctype_reference ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      }\n\n      let name = null;\n\n      if (this.draftForm && this.draftForm.name) {\n        name = this.draftForm.name;\n      }\n    \n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        name,\n        form_content,\n        form_name,\n        mapped_doctype_name : this.mappedDoctypeName,\n        mapped_doctype: this.formData.formConfig.mappedDoctype,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Completed",\n        completed:1,\n      };\n\n       if(this.encounter  && this.encounter.name){\n         formData.patient_encounter =this.encounter.name;      \n      };\n\n       alert(JSON.stringify(formData))\n\n      updateFormData({ formData }).then((result) => {\n        alert("Finale")\n        frappe.show_alert("Form updated " + result.name, 5);\n        this.draftForm = {};\n        this.clearData();\n        this.forceRerender();\n        this.$emit("callback", { formData, document: this.savedDocument });\n      });\n    },\n  },\n  computed: {\n    context() {\n      return this.$store.getters["context/getContext"];\n    },\n    isShowOverlay() {\n      return !this.draftForm.name;\n    },\n    opacity() {\n      return this.isReadonly ? 0 : 0.2;\n    },\n     encounter() {\n      return this.$store.getters["encounter/getEncounter"];\n    },\n  },\n  created() {\n    \n    if (this.currentFormName) {\n      this.getForm(this.currentFormName);\n    }\n    this.populateChildTableReference()\n \n  },\n\n  mounted() {\n\n    this.$formEvent.$on("submit", (value) => {});\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      if (modalId === "modal-id-1") {\n        this.makeSelectDoctypeControl();\n      }\n    });\n    const context = this;\n    setTimeout(() => {\n      context.populate();\n    }, 1000);\n  },\n  components: {},\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n  width:100% !important;\n}\n.white-text {\n  color: white;\n  margin-left: 10px;\n}\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  /* padding-right: 50px; */\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.space-left {\n  margin-left: 8px;\n}\n\n.ref-field-input {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding {\n  padding-left: 15px;\n}\n.upper-case {\n  text-transform: uppercase;\n}\n</style>\n';
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
  function __vue_create_injector__8() {
    const styles = __vue_create_injector__8.styles || (__vue_create_injector__8.styles = {});
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
  var __vue_component__8 = /* @__PURE__ */ __vue_normalize__8({render: __vue_render__8, staticRenderFns: __vue_staticRenderFns__8}, __vue_inject_styles__8, __vue_script__8, __vue_scope_id__8, __vue_is_functional_template__8, __vue_module_identifier__8, false, __vue_create_injector__8, void 0, void 0);
  var Frm_default = __vue_component__8;

  // ../frontend/frontend/public/js/patient/components/doctype/ChildTable.vue
  var __vue_script__9 = {
    name: "ChildTable",
    props: {
      doctype: {type: String},
      tableData: {type: Array, default: []},
      fields: [],
      selectedDoctype: null,
      selectedReference: null
    },
    methods: {
      loadMetaData() {
        const payload = {doctype: this.doctype};
        getDoctypeWithMetaSlim(payload).then((data) => {
          this.fields = data.meta.fields;
        });
      },
      getDataType(key) {
        return (this.fields || []).find((element) => element.fieldname === key) || {};
      },
      setCurrentDoctype(doctype, reference) {
        this.selectedDoctype = doctype;
        this.selectedReference = reference;
        this.$router.push({name: "viewer", params: {doctype, reference}});
      }
    },
    created() {
      this.loadMetaData();
    }
  };
  var __vue_render__9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _vm.selectedDoctype ? _c("doctype-render", {
          staticStyle: {width: "100%"},
          attrs: {
            fields: [],
            doctypeInput: _vm.selectedDoctype,
            doc_ref: _vm.selectedReference
          }
        }) : _vm._e()
      ], 1),
      _vm._v(" "),
      _c("b-modal", {
        ref: "my-modal-1993",
        attrs: {
          id: "" + _vm.selectedReference,
          size: "xl",
          title: "" + _vm.Patient,
          "ok-only": ""
        }
      }, [
        _c("b-row", [
          _vm._v(_vm._s(_vm.selectedDoctype) + " " + _vm._s(_vm.selectedReference))
        ]),
        _vm._v(" "),
        _c("doctype-render", {
          attrs: {
            fields: [],
            doctypeInput: _vm.selectedDoctype,
            doc_ref: _vm.selectedReference
          }
        })
      ], 1),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          small: "",
          fields: _vm.fields,
          items: _vm.tableData,
          responsive: "sm",
          bordered: "",
          striped: ""
        },
        scopedSlots: _vm._u([
          {
            key: "cell()",
            fn: function(data) {
              return [
                _vm.getDataType(data.field.key).fieldtype === "Link" ? _c("div", {staticStyle: {width: "100%"}}, [
                  _c("b-input-group", {staticClass: "mb-2"}, [
                    _c("b-form-input", {
                      attrs: {type: "text", readonly: ""},
                      model: {
                        value: data.value,
                        callback: function($$v) {
                          _vm.$set(data, "value", $$v);
                        },
                        expression: "data.value"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-input-group-prepend", {
                      attrs: {"is-text": ""},
                      on: {
                        click: function($event) {
                          _vm.setCurrentDoctype(_vm.getDataType(data.field.key).options, data.value);
                        }
                      }
                    }, [_c("b-icon", {attrs: {icon: "link45deg"}})], 1)
                  ], 1)
                ], 1) : _c("div", {staticStyle: {width: "100%"}}, [
                  _c("b-form-input", {
                    attrs: {type: "text", readonly: ""},
                    model: {
                      value: data.value,
                      callback: function($$v) {
                        _vm.$set(data, "value", $$v);
                      },
                      expression: "data.value"
                    }
                  })
                ], 1)
              ];
            }
          }
        ])
      })
    ], 1);
  };
  var __vue_staticRenderFns__9 = [];
  __vue_render__9._withStripped = true;
  var __vue_inject_styles__9 = function(inject) {
    if (!inject)
      return;
    inject("data-v-33aa60c3_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "ChildTable.vue"}, media: void 0});
  };
  var __vue_scope_id__9 = "data-v-33aa60c3";
  var __vue_module_identifier__9 = void 0;
  var __vue_is_functional_template__9 = false;
  function __vue_normalize__9(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <b-row>\n      <doctype-render\n        v-if="selectedDoctype"\n        style="width: 100%"\n        :fields="[]"\n        :doctypeInput="selectedDoctype"\n        :doc_ref="selectedReference"\n      />\n    </b-row>\n\n    <b-modal\n      :id="`${selectedReference}`"\n      ref="my-modal-1993"\n      size="xl"\n      :title="`${Patient}`"\n      ok-only\n    >\n      <b-row>{{ selectedDoctype }} {{ selectedReference }}</b-row>\n      <doctype-render\n        :fields="[]"\n        :doctypeInput="selectedDoctype"\n        :doc_ref="selectedReference"\n    /></b-modal>\n    <b-table small :fields="fields" :items="tableData" responsive="sm" bordered striped>\n      <template #cell()="data">\n        <div\n          style="width: 100%"\n          v-if="getDataType(data.field.key).fieldtype === \'Link\'"\n        >\n          <b-input-group class="mb-2">\n            <b-form-input\n              type="text"\n              v-model="data.value"\n              readonly\n            ></b-form-input>\n            <b-input-group-prepend\n              is-text\n              @click="\n                setCurrentDoctype(\n                  getDataType(data.field.key).options,\n                  data.value\n                )\n              "\n            >\n              <b-icon icon="link45deg"></b-icon>\n            </b-input-group-prepend>\n          </b-input-group>\n        </div>\n\n        <div style="width: 100%" v-else>\n          <b-form-input :type="\'text\'" v-model="data.value" readonly />\n        </div>\n       \n      </template>\n    </b-table>\n  </div>\n</template>\n\n<script>\nimport { getDoctypeWithMetaSlim } from "../../../services/doctype/meta";\nexport default {\n  name: "ChildTable",\n  props: {\n    doctype: { type: String },\n    tableData: { type: Array, default: [] },\n    fields: [],\n    selectedDoctype: null,\n    selectedReference: null,\n  },\n  methods: {\n    loadMetaData() {\n      const payload = { doctype: this.doctype };\n      getDoctypeWithMetaSlim(payload).then((data) => {\n        this.fields = data.meta.fields;\n      });\n    },\n    getDataType(key) {\n      return (\n        (this.fields || []).find((element) => element.fieldname === key) || {}\n      );\n    },\n    setCurrentDoctype(doctype, reference) {\n      this.selectedDoctype = doctype;\n      this.selectedReference = reference;\n       this.$router.push({ name: \'viewer\', params: { doctype,reference} })\n      // this.$refs["my-modal-1993"].show();\n    },\n  },\n  created() {\n    this.loadMetaData();\n  },\n \n};\n</script>\n\n<style scoped></style>\n';
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
  function __vue_create_injector__9() {
    const styles = __vue_create_injector__9.styles || (__vue_create_injector__9.styles = {});
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
  var __vue_component__9 = /* @__PURE__ */ __vue_normalize__9({render: __vue_render__9, staticRenderFns: __vue_staticRenderFns__9}, __vue_inject_styles__9, __vue_script__9, __vue_scope_id__9, __vue_is_functional_template__9, __vue_module_identifier__9, false, __vue_create_injector__9, void 0, void 0);
  var ChildTable_default2 = __vue_component__9;

  // ../frontend/frontend/public/js/patient/components/doctype/DocField.vue
  var __vue_script__10 = {
    components: {ChildTable: ChildTable_default2},
    name: "DocField",
    props: {
      docField: {type: Object, default: {}},
      doc: {type: Object, default: {}}
    },
    methods: {
      removeUnwanted(items) {
        const unWanted = [
          "name",
          "owner",
          "creation",
          "modified",
          "parent",
          "parentfield",
          "modified_by",
          "parenttype",
          "doctype",
          "docstatus",
          "idx"
        ];
        return items.map((item) => {
          unWanted.forEach((key) => {
            delete item[key];
          });
          return item;
        });
      },
      setCurrentDoctype(doctype, reference) {
        this.selectedDoctype = doctype;
        this.selectedReference = reference;
        if (reference && doctype) {
          this.$router.push({name: "viewer", params: {doctype, reference}});
        }
      }
    }
  };
  var __vue_render__10 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "mt-1", staticStyle: {width: "100%"}}, [
      _vm.docField.fieldname.startsWith("column_break") ? _c("br", {staticStyle: {width: "100%"}}) : _vm.docField.fieldtype === "Link" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label))
        ]),
        _vm._v(" "),
        _c("b-input-group", {staticClass: "mb-2"}, [
          _c("b-form-input", {
            attrs: {type: "text", readonly: ""},
            model: {
              value: _vm.doc[_vm.docField.fieldname],
              callback: function($$v) {
                _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
              },
              expression: "doc[docField.fieldname]"
            }
          }),
          _vm._v(" "),
          _c("b-input-group-prepend", {
            attrs: {"is-text": ""},
            on: {
              click: function($event) {
                return _vm.setCurrentDoctype(_vm.docField.options, _vm.doc[_vm.docField.fieldname]);
              }
            }
          }, [_c("b-icon", {attrs: {icon: "link45deg"}})], 1)
        ], 1)
      ], 1) : _vm.docField.fieldtype === "Table" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("child-table", {
          staticStyle: {width: "100%"},
          attrs: {
            tableData: _vm.removeUnwanted(_vm.doc[_vm.docField.fieldname]),
            doctype: _vm.docField.options
          }
        })
      ], 1) : _vm.docField.fieldtype === "Text" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label))
        ]),
        _vm._v(" "),
        _c("b-form-textarea", {
          attrs: {rows: "6", type: "text", readonly: ""},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _vm.docField.fieldtype === "Text Editor" ? _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label))
        ]),
        _vm._v(" "),
        _c("b-form-textarea", {
          attrs: {rows: "6", type: "text", readonly: ""},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1) : _c("div", {staticStyle: {width: "100%"}}, [
        _c("label", {attrs: {for: "input-live"}}, [
          _vm._v(_vm._s(_vm.docField.label))
        ]),
        _vm._v(" "),
        _c("b-form-input", {
          attrs: {type: "text", readonly: ""},
          model: {
            value: _vm.doc[_vm.docField.fieldname],
            callback: function($$v) {
              _vm.$set(_vm.doc, _vm.docField.fieldname, $$v);
            },
            expression: "doc[docField.fieldname]"
          }
        })
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__10 = [];
  __vue_render__10._withStripped = true;
  var __vue_inject_styles__10 = function(inject) {
    if (!inject)
      return;
    inject("data-v-3679bd5a_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "DocField.vue"}, media: void 0});
  };
  var __vue_scope_id__10 = void 0;
  var __vue_module_identifier__10 = void 0;
  var __vue_is_functional_template__10 = false;
  function __vue_normalize__10(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div style="width: 100%" class="mt-1">
    <br
      style="width: 100%"
      v-if="docField.fieldname.startsWith('column_break')"
    />

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Link'">
      <label for="input-live">{{ docField.label }}</label>
      <b-input-group class="mb-2">
        <b-form-input
          type="text"
          v-model="doc[docField.fieldname]"
          readonly
        ></b-form-input>
        <b-input-group-prepend is-text  @click="
                setCurrentDoctype(
                  docField.options,
                  doc[docField.fieldname]
                )
              ">
          <b-icon icon="link45deg"></b-icon>
        </b-input-group-prepend>
      </b-input-group>
    </div>

    <div style="width: 100%" v-else-if="docField.fieldtype === 'Table'">
      <child-table
        style="width: 100%"
        :tableData="removeUnwanted(doc[docField.fieldname])"
        :doctype="docField.options"
      ></child-table>
    </div>
    <div style="width: 100%" v-else-if="docField.fieldtype === 'Text'">
      <label for="input-live">{{ docField.label }}</label>
      <b-form-textarea
        rows="6"
        :type="'text'"
        readonly
        v-model="doc[docField.fieldname]"
      />
    </div>

      <div style="width: 100%" v-else-if="docField.fieldtype === 'Text Editor'">
      <label for="input-live">{{ docField.label }}</label>
      <b-form-textarea
        rows="6"
        :type="'text'"
        readonly
        v-model="doc[docField.fieldname]"
      />
    </div>

    <div style="width: 100%" v-else>
      <label for="input-live">{{ docField.label }}</label>
      <b-form-input :type="'text'" v-model="doc[docField.fieldname]" readonly />
    </div>
  </div>
</template>

<script>
import ChildTable from "./ChildTable.vue";
export default {
  components: { ChildTable },
  name: "DocField",
  props: {
    docField: { type: Object, default: {} },
    doc: { type: Object, default: {} },
  },
  methods: {
    removeUnwanted(items) {
      const unWanted = [
        "name",
        "owner",
        "creation",
        "modified",
        "parent",
        "parentfield",
        "modified_by",
        "parenttype",
        "doctype",
        "docstatus",
        "idx",
      ];
      return items.map((item) => {
        unWanted.forEach((key) => {
          delete item[key];
        });

        return item;
      });
    },
    setCurrentDoctype(doctype, reference) {
      this.selectedDoctype = doctype;
      this.selectedReference = reference;
      if (reference && doctype) {
        this.$router.push({ name: "viewer", params: { doctype, reference } });
      }

      // this.$refs["my-modal-1993"].show();
    },
  },
};
</script>

<style></style>
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
  function __vue_create_injector__10() {
    const styles = __vue_create_injector__10.styles || (__vue_create_injector__10.styles = {});
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
  var __vue_component__10 = /* @__PURE__ */ __vue_normalize__10({render: __vue_render__10, staticRenderFns: __vue_staticRenderFns__10}, __vue_inject_styles__10, __vue_script__10, __vue_scope_id__10, __vue_is_functional_template__10, __vue_module_identifier__10, false, __vue_create_injector__10, void 0, void 0);
  var DocField_default2 = __vue_component__10;

  // ../frontend/frontend/public/js/patient/components/doctype/DoctypeRender.vue
  var __vue_script__11 = {
    name: "DoctypeRender",
    data() {
      return {
        doctypeData: {},
        doctype: {},
        filterEmpty: false,
        sections: []
      };
    },
    components: {DocField: DocField_default2},
    mounted() {
      this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
        this.loadDoctype();
      });
      this.loadDoctype();
    },
    created() {
    },
    props: {
      doctypeInput: {type: String, default: ""},
      doc_ref: {type: String, default: ""},
      fields: {type: Array, default: []}
    },
    methods: {
      loadDoctype() {
        const payload = {doctype: this.doctypeInput, name: this.doc_ref};
        getDoctypeWithMeta(payload).then((data) => {
          this.doctypeData = data;
          this.fields = data.meta.fields;
          this.doctype = data.data;
          this.getSections(this.fields);
        });
      },
      getSections(fields) {
        this.sections = [];
        let currentSection = {fields: [], name: ""};
        fields.forEach((item) => {
          if (item.fieldtype !== "Section Break") {
            if (item.fieldname !== "naming_series") {
              currentSection.fields.push(item);
            }
          } else {
            this.sections.push(currentSection);
            currentSection = {fields: [], name: ""};
            currentSection.name = this.noSnake(item.fieldname);
            console.log(currentSection.name);
          }
        });
      },
      noSnake(stringItem) {
        if (!stringItem) {
          return "";
        }
        if (stringItem.startsWith("section_break")) {
          return null;
        }
        if (stringItem.startsWith("sb_")) {
          stringItem = stringItem.replace("_sb", "");
        }
        let noSnakeString = stringItem.replaceAll("_", " ");
        return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);
      },
      getWidth(field) {
        if (field) {
          if (field.fieldname.startsWith("column_break")) {
            return "12";
          }
          if (field.fieldtype === "Table") {
            return "12";
          }
        }
        return "6";
      }
    },
    watch: {
      $route(to, from) {
        this.loadDoctype();
      }
    }
  };
  var __vue_render__11 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "mx-auto"}, [
      _c("b-row", _vm._l(_vm.sections, function(section) {
        return _c("b-col", {key: section, staticClass: "mb-3", attrs: {cols: "12"}}, [
          section.fields.length > 0 ? _c("b-card", {attrs: {title: section.name}}, [
            _c("b-card-text", [
              _c("b-row", {staticClass: "mt-2"}, _vm._l(section.fields, function(field) {
                return _c("b-col", {
                  key: field,
                  attrs: {cols: _vm.getWidth(field)}
                }, [
                  _c("doc-field", {
                    attrs: {docField: field, doc: _vm.doctype}
                  })
                ], 1);
              }), 1)
            ], 1)
          ], 1) : _vm._e()
        ], 1);
      }), 1)
    ], 1);
  };
  var __vue_staticRenderFns__11 = [];
  __vue_render__11._withStripped = true;
  var __vue_inject_styles__11 = function(inject) {
    if (!inject)
      return;
    inject("data-v-f1092b96_0", {source: '\n.card[data-v-f1092b96] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/components/doctype/DoctypeRender.vue"], "names": [], "mappings": ";AA8GA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA", "file": "DoctypeRender.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card :title="section.name" v-if="section.fields.length > 0">\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field :docField="field" :doc="doctype" />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "../../../services/doctype/meta";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {},\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: "" },\n    fields: { type: Array, default: [] },\n  },\n  methods: {\n    loadDoctype() {\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        this.doctype = data.data;\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (item.fieldname !== "naming_series") {\n            currentSection.fields.push(item);\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          console.log(currentSection.name);\n        }\n      });\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n      if (stringItem.startsWith("section_break")) {   \n        return null;\n      }\n      if (stringItem.startsWith("sb_")) {   \n         stringItem = stringItem.replace("_sb","")\n      }\n\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__11 = "data-v-f1092b96";
  var __vue_module_identifier__11 = void 0;
  var __vue_is_functional_template__11 = false;
  function __vue_normalize__11(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card :title="section.name" v-if="section.fields.length > 0">\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field :docField="field" :doc="doctype" />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "../../../services/doctype/meta";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {},\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: "" },\n    fields: { type: Array, default: [] },\n  },\n  methods: {\n    loadDoctype() {\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        this.doctype = data.data;\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (item.fieldname !== "naming_series") {\n            currentSection.fields.push(item);\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          console.log(currentSection.name);\n        }\n      });\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n      if (stringItem.startsWith("section_break")) {   \n        return null;\n      }\n      if (stringItem.startsWith("sb_")) {   \n         stringItem = stringItem.replace("_sb","")\n      }\n\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n</style>\n';
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
  function __vue_create_injector__11() {
    const styles = __vue_create_injector__11.styles || (__vue_create_injector__11.styles = {});
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
  var __vue_component__11 = /* @__PURE__ */ __vue_normalize__11({render: __vue_render__11, staticRenderFns: __vue_staticRenderFns__11}, __vue_inject_styles__11, __vue_script__11, __vue_scope_id__11, __vue_is_functional_template__11, __vue_module_identifier__11, false, __vue_create_injector__11, void 0, void 0);
  var DoctypeRender_default2 = __vue_component__11;

  // ../frontend/frontend/public/js/forms/FillForm.vue
  var __vue_script__12 = {
    name: "FillForm",
    data() {
      return {
        selectedDoctype: null,
        configuration: null
      };
    },
    components: {
      FormRenderView: Frm_default,
      DoctypeRender: DoctypeRender_default2
    },
    props: {
      formName: {
        type: String,
        required: false,
        default: "Registration Form"
      },
      prePopulate: {type: Object, default: null},
      referencDoctype: {type: String, default: "Patient"},
      referencDoctypeItem: {type: String, default: ""},
      callbackUrl: {type: Object, required: false, default: null}
    },
    created() {
      if (this.formName) {
        this.selectedDoctype = this.formName;
      }
    },
    mounted() {
      this.makeSelectDoctypeControl();
    },
    watch: {
      selectedDoctype(val) {
        this.getForm(val);
      }
    },
    methods: {
      callback(value) {
        this.$emit("callback", value);
      },
      makeSelectDoctypeControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "reference",
            options: "Form Design",
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
      getForm(name) {
        getFormConfiguration({name}).then((config) => {
          const formStringConfig = config.formdata;
          const configObject = JSON.parse(formStringConfig);
          this.configuration = formStringConfig;
          console.log(configObject);
          this.formName = config.name;
          this.formData = configObject;
          this.originalConfig = configObject;
        });
      },
      goToRoute(doctype, reference) {
        this.$router.push({name: "viewer", params: {doctype, reference}});
      }
    }
  };
  var __vue_render__12 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", [
      !_vm.formName ? _c("b-row", {staticClass: "render-formx mr-0"}, [
        _c("b-col", {
          ref: "doctype",
          staticClass: "ref-field-input mr-0",
          attrs: {cols: 12}
        })
      ], 1) : _vm._e(),
      _vm._v(" "),
      _c("b-row", [
        _c("form-render-view", {
          attrs: {
            currentFormName: _vm.selectedDoctype,
            selectedDoctype: _vm.referencDoctype,
            prePopulate: _vm.prePopulate,
            selectedDoctypeReference: _vm.referencDoctypeItem
          },
          on: {callback: _vm.callback}
        })
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__12 = [];
  __vue_render__12._withStripped = true;
  var __vue_inject_styles__12 = function(inject) {
    if (!inject)
      return;
    inject("data-v-5133caa5_0", {source: "\n.render-formx[data-v-5133caa5] {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  width: 100% !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FillForm.vue"], "names": [], "mappings": ";AA8GA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;AACA", "file": "FillForm.vue", "sourcesContent": ['<template>\n  <b-container>\n    <b-row class="render-formx mr-0" v-if="!formName">\n      <b-col :cols="12" ref="doctype" class="ref-field-input mr-0" />\n    </b-row>\n    <b-row>\n    \n      <form-render-view\n        :currentFormName="selectedDoctype"\n        :selectedDoctype="referencDoctype"\n        :prePopulate="prePopulate"\n        :selectedDoctypeReference="referencDoctypeItem"\n        @callback="callback"\n      />\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getFormConfiguration } from "../services/forms/builder.js";\nimport FormRenderView from "./Frm.vue";\nimport DoctypeRender from "./../patient/components/doctype/DoctypeRender.vue";\n\nexport default {\n  name: "FillForm",\n  data() {\n    return {\n      selectedDoctype: null,\n      configuration: null,\n    };\n  },\n  components: {\n    FormRenderView,\n    DoctypeRender,\n  },\n  props: {\n    formName: {\n      type: String,\n      required: false,\n      default: "Registration Form",\n    },\n    prePopulate :{type:Object, default:null},\n    referencDoctype: { type: String, default: "Patient" },\n    referencDoctypeItem: { type: String, default: "" },\n    callbackUrl: { type: Object, required: false, default: null },\n  \n  },\n  created() {\n    if (this.formName) {\n      this.selectedDoctype = this.formName;\n    }\n  },\n\n  mounted() {\n    this.makeSelectDoctypeControl();\n  },\n  watch: {\n    selectedDoctype(val) {\n      // f()\n      this.getForm(val);\n    },\n  },\n\n  methods: {\n     callback(value) {\n      this.$emit("callback", value);\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "Form Design",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.configuration = formStringConfig;\n        console.log(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n    goToRoute(doctype, reference) {\n      this.$router.push({ name: "viewer", params: { doctype, reference } });\n    },\n  },\n};\n</script>\n\n<style scoped>\n.render-formx {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  width: 100% !important;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__12 = "data-v-5133caa5";
  var __vue_module_identifier__12 = void 0;
  var __vue_is_functional_template__12 = false;
  function __vue_normalize__12(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container>\n    <b-row class="render-formx mr-0" v-if="!formName">\n      <b-col :cols="12" ref="doctype" class="ref-field-input mr-0" />\n    </b-row>\n    <b-row>\n    \n      <form-render-view\n        :currentFormName="selectedDoctype"\n        :selectedDoctype="referencDoctype"\n        :prePopulate="prePopulate"\n        :selectedDoctypeReference="referencDoctypeItem"\n        @callback="callback"\n      />\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getFormConfiguration } from "../services/forms/builder.js";\nimport FormRenderView from "./Frm.vue";\nimport DoctypeRender from "./../patient/components/doctype/DoctypeRender.vue";\n\nexport default {\n  name: "FillForm",\n  data() {\n    return {\n      selectedDoctype: null,\n      configuration: null,\n    };\n  },\n  components: {\n    FormRenderView,\n    DoctypeRender,\n  },\n  props: {\n    formName: {\n      type: String,\n      required: false,\n      default: "Registration Form",\n    },\n    prePopulate :{type:Object, default:null},\n    referencDoctype: { type: String, default: "Patient" },\n    referencDoctypeItem: { type: String, default: "" },\n    callbackUrl: { type: Object, required: false, default: null },\n  \n  },\n  created() {\n    if (this.formName) {\n      this.selectedDoctype = this.formName;\n    }\n  },\n\n  mounted() {\n    this.makeSelectDoctypeControl();\n  },\n  watch: {\n    selectedDoctype(val) {\n      // f()\n      this.getForm(val);\n    },\n  },\n\n  methods: {\n     callback(value) {\n      this.$emit("callback", value);\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "Form Design",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.configuration = formStringConfig;\n        console.log(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n    goToRoute(doctype, reference) {\n      this.$router.push({ name: "viewer", params: { doctype, reference } });\n    },\n  },\n};\n</script>\n\n<style scoped>\n.render-formx {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  width: 100% !important;\n}\n</style>\n';
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
  function __vue_create_injector__12() {
    const styles = __vue_create_injector__12.styles || (__vue_create_injector__12.styles = {});
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
  var __vue_component__12 = /* @__PURE__ */ __vue_normalize__12({render: __vue_render__12, staticRenderFns: __vue_staticRenderFns__12}, __vue_inject_styles__12, __vue_script__12, __vue_scope_id__12, __vue_is_functional_template__12, __vue_module_identifier__12, false, __vue_create_injector__12, void 0, void 0);
  var FillForm_default = __vue_component__12;

  // ../frontend/frontend/public/js/records/Main.vue
  var __vue_script__13 = {
    name: "Main",
    data: function() {
      return {
        title: "Records",
        selectedPatient: {},
        encounter: {},
        medicationOrder: {},
        unSubmittedProcedures: [],
        sideBarNormalSize: [12, 3, 3],
        wordkingAreaNormalSize: [12, 9, 9],
        fullScreenWorkArea: false,
        apiList: [],
        socket: null
      };
    },
    methods: {
      toggleWorkingAreaSpace(value) {
        this.fullScreenWorkArea = value;
      },
      maximize() {
        this.sideBarNormalSize = [12, 1, 1];
        this.wordkingAreaNormalSize = [12, 11, 11];
      },
      minimize() {
        this.sideBarNormalSize = [12, 3, 3];
        this.wordkingAreaNormalSize = [12, 9, 9];
      }
    },
    watch: {
      fullScreenWorkArea(fullWorkSpace) {
        if (fullWorkSpace) {
          this.maximize();
        } else {
          this.minimize();
        }
      }
    },
    created() {
    },
    computed: {},
    components: {
      SideBar: Sidebar_default,
      WorkingArea: WorkingArea_default,
      TopHeader: TopHeader_default,
      DoctypeRender: DoctypeRender_default,
      FillForm: FillForm_default
    }
  };
  var __vue_render__13 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-container watu", attrs: {fluid: ""}}, [
      _c("b-row", [_c("top-header", {staticStyle: {width: "100%"}})], 1),
      _vm._v(" "),
      _c("b-row", {staticStyle: {background: "rgb(244, 245, 246)"}}, [
        _c("b-col", {
          staticClass: "no-left-padding no-right-padding hidden-sm-down",
          attrs: {
            sm: _vm.sideBarNormalSize[0],
            md: _vm.sideBarNormalSize[1],
            lg: _vm.sideBarNormalSize[2]
          }
        }, [_c("side-bar", {staticClass: "side-bar"})], 1),
        _vm._v(" "),
        _c("b-col", {
          staticClass: "no-left-padding",
          attrs: {
            sm: _vm.wordkingAreaNormalSize[0],
            md: _vm.wordkingAreaNormalSize[1],
            lg: _vm.wordkingAreaNormalSize[2]
          }
        }, [_c("router-view", {staticClass: "working-area"})], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__13 = [];
  __vue_render__13._withStripped = true;
  var __vue_inject_styles__13 = function(inject) {
    if (!inject)
      return;
    inject("data-v-4e769a66_0", {source: '\n@media only screen and (min-width: 767px) {\n.watu {\n        overflow: hidden !important;\n}\n}\n.main-container {\n  height: 100vh;\n  overflow-x: hidden;\n  /* font-family: "Nunito", sans-serif; */\n  /* font-size: smaller; */\n}\n.top-menu {\n  background: white;\n  padding: 20px;\n}\n.no-left-padding {\n  padding-left: 0px !important;\n}\n.side-bar {\n  background: rgba(0, 0, 0, 0.03);\n  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2); */\n  border-right: 1px solid lightgray;\n  transition: 0.3s;\n}\n.working-area {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: calc(100vh - 80px);\n  width: 100%;\n  scrollbar-width: thin; /* "auto" or "thin" */\n  scrollbar-color: lightgray transparent;\n}\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.layout-main {\n  height: calc(100vh - 60px);\n}\n.layout-main-section-wrapper {\n  margin-bottom: 0px !important;\n}\ndiv::-webkit-scrollbar {\n  width: 0px; /* width of the entire scrollbar */\n}\ndiv::-webkit-scrollbar-track {\n  background: transparent; /* color of the tracking area */\n}\ndiv::-webkit-scrollbar-thumb {\n  background-color: grey; /* color of\u220F the scroll thumb */\n  border-radius: 20px; /* roundness of the scroll thumb */\n  border: 0px solid orange; /* creates padding around scroll thumb */\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/records/Main.vue"], "names": [], "mappings": ";AA6FA;AACA;QACA,2BAAA;AAEA;AACA;AACA;EACA,aAAA;EACA,kBAAA;EACA,uCAAA;EACA,wBAAA;AACA;AAEA;EACA,iBAAA;EACA,aAAA;AACA;AACA;EACA,4BAAA;AACA;AAEA;EACA,+BAAA;EACA,gDAAA;EACA,iCAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;EACA,kBAAA;EACA,0BAAA;EACA,WAAA;EACA,qBAAA,EAAA,qBAAA;EACA,sCAAA;AACA;AAEA;EACA,0CAAA;EACA,gBAAA;AACA;AAEA;EACA,2CAAA;AACA;AAEA;EACA,0BAAA;AACA;AACA;EACA,6BAAA;AACA;AAEA;EACA,UAAA,EAAA,kCAAA;AACA;AAEA;EACA,uBAAA,EAAA,+BAAA;AACA;AAEA;EACA,sBAAA,EAAA,+BAAA;EACA,mBAAA,EAAA,kCAAA;EACA,wBAAA,EAAA,wCAAA;AACA", "file": "Main.vue", "sourcesContent": [`
<template>
  <b-container class="main-container watu" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row style="background: rgb(244, 245, 246);">
      <b-col
        :sm="sideBarNormalSize[0]"
        :md="sideBarNormalSize[1]"
        :lg="sideBarNormalSize[2]"
        class="no-left-padding no-right-padding hidden-sm-down"
      >
        <side-bar class="side-bar"/>
          
      </b-col>
      <b-col
        :sm="wordkingAreaNormalSize[0]"
        class="no-left-padding"
        :md="wordkingAreaNormalSize[1]"
        :lg="wordkingAreaNormalSize[2]"
      >
         <router-view class="working-area" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SideBar from "./core/Sidebar.vue";
import WorkingArea from "./core/WorkingArea.vue";
import TopHeader from './core/TopHeader.vue';
import DoctypeRender from '../html/doctype/DoctypeRender.vue';
import FillForm from '../forms/FillForm.vue';
export default {
  name: "Main",
  data: function () {
    return {
      title: "Records",
      selectedPatient: {},
      encounter: {},
      medicationOrder: {},
      unSubmittedProcedures: [],
      sideBarNormalSize: [12, 3, 3],
      wordkingAreaNormalSize: [12, 9, 9],
      fullScreenWorkArea: false,
      apiList: [],
      socket: null,
    };
  },

  methods: {
    toggleWorkingAreaSpace(value) {
      this.fullScreenWorkArea = value;
    },
    maximize() {
      this.sideBarNormalSize = [12, 1, 1];
      this.wordkingAreaNormalSize = [12, 11, 11];
    },
    minimize() {
      this.sideBarNormalSize = [12, 3, 3];
      this.wordkingAreaNormalSize = [12, 9, 9];
    },
  },

  watch: {
    fullScreenWorkArea(fullWorkSpace) {
      if (fullWorkSpace) {
        this.maximize();
      } else {
        this.minimize();
      }
    },

    // $route() {
    //   frappe.router.current_route = frappe.router.parse();
    //   frappe.breadcrumbs.update();
    // },
  },
  created() {
  
  },
  computed: {},
  components: {
    SideBar,
    WorkingArea,
    TopHeader,
    DoctypeRender,
    FillForm,
  },
};
</script>
<style>

@media only screen and (min-width: 767px) {
    .watu {
        overflow: hidden !important;

    }
}
.main-container {
  height: 100vh;
  overflow-x: hidden;
  /* font-family: "Nunito", sans-serif; */
  /* font-size: smaller; */
}

.top-menu {
  background: white;
  padding: 20px;
}
.no-left-padding {
  padding-left: 0px !important;
}

.side-bar {
  background: rgba(0, 0, 0, 0.03);
  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2); */
  border-right: 1px solid lightgray;
  transition: 0.3s;
}
.working-area {
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 80px);
  width: 100%;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: lightgray transparent;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.layout-main {
  height: calc(100vh - 60px);
}
.layout-main-section-wrapper {
  margin-bottom: 0px !important;
}

div::-webkit-scrollbar {
  width: 0px; /* width of the entire scrollbar */
}

div::-webkit-scrollbar-track {
  background: transparent; /* color of the tracking area */
}

div::-webkit-scrollbar-thumb {
  background-color: grey; /* color of\u220F the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 0px solid orange; /* creates padding around scroll thumb */
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__13 = void 0;
  var __vue_module_identifier__13 = void 0;
  var __vue_is_functional_template__13 = false;
  function __vue_normalize__13(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `
<template>
  <b-container class="main-container watu" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row style="background: rgb(244, 245, 246);">
      <b-col
        :sm="sideBarNormalSize[0]"
        :md="sideBarNormalSize[1]"
        :lg="sideBarNormalSize[2]"
        class="no-left-padding no-right-padding hidden-sm-down"
      >
        <side-bar class="side-bar"/>
          
      </b-col>
      <b-col
        :sm="wordkingAreaNormalSize[0]"
        class="no-left-padding"
        :md="wordkingAreaNormalSize[1]"
        :lg="wordkingAreaNormalSize[2]"
      >
         <router-view class="working-area" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SideBar from "./core/Sidebar.vue";
import WorkingArea from "./core/WorkingArea.vue";
import TopHeader from './core/TopHeader.vue';
import DoctypeRender from '../html/doctype/DoctypeRender.vue';
import FillForm from '../forms/FillForm.vue';
export default {
  name: "Main",
  data: function () {
    return {
      title: "Records",
      selectedPatient: {},
      encounter: {},
      medicationOrder: {},
      unSubmittedProcedures: [],
      sideBarNormalSize: [12, 3, 3],
      wordkingAreaNormalSize: [12, 9, 9],
      fullScreenWorkArea: false,
      apiList: [],
      socket: null,
    };
  },

  methods: {
    toggleWorkingAreaSpace(value) {
      this.fullScreenWorkArea = value;
    },
    maximize() {
      this.sideBarNormalSize = [12, 1, 1];
      this.wordkingAreaNormalSize = [12, 11, 11];
    },
    minimize() {
      this.sideBarNormalSize = [12, 3, 3];
      this.wordkingAreaNormalSize = [12, 9, 9];
    },
  },

  watch: {
    fullScreenWorkArea(fullWorkSpace) {
      if (fullWorkSpace) {
        this.maximize();
      } else {
        this.minimize();
      }
    },

    // $route() {
    //   frappe.router.current_route = frappe.router.parse();
    //   frappe.breadcrumbs.update();
    // },
  },
  created() {
  
  },
  computed: {},
  components: {
    SideBar,
    WorkingArea,
    TopHeader,
    DoctypeRender,
    FillForm,
  },
};
</script>
<style>

@media only screen and (min-width: 767px) {
    .watu {
        overflow: hidden !important;

    }
}
.main-container {
  height: 100vh;
  overflow-x: hidden;
  /* font-family: "Nunito", sans-serif; */
  /* font-size: smaller; */
}

.top-menu {
  background: white;
  padding: 20px;
}
.no-left-padding {
  padding-left: 0px !important;
}

.side-bar {
  background: rgba(0, 0, 0, 0.03);
  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2); */
  border-right: 1px solid lightgray;
  transition: 0.3s;
}
.working-area {
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 80px);
  width: 100%;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: lightgray transparent;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.layout-main {
  height: calc(100vh - 60px);
}
.layout-main-section-wrapper {
  margin-bottom: 0px !important;
}

div::-webkit-scrollbar {
  width: 0px; /* width of the entire scrollbar */
}

div::-webkit-scrollbar-track {
  background: transparent; /* color of the tracking area */
}

div::-webkit-scrollbar-thumb {
  background-color: grey; /* color of\u220F the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 0px solid orange; /* creates padding around scroll thumb */
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
  function __vue_create_injector__13() {
    const styles = __vue_create_injector__13.styles || (__vue_create_injector__13.styles = {});
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
  var __vue_component__13 = /* @__PURE__ */ __vue_normalize__13({render: __vue_render__13, staticRenderFns: __vue_staticRenderFns__13}, __vue_inject_styles__13, __vue_script__13, __vue_scope_id__13, __vue_is_functional_template__13, __vue_module_identifier__13, false, __vue_create_injector__13, void 0, void 0);
  var Main_default = __vue_component__13;

  // ../frontend/frontend/public/js/records/records.bundle.js
  var import_vue_select = __toModule(require_vue_select());

  // ../frontend/frontend/public/js/services/patient_chart/api.js
  var api4 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatientsPerServiceUnit = ({
    serviceUnit: service_unit,
    servicePoint: service_point,
    search = "",
    traverse = ""
  }) => api4({
    method: "clinical.api.patients.get_patients_per_service_unit",
    args: {
      service_unit,
      service_point,
      search,
      traverse
    },
    freeze: false
  });
  var getMyServiceUnits = () => api4({
    method: "clinical.clinical.doctype.user_service_unit.user_service_unit.get_user_service_unit"
  });
  var getMyServicePoints = (service_unit) => api4({
    method: "clinical.clinical.doctype.service_point.service_point.get_unit_service_points",
    args: {
      service_unit
    }
  });
  var getMyLocation = () => api4({
    method: "clinical.api.queue_management.queue_logistics.get_my_location",
    args: {}
  });
  var getPatientUnboundedMedicationOrder = (payload) => api4({
    method: "clinical.api.inpatient_drug_administration.inpatient_drug_administration.fetch_medication_order",
    args: {
      entry: payload
    }
  });
  var createMedicationEntry = ({order, ward}) => api4({
    method: "clinical.api.inpatient_drug_administration.medication_entry.create_medication_entry",
    args: {
      order,
      ward
    }
  });
  var validatePFNumber = (number) => api4({
    method: "clinical.api.inpatient_drug_administration.medication_entry.validate_employee",
    freeze: false,
    args: {
      number: number.trim()
    }
  });
  var transferPatient = (args) => api4({
    method: "clinical.api.patients.transfer_inpatient",
    args
  });
  var bulkRescheduleAppointments = (args) => {
    return api4({
      method: "clinical.api.appointment.appointment.reschedule_appointments",
      args
    });
  };

  // ../frontend/frontend/public/js/patient/components/ServiceUnitSelect.vue
  var __vue_script__14 = {
    name: "ServiceUnitSelect",
    watch: {},
    methods: {
      setServiceUnit(unit) {
        this.$store.dispatch("serviceUnit/setSelectedServiceUnit", unit);
        this.$emit("service-unit", unit.service_unit);
        this.getServicePoints(unit);
      },
      getServiceUnits() {
        this.$store.dispatch("serviceUnit/fetchMyServiceUnits");
      },
      getServicePoints(unit) {
        this.$store.dispatch("servicePoint/fetchMyServicePoints", unit);
      }
    },
    created() {
      this.getServiceUnits();
    },
    computed: {
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"] || this.serviceUnits.length && this.serviceUnits[0];
      },
      serviceUnits() {
        return this.$store.getters["serviceUnit/getServiceUnits"];
      },
      servicePoints() {
        return this.$store.getters["servicePoints/getServicePoints"];
      }
    },
    components: {}
  };
  var __vue_render__14 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "ward-selection", attrs: {fluid: ""}}, [
      _c("b-row", {staticClass: "no-background"}, [
        _c("b-col", {staticClass: "no-background", attrs: {cols: "12"}}, [
          _c("b-dropdown", {
            staticClass: "fill-width custom-menu-bg",
            attrs: {
              text: _vm.selectedServiceUnit.service_unit || "Select a service unit",
              variant: "secondary",
              split: "",
              "split-variant": "outline-secondary"
            }
          }, _vm._l(_vm.serviceUnits, function(unit) {
            return _c("b-dropdown-item", {
              key: unit.name,
              on: {
                click: function($event) {
                  return _vm.setServiceUnit(unit);
                }
              }
            }, [_vm._v(_vm._s(unit.service_unit))]);
          }), 1)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__14 = [];
  __vue_render__14._withStripped = true;
  var __vue_inject_styles__14 = function(inject) {
    if (!inject)
      return;
    inject("data-v-ce674396_0", {source: "\n.fill-width {\n  width: 100% !important;\n}\n.firt-text {\n  font-size: large;\n}\n.side-bar-area {\n  background: green;\n}\n.cust-nav {\n  box-shadow: 0px 0px !important;\n  padding: 0px !important;\n}\n.ward-selection {\n  background: rgba(76, 175, 80, 0);\n  padding: auto;\n}\n.unit-title {\n  font-weight: 700;\n  color: dimgray;\n  margin-bottom: 0px !important;\n}\n.no-background {\n  background: rgba(76, 175, 80, 0);\n}\n.custom-menu-bg {\n  background: white;\n  border-radius: 7px;\n  border: 0px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/components/ServiceUnitSelect.vue"], "names": [], "mappings": ";AA2DA;EACA,sBAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,8BAAA;EACA,uBAAA;AACA;AAEA;EACA,gCAAA;EACA,aAAA;AACA;AAEA;EACA,gBAAA;EACA,cAAA;EACA,6BAAA;AACA;AAEA;EACA,gCAAA;AACA;AACA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AACA", "file": "ServiceUnitSelect.vue", "sourcesContent": [`<template>
  <b-container class="ward-selection" fluid>
    <b-row class="no-background">
      <b-col cols="12" class="no-background">
        <b-dropdown
          :text="selectedServiceUnit.service_unit || 'Select a service unit'"
          variant="secondary"
          split
          split-variant="outline-secondary"
          class="fill-width custom-menu-bg"
        >
          <b-dropdown-item
            v-for="unit in serviceUnits"
            :key="unit.name"
            @click="setServiceUnit(unit)"
            >{{ unit.service_unit }}</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

export default {
  name: "ServiceUnitSelect",
  watch: {},
  methods: {
    setServiceUnit(unit) {
      this.$store.dispatch("serviceUnit/setSelectedServiceUnit", unit);
      this.$emit('service-unit', unit.service_unit)
      this.getServicePoints(unit)
    },
    getServiceUnits() {
      this.$store.dispatch("serviceUnit/fetchMyServiceUnits");
    },
    getServicePoints(unit) {
            this.$store.dispatch("servicePoint/fetchMyServicePoints", unit);
        }
  },
  created() {
    this.getServiceUnits();
  },
  computed: {
    selectedServiceUnit(){
      return this.$store.getters['serviceUnit/getSelectedServiceUnit'] || (this.serviceUnits.length && this.serviceUnits[0])
    },
    serviceUnits(){
      return this.$store.getters['serviceUnit/getServiceUnits']
    },
    servicePoints(){
          return this.$store.getters['servicePoints/getServicePoints']
        }
  },
     
  components: {},
};
</script>
<style>
.fill-width {
  width: 100% !important;
}
.firt-text {
  font-size: large;
}
.side-bar-area {
  background: green;
}
.cust-nav {
  box-shadow: 0px 0px !important;
  padding: 0px !important;
}

.ward-selection {
  background: rgba(76, 175, 80, 0);
  padding: auto;
}

.unit-title {
  font-weight: 700;
  color: dimgray;
  margin-bottom: 0px !important;
}

.no-background {
  background: rgba(76, 175, 80, 0);
}
.custom-menu-bg {
  background: white;
  border-radius: 7px;
  border: 0px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__14 = void 0;
  var __vue_module_identifier__14 = void 0;
  var __vue_is_functional_template__14 = false;
  function __vue_normalize__14(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="ward-selection" fluid>
    <b-row class="no-background">
      <b-col cols="12" class="no-background">
        <b-dropdown
          :text="selectedServiceUnit.service_unit || 'Select a service unit'"
          variant="secondary"
          split
          split-variant="outline-secondary"
          class="fill-width custom-menu-bg"
        >
          <b-dropdown-item
            v-for="unit in serviceUnits"
            :key="unit.name"
            @click="setServiceUnit(unit)"
            >{{ unit.service_unit }}</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

export default {
  name: "ServiceUnitSelect",
  watch: {},
  methods: {
    setServiceUnit(unit) {
      this.$store.dispatch("serviceUnit/setSelectedServiceUnit", unit);
      this.$emit('service-unit', unit.service_unit)
      this.getServicePoints(unit)
    },
    getServiceUnits() {
      this.$store.dispatch("serviceUnit/fetchMyServiceUnits");
    },
    getServicePoints(unit) {
            this.$store.dispatch("servicePoint/fetchMyServicePoints", unit);
        }
  },
  created() {
    this.getServiceUnits();
  },
  computed: {
    selectedServiceUnit(){
      return this.$store.getters['serviceUnit/getSelectedServiceUnit'] || (this.serviceUnits.length && this.serviceUnits[0])
    },
    serviceUnits(){
      return this.$store.getters['serviceUnit/getServiceUnits']
    },
    servicePoints(){
          return this.$store.getters['servicePoints/getServicePoints']
        }
  },
     
  components: {},
};
</script>
<style>
.fill-width {
  width: 100% !important;
}
.firt-text {
  font-size: large;
}
.side-bar-area {
  background: green;
}
.cust-nav {
  box-shadow: 0px 0px !important;
  padding: 0px !important;
}

.ward-selection {
  background: rgba(76, 175, 80, 0);
  padding: auto;
}

.unit-title {
  font-weight: 700;
  color: dimgray;
  margin-bottom: 0px !important;
}

.no-background {
  background: rgba(76, 175, 80, 0);
}
.custom-menu-bg {
  background: white;
  border-radius: 7px;
  border: 0px;
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
  function __vue_create_injector__14() {
    const styles = __vue_create_injector__14.styles || (__vue_create_injector__14.styles = {});
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
  var __vue_component__14 = /* @__PURE__ */ __vue_normalize__14({render: __vue_render__14, staticRenderFns: __vue_staticRenderFns__14}, __vue_inject_styles__14, __vue_script__14, __vue_scope_id__14, __vue_is_functional_template__14, __vue_module_identifier__14, false, __vue_create_injector__14, void 0, void 0);
  var ServiceUnitSelect_default = __vue_component__14;

  // ../frontend/frontend/public/js/services/forms/view.js
  var api5 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var getFormList = (patient) => api5({
    method: "clinical.api.forms.forms_viewer.get_all_forms_types_per_patient",
    args: {
      patient_name: patient
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/records/components/ListComponent.vue
  var __vue_script__15 = {
    name: "ListComponent",
    props: {
      fields: {type: Array, default: ["name"]},
      doctype: {type: String, default: null},
      filters: {type: Object, default: {}},
      checkActionText: {type: String, default: ""},
      showCheckBox: {type: Boolean, default: false},
      filterInputs: {type: Array, default: []},
      isAppointment: {type: Boolean, default: false}
    },
    data() {
      return {
        items: [],
        selected: {},
        selectAll: false,
        payload: {
          doctype: this.doctype,
          filters: {},
          fields: ["*"],
          order_by: "creation desc",
          page: 1,
          start: 1,
          limit: 20
        },
        options: [10, 20, 30, 50, 100, 200],
        pages: []
      };
    },
    watch: {
      "payload.page": function(page) {
        this.loadLists();
      },
      "payload.limit": function(page) {
        this.loadLists();
      },
      "payload.filters": function(page) {
        this.loadLists();
      },
      selectAll() {
        if (this.selectAll) {
          const selected = {};
          this.items.forEach(({name}) => {
            selected[name] = true;
          });
          this.selected = selected;
        } else {
          this.selected = {};
        }
      }
    },
    methods: {
      loadLists() {
        const payload = this.payload;
        payload.start = payload.page - 1;
        payload.filters = this.filters || this.payload.filters;
        getList(payload).then((data) => {
          this.items = this.mapper(data);
        });
      },
      linkGen(pageNum) {
        return pageNum === 1 ? "?" : `?page=${pageNum}`;
      },
      setCurrentDoctype(doctype, reference) {
        if (reference && doctype) {
          if (doctype == "Patient") {
            this.$router.push({name: "patient-view-actions", params: {id: reference}});
          } else {
            this.$router.push({
              name: "records-viewer",
              params: {doctype, reference}
            });
          }
        }
      },
      onClickSelected() {
        const selected = Object.keys(this.selected).filter((key) => Boolean(this.selected[key]));
        this.$emit("selected-action", selected);
      },
      onReschedule() {
        const me = this;
        const dialog = new frappe.ui.Dialog({
          title: `Reschedule Appointments`,
          fields: [
            {
              label: "Select date to block",
              fieldname: "date",
              default: this.payload.filters.appointment_date,
              fieldtype: "Date"
            },
            {
              label: "Select Service Unit",
              fieldname: "service_unit",
              fieldtype: "Link",
              reqd: 1,
              default: this.payload.filters.service_unit,
              options: "Healthcare Service Unit"
            }
          ],
          primary_action_label: "Reschedule",
          primary_action(values) {
            bulkRescheduleAppointments({...values}).then(() => {
              dialog.hide();
              me.loadLists();
            });
          }
        });
        dialog.show();
      },
      mapper(data) {
        if (this.doctype === "Form Repository") {
          let objectDataArray = [];
          objectDataArray = data.map((item) => {
            let value = {
              creation: item.creation,
              ref: item.reference_doctype,
              refId: item.reference_doctype_id
            };
            let jsObject = JSON.parse(item.form_content);
            if (jsObject) {
              let keys2 = Object.keys(jsObject);
              keys2.forEach((key) => {
                let currentKey = key.split("-")[1];
                let currentValue = jsObject[key];
                value[currentKey] = currentValue;
              });
            }
            value.name = item.name;
            return value;
          });
          this.fields = null;
          return objectDataArray;
        }
        return data;
      },
      makeSelectDoctypeControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "reference",
            options: me.doctype,
            placeholder: __(` Search ${me.doctype}`),
            onchange: function() {
              if (this.value) {
                me.setCurrentDoctype(me.doctype, this.value);
              }
            }
          },
          parent: this.$refs["doctype"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      makeSelectPractitionerControl() {
        let me = this;
        const setter = (filters) => {
          this.payload.filters = filters;
        };
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "practitioner",
            options: "Healthcare Practitioner",
            placeholder: __(` Search Practitioner`),
            onchange: function() {
              me.$emit("practitionerChange", this.value);
              setter({...me.payload.filters, practitioner: this.value});
            }
          },
          parent: this.$refs["practitioner"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      makeServiceUnitControl() {
        let me = this;
        const setter = (filters) => {
          this.payload.filters = filters;
        };
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Reference"),
            fieldtype: "Link",
            fieldname: "service_unit",
            options: "Healthcare Service Unit",
            placeholder: __(` Search Service unit`),
            onchange: function() {
              me.$emit("serviceUnitChange", this.value);
              setter({...me.payload.filters, service_unit: this.value});
            }
          },
          parent: this.$refs["service-unit"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      onRowSelected(rowItems) {
        this.$emit("selected", rowItems);
      },
      onDateChange({selectedYMD: date}) {
        if (date) {
          this.payload.filters = {
            ...this.payload.filters,
            appointment_date: date
          };
        }
      }
    },
    created() {
      for (let index = 0; index < 20; index++) {
        this.pages.push(index + 1);
      }
      this.loadLists();
    },
    mounted() {
      this.makeSelectDoctypeControl();
      const filterNames = this.filterInputs;
      if (filterNames.includes("practitioner")) {
        this.makeSelectPractitionerControl();
      }
      if (filterNames.includes("service_unit")) {
        this.makeServiceUnitControl();
      }
    }
  };
  var __vue_render__15 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticStyle: {width: "100%"}}, [
      _c("div", {staticStyle: {width: "100%"}}, [
        _c("div", {ref: "doctype", staticClass: "ref-field-input"})
      ]),
      _vm._v(" "),
      _c("b-row", {staticClass: "mx-auto mt-1"}, [
        _c("b-card", {staticClass: "mx-auto", staticStyle: {width: "100%"}}, [
          _c("div", {staticClass: "mx-auto", staticStyle: {width: "100%"}}, [
            _c("b-row", {
              staticClass: "mx-auto mb-2",
              staticStyle: {width: "100%"}
            }, [
              _c("b-col", {staticClass: "pull-right"}, [
                _c("b-row", {
                  staticStyle: {
                    "margin-top": "16px",
                    display: "flex",
                    width: "100%",
                    "flex-wrap": "wrap"
                  }
                }, [
                  _c("b-form-select", {
                    staticStyle: {"max-width": "200px"},
                    attrs: {options: _vm.pages},
                    model: {
                      value: _vm.payload.page,
                      callback: function($$v) {
                        _vm.$set(_vm.payload, "page", $$v);
                      },
                      expression: "payload.page"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticStyle: {
                      "margin-left": "15px",
                      display: "flex"
                    }
                  }, [
                    _c("div", {
                      ref: "practitioner",
                      staticClass: "ref-field-input"
                    }),
                    _vm._v(" "),
                    _vm.filterInputs.includes("date") ? _c("b-form-datepicker", {
                      staticStyle: {
                        "margin-left": "15px",
                        height: "32px",
                        width: "200px"
                      },
                      attrs: {size: "sm", locale: "en-US"},
                      on: {context: _vm.onDateChange}
                    }) : _vm._e(),
                    _vm._v(" "),
                    _c("div", {
                      ref: "service-unit",
                      staticClass: "ref-field-input",
                      staticStyle: {
                        "margin-left": "15px",
                        height: "32px"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticStyle: {
                        flex: "1",
                        "margin-left": "8px"
                      }
                    }, [
                      _vm.isAppointment ? _c("b-button", {
                        staticStyle: {
                          width: "100%",
                          flex: "1"
                        },
                        attrs: {variant: "success"},
                        on: {click: _vm.onReschedule}
                      }, [
                        _vm._v("Reschedule and Block date")
                      ]) : _vm._e()
                    ], 1)
                  ], 1)
                ], 1),
                _vm._v(" "),
                _c("b-row", {
                  staticStyle: {
                    "margin-top": "16px",
                    display: "flex",
                    width: "100%",
                    "flex-wrap": "wrap"
                  }
                }, [
                  _vm.showCheckBox ? _c("div", {staticStyle: {"margin-right": "15px"}}, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectAll,
                          expression: "selectAll"
                        }
                      ],
                      attrs: {type: "checkbox"},
                      domProps: {
                        checked: Array.isArray(_vm.selectAll) ? _vm._i(_vm.selectAll, null) > -1 : _vm.selectAll
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.selectAll, $$el = $event.target, $$c = $$el.checked ? true : false;
                          if (Array.isArray($$a)) {
                            var $$v = null, $$i = _vm._i($$a, $$v);
                            if ($$el.checked) {
                              $$i < 0 && (_vm.selectAll = $$a.concat([
                                $$v
                              ]));
                            } else {
                              $$i > -1 && (_vm.selectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                            }
                          } else {
                            _vm.selectAll = $$c;
                          }
                        }
                      }
                    }),
                    _vm._v("\n                Select All\n              ")
                  ]) : _vm._e()
                ])
              ], 1)
            ], 1),
            _vm._v(" "),
            _c("b-row"),
            _vm._v(" "),
            _c("b-table", {
              ref: "selectableTable",
              staticStyle: {width: "100%"},
              attrs: {
                "empty-text": "No items to show",
                "empty-filtered-text": "No items to show",
                "show-empty": true,
                items: _vm.items,
                fields: _vm.fields,
                striped: "",
                outlined: "",
                bordered: "",
                small: "",
                "head-row-variant": "secondary",
                "sticky-header": "62vh",
                responsive: "",
                selectable: "",
                "select-mode": "single"
              },
              on: {"row-selected": _vm.onRowSelected},
              scopedSlots: _vm._u([
                _vm.showCheckBox ? {
                  key: "cell(selected)",
                  fn: function(row) {
                    return [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selected[row.item.name],
                            expression: "selected[row.item.name]"
                          }
                        ],
                        attrs: {type: "checkbox"},
                        domProps: {
                          checked: Array.isArray(_vm.selected[row.item.name]) ? _vm._i(_vm.selected[row.item.name], null) > -1 : _vm.selected[row.item.name]
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.selected[row.item.name], $$el = $event.target, $$c = $$el.checked ? true : false;
                            if (Array.isArray($$a)) {
                              var $$v = null, $$i = _vm._i($$a, $$v);
                              if ($$el.checked) {
                                $$i < 0 && _vm.$set(_vm.selected, row.item.name, $$a.concat([$$v]));
                              } else {
                                $$i > -1 && _vm.$set(_vm.selected, row.item.name, $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                              }
                            } else {
                              _vm.$set(_vm.selected, row.item.name, $$c);
                            }
                          }
                        }
                      })
                    ];
                  }
                } : null
              ], null, true)
            }),
            _vm._v(" "),
            _vm.showCheckBox && Object.keys(_vm.selected).filter(function(key) {
              return Boolean(_vm.selected[key]);
            }).length > 0 ? _c("b-button", {
              attrs: {variant: "success"},
              on: {click: _vm.onClickSelected}
            }, [_vm._v(_vm._s(_vm.checkActionText))]) : _vm._e()
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        false ? _c("b-pagination-nav", {
          attrs: {
            "link-gen": _vm.linkGen,
            "number-of-pages": 10,
            "use-router": ""
          }
        }) : _vm._e()
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__15 = [];
  __vue_render__15._withStripped = true;
  var __vue_inject_styles__15 = function(inject) {
    if (!inject)
      return;
    inject("data-v-4ee3129c_0", {source: "\n.card[data-v-4ee3129c] {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n.b-table[data-v-4ee3129c] {\n  margin: 0px !important;\n}\n.table-responsive > .table-bordered[data-v-4ee3129c] {\n  border: 0;\n  margin: 0px !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/records/components/ListComponent.vue"], "names": [], "mappings": ";AAwWA;EACA,0CAAA;EACA,kBAAA;AACA;AACA;EACA,sBAAA;AACA;AAEA;EACA,SAAA;EACA,sBAAA;AACA", "file": "ListComponent.vue", "sourcesContent": ['<template>\n  <b-container style="width: 100%">\n    <div style="width: 100%"><div ref="doctype" class="ref-field-input" /></div>\n    <b-row class="mx-auto mt-1">\n      <b-card class="mx-auto" style="width: 100%">\n        <div class="mx-auto" style="width: 100%">\n          <b-row class="mx-auto mb-2" style="width: 100%">\n            <b-col class="pull-right">\n              <b-row\n                style="\n                  margin-top: 16px;\n                  display: flex;\n                  width: 100%;\n                  flex-wrap: wrap;\n                "\n              >\n                <b-form-select\n                  style="max-width: 200px"\n                  v-model="payload.page"\n                  :options="pages"\n                ></b-form-select>\n                <div style="margin-left: 15px; display: flex">\n                  <div ref="practitioner" class="ref-field-input" />\n                  <b-form-datepicker\n                    @context="onDateChange"\n                    v-if="filterInputs.includes(\'date\')"\n                    style="margin-left: 15px; height: 32px; width: 200px"\n                    size="sm"\n                    locale="en-US"\n                  ></b-form-datepicker>\n                  <div\n                    style="margin-left: 15px; height: 32px"\n                    ref="service-unit"\n                    class="ref-field-input"\n                  />\n                  <div style="flex: 1; margin-left: 8px">\n                    <b-button\n                      @click="onReschedule"\n                      v-if="isAppointment"\n                      style="width: 100%; flex: 1"\n                      variant="success"\n                      >Reschedule and Block date</b-button\n                    >\n                  </div>\n                </div>\n              </b-row>\n              <b-row\n                style="\n                  margin-top: 16px;\n                  display: flex;\n                  width: 100%;\n                  flex-wrap: wrap;\n                "\n              >\n                <div v-if="showCheckBox" style="margin-right: 15px">\n                  <input type="checkbox" v-model="selectAll" />\n                  Select All\n                </div>\n              </b-row>\n            </b-col>\n          </b-row>\n          <b-row> </b-row>\n          <b-table\n            style="width: 100%"\n            :empty-text="`No items to show`"\n            :empty-filtered-text="`No items to show`"\n            :show-empty="true"\n            :items="items"\n            :fields="fields"\n            striped\n            outlined\n            bordered\n            small\n            head-row-variant="secondary"\n            :sticky-header="\'62vh\'"\n            responsive\n            ref="selectableTable"\n            selectable\n            @row-selected="onRowSelected"\n            select-mode="single"\n          >\n            <template v-if="showCheckBox" v-slot:cell(selected)="row">\n              <input type="checkbox" v-model="selected[row.item.name]" />\n            </template>\n          </b-table>\n          <b-button\n            variant="success"\n            @click="onClickSelected"\n            v-if="\n              showCheckBox &&\n              Object.keys(selected).filter((key) => Boolean(selected[key]))\n                .length > 0\n            "\n            >{{ checkActionText }}</b-button\n          >\n        </div>\n      </b-card>\n    </b-row>\n    <b-row>\n      <b-pagination-nav\n        v-if="false"\n        :link-gen="linkGen"\n        :number-of-pages="10"\n        use-router\n      ></b-pagination-nav>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getList } from "./../../services/doctype/list.js";\nimport { bulkRescheduleAppointments } from "../../services/patient_chart/api";\nexport default {\n  name: "ListComponent",\n  props: {\n    fields: { type: Array, default: ["name"] },\n    doctype: { type: String, default: null },\n    filters: { type: Object, default: {} },\n    checkActionText: { type: String, default: "" },\n    showCheckBox: { type: Boolean, default: false },\n    filterInputs: { type: Array, default: [] },\n    isAppointment: { type: Boolean, default: false },\n  },\n\n  data() {\n    return {\n      items: [],\n      selected: {},\n      selectAll: false,\n      payload: {\n        doctype: this.doctype,\n        filters:{},\n        fields: ["*"],\n        order_by: "creation desc",\n        page: 1,\n        start: 1,\n        limit: 20,\n      },\n\n      options: [10, 20, 30, 50, 100, 200],\n      pages: [],\n    };\n  },\n  watch: {\n    "payload.page": function (page) {\n      this.loadLists();\n    },\n    "payload.limit": function (page) {\n      this.loadLists();\n    },\n    "payload.filters": function (page) {\n      this.loadLists();\n    },\n    selectAll() {\n      if (this.selectAll) {\n        const selected = {};\n        this.items.forEach(({ name }) => {\n          selected[name] = true;\n        });\n        this.selected = selected;\n      } else {\n        this.selected = {};\n      }\n    },\n  },\n  methods: {\n    loadLists() {\n      const payload = this.payload;\n      payload.start = payload.page - 1;\n\n      payload.filters = this.filters || this.payload.filters;\n      getList(payload).then((data) => {\n        this.items = this.mapper(data);\n      });\n    },\n    linkGen(pageNum) {\n      return pageNum === 1 ? "?" : `?page=${pageNum}`;\n    },\n\n    setCurrentDoctype(doctype, reference) {\n      if (reference && doctype) {\n        if (doctype == "Patient") {\n           this.$router.push({ name: "patient-view-actions", params: { id:reference} });\n        } else {\n          this.$router.push({\n            name: "records-viewer",\n            params: { doctype, reference },\n          });\n        }\n      }\n\n      // this.$refs["my-modal-1993"].show();\n    },\n    onClickSelected() {\n      const selected = Object.keys(this.selected).filter((key) =>\n        Boolean(this.selected[key])\n      );\n      this.$emit("selected-action", selected);\n    },\n    onReschedule() {\n      const me = this;\n      const dialog = new frappe.ui.Dialog({\n        title: `Reschedule Appointments`,\n        fields: [\n          {\n            label: "Select date to block",\n            fieldname: "date",\n            default: this.payload.filters.appointment_date,\n            fieldtype: "Date",\n          },\n          {\n            label: "Select Service Unit",\n            fieldname: "service_unit",\n            fieldtype: "Link",\n            reqd: 1,\n            default: this.payload.filters.service_unit,\n            options: "Healthcare Service Unit",\n          },\n        ],\n        primary_action_label: "Reschedule",\n        primary_action(values) {\n          bulkRescheduleAppointments({ ...values }).then(() => {\n            dialog.hide();\n            me.loadLists();\n          });\n        },\n      });\n      dialog.show();\n    },\n    mapper(data) {\n      if (this.doctype === "Form Repository") {\n        let objectDataArray = [];\n        objectDataArray = data.map((item) => {\n          let value = {\n            creation: item.creation,\n            ref: item.reference_doctype,\n            refId: item.reference_doctype_id,\n          };\n          let jsObject = JSON.parse(item.form_content);\n          if (jsObject) {\n            let keys = Object.keys(jsObject);\n\n            keys.forEach((key) => {\n              let currentKey = key.split("-")[1];\n              let currentValue = jsObject[key];\n              value[currentKey] = currentValue;\n            });\n          }\n          value.name = item.name;\n          return value;\n        });\n        this.fields = null;\n        return objectDataArray;\n      }\n      return data;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: me.doctype,\n          placeholder: __(` Search ${me.doctype}`),\n          onchange: function () {\n            if (this.value) {\n              me.setCurrentDoctype(me.doctype, this.value);\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    makeSelectPractitionerControl() {\n      let me = this;\n      const setter = (filters) => {\n        this.payload.filters = filters;\n      };\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "practitioner",\n          options: "Healthcare Practitioner",\n          placeholder: __(` Search Practitioner`),\n          onchange: function () {\n            me.$emit("practitionerChange", this.value);\n            setter({ ...me.payload.filters, practitioner: this.value });\n          },\n        },\n        parent: this.$refs["practitioner"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    makeServiceUnitControl() {\n      let me = this;\n      const setter = (filters) => {\n        this.payload.filters = filters;\n      };\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "service_unit",\n          options: "Healthcare Service Unit",\n          placeholder: __(` Search Service unit`),\n          onchange: function () {\n            me.$emit("serviceUnitChange", this.value);\n            setter({ ...me.payload.filters, service_unit: this.value });\n            // me.setCurrentDoctype(me.doctype, this.value);\n          },\n        },\n        parent: this.$refs["service-unit"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    onRowSelected(rowItems) {\n      this.$emit("selected", rowItems);\n    },\n    onDateChange({ selectedYMD: date }) {\n      // console.log(\'========>\', date)\n      if (date) {\n        this.payload.filters = {\n          ...this.payload.filters,\n          appointment_date: date,\n        };\n      }\n    },\n  },\n\n  created() {\n    for (let index = 0; index < 20; index++) {\n      this.pages.push(index + 1);\n    }\n    this.loadLists();\n  },\n  mounted() {\n    this.makeSelectDoctypeControl();\n    const filterNames = this.filterInputs;\n    if (filterNames.includes("practitioner")) {\n      this.makeSelectPractitionerControl();\n    }\n    if (filterNames.includes("service_unit")) {\n      this.makeServiceUnitControl();\n    }\n  },\n};\n</script>\n<style scoped>\n.card {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n.b-table {\n  margin: 0px !important;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n  margin: 0px !important;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__15 = "data-v-4ee3129c";
  var __vue_module_identifier__15 = void 0;
  var __vue_is_functional_template__15 = false;
  function __vue_normalize__15(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container style="width: 100%">\n    <div style="width: 100%"><div ref="doctype" class="ref-field-input" /></div>\n    <b-row class="mx-auto mt-1">\n      <b-card class="mx-auto" style="width: 100%">\n        <div class="mx-auto" style="width: 100%">\n          <b-row class="mx-auto mb-2" style="width: 100%">\n            <b-col class="pull-right">\n              <b-row\n                style="\n                  margin-top: 16px;\n                  display: flex;\n                  width: 100%;\n                  flex-wrap: wrap;\n                "\n              >\n                <b-form-select\n                  style="max-width: 200px"\n                  v-model="payload.page"\n                  :options="pages"\n                ></b-form-select>\n                <div style="margin-left: 15px; display: flex">\n                  <div ref="practitioner" class="ref-field-input" />\n                  <b-form-datepicker\n                    @context="onDateChange"\n                    v-if="filterInputs.includes(\'date\')"\n                    style="margin-left: 15px; height: 32px; width: 200px"\n                    size="sm"\n                    locale="en-US"\n                  ></b-form-datepicker>\n                  <div\n                    style="margin-left: 15px; height: 32px"\n                    ref="service-unit"\n                    class="ref-field-input"\n                  />\n                  <div style="flex: 1; margin-left: 8px">\n                    <b-button\n                      @click="onReschedule"\n                      v-if="isAppointment"\n                      style="width: 100%; flex: 1"\n                      variant="success"\n                      >Reschedule and Block date</b-button\n                    >\n                  </div>\n                </div>\n              </b-row>\n              <b-row\n                style="\n                  margin-top: 16px;\n                  display: flex;\n                  width: 100%;\n                  flex-wrap: wrap;\n                "\n              >\n                <div v-if="showCheckBox" style="margin-right: 15px">\n                  <input type="checkbox" v-model="selectAll" />\n                  Select All\n                </div>\n              </b-row>\n            </b-col>\n          </b-row>\n          <b-row> </b-row>\n          <b-table\n            style="width: 100%"\n            :empty-text="`No items to show`"\n            :empty-filtered-text="`No items to show`"\n            :show-empty="true"\n            :items="items"\n            :fields="fields"\n            striped\n            outlined\n            bordered\n            small\n            head-row-variant="secondary"\n            :sticky-header="\'62vh\'"\n            responsive\n            ref="selectableTable"\n            selectable\n            @row-selected="onRowSelected"\n            select-mode="single"\n          >\n            <template v-if="showCheckBox" v-slot:cell(selected)="row">\n              <input type="checkbox" v-model="selected[row.item.name]" />\n            </template>\n          </b-table>\n          <b-button\n            variant="success"\n            @click="onClickSelected"\n            v-if="\n              showCheckBox &&\n              Object.keys(selected).filter((key) => Boolean(selected[key]))\n                .length > 0\n            "\n            >{{ checkActionText }}</b-button\n          >\n        </div>\n      </b-card>\n    </b-row>\n    <b-row>\n      <b-pagination-nav\n        v-if="false"\n        :link-gen="linkGen"\n        :number-of-pages="10"\n        use-router\n      ></b-pagination-nav>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getList } from "./../../services/doctype/list.js";\nimport { bulkRescheduleAppointments } from "../../services/patient_chart/api";\nexport default {\n  name: "ListComponent",\n  props: {\n    fields: { type: Array, default: ["name"] },\n    doctype: { type: String, default: null },\n    filters: { type: Object, default: {} },\n    checkActionText: { type: String, default: "" },\n    showCheckBox: { type: Boolean, default: false },\n    filterInputs: { type: Array, default: [] },\n    isAppointment: { type: Boolean, default: false },\n  },\n\n  data() {\n    return {\n      items: [],\n      selected: {},\n      selectAll: false,\n      payload: {\n        doctype: this.doctype,\n        filters:{},\n        fields: ["*"],\n        order_by: "creation desc",\n        page: 1,\n        start: 1,\n        limit: 20,\n      },\n\n      options: [10, 20, 30, 50, 100, 200],\n      pages: [],\n    };\n  },\n  watch: {\n    "payload.page": function (page) {\n      this.loadLists();\n    },\n    "payload.limit": function (page) {\n      this.loadLists();\n    },\n    "payload.filters": function (page) {\n      this.loadLists();\n    },\n    selectAll() {\n      if (this.selectAll) {\n        const selected = {};\n        this.items.forEach(({ name }) => {\n          selected[name] = true;\n        });\n        this.selected = selected;\n      } else {\n        this.selected = {};\n      }\n    },\n  },\n  methods: {\n    loadLists() {\n      const payload = this.payload;\n      payload.start = payload.page - 1;\n\n      payload.filters = this.filters || this.payload.filters;\n      getList(payload).then((data) => {\n        this.items = this.mapper(data);\n      });\n    },\n    linkGen(pageNum) {\n      return pageNum === 1 ? "?" : `?page=${pageNum}`;\n    },\n\n    setCurrentDoctype(doctype, reference) {\n      if (reference && doctype) {\n        if (doctype == "Patient") {\n           this.$router.push({ name: "patient-view-actions", params: { id:reference} });\n        } else {\n          this.$router.push({\n            name: "records-viewer",\n            params: { doctype, reference },\n          });\n        }\n      }\n\n      // this.$refs["my-modal-1993"].show();\n    },\n    onClickSelected() {\n      const selected = Object.keys(this.selected).filter((key) =>\n        Boolean(this.selected[key])\n      );\n      this.$emit("selected-action", selected);\n    },\n    onReschedule() {\n      const me = this;\n      const dialog = new frappe.ui.Dialog({\n        title: `Reschedule Appointments`,\n        fields: [\n          {\n            label: "Select date to block",\n            fieldname: "date",\n            default: this.payload.filters.appointment_date,\n            fieldtype: "Date",\n          },\n          {\n            label: "Select Service Unit",\n            fieldname: "service_unit",\n            fieldtype: "Link",\n            reqd: 1,\n            default: this.payload.filters.service_unit,\n            options: "Healthcare Service Unit",\n          },\n        ],\n        primary_action_label: "Reschedule",\n        primary_action(values) {\n          bulkRescheduleAppointments({ ...values }).then(() => {\n            dialog.hide();\n            me.loadLists();\n          });\n        },\n      });\n      dialog.show();\n    },\n    mapper(data) {\n      if (this.doctype === "Form Repository") {\n        let objectDataArray = [];\n        objectDataArray = data.map((item) => {\n          let value = {\n            creation: item.creation,\n            ref: item.reference_doctype,\n            refId: item.reference_doctype_id,\n          };\n          let jsObject = JSON.parse(item.form_content);\n          if (jsObject) {\n            let keys = Object.keys(jsObject);\n\n            keys.forEach((key) => {\n              let currentKey = key.split("-")[1];\n              let currentValue = jsObject[key];\n              value[currentKey] = currentValue;\n            });\n          }\n          value.name = item.name;\n          return value;\n        });\n        this.fields = null;\n        return objectDataArray;\n      }\n      return data;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: me.doctype,\n          placeholder: __(` Search ${me.doctype}`),\n          onchange: function () {\n            if (this.value) {\n              me.setCurrentDoctype(me.doctype, this.value);\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    makeSelectPractitionerControl() {\n      let me = this;\n      const setter = (filters) => {\n        this.payload.filters = filters;\n      };\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "practitioner",\n          options: "Healthcare Practitioner",\n          placeholder: __(` Search Practitioner`),\n          onchange: function () {\n            me.$emit("practitionerChange", this.value);\n            setter({ ...me.payload.filters, practitioner: this.value });\n          },\n        },\n        parent: this.$refs["practitioner"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    makeServiceUnitControl() {\n      let me = this;\n      const setter = (filters) => {\n        this.payload.filters = filters;\n      };\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "service_unit",\n          options: "Healthcare Service Unit",\n          placeholder: __(` Search Service unit`),\n          onchange: function () {\n            me.$emit("serviceUnitChange", this.value);\n            setter({ ...me.payload.filters, service_unit: this.value });\n            // me.setCurrentDoctype(me.doctype, this.value);\n          },\n        },\n        parent: this.$refs["service-unit"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body").find(".input-max-width").removeClass("input-max-width");\n    },\n    onRowSelected(rowItems) {\n      this.$emit("selected", rowItems);\n    },\n    onDateChange({ selectedYMD: date }) {\n      // console.log(\'========>\', date)\n      if (date) {\n        this.payload.filters = {\n          ...this.payload.filters,\n          appointment_date: date,\n        };\n      }\n    },\n  },\n\n  created() {\n    for (let index = 0; index < 20; index++) {\n      this.pages.push(index + 1);\n    }\n    this.loadLists();\n  },\n  mounted() {\n    this.makeSelectDoctypeControl();\n    const filterNames = this.filterInputs;\n    if (filterNames.includes("practitioner")) {\n      this.makeSelectPractitionerControl();\n    }\n    if (filterNames.includes("service_unit")) {\n      this.makeServiceUnitControl();\n    }\n  },\n};\n</script>\n<style scoped>\n.card {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n.b-table {\n  margin: 0px !important;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n  margin: 0px !important;\n}\n</style>\n';
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
  function __vue_create_injector__15() {
    const styles = __vue_create_injector__15.styles || (__vue_create_injector__15.styles = {});
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
  var __vue_component__15 = /* @__PURE__ */ __vue_normalize__15({render: __vue_render__15, staticRenderFns: __vue_staticRenderFns__15}, __vue_inject_styles__15, __vue_script__15, __vue_scope_id__15, __vue_is_functional_template__15, __vue_module_identifier__15, false, __vue_create_injector__15, void 0, void 0);
  var ListComponent_default = __vue_component__15;

  // ../frontend/frontend/public/js/records/components/ListHeaderComponent.vue
  var __vue_script__16 = {
    name: "ListHeaderComponent",
    props: {
      title: {type: String, default: ""},
      subTitle: {type: String, default: ""},
      parentId: {type: String, default: ""}
    },
    data() {
      return {};
    }
  };
  var __vue_render__16 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticStyle: {width: "100%"}}, [
      _c("hr"),
      _vm._v(" "),
      _c("div", {staticClass: "mt-2", staticStyle: {width: "100%"}}, [
        _c("div", {staticClass: "mb-0", staticStyle: {width: "100%"}}, [
          _c("h2", {staticClass: "px-0 mb-0"}, [_vm._v(_vm._s(_vm.title))])
        ]),
        _vm._v(" "),
        _vm.subTitle.length ? _c("h4", {staticClass: "px-2", staticStyle: {color: "darkgray"}}, [_vm._v("\n      " + _vm._s(_vm.subTitle) + "\n    ")]) : _vm._e()
      ]),
      _vm._v(" "),
      _c("hr")
    ]);
  };
  var __vue_staticRenderFns__16 = [];
  __vue_render__16._withStripped = true;
  var __vue_inject_styles__16 = function(inject) {
    if (!inject)
      return;
    inject("data-v-6dac8d5a_0", {source: "\nhr[data-v-6dac8d5a] {\n    margin-top: 4px  !important;\n    margin-bottom: 4px !important;\n    border: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/records/components/ListHeaderComponent.vue"], "names": [], "mappings": ";AA8BA;IACA,2BAAA;IACA,6BAAA;IACA,SAAA;IACA,wCAAA;AACA", "file": "ListHeaderComponent.vue", "sourcesContent": ['<template>\n  <div style="width:100%">\n    <hr />\n    <div class="mt-2" style="width:100%">\n      <div style="width:100%" class="mb-0">\n        <h2 class="px-0 mb-0">{{ title }}</h2>\n      </div>\n      <h4 class="px-2" style="color: darkgray" v-if="subTitle.length" >\n        {{ subTitle }}\n      </h4>\n    </div>\n    <hr />\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "ListHeaderComponent",\n  props: {\n    title: { type: String, default: "" },\n    subTitle: { type: String, default: "" },\n    parentId: { type: String, default: "" },\n  },\n  data() {\n    return {};\n  },\n};\n</script>\n\n<style scoped>\nhr {\n    margin-top: 4px  !important;\n    margin-bottom: 4px !important;\n    border: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__16 = "data-v-6dac8d5a";
  var __vue_module_identifier__16 = void 0;
  var __vue_is_functional_template__16 = false;
  function __vue_normalize__16(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div style="width:100%">\n    <hr />\n    <div class="mt-2" style="width:100%">\n      <div style="width:100%" class="mb-0">\n        <h2 class="px-0 mb-0">{{ title }}</h2>\n      </div>\n      <h4 class="px-2" style="color: darkgray" v-if="subTitle.length" >\n        {{ subTitle }}\n      </h4>\n    </div>\n    <hr />\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "ListHeaderComponent",\n  props: {\n    title: { type: String, default: "" },\n    subTitle: { type: String, default: "" },\n    parentId: { type: String, default: "" },\n  },\n  data() {\n    return {};\n  },\n};\n</script>\n\n<style scoped>\nhr {\n    margin-top: 4px  !important;\n    margin-bottom: 4px !important;\n    border: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n</style>\n';
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
  function __vue_create_injector__16() {
    const styles = __vue_create_injector__16.styles || (__vue_create_injector__16.styles = {});
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
  var __vue_component__16 = /* @__PURE__ */ __vue_normalize__16({render: __vue_render__16, staticRenderFns: __vue_staticRenderFns__16}, __vue_inject_styles__16, __vue_script__16, __vue_scope_id__16, __vue_is_functional_template__16, __vue_module_identifier__16, false, __vue_create_injector__16, void 0, void 0);
  var ListHeaderComponent_default = __vue_component__16;

  // ../frontend/frontend/public/js/records/components/ListPage.vue
  var __vue_script__17 = {
    name: "ListPage",
    components: {ListComponent: ListComponent_default, ListHeaderComponent: ListHeaderComponent_default},
    props: {
      doctype: {type: String, default: null},
      title: {type: String, default: null},
      subTitle: {type: String, default: ""},
      fields: {type: Array, default: ["name", "creation"]},
      filters: {type: Object, default: null}
    },
    methods: {
      selected(item) {
        this.$emit("selected", item);
      }
    }
  };
  var __vue_render__17 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", [
      _c("b-row", {staticClass: "mx-auto mt-2 px-4", staticStyle: {width: "100%"}}, [
        _c("list-header-component", {
          attrs: {title: _vm.title, subTitle: _vm.subTitle}
        })
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mx-auto mt-2", staticStyle: {width: "100%"}}, [
        _c("list-component", {
          staticStyle: {width: "100%"},
          attrs: {
            doctype: _vm.doctype,
            fields: _vm.fields,
            filters: _vm.filters
          },
          on: {selected: _vm.selected}
        })
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__17 = [];
  __vue_render__17._withStripped = true;
  var __vue_inject_styles__17 = function(inject) {
    if (!inject)
      return;
    inject("data-v-95d97528_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "ListPage.vue"}, media: void 0});
  };
  var __vue_scope_id__17 = void 0;
  var __vue_module_identifier__17 = void 0;
  var __vue_is_functional_template__17 = false;
  function __vue_normalize__17(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container>
    <b-row style="width:100%" class="mx-auto mt-2 px-4">
      <list-header-component :title="title" :subTitle="subTitle" />
    </b-row>
    <b-row style="width:100%" class="mx-auto mt-2">
      <list-component style="width:100%" :doctype="doctype" :fields="fields" @selected="selected" :filters="filters" />
    </b-row>
  </b-container>
</template>

<script>
import ListComponent from "./ListComponent.vue";
import ListHeaderComponent from "./ListHeaderComponent.vue";
export default {
  name: "ListPage",
  components: { ListComponent, ListHeaderComponent },
  props: {
    doctype: { type: String, default: null },
    title: { type: String, default: null },
    subTitle: { type: String, default: "" },
    fields: { type: Array, default: ["name", "creation"] },
    filters:{type:Object, default:null}
  },
  methods: {
    selected(item){
      this.$emit('selected', item)
    }
  },
};
</script>

<style></style>
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
  function __vue_create_injector__17() {
    const styles = __vue_create_injector__17.styles || (__vue_create_injector__17.styles = {});
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
  var __vue_component__17 = /* @__PURE__ */ __vue_normalize__17({render: __vue_render__17, staticRenderFns: __vue_staticRenderFns__17}, __vue_inject_styles__17, __vue_script__17, __vue_scope_id__17, __vue_is_functional_template__17, __vue_module_identifier__17, false, __vue_create_injector__17, void 0, void 0);
  var ListPage_default = __vue_component__17;

  // ../frontend/frontend/public/js/forms/FormRenderViewx.vue
  var __vue_script__18 = {
    name: "FormRenderViewx",
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
        formName: null,
        selectedItem: null,
        formInputData: null,
        originalConfig: null,
        allFormConfigurationData: null,
        changeLog: [],
        filters: {reference_doctype_id: this.response.reference_doctype_id},
        items: [],
        selected: "A"
      };
    },
    props: {
      selectedDoctype: {type: String},
      selectedDoctypeReference: {type: String},
      currentFormName: {type: String, default: null},
      patient: {type: Object},
      dataInput: {type: Object},
      response: {type: Object},
      isReadonly: {type: Boolean, default: false},
      parent: {type: String}
    },
    watch: {
      dataInput(newVal) {
        this.setValues(newVal);
      },
      previewMode(newVal, oldVal) {
        if (newVal) {
          const conf = this.configuration;
          keys = Object.keys(newVal);
          keys.forEach((key) => {
            this.formInputData[`${key}`] = newVal[`${key}`];
          });
          this.formData = conf;
        }
      },
      selectedDoctype(doctype) {
        if (doctype) {
          this.makeDoctypeItemControl(doctype);
        }
      },
      currentFormName(name) {
        if (name) {
          this.getForm(name);
        }
      }
    },
    methods: {
      openTable() {
        alert("Hellow");
      },
      clearData() {
        const val = {};
        const keys2 = Object.keys(this.formInputData);
        keys2.forEach((key) => {
          val[key] = "";
        });
        this.setValues(val);
      },
      populate() {
        this.setValues(this.dataInput);
      },
      setValues(val) {
        this.$set(this, "formInputData", val);
      },
      getFormData() {
        console.log(JSON.stringify(this.formData));
        const data = this.formInputData;
        const returnedTarget = Object.assign({}, data);
        this.items.unshift(returnedTarget);
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
      get_new_frm(_frm) {
        const doctype = "Patient";
        const page = $("#form");
        const layout = new frappe.ui.form.Layout({
          parent: page,
          doctype,
          doctype_layout: null,
          frm: {},
          with_dashboard: false,
          card_layout: true
        });
        layout.make();
        console.log(layout);
        return frm;
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
          this.formData = null;
          this.setValues({});
          this.selectedDoctype = null;
          this.selectedDoctypeReference = null;
          this.sendToTimeline(this.patient.patient, "Form Repository", saved.name, saved.owner);
        });
      },
      getForm(name) {
        getFormConfiguration({name}).then((config) => {
          const formStringConfig = config.formdata;
          const configObject = JSON.parse(formStringConfig);
          this.formName = config.name;
          this.formData = configObject;
          this.originalConfig = configObject;
        });
      },
      hideModal() {
        this.$refs["save_modal"].hide();
      },
      navigateToList() {
        const formName2 = frappe.get_route()[2];
        this.tableName = formName2.split("-")[1];
      },
      sendToTimeline(patient, reference_doctype, reference_name, reference_owner) {
        let formData = {
          reference_doctype,
          reference_name,
          doctype: "Patient Medical Record",
          patient,
          status: "Open",
          reference_owner
        };
        saveFormData({formData}).then((saved) => {
          frappe.show_alert("Timeline updated", 5);
        });
      },
      save() {
        let form_content = this.formInputData;
        form_content = JSON.stringify(form_content);
        this.allFormConfigurationData = this.response;
        const form_name = this.formName;
        const reference_doctype = this.allFormConfigurationData.owner_doctype || this.selectedDoctype || this.formData.formConfig.mappedDoctype;
        let reference_doctype_id = null;
        if (this.allFormConfigurationData.context_reference) {
          reference_doctype_id = this.context[this.allFormConfigurationData.context_owner_name] || this.selectedDoctypeReference || this.savedDocument.name;
        } else {
          reference_doctype_id = this.allFormConfigurationData.owner_doctype_reference || this.selectedDoctypeReference || this.savedDocument.name;
        }
        let name = this.response.name;
        let doctype = "Form Repository";
        let formData = {
          doctype,
          name,
          form_content,
          form_name,
          mapped_doctype_name: this.mappedDoctypeName,
          mapped_doctype: this.formData.formConfig.mappedDoctype,
          reference_doctype,
          reference_doctype_id,
          completion_status: "Completed",
          completed: 1
        };
        updateFormData({formData}).then((result) => {
          frappe.show_alert("Form updated " + result.name, 5);
        });
      },
      saveDoctypeToDb() {
        if (this.formData.formConfig.mappedDoctype) {
          console.log("FRM", "mapped doctype");
          const keys2 = Object.keys(this.formInputData);
          let formData = {
            doctype: this.formData.formConfig.mappedDoctype,
            name: this.response.mapped_doctype_name
          };
          keys2.forEach((key) => {
            if (this.formData.controls[key]) {
              const control = this.formData.controls[key];
              if (control && (control.type === "radio" || control.type === "dropDown" || control.type === "checkbox")) {
                if (control.items.length) {
                  const erpValueObject = control.items.find((item) => item.value === this.formInputData[key]);
                  const field = this.formData.controls[key].mappedField;
                  if (field) {
                    formData[field] = erpValueObject.erpValue;
                  }
                }
              } else {
                const field = this.formData.controls[key].mappedField;
                if (field) {
                  formData[field] = this.formInputData[key];
                }
              }
            } else if (Array.isArray(this.formInputData[key])) {
              formData[key] = this.formInputData[key];
            }
          });
          updateDoctypeData({formData}).then((saved) => {
            frappe.show_alert("Saved", 3);
            this.savedDocument = saved;
            this.save();
          });
        } else {
          console.log("FRM", "getFormData");
          this.getFormData();
        }
      }
    },
    created() {
      if (!this.currentFormName) {
        this.getForm(formName);
      } else {
        this.getForm(this.currentFormName);
      }
    },
    mounted() {
      this.$formEvent.$on("submit", (value) => {
      });
      this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
        if (modalId === "modal-id-1") {
          this.makeSelectDoctypeControl();
        }
      });
      const context = this;
      setTimeout(() => {
        context.populate();
      }, 1e3);
    },
    components: {
      ListComponent: ListComponent_default
    }
  };
  var __vue_render__18 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-page mb-4"}, [
      _c("div", {staticClass: "spacer-left-5", staticStyle: {width: "100%"}}, [
        _c("b-row", {staticStyle: {width: "100%"}}, [
          _c("b-row", {staticClass: "render-form", staticStyle: {width: "100%"}}, [
            _c("b-row", {
              staticClass: "p-3 pull-right",
              staticStyle: {width: "100%"}
            }, [
              _c("b-col"),
              _vm._v(" "),
              _c("div", [
                _c("b-form-group", {
                  attrs: {
                    "button-variant": "outline-primary",
                    buttons: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var ariaDescribedby = ref.ariaDescribedby;
                        return [
                          _c("b-form-radio", {
                            attrs: {
                              "aria-describedby": ariaDescribedby,
                              name: "some-radios",
                              buttons: "",
                              "button-variant": "outline-primary",
                              value: "A"
                            },
                            model: {
                              value: _vm.selected,
                              callback: function($$v) {
                                _vm.selected = $$v;
                              },
                              expression: "selected"
                            }
                          }, [_vm._v("Form")]),
                          _vm._v(" "),
                          _c("b-form-radio", {
                            attrs: {
                              "aria-describedby": ariaDescribedby,
                              name: "some-radios",
                              buttons: "",
                              "button-variant": "outline-primary",
                              value: "B"
                            },
                            model: {
                              value: _vm.selected,
                              callback: function($$v) {
                                _vm.selected = $$v;
                              },
                              expression: "selected"
                            }
                          }, [_vm._v("List")])
                        ];
                      }
                    }
                  ])
                })
              ], 1),
              _vm._v(" "),
              _c("div", [
                _c("b-button", {
                  staticClass: "ml-4 my-3 pull-right",
                  attrs: {variant: "primary"},
                  on: {
                    click: function($event) {
                      return _vm.saveDoctypeToDb();
                    }
                  }
                }, [
                  _c("i", {staticClass: "fa fa-save"}),
                  _vm._v(" Save\n            ")
                ]),
                _vm._v(" "),
                _c("b-button", {
                  staticClass: "ml-4 my-3 pull-right",
                  attrs: {variant: "danger"},
                  on: {
                    click: function($event) {
                      return _vm.clearData();
                    }
                  }
                }, [
                  _c("i", {staticClass: "fa fa-close"}),
                  _vm._v(" Reset\n            ")
                ])
              ], 1)
            ], 1),
            _vm._v(" "),
            _c("b-row", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selected == "A",
                  expression: "selected == 'A'"
                }
              ],
              staticClass: "px-3",
              staticStyle: {width: "100%"}
            }, [
              _c("FormRenderer", {
                attrs: {
                  parent: _vm.parent,
                  "form-configuration": _vm.formData
                },
                model: {
                  value: _vm.formInputData,
                  callback: function($$v) {
                    _vm.formInputData = $$v;
                  },
                  expression: "formInputData"
                }
              })
            ], 1)
          ], 1)
        ], 1),
        _vm._v(" "),
        _vm.response && _vm.response.reference_doctype_id && _vm.selected == "B" ? _c("b-row", [
          _c("list-component", {
            attrs: {
              filters: {
                reference_doctype_id: _vm.response.reference_doctype_id
              },
              doctype: "Form Repository"
            }
          })
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("b-modal", {
          attrs: {id: "bv-modal-example", "hide-footer": "", size: "xl"},
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [
                  _vm._v(" Using "),
                  _c("code", [_vm._v("$bvModal")]),
                  _vm._v(" Methods ")
                ];
              },
              proxy: true
            }
          ])
        }, [
          _vm._v(" "),
          _c("FormRenderer", {
            attrs: {parent: _vm.parent, "form-configuration": _vm.formData},
            model: {
              value: _vm.formInputData,
              callback: function($$v) {
                _vm.formInputData = $$v;
              },
              expression: "formInputData"
            }
          }),
          _vm._v(" "),
          _c("b-button", {
            staticClass: "mt-3",
            attrs: {block: ""},
            on: {
              click: function($event) {
                return _vm.$bvModal.hide("bv-modal-example");
              }
            }
          }, [_vm._v("Close Me")])
        ], 1),
        _vm._v(" "),
        _c("b-modal", {
          ref: "save_modal",
          attrs: {id: "modal-id-1", size: "sm", "hide-footer": ""},
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
            }),
            _vm._v(" "),
            _c("b-col", {
              staticClass: "ref-field-input",
              attrs: {cols: 12, id: "form"}
            })
          ], 1),
          _vm._v(" "),
          _c("b-button", {
            staticClass: "mt-3",
            attrs: {variant: "primary", block: ""},
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
  var __vue_staticRenderFns__18 = [];
  __vue_render__18._withStripped = true;
  var __vue_inject_styles__18 = function(inject) {
    if (!inject)
      return;
    inject("data-v-527c8fc3_0", {source: '\n.spacer[data-v-527c8fc3] {\n  margin-top: 10px;\n}\n.space-right[data-v-527c8fc3] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-527c8fc3] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn[data-v-527c8fc3] {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5[data-v-527c8fc3] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-527c8fc3] {\n  padding-top: 0px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n}\n.white-text[data-v-527c8fc3] {\n  color: white;\n  margin-left: 10px;\n}\n.form-border[data-v-527c8fc3] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-527c8fc3] {\n  padding-bottom: 50px;\n  padding-right: 50px;\n}\n.main-page[data-v-527c8fc3] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-527c8fc3] {\n  margin-top: 20px;\n}\n.card[data-v-527c8fc3] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-527c8fc3]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-527c8fc3] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-527c8fc3] {\n  background-color: white;\n  border-radius: 10px;\n}\n.space-left[data-v-527c8fc3] {\n  margin-left: 8px;\n}\n.ref-field-input[data-v-527c8fc3] {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width[data-v-527c8fc3] {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding[data-v-527c8fc3] {\n  padding-left: 15px;\n}\n.upper-case[data-v-527c8fc3] {\n  text-transform: uppercase;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FormRenderViewx.vue"], "names": [], "mappings": ";AA2cA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,cAAA;AACA;AACA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;AACA;AACA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,yBAAA;AACA", "file": "FormRenderViewx.vue", "sourcesContent": [`<template>
  <b-container class="main-page mb-4">
    <!-- {{ response }} -->
    <div class="spacer-left-5" style="width: 100%">
      <b-row style="width: 100%">
        <b-row class="render-form" style="width: 100%">
          <b-row style="width: 100%" class="p-3 pull-right">
            <b-col></b-col>
            <div>
              <b-form-group
                v-slot="{ ariaDescribedby }"
                button-variant="outline-primary"
                buttons
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  buttons
                  button-variant="outline-primary"
                  value="A"
                  >Form</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  buttons
                  button-variant="outline-primary"
                  value="B"
                  >List</b-form-radio
                >
              </b-form-group>
            </div>

            <div>
              <b-button
                variant="primary"
                class="ml-4 my-3 pull-right"
                @click="saveDoctypeToDb()"
              >
                <i class="fa fa-save"></i> Save
              </b-button>

              <b-button
                variant="danger"
                class="ml-4 my-3 pull-right"
                @click="clearData()"
              >
                <i class="fa fa-close"></i> Reset
              </b-button>
            </div>
          </b-row>
          <b-row style="width: 100%" class="px-3" v-show="selected == 'A'">
            <FormRenderer
              :parent="parent"
              :form-configuration="formData"
              v-model="formInputData"
            />
          </b-row>
        </b-row>
      </b-row>

      <b-row
        v-if="response && response.reference_doctype_id && selected == 'B'"
      >
        <list-component
          :filters="{ reference_doctype_id: response.reference_doctype_id }"
          :doctype="'Form Repository'"
        ></list-component>
      </b-row>

      <b-modal id="bv-modal-example" hide-footer size="xl">
        <template #modal-title> Using <code>$bvModal</code> Methods </template>

        <FormRenderer
          :parent="parent"
          :form-configuration="formData"
          v-model="formInputData"
        />
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
          >Close Me</b-button
        >
      </b-modal>
      <b-modal id="modal-id-1" ref="save_modal" size="sm" hide-footer>
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

          <b-col :cols="12" id="form" class="ref-field-input" />
        </b-row>

        <b-button variant="primary" class="mt-3" block @click="save()"
          >Save</b-button
        >
      </b-modal>
    </div>
  </b-container>
</template>
<script>
import {
  getFormConfiguration,
  updateDoctypeData,
  updateFormData,
} from "../services/forms/builder.js";

import ListComponent from "../records/components/ListComponent.vue";
export default {
  name: "FormRenderViewx",

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
      formName: null,
      selectedItem: null,
      formInputData: null,
      originalConfig: null,
      allFormConfigurationData: null,
      changeLog: [],
      filters: { reference_doctype_id: this.response.reference_doctype_id },
      items: [],
      selected: "A",
    };
  },
  props: {
    selectedDoctype: { type: String },
    selectedDoctypeReference: { type: String },
    currentFormName: { type: String, default: null },
    patient: { type: Object },
    dataInput: { type: Object },
    response: { type: Object },
    isReadonly: { type: Boolean, default: false },
    parent: { type: String },
  },
  watch: {
    dataInput(newVal) {
      this.setValues(newVal);
    },

    previewMode(newVal, oldVal) {
      if (newVal) {
        const conf = this.configuration;
        keys = Object.keys(newVal);
        keys.forEach((key) => {
          this.formInputData[\`\${key}\`] = newVal[\`\${key}\`];
        });

        this.formData = conf;
      }
    },
    selectedDoctype(doctype) {
      if (doctype) {
        this.makeDoctypeItemControl(doctype);
      }
    },
    currentFormName(name) {
      if (name) {
        this.getForm(name);
      }
    },
  },
  methods: {
    openTable() {
      alert("Hellow");
    },
    clearData() {
      const val = {};
      const keys = Object.keys(this.formInputData);
      keys.forEach((key) => {
        val[key] = "";
      });

      this.setValues(val);
    },
    populate() {
      this.setValues(this.dataInput);
    },

    setValues(val) {
      this.$set(this, "formInputData", val);
    },
    getFormData() {
      console.log(JSON.stringify(this.formData));
      const data = this.formInputData;
      const returnedTarget = Object.assign({}, data);
      this.items.unshift(returnedTarget);
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
    get_new_frm(_frm) {
      const doctype = "Patient";
      const page = $("#form");

      const layout = new frappe.ui.form.Layout({
        parent: page,
        doctype: doctype,
        doctype_layout: null,
        frm: {},
        with_dashboard: false,
        card_layout: true,
      });
      layout.make();
      console.log(layout);

      return frm;
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
        this.formData = null;
        this.setValues({});
        this.selectedDoctype = null;
        this.selectedDoctypeReference = null;
        this.sendToTimeline(
          this.patient.patient,
          "Form Repository",
          saved.name,
          saved.owner
        );
      });
    },

    getForm(name) {
      getFormConfiguration({ name }).then((config) => {
        const formStringConfig = config.formdata;
        const configObject = JSON.parse(formStringConfig);

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

    sendToTimeline(
      patient,
      reference_doctype,
      reference_name,
      reference_owner
    ) {
      let formData = {
        reference_doctype,
        reference_name,
        doctype: "Patient Medical Record",
        patient,
        status: "Open",
        reference_owner,
      };

      saveFormData({ formData }).then((saved) => {
        frappe.show_alert("Timeline updated", 5);
      });
    },
    save() {
      let form_content = this.formInputData;
      form_content = JSON.stringify(form_content);
      this.allFormConfigurationData = this.response;
      const form_name = this.formName;
      const reference_doctype =
        this.allFormConfigurationData.owner_doctype ||
        this.selectedDoctype ||
        this.formData.formConfig.mappedDoctype;
      let reference_doctype_id = null;
      if (this.allFormConfigurationData.context_reference) {
        reference_doctype_id =
          this.context[this.allFormConfigurationData.context_owner_name] ||
          this.selectedDoctypeReference ||
          this.savedDocument.name;
      } else {
        reference_doctype_id =
          this.allFormConfigurationData.owner_doctype_reference ||
          this.selectedDoctypeReference ||
          this.savedDocument.name;
      }

      let name = this.response.name;

      let doctype = "Form Repository";
      let formData = {
        doctype,
        name,
        form_content,
        form_name,
        mapped_doctype_name: this.mappedDoctypeName,
        mapped_doctype: this.formData.formConfig.mappedDoctype,
        reference_doctype,
        reference_doctype_id,
        completion_status: "Completed",
        completed: 1,
      };

      updateFormData({ formData }).then((result) => {
        frappe.show_alert("Form updated " + result.name, 5);
      });
    },

    saveDoctypeToDb() {
      if (this.formData.formConfig.mappedDoctype) {
        console.log("FRM", "mapped doctype");
        const keys = Object.keys(this.formInputData);
        let formData = {
          doctype: this.formData.formConfig.mappedDoctype,
          name: this.response.mapped_doctype_name,
        };

        keys.forEach((key) => {
          if (this.formData.controls[key]) {
            const control = this.formData.controls[key];
            if (
              control &&
              (control.type === "radio" ||
                control.type === "dropDown" ||
                control.type === "checkbox")
            ) {
              if (control.items.length) {
                const erpValueObject = control.items.find(
                  (item) => item.value === this.formInputData[key]
                );
                const field = this.formData.controls[key].mappedField;
                if (field) {
                  formData[field] = erpValueObject.erpValue;
                }
              }
            } else {
              const field = this.formData.controls[key].mappedField;
              if (field) {
                formData[field] = this.formInputData[key];
              }
            }
          } else if (Array.isArray(this.formInputData[key])) {
            formData[key] = this.formInputData[key];
          }
        });

        updateDoctypeData({ formData }).then((saved) => {
          frappe.show_alert("Saved", 3);
          this.savedDocument = saved;
          this.save();
        });
      } else {
        console.log("FRM", "getFormData");
        this.getFormData();
      }
    },
  },

  created() {
    if (!this.currentFormName) {
      this.getForm(formName);
    } else {
      this.getForm(this.currentFormName);
    }
  },

  mounted() {
    this.$formEvent.$on("submit", (value) => {});
    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
      if (modalId === "modal-id-1") {
        this.makeSelectDoctypeControl();
      }
    });
    const context = this;
    setTimeout(() => {
      context.populate();
    }, 1000);
  },
  components: {
    ListComponent,
  },
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
  margin-top: 2%;
}
.spacer-left-5 {
  margin-left: 5px !important;
  padding-left: 5px;
}
.render-form {
  padding-top: 0px;
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
.upper-case {
  text-transform: uppercase;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__18 = "data-v-527c8fc3";
  var __vue_module_identifier__18 = void 0;
  var __vue_is_functional_template__18 = false;
  function __vue_normalize__18(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="main-page mb-4">
    <!-- {{ response }} -->
    <div class="spacer-left-5" style="width: 100%">
      <b-row style="width: 100%">
        <b-row class="render-form" style="width: 100%">
          <b-row style="width: 100%" class="p-3 pull-right">
            <b-col></b-col>
            <div>
              <b-form-group
                v-slot="{ ariaDescribedby }"
                button-variant="outline-primary"
                buttons
              >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  buttons
                  button-variant="outline-primary"
                  value="A"
                  >Form</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  buttons
                  button-variant="outline-primary"
                  value="B"
                  >List</b-form-radio
                >
              </b-form-group>
            </div>

            <div>
              <b-button
                variant="primary"
                class="ml-4 my-3 pull-right"
                @click="saveDoctypeToDb()"
              >
                <i class="fa fa-save"></i> Save
              </b-button>

              <b-button
                variant="danger"
                class="ml-4 my-3 pull-right"
                @click="clearData()"
              >
                <i class="fa fa-close"></i> Reset
              </b-button>
            </div>
          </b-row>
          <b-row style="width: 100%" class="px-3" v-show="selected == 'A'">
            <FormRenderer
              :parent="parent"
              :form-configuration="formData"
              v-model="formInputData"
            />
          </b-row>
        </b-row>
      </b-row>

      <b-row
        v-if="response && response.reference_doctype_id && selected == 'B'"
      >
        <list-component
          :filters="{ reference_doctype_id: response.reference_doctype_id }"
          :doctype="'Form Repository'"
        ></list-component>
      </b-row>

      <b-modal id="bv-modal-example" hide-footer size="xl">
        <template #modal-title> Using <code>$bvModal</code> Methods </template>

        <FormRenderer
          :parent="parent"
          :form-configuration="formData"
          v-model="formInputData"
        />
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
          >Close Me</b-button
        >
      </b-modal>
      <b-modal id="modal-id-1" ref="save_modal" size="sm" hide-footer>
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

          <b-col :cols="12" id="form" class="ref-field-input" />
        </b-row>

        <b-button variant="primary" class="mt-3" block @click="save()"
          >Save</b-button
        >
      </b-modal>
    </div>
  </b-container>
</template>
<script>
import {
  getFormConfiguration,
  updateDoctypeData,
  updateFormData,
} from "../services/forms/builder.js";

import ListComponent from "../records/components/ListComponent.vue";
export default {
  name: "FormRenderViewx",

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
      formName: null,
      selectedItem: null,
      formInputData: null,
      originalConfig: null,
      allFormConfigurationData: null,
      changeLog: [],
      filters: { reference_doctype_id: this.response.reference_doctype_id },
      items: [],
      selected: "A",
    };
  },
  props: {
    selectedDoctype: { type: String },
    selectedDoctypeReference: { type: String },
    currentFormName: { type: String, default: null },
    patient: { type: Object },
    dataInput: { type: Object },
    response: { type: Object },
    isReadonly: { type: Boolean, default: false },
    parent: { type: String },
  },
  watch: {
    dataInput(newVal) {
      this.setValues(newVal);
    },

    previewMode(newVal, oldVal) {
      if (newVal) {
        const conf = this.configuration;
        keys = Object.keys(newVal);
        keys.forEach((key) => {
          this.formInputData[\`\${key}\`] = newVal[\`\${key}\`];
        });

        this.formData = conf;
      }
    },
    selectedDoctype(doctype) {
      if (doctype) {
        this.makeDoctypeItemControl(doctype);
      }
    },
    currentFormName(name) {
      if (name) {
        this.getForm(name);
      }
    },
  },
  methods: {
    openTable() {
      alert("Hellow");
    },
    clearData() {
      const val = {};
      const keys = Object.keys(this.formInputData);
      keys.forEach((key) => {
        val[key] = "";
      });

      this.setValues(val);
    },
    populate() {
      this.setValues(this.dataInput);
    },

    setValues(val) {
      this.$set(this, "formInputData", val);
    },
    getFormData() {
      console.log(JSON.stringify(this.formData));
      const data = this.formInputData;
      const returnedTarget = Object.assign({}, data);
      this.items.unshift(returnedTarget);
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
    get_new_frm(_frm) {
      const doctype = "Patient";
      const page = $("#form");

      const layout = new frappe.ui.form.Layout({
        parent: page,
        doctype: doctype,
        doctype_layout: null,
        frm: {},
        with_dashboard: false,
        card_layout: true,
      });
      layout.make();
      console.log(layout);

      return frm;
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
        this.formData = null;
        this.setValues({});
        this.selectedDoctype = null;
        this.selectedDoctypeReference = null;
        this.sendToTimeline(
          this.patient.patient,
          "Form Repository",
          saved.name,
          saved.owner
        );
      });
    },

    getForm(name) {
      getFormConfiguration({ name }).then((config) => {
        const formStringConfig = config.formdata;
        const configObject = JSON.parse(formStringConfig);

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

    sendToTimeline(
      patient,
      reference_doctype,
      reference_name,
      reference_owner
    ) {
      let formData = {
        reference_doctype,
        reference_name,
        doctype: "Patient Medical Record",
        patient,
        status: "Open",
        reference_owner,
      };

      saveFormData({ formData }).then((saved) => {
        frappe.show_alert("Timeline updated", 5);
      });
    },
    save() {
      let form_content = this.formInputData;
      form_content = JSON.stringify(form_content);
      this.allFormConfigurationData = this.response;
      const form_name = this.formName;
      const reference_doctype =
        this.allFormConfigurationData.owner_doctype ||
        this.selectedDoctype ||
        this.formData.formConfig.mappedDoctype;
      let reference_doctype_id = null;
      if (this.allFormConfigurationData.context_reference) {
        reference_doctype_id =
          this.context[this.allFormConfigurationData.context_owner_name] ||
          this.selectedDoctypeReference ||
          this.savedDocument.name;
      } else {
        reference_doctype_id =
          this.allFormConfigurationData.owner_doctype_reference ||
          this.selectedDoctypeReference ||
          this.savedDocument.name;
      }

      let name = this.response.name;

      let doctype = "Form Repository";
      let formData = {
        doctype,
        name,
        form_content,
        form_name,
        mapped_doctype_name: this.mappedDoctypeName,
        mapped_doctype: this.formData.formConfig.mappedDoctype,
        reference_doctype,
        reference_doctype_id,
        completion_status: "Completed",
        completed: 1,
      };

      updateFormData({ formData }).then((result) => {
        frappe.show_alert("Form updated " + result.name, 5);
      });
    },

    saveDoctypeToDb() {
      if (this.formData.formConfig.mappedDoctype) {
        console.log("FRM", "mapped doctype");
        const keys = Object.keys(this.formInputData);
        let formData = {
          doctype: this.formData.formConfig.mappedDoctype,
          name: this.response.mapped_doctype_name,
        };

        keys.forEach((key) => {
          if (this.formData.controls[key]) {
            const control = this.formData.controls[key];
            if (
              control &&
              (control.type === "radio" ||
                control.type === "dropDown" ||
                control.type === "checkbox")
            ) {
              if (control.items.length) {
                const erpValueObject = control.items.find(
                  (item) => item.value === this.formInputData[key]
                );
                const field = this.formData.controls[key].mappedField;
                if (field) {
                  formData[field] = erpValueObject.erpValue;
                }
              }
            } else {
              const field = this.formData.controls[key].mappedField;
              if (field) {
                formData[field] = this.formInputData[key];
              }
            }
          } else if (Array.isArray(this.formInputData[key])) {
            formData[key] = this.formInputData[key];
          }
        });

        updateDoctypeData({ formData }).then((saved) => {
          frappe.show_alert("Saved", 3);
          this.savedDocument = saved;
          this.save();
        });
      } else {
        console.log("FRM", "getFormData");
        this.getFormData();
      }
    },
  },

  created() {
    if (!this.currentFormName) {
      this.getForm(formName);
    } else {
      this.getForm(this.currentFormName);
    }
  },

  mounted() {
    this.$formEvent.$on("submit", (value) => {});
    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {
      if (modalId === "modal-id-1") {
        this.makeSelectDoctypeControl();
      }
    });
    const context = this;
    setTimeout(() => {
      context.populate();
    }, 1000);
  },
  components: {
    ListComponent,
  },
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
  margin-top: 2%;
}
.spacer-left-5 {
  margin-left: 5px !important;
  padding-left: 5px;
}
.render-form {
  padding-top: 0px;
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
.upper-case {
  text-transform: uppercase;
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
  function __vue_create_injector__18() {
    const styles = __vue_create_injector__18.styles || (__vue_create_injector__18.styles = {});
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
  var __vue_component__18 = /* @__PURE__ */ __vue_normalize__18({render: __vue_render__18, staticRenderFns: __vue_staticRenderFns__18}, __vue_inject_styles__18, __vue_script__18, __vue_scope_id__18, __vue_is_functional_template__18, __vue_module_identifier__18, false, __vue_create_injector__18, void 0, void 0);
  var FormRenderViewx_default = __vue_component__18;

  // ../frontend/frontend/public/js/forms/patient_tab/SpecificForm.vue
  var __vue_script__19 = {
    name: "Specific Form",
    components: {FormRenderViewx: FormRenderViewx_default},
    data() {
      return {
        dataInput: {},
        response: {},
        currentFormName: null,
        repoType: null,
        repoName: null
      };
    },
    props: {
      inputName: {type: String},
      formId: {type: String},
      loadedFormName: {type: String}
    },
    methods: {
      getFormData() {
        const doctype = "Form Repository";
        let name = this.formId;
        this.currentFormName = this.loadedFormName;
        getDoctypeByName({name, doctype}).then((data) => {
          this.response = data;
          this.dataInput = JSON.parse(data.form_content);
        });
      }
    },
    created() {
      this.getFormData();
    }
  };
  var __vue_render__19 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.currentFormName || _vm.loadedFormName ? _c("div", [
      _c("form-render-viewx", {
        attrs: {
          parent: _vm.loadedFormName,
          currentFormName: _vm.currentFormName,
          response: _vm.response,
          dataInput: _vm.dataInput,
          isReadonly: true
        }
      })
    ], 1) : _vm._e();
  };
  var __vue_staticRenderFns__19 = [];
  __vue_render__19._withStripped = true;
  var __vue_inject_styles__19 = function(inject) {
    if (!inject)
      return;
    inject("data-v-6de3a7ec_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "SpecificForm.vue"}, media: void 0});
  };
  var __vue_scope_id__19 = void 0;
  var __vue_module_identifier__19 = void 0;
  var __vue_is_functional_template__19 = false;
  function __vue_normalize__19(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div v-if="currentFormName || loadedFormName">\n    <form-render-viewx\n      :parent="loadedFormName"\n      :currentFormName="currentFormName"\n      :response="response"\n      :dataInput="dataInput"\n      :isReadonly="true"\n    />\n  </div>\n</template>\n\n<script>\nimport FormRenderViewx from "../../forms/FormRenderViewx.vue";\nimport { getDoctypeByName } from "../../services/doctype/list.js";\nexport default {\n  name: "Specific Form",\n  components: { FormRenderViewx },\n  data() {\n    return {\n      dataInput: {},\n      response: {},\n      currentFormName: null,\n      repoType: null,\n      repoName: null,\n    };\n  },\n  props: {\n    inputName: { type: String },\n    formId: { type: String },\n    loadedFormName: { type: String },\n  },\n  methods: {\n    getFormData() {\n      const doctype = "Form Repository";\n      let name = this.formId;\n      this.currentFormName = this.loadedFormName;\n      getDoctypeByName({ name, doctype }).then((data) => {\n        this.response = data;\n        this.dataInput = JSON.parse(data.form_content);\n      });\n    },\n  },\n  created() {\n    this.getFormData();\n  },\n};\n</script>\n\n<style></style>\n';
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
  function __vue_create_injector__19() {
    const styles = __vue_create_injector__19.styles || (__vue_create_injector__19.styles = {});
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
  var __vue_component__19 = /* @__PURE__ */ __vue_normalize__19({render: __vue_render__19, staticRenderFns: __vue_staticRenderFns__19}, __vue_inject_styles__19, __vue_script__19, __vue_scope_id__19, __vue_is_functional_template__19, __vue_module_identifier__19, false, __vue_create_injector__19, void 0, void 0);
  var SpecificForm_default = __vue_component__19;

  // ../frontend/frontend/public/js/forms/patient_tab/SpecificFormList.vue
  var __vue_script__20 = {
    name: "SpecificForm",
    components: {ListPage: ListPage_default, SpecificForm: SpecificForm_default},
    data() {
      return {
        doctype: "Form Repository",
        subTitle: "",
        fields: ["name", "form_content", "creation"],
        filters: {},
        currentForm: null
      };
    },
    props: {
      form: String,
      patient: String
    },
    mounted() {
      this.currentForm = this.form;
      this.filters = {form_name: this.currentForm, reference_doctype_id: this.patient};
    },
    methods: {
      selected(value) {
        if (value && value.length) {
          const id = this.currentForm;
          const form = value[0].name;
          this.formId = form;
          this.$emit("selectForm", form);
        }
      }
    }
  };
  var __vue_render__20 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.filters.form_name ? _c("div", [
      _c("list-page", {
        attrs: {
          doctype: _vm.doctype,
          fields: _vm.fields,
          title: _vm.currentForm,
          filters: _vm.filters
        },
        on: {selected: _vm.selected}
      }),
      _vm._v(" "),
      _c("b-modal", {attrs: {id: "modal-1", title: "BootstrapVue"}}, [_c("SpecificForm", {attrs: {formId: _vm.form}})], 1)
    ], 1) : _vm._e();
  };
  var __vue_staticRenderFns__20 = [];
  __vue_render__20._withStripped = true;
  var __vue_inject_styles__20 = function(inject) {
    if (!inject)
      return;
    inject("data-v-69290dd4_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "SpecificFormList.vue"}, media: void 0});
  };
  var __vue_scope_id__20 = void 0;
  var __vue_module_identifier__20 = void 0;
  var __vue_is_functional_template__20 = false;
  function __vue_normalize__20(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div v-if="filters.form_name">
      <list-page
        :doctype="doctype"
        :fields="fields"
        :title="currentForm"
        :filters="filters"
        @selected="selected"
      />

  <b-modal id="modal-1" title="BootstrapVue">
   <SpecificForm :formId ="form"></SpecificForm>
  </b-modal>
    </div>
  </template>
  
  <script>
  import ListPage from "../../records/components/ListPage.vue";
  import SpecificForm from "./SpecificForm.vue"
  export default {
    name: "SpecificForm",
    components: { ListPage,SpecificForm },
    data() {
      return {
        doctype: "Form Repository",
        subTitle: "",
        fields: ["name", "form_content", "creation"],
        filters: {},
        currentForm: null,
      };
    },
    props:{
      form: String,
      patient: String,
    },
  
    mounted() {
      this.currentForm = this.form;
      this.filters = { form_name: this.currentForm, reference_doctype_id: this.patient };
    },
  
    methods: {
      selected(value) {
        if (value && value.length) {
          const id = this.currentForm;
          const form = value[0].name;
          this.formId = form;
          this.$emit('selectForm', form)
        }
      },
    },
  };
  </script>
  
  <style></style>
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
  function __vue_create_injector__20() {
    const styles = __vue_create_injector__20.styles || (__vue_create_injector__20.styles = {});
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
  var __vue_component__20 = /* @__PURE__ */ __vue_normalize__20({render: __vue_render__20, staticRenderFns: __vue_staticRenderFns__20}, __vue_inject_styles__20, __vue_script__20, __vue_scope_id__20, __vue_is_functional_template__20, __vue_module_identifier__20, false, __vue_create_injector__20, void 0, void 0);
  var SpecificFormList_default = __vue_component__20;

  // ../frontend/frontend/public/js/forms/patient_tab/PatientInputForm.vue
  var __vue_script__21 = {
    name: "PatientInputForm",
    props: {
      patient: {type: Object}
    },
    components: {
      SpecificForm: SpecificForm_default,
      SpecificFormList: SpecificFormList_default
    },
    data: function() {
      return {
        formList: [],
        current: 1,
        form: null,
        formId: null,
        currentPatient: null
      };
    },
    watch: {
      patient(val) {
        this.currentPatient = val;
        this.getList();
        this.current = 1;
      }
    },
    methods: {
      getList() {
        if (this.currentPatient) {
          getFormList(this.currentPatient).then((response) => {
            this.formList = response;
          });
        }
      },
      goBack() {
        this.current = this.current - 1;
      },
      selectForm(form) {
        this.form = form;
        this.current = 2;
      },
      setFormSpecificType(formId) {
        this.formId = formId;
        this.current = 3;
      }
    },
    created() {
      this.patient = this.currentPatient;
      this.getList();
    }
  };
  var __vue_render__21 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "p-4"}, [
      _vm.current == 1 ? _c("b-row", [
        _c("b-list-group", {staticStyle: {width: "100% !important"}}, _vm._l(_vm.formList, function(form) {
          return _c("b-list-group-item", {
            key: form,
            staticClass: "d-flex justify-content-between align-items-center",
            on: {
              click: function($event) {
                return _vm.selectForm(form.form_name);
              }
            }
          }, [
            _vm._v("\n        " + _vm._s(form.form_name) + "\n        "),
            _c("b-badge", {attrs: {variant: "primary", pill: ""}}, [_vm._v(_vm._s(form.count))])
          ], 1);
        }), 1)
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.current == 2 ? _c("b-row", [
        _c("b-row", [
          _c("b-button", {
            staticClass: "ml-5",
            on: {
              click: function($event) {
                return _vm.goBack();
              }
            }
          }, [_vm._v(" Go Back")])
        ], 1),
        _vm._v(" "),
        _c("specific-form-list", {
          staticStyle: {width: "100% !important"},
          attrs: {form: _vm.form, patient: _vm.currentPatient},
          on: {selectForm: _vm.setFormSpecificType}
        })
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.current == 3 ? _c("b-row", {staticStyle: {width: "100% !important"}}, [
        _c("b-button", {
          staticClass: "mr-4",
          on: {
            click: function($event) {
              return _vm.goBack();
            }
          }
        }, [_vm._v(" Go Back")]),
        _vm._v(" "),
        _c("specific-form", {
          staticStyle: {width: "100% !important"},
          attrs: {formId: _vm.formId, loadedFormName: _vm.form}
        })
      ], 1) : _vm._e()
    ], 1);
  };
  var __vue_staticRenderFns__21 = [];
  __vue_render__21._withStripped = true;
  var __vue_inject_styles__21 = function(inject) {
    if (!inject)
      return;
    inject("data-v-23a00ec4_0", {source: "\n.card[data-v-23a00ec4] {\n  box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%);\n  transition: 0s;\n  min-height: calc(100vh - 265px);\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/patient_tab/PatientInputForm.vue"], "names": [], "mappings": ";AAuFA;EACA,wCAAA;EACA,cAAA;EACA,+BAAA;AACA", "file": "PatientInputForm.vue", "sourcesContent": ['<template>\n  <b-container class="p-4">\n    <b-row v-if="current == 1">\n      <b-list-group style="width: 100% !important">\n        <b-list-group-item\n          v-for="form in formList"\n          :key="form" @click="selectForm(form.form_name)"\n          class="d-flex justify-content-between align-items-center"\n        >\n          {{ form.form_name }}\n          <b-badge variant="primary" pill>{{ form.count }}</b-badge>\n        </b-list-group-item>\n      </b-list-group>\n    </b-row>\n\n    <b-row v-if="current == 2">\n      <b-row> <b-button @click="goBack()" class="ml-5"> Go Back</b-button></b-row>\n     <specific-form-list :form ="form" :patient ="currentPatient"  @selectForm="setFormSpecificType" style="width: 100% !important"></specific-form-list>\n    </b-row>\n\n    <b-row v-if="current == 3" style="width: 100% !important">\n      <b-button @click="goBack()" class="mr-4" > Go Back</b-button>\n      <specific-form :formId = "formId" :loadedFormName ="form" style="width: 100% !important"></specific-form>\n    </b-row>\n  </b-container>\n</template>\n  \n<script>\nimport { getFormList } from "./../../services/forms/view.js";\nimport SpecificFormList from "./SpecificFormList.vue"\nimport SpecificForm from "./SpecificForm.vue"\nexport default {\n  name: "PatientInputForm",\n  props: {\n    patient: { type: Object },\n  },\n  components:{\n    SpecificForm,\n    SpecificFormList, \n  },\n  data: function () {\n    return {\n      formList: [],\n      current: 1,\n      form: null,\n      formId: null,\n      currentPatient : null\n    };\n  },\n  watch:{\n    patient(val){\n      this.currentPatient = val;\n      this.getList()\n      this.current = 1;\n    }\n  },\n  methods: {\n    getList() {\n      if (this.currentPatient) {\n        getFormList(this.currentPatient).then(\n          (response) => {\n            this.formList = response;\n          }\n        );\n      }\n    },\n    \n    goBack(){\n      this.current = this.current -1\n    },\n    selectForm(form){\n      this.form = form;\n      this.current = 2;\n    },\n    setFormSpecificType(formId){\n      this.formId = formId;\n      this.current = 3;\n    }\n  },\n  created() {\n    this.patient = this.currentPatient;\n    this.getList();\n  },\n};\n</script>\n  \n  <style scoped>\n.card {\n  box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%);\n  transition: 0s;\n  min-height: calc(100vh - 265px);\n}\n</style>']}, media: void 0});
  };
  var __vue_scope_id__21 = "data-v-23a00ec4";
  var __vue_module_identifier__21 = void 0;
  var __vue_is_functional_template__21 = false;
  function __vue_normalize__21(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="p-4">\n    <b-row v-if="current == 1">\n      <b-list-group style="width: 100% !important">\n        <b-list-group-item\n          v-for="form in formList"\n          :key="form" @click="selectForm(form.form_name)"\n          class="d-flex justify-content-between align-items-center"\n        >\n          {{ form.form_name }}\n          <b-badge variant="primary" pill>{{ form.count }}</b-badge>\n        </b-list-group-item>\n      </b-list-group>\n    </b-row>\n\n    <b-row v-if="current == 2">\n      <b-row> <b-button @click="goBack()" class="ml-5"> Go Back</b-button></b-row>\n     <specific-form-list :form ="form" :patient ="currentPatient"  @selectForm="setFormSpecificType" style="width: 100% !important"></specific-form-list>\n    </b-row>\n\n    <b-row v-if="current == 3" style="width: 100% !important">\n      <b-button @click="goBack()" class="mr-4" > Go Back</b-button>\n      <specific-form :formId = "formId" :loadedFormName ="form" style="width: 100% !important"></specific-form>\n    </b-row>\n  </b-container>\n</template>\n  \n<script>\nimport { getFormList } from "./../../services/forms/view.js";\nimport SpecificFormList from "./SpecificFormList.vue"\nimport SpecificForm from "./SpecificForm.vue"\nexport default {\n  name: "PatientInputForm",\n  props: {\n    patient: { type: Object },\n  },\n  components:{\n    SpecificForm,\n    SpecificFormList, \n  },\n  data: function () {\n    return {\n      formList: [],\n      current: 1,\n      form: null,\n      formId: null,\n      currentPatient : null\n    };\n  },\n  watch:{\n    patient(val){\n      this.currentPatient = val;\n      this.getList()\n      this.current = 1;\n    }\n  },\n  methods: {\n    getList() {\n      if (this.currentPatient) {\n        getFormList(this.currentPatient).then(\n          (response) => {\n            this.formList = response;\n          }\n        );\n      }\n    },\n    \n    goBack(){\n      this.current = this.current -1\n    },\n    selectForm(form){\n      this.form = form;\n      this.current = 2;\n    },\n    setFormSpecificType(formId){\n      this.formId = formId;\n      this.current = 3;\n    }\n  },\n  created() {\n    this.patient = this.currentPatient;\n    this.getList();\n  },\n};\n</script>\n  \n  <style scoped>\n.card {\n  box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%);\n  transition: 0s;\n  min-height: calc(100vh - 265px);\n}\n</style>';
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
  function __vue_create_injector__21() {
    const styles = __vue_create_injector__21.styles || (__vue_create_injector__21.styles = {});
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
  var __vue_component__21 = /* @__PURE__ */ __vue_normalize__21({render: __vue_render__21, staticRenderFns: __vue_staticRenderFns__21}, __vue_inject_styles__21, __vue_script__21, __vue_scope_id__21, __vue_is_functional_template__21, __vue_module_identifier__21, false, __vue_create_injector__21, void 0, void 0);
  var PatientInputForm_default = __vue_component__21;

  // ../frontend/frontend/public/js/drug_administration/InpatientDrugAdministrationPage.vue
  var import_moment = __toModule(require_moment());
  var __vue_script__22 = {
    name: "InpatientDrugAdministration",
    data() {
      return {
        medicationOrders: [],
        fields: [
          "patient",
          "patient_name",
          "drug_name",
          "instructions",
          "dosage",
          {
            label: "Scheduled Time",
            key: "date",
            formatter: (value, key, item) => {
              return (0, import_moment.default)(item.date + " " + item.time).format("MMMM Do YYYY, h:mm:ss a");
            }
          },
          {
            label: "Administration Time",
            key: "administration_time",
            formatter: (value, key, item) => {
              return value ? (0, import_moment.default)(value).fromNow() : "-";
            }
          },
          {label: "Actions", key: "action"}
        ],
        text: "",
        validPf: false,
        infoModal: {
          id: "info-modal",
          title: "",
          data: {},
          content: {}
        },
        filters: {},
        visible: false
      };
    },
    props: {
      patientName: {
        type: String,
        default: null,
        required: true
      },
      serviceUnit: {
        type: String,
        default: "",
        required: true
      },
      tabIndex: {
        type: Number,
        default: "",
        required: true
      },
      index: {
        type: Number,
        default: "",
        required: true
      }
    },
    methods: {
      info(item, button) {
        this.infoModal.title = `Confirm Order to ${this.patientName}`;
        this.infoModal.content = item;
        this.$root.$emit("bv::show::modal", this.infoModal.id, button);
      },
      getStatus(item) {
        const value = item.is_completed;
        const time = +new Date(item.date + " " + item.time);
        if (time < +new Date() && !value) {
          return "Overdue";
        }
        return value ? "Completed" : "Pending";
      },
      resetInfoModal() {
        this.infoModal.title = "";
        this.infoModal.content = {};
      },
      submit(order) {
        createMedicationEntry({order, ward: this.serviceUnit}).then((response) => {
          const current = this;
          getPatientUnboundedMedicationOrder(this.patientName).then((medicationOrders) => {
            current.medicationOrders = medicationOrders;
          });
        });
      },
      blur() {
        validatePFNumber(this.text).then((value) => {
          this.validPf = value;
        });
      },
      focus() {
        validatePFNumber(this.text).then((value) => {
          this.validPf = false;
        });
      },
      setServiceUnit(unit) {
        this.filters.service_unit = unit;
        this.service_unit = unit;
        Vue.set(this.filters, "service_unit", unit);
      },
      makeDrugControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Drug"),
            fieldtype: "Link",
            fieldname: "drug",
            options: "Item",
            filters: {
              is_stock_item: 1,
              disabled: 0,
              has_variants: "No"
            },
            placeholder: __("Search Drug"),
            onchange: function() {
              if (this.value) {
                me.filters.item_code = this.value;
                me.applyFilters();
              }
            }
          },
          parent: this.$refs["comment-input"],
          render_input: true
        });
        customer_field.toggle_label(false);
      },
      makePatientControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: __("Patient"),
            fieldtype: "Link",
            fieldname: "patient",
            options: "Patient",
            filters: {},
            placeholder: __("Search Patient"),
            onchange: function() {
              if (this.value) {
                me.filters.patient = this.value;
                me.applyFilters();
              }
            }
          },
          parent: this.$refs["comment-input1"],
          render_input: true
        });
        customer_field.toggle_label(false);
      },
      applyFilters() {
        getPatientUnboundedMedicationOrder(this.filters).then((medicationOrders) => {
          this.medicationOrders = medicationOrders;
        });
      },
      clearFilters() {
        this.filters = {};
        this.filters.service_unit = this.service_unit;
        this.medicationOrders = [];
      }
    },
    computed: {},
    mounted() {
      this.makeDrugControl();
      this.makePatientControl();
    },
    watch: {
      patientName() {
        getPatientUnboundedMedicationOrder(this.filters).then((medicationOrders) => {
          this.medicationOrders = medicationOrders;
        });
      },
      tabIndex() {
        if (this.tabIndex === this.index) {
          getPatientUnboundedMedicationOrder(this.filters).then((medicationOrders) => {
            this.medicationOrders = medicationOrders;
          });
        }
      }
    },
    components: {
      ServiceUnitSelect: ServiceUnitSelect_default,
      PatientInputForm: PatientInputForm_default,
      SpecificFormList: SpecificFormList_default
    }
  };
  var __vue_render__22 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", [
      _c("b-row", [_c("patient-input-form", {attrs: {patient: "Ronald Trump"}})], 1),
      _vm._v(" "),
      _c("b-row", [_c("specific-form-list", {attrs: {patient: "Ronald Trump"}})], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mx-4 mt-2"}, [
        _c("b-col", {staticClass: "mb-2", attrs: {md: "3", sm: "12"}}, [
          _c("service-unit-select", {
            staticClass: "width:100%",
            on: {"service-unit": _vm.setServiceUnit}
          })
        ], 1),
        _vm._v(" "),
        _c("b-col", {attrs: {md: "3", sm: "12"}}, [
          _c("div", {ref: "comment-input"})
        ]),
        _vm._v(" "),
        _c("b-col", {attrs: {md: "3", sm: "12"}}, [
          _c("div", {ref: "comment-input1"})
        ]),
        _vm._v(" "),
        _c("b-col", [
          _c("b-button", {
            directives: [
              {
                name: "b-toggle",
                rawName: "v-b-toggle.sidebar-right",
                modifiers: {"sidebar-right": true}
              }
            ],
            class: _vm.visible ? null : "collapsed",
            attrs: {
              "aria-expanded": _vm.visible ? "true" : "false",
              "aria-controls": "collapse-4",
              variant: "success"
            },
            on: {
              click: function($event) {
                return _vm.applyFilters();
              }
            }
          }, [_vm._v("\n        Go\n      ")])
        ], 1),
        _vm._v(" "),
        _c("b-col", [
          _c("b-button", {
            directives: [
              {
                name: "b-toggle",
                rawName: "v-b-toggle.sidebar-right",
                modifiers: {"sidebar-right": true}
              }
            ],
            class: _vm.visible ? null : "collapsed",
            attrs: {
              "aria-expanded": _vm.visible ? "true" : "false",
              "aria-controls": "collapse-4",
              variant: "primary"
            },
            on: {
              click: function($event) {
                _vm.visible = !_vm.visible;
              }
            }
          }, [_vm._v("\n        Filter\n      ")])
        ], 1),
        _vm._v(" "),
        _c("b-col", [
          _c("b-button", {
            class: _vm.visible ? null : "collapsed",
            attrs: {variant: "danger"},
            on: {
              click: function($event) {
                return _vm.clearFilters();
              }
            }
          }, [_vm._v("\n        Clear \n      ")])
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mx-3 mt-1"}, _vm._l(Object.values(_vm.filters), function(item) {
        return _c("b-badge", {
          key: item,
          attrs: {variant: "primary"},
          on: {
            click: function($event) {
              return _vm.removeSingleFilter();
            }
          }
        }, [_vm._v(_vm._s(item))]);
      }), 1),
      _vm._v(" "),
      _c("b-sidebar", {
        attrs: {
          id: "sidebar-right",
          title: "Filters",
          right: "",
          shadow: ""
        }
      }, [
        _c("div", [
          _c("b-row", {staticClass: "mt-2 mx-1 mb-2"}, [
            _c("b-col", {attrs: {cols: "12"}}, [
              _c("b-form-datepicker", {
                staticClass: "mb-2",
                attrs: {
                  placeholder: "From Date",
                  id: "example-datepicker"
                },
                model: {
                  value: _vm.filters.from_date,
                  callback: function($$v) {
                    _vm.$set(_vm.filters, "from_date", $$v);
                  },
                  expression: "filters.from_date"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("b-col", {staticClass: "mt-2 mb-2", attrs: {cols: "12"}}, [
              _c("b-form-timepicker", {
                attrs: {
                  hour12: true,
                  "label-no-time-selected": "From time"
                },
                model: {
                  value: _vm.filters.from_time,
                  callback: function($$v) {
                    _vm.$set(_vm.filters, "from_time", $$v);
                  },
                  expression: "filters.from_time"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("b-col", {attrs: {cols: "12"}}, [
              _c("b-form-datepicker", {
                staticClass: "mb-2",
                attrs: {
                  placeholder: "To Date",
                  id: "example-datepicker2"
                },
                model: {
                  value: _vm.filters.to_date,
                  callback: function($$v) {
                    _vm.$set(_vm.filters, "to_date", $$v);
                  },
                  expression: "filters.to_date"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("b-col", {attrs: {cols: "12"}}, [
              _c("b-form-timepicker", {
                attrs: {
                  hour12: true,
                  "label-no-time-selected": "To time"
                },
                model: {
                  value: _vm.filters.to_time,
                  callback: function($$v) {
                    _vm.$set(_vm.filters, "to_time", $$v);
                  },
                  expression: "filters.to_time"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("b-col", {attrs: {cols: "12"}}, [
              _c("b-form-checkbox", {
                attrs: {
                  id: "checkbox-1",
                  name: "checkbox-1",
                  value: 1,
                  "unchecked-value": 0
                },
                model: {
                  value: _vm.filters.is_completed,
                  callback: function($$v) {
                    _vm.$set(_vm.filters, "is_completed", $$v);
                  },
                  expression: "filters.is_completed"
                }
              }, [_vm._v("\n   Is Completed\n  ")])
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("b-container", [
            _c("b-row", {staticClass: "mt-4"}, [
              _c("b-col", [
                _c("b-button", {
                  attrs: {variant: "primary"},
                  on: {click: _vm.applyFilters}
                }, [_vm._v("Appy Filters")])
              ], 1)
            ], 1)
          ], 1)
        ], 1)
      ]),
      _vm._v(" "),
      _c("b-row", {staticClass: "mx-2"}, [
        _c("b-table", {
          staticClass: "table",
          attrs: {
            fields: _vm.fields,
            stacked: "md",
            small: "",
            bordered: "",
            hover: "",
            items: _vm.medicationOrders
          },
          scopedSlots: _vm._u([
            {
              key: "cell(action)",
              fn: function(row) {
                return [
                  _c("b-button", {
                    staticStyle: {width: "100px"},
                    attrs: {
                      disabled: row.item.is_completed === 1 || _vm.getStatus(row.item) === "Pending",
                      variant: row.item.is_completed ? "success" : _vm.getStatus(row.item) === "Overdue" ? "danger" : "primary"
                    },
                    on: {
                      click: function($event) {
                        return _vm.info(row.item, $event.target);
                      }
                    }
                  }, [
                    _vm._v("\n        " + _vm._s(row.item.is_completed ? "Completed" : _vm.getStatus(row.item) === "Pending" ? "Pending" : "Administer") + "\n      ")
                  ])
                ];
              }
            }
          ])
        })
      ], 1),
      _vm._v(" "),
      _c("b-modal", {
        attrs: {
          "ok-disabled": !_vm.validPf,
          id: _vm.infoModal.id,
          size: "lg",
          title: _vm.infoModal.title
        },
        on: {
          ok: function($event) {
            return _vm.submit(_vm.infoModal.content);
          },
          hide: _vm.resetInfoModal
        },
        scopedSlots: _vm._u([
          {
            key: "modal-title",
            fn: function() {
              return [_c("h3", [_vm._v(_vm._s(_vm.infoModal.title))])];
            },
            proxy: true
          },
          {
            key: "modal-ok",
            fn: function() {
              return [_vm._v(" Confirm ")];
            },
            proxy: true
          }
        ])
      }, [
        _vm._v(" "),
        _c("pre", [_vm._v(_vm._s(_vm.infoModal.content.drug_name))]),
        _vm._v(" "),
        _c("strong", [_vm._v("Scheduled Time")]),
        _vm._v(" "),
        _c("pre", [
          _vm._v(_vm._s(_vm.infoModal.content.date) + " at " + _vm._s(_vm.infoModal.content.time))
        ]),
        _vm._v(" "),
        _c("div", {staticStyle: {"margin-top": "16px"}}, [
          _c("strong", [_vm._v("NDC Drug Name:")]),
          _vm._v(" "),
          _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
            _vm._v(_vm._s(_vm.infoModal.content.ndc_drug_name))
          ])
        ]),
        _vm._v(" "),
        _c("div", {staticStyle: {"margin-top": "16px"}}, [
          _c("strong", [_vm._v("Dose:")]),
          _vm._v(" "),
          _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
            _vm._v(_vm._s(_vm.infoModal.content.dose))
          ])
        ]),
        _vm._v(" "),
        _c("div", {staticStyle: {"margin-top": "16px"}}, [
          _c("strong", [_vm._v("Route of Administration:")]),
          _vm._v(" "),
          _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
            _vm._v(_vm._s(_vm.infoModal.content.route_of_administration))
          ])
        ]),
        _vm._v(" "),
        _c("div", {staticStyle: {"margin-top": "16px"}}, [
          _c("strong", [_vm._v("Instructions:")]),
          _vm._v(" "),
          _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
            _vm._v(_vm._s(_vm.infoModal.content.instructions))
          ])
        ]),
        _vm._v(" "),
        _c("label", {attrs: {for: "pf-number"}}, [
          _vm._v("Enter your PF number to confirm Medication Entry Administration")
        ]),
        _vm._v(" "),
        _c("b-form-input", {
          staticClass: "error",
          attrs: {
            state: _vm.validPf,
            id: "pf-number",
            placeholder: "Enter your PF Number"
          },
          on: {
            blur: function($event) {
              return _vm.blur();
            },
            focus: function($event) {
              return _vm.focus();
            }
          },
          model: {
            value: _vm.text,
            callback: function($$v) {
              _vm.text = $$v;
            },
            expression: "text"
          }
        })
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__22 = [];
  __vue_render__22._withStripped = true;
  var __vue_inject_styles__22 = void 0;
  var __vue_scope_id__22 = void 0;
  var __vue_module_identifier__22 = void 0;
  var __vue_is_functional_template__22 = false;
  function __vue_normalize__22(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container>

    <b-row> 
      <patient-input-form :patient="'Ronald Trump'"></patient-input-form>
    </b-row>

    <b-row> 
      <specific-form-list :patient="'Ronald Trump'"></specific-form-list>
    </b-row>

    <b-row class="mx-4 mt-2">
      <b-col md="3"  sm="12" class="mb-2">
        <service-unit-select
          class="width:100%"
          @service-unit="setServiceUnit"
        />
      </b-col>
      <b-col md="3"  sm="12">
        <div ref="comment-input"></div>
      </b-col>
      <b-col md="3" sm="12">
        <div ref="comment-input1"></div>
      </b-col>

    <b-col>
        <b-button
          :class="visible ? null : 'collapsed'"
          :aria-expanded="visible ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="applyFilters()"
          v-b-toggle.sidebar-right
          variant="success"
        >
          Go
        </b-button>
      </b-col>
      <b-col>
        <b-button
          :class="visible ? null : 'collapsed'"
          :aria-expanded="visible ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="visible = !visible"
          v-b-toggle.sidebar-right
          variant="primary"
        >
          Filter
        </b-button>
      </b-col>

       <b-col>
        <b-button
          :class="visible ? null : 'collapsed'"
          @click="clearFilters()"
          variant="danger"
        >
          Clear 
        </b-button>
      </b-col>

    </b-row>
     <b-row class="mx-3 mt-1">
        <b-badge v-for="item in Object.values(filters)"  :key="item" variant="primary" @click="removeSingleFilter()">{{item}}</b-badge>
    
    </b-row>
    <b-sidebar id="sidebar-right" title="Filters" right shadow>
      <div>
         <b-row class="mt-2 mx-1 mb-2">
      <b-col  cols="12">
              <b-form-datepicker placeholder="From Date" id="example-datepicker" v-model="filters.from_date" class="mb-2"></b-form-datepicker>
      </b-col>

        <b-col cols="12"  class="mt-2 mb-2">
           <b-form-timepicker :hour12="true" label-no-time-selected="From time" v-model="filters.from_time"></b-form-timepicker>
  
      </b-col >

       <b-col cols="12">
              <b-form-datepicker placeholder="To Date" id="example-datepicker2" v-model="filters.to_date" class="mb-2"></b-form-datepicker>
      </b-col>
    

       <b-col cols="12">
          <b-form-timepicker :hour12="true" label-no-time-selected="To time" v-model="filters.to_time"></b-form-timepicker>
      </b-col>
      <b-col cols="12">
            <b-form-checkbox
      id="checkbox-1"
      v-model="filters.is_completed"
      name="checkbox-1"
      :value="1"
      :unchecked-value="0"
    >
     Is Completed
    </b-form-checkbox>

      </b-col>
    
    </b-row>   

     <b-container>
          <b-row class="mt-4">
          <b-col>
             <b-button variant="primary" @click="applyFilters">Appy Filters</b-button>
        </b-col>
          </b-row>
       </b-container>

      </div>
    </b-sidebar>
  
    <b-row class="mx-2">
      <b-table class="table" :fields="fields" stacked="md" small bordered hover :items="medicationOrders">
      <template #cell(action)="row">
        <b-button
          :disabled="row.item.is_completed === 1 || getStatus(row.item) === 'Pending'"
          @click="info(row.item, $event.target)"
          style="width: 100px"
          :variant="row.item.is_completed ? 'success' : getStatus(row.item) === 'Overdue' ? 'danger' : 'primary'"
        >
          {{ row.item.is_completed ? 'Completed' : getStatus(row.item) === 'Pending' ? 'Pending' : 'Administer' }}
        </b-button>
      </template>
    </b-table>
    </b-row>
    
    <b-modal
      :ok-disabled="!validPf"
      :id="infoModal.id"
      size="lg"
      :title="infoModal.title"
      @ok="submit(infoModal.content)"
      @hide="resetInfoModal"
    >
      <template #modal-title
        ><h3>{{ infoModal.title }}</h3></template
      >
      <pre>{{ infoModal.content.drug_name }}</pre>
      <strong>Scheduled Time</strong>
      <pre>{{ infoModal.content.date }} at {{ infoModal.content.time }}</pre>
       <div style="margin-top: 16px">
            <strong>NDC Drug Name:</strong>
            <pre style="margin-bottom: 0">{{ infoModal.content.ndc_drug_name }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Dose:</strong>
            <pre style="margin-bottom: 0">{{ infoModal.content.dose }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Route of Administration:</strong>
            <pre style="margin-bottom: 0">{{ infoModal.content.route_of_administration }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Instructions:</strong>
            <pre style="margin-bottom: 0">{{ infoModal.content.instructions }}</pre>
          </div>
      <label for="pf-number">Enter your PF number to confirm Medication Entry Administration</label>
      <b-form-input
        :state="validPf"
        @blur="blur()"
        @focus="focus()"
        class="error"
        id="pf-number"
        v-model="text"
        placeholder="Enter your PF Number"
      ></b-form-input>
      <template #modal-ok> Confirm </template>
    </b-modal>
  </b-container>
</template>
<script>
import {
 getPatientUnboundedMedicationOrder,
  createMedicationEntry,
  validatePFNumber,
} from './../services/patient_chart/api';
import ServiceUnitSelect  from '../patient/components/ServiceUnitSelect.vue'
import PatientInputForm from './../forms/patient_tab/PatientInputForm.vue'
import SpecificFormList from './../forms/patient_tab/SpecificFormList.vue'
import moment from 'moment';
export default {
  name: 'InpatientDrugAdministration',
  data() {
    return {
      medicationOrders: [],
      fields: [
	'patient',
        'patient_name',
        'drug_name',
        'instructions',

        'dosage',
        {
          label: 'Scheduled Time',
          key: 'date',
          formatter: (value, key, item) => {
            return moment(item.date + ' ' + item.time).format('MMMM Do YYYY, h:mm:ss a');
          },
        },
        {
          label: 'Administration Time',
          key: 'administration_time',
          formatter: (value, key, item) => {
            return value ? moment(value).fromNow() : '-';
          },
        },
        { label: 'Actions', key: 'action' },
      ],
      text: '',
      validPf: false,
      infoModal: {
        id: 'info-modal',
        title: '',
        data: {},
        content: {},
      },
        filters:{
      
      },
       visible: false
    };
  },
  props: {
    patientName: {
      type: String,
      default: null,
      required: true,
    },
    serviceUnit: {
      type: String,
      default: '',
      required: true,
    },
    tabIndex: {
      type: Number,
      default: '',
      required: true,
    },
    index: {
      type: Number,
      default: '',
      required: true,
    },
  },
  methods: {
    info(item, button) {
      this.infoModal.title = \`Confirm Order to \${this.patientName}\`;
      this.infoModal.content = item;
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    getStatus(item) {
      const value = item.is_completed;
      const time = +new Date(item.date + ' ' + item.time);
      if (time < +new Date() && !value) {
        return 'Overdue';
      }
      return value ? 'Completed' : 'Pending';
    },
    resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.content = {};
    },
    submit(order) {
      createMedicationEntry({ order, ward: this.serviceUnit }).then((response) => {
        const current = this;
        getPatientUnboundedMedicationOrder(this.patientName).then((medicationOrders) => {
          current.medicationOrders = medicationOrders;
        });
      });
    },
    blur() {
      validatePFNumber(this.text).then((value) => {
        this.validPf = value;
      });
    },
    focus() {
      validatePFNumber(this.text).then((value) => {
        this.validPf = false;
      });
    },
      setServiceUnit(unit) {
         this.filters.service_unit = unit;
         this.service_unit = unit; 
         Vue.set(this.filters, 'service_unit', unit)
    },
    makeDrugControl() {
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Drug"),
          fieldtype: "Link",
          fieldname: "drug",
          options: "Item",
          filters: {
            is_stock_item: 1,
            disabled: 0,
            has_variants: "No",
          },
          placeholder: __("Search Drug"),
          onchange: function () {
            if (this.value) {
              me.filters.item_code =this.value;
              me.applyFilters();
            }
          },
        },
        parent: this.$refs["comment-input"],
        render_input: true,
      });

      customer_field.toggle_label(false);
    },
    makePatientControl() {
      let me = this;
      let customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Patient"),
          fieldtype: "Link",
          fieldname: "patient",
          options: "Patient",
          filters: {},
          placeholder: __("Search Patient"),
          onchange: function () {
            if (this.value) {
              me.filters.patient = this.value;
              me.applyFilters();
            }
          },
        },
        parent: this.$refs["comment-input1"],
        render_input: true,
      });

      customer_field.toggle_label(false);
    },
     applyFilters(){
        getPatientUnboundedMedicationOrder(this.filters).then(
         (medicationOrders) => {
        this.medicationOrders = medicationOrders;
      }
    );
    },
    clearFilters(){
      this.filters = {};
      this.filters.service_unit = this.service_unit; 
      this.medicationOrders = [];
    }
  },
  computed: {},
  mounted() {
    this.makeDrugControl();
    this.makePatientControl();
  },
  watch: {
    patientName() {
      getPatientUnboundedMedicationOrder(this.filters).then((medicationOrders) => {
        this.medicationOrders = medicationOrders;
      });
    },
    tabIndex() {
      if (this.tabIndex === this.index) {
        getPatientUnboundedMedicationOrder(this.filters).then((medicationOrders) => {
          this.medicationOrders = medicationOrders;
        });
      }
    },
    
  },
  components:{
    ServiceUnitSelect,
    PatientInputForm,
    SpecificFormList,
  },
};
</script>
`;
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
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
  var __vue_component__22 = /* @__PURE__ */ __vue_normalize__22({render: __vue_render__22, staticRenderFns: __vue_staticRenderFns__22}, __vue_inject_styles__22, __vue_script__22, __vue_scope_id__22, __vue_is_functional_template__22, __vue_module_identifier__22, false, void 0, void 0, void 0);
  var InpatientDrugAdministrationPage_default = __vue_component__22;

  // ../frontend/node_modules/vuex/dist/vuex.mjs
  var import_vuex_common = __toModule(require_vuex_common());

  // ../frontend/frontend/public/js/state/state.js
  var getUserInfo2 = () => {
    let userInfo = {};
    return userInfo;
  };
  var state2 = {
    AppActiveUser: getUserInfo2(),
    tableData: []
  };
  var state_default2 = state2;

  // ../frontend/frontend/public/js/state/getters.js
  var getters2 = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default2 = getters2;

  // ../frontend/frontend/public/js/state/mutations.js
  var mutations2 = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default2 = mutations2;

  // ../frontend/frontend/public/js/state/actions.js
  var actions2 = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default2 = actions2;

  // ../frontend/frontend/public/js/state/patient/modulePatientState.js
  var modulePatientState_default = {
    patients: [],
    patientSearchQuery: "",
    patientFilter: null,
    selectedPatientDetails: {},
    selectedPatient: {},
    timelineData: []
  };

  // ../frontend/frontend/public/js/state/patient/modulePatientMutations.js
  var modulePatientMutations_default = {
    SET_PATIENT_SEARCH_QUERY(state5, query) {
      state5.patientSearchQuery = query;
    },
    UPDATE_PATIENT_FILTER(state5, filter) {
      state5.patientFilter = filter;
    },
    SET_PATIENTS(state5, patients) {
      state5.patients = patients;
    },
    ADD_PATIENT(state5, patient) {
      state5.patients.unshift(patient);
    },
    UPDATE_PATIENT(state5, patient) {
      const patientIndex = state5.patients.findIndex((t) => t.id == patient.id);
      Object.assign(state5.patients[patientIndex], patient);
    },
    SET_SELECTED_PATIENT(state5, patient) {
      state5.selectedPatient = patient;
    },
    SET_SELECTED_PATIENT_DETAILS(state5, patientDetails) {
      state5.selectedPatientDetails = patientDetails;
    },
    SET_TIMELINE_DATA(state5, timelineData) {
      state5.timelineData = timelineData;
    }
  };

  // ../frontend/frontend/public/js/services/patient/patient.js
  var api6 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatientInfo = (patient_name) => api6({
    method: "clinical.api.patients.get_patient_details",
    args: patient_name
  });

  // ../frontend/frontend/public/js/state/patient/modulePatientActions.js
  var modulePatientActions_default = {
    setPatientSearchQuery({commit}, query) {
      commit("SET_PATIENT_SEARCH_QUERY", query);
    },
    fetchPatients({commit}, payload) {
      console.log("BACK AT IT", payload);
      if (!payload.serviceUnit) {
        return;
      }
      payload.work = void 0;
      return getPatientsPerServiceUnit(payload).then((patients) => {
        const inpatient_outpatient = [...patients.inpatients, ...patients.outpatients];
        console.log("FETCH SUCCESS", inpatient_outpatient);
        commit("SET_PATIENTS", inpatient_outpatient);
      }).catch((error) => {
        console.log(error);
      });
    },
    transferPatient: ({commit}, {patient, callback, ...transfer_payload}) => transferPatient(transfer_payload).then(() => {
      const newPatient = {...patient, bed: transfer_payload.service_unit, service_unit: transfer_payload.service_unit};
      commit("UPDATE_PATIENT", newPatient);
      callback();
    }),
    setSelectedPatient({commit}, patient) {
      return commit("SET_SELECTED_PATIENT", patient);
    },
    fetchSelectedPatientDetails({commit}, payload) {
      console.log(payload);
      if (payload.patient_name) {
        return getPatientInfo(payload).then((patientData) => {
          commit("SET_SELECTED_PATIENT_DETAILS", patientData);
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    setTimelineData({commit}, timelineData) {
      return commit("SET_TIMELINE_DATA", timelineData);
    }
  };

  // ../frontend/frontend/public/js/state/patient/modulePatientGetters.js
  var modulePatientGetters_default = {
    getPatients: (state5) => state5.patients,
    getPatient: (state5) => (patientName) => state5.patients.find((patient) => patient.name == patientName),
    getSelectedPatient: (state5) => state5.selectedPatient,
    getSelectedPatientDetails: (state5) => state5.selectedPatientDetails || {},
    getTimelineData: (state5) => state5.timelineData
  };

  // ../frontend/frontend/public/js/state/patient/modulePatient.js
  var modulePatient_default = {
    namespaced: true,
    state: modulePatientState_default,
    mutations: modulePatientMutations_default,
    actions: modulePatientActions_default,
    getters: modulePatientGetters_default
  };

  // ../frontend/frontend/public/js/state/clinical_procedures/procedureState.js
  var procedureState_default = {
    procedureTemplates: [],
    scheduledProcedures: [],
    unScheduledProcedures: [],
    procedureStatistics: [],
    queryParams: {},
    pagination: {
      per_page: 12,
      current_page: 1,
      page_count: 12
    }
  };

  // ../frontend/frontend/public/js/state/clinical_procedures/procedureMutations.js
  var procedureMutations_default = {
    SET_PROCEDURE_TEMPLATES(state5, templates) {
      state5.procedureTemplates = templates;
    },
    SET_UNSCHEDULED_PROCEDURES(state5, unScheduledProcedures) {
      state5.unScheduledProcedures = unScheduledProcedures;
    },
    SET_SCHEDULED_PROCEDURES(state5, scheduledTemplates) {
      state5.scheduledProcedures = scheduledTemplates;
    },
    SET_QUERY_PARAMS(state5, query) {
      state5.queryParams = {...state5.queryParams, ...query};
    },
    SET_PAGINATION_META(state5, pagination) {
      state5.pagination = pagination;
    },
    SET_PROCEDURE_STATISTICS(state5, procedureStatistics) {
      state5.procedureStatistics = procedureStatistics;
    }
  };

  // ../frontend/frontend/public/js/services/clinical_procedures/clinical_procedures.js
  var api7 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: ({message}) => resolve(message), error: reject}));
  var getScheduledOrUnscheduledprocedures = (args) => {
    return api7({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedures_per_service_unit",
      args
    });
  };
  var getClinicalProcedureTemplates = (args) => {
    return api7({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedure_templates_per_service_unit",
      args
    });
  };
  var getProcedureStatistics = (args) => {
    return api7({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_procedure_statistics",
      args
    });
  };

  // ../frontend/frontend/public/js/state/clinical_procedures/procedureActions.js
  var procedureActions_default = {
    fetchProcedures({commit}, query) {
      return getScheduledOrUnscheduledprocedures(query).then(({scheduled_procedures, un_scheduled_procedures, pagination}) => {
        commit("SET_UNSCHEDULED_PROCEDURES", un_scheduled_procedures);
        commit("SET_SCHEDULED_PROCEDURES", scheduled_procedures);
        commit("SET_PAGINATION_META", pagination);
      });
    },
    fetchProcedureTemplates({commit}, args) {
      return getClinicalProcedureTemplates(args).then((templates) => {
        commit("SET_PROCEDURE_TEMPLATES", templates);
      });
    },
    setQueryParams({commit}, payload) {
      return commit("SET_QUERY_PARAMS", payload);
    },
    fetchProcedureStatistics({commit}, args) {
      return getProcedureStatistics(args).then((procedures) => {
        commit("SET_PROCEDURE_STATISTICS", procedures);
      });
    }
  };

  // ../frontend/frontend/public/js/state/clinical_procedures/procedureGetters.js
  var procedureGetters_default = {
    getUnscheduledProcedures: (state5) => state5.unScheduledProcedures,
    getScheduledProcedures: (state5) => {
      return state5.scheduledProcedures;
    },
    getProceduretemplates: (state5) => state5.procedureTemplates,
    getQueryParams: (state5) => state5.queryParams,
    getPaginationMeta: (state5) => state5.pagination,
    getProcedureStatistics: (state5) => state5.procedureStatistics
  };

  // ../frontend/frontend/public/js/state/clinical_procedures/procedures.js
  var procedures_default = {
    namespaced: true,
    state: procedureState_default,
    mutations: procedureMutations_default,
    actions: procedureActions_default,
    getters: procedureGetters_default
  };

  // ../frontend/frontend/public/js/state/serviceUnit/moduleServiceUnitState.js
  var moduleServiceUnitState_default = {
    serviceUnits: [],
    selectedServiceUnit: {}
  };

  // ../frontend/frontend/public/js/state/serviceUnit/moduleServiceUnitMutations.js
  var moduleServiceUnitMutations_default = {
    SET_SERVICE_UNITS(state5, serviceUnits) {
      state5.serviceUnits = serviceUnits;
    },
    SET_SELECTED_SERVICE_UNIT(state5, selectedServiceUnit) {
      state5.selectedServiceUnit = selectedServiceUnit;
    }
  };

  // ../frontend/frontend/public/js/state/serviceUnit/moduleServiceUnitActions.js
  var moduleServiceUnitActions_default = {
    setSelectedServiceUnit({commit}, serviceUnit) {
      commit("SET_SELECTED_SERVICE_UNIT", serviceUnit);
    },
    fetchMyServiceUnits: ({commit, state: state5}, payload) => {
      getMyServiceUnits().then((serviceUnits) => {
        commit("SET_SERVICE_UNITS", serviceUnits);
        if (!state5.selectedServiceUnit.name) {
          if (serviceUnits.length) {
            commit("SET_SELECTED_SERVICE_UNIT", serviceUnits[0]);
          }
        }
      });
    }
  };

  // ../frontend/frontend/public/js/state/serviceUnit/moduleServiceUnitGetters.js
  var moduleServiceUnitGetters_default = {
    getServiceUnits: (state5) => state5.serviceUnits,
    getSelectedServiceUnit: (state5) => state5.selectedServiceUnit
  };

  // ../frontend/frontend/public/js/state/serviceUnit/moduleServiceUnit.js
  var moduleServiceUnit_default = {
    namespaced: true,
    state: moduleServiceUnitState_default,
    mutations: moduleServiceUnitMutations_default,
    actions: moduleServiceUnitActions_default,
    getters: moduleServiceUnitGetters_default
  };

  // ../frontend/frontend/public/js/state/servicePoint/moduleServicePointState.js
  var moduleServicePointState_default = {
    servicePoints: [],
    selectedServicePoint: {},
    myLocation: ""
  };

  // ../frontend/frontend/public/js/state/servicePoint/moduleServicePointMutations.js
  var moduleServicePointMutations_default = {
    SET_SERVICE_POINTS(state5, servicePoints) {
      state5.servicePoints = servicePoints;
    },
    SET_SELECTED_SERVICE_POINT(state5, selectedServicePoint) {
      state5.selectedServicePoint = selectedServicePoint;
    },
    SET_MY_LOCATION(state5, selectedLocation) {
      state5.myLocation = selectedLocation;
    }
  };

  // ../frontend/frontend/public/js/state/servicePoint/moduleServicePointActions.js
  var moduleServicePointActions_default = {
    setSelectedServicePoint({commit}, servicePoint) {
      commit("SET_SELECTED_SERVICE_POINT", servicePoint);
    },
    setMyLocation({commit}, location) {
      commit("SET_MY_LOCATION", location);
    },
    fetchMyLocation: ({commit, state: state5}) => {
      getMyLocation().then((location) => {
        commit("SET_MY_LOCATION", location);
      });
    },
    fetchMyServicePoints: ({commit, state: state5}, payload) => {
      getMyServicePoints(payload.service_unit).then((servicePoints) => {
        commit("SET_SERVICE_POINTS", servicePoints);
        if (servicePoints.length) {
          commit("SET_SELECTED_SERVICE_POINT", servicePoints[0]);
        }
      });
    }
  };

  // ../frontend/frontend/public/js/state/servicePoint/moduleServicePointGetters.js
  var moduleServicePointGetters_default = {
    getServicePoints: (state5) => state5.servicePoints,
    getSelectedServicePoint: (state5) => state5.selectedServicePoint,
    getMyLocation: (state5) => state5.myLocation
  };

  // ../frontend/frontend/public/js/state/servicePoint/moduleServicePoint.js
  var moduleServicePoint_default = {
    namespaced: true,
    state: moduleServicePointState_default,
    mutations: moduleServicePointMutations_default,
    actions: moduleServicePointActions_default,
    getters: moduleServicePointGetters_default
  };

  // ../frontend/frontend/public/js/state/socket/moduleSocketState.js
  var moduleSocketState_default = {
    socketData: {}
  };

  // ../frontend/frontend/public/js/state/socket/moduleSocketMutations.js
  var moduleSocketMutations_default = {
    SET_SOCKET_DATA(state5, socketData) {
      state5.socketData = socketData;
    }
  };

  // ../frontend/frontend/public/js/state/socket/moduleSocketActions.js
  var moduleSocketActions_default = {
    setSocketData({commit}, socketData) {
      console.log("RECIEVED SOCKED DATA", socketData);
      return commit("SET_SOCKET_DATA", socketData);
    }
  };

  // ../frontend/frontend/public/js/state/socket/moduleSocketGetters.js
  var moduleSocketGetters_default = {
    getSocketData: (state5) => state5.socketData
  };

  // ../frontend/frontend/public/js/state/socket/moduleSocket.js
  var moduleSocket_default = {
    namespaced: true,
    state: moduleSocketState_default,
    mutations: moduleSocketMutations_default,
    actions: moduleSocketActions_default,
    getters: moduleSocketGetters_default
  };

  // ../frontend/frontend/public/js/state/notification/moduleNotificationState.js
  var moduleNotificationState_default = {
    notificationList: []
  };

  // ../frontend/frontend/public/js/state/notification/moduleNotificationMutations.js
  var moduleNotificationMutations_default = {
    ADD_NOTIFICATION(state5, notification) {
      const exits = state5.notificationList.find((item) => item.name == notification.name);
      if (!exits) {
        state5.notificationList.unshift(notification);
      }
    },
    SET_NOTIFICATION_LIST(state5, data) {
      state5.notificationList = data;
    },
    UPDATE_NOTIFICATION(state5, notification) {
      const notificationIndex = state5.notificationList.findIndex((t) => t.name == notification.name);
      Object.assign(state5.notificationList[notificationIndex], notification);
    },
    REMOVE_NOTIFICATION(state5, notification) {
      state5.notificationList = state5.notificationList.filter((item) => item.name !== notification.name);
    }
  };

  // ../frontend/frontend/public/js/services/notification/notification.js
  var fetchNotifications = (payload) => api6({
    method: "clinical.api.notification.notification.get_notifications",
    args: {payload}
  });
  var clearNotification = (payload) => api6({
    method: "clinical.api.notification.notification.clear_notification",
    args: {payload}
  });

  // ../frontend/frontend/public/js/state/notification/moduleNotificationActions.js
  var moduleNotificationActions_default = {
    setNotificationList({commit}, data) {
      return commit("SET_NOTIFICATION_LIST", data);
    },
    addNotification({commit}, data) {
      return commit("ADD_NOTIFICATION", data);
    },
    fetchNotifications({commit}, payload) {
      return fetchNotifications(payload).then((notification) => {
        return commit("SET_NOTIFICATION_LIST", notification);
      }).catch((error) => {
        console.log(error);
      });
    },
    clearNotification({commit}, payload) {
      return clearNotification(payload).then((notification) => {
        if (notification.name) {
          return commit("REMOVE_NOTIFICATION", notification);
        } else {
          return commit("SET_NOTIFICATION_LIST", []);
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  };

  // ../frontend/frontend/public/js/state/notification/moduleNotificationGetters.js
  var moduleNotificationGetters_default = {
    getNotificationList: (state5) => state5.notificationList
  };

  // ../frontend/frontend/public/js/state/notification/moduleNotification.js
  var moduleNotification_default = {
    namespaced: true,
    state: moduleNotificationState_default,
    mutations: moduleNotificationMutations_default,
    actions: moduleNotificationActions_default,
    getters: moduleNotificationGetters_default
  };

  // ../frontend/frontend/public/js/state/supplier/moduleSupplierState.js
  var moduleSupplierState_default = {
    suppliers: [],
    supplierSearchQuery: "",
    supplierFilter: null,
    selectedsupplierDetails: {},
    selectedsupplier: {}
  };

  // ../frontend/frontend/public/js/state/supplier/moduleSupplierMutations.js
  var moduleSupplierMutations_default = {
    SET_SUPPLIERS(state5, suppliers) {
      state5.suppliers = suppliers;
    },
    ADD_SUPPLIER(state5, supplier) {
      state5.suppliers.unshift(supplier);
    },
    UPDATE_SUPPLIER(state5, supplier) {
      const supplierIndex = state5.suppliers.findIndex((t) => t.id == supplier.id);
      Object.assign(state5.suppliers[supplierIndex], supplier);
    },
    SET_SELECTED_SUPPLIER(state5, supplier) {
      state5.selectedSupplier = supplier;
    },
    SET_SELECTED_SUPPLIER_DETAILS(state5, supplierDetails) {
      state5.selectedSupplierDetails = supplierDetails;
    }
  };

  // ../frontend/frontend/public/js/state/supplier/moduleSupplierActions.js
  var moduleSupplierActions_default = {
    fetchSuppliers({commit}, payload) {
    },
    fetchSelectedSupplierDetails({commit}, payload) {
      console.log(payload);
    }
  };

  // ../frontend/frontend/public/js/state/supplier/moduleSupplierGetters.js
  var moduleSupplierGetters_default = {
    getSuppliers: (state5) => state5.suppliers,
    getSupplier: (state5) => (supplierName) => state5.suppliers.find((supplier) => supplier.name == supplierName),
    getSelectedSupplier: (state5) => state5.selectedSupplier,
    getSelectedSupplierDetails: (state5) => state5.selectedSupplierDetails || {},
    getTimelineData: (state5) => state5.timelineData
  };

  // ../frontend/frontend/public/js/state/supplier/moduleSupplier.js
  var moduleSupplier_default = {
    namespaced: true,
    state: moduleSupplierState_default,
    mutations: moduleSupplierMutations_default,
    actions: moduleSupplierActions_default,
    getters: moduleSupplierGetters_default
  };

  // ../frontend/frontend/public/js/state/accounts/state.js
  var state_default3 = {
    patient: {},
    accountSummary: void 0,
    salesOrderTotal: 0,
    invoiceFInalization: []
  };

  // ../frontend/frontend/public/js/state/accounts/mutations.js
  var mutations_default3 = {
    SET_PATIENT(state5, pat) {
      state5.patient = pat;
    },
    SET_PATIENT_ACCOUNT_SUMMARY(state5, summary) {
      state5.accountSummary = summary;
    },
    SET_PATIENT_SALES_ORDER_TOTALS(state5, total) {
      state5.salesOrderTotal = total;
    },
    SET_INVOICE_FINALIZATION(state5, finalizations) {
      state5.invoiceFInalization = finalizations;
    }
  };

  // ../frontend/frontend/public/js/services/accounts/patient.js
  var api8 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatient = ({patient_name}) => api8({
    method: "billing.billing.api.accounts.patients.get_patient",
    args: {
      patient_name
    }
  });
  var getInvoiceFinalizations = (customer_number) => api8({
    method: "billing.billing.api.accounts.patients.get_invoice_finalizations",
    args: {
      customer_number
    }
  });

  // ../frontend/frontend/public/js/services/patient_chart/accounts.js
  var api9 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var getAccountsDashboard = ({
    patient_number = ""
  }) => api9({
    method: "clinical.api.patient_accounts.customer_account_dashboard_info",
    args: {
      patient_number
    }
  }).then(({message}) => message);
  var getUnbilledSalesOrderTotals = ({
    patient_number
  }) => api9({
    method: "clinical.api.patient_accounts.get_unbilled_sales_order_totals",
    args: {
      patient_number
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/state/accounts/actions.js
  var actions_default3 = {
    fetchPatient({commit}, patientName) {
      getPatient({patient_name: patientName}).then((result) => {
        if (result) {
          commit("SET_PATIENT", result);
        }
      });
    },
    fetchPatientAccountSummary({commit}, patientName) {
      getAccountsDashboard({patient_number: patientName}).then((result) => {
        if (result) {
          commit("SET_PATIENT_ACCOUNT_SUMMARY", result);
        }
      });
    },
    fetchUnbilledSalesOrderTotals({commit}, patientName) {
      getUnbilledSalesOrderTotals({patient_number: patientName}).then((result) => {
        if (result) {
          commit("SET_PATIENT_SALES_ORDER_TOTALS", result);
        }
      });
    },
    fetchInvoiceFinalizations({commit}, customerName) {
      getInvoiceFinalizations({customer_number: customerName}).then((result) => {
        if (result) {
          alert("honna");
          console.log(JSON.stringify(result));
          commit("SET_INVOICE_FINALIZATION", result);
        }
      });
    }
  };

  // ../frontend/frontend/public/js/state/accounts/getters.js
  var getters_default3 = {
    patient: (state5) => state5.patient,
    accountSummary: (state5) => state5.accountSummary,
    salesOrderTotal: (state5) => state5.salesOrderTotal,
    invoiceFInalization: (state5) => state5.invoiceFInalization
  };

  // ../frontend/frontend/public/js/state/accounts/index.js
  var accounts_default = {
    namespaced: true,
    state: state_default3,
    mutations: mutations_default3,
    actions: actions_default3,
    getters: getters_default3
  };

  // ../frontend/frontend/public/js/state/context/state.js
  var state_default4 = {
    context: {}
  };

  // ../frontend/frontend/public/js/state/context/mutations.js
  var mutations_default4 = {
    SET_CONTEXT(state5, context) {
      state5.context = context;
    },
    SET_CONTEXT_ITEM(state5, contextItem) {
      state5.context[contextItem.key] = contextItem.value;
    }
  };

  // ../frontend/frontend/public/js/state/context/actions.js
  var actions_default4 = {
    setContextItem({commit}, payload) {
      commit("SET_CONTEXT_ITEM", payload);
    }
  };

  // ../frontend/frontend/public/js/state/context/getters.js
  var getters_default4 = {
    getContext: (state5) => {
      return state5.context;
    },
    getContextItem: (state5) => (key) => {
      return state5.context[key];
    }
  };

  // ../frontend/frontend/public/js/state/context/index.js
  var context_default = {
    namespaced: true,
    state: state_default4,
    mutations: mutations_default4,
    actions: actions_default4,
    getters: getters_default4
  };

  // ../frontend/frontend/public/js/state/patient-encounter/state.js
  var state3 = {
    encounter: {}
  };
  var state_default5 = state3;

  // ../frontend/frontend/public/js/state/patient-encounter/getters.js
  var getters3 = {
    getEncounter: (state5) => {
      return state5.encounter;
    }
  };
  var getters_default5 = getters3;

  // ../frontend/frontend/public/js/state/patient-encounter/mutations.js
  var mutations3 = {
    SET_ENCOUNTER(state5, payload) {
      state5.encounter = payload;
    }
  };
  var mutations_default5 = mutations3;

  // ../frontend/frontend/public/js/state/patient-encounter/actions.js
  var actions3 = {
    setEncounter({commit}, payload) {
      commit("SET_ENCOUNTER", payload);
    }
  };
  var actions_default5 = actions3;

  // ../frontend/frontend/public/js/state/patient-encounter/module.js
  var module_default2 = {
    namespaced: true,
    state: state_default5,
    mutations: mutations_default5,
    actions: actions_default5,
    getters: getters_default5
  };

  // ../frontend/frontend/public/js/state/patient_appointments/state.js
  var state4 = {
    appointments_count: null
  };
  var state_default6 = state4;

  // ../frontend/frontend/public/js/state/patient_appointments/getters.js
  var getters4 = {
    getAppointmentsCount: (state5) => {
      return state5.appointments_count;
    }
  };
  var getters_default6 = getters4;

  // ../frontend/frontend/public/js/state/patient_appointments/mutations.js
  var mutations4 = {
    SET_APPOINTMENTS_COUNT(state5, payload) {
      state5.appointments_count = payload;
    }
  };
  var mutations_default6 = mutations4;

  // ../frontend/frontend/public/js/state/patient_appointments/actions.js
  var actions4 = {
    setAppointmentsCount({commit}, payload) {
      commit("SET_APPOINTMENTS_COUNT", payload);
    }
  };
  var actions_default6 = actions4;

  // ../frontend/frontend/public/js/state/patient_appointments/module.js
  var module_default3 = {
    namespaced: true,
    state: state_default6,
    mutations: mutations_default6,
    actions: actions_default6,
    getters: getters_default6
  };

  // ../frontend/frontend/public/js/state/store.js
  window.process = {
    env: {
      NODE_ENV: "production"
    }
  };
  Vue.use(import_vuex_common.default);
  var store_default = new import_vuex_common.default.Store({
    getters: getters_default2,
    mutations: mutations_default2,
    state: state_default2,
    actions: actions_default2,
    modules: {
      patient: modulePatient_default,
      serviceUnit: moduleServiceUnit_default,
      servicePoint: moduleServicePoint_default,
      socket: moduleSocket_default,
      supplier: moduleSupplier_default,
      render: module_default,
      notification: moduleNotification_default,
      accounts: accounts_default,
      procedures: procedures_default,
      context: context_default,
      encounter: module_default2,
      appointments: module_default3
    }
  });

  // ../frontend/frontend/public/js/records/records.bundle.js
  frappe.provide("frappe.rec");
  frappe.provide("frappe.inpatient");
  frappe.rec.Chart = class {
    constructor({parent}) {
      this.$parent = $(parent);
      this.page = parent.page;
      this.make_body();
    }
    make_body() {
      $(".sticky-top").addClass("hidden");
      this.$body = this.$parent.find(".layout-main-section");
      this.$parent.find(".page-head").addClass("hidden");
      this.$parent.find(".page-body").removeClass("container");
      this.$parent.find(".content").removeClass("page-container");
      this.$parent.find(".page-content").removeClass("page-content");
      this.$parent.find("layout-main-section-wrapper").addClass("no-bottom-margin");
      this.$page_container = $('<div class="hub-page-container">').appendTo(this.$body);
      Vue.component("v-select", import_vue_select.default);
      new Vue({
        store: store_default,
        router: frappe.custom.router,
        el: ".hub-page-container",
        render: (h) => h(Main_default)
      });
      if (navigator.serviceWorker) {
        console.log("Service workers supported");
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("/worker.js").then((reg) => console.log("Service worker registered")).catch((err) => console.log(` Error occured ${err}`));
        });
      } else {
        console.log("SERVICE WORKER NOT SUPPORTED");
      }
    }
  };
  frappe.inpatient.DrugAdministration = class {
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
      this.$parent.find("layout-main-section-wrapper").addClass("no-bottom-margin");
      this.$page_container = $('<div class="hub-page-container">').appendTo(this.$body);
      new Vue({
        store: store_default,
        router: frappe.custom.router,
        el: ".hub-page-container",
        render: (h) => h(InpatientDrugAdministrationPage_default)
      });
    }
  };
})();
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! moment.js
//! momentjs.com
//! version : 2.29.1
//# sourceMappingURL=records.bundle.SUBS3VBU.js.map
