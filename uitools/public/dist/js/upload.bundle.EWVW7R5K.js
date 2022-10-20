(() => {
  // ../frontend/frontend/public/js/upload/file_uploader/ProgressRing.vue
  var __vue_script__ = {
    name: "ProgressRing",
    props: {
      primary: String,
      secondary: String,
      radius: Number,
      progress: Number,
      stroke: Number
    },
    data() {
      const normalizedRadius = this.radius - this.stroke * 2;
      const circumference = normalizedRadius * 2 * Math.PI;
      return {
        normalizedRadius,
        circumference
      };
    },
    computed: {
      strokeDashoffset() {
        return this.circumference - this.progress / 100 * this.circumference;
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("svg", {attrs: {height: _vm.radius * 2, width: _vm.radius * 2}}, [
      _c("circle", {
        style: {
          stroke: _vm.secondary,
          strokeDashoffset: 0
        },
        attrs: {
          "stroke-dasharray": _vm.circumference + " " + _vm.circumference,
          "stroke-width": _vm.stroke,
          fill: "transparent",
          r: _vm.normalizedRadius,
          cx: _vm.radius,
          cy: _vm.radius
        }
      }),
      _vm._v(" "),
      _c("circle", {
        style: {
          stroke: _vm.primary,
          strokeDashoffset: _vm.strokeDashoffset
        },
        attrs: {
          "stroke-dasharray": _vm.circumference + " " + _vm.circumference,
          "stroke-width": _vm.stroke,
          fill: "transparent",
          r: _vm.normalizedRadius,
          cx: _vm.radius,
          cy: _vm.radius
        }
      }),
      _vm._v(" "),
      _c("text", {
        style: {
          color: "var(--text-color)",
          fontSize: "var(--text-xs)",
          fontWeight: "var(--text-bold)"
        },
        attrs: {
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          x: _vm.radius,
          y: _vm.radius
        }
      }, [_vm._v("\n		" + _vm._s(_vm.progress) + "%\n	")])
    ]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-50978ca0_0", {source: "\ncircle[data-v-50978ca0] {\n	transition: stroke-dashoffset 0.35s;\n	transform: rotate(-90deg);\n	transform-origin: 50% 50%;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/upload/file_uploader/ProgressRing.vue"], "names": [], "mappings": ";AAsEA;CACA,mCAAA;CACA,yBAAA;CACA,yBAAA;AACA", "file": "ProgressRing.vue", "sourcesContent": [`<template>
	<svg :height="radius * 2" :width="radius * 2">
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: secondary,
				strokeDashoffset: 0
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: primary,
				strokeDashoffset: strokeDashoffset
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<text
			dominant-baseline="middle"
			text-anchor="middle"
			:x="radius"
			:y="radius"
			:style="{
				color: 'var(--text-color)',
				fontSize: 'var(--text-xs)',
				fontWeight: 'var(--text-bold)'
			}"
		>
			{{ progress }}%
		</text>
	</svg>
</template>
<script>
export default {
	name: "ProgressRing",
	props: {
		primary: String,
		secondary: String,
		radius: Number,
		progress: Number,
		stroke: Number
	},
	data() {
		const normalizedRadius = this.radius - this.stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;

		return {
			normalizedRadius,
			circumference
		};
	},
	computed: {
		strokeDashoffset() {
			return (
				this.circumference - (this.progress / 100) * this.circumference
			);
		}
	}
};
</script>
<style scoped>
circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-50978ca0";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<svg :height="radius * 2" :width="radius * 2">
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: secondary,
				strokeDashoffset: 0
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<circle
			:stroke-dasharray="circumference + ' ' + circumference"
			:style="{
				stroke: primary,
				strokeDashoffset: strokeDashoffset
			}"
			:stroke-width="stroke"
			fill="transparent"
			:r="normalizedRadius"
			:cx="radius"
			:cy="radius"
		/>
		<text
			dominant-baseline="middle"
			text-anchor="middle"
			:x="radius"
			:y="radius"
			:style="{
				color: 'var(--text-color)',
				fontSize: 'var(--text-xs)',
				fontWeight: 'var(--text-bold)'
			}"
		>
			{{ progress }}%
		</text>
	</svg>
</template>
<script>
export default {
	name: "ProgressRing",
	props: {
		primary: String,
		secondary: String,
		radius: Number,
		progress: Number,
		stroke: Number
	},
	data() {
		const normalizedRadius = this.radius - this.stroke * 2;
		const circumference = normalizedRadius * 2 * Math.PI;

		return {
			normalizedRadius,
			circumference
		};
	},
	computed: {
		strokeDashoffset() {
			return (
				this.circumference - (this.progress / 100) * this.circumference
			);
		}
	}
};
</script>
<style scoped>
circle {
	transition: stroke-dashoffset 0.35s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
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
  var ProgressRing_default = __vue_component__;

  // ../frontend/frontend/public/js/upload/file_uploader/FilePreview.vue
  var __vue_script__2 = {
    name: "FilePreview",
    props: ["file"],
    components: {
      ProgressRing: ProgressRing_default
    },
    data() {
      return {
        src: null
      };
    },
    mounted() {
      if (this.is_image) {
        if (window.FileReader) {
          let fr = new FileReader();
          fr.onload = () => this.src = fr.result;
          fr.readAsDataURL(this.file.file_obj);
        }
      }
    },
    filters: {
      file_size(value) {
        return frappe.form.formatters.FileSize(value);
      },
      file_name(value) {
        return value;
      }
    },
    computed: {
      private_icon() {
        return frappe.utils.icon(this.is_private ? "lock" : "unlock");
      },
      is_private() {
        return this.file.doc ? this.file.doc.is_private : this.file.private;
      },
      uploaded() {
        return this.file.total && this.file.total === this.file.progress && !this.file.failed;
      },
      is_image() {
        return this.file.file_obj.type.startsWith("image");
      },
      progress() {
        let value = Math.round(this.file.progress * 100 / this.file.total);
        if (isNaN(value)) {
          value = 0;
        }
        return value;
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "file-preview"}, [
      _c("div", {staticClass: "file-icon"}, [
        _vm.is_image ? _c("img", {attrs: {src: _vm.src, alt: _vm.file.name}}) : _c("div", {
          staticClass: "fallback",
          domProps: {innerHTML: _vm._s(_vm.frappe.utils.icon("file", "md"))}
        })
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", [
          _vm.file.doc ? _c("a", {
            staticClass: "flex",
            attrs: {href: _vm.file.doc.file_url, target: "_blank"}
          }, [
            _c("span", {staticClass: "file-name"}, [
              _vm._v(_vm._s(_vm._f("file_name")(_vm.file.name)))
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "ml-2",
              domProps: {innerHTML: _vm._s(_vm.private_icon)}
            })
          ]) : _c("span", {staticClass: "flex"}, [
            _c("span", {staticClass: "file-name"}, [
              _vm._v(_vm._s(_vm._f("file_name")(_vm.file.name)))
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "ml-2 btn-reset",
              attrs: {title: _vm.__("Toggle Public/Private")},
              on: {
                click: function($event) {
                  return _vm.$emit("toggle_private");
                }
              }
            }, [
              _c("div", {
                domProps: {innerHTML: _vm._s(_vm.private_icon)}
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("span", {staticClass: "file-size"}, [
            _vm._v("\n				" + _vm._s(_vm._f("file_size")(_vm.file.file_obj.size)) + "\n			")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", {staticClass: "file-actions"}, [
        _c("ProgressRing", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.file.uploading && !_vm.uploaded,
              expression: "file.uploading && !uploaded"
            }
          ],
          attrs: {
            primary: "var(--primary-color)",
            secondary: "var(--gray-200)",
            radius: "24",
            progress: _vm.progress,
            stroke: "3"
          }
        }),
        _vm._v(" "),
        _vm.uploaded ? _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.frappe.utils.icon("solid-success", "lg"))
          }
        }) : _vm._e(),
        _vm._v(" "),
        _vm.file.failed ? _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.frappe.utils.icon("solid-red", "lg"))
          }
        }) : _vm._e(),
        _vm._v(" "),
        !_vm.uploaded && !_vm.file.uploading ? _c("button", {
          staticClass: "btn",
          domProps: {
            innerHTML: _vm._s(_vm.frappe.utils.icon("delete", "md"))
          },
          on: {
            click: function($event) {
              return _vm.$emit("remove");
            }
          }
        }) : _vm._e()
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-513faa5a_0", {source: "\n.file-preview {\n	display: flex;\n	align-items: center;\n	padding: 0.75rem;\n	border: 1px solid transparent;\n}\n.file-preview + .file-preview {\n	border-top-color: var(--border-color);\n}\n.file-preview:hover {\n	background-color: var(--bg-color);\n	border-color: var(--dark-border-color);\n	border-radius: var(--border-radius);\n}\n.file-preview:hover + .file-preview {\n	border-top-color: transparent;\n}\n.file-icon {\n	border-radius: var(--border-radius);\n	width: 2.625rem;\n	height: 2.625rem;\n	overflow: hidden;\n	margin-right: var(--margin-md);\n	flex-shrink: 0;\n}\n.file-icon img {\n	width: 100%;\n	height: 100%;\n	object-fit: cover;\n}\n.file-icon .fallback {\n	width: 100%;\n	height: 100%;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	border: 1px solid var(--border-color);\n	border-radius: var(--border-radius);\n}\n.file-name {\n	font-size: var(--text-base);\n	font-weight: var(--text-bold);\n	color: var(--text-color);\n	display: -webkit-box;\n	-webkit-line-clamp: 1;\n	-webkit-box-orient: vertical;\n	overflow: hidden;\n}\n.file-size {\n	font-size: var(--text-sm);\n	color: var(--text-light);\n}\n.file-actions {\n	width: 3rem;\n	flex-shrink: 0;\n	margin-left: auto;\n	text-align: center;\n}\n.file-actions .btn {\n	padding: var(--padding-xs);\n	box-shadow: none;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/upload/file_uploader/FilePreview.vue"], "names": [], "mappings": ";AAuGA;CACA,aAAA;CACA,mBAAA;CACA,gBAAA;CACA,6BAAA;AACA;AAEA;CACA,qCAAA;AACA;AAEA;CACA,iCAAA;CACA,sCAAA;CACA,mCAAA;AACA;AAEA;CACA,6BAAA;AACA;AAEA;CACA,mCAAA;CACA,eAAA;CACA,gBAAA;CACA,gBAAA;CACA,8BAAA;CACA,cAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,iBAAA;AACA;AAEA;CACA,WAAA;CACA,YAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,qCAAA;CACA,mCAAA;AACA;AAEA;CACA,2BAAA;CACA,6BAAA;CACA,wBAAA;CACA,oBAAA;CACA,qBAAA;CACA,4BAAA;CACA,gBAAA;AACA;AAEA;CACA,yBAAA;CACA,wBAAA;AACA;AAEA;CACA,WAAA;CACA,cAAA;CACA,iBAAA;CACA,kBAAA;AACA;AAEA;CACA,0BAAA;CACA,gBAAA;AACA", "file": "FilePreview.vue", "sourcesContent": [`<template>
	<div class="file-preview">
		<div class="file-icon">
			<img
				v-if="is_image"
				:src="src"
				:alt="file.name"
			>
			<div class="fallback" v-else v-html="frappe.utils.icon('file', 'md')">
			</div>
		</div>
		<div>
			<div>
				<a class="flex" :href="file.doc.file_url" v-if="file.doc" target="_blank">
					<span class="file-name">{{ file.name | file_name }}</span>
					<div class="ml-2" v-html="private_icon"></div>
				</a>
				<span class="flex" v-else>
					<span class="file-name">{{ file.name | file_name }}</span>
					<button class="ml-2 btn-reset" @click="$emit('toggle_private')" :title="__('Toggle Public/Private')">
						<div v-html="private_icon"></div>
					</button>
				</span>
			</div>

			<div>
				<span class="file-size">
					{{ file.file_obj.size | file_size }}
				</span>
			</div>
		</div>
		<div class="file-actions">
			<ProgressRing
				v-show="file.uploading && !uploaded"
				primary="var(--primary-color)"
				secondary="var(--gray-200)"
				radius="24"
				:progress="progress"
				stroke="3"
			/>
			<div v-if="uploaded" v-html="frappe.utils.icon('solid-success', 'lg')"></div>
			<div v-if="file.failed" v-html="frappe.utils.icon('solid-red', 'lg')"></div>
			<button v-if="!uploaded && !file.uploading" class="btn" @click="$emit('remove')" v-html="frappe.utils.icon('delete', 'md')"></button>
		</div>
	</div>
</template>

<script>
import ProgressRing from './ProgressRing.vue';
export default {
	name: 'FilePreview',
	props: ['file'],
	components: {
		ProgressRing
	},
	data() {
		return {
			src: null
		}
	},
	mounted() {
		if (this.is_image) {
			if (window.FileReader) {
				let fr = new FileReader();
				fr.onload = () => this.src = fr.result;
				fr.readAsDataURL(this.file.file_obj);
			}
		}
	},
	filters: {
		file_size(value) {
			return frappe.form.formatters.FileSize(value);
		},
		file_name(value) {
			return value;
			// return frappe.utils.file_name_ellipsis(value, 9);
		}
	},
	computed: {
		private_icon() {
			return frappe.utils.icon(this.is_private ? 'lock' : 'unlock');
		},
		is_private() {
			return this.file.doc ? this.file.doc.is_private : this.file.private;
		},
		uploaded() {
			return this.file.total && this.file.total === this.file.progress && !this.file.failed;
		},
		is_image() {
			return this.file.file_obj.type.startsWith('image');
		},
		progress() {
			let value = Math.round((this.file.progress * 100) / this.file.total);
			if (isNaN(value)) {
				value = 0;
			}
			return value;
		}
	}
}
</script>

<style>
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}

.file-preview + .file-preview {
	border-top-color: var(--border-color);
}

.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}

.file-preview:hover + .file-preview {
	border-top-color: transparent;
}

.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}

.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}

.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}

.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__2 = void 0;
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="file-preview">
		<div class="file-icon">
			<img
				v-if="is_image"
				:src="src"
				:alt="file.name"
			>
			<div class="fallback" v-else v-html="frappe.utils.icon('file', 'md')">
			</div>
		</div>
		<div>
			<div>
				<a class="flex" :href="file.doc.file_url" v-if="file.doc" target="_blank">
					<span class="file-name">{{ file.name | file_name }}</span>
					<div class="ml-2" v-html="private_icon"></div>
				</a>
				<span class="flex" v-else>
					<span class="file-name">{{ file.name | file_name }}</span>
					<button class="ml-2 btn-reset" @click="$emit('toggle_private')" :title="__('Toggle Public/Private')">
						<div v-html="private_icon"></div>
					</button>
				</span>
			</div>

			<div>
				<span class="file-size">
					{{ file.file_obj.size | file_size }}
				</span>
			</div>
		</div>
		<div class="file-actions">
			<ProgressRing
				v-show="file.uploading && !uploaded"
				primary="var(--primary-color)"
				secondary="var(--gray-200)"
				radius="24"
				:progress="progress"
				stroke="3"
			/>
			<div v-if="uploaded" v-html="frappe.utils.icon('solid-success', 'lg')"></div>
			<div v-if="file.failed" v-html="frappe.utils.icon('solid-red', 'lg')"></div>
			<button v-if="!uploaded && !file.uploading" class="btn" @click="$emit('remove')" v-html="frappe.utils.icon('delete', 'md')"></button>
		</div>
	</div>
</template>

<script>
import ProgressRing from './ProgressRing.vue';
export default {
	name: 'FilePreview',
	props: ['file'],
	components: {
		ProgressRing
	},
	data() {
		return {
			src: null
		}
	},
	mounted() {
		if (this.is_image) {
			if (window.FileReader) {
				let fr = new FileReader();
				fr.onload = () => this.src = fr.result;
				fr.readAsDataURL(this.file.file_obj);
			}
		}
	},
	filters: {
		file_size(value) {
			return frappe.form.formatters.FileSize(value);
		},
		file_name(value) {
			return value;
			// return frappe.utils.file_name_ellipsis(value, 9);
		}
	},
	computed: {
		private_icon() {
			return frappe.utils.icon(this.is_private ? 'lock' : 'unlock');
		},
		is_private() {
			return this.file.doc ? this.file.doc.is_private : this.file.private;
		},
		uploaded() {
			return this.file.total && this.file.total === this.file.progress && !this.file.failed;
		},
		is_image() {
			return this.file.file_obj.type.startsWith('image');
		},
		progress() {
			let value = Math.round((this.file.progress * 100) / this.file.total);
			if (isNaN(value)) {
				value = 0;
			}
			return value;
		}
	}
}
</script>

<style>
.file-preview {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border: 1px solid transparent;
}

.file-preview + .file-preview {
	border-top-color: var(--border-color);
}

.file-preview:hover {
	background-color: var(--bg-color);
	border-color: var(--dark-border-color);
	border-radius: var(--border-radius);
}

.file-preview:hover + .file-preview {
	border-top-color: transparent;
}

.file-icon {
	border-radius: var(--border-radius);
	width: 2.625rem;
	height: 2.625rem;
	overflow: hidden;
	margin-right: var(--margin-md);
	flex-shrink: 0;
}

.file-icon img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.file-icon .fallback {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.file-name {
	font-size: var(--text-base);
	font-weight: var(--text-bold);
	color: var(--text-color);
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.file-size {
	font-size: var(--text-sm);
	color: var(--text-light);
}

.file-actions {
	width: 3rem;
	flex-shrink: 0;
	margin-left: auto;
	text-align: center;
}

.file-actions .btn {
	padding: var(--padding-xs);
	box-shadow: none;
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
  var FilePreview_default = __vue_component__2;

  // ../frontend/frontend/public/js/upload/file_uploader/TreeNode.vue
  var __vue_script__3 = {
    name: "TreeNode",
    props: ["node", "selected_node"],
    components: {
      TreeNode: () => frappe.ui.components.TreeNode
    },
    computed: {
      icon() {
        let icons = {
          open: frappe.utils.icon("folder-open", "md"),
          closed: frappe.utils.icon("folder-normal", "md"),
          leaf: frappe.utils.icon("primitive-dot", "xs"),
          search: frappe.utils.icon("search")
        };
        if (this.node.by_search)
          return icons.search;
        if (this.node.is_leaf)
          return icons.leaf;
        if (this.node.open)
          return icons.open;
        return icons.closed;
      }
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "tree-node", class: {opened: _vm.node.open}}, [
      _c("span", {
        staticClass: "tree-link",
        class: {active: _vm.node.value === _vm.selected_node.value},
        attrs: {disabled: _vm.node.fetching},
        on: {
          click: function($event) {
            return _vm.$emit("node-click", _vm.node);
          }
        }
      }, [
        _c("div", {domProps: {innerHTML: _vm._s(_vm.icon)}}),
        _vm._v(" "),
        _c("a", {staticClass: "tree-label"}, [
          _vm._v(_vm._s(_vm.node.label))
        ])
      ]),
      _vm._v(" "),
      _c("ul", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.node.open,
            expression: "node.open"
          }
        ],
        staticClass: "tree-children"
      }, [
        _vm._l(_vm.node.children, function(n) {
          return _c("TreeNode", {
            key: n.value,
            attrs: {node: n, selected_node: _vm.selected_node},
            on: {
              "node-click": function(n2) {
                return _vm.$emit("node-click", n2);
              },
              "load-more": function(n2) {
                return _vm.$emit("load-more", n2);
              }
            }
          });
        }),
        _vm._v(" "),
        _vm.node.has_more_children ? _c("button", {
          staticClass: "btn btn-xs btn-load-more",
          attrs: {disabled: _vm.node.children_loading},
          on: {
            click: function($event) {
              return _vm.$emit("load-more", _vm.node);
            }
          }
        }, [
          _vm._v("\n			" + _vm._s(_vm.node.children_loading ? _vm.__("Loading...") : _vm.__("Load more")) + "\n		")
        ]) : _vm._e()
      ], 2)
    ]);
  };
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-64b63016_0", {source: "\n.btn-load-more[data-v-64b63016] {\n	margin-left: 1.6rem;\n	margin-top: 0.5rem;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/upload/file_uploader/TreeNode.vue"], "names": [], "mappings": ";AAwDA;CACA,mBAAA;CACA,kBAAA;AACA", "file": "TreeNode.vue", "sourcesContent": [`<template>
	<div class="tree-node" :class="{ opened: node.open }">
		<span
			class="tree-link"
			@click="$emit('node-click', node)"
			:class="{ active: node.value === selected_node.value }"
			:disabled="node.fetching"
		>
			<div v-html="icon"></div>
			<a class="tree-label">{{ node.label }}</a>
		</span>
		<ul class="tree-children" v-show="node.open">
			<TreeNode
				v-for="n in node.children"
				:key="n.value"
				:node="n"
				:selected_node="selected_node"
				@node-click="n => $emit('node-click', n)"
				@load-more="n => $emit('load-more', n)"
			/>
			<button
				class="btn btn-xs btn-load-more"
				v-if="node.has_more_children"
				@click="$emit('load-more', node)"
				:disabled="node.children_loading"
			>
				{{ node.children_loading ? __("Loading...") : __("Load more") }}
			</button>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TreeNode",
	props: ["node", "selected_node"],
	components: {
		TreeNode: () => frappe.ui.components.TreeNode
	},
	computed: {
		icon() {
			let icons = {
				open: frappe.utils.icon("folder-open", "md"),
				closed: frappe.utils.icon("folder-normal", "md"),
				leaf: frappe.utils.icon("primitive-dot", "xs"),
				search: frappe.utils.icon("search")
			};

			if (this.node.by_search) return icons.search;
			if (this.node.is_leaf) return icons.leaf;
			if (this.node.open) return icons.open;
			return icons.closed;
		}
	}
};
</script>
<style scoped>
.btn-load-more {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__3 = "data-v-64b63016";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="tree-node" :class="{ opened: node.open }">
		<span
			class="tree-link"
			@click="$emit('node-click', node)"
			:class="{ active: node.value === selected_node.value }"
			:disabled="node.fetching"
		>
			<div v-html="icon"></div>
			<a class="tree-label">{{ node.label }}</a>
		</span>
		<ul class="tree-children" v-show="node.open">
			<TreeNode
				v-for="n in node.children"
				:key="n.value"
				:node="n"
				:selected_node="selected_node"
				@node-click="n => $emit('node-click', n)"
				@load-more="n => $emit('load-more', n)"
			/>
			<button
				class="btn btn-xs btn-load-more"
				v-if="node.has_more_children"
				@click="$emit('load-more', node)"
				:disabled="node.children_loading"
			>
				{{ node.children_loading ? __("Loading...") : __("Load more") }}
			</button>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TreeNode",
	props: ["node", "selected_node"],
	components: {
		TreeNode: () => frappe.ui.components.TreeNode
	},
	computed: {
		icon() {
			let icons = {
				open: frappe.utils.icon("folder-open", "md"),
				closed: frappe.utils.icon("folder-normal", "md"),
				leaf: frappe.utils.icon("primitive-dot", "xs"),
				search: frappe.utils.icon("search")
			};

			if (this.node.by_search) return icons.search;
			if (this.node.is_leaf) return icons.leaf;
			if (this.node.open) return icons.open;
			return icons.closed;
		}
	}
};
</script>
<style scoped>
.btn-load-more {
	margin-left: 1.6rem;
	margin-top: 0.5rem;
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
  var TreeNode_default = __vue_component__3;

  // ../frontend/frontend/public/js/upload/file_uploader/FileBrowser.vue
  var __vue_script__4 = {
    name: "FileBrowser",
    components: {
      TreeNode: TreeNode_default
    },
    data() {
      return {
        node: {
          label: __("Home"),
          value: "Home",
          children: [],
          children_start: 0,
          children_loading: false,
          is_leaf: false,
          fetching: false,
          fetched: false,
          open: false,
          filtered: true
        },
        selected_node: {},
        search_text: "",
        page_length: 10
      };
    },
    mounted() {
      this.toggle_node(this.node);
    },
    methods: {
      toggle_node(node) {
        if (!node.fetched && !node.is_leaf) {
          node.fetching = true;
          node.children_start = 0;
          node.children_loading = false;
          this.get_files_in_folder(node.value, 0).then(({files, has_more}) => {
            node.open = true;
            node.children = files;
            node.fetched = true;
            node.fetching = false;
            node.children_start += this.page_length;
            node.has_more_children = has_more;
          });
        } else {
          node.open = !node.open;
          this.select_node(node);
        }
      },
      load_more(node) {
        if (node.has_more_children) {
          let start = node.children_start;
          node.children_loading = true;
          this.get_files_in_folder(node.value, start).then(({files, has_more}) => {
            node.children = node.children.concat(files);
            node.children_start += this.page_length;
            node.has_more_children = has_more;
            node.children_loading = false;
          });
        }
      },
      select_node(node) {
        if (node.is_leaf) {
          this.selected_node = node;
        }
      },
      get_files_in_folder(folder, start) {
        return frappe.call("frappe.core.doctype.file.file.get_files_in_folder", {
          folder,
          start,
          page_length: this.page_length
        }).then((r) => {
          let {files = [], has_more = false} = r.message || {};
          files.sort((a, b) => {
            if (a.is_folder && b.is_folder) {
              return a.modified < b.modified ? -1 : 1;
            }
            if (a.is_folder) {
              return -1;
            }
            if (b.is_folder) {
              return 1;
            }
            return 0;
          });
          files = files.map((file) => this.make_file_node(file));
          return {files, has_more};
        });
      },
      search_by_name: frappe.utils.debounce(function() {
        if (this.search_text === "") {
          this.node = this.folder_node;
          return;
        }
        if (this.search_text.length < 3)
          return;
        frappe.call("frappe.core.doctype.file.file.get_files_by_search_text", {
          text: this.search_text
        }).then((r) => {
          let files = r.message || [];
          files = files.map((file) => this.make_file_node(file));
          if (!this.folder_node) {
            this.folder_node = this.node;
          }
          this.node = {
            label: __("Search Results"),
            value: "",
            children: files,
            by_search: true,
            open: true,
            filtered: true
          };
        });
      }, 300),
      make_file_node(file) {
        let filename = file.file_name || file.name;
        let label = frappe.utils.file_name_ellipsis(filename, 40);
        return {
          label,
          filename,
          file_url: file.file_url,
          value: file.name,
          is_leaf: !file.is_folder,
          fetched: !file.is_folder,
          children: [],
          children_loading: false,
          children_start: 0,
          open: false,
          fetching: false,
          filtered: true
        };
      }
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "file-browser"}, [
      _c("div", [
        _c("a", {
          staticClass: "text-muted text-medium",
          attrs: {href: ""},
          on: {
            click: function($event) {
              $event.preventDefault();
              return _vm.$emit("hide-browser");
            }
          }
        }, [
          _vm._v("\n			" + _vm._s(_vm.__("\u2190 Back to upload files")) + "\n		")
        ])
      ]),
      _vm._v(" "),
      _c("div", {staticClass: "file-browser-list"}, [
        _c("div", {staticClass: "file-filter"}, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search_text,
                expression: "search_text"
              }
            ],
            staticClass: "form-control input-xs",
            attrs: {
              type: "search",
              placeholder: _vm.__("Search by filename or extension")
            },
            domProps: {value: _vm.search_text},
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return;
                  }
                  _vm.search_text = $event.target.value;
                },
                _vm.search_by_name
              ]
            }
          })
        ]),
        _vm._v(" "),
        _c("TreeNode", {
          staticClass: "tree with-skeleton",
          attrs: {node: _vm.node, selected_node: _vm.selected_node},
          on: {
            "node-click": function(n) {
              return _vm.toggle_node(n);
            },
            "load-more": function(n) {
              return _vm.load_more(n);
            }
          }
        })
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-48f87338_0", {source: "\n.file-browser-list {\n	height: 300px;\n	overflow: hidden;\n	margin-top: 10px;\n}\n.file-filter {\n	padding: 3px;\n}\n.tree {\n	overflow: auto;\n	height: 100%;\n	padding-left: 0;\n	padding-right: 0;\n	padding-bottom: 4rem;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/upload/file_uploader/FileBrowser.vue"], "names": [], "mappings": ";AAkLA;CACA,aAAA;CACA,gBAAA;CACA,gBAAA;AACA;AAEA;CACA,YAAA;AACA;AAEA;CACA,cAAA;CACA,YAAA;CACA,eAAA;CACA,gBAAA;CACA,oBAAA;AACA", "file": "FileBrowser.vue", "sourcesContent": [`<template>
	<div class="file-browser">
		<div>
			<a
				href=""
				class="text-muted text-medium"
				@click.prevent="$emit('hide-browser')"
			>
				{{ __("\u2190 Back to upload files") }}
			</a>
		</div>
		<div class="file-browser-list">
			<div class="file-filter">
				<input
					type="search"
					class="form-control input-xs"
					:placeholder="__('Search by filename or extension')"
					v-model="search_text"
					@input="search_by_name"
				/>
			</div>
			<TreeNode
				class="tree with-skeleton"
				:node="node"
				:selected_node="selected_node"
				@node-click="n => toggle_node(n)"
				@load-more="n => load_more(n)"
			/>
		</div>
	</div>
</template>
<script>
import TreeNode from "./TreeNode.vue";

export default {
	name: "FileBrowser",
	components: {
		TreeNode
	},
	data() {
		return {
			node: {
				label: __("Home"),
				value: "Home",
				children: [],
				children_start: 0,
				children_loading: false,
				is_leaf: false,
				fetching: false,
				fetched: false,
				open: false,
				filtered: true
			},
			selected_node: {},
			search_text: "",
			page_length: 10
		};
	},
	mounted() {
		this.toggle_node(this.node);
	},
	methods: {
		toggle_node(node) {
			if (!node.fetched && !node.is_leaf) {
				node.fetching = true;
				node.children_start = 0;
				node.children_loading = false;
				this.get_files_in_folder(node.value, 0).then(
					({ files, has_more }) => {
						node.open = true;
						node.children = files;
						node.fetched = true;
						node.fetching = false;
						node.children_start += this.page_length;
						node.has_more_children = has_more;
					}
				);
			} else {
				node.open = !node.open;
				this.select_node(node);
			}
		},
		load_more(node) {
			if (node.has_more_children) {
				let start = node.children_start;
				node.children_loading = true;
				this.get_files_in_folder(node.value, start).then(
					({ files, has_more }) => {
						node.children = node.children.concat(files);
						node.children_start += this.page_length;
						node.has_more_children = has_more;
						node.children_loading = false;
					}
				);
			}
		},
		select_node(node) {
			if (node.is_leaf) {
				this.selected_node = node;
			}
		},
		get_files_in_folder(folder, start) {
			return frappe
				.call("frappe.core.doctype.file.file.get_files_in_folder", {
					folder,
					start,
					page_length: this.page_length
				})
				.then(r => {
					let { files = [], has_more = false } = r.message || {};
					files.sort((a, b) => {
						if (a.is_folder && b.is_folder) {
							return a.modified < b.modified ? -1 : 1;
						}
						if (a.is_folder) {
							return -1;
						}
						if (b.is_folder) {
							return 1;
						}
						return 0;
					});
					files = files.map(file => this.make_file_node(file));
					return { files, has_more };
				});
		},
		search_by_name: frappe.utils.debounce(function() {
			if (this.search_text === "") {
				this.node = this.folder_node;
				return;
			}
			if (this.search_text.length < 3) return;
			frappe
				.call(
					"frappe.core.doctype.file.file.get_files_by_search_text",
					{
						text: this.search_text
					}
				)
				.then(r => {
					let files = r.message || [];
					files = files.map(file => this.make_file_node(file));
					if (!this.folder_node) {
						this.folder_node = this.node;
					}
					this.node = {
						label: __("Search Results"),
						value: "",
						children: files,
						by_search: true,
						open: true,
						filtered: true
					};
				});
		}, 300),
		make_file_node(file) {
			let filename = file.file_name || file.name;
			let label = frappe.utils.file_name_ellipsis(filename, 40);
			return {
				label: label,
				filename: filename,
				file_url: file.file_url,
				value: file.name,
				is_leaf: !file.is_folder,
				fetched: !file.is_folder, // fetched if node is leaf
				children: [],
				children_loading: false,
				children_start: 0,
				open: false,
				fetching: false,
				filtered: true
			};
		}
	}
};
</script>

<style>
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}

