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

  // ../frontend/frontend/public/js/services/patient_chart/api.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
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
  }) => api({
    method: "clinical.api.patients.get_patients_per_service_unit",
    args: {
      service_unit,
      service_point,
      search,
      traverse
    },
    freeze: false
  });
  var getMyServiceUnits = () => api({
    method: "clinical.clinical.doctype.user_service_unit.user_service_unit.get_user_service_unit"
  });
  var getMyServicePoints = (service_unit) => api({
    method: "clinical.clinical.doctype.service_point.service_point.get_unit_service_points",
    args: {
      service_unit
    }
  });
  var getMyLocation = () => api({
    method: "clinical.api.queue_management.queue_logistics.get_my_location",
    args: {}
  });
  var updatePractitionerOccupancy = (service_unit, service_point) => api({
    method: "clinical.api.queue_management.queue_logistics.update_practitioner_occupancy",
    args: {
      service_unit,
      service_point
    }
  });
  var vacateServicePoint = (service_unit) => api({
    method: "clinical.api.queue_management.queue_logistics.vacate_service_point",
    args: {
      service_unit
    }
  });
  var getPatientsCurrentlySeeingDoctors = (service_unit) => api({
    method: "clinical.api.queue_management.queue_logistics.get_patients_currently_seeing_doctors",
    args: {
      service_unit
    }
  });
  var getAnnouncedPatients = (service_unit) => api({
    method: "clinical.api.queue_management.queue_logistics.get_announced_patients",
    args: {
      service_unit
    }
  });
  var getPatientsAwaiting = (service_unit, status) => api({
    method: "clinical.api.queue_management.queue_logistics.get_number_of_patients_awaiting",
    args: {
      service_unit,
      status
    }
  });
  var createPatientEncounter = (patient, is_walk_in) => api({
    method: "clinical.api.patient_encounter.patient_encounter.create_patient_encounter",
    args: {
      patient,
      is_walk_in
    }
  });
  var getDraftPatientEncounters = (patient, source = "", service_unit = {}) => api({
    method: "clinical.api.patient_encounter.patient_encounter.get_draft_patient_encounter",
    args: {
      patient,
      source,
      service_unit
    }
  });
  var transferPatient = (args) => api({
    method: "clinical.api.patients.transfer_inpatient",
    args
  });

  // ../frontend/frontend/public/js/patient/Encounter.vue
  var __vue_script__ = {
    name: "Encounter",
    data() {
      return {
        message: ""
      };
    },
    created() {
      setInterval(() => {
        this.reloadClock();
      }, 1e3);
    },
    computed: {
      encounter() {
        return this.$store.getters["encounter/getEncounter"];
      },
      patient() {
        return this.$store.getters["patient/getSelectedPatient"];
      }
    },
    methods: {
      createEncounter() {
        createPatientEncounter(this.patient.patient).then((encounter) => this.updateEncounter(encounter));
      },
      updateEncounter(encounter) {
        this.$store.dispatch("encounter/setEncounter", encounter);
        this.reloadClock();
      },
      getPatientEncounter(patient) {
        if (patient) {
          getDraftPatientEncounters(patient).then((encounter) => this.updateEncounter(encounter));
        }
      },
      setContext(payload) {
        this.$store.dispatch("context/setContextItem", payload);
      },
      getEncounterDateTime() {
        if (this.encounter && this.encounter.encounter_date && this.encounter.encounter_time) {
          const date = this.encounter.encounter_date.replaceAll("-", "/");
          const time = this.encounter.encounter_time.split(".")[0];
          const combinedDateTime = `${date} ${time}`;
          return new Date(combinedDateTime);
        }
        return null;
      },
      reloadClock() {
        const appointmentDateTime = this.getEncounterDateTime();
        if (appointmentDateTime) {
          var today = new Date();
          today.setHours(today.getHours() - 3);
          var diffMs = today - appointmentDateTime;
          var diffDays = Math.floor(diffMs / 864e5) || 0;
          var diffHrs = Math.floor(diffMs % 864e5 / 36e5) || 0;
          var diffMins = Math.round(diffMs % 864e5 % 36e5 / 6e4) || 0;
          var diffSecs = Math.round(diffMs % 864e5 % 36e5 % 6e4 / 1e3) || 0;
          this.message = diffDays + " d " + diffHrs + " hr " + diffMins + " min " + diffSecs + "s";
        } else {
          this.message = "";
        }
      }
    },
    watch: {
      patient(val) {
        if (val && val.patient) {
          this.getPatientEncounter(val.patient);
        } else {
          this.updateEncounter(null);
        }
      },
      encounter(val) {
        if (val) {
          this.setContext({
            key: "encounter",
            value: val.name
          });
          setInterval(() => {
            this.reloadClock();
          }, 1e3);
        }
        this.reloadClock();
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticStyle: {width: "100%"}}, [
      _c("b-row", {staticClass: "p-2"}, [
        _vm.encounter && _vm.encounter.name ? _c("b-col", {attrs: {cols: "12", align: "center"}}, [
          _c("p", {staticStyle: {color: "black", "font-size": "12px"}}, [
            _c("i", {
              staticClass: "fa fa-clock-o  mobile-hidden",
              attrs: {"aria-hidden": "true"}
            }),
            _vm._v(" "),
            _c("span", {staticClass: "mobile-hidden"}, [
              _vm._v("  " + _vm._s(_vm.message))
            ])
          ])
        ]) : _c("b-col", [
          _vm._v("\n      " + _vm._s(_vm.message) + "\n      "),
          _c("b-button", {
            attrs: {variant: "success", size: "sm"},
            on: {
              click: function($event) {
                return _vm.createEncounter();
              }
            }
          }, [
            _c("i", {
              staticClass: "fa fa-plus-circle",
              attrs: {"aria-hidden": "true"}
            }),
            _vm._v(" "),
            _c("span", {staticClass: "mobile-hidden"}, [
              _vm._v("Create Encounter")
            ])
          ])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-374c0ae2_0", {source: "\n@media only screen and (max-width: 767px) {\n.mobile-hidden[data-v-374c0ae2]{\n        display: none;\n}\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/Encounter.vue"], "names": [], "mappings": ";AAuIA;AAEA;QACA,aAAA;AACA;AAGA", "file": "Encounter.vue", "sourcesContent": ['<template>\n  <b-container style="width:100%">\n    <b-row class="p-2">\n      <b-col cols="12" v-if="encounter && encounter.name" align="center">\n        <p style="color:black;font-size:12px">\n          <i class="fa fa-clock-o  mobile-hidden" aria-hidden="true"></i>\n         <span class="mobile-hidden">  {{ message }}</span>\n        </p>\n      </b-col>\n      <b-col v-else>\n        {{ message }}\n        <b-button variant="success" @click="createEncounter()" size="sm">\n          <i class="fa fa-plus-circle" aria-hidden="true">\n           \n          </i>\n           <span class="mobile-hidden">Create Encounter</span>\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport {\n  createPatientEncounter,\n  getDraftPatientEncounters,\n} from "../services/patient_chart/api.js";\nexport default {\n  name: "Encounter",\n  data() {\n    return {\n      message: "",\n    };\n  },\n  created() {\n    setInterval(() => {\n      this.reloadClock();\n    }, 1000);\n  },\n  computed: {\n    encounter() {\n      return this.$store.getters["encounter/getEncounter"];\n    },\n    patient() {\n      return this.$store.getters["patient/getSelectedPatient"];\n    },\n  },\n  methods: {\n    createEncounter() {\n      createPatientEncounter(this.patient.patient).then((encounter) =>\n        this.updateEncounter(encounter)\n      );\n    },\n    updateEncounter(encounter) {\n      this.$store.dispatch("encounter/setEncounter", encounter);\n      this.reloadClock();\n    },\n    getPatientEncounter(patient) {\n      if (patient) {\n        getDraftPatientEncounters(patient).then((encounter) =>\n          this.updateEncounter(encounter)\n        );\n      }\n    },\n    setContext(payload) {\n      this.$store.dispatch("context/setContextItem", payload);\n    },\n    getEncounterDateTime() {\n      if (\n        this.encounter &&\n        this.encounter.encounter_date &&\n        this.encounter.encounter_time\n      ) {\n        const date = this.encounter.encounter_date.replaceAll("-", "/");\n        const time = this.encounter.encounter_time.split(".")[0];\n        const combinedDateTime = `${date} ${time}`;\n\n        return new Date(combinedDateTime);\n      }\n      return null;\n    },\n    reloadClock() {\n      const appointmentDateTime = this.getEncounterDateTime();\n\n      if (appointmentDateTime) {\n        var today = new Date();\n        today.setHours(today.getHours() - 3);\n\n        var diffMs = today - appointmentDateTime; // milliseconds between now & Christmas\n        var diffDays = Math.floor(diffMs / 86400000) || 0; // days\n        var diffHrs = Math.floor((diffMs % 86400000) / 3600000) || 0; // hours\n        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000) || 0; // minutes\n        var diffSecs =\n          Math.round((((diffMs % 86400000) % 3600000) % 60000) / 1000) || 0;\n\n        this.message =\n          diffDays +\n          " d " +\n          diffHrs +\n          " hr " +\n          diffMins +\n          " min " +\n          diffSecs +\n          "s";\n      } else {\n        this.message = "";\n      }\n    },\n  },\n  watch: {\n    patient(val) {\n      if (val && val.patient) {\n        this.getPatientEncounter(val.patient);\n      } else {\n        this.updateEncounter(null);\n      }\n    },\n    encounter(val) {\n      if (val) {\n        this.setContext({\n          key: "encounter",\n          value: val.name,\n        });\n        setInterval(() => {\n          this.reloadClock();\n        }, 1000);\n      }\n\n      this.reloadClock();\n    },\n  },\n};\n</script>\n\n<style scoped>\n@media only screen and (max-width: 767px) {\n   \n    .mobile-hidden{\n        display: none;\n    }\n\n    \n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-374c0ae2";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container style="width:100%">\n    <b-row class="p-2">\n      <b-col cols="12" v-if="encounter && encounter.name" align="center">\n        <p style="color:black;font-size:12px">\n          <i class="fa fa-clock-o  mobile-hidden" aria-hidden="true"></i>\n         <span class="mobile-hidden">  {{ message }}</span>\n        </p>\n      </b-col>\n      <b-col v-else>\n        {{ message }}\n        <b-button variant="success" @click="createEncounter()" size="sm">\n          <i class="fa fa-plus-circle" aria-hidden="true">\n           \n          </i>\n           <span class="mobile-hidden">Create Encounter</span>\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport {\n  createPatientEncounter,\n  getDraftPatientEncounters,\n} from "../services/patient_chart/api.js";\nexport default {\n  name: "Encounter",\n  data() {\n    return {\n      message: "",\n    };\n  },\n  created() {\n    setInterval(() => {\n      this.reloadClock();\n    }, 1000);\n  },\n  computed: {\n    encounter() {\n      return this.$store.getters["encounter/getEncounter"];\n    },\n    patient() {\n      return this.$store.getters["patient/getSelectedPatient"];\n    },\n  },\n  methods: {\n    createEncounter() {\n      createPatientEncounter(this.patient.patient).then((encounter) =>\n        this.updateEncounter(encounter)\n      );\n    },\n    updateEncounter(encounter) {\n      this.$store.dispatch("encounter/setEncounter", encounter);\n      this.reloadClock();\n    },\n    getPatientEncounter(patient) {\n      if (patient) {\n        getDraftPatientEncounters(patient).then((encounter) =>\n          this.updateEncounter(encounter)\n        );\n      }\n    },\n    setContext(payload) {\n      this.$store.dispatch("context/setContextItem", payload);\n    },\n    getEncounterDateTime() {\n      if (\n        this.encounter &&\n        this.encounter.encounter_date &&\n        this.encounter.encounter_time\n      ) {\n        const date = this.encounter.encounter_date.replaceAll("-", "/");\n        const time = this.encounter.encounter_time.split(".")[0];\n        const combinedDateTime = `${date} ${time}`;\n\n        return new Date(combinedDateTime);\n      }\n      return null;\n    },\n    reloadClock() {\n      const appointmentDateTime = this.getEncounterDateTime();\n\n      if (appointmentDateTime) {\n        var today = new Date();\n        today.setHours(today.getHours() - 3);\n\n        var diffMs = today - appointmentDateTime; // milliseconds between now & Christmas\n        var diffDays = Math.floor(diffMs / 86400000) || 0; // days\n        var diffHrs = Math.floor((diffMs % 86400000) / 3600000) || 0; // hours\n        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000) || 0; // minutes\n        var diffSecs =\n          Math.round((((diffMs % 86400000) % 3600000) % 60000) / 1000) || 0;\n\n        this.message =\n          diffDays +\n          " d " +\n          diffHrs +\n          " hr " +\n          diffMins +\n          " min " +\n          diffSecs +\n          "s";\n      } else {\n        this.message = "";\n      }\n    },\n  },\n  watch: {\n    patient(val) {\n      if (val && val.patient) {\n        this.getPatientEncounter(val.patient);\n      } else {\n        this.updateEncounter(null);\n      }\n    },\n    encounter(val) {\n      if (val) {\n        this.setContext({\n          key: "encounter",\n          value: val.name,\n        });\n        setInterval(() => {\n          this.reloadClock();\n        }, 1000);\n      }\n\n      this.reloadClock();\n    },\n  },\n};\n</script>\n\n<style scoped>\n@media only screen and (max-width: 767px) {\n   \n    .mobile-hidden{\n        display: none;\n    }\n\n    \n}\n</style>\n';
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
  var Encounter_default = __vue_component__;

  // ../frontend/frontend/public/js/patient/mixins/theme.mixins.js
  var THEME_MIXIN = {
    data: function() {
      return {
        variants: [
          "primary",
          "secondary",
          "danger",
          "warning",
          "light",
          "success",
          "info",
          "dark"
        ],
        variant: {
          primary: "primary",
          secondary: "secondary",
          danger: "danger",
          warning: "warning",
          light: "light",
          success: "success",
          info: "info",
          dark: "dark",
          purple: "purple"
        },
        tabProp: {
          Timeline: {
            icon: "fa-line-chart",
            color: "green"
          },
          Procedures: {
            icon: "fa-file-text-o",
            color: "#a4a433"
          },
          "Drug Administration": {
            icon: "fa-medkit",
            color: "royalblue"
          },
          "Vital Signs": {
            icon: "fa-heartbeat",
            color: "rgb(147, 4, 4)"
          },
          Kardex: {
            icon: "fa-pencil-square-o",
            color: "#0e9595"
          },
          "Doctors Notes": {
            icon: "fa-user-md",
            color: "#a4a433"
          },
          Orders: {
            icon: "fa-file-text-o",
            color: "#28a745"
          },
          Prescriptions: {
            icon: "fa-medkit",
            color: "royalblue"
          },
          Accounts: {
            icon: "fa-credit-card-alt",
            color: "darkorange"
          },
          Forms: {
            icon: "fa-folder-open",
            color: "rgb(52, 113, 166)"
          },
          Labs: {
            icon: "fa-flask",
            color: "darkblue"
          }
        }
      };
    }
  };

  // ../frontend/frontend/public/js/patient/components/PatientListItem.vue
  var __vue_script__2 = {
    mixins: [THEME_MIXIN],
    props: {
      patient: {
        type: Object,
        default: null
      },
      status: String,
      time: String,
      callback: Function,
      isActive: {
        type: Boolean,
        default: true
      },
      fullScreenWorkArea: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: null
      }
    },
    computed: {
      activePatient() {
        return this.$store.getters["patient/getSelectedPatient"];
      }
    },
    data() {
      return {
        activeStatus: "",
        subtitle: "",
        avatarSize: "29px"
      };
    },
    methods: {
      clickPatient() {
        this.$emit("patient-selected", this.patient);
      },
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    },
    mounted() {
      if (this.activePatient.name == this.patient.name) {
        this.activeStatus = "secondary";
      } else {
        this.activeStatus = "";
      }
    },
    watch: {
      activePatient(activePatient) {
        if (activePatient.name == this.patient.name) {
          this.activeStatus = "secondary";
        } else {
          this.activeStatus = "";
        }
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-list-group-item", {
      staticClass: "d-flex align-items-center",
      class: {"no-radius": _vm.fullScreenWorkArea},
      attrs: {variant: _vm.activeStatus},
      on: {click: _vm.clickPatient}
    }, [
      !_vm.fullScreenWorkArea && _vm.patient.visit_initiated == 1 && _vm.patient.status != "Admitted" ? _c("b-avatar", {
        staticClass: "mr-3",
        staticStyle: {color: "black", border: "2px solid #a6d496"},
        attrs: {text: _vm.patient.order, size: _vm.avatarSize}
      }) : _c("b-avatar", {
        staticClass: "mr-3",
        attrs: {text: _vm.patient.order, size: _vm.avatarSize}
      }),
      _vm._v(" "),
      _vm.fullScreenWorkArea ? _c("b-row", {staticClass: "space-between"}, [
        _c("b-col", {staticClass: "time-text"}, [
          _vm._v(" " + _vm._s(_vm._f("subtitle")(_vm.patient)) + " ")
        ])
      ], 1) : _c("b-row", {staticClass: "space-between"}, [
        _c("b-col", {
          staticStyle: {flex: "1"},
          attrs: {"align-self": "stretch"}
        }, [
          _c("div", {staticClass: "mr-auto title-name"}, [
            _vm._v(_vm._s(_vm.patient.patient_name) + " "),
            _c("b-badge", {
              staticStyle: {border: "1px solid gray"},
              attrs: {pill: "", variant: "light"}
            }, [
              _vm._v(_vm._s(_vm.patient.age + "(" + _vm.patient.gender.charAt(0) + ")"))
            ])
          ], 1)
        ]),
        _vm._v(" "),
        _vm.activePatient.name !== _vm.patient.name ? _c("b-col", {attrs: {cols: "2"}}, [
          _c("span", {staticClass: "pull-right"}, [
            _c("svg", {
              staticClass: "bi bi-chevron-right",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                viewBox: "0 0 16 16"
              }
            }, [
              _c("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                }
              })
            ])
          ])
        ]) : _vm._e(),
        _vm._v(" "),
        _c("b-col", {staticClass: "time-text", attrs: {cols: "12"}}, [
          _vm._v(_vm._s(_vm.patient.bed || _vm.patient.appointment_time || _vm.patient.patient) + "\n    ")
        ]),
        _vm._v(" "),
        _c("b-col", {staticClass: "time-text", attrs: {cols: "12"}}, [
          _vm.patient.status == "Awaiting Vitals" ? _c("b-badge", {attrs: {pill: "", variant: "danger"}}, [_vm._v(_vm._s(_vm.patient.status))]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.status == "Awaiting Consultation" ? _c("b-badge", {attrs: {pill: "", variant: "warning"}}, [_vm._v(_vm._s(_vm.patient.status))]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.status == "Awaiting Investigation" ? _c("b-badge", {attrs: {pill: "", variant: "primary"}}, [_vm._v(_vm._s(_vm.patient.status))]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.status == "Visit Completed" ? _c("b-badge", {attrs: {pill: "", variant: "success"}}, [_vm._v(_vm._s(_vm.patient.status))]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.status == "Admission Scheduled" ? _c("b-badge", {attrs: {pill: "", variant: "light"}}, [
            _vm._v(_vm._s(_vm.patient.status))
          ]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.status == "Discharge Scheduled" ? _c("b-badge", {attrs: {pill: "", variant: "warning"}}, [_vm._v(_vm._s(_vm.patient.status))]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.status == "Pending Transfer Approval" ? _c("b-badge", {attrs: {pill: "", variant: "warning"}}, [_vm._v(_vm._s(_vm.patient.status))]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.status == "Admitted" ? _c("b-badge", {attrs: {pill: "", variant: "success"}}, [_vm._v(_vm._s(_vm.patient.status))]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.deceased == 1 ? _c("b-badge", {attrs: {pill: "", variant: "danger"}}, [_vm._v("Deceased")]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.visit_initiated == 1 && _vm.patient.status == "Awaiting Vitals" ? _c("b-badge", {
            staticStyle: {
              "background-color": "#C7F6B6",
              color: "black"
            },
            attrs: {pill: ""}
          }, [_vm._v("Visit Initiated")]) : _vm._e(),
          _vm._v(" "),
          _vm.patient.engaged_by_doctor == 1 && _vm.patient.status == "Awaiting Consultation" ? _c("b-badge", {
            staticStyle: {
              "background-color": "#C7F6B6",
              color: "black"
            },
            attrs: {pill: ""}
          }, [_vm._v("Engaged By Doctor")]) : _vm._e()
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-2ea97c90_0", {source: "\n.time-text {\n  font-size: smaller;\n  font-weight: bolder;\n}\n.title-name {\n  font-size: small;\n}\n.space-between {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n.no-radius {\n  border-radius: 0px !important;\n}\n\n/* .badge-secondary {\n  color: #fff;\n  background-color: #0a0f0f3b;\n} */\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 8px 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:hover {\n  background: #1f19192b;\n}\n.list-group-item-secondary {\n  /* -webkit-box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7);\n  box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7); */\n  border-radius: 0px;\n  border-left: 5px solid #7c2112;\n}\n.list-group-item-secondary {\n  background: #1f19192b;\n}\n.b-avatar {\n    font-size: inherit;\n    font-weight: 600;\n    line-height: 1;\n    text-align: center;\n    background: white;\n    color: black;\n    border: 1px solid darkgray;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/components/PatientListItem.vue"], "names": [], "mappings": ";AA0IA;EACA,kBAAA;EACA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AACA;EACA,aAAA;EACA,OAAA;EACA,8BAAA;AACA;AAEA;EACA,6BAAA;AACA;;AAEA;;;GAGA;AAEA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;EACA,sBAAA;EACA,sCAAA;AACA;AAEA;EACA,qBAAA;AAEA;AAEA;EACA;uDACA;EACA,kBAAA;EACA,8BAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;IACA,kBAAA;IACA,gBAAA;IACA,cAAA;IACA,kBAAA;IACA,iBAAA;IACA,YAAA;IACA,0BAAA;AACA", "file": "PatientListItem.vue", "sourcesContent": [`<template>
  <b-list-group-item
    class="d-flex align-items-center"
    v-bind:class="{ 'no-radius': fullScreenWorkArea }"
    :variant="activeStatus"
    @click="clickPatient"
  >
    <b-avatar
      class="mr-3"
      style="color:black;border:2px solid #a6d496"
      :text="patient.order"
      :size="avatarSize"
      v-if="!fullScreenWorkArea && patient.visit_initiated == 1 && patient.status !='Admitted'"
    ></b-avatar>
    <b-avatar
      class="mr-3"
      :text="patient.order"
      :size="avatarSize"
      v-else
    ></b-avatar>

    <b-row class="space-between" v-if="fullScreenWorkArea">
      <b-col class="time-text"> {{ patient | subtitle }} </b-col>
    </b-row>

    <b-row class="space-between" v-else>
      <b-col style="flex: 1" align-self="stretch">
        <div class="mr-auto title-name">{{ patient.patient_name }} <b-badge style="border:1px solid gray" pill variant="light">{{patient.age +"("+ patient.gender.charAt(0)+")"}}</b-badge></div>
      </b-col>

      <b-col cols="2" v-if="activePatient.name !== patient.name">
        <span class="pull-right"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            /></svg
        ></span>
      </b-col>
      <b-col cols="12" class="time-text"
        >{{ patient.bed || patient.appointment_time || patient.patient}}
      </b-col>
       <b-col cols="12" class="time-text">
       <b-badge v-if="patient.status=='Awaiting Vitals'" pill variant="danger">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.status=='Awaiting Consultation'" pill variant="warning">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.status=='Awaiting Investigation'" pill variant="primary">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Visit Completed'" pill variant="success">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Admission Scheduled'" pill variant="light">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Discharge Scheduled'" pill variant="warning">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Pending Transfer Approval'" pill variant="warning">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.status=='Admitted'" pill variant="success">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.deceased==1" pill variant="danger">Deceased</b-badge>
       <b-badge v-if="patient.visit_initiated == 1 && patient.status =='Awaiting Vitals'" pill style="background-color:#C7F6B6;color:black">Visit Initiated</b-badge>
       <b-badge v-if="patient.engaged_by_doctor == 1 && patient.status =='Awaiting Consultation'" pill style="background-color:#C7F6B6;color:black">Engaged By Doctor</b-badge>
       </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
import { THEME_MIXIN } from "../mixins/theme.mixins.js";
import {getPatientAgeAndGender} from "../../services/patient_chart/api";
export default {
  mixins: [THEME_MIXIN],
  props: {
    patient: {
      type: Object,
      default: null,
    },
    // activePatient: {
    //   type: Object,
    //   default: null,
    // },
    status: String,
    time: String,
    callback: Function,
    isActive: {
      type: Boolean,
      default: true,
    },
    fullScreenWorkArea: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: null,
    },
  },
  computed: {
      activePatient() {
      return this.$store.getters["patient/getSelectedPatient"];
    },
  },
  data() {
    return {
      activeStatus: "",
      subtitle: "",
      avatarSize: "29px",
    };
  },
  methods: {
    clickPatient() {
      this.$emit("patient-selected", this.patient);
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  mounted() {
    if (this.activePatient.name == this.patient.name) {
      this.activeStatus = "secondary";
    } else {
      this.activeStatus = "";
    }
  },
  watch: {
    activePatient(activePatient) {
      if (activePatient.name == this.patient.name) {
        this.activeStatus = "secondary";
      } else {
        this.activeStatus = "";
      }
    },
  },
};
</script>

<style>
.time-text {
  font-size: smaller;
  font-weight: bolder;
}

.title-name {
  font-size: small;
}
.space-between {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.no-radius {
  border-radius: 0px !important;
}

/* .badge-secondary {
  color: #fff;
  background-color: #0a0f0f3b;
} */

.list-group-item {
  position: relative;
  display: block;
  padding: 8px 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:hover {
  background: #1f19192b;
 
}

.list-group-item-secondary {
  /* -webkit-box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7);
  box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7); */
  border-radius: 0px;
  border-left: 5px solid #7c2112;
}
.list-group-item-secondary {
  background: #1f19192b;
}
.b-avatar {
    font-size: inherit;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    background: white;
    color: black;
    border: 1px solid darkgray;
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
  <b-list-group-item
    class="d-flex align-items-center"
    v-bind:class="{ 'no-radius': fullScreenWorkArea }"
    :variant="activeStatus"
    @click="clickPatient"
  >
    <b-avatar
      class="mr-3"
      style="color:black;border:2px solid #a6d496"
      :text="patient.order"
      :size="avatarSize"
      v-if="!fullScreenWorkArea && patient.visit_initiated == 1 && patient.status !='Admitted'"
    ></b-avatar>
    <b-avatar
      class="mr-3"
      :text="patient.order"
      :size="avatarSize"
      v-else
    ></b-avatar>

    <b-row class="space-between" v-if="fullScreenWorkArea">
      <b-col class="time-text"> {{ patient | subtitle }} </b-col>
    </b-row>

    <b-row class="space-between" v-else>
      <b-col style="flex: 1" align-self="stretch">
        <div class="mr-auto title-name">{{ patient.patient_name }} <b-badge style="border:1px solid gray" pill variant="light">{{patient.age +"("+ patient.gender.charAt(0)+")"}}</b-badge></div>
      </b-col>

      <b-col cols="2" v-if="activePatient.name !== patient.name">
        <span class="pull-right"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            /></svg
        ></span>
      </b-col>
      <b-col cols="12" class="time-text"
        >{{ patient.bed || patient.appointment_time || patient.patient}}
      </b-col>
       <b-col cols="12" class="time-text">
       <b-badge v-if="patient.status=='Awaiting Vitals'" pill variant="danger">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.status=='Awaiting Consultation'" pill variant="warning">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.status=='Awaiting Investigation'" pill variant="primary">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Visit Completed'" pill variant="success">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Admission Scheduled'" pill variant="light">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Discharge Scheduled'" pill variant="warning">{{ patient.status }}</b-badge>
        <b-badge v-if="patient.status=='Pending Transfer Approval'" pill variant="warning">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.status=='Admitted'" pill variant="success">{{ patient.status }}</b-badge>
       <b-badge v-if="patient.deceased==1" pill variant="danger">Deceased</b-badge>
       <b-badge v-if="patient.visit_initiated == 1 && patient.status =='Awaiting Vitals'" pill style="background-color:#C7F6B6;color:black">Visit Initiated</b-badge>
       <b-badge v-if="patient.engaged_by_doctor == 1 && patient.status =='Awaiting Consultation'" pill style="background-color:#C7F6B6;color:black">Engaged By Doctor</b-badge>
       </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
import { THEME_MIXIN } from "../mixins/theme.mixins.js";
import {getPatientAgeAndGender} from "../../services/patient_chart/api";
export default {
  mixins: [THEME_MIXIN],
  props: {
    patient: {
      type: Object,
      default: null,
    },
    // activePatient: {
    //   type: Object,
    //   default: null,
    // },
    status: String,
    time: String,
    callback: Function,
    isActive: {
      type: Boolean,
      default: true,
    },
    fullScreenWorkArea: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: null,
    },
  },
  computed: {
      activePatient() {
      return this.$store.getters["patient/getSelectedPatient"];
    },
  },
  data() {
    return {
      activeStatus: "",
      subtitle: "",
      avatarSize: "29px",
    };
  },
  methods: {
    clickPatient() {
      this.$emit("patient-selected", this.patient);
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  mounted() {
    if (this.activePatient.name == this.patient.name) {
      this.activeStatus = "secondary";
    } else {
      this.activeStatus = "";
    }
  },
  watch: {
    activePatient(activePatient) {
      if (activePatient.name == this.patient.name) {
        this.activeStatus = "secondary";
      } else {
        this.activeStatus = "";
      }
    },
  },
};
</script>

<style>
.time-text {
  font-size: smaller;
  font-weight: bolder;
}

.title-name {
  font-size: small;
}
.space-between {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.no-radius {
  border-radius: 0px !important;
}

/* .badge-secondary {
  color: #fff;
  background-color: #0a0f0f3b;
} */

.list-group-item {
  position: relative;
  display: block;
  padding: 8px 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:hover {
  background: #1f19192b;
 
}

.list-group-item-secondary {
  /* -webkit-box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7);
  box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7); */
  border-radius: 0px;
  border-left: 5px solid #7c2112;
}
.list-group-item-secondary {
  background: #1f19192b;
}
.b-avatar {
    font-size: inherit;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    background: white;
    color: black;
    border: 1px solid darkgray;
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
  var PatientListItem_default = __vue_component__2;

  // ../frontend/frontend/public/js/patient/pages/patient-chart/sidebar-pages/PatientList.vue
  var __vue_script__3 = {
    name: "PatientList",
    props: {
      patientList: {
        type: Array,
        default: []
      },
      fullScreenWorkArea: {
        type: Boolean,
        default: false
      },
      rows: Number
    },
    data() {
      return {
        currentPage: 1,
        perPage: 10,
        activePatient: {},
        isActive: null
      };
    },
    computed: {
      position: () => {
        return Math.floor(Math.random() * 1e3);
      },
      selectedPatient() {
        return this.$store.getters["patient/getSelectedPatient"];
      }
    },
    components: {
      PatientListItem: PatientListItem_default
    },
    watch: {
      currentPage(page) {
        this.$emit("current-page", page);
      },
      patientList(newList) {
        if (newList && newList.length > 0) {
          if (this.findSelectedPatientInNewList(newList) == false) {
            this.patientClick(this.patientList[0]);
          }
        }
      }
    },
    methods: {
      patientClick(patient) {
        this.$emit("selected-patient", patient);
        this.activePatient = patient;
        this.$store.dispatch("patient/setSelectedPatient", patient);
      },
      findSelectedPatientInNewList(newList) {
        let currentPatient = this.selectedPatient.patient;
        let isPart = false;
        newList.forEach((item) => {
          if (item.patient == currentPatient) {
            isPart = true;
          }
        });
        return isPart;
      }
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", {attrs: {cols: "12"}}, [
          _c("b-list-group", {staticClass: "scroll-list"}, [
            _vm._l(_vm.patientList, function(patient, index) {
              return _c("patient-list-item", {
                key: patient.name,
                attrs: {
                  patient,
                  index,
                  activePatient: _vm.activePatient,
                  fullScreenWorkArea: _vm.fullScreenWorkArea,
                  status: patient.status,
                  isActive: _vm.isActive,
                  "current-page": _vm.currentPage
                },
                on: {"patient-selected": _vm.patientClick}
              }, [
                _vm._v(_vm._s(_vm.activePatient.name) + " " + _vm._s(patient.name))
              ]);
            }),
            _vm._v(" "),
            _vm.patientList.length < 1 ? _c("div", {attrs: {id: "contain"}}, [
              _c("img", {
                attrs: {
                  src: "https://portal.mtrh.go.ke/files/findnoresult2.png",
                  alt: "No Data"
                }
              }),
              _vm._v(" "),
              _c("b", [
                _c("h", {staticStyle: {"font-weight": "600"}}, [
                  _vm._v("Oops!...Could not find the searched patient(s)")
                ])
              ], 1)
            ]) : _vm._e()
          ], 2)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-2e2651be_0", {source: "\n.pagination-spacing[data-v-2e2651be] {\n  margin-top: 6%;\n}\n.pagination-sm .page-link[data-v-2e2651be] {\n  padding: 0.25rem 0.5rem;\n  /* font-size: .75rem; */\n  line-height: 1.5;\n}\n.scroll-list[data-v-2e2651be]{\nheight: 72vh;\noverflow-y: scroll;\noverflow-x: hidden;\nscrollbar-width:thin;\nbackground: white;\n}\n.list-group[data-v-2e2651be] {\n    border-radius: 5px;\n}\n#contain[data-v-2e2651be] {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/pages/patient-chart/sidebar-pages/PatientList.vue"], "names": [], "mappings": ";AAoGA;EACA,cAAA;AACA;AAEA;EACA,uBAAA;EACA,uBAAA;EACA,gBAAA;AACA;AAEA;AACA,YAAA;AACA,kBAAA;AACA,kBAAA;AACA,oBAAA;AACA,iBAAA;AACA;AACA;IACA,kBAAA;AACA;AACA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AACA", "file": "PatientList.vue", "sourcesContent": ['<template>\n  <div>\n    <b-row>\n      <b-col cols="12">\n        <b-list-group class="scroll-list">\n          <patient-list-item\n            v-for="(patient, index) in patientList"\n            :key="patient.name"\n            :patient="patient"\n            :index="index"\n            :activePatient="activePatient"\n            :fullScreenWorkArea="fullScreenWorkArea"\n            :status="patient.status"\n            :isActive="isActive"\n            :current-page="currentPage"\n            @patient-selected="patientClick"\n            >{{ activePatient.name }} {{ patient.name }}</patient-list-item\n          >\n           <div v-if="patientList.length < 1" id="contain">    \n           <img\n          src="https://portal.mtrh.go.ke/files/findnoresult2.png"\n          alt="No Data"\n        />\n        <b><h style="font-weight: 600;">Oops!...Could not find the searched patient(s)</h></b>\n        </div>\n        </b-list-group>\n      </b-col>\n    </b-row>\n  </div>\n</template>\n<script>\nimport PatientListItem from "../../../components/PatientListItem.vue";\nexport default {\n  name: "PatientList",\n  props: {\n    patientList: {\n      type: Array,\n      default: [],\n    \n    },\n    \n    fullScreenWorkArea: {\n      type: Boolean,\n      default: false,\n    },\n    rows: Number,\n  },\n  data() {\n    return {\n      currentPage: 1,\n      perPage: 10,\n      activePatient: {},\n      isActive:null\n    };\n  },\n  computed: {\n    position:()=>{\n      return Math.floor( Math.random()*1000)\n    },\n    selectedPatient() {\n      return this.$store.getters["patient/getSelectedPatient"];\n    },\n  },\n  components: {\n    PatientListItem,\n  },\n  watch: {\n    currentPage(page) {\n      this.$emit("current-page", page);\n    },\n    patientList(newList) {\n      if (newList && newList.length > 0) {\n        if (this.findSelectedPatientInNewList(newList) == false){\n          this.patientClick(this.patientList[0]);\n        } \n      }\n    },\n  },\n  methods: {\n    patientClick(patient) {\n      this.$emit("selected-patient", patient);\n      this.activePatient = patient;\n      this.$store.dispatch("patient/setSelectedPatient", patient)\n    },\n    findSelectedPatientInNewList(newList){\n      let currentPatient = this.selectedPatient.patient;\n      let isPart = false;\n      newList.forEach(item => {\n        if(item.patient == currentPatient){\n          isPart = true;\n        }\n      });\n\n      return isPart\n    }\n  },\n};\n</script>\n<style scoped>\n\n.pagination-spacing {\n  margin-top: 6%;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  /* font-size: .75rem; */\n  line-height: 1.5;\n}\n\n.scroll-list{\nheight: 72vh;\noverflow-y: scroll;\noverflow-x: hidden;\nscrollbar-width:thin;\nbackground: white;\n}\n.list-group {\n    border-radius: 5px;\n}\n#contain {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__3 = "data-v-2e2651be";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <b-row>\n      <b-col cols="12">\n        <b-list-group class="scroll-list">\n          <patient-list-item\n            v-for="(patient, index) in patientList"\n            :key="patient.name"\n            :patient="patient"\n            :index="index"\n            :activePatient="activePatient"\n            :fullScreenWorkArea="fullScreenWorkArea"\n            :status="patient.status"\n            :isActive="isActive"\n            :current-page="currentPage"\n            @patient-selected="patientClick"\n            >{{ activePatient.name }} {{ patient.name }}</patient-list-item\n          >\n           <div v-if="patientList.length < 1" id="contain">    \n           <img\n          src="https://portal.mtrh.go.ke/files/findnoresult2.png"\n          alt="No Data"\n        />\n        <b><h style="font-weight: 600;">Oops!...Could not find the searched patient(s)</h></b>\n        </div>\n        </b-list-group>\n      </b-col>\n    </b-row>\n  </div>\n</template>\n<script>\nimport PatientListItem from "../../../components/PatientListItem.vue";\nexport default {\n  name: "PatientList",\n  props: {\n    patientList: {\n      type: Array,\n      default: [],\n    \n    },\n    \n    fullScreenWorkArea: {\n      type: Boolean,\n      default: false,\n    },\n    rows: Number,\n  },\n  data() {\n    return {\n      currentPage: 1,\n      perPage: 10,\n      activePatient: {},\n      isActive:null\n    };\n  },\n  computed: {\n    position:()=>{\n      return Math.floor( Math.random()*1000)\n    },\n    selectedPatient() {\n      return this.$store.getters["patient/getSelectedPatient"];\n    },\n  },\n  components: {\n    PatientListItem,\n  },\n  watch: {\n    currentPage(page) {\n      this.$emit("current-page", page);\n    },\n    patientList(newList) {\n      if (newList && newList.length > 0) {\n        if (this.findSelectedPatientInNewList(newList) == false){\n          this.patientClick(this.patientList[0]);\n        } \n      }\n    },\n  },\n  methods: {\n    patientClick(patient) {\n      this.$emit("selected-patient", patient);\n      this.activePatient = patient;\n      this.$store.dispatch("patient/setSelectedPatient", patient)\n    },\n    findSelectedPatientInNewList(newList){\n      let currentPatient = this.selectedPatient.patient;\n      let isPart = false;\n      newList.forEach(item => {\n        if(item.patient == currentPatient){\n          isPart = true;\n        }\n      });\n\n      return isPart\n    }\n  },\n};\n</script>\n<style scoped>\n\n.pagination-spacing {\n  margin-top: 6%;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  /* font-size: .75rem; */\n  line-height: 1.5;\n}\n\n.scroll-list{\nheight: 72vh;\noverflow-y: scroll;\noverflow-x: hidden;\nscrollbar-width:thin;\nbackground: white;\n}\n.list-group {\n    border-radius: 5px;\n}\n#contain {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n</style>\n';
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
  var PatientList_default = __vue_component__3;

  // ../frontend/frontend/public/js/patient/components/SearchInput.vue
  var __vue_script__4 = {
    name: "SearchInput",
    data() {
      return {
        searchTerm: "",
        placeholder: "      Search...",
        statusValue: 0,
        statusValueObject: {"": 0, "Awaiting Vitals": 1, "Awaiting Consultation": 2, "Awaiting Investigation": 3, "Visit Completed": 4}
      };
    },
    watch: {
      selectedServiceUnit() {
        this.placeholder = "    Search...";
        this.statusValue = 0;
      },
      selectedServicePoint() {
        this.placeholder = "    Search...";
        this.statusValue = 0;
      }
    },
    computed: {
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
      },
      selectedServicePoint() {
        return this.$store.getters["servicePoint/getSelectedServicePoint"] || this.servicePoints && this.servicePoints.length && this.servicePoints[0];
      }
    },
    methods: {
      getKeyByValue(object, value) {
        return Object.keys(object).find((key) => object[key] === value);
      },
      searchClicked() {
        const search = this.searchTerm;
        this.searchTerm = "";
        this.$emit("search", search);
      },
      browseDownQueueStatus() {
        if (this.statusValue > 0) {
          this.statusValue -= 1;
          if (this.statusValue == 0) {
            const payload = {serviceUnit: this.selectedServiceUnit.service_unit, servicePoint: this.selectedServicePoint.name, search: "", work: "patient/component/searchinput"};
            this.$store.dispatch("patient/fetchPatients", payload);
            this.placeholder = "    Search...";
          } else {
            let val = this.getKeyByValue(this.statusValueObject, this.statusValue);
            this.$emit("search", val);
            this.placeholder = "     " + val + " List";
          }
        }
      },
      browseUpQueueStatus() {
        if (this.statusValue < 4) {
          this.statusValue += 1;
          let val = this.getKeyByValue(this.statusValueObject, this.statusValue);
          this.$emit("search", val);
          this.placeholder = "     " + val + " List";
        }
      }
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", [
      _c("b-row", [
        _c("form", {
          staticClass: "form-inline fill-width justify-content-end",
          attrs: {role: "search", onsubmit: "return false;"}
        }, [
          _c("div", {staticClass: "input-group search-bar text-muted no-sides"}, [
            _c("b-form-input", {
              staticClass: "form-control rounded",
              attrs: {
                id: "navbar-search",
                placeholder: _vm.placeholder,
                size: "lg",
                "aria-haspopup": "true"
              },
              on: {
                focus: function($event) {
                  _vm.placeholder = "Search patient..";
                },
                blur: function($event) {
                  _vm.placeholder = "      Search patient...";
                }
              },
              model: {
                value: _vm.searchTerm,
                callback: function($$v) {
                  _vm.searchTerm = $$v;
                },
                expression: "searchTerm"
              }
            }),
            _vm._v(" "),
            _vm.searchTerm.length == 0 ? _c("span", {staticClass: "search-icon"}, [
              _c("svg", {staticClass: "icon icon-2x"}, [
                _c("use", {attrs: {"xlink:href": "#icon-search"}})
              ])
            ]) : _vm._e()
          ], 1),
          _vm._v(" "),
          _c("button", {
            staticClass: "btn btn-default btn-custom",
            on: {click: _vm.searchClicked}
          }, [_vm._v("Go")])
        ])
      ])
    ], 1);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-e8f18e06_0", {source: "\n.no-sides[data-v-e8f18e06] {\n    margin-left: 0px;\n    margin-right: 8px;\n}\n.side-bar-area[data-v-e8f18e06] {\n    background: white;\n    width: 100% !important;\n    padding-top: 20px;\n    min-height: 600px;\n}\n.name-header[data-v-e8f18e06] {\n    background: #687178;\n    color: white;\n    padding: 14px;\n    border-radius: 0px 16px 16px 0px;\n    width: 95%;\n    font-weight: 800;\n}\n.rounded[data-v-e8f18e06] {\n    border-radius: 12px;\n}\n.top-margin-space[data-v-e8f18e06] {\n    margin-top: 16px;\n    padding-bottom: 16px;\n}\n.form-control[data-v-e8f18e06] {\n    padding: 0.438rem 1rem;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 0px solid #d8d6de;\n    border-radius: 0.357rem;\n    width: 100%;\n    height: 36px;\n    font-size: 13px;\n    color: #6e6b7b;\n    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.btn-custom[data-v-e8f18e06] {\n    height: 36px;\n}\n.search-bar[data-v-e8f18e06] {\n    flex: 1;\n    max-width: 3000px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/components/SearchInput.vue"], "names": [], "mappings": ";AAyGA;IACA,gBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,sBAAA;IACA,iBAAA;IACA,iBAAA;AACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,gCAAA;IACA,UAAA;IACA,gBAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,gBAAA;IACA,oBAAA;AACA;AAEA;IACA,sBAAA;IACA,sBAAA;IACA,4BAAA;IACA,yBAAA;IACA,uBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,cAAA;IACA,wFAAA;IACA,gFAAA;IACA,wEAAA;IACA,8GAAA;AACA;AAEA;IACA,YAAA;AACA;AAEA;IACA,OAAA;IACA,iBAAA;AACA", "file": "SearchInput.vue", "sourcesContent": [`<template>
    <b-container>
        <b-row>
            <form class="form-inline fill-width justify-content-end" role="search" onsubmit="return false;">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-chevron-left" @click="browseDownQueueStatus" viewBox="0 0 16 16">
                      <path 
                      fill-rule="evenodd"
                       d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg> -->
                <div class="input-group search-bar text-muted no-sides">
                    <b-form-input id="navbar-search" class="form-control rounded" :placeholder="placeholder" @focus="placeholder = 'Search patient..'" @blur="placeholder = '      Search patient...'" v-model="searchTerm" size="lg" aria-haspopup="true"></b-form-input>
                    <span class="search-icon" v-if="searchTerm.length==0">
                                <svg class="icon icon-2x">
                                  <use xlink:href="#icon-search"></use>
                                </svg>
                              </span>
                </div>
                <!-- <span class="pull-right"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="white"
                                class="bi bi-chevron-right"
                                @click="browseUpQueueStatus"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                /></svg
                            ></span> -->
                <button class="btn btn-default btn-custom" @click="searchClicked">Go</button>
            </form>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "SearchInput",
    data() {
        return {
            searchTerm: '',
            placeholder: '      Search...',
            statusValue: 0,
            statusValueObject: { "": 0, "Awaiting Vitals": 1, "Awaiting Consultation": 2, "Awaiting Investigation": 3, "Visit Completed": 4 }
        }
    },
    watch:{
        selectedServiceUnit() {
            this.placeholder = "    Search..."
            this.statusValue = 0
        },
        selectedServicePoint() {
            this.placeholder = "    Search..."
            this.statusValue = 0
        }
    },
    computed: {
        selectedServiceUnit() {
            return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
        },
        selectedServicePoint() {

            return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints && this.servicePoints.length && this.servicePoints[0])
        }
    },
    methods: {
        getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        },
        searchClicked() {
            const search = this.searchTerm;
            this.searchTerm = ''
            this.$emit('search', search)
        },
        browseDownQueueStatus() {
            if (this.statusValue > 0) {
                this.statusValue -= 1;
                if (this.statusValue == 0) {
                    const payload = { serviceUnit: this.selectedServiceUnit.service_unit, servicePoint: this.selectedServicePoint.name, search: "", work:"patient/component/searchinput"  };
                    this.$store.dispatch("patient/fetchPatients", payload);
                    this.placeholder = "    Search..."
                } else {
                    let val = this.getKeyByValue(this.statusValueObject, this.statusValue)
                    this.$emit('search', val)
                    this.placeholder = "     " + val + " List"
                }
            }
        },
        browseUpQueueStatus() {
            
            if (this.statusValue < 4) {
                this.statusValue += 1;
                let val = this.getKeyByValue(this.statusValueObject, this.statusValue)
                this.$emit('search', val)
                this.placeholder = "     " + val + " List"
            }

        }
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
}

.name-header {
    background: #687178;
    color: white;
    padding: 14px;
    border-radius: 0px 16px 16px 0px;
    width: 95%;
    font-weight: 800;
}

.rounded {
    border-radius: 12px;
}

.top-margin-space {
    margin-top: 16px;
    padding-bottom: 16px;
}

.form-control {
    padding: 0.438rem 1rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 0px solid #d8d6de;
    border-radius: 0.357rem;
    width: 100%;
    height: 36px;
    font-size: 13px;
    color: #6e6b7b;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.btn-custom {
    height: 36px;
}

.search-bar {
    flex: 1;
    max-width: 3000px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__4 = "data-v-e8f18e06";
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <b-container>
        <b-row>
            <form class="form-inline fill-width justify-content-end" role="search" onsubmit="return false;">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-chevron-left" @click="browseDownQueueStatus" viewBox="0 0 16 16">
                      <path 
                      fill-rule="evenodd"
                       d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg> -->
                <div class="input-group search-bar text-muted no-sides">
                    <b-form-input id="navbar-search" class="form-control rounded" :placeholder="placeholder" @focus="placeholder = 'Search patient..'" @blur="placeholder = '      Search patient...'" v-model="searchTerm" size="lg" aria-haspopup="true"></b-form-input>
                    <span class="search-icon" v-if="searchTerm.length==0">
                                <svg class="icon icon-2x">
                                  <use xlink:href="#icon-search"></use>
                                </svg>
                              </span>
                </div>
                <!-- <span class="pull-right"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="white"
                                class="bi bi-chevron-right"
                                @click="browseUpQueueStatus"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                /></svg
                            ></span> -->
                <button class="btn btn-default btn-custom" @click="searchClicked">Go</button>
            </form>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "SearchInput",
    data() {
        return {
            searchTerm: '',
            placeholder: '      Search...',
            statusValue: 0,
            statusValueObject: { "": 0, "Awaiting Vitals": 1, "Awaiting Consultation": 2, "Awaiting Investigation": 3, "Visit Completed": 4 }
        }
    },
    watch:{
        selectedServiceUnit() {
            this.placeholder = "    Search..."
            this.statusValue = 0
        },
        selectedServicePoint() {
            this.placeholder = "    Search..."
            this.statusValue = 0
        }
    },
    computed: {
        selectedServiceUnit() {
            return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
        },
        selectedServicePoint() {

            return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints && this.servicePoints.length && this.servicePoints[0])
        }
    },
    methods: {
        getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        },
        searchClicked() {
            const search = this.searchTerm;
            this.searchTerm = ''
            this.$emit('search', search)
        },
        browseDownQueueStatus() {
            if (this.statusValue > 0) {
                this.statusValue -= 1;
                if (this.statusValue == 0) {
                    const payload = { serviceUnit: this.selectedServiceUnit.service_unit, servicePoint: this.selectedServicePoint.name, search: "", work:"patient/component/searchinput"  };
                    this.$store.dispatch("patient/fetchPatients", payload);
                    this.placeholder = "    Search..."
                } else {
                    let val = this.getKeyByValue(this.statusValueObject, this.statusValue)
                    this.$emit('search', val)
                    this.placeholder = "     " + val + " List"
                }
            }
        },
        browseUpQueueStatus() {
            
            if (this.statusValue < 4) {
                this.statusValue += 1;
                let val = this.getKeyByValue(this.statusValueObject, this.statusValue)
                this.$emit('search', val)
                this.placeholder = "     " + val + " List"
            }

        }
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
}

.name-header {
    background: #687178;
    color: white;
    padding: 14px;
    border-radius: 0px 16px 16px 0px;
    width: 95%;
    font-weight: 800;
}

.rounded {
    border-radius: 12px;
}

.top-margin-space {
    margin-top: 16px;
    padding-bottom: 16px;
}

.form-control {
    padding: 0.438rem 1rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 0px solid #d8d6de;
    border-radius: 0.357rem;
    width: 100%;
    height: 36px;
    font-size: 13px;
    color: #6e6b7b;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.btn-custom {
    height: 36px;
}

.search-bar {
    flex: 1;
    max-width: 3000px;
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
  var SearchInput_default = __vue_component__4;

  // ../frontend/frontend/public/js/patient/components/ServiceUnitSelect.vue
  var __vue_script__5 = {
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
  var __vue_render__5 = function() {
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
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = function(inject) {
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
  var __vue_scope_id__5 = void 0;
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var ServiceUnitSelect_default = __vue_component__5;

  // ../frontend/frontend/public/js/patient/core/Sidebar.vue
  var __vue_script__6 = {
    name: "SideBar",
    props: {
      fullScreenWorkArea: {
        type: Boolean,
        default: false
      },
      apiList: {
        type: Array,
        default: []
      },
      searchResultText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        placeholder: "  Search patient...",
        total: 50,
        inSearchMode: false,
        currentServiceUnit: null,
        currentSelectedPatient: null,
        closed: "closed",
        nothing: "nothing",
        filterdList: [],
        trackApiCall: 0
      };
    },
    watch: {
      selectedServiceUnit(unit) {
        this.$store.dispatch("patient/setSelectedPatient", {});
        if (unit && unit.service_unit) {
          this.getServicePoints(unit);
        }
        if (unit.service_unit_details.allow_appointments == 0) {
          const payload = {serviceUnit: unit.service_unit, servicePoint: "", search: "", work: "patient/core/sidebar1"};
          this.$store.dispatch("patient/fetchPatients", payload);
        }
      },
      selectedServicePoint(point, oldPoint) {
        console.log("PREVIOUS", oldPoint.name);
        console.log("NEW", point.name);
        if (point !== void 0 && point.name != oldPoint.name) {
          const payload = {serviceUnit: this.selectedServiceUnit.service_unit, servicePoint: point.name, search: "", work: "patient/core/sidebar 2"};
          this.$store.dispatch("patient/fetchPatients", payload);
        }
      }
    },
    components: {
      PatientList: PatientList_default,
      SearchInput: SearchInput_default,
      ServiceUnitSelect: ServiceUnitSelect_default
    },
    computed: {
      apiList() {
        return this.$store.getters["patient/getPatients"];
      },
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
      },
      selectedServicePoint() {
        return this.$store.getters["servicePoint/getSelectedServicePoint"];
      },
      servicePoints() {
        return this.$store.getters["servicePoints/getServicePoints"];
      }
    },
    methods: {
      getServicePoints(unit) {
        this.$store.dispatch("servicePoint/fetchMyServicePoints", unit);
      },
      toggleFullView() {
        this.fullScreenWorkArea = !this.fullScreenWorkArea;
        this.$emit("full-screen-work-area", this.fullScreenWorkArea);
      },
      contextSetContextItem(payload) {
        this.$store.dispatch("context/setContextItem", payload);
      },
      handleSearch(search) {
        this.$emit("search", search);
      },
      patientSelected(patient) {
        console.log("sidebar");
        this.currentSelectedPatient = patient;
        this.$emit("selected-patient", patient);
        this.contextSetContextItem({key: "patient_name", value: patient.patient});
      },
      emitPage(page) {
        this.$emit("current-page", page);
      },
      getPatientList(serviceUnitName, search) {
      },
      setServiceUnit(servicUnit) {
        this.selectedServiceUnit = servicUnit;
        this.$emit("selected-service-unit", servicUnit);
      },
      clearSearch() {
        this.inSearchMode = false;
        this.$emit("clearSearch");
      }
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "side-bar-area aside-bottom-padding"}, [
      _c("b-row", [
        _c("service-unit-select", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.fullScreenWorkArea,
              expression: "!fullScreenWorkArea"
            }
          ],
          on: {"service-unit": _vm.setServiceUnit}
        }),
        _vm._v(" "),
        _c("b-col", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.fullScreenWorkArea,
              expression: "!fullScreenWorkArea"
            }
          ],
          staticClass: "search-input no-border",
          attrs: {cols: "12"}
        }, [_c("search-input", {on: {search: _vm.handleSearch}})], 1),
        _vm._v(" "),
        _c("b-col", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.inSearchMode && !_vm.fullScreenWorkArea,
              expression: "inSearchMode && !fullScreenWorkArea"
            }
          ],
          staticClass: "no-results",
          attrs: {cols: "12"}
        }, [
          _c("span", [_vm._v(" " + _vm._s(_vm.searchResultText))]),
          _vm._v(" "),
          _vm.apiList.length === 0 ? _c("b-button", {on: {click: _vm.clearSearch}}, [
            _vm._v("clear\n            ")
          ]) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-col", {
          staticClass: "top-margin-space",
          class: _vm.fullScreenWorkArea ? _vm.closed : _vm.nothing,
          attrs: {cols: "12"}
        }, [
          _c("patient-list", {
            attrs: {
              patientList: _vm.apiList,
              rows: _vm.total,
              fullScreenWorkArea: _vm.fullScreenWorkArea
            },
            on: {
              "selected-patient": _vm.patientSelected,
              "current-page": _vm.emitPage
            }
          })
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__6 = [];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = function(inject) {
    if (!inject)
      return;
    inject("data-v-4679c3ab_0", {source: "\n.no-sides[data-v-4679c3ab] {\n    margin-left: 0px;\n    margin-right: 8px;\n}\n.side-bar-area[data-v-4679c3ab] {\n    background: white;\n    width: 100% !important;\n    padding-top: 20px;\n    min-height: 600px;\n    height: 100vh;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    background-color: #1e5754;\n    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);\n    padding-left: 11px !important;\n    padding-right: 11px !important;\n}\n.name-header[data-v-4679c3ab] {\n    background: #687178;\n    color: white;\n    padding: 14px;\n    border-radius: 0px 16px 16px 0px;\n    width: 95%;\n    font-weight: 800;\n}\n.search-input[data-v-4679c3ab] {\n    margin-top: 5%;\n}\n.no-results[data-v-4679c3ab] {\n    margin-top: 5%;\n    padding-left: 7%;\n}\n.rounded[data-v-4679c3ab] {\n    border-radius: 12px;\n}\n.top-margin-space[data-v-4679c3ab] {\n    margin-top: 16px;\n    padding-bottom: 16px;\n}\n.no-border[data-v-4679c3ab] {\n    border: 0px solid black !important;\n}\n.form-control[data-v-4679c3ab] {\n    padding: 0.438rem 1rem;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 0px solid #d8d6de;\n    border-radius: 0.357rem;\n    width: 100%;\n    font-weight: 400;\n    line-height: 1.45;\n    font-size: 13px;\n    color: #6e6b7b;\n    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.btn-custom[data-v-4679c3ab] {\n    height: 36px;\n}\n.menu-options[data-v-4679c3ab] {\n    margin-left: 0px;\n    font-size: 18px;\n    margin-top: 12px;\n    width: 100%;\n}\n.closed[data-v-4679c3ab] {\n    padding-right: 0px !important;\n    padding-left: 6px !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/core/Sidebar.vue"], "names": [], "mappings": ";AAyIA;IACA,gBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,sBAAA;IACA,iBAAA;IACA,iBAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,yBAAA;IACA,kEAAA;IACA,6BAAA;IACA,8BAAA;AACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,gCAAA;IACA,UAAA;IACA,gBAAA;AACA;AAEA;IACA,cAAA;AACA;AAEA;IACA,cAAA;IACA,gBAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,gBAAA;IACA,oBAAA;AACA;AAEA;IACA,kCAAA;AACA;AAEA;IACA,sBAAA;IACA,sBAAA;IACA,4BAAA;IACA,yBAAA;IACA,uBAAA;IACA,WAAA;IACA,gBAAA;IACA,iBAAA;IACA,eAAA;IACA,cAAA;IACA,wFAAA;IACA,gFAAA;IACA,wEAAA;IACA,8GAAA;AACA;AAEA;IACA,YAAA;AACA;AAEA;IACA,gBAAA;IACA,eAAA;IACA,gBAAA;IACA,WAAA;AACA;AAEA;IACA,6BAAA;IACA,4BAAA;AACA", "file": "Sidebar.vue", "sourcesContent": [`<template>
    <b-container class="side-bar-area aside-bottom-padding">
        <b-row>
            <service-unit-select @service-unit="setServiceUnit" v-show="!fullScreenWorkArea" />
            <b-col cols="12" class="search-input no-border" v-show="!fullScreenWorkArea">
                <search-input @search="handleSearch" />
            </b-col>
            <b-col cols="12" class="no-results" v-show="inSearchMode && !fullScreenWorkArea">
                <span> {{ searchResultText }}</span>
                <b-button v-if="apiList.length === 0" @click="clearSearch">clear
                </b-button>
            </b-col>
            <b-col cols="12" class="top-margin-space" v-bind:class="fullScreenWorkArea ? closed : nothing">
                <patient-list :patientList="apiList" :rows="total" :fullScreenWorkArea="fullScreenWorkArea" @selected-patient="patientSelected" @current-page="emitPage" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import PatientList from "../pages/patient-chart/sidebar-pages/PatientList.vue";
import SearchInput from "../components/SearchInput.vue";
import ServiceUnitSelect from "../components/ServiceUnitSelect.vue";
import { reinforceQueueTransfer } from "./../../services/patient_chart/api";

export default {
    name: "SideBar",
    props: {
        fullScreenWorkArea: {
            type: Boolean,
            default: false,
        },
        apiList: {
            type: Array,
            default: [],
        },
        searchResultText: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            placeholder: "  Search patient...",
            total: 50,
            // apiList: [],
            inSearchMode: false,
            currentServiceUnit: null,
            currentSelectedPatient: null,
            closed: "closed",
            nothing: "nothing",
            filterdList: [],
            trackApiCall: 0
        };
    },
    watch: {
        selectedServiceUnit(unit) {
            this.$store.dispatch("patient/setSelectedPatient", {})
            // this.$store.dispatch("servicePoint/setSelectedServicePoint", {});
            if (unit && unit.service_unit) {
                this.getServicePoints(unit)
            }
            if (unit.service_unit_details.allow_appointments == 0){
                const payload = { serviceUnit: unit.service_unit, servicePoint: "", search: "", work:"patient/core/sidebar1" };
                this.$store.dispatch("patient/fetchPatients", payload)
            } 
        },
        selectedServicePoint(point,oldPoint) {
            console.log("PREVIOUS",oldPoint.name)
            console.log("NEW",point.name)
            if (point !== undefined && (point.name != oldPoint.name)) {
                const payload = { serviceUnit: this.selectedServiceUnit.service_unit, servicePoint: point.name, search: "",work:"patient/core/sidebar 2"  };
                this.$store.dispatch("patient/fetchPatients", payload);
            } 
            // this.$store.dispatch("servicePoint/setSelectedServicePoint", point);
        }
    },
    components: {
        PatientList,
        SearchInput,
        ServiceUnitSelect,
    },
    computed: {
        apiList() {
            return this.$store.getters["patient/getPatients"];
        },
        selectedServiceUnit() {
            return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
        },
        selectedServicePoint() {
            return this.$store.getters['servicePoint/getSelectedServicePoint'];
        },
        servicePoints() {
            return this.$store.getters['servicePoints/getServicePoints']
        }
    },
    methods: {
        getServicePoints(unit) {
            this.$store.dispatch("servicePoint/fetchMyServicePoints", unit);
        },
        toggleFullView() {
            this.fullScreenWorkArea = !this.fullScreenWorkArea;
            this.$emit("full-screen-work-area", this.fullScreenWorkArea);
        },
        contextSetContextItem(payload) {
            this.$store.dispatch("context/setContextItem", payload);
        },
        handleSearch(search) {
            this.$emit("search", search);
        },

        patientSelected(patient) {
            console.log("sidebar");
            this.currentSelectedPatient = patient;
            this.$emit("selected-patient", patient);
            this.contextSetContextItem({ key: "patient_name", value: patient.patient })
        },
        emitPage(page) {
            this.$emit("current-page", page);
            // get next or previous page
        },
        getPatientList(serviceUnitName, search) {
            // const payload = { serviceUnit: serviceUnitName, search: search }
        },
        setServiceUnit(servicUnit) {
            this.selectedServiceUnit = servicUnit;
            this.$emit("selected-service-unit", servicUnit);
        },
        clearSearch() {
            this.inSearchMode = false;
            this.$emit("clearSearch");
        },
    },
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
    background-color: #1e5754;
    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);
    padding-left: 11px !important;
    padding-right: 11px !important;
}

.name-header {
    background: #687178;
    color: white;
    padding: 14px;
    border-radius: 0px 16px 16px 0px;
    width: 95%;
    font-weight: 800;
}

.search-input {
    margin-top: 5%;
}

.no-results {
    margin-top: 5%;
    padding-left: 7%;
}

.rounded {
    border-radius: 12px;
}

.top-margin-space {
    margin-top: 16px;
    padding-bottom: 16px;
}

.no-border {
    border: 0px solid black !important;
}

.form-control {
    padding: 0.438rem 1rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 0px solid #d8d6de;
    border-radius: 0.357rem;
    width: 100%;
    font-weight: 400;
    line-height: 1.45;
    font-size: 13px;
    color: #6e6b7b;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.btn-custom {
    height: 36px;
}

.menu-options {
    margin-left: 0px;
    font-size: 18px;
    margin-top: 12px;
    width: 100%;
}

.closed {
    padding-right: 0px !important;
    padding-left: 6px !important;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__6 = "data-v-4679c3ab";
  var __vue_module_identifier__6 = void 0;
  var __vue_is_functional_template__6 = false;
  function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <b-container class="side-bar-area aside-bottom-padding">
        <b-row>
            <service-unit-select @service-unit="setServiceUnit" v-show="!fullScreenWorkArea" />
            <b-col cols="12" class="search-input no-border" v-show="!fullScreenWorkArea">
                <search-input @search="handleSearch" />
            </b-col>
            <b-col cols="12" class="no-results" v-show="inSearchMode && !fullScreenWorkArea">
                <span> {{ searchResultText }}</span>
                <b-button v-if="apiList.length === 0" @click="clearSearch">clear
                </b-button>
            </b-col>
            <b-col cols="12" class="top-margin-space" v-bind:class="fullScreenWorkArea ? closed : nothing">
                <patient-list :patientList="apiList" :rows="total" :fullScreenWorkArea="fullScreenWorkArea" @selected-patient="patientSelected" @current-page="emitPage" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import PatientList from "../pages/patient-chart/sidebar-pages/PatientList.vue";
import SearchInput from "../components/SearchInput.vue";
import ServiceUnitSelect from "../components/ServiceUnitSelect.vue";
import { reinforceQueueTransfer } from "./../../services/patient_chart/api";

export default {
    name: "SideBar",
    props: {
        fullScreenWorkArea: {
            type: Boolean,
            default: false,
        },
        apiList: {
            type: Array,
            default: [],
        },
        searchResultText: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            placeholder: "  Search patient...",
            total: 50,
            // apiList: [],
            inSearchMode: false,
            currentServiceUnit: null,
            currentSelectedPatient: null,
            closed: "closed",
            nothing: "nothing",
            filterdList: [],
            trackApiCall: 0
        };
    },
    watch: {
        selectedServiceUnit(unit) {
            this.$store.dispatch("patient/setSelectedPatient", {})
            // this.$store.dispatch("servicePoint/setSelectedServicePoint", {});
            if (unit && unit.service_unit) {
                this.getServicePoints(unit)
            }
            if (unit.service_unit_details.allow_appointments == 0){
                const payload = { serviceUnit: unit.service_unit, servicePoint: "", search: "", work:"patient/core/sidebar1" };
                this.$store.dispatch("patient/fetchPatients", payload)
            } 
        },
        selectedServicePoint(point,oldPoint) {
            console.log("PREVIOUS",oldPoint.name)
            console.log("NEW",point.name)
            if (point !== undefined && (point.name != oldPoint.name)) {
                const payload = { serviceUnit: this.selectedServiceUnit.service_unit, servicePoint: point.name, search: "",work:"patient/core/sidebar 2"  };
                this.$store.dispatch("patient/fetchPatients", payload);
            } 
            // this.$store.dispatch("servicePoint/setSelectedServicePoint", point);
        }
    },
    components: {
        PatientList,
        SearchInput,
        ServiceUnitSelect,
    },
    computed: {
        apiList() {
            return this.$store.getters["patient/getPatients"];
        },
        selectedServiceUnit() {
            return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
        },
        selectedServicePoint() {
            return this.$store.getters['servicePoint/getSelectedServicePoint'];
        },
        servicePoints() {
            return this.$store.getters['servicePoints/getServicePoints']
        }
    },
    methods: {
        getServicePoints(unit) {
            this.$store.dispatch("servicePoint/fetchMyServicePoints", unit);
        },
        toggleFullView() {
            this.fullScreenWorkArea = !this.fullScreenWorkArea;
            this.$emit("full-screen-work-area", this.fullScreenWorkArea);
        },
        contextSetContextItem(payload) {
            this.$store.dispatch("context/setContextItem", payload);
        },
        handleSearch(search) {
            this.$emit("search", search);
        },

        patientSelected(patient) {
            console.log("sidebar");
            this.currentSelectedPatient = patient;
            this.$emit("selected-patient", patient);
            this.contextSetContextItem({ key: "patient_name", value: patient.patient })
        },
        emitPage(page) {
            this.$emit("current-page", page);
            // get next or previous page
        },
        getPatientList(serviceUnitName, search) {
            // const payload = { serviceUnit: serviceUnitName, search: search }
        },
        setServiceUnit(servicUnit) {
            this.selectedServiceUnit = servicUnit;
            this.$emit("selected-service-unit", servicUnit);
        },
        clearSearch() {
            this.inSearchMode = false;
            this.$emit("clearSearch");
        },
    },
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
    background-color: #1e5754;
    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);
    padding-left: 11px !important;
    padding-right: 11px !important;
}

.name-header {
    background: #687178;
    color: white;
    padding: 14px;
    border-radius: 0px 16px 16px 0px;
    width: 95%;
    font-weight: 800;
}

.search-input {
    margin-top: 5%;
}

.no-results {
    margin-top: 5%;
    padding-left: 7%;
}

.rounded {
    border-radius: 12px;
}

.top-margin-space {
    margin-top: 16px;
    padding-bottom: 16px;
}

.no-border {
    border: 0px solid black !important;
}

.form-control {
    padding: 0.438rem 1rem;
    background-color: #fff;
    background-clip: padding-box;
    border: 0px solid #d8d6de;
    border-radius: 0.357rem;
    width: 100%;
    font-weight: 400;
    line-height: 1.45;
    font-size: 13px;
    color: #6e6b7b;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.btn-custom {
    height: 36px;
}

.menu-options {
    margin-left: 0px;
    font-size: 18px;
    margin-top: 12px;
    width: 100%;
}

.closed {
    padding-right: 0px !important;
    padding-left: 6px !important;
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
  var Sidebar_default = __vue_component__6;

  // ../frontend/frontend/public/js/services/patient/patient.js
  var api2 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatientInfo = (patient_name) => api2({
    method: "clinical.api.patients.get_patient_details",
    args: patient_name
  });
  var requestAmbulance = (payload) => {
    return api2({
      method: "fleet.api.fleet_request.post_ambulance_request ",
      args: {
        payload
      }
    });
  };

  // ../frontend/frontend/public/js/patient/components/patient/RequestForAmbulance.vue
  var __vue_script__7 = {
    name: "RequestForAmbulance",
    props: {
      isCompressed: {type: Boolean, required: false, default: false}
    },
    computed: {
      patientDetails() {
        return this.$store.getters["patient/getSelectedPatientDetails"];
      },
      selectedPatient() {
        return this.$store.getters["patient/getSelectedPatient"];
      }
    },
    mounted() {
      if (this.selectedPatient && this.selectedPatient.patient) {
        this.getPatientDetails(this.selectedPatient.patient);
      }
    },
    watch: {
      selectedPatient(activePatient) {
        this.getPatientDetails(activePatient.patient);
      }
    },
    methods: {
      getPatientDetails(patient_name) {
        const payload = {patient_name};
        this.$store.dispatch("patient/fetchSelectedPatientDetails", payload);
      },
      openModal() {
        let parent = this;
        const dlg = new frappe.ui.Dialog({
          title: "Request Ambulance",
          fields: [
            {
              label: "Type of Vehicle",
              fieldname: "type_of_vehicle",
              reqd: 1,
              fieldtype: "Link",
              options: "Vehicle Type"
            },
            {
              label: "From",
              fieldname: "from",
              fieldtype: "Data"
            },
            {
              fieldname: "column_break",
              fieldtype: "Column Break"
            },
            {
              label: "Destination",
              fieldname: "destination",
              fieldtype: "Data"
            },
            {
              label: "Date Time",
              fieldname: "date_and_time_of_departure",
              fieldtype: "Datetime"
            },
            {
              fieldname: "section_break_2",
              fieldtype: "Section Break"
            },
            {
              label: "Purpose of visit",
              fieldname: "purpose_of_visit",
              fieldtype: "Text"
            },
            {
              label: "Fleet Request Manifest",
              fieldname: "fleet_manifest",
              fieldtype: "Table",
              options: "Fleet Request Manifest",
              fields: [
                {
                  fieldtype: "Link",
                  options: "Employee",
                  fieldname: "employee",
                  in_list_view: 1,
                  label: "Employee"
                }
              ]
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            const employees = (values.fleet_manifest || []).map(({employee}) => {
              return {
                party_type: "Employee",
                party: employee
              };
            });
            const patient = {
              party_type: "Patient",
              party: parent.patientDetails.name
            };
            const data = {...values, fleet_manifest: [...employees, patient]};
            requestAmbulance(data).then(() => {
              dlg.hide();
            });
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            dlg.hide();
          }
        }).show();
      }
    }
  };
  var __vue_render__7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", [
      _c("b-row", [
        _c("b-col", [
          _vm.isCompressed ? _c("b-button", {
            attrs: {variant: "danger", size: "sm"},
            on: {
              click: function($event) {
                return _vm.openModal();
              }
            }
          }, [_c("i", {staticClass: "fa fa-ambulance"})]) : _c("b-button", {
            staticStyle: {width: "100%"},
            attrs: {variant: "danger", size: "sm"},
            on: {
              click: function($event) {
                return _vm.openModal();
              }
            }
          }, [_vm._v("Request Ambulance")])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__7 = [];
  __vue_render__7._withStripped = true;
  var __vue_inject_styles__7 = function(inject) {
    if (!inject)
      return;
    inject("data-v-279557b8_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "RequestForAmbulance.vue"}, media: void 0});
  };
  var __vue_scope_id__7 = "data-v-279557b8";
  var __vue_module_identifier__7 = void 0;
  var __vue_is_functional_template__7 = false;
  function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container>\n    <b-row>\n      <b-col>\n        <b-button v-if="isCompressed" @click="openModal()" variant="danger" size="sm"\n          ><i class="fa fa-ambulance" ></i\n        ></b-button>\n\n         <b-button   style="width: 100%" v-else @click="openModal()" variant="danger" size="sm"\n          >Request Ambulance</b-button>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { requestAmbulance } from "../../../services/patient/patient";\nexport default {\n  name: "RequestForAmbulance",\n  props:{\n   isCompressed:{type:Boolean, required:false, default:false,}\n  },\n  computed: {\n    patientDetails() {\n      return this.$store.getters["patient/getSelectedPatientDetails"];\n    },\n    selectedPatient() {\n      return this.$store.getters["patient/getSelectedPatient"];\n    },\n  },\n\n  mounted() {\n    if (this.selectedPatient && this.selectedPatient.patient) {\n      this.getPatientDetails(this.selectedPatient.patient);\n    }\n  },\n\n  watch: {\n    selectedPatient(activePatient) {\n      this.getPatientDetails(activePatient.patient);\n    },\n  },\n  methods: {\n    getPatientDetails(patient_name) {\n      const payload = { patient_name };\n      this.$store.dispatch("patient/fetchSelectedPatientDetails", payload);\n    },\n    openModal() {\n      let parent = this;\n      const dlg = new frappe.ui.Dialog({\n        title: "Request Ambulance",\n        fields: [\n          {\n            label: "Type of Vehicle",\n            fieldname: "type_of_vehicle",\n            reqd: 1,\n            fieldtype: "Link",\n            options: "Vehicle Type",\n          },\n          {\n            label: "From",\n            fieldname: "from",\n            fieldtype: "Data",\n          },\n          {\n            fieldname: "column_break",\n            fieldtype: "Column Break",\n          },\n          {\n            label: "Destination",\n            fieldname: "destination",\n            fieldtype: "Data",\n          },\n          {\n            label: "Date Time",\n            fieldname: "date_and_time_of_departure",\n            fieldtype: "Datetime",\n          },\n          {\n            fieldname: "section_break_2",\n            fieldtype: "Section Break",\n          },\n          {\n            label: "Purpose of visit",\n            fieldname: "purpose_of_visit",\n            fieldtype: "Text",\n          },\n          {\n            label: "Fleet Request Manifest",\n            fieldname: "fleet_manifest",\n            fieldtype: "Table",\n            options: "Fleet Request Manifest",\n            fields: [\n              {\n                fieldtype: "Link",\n                options: "Employee",\n                fieldname: "employee",\n                in_list_view: 1,\n                label: "Employee",\n              },\n            ],\n          },\n        ],\n        primary_action_label: "Submit",\n        primary_action(values) {\n          const employees = (values.fleet_manifest || []).map(\n            ({ employee }) => {\n              return {\n                party_type: "Employee",\n                party: employee,\n              };\n            }\n          );\n          const patient = {\n            party_type: "Patient",\n            party: parent.patientDetails.name,\n          };\n          // const purpose = `Ambulance request to be accompanied by `;\n          const data = { ...values, fleet_manifest: [...employees, patient] };\n          requestAmbulance(data).then(() => {\n            dlg.hide();\n          });\n        },\n        secondary_action_label: "Cancel",\n        secondary_action() {\n          dlg.hide();\n        },\n      }).show();\n    },\n  },\n};\n</script>\n\n<style scoped></style>\n';
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
  var RequestForAmbulance_default = __vue_component__7;

  // ../frontend/frontend/public/js/patient/components/patient/TraverseQueue.vue
  var __vue_script__8 = {
    name: "TraverseQueue",
    props: {
      details: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        isVisible: 1,
        number_awaiting_vitals: Number,
        number_awaiting_consultation: Number,
        number_awaiting_investigation: Number,
        number_visit_completed: Number
      };
    },
    mounted() {
    },
    computed: {
      patient() {
        return this.$store.getters["patient/getSelectedPatient"];
      },
      selectedPatientDetails() {
        return this.$store.getters["patient/getSelectedPatientDetails"];
      },
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
      },
      selectedServicePoint() {
        return this.$store.getters["servicePoint/getSelectedServicePoint"] || this.servicePoints.length && this.servicePoints[0];
      },
      myLocation() {
        return this.$store.getters["servicePoint/getMyLocation"];
      },
      servicePoints() {
        return this.$store.getters["servicePoint/getServicePoints"];
      }
    },
    methods: {
      getPatientsAwaiting() {
        getPatientsAwaiting(this.selectedServiceUnit.service_unit, "Awaiting Vitals").then((res) => {
          this.number_awaiting_vitals = res;
        });
        getPatientsAwaiting(this.selectedServiceUnit.service_unit, "Awaiting Consultation").then((res) => {
          this.number_awaiting_consultation = res;
        });
        getPatientsAwaiting(this.selectedServiceUnit.service_unit, "Awaiting Investigation").then((res) => {
          this.number_awaiting_investigation = res;
        });
        getPatientsAwaiting(this.selectedServiceUnit.service_unit, "Visit Completed").then((res) => {
          this.number_visit_completed = res;
        });
      },
      getList(status) {
        this.getPatientList(this.selectedServiceUnit.service_unit, status, "traverse");
      },
      getPatientList(serviceUnit, search, traverse) {
        if (serviceUnit) {
          const payload = {serviceUnit, search, traverse, work: "components/patient/traversequeue"};
          this.$store.dispatch("patient/fetchPatients", payload);
        }
      }
    },
    watch: {
      servicePoints(service_points) {
        this.$store.dispatch("servicePoint/setSelectedServicePoint", service_points[0]);
      }
    }
  };
  var __vue_render__8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _vm.selectedServicePoint.point_name ? _c("b-button", {
        attrs: {variant: "light", size: "sm"},
        on: {
          click: function($event) {
            _vm.$bvModal.show("traversemodal");
            _vm.getPatientsAwaiting();
          }
        }
      }, [_c("i", {staticClass: "fa fa-users"})]) : _vm._e(),
      _vm._v(" "),
      _c("div", [
        _vm.isVisible ? _c("b-modal", {
          attrs: {id: "traversemodal", "hide-footer": ""},
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [
                  _vm._v("\n          Filter patient queue based on status.\n")
                ];
              },
              proxy: true
            }
          ], null, false, 2483454259)
        }, [
          _vm._v(" "),
          _c("div", [
            _c("div", {staticClass: "mt-3"}, [
              _c("b-button-group", {attrs: {size: "sm"}}, [
                _c("b-button", {
                  attrs: {variant: "danger"},
                  on: {
                    click: function($event) {
                      return _vm.getList("Awaiting Vitals");
                    }
                  }
                }, [
                  _vm._v("Awaiting Vitals (" + _vm._s(_vm.number_awaiting_vitals) + ")")
                ]),
                _vm._v(" "),
                _c("b-button", {
                  attrs: {variant: "warning"},
                  on: {
                    click: function($event) {
                      return _vm.getList("Awaiting Consultation");
                    }
                  }
                }, [
                  _vm._v("Awaiting Consultation (" + _vm._s(_vm.number_awaiting_consultation) + ")")
                ]),
                _vm._v(" "),
                _c("b-button", {
                  attrs: {variant: "info"},
                  on: {
                    click: function($event) {
                      return _vm.getList("Awaiting Investigation");
                    }
                  }
                }, [
                  _vm._v("Awaiting Investigation (" + _vm._s(_vm.number_awaiting_investigation) + ")")
                ]),
                _vm._v(" "),
                _c("b-button", {
                  attrs: {variant: "success"},
                  on: {
                    click: function($event) {
                      return _vm.getList("Visit Completed");
                    }
                  }
                }, [
                  _vm._v("Visit Completed (" + _vm._s(_vm.number_visit_completed) + ")")
                ])
              ], 1)
            ], 1)
          ])
        ]) : _vm._e()
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__8 = [];
  __vue_render__8._withStripped = true;
  var __vue_inject_styles__8 = function(inject) {
    if (!inject)
      return;
    inject("data-v-3d113eb7_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "TraverseQueue.vue"}, media: void 0});
  };
  var __vue_scope_id__8 = void 0;
  var __vue_module_identifier__8 = void 0;
  var __vue_is_functional_template__8 = false;
  function __vue_normalize__8(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-button v-if="selectedServicePoint.point_name" @click="$bvModal.show('traversemodal');getPatientsAwaiting()" variant="light" size="sm"><i class="fa fa-users"></i
            ></b-button>
     <div>
      <b-modal v-if="isVisible" id="traversemodal" hide-footer>
          <template #modal-title>
          Filter patient queue based on status.
</template>
    <div>
        <div class="mt-3">
       <b-button-group size="sm">
              <b-button v-on:click="getList('Awaiting Vitals')" variant="danger">Awaiting Vitals ({{number_awaiting_vitals}})</b-button>
              <b-button v-on:click="getList('Awaiting Consultation')" variant="warning">Awaiting Consultation ({{number_awaiting_consultation}})</b-button>
              <b-button v-on:click="getList('Awaiting Investigation')" variant="info">Awaiting Investigation ({{number_awaiting_investigation}})</b-button>
              <b-button v-on:click="getList('Visit Completed')" variant="success">Visit Completed ({{number_visit_completed}})</b-button>
              
            </b-button-group>
        </div>
    </div>
  </b-modal>
        </div>
  </div>
</template>

<script>
import { getPatientsAwaiting } from "./.././../../services/patient_chart/api";

export default {
    name: "TraverseQueue",
    props: {
        details: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            isVisible: 1,
            number_awaiting_vitals:Number,
            number_awaiting_consultation:Number,
            number_awaiting_investigation:Number,
            number_visit_completed:Number,

        };
    },
    mounted() {
    },
    computed: {
        patient() {
            return this.$store.getters["patient/getSelectedPatient"];
        },
        selectedPatientDetails() {
            return this.$store.getters["patient/getSelectedPatientDetails"];
        },
        selectedServiceUnit() {
            return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
        },
        selectedServicePoint() {
            return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints.length && this.servicePoints[0])
        },
        myLocation() {
            return this.$store.getters['servicePoint/getMyLocation']
        },
        servicePoints(){
            return this.$store.getters['servicePoint/getServicePoints']
        },
    },
    methods: {
        getPatientsAwaiting(){
            getPatientsAwaiting(this.selectedServiceUnit.service_unit,"Awaiting Vitals").then(
                (res)=>{
                    this.number_awaiting_vitals = res
                }
            )
            getPatientsAwaiting(this.selectedServiceUnit.service_unit,"Awaiting Consultation").then(
                (res)=>{
                    this.number_awaiting_consultation = res
                }
            
            )
            getPatientsAwaiting(this.selectedServiceUnit.service_unit,"Awaiting Investigation").then(
                (res)=>{
                    this.number_awaiting_investigation = res
                }
            
            )
            getPatientsAwaiting(this.selectedServiceUnit.service_unit,"Visit Completed").then(
                (res)=>{
                    this.number_visit_completed = res
                }
            
            )
        },
        getList(status) {
            this.getPatientList(this.selectedServiceUnit.service_unit,status,"traverse")
        },
        getPatientList(serviceUnit, search, traverse) {
            if (serviceUnit) {
                const payload = { serviceUnit, search, traverse, work:"components/patient/traversequeue"  };
                this.$store.dispatch("patient/fetchPatients", payload);
            }
        },
    },
    watch: {
    servicePoints(service_points){
            this.$store.dispatch("servicePoint/setSelectedServicePoint", service_points[0]);
        },
  },

};
</script>

<style>

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
  var TraverseQueue_default = __vue_component__8;

  // ../frontend/frontend/public/js/patient/components/ServicePointSelect.vue
  var __vue_script__9 = {
    name: "ServicePointSelect",
    watch: {
      servicePoints(service_points) {
        this.$store.dispatch("servicePoint/setSelectedServicePoint", service_points[0]);
      }
    },
    data() {
      return {
        isVisible: 1
      };
    },
    methods: {
      seePatientsHere() {
        this.isVisible = 0;
        updatePractitionerOccupancy(this.selectedServiceUnit.service_unit, this.selectedServicePoint.name).then((res) => {
          frappe.show_alert({
            message: __("Service point location set"),
            indicator: "green"
          }, 5);
          this.isVisible = 1;
        });
        this.$store.dispatch("servicePoint/setMyLocation", {"service_point": this.selectedServicePoint.name, "service_point_name": this.selectedServicePoint.point_name});
      },
      setServicePoint(point) {
        this.$store.dispatch("servicePoint/setSelectedServicePoint", point);
      }
    },
    computed: {
      selectedServicePoint() {
        return this.$store.getters["servicePoint/getSelectedServicePoint"] || this.servicePoints.length && this.servicePoints[0];
      },
      myLocation() {
        return this.$store.getters["servicePoint/getMyLocation"];
      },
      servicePoints() {
        let service_points = this.$store.getters["servicePoint/getServicePoints"];
        if (this.myLocation.service_point !== null) {
          service_points.forEach((item, index) => {
            if (item.name.trim() === this.myLocation.service_point.trim()) {
              service_points.splice(index, 1);
              service_points.unshift(item);
            }
          });
        }
        return service_points;
      },
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"] || this.serviceUnits.length && this.serviceUnits[0];
      }
    },
    components: {}
  };
  var __vue_render__9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", [
      _vm.selectedServicePoint.point_name ? _c("b-button", {
        attrs: {variant: "primary", size: "sm"},
        on: {
          click: function($event) {
            return _vm.$bvModal.show("s_p_m");
          }
        }
      }, [
        _c("i", {
          staticClass: "fa fa-home",
          attrs: {"aria-hidden": "true"}
        }),
        _vm._v(" "),
        _c("i", [
          _c("a", {
            staticStyle: {color: "white"},
            attrs: {target: "_blank"},
            on: {
              click: function($event) {
                return _vm.$bvModal.show("s_p_m");
              }
            }
          }, [_vm._v(_vm._s(_vm.selectedServicePoint.point_name))])
        ])
      ]) : _vm._e(),
      _vm._v(" "),
      _c("div", [
        _vm.isVisible ? _c("b-modal", {
          attrs: {id: "s_p_m", "hide-footer": ""},
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [
                  _vm._v("\n      Service point manager \n    ")
                ];
              },
              proxy: true
            }
          ], null, false, 727401145)
        }, [
          _vm._v(" "),
          _c("div", [
            _c("b-col", {staticClass: "no-background", attrs: {cols: "12"}}, [
              _c("b-dropdown", {
                staticClass: "fill-width custom-menu-bg",
                attrs: {
                  text: _vm.selectedServicePoint.point_name || "Select a service point",
                  variant: "secondary",
                  split: "",
                  "split-variant": "outline-secondary"
                }
              }, _vm._l(_vm.servicePoints, function(point) {
                return _c("b-dropdown-item", {
                  key: point.name,
                  on: {
                    click: function($event) {
                      return _vm.setServicePoint(point);
                    }
                  }
                }, [_vm._v(_vm._s(point.point_name))]);
              }), 1)
            ], 1),
            _vm._v(" "),
            _c("b-col", {
              staticClass: "no-background",
              staticStyle: {"margin-top": "10px"},
              attrs: {cols: "12"}
            }, [
              _c("b-button", {
                staticClass: "pull-right",
                attrs: {variant: "primary btn-sm"},
                on: {click: _vm.seePatientsHere}
              }, [_vm._v("\n     See Patients Here\n    ")])
            ], 1)
          ], 1)
        ]) : _vm._e()
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__9 = [];
  __vue_render__9._withStripped = true;
  var __vue_inject_styles__9 = function(inject) {
    if (!inject)
      return;
    inject("data-v-11844e78_0", {source: "\n.fill-width {\n  width: 100% !important;\n}\n.firt-text {\n  font-size: large;\n}\n.side-bar-area {\n  background: green;\n}\n.cust-nav {\n  box-shadow: 0px 0px !important;\n  padding: 0px !important;\n}\n.ward-selection {\n  background: rgba(76, 175, 80, 0);\n  padding: auto;\n}\n.unit-title {\n  font-weight: 700;\n  color: dimgray;\n  margin-bottom: 0px !important;\n}\n.no-background {\n  background: rgba(76, 175, 80, 0);\n  margin-top:2px;\n}\n.custom-menu-bg {\n  background: white;\n  border-radius: 7px;\n  border: 0px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/components/ServicePointSelect.vue"], "names": [], "mappings": ";AA2GA;EACA,sBAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,iBAAA;AACA;AACA;EACA,8BAAA;EACA,uBAAA;AACA;AAEA;EACA,gCAAA;EACA,aAAA;AACA;AAEA;EACA,gBAAA;EACA,cAAA;EACA,6BAAA;AACA;AAEA;EACA,gCAAA;EACA,cAAA;AACA;AACA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;AACA", "file": "ServicePointSelect.vue", "sourcesContent": [`<template>
  <b-container>
    <b-button v-if="selectedServicePoint.point_name" @click="$bvModal.show('s_p_m')" variant="primary" size="sm"
          >
          <i class="fa fa-home" aria-hidden="true"></i>  <i><a style="color:white" @click="$bvModal.show('s_p_m')" target="_blank">{{selectedServicePoint.point_name}}</a></i>

          </b-button>
 <div>
  <b-modal v-if="isVisible" id="s_p_m" hide-footer>
      <template #modal-title>
      Service point manager 
    </template>
    <div>
       <b-col cols="12" class="no-background">
        <b-dropdown
          :text="selectedServicePoint.point_name || 'Select a service point'"
          variant="secondary"
          split
          split-variant="outline-secondary"
          class="fill-width custom-menu-bg"
        >
          <b-dropdown-item
            v-for="point in servicePoints"
            :key="point.name"
            @click="setServicePoint(point)"
            >{{ point.point_name }}</b-dropdown-item
          >
        </b-dropdown>
      </b-col>

 <b-col cols="12" class="no-background" style="margin-top:10px">
 <b-button
      class="pull-right"
      variant="primary btn-sm"
      @click="seePatientsHere"
    >
     See Patients Here
    </b-button>
</b-col>
    </div>
  </b-modal>
        </div>
  </b-container>
</template>
<script>

import { updatePractitionerOccupancy } from "../../services/patient_chart/api";
export default {
  name: "ServicePointSelect",
  watch: {
    servicePoints(service_points){
            this.$store.dispatch("servicePoint/setSelectedServicePoint", service_points[0]);
        },
  },
  data() {
    return {
     isVisible:1,
    };
  },
  methods: {
    seePatientsHere(){
      this.isVisible = 0;
      updatePractitionerOccupancy(this.selectedServiceUnit.service_unit,this.selectedServicePoint.name).then(
                (res) => {
                  frappe.show_alert({
                message:__('Service point location set'),
                indicator:'green'
            }, 5);
            this.isVisible = 1;
            })
            
      this.$store.dispatch("servicePoint/setMyLocation",{"service_point":this.selectedServicePoint.name,"service_point_name":this.selectedServicePoint.point_name});
    },
    setServicePoint(point) {
      this.$store.dispatch("servicePoint/setSelectedServicePoint", point);
    },
  },
  computed: {
    selectedServicePoint(){
      return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints.length && this.servicePoints[0])
    },
    myLocation(){
      return this.$store.getters['servicePoint/getMyLocation'] 
    },
    servicePoints(){
      let service_points =  this.$store.getters['servicePoint/getServicePoints']

      if (this.myLocation.service_point !== null){
        service_points.forEach((item,index) => {
          if ((item.name).trim() === (this.myLocation.service_point).trim()){
            service_points.splice(index, 1);
            service_points.unshift(item);
          }
        });
      }   

      return service_points
    },
     selectedServiceUnit(){
      return this.$store.getters['serviceUnit/getSelectedServiceUnit'] || (this.serviceUnits.length && this.serviceUnits[0])
    },
    
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
  margin-top:2px;
}
.custom-menu-bg {
  background: white;
  border-radius: 7px;
  border: 0px;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__9 = void 0;
  var __vue_module_identifier__9 = void 0;
  var __vue_is_functional_template__9 = false;
  function __vue_normalize__9(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container>
    <b-button v-if="selectedServicePoint.point_name" @click="$bvModal.show('s_p_m')" variant="primary" size="sm"
          >
          <i class="fa fa-home" aria-hidden="true"></i>  <i><a style="color:white" @click="$bvModal.show('s_p_m')" target="_blank">{{selectedServicePoint.point_name}}</a></i>

          </b-button>
 <div>
  <b-modal v-if="isVisible" id="s_p_m" hide-footer>
      <template #modal-title>
      Service point manager 
    </template>
    <div>
       <b-col cols="12" class="no-background">
        <b-dropdown
          :text="selectedServicePoint.point_name || 'Select a service point'"
          variant="secondary"
          split
          split-variant="outline-secondary"
          class="fill-width custom-menu-bg"
        >
          <b-dropdown-item
            v-for="point in servicePoints"
            :key="point.name"
            @click="setServicePoint(point)"
            >{{ point.point_name }}</b-dropdown-item
          >
        </b-dropdown>
      </b-col>

 <b-col cols="12" class="no-background" style="margin-top:10px">
 <b-button
      class="pull-right"
      variant="primary btn-sm"
      @click="seePatientsHere"
    >
     See Patients Here
    </b-button>
</b-col>
    </div>
  </b-modal>
        </div>
  </b-container>
</template>
<script>

import { updatePractitionerOccupancy } from "../../services/patient_chart/api";
export default {
  name: "ServicePointSelect",
  watch: {
    servicePoints(service_points){
            this.$store.dispatch("servicePoint/setSelectedServicePoint", service_points[0]);
        },
  },
  data() {
    return {
     isVisible:1,
    };
  },
  methods: {
    seePatientsHere(){
      this.isVisible = 0;
      updatePractitionerOccupancy(this.selectedServiceUnit.service_unit,this.selectedServicePoint.name).then(
                (res) => {
                  frappe.show_alert({
                message:__('Service point location set'),
                indicator:'green'
            }, 5);
            this.isVisible = 1;
            })
            
      this.$store.dispatch("servicePoint/setMyLocation",{"service_point":this.selectedServicePoint.name,"service_point_name":this.selectedServicePoint.point_name});
    },
    setServicePoint(point) {
      this.$store.dispatch("servicePoint/setSelectedServicePoint", point);
    },
  },
  computed: {
    selectedServicePoint(){
      return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints.length && this.servicePoints[0])
    },
    myLocation(){
      return this.$store.getters['servicePoint/getMyLocation'] 
    },
    servicePoints(){
      let service_points =  this.$store.getters['servicePoint/getServicePoints']

      if (this.myLocation.service_point !== null){
        service_points.forEach((item,index) => {
          if ((item.name).trim() === (this.myLocation.service_point).trim()){
            service_points.splice(index, 1);
            service_points.unshift(item);
          }
        });
      }   

      return service_points
    },
     selectedServiceUnit(){
      return this.$store.getters['serviceUnit/getSelectedServiceUnit'] || (this.serviceUnits.length && this.serviceUnits[0])
    },
    
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
  margin-top:2px;
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
  var ServicePointSelect_default = __vue_component__9;

  // ../frontend/frontend/public/js/patient/components/patient/VacateServicePoint.vue
  var __vue_script__10 = {
    name: "VacateServicePoint",
    props: {
      details: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        isVisible: 1
      };
    },
    created() {
    },
    computed: {
      patient() {
        return this.$store.getters["patient/getSelectedPatient"];
      },
      selectedPatientDetails() {
        return this.$store.getters["patient/getSelectedPatientDetails"];
      },
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
      },
      selectedServicePoint() {
        return this.$store.getters["servicePoint/getSelectedServicePoint"] || this.servicePoints.length && this.servicePoints[0];
      },
      myLocation() {
        return this.$store.getters["servicePoint/getMyLocation"];
      }
    },
    methods: {
      vacateServicePoint() {
        this.isVisible = 0;
        vacateServicePoint(this.selectedServiceUnit.service_unit).then((res) => {
          frappe.show_alert({
            message: __("Service point vacated"),
            indicator: "green"
          }, 5);
          this.isVisible = 1;
          this.$store.dispatch("servicePoint/setMyLocation", {"service_point": "", "service_point_name": ""});
        });
      }
    }
  };
  var __vue_render__10 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("i", [
        _c("a", {
          attrs: {target: "_blank"},
          on: {
            click: function($event) {
              return _vm.$bvModal.show("amodal");
            }
          }
        }, [
          _vm._v("My Location: " + _vm._s(_vm.myLocation.service_point_name || "Select a Service Point"))
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _vm.isVisible ? _c("b-modal", {
          attrs: {id: "amodal", "hide-footer": ""},
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [
                  _vm._v("\n     Take a break and vacate service unit.\n   ")
                ];
              },
              proxy: true
            }
          ], null, false, 4197729988)
        }, [
          _vm._v(" "),
          _c("div", [
            _vm.isVisible ? _c("b-button", {
              staticClass: "pull-right",
              attrs: {variant: "danger btn-sm"},
              on: {click: _vm.vacateServicePoint}
            }, [_vm._v("\n    Vacate\n   ")]) : _vm._e()
          ], 1)
        ]) : _vm._e()
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__10 = [];
  __vue_render__10._withStripped = true;
  var __vue_inject_styles__10 = function(inject) {
    if (!inject)
      return;
    inject("data-v-401c6c49_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "VacateServicePoint.vue"}, media: void 0});
  };
  var __vue_scope_id__10 = void 0;
  var __vue_module_identifier__10 = void 0;
  var __vue_is_functional_template__10 = false;
  function __vue_normalize__10(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div>
    <i><a target="_blank" @click="$bvModal.show('amodal')">My Location: {{ myLocation.service_point_name || "Select a Service Point"}}</a></i>
 <div>
  <b-modal v-if="isVisible" id="amodal" hide-footer>
      <template #modal-title>
      Take a break and vacate service unit.
    </template>
    <div>
      <b-button
      v-if="isVisible"
      class="pull-right"
      variant="danger btn-sm"
      @click="vacateServicePoint"
    >
     Vacate
    </b-button>
    </div>
  </b-modal>
        </div>
  </div>
</template>

<script>
import {vacateServicePoint} from "./.././../../services/patient_chart/api";
export default {
  name: "VacateServicePoint",
  props:{
     details:{
         type:Object,
         default:null
     }
  },
  data() {
    return {
     isVisible:1,
    };
  },
  created() {
  },
  computed: {
      patient() {
      return this.$store.getters["patient/getSelectedPatient"];
    },
    selectedPatientDetails() {
      return this.$store.getters["patient/getSelectedPatientDetails"];
    },
    selectedServiceUnit() {
            return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
    },
    selectedServicePoint() {
        return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints.length && this.servicePoints[0])
    },
    myLocation(){
      return this.$store.getters['servicePoint/getMyLocation'] 
    },
  },
  methods:{
      vacateServicePoint(){
        this.isVisible = 0;
                vacateServicePoint(this.selectedServiceUnit.service_unit).then(
                (res) => {
                  frappe.show_alert({
                message:__('Service point vacated'),
                indicator:'green'
            }, 5);
            this.isVisible = 1;
            this.$store.dispatch("servicePoint/setMyLocation",{"service_point":"","service_point_name":""});
            }
            );
      },
  }

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
  var VacateServicePoint_default = __vue_component__10;

  // ../frontend/frontend/public/js/patient/core/TopHeader.vue
  var __vue_script__11 = {
    components: {Encounter: Encounter_default, RequestForAmbulance: RequestForAmbulance_default, SideBar: Sidebar_default, ServicePointSelect: ServicePointSelect_default, VacateServicePoint: VacateServicePoint_default, TraverseQueue: TraverseQueue_default},
    name: "TopHeader",
    data() {
      return {
        socket: null
      };
    },
    computed: {
      notificationList() {
        return this.$store.getters["notification/getNotificationList"];
      },
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"] || this.serviceUnits.length && this.serviceUnits[0];
      },
      selectedServicePoint() {
        return this.$store.getters["servicePoint/getSelectedServicePoint"] || this.servicePoints.length && this.servicePoints[0];
      }
    },
    mounted() {
      const user = frappe.session.user;
      this.getNotifications(user);
    },
    methods: {
      checkIfMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.mobile = true;
        }
      },
      getNotifications(user) {
        const payload = {ref: user};
        this.$store.dispatch("notification/fetchNotifications", payload);
      },
      clearNotification(notification) {
        const name = notification.name;
        const payload = {name, user: frappe.session.user};
        this.$store.dispatch("notification/clearNotification", payload);
        this.setCurrentDoctype(notification.reference_doctype, notification.doctype_reference);
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
  var __vue_render__11 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("header", {
        staticClass: "navbar navbar-expand sticky-top",
        attrs: {role: "navigation"}
      }, [
        _c("b-container", {staticClass: "top-bar-spacing"}, [
          _c("b-button", {
            directives: [
              {
                name: "b-toggle",
                rawName: "v-b-toggle.sidebar-1",
                modifiers: {"sidebar-1": true}
              }
            ],
            staticClass: "mt-2 no-side-bar",
            attrs: {variant: "outline-dark"}
          }, [
            _c("i", {
              staticClass: "fa fa-bars",
              class: _vm.collapsed ? _vm.iconUp : _vm.iconDown,
              attrs: {"aria-hidden": "true"}
            })
          ]),
          _vm._v(" "),
          _c("a", {
            staticClass: "navbar-brand navbar-home pull-left no-logo",
            attrs: {href: "/app", target: "_blank"}
          }, [
            _c("img", {
              staticClass: "app-logo",
              staticStyle: {width: "24px"},
              attrs: {src: "/assets/mtrh_dev/images/logo.jpeg"}
            })
          ]),
          _vm._v(" "),
          _c("ul", {
            staticClass: "nav navbar-nav d-none d-sm-flex",
            attrs: {id: "navbar-breadcrumbs"}
          }, [
            _c("li", [
              _c("a", {attrs: {target: "_blank"}}, [
                _vm._v(_vm._s(_vm.selectedServiceUnit.service_unit))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("ul", {
            staticClass: "nav navbar-nav d-none d-sm-flex",
            attrs: {id: "navbar-breadcrumbs"}
          }, [_c("li")]),
          _vm._v(" "),
          _c("ul", {
            staticClass: "nav navbar-nav d-none d-sm-flex",
            attrs: {id: "navbar-breadcrumbs"}
          }, [_c("li", [_c("vacate-service-point")], 1)]),
          _vm._v(" "),
          _c("div", {
            staticClass: "collapse navbar-collapse justify-content-end hidden"
          }, [
            _c("form", {
              staticClass: "form-inline fill-width justify-content-end",
              attrs: {role: "search", onsubmit: "return false;"}
            }, [
              _c("div", {
                staticClass: "input-group search-bar text-muted hidden"
              }, [
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
                      _c("a", {
                        staticStyle: {"font-weight": "normal"}
                      }, [
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
                      _c("a", {
                        staticStyle: {"font-weight": "normal"}
                      }, [_c("span", [_vm._v("Help on Search")])])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("span", {staticClass: "search-icon"}, [
                  _c("svg", {staticClass: "icon icon-sm"}, [
                    _c("use", {
                      attrs: {"xlink:href": "#icon-search"}
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("ul", {staticClass: "navbar-nav"}, [
              _c("li", {
                staticClass: "nav-item dropdown dropdown-help dropdown-mobile"
              }, [
                _c("a", {
                  staticClass: "nav-link",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    onclick: "return false;"
                  }
                }, [_c("encounter")], 1)
              ]),
              _vm._v(" "),
              _c("li", {
                staticClass: "nav-item dropdown dropdown-help dropdown-mobile no-logo"
              }, [
                _c("a", {
                  staticClass: "nav-link",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    onclick: "return false;"
                  }
                }, [
                  _c("request-for-ambulance", {
                    attrs: {isCompressed: true}
                  })
                ], 1)
              ]),
              _vm._v(" "),
              _c("li", {
                staticClass: "nav-item dropdown dropdown-help dropdown-mobile no-logo"
              }, [
                _c("a", {
                  staticClass: "nav-link",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    onclick: "return false;"
                  }
                }, [
                  _c("service-point-select", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.fullScreenWorkArea,
                        expression: "!fullScreenWorkArea"
                      }
                    ],
                    on: {"service-unit": _vm.setServiceUnit}
                  })
                ], 1)
              ]),
              _vm._v(" "),
              _c("li", {
                staticClass: "nav-item dropdown dropdown-help dropdown-mobile no-logo"
              }, [
                _c("a", {
                  staticClass: "nav-link",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    onclick: "return false;"
                  }
                }, [_c("traverse-queue")], 1)
              ]),
              _vm._v(" "),
              _c("li", {
                staticClass: "nav-item dropdown dropdown-help dropdown-mobile"
              }, [
                _c("a", {
                  staticClass: "nav-link",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    onclick: "return false;"
                  }
                })
              ]),
              _vm._v(" "),
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
                    }, [
                      _vm._v(_vm._s(_vm.notificationList.length))
                    ]) : _vm._e()
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
                          _vm._v("\n                        Notifications\n                      ")
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
                            attrs: {
                              href: "#icon-mark-as-read"
                            }
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
                              return _vm.clearNotification(notification);
                            }
                          }
                        }, [
                          _c("div", {
                            staticClass: "notification-body"
                          }, [
                            _c("span", {
                              staticClass: "avatar avatar-medium user-avatar",
                              attrs: {
                                title: "Philip Ademba"
                              }
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
                                _c("b", {
                                  staticClass: "subject-title"
                                }, [
                                  _vm._v(_vm._s(notification.title) + " :")
                                ]),
                                _vm._v("\n                              " + _vm._s(notification.message) + "\n                            ")
                              ]),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "notification-timestamp text-muted"
                              }, [
                                _c("span", {
                                  staticClass: "frappe-timestamp",
                                  attrs: {
                                    "data-timestamp": notification.creation,
                                    title: notification.creation
                                  }
                                }, [
                                  _vm._v("\n                                ago")
                                ])
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
                        _c("div", {
                          staticClass: "notification-null-state"
                        }, [
                          _c("div", {staticClass: "text-center"}, [
                            _c("img", {
                              staticClass: "null-state",
                              attrs: {
                                src: "/assets/frappe/images/ui-states/event-empty-state.svg",
                                alt: "Generic Empty State"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", {staticClass: "title"}, [_vm._v("No notifications")]),
                            _vm._v(" "),
                            _c("div", {staticClass: "subtitle"}, [
                              _vm._v("\n                            All your notifications will be listed here\n                          ")
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
                  _vm._v("\n                Help\n                "),
                  _c("span", [
                    _c("svg", {staticClass: "icon icon-xs"}, [
                      _c("use", {
                        attrs: {href: "#icon-small-down"}
                      })
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
                    attrs: {
                      href: "https://erpnext.com/docs/user/manual"
                    }
                  }, [
                    _vm._v("\n                  Go back to Home page\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {href: "https://discuss.erpnext.com"}
                  }, [
                    _vm._v("\n                  Raise a support ticket\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      href: "https://github.com/frappe/erpnext/issues"
                    }
                  }, [
                    _vm._v("\n                  Report an Issue\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.show_about()"
                    }
                  }, [
                    _vm._v("\n                  About\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.show_shortcuts(event)"
                    }
                  }, [
                    _vm._v("\n                  Step by step tutorial\n                ")
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
                    attrs: {title: "Health practioner"}
                  }, [
                    _c("div", {
                      staticClass: "avatar-frame standard-image",
                      staticStyle: {
                        "background-color": "var(--dark-green-avatar-bg)",
                        color: "var(--dark-green-avatar-color)"
                      }
                    }, [
                      _c("i", {
                        staticClass: "fa fa-user-md",
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
                      onclick: "window.open( '/app/user-profile', '_blank')"
                    }
                  }, [
                    _vm._v("\n                  My Profile\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.route_to_user()"
                    }
                  }, [
                    _vm._v("\n                  My Settings\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.setup_session_defaults()"
                    }
                  }, [
                    _vm._v("\n                  Session Defaults\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.clear_cache()"
                    }
                  }, [
                    _vm._v("\n                  Reload\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.view_website()"
                    }
                  }, [
                    _vm._v("\n                  View Website\n                ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.toggle_full_width()"
                    }
                  }, [
                    _vm._v("\n                  Toggle Full Width\n                ")
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "dropdown-divider"}),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {onclick: "return frappe.app.logout()"}
                  }, [
                    _vm._v("\n                  Logout\n                ")
                  ])
                ])
              ])
            ])
          ])
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-sidebar", {attrs: {id: "sidebar-1", title: "Menu", backdrop: "", shadow: ""}}, [_c("div", {}, [_c("side-bar")], 1)])
    ], 1);
  };
  var __vue_staticRenderFns__11 = [];
  __vue_render__11._withStripped = true;
  var __vue_inject_styles__11 = function(inject) {
    if (!inject)
      return;
    inject("data-v-4401de54_0", {source: "\n#page-patient-chart {\n  height: 100vh;\n}\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n@media only screen and (min-width: 767px) {\n.no-logo {\n    display: inline;\n}\n.no-side-bar {\n    display: none;\n}\n}\n@media only screen and (max-width: 767px) {\n.no-logo {\n    display: none;\n}\n.no-side-bar {\n    display: inline;\n}\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/core/TopHeader.vue"], "names": [], "mappings": ";AAqgBA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;AACA;AAEA;AACA;IACA,eAAA;AACA;AACA;IACA,aAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;AACA;AACA;IACA,eAAA;AACA;AACA", "file": "TopHeader.vue", "sourcesContent": [`<template>
  <div>
    <header class="navbar navbar-expand sticky-top" role="navigation">
      <b-container class="top-bar-spacing">
        <b-button
          variant="outline-dark"
          class="mt-2 no-side-bar"
          v-b-toggle.sidebar-1
        >
          <i
            class="fa fa-bars"
            v-bind:class="collapsed ? iconUp : iconDown"
            aria-hidden="true"
          ></i>
        </b-button>
        <a
          class="navbar-brand navbar-home pull-left no-logo"
          href="/app"
          target="_blank"
        >
          <img
            class="app-logo"
            style="width: 24px"
            src="/assets/mtrh_dev/images/logo.jpeg"
          />
        </a>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>
            
            <a target="_blank">{{selectedServiceUnit.service_unit}}</a>
          </li>
        </ul>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>

           
          </li>
        </ul>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>
           <vacate-service-point/> 
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
                      ><span>Help on Search</span></a
                    >
                  </li>
                </ul>
               
              </div>
              <span class="search-icon">
                <svg class="icon icon-sm">
                  <use xlink:href="#icon-search"></use>
                </svg>
              </span>
            </div>
          </form>
          <ul class="navbar-nav">

            <li class="nav-item dropdown dropdown-help dropdown-mobile">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
               <encounter />
              </a>
            </li>

             <li class="nav-item dropdown dropdown-help dropdown-mobile no-logo">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
             
               <request-for-ambulance
               :isCompressed="true"
                />
              </a>
            </li>    
             
<li class="nav-item dropdown dropdown-help dropdown-mobile no-logo">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
             
               <service-point-select
        @service-unit="setServiceUnit"
        v-show="!fullScreenWorkArea"
      /> 
              </a>
            </li>  
             <li class="nav-item dropdown dropdown-help dropdown-mobile no-logo">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
                <traverse-queue/>
              </a>
            </li>  
            <li class="nav-item dropdown dropdown-help dropdown-mobile">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
              </a>
            </li>
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
                        @click="clearNotification(notification)"
                      >
                        <div class="notification-body">
                          <span
                            class="avatar avatar-medium user-avatar"
                            title="Philip Ademba"
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
                                :data-timestamp="notification.creation"
                                :title="notification.creation"
                              >
                                ago</span
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
                  href="https://erpnext.com/docs/user/manual"
                >
                  Go back to Home page
                </a>
                <a class="dropdown-item" href="https://discuss.erpnext.com">
                  Raise a support ticket
                </a>
                <a
                  class="dropdown-item"
                  href="https://github.com/frappe/erpnext/issues"
                >
                  Report an Issue
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.show_about()"
                >
                  About
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
                <span class="avatar avatar-medium" title="Health practioner">
                  <div
                    class="avatar-frame standard-image"
                    style="
                      background-color: var(--dark-green-avatar-bg);
                      color: var(--dark-green-avatar-color);
                    "
                  >
                    <i class="fa fa-user-md" aria-hidden="true"></i>
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
                  onclick="window.open( '/app/user-profile', '_blank')"
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
                  onclick="return frappe.ui.toolbar.setup_session_defaults()"
                >
                  Session Defaults
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.clear_cache()"
                >
                  Reload
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.view_website()"
                >
                  View Website
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.toggle_full_width()"
                >
                  Toggle Full Width
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

    <b-sidebar   id="sidebar-1" title="Menu" backdrop shadow>
      <div class="">
        <side-bar />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Encounter from "./../Encounter.vue";
import SideBar from "./Sidebar.vue";
import RequestForAmbulance from "./../components/patient/RequestForAmbulance.vue";
import TraverseQueue from "./../components/patient/TraverseQueue.vue";
import ServicePointSelect from "../components/ServicePointSelect.vue";
import VacateServicePoint from "./../components/patient/VacateServicePoint.vue";
export default {
  components: { Encounter, RequestForAmbulance, SideBar, ServicePointSelect,VacateServicePoint, TraverseQueue},
  name: "TopHeader",
  data() {
    return {
      socket: null,
    };
  },
  computed: {
    notificationList() {
      return this.$store.getters["notification/getNotificationList"];
    },
    selectedServiceUnit(){
      return this.$store.getters['serviceUnit/getSelectedServiceUnit'] || (this.serviceUnits.length && this.serviceUnits[0])
    },
    selectedServicePoint(){
      return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints.length && this.servicePoints[0])
    },
  },
  mounted() {
    const user = frappe.session.user;
    this.getNotifications(user);
  },

  methods: {
    checkIfMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.mobile = true

            }
        },
    getNotifications(user) {
      const payload = { ref: user };
      this.$store.dispatch("notification/fetchNotifications", payload);
    },

    clearNotification(notification) {
      const name = notification.name;
      const payload = { name, user: frappe.session.user };
      this.$store.dispatch("notification/clearNotification", payload);
      this.setCurrentDoctype(
        notification.reference_doctype,
        notification.doctype_reference
      );
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
<style>
#page-patient-chart {
  height: 100vh;
}

.notification-badge {
  position: absolute;
  margin-left: -9px;
  top: -3px;
}

@media only screen and (min-width: 767px) {
  .no-logo {
    display: inline;
  }
  .no-side-bar {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  .no-logo {
    display: none;
  }
  .no-side-bar {
    display: inline;
  }
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__11 = void 0;
  var __vue_module_identifier__11 = void 0;
  var __vue_is_functional_template__11 = false;
  function __vue_normalize__11(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div>
    <header class="navbar navbar-expand sticky-top" role="navigation">
      <b-container class="top-bar-spacing">
        <b-button
          variant="outline-dark"
          class="mt-2 no-side-bar"
          v-b-toggle.sidebar-1
        >
          <i
            class="fa fa-bars"
            v-bind:class="collapsed ? iconUp : iconDown"
            aria-hidden="true"
          ></i>
        </b-button>
        <a
          class="navbar-brand navbar-home pull-left no-logo"
          href="/app"
          target="_blank"
        >
          <img
            class="app-logo"
            style="width: 24px"
            src="/assets/mtrh_dev/images/logo.jpeg"
          />
        </a>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>
            
            <a target="_blank">{{selectedServiceUnit.service_unit}}</a>
          </li>
        </ul>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>

           
          </li>
        </ul>
        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
          <li>
           <vacate-service-point/> 
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
                      ><span>Help on Search</span></a
                    >
                  </li>
                </ul>
               
              </div>
              <span class="search-icon">
                <svg class="icon icon-sm">
                  <use xlink:href="#icon-search"></use>
                </svg>
              </span>
            </div>
          </form>
          <ul class="navbar-nav">

            <li class="nav-item dropdown dropdown-help dropdown-mobile">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
               <encounter />
              </a>
            </li>

             <li class="nav-item dropdown dropdown-help dropdown-mobile no-logo">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
             
               <request-for-ambulance
               :isCompressed="true"
                />
              </a>
            </li>    
             
<li class="nav-item dropdown dropdown-help dropdown-mobile no-logo">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
             
               <service-point-select
        @service-unit="setServiceUnit"
        v-show="!fullScreenWorkArea"
      /> 
              </a>
            </li>  
             <li class="nav-item dropdown dropdown-help dropdown-mobile no-logo">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
                <traverse-queue/>
              </a>
            </li>  
            <li class="nav-item dropdown dropdown-help dropdown-mobile">
              <a
                class="nav-link"
                data-toggle="dropdown"
                href="#"
                onclick="return false;"
              >
              </a>
            </li>
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
                        @click="clearNotification(notification)"
                      >
                        <div class="notification-body">
                          <span
                            class="avatar avatar-medium user-avatar"
                            title="Philip Ademba"
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
                                :data-timestamp="notification.creation"
                                :title="notification.creation"
                              >
                                ago</span
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
                  href="https://erpnext.com/docs/user/manual"
                >
                  Go back to Home page
                </a>
                <a class="dropdown-item" href="https://discuss.erpnext.com">
                  Raise a support ticket
                </a>
                <a
                  class="dropdown-item"
                  href="https://github.com/frappe/erpnext/issues"
                >
                  Report an Issue
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.show_about()"
                >
                  About
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
                <span class="avatar avatar-medium" title="Health practioner">
                  <div
                    class="avatar-frame standard-image"
                    style="
                      background-color: var(--dark-green-avatar-bg);
                      color: var(--dark-green-avatar-color);
                    "
                  >
                    <i class="fa fa-user-md" aria-hidden="true"></i>
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
                  onclick="window.open( '/app/user-profile', '_blank')"
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
                  onclick="return frappe.ui.toolbar.setup_session_defaults()"
                >
                  Session Defaults
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.clear_cache()"
                >
                  Reload
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.view_website()"
                >
                  View Website
                </a>
                <a
                  class="dropdown-item"
                  onclick="return frappe.ui.toolbar.toggle_full_width()"
                >
                  Toggle Full Width
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

    <b-sidebar   id="sidebar-1" title="Menu" backdrop shadow>
      <div class="">
        <side-bar />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Encounter from "./../Encounter.vue";
import SideBar from "./Sidebar.vue";
import RequestForAmbulance from "./../components/patient/RequestForAmbulance.vue";
import TraverseQueue from "./../components/patient/TraverseQueue.vue";
import ServicePointSelect from "../components/ServicePointSelect.vue";
import VacateServicePoint from "./../components/patient/VacateServicePoint.vue";
export default {
  components: { Encounter, RequestForAmbulance, SideBar, ServicePointSelect,VacateServicePoint, TraverseQueue},
  name: "TopHeader",
  data() {
    return {
      socket: null,
    };
  },
  computed: {
    notificationList() {
      return this.$store.getters["notification/getNotificationList"];
    },
    selectedServiceUnit(){
      return this.$store.getters['serviceUnit/getSelectedServiceUnit'] || (this.serviceUnits.length && this.serviceUnits[0])
    },
    selectedServicePoint(){
      return this.$store.getters['servicePoint/getSelectedServicePoint'] || (this.servicePoints.length && this.servicePoints[0])
    },
  },
  mounted() {
    const user = frappe.session.user;
    this.getNotifications(user);
  },

  methods: {
    checkIfMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                this.mobile = true

            }
        },
    getNotifications(user) {
      const payload = { ref: user };
      this.$store.dispatch("notification/fetchNotifications", payload);
    },

    clearNotification(notification) {
      const name = notification.name;
      const payload = { name, user: frappe.session.user };
      this.$store.dispatch("notification/clearNotification", payload);
      this.setCurrentDoctype(
        notification.reference_doctype,
        notification.doctype_reference
      );
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
<style>
#page-patient-chart {
  height: 100vh;
}

.notification-badge {
  position: absolute;
  margin-left: -9px;
  top: -3px;
}

@media only screen and (min-width: 767px) {
  .no-logo {
    display: inline;
  }
  .no-side-bar {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  .no-logo {
    display: none;
  }
  .no-side-bar {
    display: inline;
  }
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
  var TopHeader_default = __vue_component__11;

  // ../frontend/frontend/public/js/patient/Container.vue
  var __vue_script__12 = {
    components: {TopHeader: TopHeader_default},
    name: "Container"
  };
  var __vue_render__12 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-container watu", attrs: {fluid: ""}}, [
      _c("b-row", [_c("top-header", {staticStyle: {width: "100%"}})], 1),
      _vm._v(" "),
      _c("b-row", [_c("router-view", {staticClass: "main-container watu"})], 1)
    ], 1);
  };
  var __vue_staticRenderFns__12 = [];
  __vue_render__12._withStripped = true;
  var __vue_inject_styles__12 = function(inject) {
    if (!inject)
      return;
    inject("data-v-50dae261_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Container.vue"}, media: void 0});
  };
  var __vue_scope_id__12 = void 0;
  var __vue_module_identifier__12 = void 0;
  var __vue_is_functional_template__12 = false;
  function __vue_normalize__12(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
<b-container class="main-container watu" fluid>
    <b-row >
     <top-header style="width: 100%" />
    </b-row>
    <b-row>
         <router-view class="main-container watu"/>  
    </b-row>
</b-container>

</template>

<script>
import TopHeader from './core/TopHeader.vue';
export default {
  components: { TopHeader },
  name: "Container",
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
  var Container_default = __vue_component__12;

  // ../frontend/node_modules/vuex/dist/vuex.mjs
  var import_vuex_common = __toModule(require_vuex_common());

  // ../frontend/frontend/public/js/state/state.js
  var getUserInfo = () => {
    let userInfo = {};
    return userInfo;
  };
  var state = {
    AppActiveUser: getUserInfo(),
    tableData: []
  };
  var state_default = state;

  // ../frontend/frontend/public/js/state/getters.js
  var getters = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default = getters;

  // ../frontend/frontend/public/js/state/mutations.js
  var mutations = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default = mutations;

  // ../frontend/frontend/public/js/state/actions.js
  var actions = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default = actions;

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
  var api3 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: ({message}) => resolve(message), error: reject}));
  var getScheduledOrUnscheduledprocedures = (args) => {
    return api3({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedures_per_service_unit",
      args
    });
  };
  var getClinicalProcedureTemplates = (args) => {
    return api3({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedure_templates_per_service_unit",
      args
    });
  };
  var getProcedureStatistics = (args) => {
    return api3({
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
  var fetchNotifications = (payload) => api2({
    method: "clinical.api.notification.notification.get_notifications",
    args: {payload}
  });
  var clearNotification = (payload) => api2({
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

  // ../frontend/frontend/public/js/state/render/state.js
  var getUserInfo2 = () => {
    let userInfo = {};
    return userInfo;
  };
  var state2 = {
    AppActiveUser: getUserInfo2(),
    tableData: []
  };
  var state_default2 = state2;

  // ../frontend/frontend/public/js/state/render/getters.js
  var getters2 = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default2 = getters2;

  // ../frontend/frontend/public/js/state/render/mutations.js
  var mutations2 = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default2 = mutations2;

  // ../frontend/frontend/public/js/state/render/actions.js
  var actions2 = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default2 = actions2;

  // ../frontend/frontend/public/js/state/render/module.js
  var module_default = {
    namespaced: true,
    state: state_default2,
    mutations: mutations_default2,
    actions: actions_default2,
    getters: getters_default2
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
  var api4 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatient = ({patient_name}) => api4({
    method: "billing.billing.api.accounts.patients.get_patient",
    args: {
      patient_name
    }
  });
  var getInvoiceFinalizations = (customer_number) => api4({
    method: "billing.billing.api.accounts.patients.get_invoice_finalizations",
    args: {
      customer_number
    }
  });

  // ../frontend/frontend/public/js/services/patient_chart/accounts.js
  var api5 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var getAccountsDashboard = ({
    patient_number = ""
  }) => api5({
    method: "clinical.api.patient_accounts.customer_account_dashboard_info",
    args: {
      patient_number
    }
  }).then(({message}) => message);
  var getUnbilledSalesOrderTotals = ({
    patient_number
  }) => api5({
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
    getters: getters_default,
    mutations: mutations_default,
    state: state_default,
    actions: actions_default,
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

  // ../frontend/frontend/public/js/patient/pages/queue_management/core/Sidebar.vue
  var __vue_script__13 = {
    name: "Sidebar",
    data() {
      return {
        center: "center",
        items: [
          {name: "Curtis Johns", patient_number: "HLC-PAT-2021-00001", room: "Room 1"},
          {name: "Jane Doe", patient_number: "HLC-PAT-2021-00002", room: "Room 2"},
          {name: "Miranda Chemwetich", patient_number: "HLC-PAT-2021-00003", room: "Room 3"},
          {name: "Kevin Kiptoo", patient_number: "HLC-PAT-2021-00004", room: "Room 4"},
          {name: "Charity Bii", patient_number: "HLC-PAT-2021-00005", room: "Room 5"}
        ]
      };
    },
    components: {
      ServiceUnitSelect: ServiceUnitSelect_default
    },
    methods: {
      patientItemClicked(patientItem) {
        console.log(patientItem);
      }
    }
  };
  var __vue_render__13 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "side-bar-area aside-bottom-padding"}, [
      _c("b-row", [
        _c("service-unit-select", {
          on: {"service-unit": _vm.setServiceUnit}
        })
      ], 1),
      _vm._v(" "),
      _c("div", {staticClass: "content-area"}, _vm._l(_vm.items, function(item) {
        return _c("b-col", {key: item.name, staticClass: "p user-areasb"}, [
          _c("b-row", [
            _c("b-col", {attrs: {cols: "10"}}, [
              _c("b-row", [
                _c("b-col", [
                  _c("h4", {
                    staticStyle: {
                      float: "left",
                      "font-weight": "bold"
                    }
                  }, [
                    _vm._v("\n                                " + _vm._s(item.name) + "\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col", [
                  _c("h5", {staticStyle: {float: "left"}}, [
                    _vm._v("\n                                " + _vm._s(item.patient_number) + "\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col", [
                  _c("h4", {
                    staticStyle: {
                      color: "#06a79e",
                      float: "left",
                      "text-transform": "uppercase",
                      "font-weight": "bold"
                    }
                  }, [
                    _vm._v("\n                                                " + _vm._s(item.room) + "\n                                            ")
                  ])
                ])
              ], 1)
            ], 1),
            _vm._v(" "),
            _c("b-icon", {
              attrs: {
                icon: "info-circle",
                variant: "dark",
                "font-scale": "2"
              }
            }),
            _vm._v(" "),
            _c("b-col")
          ], 1)
        ], 1);
      }), 1)
    ], 1);
  };
  var __vue_staticRenderFns__13 = [];
  __vue_render__13._withStripped = true;
  var __vue_inject_styles__13 = function(inject) {
    if (!inject)
      return;
    inject("data-v-3cec41dc_0", {source: "\n.no-sides[data-v-3cec41dc] {\n    margin-left: 0px;\n    margin-right: 8px;\n}\n.side-bar-area[data-v-3cec41dc] {\n    background: white;\n    width: 100% !important;\n    padding-top: 20px;\n    min-height: 600px;\n    height: 100vh;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    background-color: white;\n    background-image: linear-gradient(315deg, #06a79e 74%,#6f5a7b 0% );\n    padding-left: 11px !important;\n    padding-right: 11px !important;\n}\n.item-link[data-v-3cec41dc] {\n    border-bottom: 1px solid white;\n    color: #fff !important;\n    padding-left: 4px;\n}\n.title[data-v-3cec41dc] {\n    font-weight: bold;\n    color: black !important;\n    margin-left: 4px;\n}\n.user-areasb[data-v-3cec41dc] {\n    background: #eff0f2;\n    padding-left: 13px;\n    padding-top: 5px;\n    border-radius: 5px;\n    margin-top: 7px;\n    margin-right: 15px;\n    color: black;\n}\n.menu-header[data-v-3cec41dc] {\n    width: 100%;\n    padding: 10px;\n    background: white;\n    font-size: 12px;\n    font-weight: bold;\n    /* box-shadow: 0px 7px 0px -5px #ccc; */\n}\n.sub-title[data-v-3cec41dc] {\n    color: gray !important;\n    font-size: 10px;\n    margin-left: 4px;\n    font-weight: 400;\n}\n.vs-align-center[data-v-3cec41dc] {\n    color: white;\n}\n.content-area[data-v-3cec41dc] {\n    height: 82vh;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    scrollbar-width: thin;\n    background: white;\n    padding-bottom: 16px;\n    padding-left: 5px;\n    margin-top:8px;\n    padding-right: 5px;\n    border-radius: 5px;\n}\n.psm[data-v-3cec41dc] {\n    display: inline-block;\n    border-radius: 50px;\n    box-shadow: 0px 0px 2px #888;\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    position: relative;\n    padding-bottom: 10px;\n    position: relative;\n}\n#ico[data-v-3cec41dc] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    display: block;\n    color: #06a79e;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/pages/queue_management/core/Sidebar.vue"], "names": [], "mappings": ";AAqEA;IACA,gBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,sBAAA;IACA,iBAAA;IACA,iBAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,uBAAA;IACA,kEAAA;IACA,6BAAA;IACA,8BAAA;AACA;AAEA;IACA,8BAAA;IACA,sBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,uBAAA;IACA,gBAAA;AACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,gBAAA;IACA,kBAAA;IACA,eAAA;IACA,kBAAA;IACA,YAAA;AACA;AAEA;IACA,WAAA;IACA,aAAA;IACA,iBAAA;IACA,eAAA;IACA,iBAAA;IACA,uCAAA;AACA;AAEA;IACA,sBAAA;IACA,eAAA;IACA,gBAAA;IACA,gBAAA;AACA;AAEA;IACA,YAAA;AACA;AAEA;IACA,YAAA;IACA,kBAAA;IACA,kBAAA;IACA,qBAAA;IACA,iBAAA;IACA,oBAAA;IACA,iBAAA;IACA,cAAA;IACA,kBAAA;IACA,kBAAA;AACA;AAEA;IACA,qBAAA;IACA,mBAAA;IACA,4BAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;IACA,oBAAA;IACA,kBAAA;AACA;AAEA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,WAAA;IACA,gCAAA;IACA,WAAA;IACA,YAAA;IACA,cAAA;IACA,cAAA;AACA", "file": "Sidebar.vue", "sourcesContent": [`<template>
    <b-container class="side-bar-area aside-bottom-padding">
         <b-row>
            <service-unit-select @service-unit="setServiceUnit"/>
        </b-row>
        <div class="content-area">
            <b-col v-for="item in items" :key="item.name" class="p user-areasb">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h4 style="float:left; font-weight: bold;">
                                    {{item.name}}
                                </h4>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;">
                                    {{item.patient_number}}
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#06a79e;float:left;text-transform: uppercase;font-weight: bold;">
                                                    {{item.room}}
                                                </h4>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-icon icon="info-circle" variant="dark" font-scale="2"></b-icon>
                    <b-col> </b-col>
                </b-row>
            </b-col>
        </div>
    </b-container>
</template>

<script>
import ServiceUnitSelect from "../../../components/ServiceUnitSelect.vue";
export default {
    name: "Sidebar",
    data() {
        return {
            center: "center",
            items: [
                { name: 'Curtis Johns',patient_number:'HLC-PAT-2021-00001',room:"Room 1" },
                { name: 'Jane Doe',patient_number:'HLC-PAT-2021-00002',room:"Room 2" },
                {name: 'Miranda Chemwetich',patient_number:'HLC-PAT-2021-00003',room:"Room 3"},    
                {name: 'Kevin Kiptoo',patient_number:'HLC-PAT-2021-00004',room:"Room 4"},
                {name: 'Charity Bii',patient_number:'HLC-PAT-2021-00005',room:"Room 5"}
            ]

        };
    },
    components:{
        ServiceUnitSelect,
    },

    methods: {
        patientItemClicked(patientItem) {
            console.log(patientItem)
        }
    },
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
    background-image: linear-gradient(315deg, #06a79e 74%,#6f5a7b 0% );
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

.user-areasb {
    background: #eff0f2;
    padding-left: 13px;
    padding-top: 5px;
    border-radius: 5px;
    margin-top: 7px;
    margin-right: 15px;
    color: black;
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
    color: white;
}

.content-area {
    height: 82vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    background: white;
    padding-bottom: 16px;
    padding-left: 5px;
    margin-top:8px;
    padding-right: 5px;
    border-radius: 5px;
}

.psm {
    display: inline-block;
    border-radius: 50px;
    box-shadow: 0px 0px 2px #888;
    height: 40px;
    width: 40px;
    text-align: center;
    position: relative;
    padding-bottom: 10px;
    position: relative;
}

#ico {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color: #06a79e;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__13 = "data-v-3cec41dc";
  var __vue_module_identifier__13 = void 0;
  var __vue_is_functional_template__13 = false;
  function __vue_normalize__13(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <b-container class="side-bar-area aside-bottom-padding">
         <b-row>
            <service-unit-select @service-unit="setServiceUnit"/>
        </b-row>
        <div class="content-area">
            <b-col v-for="item in items" :key="item.name" class="p user-areasb">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h4 style="float:left; font-weight: bold;">
                                    {{item.name}}
                                </h4>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;">
                                    {{item.patient_number}}
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#06a79e;float:left;text-transform: uppercase;font-weight: bold;">
                                                    {{item.room}}
                                                </h4>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-icon icon="info-circle" variant="dark" font-scale="2"></b-icon>
                    <b-col> </b-col>
                </b-row>
            </b-col>
        </div>
    </b-container>
</template>

<script>
import ServiceUnitSelect from "../../../components/ServiceUnitSelect.vue";
export default {
    name: "Sidebar",
    data() {
        return {
            center: "center",
            items: [
                { name: 'Curtis Johns',patient_number:'HLC-PAT-2021-00001',room:"Room 1" },
                { name: 'Jane Doe',patient_number:'HLC-PAT-2021-00002',room:"Room 2" },
                {name: 'Miranda Chemwetich',patient_number:'HLC-PAT-2021-00003',room:"Room 3"},    
                {name: 'Kevin Kiptoo',patient_number:'HLC-PAT-2021-00004',room:"Room 4"},
                {name: 'Charity Bii',patient_number:'HLC-PAT-2021-00005',room:"Room 5"}
            ]

        };
    },
    components:{
        ServiceUnitSelect,
    },

    methods: {
        patientItemClicked(patientItem) {
            console.log(patientItem)
        }
    },
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
    background-image: linear-gradient(315deg, #06a79e 74%,#6f5a7b 0% );
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

.user-areasb {
    background: #eff0f2;
    padding-left: 13px;
    padding-top: 5px;
    border-radius: 5px;
    margin-top: 7px;
    margin-right: 15px;
    color: black;
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
    color: white;
}

.content-area {
    height: 82vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    background: white;
    padding-bottom: 16px;
    padding-left: 5px;
    margin-top:8px;
    padding-right: 5px;
    border-radius: 5px;
}

.psm {
    display: inline-block;
    border-radius: 50px;
    box-shadow: 0px 0px 2px #888;
    height: 40px;
    width: 40px;
    text-align: center;
    position: relative;
    padding-bottom: 10px;
    position: relative;
}

#ico {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color: #06a79e;
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
  var Sidebar_default2 = __vue_component__13;

  // ../frontend/frontend/public/js/patient/pages/queue_management/core/components/TopBanner.vue
  var __vue_script__14 = {
    name: "TopBanner",
    data() {
      return {};
    },
    props: {
      announcedPatients: []
    },
    created() {
      this.blink("user-area");
    },
    computed: {},
    methods: {
      callPatient() {
        this.isVisible = 0;
        callPatientIn(this.details.queue_name).then((res) => {
          frappe.show_alert({
            message: __("Patient call announced"),
            indicator: "green"
          }, 5);
          this.isVisible = 1;
        });
      }
    }
  };
  var __vue_render__14 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _vm._l(_vm.announcedPatients, function(item) {
          return _c("b-col", {key: item.name, staticClass: "p user-area-top"}, [
            _c("b-row", [
              _c("b-col", {attrs: {cols: "10"}}, [
                _c("b-row", [
                  _c("b-col", [
                    _c("h1", {
                      staticStyle: {
                        float: "left",
                        "font-weight": "bold",
                        color: "#fff"
                      }
                    }, [
                      _vm._v("\n                                " + _vm._s(item.patient) + "\n                            ")
                    ])
                  ])
                ], 1),
                _vm._v(" "),
                _c("b-row", [
                  _c("b-col", [
                    _c("h5", {
                      staticStyle: {float: "left", color: "#fff"}
                    }, [
                      _vm._v("\n                                Proceed To Be Seen\n                            ")
                    ])
                  ])
                ], 1),
                _vm._v(" "),
                _c("b-row", [
                  _c("b-col", [
                    _c("h4", {
                      staticStyle: {
                        color: "#fff",
                        float: "left",
                        "text-transform": "uppercase",
                        "font-weight": "bold"
                      }
                    }, [
                      _vm._v("\n                                " + _vm._s(item.service_point_name) + "\n                            ")
                    ])
                  ])
                ], 1)
              ], 1),
              _vm._v(" "),
              _c("b-icon", {
                attrs: {
                  icon: "volume-up-fill",
                  variant: "light",
                  "font-scale": "2"
                }
              }),
              _vm._v(" "),
              _c("b-col")
            ], 1)
          ], 1);
        }),
        _vm._v(" "),
        _vm.announcedPatients.length < 1 ? _c("b-col", [_c("b-row", {staticStyle: {height: "135px"}})], 1) : _vm._e()
      ], 2),
      _vm._v(" "),
      _c("hr", {staticStyle: {"margin-top": "20px"}})
    ], 1);
  };
  var __vue_staticRenderFns__14 = [];
  __vue_render__14._withStripped = true;
  var __vue_inject_styles__14 = function(inject) {
    if (!inject)
      return;
    inject("data-v-9816b45c_0", {source: "\n.user-area-top {\n    background: #06a79e;\n    padding: 13px;\n    border-radius: 5px;\n    margin-top: 15px;\n    margin-left: 4px;\n    margin-right: 4px;\n    color: white;\n    animation: blink 2s linear infinite;\n}\nspan {\n    font-size: 25px;\n    font-family: cursive;\n    color: white;\n}\n@keyframes blink {\n0% {\n        opacity: 5;\n}\n50% {\n        opacity: .5;\n}\n100% {\n        opacity: 5;\n}\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/pages/queue_management/core/components/TopBanner.vue"], "names": [], "mappings": ";AA6EA;IACA,mBAAA;IACA,aAAA;IACA,kBAAA;IACA,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,YAAA;IACA,mCAAA;AACA;AAGA;IACA,eAAA;IACA,oBAAA;IACA,YAAA;AACA;AAEA;AACA;QACA,UAAA;AACA;AACA;QACA,WAAA;AACA;AACA;QACA,UAAA;AACA;AACA", "file": "TopBanner.vue", "sourcesContent": [`<template>
    <div>
        <b-row>
            <b-col v-for="item in announcedPatients" :key="item.name" class="p user-area-top">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h1 style="float:left;font-weight: bold;color:#fff;">
                                    {{ item.patient}}
                                </h1>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;color:#fff;">
                                    Proceed To Be Seen
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#fff;float:left;text-transform: uppercase;font-weight: bold;">
                                    {{item.service_point_name}}
                                </h4>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-icon icon="volume-up-fill" variant="light" font-scale="2"></b-icon>
                    <b-col> </b-col>
                </b-row>
            </b-col>
            <b-col v-if="announcedPatients.length<1">
                <b-row style="height:135px;background-image:;">
    
    
                </b-row>
            </b-col>
        </b-row>
    
        <hr style="margin-top:20px;">
    </div>
</template>

<script>
export default {
    name: "TopBanner",
    data() {
        return {};
    },
    props: {
        announcedPatients: [],
    },
    created() {
        this.blink('user-area');
    },
    computed: {

    },
    methods: {
        callPatient() {
            this.isVisible = 0;
            callPatientIn(this.details.queue_name).then(
                (res) => {
                    frappe.show_alert({
                        message: __('Patient call announced'),
                        indicator: 'green'
                    }, 5);
                    this.isVisible = 1;
                })
        },
    }

};
</script>

<style>
.user-area-top {
    background: #06a79e;
    padding: 13px;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 4px;
    margin-right: 4px;
    color: white;
    animation: blink 2s linear infinite;
}


span {
    font-size: 25px;
    font-family: cursive;
    color: white;
}

@keyframes blink {
    0% {
        opacity: 5;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 5;
    }
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
    <div>
        <b-row>
            <b-col v-for="item in announcedPatients" :key="item.name" class="p user-area-top">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h1 style="float:left;font-weight: bold;color:#fff;">
                                    {{ item.patient}}
                                </h1>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;color:#fff;">
                                    Proceed To Be Seen
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#fff;float:left;text-transform: uppercase;font-weight: bold;">
                                    {{item.service_point_name}}
                                </h4>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-icon icon="volume-up-fill" variant="light" font-scale="2"></b-icon>
                    <b-col> </b-col>
                </b-row>
            </b-col>
            <b-col v-if="announcedPatients.length<1">
                <b-row style="height:135px;background-image:;">
    
    
                </b-row>
            </b-col>
        </b-row>
    
        <hr style="margin-top:20px;">
    </div>
</template>

<script>
export default {
    name: "TopBanner",
    data() {
        return {};
    },
    props: {
        announcedPatients: [],
    },
    created() {
        this.blink('user-area');
    },
    computed: {

    },
    methods: {
        callPatient() {
            this.isVisible = 0;
            callPatientIn(this.details.queue_name).then(
                (res) => {
                    frappe.show_alert({
                        message: __('Patient call announced'),
                        indicator: 'green'
                    }, 5);
                    this.isVisible = 1;
                })
        },
    }

};
</script>

<style>
.user-area-top {
    background: #06a79e;
    padding: 13px;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 4px;
    margin-right: 4px;
    color: white;
    animation: blink 2s linear infinite;
}


span {
    font-size: 25px;
    font-family: cursive;
    color: white;
}

@keyframes blink {
    0% {
        opacity: 5;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 5;
    }
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
  var TopBanner_default = __vue_component__14;

  // ../frontend/frontend/public/js/patient/pages/queue_management/core/components/BottomContent.vue
  var __vue_script__15 = {
    name: "TopBanner",
    data() {
      return {};
    },
    props: {
      array1: [],
      array2: [],
      array3: [],
      array4: []
    },
    created() {
    },
    mounted() {
    },
    computed: {},
    methods: {}
  };
  var __vue_render__15 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", _vm._l(_vm.array1, function(item) {
        return _c("b-col", {key: item.name, staticClass: "p user-area"}, [
          _c("b-row", [
            _c("b-col", {attrs: {cols: "10"}}, [
              _c("b-row", [
                _c("b-col", [
                  _c("h1", {
                    staticClass: "lgheader",
                    staticStyle: {
                      float: "left",
                      "font-weight": "bold"
                    }
                  }, [
                    _vm._v("\n                                " + _vm._s(item.patient) + "\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col", [
                  _c("h5", {staticStyle: {float: "left"}}, [
                    _vm._v("\n                                Currently Being Seen\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col", [
                  _c("h4", {
                    staticStyle: {
                      color: "#06a79e",
                      float: "left",
                      "text-transform": "uppercase",
                      "font-weight": "bold"
                    }
                  }, [
                    _vm._v("\n                                " + _vm._s(item.service_point_name) + "\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("hr", {staticStyle: {"margin-top": "-5px"}}),
              _vm._v(" "),
              _vm._l(item.next_five, function(nextfiveitem) {
                return _c("b-row", {key: nextfiveitem.patient}, [
                  _c("b-col", [
                    _c("h4", {
                      staticStyle: {
                        float: "left",
                        "font-weight": "bold"
                      }
                    }, [
                      _vm._v("\n                                " + _vm._s(nextfiveitem["numbering"]) + ". " + _vm._s(nextfiveitem["patient"]) + "\n                            ")
                    ])
                  ])
                ], 1);
              })
            ], 2),
            _vm._v(" "),
            _c("b-col")
          ], 1)
        ], 1);
      }), 1),
      _vm._v(" "),
      _c("b-row", _vm._l(_vm.array2, function(item) {
        return _c("b-col", {key: item.name, staticClass: "p user-area"}, [
          _c("b-row", [
            _c("b-col", {attrs: {cols: "10"}}, [
              _c("b-row", [
                _c("b-col", [
                  _c("h4", {
                    staticStyle: {
                      float: "left",
                      "font-weight": "bold"
                    }
                  }, [
                    _vm._v("\n                                1. " + _vm._s(item.patient) + "\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col", [
                  _c("h5", {staticStyle: {float: "left"}}, [
                    _vm._v("\n                                Currently Being Seen\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col", [
                  _c("h4", {
                    staticStyle: {
                      color: "#06a79e",
                      float: "left",
                      "text-transform": "uppercase",
                      "font-weight": "bold"
                    }
                  }, [
                    _vm._v("\n                                " + _vm._s(item.service_point_name) + "\n                            ")
                  ])
                ])
              ], 1),
              _vm._v(" "),
              _c("hr", {staticStyle: {"margin-top": "-5px"}}),
              _vm._v(" "),
              _vm._l(item.next_five, function(nextfiveitem) {
                return _c("b-row", {key: nextfiveitem.patient}, [
                  _c("b-col", [
                    _c("h5", {
                      staticStyle: {
                        float: "left",
                        "font-weight": "bold"
                      }
                    }, [
                      _vm._v("\n                                " + _vm._s(nextfiveitem["numbering"]) + ". " + _vm._s(nextfiveitem["patient"]) + "\n                            ")
                    ])
                  ])
                ], 1);
              })
            ], 2),
            _vm._v(" "),
            _c("b-icon", {
              attrs: {
                icon: "info-circle",
                variant: "dark",
                "font-scale": "2"
              }
            }),
            _vm._v(" "),
            _c("b-col")
          ], 1)
        ], 1);
      }), 1)
    ], 1);
  };
  var __vue_staticRenderFns__15 = [];
  __vue_render__15._withStripped = true;
  var __vue_inject_styles__15 = function(inject) {
    if (!inject)
      return;
    inject("data-v-69a5724c_0", {source: "\n.user-area {\n    background: #eff0f2;\n    padding: 13px;\n    border-radius: 5px;\n    margin-top: 15px;\n    margin-left: 4px;\n    margin-right: 4px;\n    color: black;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/pages/queue_management/core/components/BottomContent.vue"], "names": [], "mappings": ";AAqHA;IACA,mBAAA;IACA,aAAA;IACA,kBAAA;IACA,gBAAA;IACA,gBAAA;IACA,iBAAA;IACA,YAAA;AACA", "file": "BottomContent.vue", "sourcesContent": [`<template>
    <div>
        <b-row>
            <b-col v-for="item in array1" :key="item.name" class="p user-area">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h1 class="lgheader" style="float:left;font-weight: bold;">
                                    {{item.patient}}
                                </h1>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;">
                                    Currently Being Seen
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#06a79e;float:left;text-transform: uppercase;font-weight: bold;">
                                    {{item.service_point_name}}
                                </h4>
                            </b-col>
                        </b-row>
                        <hr style="margin-top:-5px;">
                        <b-row v-for="nextfiveitem in item.next_five" :key="nextfiveitem.patient">
                            <b-col>
                                <h4 style="float:left;font-weight: bold;">
                                    {{nextfiveitem['numbering']}}. {{ nextfiveitem['patient']}}
                                </h4>
                            </b-col>
                        </b-row>
                    </b-col>
                    <!-- <b-icon icon="info-circle" variant="dark" font-scale="2"></b-icon> -->
                    <b-col> </b-col>
                </b-row>
            </b-col>
        </b-row>
    
        <b-row>
            <b-col v-for="item in array2" :key="item.name" class="p user-area">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h4 style="float:left;font-weight: bold;">
                                    1. {{ item.patient}}
                                </h4>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;">
                                    Currently Being Seen
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#06a79e;float:left;text-transform: uppercase;font-weight: bold;">
                                    {{item.service_point_name}}
                                </h4>
                            </b-col>
                        </b-row>
                        <hr style="margin-top:-5px;">
                        <b-row v-for="nextfiveitem in item.next_five" :key="nextfiveitem.patient">
                            <b-col>
                                <h5 style="float:left;font-weight: bold;">
                                    {{nextfiveitem['numbering']}}. {{ nextfiveitem['patient']}}
                                </h5>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-icon icon="info-circle" variant="dark" font-scale="2"></b-icon>
                    <b-col> </b-col>
                </b-row>
            </b-col>
        </b-row>
    
    
    </div>
</template>

<script>
export default {
    name: "TopBanner",
    data() {
        return {

        };
    },
    props: {
        array1: [],
        array2: [],
        array3: [],
        array4: [],
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {

    }

};
</script>

<style>
.user-area {
    background: #eff0f2;
    padding: 13px;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 4px;
    margin-right: 4px;
    color: black;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__15 = void 0;
  var __vue_module_identifier__15 = void 0;
  var __vue_is_functional_template__15 = false;
  function __vue_normalize__15(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-row>
            <b-col v-for="item in array1" :key="item.name" class="p user-area">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h1 class="lgheader" style="float:left;font-weight: bold;">
                                    {{item.patient}}
                                </h1>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;">
                                    Currently Being Seen
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#06a79e;float:left;text-transform: uppercase;font-weight: bold;">
                                    {{item.service_point_name}}
                                </h4>
                            </b-col>
                        </b-row>
                        <hr style="margin-top:-5px;">
                        <b-row v-for="nextfiveitem in item.next_five" :key="nextfiveitem.patient">
                            <b-col>
                                <h4 style="float:left;font-weight: bold;">
                                    {{nextfiveitem['numbering']}}. {{ nextfiveitem['patient']}}
                                </h4>
                            </b-col>
                        </b-row>
                    </b-col>
                    <!-- <b-icon icon="info-circle" variant="dark" font-scale="2"></b-icon> -->
                    <b-col> </b-col>
                </b-row>
            </b-col>
        </b-row>
    
        <b-row>
            <b-col v-for="item in array2" :key="item.name" class="p user-area">
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col>
                                <h4 style="float:left;font-weight: bold;">
                                    1. {{ item.patient}}
                                </h4>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h5 style="float:left;">
                                    Currently Being Seen
                                </h5>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h4 style="color:#06a79e;float:left;text-transform: uppercase;font-weight: bold;">
                                    {{item.service_point_name}}
                                </h4>
                            </b-col>
                        </b-row>
                        <hr style="margin-top:-5px;">
                        <b-row v-for="nextfiveitem in item.next_five" :key="nextfiveitem.patient">
                            <b-col>
                                <h5 style="float:left;font-weight: bold;">
                                    {{nextfiveitem['numbering']}}. {{ nextfiveitem['patient']}}
                                </h5>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-icon icon="info-circle" variant="dark" font-scale="2"></b-icon>
                    <b-col> </b-col>
                </b-row>
            </b-col>
        </b-row>
    
    
    </div>
</template>

<script>
export default {
    name: "TopBanner",
    data() {
        return {

        };
    },
    props: {
        array1: [],
        array2: [],
        array3: [],
        array4: [],
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {

    }

};
</script>

<style>
.user-area {
    background: #eff0f2;
    padding: 13px;
    border-radius: 5px;
    margin-top: 15px;
    margin-left: 4px;
    margin-right: 4px;
    color: black;
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
  var BottomContent_default = __vue_component__15;

  // ../frontend/frontend/public/js/patient/pages/queue_management/core/WorkingArea.vue
  var __vue_script__16 = {
    name: "WorkingArea",
    data() {
      return {
        announcedPatients: [],
        socket: null,
        array1: [],
        array2: [],
        array3: [],
        array4: []
      };
    },
    props: {},
    computed: {
      socketData() {
        return this.$store.getters["socket/getSocketData"];
      },
      selectedServiceUnit() {
        return this.$store.getters["serviceUnit/getSelectedServiceUnit"];
      }
    },
    components: {
      TopBanner: TopBanner_default,
      BottomContent: BottomContent_default
    },
    created() {
      this.$store.registerModule("socket", moduleSocket_default);
    },
    mounted() {
      const host = this.get_host(3e3);
      const socket = io.connect();
      this.socket = socket;
      let parent = this;
      socket.on("connect", () => {
        console.log("Connected");
      });
      this.socket.on("CallNewPatient", function(data) {
        parent.getPatientsCurrentlySeeingDoctor(data["service_unit"]);
        parent.getAnnouncedPatients(data["service_unit"], data["stage"]);
      });
    },
    watch: {
      socketData(socketData) {
        if (socketData.action === "off") {
          this.socket.off(socketData.event);
        } else if (socketData.action === "on") {
          this.socket.on(socketData.event, function() {
            console.log("subscribed to " + socketData.event);
          });
        }
      },
      selectedServiceUnit() {
        this.getPatientsCurrentlySeeingDoctor(this.selectedServiceUnit.service_unit);
      }
    },
    methods: {
      getPatientsCurrentlySeeingDoctor(service_unit) {
        getPatientsCurrentlySeeingDoctors(service_unit).then((res) => {
          this.patientsSeeingDoctors = res;
          this.generateArrayChunks();
        });
      },
      getAnnouncedPatients(service_unit, stage) {
        getAnnouncedPatients(service_unit).then((res) => {
          this.announcedPatients = res;
          if (stage == "Start") {
            var obj = this.announcedPatients[0];
          }
        });
      },
      ZiraVoiceCall(patient, service_point) {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[2];
        msg.voiceURI = "native";
        msg.volume = 1;
        msg.rate = 0.7;
        msg.pitch = 0.8;
        msg.text = "Patient number, " + patient + ", proceed to " + service_point;
        msg.lang = "en-US";
        speechSynthesis.speak(msg);
      },
      generateArrayChunks() {
        var chunk = 4;
        var array = this.patientsSeeingDoctors;
        this.array1 = array.slice(0, chunk);
        this.array2 = array.slice(chunk, chunk + 4);
        this.array3 = array.slice(chunk + 4, chunk + 4 + 4);
        this.array4 = array.slice(chunk + 4 + 4, chunk + 4 + 4 + 4);
      },
      onSocket(data) {
        console.log(data);
      },
      get_host: function(port = 3e3) {
        var host = window.location.origin;
        if (window.dev_server || true) {
          var parts = host.split(":");
          port = frappe.boot.socketio_port || port.toString() || "3000";
          if (parts.length > 2) {
            host = parts[0] + ":" + parts[1];
          }
          host = host + ":" + port;
        }
        return host;
      }
    }
  };
  var __vue_render__16 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "area-background"}, [
      _c("b-row", {staticClass: "text-center"}, [
        _c("b-col", {staticClass: "patient-inf", attrs: {id: "patient-inf"}}, [
          _c("b-card", {
            staticClass: "text-center",
            staticStyle: {
              height: "89vh",
              "margin-top": "15px",
              "margin-left": "10px",
              "margin-right": "10px",
              "margin-bottom": "10px"
            },
            attrs: {"no-body": ""}
          }, [
            _c("b-container", {staticStyle: {"margin-top": "5px"}}, [
              _c("top-banner", {
                attrs: {announcedPatients: _vm.announcedPatients}
              }),
              _vm._v(" "),
              _c("bottom-content", {
                attrs: {
                  array1: _vm.array1,
                  array2: _vm.array2,
                  array3: _vm.array3,
                  array4: _vm.array4
                }
              })
            ], 1)
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__16 = [];
  __vue_render__16._withStripped = true;
  var __vue_inject_styles__16 = function(inject) {
    if (!inject)
      return;
    inject("data-v-aefffa9e_0", {source: "\n.top-menu[data-v-aefffa9e] {\n    padding: 0px !important;\n}\n.section-margin-space[data-v-aefffa9e] {\n    margin-top: 3%;\n}\n.cardx[data-v-aefffa9e] {\n    box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%) !important;\n    transition: 0.3s;\n    border-radius: 7px !important;\n}\n.area-background[data-v-aefffa9e] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    background-image: linear-gradient(390deg, #6f5a7b 74%, #06a79e 0%);\n}\n.highest-card[data-v-aefffa9e] {\n    z-index: 1;\n}\n.notification[data-v-aefffa9e] {\n    width: 100%;\n}\n.psm[data-v-aefffa9e] {\n    display: inline-block;\n    border-radius: 50px;\n    box-shadow: 0px 0px 2px #888;\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    position: relative;\n    padding-bottom: 10px;\n    position: relative;\n}\n#ico[data-v-aefffa9e] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    display: block;\n    color: #06a79e;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/pages/queue_management/core/WorkingArea.vue"], "names": [], "mappings": ";AA8IA;IACA,uBAAA;AACA;AAEA;IACA,cAAA;AACA;AAEA;IACA,mDAAA;IACA,gBAAA;IACA,6BAAA;AACA;AAEA;IACA,4BAAA;IACA,6BAAA;IACA,kEAAA;AACA;AAEA;IACA,UAAA;AACA;AAEA;IACA,WAAA;AACA;AAEA;IACA,qBAAA;IACA,mBAAA;IACA,4BAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;IACA,oBAAA;IACA,kBAAA;AACA;AAEA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,WAAA;IACA,gCAAA;IACA,WAAA;IACA,YAAA;IACA,cAAA;IACA,cAAA;AACA", "file": "WorkingArea.vue", "sourcesContent": [`<template>
    <div class="area-background">
        <b-row class="text-center">
            <b-col class="patient-inf" id="patient-inf">
                <b-card style="height:89vh;margin-top:15px;margin-left:10px;margin-right:10px;margin-bottom:10px;" no-body class="text-center">
    
                    <b-container style="margin-top:5px;">
    
                        <top-banner :announcedPatients="announcedPatients" />
                        <bottom-content :array1="array1" :array2="array2" :array3="array3" :array4="array4" />
    
                    </b-container>
                </b-card>
            </b-col>
    
        </b-row>
    
    </div>
</template>

<script>
import TopBanner from "./components/TopBanner.vue";
import BottomContent from "./components/BottomContent.vue";
import { getPatientsCurrentlySeeingDoctors, getAnnouncedPatients } from "../../../../services/patient_chart/api";
import socketModule from "../../../../state/socket/moduleSocket.js";
export default {
    name: "WorkingArea",
    data() {
        return {
            announcedPatients: [],
            socket: null,
            array1: [],
            array2: [],
            array3: [],
            array4: [],
        }
    },
    props: {},
    computed: {
        socketData() {
            return this.$store.getters["socket/getSocketData"];
        },
        selectedServiceUnit() {
            return this.$store.getters['serviceUnit/getSelectedServiceUnit']
        },
    },
    components: {
        TopBanner,
        BottomContent,
    },
    created() {
        this.$store.registerModule("socket", socketModule);
    },
    mounted() {
        const host = this.get_host(3000);
        const socket = io.connect();
        this.socket = socket;
        let parent = this;
        socket.on("connect", () => {
            console.log("Connected");
        });
        this.socket.on("CallNewPatient", function(data) {
            parent.getPatientsCurrentlySeeingDoctor(data["service_unit"])
            parent.getAnnouncedPatients(data["service_unit"], data["stage"])
        });
    },
    watch: {
        socketData(socketData) {
            if (socketData.action === "off") {
                this.socket.off(socketData.event);
            } else if (socketData.action === "on") {
                this.socket.on(socketData.event, function() {
                    console.log("subscribed to " + socketData.event);
                });
            }
        },
        selectedServiceUnit() {
            this.getPatientsCurrentlySeeingDoctor(this.selectedServiceUnit.service_unit)
        }
    },
    methods: {
        getPatientsCurrentlySeeingDoctor(service_unit) {
            getPatientsCurrentlySeeingDoctors(service_unit).then(
                (res) => {
                    this.patientsSeeingDoctors = res
                    this.generateArrayChunks()
                })
        },
        getAnnouncedPatients(service_unit, stage) {
            getAnnouncedPatients(service_unit).then(
                (res) => {
                    this.announcedPatients = res
                    if (stage == "Start") {
                        var obj = this.announcedPatients[0];
                        // this.ZiraVoiceCall(obj.patient, obj.service_point_name)
                        // for (var i = 0, l = this.announcedPatients.length; i < l; i++) {
                        //     var obj = this.announcedPatients[i];
                        //     this.ZiraVoiceCall(obj.patient, obj.service_point_name)
                        // }
                    }
                })
        },
        ZiraVoiceCall(patient, service_point) {
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[2];
            msg.voiceURI = "native";
            msg.volume = 1;
            msg.rate = 0.7;
            msg.pitch = 0.8;
            msg.text = "Patient number, " + patient + ", proceed to " + service_point;
            msg.lang = 'en-US';
            speechSynthesis.speak(msg);
        },
        generateArrayChunks() {
            var chunk = 4;
            var array = this.patientsSeeingDoctors
            this.array1 = array.slice(0, chunk);
            this.array2 = array.slice(chunk, chunk + 4);
            this.array3 = array.slice(chunk + 4, chunk + 4 + 4);
            this.array4 = array.slice(chunk + 4 + 4, chunk + 4 + 4 + 4)
        },
        onSocket(data) {
            console.log(data);
        },
        get_host: function(port = 3000) {
            var host = window.location.origin;
            if (window.dev_server || true) {
                var parts = host.split(":");
                port = frappe.boot.socketio_port || port.toString() || "3000";
                if (parts.length > 2) {
                    host = parts[0] + ":" + parts[1];
                }
                host = host + ":" + port;
            }
            return host;
        },
    }
};
</script>

<style scoped>
.top-menu {
    padding: 0px !important;
}

.section-margin-space {
    margin-top: 3%;
}

.cardx {
    box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%) !important;
    transition: 0.3s;
    border-radius: 7px !important;
}

.area-background {
    padding-left: 0px !important;
    padding-right: 0px !important;
    background-image: linear-gradient(390deg, #6f5a7b 74%, #06a79e 0%);
}

.highest-card {
    z-index: 1;
}

.notification {
    width: 100%;
}

.psm {
    display: inline-block;
    border-radius: 50px;
    box-shadow: 0px 0px 2px #888;
    height: 40px;
    width: 40px;
    text-align: center;
    position: relative;
    padding-bottom: 10px;
    position: relative;
}

#ico {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color: #06a79e;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__16 = "data-v-aefffa9e";
  var __vue_module_identifier__16 = void 0;
  var __vue_is_functional_template__16 = false;
  function __vue_normalize__16(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div class="area-background">
        <b-row class="text-center">
            <b-col class="patient-inf" id="patient-inf">
                <b-card style="height:89vh;margin-top:15px;margin-left:10px;margin-right:10px;margin-bottom:10px;" no-body class="text-center">
    
                    <b-container style="margin-top:5px;">
    
                        <top-banner :announcedPatients="announcedPatients" />
                        <bottom-content :array1="array1" :array2="array2" :array3="array3" :array4="array4" />
    
                    </b-container>
                </b-card>
            </b-col>
    
        </b-row>
    
    </div>
</template>

<script>
import TopBanner from "./components/TopBanner.vue";
import BottomContent from "./components/BottomContent.vue";
import { getPatientsCurrentlySeeingDoctors, getAnnouncedPatients } from "../../../../services/patient_chart/api";
import socketModule from "../../../../state/socket/moduleSocket.js";
export default {
    name: "WorkingArea",
    data() {
        return {
            announcedPatients: [],
            socket: null,
            array1: [],
            array2: [],
            array3: [],
            array4: [],
        }
    },
    props: {},
    computed: {
        socketData() {
            return this.$store.getters["socket/getSocketData"];
        },
        selectedServiceUnit() {
            return this.$store.getters['serviceUnit/getSelectedServiceUnit']
        },
    },
    components: {
        TopBanner,
        BottomContent,
    },
    created() {
        this.$store.registerModule("socket", socketModule);
    },
    mounted() {
        const host = this.get_host(3000);
        const socket = io.connect();
        this.socket = socket;
        let parent = this;
        socket.on("connect", () => {
            console.log("Connected");
        });
        this.socket.on("CallNewPatient", function(data) {
            parent.getPatientsCurrentlySeeingDoctor(data["service_unit"])
            parent.getAnnouncedPatients(data["service_unit"], data["stage"])
        });
    },
    watch: {
        socketData(socketData) {
            if (socketData.action === "off") {
                this.socket.off(socketData.event);
            } else if (socketData.action === "on") {
                this.socket.on(socketData.event, function() {
                    console.log("subscribed to " + socketData.event);
                });
            }
        },
        selectedServiceUnit() {
            this.getPatientsCurrentlySeeingDoctor(this.selectedServiceUnit.service_unit)
        }
    },
    methods: {
        getPatientsCurrentlySeeingDoctor(service_unit) {
            getPatientsCurrentlySeeingDoctors(service_unit).then(
                (res) => {
                    this.patientsSeeingDoctors = res
                    this.generateArrayChunks()
                })
        },
        getAnnouncedPatients(service_unit, stage) {
            getAnnouncedPatients(service_unit).then(
                (res) => {
                    this.announcedPatients = res
                    if (stage == "Start") {
                        var obj = this.announcedPatients[0];
                        // this.ZiraVoiceCall(obj.patient, obj.service_point_name)
                        // for (var i = 0, l = this.announcedPatients.length; i < l; i++) {
                        //     var obj = this.announcedPatients[i];
                        //     this.ZiraVoiceCall(obj.patient, obj.service_point_name)
                        // }
                    }
                })
        },
        ZiraVoiceCall(patient, service_point) {
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[2];
            msg.voiceURI = "native";
            msg.volume = 1;
            msg.rate = 0.7;
            msg.pitch = 0.8;
            msg.text = "Patient number, " + patient + ", proceed to " + service_point;
            msg.lang = 'en-US';
            speechSynthesis.speak(msg);
        },
        generateArrayChunks() {
            var chunk = 4;
            var array = this.patientsSeeingDoctors
            this.array1 = array.slice(0, chunk);
            this.array2 = array.slice(chunk, chunk + 4);
            this.array3 = array.slice(chunk + 4, chunk + 4 + 4);
            this.array4 = array.slice(chunk + 4 + 4, chunk + 4 + 4 + 4)
        },
        onSocket(data) {
            console.log(data);
        },
        get_host: function(port = 3000) {
            var host = window.location.origin;
            if (window.dev_server || true) {
                var parts = host.split(":");
                port = frappe.boot.socketio_port || port.toString() || "3000";
                if (parts.length > 2) {
                    host = parts[0] + ":" + parts[1];
                }
                host = host + ":" + port;
            }
            return host;
        },
    }
};
</script>

<style scoped>
.top-menu {
    padding: 0px !important;
}

.section-margin-space {
    margin-top: 3%;
}

.cardx {
    box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%) !important;
    transition: 0.3s;
    border-radius: 7px !important;
}

.area-background {
    padding-left: 0px !important;
    padding-right: 0px !important;
    background-image: linear-gradient(390deg, #6f5a7b 74%, #06a79e 0%);
}

.highest-card {
    z-index: 1;
}

.notification {
    width: 100%;
}

.psm {
    display: inline-block;
    border-radius: 50px;
    box-shadow: 0px 0px 2px #888;
    height: 40px;
    width: 40px;
    text-align: center;
    position: relative;
    padding-bottom: 10px;
    position: relative;
}

#ico {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color: #06a79e;
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
  var WorkingArea_default = __vue_component__16;

  // ../frontend/frontend/public/js/patient/pages/queue_management/core/TopHeader.vue
  var __vue_script__17 = {
    name: "TopHeader",
    data() {
      return {
        notificationList: [],
        paths: []
      };
    },
    components: {
      ServiceUnitSelect: ServiceUnitSelect_default
    },
    watch: {
      $route(val) {
        const fullPath = val.fullPath;
        this.paths = fullPath.split("/").filter((item) => item && item.length > 0);
      }
    },
    created() {
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
  var __vue_render__17 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("header", {
        staticClass: "navbar navbar-expand sticky-top",
        attrs: {role: "navigation"}
      }, [
        _c("b-container", [
          _c("a", {
            staticClass: "navbar-brand navbar-home pull-left",
            attrs: {href: "/app", target: "_blank"}
          }, [
            _c("img", {
              staticClass: "app-logo",
              staticStyle: {width: "24px"},
              attrs: {
                src: "https://pbs.twimg.com/profile_images/987064489081262081/Wizy1vXs.jpg"
              }
            })
          ]),
          _vm._v(" "),
          _c("ul", {
            staticClass: "nav navbar-nav d-none d-sm-flex",
            attrs: {id: "navbar-breadcrumbs"}
          }, [
            _c("li", [
              _c("service-unit-select", {
                on: {"service-unit": _vm.setServiceUnit}
              })
            ], 1),
            _vm._v(" "),
            _vm._l(_vm.paths, function(path) {
              return _c("li", {key: path}, [
                _c("a", {
                  attrs: {
                    href: "/app/clinical-procedures",
                    target: "_blank"
                  }
                }, [_vm._v(_vm._s(path))])
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
                              attrs: {title: "Philip Ademba"}
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
                              _vm._v("\n                         All your notifications will be listed here\n                        ")
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
                    attrs: {
                      href: "https://erpnext.com/docs/user/manual"
                    }
                  }, [
                    _vm._v("\n                Go back to Home page\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {href: "https://discuss.erpnext.com"}
                  }, [
                    _vm._v("\n                Raise a support ticket\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      href: "https://github.com/frappe/erpnext/issues"
                    }
                  }, [
                    _vm._v("\n                Report an Issue\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.show_about()"
                    }
                  }, [_vm._v("\n                About\n              ")]),
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
                    attrs: {title: "Health practioner"}
                  }, [
                    _c("div", {
                      staticClass: "avatar-frame standard-image",
                      staticStyle: {
                        "background-color": "var(--dark-green-avatar-bg)",
                        color: "var(--dark-green-avatar-color)"
                      }
                    }, [
                      _c("i", {
                        staticClass: "fa fa-user-md",
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
                    attrs: {href: "/app/user-profile"}
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
                      onclick: "return frappe.ui.toolbar.setup_session_defaults()"
                    }
                  }, [
                    _vm._v("\n                Session Defaults\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.clear_cache()"
                    }
                  }, [_vm._v("\n                Reload\n              ")]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.view_website()"
                    }
                  }, [
                    _vm._v("\n                View Website\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.toggle_full_width()"
                    }
                  }, [
                    _vm._v("\n                Toggle Full Width\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return new frappe.ui.ThemeSwitcher().show()"
                    }
                  }, [
                    _vm._v("\n                Toggle Theme\n              ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {href: "/app/background_jobs"}
                  }, [
                    _vm._v("\n                Background Jobs\n              ")
                  ]),
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
  var __vue_staticRenderFns__17 = [];
  __vue_render__17._withStripped = true;
  var __vue_inject_styles__17 = function(inject) {
    if (!inject)
      return;
    inject("data-v-5abd9644_0", {source: "\n#page-patient-chart {\n  height: 100vh;\n}\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/pages/queue_management/core/TopHeader.vue"], "names": [], "mappings": ";AA6dA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;AACA", "file": "TopHeader.vue", "sourcesContent": ['<template>\n  <div>\n    <header class="navbar navbar-expand sticky-top" role="navigation">\n      <b-container>\n        <a\n          class="navbar-brand navbar-home pull-left"\n          href="/app"\n          target="_blank"\n        >\n          <img\n            class="app-logo"\n            style="width: 24px"\n            src="https://pbs.twimg.com/profile_images/987064489081262081/Wizy1vXs.jpg"\n          />\n        </a>\n        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">\n          <li>\n            <service-unit-select @service-unit="setServiceUnit"/>\n          </li>\n           <li v-for="path in paths" :key="path">\n            <a href="/app/clinical-procedures" target="_blank">{{path}}</a>\n          </li>\n        </ul>\n        <div class="collapse navbar-collapse justify-content-end hidden">\n          <form\n            class="form-inline fill-width justify-content-end"\n            role="search"\n            onsubmit="return false;"\n          >\n            <div class="input-group search-bar text-muted hidden">\n              <div class="awesomplete">\n                <input\n                  id="navbar-search"\n                  type="text"\n                  class="form-control"\n                  placeholder="Search or type a command (Ctrl + G)"\n                  aria-haspopup="true"\n                  autocomplete="off"\n                  aria-expanded="false"\n                  aria-owns="awesomplete_list_1"\n                  role="combobox"\n                  aria-activedescendant="awesomplete_list_1_item_0"\n                />\n                <ul role="listbox" id="awesomplete_list_1" hidden="">\n                  <li aria-selected="true">\n                    <a style="font-weight: normal"\n                      ><span>\n                        <span class="flex justify-between text-medium">\n                          <span class="ellipsis"\n                            >Search for <b>Patient C</b></span\n                          >\n                          <kbd>\u21B5</kbd>\n                        </span>\n                      </span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Open <mark>Patient C</mark>hart</span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New <mark>P</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Help on Search</span></a\n                    >\n                  </li>\n                </ul>\n                <span\n                  class="visually-hidden"\n                  role="status"\n                  aria-live="assertive"\n                  aria-atomic="true"\n                  hidden=""\n                  >9 results found</span\n                >\n              </div>\n              <span class="search-icon">\n                <svg class="icon icon-sm">\n                  <use xlink:href="#icon-search"></use>\n                </svg>\n              </span>\n            </div>\n          </form>\n          <ul class="navbar-nav">\n            <li\n              class="nav-item dropdown dropdown-notifications dropdown-mobile"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n                title=""\n                data-original-title="Notifications"\n              >\n                <div>\n                  <span class="notifications-seen">\n                    <svg class="icon icon-md">\n                      <use href="#icon-notification"></use>\n                    </svg>\n                  </span>\n                  <b-badge  v-if="notificationList.length>0"  class="notification-badge" variant="danger">{{\n                    notificationList.length\n                  }}</b-badge>\n                </div>\n\n                <span class="notifications-unseen">\n                  <svg class="icon icon-md">\n                    <use href="#icon-notification-with-indicator"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu notifications-list dropdown-menu-right"\n                role="menu"\n              >\n                <div class="notification-list-header">\n                  <div class="header-items">\n                    <ul\n                      class="notification-item-tabs nav nav-tabs"\n                      role="tablist"\n                    >\n                      <li\n                        class="notifications-category"\n                        id="notifications"\n                        data-toggle="collapse"\n                      >\n                        Notifications\n                      </li>\n                    </ul>\n                  </div>\n                  <div class="header-actions">\n                    <span v-if="notificationList.length >0"\n                      class="mark-all-read pull-right"\n                      data-action="mark_all_as_read"\n                      title=""\n                      data-original-title="Mark all as read"\n                      @click="clearNotification()"\n                    >\n                      <svg class="icon icon-sm" style="">\n                        <use class="" href="#icon-mark-as-read"></use>\n                      </svg>\n                    </span>\n                  </div>\n                </div>\n                <div class="notification-list-body">\n                  <div class="panel-notifications">\n                    <div style="display: block">\n                      <a\n                        v-for="notification in notificationList"\n                        :key="notification.name"\n                        class="recent-item notification-item unread"\n                        href="javascript:function() { return false; }"\n\n                        data-name="0a283f5b8f"\n                        @click="clearNotification(notification.name)"\n                      >\n                        <div class="notification-body">\n                          <span\n                            class="avatar avatar-medium user-avatar"\n                            title="Philip Ademba"\n                          >\n                            <div\n                              class="avatar-frame standard-image"\n                              style="\n                                background-color: var(--pink-avatar-bg);\n                                color: var(--pink-avatar-color);\n                              "\n                            >\n                              <i\n                                class="fa fa-comments-o"\n                                aria-hidden="true"\n                              ></i>\n                            </div>\n                          </span>\n                          <div class="message">\n                            <div>\n                              <b class="subject-title"\n                                >{{ notification.title }} :</b\n                              >\n                              {{ notification.message }}\n                            </div>\n                            <div class="notification-timestamp text-muted">\n                              <span\n                                class="frappe-timestamp"\n                                data-timestamp="2021-04-14 11:50:27.887714"\n                                title="14-04-2021 11:50:27"\n                                >53 minutes ago</span\n                              >\n                            </div>\n                          </div>\n                        </div>\n                        <div\n                          class="mark-as-read"\n                          title=""\n                          data-original-title="Mark as Read"\n                        ></div>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="panel-events">\n                    <div v-if="notificationList.length<1" >\n                      <div class="notification-null-state">\n                        <div class="text-center">\n                          <img\n                            src="/assets/frappe/images/ui-states/event-empty-state.svg"\n                            alt="Generic Empty State"\n                            class="null-state"\n                          />\n                          <div class="title">No notifications</div>\n                          <div class="subtitle">\n                           All your notifications will be listed here\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li\n              class="nav-item dropdown dropdown-message dropdown-mobile hidden"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n              >\n                <span>\n                  <svg class="icon icon-md">\n                    <use href="#icon-small-message"></use>\n                  </svg>\n                </span>\n              </a>\n            </li>\n            <li class="vertical-bar d-none d-sm-block"></li>\n            <li\n              class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block"\n            >\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                Help\n                <span>\n                  <svg class="icon icon-xs">\n                    <use href="#icon-small-down"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-help"\n                role="menu"\n              >\n                <div id="help-links"></div>\n                <div\n                  class="dropdown-divider documentation-links"\n                  style="display: none"\n                ></div>\n                <a\n                  class="dropdown-item"\n                  href="https://erpnext.com/docs/user/manual"\n                >\n                  Go back to Home page\n                </a>\n                <a class="dropdown-item" href="https://discuss.erpnext.com">\n                  Raise a support ticket\n                </a>\n                <a\n                  class="dropdown-item"\n                  href="https://github.com/frappe/erpnext/issues"\n                >\n                  Report an Issue\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_about()"\n                >\n                  About\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_shortcuts(event)"\n                >\n                  Step by step tutorial\n                </a>\n              </div>\n            </li>\n            <li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                <span class="avatar avatar-medium" title="Health practioner">\n                  <div\n                    class="avatar-frame standard-image"\n                    style="\n                      background-color: var(--dark-green-avatar-bg);\n                      color: var(--dark-green-avatar-color);\n                    "\n                  >\n                    <i class="fa fa-user-md" aria-hidden="true"></i>\n                  </div>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-user"\n                role="menu"\n              >\n                <a class="dropdown-item" href="/app/user-profile">\n                  My Profile\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.route_to_user()"\n                >\n                  My Settings\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.setup_session_defaults()"\n                >\n                  Session Defaults\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.clear_cache()"\n                >\n                  Reload\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.view_website()"\n                >\n                  View Website\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.toggle_full_width()"\n                >\n                  Toggle Full Width\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return new frappe.ui.ThemeSwitcher().show()"\n                >\n                  Toggle Theme\n                </a>\n                <a class="dropdown-item" href="/app/background_jobs">\n                  Background Jobs\n                </a>\n                <div class="dropdown-divider"></div>\n                <a class="dropdown-item" onclick="return frappe.app.logout()">\n                  Logout\n                </a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </b-container>\n    </header>\n  </div>\n</template>\n\n<script>\n// import notificationModule from "./../../state/notification/moduleNotification.js";\nimport ServiceUnitSelect from "../../../components/ServiceUnitSelect.vue";\nexport default {\n  name: "TopHeader",\n  data() {\n    return {\n      notificationList:[],\n      paths:[]\n    };\n  },\n  components:{\n    ServiceUnitSelect\n  },\n  // computed: {\n  //   notificationListd() {\n  //     return  [];\n  //   },\n  // },\n  watch: {\n    $route(val) {\n    \n     const fullPath = val.fullPath;\n     this.paths = fullPath.split("/").filter(item => item&& item.length >0);\n      \n    },\n  },\n  created() {},\n  mounted() {\n    const user = frappe.session.user;\n    this.getNotifications(user);\n  },\n  \n  methods: {\n    getNotifications(user) {\n      const payload = { ref: user };\n      // this.$store.dispatch("notification/fetchNotifications", payload);\n    },\n\n    clearNotification(name) {\n      const payload = { name, user: frappe.session.user };\n      // this.$store.dispatch("notification/clearNotification", payload);\n    },\n\n  },\n};\n</script>\n<style>\n#page-patient-chart {\n  height: 100vh;\n}\n\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__17 = void 0;
  var __vue_module_identifier__17 = void 0;
  var __vue_is_functional_template__17 = false;
  function __vue_normalize__17(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <header class="navbar navbar-expand sticky-top" role="navigation">\n      <b-container>\n        <a\n          class="navbar-brand navbar-home pull-left"\n          href="/app"\n          target="_blank"\n        >\n          <img\n            class="app-logo"\n            style="width: 24px"\n            src="https://pbs.twimg.com/profile_images/987064489081262081/Wizy1vXs.jpg"\n          />\n        </a>\n        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">\n          <li>\n            <service-unit-select @service-unit="setServiceUnit"/>\n          </li>\n           <li v-for="path in paths" :key="path">\n            <a href="/app/clinical-procedures" target="_blank">{{path}}</a>\n          </li>\n        </ul>\n        <div class="collapse navbar-collapse justify-content-end hidden">\n          <form\n            class="form-inline fill-width justify-content-end"\n            role="search"\n            onsubmit="return false;"\n          >\n            <div class="input-group search-bar text-muted hidden">\n              <div class="awesomplete">\n                <input\n                  id="navbar-search"\n                  type="text"\n                  class="form-control"\n                  placeholder="Search or type a command (Ctrl + G)"\n                  aria-haspopup="true"\n                  autocomplete="off"\n                  aria-expanded="false"\n                  aria-owns="awesomplete_list_1"\n                  role="combobox"\n                  aria-activedescendant="awesomplete_list_1_item_0"\n                />\n                <ul role="listbox" id="awesomplete_list_1" hidden="">\n                  <li aria-selected="true">\n                    <a style="font-weight: normal"\n                      ><span>\n                        <span class="flex justify-between text-medium">\n                          <span class="ellipsis"\n                            >Search for <b>Patient C</b></span\n                          >\n                          <kbd>\u21B5</kbd>\n                        </span>\n                      </span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Open <mark>Patient C</mark>hart</span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New <mark>P</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Help on Search</span></a\n                    >\n                  </li>\n                </ul>\n                <span\n                  class="visually-hidden"\n                  role="status"\n                  aria-live="assertive"\n                  aria-atomic="true"\n                  hidden=""\n                  >9 results found</span\n                >\n              </div>\n              <span class="search-icon">\n                <svg class="icon icon-sm">\n                  <use xlink:href="#icon-search"></use>\n                </svg>\n              </span>\n            </div>\n          </form>\n          <ul class="navbar-nav">\n            <li\n              class="nav-item dropdown dropdown-notifications dropdown-mobile"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n                title=""\n                data-original-title="Notifications"\n              >\n                <div>\n                  <span class="notifications-seen">\n                    <svg class="icon icon-md">\n                      <use href="#icon-notification"></use>\n                    </svg>\n                  </span>\n                  <b-badge  v-if="notificationList.length>0"  class="notification-badge" variant="danger">{{\n                    notificationList.length\n                  }}</b-badge>\n                </div>\n\n                <span class="notifications-unseen">\n                  <svg class="icon icon-md">\n                    <use href="#icon-notification-with-indicator"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu notifications-list dropdown-menu-right"\n                role="menu"\n              >\n                <div class="notification-list-header">\n                  <div class="header-items">\n                    <ul\n                      class="notification-item-tabs nav nav-tabs"\n                      role="tablist"\n                    >\n                      <li\n                        class="notifications-category"\n                        id="notifications"\n                        data-toggle="collapse"\n                      >\n                        Notifications\n                      </li>\n                    </ul>\n                  </div>\n                  <div class="header-actions">\n                    <span v-if="notificationList.length >0"\n                      class="mark-all-read pull-right"\n                      data-action="mark_all_as_read"\n                      title=""\n                      data-original-title="Mark all as read"\n                      @click="clearNotification()"\n                    >\n                      <svg class="icon icon-sm" style="">\n                        <use class="" href="#icon-mark-as-read"></use>\n                      </svg>\n                    </span>\n                  </div>\n                </div>\n                <div class="notification-list-body">\n                  <div class="panel-notifications">\n                    <div style="display: block">\n                      <a\n                        v-for="notification in notificationList"\n                        :key="notification.name"\n                        class="recent-item notification-item unread"\n                        href="javascript:function() { return false; }"\n\n                        data-name="0a283f5b8f"\n                        @click="clearNotification(notification.name)"\n                      >\n                        <div class="notification-body">\n                          <span\n                            class="avatar avatar-medium user-avatar"\n                            title="Philip Ademba"\n                          >\n                            <div\n                              class="avatar-frame standard-image"\n                              style="\n                                background-color: var(--pink-avatar-bg);\n                                color: var(--pink-avatar-color);\n                              "\n                            >\n                              <i\n                                class="fa fa-comments-o"\n                                aria-hidden="true"\n                              ></i>\n                            </div>\n                          </span>\n                          <div class="message">\n                            <div>\n                              <b class="subject-title"\n                                >{{ notification.title }} :</b\n                              >\n                              {{ notification.message }}\n                            </div>\n                            <div class="notification-timestamp text-muted">\n                              <span\n                                class="frappe-timestamp"\n                                data-timestamp="2021-04-14 11:50:27.887714"\n                                title="14-04-2021 11:50:27"\n                                >53 minutes ago</span\n                              >\n                            </div>\n                          </div>\n                        </div>\n                        <div\n                          class="mark-as-read"\n                          title=""\n                          data-original-title="Mark as Read"\n                        ></div>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="panel-events">\n                    <div v-if="notificationList.length<1" >\n                      <div class="notification-null-state">\n                        <div class="text-center">\n                          <img\n                            src="/assets/frappe/images/ui-states/event-empty-state.svg"\n                            alt="Generic Empty State"\n                            class="null-state"\n                          />\n                          <div class="title">No notifications</div>\n                          <div class="subtitle">\n                           All your notifications will be listed here\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li\n              class="nav-item dropdown dropdown-message dropdown-mobile hidden"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n              >\n                <span>\n                  <svg class="icon icon-md">\n                    <use href="#icon-small-message"></use>\n                  </svg>\n                </span>\n              </a>\n            </li>\n            <li class="vertical-bar d-none d-sm-block"></li>\n            <li\n              class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block"\n            >\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                Help\n                <span>\n                  <svg class="icon icon-xs">\n                    <use href="#icon-small-down"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-help"\n                role="menu"\n              >\n                <div id="help-links"></div>\n                <div\n                  class="dropdown-divider documentation-links"\n                  style="display: none"\n                ></div>\n                <a\n                  class="dropdown-item"\n                  href="https://erpnext.com/docs/user/manual"\n                >\n                  Go back to Home page\n                </a>\n                <a class="dropdown-item" href="https://discuss.erpnext.com">\n                  Raise a support ticket\n                </a>\n                <a\n                  class="dropdown-item"\n                  href="https://github.com/frappe/erpnext/issues"\n                >\n                  Report an Issue\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_about()"\n                >\n                  About\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_shortcuts(event)"\n                >\n                  Step by step tutorial\n                </a>\n              </div>\n            </li>\n            <li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                <span class="avatar avatar-medium" title="Health practioner">\n                  <div\n                    class="avatar-frame standard-image"\n                    style="\n                      background-color: var(--dark-green-avatar-bg);\n                      color: var(--dark-green-avatar-color);\n                    "\n                  >\n                    <i class="fa fa-user-md" aria-hidden="true"></i>\n                  </div>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-user"\n                role="menu"\n              >\n                <a class="dropdown-item" href="/app/user-profile">\n                  My Profile\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.route_to_user()"\n                >\n                  My Settings\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.setup_session_defaults()"\n                >\n                  Session Defaults\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.clear_cache()"\n                >\n                  Reload\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.view_website()"\n                >\n                  View Website\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.toggle_full_width()"\n                >\n                  Toggle Full Width\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return new frappe.ui.ThemeSwitcher().show()"\n                >\n                  Toggle Theme\n                </a>\n                <a class="dropdown-item" href="/app/background_jobs">\n                  Background Jobs\n                </a>\n                <div class="dropdown-divider"></div>\n                <a class="dropdown-item" onclick="return frappe.app.logout()">\n                  Logout\n                </a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </b-container>\n    </header>\n  </div>\n</template>\n\n<script>\n// import notificationModule from "./../../state/notification/moduleNotification.js";\nimport ServiceUnitSelect from "../../../components/ServiceUnitSelect.vue";\nexport default {\n  name: "TopHeader",\n  data() {\n    return {\n      notificationList:[],\n      paths:[]\n    };\n  },\n  components:{\n    ServiceUnitSelect\n  },\n  // computed: {\n  //   notificationListd() {\n  //     return  [];\n  //   },\n  // },\n  watch: {\n    $route(val) {\n    \n     const fullPath = val.fullPath;\n     this.paths = fullPath.split("/").filter(item => item&& item.length >0);\n      \n    },\n  },\n  created() {},\n  mounted() {\n    const user = frappe.session.user;\n    this.getNotifications(user);\n  },\n  \n  methods: {\n    getNotifications(user) {\n      const payload = { ref: user };\n      // this.$store.dispatch("notification/fetchNotifications", payload);\n    },\n\n    clearNotification(name) {\n      const payload = { name, user: frappe.session.user };\n      // this.$store.dispatch("notification/clearNotification", payload);\n    },\n\n  },\n};\n</script>\n<style>\n#page-patient-chart {\n  height: 100vh;\n}\n\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n</style>\n';
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
  var TopHeader_default2 = __vue_component__17;

  // ../frontend/frontend/public/js/services/doctype/meta.js
  var api6 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
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
  var getDoctypeWithMeta = (payload) => api6({
    method: "clinical.api.doctype.meta.get_doctype_with_meta",
    args: {payload}
  });
  var getDoctypeWithMetaSlim = (payload) => api6({
    method: "clinical.api.doctype.meta.get_doctype_with_meta_slim",
    args: {payload}
  });
  var searchDoctype = (payload) => apix({
    method: "frappe.desk.search.search_link",
    args: {payload}
  });

  // ../frontend/frontend/public/js/services/doctype/list.js
  var createDoctype = (payload) => api6({
    method: "mtrh_dev.api.supplier-portal.base.base.save_form_data",
    args: {payload}
  });

  // ../frontend/frontend/public/js/html/doctype/ChildTable.vue
  var __vue_script__18 = {
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
  var __vue_render__18 = function() {
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
  var __vue_staticRenderFns__18 = [];
  __vue_render__18._withStripped = true;
  var __vue_inject_styles__18 = function(inject) {
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
  var __vue_scope_id__18 = "data-v-1c330300";
  var __vue_module_identifier__18 = void 0;
  var __vue_is_functional_template__18 = false;
  function __vue_normalize__18(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var ChildTable_default = __vue_component__18;

  // ../frontend/frontend/public/js/html/doctype/DocField.vue
  var __vue_script__19 = {
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
  var __vue_render__19 = function() {
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
  var __vue_staticRenderFns__19 = [];
  __vue_render__19._withStripped = true;
  var __vue_inject_styles__19 = function(inject) {
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
  var __vue_scope_id__19 = "data-v-f42a2350";
  var __vue_module_identifier__19 = void 0;
  var __vue_is_functional_template__19 = false;
  function __vue_normalize__19(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var DocField_default = __vue_component__19;

  // ../frontend/frontend/public/js/html/doctype/DoctypeRender.vue
  var __vue_script__20 = {
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
  var __vue_render__20 = function() {
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
  var __vue_staticRenderFns__20 = [];
  __vue_render__20._withStripped = true;
  var __vue_inject_styles__20 = function(inject) {
    if (!inject)
      return;
    inject("data-v-88b8b55c_0", {source: '\n.card[data-v-88b8b55c] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n.head-toggle[data-v-88b8b55c] {\n  outline: 0;\n}\n.header[data-v-88b8b55c] {\n  background: transparent;\n}\n.card-header[data-v-88b8b55c] {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/html/doctype/DoctypeRender.vue"], "names": [], "mappings": ";AAoQA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;AAEA;EACA,UAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA;;wCAEA;EACA,6CAAA;AACA", "file": "DoctypeRender.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card\n          :title="section.name"\n          v-if="section.fields.length > 0 && !section.collapsible"\n        >\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field\n                  :docField="field"\n                  @childUpdated="childUpdated"\n                  :doc="doctype"\n                  :readOnly="readOnly"\n                />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n\n        <b-card\n          v-else-if="section.fields.length > 0 && section.collapsible"\n          class="mb-2"\n        >\n          <b-card-header header-tag="header" class="p-1 header" role="tab">\n            <div\n              class="head-toggle"\n              @click="section.collapsed = !section.collapsed"\n            >\n              <b-row>\n                <b-col cols="10">\n                  <h5 style="margin: 0">{{ section.name }}</h5>\n                </b-col>\n                <b-col cols="2">\n                  <span\n                    ><i\n                      class="toggler pull-right ml-4 fa"\n                      v-bind:class="section.collapsed ? iconUp : iconDown"\n                      aria-hidden="true"\n                    ></i>\n                  </span>\n                </b-col>\n              </b-row>\n            </div>\n          </b-card-header>\n          <b-collapse\n            v-model="section.collapsed"\n            id="accordion-1"\n            role="tabpanel"\n          >\n            <b-card-body>\n              <b-row class="mt-2">\n                <b-col\n                  :cols="getWidth(field)"\n                  v-for="field in section.fields"\n                  :key="field"\n                >\n                  <doc-field\n                    :docField="field"\n                    :doc="doctype"\n                    @childUpdated="childUpdated"\n                    :readOnly="readOnly"\n                  />\n                </b-col>\n              </b-row>\n            </b-card-body>\n          </b-collapse>\n        </b-card>\n      </b-col>\n    </b-row>\n    <b-row>\n      <b-button v-if="!readOnly" variant="primary" @click="create()">\n        create</b-button\n      >\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "./../../services/doctype/meta.js";\nimport { createDoctype } from "./../../services/doctype/list.js";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n      readOnly: false,\n      iconUp: "fa-angle-up",\n      iconDown: "fa-angle-down",\n      collapsed: false,\n      allowedFields: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {\n    this.isReadonly = this.readOnly;\n  },\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: null },\n    fields: { type: Array, default: [] },\n    refresh: { type: String, required: false },\n  },\n  methods: {\n    loadDoctype() {\n      //  frappe.show_alert("loading form..", 5);\n      if (window.currentDoctype) {\n        this.doctypeInput = window.currentDoctype;\n      }\n      if (window.currentDoctypeReference) {\n        this.doc_ref = window.currentDoctypeReference;\n      }\n\n      if (this.doc_ref) {\n        this.readOnly = true;\n      }\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        if (data.allowedFields && data.allowed_fields.allowed_fields) {\n          this.allowedFields = data.allowed_fields.allowed_fields;\n        }\n\n        this.doctype = data.data;\n        if (window.currentDoctype) {\n          this.doctype.doctype = window.currentDoctype;\n        }\n\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      let checkList = this.allowedFields\n        .filter((x) => x.active)\n        .map((v) => v.field_name);\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (\n              checkList.indexOf(item.fieldname) > -1 ||\n              checkList.length == 0\n            ) {\n              currentSection.fields.push(item);\n            }\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          currentSection.collapsed = false;\n          currentSection.collapsible = item.collapsible;\n        }\n      });\n\n      if (this.sections.length === 0) {\n        currentSection = { fields: [], name: "" };\n        currentSection.collapsed = false;\n        currentSection.collapsible = false;\n\n        fields.forEach((item) => {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (checkList.indexOf(item.fieldname) > -1) {\n              currentSection.fields.push(item);\n            }\n          }\n        });\n\n        this.sections.push(currentSection);\n      }\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n\n      if (stringItem.startsWith("section_break")) {\n        return null;\n      }\n\n      if (stringItem.startsWith("sb_")) {\n        stringItem = stringItem.replace("_sb", "");\n      }\n\n      stringItem = stringItem.replaceAll("section_break", "section");\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text Editor") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n    childUpdated(val) {\n      if (this.doctype[val.fieldname] !== val.val) {\n        this.$set(this.doctype, val.fieldname, val.val);\n      }\n    },\n    create() {\n      createDoctype(this.doctype).then((data) => {});\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n    refreshed(val) {\n      this.loadDoctype();\n    },\n    doc_ref(vale){\n      this.loadDoctype();\n    }\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.head-toggle {\n  outline: 0;\n}\n.header {\n  background: transparent;\n}\n.card-header {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__20 = "data-v-88b8b55c";
  var __vue_module_identifier__20 = void 0;
  var __vue_is_functional_template__20 = false;
  function __vue_normalize__20(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var DoctypeRender_default = __vue_component__20;

  // ../frontend/frontend/public/js/services/forms/builder.js
  var api7 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var fetch = ({method, args = {}}) => new Promise((resolve, reject) => frappe.call({method, type: "GET", args, callback: resolve}));
  var getFormConfiguration = ({name = ""}) => fetch({
    method: "clinical.api.forms.form_builder.get_form_configuration",
    args: {
      name
    }
  }).then(({message}) => message);
  var saveFormData = ({formData}) => api7({
    method: "clinical.api.forms.form_builder.save_form_data",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);
  var updateFormData = ({formData}) => api7({
    method: "clinical.api.forms.form_builder.update_form_data",
    args: {
      form_data: formData
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/forms/Frm.vue
  var __vue_script__21 = {
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
          const formName = frappe.get_route()[2];
          this.tableName = formName.split("-")[1];
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
        saveFormData(formData).then((saved) => {
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
        saveFormData({formData}).then((saved) => {
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
        const formName = frappe.get_route()[2];
        this.tableName = formName.split("-")[1];
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
          saveFormData({formData}).then((saved) => {
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
  var __vue_render__21 = function() {
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
  var __vue_staticRenderFns__21 = [];
  __vue_render__21._withStripped = true;
  var __vue_inject_styles__21 = function(inject) {
    if (!inject)
      return;
    inject("data-v-74881128_0", {source: '\n.spacer[data-v-74881128] {\n  margin-top: 10px;\n}\n.space-right[data-v-74881128] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-74881128] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn[data-v-74881128] {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5[data-v-74881128] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-74881128] {\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n  width:100% !important;\n}\n.white-text[data-v-74881128] {\n  color: white;\n  margin-left: 10px;\n}\n.form-border[data-v-74881128] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-74881128] {\n  padding-bottom: 50px;\n  /* padding-right: 50px; */\n}\n.main-page[data-v-74881128] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-74881128] {\n  margin-top: 20px;\n}\n.card[data-v-74881128] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-74881128]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-74881128] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-74881128] {\n  background-color: white;\n  border-radius: 10px;\n}\n.space-left[data-v-74881128] {\n  margin-left: 8px;\n}\n.ref-field-input[data-v-74881128] {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width[data-v-74881128] {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding[data-v-74881128] {\n  padding-left: 15px;\n}\n.upper-case[data-v-74881128] {\n  text-transform: uppercase;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/Frm.vue"], "names": [], "mappings": ";AAikBA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,cAAA;AACA;AACA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;AACA;AACA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,yBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,yBAAA;AACA", "file": "Frm.vue", "sourcesContent": ['<template>\n\n  <div style="width:100% !important">\n    <b-overlay  style="width:100% !important"\n      :show="(isShowOverlay && !isReadonly) || isReadonly"\n      :opacity="opacity"\n      no-center\n      rounded="sm"\n    >\n\n      <b-container class="main-page mb-4"  style="width:100% !important">\n        <div class="spacer-left-5">\n\n          <b-row>\n            <div class="render-form row">\n              <b-row\n                class="save-btn mb-2"\n                style="width:100%"\n                v-if="formData && !isReadonly"\n              >\n                <b-col cols="8">\n                  <h3 class="ml-2 upper-case">{{ currentFormName }}</h3>\n                </b-col>\n                <b-col cols="4" class="pull-right">\n                  <b-button-group class="pull-right">\n                    <b-button\n                      v-if="draftForm.name"\n                      variant="primary"\n                      class="white-text pull-right"\n                      @click="saveDoctype()"\n                    >\n                      <i class="fa fa-save"></i> Save\n                    </b-button>\n                  </b-button-group>\n                </b-col>\n              </b-row>\n\n              <FormRenderer\n                style="width:100% !important"\n                v-if="renderComponent"\n                :form-configuration="formData"\n                :parent="draftForm.name || parent"\n                :reference="reference"\n                v-model="formInputData"\n              />\n            </div>\n          </b-row>\n\n          <b-modal id="modal-id-1" ref="save_modal" size="sm" hide-footer>\n            <template #modal-title> Confirm save form data </template>\n            <b-row class="modal-padding" id="modal-body">\n\n              <b-col :cols="12" ref="doctype" class="ref-field-input">\n              </b-col>\n\n              <b-col\n                :cols="12"\n                v-show="selectedDoctype"\n                ref="docId"\n                id="ref-field"\n                class="ref-field-input"\n              />\n\n              <b-col :cols="12" id="form" class="ref-field-input" />\n            </b-row>\n\n            <b-button class="mt-3 btn btn-primary" block @click="initialSave()"\n              >Save</b-button\n            >\n          </b-modal>\n\n        </div>\n      </b-container>\n      <template #overlay>\n        <div class="text-center">\n          <b-button\n            v-if="\n              (!draftForm.name && formData && !isReadonly) ||\n                (!draftForm.name && isReadonly && isSaveOnly)\n            "\n            variant="primary"\n            class="white-text pull-right mr-5 mt-3"\n            size="sm"\n            @click="showModal()"\n          >\n            <i class="fa fa-edit"></i> Click to start\n          </b-button>\n\n          <b-button\n            v-if="isSaveOnly && draftForm.name && isReadonly"\n            variant="primary"\n            size="sm"\n            class="white-text pull-right mr-5 mt-3"\n            @click="saveDoctype()"\n          >\n            <i class="fa fa-save"></i> Save\n          </b-button>\n        </div>\n      </template>\n    </b-overlay>\n  </div>\n</template>\n<script>\nimport {\n  getFormConfiguration,\n  saveFormData,\n  updateFormData,\n} from "../services/forms/builder.js";\n\n\nexport default {\n  name: "FormRenderView",\n\n  data: function() {\n    return {\n      some_data: "To",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      tableName: "",\n      configuration: {},\n      draftForm: {},\n      formData: null,\n      formName: null,\n      selectedItem: null,\n      formInputData: null,\n      originalConfig: null,\n      changeLog: [],\n      savedDocument: null,\n      allFormConfigurationData: null,\n      renderComponent: true,\n      reference:{},\n      mappedDoctypeName: null, \n    };\n  },\n  props: {\n    selectedDoctype: { type: String },\n    selectedDoctypeReference: { type: String },\n    currentFormName: { type: String },\n    patient: { type: Object },\n    dataInput: { type: Object },\n    prePopulate: { type: Object },\n    isReadonly: { type: Boolean, default: false },\n    isSaveOnly: { type: Boolean, default: false },\n    hasOwner: { type: Boolean, default: false },\n    powerThrough: { type: Boolean, default: false },\n    parent: String,\n  },\n  watch: {\n    prePopulate(val){\n      this.dataPrepoulate(this.formData)    \n    },\n    dataInput(newVal) {\n      this.setValues(newVal);\n    },\n\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        keys = Object.keys(newVal);\n        keys.forEach((key) => {\n          this.formInputData[`${key}`] = newVal[`${key}`];\n        });\n\n        this.formData = conf;\n      }\n    },\n    selectedDoctype(doctype) {\n      if (doctype) {\n        this.makeDoctypeItemControl(doctype);\n      }\n    },\n    currentFormName(name) {\n      if (name) {\n        this.getForm(name);\n      }\n    },\n\n  },\n  methods: {\n    forceRerender() {\n      this.renderComponent = false;\n\n      this.$nextTick(() => {\n        this.renderComponent = true;\n      });\n    },\n    populate() {\n      this.setValues(this.dataInput);\n    },\n    dataPrepoulate(configuration) {\n      if (this.prePopulate) {\n        const keys = Object.keys(this.prePopulate);\n        const controlValues = Object.values(configuration.controls);\n        const transformedData = {};\n        keys.forEach((key) => {\n          const currentControl = controlValues.find(\n            (control) => control.mappedField === key\n          );\n          if (currentControl) {\n            const updatedKey = currentControl.name;\n            transformedData[updatedKey] = this.prePopulate[key];\n          }\n        });\n\n        this.dataInput = transformedData;\n        this.draftForm = { name: this.prePopulate.name };\n      }\n    },\n    clearData() {\n      const val = {};\n      const keys = Object.keys(this.formInputData);\n      keys.forEach((key) => {\n        val[key] = "";\n      });\n\n      this.setValues(val);\n    },\n\n    setValues(val) {\n      this.$set(this, "formInputData", val);\n    },\n    getFormData() {\n      if (!this.currentFormName) {\n        const formName = frappe.get_route()[2];\n        this.tableName = formName.split("-")[1];\n        this.showModal();\n      } else {\n        if (!this.selectedDoctype || !this.selectedDoctypeReference) {\n          this.showModal();\n        } else {\n          this.save();\n        }\n      }\n    },\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      if (this.hasOwner) {\n        this.$refs["save_modal"].show();\n      } else if (!this.draftForm.name) {\n        this.initialSave();\n      } else {\n        this.save();\n      }\n    },\n    clear() {\n      this.formData = null;\n      this.formData = this.originalConfig;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "DocType",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    get_new_frm(_frm) {\n      const doctype = "Patient";\n      const page = $("#form");\n\n      const layout = new frappe.ui.form.Layout({\n        parent: page,\n        doctype: doctype,\n        doctype_layout: null,\n        frm: {},\n        with_dashboard: false,\n        card_layout: true,\n      });\n      layout.make();\n      console.log(layout);\n\n      return frm;\n    },\n    makeDoctypeItemControl(doctype) {\n      const div = $("#ref-field");\n      div.empty();\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference Id"),\n          fieldtype: "Link",\n          fieldname: "itemControl",\n          options: doctype,\n          placeholder: __("Reference Id"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctypeReference = this.value;\n            }\n          },\n        },\n        parent: this.$refs["docId"],\n        render_input: true,\n      });\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    saveForm(formData) {\n    \n      this.hideModal();\n      saveFormData(formData).then((saved) => {\n        frappe.show_alert("Form Saved " + saved.name, 5);\n      \n        this.formData = null;\n        this.setValues({});\n        this.selectedDoctype = null;\n        this.selectedDoctypeReference = null;\n        this.sendToTimeline(\n          this.patient.patient,\n          "Form Repository",\n          saved.name,\n          saved.owner\n        );\n      });\n    },\n    initialSave() {\n      this.hideModal();\n      let form_content = "{}";\n      const form_name = this.formName;\n      const reference_doctype = this.selectedDoctype;\n      const reference_doctype_id = this.selectedDoctypeReference;\n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        form_content,\n        form_name,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Initial",\n      };\n      saveFormData({ formData }).then((saved) => {\n        this.draftForm = saved;\n        if (this.powerThrough) {\n          this.saveDoctype();\n        }\n      });\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        this.allFormConfigurationData = config;\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.dataPrepoulate(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    navigateToList() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n    },\n\n    sendToTimeline(\n      patient,\n      reference_doctype,\n      reference_name,\n      reference_owner\n    ) {\n     \n      let formData = {\n        reference_doctype,\n        reference_name,\n        doctype: "Patient Medical Record",\n        patient,\n        status: "Open",\n        reference_owner,\n      };\n\n      saveFormData({ formData }).then((saved) => {\n        frappe.show_alert("Timeline updated", 5);\n      });\n    },\n    saveDoctype() {\n      this.$bvModal\n        .msgBoxConfirm("Are you sure you want to save the changes?")\n        .then((value) => {\n          if (value) {\n            alert("SAving to db")\n            this.saveDoctypeToDb();\n          }\n          this.$bvModal.hide(\'add_l_modal\')\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n    saveDoctypeToDb() {  \n      if (this.formData.formConfig.mappedDoctype) {\n        const keys = Object.keys(this.formInputData);\n        let formData = { doctype: this.formData.formConfig.mappedDoctype };\n\n        keys.forEach((key) => {\n          if (this.formData.controls[key]) {\n            const control = this.formData.controls[key];\n            if (\n              control &&\n              (control.type === "radio" ||\n                control.type === "dropDown" ||\n                control.type === "checkbox")\n            ) {\n              if (control.items.length) {\n                const erpValueObject = control.items.find(\n                  (item) => item.value === this.formInputData[key]\n                );\n                const field = this.formData.controls[key].mappedField;\n                if (field) {\n                  formData[field] = erpValueObject.erpValue;\n                }\n              }\n            } else {\n              const field = this.formData.controls[key].mappedField;\n              if (field) {\n                formData[field] = this.formInputData[key];\n              }\n            }\n          } else if (Array.isArray(this.formInputData[key])) {\n            formData[key] = this.formInputData[key];\n          }\n\n\n          this.allFormConfigurationData.context_item.forEach((item) => {\n            formData[item.key] = this.context[item.value];\n          });\n\n            if(this.allFormConfigurationData.extras && this.allFormConfigurationData.extras.length ){\n            this.allFormConfigurationData.extras.forEach((item) => { \n                      \n                        formData[item.key] = item.value;\n                      });\n            }\n           \n        });\n        alert(JSON.stringify(formData))\n\n        saveFormData({ formData }).then((saved) => {\n          alert(JSON.stringify(saved))\n          this.mappedDoctypeName = saved.name;\n          frappe.show_alert("Saved", 3);\n          this.savedDocument = saved;\n          this.getFormData();\n        });\n      } else {\n           console.log("FRM", "getFormData");\n        this.getFormData();\n      }\n    },\n    populateChildTableReference(){\n      this.reference = {doctype:this.selectedDoctype,doctype_id:this.selectedDoctypeReference  }\n    },\n    save() {\n      this.hideModal();\n      let form_content = this.formInputData;\n      form_content = JSON.stringify(form_content);\n      const form_name = this.formName;\n      const reference_doctype =\n        this.allFormConfigurationData.owner_doctype ||\n        this.selectedDoctype ||\n        this.formData.formConfig.mappedDoctype;\n      let reference_doctype_id = null;\n      if (this.allFormConfigurationData.context_reference) {\n        reference_doctype_id =\n          this.context[this.allFormConfigurationData.context_owner_name] ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      } else {\n        reference_doctype_id =\n          this.allFormConfigurationData.owner_doctype_reference ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      }\n\n      let name = null;\n\n      if (this.draftForm && this.draftForm.name) {\n        name = this.draftForm.name;\n      }\n    \n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        name,\n        form_content,\n        form_name,\n        mapped_doctype_name : this.mappedDoctypeName,\n        mapped_doctype: this.formData.formConfig.mappedDoctype,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Completed",\n        completed:1,\n      };\n\n       if(this.encounter  && this.encounter.name){\n         formData.patient_encounter =this.encounter.name;      \n      };\n\n       alert(JSON.stringify(formData))\n\n      updateFormData({ formData }).then((result) => {\n        alert("Finale")\n        frappe.show_alert("Form updated " + result.name, 5);\n        this.draftForm = {};\n        this.clearData();\n        this.forceRerender();\n        this.$emit("callback", { formData, document: this.savedDocument });\n      });\n    },\n  },\n  computed: {\n    context() {\n      return this.$store.getters["context/getContext"];\n    },\n    isShowOverlay() {\n      return !this.draftForm.name;\n    },\n    opacity() {\n      return this.isReadonly ? 0 : 0.2;\n    },\n     encounter() {\n      return this.$store.getters["encounter/getEncounter"];\n    },\n  },\n  created() {\n    \n    if (this.currentFormName) {\n      this.getForm(this.currentFormName);\n    }\n    this.populateChildTableReference()\n \n  },\n\n  mounted() {\n\n    this.$formEvent.$on("submit", (value) => {});\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      if (modalId === "modal-id-1") {\n        this.makeSelectDoctypeControl();\n      }\n    });\n    const context = this;\n    setTimeout(() => {\n      context.populate();\n    }, 1000);\n  },\n  components: {},\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n  width:100% !important;\n}\n.white-text {\n  color: white;\n  margin-left: 10px;\n}\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  /* padding-right: 50px; */\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.space-left {\n  margin-left: 8px;\n}\n\n.ref-field-input {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding {\n  padding-left: 15px;\n}\n.upper-case {\n  text-transform: uppercase;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__21 = "data-v-74881128";
  var __vue_module_identifier__21 = void 0;
  var __vue_is_functional_template__21 = false;
  function __vue_normalize__21(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var Frm_default = __vue_component__21;

  // ../frontend/frontend/public/js/patient/components/doctype/ChildTable.vue
  var __vue_script__22 = {
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
  var __vue_render__22 = function() {
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
  var __vue_staticRenderFns__22 = [];
  __vue_render__22._withStripped = true;
  var __vue_inject_styles__22 = function(inject) {
    if (!inject)
      return;
    inject("data-v-33aa60c3_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "ChildTable.vue"}, media: void 0});
  };
  var __vue_scope_id__22 = "data-v-33aa60c3";
  var __vue_module_identifier__22 = void 0;
  var __vue_is_functional_template__22 = false;
  function __vue_normalize__22(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  function __vue_create_injector__22() {
    const styles = __vue_create_injector__22.styles || (__vue_create_injector__22.styles = {});
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
  var __vue_component__22 = /* @__PURE__ */ __vue_normalize__22({render: __vue_render__22, staticRenderFns: __vue_staticRenderFns__22}, __vue_inject_styles__22, __vue_script__22, __vue_scope_id__22, __vue_is_functional_template__22, __vue_module_identifier__22, false, __vue_create_injector__22, void 0, void 0);
  var ChildTable_default2 = __vue_component__22;

  // ../frontend/frontend/public/js/patient/components/doctype/DocField.vue
  var __vue_script__23 = {
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
  var __vue_render__23 = function() {
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
  var __vue_staticRenderFns__23 = [];
  __vue_render__23._withStripped = true;
  var __vue_inject_styles__23 = function(inject) {
    if (!inject)
      return;
    inject("data-v-3679bd5a_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "DocField.vue"}, media: void 0});
  };
  var __vue_scope_id__23 = void 0;
  var __vue_module_identifier__23 = void 0;
  var __vue_is_functional_template__23 = false;
  function __vue_normalize__23(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  function __vue_create_injector__23() {
    const styles = __vue_create_injector__23.styles || (__vue_create_injector__23.styles = {});
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
  var __vue_component__23 = /* @__PURE__ */ __vue_normalize__23({render: __vue_render__23, staticRenderFns: __vue_staticRenderFns__23}, __vue_inject_styles__23, __vue_script__23, __vue_scope_id__23, __vue_is_functional_template__23, __vue_module_identifier__23, false, __vue_create_injector__23, void 0, void 0);
  var DocField_default2 = __vue_component__23;

  // ../frontend/frontend/public/js/patient/components/doctype/DoctypeRender.vue
  var __vue_script__24 = {
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
  var __vue_render__24 = function() {
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
  var __vue_staticRenderFns__24 = [];
  __vue_render__24._withStripped = true;
  var __vue_inject_styles__24 = function(inject) {
    if (!inject)
      return;
    inject("data-v-f1092b96_0", {source: '\n.card[data-v-f1092b96] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/components/doctype/DoctypeRender.vue"], "names": [], "mappings": ";AA8GA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA", "file": "DoctypeRender.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card :title="section.name" v-if="section.fields.length > 0">\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field :docField="field" :doc="doctype" />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "../../../services/doctype/meta";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {},\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: "" },\n    fields: { type: Array, default: [] },\n  },\n  methods: {\n    loadDoctype() {\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        this.doctype = data.data;\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (item.fieldname !== "naming_series") {\n            currentSection.fields.push(item);\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          console.log(currentSection.name);\n        }\n      });\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n      if (stringItem.startsWith("section_break")) {   \n        return null;\n      }\n      if (stringItem.startsWith("sb_")) {   \n         stringItem = stringItem.replace("_sb","")\n      }\n\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__24 = "data-v-f1092b96";
  var __vue_module_identifier__24 = void 0;
  var __vue_is_functional_template__24 = false;
  function __vue_normalize__24(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  function __vue_create_injector__24() {
    const styles = __vue_create_injector__24.styles || (__vue_create_injector__24.styles = {});
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
  var __vue_component__24 = /* @__PURE__ */ __vue_normalize__24({render: __vue_render__24, staticRenderFns: __vue_staticRenderFns__24}, __vue_inject_styles__24, __vue_script__24, __vue_scope_id__24, __vue_is_functional_template__24, __vue_module_identifier__24, false, __vue_create_injector__24, void 0, void 0);
  var DoctypeRender_default2 = __vue_component__24;

  // ../frontend/frontend/public/js/forms/FillForm.vue
  var __vue_script__25 = {
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
  var __vue_render__25 = function() {
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
  var __vue_staticRenderFns__25 = [];
  __vue_render__25._withStripped = true;
  var __vue_inject_styles__25 = function(inject) {
    if (!inject)
      return;
    inject("data-v-5133caa5_0", {source: "\n.render-formx[data-v-5133caa5] {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  width: 100% !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FillForm.vue"], "names": [], "mappings": ";AA8GA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;AACA", "file": "FillForm.vue", "sourcesContent": ['<template>\n  <b-container>\n    <b-row class="render-formx mr-0" v-if="!formName">\n      <b-col :cols="12" ref="doctype" class="ref-field-input mr-0" />\n    </b-row>\n    <b-row>\n    \n      <form-render-view\n        :currentFormName="selectedDoctype"\n        :selectedDoctype="referencDoctype"\n        :prePopulate="prePopulate"\n        :selectedDoctypeReference="referencDoctypeItem"\n        @callback="callback"\n      />\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getFormConfiguration } from "../services/forms/builder.js";\nimport FormRenderView from "./Frm.vue";\nimport DoctypeRender from "./../patient/components/doctype/DoctypeRender.vue";\n\nexport default {\n  name: "FillForm",\n  data() {\n    return {\n      selectedDoctype: null,\n      configuration: null,\n    };\n  },\n  components: {\n    FormRenderView,\n    DoctypeRender,\n  },\n  props: {\n    formName: {\n      type: String,\n      required: false,\n      default: "Registration Form",\n    },\n    prePopulate :{type:Object, default:null},\n    referencDoctype: { type: String, default: "Patient" },\n    referencDoctypeItem: { type: String, default: "" },\n    callbackUrl: { type: Object, required: false, default: null },\n  \n  },\n  created() {\n    if (this.formName) {\n      this.selectedDoctype = this.formName;\n    }\n  },\n\n  mounted() {\n    this.makeSelectDoctypeControl();\n  },\n  watch: {\n    selectedDoctype(val) {\n      // f()\n      this.getForm(val);\n    },\n  },\n\n  methods: {\n     callback(value) {\n      this.$emit("callback", value);\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "Form Design",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.configuration = formStringConfig;\n        console.log(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n    goToRoute(doctype, reference) {\n      this.$router.push({ name: "viewer", params: { doctype, reference } });\n    },\n  },\n};\n</script>\n\n<style scoped>\n.render-formx {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  width: 100% !important;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__25 = "data-v-5133caa5";
  var __vue_module_identifier__25 = void 0;
  var __vue_is_functional_template__25 = false;
  function __vue_normalize__25(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  function __vue_create_injector__25() {
    const styles = __vue_create_injector__25.styles || (__vue_create_injector__25.styles = {});
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
  var __vue_component__25 = /* @__PURE__ */ __vue_normalize__25({render: __vue_render__25, staticRenderFns: __vue_staticRenderFns__25}, __vue_inject_styles__25, __vue_script__25, __vue_scope_id__25, __vue_is_functional_template__25, __vue_module_identifier__25, false, __vue_create_injector__25, void 0, void 0);
  var FillForm_default = __vue_component__25;

  // ../frontend/frontend/public/js/patient/pages/queue_management/Main.vue
  var __vue_script__26 = {
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
    created() {
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
    computed: {},
    components: {
      SideBar: Sidebar_default2,
      WorkingArea: WorkingArea_default,
      TopHeader: TopHeader_default2,
      DoctypeRender: DoctypeRender_default,
      FillForm: FillForm_default
    }
  };
  var __vue_render__26 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-container watu", attrs: {fluid: ""}}, [
      _c("b-row", [_c("top-header", {staticStyle: {width: "100%"}})], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", {
          staticClass: "no-left-padding",
          attrs: {sm: 12, md: 12, lg: 12}
        }, [
          _c("router-view", {
            staticClass: "working-area",
            attrs: {announcedPatients: _vm.announcedPatients}
          })
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__26 = [];
  __vue_render__26._withStripped = true;
  var __vue_inject_styles__26 = function(inject) {
    if (!inject)
      return;
    inject("data-v-e4d485a2_0", {source: '\n@media only screen and (min-width: 767px) {\n.watu {\n        overflow: hidden !important;\n}\n}\n.main-container {\n  height: 100vh;\n  overflow-x: hidden;\n  background: #eff0f2;\n  /* font-family: "Nunito", sans-serif; */\n  /* font-size: smaller; */\n}\n.top-menu {\n  background: white;\n  padding: 20px;\n}\n.no-left-padding {\n  padding-left: 0px !important;\n}\n.side-bar {\n  background: rgba(0, 0, 0, 0.03);\n  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2); */\n  border-right: 1px solid lightgray;\n  transition: 0.3s;\n}\n.working-area {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: calc(100vh - 80px);\n  width: 100%;\n  scrollbar-width: thin; /* "auto" or "thin" */\n  scrollbar-color: lightgray transparent;\n}\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.layout-main {\n  height: calc(100vh - 60px);\n}\n.layout-main-section-wrapper {\n  margin-bottom: 0px !important;\n}\ndiv::-webkit-scrollbar {\n  width: 0px; /* width of the entire scrollbar */\n}\ndiv::-webkit-scrollbar-track {\n  background: transparent; /* color of the tracking area */\n}\ndiv::-webkit-scrollbar-thumb {\n  background-color: grey; /* color of\u220F the scroll thumb */\n  border-radius: 20px; /* roundness of the scroll thumb */\n  border: 0px solid orange; /* creates padding around scroll thumb */\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/pages/queue_management/Main.vue"], "names": [], "mappings": ";AAqFA;AACA;QACA,2BAAA;AAEA;AACA;AACA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,uCAAA;EACA,wBAAA;AACA;AAEA;EACA,iBAAA;EACA,aAAA;AACA;AACA;EACA,4BAAA;AACA;AAEA;EACA,+BAAA;EACA,gDAAA;EACA,iCAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;EACA,kBAAA;EACA,0BAAA;EACA,WAAA;EACA,qBAAA,EAAA,qBAAA;EACA,sCAAA;AACA;AAEA;EACA,0CAAA;EACA,gBAAA;AACA;AAEA;EACA,2CAAA;AACA;AAEA;EACA,0BAAA;AACA;AACA;EACA,6BAAA;AACA;AAEA;EACA,UAAA,EAAA,kCAAA;AACA;AAEA;EACA,uBAAA,EAAA,+BAAA;AACA;AAEA;EACA,sBAAA,EAAA,+BAAA;EACA,mBAAA,EAAA,kCAAA;EACA,wBAAA,EAAA,wCAAA;AACA", "file": "Main.vue", "sourcesContent": [`<template>
  <b-container class="main-container watu" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row>
      <b-col
        :sm="12"
        class="no-left-padding"
        :md="12"
        :lg="12"
      >
         <router-view :announcedPatients="announcedPatients" class="working-area" />
      </b-col>
        
    </b-row>
  </b-container>
</template>
<script>
import SideBar from "./core/Sidebar.vue";
import WorkingArea from "./core/WorkingArea.vue";
import TopHeader from './core/TopHeader.vue';
import DoctypeRender from '../../../html/doctype/DoctypeRender.vue';
import FillForm from '../../../forms/FillForm.vue';
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
  created(){
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
  background: #eff0f2;
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
  var __vue_scope_id__26 = void 0;
  var __vue_module_identifier__26 = void 0;
  var __vue_is_functional_template__26 = false;
  function __vue_normalize__26(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="main-container watu" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row>
      <b-col
        :sm="12"
        class="no-left-padding"
        :md="12"
        :lg="12"
      >
         <router-view :announcedPatients="announcedPatients" class="working-area" />
      </b-col>
        
    </b-row>
  </b-container>
</template>
<script>
import SideBar from "./core/Sidebar.vue";
import WorkingArea from "./core/WorkingArea.vue";
import TopHeader from './core/TopHeader.vue';
import DoctypeRender from '../../../html/doctype/DoctypeRender.vue';
import FillForm from '../../../forms/FillForm.vue';
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
  created(){
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
  background: #eff0f2;
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
  function __vue_create_injector__26() {
    const styles = __vue_create_injector__26.styles || (__vue_create_injector__26.styles = {});
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
  var __vue_component__26 = /* @__PURE__ */ __vue_normalize__26({render: __vue_render__26, staticRenderFns: __vue_staticRenderFns__26}, __vue_inject_styles__26, __vue_script__26, __vue_scope_id__26, __vue_is_functional_template__26, __vue_module_identifier__26, false, __vue_create_injector__26, void 0, void 0);
  var Main_default = __vue_component__26;

  // ../frontend/frontend/public/js/patient/patient.bundle.js
  Vue.config.silent = true;
  Vue.config.devtools = true;
  Vue.filter("subtitle", function(unit) {
    if (unit && unit.inpatient_occupancies && unit.inpatient_occupancies.length > 0) {
      return unit.inpatient_occupancies[0].service_unit;
    } else if (unit && unit.patient_name) {
      return unit.patient_name;
    }
    return "";
  });
  Vue.filter("nameInitials", function(fullName) {
    return fullName.split(" ").map((name, index) => name && index < 1 ? name[0] : "").join("");
  });
  Vue.filter("noSnake", function(stringItem) {
    if (!stringItem) {
      return;
    }
    let noSnakeString = stringItem.replace("_", " ");
    return noSnake.charAt(0).toUpperCase() + noSnakeString.slice(1);
  });
  Vue.filter("filterDate", function(value) {
    var year = value.substring(0, 4);
    var month = value.substring(5, 7);
    var day = value.substring(8, 10);
    return day + "-" + month + "-" + year;
  });
  Vue.filter("filterTime", function(value) {
    var time = value.substring(11, 16);
    return time;
  });
  frappe.provide("frappe.pt");
  frappe.pt.Chart = class {
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
      this.$page_container = $('<div class="hbc">').appendTo(this.$body);
      new Vue({
        store: store_default,
        router: frappe.custom.router,
        el: ".hbc",
        render: (h) => h(Container_default)
      });
    }
  };
  frappe.provide("frappe.queue_management");
  frappe.queue_management.Chart = class {
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
      const myInstance = new Vue({
        store: store_default,
        router: frappe.custom.router,
        el: ".hub-page-container",
        render: (h) => h(Main_default)
      });
    }
  };
})();
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
//# sourceMappingURL=patient.bundle.S6RKXOVC.js.map
