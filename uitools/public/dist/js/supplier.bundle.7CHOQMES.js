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

  // ../frontend/frontend/public/js/supplier/core/Sidebar.vue
  var __vue_script__ = {
    name: "Sidebar"
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "side-bar-area aside-bottom-padding"}, [
      _c("div", {staticClass: "p user-area"}, [
        _c("b-row", [
          _c("b-col", {attrs: {cols: "10"}}, [
            _c("b-row", [
              _c("b-col", [
                _c("h4", {
                  staticStyle: {
                    color: "white",
                    "font-weight": "bold"
                  }
                }, [
                  _vm._v("\n              " + _vm._s(_vm.frappe.session.user_fullname) + "\n            ")
                ])
              ])
            ], 1),
            _vm._v(" "),
            _c("b-row", [
              _c("b-col", [
                _c("h5", {staticStyle: {color: "white"}}, [
                  _vm._v("\n              " + _vm._s(_vm.frappe.session.user_email) + "\n            ")
                ])
              ])
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("b-icon", {
            attrs: {
              icon: "intersect",
              variant: "light",
              "font-scale": "2"
            }
          }),
          _vm._v(" "),
          _c("b-col")
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mt-3"}, [
        _c("b-button", {
          staticClass: "mx-auto menu-header",
          staticStyle: {width: "100%", padding: "10px"},
          attrs: {variant: "light"}
        }, [
          _c("router-link", {staticClass: "pull-left", attrs: {to: {name: "rfq"}}}, [_vm._v("Menu")])
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mt-4 item-link"}, [
        _c("b-col", {attrs: {cols: "2"}}, [
          _c("b-icon", {
            directives: [
              {
                name: "align",
                rawName: "v-align",
                value: _vm.center,
                expression: "center"
              }
            ],
            attrs: {
              icon: "card-checklist",
              scale: "2",
              variant: "success"
            }
          })
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "title", attrs: {cols: "8"}}, [
          _c("router-link", {
            staticClass: "pull-left title",
            attrs: {to: {name: "rfq"}}
          }, [_vm._v("\n        REQUESTS FOR QUOTATION")])
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "pull-right vs-align-center", attrs: {cols: "2"}}, [
          _c("i", {
            staticClass: "fa fa-chevron-right pull-right vs-align-center mt-1 mr-1",
            attrs: {"aria-hidden": "true"}
          })
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mt-4 item-link"}, [
        _c("b-col", {attrs: {cols: "2"}}, [
          _c("b-icon", {
            attrs: {icon: "pencil-square", scale: "2", variant: "primary"}
          })
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "title", attrs: {cols: "8"}}, [
          _c("router-link", {
            staticClass: "pull-left title",
            attrs: {to: {name: "memo"}}
          }, [_vm._v("Letters of Validity")])
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "pull-right vs-align-center", attrs: {cols: "2"}}, [
          _c("i", {
            staticClass: "fa fa-chevron-right pull-right vs-align-center mt-1 mr-1",
            attrs: {"aria-hidden": "true"}
          })
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mt-4 item-link"}, [
        _c("b-col", {attrs: {cols: "2"}}, [
          _c("b-icon", {
            attrs: {icon: "layers", scale: "2", variant: "primary"}
          })
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "title", attrs: {cols: "8"}}, [
          _c("router-link", {
            staticClass: "pull-left title",
            attrs: {to: {name: "purchase-order"}}
          }, [_vm._v("PURCHASE ORDERS")])
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "pull-right vs-align-center", attrs: {cols: "2"}}, [
          _c("i", {
            staticClass: "fa fa-chevron-right pull-right vs-align-center mt-1 mr-1",
            attrs: {"aria-hidden": "true"}
          })
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "mt-4 item-link"}, [
        _c("b-col", {attrs: {cols: "2"}}, [
          _c("b-icon", {
            attrs: {icon: "trophy", scale: "2", variant: "warning"}
          })
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "title", attrs: {cols: "8"}}, [
          _c("router-link", {
            staticClass: "pull-left title",
            attrs: {to: {name: "notification-award"}}
          }, [_vm._v("NOTIFICATION OF AWARD")])
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "pull-right vs-align-center", attrs: {cols: "2"}}, [
          _c("i", {
            staticClass: "fa fa-chevron-right pull-right vs-align-center mt-1 mr-1",
            attrs: {"aria-hidden": "true"}
          })
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-d6ceeeee_0", {source: "\n.no-sides[data-v-d6ceeeee] {\n  margin-left: 0px;\n  margin-right: 8px;\n}\n.side-bar-area[data-v-d6ceeeee] {\n  background: white;\n  width: 100% !important;\n  padding-top: 20px;\n  min-height: 600px;\n  height: 100vh;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  background-color: white;\n  background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);\n  padding-left: 11px !important;\n  padding-right: 11px !important;\n}\n.item-link[data-v-d6ceeeee] {\n  border-bottom: 1px solid white;\n  padding-bottom: 4px;\n  color: #fff !important;\n  min-height: 50px;\n  padding-left:10px;\n}\n.title[data-v-d6ceeeee] {\n  font-weight: bold;\n  color: white !important;\n}\n.user-area[data-v-d6ceeeee] {\n  background: #17161659;\n  padding: 13px;\n  border-radius: 4px;\n  color: white;\n}\n.menu-header[data-v-d6ceeeee] {\n  width: 100%;\n  padding: 10px;\n  background: #ffffff5e;\n  font-weight: bold;\n  /* box-shadow: 0px 7px 0px -5px #ccc; */\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/supplier/core/Sidebar.vue"], "names": [], "mappings": ";AAmHA;EACA,gBAAA;EACA,iBAAA;AACA;AAEA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,kEAAA;EACA,6BAAA;EACA,8BAAA;AACA;AACA;EACA,8BAAA;EACA,mBAAA;EACA,sBAAA;EACA,gBAAA;EACA,iBAAA;AACA;AACA;EACA,iBAAA;EACA,uBAAA;AACA;AACA;EACA,qBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;AACA;AACA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,uCAAA;AACA", "file": "Sidebar.vue", "sourcesContent": [`<template>
  <b-container class="side-bar-area aside-bottom-padding">
    <div class="p user-area">
      <b-row>
        <b-col cols="10">
          <b-row>
            <b-col>
              <h4 style="color: white; font-weight: bold">
                {{ frappe.session.user_fullname }}
              </h4></b-col
            ></b-row
          >
          <b-row>
            <b-col>
              <h5 style="color: white">
                {{ frappe.session.user_email }}
              </h5></b-col
            ></b-row
          >
        </b-col>
        <b-icon icon="intersect" variant="light" font-scale="2"></b-icon>
        <b-col> </b-col>
      </b-row>
    </div>
    <b-row class="mt-3">
      <b-button
        variant="light"
        class="mx-auto menu-header"
        style="width: 100%; padding: 10px"
      >
        <router-link :to="{ name: 'rfq' }" class="pull-left">Menu</router-link>
      </b-button>
    </b-row>
    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon
          icon="card-checklist"
          v-align="center"
          scale="2"
          variant="success"
        ></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'rfq' }" class="pull-left title">
          REQUESTS FOR QUOTATION</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon icon="pencil-square" scale="2" variant="primary"></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'memo' }" class="pull-left title"
          >Letters of Validity</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>

    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon icon="layers" scale="2" variant="primary"></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'purchase-order' }" class="pull-left title"
          >PURCHASE ORDERS</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>

    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon icon="trophy" scale="2" variant="warning"></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'notification-award' }" class="pull-left title"
          >NOTIFICATION OF AWARD</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Sidebar",
  
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
  padding-bottom: 4px;
  color: #fff !important;
  min-height: 50px;
  padding-left:10px;
}
.title {
  font-weight: bold;
  color: white !important;
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
  background: #ffffff5e;
  font-weight: bold;
  /* box-shadow: 0px 7px 0px -5px #ccc; */
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-d6ceeeee";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="side-bar-area aside-bottom-padding">
    <div class="p user-area">
      <b-row>
        <b-col cols="10">
          <b-row>
            <b-col>
              <h4 style="color: white; font-weight: bold">
                {{ frappe.session.user_fullname }}
              </h4></b-col
            ></b-row
          >
          <b-row>
            <b-col>
              <h5 style="color: white">
                {{ frappe.session.user_email }}
              </h5></b-col
            ></b-row
          >
        </b-col>
        <b-icon icon="intersect" variant="light" font-scale="2"></b-icon>
        <b-col> </b-col>
      </b-row>
    </div>
    <b-row class="mt-3">
      <b-button
        variant="light"
        class="mx-auto menu-header"
        style="width: 100%; padding: 10px"
      >
        <router-link :to="{ name: 'rfq' }" class="pull-left">Menu</router-link>
      </b-button>
    </b-row>
    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon
          icon="card-checklist"
          v-align="center"
          scale="2"
          variant="success"
        ></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'rfq' }" class="pull-left title">
          REQUESTS FOR QUOTATION</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon icon="pencil-square" scale="2" variant="primary"></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'memo' }" class="pull-left title"
          >Letters of Validity</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>

    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon icon="layers" scale="2" variant="primary"></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'purchase-order' }" class="pull-left title"
          >PURCHASE ORDERS</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>

    <b-row class="mt-4 item-link">
      <b-col cols="2">
        <b-icon icon="trophy" scale="2" variant="warning"></b-icon
      ></b-col>
      <b-col cols="8" class="title">
        <router-link :to="{ name: 'notification-award' }" class="pull-left title"
          >NOTIFICATION OF AWARD</router-link
        ></b-col
      >
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Sidebar",
  
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
  padding-bottom: 4px;
  color: #fff !important;
  min-height: 50px;
  padding-left:10px;
}
.title {
  font-weight: bold;
  color: white !important;
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
  background: #ffffff5e;
  font-weight: bold;
  /* box-shadow: 0px 7px 0px -5px #ccc; */
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
  var Sidebar_default = __vue_component__;

  // ../frontend/frontend/public/js/services/rfq/rfq.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    freeze,
    args,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getSupplierRfqs = (payload) => api({
    method: "mtrh_dev.mtrh_dev.get_supplier_rfqs",
    args: payload
  });
  var getRfqItems = (payload) => api({
    method: "mtrh_dev.mtrh_dev.get_supplier_rfq_items",
    args: {rfq: payload}
  });
  var postRfqItems = (payload) => api({
    method: "mtrh_dev.mtrh_dev.create_supplier_quotation",
    args: {doc: payload}
  });

  // ../frontend/frontend/public/js/supplier/rfq/rfqItem.vue
  var __vue_script__2 = {
    name: "rfq",
    data() {
      return {
        total: 0,
        fields: [
          "item_code",
          "item_name",
          {key: "qty", label: "Quantity"},
          "rate",
          {key: "image", label: "Attachment"},
          "amount"
        ],
        parentId: "",
        items: [],
        isReadOnly: false,
        isExpired: false,
        response: {},
        message: ""
      };
    },
    methods: {
      endMe(end) {
        this.saveItems();
      },
      uploadFile(row) {
        const me = this;
        new frappe.ui.FileUploaderCustom({
          doctype: "Request for Quotation",
          docname: me.parentId,
          on_success(file_doc) {
            const {file_url, filename} = file_doc;
            row.item.image = file_url;
            row.item.files = file_url;
          }
        });
      },
      removeFile(row) {
        row.item.image = null;
      },
      calculateTotals(items) {
        if (items) {
          let total = 0;
          items.forEach((item) => {
            total = total + item.rate * item.qty;
          });
          this.total = total;
        }
      },
      fetchItems(rfqId) {
        getRfqItems(rfqId).then((data) => {
          this.response = data.document;
          const isExpired = data.expiry_status;
          const notRfq = this.response.doctype !== "Request for Quotation";
          this.isReadOnly = notRfq || isExpired;
          this.items = this.response.items;
          console.log("Can't edit:", this.isReadOnly);
          if (isExpired && !notRfq) {
            this.message = `This RFQ expired on ${this.response.transaction_date}`;
            return;
          }
          if (notRfq) {
            this.message = `${this.response.owner} Already posted a bid on ${this.response.creation}  under  reference ${this.response.name}. See posted quotation below `;
          } else {
            this.message = this.response.message_for_supplier;
          }
        });
      },
      saveItems() {
        this.response.item = this.items;
        postRfqItems(this.response).then((data) => {
          frappe.show_alert(" saved");
          this.$router.go(-1);
        });
      }
    },
    computed: {
      confirmMessage() {
        let numberQuoted = 0;
        if (this.items) {
          numberQuoted = this.items.filter((item) => item.rate > 0);
        }
        return `You have quoted <b> ${numberQuoted.length} item(s) </b>  worth <b>KES  ${this.total}  </b>,  are you sure want to submit, this action is irreversible`;
      }
    },
    created() {
      this.parentId = this.$route.params.id;
      this.fetchItems(this.parentId);
    },
    mounted() {
      this.$root.$on("bv::modal::ok", (bvEvent, modalId) => {
        console.log("Modal is about to be shown", bvEvent, modalId);
      });
    },
    watch: {
      items: {
        handler(val) {
          this.calculateTotals(val);
        },
        deep: true
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "mx-auto"}, [
      _c("b-row", [
        _c("b-modal", {
          attrs: {id: "modal-scoped"},
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function(ref) {
                var cancel = ref.cancel;
                var hide = ref.hide;
                return [
                  _c("h3", [_vm._v("Are you sure?")]),
                  _vm._v(" "),
                  _c("b-button", {
                    attrs: {variant: "outline-primary"},
                    on: {
                      click: function($event) {
                        return hide();
                      }
                    }
                  }, [
                    _c("i", {
                      staticClass: "fa fa-close",
                      on: {
                        click: function($event) {
                          return cancel();
                        }
                      }
                    })
                  ])
                ];
              }
            },
            {
              key: "default",
              fn: function(ref) {
                return [
                  _c("p", {
                    domProps: {innerHTML: _vm._s(_vm.confirmMessage)}
                  })
                ];
              }
            },
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok;
                var cancel = ref.cancel;
                return [
                  _c("b-row", [
                    _c("b-button", {
                      staticClass: "pull-right mx-2",
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.endMe(ok);
                        }
                      }
                    }, [
                      _c("i", {
                        staticClass: "fa fa-check-circle",
                        attrs: {"aria-hidden": "true"}
                      }),
                      _vm._v(" CONFIRM\n          ")
                    ]),
                    _vm._v(" "),
                    _c("b-button", {
                      staticClass: "pull-right",
                      attrs: {variant: "danger"},
                      on: {
                        click: function($event) {
                          return cancel();
                        }
                      }
                    }, [
                      _c("i", {
                        staticClass: "fa fa-times-circle-o",
                        attrs: {"aria-hidden": "true"}
                      }),
                      _vm._v(" CANCEL\n          ")
                    ])
                  ], 1)
                ];
              }
            }
          ])
        })
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", {staticClass: "mt-3"}, [
          _c("router-link", {
            staticStyle: {color: "darkgray"},
            attrs: {to: {name: "rfq"}}
          }, [
            _c("i", {
              staticClass: "fa fa-chevron-left",
              attrs: {"aria-hidden": "true"}
            }),
            _vm._v(" Go\n        back")
          ])
        ], 1),
        _vm._v(" "),
        _c("b-col", {staticClass: "mt-3"}, [
          _vm.response ? _c("h5", {staticClass: "pull-right"}, [
            _vm._v(_vm._s(_vm.response.company || ""))
          ]) : _vm._e()
        ])
      ], 1),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("b-row", {staticClass: "mt-4"}, [
        _c("b-col", {attrs: {cols: "6"}}, [
          _c("h2", [_vm._v("Request for quotation")])
        ]),
        _vm._v(" "),
        _c("b-col", {attrs: {cols: "6"}}, [
          _c("h3", {staticClass: "pull-right"}, [
            _vm._v("#" + _vm._s(_vm.parentId))
          ])
        ]),
        _vm._v(" "),
        _c("b-col", {staticClass: "pt-2 mb-3", attrs: {cols: "12"}}, [
          _c("b-button-group", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isReadOnly,
                expression: "!isReadOnly"
              }
            ],
            staticClass: "pull-right"
          }, [
            _c("b-button", {
              attrs: {variant: "primary"},
              on: {
                click: function($event) {
                  return _vm.$bvModal.show("modal-scoped");
                }
              }
            }, [
              _c("i", {
                staticClass: "fa fa-save",
                staticStyle: {color: "white"},
                attrs: {"aria-hidden": "true"}
              }),
              _vm._v("\n          Save\n        ")
            ])
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("b-col", {attrs: {cols: "12"}}, [
          _c("p", {
            staticStyle: {color: "darkgray"},
            domProps: {innerHTML: _vm._s(_vm.message)}
          })
        ])
      ], 1),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("b-row", [
        _c("h3", [
          _c("b", [
            _vm._v("There are " + _vm._s(_vm.items.length) + " item(s) in this RFQ.")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("b-row", {staticClass: "mx-auto mt-4"}, [
        _c("b-card", {staticClass: "mx-auto", staticStyle: {width: "100%"}}, [
          _c("div", {staticClass: "mx-auto"}, [
            _c("b-table", {
              staticClass: "mx-auto",
              attrs: {
                stacked: "md",
                striped: "",
                hover: "",
                items: _vm.items,
                fields: _vm.fields
              },
              scopedSlots: _vm._u([
                {
                  key: "cell(rate)",
                  fn: function(row) {
                    return [
                      !_vm.isReadOnly ? _c("b-form-input", {
                        model: {
                          value: row.item.rate,
                          callback: function($$v) {
                            _vm.$set(row.item, "rate", $$v);
                          },
                          expression: "row.item.rate"
                        }
                      }) : _c("span", [
                        _vm._v(" " + _vm._s(row.item.rate))
                      ])
                    ];
                  }
                },
                {
                  key: "cell(amount)",
                  fn: function(data) {
                    return [
                      _vm._v("\n            " + _vm._s(_vm._f("money")(data.item.rate * data.item.qty || 0)) + "\n          ")
                    ];
                  }
                },
                {
                  key: "cell(image)",
                  fn: function(row) {
                    return [
                      row.item.image ? _c("b-row", [
                        _c("b-col", [
                          _c("b-button", {
                            attrs: {
                              variant: "outline-danger",
                              disabled: _vm.isReadOnly
                            }
                          }, [
                            _c("b-link", {
                              attrs: {href: row.item.image}
                            }, [
                              _vm._v("\n                    " + _vm._s(_vm._f("shortLink")(row.item.image)))
                            ]),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-close",
                              attrs: {"aria-hidden": "true"},
                              on: {
                                click: function($event) {
                                  return _vm.removeFile(row);
                                }
                              }
                            })
                          ], 1)
                        ], 1)
                      ], 1) : _c("b-button", {
                        attrs: {
                          variant: "primary",
                          disabled: _vm.isReadOnly
                        },
                        on: {
                          click: function($event) {
                            return _vm.uploadFile(row);
                          }
                        }
                      }, [
                        _c("i", {
                          staticClass: "fa fa-paperclip",
                          attrs: {"aria-hidden": "true"}
                        }),
                        _vm._v("\n              Attach")
                      ])
                    ];
                  }
                }
              ])
            })
          ], 1),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("b-row", [
            _c("b-col", {attrs: {cols: "6"}}, [
              _c("h5", {staticClass: "pull-left"}, [
                _c("b", [
                  _c("i", [
                    _vm._v("NB: Rate 0.0 is equivalent to "),
                    _c("u", [_vm._v("No Quote")])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("b-col", {attrs: {cols: "6"}}, [
              _c("h3", {staticClass: "pull-right"}, [
                _vm._v("TOTAL KES: " + _vm._s(_vm.total))
              ])
            ])
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
    inject("data-v-d360a8f6_0", {source: "\nbody[data-v-d360a8f6] {\n  padding: 1rem;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/supplier/rfq/rfqItem.vue"], "names": [], "mappings": ";AAgIA;EACA,aAAA;AACA", "file": "rfqItem.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-modal id="modal-scoped">\n        <template #modal-header="{ cancel,hide }">\n          <h3>Are you sure?</h3>\n          <b-button variant="outline-primary" @click="hide()">\n            <i class="fa fa-close" @click="cancel()"> </i\n          ></b-button>\n        </template>\n\n        <template #default="{}">\n           <p v-html="confirmMessage"></p>\n          \n        </template>\n\n        <template #modal-footer="{ ok, cancel }">\n          <b-row>\n            <b-button class="pull-right mx-2" variant="primary" @click="endMe(ok)">\n              <i class="fa fa-check-circle" aria-hidden="true"></i> CONFIRM\n            </b-button>\n            <b-button class="pull-right" variant="danger" @click="cancel()">\n              <i class="fa fa-times-circle-o" aria-hidden="true"></i> CANCEL\n            </b-button>\n          </b-row>\n        </template>\n      </b-modal>\n    </b-row>\n    <b-row>\n      <b-col class="mt-3">\n        <router-link :to="{ name: \'rfq\' }" style="color: darkgray">\n          <i class="fa fa-chevron-left" aria-hidden="true"></i> Go\n          back</router-link\n        >\n      </b-col>\n      <b-col class="mt-3">\n        <h5 v-if="response" class="pull-right">{{ response.company || "" }}</h5>\n      </b-col>\n    </b-row>\n    <hr />\n    <b-row class="mt-4">\n      <b-col cols="6">\n        <h2>Request for quotation</h2>\n      </b-col>\n      <b-col cols="6">\n        <h3 class="pull-right">#{{ parentId }}</h3>\n      </b-col>\n      <b-col cols="12" class="pt-2 mb-3">\n        <b-button-group class="pull-right" v-show="!isReadOnly">\n          <b-button variant="primary"  @click="$bvModal.show(\'modal-scoped\')" >\n            <i style="color: white" class="fa fa-save" aria-hidden="true"></i>\n            Save\n          </b-button>\n        </b-button-group>\n      </b-col>\n      <b-col cols="12">\n        <p v-html="message" style="color: darkgray">   \n        </p>\n      </b-col>\n      \n    </b-row>\n\n    <hr>\n    <b-row><h3><b>There are {{items.length}} item(s) in this RFQ.</b></h3> </b-row>\n    <b-row class="mx-auto mt-4">\n      <b-card class="mx-auto" style="width: 100%">\n        <div class="mx-auto">\n          <b-table\n          stacked = \'md\'\n            striped\n            hover\n            :items="items"\n            :fields="fields"\n            class="mx-auto"\n          >\n            <template v-slot:cell(rate)="row">\n              <b-form-input v-if="!isReadOnly" v-model="row.item.rate" />\n              <span v-else> {{ row.item.rate }}</span>\n            </template>\n            <template v-slot:cell(amount)="data">\n              {{ (data.item.rate * data.item.qty || 0) | money }}\n            </template>\n\n            <template v-slot:cell(image)="row">\n              <b-row v-if="row.item.image">\n                <b-col\n                  ><b-button variant="outline-danger" :disabled="isReadOnly">\n                    <b-link :href="row.item.image">\n                      {{ row.item.image | shortLink }}</b-link\n                    >\n                    <i\n                      class="fa fa-close"\n                      aria-hidden="true"\n                      @click="removeFile(row)"\n                    ></i> </b-button\n                ></b-col>\n              </b-row>\n\n              <b-button\n                v-else\n                variant="primary"\n                :disabled="isReadOnly"\n                @click="uploadFile(row)"\n                ><i class="fa fa-paperclip" aria-hidden="true"></i>\n                Attach</b-button\n              >\n            </template>\n          </b-table>\n        </div>\n        <hr />\n        <b-row>\n          <b-col cols="6">\n            <h5 class="pull-left">\n              <b\n                ><i>NB: Rate 0.0 is equivalent to <u>No Quote</u></i></b\n              >\n            </h5>\n          </b-col>\n          <b-col cols="6">\n            <h3 class="pull-right">TOTAL KES: {{ total }}</h3>\n          </b-col>\n        </b-row>\n      </b-card>\n    </b-row>\n  </b-container>\n</template>\n\n<style scoped>\nbody {\n  padding: 1rem;\n}\n</style>\n\n<script>\nimport { getRfqItems, postRfqItems } from "./../../services/rfq/rfq.js";\nexport default {\n  name: "rfq",\n  data() {\n    return {\n      total: 0,\n      fields: [\n        "item_code",\n        "item_name",\n        { key: "qty", label: "Quantity" },\n        "rate",\n        { key: "image", label: "Attachment" },\n        "amount",\n      ],\n      parentId: "",\n      items: [],\n      isReadOnly: false,\n      isExpired: false,\n      response: {},\n      message: "",\n    };\n  },\n  methods: {\n    endMe(end) {\n    this.saveItems();\n    },\n    uploadFile(row) {\n      const me = this;\n      new frappe.ui.FileUploaderCustom({\n        doctype: "Request for Quotation",\n        docname: me.parentId,\n        on_success(file_doc) {\n         \n          const { file_url, filename } = file_doc;\n          row.item.image = file_url;\n          row.item.files = file_url;\n        },\n      });\n\n    },\n    removeFile(row) {\n      row.item.image = null;\n    },\n    calculateTotals(items) {\n      if (items) {\n        let total = 0;\n        items.forEach((item) => {\n          total = total + item.rate * item.qty;\n        });\n        this.total = total;\n      }\n    },\n    fetchItems(rfqId) {\n      getRfqItems(rfqId).then((data) => {\n        this.response = data.document;\n        const isExpired = data.expiry_status;\n        const notRfq = this.response.doctype !== "Request for Quotation";\n\n        this.isReadOnly = notRfq || isExpired;\n        this.items = this.response.items;\n        console.log("Can\'t edit:", this.isReadOnly);\n        if (isExpired && !notRfq) {\n          this.message = `This RFQ expired on ${this.response.transaction_date}`;\n          return;\n        }\n        if (notRfq) {\n          this.message = `${this.response.owner} Already posted a bid on ${this.response.creation}  under  reference ${this.response.name}. See posted quotation below `;\n        } else {\n          this.message = this.response.message_for_supplier;\n        }\n      });\n    },\n    saveItems() {\n      // TODO: ADD DIALOG\n      this.response.item = this.items;\n      postRfqItems(this.response).then((data) => {\n        frappe.show_alert(" saved");\n        this.$router.go(-1);\n      });\n    },\n  \n  },\n  computed: {\n    \n    confirmMessage() {\n      let numberQuoted = 0;\n      if (this.items) {\n        numberQuoted = this.items.filter((item) => item.rate > 0);\n      }\n      return `You have quoted <b> ${numberQuoted.length} item(s) </b>  worth <b>KES  ${this.total}  </b>,  are you sure want to submit, this action is irreversible`;\n    },\n  },\n  created() {\n    this.parentId = this.$route.params.id;\n    this.fetchItems(this.parentId);\n  },\n  mounted() {\n    this.$root.$on("bv::modal::ok", (bvEvent, modalId) => {\n        console.log("Modal is about to be shown", bvEvent, modalId);\n      });\n  },\n  watch: {\n    items: {\n      handler(val) {\n        this.calculateTotals(val);\n      },\n      deep: true,\n    },\n  },\n};\n</script>\n<style scoped>\n.card {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n</style>\n']}, media: void 0}), inject("data-v-d360a8f6_1", {source: "\n.card[data-v-d360a8f6] {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/supplier/rfq/rfqItem.vue"], "names": [], "mappings": ";AAsPA;EACA,0CAAA;EACA,kBAAA;AACA", "file": "rfqItem.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-modal id="modal-scoped">\n        <template #modal-header="{ cancel,hide }">\n          <h3>Are you sure?</h3>\n          <b-button variant="outline-primary" @click="hide()">\n            <i class="fa fa-close" @click="cancel()"> </i\n          ></b-button>\n        </template>\n\n        <template #default="{}">\n           <p v-html="confirmMessage"></p>\n          \n        </template>\n\n        <template #modal-footer="{ ok, cancel }">\n          <b-row>\n            <b-button class="pull-right mx-2" variant="primary" @click="endMe(ok)">\n              <i class="fa fa-check-circle" aria-hidden="true"></i> CONFIRM\n            </b-button>\n            <b-button class="pull-right" variant="danger" @click="cancel()">\n              <i class="fa fa-times-circle-o" aria-hidden="true"></i> CANCEL\n            </b-button>\n          </b-row>\n        </template>\n      </b-modal>\n    </b-row>\n    <b-row>\n      <b-col class="mt-3">\n        <router-link :to="{ name: \'rfq\' }" style="color: darkgray">\n          <i class="fa fa-chevron-left" aria-hidden="true"></i> Go\n          back</router-link\n        >\n      </b-col>\n      <b-col class="mt-3">\n        <h5 v-if="response" class="pull-right">{{ response.company || "" }}</h5>\n      </b-col>\n    </b-row>\n    <hr />\n    <b-row class="mt-4">\n      <b-col cols="6">\n        <h2>Request for quotation</h2>\n      </b-col>\n      <b-col cols="6">\n        <h3 class="pull-right">#{{ parentId }}</h3>\n      </b-col>\n      <b-col cols="12" class="pt-2 mb-3">\n        <b-button-group class="pull-right" v-show="!isReadOnly">\n          <b-button variant="primary"  @click="$bvModal.show(\'modal-scoped\')" >\n            <i style="color: white" class="fa fa-save" aria-hidden="true"></i>\n            Save\n          </b-button>\n        </b-button-group>\n      </b-col>\n      <b-col cols="12">\n        <p v-html="message" style="color: darkgray">   \n        </p>\n      </b-col>\n      \n    </b-row>\n\n    <hr>\n    <b-row><h3><b>There are {{items.length}} item(s) in this RFQ.</b></h3> </b-row>\n    <b-row class="mx-auto mt-4">\n      <b-card class="mx-auto" style="width: 100%">\n        <div class="mx-auto">\n          <b-table\n          stacked = \'md\'\n            striped\n            hover\n            :items="items"\n            :fields="fields"\n            class="mx-auto"\n          >\n            <template v-slot:cell(rate)="row">\n              <b-form-input v-if="!isReadOnly" v-model="row.item.rate" />\n              <span v-else> {{ row.item.rate }}</span>\n            </template>\n            <template v-slot:cell(amount)="data">\n              {{ (data.item.rate * data.item.qty || 0) | money }}\n            </template>\n\n            <template v-slot:cell(image)="row">\n              <b-row v-if="row.item.image">\n                <b-col\n                  ><b-button variant="outline-danger" :disabled="isReadOnly">\n                    <b-link :href="row.item.image">\n                      {{ row.item.image | shortLink }}</b-link\n                    >\n                    <i\n                      class="fa fa-close"\n                      aria-hidden="true"\n                      @click="removeFile(row)"\n                    ></i> </b-button\n                ></b-col>\n              </b-row>\n\n              <b-button\n                v-else\n                variant="primary"\n                :disabled="isReadOnly"\n                @click="uploadFile(row)"\n                ><i class="fa fa-paperclip" aria-hidden="true"></i>\n                Attach</b-button\n              >\n            </template>\n          </b-table>\n        </div>\n        <hr />\n        <b-row>\n          <b-col cols="6">\n            <h5 class="pull-left">\n              <b\n                ><i>NB: Rate 0.0 is equivalent to <u>No Quote</u></i></b\n              >\n            </h5>\n          </b-col>\n          <b-col cols="6">\n            <h3 class="pull-right">TOTAL KES: {{ total }}</h3>\n          </b-col>\n        </b-row>\n      </b-card>\n    </b-row>\n  </b-container>\n</template>\n\n<style scoped>\nbody {\n  padding: 1rem;\n}\n</style>\n\n<script>\nimport { getRfqItems, postRfqItems } from "./../../services/rfq/rfq.js";\nexport default {\n  name: "rfq",\n  data() {\n    return {\n      total: 0,\n      fields: [\n        "item_code",\n        "item_name",\n        { key: "qty", label: "Quantity" },\n        "rate",\n        { key: "image", label: "Attachment" },\n        "amount",\n      ],\n      parentId: "",\n      items: [],\n      isReadOnly: false,\n      isExpired: false,\n      response: {},\n      message: "",\n    };\n  },\n  methods: {\n    endMe(end) {\n    this.saveItems();\n    },\n    uploadFile(row) {\n      const me = this;\n      new frappe.ui.FileUploaderCustom({\n        doctype: "Request for Quotation",\n        docname: me.parentId,\n        on_success(file_doc) {\n         \n          const { file_url, filename } = file_doc;\n          row.item.image = file_url;\n          row.item.files = file_url;\n        },\n      });\n\n    },\n    removeFile(row) {\n      row.item.image = null;\n    },\n    calculateTotals(items) {\n      if (items) {\n        let total = 0;\n        items.forEach((item) => {\n          total = total + item.rate * item.qty;\n        });\n        this.total = total;\n      }\n    },\n    fetchItems(rfqId) {\n      getRfqItems(rfqId).then((data) => {\n        this.response = data.document;\n        const isExpired = data.expiry_status;\n        const notRfq = this.response.doctype !== "Request for Quotation";\n\n        this.isReadOnly = notRfq || isExpired;\n        this.items = this.response.items;\n        console.log("Can\'t edit:", this.isReadOnly);\n        if (isExpired && !notRfq) {\n          this.message = `This RFQ expired on ${this.response.transaction_date}`;\n          return;\n        }\n        if (notRfq) {\n          this.message = `${this.response.owner} Already posted a bid on ${this.response.creation}  under  reference ${this.response.name}. See posted quotation below `;\n        } else {\n          this.message = this.response.message_for_supplier;\n        }\n      });\n    },\n    saveItems() {\n      // TODO: ADD DIALOG\n      this.response.item = this.items;\n      postRfqItems(this.response).then((data) => {\n        frappe.show_alert(" saved");\n        this.$router.go(-1);\n      });\n    },\n  \n  },\n  computed: {\n    \n    confirmMessage() {\n      let numberQuoted = 0;\n      if (this.items) {\n        numberQuoted = this.items.filter((item) => item.rate > 0);\n      }\n      return `You have quoted <b> ${numberQuoted.length} item(s) </b>  worth <b>KES  ${this.total}  </b>,  are you sure want to submit, this action is irreversible`;\n    },\n  },\n  created() {\n    this.parentId = this.$route.params.id;\n    this.fetchItems(this.parentId);\n  },\n  mounted() {\n    this.$root.$on("bv::modal::ok", (bvEvent, modalId) => {\n        console.log("Modal is about to be shown", bvEvent, modalId);\n      });\n  },\n  watch: {\n    items: {\n      handler(val) {\n        this.calculateTotals(val);\n      },\n      deep: true,\n    },\n  },\n};\n</script>\n<style scoped>\n.card {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__2 = "data-v-d360a8f6";
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-modal id="modal-scoped">\n        <template #modal-header="{ cancel,hide }">\n          <h3>Are you sure?</h3>\n          <b-button variant="outline-primary" @click="hide()">\n            <i class="fa fa-close" @click="cancel()"> </i\n          ></b-button>\n        </template>\n\n        <template #default="{}">\n           <p v-html="confirmMessage"></p>\n          \n        </template>\n\n        <template #modal-footer="{ ok, cancel }">\n          <b-row>\n            <b-button class="pull-right mx-2" variant="primary" @click="endMe(ok)">\n              <i class="fa fa-check-circle" aria-hidden="true"></i> CONFIRM\n            </b-button>\n            <b-button class="pull-right" variant="danger" @click="cancel()">\n              <i class="fa fa-times-circle-o" aria-hidden="true"></i> CANCEL\n            </b-button>\n          </b-row>\n        </template>\n      </b-modal>\n    </b-row>\n    <b-row>\n      <b-col class="mt-3">\n        <router-link :to="{ name: \'rfq\' }" style="color: darkgray">\n          <i class="fa fa-chevron-left" aria-hidden="true"></i> Go\n          back</router-link\n        >\n      </b-col>\n      <b-col class="mt-3">\n        <h5 v-if="response" class="pull-right">{{ response.company || "" }}</h5>\n      </b-col>\n    </b-row>\n    <hr />\n    <b-row class="mt-4">\n      <b-col cols="6">\n        <h2>Request for quotation</h2>\n      </b-col>\n      <b-col cols="6">\n        <h3 class="pull-right">#{{ parentId }}</h3>\n      </b-col>\n      <b-col cols="12" class="pt-2 mb-3">\n        <b-button-group class="pull-right" v-show="!isReadOnly">\n          <b-button variant="primary"  @click="$bvModal.show(\'modal-scoped\')" >\n            <i style="color: white" class="fa fa-save" aria-hidden="true"></i>\n            Save\n          </b-button>\n        </b-button-group>\n      </b-col>\n      <b-col cols="12">\n        <p v-html="message" style="color: darkgray">   \n        </p>\n      </b-col>\n      \n    </b-row>\n\n    <hr>\n    <b-row><h3><b>There are {{items.length}} item(s) in this RFQ.</b></h3> </b-row>\n    <b-row class="mx-auto mt-4">\n      <b-card class="mx-auto" style="width: 100%">\n        <div class="mx-auto">\n          <b-table\n          stacked = \'md\'\n            striped\n            hover\n            :items="items"\n            :fields="fields"\n            class="mx-auto"\n          >\n            <template v-slot:cell(rate)="row">\n              <b-form-input v-if="!isReadOnly" v-model="row.item.rate" />\n              <span v-else> {{ row.item.rate }}</span>\n            </template>\n            <template v-slot:cell(amount)="data">\n              {{ (data.item.rate * data.item.qty || 0) | money }}\n            </template>\n\n            <template v-slot:cell(image)="row">\n              <b-row v-if="row.item.image">\n                <b-col\n                  ><b-button variant="outline-danger" :disabled="isReadOnly">\n                    <b-link :href="row.item.image">\n                      {{ row.item.image | shortLink }}</b-link\n                    >\n                    <i\n                      class="fa fa-close"\n                      aria-hidden="true"\n                      @click="removeFile(row)"\n                    ></i> </b-button\n                ></b-col>\n              </b-row>\n\n              <b-button\n                v-else\n                variant="primary"\n                :disabled="isReadOnly"\n                @click="uploadFile(row)"\n                ><i class="fa fa-paperclip" aria-hidden="true"></i>\n                Attach</b-button\n              >\n            </template>\n          </b-table>\n        </div>\n        <hr />\n        <b-row>\n          <b-col cols="6">\n            <h5 class="pull-left">\n              <b\n                ><i>NB: Rate 0.0 is equivalent to <u>No Quote</u></i></b\n              >\n            </h5>\n          </b-col>\n          <b-col cols="6">\n            <h3 class="pull-right">TOTAL KES: {{ total }}</h3>\n          </b-col>\n        </b-row>\n      </b-card>\n    </b-row>\n  </b-container>\n</template>\n\n<style scoped>\nbody {\n  padding: 1rem;\n}\n</style>\n\n<script>\nimport { getRfqItems, postRfqItems } from "./../../services/rfq/rfq.js";\nexport default {\n  name: "rfq",\n  data() {\n    return {\n      total: 0,\n      fields: [\n        "item_code",\n        "item_name",\n        { key: "qty", label: "Quantity" },\n        "rate",\n        { key: "image", label: "Attachment" },\n        "amount",\n      ],\n      parentId: "",\n      items: [],\n      isReadOnly: false,\n      isExpired: false,\n      response: {},\n      message: "",\n    };\n  },\n  methods: {\n    endMe(end) {\n    this.saveItems();\n    },\n    uploadFile(row) {\n      const me = this;\n      new frappe.ui.FileUploaderCustom({\n        doctype: "Request for Quotation",\n        docname: me.parentId,\n        on_success(file_doc) {\n         \n          const { file_url, filename } = file_doc;\n          row.item.image = file_url;\n          row.item.files = file_url;\n        },\n      });\n\n    },\n    removeFile(row) {\n      row.item.image = null;\n    },\n    calculateTotals(items) {\n      if (items) {\n        let total = 0;\n        items.forEach((item) => {\n          total = total + item.rate * item.qty;\n        });\n        this.total = total;\n      }\n    },\n    fetchItems(rfqId) {\n      getRfqItems(rfqId).then((data) => {\n        this.response = data.document;\n        const isExpired = data.expiry_status;\n        const notRfq = this.response.doctype !== "Request for Quotation";\n\n        this.isReadOnly = notRfq || isExpired;\n        this.items = this.response.items;\n        console.log("Can\'t edit:", this.isReadOnly);\n        if (isExpired && !notRfq) {\n          this.message = `This RFQ expired on ${this.response.transaction_date}`;\n          return;\n        }\n        if (notRfq) {\n          this.message = `${this.response.owner} Already posted a bid on ${this.response.creation}  under  reference ${this.response.name}. See posted quotation below `;\n        } else {\n          this.message = this.response.message_for_supplier;\n        }\n      });\n    },\n    saveItems() {\n      // TODO: ADD DIALOG\n      this.response.item = this.items;\n      postRfqItems(this.response).then((data) => {\n        frappe.show_alert(" saved");\n        this.$router.go(-1);\n      });\n    },\n  \n  },\n  computed: {\n    \n    confirmMessage() {\n      let numberQuoted = 0;\n      if (this.items) {\n        numberQuoted = this.items.filter((item) => item.rate > 0);\n      }\n      return `You have quoted <b> ${numberQuoted.length} item(s) </b>  worth <b>KES  ${this.total}  </b>,  are you sure want to submit, this action is irreversible`;\n    },\n  },\n  created() {\n    this.parentId = this.$route.params.id;\n    this.fetchItems(this.parentId);\n  },\n  mounted() {\n    this.$root.$on("bv::modal::ok", (bvEvent, modalId) => {\n        console.log("Modal is about to be shown", bvEvent, modalId);\n      });\n  },\n  watch: {\n    items: {\n      handler(val) {\n        this.calculateTotals(val);\n      },\n      deep: true,\n    },\n  },\n};\n</script>\n<style scoped>\n.card {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n</style>\n';
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
  var rfqItem_default = __vue_component__2;

  // ../frontend/frontend/public/js/supplier/rfq/rfq.vue
  var __vue_script__3 = {
    components: {rfqItem: rfqItem_default},
    data() {
      return {
        fields: [
          "name",
          "company",
          {key: "transaction_date", label: "Expiry Date"},
          "show_details"
        ],
        items: []
      };
    },
    methods: {
      loadSupplierRfqs() {
        getSupplierRfqs().then((data) => {
          this.items = data.reverse();
        });
      },
      linkGen(pageNum) {
        return pageNum === 1 ? "?" : `?page=${pageNum}`;
      }
    },
    created() {
      this.loadSupplierRfqs();
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticStyle: {width: "100%"}}, [
      _c("hr"),
      _vm._v(" "),
      _c("b-row", {staticClass: "mt-4"}, [
        _c("b-col", {attrs: {cols: "12"}}, [
          _c("h1", [_vm._v("Request for quotation")])
        ]),
        _vm._v(" "),
        _c("b-col", {attrs: {cols: "12"}}, [
          _c("h4", {staticStyle: {color: "darkgray"}, attrs: {cols: "12"}}, [_vm._v("Select quotation to fill details")])
        ])
      ], 1),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("b-row", {staticClass: "mx-auto mt-4"}, [
        _c("b-card", {staticClass: "mx-auto", staticStyle: {width: "100%"}}, [
          _c("div", {staticClass: "mx-auto"}, [
            _c("b-table", {
              staticStyle: {width: "100%"},
              attrs: {
                stacked: "md",
                items: _vm.items,
                fields: _vm.fields,
                striped: "",
                bordered: "",
                "sticky-header": "400px",
                responsive: "sm"
              },
              scopedSlots: _vm._u([
                {
                  key: "cell(show_details)",
                  fn: function(row) {
                    return [
                      _c("b-button", {
                        staticClass: "mr-2",
                        attrs: {size: "sm"},
                        on: {click: row.toggleDetails}
                      }, [
                        _c("router-link", {
                          attrs: {
                            to: {
                              name: "rfq-detail",
                              params: {id: row.item.name}
                            }
                          }
                        }, [_vm._v("Show details")])
                      ], 1)
                    ];
                  }
                }
              ])
            })
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
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-63c79641_0", {source: "\n.card[data-v-63c79641] {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\nth[data-v-63c79641] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n    background: black;\n    color: wheat;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/supplier/rfq/rfq.vue"], "names": [], "mappings": ";AAgFA;EACA,0CAAA;EACA,kBAAA;AACA;AAGA;IACA,wBAAA;IACA,gBAAA;IACA,MAAA;IACA,UAAA;IACA,iBAAA;IACA,YAAA;AAEA", "file": "rfq.vue", "sourcesContent": [`<template>
  <b-container style="width: 100%">
    <hr />
    <b-row class="mt-4">
      <b-col cols="12">
        <h1>Request for quotation</h1>
      </b-col>
      <b-col cols="12">
        <h4 cols="12" style="color: darkgray">Select quotation to fill details</h4>
      </b-col>
    </b-row>
    <hr />
    <b-row class="mx-auto mt-4">
      <b-card class="mx-auto" style="width: 100%">
        <div class="mx-auto">
          <b-table
          stacked = 'md'
            style="width: 100%"
            :items="items"
            :fields="fields"
            striped
            bordered
        
            :sticky-header="'400px'"
            responsive="sm"
          >
            <template #cell(show_details)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                <router-link
                  :to="{ name: 'rfq-detail', params: { id: row.item.name } }"
                  >Show details</router-link
                >
              </b-button>
            </template>
          </b-table>
        </div>
      </b-card>
    </b-row>
    <b-row>
      <b-pagination-nav v-if="false"
        :link-gen="linkGen"
        :number-of-pages="10"
        use-router
      ></b-pagination-nav>
    </b-row>
  </b-container>
</template>

<script>
import rfqItem from "./rfqItem.vue";
import { getSupplierRfqs } from "./../../services/rfq/rfq.js";
export default {
  components: { rfqItem },
  data() {
    return {
      fields: [
        "name",
        "company",
        { key: "transaction_date", label: "Expiry Date" },
        "show_details",
      ],
      items: [],
    };
  },
  methods: {
    loadSupplierRfqs() {
      getSupplierRfqs().then((data) => {
        this.items = data.reverse();
      });
    },
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : \`?page=\${pageNum}\`;
    },
  },
  created() {
    this.loadSupplierRfqs();
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
}


 th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
    background: black;
    color: wheat;

}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__3 = "data-v-63c79641";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container style="width: 100%">
    <hr />
    <b-row class="mt-4">
      <b-col cols="12">
        <h1>Request for quotation</h1>
      </b-col>
      <b-col cols="12">
        <h4 cols="12" style="color: darkgray">Select quotation to fill details</h4>
      </b-col>
    </b-row>
    <hr />
    <b-row class="mx-auto mt-4">
      <b-card class="mx-auto" style="width: 100%">
        <div class="mx-auto">
          <b-table
          stacked = 'md'
            style="width: 100%"
            :items="items"
            :fields="fields"
            striped
            bordered
        
            :sticky-header="'400px'"
            responsive="sm"
          >
            <template #cell(show_details)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                <router-link
                  :to="{ name: 'rfq-detail', params: { id: row.item.name } }"
                  >Show details</router-link
                >
              </b-button>
            </template>
          </b-table>
        </div>
      </b-card>
    </b-row>
    <b-row>
      <b-pagination-nav v-if="false"
        :link-gen="linkGen"
        :number-of-pages="10"
        use-router
      ></b-pagination-nav>
    </b-row>
  </b-container>
</template>

<script>
import rfqItem from "./rfqItem.vue";
import { getSupplierRfqs } from "./../../services/rfq/rfq.js";
export default {
  components: { rfqItem },
  data() {
    return {
      fields: [
        "name",
        "company",
        { key: "transaction_date", label: "Expiry Date" },
        "show_details",
      ],
      items: [],
    };
  },
  methods: {
    loadSupplierRfqs() {
      getSupplierRfqs().then((data) => {
        this.items = data.reverse();
      });
    },
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : \`?page=\${pageNum}\`;
    },
  },
  created() {
    this.loadSupplierRfqs();
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
}


 th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
    background: black;
    color: wheat;

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
  var rfq_default = __vue_component__3;

  // ../frontend/frontend/public/js/supplier/core/WorkingArea.vue
  var __vue_script__4 = {
    components: {rfq: rfq_default},
    name: "WorkingArea"
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "area-background"}, [_c("rfq")], 1);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-57dabd29_0", {source: "\n.area-background[data-v-57dabd29] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/supplier/core/WorkingArea.vue"], "names": [], "mappings": ";AAeA;EACA,4BAAA;EACA,6BAAA;AAEA", "file": "WorkingArea.vue", "sourcesContent": ['<template>\n  <b-container class="area-background">\n    <rfq />\n  </b-container>\n</template>\n\n<script>\nimport rfq from "../rfq/rfq.vue";\nexport default {\n  components: { rfq },\n  name: "WorkingArea",\n};\n</script>\n\n<style scoped>\n.area-background {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n \n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__4 = "data-v-57dabd29";
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <b-container class="area-background">\n    <rfq />\n  </b-container>\n</template>\n\n<script>\nimport rfq from "../rfq/rfq.vue";\nexport default {\n  components: { rfq },\n  name: "WorkingArea",\n};\n</script>\n\n<style scoped>\n.area-background {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n \n}\n</style>\n';
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
  var WorkingArea_default = __vue_component__4;

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

  // ../frontend/frontend/public/js/supplier/core/TopHeader.vue
  var __vue_script__5 = {
    components: {SideBar: Sidebar_default},
    name: "TopHeader",
    data() {
      return {
        socket: null
      };
    },
    computed: {
      notificationList() {
        return this.$store.getters["notification/getNotificationList"];
      }
    },
    mounted() {
      const user = frappe.session.user;
      this.getNotifications(user);
    },
    methods: {
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
  var __vue_render__5 = function() {
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
              _c("a", {
                attrs: {href: "/app/patient-chart", target: "_blank"}
              }, [_vm._v("Patient Chart")])
            ])
          ]),
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
                                _vm._v("\n                            " + _vm._s(notification.message) + "\n                          ")
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
                                  _vm._v("\n                              ago")
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
                  }, [
                    _vm._v("\n                About\n              ")
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
                  }, [
                    _vm._v("\n                Reload\n              ")
                  ]),
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
                  _c("div", {staticClass: "dropdown-divider"}),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {onclick: "return frappe.app.logout()"}
                  }, [
                    _vm._v("\n                Logout\n              ")
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
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = function(inject) {
    if (!inject)
      return;
    inject("data-v-464119f7_0", {source: "\n#page-patient-chart {\n  height: 100vh;\n}\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n@media only screen and (min-width: 767px) {\n.no-logo {\n    display: inline;\n}\n.no-side-bar {\n    display: none;\n}\n}\n@media only screen and (max-width: 767px) {\n.no-logo {\n    display: none;\n}\n.no-side-bar {\n    display: inline;\n}\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/supplier/core/TopHeader.vue"], "names": [], "mappings": ";AAsbA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;AACA;AAEA;AACA;IACA,eAAA;AACA;AACA;IACA,aAAA;AACA;AACA;AAEA;AACA;IACA,aAAA;AACA;AACA;IACA,eAAA;AACA;AACA", "file": "TopHeader.vue", "sourcesContent": [`<template>
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
            
            <a href="/app/patient-chart" target="_blank">Patient Chart</a>
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

    <b-sidebar id="sidebar-1" title="Menu" backdrop shadow>
      <div class="">
        <side-bar />
      </div>
    </b-sidebar>
  </div>
</template>

<script>

import SideBar from "./Sidebar.vue";


export default {
  components: {  SideBar },
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
  },
  mounted() {
    const user = frappe.session.user;
    this.getNotifications(user);
  },

  methods: {
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
  var __vue_scope_id__5 = void 0;
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
            
            <a href="/app/patient-chart" target="_blank">Patient Chart</a>
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

    <b-sidebar id="sidebar-1" title="Menu" backdrop shadow>
      <div class="">
        <side-bar />
      </div>
    </b-sidebar>
  </div>
</template>

<script>

import SideBar from "./Sidebar.vue";


export default {
  components: {  SideBar },
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
  },
  mounted() {
    const user = frappe.session.user;
    this.getNotifications(user);
  },

  methods: {
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
  var TopHeader_default = __vue_component__5;

  // ../frontend/frontend/public/js/supplier/Main.vue
  var __vue_script__6 = {
    name: "Main",
    data: function() {
      return {
        title: "Suppliers Portal",
        selectedPatient: {},
        encounter: {},
        medicationOrder: {},
        unSubmittedProcedures: [],
        sideBarNormalSize: [12, 3, 3],
        wordkingAreaNormalSize: [12, 9, 9],
        fullScreenWorkArea: false,
        searchResultText: "Searching...",
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
      },
      selectedRfq(current, old) {
      },
      $route() {
        frappe.router.current_route = frappe.router.parse();
        frappe.breadcrumbs.update();
      }
    },
    mounted() {
      const user = frappe.session.user;
      const socket = frappe.socketio.socket;
      this.socket = socket;
      socket.on("connect", (sock) => {
      });
    },
    created() {
      this.$store.registerModule("supplier", moduleSupplier_default);
    },
    computed: {},
    components: {
      SideBar: Sidebar_default,
      WorkingArea: WorkingArea_default,
      TopHeader: TopHeader_default
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "main-container watu", attrs: {fluid: ""}}, [
      _c("b-row", [_c("top-header", {staticStyle: {width: "100%"}})], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", {
          staticClass: "no-left-padding no-right-padding hidden-sm-down d-none d-sm-block",
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
  var __vue_staticRenderFns__6 = [];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = function(inject) {
    if (!inject)
      return;
    inject("data-v-f0f861f8_0", {source: '\n.main-container {\n  height: 100vh;\n  overflow-x: hidden;\n  /* font-family: "Nunito", sans-serif; */\n  /* font-size: smaller; */\n}\n.top-menu {\n  background: white;\n  padding: 20px;\n}\n.no-left-padding {\n  padding-left: 0px !important;\n}\n.side-bar {\n  background: rgba(0, 0, 0, 0.03);\n  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2); */\n  border-right: 1px solid lightgray;\n  transition: 0.3s;\n}\n.working-area {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 100vh;\n  width: 100%;\n  scrollbar-width: thin; /* "auto" or "thin" */\n  scrollbar-color: lightgray transparent;\n}\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.layout-main {\n  height: calc(100vh - 60px);\n}\n.layout-main-section-wrapper {\n  margin-bottom: 0px !important;\n}\ndiv::-webkit-scrollbar {\n  width: 0px; /* width of the entire scrollbar */\n}\ndiv::-webkit-scrollbar-track {\n  background: transparent; /* color of the tracking area */\n}\ndiv::-webkit-scrollbar-thumb {\n  background-color: grey; /* color of\u220F the scroll thumb */\n  border-radius: 20px; /* roundness of the scroll thumb */\n  border: 0px solid orange; /* creates padding around scroll thumb */\n}\n@media only screen and (max-width: 767px) {\n.no-side-bar {\n    display: none;\n}\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/supplier/Main.vue"], "names": [], "mappings": ";AAoGA;EACA,aAAA;EACA,kBAAA;EACA,uCAAA;EACA,wBAAA;AACA;AAEA;EACA,iBAAA;EACA,aAAA;AACA;AACA;EACA,4BAAA;AACA;AAEA;EACA,+BAAA;EACA,gDAAA;EACA,iCAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,qBAAA,EAAA,qBAAA;EACA,sCAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,0BAAA;AACA;AACA;EACA,6BAAA;AACA;AAEA;EACA,UAAA,EAAA,kCAAA;AACA;AAEA;EACA,uBAAA,EAAA,+BAAA;AACA;AAEA;EACA,sBAAA,EAAA,+BAAA;EACA,mBAAA,EAAA,kCAAA;EACA,wBAAA,EAAA,wCAAA;AACA;AAGA;AACA;IACA,aAAA;AACA;AACA", "file": "Main.vue", "sourcesContent": [`<template>
  <b-container class="main-container watu" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row>
      <b-col 
        :sm="sideBarNormalSize[0]"
        :md="sideBarNormalSize[1]"
        :lg="sideBarNormalSize[2]"
        class="no-left-padding no-right-padding hidden-sm-down d-none d-sm-block"
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
import supplierModule from "./../state/supplier/moduleSupplier.js";
import TopHeader from './core/TopHeader.vue';
export default {
  name: "Main",
  data: function () {
    return {
      title: "Suppliers Portal",
      selectedPatient: {},
      encounter: {},
      medicationOrder: {},
      unSubmittedProcedures: [],
      sideBarNormalSize: [12, 3, 3],
      wordkingAreaNormalSize: [12, 9, 9],
      fullScreenWorkArea: false,
      searchResultText: "Searching...",
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

    selectedRfq(current, old) {
      //   this.$store.dispatch("notification/addNotification", data.data);
    },
    $route() {
      frappe.router.current_route = frappe.router.parse();
      frappe.breadcrumbs.update();
    },
  },

  mounted() {
    const user = frappe.session.user;
    const socket = frappe.socketio.socket;
    this.socket = socket;

    socket.on("connect", (sock) => {});
  },
  created() {
    this.$store.registerModule("supplier", supplierModule);
  },
  computed: {},
  components: {
    SideBar,
    WorkingArea,
    TopHeader,
  },
};
</script>
<style>
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
  height: 100vh;
  width: 100%;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: lightgray transparent;
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


@media only screen and (max-width: 767px) {
  .no-side-bar {
    display: none;
  }
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
  <b-container class="main-container watu" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row>
      <b-col 
        :sm="sideBarNormalSize[0]"
        :md="sideBarNormalSize[1]"
        :lg="sideBarNormalSize[2]"
        class="no-left-padding no-right-padding hidden-sm-down d-none d-sm-block"
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
import supplierModule from "./../state/supplier/moduleSupplier.js";
import TopHeader from './core/TopHeader.vue';
export default {
  name: "Main",
  data: function () {
    return {
      title: "Suppliers Portal",
      selectedPatient: {},
      encounter: {},
      medicationOrder: {},
      unSubmittedProcedures: [],
      sideBarNormalSize: [12, 3, 3],
      wordkingAreaNormalSize: [12, 9, 9],
      fullScreenWorkArea: false,
      searchResultText: "Searching...",
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

    selectedRfq(current, old) {
      //   this.$store.dispatch("notification/addNotification", data.data);
    },
    $route() {
      frappe.router.current_route = frappe.router.parse();
      frappe.breadcrumbs.update();
    },
  },

  mounted() {
    const user = frappe.session.user;
    const socket = frappe.socketio.socket;
    this.socket = socket;

    socket.on("connect", (sock) => {});
  },
  created() {
    this.$store.registerModule("supplier", supplierModule);
  },
  computed: {},
  components: {
    SideBar,
    WorkingArea,
    TopHeader,
  },
};
</script>
<style>
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
  height: 100vh;
  width: 100%;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: lightgray transparent;
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


@media only screen and (max-width: 767px) {
  .no-side-bar {
    display: none;
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
  var Main_default = __vue_component__6;

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

  // ../frontend/frontend/public/js/supplier/supplier.bundle.js
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
  frappe.provide("frappe.supplier");
  frappe.supplier.Chart = class {
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
//# sourceMappingURL=supplier.bundle.7CHOQMES.js.map