.file-filter {
	padding: 3px;
}

.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
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
	<div class="file-browser">
		<div>
			<a
				href=""
				class="text-muted text-medium"
				@click.prevent="$emit('hide-browser')"
			>
				{{ __("\u2190 Back to upload files") }}
			</a>
		</div>
		<div class="file-browser-list">
			<div class="file-filter">
				<input
					type="search"
					class="form-control input-xs"
					:placeholder="__('Search by filename or extension')"
					v-model="search_text"
					@input="search_by_name"
				/>
			</div>
			<TreeNode
				class="tree with-skeleton"
				:node="node"
				:selected_node="selected_node"
				@node-click="n => toggle_node(n)"
				@load-more="n => load_more(n)"
			/>
		</div>
	</div>
</template>
<script>
import TreeNode from "./TreeNode.vue";

export default {
	name: "FileBrowser",
	components: {
		TreeNode
	},
	data() {
		return {
			node: {
				label: __("Home"),
				value: "Home",
				children: [],
				children_start: 0,
				children_loading: false,
				is_leaf: false,
				fetching: false,
				fetched: false,
				open: false,
				filtered: true
			},
			selected_node: {},
			search_text: "",
			page_length: 10
		};
	},
	mounted() {
		this.toggle_node(this.node);
	},
	methods: {
		toggle_node(node) {
			if (!node.fetched && !node.is_leaf) {
				node.fetching = true;
				node.children_start = 0;
				node.children_loading = false;
				this.get_files_in_folder(node.value, 0).then(
					({ files, has_more }) => {
						node.open = true;
						node.children = files;
						node.fetched = true;
						node.fetching = false;
						node.children_start += this.page_length;
						node.has_more_children = has_more;
					}
				);
			} else {
				node.open = !node.open;
				this.select_node(node);
			}
		},
		load_more(node) {
			if (node.has_more_children) {
				let start = node.children_start;
				node.children_loading = true;
				this.get_files_in_folder(node.value, start).then(
					({ files, has_more }) => {
						node.children = node.children.concat(files);
						node.children_start += this.page_length;
						node.has_more_children = has_more;
						node.children_loading = false;
					}
				);
			}
		},
		select_node(node) {
			if (node.is_leaf) {
				this.selected_node = node;
			}
		},
		get_files_in_folder(folder, start) {
			return frappe
				.call("frappe.core.doctype.file.file.get_files_in_folder", {
					folder,
					start,
					page_length: this.page_length
				})
				.then(r => {
					let { files = [], has_more = false } = r.message || {};
					files.sort((a, b) => {
						if (a.is_folder && b.is_folder) {
							return a.modified < b.modified ? -1 : 1;
						}
						if (a.is_folder) {
							return -1;
						}
						if (b.is_folder) {
							return 1;
						}
						return 0;
					});
					files = files.map(file => this.make_file_node(file));
					return { files, has_more };
				});
		},
		search_by_name: frappe.utils.debounce(function() {
			if (this.search_text === "") {
				this.node = this.folder_node;
				return;
			}
			if (this.search_text.length < 3) return;
			frappe
				.call(
					"frappe.core.doctype.file.file.get_files_by_search_text",
					{
						text: this.search_text
					}
				)
				.then(r => {
					let files = r.message || [];
					files = files.map(file => this.make_file_node(file));
					if (!this.folder_node) {
						this.folder_node = this.node;
					}
					this.node = {
						label: __("Search Results"),
						value: "",
						children: files,
						by_search: true,
						open: true,
						filtered: true
					};
				});
		}, 300),
		make_file_node(file) {
			let filename = file.file_name || file.name;
			let label = frappe.utils.file_name_ellipsis(filename, 40);
			return {
				label: label,
				filename: filename,
				file_url: file.file_url,
				value: file.name,
				is_leaf: !file.is_folder,
				fetched: !file.is_folder, // fetched if node is leaf
				children: [],
				children_loading: false,
				children_start: 0,
				open: false,
				fetching: false,
				filtered: true
			};
		}
	}
};
</script>

