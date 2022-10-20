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
          var parent2 = this.get(path.slice(0, -1));
          parent2.addChild(path[path.length - 1], newModule);
        }
        if (rawModule.modules) {
          forEachValue(rawModule.modules, function(rawChildModule, key) {
            this$1.register(path.concat(key), rawChildModule, runtime);
          });
        }
      };
      ModuleCollection.prototype.unregister = function unregister(path) {
        var parent2 = this.get(path.slice(0, -1));
        var key = path[path.length - 1];
        var child = parent2.getChild(key);
        if (!child) {
          if (true) {
            console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
          }
          return;
        }
        if (!child.runtime) {
          return;
        }
        parent2.removeChild(key);
      };
      ModuleCollection.prototype.isRegistered = function isRegistered(path) {
        var parent2 = this.get(path.slice(0, -1));
        var key = path[path.length - 1];
        if (parent2) {
          return parent2.hasChild(key);
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
        assert: function(value2) {
          return typeof value2 === "function";
        },
        expected: "function"
      };
      var objectAssert = {
        assert: function(value2) {
          return typeof value2 === "function" || typeof value2 === "object" && typeof value2.handler === "function";
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
          forEachValue(rawModule[key], function(value2, type) {
            assert(assertOptions.assert(value2), makeAssertionMessage(path, key, type, value2, assertOptions.expected));
          });
        });
      }
      function makeAssertionMessage(path, key, type, value2, expected) {
        var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
        if (path.length > 0) {
          buf += ' in module "' + path.join(".") + '"';
        }
        buf += " is " + JSON.stringify(value2) + ".";
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
                var message2 = "mutation " + mutation.type + formattedTime;
                startMessage(logger, message2, collapsed);
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
                var message2 = "action " + action.type + formattedTime;
                startMessage(logger, message2, collapsed);
                logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
                endMessage(logger);
              }
            });
          }
        };
      }
      function startMessage(logger, message2, collapsed) {
        var startMessage2 = collapsed ? logger.groupCollapsed : logger.group;
        try {
          startMessage2.call(logger, message2);
        } catch (e) {
          logger.log(message2);
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

  // ../frontend/frontend/public/js/accounts/core/Sidebar.vue
  var __vue_script__ = {
    name: "Sidebar",
    data() {
      return {
        center: "center"
      };
    },
    methods: {
      patientItemClicked(patientItem) {
        console.log(patientItem);
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "side-bar-area aside-bottom-padding"}, [
      _c("div", {staticClass: "content-area"}, [
        _c("b-row", [
          _c("b-col", {attrs: {cols: "12"}}, [
            _c("div", {staticClass: "p user-area"}, [
              _c("b-row", [
                _c("b-col", {attrs: {cols: "10"}}, [
                  _c("b-row", [
                    _c("b-col", [
                      _c("h4", {
                        staticStyle: {
                          color: "white",
                          "font-weight": "bold",
                          "text-transform": "capitalize"
                        }
                      }, [
                        _vm._v("\n                " + _vm._s(_vm.frappe.session.user_fullname) + "\n              ")
                      ])
                    ])
                  ], 1),
                  _vm._v(" "),
                  _c("b-row", [
                    _c("b-col", [
                      _c("h5", {staticStyle: {color: "white"}}, [
                        _vm._v("\n                " + _vm._s(_vm.frappe.session.user_email) + "\n              ")
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
            _c("hr", {
              staticStyle: {height: "0.5px", "margin-right": "17px"}
            }),
            _vm._v(" "),
            _c("b-row", {staticClass: "mt-3 item-link"}, [
              _c("b-col", {staticClass: "mr-1", attrs: {cols: "2"}}, [
                _c("b-button", {
                  staticClass: "psm",
                  staticStyle: {color: "white"}
                }, [
                  _c("i", {
                    staticClass: "fa fa-search mt-1",
                    attrs: {id: "ico", "aria-hidden": "true"}
                  })
                ])
              ], 1),
              _vm._v(" "),
              _c("b-col", {staticClass: "title"}, [
                _c("b-row", [
                  _c("b-col", {
                    staticClass: "pull-left title",
                    attrs: {cols: "12"}
                  }, [
                    _c("router-link", {
                      staticClass: "pull-left title",
                      attrs: {to: {name: "accounts-search"}}
                    }, [
                      _vm._v("\n            Patient Search\n            ")
                    ])
                  ], 1),
                  _vm._v(" "),
                  _c("b-col", {
                    staticClass: "pull-left sub-title",
                    attrs: {cols: "12"}
                  }, [
                    _vm._v("\n            Search Patients\n          ")
                  ])
                ], 1)
              ], 1),
              _vm._v(" "),
              _c("b-col", {
                staticClass: "pull-right vs-align-center",
                attrs: {cols: "2"}
              }, [
                _c("i", {
                  staticClass: "fa fa-chevron-right pull-right vs-align-center mt-1 mr-1",
                  attrs: {"aria-hidden": "true"}
                })
              ])
            ], 1),
            _vm._v(" "),
            _c("b-row", {staticClass: "mt-3 item-link"}, [
              _c("b-col", {staticClass: "mr-1", attrs: {cols: "2"}}, [
                _c("b-button", {
                  staticClass: "psm",
                  staticStyle: {color: "white"}
                }, [
                  _c("i", {
                    staticClass: "fa fa-fax mt-1",
                    attrs: {id: "ico", "aria-hidden": "true"}
                  })
                ])
              ], 1),
              _vm._v(" "),
              _c("b-col", {staticClass: "title"}, [
                _c("b-row", [
                  _c("b-col", {
                    staticClass: "pull-left title",
                    attrs: {cols: "12"}
                  }, [
                    _c("router-link", {
                      staticClass: "pull-left title",
                      attrs: {
                        to: {name: "accounts-finalizations"}
                      }
                    }, [
                      _vm._v("\n            Finalized Invoices\n            ")
                    ])
                  ], 1),
                  _vm._v(" "),
                  _c("b-col", {
                    staticClass: "pull-left sub-title",
                    attrs: {cols: "12"}
                  }, [
                    _vm._v("\n            Finalized Invoices\n          ")
                  ])
                ], 1)
              ], 1),
              _vm._v(" "),
              _c("b-col", {
                staticClass: "pull-right vs-align-center",
                attrs: {cols: "2"}
              }, [
                _c("i", {
                  staticClass: "fa fa-chevron-right pull-right vs-align-center mt-1 mr-1",
                  attrs: {"aria-hidden": "true"}
                })
              ])
            ], 1)
          ], 1)
        ], 1)
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-4882a5e5_0", {source: "\n.no-sides[data-v-4882a5e5] {\n  margin-left: 0px;\n  margin-right: 8px;\n}\n.side-bar-area[data-v-4882a5e5] {\n  background: white;\n    width: 100% !important;\n    padding-top: 20px;\n    min-height: 600px;\n    height: 100vh;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    background-color: white;\n    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);\n    padding-left: 11px !important;\n    padding-right: 11px !important;\n}\n.item-link[data-v-4882a5e5] {\n  border-bottom: 1px solid white;\n\n  color: #fff !important;\n\n  padding-left: 4px;\n}\n.title[data-v-4882a5e5] {\n  font-weight: bold;\n  color: black !important;\n  margin-left: 4px;\n}\n.user-area[data-v-4882a5e5] {\n  background: #06a79e;\n  padding: 13px;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-right: 15px;\n  color: white;\n}\n.menu-header[data-v-4882a5e5] {\n  width: 100%;\n  padding: 10px;\n  background: white;\n  font-size: 12px;\n  font-weight: bold;\n  /* box-shadow: 0px 7px 0px -5px #ccc; */\n}\n.sub-title[data-v-4882a5e5] {\n  color: gray !important;\n  font-size: 10px;\n  margin-left: 4px;\n  font-weight: 400;\n}\n.vs-align-center[data-v-4882a5e5] {\n  color: white;\n}\n.content-area[data-v-4882a5e5]{\nheight: 87vh;\noverflow-y: scroll;\noverflow-x: hidden;\nscrollbar-width:thin;\nbackground: white;\npadding-bottom: 16px;\npadding-left: 16px;\nborder-radius: 5px;\n}\n.psm[data-v-4882a5e5] {\n    display: inline-block;\n    border-radius: 50px;\n    box-shadow: 0px 0px 2px #888;\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    position: relative;\n    padding-bottom:10px ;\n    position: relative;\n}\n#ico[data-v-4882a5e5]{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 50%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    display: block;\n    color:#06a79e;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/accounts/core/Sidebar.vue"], "names": [], "mappings": ";AA4MA;EACA,gBAAA;EACA,iBAAA;AACA;AAEA;EACA,iBAAA;IACA,sBAAA;IACA,iBAAA;IACA,iBAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,uBAAA;IACA,kEAAA;IACA,6BAAA;IACA,8BAAA;AACA;AACA;EACA,8BAAA;;EAEA,sBAAA;;EAEA,iBAAA;AACA;AACA;EACA,iBAAA;EACA,uBAAA;EACA,gBAAA;AACA;AACA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;AACA;AACA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,uCAAA;AACA;AACA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AACA;AACA;EACA,YAAA;AACA;AACA;AACA,YAAA;AACA,kBAAA;AACA,kBAAA;AACA,oBAAA;AACA,iBAAA;AACA,oBAAA;AACA,kBAAA;AACA,kBAAA;AACA;AACA;IACA,qBAAA;IACA,mBAAA;IACA,4BAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;IACA,oBAAA;IACA,kBAAA;AACA;AACA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,WAAA;IACA,gCAAA;IACA,WAAA;IACA,YAAA;IACA,cAAA;IACA,aAAA;AACA", "file": "Sidebar.vue", "sourcesContent": [`<template>
  <b-container class="side-bar-area aside-bottom-padding">
    <div class="content-area">
    <b-row>
      <b-col cols="12">
      <div class="p user-area">
      <b-row >
        <b-col cols="10">
          <b-row>
            <b-col>
              <h4 style="color: white; font-weight: bold;text-transform: capitalize">
                {{ frappe.session.user_fullname }}
              </h4>
            </b-col>
            </b-row>
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
    
   <hr style="height:0.5px;margin-right:17px;">
     <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button class="psm" style="color: white">
          <i class="fa fa-search mt-1" id="ico" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
         <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'accounts-search'}" class="pull-left title">
            Patient Search
            </router-link>
          </b-col>
          <b-col cols="12" class="pull-left sub-title">
            Search Patients
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
     <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button class="psm" style="color: white">
          <i class="fa fa-fax mt-1" id="ico" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
         <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'accounts-finalizations'}" class="pull-left title">
            Finalized Invoices
            </router-link>
          </b-col>
          <b-col cols="12" class="pull-left sub-title">
            Finalized Invoices
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
    
      </b-col>
    </b-row>
  </div> 


 <!-- <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="primary" style="color: white">
          <i class="fa fa-calendar mt-1" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">Invoices</b-col>
          <b-col cols="12" class="pull-left sub-title">
            Invoice
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true">
        </i>
      </b-col>
    </b-row> -->
<!-- 
    <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="success" style="color: white">
          <i class="fa fa-user  mt-1" aria-hidden="true"></i> </b-button>
        </b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'add-patient'}" class="pull-left title">
              Payment Entries
            </router-link>
            </b-col>
          <b-col cols="12" class="pull-left sub-title">
            Receipts and payments
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true">
        </i>
      </b-col>
    </b-row> -->
   

    <!-- <b-row class="mt-4 mb-2 ml-1">
      <div
        class="mx-auto menu-header"
        style="width: 100%; padding: 3px; color:darkgray"
      >
        <div class="pull-left">MY LISTS</div>
      </div>
    </b-row> -->

    <!-- <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="danger" style="color: white">
          <i class="fa fa-user  mt-1" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'patients' }" class="pull-left title"
              >Patients</router-link
            >
          </b-col>
          <b-col cols="12" class="pull-left sub-title">
            List of all registered patients</b-col
          >
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
    <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="warning" style="color: white">
          <i class="fa fa-calendar mt-1" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">Appointments</b-col>
          <b-col cols="12" class="pull-left sub-title"
            >List of all appointments
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row> -->
  </b-container>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      center: "center",
    };
  },
 
  methods: {
    patientItemClicked(patientItem){
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
  background: #06a79e;
  padding: 13px;
  border-radius: 5px;
  margin-top: 15px;
  margin-right: 15px;
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
  color: white;
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
.psm {
    display: inline-block;
    border-radius: 50px;
    box-shadow: 0px 0px 2px #888;
    height: 40px;
    width: 40px;
    text-align: center;
    position: relative;
    padding-bottom:10px ;
    position: relative;
}
#ico{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color:#06a79e;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-4882a5e5";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="side-bar-area aside-bottom-padding">
    <div class="content-area">
    <b-row>
      <b-col cols="12">
      <div class="p user-area">
      <b-row >
        <b-col cols="10">
          <b-row>
            <b-col>
              <h4 style="color: white; font-weight: bold;text-transform: capitalize">
                {{ frappe.session.user_fullname }}
              </h4>
            </b-col>
            </b-row>
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
    
   <hr style="height:0.5px;margin-right:17px;">
     <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button class="psm" style="color: white">
          <i class="fa fa-search mt-1" id="ico" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
         <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'accounts-search'}" class="pull-left title">
            Patient Search
            </router-link>
          </b-col>
          <b-col cols="12" class="pull-left sub-title">
            Search Patients
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
     <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button class="psm" style="color: white">
          <i class="fa fa-fax mt-1" id="ico" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
         <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'accounts-finalizations'}" class="pull-left title">
            Finalized Invoices
            </router-link>
          </b-col>
          <b-col cols="12" class="pull-left sub-title">
            Finalized Invoices
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
    
      </b-col>
    </b-row>
  </div> 


 <!-- <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="primary" style="color: white">
          <i class="fa fa-calendar mt-1" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">Invoices</b-col>
          <b-col cols="12" class="pull-left sub-title">
            Invoice
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true">
        </i>
      </b-col>
    </b-row> -->
<!-- 
    <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="success" style="color: white">
          <i class="fa fa-user  mt-1" aria-hidden="true"></i> </b-button>
        </b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'add-patient'}" class="pull-left title">
              Payment Entries
            </router-link>
            </b-col>
          <b-col cols="12" class="pull-left sub-title">
            Receipts and payments
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true">
        </i>
      </b-col>
    </b-row> -->
   

    <!-- <b-row class="mt-4 mb-2 ml-1">
      <div
        class="mx-auto menu-header"
        style="width: 100%; padding: 3px; color:darkgray"
      >
        <div class="pull-left">MY LISTS</div>
      </div>
    </b-row> -->

    <!-- <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="danger" style="color: white">
          <i class="fa fa-user  mt-1" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">
            <router-link :to="{ name: 'patients' }" class="pull-left title"
              >Patients</router-link
            >
          </b-col>
          <b-col cols="12" class="pull-left sub-title">
            List of all registered patients</b-col
          >
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row>
    <b-row class="mt-3 item-link">
      <b-col cols="2" class="mr-1">
        <b-button variant="warning" style="color: white">
          <i class="fa fa-calendar mt-1" aria-hidden="true"></i> </b-button
      ></b-col>
      <b-col class="title">
        <b-row>
          <b-col cols="12" class="pull-left title">Appointments</b-col>
          <b-col cols="12" class="pull-left sub-title"
            >List of all appointments
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="pull-right vs-align-center">
        <i
          class="fa fa-chevron-right pull-right vs-align-center mt-1 mr-1"
          aria-hidden="true"
        ></i
      ></b-col>
    </b-row> -->
  </b-container>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      center: "center",
    };
  },
 
  methods: {
    patientItemClicked(patientItem){
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
  background: #06a79e;
  padding: 13px;
  border-radius: 5px;
  margin-top: 15px;
  margin-right: 15px;
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
  color: white;
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
.psm {
    display: inline-block;
    border-radius: 50px;
    box-shadow: 0px 0px 2px #888;
    height: 40px;
    width: 40px;
    text-align: center;
    position: relative;
    padding-bottom:10px ;
    position: relative;
}
#ico{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color:#06a79e;
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

  // ../frontend/frontend/public/js/state/accounts/state.js
  var state_default = {
    patient: {},
    accountSummary: void 0,
    salesOrderTotal: 0,
    invoiceFInalization: []
  };

  // ../frontend/frontend/public/js/state/accounts/mutations.js
  var mutations_default = {
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
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message: message2}) => resolve(message2),
    error: reject
  }));
  var getPatient = ({patient_name}) => api({
    method: "billing.billing.api.accounts.patients.get_patient",
    args: {
      patient_name
    }
  });
  var getInvoiceFinalizations = (customer_number) => api({
    method: "billing.billing.api.accounts.patients.get_invoice_finalizations",
    args: {
      customer_number
    }
  });
  var savePatientScheme = ({
    patient_name,
    scheme_name,
    member_number,
    principal_member,
    relationship_to_principal,
    inpatient_limit,
    outpatient_limit
  }) => api({
    method: "billing.billing.api.accounts.patients.create_patient_scheme",
    args: {
      patient_name,
      scheme_name,
      member_number,
      principal_member,
      relationship_to_principal,
      inpatient_limit,
      outpatient_limit
    }
  });
  var savePaymentEntry = ({
    docname,
    doctype,
    amount,
    account_for_change,
    change_amount = 0,
    amount_tendered,
    reference_no,
    mode_of_payment
  }) => api({
    method: "billing.billing.api.accounts.patients.create_payment_entry",
    args: {
      docname,
      doctype,
      amount,
      account_for_change,
      change_amount,
      amount_tendered,
      reference_no,
      mode_of_payment
    }
  });
  var authorizeSalesrder = ({sales_order_name}) => api({
    method: "billing.billing.api.accounts.patients.set_sales_order_as_authorized",
    args: {
      sales_order_name
    }
  });
  var transitionSalesOrderToInvoice = ({sales_order_name}) => api({
    method: "billing.billing.api.accounts.patients.transition_sales_order_to_invoice",
    args: {
      sales_order_name
    }
  });
  var submitSalesOrder = ({sales_order_name}) => api({
    method: "billing.billing.api.accounts.patients.submit_sales_order",
    args: {
      sales_order_name
    }
  });
  var savePrePayment = ({
    customer_name,
    amount,
    account_for_change,
    change_amount = 0,
    amount_tendered,
    reference_no,
    mode_of_payment
  }) => api({
    method: "billing.billing.api.accounts.patients.create_prepayment",
    args: {
      customer_name,
      amount,
      account_for_change,
      change_amount,
      amount_tendered,
      reference_no,
      mode_of_payment
    }
  });
  var getPatientProcedues = ({patient_number = ""}) => api({
    method: "billing.billing.api.accounts.patients.get_patient_procedures",
    args: {
      patient_number
    }
  });
  var getProcedureChargess = ({procedure_id}) => api({
    method: "billing.billing.api.accounts.patients.get_patient_procedures_charges",
    args: {
      procedure_id
    }
  });
  var appendProcedureCharges = ({procedure_charge_name, payload}) => api({
    method: "billing.billing.api.accounts.patients.append_procedure_charges",
    args: {
      procedure_charge_name,
      payload
    }
  });
  var submitProcedureCharges = ({procedure_charge_name}) => api({
    method: "billing.billing.api.accounts.patients.submit_procedure_charges",
    args: {
      procedure_charge_name
    }
  });
  var getCategorizedSalesOrders = ({patient_name}) => api({
    method: "billing.billing.api.accounts.patients.get_categorized_sales_orders",
    args: {
      patient_name
    }
  });
  var getCategorizedSalesInvoices = ({patient_number}) => api({
    method: "billing.billing.api.accounts.patients.get_categorized_customer_invoice",
    args: {
      patient_number
    }
  });
  var getInsuranceSalesOrders = ({patient_name}) => api({
    method: "billing.billing.api.accounts.patients.get_insurance_sales_orders",
    args: {
      patient_name
    }
  });
  var updateSalesOrderCustomer = ({
    sales_order_name,
    customer_group_name
  }) => api({
    method: "billing.billing.api.accounts.patients.update_sales_order_customer",
    args: {
      sales_order_name,
      customer_group_name
    }
  });
  var approvePreAuth = (sales_order_name) => api({
    method: "billing.billing.api.accounts.patients.approve_pre_auth",
    args: {
      sales_order_name
    }
  });
  var sendSalesOrderToDraft = (sales_order_name) => api({
    method: "billing.billing.api.accounts.patients.send_order_to_draft",
    args: {
      sales_order_name
    }
  });
  var createSalesReturn = ({invoice_name, return_amount}) => api({
    method: "billing.billing.api.accounts.patients.sales_return",
    args: {
      invoice_name,
      return_amount
    }
  });
  var submitInvoiceFinalization = ({finalization_name}) => api({
    method: "billing.billing.api.accounts.patients.submit_finalization",
    args: {
      finalization_name
    }
  });
  var createCustomSalesOrder = ({
    items,
    warehouse,
    customer_name,
    patient
  }) => api({
    method: "billing.billing.api.accounts.customer.create_sales_order_from_accounts",
    args: {
      items,
      warehouse,
      customer_name,
      patient
    }
  });
  var getUserWarehouses = () => api({
    method: "billing.billing.api.accounts.customer.get_user_permitted_warehouses",
    args: {}
  });
  var fetchConditionalItemPrice = ({
    item_code,
    customer,
    patient,
    warehouse = "",
    qty = 1
  }) => api({
    method: "billing.billing.api.sales_orders.sales_order_endpoint.fetch_conditional_item_price",
    args: {
      item_code,
      customer,
      patient,
      warehouse,
      qty
    }
  });
  var markSalesOrderAsPosted = ({sales_order_name}) => api({
    method: "billing.billing.api.sales_invoice.create_sales_invoice.post_sales_order",
    args: {
      sales_order_name
    }
  });
  var apppendSalesOrderToInvoice = ({customer_name}) => api({
    method: "billing.billing.api.sales_invoice.create_sales_invoice.invoice_sales_orders",
    args: {
      customer_name
    }
  });
  var changeSalesOrderCustomer = (args) => api({
    method: "billing.billing.api.sales_invoice.create_sales_invoice.change_invoice_customer",
    args
  });

  // ../frontend/frontend/public/js/services/patient_chart/accounts.js
  var api2 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var getPatientPayments = ({
    patient_number = "",
    appointment_number = "",
    inpatient_record = ""
  }) => api2({
    method: "clinical.api.patient_accounts.get_patient_payments",
    args: {
      patient_number,
      appointment_number,
      inpatient_record
    }
  }).then(({message: message2}) => message2);
  var getAccountsDashboard = ({
    patient_number = ""
  }) => api2({
    method: "clinical.api.patient_accounts.customer_account_dashboard_info",
    args: {
      patient_number
    }
  }).then(({message: message2}) => message2);
  var finalizeInvoice = (sales_invoice) => api2({
    method: "billing.billing.utils.invoice_utils.make_final_invoice",
    args: {
      sales_invoice,
      sales_invoice_name: ""
    }
  }).then(({message: message2}) => message2);
  var emailInvoiceFinalizations = ({
    party_type,
    party_name,
    message: message2,
    ref_type,
    ref_name
  }) => api2({
    method: "mtrh_dev.mtrh_dev.tqe_evaluation.stage_party_email",
    args: {
      party_type,
      party_name,
      message: message2,
      ref_type,
      ref_name
    }
  }).then(({message: message3}) => message3);
  var getPatientInsuranceSchemes = ({
    patient_number
  }) => api2({
    method: "clinical.api.patient_accounts.get_patient_insurance_scheme",
    args: {
      patient_number
    }
  }).then(({message: message2}) => message2);
  var prepareAllocationFieldList = ({
    docname
  }) => api2({
    method: "mtrh_dev.mtrh_dev.doctype.invoice_finalization.invoice_finalization.prepare_allocation_field_list",
    args: {
      docname
    }
  }).then(({message: message2}) => message2);
  var getSalesInvoiceItems = ({
    name
  }) => api2({
    method: "clinical.api.patient_accounts.get_sales_invoice_items",
    args: {
      name
    }
  }).then(({message: message2}) => message2);
  var splitInvoice = ({
    primary_invoice,
    split_args,
    row
  }) => api2({
    method: "mtrh_dev.mtrh_dev.doctype.invoice_finalization.invoice_finalization.split_invoice",
    args: {
      primary_invoice,
      split_args,
      row
    },
    freeze: true,
    freeze_message: "Allocating Invoices to payers"
  }).then(({message: message2}) => message2);
  var getFinalizedInvoiceItems = ({
    name
  }) => api2({
    method: "clinical.api.patient_accounts.get_finalized_invoice_items",
    args: {
      name
    }
  }).then(({message: message2}) => message2);
  var getUnbilledSalesOrderTotals = ({
    patient_number
  }) => api2({
    method: "clinical.api.patient_accounts.get_unbilled_sales_order_totals",
    args: {
      patient_number
    }
  }).then(({message: message2}) => message2);
  var createGatePass = ({
    invoice_finalization_name,
    remarks
  }) => api2({
    method: "clinical.api.patient_accounts.create_gate_pass",
    args: {
      invoice_finalization_name,
      remarks
    }
  }).then(({message: message2}) => message2);
  var getFinalizedInvoiceAllocations = ({
    final_invoice_name
  }) => api2({
    method: "clinical.api.patient_accounts.get_finalized_invoice_allocations",
    args: {
      final_invoice_name
    }
  }).then(({message: message2}) => message2);
  var updatePatientInsuranceSchemeLimits = ({
    docname,
    scheme_name,
    op_limit = 0,
    ip_limit = 0,
    op_balance = 0,
    ip_balance = 0
  }) => api2({
    method: "billing.billing.api.accounts.patients.update_patient_scheme",
    args: {
      docname,
      scheme_name,
      op_limit,
      ip_limit,
      op_balance,
      ip_balance
    }
  }).then(({message: message2}) => message2);

  // ../frontend/frontend/public/js/state/accounts/actions.js
  var actions_default = {
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
  var getters_default = {
    patient: (state5) => state5.patient,
    accountSummary: (state5) => state5.accountSummary,
    salesOrderTotal: (state5) => state5.salesOrderTotal,
    invoiceFInalization: (state5) => state5.invoiceFInalization
  };

  // ../frontend/frontend/public/js/state/accounts/index.js
  var accounts_default = {
    namespaced: true,
    state: state_default,
    mutations: mutations_default,
    actions: actions_default,
    getters: getters_default
  };

  // ../frontend/frontend/public/js/services/patient_chart/api.js
  var api3 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message: message2}) => resolve(message2),
    error: reject
  }));
  var getPatientsPerServiceUnit = ({
    serviceUnit: service_unit,
    servicePoint: service_point,
    search = "",
    traverse = ""
  }) => api3({
    method: "clinical.api.patients.get_patients_per_service_unit",
    args: {
      service_unit,
      service_point,
      search,
      traverse
    },
    freeze: false
  });
  var getMyServiceUnits = () => api3({
    method: "clinical.clinical.doctype.user_service_unit.user_service_unit.get_user_service_unit"
  });
  var getMyServicePoints = (service_unit) => api3({
    method: "clinical.clinical.doctype.service_point.service_point.get_unit_service_points",
    args: {
      service_unit
    }
  });
  var getMyLocation = () => api3({
    method: "clinical.api.queue_management.queue_logistics.get_my_location",
    args: {}
  });
  var checkOpenAppointment = (patient) => api3({
    method: "clinical.api.patient_encounter.patient_encounter.check_open_appointment",
    args: {
      patient
    }
  });
  var transferPatient = (args) => api3({
    method: "clinical.api.patients.transfer_inpatient",
    args
  });
  var generateGatePass = ({patient}) => api3({
    method: "clinical.api.patients.generate_gate_pass_from_user_action",
    args: {
      patient
    }
  });

  // ../frontend/frontend/public/js/services/stock/stock-check.js
  var api4 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var itemStockBalanceWarehouse = ({
    item_code,
    warehouse
  }) => api4({
    method: "clinical.api.warehouse.warehouse.get_item_stock_warehouse_quantities",
    args: {
      item_code,
      warehouse
    }
  }).then(({message: message2}) => message2);

  // ../frontend/frontend/public/js/accounts/accounts/SalesOrder.vue
  var __vue_script__2 = {
    name: "SalesOrder",
    props: {
      patient_number: {
        type: String,
        default: "",
        required: true
      },
      customerNumber: {
        type: String,
        default: " ",
        required: true
      },
      patientName: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        salesOrderItems: void 0,
        selectedOrders: [],
        categorizedOrders: {},
        warehouses: [],
        filterSwitch: false,
        dynamicFilters: {},
        patientHasAppointment: false,
        individualTotal: 0,
        insuranceTotal: 0,
        excludedGroups: [
          "BIOMED PLANTS AND EQUIPMENT",
          "CAPITAL PROJECT",
          "TRANSPORT STAFF UNIFORM",
          "MEDICAL EQUIPMENT",
          "MEDICAL EQUIPMENTS",
          "CAPITAL PROJECT (CATERING)",
          "COOKING GASES",
          "FOOD AND RATION",
          "UNIFORMS - CATERING",
          "UTENSILS",
          "ADVERTISEMENT",
          "ADVERTISING & PUBLICITY",
          "CHRISTMAS DECORATIONS",
          "CONFERENCE",
          "DOCUMENTARY",
          "HIRE",
          "HOSPITALITY",
          "SIGNAGE",
          "FAREWELL HOME ITEMS",
          "FUEL & GASES",
          "CLEANSING MATERIALS AND DETERGENTS",
          "MEDICAL RECORDS ITEMS",
          "MEDICAL RECORDS STATIONERY",
          "OFFICE EQUIPMENTS",
          "PASTORAL SERVICES",
          "PHOTOCOPIER",
          "PROMOTIONAL MATERIALS",
          "STATIONERY",
          "ANTISEPTIC",
          "DETERGENTS",
          "DISINFECTANT",
          "UNIFORMS",
          "COMPUTERS AND ACCESSORIES",
          "ICT EQUIPMENTS",
          "MOBILE PHONES ,TABLETS AND IPADS",
          "NETWORKING ACCESSORIES",
          "SERVERS",
          "SOFTWARE AND TECHNOLOGY SERVICES",
          "TELEPHONE ACCESSORIES",
          "INSURANCE",
          "KITCHEN ITEMS GROUP",
          "KITCHEN EQUIPMENT & UTENSILS",
          "LABORATORY REAGENT",
          "LABORATORY REAGENTS",
          "LABORATORY REAGENTS AND CONS",
          "LABORATORY REAGENTS AND CONSUMABLES",
          "LAUNDRY DEPARTMENT GROUP",
          "HUMAN RESOURCE TRAINING",
          "LAUNDRY DETERGENTS",
          "LAUNDRY EQUIPMENTS",
          "Laundry staff uniforms",
          "LINEN",
          "PATIENT UNIFORM",
          "SERVICE OF MACHINES",
          "TAILORING ACCESSORIES",
          "UNIFORM",
          "MEDICAL ENGINEERING",
          "BOLT AND NUTS",
          "CARPENTRY",
          "ELECTRICAL APPLIANCES",
          "ELECTRICALS",
          "MASONRY",
          "MECHANICAL",
          "MEDICAL ENGINEERING SAFETY WEAR",
          "MEDICAL ENGINEERING TOOLS",
          "PAINTING",
          "PLUMBING",
          "HOSPITAL UNIFORM",
          "OSH ITEMS AND SERVICES",
          "PPES",
          "MACHINES",
          "MEDICAL APPLIANCES",
          "MEDICAL EQUIPMENTS",
          "PUBLIC HEALTH ITEM GROUPS",
          "ENVIRONMENTAL IMPACT ASSESSMENT",
          "Fertilizer",
          "HERBICIDE",
          "INSECTICIDE",
          "PUBLIC HEALTH DISINFECTANTS AND ANTISEPTICS",
          "PUBLIC HEALTH EQUIPMENT",
          "PUBLIC HEALTH MATERIALS",
          "PUBLIC HEALTH SERVICES",
          "PUBLIC HEALTH TOOLS",
          "PUBLIC HEALTH VACCINATION CARDS",
          "RODENTICIDE",
          "WASTE MANAGEMENT",
          "SECURITY ITEM GROUP",
          "SECURITY ITEMS",
          "SECURITY UNIFORMS",
          "TRAINING",
          "LIBRARY BOOKS",
          "TRAINING PUBLIC HEALTH",
          "TRANSPORT DEPARTMENT",
          "MOTOR VEHICLES",
          "MOTOR VEHICLES ACCESSORIES",
          "MOTOR VEHICLES INSURANCE COVER AND INSPECTION FEE",
          "MOTOR VEHICLES SERVICES AND REPAIRS",
          "VEHICLE SERVICING AND REPAIRS"
        ]
      };
    },
    methods: {
      makeSearchAppointmentControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: "Appointments",
            fieldtype: "Link",
            fieldname: "reference",
            options: "Patient Appointment",
            placeholder: __(`Search Patient Appointments`),
            onchange: function() {
              if (this.value) {
                console.log(this.value);
              }
            }
          },
          parent: this.$refs["appointment-search"],
          render_input: true
        });
        customer_field.toggle_label(false);
        $("#modal-body").find(".input-max-width").removeClass("input-max-width");
      },
      invoiceOrders() {
        apppendSalesOrderToInvoice({
          customer_name: this.customerNumber
        }).then((data) => {
          this.fetchCategorizedSalesOrders();
          frappe.show_alert({
            message: `Sales Orders Invoiced`,
            indicator: "green"
          }, 5);
        });
      },
      postSalesOrder(salesOrderItem) {
        markSalesOrderAsPosted({
          sales_order_name: salesOrderItem.parent
        }).then((data) => {
          this.fetchCategorizedSalesOrders();
          frappe.show_alert({
            message: `Sales Order Posted`,
            indicator: "green"
          }, 5);
        });
      },
      createSalesOrder(type) {
        let dialog;
        let parent2 = this;
        let fields = [
          {
            label: "Item",
            fieldname: "item_code",
            fieldtype: "Link",
            options: "Item",
            reqd: true,
            in_list_view: 1,
            filters: type === "Service" ? {is_stock_item: 0, disabled: 0, has_variants: "No", item_group: ["NOT IN", parent2.excludedGroups]} : {is_stock_item: 1, disabled: 0, has_variants: "No", item_group: ["NOT IN", parent2.excludedGroups]},
            onchange: function(e) {
              let notify2 = true;
              parent2.changeListener(dialog, parent2, notify2);
            }
          },
          {
            label: "Quantity",
            fieldname: "qty",
            fieldtype: "Float",
            reqd: 1,
            in_list_view: 1,
            onchange: function(e) {
              let notify2 = false;
              parent2.changeListener(dialog, parent2, notify2);
            }
          },
          {
            label: "Rate",
            fieldname: "rate",
            fieldtype: "Read Only",
            in_list_view: 1
          },
          {
            label: "Amount",
            fieldname: "amount",
            fieldtype: "Read Only",
            in_list_view: 1
          },
          {
            label: "Stock",
            fieldname: "stock",
            fieldtype: "Read Only",
            in_list_view: 1
          },
          {
            label: "Payer",
            fieldname: "payer",
            fieldtype: "Read Only",
            in_list_view: 1
          }
        ];
        dialog = new frappe.ui.Dialog({
          title: "Create Sales Order",
          fields: [
            {
              label: "Billing Type",
              fieldname: "billing_type",
              default: type,
              fieldtype: "Read Only"
            },
            {
              label: "Warehouse",
              fieldname: "warehouse",
              fieldtype: "Select",
              options: parent2.warehouses,
              default: parent2.warehouses,
              mandatory_depends_on: 'eval: doc.billing_type == "Consumables"',
              depends_on: 'eval: doc.billing_type == "Consumables"',
              reqd: true
            },
            {
              fieldname: "item_list",
              fieldtype: "Table",
              label: "Items",
              cannot_add_rows: false,
              in_place_edit: true,
              reqd: 1,
              data: [],
              fields
            },
            {
              label: "Total",
              fieldname: "total",
              fieldtype: "Read Only",
              in_list_view: 1
            }
          ],
          primary_action_label: "Submit",
          primary_action: (values) => {
            dialog.set_values({
              billing_type: `<div class="loader" style="border: 16px solid #f3f3f3;border-radius: 50%;border-top: 16px solid #FFA701;width: 30px;height: 30px;-webkit-animation: spin 2s linear infinite;animation: spin 2s linear infinite;"></div><p>Billing items in the background, please wait</p>`
            });
            let nullChecker = 0;
            values.item_list.forEach((item, index) => {
              !item.rate ? nullChecker = 1 : nullChecker = 0;
            });
            if (!nullChecker) {
              createCustomSalesOrder({
                items: values.item_list,
                warehouse: values.warehouse || "",
                customer_name: parent2.customerNumber,
                patient: parent2.patient_number
              }).then((r) => {
                if (r.length > 0) {
                  parent2.fetchCategorizedSalesOrders();
                }
                frappe.msgprint({
                  title: __("Notification"),
                  indicator: "green",
                  message: __(`Patient has been successfully billed`)
                });
                dialog.set_values({
                  billing_type: type
                });
              }).catch(() => {
                dialog.set_values({
                  billing_type: type
                });
              });
            } else {
              dialog.set_values({
                billing_type: type
              });
              frappe.msgprint({
                title: __("Notification"),
                indicator: "red",
                message: __(`Ensure price has been set for all items`)
              });
            }
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            dialog.hide();
          }
        });
        dialog.fields_dict["item_list"].df.onchange = () => {
          alert("changed");
        };
        dialog.show();
        dialog.$wrapper.find(".modal-content").css("width", "1000px");
        dialog.$wrapper.find(".modal-content").css("margin-left", "-200px");
        dialog.$wrapper.find(".modal-content").css("backdrop", "static");
        dialog.$wrapper.find(".modal-content").css("keyboard", "false");
        $(".modal-dialog").modal({
          backdrop: "static",
          keyboard: false
        });
      },
      changeListener(dialog, parent2, notify2) {
        const data = dialog.fields[2].data || [];
        let total = 0;
        const promises = data.map((value2) => {
          const {item_code, qty: quantity} = value2;
          return item_code && fetchConditionalItemPrice({
            item_code,
            customer: parent2.customerNumber,
            patient: parent2.patient_number
          }).then((res) => {
            if (dialog.get_value("warehouse")) {
              itemStockBalanceWarehouse({
                item_code,
                warehouse: dialog.get_value("warehouse")
              }).then((stock) => {
                console.log(stock);
                if (stock && stock.length > 0) {
                  value2.stock = stock[0].actual_qty;
                } else {
                  value2.stock = 0;
                }
              });
            }
            if (res.type === "Patient") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              value2.rate = price;
              value2.amount = amount;
              total = total + amount;
              value2.payer = res.type;
              dialog.set_values({
                total
              });
              if (res.is_nhif === true && notify2 === true) {
                frappe.msgprint({
                  title: __("Note"),
                  message: __("Patient will be charged for this item due to insufficient insurance balance"),
                  primary_action: {}
                });
              }
            } else if (res.type === "Copay") {
              let price = res.price;
              let amount = Math.ceil(price * (res.remaining_quantity * quantity));
              value2.rate = price;
              value2.amount = amount;
              total = total + amount;
              value2.payer = "Copaid amount: (" + price * (res.co_paid_quantity * quantity) + ")";
              dialog.set_values({
                total
              });
            } else if (res.type === "Insurance") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              value2.rate = price;
              value2.amount = amount;
              total = total + amount;
              value2.payer = "Insurance: (" + amount + ")";
              dialog.set_values({
                total
              });
            } else if (res.type === "Pre-auth Insurance") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              value2.rate = price;
              value2.amount = amount;
              total = total + amount;
              value2.payer = "Pre-auth Insurance: (" + amount + ")";
              dialog.set_values({
                total
              });
            } else if (res.type === "Pre-auth Copay") {
              let price = res.price;
              let amount = Math.ceil(price * (res.remaining_quantity * quantity));
              value2.rate = price;
              value2.amount = amount;
              total = total + amount;
              value2.payer = "Pre-auth Copay: (" + price * (res.co_paid_quantity * quantity) + ")";
              dialog.set_values({
                total
              });
            }
          });
        });
        Promise.all(promises).then(() => {
          dialog.refresh();
        });
      },
      postInvoiceToAllowService(salesOrderItem) {
      },
      submitSalesOrder(salesOrderItem) {
        submitSalesOrder({sales_order_name: salesOrderItem.parent}).then((r) => {
          this.fetchCategorizedSalesOrders();
        });
      },
      makePayment(salesOrderItem) {
        let parent2 = this;
        let dialog = new frappe.ui.Dialog({
          title: `Add Payment Entry for ${parent2.patientName}`,
          fields: [
            {
              label: "Client Name",
              fieldname: "party",
              fieldtype: "Read Only",
              options: "Customer",
              default: `${parent2.patientName} (${parent2.customerNumber})`,
              readonly: 0
            },
            {
              label: "Sales Order",
              fieldname: "sales_order",
              fieldtype: "Link",
              options: "Sales Order",
              default: salesOrderItem.parent,
              readonly: 0,
              filters: {customer: parent2.customerNumber, status: ["not in", ["Completed", "Cancelled"]]}
            },
            {
              label: "Mode of Payment",
              fieldname: "mode_of_payment",
              fieldtype: "Link",
              options: "Mode of Payment",
              reqd: 1
            },
            {
              label: "Reference",
              fieldname: "reference_no",
              fieldtype: "Data",
              reqd: 1,
              default: Math.floor(Date.now()).toString(36).toUpperCase().toString()
            },
            {
              label: "Amount",
              fieldname: "paid_amount",
              fieldtype: "Currency",
              reqd: 1,
              default: salesOrderItem.amount
            },
            {
              label: "Confirm Amount",
              fieldname: "confirm_amount",
              fieldtype: "Currency",
              reqd: 1
            },
            {
              label: "Amount Tendered",
              fieldname: "tendered_amount",
              fieldtype: "Currency",
              reqd: 1
            },
            {
              label: "Change",
              fieldname: "change_amount",
              fieldtype: "Read Only",
              default: 0,
              readony: 0
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            var diff = values.paid_amount - values.confirm_amount;
            parseFloat(values.confirm_amount) !== parseFloat(values.paid_amount) ? frappe.throw(`Sorry the values you entered differ with invoice by ${diff}`) : savePaymentEntry({
              docname: values.sales_order,
              doctype: "Sales Order",
              amount: values.paid_amount,
              change_amount: values.change_amount,
              amount_tendered: values.tendered_amount,
              reference_no: values.reference_no,
              mode_of_payment: values.mode_of_payment
            }).then((r) => {
              parent2.$emit("newPaymentEntry");
              frappe.show_alert({
                message: `Payment Entry Created`,
                indicator: "green"
              }, 5);
              parent2.fetchCategorizedSalesOrders();
            });
            dialog.hide();
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            dialog.hide();
          }
        });
        dialog.fields_dict["tendered_amount"].df.onchange = () => {
          if (dialog.get_value("paid_amount") === dialog.get_value("confirm_amount")) {
            if (dialog.get_value("tendered_amount") >= dialog.get_value("paid_amount")) {
              dialog.set_values({change_amount: dialog.get_value("tendered_amount") - dialog.get_value("paid_amount")});
            } else {
              var diff = dialog.get_value("tendered_amount") - dialog.get_value("paid_amount");
              dialog.get_primary_btn().attr("disabled", false);
              frappe.msgprint(`Sorry the tendered amount is less than paid amount by ${diff.toFixed(2)}`);
            }
          }
        };
        dialog.get_primary_btn().attr("disabled", true);
        dialog.fields_dict["paid_amount"].df.onchange = () => {
          dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
        };
        dialog.fields_dict["confirm_amount"].df.onchange = () => {
          dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
        };
        dialog.show();
      },
      uploadFile(row) {
        const me = this;
        new frappe.ui.FileUploaderCustom({
          doctype: "Sales Order",
          docname: row.parent,
          on_success(file_doc) {
            authorizeSalesrder({sales_order_name: row.parent}).then((r) => {
              frappe.show_alert({
                message: `Sales Order Submitted`,
                indicator: "green"
              }, 5);
            });
            me.fetchCategorizedSalesOrders();
          }
        });
      },
      fetchCategorizedSalesOrders() {
        this.categorizedOrders = {};
        if (this.patient_number !== "") {
          getCategorizedSalesOrders({
            patient_name: this.patient_number
          }).then((data) => {
            this.categorizedOrders = data;
          });
        }
      }
    },
    watch: {
      patient_number(value2) {
        checkOpenAppointment(value2).then((res) => {
          if (res === true) {
            this.patientHasAppointment = true;
          }
        });
        this.fetchCategorizedSalesOrders();
      }
    },
    created() {
      if (this.patient_number != "") {
        checkOpenAppointment(this.patient_number).then((res) => {
          if (res === true) {
            this.patientHasAppointment = true;
          }
        });
      }
      this.fetchCategorizedSalesOrders();
      getUserWarehouses().then((r) => {
        r.map((warehouse) => {
          this.warehouses.push(warehouse["for_value"]);
          console.log(this.warehouses);
        });
      });
    },
    mounted() {
      this.makeSearchAppointmentControl();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value2) {
        return value2.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      !_vm.patientHasAppointment ? _c("b-row", {staticStyle: {"margin-top": "10px"}}, [
        _c("b-col", [
          _c("b-alert", {attrs: {variant: "danger", show: ""}}, [
            _vm._v("Ensure the patient has an appointment before proceeding with billing")
          ])
        ], 1)
      ], 1) : _vm._e(),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", {attrs: {md: "6"}}, [
          _c("div", {}, [
            _c("div", {staticStyle: {width: "100%"}}, [
              _c("div", {
                ref: "appointment-search",
                staticClass: "ref-field-input"
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("b-col", {attrs: {md: "6"}}, [
          _c("div", {
            staticStyle: {display: "flex", "justify-content": "flex-end"}
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [
              _vm.patientHasAppointment ? _c("div", {staticClass: "btn-group"}, [
                _c("button", {
                  staticClass: "btn btn-primary dropdown-toggle",
                  attrs: {
                    type: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                }, [
                  _vm._v("\n                                                Add\n                                              ")
                ]),
                _vm._v(" "),
                _c("div", {staticClass: "dropdown-menu"}, [
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {href: "#"},
                    on: {
                      click: function($event) {
                        return _vm.createSalesOrder("Service");
                      }
                    }
                  }, [_vm._v("Service")]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {href: "#"},
                    on: {
                      click: function($event) {
                        return _vm.createSalesOrder("Consumables");
                      }
                    }
                  }, [_vm._v("Consumables")])
                ])
              ]) : _vm._e(),
              _vm._v("\n                    \xA0\n                    "),
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {size: "sm", variant: "primary"},
                on: {click: _vm.fetchCategorizedSalesOrders}
              }, [_vm._v("Refresh ")]),
              _vm._v(" "),
              _c("b-btn", {
                attrs: {variant: "primary", size: "sm"},
                on: {click: _vm.invoiceOrders}
              }, [_vm._v("Invoice Posted Orders")])
            ], 1)
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _vm.categorizedOrders.invoiced_orders.length ? _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr"),
              _c("tr", [
                _c("th", {attrs: {colspan: "5"}}, [
                  _vm._v("Invoiced Orders " + _vm._s(_vm.categorizedOrders.invoiced_orders.length || 0) + " ")
                ])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("Date")]),
              _vm._v(" "),
              _c("th", [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Status")]),
              _vm._v(" "),
              _c("th", [_vm._v("Item")]),
              _vm._v(" "),
              _c("th", [_vm._v("Amount")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.categorizedOrders.invoiced_orders, function(salesOrderItem) {
              return _c("tr", {key: salesOrderItem.name}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(salesOrderItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(salesOrderItem.so_link)
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(salesOrderItem.workflow_state))
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(salesOrderItem.item_name))])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(salesOrderItem.amount.toFixed(2))))
                  ])
                ])
              ]);
            })
          ], 2)
        ])
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.categorizedOrders.un_invoiced_orders.length ? _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr"),
              _c("tr", [
                _c("th", {attrs: {colspan: "6"}}, [
                  _vm._v("Un Invoiced Orders " + _vm._s(_vm.categorizedOrders.un_invoiced_orders.length || 0))
                ])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("Date")]),
              _vm._v(" "),
              _c("th", [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Status")]),
              _vm._v(" "),
              _c("th", [_vm._v("Item")]),
              _vm._v(" "),
              _c("th", [_vm._v("Amount")]),
              _vm._v(" "),
              _c("th", [_vm._v("Action")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.categorizedOrders.un_invoiced_orders, function(salesOrderItem) {
              return _c("tr", {key: salesOrderItem.name}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(salesOrderItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(salesOrderItem.so_link)
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(salesOrderItem.workflow_state))
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(salesOrderItem.item_name))])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(salesOrderItem.amount.toFixed(2))))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b-dropdown", {
                    attrs: {
                      text: "Select Action",
                      variant: "primary"
                    }
                  }, [
                    salesOrderItem.workflow_state === "Pending Request for Preauthorization" ? _c("b-btn", {
                      attrs: {
                        variant: "primary",
                        size: "sm"
                      },
                      on: {
                        click: function($event) {
                          return _vm.uploadFile(salesOrderItem);
                        }
                      }
                    }, [_vm._v("Mark as Authorised")]) : _vm._e(),
                    _vm._v(" "),
                    salesOrderItem.status === "To Bill" ? _c("b-dropdown-item", {
                      attrs: {
                        variant: "primary",
                        size: "sm"
                      },
                      on: {
                        click: function($event) {
                          return _vm.makePayment(salesOrderItem);
                        }
                      }
                    }, [_vm._v("Make Payment")]) : _vm._e(),
                    _vm._v(" "),
                    salesOrderItem.status === "To Bill" ? _c("b-dropdown-item", {
                      attrs: {
                        variant: "primary",
                        size: "sm"
                      },
                      on: {
                        click: function($event) {
                          return _vm.postSalesOrder(salesOrderItem);
                        }
                      }
                    }, [_vm._v("Mark as Posted")]) : _vm._e(),
                    _vm._v(" "),
                    salesOrderItem.status === "Draft" ? _c("b-dropdown-item", {
                      attrs: {
                        variant: "primary",
                        size: "sm"
                      },
                      on: {
                        click: function($event) {
                          return _vm.submitSalesOrder(salesOrderItem);
                        }
                      }
                    }, [_vm._v("Submit")]) : _vm._e()
                  ], 1)
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.categorizedOrders.un_invoiced_orders.length ? _c("b-row", {staticClass: "m-3"}, [
        _c("b", [
          _vm._v("Total " + _vm._s(_vm.categorizedOrders.un_invoiced_orders.map(function(item) {
            return item.amount.toFixed(2);
          }).reduce(function(partialSum, a) {
            return parseFloat(partialSum) + parseFloat(a);
          }, 0)) + " ")
        ])
      ]) : _vm._e(),
      _vm._v(" "),
      _vm.categorizedOrders.invoiced_insurance_orders.length || _vm.categorizedOrders.un_invoiced_insurance_orders.length ? _c("b", [
        _c("p", {staticStyle: {"margin-top": "10px:", color: "#2490ef"}}, [_vm._v("INSURANCE SALES ORDERS")])
      ]) : _vm._e(),
      _vm._v(" "),
      _vm.categorizedOrders.invoiced_insurance_orders.length ? _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr"),
              _c("tr", [
                _c("th", {attrs: {colspan: "6"}}, [
                  _vm._v("Un Invoiced Orders " + _vm._s(_vm.categorizedOrders.invoiced_insurance_orders.length || 0) + " ")
                ])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("Date")]),
              _vm._v(" "),
              _c("th", [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Status")]),
              _vm._v(" "),
              _c("th", [_vm._v("Item")]),
              _vm._v(" "),
              _c("th", [_vm._v("Amount")]),
              _vm._v(" "),
              _c("th", [_vm._v("Actions")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.categorizedOrders.invoiced_insurance_orders, function(salesOrderItem) {
              return _c("tr", {key: salesOrderItem.name}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(salesOrderItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(salesOrderItem.so_link)
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(salesOrderItem.workflow_state))
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(salesOrderItem.item_name))
                  ])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(salesOrderItem.amount.toFixed(2))))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b-dropdown", {
                    attrs: {
                      text: "Select Action",
                      variant: "primary"
                    }
                  }, [
                    salesOrderItem.status === "To Bill" ? _c("b-dropdown-item", {
                      attrs: {
                        variant: "primary",
                        size: "sm"
                      },
                      on: {
                        click: function($event) {
                          return _vm.postSalesOrder(salesOrderItem);
                        }
                      }
                    }, [_vm._v("Mark as Posted")]) : _vm._e(),
                    _vm._v(" "),
                    _c("b-dropdown-item", {attrs: {variant: "primary"}}, [
                      _vm._v("Update Items "),
                      _c("span", {
                        domProps: {
                          innerHTML: _vm._s(salesOrderItem.so_link)
                        }
                      })
                    ])
                  ], 1)
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.categorizedOrders.invoiced_insurance_orders.length ? _c("b-row", {staticClass: "m-3"}, [
        _c("b", [
          _vm._v("Total " + _vm._s(_vm.categorizedOrders.invoiced_insurance_orders.map(function(item) {
            return item.amount.toFixed(2);
          }).reduce(function(partialSum, a) {
            return parseFloat(partialSum) + parseFloat(a);
          }, 0)) + " ")
        ])
      ]) : _vm._e(),
      _vm._v(" "),
      _vm.categorizedOrders.un_invoiced_insurance_orders.length ? _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr"),
              _c("tr", [
                _c("th", {attrs: {colspan: "6"}}, [
                  _vm._v("Invoiced Orders " + _vm._s(_vm.categorizedOrders.un_invoiced_insurance_orders.length || 0))
                ])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("Date")]),
              _vm._v(" "),
              _c("th", [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Status")]),
              _vm._v(" "),
              _c("th", [_vm._v("Item")]),
              _vm._v(" "),
              _c("th", [_vm._v("Amount")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.categorizedOrders.un_invoiced_insurance_orders, function(salesOrderItem) {
              return _c("tr", {key: salesOrderItem.name}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(salesOrderItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(salesOrderItem.so_link)
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(salesOrderItem.workflow_state))
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(salesOrderItem.item_name))
                  ])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(salesOrderItem.amount.toFixed(2))))
                  ])
                ])
              ]);
            })
          ], 2)
        ])
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.categorizedOrders.un_invoiced_insurance_orders.length ? _c("b-row", {staticClass: "m-3"}, [
        _c("b", [
          _vm._v("Total " + _vm._s(_vm.categorizedOrders.un_invoiced_insurance_orders.map(function(item) {
            return item.amount.toFixed(2);
          }).reduce(function(partialSum, a) {
            return parseFloat(partialSum) + parseFloat(a);
          }, 0)) + " ")
        ])
      ]) : _vm._e()
    ], 1);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = void 0;
  var __vue_scope_id__2 = void 0;
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
         <b-row v-if="!patientHasAppointment" style="margin-top:10px;">
            <b-col>
                <b-alert variant="danger" show>Ensure the patient has an appointment before proceeding with billing</b-alert>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="6">
                <!-- <b-btn>sdfgsdfgfsdgsfd</b-btn> -->
                <div class="">
                    <div style="width:100%"><div ref="appointment-search" class="ref-field-input" /></div> 
                </div>
                <!-- <div class="form-dashboard-section form-stats" style="display: block;">
                <div class="section-head">
                    Search
                </div>
                <div class="section-body">
                    <div style="width:100%"><div ref="appointment-search" class="ref-field-input" /></div> 
                </div>
                </div> -->
            </b-col>
            <b-col md="6">
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <div v-if="patientHasAppointment" class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Add
                                                  </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="createSalesOrder('Service')" href="#">Service</a>
                                <a class="dropdown-item" @click="createSalesOrder('Consumables')" href="#">Consumables</a>
                            </div>
                        </div>
                        &nbsp;
                        <b-button style="margin-right:2px;" size="sm" variant="primary" @click="fetchCategorizedSalesOrders">Refresh </b-button>
                        <b-btn variant="primary" size="sm" @click="invoiceOrders">Invoice Posted Orders</b-btn>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <b-row v-if="categorizedOrders.invoiced_orders.length">
            <b-col>
                <table class="table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <tr>
                                <th colspan="5">Invoiced Orders {{ categorizedOrders.invoiced_orders.length || 0 }} </th>
                            </tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Item</th>
                            <!-- <th>Qty</th>
                                                                                                                                                                                                                                <th>Rate</th> -->
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tr v-for="salesOrderItem in categorizedOrders.invoiced_orders" :key="salesOrderItem.name">
                        <td><span>{{ salesOrderItem.creation | dateFormat }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.parent }}</span> </td> -->
                         <td>  <span v-html="salesOrderItem.so_link"></span> </td>
                        <td>{{ salesOrderItem.workflow_state }}</td>
                        <td><span>{{ salesOrderItem.item_name }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.qty }}</span> </td> -->
                        <!-- <td style="text-align: right;"><span>{{ salesOrderItem.rate.toFixed(2) | numberWithCommas }}</span> </td> -->
                        <td style="text-align: right;"><span>{{ salesOrderItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
    
                    </tr>
                </table>
            </b-col>
        </b-row>
        <b-row v-if="categorizedOrders.un_invoiced_orders.length">
            <b-col>
                <table class="table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <tr>
                                <th colspan="6">Un Invoiced Orders {{ categorizedOrders.un_invoiced_orders.length || 0 }}</th>
                                <!-- <th>  </th> -->
                            </tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Item</th>
                            <!-- <th>Qty</th>
                                                                                                                                                                                                                                <th>Rate</th> -->
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tr v-for="salesOrderItem in categorizedOrders.un_invoiced_orders" :key="salesOrderItem.name">
                        <td><span>{{ salesOrderItem.creation | dateFormat }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.parent }}</span> </td> -->
                        <td>  <span v-html="salesOrderItem.so_link"></span> </td>
                        <td>{{ salesOrderItem.workflow_state }}</td>
                        <td><span>{{ salesOrderItem.item_name }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.qty }}</span> </td> -->
                        <!-- <td style="text-align: right;"><span>{{ salesOrderItem.rate.toFixed(2) | numberWithCommas }}</span> </td> -->
                        <td style="text-align: right;"><span>{{ salesOrderItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <td>
                             <b-dropdown text="Select Action" variant="primary">
                            <b-btn v-if="salesOrderItem.workflow_state === 'Pending Request for Preauthorization'" variant="primary" size="sm" @click="uploadFile(salesOrderItem)">Mark as Authorised</b-btn>
                            <b-dropdown-item v-if="salesOrderItem.status === 'To Bill'" variant="primary" size="sm" @click="makePayment(salesOrderItem)">Make Payment</b-dropdown-item>
                            <!-- <b-btn v-if="salesOrderItem.status === 'To Bill'" variant="primary" size="sm"   @click="postInvoiceToAllowService(salesOrderItem)">Allow Without Pay</b-btn> -->
                            <b-dropdown-item v-if="salesOrderItem.status === 'To Bill'" variant="primary" size="sm" @click="postSalesOrder(salesOrderItem)">Mark as Posted</b-dropdown-item>
                            <b-dropdown-item v-if="salesOrderItem.status === 'Draft'" variant="primary" size="sm" @click="submitSalesOrder(salesOrderItem)">Submit</b-dropdown-item>
                             </b-dropdown>
                        </td>
                    </tr>
                </table>

            </b-col> 
        </b-row>
        <!-- <hr/> -->
        <b-row  v-if="categorizedOrders.un_invoiced_orders.length" class="m-3"> <b>Total {{  categorizedOrders.un_invoiced_orders.map(item =>  item.amount.toFixed(2)).reduce((partialSum, a) => parseFloat( partialSum)+ parseFloat( a), 0) }} </b></b-row>
        <!-- <hr/> -->
        <b v-if="categorizedOrders.invoiced_insurance_orders.length || categorizedOrders.un_invoiced_insurance_orders.length"><p style="margin-top:10px:;color:#2490ef">INSURANCE SALES ORDERS</p></b>
         <b-row v-if="categorizedOrders.invoiced_insurance_orders.length">
            <b-col>
                <table class="table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <tr>
                                <th colspan="6">Un Invoiced Orders {{ categorizedOrders.invoiced_insurance_orders.length || 0 }} </th>
                                <!-- <th> <b-btn variant="primary" @click="invoiceOrders">Invoice</b-btn> </th> -->
                            </tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Item</th>
                            <!-- <th>Qty</th>                                                                                                                                                                                            <th>Rate</th> -->
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tr v-for="salesOrderItem in categorizedOrders.invoiced_insurance_orders" :key="salesOrderItem.name">
                        <td><span>{{ salesOrderItem.creation | dateFormat }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.parent }}</span> </td> -->
                        <td>  <span v-html="salesOrderItem.so_link"></span> </td>
                        <td>{{ salesOrderItem.workflow_state }}</td>
                        <td><span>{{ salesOrderItem.item_name }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.qty }}</span> </td> -->
                        <!-- <td style="text-align: right;"><span>{{ salesOrderItem.rate.toFixed(2) | numberWithCommas }}</span> </td> -->
                        <td style="text-align: right;"><span>{{ salesOrderItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <td>
                            <b-dropdown text="Select Action" variant="primary">
                            <!-- <b-dropdown-item v-if="salesOrderItem.status === 'To Bill'" variant="primary" size="sm" @click="postSalesOrder(salesOrderItem)">Post</b-dropdown-item> -->
                            <b-dropdown-item v-if="salesOrderItem.status === 'To Bill'" variant="primary" size="sm" @click="postSalesOrder(salesOrderItem)">Mark as Posted</b-dropdown-item>
                            <b-dropdown-item variant="primary">Update Items <span v-html="salesOrderItem.so_link"></span></b-dropdown-item>
                            </b-dropdown>
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
         <!-- <hr/> -->
        <b-row  v-if="categorizedOrders.invoiced_insurance_orders.length" class="m-3"> <b>Total {{  categorizedOrders.invoiced_insurance_orders.map(item =>  item.amount.toFixed(2)).reduce((partialSum, a) => parseFloat( partialSum)+ parseFloat( a), 0) }} </b></b-row>
        <!-- <hr/> -->
        <b-row v-if="categorizedOrders.un_invoiced_insurance_orders.length">
            <b-col>
                <table class="table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <tr>
                                <th colspan="6">Invoiced Orders {{ categorizedOrders.un_invoiced_insurance_orders.length || 0 }}</th>
                            </tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Item</th>
                            <!-- <th>Qty</th>                                                                                                                                                                                                    <th>Rate</th> -->
                            <th>Amount</th>
                            <!-- <th>Action</th> -->
                        </tr>
                    </thead>
                    <tr v-for="salesOrderItem in categorizedOrders.un_invoiced_insurance_orders" :key="salesOrderItem.name">
                        <td><span>{{ salesOrderItem.creation | dateFormat }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.parent }}</span> </td> -->
                        <td>  <span v-html="salesOrderItem.so_link"></span> </td>
                        <td>{{ salesOrderItem.workflow_state }}</td>
                        <td><span>{{ salesOrderItem.item_name }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.qty }}</span> </td> -->
                        <!-- <td style="text-align: right;"><span>{{ salesOrderItem.rate.toFixed(2) | numberWithCommas }}</span> </td> -->
                        <td style="text-align: right;"><span>{{ salesOrderItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <!-- <td>
                            <b-btn v-if="salesOrderItem.workflow_state === 'Pending Request for Preauthorization'" variant="primary" size="sm" @click="uploadFile(salesOrderItem)">Mark as Authorised</b-btn>
                            <b-btn v-if="salesOrderItem.status === 'To Bill'" variant="primary" size="sm" @click="makePayment(salesOrderItem)">Make Payment</b-btn>
                            <b-btn v-if="salesOrderItem.status === 'To Bill'" variant="primary" size="sm"   @click="postInvoiceToAllowService(salesOrderItem)">Allow Without Pay</b-btn>
                            <b-btn v-if="salesOrderItem.status === 'Draft'" variant="primary" size="sm" @click="submitSalesOrder(salesOrderItem)">Submit</b-btn>
    
                        </td> -->
                    </tr>
                </table>
            </b-col>
        </b-row>
        <b-row  v-if="categorizedOrders.un_invoiced_insurance_orders.length" class="m-3"> <b>Total {{  categorizedOrders.un_invoiced_insurance_orders.map(item =>  item.amount.toFixed(2)).reduce((partialSum, a) => parseFloat( partialSum)+ parseFloat( a), 0) }} </b></b-row>
    </div>
</template>

<script>
import {
    getPatientSalesrders,
    authorizeSalesrder,
    savePaymentEntry,
    submitSalesOrder,
    savePrePayment,
    getCategorizedSalesOrders,
    api,
    createCustomSalesOrder,
    itemStockBalance,
    fetchConditionalItemPrice,
    getUserWarehouses,
    markSalesOrderAsPosted,
    apppendSalesOrderToInvoice
} from '../../services/accounts/patient.js'
import {checkOpenAppointment, makeStockEntry} from '../../services/patient_chart/api'
import { itemStockBalanceWarehouse } from '../../services/stock/stock-check';
export default {
    name: 'SalesOrder',
    props: {
        patient_number: {
            type: String,
            default: "",
            required: true,
        },
        customerNumber: {
            type: String,
            default: " ",
            required: true,
        },
        patientName: {
            type: String,
            default: " ",
            required: true,
        },
    },
    data() {
        return {
            salesOrderItems: undefined,
            selectedOrders: [],
            categorizedOrders: {},
            warehouses: [],
            filterSwitch: false,
            dynamicFilters: {},
            patientHasAppointment: false,
            individualTotal :0,
            insuranceTotal:0,
            excludedGroups:[
                "BIOMED PLANTS AND EQUIPMENT", "CAPITAL PROJECT","TRANSPORT STAFF UNIFORM","MEDICAL EQUIPMENT","MEDICAL EQUIPMENTS","CAPITAL PROJECT (CATERING)",
                "COOKING GASES","FOOD AND RATION","UNIFORMS - CATERING","UTENSILS","ADVERTISEMENT","ADVERTISING & PUBLICITY","CHRISTMAS DECORATIONS","CONFERENCE",
                "DOCUMENTARY","HIRE","HOSPITALITY","SIGNAGE","FAREWELL HOME ITEMS","FUEL & GASES","CLEANSING MATERIALS AND DETERGENTS","MEDICAL RECORDS ITEMS",
                "MEDICAL RECORDS STATIONERY","OFFICE EQUIPMENTS","PASTORAL SERVICES","PHOTOCOPIER","PROMOTIONAL MATERIALS","STATIONERY","ANTISEPTIC","DETERGENTS",
                "DISINFECTANT","UNIFORMS","COMPUTERS AND ACCESSORIES","ICT EQUIPMENTS","MOBILE PHONES ,TABLETS AND IPADS","NETWORKING ACCESSORIES","SERVERS",
                "SOFTWARE AND TECHNOLOGY SERVICES","TELEPHONE ACCESSORIES","INSURANCE","KITCHEN ITEMS GROUP","KITCHEN EQUIPMENT & UTENSILS","LABORATORY REAGENT",
                "LABORATORY REAGENTS","LABORATORY REAGENTS AND CONS","LABORATORY REAGENTS AND CONSUMABLES","LAUNDRY DEPARTMENT GROUP","HUMAN RESOURCE TRAINING",
                "LAUNDRY DETERGENTS","LAUNDRY EQUIPMENTS","Laundry staff uniforms","LINEN","PATIENT UNIFORM","SERVICE OF MACHINES","TAILORING ACCESSORIES","UNIFORM",
                "MEDICAL ENGINEERING","BOLT AND NUTS","CARPENTRY","ELECTRICAL APPLIANCES","ELECTRICALS","MASONRY","MECHANICAL","MEDICAL ENGINEERING SAFETY WEAR",
                "MEDICAL ENGINEERING TOOLS","PAINTING","PLUMBING","HOSPITAL UNIFORM","OSH ITEMS AND SERVICES","PPES","MACHINES","MEDICAL APPLIANCES","MEDICAL EQUIPMENTS",
                "PUBLIC HEALTH ITEM GROUPS","ENVIRONMENTAL IMPACT ASSESSMENT","Fertilizer","HERBICIDE","INSECTICIDE","PUBLIC HEALTH DISINFECTANTS AND ANTISEPTICS",
                "PUBLIC HEALTH EQUIPMENT","PUBLIC HEALTH MATERIALS","PUBLIC HEALTH SERVICES","PUBLIC HEALTH TOOLS","PUBLIC HEALTH VACCINATION CARDS","RODENTICIDE",
                "WASTE MANAGEMENT","SECURITY ITEM GROUP","SECURITY ITEMS","SECURITY UNIFORMS","TRAINING","LIBRARY BOOKS","TRAINING PUBLIC HEALTH","TRANSPORT DEPARTMENT",
                "MOTOR VEHICLES","MOTOR VEHICLES ACCESSORIES","MOTOR VEHICLES INSURANCE COVER AND INSPECTION FEE","MOTOR VEHICLES SERVICES AND REPAIRS",
                "VEHICLE SERVICING AND REPAIRS"
            ]
        };
    },
    methods: {
        // 
     makeSearchAppointmentControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
            df: {
            label: "Appointments",
            fieldtype: "Link",
            fieldname: "reference",
            options: "Patient Appointment",
            placeholder: __(\`Search Patient Appointments\`),
            // filters: { patient: me.patient_number },
            onchange: function() {
                if (this.value) {
                    console.log(this.value)
                //me.setCurrentDoctype(me.doctype, this.value);
                }
            },
            },
            parent: this.$refs["appointment-search"],
            render_input: true,
        });

        customer_field.toggle_label(false);
        $("#modal-body")
            .find(".input-max-width")
            .removeClass("input-max-width");
        },
        invoiceOrders(){
            //   customer_name
             apppendSalesOrderToInvoice({
                customer_name: this.customerNumber,
            }).then((data) => {
                this.fetchCategorizedSalesOrders();
                  frappe.show_alert({
                    message: \`Sales Orders Invoiced\`,
                    indicator: 'green'
                }, 5);
            });
        },
        postSalesOrder(salesOrderItem){
            markSalesOrderAsPosted({
                sales_order_name: salesOrderItem.parent,
            }).then((data) => {
                this.fetchCategorizedSalesOrders();
                  frappe.show_alert({
                    message: \`Sales Order Posted\`,
                    indicator: 'green'
                }, 5);
            });
        },
        createSalesOrder(type) {
            let dialog;
            let parent = this;
            //let warehouses = []

            let fields = [{
                    label: 'Item',
                    fieldname: 'item_code',
                    fieldtype: 'Link',
                    options: 'Item',
                    reqd: true,
                    in_list_view: 1,
                    filters: type === "Service" ? { is_stock_item: 0, disabled: 0, has_variants: 'No',item_group: ['NOT IN', parent.excludedGroups] } : { is_stock_item: 1, disabled: 0, has_variants: 'No',item_group: ['NOT IN', parent.excludedGroups] },
                    onchange: function(e) {
                        let notify = true
                        parent.changeListener(dialog, parent, notify)
                    }
                },
                {
                    label: 'Quantity',
                    fieldname: 'qty',
                    fieldtype: 'Float',
                    reqd: 1,
                    in_list_view: 1,
                    onchange: function(e) {
                        let notify = false
                        parent.changeListener(dialog, parent, notify)

                    }
                },
                {
                    label: 'Rate',
                    fieldname: 'rate',
                    fieldtype: 'Read Only',
                    in_list_view: 1,
                    // reqd: 1,
                },
                {
                    label: 'Amount',
                    fieldname: 'amount',
                    fieldtype: 'Read Only',
                    in_list_view: 1,
                    // reqd: 1,
                },
                {
                    label: 'Stock',
                    fieldname: 'stock',
                    fieldtype: 'Read Only',
                    in_list_view: 1,
                    // reqd: 1,
                },
                {
                    label: 'Payer',
                    fieldname: 'payer',
                    fieldtype: 'Read Only',
                    in_list_view: 1,
                    // reqd: 1,
                },
            ];
            dialog = new frappe.ui.Dialog({
                title: 'Create Sales Order',
                fields: [{
                        label: 'Billing Type',
                        fieldname: 'billing_type',
                        default: type,
                        fieldtype: "Read Only",
                    },
                    {
                        label: 'Warehouse',
                        fieldname: 'warehouse',
                        fieldtype: 'Select',
                        options: parent.warehouses,
                        default: parent.warehouses,
                        mandatory_depends_on: 'eval: doc.billing_type == "Consumables"',
                        depends_on: 'eval: doc.billing_type == "Consumables"',
                        reqd: true,
                    },
                    {
                        fieldname: "item_list",
                        fieldtype: "Table",
                        label: "Items",
                        cannot_add_rows: false,
                        in_place_edit: true,
                        reqd: 1,
                        data: [],
                        fields
                    },
                    {
                        label: 'Total',
                        fieldname: 'total',
                        fieldtype: 'Read Only',
                        in_list_view: 1,
                        // reqd: 1,
                    },
                ],
                primary_action_label: 'Submit',
                primary_action: (values) => {

                    dialog.set_values({
                        billing_type: \`<div class="loader" style="border: 16px solid #f3f3f3;border-radius: 50%;border-top: 16px solid #FFA701;width: 30px;height: 30px;-webkit-animation: spin 2s linear infinite;animation: spin 2s linear infinite;"></div><p>Billing items in the background, please wait</p>\`,
                    });

                    let nullChecker = 0;
                    values.item_list.forEach((item, index) => {
                        !item.rate ? nullChecker = 1 : nullChecker = 0;
                    })
                       
                        if (!nullChecker) {

                              createCustomSalesOrder({
                                        items: values.item_list,
                                        warehouse: values.warehouse || "",
                                        customer_name: parent.customerNumber,
                                        patient: parent.patient_number
                                    }).then(r => {
                                        // makeStockEntry({warehouse:values.warehouse || "",item_code:item.item_code,quantity:item.qty})
                                        // console.log(JSON.stringify(r))
                                        if (r.length > 0) {
                                            parent.fetchCategorizedSalesOrders();
                                        }
                                        frappe.msgprint({
                                            title: __("Notification"),
                                            indicator: "green",
                                            message: __(\`Patient has been successfully billed\`),
                                        });

                                        dialog.set_values({
                                            billing_type: type,
                                        });

                                    }).catch(() => {
                                            dialog.set_values({
                                                billing_type: type,
                                        });
                                    });

                        }else{

                            dialog.set_values({
                                billing_type: type,
                            });

                            frappe.msgprint({
                                            title: __("Notification"),
                                            indicator: "red",
                                            message: __(\`Ensure price has been set for all items\`),
                            });
                        }

                        
                    
                    // dialog.hide();

                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    dialog.hide();
                }
            });
            dialog.fields_dict["item_list"].df.onchange = () => {
                alert("changed")
            }
            /*dialog.fields_dict["qty"].df.onchange = () => {
                dialog.set_values({
                    rate: Number(dialog.get_value("item_code")) * Number(dialog.get_value("qty")),
                });
            };*/

            dialog.show();
            dialog.$wrapper.find('.modal-content').css("width", "1000px");
            dialog.$wrapper.find('.modal-content').css("margin-left", "-200px");
            dialog.$wrapper.find('.modal-content').css("backdrop", "static");
            dialog.$wrapper.find('.modal-content').css("keyboard", "false");

            $('.modal-dialog').modal({
                backdrop: 'static',
                keyboard: false
            })

        },
        changeListener(dialog, parent, notify) {
            const data = dialog.fields[2].data || [];
            let total = 0;
            const promises = data.map((value) => {
                const { item_code, qty: quantity } = value
                // console.log(dialog.get_value("warehouse"))
                
                return item_code && fetchConditionalItemPrice({
                    item_code: item_code,
                    customer: parent.customerNumber,
                    patient:parent.patient_number,
                }).then(res => {
                    if(dialog.get_value("warehouse")){
                        itemStockBalanceWarehouse({
                            item_code: item_code,
                            warehouse: dialog.get_value("warehouse")
                        }).then(stock=>{
                            console.log(stock)
                            if(stock && stock.length>0){
                                value.stock = stock[0].actual_qty
                            }
                            else{
                            value.stock = 0
                            }
                        });
                    }
                    if (res.type === "Patient") {
                        let price = res.price;
                        let amount = Math.ceil((price * quantity));
                        value.rate = price;
                        value.amount = amount;
                        total = total + amount;
                        value.payer = res.type;
                        dialog.set_values({
                            total: total,
                        });
                        
                        if (res.is_nhif === true && notify === true) {
                            frappe.msgprint({
                                title: __('Note'),
                                message: __('Patient will be charged for this item due to insufficient insurance balance'),
                                primary_action: {

                                }
                            });
                        }
                    } else if (res.type === "Copay") {
                        let price = res.price;
                        let amount = Math.ceil((price * ((res.remaining_quantity) * quantity)));
                        value.rate = price;
                        value.amount = amount;
                        total = total + amount;
                        value.payer = "Copaid amount: " + "(" + (price * ((res.co_paid_quantity) * quantity)) + ")"
                        dialog.set_values({
                            total: total,
                        });
                    } else if (res.type === "Insurance") {
                        let price = res.price;
                        let amount = Math.ceil((price * quantity));
                        value.rate = price;
                        value.amount = amount;
                        total = total + amount;
                        value.payer = "Insurance: " + "(" + amount + ")"
                        dialog.set_values({
                            total: total,
                        });

                    } else if (res.type === "Pre-auth Insurance") {
                        let price = res.price;
                        let amount = Math.ceil((price * quantity));
                        value.rate = price;
                        value.amount = amount;
                        total = total + amount;
                        value.payer = "Pre-auth Insurance: " + "(" + amount + ")"
                        dialog.set_values({
                            total: total,
                        });
                    } else if (res.type === "Pre-auth Copay") {
                        let price = res.price;
                        let amount = Math.ceil((price * ((res.remaining_quantity) * quantity)));
                        value.rate = price;
                        value.amount = amount;
                        total = total + amount;
                        value.payer = "Pre-auth Copay: " + "(" + (price * ((res.co_paid_quantity) * quantity)) + ")"
                        dialog.set_values({
                            total: total,
                        });
                    }
                })
            })
            Promise.all(promises).then(() => {
                dialog.refresh()
            })

        },
        postInvoiceToAllowService(salesOrderItem) {},
        submitSalesOrder(salesOrderItem) {
            submitSalesOrder({ sales_order_name: salesOrderItem.parent }).then(r => {
                this.fetchCategorizedSalesOrders();
            })
        },
        makePayment(salesOrderItem) {
            let parent = this;
            let dialog = new frappe.ui.Dialog({
                title: \`Add Payment Entry for \${parent.patientName}\`,
                fields: [{
                        label: 'Client Name',
                        fieldname: 'party',
                        fieldtype: 'Read Only',
                        options: 'Customer',
                        default: \`\${parent.patientName} (\${parent.customerNumber})\`,
                        readonly: 0
                    },
                    {
                        label: 'Sales Order',
                        fieldname: 'sales_order',
                        fieldtype: 'Link',
                        options: 'Sales Order',
                        default: salesOrderItem.parent,
                        readonly: 0,
                        filters: { customer: parent.customerNumber, status: ['not in', ['Completed', 'Cancelled']] },
                    },
                    //  {
                    //     label: 'Account',
                    //     fieldname: 'paid_to',
                    //     fieldtype: 'Link',
                    //     options: 'Account',
                    //     filters: { account_type: ['in', ['Cash', 'Bank']] },
                    //     reqd: 1
                    // },
                    {
                        label: 'Mode of Payment',
                        fieldname: 'mode_of_payment',
                        fieldtype: 'Link',
                        options: 'Mode of Payment',
                        // filters: { account_type: ['in', ['Cash', 'Bank']] },
                        reqd: 1
                    },
                    {
                        label: 'Reference',
                        fieldname: 'reference_no',
                        fieldtype: 'Data',
                        reqd: 1,
                        default: Math.floor(Date.now()).toString(36).toUpperCase().toString()
                    },
                    {
                        label: 'Amount',
                        fieldname: 'paid_amount',
                        fieldtype: 'Currency',
                        reqd: 1,
                        default: salesOrderItem.amount
                    },
                    {
                        label: 'Confirm Amount',
                        fieldname: 'confirm_amount',
                        fieldtype: 'Currency',
                        reqd: 1
                    },
                    {
                        label: 'Amount Tendered',
                        fieldname: 'tendered_amount',
                        fieldtype: 'Currency',
                        reqd: 1
                    },
                    {
                        label: 'Change',
                        fieldname: 'change_amount',
                        fieldtype: 'Read Only',
                        default: 0,
                        readony: 0,
                    },
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    //  console.log(JSON.stringify(dialog.get_values()));
                    var diff = values.paid_amount - values.confirm_amount
                    parseFloat(values.confirm_amount) !== parseFloat(values.paid_amount) ? frappe.throw(\`Sorry the values you entered differ with invoice by \${diff}\`) :
                        savePaymentEntry({
                            docname: values.sales_order,
                            doctype: 'Sales Order',
                            amount: values.paid_amount,
                            change_amount: values.change_amount,
                            amount_tendered: values.tendered_amount,
                            reference_no: values.reference_no,
                            // paid_to: values.paid_to
                            mode_of_payment: values.mode_of_payment
                        }).then(r => {
                            parent.$emit('newPaymentEntry');
                            frappe.show_alert({
                                message: \`Payment Entry Created\`,
                                indicator: 'green'
                            }, 5);
                            parent.fetchCategorizedSalesOrders();
                        });
                    dialog.hide();
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    dialog.hide();
                }
            });
            dialog.fields_dict["tendered_amount"].df.onchange = () => {
                // dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
                //  dialog.get_value("confirm_amount")
                if (dialog.get_value("paid_amount") === dialog.get_value("confirm_amount")) {
                    if (dialog.get_value("tendered_amount") >= dialog.get_value("paid_amount")) {
                        dialog.set_values({ change_amount: dialog.get_value("tendered_amount") - dialog.get_value("paid_amount") });
                    } else {
                        var diff = dialog.get_value("tendered_amount") - dialog.get_value("paid_amount")
                        dialog.get_primary_btn().attr("disabled", false);
                        frappe.msgprint(\`Sorry the tendered amount is less than paid amount by \${diff.toFixed(2)}\`);
                    }
                }
            };
            dialog.get_primary_btn().attr("disabled", true);
            dialog.fields_dict["paid_amount"].df.onchange = () => {
                dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
            };
            dialog.fields_dict["confirm_amount"].df.onchange = () => {
                dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
            };
            dialog.show();
        },
        uploadFile(row) {
            const me = this;
            new frappe.ui.FileUploaderCustom({
                doctype: "Sales Order",
                docname: row.parent,
                on_success(file_doc) {
                    authorizeSalesrder({ sales_order_name: row.parent }).then(r => {
                        frappe.show_alert({
                            message: \`Sales Order Submitted\`,
                            indicator: 'green'
                        }, 5);
                    });
                    me.fetchCategorizedSalesOrders();
                },
            });
        },
        fetchCategorizedSalesOrders() {
            this.categorizedOrders = {}
            if(this.patient_number !== ''){
                getCategorizedSalesOrders({
                    patient_name: this.patient_number,
                }).then((data) => {
                    this.categorizedOrders = data;
                });
            }
        },
        // fetchSalesOrders() {
        //     this.selectedOrders = [];
        //     getPatientSalesrders({
        //         patient_name: this.patient_number,
        //     }).then((data) => {
        //         this.salesOrderItems = data;
        //     });
        // }
    },
    watch: {
        patient_number(value) {
            checkOpenAppointment(value).then(res => {
            if (res === true) {
                this.patientHasAppointment = true
            }
        });
            // this.fetchSalesOrders();
            this.fetchCategorizedSalesOrders();
        },
        
    },
    created() {
        //  api({
        //         method:'clinical.push_bytes',
        //         args: {
        //             // doctype: 'Item Group',
        //             // async: false,
        //             // filters: { is_prescription_item: 1 }
        //         },

        //     }).then(res => {
        //         console.log(res)
        //     })
        if (this.patient_number != "" ){
            checkOpenAppointment(this.patient_number).then(res => {
            if (res === true) {
                this.patientHasAppointment = true
            }
        });
        }
        
        // this.fetchSalesOrders();
        this.fetchCategorizedSalesOrders();
        getUserWarehouses().then(r => {
            r.map(warehouse => {
                this.warehouses.push(warehouse['for_value'])
                console.log(this.warehouses);
            })
        });

    },
    mounted(){
        this.makeSearchAppointmentControl();
    },
    filters: {
        // Filter definitions
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
}
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
  var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2}, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, void 0, void 0, void 0);
  var SalesOrder_default = __vue_component__2;

  // ../frontend/frontend/public/js/accounts/accounts/Receipts.vue
  var __vue_script__3 = {
    name: "Receipts",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      },
      customerNumber: {
        type: String,
        default: " ",
        required: true
      },
      patientName: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        paymentItems: void 0
      };
    },
    methods: {
      verifyMpesaPayment() {
        frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
          console.log(b);
          mpesaDialog(this.customerNumber);
        });
      },
      printReceipt(paymentItem) {
        var w = window.open(frappe.urllib.get_full_url("/printview?doctype=" + encodeURIComponent("Payment Entry") + "&name=" + encodeURIComponent(paymentItem.name) + "&format=Payment Entry Receipt&_lang=en&trigger_print=1"));
        if (!w) {
          msgprint(__("Please enable pop-ups"));
          return;
        }
      },
      createPaymentEntry() {
        let parent2 = this;
        let dialog = new frappe.ui.Dialog({
          title: `Add Payment Entry for ${parent2.patientName}`,
          fields: [
            {
              label: "Client Name",
              fieldname: "party",
              fieldtype: "Read Only",
              options: "Customer",
              default: `${parent2.patientName} (${parent2.customerNumber})`,
              readonly: 0
            },
            {
              label: "Sales Order",
              fieldname: "sales_order",
              fieldtype: "Link",
              options: "Sales Order",
              filters: {customer: parent2.customerNumber, status: ["not in", ["Completed", "Cancelled"]]}
            },
            {
              label: "Mode of Payment",
              fieldname: "mode_of_payment",
              fieldtype: "Link",
              options: "Mode of Payment",
              reqd: 1
            },
            {
              label: "Reference",
              fieldname: "reference_no",
              fieldtype: "Data",
              reqd: 1,
              default: Math.floor(Date.now()).toString(36).toUpperCase().toString()
            },
            {
              label: "Amount",
              fieldname: "paid_amount",
              fieldtype: "Currency",
              reqd: 1
            },
            {
              label: "Confirm Amount",
              fieldname: "confirm_amount",
              fieldtype: "Currency",
              reqd: 1
            },
            {
              label: "Amount Tendered",
              fieldname: "tendered_amount",
              fieldtype: "Currency",
              reqd: 1
            },
            {
              label: "Change",
              fieldname: "change_amount",
              fieldtype: "Read Only",
              default: 0,
              readony: 0
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            console.log(JSON.stringify(dialog.get_values()));
            if (values.sales_order) {
              var diff = values.paid_amount - values.confirm_amount;
              parseFloat(values.confirm_amount) !== parseFloat(values.paid_amount) ? frappe.throw(`Sorry the values you entered differ with invoice by ${diff}`) : savePaymentEntry({
                docname: values.sales_order,
                doctype: "Sales Order",
                amount: values.paid_amount,
                change_amount: values.change_amount,
                amount_tendered: values.tendered_amount,
                reference_no: values.reference_no,
                mode_of_payment: values.mode_of_payment
              }).then((r) => {
                parent2.$emit("newPaymentEntry");
                frappe.show_alert({
                  message: `Payment Entry Created`,
                  indicator: "green"
                }, 5);
                parent2.getPayments();
              });
              dialog.hide();
            } else {
              dialog.hide();
              savePrePayment({
                customer_name: parent2.customerNumber,
                amount: values.paid_amount,
                change_amount: values.change_amount,
                amount_tendered: values.tendered_amount,
                reference_no: values.reference_no,
                mode_of_payment: values.mode_of_payment
              }).then((r) => {
                parent2.$emit("newPaymentEntry");
                frappe.show_alert({
                  message: `Payment Entry Created`,
                  indicator: "green"
                }, 5);
                parent2.getPayments();
              });
            }
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            dialog.hide();
          }
        });
        dialog.fields_dict["tendered_amount"].df.onchange = () => {
          if (dialog.get_value("paid_amount") === dialog.get_value("confirm_amount")) {
            if (dialog.get_value("tendered_amount") >= dialog.get_value("paid_amount")) {
              dialog.set_values({change_amount: dialog.get_value("tendered_amount") - dialog.get_value("paid_amount")});
            } else {
              var diff = dialog.get_value("tendered_amount") - dialog.get_value("paid_amount");
              dialog.get_primary_btn().attr("disabled", false);
              frappe.msgprint(`Sorry the tendered amount is less than paid amount by ${diff.toFixed(2)}`);
            }
          } else {
            dialog.get_primary_btn().attr("disabled", false);
          }
        };
        dialog.get_primary_btn().attr("disabled", true);
        dialog.fields_dict["paid_amount"].df.onchange = () => {
          dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
        };
        dialog.fields_dict["confirm_amount"].df.onchange = () => {
          dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
        };
        dialog.show();
      },
      getPayments() {
        getPatientPayments({
          patient_number: this.patient_number,
          appointment_number: this.appointment_number,
          inpatient_record: this.inpatient_record
        }).then((data) => {
          this.paymentItems = data;
        });
      }
    },
    watch: {
      patient_number() {
        this.getPayments();
      }
    },
    created() {
      this.getPayments();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      }
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", [
          _c("div", {
            staticStyle: {display: "flex", "justify-content": "flex-end"}
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {size: "sm", variant: "primary"},
                on: {click: _vm.createPaymentEntry}
              }, [_vm._v("Add ")]),
              _vm._v(" "),
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {size: "md", variant: "primary"},
                on: {click: _vm.verifyMpesaPayment}
              }, [_vm._v("Verify Mpesa ")])
            ], 1)
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _c("table", {staticClass: "table table-striped table-bordered"}, [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.paymentItems, function(paymentItem) {
          return _c("tr", {key: paymentItem.name}, [
            _c("td", [_c("span", [_vm._v(_vm._s(paymentItem.name))])]),
            _vm._v(" "),
            _c("td", [
              _c("span", [
                _vm._v(_vm._s(_vm._f("dateFormat")(paymentItem.creation)))
              ])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(paymentItem.status))]),
            _vm._v(" "),
            _c("td", {staticStyle: {"text-align": "right"}}, [
              _c("span", [
                _vm._v(_vm._s(paymentItem.received_amount.toFixed(2)))
              ])
            ]),
            _vm._v(" "),
            _c("td", [_c("span", [_vm._v(_vm._s(paymentItem.paid_to))])]),
            _vm._v(" "),
            _c("td", [
              _c("b-button", {
                attrs: {variant: "primary"},
                on: {
                  click: function($event) {
                    return _vm.printReceipt(paymentItem);
                  }
                }
              }, [
                _c("i", {
                  staticClass: "fa fa-print",
                  attrs: {"aria-hidden": "true"}
                }),
                _vm._v(" Print")
              ])
            ], 1)
          ]);
        })
      ], 2)
    ], 1);
  };
  var __vue_staticRenderFns__3 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("Number")]),
          _vm._v(" "),
          _c("th", [_vm._v("Date")]),
          _vm._v(" "),
          _c("th", [_vm._v("Status")]),
          _vm._v(" "),
          _c("th", [_vm._v("Amount")]),
          _vm._v(" "),
          _c("th", [_vm._v("Account")]),
          _vm._v(" "),
          _c("th", [_vm._v("Action")])
        ])
      ]);
    }
  ];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = void 0;
  var __vue_scope_id__3 = void 0;
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <b-button style="margin-right:2px;" size="sm" variant="primary" @click="createPaymentEntry">Add </b-button>
                        <b-button style="margin-right:2px;" size="md" variant="primary" @click="verifyMpesaPayment">Verify Mpesa </b-button>

                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Account</th>
                    <!-- <th>Quantity</th>
                    <th>Total</th>-->
                    <th>Action</th> 
                </tr>
            </thead>
            <tr v-for="paymentItem in paymentItems" :key="paymentItem.name">
                <td><span>{{ paymentItem.name }}</span> </td>
                <td><span>{{ paymentItem.creation | dateFormat }}</span> </td>
                <td>{{ paymentItem.status }}</td>
                <td style="text-align: right;"><span>{{ paymentItem.received_amount.toFixed(2) }}</span> </td>
                <td><span>{{ paymentItem.paid_to }}</span> </td>
                <td>
                     <b-button @click="printReceipt(paymentItem)" variant="primary"><i class="fa fa-print" aria-hidden="true"></i> Print</b-button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { getPatientPayments } from "../../services/patient_chart/accounts.js";
//
import {
    savePaymentEntry,
    savePrePayment
} from '../../services/accounts/patient.js'
export default {
    name: 'Receipts',
    props: {
        patient_number: {
            type: String,
            default: " ",
            required: true,
        },
        customerNumber: {
            type: String,
            default: " ",
            required: true,
        },
        patientName: {
            type: String,
            default: " ",
            required: true,
        },
    },
    data() {
        return {
            paymentItems: undefined,
        };
    },
    methods: {
        verifyMpesaPayment(){
             frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
            // chat.js is loaded
                console.log(b)
                mpesaDialog(this.customerNumber)
            })
        },
        printReceipt(paymentItem){
              var w = window.open(frappe.urllib.get_full_url("/printview?" +
                "doctype=" + encodeURIComponent('Payment Entry') +
                "&name=" + encodeURIComponent(paymentItem.name) +
                "&format=Payment Entry Receipt&_lang=en&trigger_print=1"
            ));
            if (!w) {
                msgprint(__("Please enable pop-ups"));
                return;
            }
        },
        createPaymentEntry() {
            let parent = this;
            let dialog = new frappe.ui.Dialog({
                title: \`Add Payment Entry for \${parent.patientName}\`,
                fields: [{
                        label: 'Client Name',
                        fieldname: 'party',
                        fieldtype: 'Read Only',
                        options: 'Customer',
                        default: \`\${parent.patientName} (\${parent.customerNumber})\`,
                        readonly: 0
                    },
                    {
                        label: 'Sales Order',
                        fieldname: 'sales_order',
                        fieldtype: 'Link',
                        options: 'Sales Order',
                        // hidden: doctype,
                        filters: { customer: parent.customerNumber, status: ['not in', ['Completed', 'Cancelled']] },
                    },
                    {
                        label: 'Mode of Payment',
                        fieldname: 'mode_of_payment',
                        fieldtype: 'Link',
                        options: 'Mode of Payment',
                        // filters: { account_type: ['in', ['Cash', 'Bank']] },
                        reqd: 1
                    },
                    {
                        label: 'Reference',
                        fieldname: 'reference_no',
                        fieldtype: 'Data',
                        reqd: 1,
                        default:Math.floor(Date.now()).toString(36).toUpperCase().toString()
                    },
                    {
                        label: 'Amount',
                        fieldname: 'paid_amount',
                        fieldtype: 'Currency',
                        reqd: 1
                    },
                    {
                        label: 'Confirm Amount',
                        fieldname: 'confirm_amount',
                        fieldtype: 'Currency',
                        reqd: 1
                    },
                    {
                        label: 'Amount Tendered',
                        fieldname: 'tendered_amount',
                        fieldtype: 'Currency',
                        reqd: 1
                    },
                    {
                        label: 'Change',
                        fieldname: 'change_amount',
                        fieldtype: 'Read Only',
                        default: 0,
                        readony: 0,
                    },
                    // {
                    //     label: 'Change Account',
                    //     fieldname: 'account_for_change',
                    //     fieldtype: 'Link',
                    //     options: 'Account',
                    //     // hidden: doctype,
                    //     filters: { account_type: "Cash" },
                    // },
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    // save payment entry
                    console.log(JSON.stringify(dialog.get_values()));
                    if (values.sales_order) {
                        // && values.confirm_amount === values.paid_amount
                        var diff = values.paid_amount - values.confirm_amount
                        parseFloat(values.confirm_amount) !== parseFloat(values.paid_amount) ? frappe.throw(\`Sorry the values you entered differ with invoice by \${diff}\`) :
                            savePaymentEntry({
                                docname: values.sales_order,
                                doctype: 'Sales Order',
                                amount: values.paid_amount,
                                // account_for_change:values.account_for_change,
                                change_amount: values.change_amount,
                                amount_tendered: values.tendered_amount,
                                reference_no: values.reference_no,
                                // paid_to: values.paid_to
                                mode_of_payment:values.mode_of_payment
                            }).then(r => {
                                parent.$emit('newPaymentEntry');
                                frappe.show_alert({
                                    message: \`Payment Entry Created\`,
                                    indicator: 'green'
                                }, 5);
                                //dialog.hide();
                                parent.getPayments();
                            });
                            dialog.hide();
                    } else {
                        dialog.hide();
                        savePrePayment({
                            customer_name: parent.customerNumber,
                            amount: values.paid_amount,
                            // account_for_change:values.account_for_change, 
                            change_amount: values.change_amount,
                            amount_tendered: values.tendered_amount,
                            reference_no: values.reference_no,
                            // paid_to: values.paid_to
                             mode_of_payment:values.mode_of_payment
                        }).then(r => {
                            parent.$emit('newPaymentEntry');
                            frappe.show_alert({
                                message: \`Payment Entry Created\`,
                                indicator: 'green'
                            }, 5);
                            parent.getPayments();
                        });
                    }
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    dialog.hide();
                }
            });
            dialog.fields_dict["tendered_amount"].df.onchange = () => {
                // dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
                //  dialog.get_value("confirm_amount")
                if (dialog.get_value("paid_amount") === dialog.get_value("confirm_amount")) {
                    if (dialog.get_value("tendered_amount") >= dialog.get_value("paid_amount")) {
                        dialog.set_values({ change_amount: dialog.get_value("tendered_amount") - dialog.get_value("paid_amount") });
                    } else {
                        var diff = dialog.get_value("tendered_amount") - dialog.get_value("paid_amount")
                        dialog.get_primary_btn().attr("disabled", false);
                        frappe.msgprint(\`Sorry the tendered amount is less than paid amount by \${diff.toFixed(2)}\`);
                    }
                } else {
                    dialog.get_primary_btn().attr("disabled", false);
                }
            };
            dialog.get_primary_btn().attr("disabled", true);
            dialog.fields_dict["paid_amount"].df.onchange = () => {
                dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
            };
            dialog.fields_dict["confirm_amount"].df.onchange = () => {
                dialog.get_primary_btn().attr("disabled", dialog.get_value("paid_amount") !== dialog.get_value("confirm_amount"));
            };
            dialog.show();
        },
        getPayments() {
            getPatientPayments({
                patient_number: this.patient_number,
                appointment_number: this.appointment_number,
                inpatient_record: this.inpatient_record,
            }).then((data) => {
                this.paymentItems = data;
            });
        },

    },
    watch: {
        patient_number() {
            this.getPayments();
        }
    },
    created() {
        this.getPayments();
    },
    filters: {
        // Filter definitions
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
    }
}
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
  var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3}, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, void 0, void 0, void 0);
  var Receipts_default = __vue_component__3;

  // ../frontend/frontend/public/js/accounts/accounts/components/GatePass.vue
  var __vue_script__4 = {
    name: "GatePass",
    data() {
      return {};
    },
    created() {
    },
    props: {
      patient: {
        type: String,
        default: " ",
        required: true
      }
    },
    methods: {
      GenerateGP() {
        generateGatePass({
          patient: this.patient
        }).then((data) => {
        });
      }
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-button", {
        staticClass: "pull-right",
        attrs: {variant: "success btn-sm"},
        on: {
          click: function($event) {
            return _vm.GenerateGP();
          }
        }
      }, [_vm._v("\n    Generate Gate Pass\n  ")])
    ], 1);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-4e095058_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "GatePass.vue"}, media: void 0});
  };
  var __vue_scope_id__4 = void 0;
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <b-button\n      class="pull-right"\n      @click="GenerateGP()"\n      variant="success btn-sm"\n    >\n      Generate Gate Pass\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  generateGatePass,\n} from "../../../services/patient_chart/api.js";\nexport default {\n  name: "GatePass",\n  data() {\n    return {};\n  },\n  created() {},\n  props: {\n      patient: {\n            type: String,\n            default: " ",\n            required: true,\n        }\n  },\n\n  methods: {\n    GenerateGP() {\n      generateGatePass({\n        patient: this.patient,\n      }).then((data) => {\n          \n      });\n    },\n    \n  },\n};\n</script>\n\n<style></style>\n';
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
  var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4({render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4}, __vue_inject_styles__4, __vue_script__4, __vue_scope_id__4, __vue_is_functional_template__4, __vue_module_identifier__4, false, __vue_create_injector__2, void 0, void 0);
  var GatePass_default = __vue_component__4;

  // ../frontend/frontend/public/js/accounts/accounts/Invoices.vue
  var __vue_script__5 = {
    name: "Invoices",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        invoices: []
      };
    },
    components: {
      GatePass: GatePass_default
    },
    methods: {
      changeInvoiceCustomerGroup(invoiceName) {
        const dialog = new frappe.ui.Dialog({
          title: "Update Invoice Customer Group",
          fields: [{
            label: "Insurance Payer",
            fieldtype: "Link",
            options: "Customer Group",
            fieldname: "customer_group"
          }],
          primary_action: (values) => {
            changeSalesOrderCustomer({
              sales_invoice: invoiceName,
              customer_group: values.customer_group
            }).then(() => {
              dialog.hide();
            });
          }
        });
        dialog.show();
      },
      printNHIFRenal(invoiceName) {
        var w = window.open(frappe.urllib.get_full_url("/printview?doctype=" + encodeURIComponent("Sales Invoice") + "&name=" + encodeURIComponent(invoiceName) + "&format=" + encodeURIComponent("Sales Invoice Summary NHIF Renal") + "&_lang=en&no_letterhead=0&letterhead=MTRH%20Default&settings=%7B%7D&trigger_print=1"));
        if (!w) {
          msgprint(__("Please enable pop-ups"));
          return;
        }
      },
      printInterim(invoiceName) {
        var w = window.open(frappe.urllib.get_full_url("/printview?doctype=" + encodeURIComponent("Sales Invoice") + "&name=" + encodeURIComponent(invoiceName) + "&format=" + encodeURIComponent("Interim Sales Invoice") + "&_lang=en&no_letterhead=0&letterhead=MTRH%20Default&settings=%7B%7D&trigger_print=1"));
        if (!w) {
          msgprint(__("Please enable pop-ups"));
          return;
        }
      },
      printSummary(invoiceName) {
        var w = window.open(frappe.urllib.get_full_url("/printview?doctype=" + encodeURIComponent("Sales Invoice") + "&name=" + encodeURIComponent(invoiceName) + "&format=" + encodeURIComponent("Sales Invoice Summary") + "&_lang=en&no_letterhead=0&letterhead=MTRH%20Default&settings=%7B%7D&trigger_print=1"));
        var w = window.open(frappe.urllib.get_full_url(`app/print/Sales Invoice/${invoiceName}`));
        if (!w) {
          msgprint(__("Please enable pop-ups"));
          return;
        }
      },
      createCreditNote(invoiceItem) {
        let parent2 = this;
        let dialog = new frappe.ui.Dialog({
          title: `Add Credit Note for ${invoiceItem.parent}`,
          fields: [
            {
              label: "Total to be paid",
              fieldname: "party",
              fieldtype: "Read Only",
              options: "Currency",
              default: `${invoiceItem.amount.toFixed(2)}`,
              readonly: 0
            },
            {
              label: "New Invoice Amount",
              fieldname: "new_amount",
              fieldtype: "Currency",
              reqd: 1,
              default: 0
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            dialog.hide();
            createSalesReturn({
              invoice_name: invoiceItem.parent,
              return_amount: parseFloat(invoiceItem.amount) - parseFloat(values.new_amount)
            }).then((r) => {
              frappe.show_alert({
                message: `Credit Note Created #${r.name}`,
                indicator: "green"
              }, 5);
            });
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            dialog.hide();
          }
        });
        dialog.show();
      },
      finalizeInvoices() {
        if (this.invoices.unpaid_sales_invoice_items.length || this.invoices.paid_sales_invoice_items.length) {
          let concat = this.invoices.unpaid_sales_invoice_items.concat(this.invoices.paid_sales_invoice_items);
          let salesInvoice = {
            name: concat[0].parent
          };
          finalizeInvoice(salesInvoice).then((data) => {
            frappe.show_alert({
              message: `Invoice finalized`,
              indicator: "green"
            }, 5);
            this.fetchCategorizedSalesInvoices();
          });
        } else {
          frappe.show_alert({
            message: `No invoice(s) to finalize`,
            indicator: "orange"
          }, 5);
        }
      },
      fetchCategorizedSalesInvoices() {
        getCategorizedSalesInvoices({patient_number: this.patient_number}).then((data) => {
          this.invoices = data;
        });
      }
    },
    watch: {
      patient_number() {
        this.fetchCategorizedSalesInvoices();
      }
    },
    created() {
      this.fetchCategorizedSalesInvoices();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value2) {
        return value2.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", [
          _c("div", {
            staticStyle: {
              display: "flex",
              "justify-content": "flex-start"
            }
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [_c("gate-pass", {attrs: {patient: _vm.patient_number}})], 1)
          ], 1),
          _vm._v(" "),
          _c("div", {
            staticStyle: {display: "flex", "justify-content": "flex-end"}
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {variant: "primary", size: "sm"},
                on: {click: _vm.fetchCategorizedSalesInvoices}
              }, [_vm._v("Refresh ")])
            ], 1)
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr"),
              _c("tr", [
                _c("th", {attrs: {colspan: "6"}}, [
                  _vm._v(" Paid Items " + _vm._s(_vm.invoices.paid_sales_invoice_items.length || 0))
                ])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("Item")]),
              _vm._v(" "),
              _c("th", [_vm._v("Invoice")]),
              _vm._v(" "),
              _c("th", [_vm._v("Date")]),
              _vm._v(" "),
              _c("th", [_vm._v("Quantity")]),
              _vm._v(" "),
              _c("th", [_vm._v("Rate")]),
              _vm._v(" "),
              _c("th", [_vm._v("Amount")]),
              _vm._v(" "),
              _c("th", [_vm._v("Action")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.invoices.paid_sales_invoice_items, function(invoiceItem) {
              return _c("tr", {key: invoiceItem.name}, [
                _c("td", [_vm._v(_vm._s(invoiceItem.item_name))]),
                _vm._v(" "),
                _c("td", [
                  _c("span", {
                    domProps: {innerHTML: _vm._s(invoiceItem.si_link)}
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(invoiceItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("numberWithCommas")(invoiceItem.qty || 1)))
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("numberWithCommas")(invoiceItem.rate.toFixed(2))))
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(invoiceItem.amount.toFixed(2))))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b-dropdown", {
                    attrs: {
                      text: "Select Actions",
                      variant: "primary"
                    }
                  }, [
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.printNHIFRenal(invoiceItem.parent);
                        }
                      }
                    }, [_vm._v("Renal NHIF ")]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.printInterim(invoiceItem.parent);
                        }
                      }
                    }, [_vm._v("Print Interim")]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.printSummary(invoiceItem.parent);
                        }
                      }
                    }, [_vm._v("Print Summary ")])
                  ], 1)
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr"),
              _c("tr", [
                _c("th", {attrs: {colspan: "6"}}, [
                  _vm._v("Un Paid Items " + _vm._s(_vm.invoices.unpaid_sales_invoice_items.length || 0) + " ")
                ])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("Item")]),
              _vm._v(" "),
              _c("th", [_vm._v("Invoice")]),
              _vm._v(" "),
              _c("th", [_vm._v("Date")]),
              _vm._v(" "),
              _c("th", [_vm._v("Quantity")]),
              _vm._v(" "),
              _c("th", [_vm._v("Rate")]),
              _vm._v(" "),
              _c("th", [_vm._v("Amount")]),
              _vm._v(" "),
              _c("th", [_vm._v("Action")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.invoices.unpaid_sales_invoice_items, function(invoiceItem) {
              return _c("tr", {key: invoiceItem.name}, [
                _c("td", [_vm._v(_vm._s(invoiceItem.item_name))]),
                _vm._v(" "),
                _c("td", [
                  _c("span", {
                    domProps: {innerHTML: _vm._s(invoiceItem.si_link)}
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(invoiceItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("numberWithCommas")(invoiceItem.qty || 1)))
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("numberWithCommas")(invoiceItem.rate.toFixed(2))))
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(invoiceItem.amount.toFixed(2))))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b-dropdown", {
                    attrs: {
                      text: "Select Actions",
                      variant: "primary"
                    }
                  }, [
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.printNHIFRenal(invoiceItem.parent);
                        }
                      }
                    }, [_vm._v("Renal NHIF ")]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.printInterim(invoiceItem.parent);
                        }
                      }
                    }, [_vm._v("Print Interim")]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.printSummary(invoiceItem.parent);
                        }
                      }
                    }, [_vm._v("Print Summary ")]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.changeInvoiceCustomerGroup(invoiceItem.parent);
                        }
                      }
                    }, [_vm._v("Change Invoice Customer Group")])
                  ], 1)
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__5 = [];
  __vue_render__5._withStripped = true;
  var __vue_inject_styles__5 = void 0;
  var __vue_scope_id__5 = void 0;
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <!-- {{ invoices }} -->
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-start">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <gate-pass :patient="patient_number"/>
                    </b-button-group>
                </div>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <!-- <b-button style="margin-right:2px;" variant="primary" size="sm" @click="finalizeInvoices">Finalize Invoices</b-button> -->
                        <b-button style="margin-right:2px;" variant="primary" size="sm" @click="fetchCategorizedSalesInvoices">Refresh </b-button>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <tr>
                                <th colspan="6"> Paid Items {{ invoices.paid_sales_invoice_items.length || 0}}</th>
                            </tr>
                            <th>Item</th>
                            <th>Invoice</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Amount</th>
                            <!-- <th>Sales Order</th> -->
                            <!-- <th>Account</th> -->
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tr v-for="invoiceItem in invoices.paid_sales_invoice_items" :key="invoiceItem.name">
                        <td>{{ invoiceItem.item_name }}</td>
                        <!-- <td><span>{{ invoiceItem.parent }}</span> </td> -->
                        <td>  <span v-html="invoiceItem.si_link"></span> </td>
                        <td><span>{{ invoiceItem.creation | dateFormat}}</span> </td>
                        <td>{{ invoiceItem.qty || 1 | numberWithCommas }}</td>
                        <td>{{ invoiceItem.rate.toFixed(2) | numberWithCommas }}</td>
                        <td style="text-align: right;"><span>{{ invoiceItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <!-- <td><span>{{ invoiceItem.sales_order}}</span> </td> -->
                        <td>
                            <!-- <b-btn variant="primary" @click="createCreditNote(invoiceItem)">Credit Note</b-btn> -->
                             <b-dropdown text="Select Actions" variant="primary">
                                <b-dropdown-item variant="primary" @click="printNHIFRenal(invoiceItem.parent)">Renal NHIF </b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="printInterim(invoiceItem.parent)">Print Interim</b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="printSummary(invoiceItem.parent)">Print Summary </b-dropdown-item>
                            </b-dropdown>
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <tr>
                                <th colspan="6">Un Paid Items {{ invoices.unpaid_sales_invoice_items.length || 0}} </th>
                            </tr>
                            <th>Item</th>
                            <th>Invoice</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Amount</th>
                            <!-- <th>Sales Order</th> -->
                            <!-- <th>Account</th> -->
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tr v-for="invoiceItem in invoices.unpaid_sales_invoice_items" :key="invoiceItem.name">
                        <td>{{ invoiceItem.item_name }}</td>
                        <!-- <td><span>{{ invoiceItem.parent }}</span> </td> -->
                        <td>  <span v-html="invoiceItem.si_link"></span> </td>
                        <td><span>{{ invoiceItem.creation | dateFormat}}</span> </td>
                        <td>{{ invoiceItem.qty || 1 | numberWithCommas }}</td>
                        <td>{{ invoiceItem.rate.toFixed(2) | numberWithCommas }}</td>
                        <td style="text-align: right;"><span>{{ invoiceItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <!-- <td><span>{{ invoiceItem.sales_order}}</span> </td> -->
                        <td>
                               <b-dropdown text="Select Actions" variant="primary">
                                <b-dropdown-item variant="primary" @click="printNHIFRenal(invoiceItem.parent)">Renal NHIF </b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="printInterim(invoiceItem.parent)">Print Interim</b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="printSummary(invoiceItem.parent)">Print Summary </b-dropdown-item> 
                                <b-dropdown-item variant="primary" @click="changeInvoiceCustomerGroup(invoiceItem.parent)">Change Invoice Customer Group</b-dropdown-item>                        
                            </b-dropdown>
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { /*getPatientInvoices,*/ finalizeInvoice } from "../../services/patient_chart/accounts.js";
import {
    getPatientInvoices,
    getCategorizedSalesInvoices,
    createSalesReturn,
    changeSalesOrderCustomer
} from '../../services/accounts/patient.js'
import GatePass from './components/GatePass.vue'
export default {
    name: 'Invoices',
    props: {
        patient_number: {
            type: String,
            default: " ",
            required: true,
        }
    },
    data() {
        return {
            invoices: [],
        };
    },
    components:{
        GatePass
    },
    methods: {
        changeInvoiceCustomerGroup(invoiceName){
            const dialog = new frappe.ui.Dialog({
                title: 'Update Invoice Customer Group',
                fields: [{
                    label: 'Insurance Payer',
                    fieldtype: 'Link',
                    options: 'Customer Group',
                    fieldname: 'customer_group'
                }],
                primary_action: (values) => {
                    changeSalesOrderCustomer({
                        sales_invoice: invoiceName, customer_group: values.customer_group
                    }).then(() => {
                         dialog.hide()
                    })
                }
            })
            dialog.show()
        },
         printNHIFRenal(invoiceName){
             var w = window.open(frappe.urllib.get_full_url("/printview?" +
                "doctype=" + encodeURIComponent('Sales Invoice') +
                "&name=" + encodeURIComponent(invoiceName) +
                "&format=" + encodeURIComponent('Sales Invoice Summary NHIF Renal') +
                "&_lang=en&no_letterhead=0&letterhead=MTRH%20Default&settings=%7B%7D&trigger_print=1"
            ));
            //  var w = window.open(frappe.urllib.get_full_url(\`app/print/Sales Invoice/\${invoiceName}\` //+
            //     // "doctype=" + encodeURIComponent('Invoice Finalization') +
            //     // "&name=" + encodeURIComponent(finalInvoiceItem.name)
            // ));
            if (!w) {
                msgprint(__("Please enable pop-ups"));
                return;
            }
        },
        printInterim(invoiceName){
             var w = window.open(frappe.urllib.get_full_url("/printview?" +
                "doctype=" + encodeURIComponent('Sales Invoice') +
                "&name=" + encodeURIComponent(invoiceName) +
                "&format=" + encodeURIComponent('Interim Sales Invoice') +
                "&_lang=en&no_letterhead=0&letterhead=MTRH%20Default&settings=%7B%7D&trigger_print=1"
            ));
            //  var w = window.open(frappe.urllib.get_full_url(\`app/print/Sales Invoice/\${invoiceName}\` //+
            //     // "doctype=" + encodeURIComponent('Invoice Finalization') +
            //     // "&name=" + encodeURIComponent(finalInvoiceItem.name)
            // ));
            if (!w) {
                msgprint(__("Please enable pop-ups"));
                return;
            }
        },
        printSummary(invoiceName){
            // Sales Invoice Summary
              var w = window.open(frappe.urllib.get_full_url("/printview?" +
                "doctype=" + encodeURIComponent('Sales Invoice') +
                "&name=" + encodeURIComponent(invoiceName) +
                "&format="+ encodeURIComponent('Sales Invoice Summary') + 
                "&_lang=en&no_letterhead=0&letterhead=MTRH%20Default&settings=%7B%7D&trigger_print=1"
            ));
             var w = window.open(frappe.urllib.get_full_url(\`app/print/Sales Invoice/\${invoiceName}\` //+
                // "doctype=" + encodeURIComponent('Invoice Finalization') +
                // "&name=" + encodeURIComponent(finalInvoiceItem.name)
            ));
            if (!w) {
                msgprint(__("Please enable pop-ups"));
                return;
            }
        },
        
        createCreditNote(invoiceItem) {
            let parent = this;
            let dialog = new frappe.ui.Dialog({
                title: \`Add Credit Note for \${invoiceItem.parent}\`,
                fields: [{
                        label: 'Total to be paid',
                        fieldname: 'party',
                        fieldtype: 'Read Only',
                        options: 'Currency',
                        default: \`\${invoiceItem.amount.toFixed(2)}\`,
                        readonly: 0
                    },
                    {
                        label: 'New Invoice Amount',
                        fieldname: 'new_amount',
                        fieldtype: 'Currency',
                        reqd: 1,
                        default: 0
                    },
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    dialog.hide();
                    createSalesReturn({
                        invoice_name:invoiceItem.parent,
                        return_amount: parseFloat(invoiceItem.amount) - parseFloat(values.new_amount) 
                    }).then(r=>{
                          frappe.show_alert({
                            message: \`Credit Note Created #\${r.name}\`,
                            indicator: 'green'
                        }, 5);        
                    });
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    dialog.hide();
                }
            });
            dialog.show();
        },
        finalizeInvoices() {
            if (this.invoices.unpaid_sales_invoice_items.length || this.invoices.paid_sales_invoice_items.length) {
                let concat = this.invoices.unpaid_sales_invoice_items.concat(this.invoices.paid_sales_invoice_items);
                let salesInvoice = {
                    name: concat[0].parent
                    // name:this.invoices.unpaid_sales_invoice_items[0].parent || this.invoices.paid_sales_invoice_items[0].parent
                };
                finalizeInvoice(salesInvoice).then((data) => {
                    frappe.show_alert({
                        message: \`Invoice finalized\`,
                        indicator: 'green'
                    }, 5);
                    this.fetchCategorizedSalesInvoices();
                });
            } else {
                frappe.show_alert({
                    message: \`No invoice(s) to finalize\`,
                    indicator: 'orange'
                }, 5);
            }
        },
        //
        fetchCategorizedSalesInvoices() {
            getCategorizedSalesInvoices({ patient_number: this.patient_number })
                .then((data) => {
                    this.invoices = data;
                });
        },
        // fetchInvoices() {
        //     getPatientInvoices({ patient_number: this.patient_number})
        //         .then((data) => {
        //             this.invoices = data;
        //         });
        // }
    },
    watch: {
        patient_number() {
            // this.fetchInvoices();
            this.fetchCategorizedSalesInvoices();
        }
    },
    created() {
        // this.fetchInvoices();
        this.fetchCategorizedSalesInvoices();
    },
    filters: {
        // Filter definitions
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
}
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
  var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5({render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5}, __vue_inject_styles__5, __vue_script__5, __vue_scope_id__5, __vue_is_functional_template__5, __vue_module_identifier__5, false, void 0, void 0, void 0);
  var Invoices_default = __vue_component__5;

  // ../frontend/frontend/public/js/accounts/accounts/InvoiceFInalization.vue
  var __vue_script__6 = {
    name: "InvoiceFInalization",
    props: {
      patientName: {
        type: String,
        default: " ",
        required: true
      },
      customerName: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        invoiceFInalization: []
      };
    },
    computed: {},
    methods: {
      submitFinalization(finalInvoiceItem) {
        submitInvoiceFinalization({finalization_name: finalInvoiceItem.name}).then((r) => {
          this.getFinalizations();
          frappe.show_alert({
            message: `Invoice finalization Submitted`,
            indicator: "green"
          }, 5);
        });
      },
      makePayment(finalInvoiceItem) {
      },
      makeCreditNote(finalInvoiceItem) {
        let invoiceArr = [];
        getFinalizedInvoiceItems({name: finalInvoiceItem.name}).then((r) => {
          console.log(r);
          invoiceArr = r;
        });
        prepareAllocationFieldList({docname: finalInvoiceItem.name}).then((r) => {
          let schemes = r;
          let query_args = {
            filters: {"parent": ["IN", invoiceArr]}
          };
          new frappe.ui.form.MultiSelectDialog({
            doctype: "Sales Invoice Item",
            target: parent,
            setters: {
              item_code: "",
              item_name: "",
              amount: ""
            },
            get_query() {
              return query_args;
            },
            primary_action_label: "Set Paid Amount",
            action(selections) {
              getSalesInvoiceItems({name: selections[0]}).then((r2) => {
                let invoice = r2.parent;
                let total = r2.amount;
                var title2 = `Set for ${invoice} Amount paid out of  ${total}`;
                let x = new frappe.ui.Dialog({
                  title: title2,
                  fields: [{
                    label: "New Invoice Amount",
                    fieldname: "new_amount",
                    fieldtype: "Currency",
                    reqd: 1,
                    default: 0
                  }],
                  primary_action_label: "Set Invoice Amount",
                  primary_action: (values) => {
                    console.log(invoice);
                    console.log(values);
                    x.hide();
                    createSalesReturn({
                      invoice_name: invoice,
                      return_amount: parseFloat(total) - parseFloat(values.new_amount)
                    }).then((result) => {
                      frappe.show_alert({
                        message: `Credit Note Created #${result.name}`,
                        indicator: "green"
                      }, 5);
                    });
                  }
                });
                x.show();
              });
            }
          });
        });
      },
      viewAllocations(finalInvoiceItem) {
        getFinalizedInvoiceAllocations({
          final_invoice_name: finalInvoiceItem.name
        }).then((r) => {
          let message2 = "<ol>";
          r.map((item) => {
            message2 += `<li> ${item.invoice} &nbsp; ${item.payer} &nbsp; ${item.total.toFixed(2)}</li>`;
          });
          message2 += "</ol>";
          frappe.msgprint({
            title: __("Payment Allocations"),
            message: message2
          });
        });
      },
      createGatePass(finalInvoiceItem) {
        let x = new frappe.ui.Dialog({
          title: "Gate pass",
          fields: [{
            label: "Remarks",
            fieldname: "remarks",
            fieldtype: "Text"
          }],
          primary_action_label: "Create Gate Pass",
          primary_action: (values) => {
            console.log(values);
            createGatePass({
              invoice_finalization_name: finalInvoiceItem.name,
              remarks: values.remarks
            }).then((r) => {
              if (r) {
                x.hide();
                frappe.show_alert({
                  message: `Gate pass created`,
                  indicator: "green"
                }, 5);
              }
            });
          },
          secondary_action_label: "Cancel",
          secondary_action: (values) => {
            x.hide();
          }
        });
        x.show();
      },
      allocateInvoiceItem(finalInvoiceItem) {
        let parent2 = this;
        function split_invoice(primary_invoice, split_args, row) {
          splitInvoice({
            primary_invoice,
            split_args,
            row
          }).then((r) => {
            console.log(r);
            frappe.show_alert({
              message: `Finalized Document allocation success`,
              indicator: "green"
            }, 5);
          });
        }
        let invoiceArr = [];
        getFinalizedInvoiceItems({name: finalInvoiceItem.name}).then((r) => {
          console.log(r);
          invoiceArr = r;
        });
        prepareAllocationFieldList({docname: finalInvoiceItem.name}).then((r) => {
          let schemes = r;
          let query_args = {
            filters: {"parent": ["IN", invoiceArr]}
          };
          new frappe.ui.form.MultiSelectDialog({
            doctype: "Sales Invoice Item",
            target: parent2,
            setters: {
              item_code: "",
              item_name: "",
              amount: ""
            },
            get_query() {
              return query_args;
            },
            primary_action_label: "Allocate Item",
            action(selections) {
              getSalesInvoiceItems({name: selections[0]}).then((r2) => {
                let invoice = r2.parent;
                let total = r2.amount;
                var title2 = `${invoice} Total to allocate:  ${total}`;
                let x = new frappe.ui.Dialog({
                  title: title2,
                  fields: schemes,
                  primary_action_label: "Allocate Invoices",
                  primary_action: (values) => {
                    let valuePayload = [];
                    const propertyNames = Object.keys(values);
                    const propertyValues = Object.values(values);
                    propertyNames.forEach(function(val, key) {
                      valuePayload.push({name: val, value: propertyValues[key]});
                    });
                    var entered_value = Object.values(values).reduce(function(a, b2) {
                      return a + b2;
                    }, 0);
                    var diff = total - entered_value;
                    parseFloat(entered_value) > parseFloat(total) ? frappe.throw(`Sorry the values you entered differ with invoice by ${diff}`) : split_invoice(invoice, valuePayload, selections[0]);
                  }
                });
                x.show();
              });
            }
          });
        });
      },
      printFinalization(finalInvoiceItem) {
        var w = window.open(frappe.urllib.get_full_url(`app/print/Invoice Finalization/${finalInvoiceItem.name}`));
        if (!w) {
          msgprint(__("Please enable pop-ups"));
          return;
        }
      },
      emailFinalizations(finalInvoiceItem) {
        let messageBody = `Dear Sir/Madam,<br/>Please find attached Finalized Invoice for appointment <b>${finalInvoiceItem.appointment_number}</b>, for your reference.        The list of items is shown on the attached document.<br/> Any queries or Issues should be addressed to Moi Teaching and Referral Hospital Finance/Billing Department.<br/><br/>        Regards <br/> Moi Teaching and Referal Hospital.`;
        emailInvoiceFinalizations({
          party_type: "Customer",
          party_name: this.customerName,
          message: messageBody,
          ref_type: "Invoice Finalization",
          ref_name: finalInvoiceItem.name
        }).then((result) => {
          if (result) {
            frappe.show_alert({
              message: `Finalized Document Sent to email Queue`,
              indicator: "green"
            }, 5);
          }
        });
      },
      getFinalizations() {
        getInvoiceFinalizations(this.patientName).then((result) => {
          if (result) {
            this.invoiceFInalization = result;
          }
        });
      }
    },
    watch: {
      appointment_number() {
        this.getFinalizations();
      },
      inpatient_record() {
        this.getFinalizations();
      }
    },
    created() {
      this.getFinalizations();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value2) {
        return value2.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", [
          _c("div", {
            staticStyle: {display: "flex", "justify-content": "flex-end"}
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {size: "sm", variant: "primary"},
                on: {click: _vm.getFinalizations}
              }, [_vm._v("Refresh ")])
            ], 1)
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Timestamp")]),
                _vm._v(" "),
                _c("th", [_vm._v("Visit Type")]),
                _vm._v(" "),
                _c("th", [_vm._v("Total")]),
                _vm._v(" "),
                _c("th", [_vm._v("Actions")])
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.invoiceFInalization, function(finalInvoiceItem) {
              return _c("tr", {key: finalInvoiceItem.name}, [
                _c("td", [_vm._v(_vm._s(finalInvoiceItem.name))]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(finalInvoiceItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(finalInvoiceItem.visit_type))])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _vm._v(_vm._s(_vm._f("numberWithCommas")(finalInvoiceItem.total_invoice_amount.toFixed(2))))
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b-dropdown", {
                    staticClass: "m-md-2",
                    attrs: {
                      id: "dropdown-1",
                      variant: "primary",
                      text: "Select Actions"
                    }
                  }, [
                    finalInvoiceItem.docstatus === 0 ? _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.submitFinalization(finalInvoiceItem);
                        }
                      }
                    }, [
                      _vm._v("\n                                Submit\n                            ")
                    ]) : _vm._e(),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.printFinalization(finalInvoiceItem);
                        }
                      }
                    }, [
                      _vm._v("\n                                Print\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.emailFinalizations(finalInvoiceItem);
                        }
                      }
                    }, [
                      _vm._v("\n                                Email\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.viewAllocations(finalInvoiceItem);
                        }
                      }
                    }, [
                      _vm._v("\n                                View Allocations\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.allocateInvoiceItem(finalInvoiceItem);
                        }
                      }
                    }, [
                      _vm._v("\n                                Allocate to Payers\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.createGatePass(finalInvoiceItem);
                        }
                      }
                    }, [
                      _vm._v("\n                                Gate Pass\n                            ")
                    ])
                  ], 1)
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__6 = [];
  __vue_render__6._withStripped = true;
  var __vue_inject_styles__6 = void 0;
  var __vue_scope_id__6 = void 0;
  var __vue_module_identifier__6 = void 0;
  var __vue_is_functional_template__6 = false;
  function __vue_normalize__6(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <b-button style="margin-right:2px;" size="sm" variant="primary" @click="getFinalizations">Refresh </b-button>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <!-- {{ invoiceFInalization }} -->
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Timestamp</th>
                            <th>Visit Type</th>
                            <th>Total</th>
                            <!-- <th>Deductions</th> -->
                            <!-- <th>Net Due From Client</th> -->
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tr v-for="finalInvoiceItem in invoiceFInalization" :key="finalInvoiceItem.name">
                        <td>{{ finalInvoiceItem.name }}</td>
                        <td><span>{{ finalInvoiceItem.creation | dateFormat}}</span> </td>
                        <td><span>{{ finalInvoiceItem.visit_type }}</span> </td>
                        <td style="text-align: right;">{{ finalInvoiceItem.total_invoice_amount.toFixed(2) | numberWithCommas }}</td>
                        <!-- <td style="text-align: right;"><span>{{ finalInvoiceItem.total_deductions.toFixed(2) | numberWithCommas }}</span> </td> -->
                        <!-- <td style="text-align: right;">{{ finalInvoiceItem.net_due_from_client.toFixed(2) | numberWithCommas }}</td> -->
                        <td>
                            <b-dropdown id="dropdown-1" variant="primary" text="Select Actions" class="m-md-2">
                                <!-- <b-dropdown-item variant="primary" @click="makePayment(finalInvoiceItem)">
                                        Make Payment
                                    </b-dropdown-item>
                                     <b-dropdown-item variant="primary" @click="makeCreditNote(finalInvoiceItem)">
                                        Credit Note
                                    </b-dropdown-item> -->
                                <b-dropdown-item v-if="finalInvoiceItem.docstatus === 0" variant="primary" @click="submitFinalization(finalInvoiceItem)">
                                    Submit
                                </b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="printFinalization(finalInvoiceItem)">
                                    Print
                                </b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="emailFinalizations(finalInvoiceItem)">
                                    Email
                                </b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="viewAllocations(finalInvoiceItem)">
                                    View Allocations
                                </b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="allocateInvoiceItem(finalInvoiceItem)">
                                    Allocate to Payers
                                </b-dropdown-item>
                                <b-dropdown-item variant="primary" @click="createGatePass(finalInvoiceItem)">
                                    Gate Pass
                                </b-dropdown-item>
                            </b-dropdown>
    
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {
    // getInvoiceFinalizations,
    emailInvoiceFinalizations,
    prepareAllocationFieldList,
    getSalesInvoiceItems,
    splitInvoice,
    getFinalizedInvoiceItems,
    createGatePass,
    getFinalizedInvoiceAllocations
} from '../../services/patient_chart/accounts.js'
import {
    getInvoiceFinalizations,
    createSalesReturn,
    submitInvoiceFinalization
} from '../../services/accounts/patient.js'

// import patientAccountModule from '../../state/accounts';

export default {
    name: 'InvoiceFInalization',
    props: {
        patientName: {
            type: String,
            default: " ",
            required: true,
        },
        customerName: {
            type: String,
            default: " ",
            required: true,
        },
        // inpatient_record: {
        //   type: String,
        //   default: " ",
        //   required: true,
        // },
    },
    data() {
        return {
            invoiceFInalization: [],
            // schemes : []
        };
    },
    computed: {
        // invoiceFInalization() {
        //   return this.$store.getters['patientAccounts1/invoiceFInalization']
        // }
    },
    methods: {
        submitFinalization(finalInvoiceItem) {
            submitInvoiceFinalization({ finalization_name: finalInvoiceItem.name })
                .then(r => {
                    this.getFinalizations();
                    frappe.show_alert({
                        message: \`Invoice finalization Submitted\`,
                        indicator: "green",
                    }, 5);
                })
        },
        makePayment(finalInvoiceItem) {
            //
        },
        makeCreditNote(finalInvoiceItem) {
            let invoiceArr = []
            getFinalizedInvoiceItems({ name: finalInvoiceItem.name }).then(r => {
                console.log(r)
                invoiceArr = r;
            });
            prepareAllocationFieldList({ docname: finalInvoiceItem.name })
                .then((r) => {
                    let schemes = r;
                    let query_args = {
                        filters: { 'parent': ["IN", invoiceArr], }
                    }
                    new frappe.ui.form.MultiSelectDialog({
                        doctype: "Sales Invoice Item",
                        target: parent,
                        setters: {
                            item_code: "",
                            item_name: '',
                            amount: ''
                        },
                        get_query() {
                            return query_args;
                        },
                        primary_action_label: 'Set Paid Amount',
                        action(selections) {
                            // console.log(selections);
                            getSalesInvoiceItems({ name: selections[0] })
                                .then((r) => {
                                    let invoice = r.parent;
                                    let total = r.amount;
                                    var title = \`Set for \${invoice} Amount paid out of  \${total}\`;
                                    let x = new frappe.ui.Dialog({
                                        title: title,
                                        fields: [{
                                            label: 'New Invoice Amount',
                                            fieldname: 'new_amount',
                                            fieldtype: 'Currency',
                                            reqd: 1,
                                            default: 0
                                        }],
                                        primary_action_label: 'Set Invoice Amount',
                                        primary_action: (values) => {
                                            console.log(invoice)
                                            console.log(values)
                                            x.hide();
                                            createSalesReturn({
                                                invoice_name: invoice,
                                                return_amount: parseFloat(total) - parseFloat(values.new_amount)
                                            }).then(result => {
                                                frappe.show_alert({
                                                    message: \`Credit Note Created #\${result.name}\`,
                                                    indicator: 'green'
                                                }, 5);
                                            });
                                        }
                                    });
                                    x.show();
                                });
                        }
                    });
                })
        },
        viewAllocations(finalInvoiceItem) {
            getFinalizedInvoiceAllocations({
                final_invoice_name: finalInvoiceItem.name
            }).then(r => {
                let message = '<ol>'
                r.map(item => {
                    message += \`<li> \${item.invoice} &nbsp; \${item.payer} &nbsp; \${item.total.toFixed(2)}</li>\`;
                })
                message += '</ol>'
                frappe.msgprint({
                    title: __('Payment Allocations'),
                    message: message,
                });
            });
        },
        createGatePass(finalInvoiceItem) {
            let x = new frappe.ui.Dialog({
                title: 'Gate pass',
                fields: [{
                    label: 'Remarks',
                    fieldname: 'remarks',
                    fieldtype: 'Text'
                }],
                primary_action_label: 'Create Gate Pass',
                primary_action: (values) => {
                    console.log(values)
                    createGatePass({
                        invoice_finalization_name: finalInvoiceItem.name,
                        remarks: values.remarks
                    }).then(r => {
                        if (r) {
                            x.hide()
                            frappe.show_alert({
                                message: \`Gate pass created\`,
                                indicator: "green",
                            }, 5);
                        }
                    })
                },
                secondary_action_label: 'Cancel',
                secondary_action: (values) => {
                    x.hide()
                }
            });
            x.show();

        },
        allocateInvoiceItem(finalInvoiceItem) {
            let parent = this;

            function split_invoice(primary_invoice, split_args, row) {
                splitInvoice({
                    primary_invoice,
                    split_args,
                    row
                }).then((r) => {
                    console.log(r)
                    frappe.show_alert({
                            message: \`Finalized Document allocation success\`,
                            indicator: "green",
                        },
                        5
                    );
                })
            }
            let invoiceArr = []
            getFinalizedInvoiceItems({ name: finalInvoiceItem.name }).then(r => {
                console.log(r)
                invoiceArr = r;
            });
            prepareAllocationFieldList({ docname: finalInvoiceItem.name })
                .then((r) => {
                    let schemes = r;
                    let query_args = {
                        filters: { 'parent': ["IN", invoiceArr], }
                    }
                    new frappe.ui.form.MultiSelectDialog({
                        doctype: "Sales Invoice Item",
                        target: parent,
                        setters: {
                            item_code: "",
                            item_name: '',
                            amount: ''
                        },
                        get_query() {
                            return query_args;
                        },
                        primary_action_label: 'Allocate Item',
                        action(selections) {
                            // console.log(selections);
                            getSalesInvoiceItems({ name: selections[0] })
                                .then((r) => {
                                    let invoice = r.parent;
                                    let total = r.amount;
                                    var title = \`\${invoice} Total to allocate:  \${total}\`;
                                    let x = new frappe.ui.Dialog({
                                        title: title,
                                        fields: schemes,
                                        primary_action_label: 'Allocate Invoices',
                                        primary_action: (values) => {
                                            let valuePayload = []
                                            const propertyNames = Object.keys(values);
                                            const propertyValues = Object.values(values);
                                            propertyNames.forEach(function(val, key) {
                                                valuePayload.push({ name: val, value: propertyValues[key] });
                                            });
                                            var entered_value = Object.values(values).reduce(function(a, b) {
                                                return a + b // returns object with property x
                                            }, 0)
                                            // console.log(entered_value,total)
                                            // "700" > "300"
                                            var diff = total - entered_value
                                            parseFloat(entered_value) > parseFloat(total) ? frappe.throw(\`Sorry the values you entered differ with invoice by \${diff}\`) : split_invoice(invoice, valuePayload, selections[0]);
                                        }
                                    });
                                    x.show();
                                });
                        }
                    });
                })
        },
        printFinalization(finalInvoiceItem) {
            // frappe.set_route('print', 'Invoice Finalization', finalInvoiceItem.name);
            var w = window.open(frappe.urllib.get_full_url(\`app/print/Invoice Finalization/\${finalInvoiceItem.name}\` //+
                // "doctype=" + encodeURIComponent('Invoice Finalization') +
                // "&name=" + encodeURIComponent(finalInvoiceItem.name)
            ));
            // "&format=Drug Prescription Label&_lang=en&no_letterhead=1&letterhead=No Letterhead&trigger_print=1"
            if (!w) {
                msgprint(__("Please enable pop-ups"));
                return;
            }
        },
        emailFinalizations(finalInvoiceItem) {
            let messageBody = \`Dear Sir/Madam,<br/>Please find attached Finalized Invoice for appointment <b>\${finalInvoiceItem.appointment_number}</b>, for your reference.\\
        The list of items is shown on the attached document.<br/> Any queries or Issues should be addressed to Moi Teaching and Referral Hospital Finance/Billing Department.<br/><br/>\\
        Regards <br/> Moi Teaching and Referal Hospital.\`;
            emailInvoiceFinalizations({
                party_type: "Customer",
                party_name: this.customerName,
                message: messageBody,
                ref_type: "Invoice Finalization",
                ref_name: finalInvoiceItem.name
            }).then((result) => {
                if (result) {
                    frappe.show_alert({
                            message: \`Finalized Document Sent to email Queue\`,
                            indicator: "green",
                        },
                        5
                    );
                }
            });
        },
        getFinalizations() {
            //  this.$store.dispatch("patientAccounts1/fetchInvoiceFinalizations", this.patientName);
            getInvoiceFinalizations(this.patientName)
                .then((result) => {
                    if (result) {
                        this.invoiceFInalization = result;
                    }
                });
        }
    },
    watch: {
        appointment_number() {
            this.getFinalizations();
        },
        inpatient_record() {
            this.getFinalizations();
        }
    },
    created() {
        // this.$store.registerModule('patientAccounts1', patientAccountModule);
        this.getFinalizations();
    },
    filters: {
        // Filter definitions
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
}
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
  var __vue_component__6 = /* @__PURE__ */ __vue_normalize__6({render: __vue_render__6, staticRenderFns: __vue_staticRenderFns__6}, __vue_inject_styles__6, __vue_script__6, __vue_scope_id__6, __vue_is_functional_template__6, __vue_module_identifier__6, false, void 0, void 0, void 0);
  var InvoiceFInalization_default = __vue_component__6;

  // ../frontend/frontend/public/js/accounts/accounts/Schemes.vue
  var __vue_script__7 = {
    name: "Schemes",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      },
      customerNumber: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        insuranceSchemes: void 0
      };
    },
    methods: {
      updateScheme(schemeItem) {
        const parent2 = this;
        frappe.prompt([
          {
            label: "Customer Group",
            fieldname: "scheme_name",
            fieldtype: "Link",
            options: "Customer Group",
            default: schemeItem.scheme
          },
          {
            label: "Inpatient Limit",
            fieldname: "inpatient_limit",
            fieldtype: "Currency",
            default: schemeItem.inpatient_limit || 1e7
          },
          {
            label: "Outpatient Limit",
            fieldname: "outpatient_limit",
            fieldtype: "Currency",
            default: schemeItem.outpatient_limit || 1e7
          },
          {
            label: "Outpatient Balance",
            fieldname: "outpatient_balance",
            fieldtype: "Currency",
            default: schemeItem.outpatient_balance || 1e7
          },
          {
            label: "Inpatient Balance",
            fieldname: "inpatient_balance",
            fieldtype: "Currency",
            default: schemeItem.inpatient_balance || 1e7
          }
        ], (values) => {
          updatePatientInsuranceSchemeLimits({
            docname: schemeItem.name,
            scheme_name: values.scheme_name,
            op_limit: parseFloat(values.outpatient_limit) > 0 ? parseFloat(values.outpatient_limit) : 0,
            ip_limit: parseFloat(values.inpatient_limit) > 0 ? parseFloat(values.inpatient_limit) : 0,
            op_balance: parseFloat(values.outpatient_balance) > 0 ? parseFloat(values.outpatient_balance) : 0,
            ip_balance: parseFloat(values.inpatient_balance) > 0 ? parseFloat(values.inpatient_balance) : 0
          }).then((r) => {
            parent2.fetchCustomerSchemes();
            frappe.show_alert({
              message: `Limits Updated`,
              indicator: "green"
            }, 5);
          });
        });
      },
      addScheme() {
        const parent2 = this;
        let d = new frappe.ui.Dialog({
          title: "Add Customer Scheme",
          fields: [
            {
              label: "Customer Group",
              fieldname: "scheme_name",
              fieldtype: "Link",
              options: "Customer Group",
              reqd: 1
            },
            {
              label: "Member Number",
              fieldname: "member_number",
              fieldtype: "Data",
              reqd: 1
            },
            {
              label: "Principal Member",
              fieldname: "principal_member",
              fieldtype: "Link",
              options: "Customer",
              reqd: 1,
              default: parent2.customerNumber
            },
            {
              label: "Relationship to Principal",
              fieldname: "relationship_to_principal",
              fieldtype: "Select",
              options: ["Self", "Spouse", "Child"],
              reqd: 1
            },
            {
              label: "Inpatient Limit",
              fieldname: "inpatient_limit",
              fieldtype: "Currency",
              reqd: 1,
              default: 1e7
            },
            {
              label: "Outpatient Limit",
              fieldname: "outpatient_limit",
              fieldtype: "Currency",
              reqd: 1,
              default: 1e7
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            savePatientScheme({
              patient_name: parent2.patient_number,
              scheme_name: values.scheme_name,
              member_number: values.member_number,
              principal_member: values.principal_member,
              relationship_to_principal: values.relationship_to_principal,
              inpatient_limit: values.inpatient_limit,
              outpatient_limit: values.outpatient_limit
            }).then((r) => {
              parent2.fetchCustomerSchemes();
              frappe.show_alert({
                message: `Patient added to scheme`,
                indicator: "green"
              }, 5);
            });
            d.hide();
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            d.hide();
          }
        });
        d.show();
      },
      fetchCustomerSchemes() {
        getPatientInsuranceSchemes({
          patient_number: this.patient_number
        }).then((result) => {
          if (result) {
            this.insuranceSchemes = result;
          }
        });
      }
    },
    watch: {
      patient_number() {
        this.fetchCustomerSchemes();
      }
    },
    created() {
      this.fetchCustomerSchemes();
    },
    filters: {
      Upper(value2) {
        return value2.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", [
          _c("div", {
            staticStyle: {display: "flex", "justify-content": "flex-end"}
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {size: "sm", variant: "primary"},
                on: {click: _vm.addScheme}
              }, [_vm._v("Add ")])
            ], 1)
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Scheme")]),
                _vm._v(" "),
                _c("th", [_vm._v("Member Number")]),
                _vm._v(" "),
                _c("th", [_vm._v("Relationship to Principal")]),
                _vm._v(" "),
                _c("th", [_vm._v("Inpatient Limit")]),
                _vm._v(" "),
                _c("th", [_vm._v("Outpatient Limit")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.insuranceSchemes, function(schemeItem) {
              return _c("tr", {key: schemeItem.name}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("Upper")(schemeItem.scheme)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(schemeItem.member_number))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(" " + _vm._s(schemeItem.relationship_to_principal))
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(schemeItem.inpatient_limit.toFixed(2))))
                  ])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(schemeItem.outpatient_limit.toFixed(2))))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b-button", {
                    staticStyle: {"margin-right": "2px"},
                    attrs: {size: "sm", variant: "primary"},
                    on: {
                      click: function($event) {
                        return _vm.updateScheme(schemeItem);
                      }
                    }
                  }, [_vm._v("Edit")])
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__7 = [];
  __vue_render__7._withStripped = true;
  var __vue_inject_styles__7 = void 0;
  var __vue_scope_id__7 = void 0;
  var __vue_module_identifier__7 = void 0;
  var __vue_is_functional_template__7 = false;
  function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <b-button style="margin-right:2px;" size="sm" variant="primary" @click="addScheme">Add </b-button>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Scheme</th>
                            <th>Member Number</th>
                            <!-- <th>Mrincipal Member</th> -->
                            <th>Relationship to Principal</th>
                            <th>Inpatient Limit</th>
                            <th>Outpatient Limit</th>
                            <th>Action</th>
                            <!-- <th>Dental Limit</th> -->
                            <!-- <th>Optical Limit</th> -->
                            <!-- <th>Maternity Limit</th> -->
                            <!-- <th>Last Expense Limit</th> -->
                        </tr>
                    </thead>
                    <tr v-for="schemeItem in insuranceSchemes" :key="schemeItem.name">
                        <td><span>{{ schemeItem.scheme | Upper}}</span> </td>
                        <td>{{ schemeItem.member_number }}</td>
                        <!-- <td>
                           {{ schemeItem.principal_member }}
                        </td> -->
                        <td> {{ schemeItem.relationship_to_principal }}</td>
                        <td style="text-align: right;"><span>{{ schemeItem.inpatient_limit.toFixed(2) | numberWithCommas }}</span> </td>
                        <td style="text-align: right;"><span>{{ schemeItem.outpatient_limit.toFixed(2) | numberWithCommas }}</span> </td>
                        <td>
                            <b-button style="margin-right:2px;" size="sm" variant="primary" @click="updateScheme(schemeItem)">Edit</b-button>
                        </td>
                        <!-- <td style="text-align: right;">{{ schemeItem.dental_limit.toFixed(2) | numberWithCommas }}</td> -->
                        <!-- <td style="text-align: right;">{{ schemeItem.optical_limit.toFixed(2) | numberWithCommas }}</td> -->
                        <!-- <td style="text-align: right;"><span>{{ schemeItem.maternity_limit.toFixed(2) | numberWithCommas }}</span> </td> -->
                        <!-- <td style="text-align: right;"><span>{{ schemeItem.last_expense_limit.toFixed(2) | numberWithCommas}}</span> </td> -->
    
                    </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { getPatientInsuranceSchemes, updatePatientInsuranceSchemeLimits } from "../../services/patient_chart/accounts.js";

import {
    savePatientScheme
} from '../../services/accounts/patient.js'
export default {
    name: 'Schemes',
    props: {
        patient_number: {
            type: String,
            default: " ",
            required: true,
        },
        customerNumber: {
            type: String,
            default: " ",
            required: true,
        },
    },
    data() {
        return {
            insuranceSchemes: undefined
        };
    },
    methods: {
        updateScheme(schemeItem) {
            const parent = this;
            frappe.prompt([
                {
                        label: 'Customer Group',
                        fieldname: 'scheme_name',
                        fieldtype: 'Link',
                        options: 'Customer Group',
                        // reqd: 1
                         default: schemeItem.scheme,
                    },
                {
                    label: 'Inpatient Limit',
                    fieldname: 'inpatient_limit',
                    fieldtype: 'Currency',
                    default: schemeItem.inpatient_limit || 10000000,

                },
                {
                    label: 'Outpatient Limit',
                    fieldname: 'outpatient_limit',
                    fieldtype: 'Currency',
                    default: schemeItem.outpatient_limit || 10000000,

                },
                 {
                    label: 'Outpatient Balance',
                    fieldname: 'outpatient_balance',
                    fieldtype: 'Currency',
                    default: schemeItem.outpatient_balance || 10000000,

                },
                 {
                    label: 'Inpatient Balance',
                    fieldname: 'inpatient_balance',
                    fieldtype: 'Currency',
                    default: schemeItem.inpatient_balance || 10000000,

                },
            ], (values) => {
                updatePatientInsuranceSchemeLimits({
                    docname:schemeItem.name,
                    scheme_name:values.scheme_name,
                    op_limit: parseFloat(values.outpatient_limit) > 0 ? parseFloat(values.outpatient_limit) : 0,
                    ip_limit: parseFloat(values.inpatient_limit) > 0 ? parseFloat(values.inpatient_limit) : 0,
                    op_balance: parseFloat(values.outpatient_balance) > 0 ? parseFloat(values.outpatient_balance) : 0,
                    ip_balance: parseFloat(values.inpatient_balance) > 0 ? parseFloat(values.inpatient_balance) : 0,
                }).then(r => {
                    parent.fetchCustomerSchemes();
                    frappe.show_alert({
                        message: \`Limits Updated\`,
                        indicator: 'green'
                    }, 5);
                });
                // console.log(values.outpatient_limit, values.inpatient_limit);
            })
        },
        addScheme() {
            const parent = this;
            let d = new frappe.ui.Dialog({
                title: 'Add Customer Scheme',
                fields: [{
                        label: 'Customer Group',
                        fieldname: 'scheme_name',
                        fieldtype: 'Link',
                        options: 'Customer Group',
                        reqd: 1
                    },
                    {
                        label: 'Member Number',
                        fieldname: 'member_number',
                        fieldtype: 'Data',
                        reqd: 1
                    },
                    {
                        label: 'Principal Member',
                        fieldname: 'principal_member',
                        fieldtype: 'Link',
                        options: 'Customer',
                        reqd: 1,
                        default: parent.customerNumber
                    },
                    {
                        label: 'Relationship to Principal',
                        fieldname: 'relationship_to_principal',
                        fieldtype: 'Select',
                        options: ['Self', 'Spouse', 'Child'],
                        reqd: 1
                    },
                    {
                        label: 'Inpatient Limit',
                        fieldname: 'inpatient_limit',
                        fieldtype: 'Currency',
                        reqd: 1,
                        default: 10000000,

                    },
                    {
                        label: 'Outpatient Limit',
                        fieldname: 'outpatient_limit',
                        fieldtype: 'Currency',
                        reqd: 1,
                        default: 10000000,
                    }
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    savePatientScheme({
                        patient_name: parent.patient_number,
                        scheme_name: values.scheme_name,
                        member_number: values.member_number,
                        principal_member: values.principal_member,
                        relationship_to_principal: values.relationship_to_principal,
                        inpatient_limit: values.inpatient_limit,
                        outpatient_limit: values.outpatient_limit
                    }).then(r => {
                        parent.fetchCustomerSchemes();
                        frappe.show_alert({
                            message: \`Patient added to scheme\`,
                            indicator: 'green'
                        }, 5);
                    })
                    d.hide();
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    d.hide();
                }
            });

            d.show();

        },
        fetchCustomerSchemes() {
            getPatientInsuranceSchemes({
                patient_number: this.patient_number,
            }).then((result) => {
                if (result) {
                    this.insuranceSchemes = result;
                }
            });
        },
    },
    watch: {
        patient_number() {
            this.fetchCustomerSchemes();
        },
    },
    created() {
        this.fetchCustomerSchemes();
    },
    filters: {
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
}
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
  var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7({render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7}, __vue_inject_styles__7, __vue_script__7, __vue_scope_id__7, __vue_is_functional_template__7, __vue_module_identifier__7, false, void 0, void 0, void 0);
  var Schemes_default = __vue_component__7;

  // ../frontend/frontend/public/js/accounts/patient/Procedures.vue
  var __vue_script__8 = {
    name: "Procedures",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      },
      customerNumber: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        procedures: void 0,
        procedureCharges: void 0
      };
    },
    methods: {
      invoiceItem(procedureItem, chargeItem) {
        let d = new frappe.ui.Dialog({
          title: `Add Charge Item for ${chargeItem.name}`,
          fields: [
            {
              label: "Item",
              fieldname: "item",
              fieldtype: "Data",
              reqd: 1
            },
            {
              label: "Unit of Measure",
              fieldname: "unit_of_measure",
              fieldtype: "Data",
              reqd: 1
            },
            {
              label: "Unit Price",
              fieldname: "unit_price",
              fieldtype: "Currency",
              reqd: 1
            },
            {
              label: "Duration",
              fieldname: "duration",
              fieldtype: "Data",
              reqd: 1
            },
            {
              label: "Percentage",
              fieldname: "percentage",
              fieldtype: "Data",
              reqd: 1
            },
            {
              label: "Percentage Depends On",
              fieldname: "percentage_depends_on",
              fieldtype: "Data",
              reqd: 1
            },
            {
              label: "Amount",
              fieldname: "amount",
              fieldtype: "Currency",
              reqd: 1
            },
            {
              label: "Provider Fee",
              fieldname: "provider_fee",
              fieldtype: "Check",
              reqd: 1
            },
            {
              label: "Provider",
              fieldname: "provider",
              fieldtype: "Link",
              options: "Healthcare Practitioner",
              reqd: 1
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            appendProcedureCharges({procedure_charge_name: chargeItem.name, payload: values}).then((r) => {
              console.log(JSON.stringify(r));
            });
            d.hide();
          }
        });
        d.show();
      },
      submitCharges(procedureItem) {
        let parent2 = this;
        frappe.confirm("Confirm Submission?", () => {
          getProcedureChargess({procedure_id: procedureItem.name}).then((r) => {
            submitProcedureCharges({procedure_charge_name: r.name}).then((r2) => {
            });
          });
        }, () => {
        });
      },
      checkForCharges(procedureItem) {
        getProcedureChargess({procedure_id: procedureItem.name}).then((r) => {
          this.procedureCharges = r;
          console.log(JSON.stringify(r));
          this.invoiceItem(procedureItem, r);
        });
      },
      getProcedures() {
        getPatientProcedues({patient_number: this.patient_number}).then((r) => {
          this.procedures = r;
        });
      }
    },
    created() {
      this.getProcedures();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value2) {
        return value2.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", [
          _c("div", {
            staticStyle: {display: "flex", "justify-content": "flex-end"}
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {size: "sm", variant: "primary"},
                on: {click: _vm.getProcedures}
              }, [_vm._v("Refresh ")])
            ], 1)
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Date")]),
                _vm._v(" "),
                _c("th", [_vm._v("Serial")]),
                _vm._v(" "),
                _c("th", [_vm._v("Procedure")]),
                _vm._v(" "),
                _c("th", [_vm._v("Status")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.procedures, function(procedureItem) {
              return _c("tr", {key: procedureItem.name}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(procedureItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(procedureItem.name))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(procedureItem.procedure_template))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(procedureItem.status))]),
                _vm._v(" "),
                _c("td", [
                  procedureItem.invoiced === 0 ? _c("b-btn", {
                    attrs: {variant: "primary", size: "sm"},
                    on: {
                      click: function($event) {
                        return _vm.checkForCharges(procedureItem);
                      }
                    }
                  }, [_vm._v("Invoice")]) : _vm._e(),
                  _vm._v(" "),
                  procedureItem.invoiced === 0 ? _c("b-btn", {
                    attrs: {variant: "primary", size: "sm"},
                    on: {
                      click: function($event) {
                        return _vm.submitCharges(procedureItem);
                      }
                    }
                  }, [_vm._v("Submit")]) : _vm._e()
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__8 = [];
  __vue_render__8._withStripped = true;
  var __vue_inject_styles__8 = function(inject) {
    if (!inject)
      return;
    inject("data-v-85b43874_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Procedures.vue"}, media: void 0});
  };
  var __vue_scope_id__8 = "data-v-85b43874";
  var __vue_module_identifier__8 = void 0;
  var __vue_is_functional_template__8 = false;
  function __vue_normalize__8(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <!-- {{ patient_number }} {{ customerNumber }} {{ procedures }} -->
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <b-button style="margin-right:2px;" size="sm" variant="primary" @click="getProcedures">Refresh </b-button>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <!-- {{ procedureCharges }} -->
        <b-row>
            <b-col>
                <table class="table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <!-- <th>Select</th> -->
                            <th>Date</th>
                            <th>Serial</th>
                            <th>Procedure</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tr v-for="procedureItem in procedures" :key="procedureItem.name">
                        <td><span>{{ procedureItem.creation | dateFormat }}</span> </td>
                        <td><span>{{ procedureItem.name }}</span> </td>
                        <td><span>{{ procedureItem.procedure_template }}</span> </td>
                        <td>{{ procedureItem.status }}</td>
    
                        <td>
                            <b-btn v-if="procedureItem.invoiced === 0" variant="primary" size="sm" @click="checkForCharges(procedureItem)">Invoice</b-btn>
                            <b-btn v-if="procedureItem.invoiced === 0" variant="primary" size="sm" @click="submitCharges(procedureItem)">Submit</b-btn>
    
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {
    getPatientProcedues,
    getProcedureChargess,
    appendProcedureCharges,
    submitProcedureCharges
} from "../../services/accounts/patient.js";

export default {
    name: 'Procedures',
    props: {
        patient_number: {
            type: String,
            default: " ",
            required: true,
        },
        customerNumber: {
            type: String,
            default: " ",
            required: true,
        },
    },
    data() {
        return {
            procedures: undefined,
            procedureCharges: undefined,

        };
    },
    methods: {
        invoiceItem(procedureItem, chargeItem) {
            let d = new frappe.ui.Dialog({
                title: \`Add Charge Item for \${chargeItem.name}\`,
                fields: [{
                        label: 'Item',
                        fieldname: 'item',
                        fieldtype: 'Data',
                        reqd: 1
                    },
                    {
                        label: 'Unit of Measure',
                        fieldname: 'unit_of_measure',
                        fieldtype: 'Data',
                        reqd: 1
                    },
                    {
                        label: 'Unit Price',
                        fieldname: 'unit_price',
                        fieldtype: 'Currency',
                        reqd: 1
                    },
                    {
                        label: 'Duration',
                        fieldname: 'duration',
                        fieldtype: 'Data',
                        reqd: 1
                    },
                    {
                        label: 'Percentage',
                        fieldname: 'percentage',
                        fieldtype: 'Data',
                        reqd: 1
                    },
                    {
                        label: 'Percentage Depends On',
                        fieldname: 'percentage_depends_on',
                        fieldtype: 'Data',
                        reqd: 1
                    },
                    {
                        label: 'Amount',
                        fieldname: 'amount',
                        fieldtype: 'Currency',
                        reqd: 1
                    },
                    {
                        label: 'Provider Fee',
                        fieldname: 'provider_fee',
                        fieldtype: 'Check',
                        reqd: 1
                    },
                    {
                        label: 'Provider',
                        fieldname: 'provider',
                        fieldtype: 'Link',
                        options: 'Healthcare Practitioner',
                        reqd: 1
                        // default:salesOrderItem.parent,
                        // readonly:0,
                        // filters: { customer: parent.customerNumber,status: ['not in', ['Completed','Cancelled'] ]},
                    },
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    appendProcedureCharges({ procedure_charge_name: chargeItem.name, payload: values }).then(r => {
                        console.log(JSON.stringify(r));
                    })
                    d.hide();
                }
            });

            d.show();
        },
        submitCharges(procedureItem) {
            let parent = this;
            frappe.confirm('Confirm Submission?',
                () => {
                    // 
                    getProcedureChargess({ procedure_id: procedureItem.name }).then(r => {
                        //parent.procedureCharges = r;
                        //console.log(JSON.stringify(parent.procedureCharges));
                        submitProcedureCharges({procedure_charge_name:r.name}).then(r=>{});
                    })
                    // console.log(JSON.stringify(procedureItem));
                }, () => {
                    // action to perform if No is selected
                })

        },
        checkForCharges(procedureItem) {
            getProcedureChargess({ procedure_id: procedureItem.name }).then(r => {
                this.procedureCharges = r;
                console.log(JSON.stringify(r))
                this.invoiceItem(procedureItem, r);
            })
        },
        getProcedures() {
            getPatientProcedues({ patient_number: this.patient_number }).then(r => {
                this.procedures = r;
            })
        }
    },
    created() {
        this.getProcedures();
    },
    filters: {
        // Filter definitions
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
}
</script>

<style scoped>

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
  var __vue_component__8 = /* @__PURE__ */ __vue_normalize__8({render: __vue_render__8, staticRenderFns: __vue_staticRenderFns__8}, __vue_inject_styles__8, __vue_script__8, __vue_scope_id__8, __vue_is_functional_template__8, __vue_module_identifier__8, false, __vue_create_injector__3, void 0, void 0);
  var Procedures_default = __vue_component__8;

  // ../frontend/frontend/public/js/accounts/accounts/SalesOrderAuth.vue
  var __vue_script__9 = {
    name: "SalesOrderAuth",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        salesOrderItems: void 0
      };
    },
    methods: {
      uploadFile(salesOrderName) {
        const me = this;
        new frappe.ui.FileUploaderCustom({
          title: "test",
          doctype: "Sales Order",
          docname: salesOrderName,
          on_success(file_doc) {
            approvePreAuth(salesOrderName).then((res) => {
              transitionSalesOrderToInvoice({sales_order_name: res}).then(() => {
                frappe.show_alert({
                  message: `Successfully authorized`,
                  indicator: "green"
                }, 15);
              });
            });
          }
        });
      },
      assignPayer(salesOrderItem) {
        let parent2 = this;
        let dialog = new frappe.ui.Dialog({
          title: `Change Payer for ${salesOrderItem.parent}`,
          fields: [
            {
              label: "Select Action",
              fieldname: "action",
              fieldtype: "Select",
              options: ["Assign Customer", "Send to draft"],
              default: ["Assign Customer", "Send to draft"],
              reqd: true
            },
            {
              label: "Payer Group",
              fieldname: "customer_group_name",
              mandatory_depends_on: 'eval: doc.action == "Assign Customer"',
              depends_on: 'eval: doc.action == "Assign Customer"',
              fieldtype: "Link",
              options: "Customer Group"
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            if (values.action == "Assign Customer") {
              updateSalesOrderCustomer({
                sales_order_name: salesOrderItem.parent,
                customer_group_name: values.customer_group_name
              }).then((m) => {
                transitionSalesOrderToInvoice({sales_order_name: salesOrderItem.parent}).then(() => {
                  frappe.show_alert({
                    message: `Successfully assigned customer`,
                    indicator: "green"
                  }, 15);
                });
              });
            } else {
              sendSalesOrderToDraft({
                sales_order_name: salesOrderItem.parent
              }).then((m) => {
                frappe.show_alert({
                  message: `Sales Order Sent To Draft`,
                  indicator: "green"
                }, 5);
              });
            }
            dialog.hide();
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            dialog.hide();
          }
        });
        dialog.show();
      },
      fetchInsuranceSalesOrders() {
        getInsuranceSalesOrders({patient_name: this.patient_number}).then((r) => {
          this.salesOrderItems = r;
        });
      }
    },
    created() {
      this.fetchInsuranceSalesOrders();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value2) {
        return value2.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Date")]),
                _vm._v(" "),
                _c("th", [_vm._v("Name")]),
                _vm._v(" "),
                _c("th", [_vm._v("Item")]),
                _vm._v(" "),
                _c("th", [_vm._v("Amount")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.salesOrderItems, function(salesOrderItem) {
              return _c("tr", {key: salesOrderItem.parent}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(salesOrderItem.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(salesOrderItem.parent))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(salesOrderItem.item_code))])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(salesOrderItem.amount.toFixed(2))))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("div", {staticClass: "btn-group"}, [
                    _c("button", {
                      staticClass: "btn btn-primary dropdown-toggle",
                      attrs: {
                        type: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    }, [
                      _vm._v("\n                                                    Select Actions\n                                                  ")
                    ]),
                    _vm._v(" "),
                    _c("div", {staticClass: "dropdown-menu"}, [
                      _c("a", {
                        staticClass: "dropdown-item",
                        attrs: {href: "#"},
                        on: {
                          click: function($event) {
                            return _vm.uploadFile(salesOrderItem.parent);
                          }
                        }
                      }, [_vm._v("Approve")]),
                      _vm._v(" "),
                      _c("a", {
                        staticClass: "dropdown-item",
                        attrs: {href: "#"},
                        on: {
                          click: function($event) {
                            return _vm.assignPayer(salesOrderItem);
                          }
                        }
                      }, [_vm._v("Decline")])
                    ])
                  ])
                ])
              ]);
            })
          ], 2)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__9 = [];
  __vue_render__9._withStripped = true;
  var __vue_inject_styles__9 = void 0;
  var __vue_scope_id__9 = void 0;
  var __vue_module_identifier__9 = void 0;
  var __vue_is_functional_template__9 = false;
  function __vue_normalize__9(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-row>
            <b-col>
                <table class="table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <!-- <th>Status</th> -->
                            <th>Item</th>
                            <!-- <th>Qty</th>
                                            <th>Rate</th> -->
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tr v-for="salesOrderItem in salesOrderItems" :key="salesOrderItem.parent">
                        <td><span>{{ salesOrderItem.creation | dateFormat }}</span> </td>
                        <td><span>{{ salesOrderItem.parent }}</span> </td>
                        <!-- <td>{{ salesOrderItem.status }}</td> -->
                        <td><span>{{ salesOrderItem.item_code }}</span> </td>
                        <!-- <td><span>{{ salesOrderItem.qty }}</span> </td> -->
                        <!-- <td style="text-align: right;"><span>{{ salesOrderItem.rate.toFixed(2) | numberWithCommas }}</span> </td> -->
                        <td style="text-align: right;"><span>{{ salesOrderItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Select Actions
                                                      </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" @click="uploadFile(salesOrderItem.parent)" href="#">Approve</a>
                                    <a class="dropdown-item" @click="assignPayer(salesOrderItem)" href="#">Decline</a>
                                </div>
    
                            </div>
                        </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { getInsuranceSalesOrders, updateSalesOrderCustomer, sendSalesOrderToDraft, approvePreAuth, transitionSalesOrderToInvoice } from '../../services/accounts/patient.js'
export default {
    name: 'SalesOrderAuth',
    props: {
        patient_number: {
            type: String,
            default: " ",
            required: true,
        }
    },
    data() {
        return {
            salesOrderItems: undefined,
        };
    },
    methods: {
        uploadFile(salesOrderName) {
            const me = this;
            new frappe.ui.FileUploaderCustom({
                title: "test",
                doctype: "Sales Order",
                docname: salesOrderName,
                on_success(file_doc) {
                    approvePreAuth(salesOrderName).then((res) => {
                        transitionSalesOrderToInvoice({ sales_order_name: res }).then(() => {
                            frappe.show_alert({
                                message: \`Successfully authorized\`,
                                indicator: 'green'
                            }, 15);
                        })

                    })
                },
            });

        },
        assignPayer(salesOrderItem) {
            let parent = this;
            let dialog = new frappe.ui.Dialog({
                title: \`Change Payer for \${salesOrderItem.parent}\`,
                fields: [{
                        label: 'Select Action',
                        fieldname: 'action',
                        fieldtype: 'Select',
                        options: ["Assign Customer", "Send to draft"],
                        default: ["Assign Customer", "Send to draft"],
                        reqd: true,
                    },
                    {
                        label: 'Payer Group',
                        fieldname: 'customer_group_name',
                        mandatory_depends_on: 'eval: doc.action == "Assign Customer"',
                        depends_on: 'eval: doc.action == "Assign Customer"',
                        fieldtype: 'Link',
                        options: 'Customer Group',
                    },
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    if (values.action == "Assign Customer") {
                        updateSalesOrderCustomer({
                            sales_order_name: salesOrderItem.parent,
                            customer_group_name: values.customer_group_name
                        }).then(m => {
                            transitionSalesOrderToInvoice({ sales_order_name: salesOrderItem.parent }).then(() => {
                            frappe.show_alert({
                                message: \`Successfully assigned customer\`,
                                indicator: 'green'
                            }, 15);
                        })
                        });
                    } else {
                       sendSalesOrderToDraft({
                            sales_order_name: salesOrderItem.parent,
                        }).then(m => {
                            frappe.show_alert({
                                message: \`Sales Order Sent To Draft\`,
                                indicator: 'green'
                            }, 5);
                        });
                    }

                    dialog.hide();
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    dialog.hide();
                }
            });
            dialog.show();
        },
        fetchInsuranceSalesOrders() {
            getInsuranceSalesOrders({ patient_name: this.patient_number }).then(r => {
                this.salesOrderItems = r;
            });
        }
    },
    created() {
        // this.fetchSalesOrders();
        this.fetchInsuranceSalesOrders();
    },
    filters: {
        // Filter definitions
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
}
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
  var __vue_component__9 = /* @__PURE__ */ __vue_normalize__9({render: __vue_render__9, staticRenderFns: __vue_staticRenderFns__9}, __vue_inject_styles__9, __vue_script__9, __vue_scope_id__9, __vue_is_functional_template__9, __vue_module_identifier__9, false, void 0, void 0, void 0);
  var SalesOrderAuth_default = __vue_component__9;

  // ../frontend/frontend/public/js/services/customer/dashboard.js
  var api5 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message: message2}) => resolve(message2),
    error: reject
  }));
  var getPatientDashboardData = ({patient, customer}) => api5({
    method: "billing.billing.api.customer.dashboard.get_balance_dashboard",
    args: {
      patient,
      customer
    }
  });

  // ../frontend/frontend/public/js/customer_dash/Main.vue
  var __vue_script__10 = {
    data() {
      return {
        result: {}
      };
    },
    props: {
      patient: {type: String},
      customer: {type: String},
      collapsed: {type: Boolean}
    },
    methods: {
      getPatientData(data) {
        getPatientDashboardData(data).then((response) => {
          if (!response.total_bill) {
            response.total_bill = 0;
          }
          if (!response.unallocated_cash) {
            response.unallocated_cash = 0;
          }
          if (!response.sales_orders) {
            response.sales_orders = [];
          }
          this.result = response;
        });
      }
    },
    mounted() {
      if (this.patient) {
        this.getPatientData({patient: this.patient});
      } else if (this.customer) {
        this.getPatientData({customer: this.customer});
      } else if (window.cur_frm && window.cur_frm.doc.customer) {
        this.getPatientData({customer: window.cur_frm.doc.customer});
      } else if (window.cur_frm && cur_frm.doc.patient) {
        this.getPatientData({patient: window.cur_frm.doc.patient});
      }
    }
  };
  var __vue_render__10 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-card", [
        _c("b-container", [
          _c("div", [
            _c("b-container", {
              directives: [
                {
                  name: "b-toggle",
                  rawName: "v-b-toggle.collapse-1",
                  modifiers: {"collapse-1": true}
                }
              ]
            }, [
              _vm.result.sales_orders && _vm.result.sales_orders.length ? _c("b-row", [
                _vm._v("\n            Bill for Appointment:\n            "),
                _vm.result.sales_orders && _vm.result.sales_orders[0] ? _c("b", [
                  _vm._v(_vm._s(_vm.result.sales_orders[0].document_id))
                ]) : _c("b", [_vm._v("0")])
              ]) : _vm._e(),
              _vm._v(" "),
              _c("b-row", [
                _vm._v("\n           Total  Customer Unallocated payments : "),
                _c("b", [
                  _vm._v("KES " + _vm._s(_vm.result.unallocated_cash || 0))
                ])
              ]),
              _vm._v(" "),
              _vm.result.sales_orders ? _c("b-row", [
                _vm._v("\n           Total Bill Amount: "),
                _c("b", [
                  _vm._v(" KES " + _vm._s(_vm.result.sales_orders.map(function(item) {
                    return item.total;
                  }).reduce(function(x, y) {
                    return x + y;
                  }, 0) || 0))
                ])
              ]) : _vm._e(),
              _vm._v(" "),
              _vm.result.total_bill > _vm.result.unallocated_cash ? _c("b-row", [
                _vm._v("\n            Amount pending payment:"),
                _c("b", {staticStyle: {color: "red"}}, [
                  _vm._v("\n              KES " + _vm._s(_vm.result.sales_orders.filter(function(item) {
                    return item.workflow_state == "Posted";
                  }).map(function(item) {
                    return item.total;
                  }).reduce(function(x, y) {
                    return x + y;
                  }, 0)))
                ])
              ]) : _c("b-row", [
                _vm._v("\n            Over Payment by:\n            "),
                _c("b", {staticStyle: {color: "green"}}, [
                  _vm._v("\n              KES " + _vm._s(_vm.result.unallocated_cash - _vm.result.total_bill))
                ])
              ]),
              _vm._v(" "),
              _vm.result.sales_orders && _vm.result.sales_orders.length ? _c("b-row", [
                _vm._v("\n            Items:\n            "),
                _c("b", [
                  _vm._v(_vm._s(_vm.result.sales_orders.length))
                ])
              ]) : _vm._e()
            ], 1),
            _vm._v(" "),
            _c("b-collapse", {
              staticClass: "mt-2",
              attrs: {visible: _vm.collapsed, id: "collapse-1"}
            }, [
              _c("b-row", [_c("b-col"), _vm._v(" "), _c("h4", [_vm._v("Paid")])], 1),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm.result.sales_orders && _vm.result.sales_orders.length ? _c("b-row", [
                _c("b-table", {
                  staticStyle: {width: "100% !important"},
                  attrs: {
                    items: _vm.result.sales_orders.filter(function(item) {
                      return item.workflow_state == "Completed";
                    }),
                    striped: "",
                    outlined: "",
                    bordered: "",
                    "head-row-variant": "secondary",
                    "sticky-header": "400px",
                    responsive: "sm",
                    "empty-text": "No items have been paid",
                    "empty-filtered-text": "No items have been paid",
                    "show-empty": true,
                    hover: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "cell(index)",
                      fn: function(data) {
                        return [
                          _vm._v("\n              " + _vm._s(data.index + 1) + "\n            ")
                        ];
                      }
                    }
                  ], null, false, 300415311)
                })
              ], 1) : _vm._e(),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col"),
                _vm._v(" "),
                _vm.result.sales_orders ? _c("h4", [
                  _vm._v("Total " + _vm._s(_vm.result.sales_orders.filter(function(item) {
                    return item.workflow_state == "Completed";
                  }).map(function(item) {
                    return item.total;
                  }).reduce(function(x, y) {
                    return x + y;
                  }, 0) || 0))
                ]) : _vm._e()
              ], 1),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("b-row", [_c("b-col"), _vm._v(" "), _c("h4", [_vm._v("Unpaid")])], 1),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm.result.sales_orders && _vm.result.sales_orders.length ? _c("b-row", [
                _c("b-table", {
                  staticStyle: {width: "100% !important"},
                  attrs: {
                    items: _vm.result.sales_orders.filter(function(item) {
                      return item.workflow_state == "Posted";
                    }),
                    hover: "",
                    striped: "",
                    outlined: "",
                    bordered: "",
                    "head-row-variant": "secondary",
                    "sticky-header": "400px",
                    responsive: "sm",
                    "empty-text": "No items pending payments",
                    "empty-filtered-text": "No pending payments",
                    "show-empty": true
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "cell(index)",
                      fn: function(data) {
                        return [
                          _vm._v("\n              " + _vm._s(data.index + 1) + "\n            ")
                        ];
                      }
                    }
                  ], null, false, 300415311)
                })
              ], 1) : _vm._e(),
              _vm._v(" "),
              _c("b-row", [
                _c("b-col"),
                _vm._v(" "),
                _c("h4", [
                  _vm._v("Total " + _vm._s(_vm.result.sales_orders.filter(function(item) {
                    return item.workflow_state == "Posted";
                  }).map(function(item) {
                    return item.total;
                  }).reduce(function(x, y) {
                    return x + y;
                  }, 0) || 0))
                ])
              ], 1),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("br")
            ], 1)
          ], 1)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__10 = [];
  __vue_render__10._withStripped = true;
  var __vue_inject_styles__10 = function(inject) {
    if (!inject)
      return;
    inject("data-v-a70ddbd0_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Main.vue"}, media: void 0});
  };
  var __vue_scope_id__10 = void 0;
  var __vue_module_identifier__10 = void 0;
  var __vue_is_functional_template__10 = false;
  function __vue_normalize__10(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <b-card>\n      <b-container>\n        <div>\n          <b-container v-b-toggle.collapse-1>\n            <b-row v-if="result.sales_orders && result.sales_orders.length">\n              Bill for Appointment:\n              <b v-if="result.sales_orders && result.sales_orders[0]">{{ result.sales_orders[0].document_id }}</b>\n               <b v-else>0</b>\n            </b-row>\n            <b-row>\n             Total  Customer Unallocated payments : <b>KES {{ result.unallocated_cash  || 0}}</b>\n            </b-row>\n            <b-row v-if="result.sales_orders">\n             Total Bill Amount: <b> KES {{ result.sales_orders.map(item=> item.total).reduce((x,y)=> x+y,0)|| 0 }}</b>\n            </b-row>\n\n            <b-row v-if="result.total_bill > result.unallocated_cash">\n              Amount pending payment:<b style="color: red">\n                KES {{ result.sales_orders.filter(item=> item.workflow_state == "Posted").map(item=> item.total).reduce((x,y)=> x+y,0)}}</b\n              >\n            </b-row>\n            <b-row v-else>\n              Over Payment by:\n              <b style="color: green">\n                KES {{ result.unallocated_cash - result.total_bill }}</b\n              >\n            </b-row>\n\n             <b-row v-if="result.sales_orders && result.sales_orders.length">\n              Items:\n              <b>{{ result.sales_orders.length }}</b>\n            </b-row>\n          </b-container>\n          <b-collapse :visible="collapsed" id="collapse-1" class="mt-2">\n            <b-row>\n              <b-col></b-col>\n              <h4>Paid</h4>\n            </b-row>\n            <hr/>\n            <b-row v-if="result.sales_orders && result.sales_orders.length">\n              <b-table\n               style="width:100% !important"\n              :items="result.sales_orders.filter(item=> item.workflow_state == \'Completed\')"\n                striped\n            outlined\n            bordered\n            head-row-variant="secondary"\n            :sticky-header="\'400px\'"\n            responsive="sm"\n            :empty-text="`No items have been paid`"\n            :empty-filtered-text="`No items have been paid`"\n            :show-empty="true"\n            hover\n              >\n                 <template #cell(index)="data">\n                {{ data.index + 1 }}\n              </template>\n              </b-table>\n            </b-row>\n            <b-row>\n              <b-col></b-col>\n              <h4 v-if="result.sales_orders">Total {{ result.sales_orders.filter(item=> item.workflow_state == "Completed").map(item=> item.total).reduce((x,y)=> x+y,0) ||0 }}</h4>\n            </b-row>\n            <hr/>\n            <br/>\n             <b-row>\n              <b-col></b-col>\n              <h4>Unpaid</h4>\n            </b-row>\n            <hr/>\n\n            <b-row v-if="result.sales_orders && result.sales_orders.length">\n              <b-table \n               style="width:100% !important"\n               :items="result.sales_orders.filter(item=> item.workflow_state == \'Posted\')"\n               hover\n            striped\n            outlined\n            bordered\n            head-row-variant="secondary"\n            :sticky-header="\'400px\'"\n            responsive="sm"\n            :empty-text="`No items pending payments`"\n            :empty-filtered-text="`No pending payments`"\n            :show-empty="true"\n               \n               >\n                 <template #cell(index)="data">\n                {{ data.index + 1 }}\n              </template>\n              </b-table>\n            </b-row>\n\n              <b-row>\n              <b-col></b-col>\n              <h4>Total {{ result.sales_orders.filter(item=> item.workflow_state == "Posted").map(item=> item.total).reduce((x,y)=> x+y,0) ||0 }}</h4>\n            </b-row>\n            <hr/>\n            <br/>\n          </b-collapse>\n        </div>\n      </b-container>\n    </b-card>\n  </div>\n</template>\n\n<script>\nimport { getPatientDashboardData } from "./../services/customer/dashboard.js";\nexport default {\n  data() {\n    return {\n      result: {},\n    };\n  },\n  props: {\n    patient: { type: String },\n    customer: {type:String},\n    collapsed: {type: Boolean},\n  },\n  methods: {\n    getPatientData(data) {\n      getPatientDashboardData(data).then((response) => {\n\n        if(!response.total_bill){\n          response.total_bill =0;\n        }\n\n        if(!response.unallocated_cash){\n          response.unallocated_cash =0;\n        }\n\n         if(!response.sales_orders){\n          response.sales_orders =[];\n        }\n\n        this.result= response;\n\n      });\n    },\n  },\n\n  mounted() {\n    if (this.patient) {\n      this.getPatientData({ patient: this.patient });\n    } else if (this.customer) {\n      this.getPatientData({ customer: this.customer });\n    } else if (window.cur_frm && window.cur_frm.doc.customer) {\n      this.getPatientData({ customer: window.cur_frm.doc.customer });\n    }else if (window.cur_frm && cur_frm.doc.patient) {\n      this.getPatientData({ patient: window.cur_frm.doc.patient });\n    }\n  },\n};\n</script>\n\n<style>\n</style>';
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
  var __vue_component__10 = /* @__PURE__ */ __vue_normalize__10({render: __vue_render__10, staticRenderFns: __vue_staticRenderFns__10}, __vue_inject_styles__10, __vue_script__10, __vue_scope_id__10, __vue_is_functional_template__10, __vue_module_identifier__10, false, __vue_create_injector__4, void 0, void 0);
  var Main_default = __vue_component__10;

  // ../frontend/frontend/public/js/accounts/accounts/Dashboard.vue
  var __vue_script__11 = {
    components: {
      Main: Main_default
    },
    props: {
      patient: {type: String},
      customer: {type: String}
    }
  };
  var __vue_render__11 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.patient || _vm.customer ? _c("div", [
      _c("Main", {
        staticClass: "mt-4 mb-6",
        attrs: {
          patient: _vm.patient,
          customer: _vm.customer,
          collapsed: true
        }
      })
    ], 1) : _vm._e();
  };
  var __vue_staticRenderFns__11 = [];
  __vue_render__11._withStripped = true;
  var __vue_inject_styles__11 = function(inject) {
    if (!inject)
      return;
    inject("data-v-58512420_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "Dashboard.vue"}, media: void 0});
  };
  var __vue_scope_id__11 = void 0;
  var __vue_module_identifier__11 = void 0;
  var __vue_is_functional_template__11 = false;
  function __vue_normalize__11(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
<div v-if="patient || customer">
    <Main class="mt-4 mb-6" :patient="patient" :customer="customer" :collapsed="true"></main>
</div>
  
</template>

<script>
import Main from './../../customer_dash/Main.vue'
export default {
    components:{
        Main,
    },
    props:{
        patient:{type:String,}, 
        customer: {type:String}
    }

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
  var __vue_component__11 = /* @__PURE__ */ __vue_normalize__11({render: __vue_render__11, staticRenderFns: __vue_staticRenderFns__11}, __vue_inject_styles__11, __vue_script__11, __vue_scope_id__11, __vue_is_functional_template__11, __vue_module_identifier__11, false, __vue_create_injector__5, void 0, void 0);
  var Dashboard_default = __vue_component__11;

  // ../frontend/frontend/public/js/services/doctype/meta.js
  var api6 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message: message2}) => resolve(message2),
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

  // ../frontend/frontend/public/js/state/render/state.js
  var getUserInfo = () => {
    let userInfo = {};
    return userInfo;
  };
  var state = {
    AppActiveUser: getUserInfo(),
    tableData: []
  };
  var state_default2 = state;

  // ../frontend/frontend/public/js/state/render/getters.js
  var getters = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default2 = getters;

  // ../frontend/frontend/public/js/state/render/mutations.js
  var mutations = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default2 = mutations;

  // ../frontend/frontend/public/js/state/render/actions.js
  var actions = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default2 = actions;

  // ../frontend/frontend/public/js/state/render/module.js
  var module_default = {
    namespaced: true,
    state: state_default2,
    mutations: mutations_default2,
    actions: actions_default2,
    getters: getters_default2
  };

  // ../frontend/frontend/public/js/html/doctype/ChildTable.vue
  var __vue_script__12 = {
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
  var __vue_render__12 = function() {
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
  var __vue_staticRenderFns__12 = [];
  __vue_render__12._withStripped = true;
  var __vue_inject_styles__12 = function(inject) {
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
  var __vue_scope_id__12 = "data-v-1c330300";
  var __vue_module_identifier__12 = void 0;
  var __vue_is_functional_template__12 = false;
  function __vue_normalize__12(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__12 = /* @__PURE__ */ __vue_normalize__12({render: __vue_render__12, staticRenderFns: __vue_staticRenderFns__12}, __vue_inject_styles__12, __vue_script__12, __vue_scope_id__12, __vue_is_functional_template__12, __vue_module_identifier__12, false, __vue_create_injector__6, void 0, void 0);
  var ChildTable_default = __vue_component__12;

  // ../frontend/frontend/public/js/services/doctype/list.js
  var createDoctype = (payload) => api6({
    method: "mtrh_dev.api.supplier-portal.base.base.save_form_data",
    args: {payload}
  });

  // ../frontend/frontend/public/js/html/doctype/DocField.vue
  var __vue_script__13 = {
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
  var __vue_render__13 = function() {
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
  var __vue_staticRenderFns__13 = [];
  __vue_render__13._withStripped = true;
  var __vue_inject_styles__13 = function(inject) {
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
  var __vue_scope_id__13 = "data-v-f42a2350";
  var __vue_module_identifier__13 = void 0;
  var __vue_is_functional_template__13 = false;
  function __vue_normalize__13(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__13 = /* @__PURE__ */ __vue_normalize__13({render: __vue_render__13, staticRenderFns: __vue_staticRenderFns__13}, __vue_inject_styles__13, __vue_script__13, __vue_scope_id__13, __vue_is_functional_template__13, __vue_module_identifier__13, false, __vue_create_injector__7, void 0, void 0);
  var DocField_default = __vue_component__13;

  // ../frontend/frontend/public/js/html/doctype/DoctypeRender.vue
  var __vue_script__14 = {
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
  var __vue_render__14 = function() {
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
  var __vue_staticRenderFns__14 = [];
  __vue_render__14._withStripped = true;
  var __vue_inject_styles__14 = function(inject) {
    if (!inject)
      return;
    inject("data-v-88b8b55c_0", {source: '\n.card[data-v-88b8b55c] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n.head-toggle[data-v-88b8b55c] {\n  outline: 0;\n}\n.header[data-v-88b8b55c] {\n  background: transparent;\n}\n.card-header[data-v-88b8b55c] {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/html/doctype/DoctypeRender.vue"], "names": [], "mappings": ";AAoQA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;AAEA;EACA,UAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA;;wCAEA;EACA,6CAAA;AACA", "file": "DoctypeRender.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card\n          :title="section.name"\n          v-if="section.fields.length > 0 && !section.collapsible"\n        >\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field\n                  :docField="field"\n                  @childUpdated="childUpdated"\n                  :doc="doctype"\n                  :readOnly="readOnly"\n                />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n\n        <b-card\n          v-else-if="section.fields.length > 0 && section.collapsible"\n          class="mb-2"\n        >\n          <b-card-header header-tag="header" class="p-1 header" role="tab">\n            <div\n              class="head-toggle"\n              @click="section.collapsed = !section.collapsed"\n            >\n              <b-row>\n                <b-col cols="10">\n                  <h5 style="margin: 0">{{ section.name }}</h5>\n                </b-col>\n                <b-col cols="2">\n                  <span\n                    ><i\n                      class="toggler pull-right ml-4 fa"\n                      v-bind:class="section.collapsed ? iconUp : iconDown"\n                      aria-hidden="true"\n                    ></i>\n                  </span>\n                </b-col>\n              </b-row>\n            </div>\n          </b-card-header>\n          <b-collapse\n            v-model="section.collapsed"\n            id="accordion-1"\n            role="tabpanel"\n          >\n            <b-card-body>\n              <b-row class="mt-2">\n                <b-col\n                  :cols="getWidth(field)"\n                  v-for="field in section.fields"\n                  :key="field"\n                >\n                  <doc-field\n                    :docField="field"\n                    :doc="doctype"\n                    @childUpdated="childUpdated"\n                    :readOnly="readOnly"\n                  />\n                </b-col>\n              </b-row>\n            </b-card-body>\n          </b-collapse>\n        </b-card>\n      </b-col>\n    </b-row>\n    <b-row>\n      <b-button v-if="!readOnly" variant="primary" @click="create()">\n        create</b-button\n      >\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "./../../services/doctype/meta.js";\nimport { createDoctype } from "./../../services/doctype/list.js";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n      readOnly: false,\n      iconUp: "fa-angle-up",\n      iconDown: "fa-angle-down",\n      collapsed: false,\n      allowedFields: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {\n    this.isReadonly = this.readOnly;\n  },\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: null },\n    fields: { type: Array, default: [] },\n    refresh: { type: String, required: false },\n  },\n  methods: {\n    loadDoctype() {\n      //  frappe.show_alert("loading form..", 5);\n      if (window.currentDoctype) {\n        this.doctypeInput = window.currentDoctype;\n      }\n      if (window.currentDoctypeReference) {\n        this.doc_ref = window.currentDoctypeReference;\n      }\n\n      if (this.doc_ref) {\n        this.readOnly = true;\n      }\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        if (data.allowedFields && data.allowed_fields.allowed_fields) {\n          this.allowedFields = data.allowed_fields.allowed_fields;\n        }\n\n        this.doctype = data.data;\n        if (window.currentDoctype) {\n          this.doctype.doctype = window.currentDoctype;\n        }\n\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      let checkList = this.allowedFields\n        .filter((x) => x.active)\n        .map((v) => v.field_name);\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (\n              checkList.indexOf(item.fieldname) > -1 ||\n              checkList.length == 0\n            ) {\n              currentSection.fields.push(item);\n            }\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          currentSection.collapsed = false;\n          currentSection.collapsible = item.collapsible;\n        }\n      });\n\n      if (this.sections.length === 0) {\n        currentSection = { fields: [], name: "" };\n        currentSection.collapsed = false;\n        currentSection.collapsible = false;\n\n        fields.forEach((item) => {\n          if (\n            item.fieldname !== "workflow_state" &&\n            item.fieldname !== "naming_series" &&\n            item.fieldtype !== "Button" &&\n            item.fieldtype !== "Html"\n          ) {\n            if (checkList.indexOf(item.fieldname) > -1) {\n              currentSection.fields.push(item);\n            }\n          }\n        });\n\n        this.sections.push(currentSection);\n      }\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n\n      if (stringItem.startsWith("section_break")) {\n        return null;\n      }\n\n      if (stringItem.startsWith("sb_")) {\n        stringItem = stringItem.replace("_sb", "");\n      }\n\n      stringItem = stringItem.replaceAll("section_break", "section");\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text") {\n          return "12";\n        }\n\n        if (field.fieldtype === "Text Editor") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n    childUpdated(val) {\n      if (this.doctype[val.fieldname] !== val.val) {\n        this.$set(this.doctype, val.fieldname, val.val);\n      }\n    },\n    create() {\n      createDoctype(this.doctype).then((data) => {});\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n    refreshed(val) {\n      this.loadDoctype();\n    },\n    doc_ref(vale){\n      this.loadDoctype();\n    }\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.head-toggle {\n  outline: 0;\n}\n.header {\n  background: transparent;\n}\n.card-header {\n  /* padding: .5rem 1.25rem;\n    margin-bottom: 0;\n    background-color: rgba(0,0,0,.03); */\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125);\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__14 = "data-v-88b8b55c";
  var __vue_module_identifier__14 = void 0;
  var __vue_is_functional_template__14 = false;
  function __vue_normalize__14(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__14 = /* @__PURE__ */ __vue_normalize__14({render: __vue_render__14, staticRenderFns: __vue_staticRenderFns__14}, __vue_inject_styles__14, __vue_script__14, __vue_scope_id__14, __vue_is_functional_template__14, __vue_module_identifier__14, false, __vue_create_injector__8, void 0, void 0);
  var DoctypeRender_default = __vue_component__14;

  // ../frontend/frontend/public/js/accounts/accounts/DoctypeLink.vue
  var __vue_script__15 = {
    name: "DoctypeLink",
    props: {
      doctype: {type: String},
      label: {type: String},
      fieldname: {type: String},
      placeholder: {type: String}
    },
    mounted() {
      this.makeControl();
    },
    methods: {
      sendData(data) {
        this.$emit("data", data);
      },
      makeControl() {
        let me = this;
        let customer_field = frappe.ui.form.make_control({
          df: {
            label: me.label,
            fieldtype: "Link",
            fieldname: me.fieldname,
            options: me.doctype,
            placeholder: me.placeholder,
            onchange: function() {
              if (this.value) {
                const mime = this;
                me.sendData(this.value);
              }
            }
          },
          parent: this.$refs["comment-input"],
          render_input: true
        });
        customer_field.toggle_label(false);
      }
    }
  };
  var __vue_render__15 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_c("div", {ref: "comment-input"})]);
  };
  var __vue_staticRenderFns__15 = [];
  __vue_render__15._withStripped = true;
  var __vue_inject_styles__15 = function(inject) {
    if (!inject)
      return;
    inject("data-v-66d7d10e_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "DoctypeLink.vue"}, media: void 0});
  };
  var __vue_scope_id__15 = void 0;
  var __vue_module_identifier__15 = void 0;
  var __vue_is_functional_template__15 = false;
  function __vue_normalize__15(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n<div>\n  <div ref="comment-input"></div>\n</div>\n\n</template>\n\n<script>\nexport default {\n  name: "DoctypeLink",\n  props: {\n    doctype: { type: String },\n    label: { type: String },\n    fieldname: { type: String },\n    placeholder:{type: String},\n  },\n  mounted() {\n   this.makeControl();\n  },\n  methods: {\n    sendData(data){\n       this.$emit("data", data);\n    },\n    makeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: me.label,\n          fieldtype: "Link",\n          fieldname: me.fieldname,\n          options: me.doctype,\n          placeholder:me.placeholder,\n          onchange: function () {\n            if (this.value) {\n              const mime = this;\n                me.sendData(this.value)\n             \n            }\n          },\n        },\n        parent: this.$refs["comment-input"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n    },\n  },\n};\n</script>\n\n<style>\n</style>';
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
  var __vue_component__15 = /* @__PURE__ */ __vue_normalize__15({render: __vue_render__15, staticRenderFns: __vue_staticRenderFns__15}, __vue_inject_styles__15, __vue_script__15, __vue_scope_id__15, __vue_is_functional_template__15, __vue_module_identifier__15, false, __vue_create_injector__9, void 0, void 0);
  var DoctypeLink_default = __vue_component__15;

  // ../frontend/frontend/public/js/accounts/accounts/TemplateBilling.vue
  var __vue_script__16 = {
    components: {
      ChildTable: ChildTable_default,
      DoctypeLink: DoctypeLink_default,
      DoctypeRender: DoctypeRender_default
    },
    props: {
      customerNumber: {
        type: String,
        default: " ",
        required: true
      },
      patient_number: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        selectedDoctypeReference: null,
        fields: ["items"],
        result: [],
        warehouses: [],
        tableData: {},
        currentWarehouse: null,
        condition: true,
        isBilling: false,
        total: 100,
        currentProgress: 10
      };
    },
    created() {
      getUserWarehouses().then((r) => {
        r.map((warehouse) => {
          this.warehouses.push(warehouse["for_value"]);
          console.log(this.warehouses);
        });
        if (this.warehouses.length) {
          this.currentWarehouse = this.warehouses[0];
        }
      });
    },
    methods: {
      setWarehouse(unit) {
        this.currentWarehouse = unit;
      },
      processData(data) {
        this.selectedDoctypeReference = data;
        this.getData(this.selectedDoctypeReference);
      },
      getData(ref) {
        const payload = {doctype: "Billing Template", name: ref};
        getDoctypeWithMeta(payload).then((result) => {
          this.result = result.data.items;
        });
      },
      populatePrices() {
        this.tableData.forEach((element, index) => {
          let quantity = parseInt(element.qty);
          if (element.rate == 0) {
            fetchConditionalItemPrice({
              item_code: element.item,
              customer: this.customerNumber
            }).then((res) => {
              if (res.type === "Patient") {
                let price = res.price;
                let amount = Math.ceil(price * quantity);
                element.rate = price;
                element.amount = amount;
                if (res.is_nhif === true && notify === true) {
                  frappe.msgprint({
                    title: __("Note"),
                    message: __("Patient will be charged for this item due to insufficient insurance balance"),
                    primary_action: {}
                  });
                }
              } else if (res.type === "Copay") {
                let price = res.price;
                let amount = Math.ceil(price * (res.remaining_quantity * quantity));
                element.rate = price;
                element.amount = amount;
              } else if (res.type === "Insurance") {
                let price = res.price;
                let amount = Math.ceil(price * quantity);
                element.rate = price;
                element.amount = "0";
                value.payer = "Insurance: (" + amount + ")";
              } else if (res.type === "Pre-auth Insurance") {
                let price = res.price;
                let amount = Math.ceil(price * quantity);
                element.rate = price;
                element.amount = "0";
              } else if (res.type === "Pre-auth Copay") {
                let price = res.price;
                let amount = Math.ceil(price * (res.remaining_quantity * quantity));
                element.rate = price;
                element.amount = amount;
              }
              this.table[index] = element;
            });
          }
        });
        this.result = this.tableData;
      },
      reset() {
        this.selectedDoctypeReference = null;
        this.tableData = [];
        this.result = [];
      },
      confirmBilling() {
        this.boxOne = "";
        var parent2 = this;
        var values = [];
        this.$bvModal.msgBoxConfirm(`Are you want to save this bill of KES ${this.result.map((item) => item.amount).reduce((partialSum, a) => partialSum + a, 0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}?`).then((value2) => {
          if (value2) {
            parent2.isBilling = true;
            parent2.result.forEach((item) => {
              createCustomSalesOrder({
                item_name: item.item,
                qty: item.qty,
                warehouse: parent2.currentWarehouse || "",
                customer_name: parent2.customerNumber,
                patient: parent2.patient_number
              }).then((r) => {
                values.push(item);
                let total = parent2.result.length;
                let currentProgress = values.length;
                console.log(JSON.stringify(r));
                parent2.total = total;
                parent2.currentProgress = currentProgress;
                if (currentProgress == total) {
                  parent2.reset();
                  parent2.isBilling = false;
                }
              }).catch((e) => {
                alert(`Error ${e}`);
              });
            });
          }
          this.boxOne = value2;
        }).catch((err) => {
        });
      },
      childUpdated(data) {
        this.result = data;
        this.tableData = data;
        this.tableData = this.tableData.map((item) => {
          if (item.rate) {
            item.amount = parseInt(item.qty) * item.rate;
          }
          return item;
        });
      }
    }
  };
  var __vue_render__16 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "p-5 mb-12", staticStyle: {width: "100%"}}, [
      _c("b-row", {staticClass: "pl-3 pr-3"}, [
        _c("b-col"),
        _vm._v(" "),
        _c("b-dropdown", {
          staticClass: "m-2",
          attrs: {
            id: "dropdown-dropup",
            dropup: "",
            text: _vm.currentWarehouse || "Select service unit",
            split: "",
            "split-variant": "outline-primary",
            variant: "primary"
          }
        }, _vm._l(_vm.warehouses, function(warehouse) {
          return _c("b-dropdown-item", {
            key: warehouse,
            attrs: {href: "#"},
            on: {
              click: function($event) {
                return _vm.setWarehouse(warehouse);
              }
            }
          }, [_vm._v(_vm._s(warehouse))]);
        }), 1)
      ], 1),
      _vm._v(" "),
      _c("b-row", {staticClass: "p-4 pl-3"}, [
        _c("h4", [_vm._v("Search for billing template")]),
        _vm._v(" "),
        _c("b-col"),
        _vm._v(" "),
        _c("b-button-group", [
          _vm.result.length ? _c("b-button", {
            attrs: {variant: "primary"},
            on: {
              click: function($event) {
                return _vm.populatePrices();
              }
            }
          }, [_vm._v("\n        Populate Missing prices")]) : _vm._e(),
          _vm._v(" "),
          _c("div", {staticStyle: {width: "5px", color: "white"}}),
          _vm._v(" "),
          _vm.result.length ? _c("b-button", {
            attrs: {variant: "primary"},
            on: {
              click: function($event) {
                return _vm.confirmBilling();
              }
            }
          }, [
            _vm._v("\n        Bill Patient  "),
            _c("b-badge", {attrs: {variant: "light"}}, [
              _vm._v(" KES " + _vm._s(_vm.result.map(function(item) {
                return item.amount;
              }).reduce(function(partialSum, a) {
                return partialSum + a;
              }, 0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")))
            ])
          ], 1) : _vm._e()
        ], 1)
      ], 1),
      _vm._v(" "),
      !_vm.isBilling ? _c("doctype-link", {
        staticStyle: {width: "100%"},
        attrs: {
          doctype: "Billing Template",
          label: "Billing Template",
          fieldname: "template"
        },
        on: {data: _vm.processData}
      }) : _vm._e(),
      _vm._v(" "),
      _vm.isBilling ? _c("b-row", [
        _c("h5", [_vm._v("Billing progress")]),
        _vm._v(" "),
        _c("b-progress", {
          staticClass: "mb-3",
          attrs: {value: _vm.currentProgress, max: _vm.total}
        })
      ], 1) : _vm._e(),
      _vm._v(" "),
      _vm.result.length ? _c("b-row", {staticStyle: {width: "100% ml-2"}}, [
        _c("div", {staticClass: "card", staticStyle: {width: "100%"}}, [
          _c("child-table", {
            staticClass: "p-4",
            staticStyle: {width: "100%"},
            attrs: {
              doctype: "Billing Template Item",
              tableData: _vm.result,
              readOnly: false
            },
            on: {childUpdated: _vm.childUpdated}
          })
        ], 1)
      ]) : _vm._e()
    ], 1);
  };
  var __vue_staticRenderFns__16 = [];
  __vue_render__16._withStripped = true;
  var __vue_inject_styles__16 = function(inject) {
    if (!inject)
      return;
    inject("data-v-cd4cef0c_0", {source: "\n.card[data-v-cd4cef0c] {\n  box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%);\n  transition: 0.3s;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.75rem;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/accounts/accounts/TemplateBilling.vue"], "names": [], "mappings": ";AAsPA;EACA,wCAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;EACA,2BAAA;EACA,sCAAA;EACA,sBAAA;AACA", "file": "TemplateBilling.vue", "sourcesContent": [`<template>
  <b-container class="p-5 mb-12" style="width: 100%">
    <b-row class="pl-3 pr-3">
      <b-col></b-col>
         <b-dropdown id="dropdown-dropup" dropup :text="currentWarehouse||'Select service unit'"  split
    split-variant="outline-primary"
    variant="primary" class="m-2">
        <b-dropdown-item v-for=" warehouse in warehouses " :key="warehouse" href="#" @click="setWarehouse(warehouse)">{{warehouse}}</b-dropdown-item>
        </b-dropdown>
    </b-row>
    <b-row class="p-4 pl-3">
      <h4>Search for billing template</h4>
      <b-col></b-col>
   

      <b-button-group>
        
        <b-button
          variant="primary"
          v-if="result.length"
          @click="populatePrices()"
        >
          Populate Missing prices</b-button>
         <div style="width:5px;color:white"></div>
        <b-button variant="primary" v-if="result.length" @click="confirmBilling()">
          Bill Patient  <b-badge variant="light"> KES {{result.map(item=>item.amount).reduce((partialSum, a) => partialSum + a, 0).toFixed(2).replace(/\\d(?=(\\d{3})+\\.)/g, '$&,') }}</b-badge></b-button
        >
      </b-button-group>
    </b-row>

    <doctype-link
     v-if="!isBilling"
      :doctype="'Billing Template'"
      :label="'Billing Template'"
      :fieldname="'template'"
      @data="processData"
      style="width: 100%"
    ></doctype-link>

    <b-row v-if="isBilling">
    <h5>Billing progress</h5>
    <b-progress :value="currentProgress" :max="total" class="mb-3"></b-progress>
  
    </b-row>

    <b-row style="width: 100% ml-2" v-if="result.length">
      <div class="card" style="width: 100%">
        <child-table
          class="p-4"
          style="width: 100%"
          :doctype="'Billing Template Item'"
          :tableData="result"
          :readOnly="false"
          @childUpdated="childUpdated"
        ></child-table>
      </div>
    </b-row>
  </b-container>
</template>


<script>
import ChildTable from "./../../html/doctype/ChildTable.vue";
import DoctypeRender from "./../../html/doctype/DoctypeRender.vue";
import DoctypeLink from "./DoctypeLink.vue";
import { getDoctypeWithMeta } from "./../..//services/doctype/meta.js";
import { fetchConditionalItemPrice,  createCustomSalesOrder, getUserWarehouses} from "../../services/accounts/patient.js";
export default {
  components: {
    ChildTable,
    DoctypeLink,
    DoctypeRender,
  },
  props: {
    customerNumber: {
      type: String,
      default: " ",
      required: true,
    },
      patient_number: {
      type: String,
      default: " ",
      required: true,
    },
  },
  data() {
    return {
      selectedDoctypeReference: null,
      fields: ["items"],
      result: [],
      warehouses: [],
      tableData: {},
      currentWarehouse:null,
      condition :true,
      isBilling:false,
      total:100,
      currentProgress:10,

    };
  },
  created() {
     getUserWarehouses().then(r => {
            r.map(warehouse => {
                this.warehouses.push(warehouse['for_value'])
                console.log(this.warehouses);
            });
            if(this.warehouses.length){
              this.currentWarehouse =this.warehouses[0]
            }
        });

  },
  methods: {
    setWarehouse(unit){
      this.currentWarehouse = unit;
    },
    processData(data) {
      this.selectedDoctypeReference = data;
      this.getData(this.selectedDoctypeReference);
    },
    getData(ref) {
      const payload = { doctype: "Billing Template", name: ref };
      getDoctypeWithMeta(payload).then((result) => {
        this.result = result.data.items;
      });
    },
    populatePrices() {
      this.tableData.forEach((element, index) => {
        let quantity = parseInt(element.qty);
        if (element.rate == 0) {
          fetchConditionalItemPrice({
            item_code: element.item,
            customer: this.customerNumber,
          }).then((res) => {
            if (res.type === "Patient") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              element.rate = price;
              element.amount = amount;
              if (res.is_nhif === true && notify === true) {
                frappe.msgprint({
                  title: __("Note"),
                  message: __(
                    "Patient will be charged for this item due to insufficient insurance balance"
                  ),
                  primary_action: {},
                });
              }
            } else if (res.type === "Copay") {
              let price = res.price;
              let amount = Math.ceil(
                price * (res.remaining_quantity * quantity)
              );
              element.rate = price;
              element.amount = amount;
            } else if (res.type === "Insurance") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              element.rate = price;
              element.amount = "0";
              value.payer = "Insurance: " + "(" + amount + ")";
            } else if (res.type === "Pre-auth Insurance") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              element.rate = price;
              element.amount = "0";
            } else if (res.type === "Pre-auth Copay") {
              let price = res.price;
              let amount = Math.ceil(
                price * (res.remaining_quantity * quantity)
              );
              element.rate = price;
              element.amount = amount;
            }

            this.table[index] = element;
          });
        }
      });
      this.result = this.tableData;
    },
    reset(){
        this.selectedDoctypeReference=null;
        this.tableData = [];
        this.result = [];

    },

    confirmBilling() {
        this.boxOne = ''
        var parent = this;
        var values = [];
        this.$bvModal.msgBoxConfirm(\`Are you want to save this bill of KES \${this.result.map(item=>item.amount).reduce((partialSum, a) => partialSum + a, 0).toFixed(2).replace(/\\d(?=(\\d{3})+\\.)/g, '$&,')}?\`)
          .then(value => {
              if(value){     
                parent.isBilling = true;           
                parent.result.forEach(item =>{
                    
                   createCustomSalesOrder({
                    item_name: item.item,
                    qty: item.qty,
                    warehouse: parent.currentWarehouse ||  "",
                    customer_name: parent.customerNumber,
                    patient: parent.patient_number,
                  }).then((r) => {
                      values.push(item);
                      let total = parent.result.length;
                      let currentProgress = values.length;
                    console.log(JSON.stringify(r));                
                      parent.total = total
                    parent.currentProgress = currentProgress;
                      if(currentProgress == total){
                       parent.reset();
                       parent.isBilling =false;
                    }
                   
     
                  }).catch(e =>{
                      alert(\`Error \${e}\`);
                  });
                })
              }
            this.boxOne = value
          })
          .catch(err => {
            // An error occurred
          })
      },

    childUpdated(data) {
      this.result = data;
      this.tableData = data;
      this.tableData = this.tableData.map((item) => {
        if (item.rate) {
          item.amount = parseInt(item.qty) * item.rate;
        }

        return item;
      });
    },
    
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%);
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
}
</style>`]}, media: void 0});
  };
  var __vue_scope_id__16 = "data-v-cd4cef0c";
  var __vue_module_identifier__16 = void 0;
  var __vue_is_functional_template__16 = false;
  function __vue_normalize__16(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="p-5 mb-12" style="width: 100%">
    <b-row class="pl-3 pr-3">
      <b-col></b-col>
         <b-dropdown id="dropdown-dropup" dropup :text="currentWarehouse||'Select service unit'"  split
    split-variant="outline-primary"
    variant="primary" class="m-2">
        <b-dropdown-item v-for=" warehouse in warehouses " :key="warehouse" href="#" @click="setWarehouse(warehouse)">{{warehouse}}</b-dropdown-item>
        </b-dropdown>
    </b-row>
    <b-row class="p-4 pl-3">
      <h4>Search for billing template</h4>
      <b-col></b-col>
   

      <b-button-group>
        
        <b-button
          variant="primary"
          v-if="result.length"
          @click="populatePrices()"
        >
          Populate Missing prices</b-button>
         <div style="width:5px;color:white"></div>
        <b-button variant="primary" v-if="result.length" @click="confirmBilling()">
          Bill Patient  <b-badge variant="light"> KES {{result.map(item=>item.amount).reduce((partialSum, a) => partialSum + a, 0).toFixed(2).replace(/\\d(?=(\\d{3})+\\.)/g, '$&,') }}</b-badge></b-button
        >
      </b-button-group>
    </b-row>

    <doctype-link
     v-if="!isBilling"
      :doctype="'Billing Template'"
      :label="'Billing Template'"
      :fieldname="'template'"
      @data="processData"
      style="width: 100%"
    ></doctype-link>

    <b-row v-if="isBilling">
    <h5>Billing progress</h5>
    <b-progress :value="currentProgress" :max="total" class="mb-3"></b-progress>
  
    </b-row>

    <b-row style="width: 100% ml-2" v-if="result.length">
      <div class="card" style="width: 100%">
        <child-table
          class="p-4"
          style="width: 100%"
          :doctype="'Billing Template Item'"
          :tableData="result"
          :readOnly="false"
          @childUpdated="childUpdated"
        ></child-table>
      </div>
    </b-row>
  </b-container>
</template>


<script>
import ChildTable from "./../../html/doctype/ChildTable.vue";
import DoctypeRender from "./../../html/doctype/DoctypeRender.vue";
import DoctypeLink from "./DoctypeLink.vue";
import { getDoctypeWithMeta } from "./../..//services/doctype/meta.js";
import { fetchConditionalItemPrice,  createCustomSalesOrder, getUserWarehouses} from "../../services/accounts/patient.js";
export default {
  components: {
    ChildTable,
    DoctypeLink,
    DoctypeRender,
  },
  props: {
    customerNumber: {
      type: String,
      default: " ",
      required: true,
    },
      patient_number: {
      type: String,
      default: " ",
      required: true,
    },
  },
  data() {
    return {
      selectedDoctypeReference: null,
      fields: ["items"],
      result: [],
      warehouses: [],
      tableData: {},
      currentWarehouse:null,
      condition :true,
      isBilling:false,
      total:100,
      currentProgress:10,

    };
  },
  created() {
     getUserWarehouses().then(r => {
            r.map(warehouse => {
                this.warehouses.push(warehouse['for_value'])
                console.log(this.warehouses);
            });
            if(this.warehouses.length){
              this.currentWarehouse =this.warehouses[0]
            }
        });

  },
  methods: {
    setWarehouse(unit){
      this.currentWarehouse = unit;
    },
    processData(data) {
      this.selectedDoctypeReference = data;
      this.getData(this.selectedDoctypeReference);
    },
    getData(ref) {
      const payload = { doctype: "Billing Template", name: ref };
      getDoctypeWithMeta(payload).then((result) => {
        this.result = result.data.items;
      });
    },
    populatePrices() {
      this.tableData.forEach((element, index) => {
        let quantity = parseInt(element.qty);
        if (element.rate == 0) {
          fetchConditionalItemPrice({
            item_code: element.item,
            customer: this.customerNumber,
          }).then((res) => {
            if (res.type === "Patient") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              element.rate = price;
              element.amount = amount;
              if (res.is_nhif === true && notify === true) {
                frappe.msgprint({
                  title: __("Note"),
                  message: __(
                    "Patient will be charged for this item due to insufficient insurance balance"
                  ),
                  primary_action: {},
                });
              }
            } else if (res.type === "Copay") {
              let price = res.price;
              let amount = Math.ceil(
                price * (res.remaining_quantity * quantity)
              );
              element.rate = price;
              element.amount = amount;
            } else if (res.type === "Insurance") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              element.rate = price;
              element.amount = "0";
              value.payer = "Insurance: " + "(" + amount + ")";
            } else if (res.type === "Pre-auth Insurance") {
              let price = res.price;
              let amount = Math.ceil(price * quantity);
              element.rate = price;
              element.amount = "0";
            } else if (res.type === "Pre-auth Copay") {
              let price = res.price;
              let amount = Math.ceil(
                price * (res.remaining_quantity * quantity)
              );
              element.rate = price;
              element.amount = amount;
            }

            this.table[index] = element;
          });
        }
      });
      this.result = this.tableData;
    },
    reset(){
        this.selectedDoctypeReference=null;
        this.tableData = [];
        this.result = [];

    },

    confirmBilling() {
        this.boxOne = ''
        var parent = this;
        var values = [];
        this.$bvModal.msgBoxConfirm(\`Are you want to save this bill of KES \${this.result.map(item=>item.amount).reduce((partialSum, a) => partialSum + a, 0).toFixed(2).replace(/\\d(?=(\\d{3})+\\.)/g, '$&,')}?\`)
          .then(value => {
              if(value){     
                parent.isBilling = true;           
                parent.result.forEach(item =>{
                    
                   createCustomSalesOrder({
                    item_name: item.item,
                    qty: item.qty,
                    warehouse: parent.currentWarehouse ||  "",
                    customer_name: parent.customerNumber,
                    patient: parent.patient_number,
                  }).then((r) => {
                      values.push(item);
                      let total = parent.result.length;
                      let currentProgress = values.length;
                    console.log(JSON.stringify(r));                
                      parent.total = total
                    parent.currentProgress = currentProgress;
                      if(currentProgress == total){
                       parent.reset();
                       parent.isBilling =false;
                    }
                   
     
                  }).catch(e =>{
                      alert(\`Error \${e}\`);
                  });
                })
              }
            this.boxOne = value
          })
          .catch(err => {
            // An error occurred
          })
      },

    childUpdated(data) {
      this.result = data;
      this.tableData = data;
      this.tableData = this.tableData.map((item) => {
        if (item.rate) {
          item.amount = parseInt(item.qty) * item.rate;
        }

        return item;
      });
    },
    
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 0px 0px 0 rgb(0 0 0 / 20%);
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
}
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
  var __vue_component__16 = /* @__PURE__ */ __vue_normalize__16({render: __vue_render__16, staticRenderFns: __vue_staticRenderFns__16}, __vue_inject_styles__16, __vue_script__16, __vue_scope_id__16, __vue_is_functional_template__16, __vue_module_identifier__16, false, __vue_create_injector__10, void 0, void 0);
  var TemplateBilling_default = __vue_component__16;

  // ../frontend/frontend/public/js/services/patient_chart/charge_sheet.js
  var api7 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, callback: resolve, freeze}));
  var getItemPrice = (payload) => api7({
    method: "billing.billing.api.charge_sheet.actions.item_price.get_price",
    args: {payload}
  }).then(({message: message2}) => message2);
  var createChargeSheet = (payload) => api7({
    method: "billing.billing.api.charge_sheet.actions.create_charge_sheet.execute",
    args: {payload}
  }).then(({message: message2}) => message2);
  var chargeSheetAddItem = (payload) => api7({
    method: "billing.billing.api.charge_sheet.actions.create_charge_sheet.add_to_charge_sheet",
    args: {payload},
    freeze: false
  }).then(({message: message2}) => message2);
  var chargeSheetRemoveItem = (name) => api7({
    method: "billing.billing.api.charge_sheet.actions.create_charge_sheet.remove_item_from_charge_sheet",
    args: {name}
  }).then(({message: message2}) => message2);
  var checkChargeSheet = (patient) => api7({
    method: "billing.billing.api.charge_sheet.actions.create_charge_sheet.check_if_exits",
    args: {patient}
  }).then(({message: message2}) => message2);
  var chargeSheetSubmit = (name) => api7({
    method: "billing.billing.api.charge_sheet.actions.create_charge_sheet.submit_chargesheet",
    args: {name},
    freeze: false
  }).then(({message: message2}) => message2);
  var chargeSheetDelete = (name) => api7({
    method: "billing.billing.api.charge_sheet.actions.create_charge_sheet.delete_chargesheet",
    args: {name},
    freeze: false
  }).then(({message: message2}) => message2);

  // ../frontend/frontend/public/js/patient/components/order_tabs/UserWarehouse.vue
  var __vue_script__17 = {
    name: "UserWarehouses",
    data() {
      return {
        warehouses: [],
        selectedItem: "Select Warehouse"
      };
    },
    created() {
      this.getWarehouses();
    },
    watch() {
    },
    methods: {
      emitWarehouse(warehouse) {
        this.selectedItem = warehouse;
        this.$emit("warehouse", warehouse);
      },
      getWarehouses() {
        getUserWarehouses().then((response) => {
          this.warehouses = response.map((item) => item.for_value);
          if (this.warehouses.length) {
            let first = this.warehouses[0];
            this.emitWarehouse(first);
            this.selectedItem = first;
          }
        });
      }
    }
  };
  var __vue_render__17 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-container", [
        _c("b-row", [
          _c("b-dropdown", {
            staticClass: "m-2",
            attrs: {
              split: "",
              "split-variant": "outline-primary",
              variant: "primary",
              text: _vm.selectedItem
            }
          }, _vm._l(_vm.warehouses, function(item) {
            return _c("b-dropdown-item", {
              key: item,
              on: {
                click: function($event) {
                  return _vm.emitWarehouse(item);
                }
              }
            }, [_vm._v(_vm._s(item))]);
          }), 1)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__17 = [];
  __vue_render__17._withStripped = true;
  var __vue_inject_styles__17 = function(inject) {
    if (!inject)
      return;
    inject("data-v-7b3cae19_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "UserWarehouse.vue"}, media: void 0});
  };
  var __vue_scope_id__17 = void 0;
  var __vue_module_identifier__17 = void 0;
  var __vue_is_functional_template__17 = false;
  function __vue_normalize__17(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div>
      <b-container>
        <b-row>
            <b-dropdown
    split
    split-variant="outline-primary"
    variant="primary"
    :text="selectedItem"
    class="m-2"
  >
    <b-dropdown-item  v-for="item in warehouses"  :key="item" @click="emitWarehouse(item)">{{item}}</b-dropdown-item>

  </b-dropdown>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import { getUserWarehouses } from './../../../services/accounts/patient.js'
export default {
    name:"UserWarehouses",
    data() {
        return {
            warehouses:[],
            selectedItem: "Select Warehouse"
        }
    },
    created() {
        this.getWarehouses();
    },
    watch(){
 

    },
   
    methods: {
         emitWarehouse(warehouse){    
             this.selectedItem = warehouse   
             this.$emit('warehouse', warehouse)  
    },
        getWarehouses(){
            getUserWarehouses().then(response => {
                this.warehouses = response.map(item=> item.for_value)
                if(this.warehouses.length){
                    let first = this.warehouses[0];
                    this.emitWarehouse(first);
                    this.selectedItem = first
                }
            })
        }   
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
  var __vue_component__17 = /* @__PURE__ */ __vue_normalize__17({render: __vue_render__17, staticRenderFns: __vue_staticRenderFns__17}, __vue_inject_styles__17, __vue_script__17, __vue_scope_id__17, __vue_is_functional_template__17, __vue_module_identifier__17, false, __vue_create_injector__11, void 0, void 0);
  var UserWarehouse_default = __vue_component__17;

  // ../frontend/frontend/public/js/patient/components/order_tabs/ChargeSheet.vue
  var __vue_script__18 = {
    name: "Charge Sheet",
    props: {
      patient: {
        default: "",
        type: String,
        required: true
      },
      encounter: {
        type: Object,
        default: {},
        required: true
      },
      serviceUnit: {
        type: String,
        default: "",
        required: true
      },
      walkin: {
        type: Number,
        default: 0,
        required: false
      },
      approval: {
        type: Number,
        default: 0,
        required: false
      }
    },
    components: {
      UserWarehouse: UserWarehouse_default
    },
    data() {
      return {
        values: [],
        warehouse: "",
        fields: ["item_code", "qty", "price", "amount", "in_stock", "actions"],
        needsApproval: false,
        chargeSheetName: null
      };
    },
    methods: {
      checkIfChargeSheetExits() {
        checkChargeSheet(this.patient).then((response) => {
          if (response) {
            this.chargeSheetName = response.name;
            this.needsApproval = response.needs_approval ? true : false;
            this.warehouse = response.warehouse;
            response.items.forEach((item) => {
              this.values.push({item_code: item.item_code, qty: item.qty, status: "Saved", id: item.name});
              this.getPrice(item.item_code, false, item.name);
            });
          }
        });
      },
      submitChargeSheet() {
        chargeSheetSubmit({name: this.chargeSheetName}).then((response) => {
          this.values = [];
        });
      },
      removeItem(data) {
        data = data.item;
        if (data) {
          chargeSheetRemoveItem(data.id).then((response) => {
            this.values = this.values.filter((item) => item.id != data.id);
          });
        }
      },
      setWarehouse(wh) {
        this.warehouse = wh;
      },
      showAddChargeDialog() {
        let context = this;
        let x = new frappe.ui.Dialog({
          title: "Add Charge",
          fields: [
            {
              label: "Item",
              fieldname: "item_code",
              fieldtype: "Link",
              options: "Item",
              reqd: true,
              filters: {is_stock_item: 1, disabled: 0, has_variants: "No"}
            },
            {
              label: "Quantity",
              fieldname: "qty",
              fieldtype: "Float",
              reqd: true
            }
          ],
          primary_action_label: "Add Item",
          primary_action: (values) => {
            const available = this.values.filter((item) => item.item_code == values.item_code).length;
            if (available) {
              this.makeToast(variant = "danger", message = "Item already in the list", title = "Error");
            } else {
              context.values.push(values);
              context.getPrice(values.item_code, true);
              x.hide();
              this.showAddChargeDialog();
            }
          },
          secondary_action_label: "Cancel",
          secondary_action: (values) => {
            x.hide();
          }
        });
        x.show();
      },
      callCreateSheetApi() {
        const needs_approval = this.needsApproval ? 1 : 0;
        let chargeSheet = {
          patient: this.patient,
          encounter: this.encounter ? this.encounter.name : "",
          warehouse: this.warehouse,
          doctype: "Charge Sheet",
          needs_approval
        };
        createChargeSheet(chargeSheet).then((response) => {
          this.chargeSheetName = response;
          this.makeToast();
          this.values = [];
          this.chargeSheetName = response;
        });
      },
      makeToast(variant2 = "success") {
        this.$bvToast.toast("Bill recorded", {
          title: `Success`,
          variant: variant2,
          solid: true
        });
      },
      createSheet() {
        this.boxOne = "";
        this.$bvModal.msgBoxConfirm("Are you sure?").then((value2) => {
          if (value2) {
            this.callCreateSheetApi();
          }
        }).catch((err) => {
        });
      },
      submitSheet() {
        this.boxOne = "";
        this.$bvModal.msgBoxConfirm("Are you sure?").then((value2) => {
          if (value2) {
            chargeSheetSubmit(this.chargeSheetName).then((response) => {
              this.chargeSheetName = null;
              this.values = [];
            });
          }
        }).catch((err) => {
        });
      },
      deleteSheet() {
        this.boxOne = "";
        this.$bvModal.msgBoxConfirm("Are you sure?").then((value2) => {
          if (value2) {
            chargeSheetDelete(this.chargeSheetName).then((response) => {
              this.chargeSheetName = null;
              this.values = [];
            });
          }
        }).catch((err) => {
        });
      },
      getPrice(item_code, notPreloaded, item_id) {
        let items = [];
        getItemPrice({
          item_code,
          patient: this.patient,
          warehouse: this.warehouse
        }).then((response) => {
          this.values.forEach((element, index) => {
            if (element.item_code == item_code) {
              items.push({
                item_code,
                qty: element.qty,
                price: response.price,
                amount: element.qty * response.price,
                in_stock: response.available,
                status: notPreloaded ? "Not saved" : "Saved",
                id: item_id
              });
              if (notPreloaded) {
                if (element.qty > response.available) {
                  frappe.msgprint(item_code + " Insufficient stocks");
                  return;
                }
                this.addItem({item_code: element.item_code, qty: element.qty, charge_sheet: this.chargeSheetName});
              }
            } else {
              items.push(element);
            }
          });
          this.values = items;
        });
      },
      addItem(payload) {
        chargeSheetAddItem(payload).then((res) => {
          this.makeToast("success", "Item added");
          let items = [];
          this.values.forEach((element, index) => {
            if (payload.item_code == element.item_code) {
              items.push({
                item_code: element.item_code,
                qty: element.qty,
                price: element.price,
                amount: element.amount,
                in_stock: element.in_stock,
                status: "Saved",
                id: res
              });
            } else {
              items.push(element);
            }
          });
          this.values = items;
        });
      }
    },
    mounted() {
      this.needsApproval = this.approval == 1;
      this.checkIfChargeSheetExits();
    },
    created() {
    },
    created() {
      this.needsApproval = this.approval == 1;
    }
  };
  var __vue_render__18 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-container", [
        _c("b-row", [
          _vm._v("\n\n     Charge Sheet " + _vm._s(_vm.chargeSheetName) + "\n      "),
          _c("b-col"),
          _vm._v(" "),
          _vm.chargeSheetName ? _c("b-button", {
            staticClass: "mr-2",
            attrs: {variant: "primary"},
            on: {
              click: function($event) {
                return _vm.showAddChargeDialog();
              }
            }
          }, [_vm._v("\n        Add\n      ")]) : _vm._e(),
          _vm._v(" "),
          _vm.chargeSheetName ? _c("b-button", {
            staticClass: "ml-2",
            attrs: {variant: "danger"},
            on: {
              click: function($event) {
                return _vm.deleteSheet();
              }
            }
          }, [_vm._v("\n        Delete\n      ")]) : _vm._e(),
          _vm._v(" "),
          _vm.chargeSheetName || this.values.length ? _c("b-button", {
            staticClass: "ml-2",
            attrs: {variant: "success"},
            on: {
              click: function($event) {
                return _vm.submitSheet();
              }
            }
          }, [_vm._v("\n        Submit\n      ")]) : _c("b-button", {
            attrs: {variant: "primary"},
            on: {
              click: function($event) {
                return _vm.callCreateSheetApi();
              }
            }
          }, [_vm._v("\n        Create \n      ")])
        ], 1),
        _vm._v(" "),
        _c("b-row", [
          _c("user-warehouse", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.chargeSheetName,
                expression: "!chargeSheetName"
              }
            ],
            on: {warehouse: _vm.setWarehouse}
          }),
          _vm._v(" "),
          _c("h4", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.chargeSheetName,
                expression: "chargeSheetName"
              }
            ]
          }, [_vm._v("[ " + _vm._s(_vm.warehouse) + " ]")]),
          _vm._v(" "),
          _c("b-col"),
          _vm._v(" "),
          _c("div", [
            false ? _c("b-form-checkbox", {
              model: {
                value: _vm.needsApproval,
                callback: function($$v) {
                  _vm.needsApproval = $$v;
                },
                expression: "needsApproval"
              }
            }, [_vm._v("\n     Needs Supplies Approval\n  ")]) : _vm._e()
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("b-row", {staticStyle: {width: "100%"}}, [
          _c("b-table", {
            staticStyle: {width: "100%"},
            attrs: {
              responsive: "sm",
              bordered: "",
              striped: "",
              fields: _vm.fields,
              items: _vm.values,
              "empty-text": "No items ",
              "empty-filtered-text": "No items",
              "head-row-variant": "secondary",
              "show-empty": true
            },
            scopedSlots: _vm._u([
              {
                key: "cell(actions)",
                fn: function(data) {
                  return [
                    _c("b-button", {
                      attrs: {variant: "danger"},
                      on: {
                        click: function($event) {
                          return _vm.removeItem(data);
                        }
                      }
                    }, [_vm._v("\n            Remove\n          ")])
                  ];
                }
              },
              {
                key: "cell(status)",
                fn: function(data) {
                  return [
                    data.item && data.item.id ? _c("b-icon", {
                      attrs: {
                        disabled: "",
                        icon: "check-square",
                        scale: "2",
                        variant: "success"
                      }
                    }) : _c("b-button", {attrs: {variant: "primary"}}, [
                      _c("b-spinner", {
                        attrs: {small: "", type: "grow"}
                      }),
                      _vm._v("\n          Saving...\n        ")
                    ], 1)
                  ];
                }
              }
            ])
          })
        ], 1),
        _vm._v(" "),
        _c("b-row", [
          _c("b-col"),
          _vm._v(" "),
          _c("div", [
            _c("h5", [
              _vm._v("\n          Total:Ksh\n          " + _vm._s(_vm.values.map(function(item) {
                return item.amount || 0;
              }).reduce(function(a, b2) {
                return a + b2;
              }, 0)) + "\n        ")
            ])
          ])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__18 = [];
  __vue_render__18._withStripped = true;
  var __vue_inject_styles__18 = function(inject) {
    if (!inject)
      return;
    inject("data-v-cef5adfe_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "ChargeSheet.vue"}, media: void 0});
  };
  var __vue_scope_id__18 = void 0;
  var __vue_module_identifier__18 = void 0;
  var __vue_is_functional_template__18 = false;
  function __vue_normalize__18(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <b-container>\n      <b-row>\n  \n       Charge Sheet {{chargeSheetName}}\n        <b-col></b-col>\n        <b-button variant="primary" class="mr-2" v-if="chargeSheetName" @click="showAddChargeDialog()">\n          Add\n        </b-button>\n        \n\n        <b-button  v-if="chargeSheetName" @click="deleteSheet()"\n         class="ml-2"\n          variant="danger"     \n        >\n          Delete\n        </b-button>\n        <b-button  v-if="chargeSheetName || this.values.length" @click="submitSheet()"\n         class="ml-2"\n          variant="success"     \n        >\n          Submit\n        </b-button>\n\n         <b-button v-else  variant="primary"  @click="callCreateSheetApi()">\n          Create \n        </b-button>\n\n\n      \n      </b-row>\n      <b-row>\n        <user-warehouse v-show="!chargeSheetName" @warehouse="setWarehouse"></user-warehouse>\n          <h4 v-show="chargeSheetName" >[ {{ warehouse}} ]</h4>\n        <b-col></b-col>\n        <div>\n          <b-form-checkbox v-if="false"\n        v-model="needsApproval"\n        \n      >\n       Needs Supplies Approval\n    </b-form-checkbox></div>\n      </b-row>\n\n      <b-row style="width: 100%">\n        <b-table\n          style="width: 100%"\n          responsive="sm"\n          bordered\n          striped\n          :fields="fields"\n          :items="values"\n          :empty-text="`No items `"\n          :empty-filtered-text="`No items`"\n          head-row-variant="secondary"\n          :show-empty="true"\n        >\n          <template #cell(actions)="data">\n            <b-button variant="danger" @click="removeItem(data)">\n              Remove\n            </b-button>\n          </template>\n\n            <template #cell(status)="data">   \n            <b-icon disabled v-if="data.item && data.item.id" icon="check-square" scale="2" variant="success"></b-icon>\n             <b-button v-else variant="primary" >\n            <b-spinner   small type="grow"></b-spinner>\n            Saving...\n          </b-button >\n          </template>\n        </b-table>\n      </b-row>\n      <b-row>\n        <b-col></b-col>\n        <div>\n          <h5>\n            Total:Ksh\n            {{\n              values\n                .map((item) => {\n                  return item.amount || 0;\n                })\n                .reduce((a, b) => a + b, 0)\n            }}\n          </h5>\n        </div>\n      </b-row>\n    </b-container>\n  </div>\n</template>\n\n<script>\nimport {\n  getItemPrice,\n  createChargeSheet,\n  chargeSheetSubmit,\n  chargeSheetAddItem,\n  chargeSheetRemoveItem,\n  checkChargeSheet,\n  chargeSheetDelete\n} from "./../../../services/patient_chart/charge_sheet.js";\nimport UserWarehouse from "./UserWarehouse.vue";\nexport default {\n  name: "Charge Sheet",\n  props: {\n    patient: {\n      default: "",\n      type: String,\n      required: true,\n    },\n    encounter: {\n      type: Object,\n      default: {},\n      required: true,\n    },\n    serviceUnit: {\n      type: String,\n      default: "",\n      required: true,\n    },\n    walkin: {\n      type: Number,\n      default: 0,\n      required: false,\n    },\n    approval: {\n      type: Number,\n      default: 0,\n      required: false,\n    },\n  },\n  components: {\n    UserWarehouse,\n  },\n  data() {\n    return {\n      values: [],\n      warehouse: "",\n      fields:["item_code","qty","price", "amount", "in_stock", "actions"],\n      needsApproval:false,\n      chargeSheetName:null,\n    };\n  },\n  methods: {\n    checkIfChargeSheetExits(){\n        checkChargeSheet(this.patient).then(response=>{\n \n          if(response){\n             this.chargeSheetName = response.name;\n             this.needsApproval = response.needs_approval? true:false;\n            this.warehouse= response.warehouse;\n          \n            response.items.forEach(item=>{\n                this.values.push({item_code: item.item_code, qty: item.qty,status: "Saved", id: item.name});\n                this.getPrice(item.item_code,false, item.name);\n            })        \n          }\n        })\n    },\n    submitChargeSheet(){\n      chargeSheetSubmit({name:this.chargeSheetName}).then(response=>{\n        this.values = [];\n      })\n    },\n    removeItem(data) {\n      data = data.item;\n    if(data){\n         chargeSheetRemoveItem(data.id).then(response=>{\n        this.values = this.values.filter(\n              (item) => item.id != data.id\n            );\n      })\n    } \n    },\n    setWarehouse(wh) {\n      this.warehouse = wh;\n    },\n    showAddChargeDialog() {\n      let context = this;\n      let x = new frappe.ui.Dialog({\n        title: "Add Charge",\n        fields: [\n          {\n            label: "Item",\n            fieldname: "item_code",\n            fieldtype: "Link",\n            options: "Item",\n            reqd: true,\n            filters: { is_stock_item: 1, disabled: 0, has_variants: "No" },\n          },\n          {\n            label: "Quantity",\n            fieldname: "qty",\n            fieldtype: "Float",\n            reqd: true,\n          },\n        ],\n        primary_action_label: "Add Item",\n        primary_action: (values) => {\n          const available = this.values.filter(item => item.item_code == values.item_code).length\n        \n          if(available){ this.makeToast(variant=\'danger\', message="Item already in the list", title="Error")\n            \n      \n          }else {\n              context.values.push(values);\n          context.getPrice(values.item_code,true);\n          x.hide();  \n          this.showAddChargeDialog();\n          }\n        },\n        secondary_action_label: "Cancel",\n        secondary_action: (values) => {\n          x.hide();\n        },\n      });\n      x.show();\n    },    \n    callCreateSheetApi() {\n      const needs_approval = this.needsApproval ? 1 : 0;\n      let chargeSheet = {\n        patient: this.patient,\n        encounter: this.encounter ? this.encounter.name : "",\n        warehouse: this.warehouse,\n        doctype: "Charge Sheet",\n        needs_approval: needs_approval\n      };\n      createChargeSheet(chargeSheet).then((response) => {\n        this.chargeSheetName = response;\n        this.makeToast();\n        this.values = [];\n        this.chargeSheetName = response;\n      });\n    },\n    makeToast(variant = \'success\') {\n      this.$bvToast.toast("Bill recorded", {\n        title: `Success`,\n        variant: variant,\n        solid: true,\n      });\n    },\n    createSheet() {\n      this.boxOne = "";\n      this.$bvModal\n        .msgBoxConfirm("Are you sure?")\n        .then((value) => {\n          if (value) {\n            this.callCreateSheetApi();\n          }\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n\n     submitSheet() {\n      this.boxOne = "";\n      this.$bvModal\n        .msgBoxConfirm("Are you sure?")\n        .then((value) => {\n          if (value) {\n           chargeSheetSubmit(this.chargeSheetName).then(response=>{\n             this.chargeSheetName= null;\n             this.values=[]\n           });\n          }\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n\n     deleteSheet() {\n      this.boxOne = "";\n      this.$bvModal\n        .msgBoxConfirm("Are you sure?")\n        .then((value) => {\n          if (value) {\n           chargeSheetDelete(this.chargeSheetName).then(response=>{\n             this.chargeSheetName= null;\n             this.values=[]\n           });\n          }\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n    getPrice(item_code, notPreloaded, item_id) {\n      let items = [];\n      getItemPrice({\n        item_code,\n        patient: this.patient,\n        warehouse: this.warehouse,\n      }).then((response) => {\n        this.values.forEach((element, index) => {\n          if (element.item_code == item_code) {\n\n            items.push({\n              item_code: item_code,\n              qty: element.qty,\n              price: response.price,\n              amount: element.qty * response.price,\n              in_stock: response.available,\n              status: notPreloaded?"Not saved" :"Saved", \n              id: item_id,\n            });\n            if(notPreloaded){\n\nif(element.qty> response.available){\nfrappe.msgprint(item_code + " Insufficient stocks")\nreturn;\n}\n              this.addItem({item_code: element.item_code, qty: element.qty, charge_sheet: this.chargeSheetName})\n            }\n            \n          } else {\n            items.push(element);\n          }\n        });\n\n        this.values = items;\n      });\n    },\n    addItem(payload){\n      chargeSheetAddItem(payload).then( res =>{\n        this.makeToast("success","Item added" );\n         let items = [];\n         this.values.forEach((element, index) => {\n          if (payload.item_code == element.item_code) {\n  \n            items.push({\n              item_code: element.item_code,\n              qty: element.qty,\n              price: element.price,\n              amount: element.amount,\n              in_stock: element.in_stock,\n              status: "Saved",\n              id: res,\n            });\n\n          } else {\n            items.push(element);\n          }\n        });\n\n        this.values = items;\n\n      });\n    }\n  },\n  mounted() {\n    \n     this.needsApproval = this.approval == 1;\n     this.checkIfChargeSheetExits();\n  },\n  created() {\n    \n \n  },\n  created() {\n    this.needsApproval = this.approval==1;\n  },\n};\n</script>\n\n<style>\n</style>\n';
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
  var __vue_component__18 = /* @__PURE__ */ __vue_normalize__18({render: __vue_render__18, staticRenderFns: __vue_staticRenderFns__18}, __vue_inject_styles__18, __vue_script__18, __vue_scope_id__18, __vue_is_functional_template__18, __vue_module_identifier__18, false, __vue_create_injector__12, void 0, void 0);
  var ChargeSheet_default = __vue_component__18;

  // ../frontend/frontend/public/js/services/patient_chart/patient_allergy.js
  var api8 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, callback: resolve, freeze}));
  var createPatientAllergy = (payload) => api8({
    method: "clinical.api.notes.patient_allergy.execute",
    args: {payload}
  }).then(({message: message2}) => message2);
  var patientAllergyAddItem = (payload) => api8({
    method: "clinical.api.notes.patient_allergy.add_to_patient_allergy",
    args: {payload},
    freeze: false
  }).then(({message: message2}) => message2);
  var patientAllergyRemoveItem = (name) => api8({
    method: "clinical.api.notes.patient_allergy.remove_item_from_patient_allergy",
    args: {name}
  }).then(({message: message2}) => message2);
  var checkPatientAllergy = (patient) => api8({
    method: "clinical.api.notes.patient_allergy.check_if_exits",
    args: {patient}
  }).then(({message: message2}) => message2);
  var patientAllergySubmit = (name) => api8({
    method: "clinical.api.notes.patient_allergy.submit_patient_allergy",
    args: {name},
    freeze: false
  }).then(({message: message2}) => message2);
  var patientAllergyDelete = (name) => api8({
    method: "clinical.api.notes.patient_allergy.delete_patient_allergy",
    args: {name},
    freeze: false
  }).then(({message: message2}) => message2);

  // ../frontend/frontend/public/js/patient/components/notes/PatientAllergy.vue
  var __vue_script__19 = {
    name: "Patient Allergy",
    props: {
      patient: {
        default: "",
        type: String,
        required: true
      }
    },
    data() {
      return {
        values: [],
        fields: ["allergy_name", "status", "actions"],
        patientAllergy: null
      };
    },
    methods: {
      checkIfPatientAllergyExits() {
        checkPatientAllergy(this.patient).then((response) => {
          if (response) {
            this.patientAllergy = response.name;
            response.items.forEach((item) => {
              this.values.push({allergy_name: item.allergy_name, status: "Saved", id: item.name});
            });
          }
        });
      },
      submitPatientAllergy() {
        patientAllergySubmit({name: this.patientAllergy}).then((response) => {
          this.values = [];
        });
      },
      removeItem(data) {
        data = data.item;
        if (data) {
          patientAllergyRemoveItem(data.id).then((response) => {
            this.values = this.values.filter((item) => item.id != data.id);
          });
        }
      },
      showAddChargeDialog() {
        let context = this;
        let x = new frappe.ui.Dialog({
          title: "Add Allergy",
          fields: [
            {
              label: "Allergy",
              fieldname: "allergy_name",
              fieldtype: "Data",
              reqd: true
            }
          ],
          primary_action_label: "Add Item",
          primary_action: (values) => {
            const available = this.values.filter((item) => item.allergy_name == values.allergy_name);
            if (available.length) {
              this.makeToast(variant = "danger", message = "Item already in the list", title = "Error");
            } else {
              context.values.push(values);
              const singleAllergy = values;
              this.addItem({allergy_name: singleAllergy.allergy_name, patient_allergy: context.patientAllergy});
              x.hide();
              this.showAddChargeDialog();
            }
          },
          secondary_action_label: "Cancel",
          secondary_action: (values) => {
            x.hide();
          }
        });
        x.show();
      },
      callCreateAllergyApi() {
        let patientAllergy = {
          patient: this.patient,
          doctype: "Patient Allergy"
        };
        createPatientAllergy(patientAllergy).then((response) => {
          this.patientAllergy = response;
          this.makeToast();
          this.values = [];
          this.patientAllergy = response;
        });
      },
      makeToast(variant2 = "success") {
        this.$bvToast.toast("Allergy Saved", {
          title: `Success`,
          variant: variant2,
          solid: true
        });
      },
      createAllergy() {
        this.boxOne = "";
        this.$bvModal.msgBoxConfirm("Are you sure?").then((value2) => {
          if (value2) {
            this.callCreateAllergyApi();
          }
        }).catch((err) => {
        });
      },
      submitSheet() {
        this.boxOne = "";
        this.$bvModal.msgBoxConfirm("Are you sure?").then((value2) => {
          if (value2) {
            patientAllergySubmit(this.patientAllergy).then((response) => {
              this.patientAllergy = null;
              this.values = [];
            });
          }
        }).catch((err) => {
        });
      },
      deleteSheet() {
        this.boxOne = "";
        this.$bvModal.msgBoxConfirm("Are you sure?").then((value2) => {
          if (value2) {
            patientAllergyDelete(this.patientAllergy).then((response) => {
              this.patientAllergy = null;
              this.values = [];
            });
          }
        }).catch((err) => {
        });
      },
      addItem(payload) {
        patientAllergyAddItem(payload).then((res) => {
          this.makeToast("success", "Allergy added");
          let items = [];
          this.values.forEach((element, index) => {
            if (payload.allergy_name == element.allergy_name) {
              items.push({
                allergy_name: element.allergy_name,
                status: "Saved",
                id: res
              });
            } else {
              items.push(element);
            }
          });
          this.values = items;
        });
      }
    },
    mounted() {
      this.checkIfPatientAllergyExits();
    }
  };
  var __vue_render__19 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-container", [
        _c("b-row", [
          _vm._v("\n\n     Patient Allergy " + _vm._s(_vm.patientAllergy) + "    \n      "),
          _c("b-col"),
          _vm._v(" "),
          _vm.patientAllergy ? _c("b-button", {
            staticClass: "mr-2",
            attrs: {variant: "primary"},
            on: {
              click: function($event) {
                return _vm.showAddChargeDialog();
              }
            }
          }, [_vm._v("\n        Add\n      ")]) : _vm._e(),
          _vm._v(" "),
          _vm.patientAllergy ? _c("b-button", {
            staticClass: "ml-2",
            attrs: {variant: "danger"},
            on: {
              click: function($event) {
                return _vm.deleteSheet();
              }
            }
          }, [_vm._v("\n        Delete\n      ")]) : _vm._e(),
          _vm._v(" "),
          _vm.patientAllergy || this.values.length ? _c("div", {staticClass: "ml-2"}) : _c("b-button", {
            attrs: {variant: "primary"},
            on: {
              click: function($event) {
                return _vm.callCreateAllergyApi();
              }
            }
          }, [_vm._v("\n        Create \n      ")])
        ], 1),
        _vm._v(" "),
        _c("b-row", {staticStyle: {width: "100%"}}, [
          _c("b-table", {
            staticStyle: {width: "100%"},
            attrs: {
              responsive: "sm",
              bordered: "",
              striped: "",
              fields: _vm.fields,
              items: _vm.values,
              "empty-text": "No items ",
              "empty-filtered-text": "No items",
              "head-row-variant": "secondary",
              "show-empty": true
            },
            scopedSlots: _vm._u([
              {
                key: "cell(actions)",
                fn: function(data) {
                  return [
                    _c("b-button", {
                      attrs: {variant: "danger"},
                      on: {
                        click: function($event) {
                          return _vm.removeItem(data);
                        }
                      }
                    }, [_vm._v("\n            Remove\n          ")])
                  ];
                }
              },
              {
                key: "cell(status)",
                fn: function(data) {
                  return [
                    data.item && data.item.id ? _c("b-icon", {
                      attrs: {
                        disabled: "",
                        icon: "check-square",
                        scale: "2",
                        variant: "success"
                      }
                    }) : _c("b-button", {attrs: {variant: "primary"}}, [
                      _c("b-spinner", {
                        attrs: {small: "", type: "grow"}
                      }),
                      _vm._v("\n          Saving...\n        ")
                    ], 1)
                  ];
                }
              }
            ])
          })
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__19 = [];
  __vue_render__19._withStripped = true;
  var __vue_inject_styles__19 = function(inject) {
    if (!inject)
      return;
    inject("data-v-52431d05_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "PatientAllergy.vue"}, media: void 0});
  };
  var __vue_scope_id__19 = void 0;
  var __vue_module_identifier__19 = void 0;
  var __vue_is_functional_template__19 = false;
  function __vue_normalize__19(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <b-container>\n      <b-row>\n  \n       Patient Allergy {{patientAllergy}}    \n        <b-col></b-col>\n        <b-button variant="primary" class="mr-2" v-if="patientAllergy" @click="showAddChargeDialog()">\n          Add\n        </b-button>\n        \n\n        <b-button  v-if="patientAllergy" @click="deleteSheet()"\n         class="ml-2"\n          variant="danger"     \n        >\n          Delete\n        </b-button>\n        <div  v-if="patientAllergy || this.values.length"\n         class="ml-2"  \n        >\n        </div>\n\n         <b-button v-else  variant="primary"  @click="callCreateAllergyApi()">\n          Create \n        </b-button>\n\n\n      \n      </b-row>\n     \n      <b-row style="width: 100%">\n        <b-table\n          style="width: 100%"\n          responsive="sm"\n          bordered\n          striped\n          :fields="fields"\n          :items="values"\n          :empty-text="`No items `"\n          :empty-filtered-text="`No items`"\n          head-row-variant="secondary"\n          :show-empty="true"\n        >\n          <template #cell(actions)="data">\n            <b-button variant="danger" @click="removeItem(data)">\n              Remove\n            </b-button>\n          </template>\n\n            <template #cell(status)="data">   \n            <b-icon disabled v-if="data.item && data.item.id" icon="check-square" scale="2" variant="success"></b-icon>\n             <b-button v-else variant="primary" >\n            <b-spinner   small type="grow"></b-spinner>\n            Saving...\n          </b-button >\n          </template>\n        </b-table>\n      </b-row>\n    </b-container>\n  </div>\n</template>\n\n<script>\nimport {\n  createPatientAllergy,\n  patientAllergySubmit,\n  patientAllergyAddItem,\n  patientAllergyRemoveItem,\n  checkPatientAllergy,\n  patientAllergyDelete\n} from "./../../../services/patient_chart/patient_allergy.js";\n\nexport default {\n  name: "Patient Allergy",\n  props: {\n    patient: {\n      default: "",\n      type: String,\n      required: true,\n    },  \n  },\n \n  data() {\n    return {\n      values: [],\n      fields:["allergy_name","status", "actions"],\n      patientAllergy:null,\n    };\n  },\n  methods: {\n    checkIfPatientAllergyExits(){\n        checkPatientAllergy(this.patient).then(response=>{\n \n          if(response){\n             this.patientAllergy = response.name;\n          \n            response.items.forEach(item=>{\n                this.values.push({allergy_name: item.allergy_name, status: "Saved", id: item.name});\n            })     \n          }\n        })\n    },\n    submitPatientAllergy(){\n      patientAllergySubmit({name:this.patientAllergy}).then(response=>{\n        this.values = [];\n      })\n    },\n    removeItem(data) {\n      data = data.item;\n       if(data){\n         patientAllergyRemoveItem(data.id).then(response=>{\n        this.values = this.values.filter(\n              (item) => item.id != data.id\n            );\n      })\n    } \n    },\n    showAddChargeDialog() {\n      let context = this;\n      let x = new frappe.ui.Dialog({\n        title: "Add Allergy",\n        fields: [\n          {\n            label: "Allergy",\n            fieldname: "allergy_name",\n            fieldtype: "Data",\n            reqd: true,\n          },\n        ],\n        primary_action_label: "Add Item",\n        primary_action: (values) => {\n          const available = this.values.filter(item => item.allergy_name == values.allergy_name)\n          if(available.length ){ this.makeToast(variant=\'danger\', message="Item already in the list", title="Error")\n            \n          }else {\n                context.values.push(values);\n                const singleAllergy = values\n               \n                this.addItem({allergy_name: singleAllergy.allergy_name, patient_allergy: context.patientAllergy})\n             \n          x.hide();  \n          this.showAddChargeDialog();\n          }\n        },\n        secondary_action_label: "Cancel",\n        secondary_action: (values) => {\n          x.hide();\n        },\n      });\n      x.show();\n    },    \n    callCreateAllergyApi() {\n      let patientAllergy = {\n        patient: this.patient,\n        doctype: "Patient Allergy",\n      };\n      createPatientAllergy(patientAllergy).then((response) => {\n        this.patientAllergy = response;\n        this.makeToast();\n        this.values = [];\n        this.patientAllergy = response;\n      });\n    },\n    makeToast(variant = \'success\') {\n      this.$bvToast.toast("Allergy Saved", {\n        title: `Success`,\n        variant: variant,\n        solid: true,\n      });\n    },\n    createAllergy() {\n      this.boxOne = "";\n      this.$bvModal\n        .msgBoxConfirm("Are you sure?")\n        .then((value) => {\n          if (value) {\n            this.callCreateAllergyApi();\n          }\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n\n     submitSheet() {\n      this.boxOne = "";\n      this.$bvModal\n        .msgBoxConfirm("Are you sure?")\n        .then((value) => {\n          if (value) {\n           patientAllergySubmit(this.patientAllergy).then(response=>{\n             this.patientAllergy= null;\n             this.values=[]\n           });\n          }\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n\n     deleteSheet() {\n      this.boxOne = "";\n      this.$bvModal\n        .msgBoxConfirm("Are you sure?")\n        .then((value) => {\n          if (value) {\n           patientAllergyDelete(this.patientAllergy).then(response=>{\n             this.patientAllergy= null;\n             this.values=[]\n           });\n          }\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n \n    addItem(payload){\n      patientAllergyAddItem(payload).then( res =>{\n        this.makeToast("success","Allergy added" );\n         let items = [];\n         this.values.forEach((element, index) => {\n          if (payload.allergy_name== element.allergy_name) {\n  \n             items.push({\n              allergy_name: element.allergy_name,\n              status: "Saved",\n              id: res,\n            });\n\n          } else {\n            items.push(element);\n          }\n        });\n\n        this.values = items;\n\n      });\n    }\n  },\n  mounted() {\n     this.checkIfPatientAllergyExits();\n  },\n\n};\n</script>\n\n<style>\n</style>\n';
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
  var __vue_component__19 = /* @__PURE__ */ __vue_normalize__19({render: __vue_render__19, staticRenderFns: __vue_staticRenderFns__19}, __vue_inject_styles__19, __vue_script__19, __vue_scope_id__19, __vue_is_functional_template__19, __vue_module_identifier__19, false, __vue_create_injector__13, void 0, void 0);
  var PatientAllergy_default = __vue_component__19;

  // ../frontend/frontend/public/js/accounts/core/AccountsWorkingArea.vue
  var __vue_script__20 = {
    name: "AccountsWorkingArea",
    beforeRouteEnter: (to, from, next) => {
      next((vm) => {
        const {patientId} = vm.$root.$route.params;
        if (patientId) {
          next();
        } else
          next("/accounts-search");
      });
    },
    components: {
      SalesOrder: SalesOrder_default,
      Receipts: Receipts_default,
      Invoices: Invoices_default,
      InvoiceFInalization: InvoiceFInalization_default,
      Schemes: Schemes_default,
      Procedures: Procedures_default,
      SalesOrderAuth: SalesOrderAuth_default,
      Dashboard: Dashboard_default,
      TemplateBilling: TemplateBilling_default,
      ChargeSheet: ChargeSheet_default,
      PatientAllergy: PatientAllergy_default
    },
    props: {
      patientId: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        tab: 0
      };
    },
    computed: {
      salesOrderTotal() {
        return this.$store.getters["patientAccounts/salesOrderTotal"];
      },
      accountSummary() {
        return this.$store.getters["patientAccounts/accountSummary"];
      },
      patient() {
        return this.$store.getters["patientAccounts/patient"];
      }
    },
    created() {
      this.$store.registerModule("patientAccounts", accounts_default);
    },
    mounted() {
      this.getPatient();
      this.getPatientAccountSummary();
      this.getPatientSalesOrderTotals();
    },
    methods: {
      newPaymentEntry() {
        this.getPatientAccountSummary();
        this.getPatientSalesOrderTotals();
      },
      getPatientAccountSummary() {
        this.$store.dispatch("patientAccounts/fetchPatientAccountSummary", this.patientId);
      },
      getPatientSalesOrderTotals() {
        this.$store.dispatch("patientAccounts/fetchUnbilledSalesOrderTotals", this.patientId);
      },
      getPatient() {
        this.$store.dispatch("patientAccounts/fetchPatient", this.patientId);
      }
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value2) {
        return value2.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__20 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "area-background"}, [
      _c("div", {staticClass: "form-dashboard-section"}, [
        _c("b-row", [
          _c("b-col", [
            _c("div", {
              staticClass: "form-dashboard-section",
              staticStyle: {display: "block"}
            }, [
              _c("div", {staticClass: "section-head"}),
              _vm._v(" "),
              _c("div", {
                staticClass: "container",
                staticStyle: {"font-weight": "700"}
              }, [
                _c("div", {staticClass: "row"}, [
                  _c("div", {staticClass: "col-md-4"}, [
                    _c("span", {
                      staticStyle: {"text-transform": "capitalize"}
                    }, [_vm._v(_vm._s(_vm.patient.patient_name))])
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "col-md-4"}, [
                    _c("span", [_vm._v(_vm._s(_vm.patient.name))])
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "col-md-4"}, [
                    _c("span", [_vm._v(_vm._s(_vm.patient.customer))])
                  ])
                ]),
                _vm._v(" "),
                _c("div", {staticClass: "row"}, [
                  _c("div", {staticClass: "col-md-4"}, [
                    _c("span", [
                      _vm._v(_vm._s(_vm.patient.customer_group))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "col-md-4"}, [
                    _c("span", [_vm._v(_vm._s(_vm.patient.sex))])
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "col-md-4"}, [
                    _c("span", [_vm._v(_vm._s(_vm.patient.mobile))])
                  ])
                ]),
                _vm._v(" "),
                _c("hr", {
                  staticStyle: {
                    width: "100%",
                    "margin-left": "0",
                    "margin-top": "8px",
                    "margin-bottom": "8px"
                  }
                }),
                _vm._v(" "),
                _vm.accountSummary && _vm.accountSummary.length ? _c("div", {staticClass: "row"}, [
                  _c("div", {staticClass: "col-md-12"}, [
                    _vm._v("\n                                  Accounts Summary: Billed: " + _vm._s(_vm._f("numberWithCommas")(_vm.accountSummary[0].billing_this_year.toFixed(2))) + "\xA0\n                                  " + _vm._s(_vm.accountSummary[0].currency) + " \xA0|\xA0 \n                                  Unpaid: " + _vm._s(_vm._f("numberWithCommas")(_vm.accountSummary[0].total_unpaid.toFixed(2))) + "\xA0\n                                  " + _vm._s(_vm.accountSummary[0].currency) + " | Ordered\n                                "),
                    _vm.salesOrderTotal && _vm.salesOrderTotal.length && _vm.salesOrderTotal[0].length ? _c("span", [
                      _vm._v("\n                                  " + _vm._s(_vm._f("numberWithCommas")(_vm.salesOrderTotal[0][1].toFixed(2))) + " KES\n                                ")
                    ]) : _c("span", [
                      _vm._v("\n                                  0.00 KES\n                                ")
                    ])
                  ])
                ]) : _vm._e()
              ])
            ])
          ])
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-tabs", {
        staticClass: "custom-tabs",
        attrs: {"content-class": "note-tabs-content"},
        model: {
          value: _vm.tab,
          callback: function($$v) {
            _vm.tab = $$v;
          },
          expression: "tab"
        }
      }, [
        _c("b-tab", {attrs: {title: "Sales Orders"}}, [
          _vm.tab === 0 ? _c("SalesOrder", {
            attrs: {
              patient_number: _vm.patient.name,
              customerNumber: _vm.patient.customer,
              patientName: _vm.patient.patient_name
            },
            on: {newPaymentEntry: _vm.newPaymentEntry}
          }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Authorization"}}, [
          _vm.tab === 1 ? _c("SalesOrderAuth", {
            attrs: {patient_number: _vm.patientId}
          }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Sales Invoice"}}, [
          _vm.tab === 2 ? _c("Invoices", {attrs: {patient_number: _vm.patientId}}) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Payments"}}, [
          _vm.tab === 3 ? _c("Receipts", {
            attrs: {
              patient_number: _vm.patientId,
              customerNumber: _vm.patient.customer,
              patientName: _vm.patient.patient_name
            },
            on: {newPaymentEntry: _vm.newPaymentEntry}
          }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Schemes"}}, [
          _vm.tab === 4 ? _c("Schemes", {
            attrs: {
              patient_number: _vm.patientId,
              customerNumber: _vm.patient.customer
            }
          }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Procedures"}}, [
          _vm.tab === 5 ? _c("Procedures", {
            attrs: {
              patient_number: _vm.patientId,
              customerNumber: _vm.patient.customer
            }
          }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Payment Overview"}}, [
          _vm.tab === 6 ? _c("Dashboard", {
            attrs: {
              patient: _vm.patientId,
              customer: _vm.patient.customer
            }
          }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Bill template"}}, [
          _vm.tab === 7 ? _c("TemplateBilling", {
            attrs: {
              customerNumber: _vm.patient.customer,
              patient_number: _vm.patientId
            }
          }) : _vm._e()
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Charge Sheet"}}, [
          _vm.tab === 8 ? _c("PatientAllergy", {
            staticClass: "mt-4",
            attrs: {patient: _vm.patientId}
          }) : _vm._e()
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__20 = [];
  __vue_render__20._withStripped = true;
  var __vue_inject_styles__20 = function(inject) {
    if (!inject)
      return;
    inject("data-v-97dd215c_0", {source: "\n.area-background[data-v-97dd215c] {\n    margin-top: 16px;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/accounts/core/AccountsWorkingArea.vue"], "names": [], "mappings": ";AAgMA;IACA,gBAAA;IACA,4BAAA;IACA,6BAAA;AACA", "file": "AccountsWorkingArea.vue", "sourcesContent": [`<template>
    <b-container class="area-background">
        <div class="form-dashboard-section">
            <b-row>
                <b-col>
                    <div class="form-dashboard-section" style="display: block;">
                        <div class="section-head">
                        </div>
                        <div class="container" style="font-weight:700;">
                            <!-- <p>{{ patient }}</p> -->
                            <div class="row">
                                <div class="col-md-4"><span style="text-transform: capitalize;">{{patient.patient_name}}</span></div>
                                <div class="col-md-4"><span>{{patient.name}}</span></div>
                                <div class="col-md-4"><span>{{patient.customer}}</span></div>
                            </div>
                            <div class="row">
                                <div class="col-md-4"><span>{{patient.customer_group}}</span></div>
                                <div class="col-md-4"><span>{{patient.sex}}</span></div>
                                <div class="col-md-4"><span>{{patient.mobile}}</span></div>
                            </div>
                            <hr style="width:100%;margin-left:0;margin-top:8px;margin-bottom:8px;">
                            <div class="row" v-if="accountSummary && accountSummary.length">
                                <div class="col-md-12">
                                      Accounts Summary: Billed: {{ accountSummary[0].billing_this_year.toFixed(2) | numberWithCommas }}&nbsp;
                                      {{ accountSummary[0].currency }} &nbsp;|&nbsp; 
                                      Unpaid: {{ accountSummary[0].total_unpaid.toFixed(2) | numberWithCommas }}&nbsp;
                                      {{ accountSummary[0].currency }} | Ordered
                                    <span v-if="salesOrderTotal && salesOrderTotal.length && salesOrderTotal[0].length">
                                      {{ salesOrderTotal[0][1].toFixed(2) | numberWithCommas  }} KES
                                    </span>
                                    <span v-else>
                                      0.00 KES
                                    </span>
                                </div>
                            </div>
                            <!-- <div style="display: flex; justify-content: flex-end">
                                            <b-button-group>
                                                <b-button variant="primary" class="mr-2">Accounting Ledger</b-button>
                                                <b-button variant="primary" class="ml-2">Accounts Receivable</b-button>
                                            </b-button-group>
                                        </div> -->
                        </div>
                    </div>
                </b-col>
                <!-- <b-col md="3">
                               
                            </b-col> -->
            </b-row>
        </div>
        <b-tabs v-model="tab"  content-class="note-tabs-content" class="custom-tabs">

            
            <b-tab title="Sales Orders">
                <SalesOrder  v-if="tab === 0" :patient_number="patient.name" :customerNumber="patient.customer" :patientName="patient.patient_name" @newPaymentEntry="newPaymentEntry" />
            </b-tab>
            <b-tab title="Authorization">
            <SalesOrderAuth v-if="tab === 1" :patient_number="patientId"/>
            </b-tab>
            <b-tab title="Sales Invoice">
                <Invoices  v-if="tab === 2" :patient_number="patientId" />
            </b-tab>

            <!-- <b-tab title="Invoice Finalization">
                <InvoiceFInalization  v-if="tab === 2"  :patientName="patient.name" :customerName="patient.customer"/>
            </b-tab> -->
            <b-tab title="Payments">
                <Receipts v-if="tab === 3" :patient_number="patientId" :customerNumber="patient.customer" :patientName="patient.patient_name" @newPaymentEntry="newPaymentEntry" />
            </b-tab>
            <b-tab title="Schemes">
                <Schemes v-if="tab === 4" :patient_number="patientId" :customerNumber="patient.customer"  />
            </b-tab>
             <b-tab title="Procedures">
                <Procedures v-if="tab === 5" :patient_number="patientId" :customerNumber="patient.customer"  />
            </b-tab>
             <b-tab title="Payment Overview">
                <Dashboard v-if="tab === 6" :patient="patientId" :customer="patient.customer"  />
            </b-tab>
            <b-tab title="Bill template">
                <TemplateBilling  v-if="tab === 7" :customerNumber="patient.customer" :patient_number="patientId"   />
            </b-tab>

             <b-tab title="Charge Sheet"> 
                <PatientAllergy class="mt-4" v-if="tab === 8"  :patient="patientId" />
            </b-tab>
  
        </b-tabs>
    </b-container>
</template>

<script>
import patientAccountModule from '../../state/accounts';

import SalesOrder from '../accounts/SalesOrder.vue'
import Receipts from '../accounts/Receipts.vue'
import Invoices from '../accounts/Invoices.vue'
import InvoiceFInalization from '../accounts/InvoiceFInalization.vue'
import Schemes from '../accounts/Schemes.vue'
import Procedures from '../patient/Procedures.vue'
import SalesOrderAuth from '../accounts/SalesOrderAuth.vue'
import Dashboard from '../accounts/Dashboard.vue'
import TemplateBilling from "../accounts/TemplateBilling.vue"
import ChargeSheet from "../../patient/components/order_tabs/ChargeSheet.vue"
import PatientAllergy from "../../patient/components/notes/PatientAllergy.vue"


export default {
    name: "AccountsWorkingArea",
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            const { patientId } = vm.$root.$route.params;
            if (patientId) {
                next();
            } else next('/accounts-search');
        });
    },
    components: {
        SalesOrder,
        Receipts,
        Invoices,
        InvoiceFInalization,
        Schemes,
        Procedures,
        SalesOrderAuth,Dashboard,
        TemplateBilling,
        ChargeSheet,
        PatientAllergy,
    },
    props: {
        patientId: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            tab: 0
        }
    },
    computed: {
        salesOrderTotal() {
            return this.$store.getters['patientAccounts/salesOrderTotal']
        },
        accountSummary() {
            return this.$store.getters['patientAccounts/accountSummary']
        },
        patient() {
            return this.$store.getters['patientAccounts/patient']
        }
    },
    created() {
        this.$store.registerModule('patientAccounts', patientAccountModule);
    },
    mounted() {
        this.getPatient();
        this.getPatientAccountSummary();
        this.getPatientSalesOrderTotals();
    },
    methods: {
        newPaymentEntry(){
            this.getPatientAccountSummary();
            this.getPatientSalesOrderTotals();
        },
        getPatientAccountSummary() {
            this.$store.dispatch("patientAccounts/fetchPatientAccountSummary", this.patientId);
        },
        getPatientSalesOrderTotals() {
            this.$store.dispatch("patientAccounts/fetchUnbilledSalesOrderTotals", this.patientId);
        },
        getPatient() {
            this.$store.dispatch("patientAccounts/fetchPatient", this.patientId);
        }
    },
    filters: {
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
};
</script>

<style scoped>
.area-background {
    margin-top: 16px;
    padding-left: 0px !important;
    padding-right: 0px !important;
}
</style>

<style lang="less" scoped>
.custom-tabs {
    .card-header {
        background-color: #fff;
        ul {
            li {
                margin: 2px;
                display: flex;
                flex-direction: column;
                flex: 1 0;
            }
        }
    }
    .card-footer {
        min-height: 60px;
    }
}
</style>
`]}, media: void 0}), inject("data-v-97dd215c_1", {source: ".custom-tabs .card-header[data-v-97dd215c] {\n  background-color: #fff;\n}\n.custom-tabs .card-header ul li[data-v-97dd215c] {\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n}\n.custom-tabs .card-footer[data-v-97dd215c] {\n  min-height: 60px;\n}\n", map: {"version": 3, "sources": ["AccountsWorkingArea.vue"], "names": [], "mappings": "AAAA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB", "file": "AccountsWorkingArea.vue", "sourcesContent": [".custom-tabs .card-header {\n  background-color: #fff;\n}\n.custom-tabs .card-header ul li {\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n}\n.custom-tabs .card-footer {\n  min-height: 60px;\n}\n"]}, media: void 0});
  };
  var __vue_scope_id__20 = "data-v-97dd215c";
  var __vue_module_identifier__20 = void 0;
  var __vue_is_functional_template__20 = false;
  function __vue_normalize__20(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <b-container class="area-background">
        <div class="form-dashboard-section">
            <b-row>
                <b-col>
                    <div class="form-dashboard-section" style="display: block;">
                        <div class="section-head">
                        </div>
                        <div class="container" style="font-weight:700;">
                            <!-- <p>{{ patient }}</p> -->
                            <div class="row">
                                <div class="col-md-4"><span style="text-transform: capitalize;">{{patient.patient_name}}</span></div>
                                <div class="col-md-4"><span>{{patient.name}}</span></div>
                                <div class="col-md-4"><span>{{patient.customer}}</span></div>
                            </div>
                            <div class="row">
                                <div class="col-md-4"><span>{{patient.customer_group}}</span></div>
                                <div class="col-md-4"><span>{{patient.sex}}</span></div>
                                <div class="col-md-4"><span>{{patient.mobile}}</span></div>
                            </div>
                            <hr style="width:100%;margin-left:0;margin-top:8px;margin-bottom:8px;">
                            <div class="row" v-if="accountSummary && accountSummary.length">
                                <div class="col-md-12">
                                      Accounts Summary: Billed: {{ accountSummary[0].billing_this_year.toFixed(2) | numberWithCommas }}&nbsp;
                                      {{ accountSummary[0].currency }} &nbsp;|&nbsp; 
                                      Unpaid: {{ accountSummary[0].total_unpaid.toFixed(2) | numberWithCommas }}&nbsp;
                                      {{ accountSummary[0].currency }} | Ordered
                                    <span v-if="salesOrderTotal && salesOrderTotal.length && salesOrderTotal[0].length">
                                      {{ salesOrderTotal[0][1].toFixed(2) | numberWithCommas  }} KES
                                    </span>
                                    <span v-else>
                                      0.00 KES
                                    </span>
                                </div>
                            </div>
                            <!-- <div style="display: flex; justify-content: flex-end">
                                            <b-button-group>
                                                <b-button variant="primary" class="mr-2">Accounting Ledger</b-button>
                                                <b-button variant="primary" class="ml-2">Accounts Receivable</b-button>
                                            </b-button-group>
                                        </div> -->
                        </div>
                    </div>
                </b-col>
                <!-- <b-col md="3">
                               
                            </b-col> -->
            </b-row>
        </div>
        <b-tabs v-model="tab"  content-class="note-tabs-content" class="custom-tabs">

            
            <b-tab title="Sales Orders">
                <SalesOrder  v-if="tab === 0" :patient_number="patient.name" :customerNumber="patient.customer" :patientName="patient.patient_name" @newPaymentEntry="newPaymentEntry" />
            </b-tab>
            <b-tab title="Authorization">
            <SalesOrderAuth v-if="tab === 1" :patient_number="patientId"/>
            </b-tab>
            <b-tab title="Sales Invoice">
                <Invoices  v-if="tab === 2" :patient_number="patientId" />
            </b-tab>

            <!-- <b-tab title="Invoice Finalization">
                <InvoiceFInalization  v-if="tab === 2"  :patientName="patient.name" :customerName="patient.customer"/>
            </b-tab> -->
            <b-tab title="Payments">
                <Receipts v-if="tab === 3" :patient_number="patientId" :customerNumber="patient.customer" :patientName="patient.patient_name" @newPaymentEntry="newPaymentEntry" />
            </b-tab>
            <b-tab title="Schemes">
                <Schemes v-if="tab === 4" :patient_number="patientId" :customerNumber="patient.customer"  />
            </b-tab>
             <b-tab title="Procedures">
                <Procedures v-if="tab === 5" :patient_number="patientId" :customerNumber="patient.customer"  />
            </b-tab>
             <b-tab title="Payment Overview">
                <Dashboard v-if="tab === 6" :patient="patientId" :customer="patient.customer"  />
            </b-tab>
            <b-tab title="Bill template">
                <TemplateBilling  v-if="tab === 7" :customerNumber="patient.customer" :patient_number="patientId"   />
            </b-tab>

             <b-tab title="Charge Sheet"> 
                <PatientAllergy class="mt-4" v-if="tab === 8"  :patient="patientId" />
            </b-tab>
  
        </b-tabs>
    </b-container>
</template>

<script>
import patientAccountModule from '../../state/accounts';

import SalesOrder from '../accounts/SalesOrder.vue'
import Receipts from '../accounts/Receipts.vue'
import Invoices from '../accounts/Invoices.vue'
import InvoiceFInalization from '../accounts/InvoiceFInalization.vue'
import Schemes from '../accounts/Schemes.vue'
import Procedures from '../patient/Procedures.vue'
import SalesOrderAuth from '../accounts/SalesOrderAuth.vue'
import Dashboard from '../accounts/Dashboard.vue'
import TemplateBilling from "../accounts/TemplateBilling.vue"
import ChargeSheet from "../../patient/components/order_tabs/ChargeSheet.vue"
import PatientAllergy from "../../patient/components/notes/PatientAllergy.vue"


export default {
    name: "AccountsWorkingArea",
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            const { patientId } = vm.$root.$route.params;
            if (patientId) {
                next();
            } else next('/accounts-search');
        });
    },
    components: {
        SalesOrder,
        Receipts,
        Invoices,
        InvoiceFInalization,
        Schemes,
        Procedures,
        SalesOrderAuth,Dashboard,
        TemplateBilling,
        ChargeSheet,
        PatientAllergy,
    },
    props: {
        patientId: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            tab: 0
        }
    },
    computed: {
        salesOrderTotal() {
            return this.$store.getters['patientAccounts/salesOrderTotal']
        },
        accountSummary() {
            return this.$store.getters['patientAccounts/accountSummary']
        },
        patient() {
            return this.$store.getters['patientAccounts/patient']
        }
    },
    created() {
        this.$store.registerModule('patientAccounts', patientAccountModule);
    },
    mounted() {
        this.getPatient();
        this.getPatientAccountSummary();
        this.getPatientSalesOrderTotals();
    },
    methods: {
        newPaymentEntry(){
            this.getPatientAccountSummary();
            this.getPatientSalesOrderTotals();
        },
        getPatientAccountSummary() {
            this.$store.dispatch("patientAccounts/fetchPatientAccountSummary", this.patientId);
        },
        getPatientSalesOrderTotals() {
            this.$store.dispatch("patientAccounts/fetchUnbilledSalesOrderTotals", this.patientId);
        },
        getPatient() {
            this.$store.dispatch("patientAccounts/fetchPatient", this.patientId);
        }
    },
    filters: {
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
        },
        Upper(value) {
            return value.toUpperCase();
        },
        numberWithCommas(x) {
            if (x) {
                return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
            }
            return 0;
        }
    }
};
</script>

<style scoped>
.area-background {
    margin-top: 16px;
    padding-left: 0px !important;
    padding-right: 0px !important;
}
</style>

<style lang="less" scoped>
.custom-tabs {
    .card-header {
        background-color: #fff;
        ul {
            li {
                margin: 2px;
                display: flex;
                flex-direction: column;
                flex: 1 0;
            }
        }
    }
    .card-footer {
        min-height: 60px;
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
  var __vue_component__20 = /* @__PURE__ */ __vue_normalize__20({render: __vue_render__20, staticRenderFns: __vue_staticRenderFns__20}, __vue_inject_styles__20, __vue_script__20, __vue_scope_id__20, __vue_is_functional_template__20, __vue_module_identifier__20, false, __vue_create_injector__14, void 0, void 0);
  var AccountsWorkingArea_default = __vue_component__20;

  // ../frontend/frontend/public/js/accounts/core/TopHeader.vue
  var __vue_script__21 = {
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
  var __vue_render__21 = function() {
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
              attrs: {src: "/assets/mtrh_dev/images/logo.jpeg"}
            })
          ]),
          _vm._v(" "),
          _c("ul", {
            staticClass: "nav navbar-nav d-none d-sm-flex",
            attrs: {id: "navbar-breadcrumbs"}
          }, [
            _c("li", [
              _c("a", {attrs: {href: "/app/accounts", target: "_blank"}}, [_vm._v("Accounts Workspace")])
            ]),
            _vm._v(" "),
            _vm._l(_vm.paths, function(path) {
              return _c("li", {key: path}, [
                _c("a", {attrs: {href: "/app/accounts", target: "_blank"}}, [_vm._v(_vm._s(path))])
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
  var __vue_staticRenderFns__21 = [];
  __vue_render__21._withStripped = true;
  var __vue_inject_styles__21 = function(inject) {
    if (!inject)
      return;
    inject("data-v-baf23194_0", {source: "\n#page-patient-chart {\n  height: 100vh;\n}\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/accounts/core/TopHeader.vue"], "names": [], "mappings": ";AA8dA;EACA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,iBAAA;EACA,SAAA;AACA", "file": "TopHeader.vue", "sourcesContent": ['<template>\n  <div>\n    <header class="navbar navbar-expand sticky-top" role="navigation">\n      <b-container>\n        <a\n          class="navbar-brand navbar-home pull-left"\n          href="/app"\n          target="_blank"\n        >\n          <!-- <img\n            class="app-logo"\n            style="width: 24px"\n            src="https://pbs.twimg.com/profile_images/987064489081262081/Wizy1vXs.jpg"\n          /> -->\n           <img\n              class="app-logo"\n              style="width: 24px" \n              src="/assets/mtrh_dev/images/logo.jpeg"\n            />\n        </a>\n        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">\n          <li>\n            <a href="/app/accounts" target="_blank">Accounts Workspace</a>\n          </li>\n           <li v-for="path in paths" :key="path">\n            <a href="/app/accounts" target="_blank">{{path}}</a>\n          </li>\n        </ul>\n        <div class="collapse navbar-collapse justify-content-end hidden">\n          <form\n            class="form-inline fill-width justify-content-end"\n            role="search"\n            onsubmit="return false;"\n          >\n            <div class="input-group search-bar text-muted hidden">\n              <div class="awesomplete">\n                <input\n                  id="navbar-search"\n                  type="text"\n                  class="form-control"\n                  placeholder="Search or type a command (Ctrl + G)"\n                  aria-haspopup="true"\n                  autocomplete="off"\n                  aria-expanded="false"\n                  aria-owns="awesomplete_list_1"\n                  role="combobox"\n                  aria-activedescendant="awesomplete_list_1_item_0"\n                />\n                <ul role="listbox" id="awesomplete_list_1" hidden="">\n                  <li aria-selected="true">\n                    <a style="font-weight: normal"\n                      ><span>\n                        <span class="flex justify-between text-medium">\n                          <span class="ellipsis"\n                            >Search for <b>Patient C</b></span\n                          >\n                          <kbd>\u21B5</kbd>\n                        </span>\n                      </span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Open <mark>Patient C</mark>hart</span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New <mark>P</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Help on Search</span></a\n                    >\n                  </li>\n                </ul>\n                <span\n                  class="visually-hidden"\n                  role="status"\n                  aria-live="assertive"\n                  aria-atomic="true"\n                  hidden=""\n                  >9 results found</span\n                >\n              </div>\n              <span class="search-icon">\n                <svg class="icon icon-sm">\n                  <use xlink:href="#icon-search"></use>\n                </svg>\n              </span>\n            </div>\n          </form>\n          <ul class="navbar-nav">\n            <li\n              class="nav-item dropdown dropdown-notifications dropdown-mobile"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n                title=""\n                data-original-title="Notifications"\n              >\n                <div>\n                  <span class="notifications-seen">\n                    <svg class="icon icon-md">\n                      <use href="#icon-notification"></use>\n                    </svg>\n                  </span>\n                  <b-badge  v-if="notificationList.length>0"  class="notification-badge" variant="danger">{{\n                    notificationList.length\n                  }}</b-badge>\n                </div>\n\n                <span class="notifications-unseen">\n                  <svg class="icon icon-md">\n                    <use href="#icon-notification-with-indicator"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu notifications-list dropdown-menu-right"\n                role="menu"\n              >\n                <div class="notification-list-header">\n                  <div class="header-items">\n                    <ul\n                      class="notification-item-tabs nav nav-tabs"\n                      role="tablist"\n                    >\n                      <li\n                        class="notifications-category"\n                        id="notifications"\n                        data-toggle="collapse"\n                      >\n                        Notifications\n                      </li>\n                    </ul>\n                  </div>\n                  <div class="header-actions">\n                    <span v-if="notificationList.length >0"\n                      class="mark-all-read pull-right"\n                      data-action="mark_all_as_read"\n                      title=""\n                      data-original-title="Mark all as read"\n                      @click="clearNotification()"\n                    >\n                      <svg class="icon icon-sm" style="">\n                        <use class="" href="#icon-mark-as-read"></use>\n                      </svg>\n                    </span>\n                  </div>\n                </div>\n                <div class="notification-list-body">\n                  <div class="panel-notifications">\n                    <div style="display: block">\n                      <a\n                        v-for="notification in notificationList"\n                        :key="notification.name"\n                        class="recent-item notification-item unread"\n                        href="javascript:function() { return false; }"\n\n                        data-name="0a283f5b8f"\n                        @click="clearNotification(notification.name)"\n                      >\n                        <div class="notification-body">\n                          <span\n                            class="avatar avatar-medium user-avatar"\n                            title="Philip Ademba"\n                          >\n                            <div\n                              class="avatar-frame standard-image"\n                              style="\n                                background-color: var(--pink-avatar-bg);\n                                color: var(--pink-avatar-color);\n                              "\n                            >\n                              <i\n                                class="fa fa-comments-o"\n                                aria-hidden="true"\n                              ></i>\n                            </div>\n                          </span>\n                          <div class="message">\n                            <div>\n                              <b class="subject-title"\n                                >{{ notification.title }} :</b\n                              >\n                              {{ notification.message }}\n                            </div>\n                            <div class="notification-timestamp text-muted">\n                              <span\n                                class="frappe-timestamp"\n                                data-timestamp="2021-04-14 11:50:27.887714"\n                                title="14-04-2021 11:50:27"\n                                >53 minutes ago</span\n                              >\n                            </div>\n                          </div>\n                        </div>\n                        <div\n                          class="mark-as-read"\n                          title=""\n                          data-original-title="Mark as Read"\n                        ></div>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="panel-events">\n                    <div v-if="notificationList.length<1" >\n                      <div class="notification-null-state">\n                        <div class="text-center">\n                          <img\n                            src="/assets/frappe/images/ui-states/event-empty-state.svg"\n                            alt="Generic Empty State"\n                            class="null-state"\n                          />\n                          <div class="title">No notifications</div>\n                          <div class="subtitle">\n                           All your notifications will be listed here\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li\n              class="nav-item dropdown dropdown-message dropdown-mobile hidden"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n              >\n                <span>\n                  <svg class="icon icon-md">\n                    <use href="#icon-small-message"></use>\n                  </svg>\n                </span>\n              </a>\n            </li>\n            <li class="vertical-bar d-none d-sm-block"></li>\n            <li\n              class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block"\n            >\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                Help\n                <span>\n                  <svg class="icon icon-xs">\n                    <use href="#icon-small-down"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-help"\n                role="menu"\n              >\n                <div id="help-links"></div>\n                <div\n                  class="dropdown-divider documentation-links"\n                  style="display: none"\n                ></div>\n                <a\n                  class="dropdown-item"\n                  href="https://erpnext.com/docs/user/manual"\n                >\n                  Go back to Home page\n                </a>\n                <a class="dropdown-item" href="https://discuss.erpnext.com">\n                  Raise a support ticket\n                </a>\n                <a\n                  class="dropdown-item"\n                  href="https://github.com/frappe/erpnext/issues"\n                >\n                  Report an Issue\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_about()"\n                >\n                  About\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_shortcuts(event)"\n                >\n                  Step by step tutorial\n                </a>\n              </div>\n            </li>\n            <li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                <span class="avatar avatar-medium" title="Health practioner">\n                  <div\n                    class="avatar-frame standard-image"\n                    style="\n                      background-color: var(--dark-green-avatar-bg);\n                      color: var(--dark-green-avatar-color);\n                    "\n                  >\n                    <i class="fa fa-user-md" aria-hidden="true"></i>\n                  </div>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-user"\n                role="menu"\n              >\n                <a class="dropdown-item" href="/app/user-profile">\n                  My Profile\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.route_to_user()"\n                >\n                  My Settings\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.setup_session_defaults()"\n                >\n                  Session Defaults\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.clear_cache()"\n                >\n                  Reload\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.view_website()"\n                >\n                  View Website\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.toggle_full_width()"\n                >\n                  Toggle Full Width\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return new frappe.ui.ThemeSwitcher().show()"\n                >\n                  Toggle Theme\n                </a>\n                <a class="dropdown-item" href="/app/background_jobs">\n                  Background Jobs\n                </a>\n                <div class="dropdown-divider"></div>\n                <a class="dropdown-item" onclick="return frappe.app.logout()">\n                  Logout\n                </a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </b-container>\n    </header>\n  </div>\n</template>\n\n<script>\n// import notificationModule from "./../../state/notification/moduleNotification.js";\nexport default {\n  name: "TopHeader",\n  data() {\n    return {\n      notificationList:[],\n      paths:[]\n    };\n  },\n  // computed: {\n  //   notificationListd() {\n  //     return  [];\n  //   },\n  // },\n  watch: {\n    $route(val) {\n    \n     const fullPath = val.fullPath;\n     this.paths = fullPath.split("/").filter(item => item&& item.length >0);\n      \n    },\n  },\n  created() {},\n  mounted() {\n    const user = frappe.session.user;\n    this.getNotifications(user);\n  },\n  \n  methods: {\n    getNotifications(user) {\n      const payload = { ref: user };\n      // this.$store.dispatch("notification/fetchNotifications", payload);\n    },\n\n    clearNotification(name) {\n      const payload = { name, user: frappe.session.user };\n      // this.$store.dispatch("notification/clearNotification", payload);\n    },\n\n  },\n};\n</script>\n<style>\n#page-patient-chart {\n  height: 100vh;\n}\n\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__21 = void 0;
  var __vue_module_identifier__21 = void 0;
  var __vue_is_functional_template__21 = false;
  function __vue_normalize__21(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = '<template>\n  <div>\n    <header class="navbar navbar-expand sticky-top" role="navigation">\n      <b-container>\n        <a\n          class="navbar-brand navbar-home pull-left"\n          href="/app"\n          target="_blank"\n        >\n          <!-- <img\n            class="app-logo"\n            style="width: 24px"\n            src="https://pbs.twimg.com/profile_images/987064489081262081/Wizy1vXs.jpg"\n          /> -->\n           <img\n              class="app-logo"\n              style="width: 24px" \n              src="/assets/mtrh_dev/images/logo.jpeg"\n            />\n        </a>\n        <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">\n          <li>\n            <a href="/app/accounts" target="_blank">Accounts Workspace</a>\n          </li>\n           <li v-for="path in paths" :key="path">\n            <a href="/app/accounts" target="_blank">{{path}}</a>\n          </li>\n        </ul>\n        <div class="collapse navbar-collapse justify-content-end hidden">\n          <form\n            class="form-inline fill-width justify-content-end"\n            role="search"\n            onsubmit="return false;"\n          >\n            <div class="input-group search-bar text-muted hidden">\n              <div class="awesomplete">\n                <input\n                  id="navbar-search"\n                  type="text"\n                  class="form-control"\n                  placeholder="Search or type a command (Ctrl + G)"\n                  aria-haspopup="true"\n                  autocomplete="off"\n                  aria-expanded="false"\n                  aria-owns="awesomplete_list_1"\n                  role="combobox"\n                  aria-activedescendant="awesomplete_list_1_item_0"\n                />\n                <ul role="listbox" id="awesomplete_list_1" hidden="">\n                  <li aria-selected="true">\n                    <a style="font-weight: normal"\n                      ><span>\n                        <span class="flex justify-between text-medium">\n                          <span class="ellipsis"\n                            >Search for <b>Patient C</b></span\n                          >\n                          <kbd>\u21B5</kbd>\n                        </span>\n                      </span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Open <mark>Patient C</mark>hart</span></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        ><mark>P</mark><mark>a</mark><mark>t</mark><mark>i</mark\n                        ><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New <mark>P</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>En<mark>c</mark>ounter</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord List</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord Report</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span\n                        >New In<mark>p</mark><mark>a</mark><mark>t</mark\n                        ><mark>i</mark><mark>e</mark><mark>n</mark><mark>t</mark\n                        ><mark> </mark>Re<mark>c</mark>ord</span\n                      ></a\n                    >\n                  </li>\n                  <li>\n                    <a style="font-weight: normal"\n                      ><span>Help on Search</span></a\n                    >\n                  </li>\n                </ul>\n                <span\n                  class="visually-hidden"\n                  role="status"\n                  aria-live="assertive"\n                  aria-atomic="true"\n                  hidden=""\n                  >9 results found</span\n                >\n              </div>\n              <span class="search-icon">\n                <svg class="icon icon-sm">\n                  <use xlink:href="#icon-search"></use>\n                </svg>\n              </span>\n            </div>\n          </form>\n          <ul class="navbar-nav">\n            <li\n              class="nav-item dropdown dropdown-notifications dropdown-mobile"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n                title=""\n                data-original-title="Notifications"\n              >\n                <div>\n                  <span class="notifications-seen">\n                    <svg class="icon icon-md">\n                      <use href="#icon-notification"></use>\n                    </svg>\n                  </span>\n                  <b-badge  v-if="notificationList.length>0"  class="notification-badge" variant="danger">{{\n                    notificationList.length\n                  }}</b-badge>\n                </div>\n\n                <span class="notifications-unseen">\n                  <svg class="icon icon-md">\n                    <use href="#icon-notification-with-indicator"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu notifications-list dropdown-menu-right"\n                role="menu"\n              >\n                <div class="notification-list-header">\n                  <div class="header-items">\n                    <ul\n                      class="notification-item-tabs nav nav-tabs"\n                      role="tablist"\n                    >\n                      <li\n                        class="notifications-category"\n                        id="notifications"\n                        data-toggle="collapse"\n                      >\n                        Notifications\n                      </li>\n                    </ul>\n                  </div>\n                  <div class="header-actions">\n                    <span v-if="notificationList.length >0"\n                      class="mark-all-read pull-right"\n                      data-action="mark_all_as_read"\n                      title=""\n                      data-original-title="Mark all as read"\n                      @click="clearNotification()"\n                    >\n                      <svg class="icon icon-sm" style="">\n                        <use class="" href="#icon-mark-as-read"></use>\n                      </svg>\n                    </span>\n                  </div>\n                </div>\n                <div class="notification-list-body">\n                  <div class="panel-notifications">\n                    <div style="display: block">\n                      <a\n                        v-for="notification in notificationList"\n                        :key="notification.name"\n                        class="recent-item notification-item unread"\n                        href="javascript:function() { return false; }"\n\n                        data-name="0a283f5b8f"\n                        @click="clearNotification(notification.name)"\n                      >\n                        <div class="notification-body">\n                          <span\n                            class="avatar avatar-medium user-avatar"\n                            title="Philip Ademba"\n                          >\n                            <div\n                              class="avatar-frame standard-image"\n                              style="\n                                background-color: var(--pink-avatar-bg);\n                                color: var(--pink-avatar-color);\n                              "\n                            >\n                              <i\n                                class="fa fa-comments-o"\n                                aria-hidden="true"\n                              ></i>\n                            </div>\n                          </span>\n                          <div class="message">\n                            <div>\n                              <b class="subject-title"\n                                >{{ notification.title }} :</b\n                              >\n                              {{ notification.message }}\n                            </div>\n                            <div class="notification-timestamp text-muted">\n                              <span\n                                class="frappe-timestamp"\n                                data-timestamp="2021-04-14 11:50:27.887714"\n                                title="14-04-2021 11:50:27"\n                                >53 minutes ago</span\n                              >\n                            </div>\n                          </div>\n                        </div>\n                        <div\n                          class="mark-as-read"\n                          title=""\n                          data-original-title="Mark as Read"\n                        ></div>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="panel-events">\n                    <div v-if="notificationList.length<1" >\n                      <div class="notification-null-state">\n                        <div class="text-center">\n                          <img\n                            src="/assets/frappe/images/ui-states/event-empty-state.svg"\n                            alt="Generic Empty State"\n                            class="null-state"\n                          />\n                          <div class="title">No notifications</div>\n                          <div class="subtitle">\n                           All your notifications will be listed here\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li\n              class="nav-item dropdown dropdown-message dropdown-mobile hidden"\n            >\n              <a\n                class="nav-link notifications-icon text-muted"\n                data-toggle="dropdown"\n                aria-haspopup="true"\n                aria-expanded="true"\n                href="#"\n                onclick="return false;"\n              >\n                <span>\n                  <svg class="icon icon-md">\n                    <use href="#icon-small-message"></use>\n                  </svg>\n                </span>\n              </a>\n            </li>\n            <li class="vertical-bar d-none d-sm-block"></li>\n            <li\n              class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block"\n            >\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                Help\n                <span>\n                  <svg class="icon icon-xs">\n                    <use href="#icon-small-down"></use>\n                  </svg>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-help"\n                role="menu"\n              >\n                <div id="help-links"></div>\n                <div\n                  class="dropdown-divider documentation-links"\n                  style="display: none"\n                ></div>\n                <a\n                  class="dropdown-item"\n                  href="https://erpnext.com/docs/user/manual"\n                >\n                  Go back to Home page\n                </a>\n                <a class="dropdown-item" href="https://discuss.erpnext.com">\n                  Raise a support ticket\n                </a>\n                <a\n                  class="dropdown-item"\n                  href="https://github.com/frappe/erpnext/issues"\n                >\n                  Report an Issue\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_about()"\n                >\n                  About\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.show_shortcuts(event)"\n                >\n                  Step by step tutorial\n                </a>\n              </div>\n            </li>\n            <li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">\n              <a\n                class="nav-link"\n                data-toggle="dropdown"\n                href="#"\n                onclick="return false;"\n              >\n                <span class="avatar avatar-medium" title="Health practioner">\n                  <div\n                    class="avatar-frame standard-image"\n                    style="\n                      background-color: var(--dark-green-avatar-bg);\n                      color: var(--dark-green-avatar-color);\n                    "\n                  >\n                    <i class="fa fa-user-md" aria-hidden="true"></i>\n                  </div>\n                </span>\n              </a>\n              <div\n                class="dropdown-menu dropdown-menu-right"\n                id="toolbar-user"\n                role="menu"\n              >\n                <a class="dropdown-item" href="/app/user-profile">\n                  My Profile\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.route_to_user()"\n                >\n                  My Settings\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.setup_session_defaults()"\n                >\n                  Session Defaults\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.clear_cache()"\n                >\n                  Reload\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.view_website()"\n                >\n                  View Website\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return frappe.ui.toolbar.toggle_full_width()"\n                >\n                  Toggle Full Width\n                </a>\n                <a\n                  class="dropdown-item"\n                  onclick="return new frappe.ui.ThemeSwitcher().show()"\n                >\n                  Toggle Theme\n                </a>\n                <a class="dropdown-item" href="/app/background_jobs">\n                  Background Jobs\n                </a>\n                <div class="dropdown-divider"></div>\n                <a class="dropdown-item" onclick="return frappe.app.logout()">\n                  Logout\n                </a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </b-container>\n    </header>\n  </div>\n</template>\n\n<script>\n// import notificationModule from "./../../state/notification/moduleNotification.js";\nexport default {\n  name: "TopHeader",\n  data() {\n    return {\n      notificationList:[],\n      paths:[]\n    };\n  },\n  // computed: {\n  //   notificationListd() {\n  //     return  [];\n  //   },\n  // },\n  watch: {\n    $route(val) {\n    \n     const fullPath = val.fullPath;\n     this.paths = fullPath.split("/").filter(item => item&& item.length >0);\n      \n    },\n  },\n  created() {},\n  mounted() {\n    const user = frappe.session.user;\n    this.getNotifications(user);\n  },\n  \n  methods: {\n    getNotifications(user) {\n      const payload = { ref: user };\n      // this.$store.dispatch("notification/fetchNotifications", payload);\n    },\n\n    clearNotification(name) {\n      const payload = { name, user: frappe.session.user };\n      // this.$store.dispatch("notification/clearNotification", payload);\n    },\n\n  },\n};\n</script>\n<style>\n#page-patient-chart {\n  height: 100vh;\n}\n\n.notification-badge {\n  position: absolute;\n  margin-left: -9px;\n  top: -3px;\n}\n</style>\n';
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
  var __vue_component__21 = /* @__PURE__ */ __vue_normalize__21({render: __vue_render__21, staticRenderFns: __vue_staticRenderFns__21}, __vue_inject_styles__21, __vue_script__21, __vue_scope_id__21, __vue_is_functional_template__21, __vue_module_identifier__21, false, __vue_create_injector__15, void 0, void 0);
  var TopHeader_default = __vue_component__21;

  // ../frontend/frontend/public/js/services/forms/builder.js
  var api9 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var fetch = ({method, args = {}}) => new Promise((resolve, reject) => frappe.call({method, type: "GET", args, callback: resolve}));
  var getFormConfiguration = ({name = ""}) => fetch({
    method: "clinical.api.forms.form_builder.get_form_configuration",
    args: {
      name
    }
  }).then(({message: message2}) => message2);
  var saveFormData = ({formData}) => api9({
    method: "clinical.api.forms.form_builder.save_form_data",
    args: {
      form_data: formData
    }
  }).then(({message: message2}) => message2);
  var updateFormData = ({formData}) => api9({
    method: "clinical.api.forms.form_builder.update_form_data",
    args: {
      form_data: formData
    }
  }).then(({message: message2}) => message2);

  // ../frontend/frontend/public/js/forms/Frm.vue
  var __vue_script__22 = {
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
        this.$bvModal.msgBoxConfirm("Are you sure you want to save the changes?").then((value2) => {
          if (value2) {
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
      this.$formEvent.$on("submit", (value2) => {
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
  var __vue_render__22 = function() {
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
  var __vue_staticRenderFns__22 = [];
  __vue_render__22._withStripped = true;
  var __vue_inject_styles__22 = function(inject) {
    if (!inject)
      return;
    inject("data-v-74881128_0", {source: '\n.spacer[data-v-74881128] {\n  margin-top: 10px;\n}\n.space-right[data-v-74881128] {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left[data-v-74881128] {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn[data-v-74881128] {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5[data-v-74881128] {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form[data-v-74881128] {\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n  width:100% !important;\n}\n.white-text[data-v-74881128] {\n  color: white;\n  margin-left: 10px;\n}\n.form-border[data-v-74881128] {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding[data-v-74881128] {\n  padding-bottom: 50px;\n  /* padding-right: 50px; */\n}\n.main-page[data-v-74881128] {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin[data-v-74881128] {\n  margin-top: 20px;\n}\n.card[data-v-74881128] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card[data-v-74881128]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.fb-area[data-v-74881128] {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n.container-fluid[data-v-74881128] {\n  background-color: white;\n  border-radius: 10px;\n}\n.space-left[data-v-74881128] {\n  margin-left: 8px;\n}\n.ref-field-input[data-v-74881128] {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width[data-v-74881128] {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding[data-v-74881128] {\n  padding-left: 15px;\n}\n.upper-case[data-v-74881128] {\n  text-transform: uppercase;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/Frm.vue"], "names": [], "mappings": ";AAikBA;EACA,gBAAA;AACA;AACA;EACA,6BAAA;EACA,mBAAA;AACA;AACA;EACA,4BAAA;EACA,kBAAA;AACA;AACA;EACA,YAAA;EACA,cAAA;AACA;AACA;EACA,2BAAA;EACA,iBAAA;AACA;AACA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;AACA;AACA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,0BAAA;;EAEA,gBAAA;EACA,oBAAA;EACA,mBAAA;AACA;AACA;EACA,oBAAA;EACA,yBAAA;AACA;AACA;EACA,gBAAA;EACA,mBAAA;AACA;AACA;EACA,gBAAA;AACA;AAEA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA;;AAEA,uCAAA;AACA;EACA,2CAAA;AACA;AAEA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,mBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,YAAA;EACA,iBAAA;AACA;AACA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,yBAAA;AACA", "file": "Frm.vue", "sourcesContent": ['<template>\n\n  <div style="width:100% !important">\n    <b-overlay  style="width:100% !important"\n      :show="(isShowOverlay && !isReadonly) || isReadonly"\n      :opacity="opacity"\n      no-center\n      rounded="sm"\n    >\n\n      <b-container class="main-page mb-4"  style="width:100% !important">\n        <div class="spacer-left-5">\n\n          <b-row>\n            <div class="render-form row">\n              <b-row\n                class="save-btn mb-2"\n                style="width:100%"\n                v-if="formData && !isReadonly"\n              >\n                <b-col cols="8">\n                  <h3 class="ml-2 upper-case">{{ currentFormName }}</h3>\n                </b-col>\n                <b-col cols="4" class="pull-right">\n                  <b-button-group class="pull-right">\n                    <b-button\n                      v-if="draftForm.name"\n                      variant="primary"\n                      class="white-text pull-right"\n                      @click="saveDoctype()"\n                    >\n                      <i class="fa fa-save"></i> Save\n                    </b-button>\n                  </b-button-group>\n                </b-col>\n              </b-row>\n\n              <FormRenderer\n                style="width:100% !important"\n                v-if="renderComponent"\n                :form-configuration="formData"\n                :parent="draftForm.name || parent"\n                :reference="reference"\n                v-model="formInputData"\n              />\n            </div>\n          </b-row>\n\n          <b-modal id="modal-id-1" ref="save_modal" size="sm" hide-footer>\n            <template #modal-title> Confirm save form data </template>\n            <b-row class="modal-padding" id="modal-body">\n\n              <b-col :cols="12" ref="doctype" class="ref-field-input">\n              </b-col>\n\n              <b-col\n                :cols="12"\n                v-show="selectedDoctype"\n                ref="docId"\n                id="ref-field"\n                class="ref-field-input"\n              />\n\n              <b-col :cols="12" id="form" class="ref-field-input" />\n            </b-row>\n\n            <b-button class="mt-3 btn btn-primary" block @click="initialSave()"\n              >Save</b-button\n            >\n          </b-modal>\n\n        </div>\n      </b-container>\n      <template #overlay>\n        <div class="text-center">\n          <b-button\n            v-if="\n              (!draftForm.name && formData && !isReadonly) ||\n                (!draftForm.name && isReadonly && isSaveOnly)\n            "\n            variant="primary"\n            class="white-text pull-right mr-5 mt-3"\n            size="sm"\n            @click="showModal()"\n          >\n            <i class="fa fa-edit"></i> Click to start\n          </b-button>\n\n          <b-button\n            v-if="isSaveOnly && draftForm.name && isReadonly"\n            variant="primary"\n            size="sm"\n            class="white-text pull-right mr-5 mt-3"\n            @click="saveDoctype()"\n          >\n            <i class="fa fa-save"></i> Save\n          </b-button>\n        </div>\n      </template>\n    </b-overlay>\n  </div>\n</template>\n<script>\nimport {\n  getFormConfiguration,\n  saveFormData,\n  updateFormData,\n} from "../services/forms/builder.js";\n\n\nexport default {\n  name: "FormRenderView",\n\n  data: function() {\n    return {\n      some_data: "To",\n      date: null,\n      previewMode: false,\n      title: "",\n      department: "",\n      tableName: "",\n      configuration: {},\n      draftForm: {},\n      formData: null,\n      formName: null,\n      selectedItem: null,\n      formInputData: null,\n      originalConfig: null,\n      changeLog: [],\n      savedDocument: null,\n      allFormConfigurationData: null,\n      renderComponent: true,\n      reference:{},\n      mappedDoctypeName: null, \n    };\n  },\n  props: {\n    selectedDoctype: { type: String },\n    selectedDoctypeReference: { type: String },\n    currentFormName: { type: String },\n    patient: { type: Object },\n    dataInput: { type: Object },\n    prePopulate: { type: Object },\n    isReadonly: { type: Boolean, default: false },\n    isSaveOnly: { type: Boolean, default: false },\n    hasOwner: { type: Boolean, default: false },\n    powerThrough: { type: Boolean, default: false },\n    parent: String,\n  },\n  watch: {\n    prePopulate(val){\n      this.dataPrepoulate(this.formData)    \n    },\n    dataInput(newVal) {\n      this.setValues(newVal);\n    },\n\n    previewMode(newVal, oldVal) {\n      if (newVal) {\n        const conf = this.configuration;\n        keys = Object.keys(newVal);\n        keys.forEach((key) => {\n          this.formInputData[`${key}`] = newVal[`${key}`];\n        });\n\n        this.formData = conf;\n      }\n    },\n    selectedDoctype(doctype) {\n      if (doctype) {\n        this.makeDoctypeItemControl(doctype);\n      }\n    },\n    currentFormName(name) {\n      if (name) {\n        this.getForm(name);\n      }\n    },\n\n  },\n  methods: {\n    forceRerender() {\n      this.renderComponent = false;\n\n      this.$nextTick(() => {\n        this.renderComponent = true;\n      });\n    },\n    populate() {\n      this.setValues(this.dataInput);\n    },\n    dataPrepoulate(configuration) {\n      if (this.prePopulate) {\n        const keys = Object.keys(this.prePopulate);\n        const controlValues = Object.values(configuration.controls);\n        const transformedData = {};\n        keys.forEach((key) => {\n          const currentControl = controlValues.find(\n            (control) => control.mappedField === key\n          );\n          if (currentControl) {\n            const updatedKey = currentControl.name;\n            transformedData[updatedKey] = this.prePopulate[key];\n          }\n        });\n\n        this.dataInput = transformedData;\n        this.draftForm = { name: this.prePopulate.name };\n      }\n    },\n    clearData() {\n      const val = {};\n      const keys = Object.keys(this.formInputData);\n      keys.forEach((key) => {\n        val[key] = "";\n      });\n\n      this.setValues(val);\n    },\n\n    setValues(val) {\n      this.$set(this, "formInputData", val);\n    },\n    getFormData() {\n      if (!this.currentFormName) {\n        const formName = frappe.get_route()[2];\n        this.tableName = formName.split("-")[1];\n        this.showModal();\n      } else {\n        if (!this.selectedDoctype || !this.selectedDoctypeReference) {\n          this.showModal();\n        } else {\n          this.save();\n        }\n      }\n    },\n    getFormInputData() {},\n    exportData() {\n      this.showModal();\n    },\n    previewForm() {\n      this.previewMode = !this.previewMode;\n    },\n    showModal() {\n      if (this.hasOwner) {\n        this.$refs["save_modal"].show();\n      } else if (!this.draftForm.name) {\n        this.initialSave();\n      } else {\n        this.save();\n      }\n    },\n    clear() {\n      this.formData = null;\n      this.formData = this.originalConfig;\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "DocType",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    get_new_frm(_frm) {\n      const doctype = "Patient";\n      const page = $("#form");\n\n      const layout = new frappe.ui.form.Layout({\n        parent: page,\n        doctype: doctype,\n        doctype_layout: null,\n        frm: {},\n        with_dashboard: false,\n        card_layout: true,\n      });\n      layout.make();\n      console.log(layout);\n\n      return frm;\n    },\n    makeDoctypeItemControl(doctype) {\n      const div = $("#ref-field");\n      div.empty();\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference Id"),\n          fieldtype: "Link",\n          fieldname: "itemControl",\n          options: doctype,\n          placeholder: __("Reference Id"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctypeReference = this.value;\n            }\n          },\n        },\n        parent: this.$refs["docId"],\n        render_input: true,\n      });\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    saveForm(formData) {\n    \n      this.hideModal();\n      saveFormData(formData).then((saved) => {\n        frappe.show_alert("Form Saved " + saved.name, 5);\n      \n        this.formData = null;\n        this.setValues({});\n        this.selectedDoctype = null;\n        this.selectedDoctypeReference = null;\n        this.sendToTimeline(\n          this.patient.patient,\n          "Form Repository",\n          saved.name,\n          saved.owner\n        );\n      });\n    },\n    initialSave() {\n      this.hideModal();\n      let form_content = "{}";\n      const form_name = this.formName;\n      const reference_doctype = this.selectedDoctype;\n      const reference_doctype_id = this.selectedDoctypeReference;\n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        form_content,\n        form_name,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Initial",\n      };\n      saveFormData({ formData }).then((saved) => {\n        this.draftForm = saved;\n        if (this.powerThrough) {\n          this.saveDoctype();\n        }\n      });\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        this.allFormConfigurationData = config;\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.dataPrepoulate(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n\n    hideModal() {\n      this.$refs["save_modal"].hide();\n    },\n    navigateToList() {\n      const formName = frappe.get_route()[2];\n      this.tableName = formName.split("-")[1];\n    },\n\n    sendToTimeline(\n      patient,\n      reference_doctype,\n      reference_name,\n      reference_owner\n    ) {\n     \n      let formData = {\n        reference_doctype,\n        reference_name,\n        doctype: "Patient Medical Record",\n        patient,\n        status: "Open",\n        reference_owner,\n      };\n\n      saveFormData({ formData }).then((saved) => {\n        frappe.show_alert("Timeline updated", 5);\n      });\n    },\n    saveDoctype() {\n      this.$bvModal\n        .msgBoxConfirm("Are you sure you want to save the changes?")\n        .then((value) => {\n          if (value) {\n            alert("SAving to db")\n            this.saveDoctypeToDb();\n          }\n          this.$bvModal.hide(\'add_l_modal\')\n        })\n        .catch((err) => {\n          // An error occurred\n        });\n    },\n    saveDoctypeToDb() {  \n      if (this.formData.formConfig.mappedDoctype) {\n        const keys = Object.keys(this.formInputData);\n        let formData = { doctype: this.formData.formConfig.mappedDoctype };\n\n        keys.forEach((key) => {\n          if (this.formData.controls[key]) {\n            const control = this.formData.controls[key];\n            if (\n              control &&\n              (control.type === "radio" ||\n                control.type === "dropDown" ||\n                control.type === "checkbox")\n            ) {\n              if (control.items.length) {\n                const erpValueObject = control.items.find(\n                  (item) => item.value === this.formInputData[key]\n                );\n                const field = this.formData.controls[key].mappedField;\n                if (field) {\n                  formData[field] = erpValueObject.erpValue;\n                }\n              }\n            } else {\n              const field = this.formData.controls[key].mappedField;\n              if (field) {\n                formData[field] = this.formInputData[key];\n              }\n            }\n          } else if (Array.isArray(this.formInputData[key])) {\n            formData[key] = this.formInputData[key];\n          }\n\n\n          this.allFormConfigurationData.context_item.forEach((item) => {\n            formData[item.key] = this.context[item.value];\n          });\n\n            if(this.allFormConfigurationData.extras && this.allFormConfigurationData.extras.length ){\n            this.allFormConfigurationData.extras.forEach((item) => { \n                      \n                        formData[item.key] = item.value;\n                      });\n            }\n           \n        });\n        alert(JSON.stringify(formData))\n\n        saveFormData({ formData }).then((saved) => {\n          alert(JSON.stringify(saved))\n          this.mappedDoctypeName = saved.name;\n          frappe.show_alert("Saved", 3);\n          this.savedDocument = saved;\n          this.getFormData();\n        });\n      } else {\n           console.log("FRM", "getFormData");\n        this.getFormData();\n      }\n    },\n    populateChildTableReference(){\n      this.reference = {doctype:this.selectedDoctype,doctype_id:this.selectedDoctypeReference  }\n    },\n    save() {\n      this.hideModal();\n      let form_content = this.formInputData;\n      form_content = JSON.stringify(form_content);\n      const form_name = this.formName;\n      const reference_doctype =\n        this.allFormConfigurationData.owner_doctype ||\n        this.selectedDoctype ||\n        this.formData.formConfig.mappedDoctype;\n      let reference_doctype_id = null;\n      if (this.allFormConfigurationData.context_reference) {\n        reference_doctype_id =\n          this.context[this.allFormConfigurationData.context_owner_name] ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      } else {\n        reference_doctype_id =\n          this.allFormConfigurationData.owner_doctype_reference ||\n          this.selectedDoctypeReference ||\n          this.savedDocument.name;\n      }\n\n      let name = null;\n\n      if (this.draftForm && this.draftForm.name) {\n        name = this.draftForm.name;\n      }\n    \n      let doctype = "Form Repository";\n      let formData = {\n        doctype,\n        name,\n        form_content,\n        form_name,\n        mapped_doctype_name : this.mappedDoctypeName,\n        mapped_doctype: this.formData.formConfig.mappedDoctype,\n        reference_doctype,\n        reference_doctype_id,\n        completion_status: "Completed",\n        completed:1,\n      };\n\n       if(this.encounter  && this.encounter.name){\n         formData.patient_encounter =this.encounter.name;      \n      };\n\n       alert(JSON.stringify(formData))\n\n      updateFormData({ formData }).then((result) => {\n        alert("Finale")\n        frappe.show_alert("Form updated " + result.name, 5);\n        this.draftForm = {};\n        this.clearData();\n        this.forceRerender();\n        this.$emit("callback", { formData, document: this.savedDocument });\n      });\n    },\n  },\n  computed: {\n    context() {\n      return this.$store.getters["context/getContext"];\n    },\n    isShowOverlay() {\n      return !this.draftForm.name;\n    },\n    opacity() {\n      return this.isReadonly ? 0 : 0.2;\n    },\n     encounter() {\n      return this.$store.getters["encounter/getEncounter"];\n    },\n  },\n  created() {\n    \n    if (this.currentFormName) {\n      this.getForm(this.currentFormName);\n    }\n    this.populateChildTableReference()\n \n  },\n\n  mounted() {\n\n    this.$formEvent.$on("submit", (value) => {});\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      if (modalId === "modal-id-1") {\n        this.makeSelectDoctypeControl();\n      }\n    });\n    const context = this;\n    setTimeout(() => {\n      context.populate();\n    }, 1000);\n  },\n  components: {},\n};\n</script>\n<style scoped>\n.spacer {\n  margin-top: 10px;\n}\n.space-right {\n  margin-right: 10px !important;\n  padding-right: 10px;\n}\n.spacer-left {\n  margin-left: 10px !important;\n  padding-left: 10px;\n}\n.save-btn {\n  color: white;\n  margin-top: 2%;\n}\n.spacer-left-5 {\n  margin-left: 5px !important;\n  padding-left: 5px;\n}\n.render-form {\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-bottom: 50px;\n  width:100% !important;\n}\n.white-text {\n  color: white;\n  margin-left: 10px;\n}\n.form-border {\n  border: 1px solid darkgray;\n\n  margin-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 50px;\n}\n.main-padding {\n  padding-bottom: 50px;\n  /* padding-right: 50px; */\n}\n.main-page {\n  margin-top: 10px;\n  padding-right: 30px;\n}\n.top-margin {\n  margin-top: 20px;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.fb-area {\n  padding-top: 20px;\n  border-radius: 10px;\n}\n\n.container-fluid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.space-left {\n  margin-left: 8px;\n}\n\n.ref-field-input {\n  width: 160px;\n  padding-left: 0px;\n}\n.input-max-width {\n  width: 100% !important;\n  min-width: 300px;\n}\n.modal-padding {\n  padding-left: 15px;\n}\n.upper-case {\n  text-transform: uppercase;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__22 = "data-v-74881128";
  var __vue_module_identifier__22 = void 0;
  var __vue_is_functional_template__22 = false;
  function __vue_normalize__22(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__22 = /* @__PURE__ */ __vue_normalize__22({render: __vue_render__22, staticRenderFns: __vue_staticRenderFns__22}, __vue_inject_styles__22, __vue_script__22, __vue_scope_id__22, __vue_is_functional_template__22, __vue_module_identifier__22, false, __vue_create_injector__16, void 0, void 0);
  var Frm_default = __vue_component__22;

  // ../frontend/frontend/public/js/patient/components/doctype/ChildTable.vue
  var __vue_script__23 = {
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
  var __vue_render__23 = function() {
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
  var __vue_staticRenderFns__23 = [];
  __vue_render__23._withStripped = true;
  var __vue_inject_styles__23 = function(inject) {
    if (!inject)
      return;
    inject("data-v-33aa60c3_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "ChildTable.vue"}, media: void 0});
  };
  var __vue_scope_id__23 = "data-v-33aa60c3";
  var __vue_module_identifier__23 = void 0;
  var __vue_is_functional_template__23 = false;
  function __vue_normalize__23(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__23 = /* @__PURE__ */ __vue_normalize__23({render: __vue_render__23, staticRenderFns: __vue_staticRenderFns__23}, __vue_inject_styles__23, __vue_script__23, __vue_scope_id__23, __vue_is_functional_template__23, __vue_module_identifier__23, false, __vue_create_injector__17, void 0, void 0);
  var ChildTable_default2 = __vue_component__23;

  // ../frontend/frontend/public/js/patient/components/doctype/DocField.vue
  var __vue_script__24 = {
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
  var __vue_render__24 = function() {
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
  var __vue_staticRenderFns__24 = [];
  __vue_render__24._withStripped = true;
  var __vue_inject_styles__24 = function(inject) {
    if (!inject)
      return;
    inject("data-v-3679bd5a_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "DocField.vue"}, media: void 0});
  };
  var __vue_scope_id__24 = void 0;
  var __vue_module_identifier__24 = void 0;
  var __vue_is_functional_template__24 = false;
  function __vue_normalize__24(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__24 = /* @__PURE__ */ __vue_normalize__24({render: __vue_render__24, staticRenderFns: __vue_staticRenderFns__24}, __vue_inject_styles__24, __vue_script__24, __vue_scope_id__24, __vue_is_functional_template__24, __vue_module_identifier__24, false, __vue_create_injector__18, void 0, void 0);
  var DocField_default2 = __vue_component__24;

  // ../frontend/frontend/public/js/patient/components/doctype/DoctypeRender.vue
  var __vue_script__25 = {
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
  var __vue_render__25 = function() {
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
  var __vue_staticRenderFns__25 = [];
  __vue_render__25._withStripped = true;
  var __vue_inject_styles__25 = function(inject) {
    if (!inject)
      return;
    inject("data-v-f1092b96_0", {source: '\n.card[data-v-f1092b96] {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/patient/components/doctype/DoctypeRender.vue"], "names": [], "mappings": ";AA8GA;EACA,4CAAA;EACA,0CAAA;EACA,gBAAA;AACA", "file": "DoctypeRender.vue", "sourcesContent": ['<template>\n  <b-container class="mx-auto">\n    <b-row>\n      <b-col cols="12" v-for="section in sections" :key="section" class="mb-3">\n        <b-card :title="section.name" v-if="section.fields.length > 0">\n          <b-card-text>\n            <b-row class="mt-2">\n              <b-col\n                :cols="getWidth(field)"\n                v-for="field in section.fields"\n                :key="field"\n              >\n                <doc-field :docField="field" :doc="doctype" />\n              </b-col>\n            </b-row>\n          </b-card-text>\n        </b-card>\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getDoctypeWithMeta } from "../../../services/doctype/meta";\nimport DocField from "./DocField.vue";\nexport default {\n  name: "DoctypeRender",\n  data() {\n    return {\n      doctypeData: {},\n      doctype: {},\n      filterEmpty: false,\n      sections: [],\n    };\n  },\n  components: { DocField },\n  mounted() {\n    this.$root.$on("bv::modal::shown", (bvEvent, modalId) => {\n      this.loadDoctype();\n    });\n    this.loadDoctype();\n  },\n  created() {},\n  props: {\n    doctypeInput: { type: String, default: "" },\n    doc_ref: { type: String, default: "" },\n    fields: { type: Array, default: [] },\n  },\n  methods: {\n    loadDoctype() {\n      const payload = { doctype: this.doctypeInput, name: this.doc_ref };\n      getDoctypeWithMeta(payload).then((data) => {\n        this.doctypeData = data;\n        this.fields = data.meta.fields;\n        this.doctype = data.data;\n        this.getSections(this.fields);\n      });\n    },\n    getSections(fields) {\n      this.sections = [];\n      let currentSection = { fields: [], name: "" };\n      fields.forEach((item) => {\n        if (item.fieldtype !== "Section Break") {\n          if (item.fieldname !== "naming_series") {\n            currentSection.fields.push(item);\n          }\n        } else {\n          this.sections.push(currentSection);\n          currentSection = { fields: [], name: "" };\n          currentSection.name = this.noSnake(item.fieldname);\n          console.log(currentSection.name);\n        }\n      });\n    },\n    noSnake(stringItem) {\n      if (!stringItem) {\n        return "";\n      }\n      if (stringItem.startsWith("section_break")) {   \n        return null;\n      }\n      if (stringItem.startsWith("sb_")) {   \n         stringItem = stringItem.replace("_sb","")\n      }\n\n      let noSnakeString = stringItem.replaceAll("_", " ");\n      return noSnakeString.charAt(0).toUpperCase() + noSnakeString.slice(1);\n    },\n\n    getWidth(field) {\n      if (field) {\n        if (field.fieldname.startsWith("column_break")) {\n          return "12";\n        }\n        if (field.fieldtype === "Table") {\n          return "12";\n        }\n      }\n      return "6";\n    },\n  },\n  watch: {\n    $route(to, from) {\n      this.loadDoctype();\n    },\n  },\n};\n</script>\n\n<style scoped>\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__25 = "data-v-f1092b96";
  var __vue_module_identifier__25 = void 0;
  var __vue_is_functional_template__25 = false;
  function __vue_normalize__25(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__25 = /* @__PURE__ */ __vue_normalize__25({render: __vue_render__25, staticRenderFns: __vue_staticRenderFns__25}, __vue_inject_styles__25, __vue_script__25, __vue_scope_id__25, __vue_is_functional_template__25, __vue_module_identifier__25, false, __vue_create_injector__19, void 0, void 0);
  var DoctypeRender_default2 = __vue_component__25;

  // ../frontend/frontend/public/js/forms/FillForm.vue
  var __vue_script__26 = {
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
      callback(value2) {
        this.$emit("callback", value2);
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
  var __vue_render__26 = function() {
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
  var __vue_staticRenderFns__26 = [];
  __vue_render__26._withStripped = true;
  var __vue_inject_styles__26 = function(inject) {
    if (!inject)
      return;
    inject("data-v-5133caa5_0", {source: "\n.render-formx[data-v-5133caa5] {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  width: 100% !important;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/forms/FillForm.vue"], "names": [], "mappings": ";AA8GA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;AACA", "file": "FillForm.vue", "sourcesContent": ['<template>\n  <b-container>\n    <b-row class="render-formx mr-0" v-if="!formName">\n      <b-col :cols="12" ref="doctype" class="ref-field-input mr-0" />\n    </b-row>\n    <b-row>\n    \n      <form-render-view\n        :currentFormName="selectedDoctype"\n        :selectedDoctype="referencDoctype"\n        :prePopulate="prePopulate"\n        :selectedDoctypeReference="referencDoctypeItem"\n        @callback="callback"\n      />\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { getFormConfiguration } from "../services/forms/builder.js";\nimport FormRenderView from "./Frm.vue";\nimport DoctypeRender from "./../patient/components/doctype/DoctypeRender.vue";\n\nexport default {\n  name: "FillForm",\n  data() {\n    return {\n      selectedDoctype: null,\n      configuration: null,\n    };\n  },\n  components: {\n    FormRenderView,\n    DoctypeRender,\n  },\n  props: {\n    formName: {\n      type: String,\n      required: false,\n      default: "Registration Form",\n    },\n    prePopulate :{type:Object, default:null},\n    referencDoctype: { type: String, default: "Patient" },\n    referencDoctypeItem: { type: String, default: "" },\n    callbackUrl: { type: Object, required: false, default: null },\n  \n  },\n  created() {\n    if (this.formName) {\n      this.selectedDoctype = this.formName;\n    }\n  },\n\n  mounted() {\n    this.makeSelectDoctypeControl();\n  },\n  watch: {\n    selectedDoctype(val) {\n      // f()\n      this.getForm(val);\n    },\n  },\n\n  methods: {\n     callback(value) {\n      this.$emit("callback", value);\n    },\n    makeSelectDoctypeControl() {\n      let me = this;\n      let customer_field = frappe.ui.form.make_control({\n        df: {\n          label: __("Reference"),\n          fieldtype: "Link",\n          fieldname: "reference",\n          options: "Form Design",\n          placeholder: __("Search Reference"),\n          onchange: function() {\n            if (this.value) {\n              me.selectedDoctype = this.value;\n            }\n          },\n        },\n        parent: this.$refs["doctype"],\n        render_input: true,\n      });\n\n      customer_field.toggle_label(false);\n      $("#modal-body")\n        .find(".input-max-width")\n        .removeClass("input-max-width");\n    },\n    getForm(name) {\n      getFormConfiguration({ name }).then((config) => {\n        const formStringConfig = config.formdata;\n        const configObject = JSON.parse(formStringConfig);\n        this.configuration = formStringConfig;\n        console.log(configObject);\n        this.formName = config.name;\n        this.formData = configObject;\n        this.originalConfig = configObject;\n      });\n    },\n    goToRoute(doctype, reference) {\n      this.$router.push({ name: "viewer", params: { doctype, reference } });\n    },\n  },\n};\n</script>\n\n<style scoped>\n.render-formx {\n  padding-top: 10px;\n  padding-bottom: 0px;\n  width: 100% !important;\n}\n</style>\n']}, media: void 0});
  };
  var __vue_scope_id__26 = "data-v-5133caa5";
  var __vue_module_identifier__26 = void 0;
  var __vue_is_functional_template__26 = false;
  function __vue_normalize__26(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var __vue_component__26 = /* @__PURE__ */ __vue_normalize__26({render: __vue_render__26, staticRenderFns: __vue_staticRenderFns__26}, __vue_inject_styles__26, __vue_script__26, __vue_scope_id__26, __vue_is_functional_template__26, __vue_module_identifier__26, false, __vue_create_injector__20, void 0, void 0);
  var FillForm_default = __vue_component__26;

  // ../frontend/frontend/public/js/accounts/Main.vue
  var __vue_script__27 = {
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
      toggleWorkingAreaSpace(value2) {
        this.fullScreenWorkArea = value2;
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
      AccountsWorkingArea: AccountsWorkingArea_default,
      TopHeader: TopHeader_default,
      DoctypeRender: DoctypeRender_default,
      FillForm: FillForm_default
    }
  };
  var __vue_render__27 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {
      staticClass: "main page-wrapper",
      staticStyle: {"background-color": "#ffffff"},
      attrs: {fluid: ""}
    }, [
      _c("b-row", [_c("top-header", {staticStyle: {width: "100%"}})], 1),
      _vm._v(" "),
      _c("b-row", [
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
  var __vue_staticRenderFns__27 = [];
  __vue_render__27._withStripped = true;
  var __vue_inject_styles__27 = function(inject) {
    if (!inject)
      return;
    inject("data-v-890456a6_0", {source: '\n@media only screen and (min-width: 767px) {\n.watu {\n        overflow: hidden !important;\n}\n}\n.main-container {\n  height: 100vh;\n  overflow-x: hidden;\n  /* font-family: "Nunito", sans-serif; */\n  /* font-size: smaller; */\n}\n.top-menu {\n  background: white;\n  padding: 20px;\n}\n.no-left-padding {\n  padding-left: 0px !important;\n}\n.side-bar {\n  background: rgba(0, 0, 0, 0.03);\n  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2); */\n  border-right: 1px solid lightgray;\n  transition: 0.3s;\n}\n.working-area {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 100vh;\n  width: 100%;\n  scrollbar-width: thin; /* "auto" or "thin" */\n  scrollbar-color: lightgray transparent;\n}\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n.layout-main {\n  height: calc(100vh - 60px);\n}\n.layout-main-section-wrapper {\n  margin-bottom: 0px !important;\n}\ndiv::-webkit-scrollbar {\n  width: 0px; /* width of the entire scrollbar */\n}\ndiv::-webkit-scrollbar-track {\n  background: transparent; /* color of the tracking area */\n}\ndiv::-webkit-scrollbar-thumb {\n  background-color: grey; /* color of\u220F the scroll thumb */\n  border-radius: 20px; /* roundness of the scroll thumb */\n  border: 0px solid orange; /* creates padding around scroll thumb */\n}\n.main {\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/accounts/Main.vue"], "names": [], "mappings": ";AA4FA;AACA;QACA,2BAAA;AAEA;AACA;AACA;EACA,aAAA;EACA,kBAAA;EACA,uCAAA;EACA,wBAAA;AACA;AAEA;EACA,iBAAA;EACA,aAAA;AACA;AACA;EACA,4BAAA;AACA;AAEA;EACA,+BAAA;EACA,gDAAA;EACA,iCAAA;EACA,gBAAA;AACA;AACA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,qBAAA,EAAA,qBAAA;EACA,sCAAA;AACA;AAEA;EACA,0CAAA;EACA,gBAAA;AACA;AAEA;EACA,2CAAA;AACA;AAEA;EACA,0BAAA;AACA;AACA;EACA,6BAAA;AACA;AAEA;EACA,UAAA,EAAA,kCAAA;AACA;AAEA;EACA,uBAAA,EAAA,+BAAA;AACA;AAEA;EACA,sBAAA,EAAA,+BAAA;EACA,mBAAA,EAAA,kCAAA;EACA,wBAAA,EAAA,wCAAA;AACA;AACA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,gBAAA;AACA", "file": "Main.vue", "sourcesContent": [`<template>
  <b-container class="main page-wrapper" style="background-color:#ffffff;" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row>
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
import AccountsWorkingArea from "./core/AccountsWorkingArea.vue";
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
    AccountsWorkingArea,
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
  height: 100vh;
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
.main {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__27 = void 0;
  var __vue_module_identifier__27 = void 0;
  var __vue_is_functional_template__27 = false;
  function __vue_normalize__27(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <b-container class="main page-wrapper" style="background-color:#ffffff;" fluid>
    <b-row >
   <top-header style="width: 100%" />
    </b-row>
    <b-row>
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
import AccountsWorkingArea from "./core/AccountsWorkingArea.vue";
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
    AccountsWorkingArea,
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
  height: 100vh;
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
.main {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
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
  var __vue_component__27 = /* @__PURE__ */ __vue_normalize__27({render: __vue_render__27, staticRenderFns: __vue_staticRenderFns__27}, __vue_inject_styles__27, __vue_script__27, __vue_scope_id__27, __vue_is_functional_template__27, __vue_module_identifier__27, false, __vue_create_injector__21, void 0, void 0);
  var Main_default2 = __vue_component__27;

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
  var state_default3 = state2;

  // ../frontend/frontend/public/js/state/getters.js
  var getters2 = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default3 = getters2;

  // ../frontend/frontend/public/js/state/mutations.js
  var mutations2 = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default3 = mutations2;

  // ../frontend/frontend/public/js/state/actions.js
  var actions2 = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default3 = actions2;

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
  var api10 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message: message2}) => resolve(message2),
    error: reject
  }));
  var getPatientInfo = (patient_name) => api10({
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
  var api11 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: ({message: message2}) => resolve(message2), error: reject}));
  var getScheduledOrUnscheduledprocedures = (args) => {
    return api11({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedures_per_service_unit",
      args
    });
  };
  var getClinicalProcedureTemplates = (args) => {
    return api11({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedure_templates_per_service_unit",
      args
    });
  };
  var getProcedureStatistics = (args) => {
    return api11({
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
  var fetchNotifications = (payload) => api10({
    method: "clinical.api.notification.notification.get_notifications",
    args: {payload}
  });
  var clearNotification = (payload) => api10({
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
    getters: getters_default3,
    mutations: mutations_default3,
    state: state_default3,
    actions: actions_default3,
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

  // ../frontend/frontend/public/js/accounts/accounts.bundle.js
  frappe.provide("frappe.accounts");
  frappe.accounts.Chart = class {
    constructor({parent: parent2}) {
      this.$parent = $(parent2);
      this.page = parent2.page;
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
        render: (h) => h(Main_default2)
      });
    }
  };
})();
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
//# sourceMappingURL=accounts.bundle.I3RRRZEH.js.map
