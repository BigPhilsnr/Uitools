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

  // ../frontend/frontend/public/js/services/doctype/meta.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
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
  var getDoctypeWithMeta = (payload) => api({
    method: "clinical.api.doctype.meta.get_doctype_with_meta",
    args: {payload}
  });
  var getDoctypeWithMetaSlim = (payload) => api({
    method: "clinical.api.doctype.meta.get_doctype_with_meta_slim",
    args: {payload}
  });
  var searchDoctype = (payload) => apix({
    method: "frappe.desk.search.search_link",
    args: {payload}
  });

  // ../frontend/frontend/public/js/services/doctype/list.js
  var createDoctype = (payload) => api({
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
  var __vue_script__ = {
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
  var __vue_render__ = function() {
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
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
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
  var __vue_scope_id__ = "data-v-1c330300";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var ChildTable_default = __vue_component__;

  // ../frontend/frontend/public/js/html/doctype/DocField.vue
  var __vue_script__2 = {
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
  var __vue_render__2 = function() {
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
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
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
  var __vue_scope_id__2 = "data-v-f42a2350";
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var DocField_default = __vue_component__2;

  // ../frontend/frontend/public/js/html/doctype/DoctypeRender.vue
  var __vue_script__3 = {
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
  var __vue_render__3 = function() {
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
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-88b8b55c_0", {source: '\n.card[data-v-88b8b55c] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n.head-toggle[data-v-88b8b55c] {\n  outline: 0;\n}\n.header[data-v-88b8b55c] {\n  background: transparent;\n}\n.card-header[data-v-88b8b55c] {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/html/doctype/DoctypeRender.vue"], "names": [], "mappings": ";AAoQA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;AAEA;EACA,UAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA;;wCAEA;EACA,6CAAA;AACA", "file": "DoctypeRender.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card\n          :title="section.name"\n          v-if="section.fields.length > 0 && !section.collapsible"\n        >\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field\n                  :docField="field"\n                  @childUpdated="childUpdated"\n                  :doc="doctype"\n                  :readOnly="readOnly"\n                />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n\n        <b-card\n          v-else-if="section.fields.length > 0 && section.collapsible"\n          class="mb-2"\n        >\n          <b-card-header header-tag="header" class="p-1 header" role="tab">\n            <div\n              class="head-toggle"\n              @click="section.collapsed = !section.collapsed"\n            >\n              <b-row>\n                <b-col cols="10">\n                  <h5 style="margin: 0">{{ section.name }}</h5>\n                </b-col>\n                <b-col cols="2">\n                  <span\n                    ><i\n                      class="toggler pull-right ml-4 fa"\n                      v-bind:class="section.collapsed ? iconUp : iconDown"\n                      aria-hidden="true"\n                    ></i>\n                  </span>\n                </b-col>\n              </b-row>\n            </div>\n          </b-card-header>\n          <b-collapse\n            v-model="section.collapsed"\n            id="accordion-1"\n            role="tabpanel"\n          >\n            <b-card-body>\n              <b-row class="mt-2">\n                <b-col\n                  :cols="getWidth(field)"\n                  v-for="field in section.fields"\n                  :key="field"\n                >\n                  <doc-field\n                    :docField="field"\n                    :doc="doctype"\n                    @childUpdated="childUpdated"\n                    :readOnly="readOnly"\n                  />\n                </b-col>\n              </b-row>\n            </b-card-body>\n          </b-collapse>\n        </b-card>\n      </b-col>\n    </b-row>\n    <b-row>\n      <b-button v-if="!readOnly" variant="primary" @click="create()">\n        create</b-button\n      >\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "./../../services/doctype/meta.js";\nimport { createDoctype } from "./../../services/doctype/list.js";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n      readOnly: false,\n      iconUp: "fa-angle-up",\n      iconDown: "fa-angle-down",\n      collapsed: false,\n      allowedFields: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {\n    this.isReadonly = this.readOnly;\n  },\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: null },\n    fields: { type: Array, default: [] },\n    refresh: { type: String, required: false },\n  },\n  methods: {\n    loadDoctype() {\n      //  frappe.show_alert("loading form..", 5);\n      if (window.currentDoctype) {\n        this.doctypeInput = window.currentDoctype;\n      }\n      if (window.currentDoctypeReference) {\n        this.doc_ref = window.currentDoctypeReference;\n      }\n\n      if (this.doc_ref) {\n        this.readOnly = true;\n      }\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        if (data.allowedFields && data.allowed_fields.allowed_fields) {\n          this.allowedFields = data.allowed_fields.allowed_fields;\n        }\n\n        this.doctype = data.data;\n        if (window.currentDoctype) {\n          this.doctype.doctype = window.currentDoctype;\n        }\n\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      let checkList = this.allowedFields\n        .filter((x) => x.active)\n        .map((v) => v.field_name);\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (\n              checkList.indexOf(item.fieldname) > -1 ||\n              checkList.length == 0\n            ) {\n              currentSection.fields.push(item);\n            }\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          currentSection.collapsed = false;\n          currentSection.collapsible = item.collapsible;\n        }\n      });\n\n      if (this.sections.length === 0) {\n        currentSection = { fields: [], name: "" };\n        currentSection.collapsed = false;\n        currentSection.collapsible = false;\n\n        fields.forEach((item) => {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (checkList.indexOf(item.fieldname) > -1) {\n              currentSection.fields.push(item);\n            }\n          }\n        });\n\n        this.sections.push(currentSection);\n      }\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n\n      if (stringItem.startsWith("section_break")) {\n        return null;\n      }\n\n      if (stringItem.startsWith("sb_")) {\n        stringItem = stringItem.replace("_sb", "");\n      }\n\n      stringItem = stringItem.replaceAll("section_break", "section");\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text Editor") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n    childUpdated(val) {\n      if (this.doctype[val.fieldname] !== val.val) {\n        this.$set(this.doctype, val.fieldname, val.val);\n      }\n    },\n    create() {\n      createDoctype(this.doctype).then((data) => {});\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n    refreshed(val) {\n      this.loadDoctype();\n    },\n    doc_ref(vale){\n      this.loadDoctype();\n    }\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.head-toggle {\n  outline: 0;\n}\n.header {\n  background: transparent;\n}\n.card-header {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__3 = "data-v-88b8b55c";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var DoctypeRender_default = __vue_component__3;

  // ../frontend/frontend/public/js/html/Main.vue
  var __vue_script__4 = {
    components: {DoctypeRender: DoctypeRender_default},
    name: "Main",
    created() {
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_c("doctype-render")], 1);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-021600ca_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Main.vue"}, media: void 0});
  };
  var __vue_scope_id__4 = void 0;
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div>
   <!-- <router-view class="working-area" /> -->
    <doctype-render/>
  </div>
</template>

<script>
import DoctypeRender from './doctype/DoctypeRender.vue'

export default {
  components: { DoctypeRender },
name:"Main",
created() {
 
},
}
</script>

<style>

</style>`;
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
  var Main_default = __vue_component__4;

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

  // ../frontend/frontend/public/js/services/patient_chart/api.js
  var api2 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
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
  }) => api2({
    method: "clinical.api.patients.get_patients_per_service_unit",
    args: {
      service_unit,
      service_point,
      search,
      traverse
    },
    freeze: false
  });
  var getMyServiceUnits = () => api2({
    method: "clinical.clinical.doctype.user_service_unit.user_service_unit.get_user_service_unit"
  });
  var getMyServicePoints = (service_unit) => api2({
    method: "clinical.clinical.doctype.service_point.service_point.get_unit_service_points",
    args: {
      service_unit
    }
  });
  var getMyLocation = () => api2({
    method: "clinical.api.queue_management.queue_logistics.get_my_location",
    args: {}
  });
  var transferPatient = (args) => api2({
    method: "clinical.api.patients.transfer_inpatient",
    args
  });

  // ../frontend/frontend/public/js/services/patient/patient.js
  var api3 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatientInfo = (patient_name) => api3({
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
  var api4 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: ({message}) => resolve(message), error: reject}));
  var getScheduledOrUnscheduledprocedures = (args) => {
    return api4({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedures_per_service_unit",
      args
    });
  };
  var getClinicalProcedureTemplates = (args) => {
    return api4({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedure_templates_per_service_unit",
      args
    });
  };
  var getProcedureStatistics = (args) => {
    return api4({
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
  var fetchNotifications = (payload) => api3({
    method: "clinical.api.notification.notification.get_notifications",
    args: {payload}
  });
  var clearNotification = (payload) => api3({
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
  var api5 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatient = ({patient_name}) => api5({
    method: "billing.billing.api.accounts.patients.get_patient",
    args: {
      patient_name
    }
  });
  var getInvoiceFinalizations = (customer_number) => api5({
    method: "billing.billing.api.accounts.patients.get_invoice_finalizations",
    args: {
      customer_number
    }
  });

  // ../frontend/frontend/public/js/services/patient_chart/accounts.js
  var api6 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var getAccountsDashboard = ({
    patient_number = ""
  }) => api6({
    method: "clinical.api.patient_accounts.customer_account_dashboard_info",
    args: {
      patient_number
    }
  }).then(({message}) => message);
  var getUnbilledSalesOrderTotals = ({
    patient_number
  }) => api6({
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

  // ../frontend/frontend/public/js/html/render.bundle.js
  Vue.filter("shortLink", function(url) {
    const colors = url.split("/");
    return colors.length > 0 ? colors[colors.length - 1] : "Link";
  });
  Vue.filter("money", function(value) {
    if (!value) {
      return "0.00";
    }
    if (typeof value !== "number") {
      return value;
    }
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0
    });
    return formatter.format(value);
  });
  frappe.provide("frappe.render");
  frappe.render.Render = class {
    constructor({parent}) {
      this.$parent = $(parent);
      this.page = parent;
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
//# sourceMappingURL=render.bundle.V3PK6BPU.js.map