<style>
.file-browser-list {
	height: 300px;
	overflow: hidden;
	margin-top: 10px;
}

.file-filter {
	padding: 3px;
}

.tree {
	overflow: auto;
	height: 100%;
	padding-left: 0;
	padding-right: 0;
	padding-bottom: 4rem;
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
  var FileBrowser_default = __vue_component__4;

  // ../frontend/frontend/public/js/upload/file_uploader/WebLink.vue
  var __vue_script__5 = {
    name: "WebLink",
    data() {
      return {
        url: ""
      };
    }
  };
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "file-web-link margin-bottom"}, [
      _c("a", {
        staticClass: "text-muted text-medium",
        attrs: {href: ""},
        on: {
          click: function($event) {
            $event.preventDefault();
            return _vm.$emit("hide-web-link");
          }
        }
      }, [_vm._v("\n		" + _vm._s(_vm.__("\u2190 Back to upload files")) + "\n	")]),
      _vm._v(" "),
      _c("div", {staticClass: "input-group"}, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.url,
              expression: "url"
            }
          ],
          staticClass: "form-control",
          attrs: {type: "text", placeholder: _vm.__("Attach a web link")},
          domProps: {value: _vm.url},
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return;
              }
              _vm.url = $event.target.value;
            }
          }
        })
      ])
    ]);
  };
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = function(inject) {
    if (!inject)
      return;
    inject("data-v-46076d34_0", {source: "\n.file-web-link .input-group {\n	margin-top: 10px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/upload/file_uploader/WebLink.vue"], "names": [], "mappings": ";AA6BA;CACA,gBAAA;AACA", "file": "WebLink.vue", "sourcesContent": [`<template>
	<div class="file-web-link margin-bottom">
		<a href class="text-muted text-medium"
			@click.prevent="$emit('hide-web-link')"
		>
			{{ __('\u2190 Back to upload files') }}
		</a>
		<div class="input-group">
			<input
				type="text"
				class="form-control"
				:placeholder="__('Attach a web link')"
				v-model="url"
			>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WebLink',
	data() {
		return {
			url: '',
		}
	}
}
</script>

<style>
.file-web-link .input-group {
	margin-top: 10px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__5 = void 0;
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="file-web-link margin-bottom">
		<a href class="text-muted text-medium"
			@click.prevent="$emit('hide-web-link')"
		>
			{{ __('\u2190 Back to upload files') }}
		</a>
		<div class="input-group">
			<input
				type="text"
				class="form-control"
				:placeholder="__('Attach a web link')"
				v-model="url"
			>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WebLink',
	data() {
		return {
			url: '',
		}
	}
}
</script>

<style>
.file-web-link .input-group {
	margin-top: 10px;
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
  var WebLink_default = __vue_component__5;

  // ../frontend/frontend/public/js/upload/file_uploader/FileUploader.vue
  var __vue_script__6 = {
    name: "FileUploader",
    props: {
      show_upload_button: {
        default: true
      },
      disable_file_browser: {
        default: false
      },
      allow_multiple: {
        default: true
      },
      as_dataurl: {
        default: false
      },
      doctype: {
        default: null
      },
      docname: {
        default: null
      },
      fieldname: {
        default: null
      },
      folder: {
        default: "Home"
      },
      method: {
        default: null
      },
      on_success: {
        default: null
      },
      restrictions: {
        default: () => ({
          max_file_size: null,
          max_number_of_files: null,
          allowed_file_types: []
        })
      },
      upload_notes: {
        default: null
      }
    },
    components: {
      FilePreview: FilePreview_default,
      FileBrowser: FileBrowser_default,
      WebLink: WebLink_default
    },
    data() {
      return {
        files: [],
        is_dragging: false,
        currently_uploading: -1,
        show_file_browser: false,
        show_web_link: false
      };
    },
    watch: {
      files(newvalue, oldvalue) {
        if (!this.allow_multiple && newvalue.length > 1) {
          this.files = [newvalue[newvalue.length - 1]];
        }
      }
    },
    computed: {
      upload_complete() {
        return this.files.length > 0 && this.files.every((file) => file.total !== 0 && file.progress === file.total);
      },
      allow_take_photo() {
        return window.navigator.mediaDevices;
      }
    },
    methods: {
      dragover() {
        this.is_dragging = true;
      },
      dragleave() {
        this.is_dragging = false;
      },
      dropfiles(e) {
        this.is_dragging = false;
        this.add_files(e.dataTransfer.files);
      },
      browse_files() {
        this.$refs.file_input.click();
      },
      on_file_input(e) {
        this.add_files(this.$refs.file_input.files);
      },
      remove_file(file) {
        this.files = this.files.filter((f) => f !== file);
      },
      toggle_all_private() {
        let flag;
        let private_values = this.files.filter((file) => file.private);
        if (private_values.length < this.files.length) {
          flag = true;
        } else {
          flag = false;
        }
        this.files = this.files.map((file) => {
          file.private = flag;
          return file;
        });
      },
      add_files(file_array) {
        let files = Array.from(file_array).filter(this.check_restrictions).map((file) => {
          let is_image = file.type.startsWith("image");
          return {
            file_obj: file,
            name: file.name,
            doc: null,
            progress: 0,
            total: 0,
            failed: false,
            uploading: false,
            private: !is_image
          };
        });
        this.files = this.files.concat(files);
      },
      check_restrictions(file) {
        let {max_file_size, allowed_file_types} = this.restrictions;
        let mime_type = file.type;
        let extension = "." + file.name.split(".").pop();
        let is_correct_type = true;
        let valid_file_size = true;
        if (allowed_file_types.length) {
          is_correct_type = allowed_file_types.some((type) => {
            if (type.includes("/")) {
              if (!file.type)
                return false;
              return file.type.match(type);
            }
            if (type[0] === ".") {
              return file.name.endsWith(type);
            }
            return false;
          });
        }
        if (max_file_size && file.size != null) {
          valid_file_size = file.size < max_file_size;
        }
        if (!is_correct_type) {
          console.warn("File skipped because of invalid file type", file);
        }
        if (!valid_file_size) {
          console.warn("File skipped because of invalid file size", file.size, file);
        }
        return is_correct_type && valid_file_size;
      },
      upload_files() {
        if (this.show_file_browser) {
          return this.upload_via_file_browser();
        }
        if (this.show_web_link) {
          return this.upload_via_web_link();
        }
        if (this.as_dataurl) {
          return this.return_as_dataurl();
        }
        return frappe.run_serially(this.files.map((file, i) => () => this.upload_file(file, i)));
      },
      upload_via_file_browser() {
        let selected_file = this.$refs.file_browser.selected_node;
        if (!selected_file.value) {
          frappe.msgprint(__("Click on a file to select it."));
          return Promise.reject();
        }
        return this.upload_file({
          file_url: selected_file.file_url
        });
      },
      upload_via_web_link() {
        let file_url = this.$refs.web_link.url;
        if (!file_url) {
          frappe.msgprint(__("Invalid URL"));
          return Promise.reject();
        }
        return this.upload_file({
          file_url
        });
      },
      return_as_dataurl() {
        let promises = this.files.map((file) => frappe.dom.file_to_base64(file.file_obj).then((dataurl) => {
          file.dataurl = dataurl;
          this.on_success && this.on_success(file);
        }));
        return Promise.all(promises);
      },
      upload_file(file, i) {
        this.currently_uploading = i;
        return new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();
          xhr.upload.addEventListener("loadstart", (e) => {
            file.uploading = true;
          });
          xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable) {
              file.progress = e.loaded;
              file.total = e.total;
            }
          });
          xhr.upload.addEventListener("load", (e) => {
            file.uploading = false;
            resolve();
          });
          xhr.addEventListener("error", (e) => {
            file.failed = true;
            reject();
          });
          xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                let r = null;
                let file_doc = null;
                try {
                  r = JSON.parse(xhr.responseText);
                  if (r.message.doctype === "File") {
                    file_doc = r.message;
                  }
                } catch (e) {
                  r = xhr.responseText;
                }
                file.doc = file_doc;
                if (this.on_success) {
                  this.on_success(file_doc, r);
                }
              } else if (xhr.status === 403) {
                let response = JSON.parse(xhr.responseText);
                frappe.msgprint({
                  title: __("Not permitted"),
                  indicator: "red",
                  message: response._error_message
                });
              } else {
                file.failed = true;
                let error = null;
                try {
                  error = JSON.parse(xhr.responseText);
                } catch (e) {
                }
                frappe.request.cleanup({}, error);
              }
            }
          };
          xhr.open("POST", "/api/method/frontend.api.file.fileupload.upload_file", true);
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("X-Frappe-CSRF-Token", frappe.csrf_token);
          let form_data = new FormData();
          if (file.file_obj) {
            form_data.append("file", file.file_obj, file.name);
          }
          form_data.append("is_private", +file.private);
          form_data.append("folder", this.folder);
          if (file.file_url) {
            form_data.append("file_url", file.file_url);
          }
          if (this.doctype && this.docname) {
            form_data.append("doctype", this.doctype);
            form_data.append("docname", this.docname);
          }
          if (this.fieldname) {
            form_data.append("fieldname", this.fieldname);
          }
          if (this.method) {
            form_data.append("method", this.method);
          }
          xhr.send(form_data);
        });
      },
      capture_image() {
        const capture = new frappe.ui.Capture({
          animate: false,
          error: true
        });
        capture.show();
        capture.submit((data_url) => {
          let filename = `capture_${frappe.datetime.now_datetime().replaceAll(/[: -]/g, "_")}.png`;
          this.url_to_file(data_url, filename, "image/png").then((file) => this.add_files([file]));
        });
      },
      url_to_file(url, filename, mime_type) {
        return fetch(url).then((res) => res.arrayBuffer()).then((buffer) => new File([buffer], filename, {type: mime_type}));
      }
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "file-uploader",
      on: {
        dragover: function($event) {
          $event.preventDefault();
          return _vm.dragover($event);
        },
        dragleave: function($event) {
          $event.preventDefault();
          return _vm.dragleave($event);
        },
        drop: function($event) {
          $event.preventDefault();
          return _vm.dropfiles($event);
        }
      }
    }, [
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.files.length === 0 && !_vm.show_file_browser && !_vm.show_web_link,
            expression: "files.length === 0 && !show_file_browser && !show_web_link"
          }
        ],
        staticClass: "file-upload-area"
      }, [
        !_vm.is_dragging ? _c("div", [
          _c("div", {staticClass: "text-center"}, [
            _vm._v("\n				" + _vm._s(_vm.__("Drag and drop files here or upload from")) + "\n			")
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "mt-2 text-center"}, [
            _c("button", {
              staticClass: "btn btn-file-upload",
              on: {click: _vm.browse_files}
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "url(#paint0_linear)"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M13.5 22V19",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M16.5 22V19",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M10.5 22H19.5",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M7.5 16H22.5",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("defs", [
                  _c("linearGradient", {
                    attrs: {
                      id: "paint0_linear",
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "30",
                      gradientUnits: "userSpaceOnUse"
                    }
                  }, [
                    _c("stop", {
                      attrs: {"stop-color": "#2C9AF1"}
                    }),
                    _vm._v(" "),
                    _c("stop", {
                      attrs: {
                        offset: "1",
                        "stop-color": "#2490EF"
                      }
                    })
                  ], 1)
                ], 1)
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("My Device")))
              ])
            ]),
            _vm._v(" "),
            _c("input", {
              ref: "file_input",
              staticClass: "hidden",
              attrs: {
                type: "file",
                multiple: _vm.allow_multiple,
                accept: _vm.restrictions.allowed_file_types.join(", ")
              },
              on: {change: _vm.on_file_input}
            }),
            _vm._v(" "),
            !_vm.disable_file_browser ? _c("button", {
              staticClass: "btn btn-file-upload",
              on: {
                click: function($event) {
                  _vm.show_file_browser = true;
                }
              }
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "#48BB74"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z",
                    stroke: "white",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "square"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12",
                    stroke: "white",
                    "stroke-miterlimit": "10",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("Library")))
              ])
            ]) : _vm._e(),
            _vm._v(" "),
            _c("button", {
              staticClass: "btn btn-file-upload",
              on: {
                click: function($event) {
                  _vm.show_web_link = true;
                }
              }
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "#ECAC4B"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M12.0469 17.9543L17.9558 12.0454",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455",
                    stroke: "white",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("Link")))
              ])
            ]),
            _vm._v(" "),
            _vm.allow_take_photo ? _c("button", {
              staticClass: "btn btn-file-upload",
              on: {click: _vm.capture_image}
            }, [
              _c("svg", {
                attrs: {
                  width: "30",
                  height: "30",
                  viewBox: "0 0 30 30",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              }, [
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "15",
                    r: "15",
                    fill: "#CE315B"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  attrs: {
                    d: "M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z",
                    stroke: "white",
                    "stroke-linejoin": "round"
                  }
                }),
                _vm._v(" "),
                _c("circle", {
                  attrs: {
                    cx: "15",
                    cy: "16",
                    r: "2.5",
                    stroke: "white"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", {staticClass: "mt-1"}, [
                _vm._v(_vm._s(_vm.__("Camera")))
              ])
            ]) : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "text-muted text-medium"}, [
            _vm._v("\n				" + _vm._s(_vm.upload_notes) + "\n			")
          ])
        ]) : _c("div", [
          _vm._v("\n			" + _vm._s(_vm.__("Drop files here")) + "\n		")
        ])
      ]),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.files.length && !_vm.show_file_browser && !_vm.show_web_link,
            expression: "files.length && !show_file_browser && !show_web_link"
          }
        ],
        staticClass: "file-preview-area"
      }, [
        _c("div", {staticClass: "file-preview-container"}, _vm._l(_vm.files, function(file, i) {
          return _c("FilePreview", {
            key: file.name,
            attrs: {file},
            on: {
              remove: function($event) {
                return _vm.remove_file(file);
              },
              toggle_private: function($event) {
                file.private = !file.private;
              }
            }
          });
        }), 1),
        _vm._v(" "),
        _vm.show_upload_button && _vm.currently_uploading === -1 ? _c("div", {staticClass: "flex align-center"}, [
          _c("button", {
            staticClass: "btn btn-primary btn-sm margin-right",
            on: {click: _vm.upload_files}
          }, [
            _vm.files.length === 1 ? _c("span", [
              _vm._v("\n					" + _vm._s(_vm.__("Upload file")) + "\n				")
            ]) : _c("span", [
              _vm._v("\n					" + _vm._s(_vm.__("Upload {0} files", [_vm.files.length])) + "\n				")
            ])
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "text-muted text-medium"}, [
            _vm._v("\n				" + _vm._s(_vm.__("Click on the lock icon to toggle public/private")) + "\n			")
          ])
        ]) : _vm._e()
      ]),
      _vm._v(" "),
      _vm.show_file_browser && !_vm.disable_file_browser ? _c("FileBrowser", {
        ref: "file_browser",
        on: {
          "hide-browser": function($event) {
            _vm.show_file_browser = false;
          }
        }
      }) : _vm._e(),
      _vm._v(" "),
      _vm.show_web_link ? _c("WebLink", {
        ref: "web_link",
        on: {
          "hide-web-link": function($event) {
            _vm.show_web_link = false;
          }
        }
      }) : _vm._e()
    ], 1);
  };
  var __vue_staticRenderFns__6 = [];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = function(inject) {
    if (!inject)
      return;
    inject("data-v-73c7ba79_0", {source: "\n.file-upload-area {\n	min-height: 16rem;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	border: 1px dashed var(--dark-border-color);\n	border-radius: var(--border-radius);\n	cursor: pointer;\n	background-color: var(--bg-color);\n}\n.btn-file-upload {\n	background-color: transparent;\n	border: none;\n	box-shadow: none;\n	font-size: var(--text-xs);\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/upload/file_uploader/FileUploader.vue"], "names": [], "mappings": ";AAgcA;CACA,iBAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,2CAAA;CACA,mCAAA;CACA,eAAA;CACA,iCAAA;AACA;AAEA;CACA,6BAAA;CACA,YAAA;CACA,gBAAA;CACA,yBAAA;AACA", "file": "FileUploader.vue", "sourcesContent": [`<template>
	<div class="file-uploader"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="dropfiles"
	>
		<div
			class="file-upload-area"
			v-show="files.length === 0 && !show_file_browser && !show_web_link"
		>
			<div v-if="!is_dragging">
				<div class="text-center">
					{{ __('Drag and drop files here or upload from') }}
				</div>
				<div class="mt-2 text-center">
					<button class="btn btn-file-upload" @click="browse_files">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
							<path d="M13.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.5 22H19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.5 16H22.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2C9AF1"/>
							<stop offset="1" stop-color="#2490EF"/>
							</linearGradient>
							</defs>
						</svg>
						<div class="mt-1">{{ __('My Device') }}</div>
					</button>
					<input
						type="file"
						class="hidden"
						ref="file_input"
						@change="on_file_input"
						:multiple="allow_multiple"
						:accept="restrictions.allowed_file_types.join(', ')"
					>
					<button class="btn btn-file-upload" v-if="!disable_file_browser" @click="show_file_browser = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#48BB74"/>
							<path d="M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
							<path d="M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Library') }}</div>
					</button>
					<button class="btn btn-file-upload" @click="show_web_link = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#ECAC4B"/>
							<path d="M12.0469 17.9543L17.9558 12.0454" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Link') }}</div>
					</button>
					<button v-if="allow_take_photo" class="btn btn-file-upload" @click="capture_image">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#CE315B"/>
							<path d="M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z" stroke="white" stroke-linejoin="round"/>
							<circle cx="15" cy="16" r="2.5" stroke="white"/>
						</svg>
						<div class="mt-1">{{ __('Camera') }}</div>
					</button>
				</div>
				<div class="text-muted text-medium">
					{{ upload_notes }}
				</div>
			</div>
			<div v-else>
				{{ __('Drop files here') }}
			</div>
		</div>
		<div class="file-preview-area" v-show="files.length && !show_file_browser && !show_web_link">
			<div class="file-preview-container">
				<FilePreview
					v-for="(file, i) in files"
					:key="file.name"
					:file="file"
					@remove="remove_file(file)"
					@toggle_private="file.private = !file.private"
				/>
			</div>
			<div class="flex align-center" v-if="show_upload_button && currently_uploading === -1">
				<button
					class="btn btn-primary btn-sm margin-right"
					@click="upload_files"
				>
					<span v-if="files.length === 1">
						{{ __('Upload file') }}
					</span>
					<span v-else>
						{{ __('Upload {0} files', [files.length]) }}
					</span>
				</button>
				<div class="text-muted text-medium">
					{{ __('Click on the lock icon to toggle public/private') }}
				</div>
			</div>
		</div>
		<FileBrowser
			ref="file_browser"
			v-if="show_file_browser && !disable_file_browser"
			@hide-browser="show_file_browser = false"
		/>
		<WebLink
			ref="web_link"
			v-if="show_web_link"
			@hide-web-link="show_web_link = false"
		/>
	</div>
</template>

<script>
import FilePreview from './FilePreview.vue';
import FileBrowser from './FileBrowser.vue';
import WebLink from './WebLink.vue';

export default {
	name: 'FileUploader',
	props: {
		show_upload_button: {
			default: true
		},
		disable_file_browser: {
			default: false
		},
		allow_multiple: {
			default: true
		},
		as_dataurl: {
			default: false
		},
		doctype: {
			default: null
		},
		docname: {
			default: null
		},
		fieldname: {
			default: null
		},
		folder: {
			default: 'Home'
		},
		method: {
			default: null
		},
		on_success: {
			default: null
		},
		restrictions: {
			default: () => ({
				max_file_size: null, // 2048 -> 2KB
				max_number_of_files: null,
				allowed_file_types: [] // ['image/*', 'video/*', '.jpg', '.gif', '.pdf']
			})
		},
		upload_notes: {
			default: null // "Images or video, upto 2MB"
		}
	},
	components: {
		FilePreview,
		FileBrowser,
		WebLink
	},
	data() {
		return {
			files: [],
			is_dragging: false,
			currently_uploading: -1,
			show_file_browser: false,
			show_web_link: false,
		}
	},
	watch: {
		files(newvalue, oldvalue) {
			if (!this.allow_multiple && newvalue.length > 1) {
				this.files = [newvalue[newvalue.length - 1]];
			}
		}
	},
	computed: {
		upload_complete() {
			return this.files.length > 0
				&& this.files.every(
					file => file.total !== 0 && file.progress === file.total);
		},
		allow_take_photo() {
			return window.navigator.mediaDevices;
		}
	},
	methods: {
		dragover() {
			this.is_dragging = true;
		},
		dragleave() {
			this.is_dragging = false;
		},
		dropfiles(e) {
			this.is_dragging = false;
			this.add_files(e.dataTransfer.files);
		},
		browse_files() {
			this.$refs.file_input.click();
		},
		on_file_input(e) {
			this.add_files(this.$refs.file_input.files);
		},
		remove_file(file) {
			this.files = this.files.filter(f => f !== file);
		},
		toggle_all_private() {
			let flag;
			let private_values = this.files.filter(file => file.private);
			if (private_values.length < this.files.length) {
				// there are some private and some public
				// set all to private
				flag = true;
			} else {
				// all are private, set all to public
				flag = false;
			}
			this.files = this.files.map(file => {
				file.private = flag;
				return file;
			});
		},
		add_files(file_array) {
			let files = Array.from(file_array)
				.filter(this.check_restrictions)
				.map(file => {
					let is_image = file.type.startsWith('image');
					return {
						file_obj: file,
						name: file.name,
						doc: null,
						progress: 0,
						total: 0,
						failed: false,
						uploading: false,
						private: !is_image
					}
				});
			this.files = this.files.concat(files);
		},
		check_restrictions(file) {
			let { max_file_size, allowed_file_types } = this.restrictions;

			let mime_type = file.type;
			let extension = '.' + file.name.split('.').pop();

			let is_correct_type = true;
			let valid_file_size = true;

			if (allowed_file_types.length) {
				is_correct_type = allowed_file_types.some((type) => {
					// is this is a mime-type
					if (type.includes('/')) {
						if (!file.type) return false;
						return file.type.match(type);
					}

					// otherwise this is likely an extension
					if (type[0] === '.') {
						return file.name.endsWith(type);
					}
					return false;
				});
			}

			if (max_file_size && file.size != null) {
				valid_file_size = file.size < max_file_size;
			}

			if (!is_correct_type) {
				console.warn('File skipped because of invalid file type', file);
			}
			if (!valid_file_size) {
				console.warn('File skipped because of invalid file size', file.size, file);
			}

			return is_correct_type && valid_file_size;
		},
		upload_files() {
			if (this.show_file_browser) {
				return this.upload_via_file_browser();
			}
			if (this.show_web_link) {
				return this.upload_via_web_link();
			}
			if (this.as_dataurl) {
				return this.return_as_dataurl();
			}
			return frappe.run_serially(
				this.files.map(
					(file, i) =>
						() => this.upload_file(file, i)
				)
			);
		},
		upload_via_file_browser() {
			let selected_file = this.$refs.file_browser.selected_node;
			if (!selected_file.value) {
				frappe.msgprint(__('Click on a file to select it.'));
				return Promise.reject();
			}

			return this.upload_file({
				file_url: selected_file.file_url
			});
		},
		upload_via_web_link() {
			let file_url = this.$refs.web_link.url;
			if (!file_url) {
				frappe.msgprint(__('Invalid URL'));
				return Promise.reject();
			}

			return this.upload_file({
				file_url
			});
		},
		return_as_dataurl() {
			let promises = this.files.map(file =>
				frappe.dom.file_to_base64(file.file_obj)
					.then(dataurl => {
						file.dataurl = dataurl;
						this.on_success && this.on_success(file);
					})
			);
			return Promise.all(promises);
		},
		upload_file(file, i) {
			this.currently_uploading = i;

			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('loadstart', (e) => {
					file.uploading = true;
				})
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
						file.progress = e.loaded;
						file.total = e.total;
					}
				})
				xhr.upload.addEventListener('load', (e) => {
					file.uploading = false;
					resolve();
				})
				xhr.addEventListener('error', (e) => {
					file.failed = true;
					reject();
				})
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							let r = null;
							let file_doc = null;
							try {
								r = JSON.parse(xhr.responseText);
								if (r.message.doctype === 'File') {
									file_doc = r.message;
								}
							} catch(e) {
								r = xhr.responseText;
							}

							file.doc = file_doc;

							if (this.on_success) {
								this.on_success(file_doc, r);
							}
						} else if (xhr.status === 403) {
							let response = JSON.parse(xhr.responseText);
							frappe.msgprint({
								title: __('Not permitted'),
								indicator: 'red',
								message: response._error_message
							});
						} else {
							file.failed = true;
							let error = null;
							try {
								error = JSON.parse(xhr.responseText);
							} catch(e) {
								// pass
							}
							frappe.request.cleanup({}, error);
						}
					}
				}
				xhr.open('POST', '/api/method/frontend.api.file.fileupload.upload_file', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);

				let form_data = new FormData();
				if (file.file_obj) {
					form_data.append('file', file.file_obj, file.name);
				}
				form_data.append('is_private', +file.private);
				form_data.append('folder', this.folder);

				if (file.file_url) {
					form_data.append('file_url', file.file_url);
				}

				if (this.doctype && this.docname) {
					form_data.append('doctype', this.doctype);
					form_data.append('docname', this.docname);
				}

				if (this.fieldname) {
					form_data.append('fieldname', this.fieldname);
				}

				if (this.method) {
					form_data.append('method', this.method);
				}

				xhr.send(form_data);
			});
		},
		capture_image() {
			const capture = new frappe.ui.Capture({
				animate: false,
				error: true
			});
			capture.show();
			capture.submit(data_url => {
				let filename = \`capture_\${frappe.datetime.now_datetime().replaceAll(/[: -]/g, '_')}.png\`;
				this.url_to_file(data_url, filename, 'image/png').then((file) =>
					this.add_files([file])
				);
			});
		},
		url_to_file(url, filename, mime_type) {
			return fetch(url)
					.then(res => res.arrayBuffer())
					.then(buffer => new File([buffer], filename, { type: mime_type }));
		},
	}
}
</script>
<style>
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}

.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__6 = void 0;
  var __vue_module_identifier__6 = void 0;
  var __vue_is_functional_template__6 = false;
  function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
	<div class="file-uploader"
		@dragover.prevent="dragover"
		@dragleave.prevent="dragleave"
		@drop.prevent="dropfiles"
	>
		<div
			class="file-upload-area"
			v-show="files.length === 0 && !show_file_browser && !show_web_link"
		>
			<div v-if="!is_dragging">
				<div class="text-center">
					{{ __('Drag and drop files here or upload from') }}
				</div>
				<div class="mt-2 text-center">
					<button class="btn btn-file-upload" @click="browse_files">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="url(#paint0_linear)"/>
							<path d="M13.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.5 22V19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M10.5 22H19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.5 16H22.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M21 8H9C8.17157 8 7.5 8.67157 7.5 9.5V17.5C7.5 18.3284 8.17157 19 9 19H21C21.8284 19 22.5 18.3284 22.5 17.5V9.5C22.5 8.67157 21.8284 8 21 8Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2C9AF1"/>
							<stop offset="1" stop-color="#2490EF"/>
							</linearGradient>
							</defs>
						</svg>
						<div class="mt-1">{{ __('My Device') }}</div>
					</button>
					<input
						type="file"
						class="hidden"
						ref="file_input"
						@change="on_file_input"
						:multiple="allow_multiple"
						:accept="restrictions.allowed_file_types.join(', ')"
					>
					<button class="btn btn-file-upload" v-if="!disable_file_browser" @click="show_file_browser = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#48BB74"/>
							<path d="M13.0245 11.5H8C7.72386 11.5 7.5 11.7239 7.5 12V20C7.5 21.1046 8.39543 22 9.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V14.5C22.5 14.2239 22.2761 14 22 14H15.2169C15.0492 14 14.8926 13.9159 14.8 13.776L13.4414 11.724C13.3488 11.5841 13.1922 11.5 13.0245 11.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="square"/>
							<path d="M8.87939 9.5V8.5C8.87939 8.22386 9.10325 8 9.37939 8H20.6208C20.8969 8 21.1208 8.22386 21.1208 8.5V12" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Library') }}</div>
					</button>
					<button class="btn btn-file-upload" @click="show_web_link = true">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#ECAC4B"/>
							<path d="M12.0469 17.9543L17.9558 12.0454" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M13.8184 11.4547L15.7943 9.47873C16.4212 8.85205 17.2714 8.5 18.1578 8.5C19.0443 8.5 19.8945 8.85205 20.5214 9.47873V9.47873C21.1481 10.1057 21.5001 10.9558 21.5001 11.8423C21.5001 12.7287 21.1481 13.5789 20.5214 14.2058L18.5455 16.1818" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M11.4547 13.8184L9.47873 15.7943C8.85205 16.4212 8.5 17.2714 8.5 18.1578C8.5 19.0443 8.85205 19.8945 9.47873 20.5214V20.5214C10.1057 21.1481 10.9558 21.5001 11.8423 21.5001C12.7287 21.5001 13.5789 21.1481 14.2058 20.5214L16.1818 18.5455" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<div class="mt-1">{{ __('Link') }}</div>
					</button>
					<button v-if="allow_take_photo" class="btn btn-file-upload" @click="capture_image">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="15" cy="15" r="15" fill="#CE315B"/>
							<path d="M11.5 10.5H9.5C8.67157 10.5 8 11.1716 8 12V20C8 20.8284 8.67157 21.5 9.5 21.5H20.5C21.3284 21.5 22 20.8284 22 20V12C22 11.1716 21.3284 10.5 20.5 10.5H18.5L17.3 8.9C17.1111 8.64819 16.8148 8.5 16.5 8.5H13.5C13.1852 8.5 12.8889 8.64819 12.7 8.9L11.5 10.5Z" stroke="white" stroke-linejoin="round"/>
							<circle cx="15" cy="16" r="2.5" stroke="white"/>
						</svg>
						<div class="mt-1">{{ __('Camera') }}</div>
					</button>
				</div>
				<div class="text-muted text-medium">
					{{ upload_notes }}
				</div>
			</div>
			<div v-else>
				{{ __('Drop files here') }}
			</div>
		</div>
		<div class="file-preview-area" v-show="files.length && !show_file_browser && !show_web_link">
			<div class="file-preview-container">
				<FilePreview
					v-for="(file, i) in files"
					:key="file.name"
					:file="file"
					@remove="remove_file(file)"
					@toggle_private="file.private = !file.private"
				/>
			</div>
			<div class="flex align-center" v-if="show_upload_button && currently_uploading === -1">
				<button
					class="btn btn-primary btn-sm margin-right"
					@click="upload_files"
				>
					<span v-if="files.length === 1">
						{{ __('Upload file') }}
					</span>
					<span v-else>
						{{ __('Upload {0} files', [files.length]) }}
					</span>
				</button>
				<div class="text-muted text-medium">
					{{ __('Click on the lock icon to toggle public/private') }}
				</div>
			</div>
		</div>
		<FileBrowser
			ref="file_browser"
			v-if="show_file_browser && !disable_file_browser"
			@hide-browser="show_file_browser = false"
		/>
		<WebLink
			ref="web_link"
			v-if="show_web_link"
			@hide-web-link="show_web_link = false"
		/>
	</div>
</template>

<script>
import FilePreview from './FilePreview.vue';
import FileBrowser from './FileBrowser.vue';
import WebLink from './WebLink.vue';

export default {
	name: 'FileUploader',
	props: {
		show_upload_button: {
			default: true
		},
		disable_file_browser: {
			default: false
		},
		allow_multiple: {
			default: true
		},
		as_dataurl: {
			default: false
		},
		doctype: {
			default: null
		},
		docname: {
			default: null
		},
		fieldname: {
			default: null
		},
		folder: {
			default: 'Home'
		},
		method: {
			default: null
		},
		on_success: {
			default: null
		},
		restrictions: {
			default: () => ({
				max_file_size: null, // 2048 -> 2KB
				max_number_of_files: null,
				allowed_file_types: [] // ['image/*', 'video/*', '.jpg', '.gif', '.pdf']
			})
		},
		upload_notes: {
			default: null // "Images or video, upto 2MB"
		}
	},
	components: {
		FilePreview,
		FileBrowser,
		WebLink
	},
	data() {
		return {
			files: [],
			is_dragging: false,
			currently_uploading: -1,
			show_file_browser: false,
			show_web_link: false,
		}
	},
	watch: {
		files(newvalue, oldvalue) {
			if (!this.allow_multiple && newvalue.length > 1) {
				this.files = [newvalue[newvalue.length - 1]];
			}
		}
	},
	computed: {
		upload_complete() {
			return this.files.length > 0
				&& this.files.every(
					file => file.total !== 0 && file.progress === file.total);
		},
		allow_take_photo() {
			return window.navigator.mediaDevices;
		}
	},
	methods: {
		dragover() {
			this.is_dragging = true;
		},
		dragleave() {
			this.is_dragging = false;
		},
		dropfiles(e) {
			this.is_dragging = false;
			this.add_files(e.dataTransfer.files);
		},
		browse_files() {
			this.$refs.file_input.click();
		},
		on_file_input(e) {
			this.add_files(this.$refs.file_input.files);
		},
		remove_file(file) {
			this.files = this.files.filter(f => f !== file);
		},
		toggle_all_private() {
			let flag;
			let private_values = this.files.filter(file => file.private);
			if (private_values.length < this.files.length) {
				// there are some private and some public
				// set all to private
				flag = true;
			} else {
				// all are private, set all to public
				flag = false;
			}
			this.files = this.files.map(file => {
				file.private = flag;
				return file;
			});
		},
		add_files(file_array) {
			let files = Array.from(file_array)
				.filter(this.check_restrictions)
				.map(file => {
					let is_image = file.type.startsWith('image');
					return {
						file_obj: file,
						name: file.name,
						doc: null,
						progress: 0,
						total: 0,
						failed: false,
						uploading: false,
						private: !is_image
					}
				});
			this.files = this.files.concat(files);
		},
		check_restrictions(file) {
			let { max_file_size, allowed_file_types } = this.restrictions;

			let mime_type = file.type;
			let extension = '.' + file.name.split('.').pop();

			let is_correct_type = true;
			let valid_file_size = true;

			if (allowed_file_types.length) {
				is_correct_type = allowed_file_types.some((type) => {
					// is this is a mime-type
					if (type.includes('/')) {
						if (!file.type) return false;
						return file.type.match(type);
					}

					// otherwise this is likely an extension
					if (type[0] === '.') {
						return file.name.endsWith(type);
					}
					return false;
				});
			}

			if (max_file_size && file.size != null) {
				valid_file_size = file.size < max_file_size;
			}

			if (!is_correct_type) {
				console.warn('File skipped because of invalid file type', file);
			}
			if (!valid_file_size) {
				console.warn('File skipped because of invalid file size', file.size, file);
			}

			return is_correct_type && valid_file_size;
		},
		upload_files() {
			if (this.show_file_browser) {
				return this.upload_via_file_browser();
			}
			if (this.show_web_link) {
				return this.upload_via_web_link();
			}
			if (this.as_dataurl) {
				return this.return_as_dataurl();
			}
			return frappe.run_serially(
				this.files.map(
					(file, i) =>
						() => this.upload_file(file, i)
				)
			);
		},
		upload_via_file_browser() {
			let selected_file = this.$refs.file_browser.selected_node;
			if (!selected_file.value) {
				frappe.msgprint(__('Click on a file to select it.'));
				return Promise.reject();
			}

			return this.upload_file({
				file_url: selected_file.file_url
			});
		},
		upload_via_web_link() {
			let file_url = this.$refs.web_link.url;
			if (!file_url) {
				frappe.msgprint(__('Invalid URL'));
				return Promise.reject();
			}

			return this.upload_file({
				file_url
			});
		},
		return_as_dataurl() {
			let promises = this.files.map(file =>
				frappe.dom.file_to_base64(file.file_obj)
					.then(dataurl => {
						file.dataurl = dataurl;
						this.on_success && this.on_success(file);
					})
			);
			return Promise.all(promises);
		},
		upload_file(file, i) {
			this.currently_uploading = i;

			return new Promise((resolve, reject) => {
				let xhr = new XMLHttpRequest();
				xhr.upload.addEventListener('loadstart', (e) => {
					file.uploading = true;
				})
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
						file.progress = e.loaded;
						file.total = e.total;
					}
				})
				xhr.upload.addEventListener('load', (e) => {
					file.uploading = false;
					resolve();
				})
				xhr.addEventListener('error', (e) => {
					file.failed = true;
					reject();
				})
				xhr.onreadystatechange = () => {
					if (xhr.readyState == XMLHttpRequest.DONE) {
						if (xhr.status === 200) {
							let r = null;
							let file_doc = null;
							try {
								r = JSON.parse(xhr.responseText);
								if (r.message.doctype === 'File') {
									file_doc = r.message;
								}
							} catch(e) {
								r = xhr.responseText;
							}

							file.doc = file_doc;

							if (this.on_success) {
								this.on_success(file_doc, r);
							}
						} else if (xhr.status === 403) {
							let response = JSON.parse(xhr.responseText);
							frappe.msgprint({
								title: __('Not permitted'),
								indicator: 'red',
								message: response._error_message
							});
						} else {
							file.failed = true;
							let error = null;
							try {
								error = JSON.parse(xhr.responseText);
							} catch(e) {
								// pass
							}
							frappe.request.cleanup({}, error);
						}
					}
				}
				xhr.open('POST', '/api/method/frontend.api.file.fileupload.upload_file', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);

				let form_data = new FormData();
				if (file.file_obj) {
					form_data.append('file', file.file_obj, file.name);
				}
				form_data.append('is_private', +file.private);
				form_data.append('folder', this.folder);

				if (file.file_url) {
					form_data.append('file_url', file.file_url);
				}

				if (this.doctype && this.docname) {
					form_data.append('doctype', this.doctype);
					form_data.append('docname', this.docname);
				}

				if (this.fieldname) {
					form_data.append('fieldname', this.fieldname);
				}

				if (this.method) {
					form_data.append('method', this.method);
				}

				xhr.send(form_data);
			});
		},
		capture_image() {
			const capture = new frappe.ui.Capture({
				animate: false,
				error: true
			});
			capture.show();
			capture.submit(data_url => {
				let filename = \`capture_\${frappe.datetime.now_datetime().replaceAll(/[: -]/g, '_')}.png\`;
				this.url_to_file(data_url, filename, 'image/png').then((file) =>
					this.add_files([file])
				);
			});
		},
		url_to_file(url, filename, mime_type) {
			return fetch(url)
					.then(res => res.arrayBuffer())
					.then(buffer => new File([buffer], filename, { type: mime_type }));
		},
	}
}
</script>
<style>
.file-upload-area {
	min-height: 16rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed var(--dark-border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	background-color: var(--bg-color);
}

.btn-file-upload {
	background-color: transparent;
	border: none;
	box-shadow: none;
	font-size: var(--text-xs);
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
  var FileUploader_default = __vue_component__6;

  // ../frontend/frontend/public/js/upload/file_uploader/index.js
  var FileUploaderCustom = class {
    constructor({
      wrapper,
      method,
      on_success,
      doctype,
      docname,
      fieldname,
      files,
      folder,
      restrictions,
      upload_notes,
      allow_multiple,
      as_dataurl,
      disable_file_browser,
      frm
    } = {}) {
      frm && frm.attachments.max_reached(true);
      if (!wrapper) {
        this.make_dialog();
      } else {
        this.wrapper = wrapper.get ? wrapper.get(0) : wrapper;
      }
      this.$fileuploader = new Vue({
        el: this.wrapper,
        render: (h) => h(FileUploader_default, {
          props: {
            show_upload_button: !Boolean(this.dialog),
            doctype,
            docname,
            fieldname,
            method,
            folder,
            on_success,
            restrictions,
            upload_notes,
            allow_multiple,
            as_dataurl,
            disable_file_browser
          }
        })
      });
      this.uploader = this.$fileuploader.$children[0];
      this.uploader.$watch("files", (files2) => {
        let all_private = files2.every((file) => file.private);
        if (this.dialog) {
          this.dialog.set_secondary_action_label(all_private ? __("Set all public") : __("Set all private"));
        }
      }, {deep: true});
      if (files && files.length) {
        this.uploader.add_files(files);
      }
    }
    upload_files() {
      this.dialog && this.dialog.get_primary_btn().prop("disabled", true);
      return this.uploader.upload_files().then(() => {
        this.dialog && this.dialog.hide();
      });
    }
    make_dialog() {
      this.dialog = new frappe.ui.Dialog({
        title: __("Upload"),
        primary_action_label: __("Upload"),
        primary_action: () => this.upload_files(),
        secondary_action_label: __("Set all private"),
        secondary_action: () => {
          this.uploader.toggle_all_private();
        }
      });
      this.wrapper = this.dialog.body;
      this.dialog.show();
      this.dialog.$wrapper.on("hidden.bs.modal", function() {
        $(this).data("bs.modal", null);
        $(this).remove();
      });
    }
  };
  var file_uploader_default = FileUploaderCustom;

  // ../frontend/frontend/public/js/upload/upload.bundle.js
  frappe.provide("frappe.ui");
  frappe.ui.FileUploaderCustom = file_uploader_default;
})();
//# sourceMappingURL=upload.bundle.EWVW7R5K.js.map
