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

  // ../frontend/frontend/public/js/pharmacy/components/util/paginate.js
  var require_paginate = __commonJS({
    "../frontend/frontend/public/js/pharmacy/components/util/paginate.js"(exports, module) {
      var paginate2 = function(totalItems, currentPage = 1, pageSize = 10, maxPages = 10) {
        let totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < 1) {
          currentPage = 1;
        } else if (currentPage > totalPages) {
          currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= maxPages) {
          startPage = 1;
          endPage = totalPages;
        } else {
          let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
          let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
          if (currentPage <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = maxPages;
          } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
          } else {
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
          }
        }
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
        return {
          totalItems,
          currentPage,
          pageSize,
          totalPages,
          startPage,
          endPage,
          startIndex,
          endIndex,
          pages
        };
      };
      module.exports = paginate2;
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
        function hasOwnProp(a, b2) {
          return Object.prototype.hasOwnProperty.call(a, b2);
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
        function extend(a, b2) {
          for (var i in b2) {
            if (hasOwnProp(b2, i)) {
              a[i] = b2[i];
            }
          }
          if (hasOwnProp(b2, "toString")) {
            a.toString = b2.toString;
          }
          if (hasOwnProp(b2, "valueOf")) {
            a.valueOf = b2.valueOf;
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
        var keys;
        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function(obj) {
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
          units.sort(function(a, b2) {
            return a.priority - b2.priority;
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
          function cmpLenRev(a, b2) {
            return b2.length - a.length;
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
          function cmpLenRev(a, b2) {
            return b2.length - a.length;
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
          return keys(locales);
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
        function defaults(a, b2, c) {
          if (a != null) {
            return a;
          }
          if (b2 != null) {
            return b2;
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
        function monthDiff(a, b2) {
          if (a.date() < b2.date()) {
            return -monthDiff(b2, a);
          }
          var wholeMonthDiff = (b2.year() - a.year()) * 12 + (b2.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
          if (b2 - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b2 - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b2 - anchor) / (anchor2 - anchor);
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
            var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
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

  // ../frontend/frontend/public/js/pharmacy/components/core/sidebar/SidebarItem.vue
  var __vue_script__ = {
    props: {
      prescription: {
        type: Object,
        default: {},
        required: true
      }
    },
    methods: {
      prescriptionClicked() {
        this.$emit("prescriptionClicked", this.prescription);
      }
    },
    filters: {
      Upper(value) {
        return value.toUpperCase();
      },
      title(str) {
        return str.replace(/\w([^-\s]*)/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      },
      last_5(str) {
        return str.substring(str.length - 5);
      }
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-list-group-item", {
      staticClass: "d-flex align-items-center",
      staticStyle: {cursor: "pointer"},
      on: {click: _vm.prescriptionClicked}
    }, [
      _c("b-row", {attrs: {"align-h": "between"}}, [
        _c("b-col", {attrs: {"align-self": "stretch"}}, [
          _c("span", {staticClass: "mr-auto title-name"}, [
            _vm._v(_vm._s(_vm.prescription.patient))
          ])
        ]),
        _vm._v(" "),
        _c("b-row", [
          _c("b-col", {staticClass: "time-text", attrs: {cols: "12"}}, [
            _vm._v("\n        " + _vm._s(_vm.prescription.status) + "\n       "),
            _vm.prescription.status === "Pending" ? _c("span", {
              staticClass: "indicator whitespace-nowrap orange"
            }) : _vm._e(),
            _vm._v(" "),
            _vm.prescription.status === "Dispensed" ? _c("span", {
              staticClass: "indicator whitespace-nowrap green"
            }) : _vm._e()
          ]),
          _vm._v(" "),
          _c("b-col", {staticClass: "time-text", attrs: {cols: "12"}}, [
            _c("b-icon-exclamation-triangle-fill"),
            _vm._v("\n       " + _vm._s(_vm.prescription.invoice_status) + "\n        "),
            _vm.prescription.invoice_status === "Paid" ? _c("span", {
              staticClass: "indicator whitespace-nowrap green"
            }) : _vm._e(),
            _vm._v(" "),
            _vm.prescription.invoice_status === "Pending" || _vm.prescription.invoice_status === "Invoiced" ? _c("span", {
              staticClass: "indicator whitespace-nowrap orange"
            }) : _vm._e()
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-3687b65a_0", {source: "\n.title-row[data-v-3687b65a] {\n  display: flex;\n  justify-content: space-between;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/sidebar/SidebarItem.vue"], "names": [], "mappings": ";AAgGA;EACA,aAAA;EACA,8BAAA;AACA", "file": "SidebarItem.vue", "sourcesContent": [`<template>
  <!-- <div>
    <strong style="margin-bottom:16px;" @click="prescriptionClicked()">
      {{ prescription.name | last_5 }}
        &nbsp;  &nbsp;
      {{ prescription.patient | Upper }}
        &nbsp;  &nbsp;
         {{ prescription.invoice_status }}
          {{ prescription.status }}
      <span class="indicator whitespace-nowrap orange">
        <!- <span>Pending</span> ->
        </span>
        &nbsp;  &nbsp;
       <span class="indicator whitespace-nowrap green">
         <!- <span>Issued</span> ->
         </span>
    </strong>
  </div> -->
    <b-list-group-item
    class="d-flex align-items-center"
    style="cursor:pointer;"
    @click="prescriptionClicked"
  >
    <!-- <b-avatar class="mr-3"></b-avatar> -->
    <b-row  align-h="between">
      <b-col  align-self="stretch"><span class="mr-auto title-name">{{prescription.patient }}</span>
      </b-col>

      <!-- <b-col cols="2">
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
      </b-col> -->
    <b-row>
      <b-col cols="12" class="time-text">
          {{ prescription.status }}
         <span  v-if="prescription.status === 'Pending'" class="indicator whitespace-nowrap orange">
              </span>
                <span v-if="prescription.status === 'Dispensed'" class="indicator whitespace-nowrap green">
              </span>  
        </b-col>
      <b-col cols="12" class="time-text"> 
         <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
         {{ prescription.invoice_status }}
          <span v-if="prescription.invoice_status === 'Paid'" class="indicator whitespace-nowrap green">
          </span>
          <span  v-if="prescription.invoice_status === 'Pending' || prescription.invoice_status === 'Invoiced'" class="indicator whitespace-nowrap orange">
          </span>
         </b-col>
    </b-row>
    </b-row>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    prescription: {
      type: Object,
      default: {},
      required: true
    }
  },
  methods: {
    prescriptionClicked() {
      //alert(this.prescription);
      this.$emit("prescriptionClicked", this.prescription);
    }
  },
  filters: {
    // Filter definitions
    Upper(value) {
      return value.toUpperCase();
    },
    title(str) {
      return str.replace(/\\w([^-\\s]*)/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    last_5(str) {
      return str.substring(str.length - 5);
    }
  }
};
</script>
<style scoped>
.title-row {
  display: flex;
  justify-content: space-between;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__ = "data-v-3687b65a";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <!-- <div>
    <strong style="margin-bottom:16px;" @click="prescriptionClicked()">
      {{ prescription.name | last_5 }}
        &nbsp;  &nbsp;
      {{ prescription.patient | Upper }}
        &nbsp;  &nbsp;
         {{ prescription.invoice_status }}
          {{ prescription.status }}
      <span class="indicator whitespace-nowrap orange">
        <!- <span>Pending</span> ->
        </span>
        &nbsp;  &nbsp;
       <span class="indicator whitespace-nowrap green">
         <!- <span>Issued</span> ->
         </span>
    </strong>
  </div> -->
    <b-list-group-item
    class="d-flex align-items-center"
    style="cursor:pointer;"
    @click="prescriptionClicked"
  >
    <!-- <b-avatar class="mr-3"></b-avatar> -->
    <b-row  align-h="between">
      <b-col  align-self="stretch"><span class="mr-auto title-name">{{prescription.patient }}</span>
      </b-col>

      <!-- <b-col cols="2">
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
      </b-col> -->
    <b-row>
      <b-col cols="12" class="time-text">
          {{ prescription.status }}
         <span  v-if="prescription.status === 'Pending'" class="indicator whitespace-nowrap orange">
              </span>
                <span v-if="prescription.status === 'Dispensed'" class="indicator whitespace-nowrap green">
              </span>  
        </b-col>
      <b-col cols="12" class="time-text"> 
         <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
         {{ prescription.invoice_status }}
          <span v-if="prescription.invoice_status === 'Paid'" class="indicator whitespace-nowrap green">
          </span>
          <span  v-if="prescription.invoice_status === 'Pending' || prescription.invoice_status === 'Invoiced'" class="indicator whitespace-nowrap orange">
          </span>
         </b-col>
    </b-row>
    </b-row>
  </b-list-group-item>
</template>
<script>
export default {
  props: {
    prescription: {
      type: Object,
      default: {},
      required: true
    }
  },
  methods: {
    prescriptionClicked() {
      //alert(this.prescription);
      this.$emit("prescriptionClicked", this.prescription);
    }
  },
  filters: {
    // Filter definitions
    Upper(value) {
      return value.toUpperCase();
    },
    title(str) {
      return str.replace(/\\w([^-\\s]*)/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    last_5(str) {
      return str.substring(str.length - 5);
    }
  }
};
</script>
<style scoped>
.title-row {
  display: flex;
  justify-content: space-between;
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
  var SidebarItem_default = __vue_component__;

  // ../frontend/frontend/public/js/services/pharmacy/prescriptions.js
  var api = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var getPatientPrescriptionsV2 = ({
    patient_name,
    encounter_name,
    ...restArgs
  }) => api({
    method: "clinical.api.prescription.prescription.get_patient_prescriptions",
    freeze: false,
    args: {
      patient_name,
      encounter_name,
      ...restArgs
    }
  }).then(({message}) => message);
  var updatePrescriptionItem = ({
    name,
    qty
  }) => api({
    method: "clinical.api.prescription.prescription.update_prescription_item",
    args: {
      name,
      qty
    }
  }).then(({message}) => message);
  var getPrescriptionInvoice = ({
    name
  }) => api({
    method: "clinical.api.prescription.invoice.get_prescription_invoice",
    args: {
      name
    }
  }).then(({message}) => message);
  var setPrescriptionInvoiceNumber = ({
    prescription_name,
    invoice_name
  }) => api({
    method: "clinical.api.prescription.invoice.set_prescription_invoice",
    args: {
      prescription_name,
      invoice_name
    }
  }).then(({message}) => message);
  var getDrugItemAlternates = ({
    drug_name
  }) => api({
    method: "clinical.api.prescription.prescription.get_drug_item_alternates",
    args: {
      drug_name
    }
  }).then(({message}) => message);
  var updatePrescriptionItemDrug = ({
    prescription_item_name,
    drug_name,
    patient_name
  }) => api({
    method: "clinical.api.prescription.prescription.update_prescription_item_drug",
    args: {
      prescription_item_name,
      drug_name,
      patient_name
    }
  }).then(({message}) => message);
  var updatePrescriptionWarehouse = ({
    prescription_name,
    warehouse_name
  }) => api({
    method: "clinical.api.prescription.warehouse.update_prescription_warehouse",
    args: {
      prescription_name,
      warehouse_name
    }
  }).then(({message}) => message);
  var getWarehouses = ({}) => api({
    method: "clinical.api.warehouse.warehouse.get_warehouse_list",
    args: {}
  }).then(({message}) => message);
  var getUserWarehouses = ({
    user_name
  }) => api({
    method: "clinical.api.warehouse.user_warehouse.get_user_warehouses",
    args: {
      user_name
    }
  }).then(({message}) => message);
  var dispenseStockEntry = (args) => api({
    method: "clinical.api.prescription.stock.prescription_dispense_stock_entry",
    args
  }).then(({message}) => message);
  var prescriptionItemMaterialRequest = ({
    drug,
    quantity,
    warehouse,
    from_warehouse
  }) => api({
    method: "clinical.api.prescription.stock.make_material_request",
    args: {
      drug,
      quantity,
      warehouse,
      from_warehouse
    }
  }).then(({message}) => message);
  var prescriptionChangeComment = ({
    reference_doctype,
    reference_name,
    content,
    comment_email,
    comment_by
  }) => api({
    method: "frappe.desk.form.utils.add_comment",
    args: {
      reference_doctype,
      reference_name,
      content,
      comment_email,
      comment_by
    }
  }).then(({message}) => message);
  var customerInfomation = ({
    patient_name
  }) => api({
    method: "clinical.api.prescription.customer.get_customer_group",
    args: {
      patient_name
    }
  }).then(({message}) => message);
  var getWarehouseServicePoints = ({
    warehouse_name
  }) => api({
    method: "clinical.api.warehouse.user_warehouse.get_service_point_list",
    args: {
      warehouse_name
    }
  }).then(({message}) => message);
  var dispensePrescription = ({
    prescription_names,
    patient_name,
    warehouse_name
  }) => api({
    method: "clinical.api.prescription.prescription.dispense_prescriptions",
    args: {
      prescription_names,
      patient_name,
      warehouse_name
    }
  }).then(({message}) => message);
  var getPrescriptionRefills = ({
    patient_name
  }) => api({
    method: "clinical.api.prescription.prescription.fetch_patient_refills",
    args: {
      patient_name
    }
  }).then(({message}) => message);
  var updatePrescriptionRefillRate = ({
    refill_name
  }) => api({
    method: "clinical.api.prescription.prescription.update_refill_rates",
    args: {
      refill_name
    }
  }).then(({message}) => message);
  var updatePrescriptionRefillQuantity = ({
    refill_name,
    qty
  }) => api({
    method: "clinical.api.prescription.prescription.update_refill_quantity",
    args: {
      refill_name,
      qty
    }
  }).then(({message}) => message);
  var createRefillSalesOrder = ({
    refill_doc_name
  }) => api({
    method: "clinical.api.prescription.invoice.refill_sales_order",
    args: {
      refill_doc_name
    }
  }).then(({message}) => message);
  var dispensePrescriptionRefill = ({
    refill_name
  }) => api({
    method: "clinical.api.prescription.prescription.dispense_prescriptions_refill",
    args: {
      refill_name
    }
  }).then(({message}) => message);
  var getMatchedItems = (args) => {
    return api({
      method: "clinical.api.orders.prescriptions.get_drug_options",
      args
    }).then(({message}) => message);
  };
  var matchStockItemApi = (args) => {
    return api({
      method: "clinical.clinical.doctype.drug.drug.match_drug_to_stock_item",
      args
    }).then(({message}) => message);
  };
  var createMedicationOrder = (order) => api({
    method: "clinical.api.inpatient_medication_orders.inpatient_medication_orders.create_inpatient_medication_order",
    args: {
      order
    }
  });
  var createDrugSalesOrder = (args) => api({
    method: "clinical.api.orders.prescriptions.create_a_drug_sales_order",
    args
  }).then(({message}) => message);
  var getDrugsAwaitingDispense = (args) => api({
    method: "clinical.api.orders.prescriptions.get_drugs_awaiting_dispensation",
    args
  }).then(({message}) => message);
  var getCurrentMedicationOrders = (args) => api({
    method: "clinical.api.orders.prescriptions.get_inpatient_medication_orders_in_progress",
    args
  }).then(({message}) => message);
  var stageItemForOrder = (args) => api({
    method: "clinical.api.orders.prescriptions.stage_for_order",
    args
  }).then(({message}) => message);
  var calculatePrescriptionQuantity = (args) => api({
    method: "clinical.api.orders.prescriptions.calculate_prescription_qty",
    args
  }).then(({message}) => message);
  var getDrugGroups = (args = {}) => {
    return api({
      method: "clinical.api.orders.prescriptions.get_drug_item_groups",
      args
    }).then(({message}) => message);
  };
  var removeMatchedItem = (args) => {
    return api({
      method: "clinical.clinical.doctype.drug.drug.remove_matched_item",
      args
    }).then(({message}) => message);
  };
  var addADrug = (args) => {
    return api({
      method: "clinical.clinical.doctype.drug.drug.add_a_drug",
      args
    }).then(({message}) => message);
  };
  var updateDrugPrescription = (args = {}) => {
    return api({
      method: "clinical.api.orders.prescriptions.edit_prescription",
      args
    }).then(({message}) => message);
  };
  var unStageApi = (args = {}) => {
    console.log(args);
    return api({
      method: "clinical.api.orders.prescriptions.un_stage",
      args
    }).then(({message}) => message);
  };
  var cancelOrderedPrescription = (args = {}) => {
    return api({
      method: "clinical.api.orders.prescriptions.cancel_ordered_prescription",
      args
    });
  };
  var cancelOrderReadyForDispense = (args = {}) => {
    return api({
      method: "clinical.api.orders.prescriptions.cancel_prescription_ready_to_dispense",
      args
    });
  };
  var getPatientInfo = (patient_name) => api({
    method: "clinical.api.patients.get_patient_details",
    args: {patient_name}
  });
  var getMedicationOrders = (entry) => {
    return api({
      method: "clinical.api.inpatient_drug_administration.inpatient_drug_administration.fetch_medication_orders",
      freeze: false,
      args: {
        entry
      }
    }).then(({message}) => message);
  };
  var calculateStockBalance = (args) => {
    return api({
      method: "clinical.api.inpatient_drug_administration.inpatient_drug_administration.calculate_stock_balance",
      freeze: false,
      args
    }).then(({message}) => message);
  };
  var dispatchMedicationOrder = (args) => {
    return api({
      method: "clinical.api.inpatient_drug_administration.inpatient_drug_administration.dispatch_drug_to_ward",
      args
    }).then(({message}) => message);
  };
  var cancelInpatientPrescriptions = (name) => {
    return api({
      method: "clinical.api.orders.prescriptions.cancel_from_pharmacy",
      args: {name}
    });
  };

  // ../frontend/frontend/public/js/state/pharmacy-warehouse/state.js
  var state_default = {
    warehouses: [],
    selectedWarehouse: null,
    servicePoints: null,
    selectedServicePoint: null
  };

  // ../frontend/frontend/public/js/state/pharmacy-warehouse/mutations.js
  var mutations_default = {
    SET_SERVICE_POINTS(state5, servicePoints) {
      state5.servicePoints = servicePoints;
    },
    SET_WAREHOUSES(state5, warehouses) {
      state5.warehouses = warehouses;
    },
    SET_SELECTED_WAREHOUSE(state5, wh) {
      state5.selectedWarehouse = wh;
    },
    SET_SELECTED_SERVICE_POINT(state5, sp) {
      state5.selectedServicePoint = sp;
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-warehouse/actions.js
  var actions_default = {
    fetchWarehouseServicePoints({commit}, payload) {
      getWarehouseServicePoints({warehouse_name: payload}).then((result) => {
        if (result && result.length > 0) {
          commit("SET_SERVICE_POINTS", result);
          commit("SET_SELECTED_SERVICE_POINT", result[0]);
        } else {
          frappe.msgprint({
            message: `No service Point(s) for this warehoue.`,
            indicator: "red"
          }, 5);
        }
      });
    },
    fetchUserWarehouses({commit}, payload = "") {
      getUserWarehouses({
        user_name: frappe.session.user
      }).then((result) => {
        if (result && result.length > 0) {
          commit("SET_WAREHOUSES", result);
          commit("SET_SELECTED_WAREHOUSE", result[0]);
        } else {
          frappe.msgprint({
            message: `You are not assigned to any warehouse.
Contact Support for help.`,
            indicator: "red"
          }, 5);
        }
      });
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-warehouse/getters.js
  var getters_default = {
    warehouses: (state5) => {
      return state5.warehouses;
    },
    servicePoints: (state5) => {
      return state5.servicePoints;
    },
    selectedServicePoint: (state5) => {
      return state5.selectedServicePoint;
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-warehouse/index.js
  var pharmacy_warehouse_default = {
    namespaced: true,
    state: state_default,
    mutations: mutations_default,
    actions: actions_default,
    getters: getters_default
  };

  // ../frontend/frontend/public/js/pharmacy/components/core/sidebar/WarehouseSelect.vue
  var __vue_script__2 = {
    name: "WarehouseSelect",
    props: {
      servicePoint: {
        type: Object,
        required: true
      }
    },
    data() {
      return {};
    },
    computed: {},
    created() {
      this.$store.registerModule("warehouseModule", pharmacy_warehouse_default);
    },
    mounted() {
      this.getWarehouses();
    },
    watch: {
      selectedWarehouse() {
        getWarehouseServicePoints({warehouse_name: this.selectedWarehouse.warehouse}).then((result) => {
          if (result && result.length > 0) {
            this.servicePoints = result;
            this.setServicePoint(result[0]);
          } else {
            frappe.msgprint({
              message: `No service Point(s) for this warehoue.`,
              indicator: "red"
            }, 5);
          }
        });
      },
      warehouses() {
        this.setWarehouse(this.warehouses[0]);
      },
      servicePoints() {
        this.setServicePoint(this.servicePoints[0]);
      }
    },
    methods: {
      refresh() {
        if (this.selectedWarehouse && this.selectedServicePoint) {
          this.$emit("warehouseSelected", this.selectedWarehouse);
          this.$emit("selectedServicePoint", this.selectedServicePoint);
        }
      },
      setWarehouse(warehouse) {
        this.selectedWarehouse = warehouse;
        this.$emit("warehouseSelected", warehouse);
      },
      setServicePoint(servicePoint2) {
        this.selectedServicePoint = servicePoint2;
        this.$emit("selectedServicePoint", servicePoint2);
      },
      getWarehouses() {
        getUserWarehouses({
          user_name: frappe.session.user
        }).then((result) => {
          if (result && result.length > 0) {
            this.warehouses = result;
            this.setWarehouse(result[0]);
            this.loading = false;
          } else {
            frappe.msgprint({
              message: `You are not assigned to any warehouse.
Contact Support for help.`,
              indicator: "red"
            }, 5);
          }
        });
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "ward-selection"}, [
      _c("b-row", {staticClass: "no-background"}, [
        _vm.selectedWarehouse && _vm.selectedWarehouse.warehouse ? _c("b-col", {staticClass: "no-background", attrs: {cols: "10"}}, [
          _c("b-dropdown", {
            staticClass: "fill-width custom-menu-bg",
            staticStyle: {width: "100%", margin: "auto"},
            attrs: {
              text: _vm.selectedWarehouse.warehouse,
              variant: "primary",
              split: "",
              "split-variant": "outline-secondary"
            }
          }, _vm._l(_vm.warehouses, function(warehouse) {
            return _c("b-dropdown-item", {
              key: warehouse.name,
              staticStyle: {"text-transform": "capitalize"},
              on: {
                click: function($event) {
                  return _vm.setWarehouse(warehouse);
                }
              }
            }, [_vm._v(_vm._s(warehouse.warehouse))]);
          }), 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("b-col", {attrs: {md: "2"}})
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = function(inject) {
    if (!inject)
      return;
    inject("data-v-87d761be_0", {source: "\n.fill-width[data-v-87d761be] {\n    width: 100% !important;\n}\n.firt-text[data-v-87d761be] {\n    font-size: large;\n}\n.cust-nav[data-v-87d761be] {\n    box-shadow: 0px 0px !important;\n    padding: 0px !important;\n}\n.ward-selection[data-v-87d761be] {\n    background: rgba(76, 175, 80, 0);\n    padding: auto;\n}\n.unit-title[data-v-87d761be] {\n    font-weight: 700;\n    color: dimgray;\n    margin-bottom: 0px !important;\n}\n.no-background[data-v-87d761be] {\n    background: rgba(76, 175, 80, 0);\n}\n.custom-menu-bg[data-v-87d761be] {\n    background: white;\n    border-radius: 7px;\n    border: 0px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/sidebar/WarehouseSelect.vue"], "names": [], "mappings": ";AAwIA;IACA,sBAAA;AACA;AAEA;IACA,gBAAA;AACA;AAEA;IACA,8BAAA;IACA,uBAAA;AACA;AAEA;IACA,gCAAA;IACA,aAAA;AACA;AAEA;IACA,gBAAA;IACA,cAAA;IACA,6BAAA;AACA;AAEA;IACA,gCAAA;AACA;AAEA;IACA,iBAAA;IACA,kBAAA;IACA,WAAA;AACA", "file": "WarehouseSelect.vue", "sourcesContent": [`<template>
    <div class="ward-selection">
        <b-row class="no-background">
            <!-- {{ warehouses }} {{ servicePoints }} -->
            <b-col v-if="selectedWarehouse && selectedWarehouse.warehouse" cols="10" class="no-background">
                <b-dropdown :text="selectedWarehouse.warehouse" variant="primary" split split-variant="outline-secondary" class="fill-width custom-menu-bg" style="width:100%;margin:auto;">
                    <b-dropdown-item v-for="warehouse in warehouses" :key="warehouse.name" @click="setWarehouse(warehouse)" style="text-transform: capitalize;">{{ warehouse.warehouse }}</b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col md="2">
                <!-- <button @click="refresh" class="text-muted btn btn-default  icon-btn" title="" style="margin:auto;" data-original-title="Refresh">
                            <svg class="icon icon-md" style="">
                            <use class="" href="#icon-refresh"></use>
                            </svg>
                        </button> -->
            </b-col>
        </b-row>
        <!-- <div style="margin-top:16px;">
            <b-dropdown v-if="selectedServicePoint && selectedServicePoint.point_name" :text="selectedServicePoint.point_name + ' ' + servicePoint.service_type" variant="primary" split split-variant="outline-secondary" class="fill-width custom-menu-bg" style="width:100%;margin:auto;">
                <b-dropdown-item v-for="servicePoint in servicePoints" :key="servicePoint.name" @click="setServicePoint(servicePoint)">{{ servicePoint.point_name }}: {{ servicePoint.service_type }} </b-dropdown-item>
            </b-dropdown>
        </div> -->
    </div>
</template>

<script>

import {
    getUserWarehouses,
    getWarehouseServicePoints
} from '../../../../services/pharmacy/prescriptions.js'
import warehouseModule from "../../../../state/pharmacy-warehouse";


export default {
    name: 'WarehouseSelect',
    props: {
        servicePoint: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // warehouses: [],
            // selectedWarehouse: null,
            // servicePoints: null,
            // selectedServicePoint: null
        };
    },
    computed: {
        // warehouses() {
        //     return this.$store.getters["warehouseModule/warehouses"];
        // },
        // servicePoints() {
        //     return this.$store.getters["warehouseModule/servicePoints"];
        // },
        //  selectedWarehouse() {
        //     return this.$store.getters["warehouseModule/selectedWarehouse"];
        // },
        //  selectedServicePoint() {
        //     return this.$store.getters["warehouseModule/selectedServicePoint"];
        // },
    },
    created() {
        this.$store.registerModule("warehouseModule", warehouseModule);

    },
    mounted() {
        this.getWarehouses();
    },
    watch: {
        selectedWarehouse() {
            // this.$store.dispatch("warehouseModule/fetchWarehouseServicePoints", this.selectedWarehouse.warehouse);

            getWarehouseServicePoints({ warehouse_name: this.selectedWarehouse.warehouse }).then(result => {
                if (result && result.length > 0) {
                    this.servicePoints = result;
                    this.setServicePoint(result[0])
                } else {
                    frappe.msgprint({
                        message: \`No service Point(s) for this warehoue.\`,
                        indicator: 'red'
                    }, 5);
                }
            })
        },
        warehouses(){
            // alert('warehouses')
            this.setWarehouse(this.warehouses[0]);
        },
         servicePoints(){
            // alert('servicePoints')
            this.setServicePoint(this.servicePoints[0]);
        }
    },
    methods: {
        refresh() {
            if (this.selectedWarehouse && this.selectedServicePoint) {
                this.$emit('warehouseSelected', this.selectedWarehouse)
                this.$emit('selectedServicePoint', this.selectedServicePoint)
            }
        },
        setWarehouse(warehouse) {
            this.selectedWarehouse = warehouse;
            this.$emit('warehouseSelected', warehouse)
        },
        setServicePoint(servicePoint) {
            this.selectedServicePoint = servicePoint;
            this.$emit('selectedServicePoint', servicePoint)
        },
        getWarehouses() {

            // this.$store.dispatch("warehouseModule/fetchUserWarehouses", '');
            
            getUserWarehouses({
                user_name: frappe.session.user
            }).then(result => {
                if (result && result.length > 0) {

                    this.warehouses = result;
                    this.setWarehouse(result[0]);
                    this.loading = false;
                } else {
                    frappe.msgprint({
                        message: \`You are not assigned to any warehouse.\\nContact Support for help.\`,
                        indicator: 'red'
                    }, 5);
                }
            });
        }
    }
}
</script>

<style scoped>
.fill-width {
    width: 100% !important;
}

.firt-text {
    font-size: large;
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
</style>`]}, media: void 0});
  };
  var __vue_scope_id__2 = "data-v-87d761be";
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div class="ward-selection">
        <b-row class="no-background">
            <!-- {{ warehouses }} {{ servicePoints }} -->
            <b-col v-if="selectedWarehouse && selectedWarehouse.warehouse" cols="10" class="no-background">
                <b-dropdown :text="selectedWarehouse.warehouse" variant="primary" split split-variant="outline-secondary" class="fill-width custom-menu-bg" style="width:100%;margin:auto;">
                    <b-dropdown-item v-for="warehouse in warehouses" :key="warehouse.name" @click="setWarehouse(warehouse)" style="text-transform: capitalize;">{{ warehouse.warehouse }}</b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col md="2">
                <!-- <button @click="refresh" class="text-muted btn btn-default  icon-btn" title="" style="margin:auto;" data-original-title="Refresh">
                            <svg class="icon icon-md" style="">
                            <use class="" href="#icon-refresh"></use>
                            </svg>
                        </button> -->
            </b-col>
        </b-row>
        <!-- <div style="margin-top:16px;">
            <b-dropdown v-if="selectedServicePoint && selectedServicePoint.point_name" :text="selectedServicePoint.point_name + ' ' + servicePoint.service_type" variant="primary" split split-variant="outline-secondary" class="fill-width custom-menu-bg" style="width:100%;margin:auto;">
                <b-dropdown-item v-for="servicePoint in servicePoints" :key="servicePoint.name" @click="setServicePoint(servicePoint)">{{ servicePoint.point_name }}: {{ servicePoint.service_type }} </b-dropdown-item>
            </b-dropdown>
        </div> -->
    </div>
</template>

<script>

import {
    getUserWarehouses,
    getWarehouseServicePoints
} from '../../../../services/pharmacy/prescriptions.js'
import warehouseModule from "../../../../state/pharmacy-warehouse";


export default {
    name: 'WarehouseSelect',
    props: {
        servicePoint: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // warehouses: [],
            // selectedWarehouse: null,
            // servicePoints: null,
            // selectedServicePoint: null
        };
    },
    computed: {
        // warehouses() {
        //     return this.$store.getters["warehouseModule/warehouses"];
        // },
        // servicePoints() {
        //     return this.$store.getters["warehouseModule/servicePoints"];
        // },
        //  selectedWarehouse() {
        //     return this.$store.getters["warehouseModule/selectedWarehouse"];
        // },
        //  selectedServicePoint() {
        //     return this.$store.getters["warehouseModule/selectedServicePoint"];
        // },
    },
    created() {
        this.$store.registerModule("warehouseModule", warehouseModule);

    },
    mounted() {
        this.getWarehouses();
    },
    watch: {
        selectedWarehouse() {
            // this.$store.dispatch("warehouseModule/fetchWarehouseServicePoints", this.selectedWarehouse.warehouse);

            getWarehouseServicePoints({ warehouse_name: this.selectedWarehouse.warehouse }).then(result => {
                if (result && result.length > 0) {
                    this.servicePoints = result;
                    this.setServicePoint(result[0])
                } else {
                    frappe.msgprint({
                        message: \`No service Point(s) for this warehoue.\`,
                        indicator: 'red'
                    }, 5);
                }
            })
        },
        warehouses(){
            // alert('warehouses')
            this.setWarehouse(this.warehouses[0]);
        },
         servicePoints(){
            // alert('servicePoints')
            this.setServicePoint(this.servicePoints[0]);
        }
    },
    methods: {
        refresh() {
            if (this.selectedWarehouse && this.selectedServicePoint) {
                this.$emit('warehouseSelected', this.selectedWarehouse)
                this.$emit('selectedServicePoint', this.selectedServicePoint)
            }
        },
        setWarehouse(warehouse) {
            this.selectedWarehouse = warehouse;
            this.$emit('warehouseSelected', warehouse)
        },
        setServicePoint(servicePoint) {
            this.selectedServicePoint = servicePoint;
            this.$emit('selectedServicePoint', servicePoint)
        },
        getWarehouses() {

            // this.$store.dispatch("warehouseModule/fetchUserWarehouses", '');
            
            getUserWarehouses({
                user_name: frappe.session.user
            }).then(result => {
                if (result && result.length > 0) {

                    this.warehouses = result;
                    this.setWarehouse(result[0]);
                    this.loading = false;
                } else {
                    frappe.msgprint({
                        message: \`You are not assigned to any warehouse.\\nContact Support for help.\`,
                        indicator: 'red'
                    }, 5);
                }
            });
        }
    }
}
</script>

<style scoped>
.fill-width {
    width: 100% !important;
}

.firt-text {
    font-size: large;
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
  var WarehouseSelect_default = __vue_component__2;

  // ../frontend/frontend/public/js/patient/components/SearchInput.vue
  var __vue_script__3 = {
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
  var __vue_render__3 = function() {
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
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
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
  var __vue_scope_id__3 = "data-v-e8f18e06";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
  var SearchInput_default = __vue_component__3;

  // ../frontend/frontend/public/js/services/pharmacy/queue.js
  var api2 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, freeze, args, callback: resolve}));
  var getPrescriptionQueue = ({
    start = 0,
    page_length = 20,
    service_point
  }) => api2({
    method: "clinical.api.queue.pharmacy.get_queue_state",
    args: {
      start,
      page_length,
      service_point
    }
  }).then(({message}) => message);
  var removeFromQueue2 = ({
    queue_state_name
  }) => api2({
    method: "clinical.clinical.doctype.queue_state.queue_state.remove_from_queue",
    args: {
      queue_state_name
    }
  }).then(({message}) => message);
  var updateQueueStatus = ({
    state_name,
    status
  }) => api2({
    method: "clinical.clinical.doctype.queue_state.queue_state.update_queue_status",
    args: {
      state_name,
      status
    }
  }).then(({message}) => message);
  var searchPrescriptionQueue = ({
    service_point = "",
    query
  }) => api2({
    method: "clinical.api.queue.pharmacy.search_queue_state",
    args: {
      service_point,
      query
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/pharmacy/components/core/sidebar/Sidebar.vue
  var __vue_script__4 = {
    components: {
      SidebarItem: SidebarItem_default,
      WarehouseSelect: WarehouseSelect_default,
      SearchInput: SearchInput_default
    },
    props: {
      currentServicePoint: {
        type: Object,
        required: true,
        default: {}
      }
    },
    data() {
      return {
        queueList: [],
        queue: [],
        servicePoint: null,
        prescriptions: [],
        loading: false,
        patientSearchQuery: "",
        warehouse: null,
        activeIndex: 0,
        socket: void 0,
        searchTerm: ""
      };
    },
    watch: {
      queueList() {
        console.log(this.queueList);
        const inList = [];
        const newList = [];
        this.queueList.forEach((e) => {
          if (inList.indexOf(e.patient) === -1) {
            newList.push(e);
            inList.push(e.patient);
          }
        });
        this.queue = newList;
        console.log(">>>>>>>", newList);
      },
      servicePoint() {
        if (this.servicePoint.name) {
          this.getQueueList();
        }
      }
    },
    methods: {
      searchClicked() {
        const search = this.searchTerm || " ";
        this.searchTerm = "";
        if (search && search.length) {
          searchPrescriptionQueue({
            service_point: this.servicePoint && this.servicePoint.name,
            query: search
          }).then((r) => {
            this.queueList = r;
            r.forEach((item, index) => {
            });
          });
        } else {
          if (this.servicePoint) {
            this.onSelectedServicePoint(this.servicePoint);
          }
        }
      },
      getVariant(status) {
        const variant = {
          checkin: "danger",
          invoiced: "primary",
          "payment complete": "warning"
        };
        return variant[(status || "").toLowerCase()] || "info";
      },
      getQueueList() {
        const parent2 = this;
        getPrescriptionQueue({service_point: this.servicePoint.name}).then((result) => {
          console.log(result);
          if (result && result.length > 0) {
            parent2.queueListItemClicked(result[0]);
            parent2.queueList = result;
            result.forEach((item, index) => {
            });
          } else {
            frappe.show_alert({
              message: `No queue for ${servicePoint.point_name}`,
              indicator: "green"
            }, 10);
          }
        });
      },
      upsertQueueList(listItem) {
        let replaced = false;
        let parent2 = this;
        parent2.queue.map((item, x) => {
          if (item.name === listItem.name) {
            if (listItem.action && listItem.action === "Transfer") {
              this.$delete(this.queueList, x);
              replaced = true;
            } else if (listItem.action && listItem.action === "Removed") {
              this.$delete(this.queueList, x);
              replaced = true;
            } else {
              Vue.set(this.queueList, x, listItem);
              this.$emit("queueStateUpdated", listItem);
              replaced = true;
            }
          }
        });
        if (!replaced) {
          this.queueList.push(listItem);
          if (this.queueList && this.queueList.length === 1) {
            this.queueListItemClicked(listItem);
          }
        }
      },
      queueListItemClicked(queueListItem) {
        this.$emit("prescriptionClicked", queueListItem);
      },
      toggleActive(index) {
        this.activeIndex = index;
      },
      onSelectedServicePoint(servicePoint2) {
        this.servicePoint = servicePoint2;
        let parent2 = this;
        this.queueList = [];
        this.$emit("prescriptionClicked", {});
        if (servicePoint2.name) {
          getPrescriptionQueue({service_point: servicePoint2.name}).then((result) => {
            if (result && result.length > 0) {
              parent2.queueListItemClicked(result[0]);
              parent2.queueList = result;
              result.forEach((item, index) => {
              });
            } else {
              frappe.show_alert({
                message: `No queue for ${servicePoint2.point_name}`,
                indicator: "green"
              }, 10);
            }
          });
        }
      },
      prescriptionClicked(prescription) {
        this.$emit("prescriptionClicked", prescription);
      },
      createSearchControl(servicePoint2) {
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
    },
    mounted() {
      let parent2 = this;
      if (!this.servicePoint) {
        this.servicePoint = this.currentServicePoint;
      }
      if (this.servicePoint.name) {
        this.getQueueList();
      }
    },
    filters: {
      Upper(value) {
        return value.toUpperCase();
      },
      title(str) {
        return str.replace(/\w([^-\s]*)/g, function(txt = "") {
          return (txt || "").charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      },
      last_5(str) {
        return str.substring(str.length - 5);
      },
      nameInitials(fullName) {
        return fullName.split(" ").map((name, index) => name && index < 1 ? name[0] : "").join("");
      }
    }
  };
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("b-container", {staticClass: "side-bar-area aside-bottom-padding"}, [
      _c("b-row", [
        _c("b-col", [
          _c("form", {
            staticClass: "form-inline fill-width justify-content-center",
            attrs: {role: "search", onsubmit: "return false;"}
          }, [
            _c("div", {staticClass: "input-group search-bar text-muted no-sides"}, [
              _c("div", {staticClass: "awesomplete"}, [
                _c("b-form-input", {
                  staticClass: "form-control rounded",
                  attrs: {
                    id: "navbar-search",
                    placeholder: "Search patients",
                    size: "lg",
                    "aria-haspopup": "true"
                  },
                  on: {
                    focus: function($event) {
                      _vm.placeholder = "Search patient..";
                    },
                    blur: function($event) {
                      _vm.placeholder = "Search patient...";
                    }
                  },
                  model: {
                    value: _vm.searchTerm,
                    callback: function($$v) {
                      _vm.searchTerm = $$v;
                    },
                    expression: "searchTerm"
                  }
                })
              ], 1),
              _vm._v(" "),
              _c("span", {staticClass: "search-icon"}, [
                _c("svg", {staticClass: "icon icon-sm"}, [
                  _c("use", {attrs: {"xlink:href": "#icon-search"}})
                ])
              ])
            ]),
            _vm._v(" "),
            _c("button", {
              staticClass: "btn btn-default btn-custom",
              on: {click: _vm.searchClicked}
            }, [_vm._v("Go")])
          ])
        ])
      ], 1),
      _vm._v(" "),
      _c("div", {staticClass: "content-area"}, [
        _c("b-row", [
          _c("b-col", {attrs: {cols: "12"}}, [
            _vm.loading ? _c("div", {
              staticStyle: {
                "padding-top": "60%",
                "text-align": "center",
                height: "100vh"
              }
            }, [
              _c("b-spinner", {
                staticStyle: {
                  width: "100px",
                  height: "100px",
                  margin: "auto"
                }
              })
            ], 1) : _c("div", {}, [
              _c("div", {staticStyle: {"z-index": "initial"}}, [
                _c("b-list-group", {
                  staticClass: "top-margin-space",
                  staticStyle: {width: "100%"}
                }, [
                  _vm._l(_vm.queue, function(queueListItem, idx) {
                    return _c("b-list-group-item", {
                      key: queueListItem.name,
                      ref: queueListItem.patient,
                      refInFor: true,
                      class: {active: idx == _vm.activeIndex},
                      on: {
                        click: [
                          function($event) {
                            return _vm.toggleActive(idx);
                          },
                          function($event) {
                            return _vm.queueListItemClicked(queueListItem);
                          }
                        ]
                      }
                    }, [
                      _c("b-row", [
                        _c("b-col", {attrs: {md: "3"}}, [
                          _c("b-button", {
                            staticClass: "psm",
                            staticStyle: {color: "white"}
                          }, [
                            _c("span", {attrs: {id: "ico"}}, [_vm._v(_vm._s(idx + 1))])
                          ])
                        ], 1),
                        _vm._v(" "),
                        _c("b-col", {attrs: {md: "9"}}, [
                          _c("b-row", [
                            _c("b-col", [
                              _c("p", [
                                _vm._v(" " + _vm._s(queueListItem.patient_name) + " "),
                                _c("b-badge", {
                                  staticStyle: {
                                    border: "1px solid gray"
                                  },
                                  attrs: {
                                    pill: "",
                                    variant: "light"
                                  }
                                }, [
                                  _vm._v(_vm._s(queueListItem.age + "(" + (queueListItem.gender || "").charAt(0) + ")"))
                                ])
                              ], 1)
                            ])
                          ], 1),
                          _vm._v(" "),
                          _c("b-row", [
                            _c("b-col", [
                              _c("b-badge", {
                                staticStyle: {
                                  "text-transform": "capitalize"
                                },
                                attrs: {
                                  variant: _vm.getVariant(queueListItem.status),
                                  pill: ""
                                }
                              }, [
                                _c("span", {}, [
                                  _vm._v(" " + _vm._s(queueListItem.status))
                                ])
                              ])
                            ], 1)
                          ], 1)
                        ], 1)
                      ], 1)
                    ], 1);
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticStyle: {
                      "min-height": "100px",
                      width: "100%"
                    }
                  })
                ], 2)
              ], 1)
            ])
          ])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__4._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-324e0abc_0", {source: '\n.search-bar[data-v-324e0abc] {\n    flex: 1;\n    max-width: 3000px;\n}\n.list-group-item[data-v-324e0abc] {\n  position: relative;\n  display: block;\n  padding: 8px 1.25rem;\n  background-color: #fff;\n}\n.list-group-item[data-v-324e0abc]:hover {\n    background: lightgray;\n    cursor: pointer;\n}\n.list-group-item-secondary[data-v-324e0abc] {\n    /* -webkit-box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7);\n  box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7); */\n    border-left: 5px solid #7c2112;\n}\n.list-group-item-secondary[data-v-324e0abc] {\n    background: #1f19192b;\n}\n.b-avatar[data-v-324e0abc] {\n    font-size: inherit;\n    font-weight: 400;\n    line-height: 1;\n    text-align: center;\n    background: white;\n    color: black;\n    border: 1px solid darkgray;\n}\n.fixed-header[data-v-324e0abc] {\n    width: 100%;\n    position: fixed;\n    top: 400px;\n}\n.fixed-header[data-v-324e0abc] {\n    top: 0;\n}\n.active[data-v-324e0abc] {\n    color:black;\n    /* border-left: 5px solid #2490ef;\n    border-right: 5px solid #2490ef; */\n    background-color: lightgray;\n    border-left: 5px solid #06a79e;\n    border-top:1px solid lightgray;\n    border-bottom:1px solid lightgray;\n}\n.tb-row[data-v-324e0abc] {\n    cursor: pointer;\n}\nbody[data-v-324e0abc] {\n    font-family: sans-serif;\n    font-size: 16px;\n    color: #fff;\n}\nul.sidebar-menu[data-v-324e0abc] {\n    margin: 0;\n    padding: 0;\n    max-width: 450px;\n    list-style: none;\n    list-style-type: none;\n}\n.sidebar-menu li a span[data-v-324e0abc] {\n    margin-right: 20px;\n    color: #fff;\n}\n.sidebar-menu li a[data-v-324e0abc] {\n    background-color: #d7dde2;\n    padding: 20px 25px;\n    display: block;\n    text-decoration: none;\n    color: #fff;\n}\n.sidebar-menu li a[data-v-324e0abc]:hover {\n    background-color: #d7dde2;\n    padding: 20px 25px;\n    display: block;\n    text-decoration: none;\n    color: #fff;\n}\nli.have-children ul[data-v-324e0abc] {\n    padding: 0px;\n}\nli.have-children ul li a[data-v-324e0abc] {\n    background-color: #d7dde2;\n    padding-left: 62px;\n}\nli.have-children ul li a[data-v-324e0abc]:hover {\n    color: #fff;\n    background-color: #d7dde2;\n    padding-left: 62px;\n}\nli.have-children[data-v-324e0abc],\nli[data-v-324e0abc] {\n    position: relative;\n}\n.have-children span[data-v-324e0abc]::after {\n    position: absolute;\n    right: 30px;\n    content: "\\f054";\n    color: #fff;\n    transition: all .5s;\n}\nli.active.have-children span[data-v-324e0abc]::after {\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n.sidebar-menu .have-children>ul[data-v-324e0abc] {\n    display: none;\n}\n.no-sides[data-v-324e0abc] {\n    margin-left: 0px;\n    margin-right: 8px;\n}\n.side-bar-area[data-v-324e0abc] {\n    background: white;\n    width: 100% !important;\n    padding-top: 20px;\n    min-height: 600px;\n    height: 100vh;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    background-color: white;\n    background-image: linear-gradient(315deg, #06a79e 0%, #6f5a7b 74%);\n    padding-left: 11px !important;\n    padding-right: 11px !important;\n}\n.name-header[data-v-324e0abc] {\n    background: #b1d0eb;\n    color: white;\n    padding: 14px;\n    border-radius: 0px 16px 16px 0px;\n    width: 95%;\n    font-weight: 800;\n}\n.search-input[data-v-324e0abc] {\n    margin-top: 5%;\n}\n.no-results[data-v-324e0abc] {\n    margin-top: 5%;\n    padding-left: 7%;\n}\n.rounded[data-v-324e0abc] {\n    border-radius: 12px;\n}\n.top-margin-space[data-v-324e0abc] {\n    padding-bottom: 8px;\n    height: 85vh;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    scrollbar-width: thin;\n    background: white;\n    position: absolute;\n}\n.no-border[data-v-324e0abc] {\n    border: 0px solid black !important;\n}\n.form-control[data-v-324e0abc] {\n    padding: 0.438rem 1rem;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 0px solid #d8d6de;\n    border-radius: 0.357rem;\n    width: 100%;\n    font-weight: 400;\n    line-height: 1.45;\n    font-size: 13px;\n    color: #6e6b7b;\n    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.btn-custom[data-v-324e0abc] {\n    height: 36px;\n}\n.menu-options[data-v-324e0abc] {\n    margin-left: 0px;\n    font-size: 18px;\n    margin-top: 12px;\n    width: 100%;\n}\n.closed[data-v-324e0abc] {\n    padding-right: 0px !important;\n    padding-left: 6px !important;\n}\n.psm[data-v-324e0abc] {\n    display: inline-block;\n    border-radius: 50px;\n    box-shadow: 0px 0px 2px #888;\n    height: 40px;\n    width: 40px;\n    text-align: center;\n    position: relative;\n    padding-bottom:10px ;\n    position: relative;\n    margin-top: 5px;\n}\n#ico[data-v-324e0abc]{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 60%;\n    transform: translate(-50%, -50%);\n    width: 20px;\n    height: 20px;\n    display: block;\n    color:black;\n    font-weight:700px;\n}\n.content-area[data-v-324e0abc]{\nheight: 87vh;\noverflow-y: hidden;\noverflow-x: hidden;\nscrollbar-width:thin;\nbackground: white;\npadding-bottom: 16px;\npadding-left: -5px;\nborder-radius: 5px;\nmargin-top: 10px;\n position: relative;\n}\n', map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/sidebar/Sidebar.vue"], "names": [], "mappings": ";AA+VA;IACA,OAAA;IACA,iBAAA;AACA;AAEA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;EACA,sBAAA;AACA;AAEA;IACA,qBAAA;IACA,eAAA;AACA;AAEA;IACA;uDACA;IACA,8BAAA;AACA;AAEA;IACA,qBAAA;AACA;AAEA;IACA,kBAAA;IACA,gBAAA;IACA,cAAA;IACA,kBAAA;IACA,iBAAA;IACA,YAAA;IACA,0BAAA;AACA;AAEA;IACA,WAAA;IACA,eAAA;IACA,UAAA;AACA;AAEA;IACA,MAAA;AACA;AAEA;IACA,WAAA;IACA;sCACA;IACA,2BAAA;IACA,8BAAA;IACA,8BAAA;IACA,iCAAA;AACA;AAEA;IACA,eAAA;AACA;AAEA;IACA,uBAAA;IACA,eAAA;IACA,WAAA;AACA;AAEA;IACA,SAAA;IACA,UAAA;IACA,gBAAA;IACA,gBAAA;IACA,qBAAA;AACA;AAEA;IACA,kBAAA;IACA,WAAA;AACA;AAEA;IACA,yBAAA;IACA,kBAAA;IACA,cAAA;IACA,qBAAA;IACA,WAAA;AACA;AAEA;IACA,yBAAA;IACA,kBAAA;IACA,cAAA;IACA,qBAAA;IACA,WAAA;AACA;AAEA;IACA,YAAA;AACA;AAEA;IACA,yBAAA;IACA,kBAAA;AACA;AAEA;IACA,WAAA;IACA,yBAAA;IACA,kBAAA;AACA;AAEA;;IAEA,kBAAA;AACA;AAEA;IACA,kBAAA;IACA,WAAA;IACA,gBAAA;IACA,WAAA;IACA,mBAAA;AACA;AAEA;IACA,6BAAA;IACA,2BAAA;IACA,gCAAA;IACA,wBAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;IACA,gBAAA;IACA,iBAAA;AACA;AAEA;IACA,iBAAA;IACA,sBAAA;IACA,iBAAA;IACA,iBAAA;IACA,aAAA;IACA,kBAAA;IACA,kBAAA;IACA,uBAAA;IACA,kEAAA;IACA,6BAAA;IACA,8BAAA;AACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,gCAAA;IACA,UAAA;IACA,gBAAA;AACA;AAEA;IACA,cAAA;AACA;AAEA;IACA,cAAA;IACA,gBAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,kBAAA;IACA,kBAAA;IACA,qBAAA;IACA,iBAAA;IACA,kBAAA;AACA;AAEA;IACA,kCAAA;AACA;AAEA;IACA,sBAAA;IACA,sBAAA;IACA,4BAAA;IACA,yBAAA;IACA,uBAAA;IACA,WAAA;IACA,gBAAA;IACA,iBAAA;IACA,eAAA;IACA,cAAA;IACA,wFAAA;IACA,gFAAA;IACA,wEAAA;IACA,8GAAA;AACA;AAEA;IACA,YAAA;AACA;AAEA;IACA,gBAAA;IACA,eAAA;IACA,gBAAA;IACA,WAAA;AACA;AAEA;IACA,6BAAA;IACA,4BAAA;AACA;AACA;IACA,qBAAA;IACA,mBAAA;IACA,4BAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,kBAAA;IACA,oBAAA;IACA,kBAAA;IACA,eAAA;AAEA;AACA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,WAAA;IACA,gCAAA;IACA,WAAA;IACA,YAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;AACA;AACA;AACA,YAAA;AACA,kBAAA;AACA,kBAAA;AACA,oBAAA;AACA,iBAAA;AACA,oBAAA;AACA,kBAAA;AACA,kBAAA;AACA,gBAAA;CACA,kBAAA;AACA", "file": "Sidebar.vue", "sourcesContent": [`<template>

<b-container class="side-bar-area aside-bottom-padding">
      <b-row>
                <!-- <b-container> -->
                <!-- <b-row> -->
                <b-col>
                    <!-- style="margin-left:4px;margin-right:8px;width:100%;" -->
                    <form class="form-inline fill-width justify-content-center" role="search" onsubmit="return false;">
                        <div class="input-group search-bar text-muted no-sides">
                            <div class="awesomplete">
                                <b-form-input id="navbar-search" class="form-control rounded" placeholder="Search patients" @focus="placeholder = 'Search patient..'" @blur="placeholder = 'Search patient...'" v-model="searchTerm" size="lg" aria-haspopup="true"></b-form-input>
                            </div>
                            <span class="search-icon">
                                        <svg class="icon icon-sm">
                                        <use xlink:href="#icon-search"></use>
                                        </svg>
                                    </span>
                        </div>
                        <button class="btn btn-default btn-custom" @click="searchClicked">Go</button>
                    </form>
                </b-col>
                <!-- </b-row> -->
                <!-- </b-container> -->
            </b-row>
  <div class="content-area">
    <b-row>
      <b-col cols="12">
    <div v-if="loading" style="padding-top:60%; text-align:center; height:100vh;">
            <b-spinner style="width: 100px; height: 100px;margin:auto;"></b-spinner>
        </div>
        <div v-else style="">
            <!-- <div>
                            <b-row style="margin-bottom:1%;margin-top:1%;">
                                <b-col>
                                    <WarehouseSelect :servicePoint="servicePoint" @selectedServicePoint="onSelectedServicePoint" />
                                </b-col>
                            </b-row>
                        </div> -->
          
            <div style="z-index:initial;">
                <b-list-group style="width:100%;" class="top-margin-space">
                    <b-list-group-item  v-for="(queueListItem , idx) in queue" :key="queueListItem.name" :ref="queueListItem.patient" v-on:click="toggleActive(idx)" :class="{'active': idx == activeIndex}" @click="queueListItemClicked(queueListItem)">
                        <b-row>
                            <b-col md="3">
                                <!-- <b-avatar class="mr-2" :text="queueListItem.patient_name | nameInitials" :size="avatarSize"></b-avatar> -->
                                <!-- <span style="font-weight:800;">
                                        <b-avatar class="mr-2" :text="queueListItem.queue_number" size="2rem"></b-avatar>
                                    </span>  -->
                                <b-button class="psm" style="color: white">
                                    <span id="ico">{{idx + 1}}</span>
                                </b-button>
                            </b-col>
                            <b-col md="9">
                                <b-row>
                                    <b-col>
                                        <p> {{ queueListItem.patient_name }} <b-badge style="border:1px solid gray" pill variant="light">{{queueListItem.age +"("+ (queueListItem.gender || '').charAt(0)+")"}}</b-badge></p>
                                        
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <!-- <b-col>
                                            <small>#{{ queueListItem.appointment | last_5 }}	</small>
                                        </b-col> -->
                                    <b-col>
                                        <b-badge style="text-transform: capitalize;" :variant="getVariant(queueListItem.status)" pill>
                                            <span style=""> {{queueListItem.status}}</span>
                                        </b-badge>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <div style="min-height: 100px; width: 100%;" />
                </b-list-group>
            </div>
        </div>

    
      </b-col>
    </b-row>
  </div> 

</b-container>

</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import WarehouseSelect from "./WarehouseSelect.vue";
import SearchInput from "../../../../patient/components/SearchInput.vue";
import {
    searchPrescriptions,
    filterPrescriptions,
    getWarehouseServicePoints
} from '../../../../services/pharmacy/prescriptions.js'

import { getPrescriptionQueue, searchPrescriptionQueue } from '../../../../services/pharmacy/queue.js';

export default {
    components: {
        SidebarItem,
        WarehouseSelect,
        SearchInput
    },
     props: {
        currentServicePoint: {
            type: Object,
            required: true,
            default: {}
        }
    },
    data() {
        return {
            queueList: [],
            queue: [],
            servicePoint: null,
            prescriptions: [],
            loading: false,
            patientSearchQuery: '',
            warehouse: null,
            activeIndex: 0,
            socket: undefined,
            searchTerm: ''
        };
    },
    watch: {
        queueList(){
            console.log(this.queueList);
            const inList = [];
            const newList = [];
            this.queueList.forEach((e) => {
                if(inList.indexOf(e.patient) === -1) {
                    newList.push(e);
                    inList.push(e.patient);
                }
            })
            this.queue = newList;
            console.log('>>>>>>>', newList)
        },
        servicePoint(){
            if(this.servicePoint.name){
                this.getQueueList()
        // this.searchClicked()
    }
        }
    },
    methods: {
        searchClicked() {
            const search = this.searchTerm || ' ';
            this.searchTerm = ''
            if (search && search.length) {
                searchPrescriptionQueue({
                    service_point: this.servicePoint && this.servicePoint.name,
                    query: search
                }).then(r => {
                    this.queueList = r;
                    r.forEach((item, index) => {
                       // this.socket.on(item.name, function(data) {});
                    });
                })
            } else {
                if(this.servicePoint) {
                    this.onSelectedServicePoint(this.servicePoint)
                }
            }
        },
        getVariant(status){
           const variant = {
               checkin: 'danger',
               invoiced: 'primary',
               'payment complete': 'warning'
           }
           return variant[(status || '').toLowerCase()] || 'info'
        },
        getQueueList(){
            const parent = this;
             getPrescriptionQueue({ service_point: this.servicePoint.name }).then(result => {
                 console.log(result)
                if (result && result.length > 0) {
                    parent.queueListItemClicked(result[0]);
                    parent.queueList = result;
                    result.forEach((item, index) => {
                        // parent.socket.on(item.name, function(data) {
                        //     parent.upsertQueueList(data);
                        // });
                    });
                    
                } else {
                    frappe.show_alert({
                        message: \`No queue for \${servicePoint.point_name}\`,
                        indicator: 'green'
                    }, 10);
                }
            })
        },
        upsertQueueList(listItem) {
            let replaced = false;
            let parent = this;
            parent.queue.map((item, x) => {
                if (item.name === listItem.name) {
                    if (listItem.action && listItem.action === 'Transfer') {
                        //this.onSelectedServicePoint(this.servicePoint);
                        this.$delete(this.queueList, x)
                        replaced = true;
                    } else if (listItem.action && listItem.action === 'Removed') {
                        //this.onSelectedServicePoint(this.servicePoint);
                        this.$delete(this.queueList, x)
                        replaced = true;
                    } else {
                        Vue.set(this.queueList, x, listItem);
                        this.$emit('queueStateUpdated', listItem)
                        replaced = true;
                    }
                }
            });
            if (!replaced) {
                this.queueList.push(listItem);
                // parent.socket.on(listItem.name, function(data) {
                //     parent.upsertQueueList(data);
                // });
                if (this.queueList && this.queueList.length === 1) {
                    this.queueListItemClicked(listItem);
                }
            }
        },
        queueListItemClicked(queueListItem) {
            this.$emit("prescriptionClicked", queueListItem);
        },
        toggleActive(index) {
            this.activeIndex = index;
        },
        onSelectedServicePoint(servicePoint) {
            this.servicePoint = servicePoint;
            // this.createSearchControl(servicePoint);
            let parent = this;
            // this.socket.on(servicePoint.name, function(data) {
            //     parent.upsertQueueList(data);
            //     frappe.show_alert({
            //         message: \`Queue Update on \${data.patient_name.replace(/^\\w/, c => c.toUpperCase())}\`,
            //         indicator: 'green'
            //     }, 50);
            // });
            this.queueList = [];
            this.$emit("prescriptionClicked", {});
            if (servicePoint.name){
                getPrescriptionQueue({ service_point: servicePoint.name }).then(result => {
                if (result && result.length > 0) {
                    parent.queueListItemClicked(result[0]);
                    parent.queueList = result;
                    result.forEach((item, index) => {
                        // parent.socket.on(item.name, function(data) {
                        //     parent.upsertQueueList(data);
                        // });
                    });
                } else {
                    frappe.show_alert({
                        message: \`No queue for \${servicePoint.point_name}\`,
                        indicator: 'green'
                    }, 10);
                }
            })
            }
        },
        prescriptionClicked(prescription) {
            this.$emit("prescriptionClicked", prescription);
        },
        createSearchControl(servicePoint) {
            // https://frappeframework.com/docs/user/en/api/controls
            /*let me = this;
            let prescription_search_field = frappe.ui.form.make_control({
                df: {
                    label:"Search",
                    fieldtype: "Link",
                    options: "Queue State",
                    fieldname: "searchQuery",
                    placeholder: __("Search patients."),
                    change: (e) => {
                        console.log(JSON.stringify(e))
                    },
                    on_change: (e) => {
					 console.log(JSON.stringify(e))
				    },
                    get_query: function(doc, dt, dn) {
                        return {
                            filters: { "service_point": servicePoint.name }
                        }
                    },
                    on_submit: (data) => {
                        console.log(JSON.stringify(data));
                    },
                },
                parent: me.$refs["queue-search"],
                render_input: true,
                only_input: true,
            });
            prescription_search_field.toggle_label(false);
            */
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
    },
    mounted() {
        // const host = this.get_host(3000);
        // const socket = io.connect();
        // this.socket = socket;
        let parent = this;
        // socket.on("connect", () => {
        //     console.log("Pharmacy Sidebar connected");
        // });
        if (!this.servicePoint) {
            this.servicePoint = this.currentServicePoint;
        }
        if(this.servicePoint.name){ 
            this.getQueueList()
    }},
    filters: {
        // Filter definitions
        Upper(value) {
            return value.toUpperCase();
        },
        title(str) {
            return str.replace(/\\w([^-\\s]*)/g, function(txt = '') {
                return (txt||'').charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        last_5(str) {
            return str.substring(str.length - 5);
        },
        nameInitials(fullName) {
            return fullName
                .split(" ")
                .map((name, index) => (name && index < 1 ? name[0] : ""))
                .join("");
        }
    }

};
</script>

<style scoped>
.search-bar {
    flex: 1;
    max-width: 3000px;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 8px 1.25rem;
  background-color: #fff;
}

.list-group-item:hover {
    background: lightgray;
    cursor: pointer;
}

.list-group-item-secondary {
    /* -webkit-box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7);
  box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7); */
    border-left: 5px solid #7c2112;
}

.list-group-item-secondary {
    background: #1f19192b;
}

.b-avatar {
    font-size: inherit;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    background: white;
    color: black;
    border: 1px solid darkgray;
}

.fixed-header {
    width: 100%;
    position: fixed;
    top: 400px;
}

.fixed-header {
    top: 0;
}

.active {
    color:black;
    /* border-left: 5px solid #2490ef;
    border-right: 5px solid #2490ef; */
    background-color: lightgray;
    border-left: 5px solid #06a79e;
    border-top:1px solid lightgray;
    border-bottom:1px solid lightgray;
}

.tb-row {
    cursor: pointer;
}

body {
    font-family: sans-serif;
    font-size: 16px;
    color: #fff;
}

ul.sidebar-menu {
    margin: 0;
    padding: 0;
    max-width: 450px;
    list-style: none;
    list-style-type: none;
}

.sidebar-menu li a span {
    margin-right: 20px;
    color: #fff;
}

.sidebar-menu li a {
    background-color: #d7dde2;
    padding: 20px 25px;
    display: block;
    text-decoration: none;
    color: #fff;
}

.sidebar-menu li a:hover {
    background-color: #d7dde2;
    padding: 20px 25px;
    display: block;
    text-decoration: none;
    color: #fff;
}

li.have-children ul {
    padding: 0px;
}

li.have-children ul li a {
    background-color: #d7dde2;
    padding-left: 62px;
}

li.have-children ul li a:hover {
    color: #fff;
    background-color: #d7dde2;
    padding-left: 62px;
}

li.have-children,
li {
    position: relative;
}

.have-children span::after {
    position: absolute;
    right: 30px;
    content: "\\f054";
    color: #fff;
    transition: all .5s;
}

li.active.have-children span::after {
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.sidebar-menu .have-children>ul {
    display: none;
}

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

.name-header {
    background: #b1d0eb;
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
    padding-bottom: 8px;
    height: 85vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    background: white;
    position: absolute;
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
    margin-top: 5px;
    
}
#ico{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 60%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color:black;
    font-weight:700px;
}
.content-area{
height: 87vh;
overflow-y: hidden;
overflow-x: hidden;
scrollbar-width:thin;
background: white;
padding-bottom: 16px;
padding-left: -5px;
border-radius: 5px;
margin-top: 10px;
 position: relative;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__4 = "data-v-324e0abc";
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>

<b-container class="side-bar-area aside-bottom-padding">
      <b-row>
                <!-- <b-container> -->
                <!-- <b-row> -->
                <b-col>
                    <!-- style="margin-left:4px;margin-right:8px;width:100%;" -->
                    <form class="form-inline fill-width justify-content-center" role="search" onsubmit="return false;">
                        <div class="input-group search-bar text-muted no-sides">
                            <div class="awesomplete">
                                <b-form-input id="navbar-search" class="form-control rounded" placeholder="Search patients" @focus="placeholder = 'Search patient..'" @blur="placeholder = 'Search patient...'" v-model="searchTerm" size="lg" aria-haspopup="true"></b-form-input>
                            </div>
                            <span class="search-icon">
                                        <svg class="icon icon-sm">
                                        <use xlink:href="#icon-search"></use>
                                        </svg>
                                    </span>
                        </div>
                        <button class="btn btn-default btn-custom" @click="searchClicked">Go</button>
                    </form>
                </b-col>
                <!-- </b-row> -->
                <!-- </b-container> -->
            </b-row>
  <div class="content-area">
    <b-row>
      <b-col cols="12">
    <div v-if="loading" style="padding-top:60%; text-align:center; height:100vh;">
            <b-spinner style="width: 100px; height: 100px;margin:auto;"></b-spinner>
        </div>
        <div v-else style="">
            <!-- <div>
                            <b-row style="margin-bottom:1%;margin-top:1%;">
                                <b-col>
                                    <WarehouseSelect :servicePoint="servicePoint" @selectedServicePoint="onSelectedServicePoint" />
                                </b-col>
                            </b-row>
                        </div> -->
          
            <div style="z-index:initial;">
                <b-list-group style="width:100%;" class="top-margin-space">
                    <b-list-group-item  v-for="(queueListItem , idx) in queue" :key="queueListItem.name" :ref="queueListItem.patient" v-on:click="toggleActive(idx)" :class="{'active': idx == activeIndex}" @click="queueListItemClicked(queueListItem)">
                        <b-row>
                            <b-col md="3">
                                <!-- <b-avatar class="mr-2" :text="queueListItem.patient_name | nameInitials" :size="avatarSize"></b-avatar> -->
                                <!-- <span style="font-weight:800;">
                                        <b-avatar class="mr-2" :text="queueListItem.queue_number" size="2rem"></b-avatar>
                                    </span>  -->
                                <b-button class="psm" style="color: white">
                                    <span id="ico">{{idx + 1}}</span>
                                </b-button>
                            </b-col>
                            <b-col md="9">
                                <b-row>
                                    <b-col>
                                        <p> {{ queueListItem.patient_name }} <b-badge style="border:1px solid gray" pill variant="light">{{queueListItem.age +"("+ (queueListItem.gender || '').charAt(0)+")"}}</b-badge></p>
                                        
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <!-- <b-col>
                                            <small>#{{ queueListItem.appointment | last_5 }}	</small>
                                        </b-col> -->
                                    <b-col>
                                        <b-badge style="text-transform: capitalize;" :variant="getVariant(queueListItem.status)" pill>
                                            <span style=""> {{queueListItem.status}}</span>
                                        </b-badge>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <div style="min-height: 100px; width: 100%;" />
                </b-list-group>
            </div>
        </div>

    
      </b-col>
    </b-row>
  </div> 

</b-container>

</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import WarehouseSelect from "./WarehouseSelect.vue";
import SearchInput from "../../../../patient/components/SearchInput.vue";
import {
    searchPrescriptions,
    filterPrescriptions,
    getWarehouseServicePoints
} from '../../../../services/pharmacy/prescriptions.js'

import { getPrescriptionQueue, searchPrescriptionQueue } from '../../../../services/pharmacy/queue.js';

export default {
    components: {
        SidebarItem,
        WarehouseSelect,
        SearchInput
    },
     props: {
        currentServicePoint: {
            type: Object,
            required: true,
            default: {}
        }
    },
    data() {
        return {
            queueList: [],
            queue: [],
            servicePoint: null,
            prescriptions: [],
            loading: false,
            patientSearchQuery: '',
            warehouse: null,
            activeIndex: 0,
            socket: undefined,
            searchTerm: ''
        };
    },
    watch: {
        queueList(){
            console.log(this.queueList);
            const inList = [];
            const newList = [];
            this.queueList.forEach((e) => {
                if(inList.indexOf(e.patient) === -1) {
                    newList.push(e);
                    inList.push(e.patient);
                }
            })
            this.queue = newList;
            console.log('>>>>>>>', newList)
        },
        servicePoint(){
            if(this.servicePoint.name){
                this.getQueueList()
        // this.searchClicked()
    }
        }
    },
    methods: {
        searchClicked() {
            const search = this.searchTerm || ' ';
            this.searchTerm = ''
            if (search && search.length) {
                searchPrescriptionQueue({
                    service_point: this.servicePoint && this.servicePoint.name,
                    query: search
                }).then(r => {
                    this.queueList = r;
                    r.forEach((item, index) => {
                       // this.socket.on(item.name, function(data) {});
                    });
                })
            } else {
                if(this.servicePoint) {
                    this.onSelectedServicePoint(this.servicePoint)
                }
            }
        },
        getVariant(status){
           const variant = {
               checkin: 'danger',
               invoiced: 'primary',
               'payment complete': 'warning'
           }
           return variant[(status || '').toLowerCase()] || 'info'
        },
        getQueueList(){
            const parent = this;
             getPrescriptionQueue({ service_point: this.servicePoint.name }).then(result => {
                 console.log(result)
                if (result && result.length > 0) {
                    parent.queueListItemClicked(result[0]);
                    parent.queueList = result;
                    result.forEach((item, index) => {
                        // parent.socket.on(item.name, function(data) {
                        //     parent.upsertQueueList(data);
                        // });
                    });
                    
                } else {
                    frappe.show_alert({
                        message: \`No queue for \${servicePoint.point_name}\`,
                        indicator: 'green'
                    }, 10);
                }
            })
        },
        upsertQueueList(listItem) {
            let replaced = false;
            let parent = this;
            parent.queue.map((item, x) => {
                if (item.name === listItem.name) {
                    if (listItem.action && listItem.action === 'Transfer') {
                        //this.onSelectedServicePoint(this.servicePoint);
                        this.$delete(this.queueList, x)
                        replaced = true;
                    } else if (listItem.action && listItem.action === 'Removed') {
                        //this.onSelectedServicePoint(this.servicePoint);
                        this.$delete(this.queueList, x)
                        replaced = true;
                    } else {
                        Vue.set(this.queueList, x, listItem);
                        this.$emit('queueStateUpdated', listItem)
                        replaced = true;
                    }
                }
            });
            if (!replaced) {
                this.queueList.push(listItem);
                // parent.socket.on(listItem.name, function(data) {
                //     parent.upsertQueueList(data);
                // });
                if (this.queueList && this.queueList.length === 1) {
                    this.queueListItemClicked(listItem);
                }
            }
        },
        queueListItemClicked(queueListItem) {
            this.$emit("prescriptionClicked", queueListItem);
        },
        toggleActive(index) {
            this.activeIndex = index;
        },
        onSelectedServicePoint(servicePoint) {
            this.servicePoint = servicePoint;
            // this.createSearchControl(servicePoint);
            let parent = this;
            // this.socket.on(servicePoint.name, function(data) {
            //     parent.upsertQueueList(data);
            //     frappe.show_alert({
            //         message: \`Queue Update on \${data.patient_name.replace(/^\\w/, c => c.toUpperCase())}\`,
            //         indicator: 'green'
            //     }, 50);
            // });
            this.queueList = [];
            this.$emit("prescriptionClicked", {});
            if (servicePoint.name){
                getPrescriptionQueue({ service_point: servicePoint.name }).then(result => {
                if (result && result.length > 0) {
                    parent.queueListItemClicked(result[0]);
                    parent.queueList = result;
                    result.forEach((item, index) => {
                        // parent.socket.on(item.name, function(data) {
                        //     parent.upsertQueueList(data);
                        // });
                    });
                } else {
                    frappe.show_alert({
                        message: \`No queue for \${servicePoint.point_name}\`,
                        indicator: 'green'
                    }, 10);
                }
            })
            }
        },
        prescriptionClicked(prescription) {
            this.$emit("prescriptionClicked", prescription);
        },
        createSearchControl(servicePoint) {
            // https://frappeframework.com/docs/user/en/api/controls
            /*let me = this;
            let prescription_search_field = frappe.ui.form.make_control({
                df: {
                    label:"Search",
                    fieldtype: "Link",
                    options: "Queue State",
                    fieldname: "searchQuery",
                    placeholder: __("Search patients."),
                    change: (e) => {
                        console.log(JSON.stringify(e))
                    },
                    on_change: (e) => {
					 console.log(JSON.stringify(e))
				    },
                    get_query: function(doc, dt, dn) {
                        return {
                            filters: { "service_point": servicePoint.name }
                        }
                    },
                    on_submit: (data) => {
                        console.log(JSON.stringify(data));
                    },
                },
                parent: me.$refs["queue-search"],
                render_input: true,
                only_input: true,
            });
            prescription_search_field.toggle_label(false);
            */
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
    },
    mounted() {
        // const host = this.get_host(3000);
        // const socket = io.connect();
        // this.socket = socket;
        let parent = this;
        // socket.on("connect", () => {
        //     console.log("Pharmacy Sidebar connected");
        // });
        if (!this.servicePoint) {
            this.servicePoint = this.currentServicePoint;
        }
        if(this.servicePoint.name){ 
            this.getQueueList()
    }},
    filters: {
        // Filter definitions
        Upper(value) {
            return value.toUpperCase();
        },
        title(str) {
            return str.replace(/\\w([^-\\s]*)/g, function(txt = '') {
                return (txt||'').charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        last_5(str) {
            return str.substring(str.length - 5);
        },
        nameInitials(fullName) {
            return fullName
                .split(" ")
                .map((name, index) => (name && index < 1 ? name[0] : ""))
                .join("");
        }
    }

};
</script>

<style scoped>
.search-bar {
    flex: 1;
    max-width: 3000px;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 8px 1.25rem;
  background-color: #fff;
}

.list-group-item:hover {
    background: lightgray;
    cursor: pointer;
}

.list-group-item-secondary {
    /* -webkit-box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7);
  box-shadow: -3px 0px 3px 4px rgba(27, 21, 76, 0.7); */
    border-left: 5px solid #7c2112;
}

.list-group-item-secondary {
    background: #1f19192b;
}

.b-avatar {
    font-size: inherit;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    background: white;
    color: black;
    border: 1px solid darkgray;
}

.fixed-header {
    width: 100%;
    position: fixed;
    top: 400px;
}

.fixed-header {
    top: 0;
}

.active {
    color:black;
    /* border-left: 5px solid #2490ef;
    border-right: 5px solid #2490ef; */
    background-color: lightgray;
    border-left: 5px solid #06a79e;
    border-top:1px solid lightgray;
    border-bottom:1px solid lightgray;
}

.tb-row {
    cursor: pointer;
}

body {
    font-family: sans-serif;
    font-size: 16px;
    color: #fff;
}

ul.sidebar-menu {
    margin: 0;
    padding: 0;
    max-width: 450px;
    list-style: none;
    list-style-type: none;
}

.sidebar-menu li a span {
    margin-right: 20px;
    color: #fff;
}

.sidebar-menu li a {
    background-color: #d7dde2;
    padding: 20px 25px;
    display: block;
    text-decoration: none;
    color: #fff;
}

.sidebar-menu li a:hover {
    background-color: #d7dde2;
    padding: 20px 25px;
    display: block;
    text-decoration: none;
    color: #fff;
}

li.have-children ul {
    padding: 0px;
}

li.have-children ul li a {
    background-color: #d7dde2;
    padding-left: 62px;
}

li.have-children ul li a:hover {
    color: #fff;
    background-color: #d7dde2;
    padding-left: 62px;
}

li.have-children,
li {
    position: relative;
}

.have-children span::after {
    position: absolute;
    right: 30px;
    content: "\\f054";
    color: #fff;
    transition: all .5s;
}

li.active.have-children span::after {
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.sidebar-menu .have-children>ul {
    display: none;
}

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

.name-header {
    background: #b1d0eb;
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
    padding-bottom: 8px;
    height: 85vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    background: white;
    position: absolute;
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
    margin-top: 5px;
    
}
#ico{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 60%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    display: block;
    color:black;
    font-weight:700px;
}
.content-area{
height: 87vh;
overflow-y: hidden;
overflow-x: hidden;
scrollbar-width:thin;
background: white;
padding-bottom: 16px;
padding-left: -5px;
border-radius: 5px;
margin-top: 10px;
 position: relative;
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
  var Sidebar_default = __vue_component__4;

  // ../frontend/frontend/public/js/pharmacy/utils.js
  var get_item_dashboard_data = (data, max_count, show_item) => {
    if (!max_count)
      max_count = 0;
    if (!data)
      data = [];
    data.forEach(function(d) {
      d.actual_or_pending = d.projected_qty + d.reserved_qty + d.reserved_qty_for_production + d.reserved_qty_for_sub_contract;
      d.pending_qty = 0;
      d.total_reserved = d.reserved_qty + d.reserved_qty_for_production + d.reserved_qty_for_sub_contract;
      if (d.actual_or_pending > d.actual_qty) {
        d.pending_qty = d.actual_or_pending - d.actual_qty;
      }
      max_count = Math.max(d.actual_or_pending, d.actual_qty, d.total_reserved, max_count);
    });
    let can_write = 0;
    if (frappe.boot.user.can_write.indexOf("Stock Entry") >= 0) {
      can_write = 1;
    }
    return {
      data,
      max_count,
      can_write,
      show_item: show_item || false
    };
  };

  // ../frontend/frontend/public/js/pharmacy/components/util/Paginator.vue
  var import_paginate = __toModule(require_paginate());
  var defaultLabels = {
    first: "First",
    last: "Last",
    previous: "Previous",
    next: "Next"
  };
  var defaultStyles = {
    ul: {
      margin: 0,
      padding: 0,
      display: "inline-block"
    },
    li: {
      listStyle: "none",
      display: "inline",
      textAlign: "center"
    },
    a: {
      cursor: "pointer",
      padding: "6px 12px",
      display: "block",
      float: "left"
    }
  };
  var __vue_script__5 = {
    name: "Paginator",
    props: {
      items: {
        type: Array,
        required: true
      },
      initialPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      maxPages: {
        type: Number,
        default: 10
      },
      labels: {
        type: Object,
        default: () => defaultLabels
      },
      styles: {
        type: Object
      },
      disableDefaultStyles: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        pager: {},
        ulStyles: {},
        liStyles: {},
        aStyles: {}
      };
    },
    created() {
      if (!this.$listeners.changePage) {
        throw 'Missing required event listener: "changePage"';
      }
      if (!this.disableDefaultStyles) {
        this.ulStyles = defaultStyles.ul;
        this.liStyles = defaultStyles.li;
        this.aStyles = defaultStyles.a;
      }
      if (this.styles) {
        this.ulStyles = {...this.ulStyles, ...this.styles.ul};
        this.liStyles = {...this.liStyles, ...this.styles.li};
        this.aStyles = {...this.aStyles, ...this.styles.a};
      }
      this.setPage(this.initialPage);
    },
    methods: {
      setPage(page) {
        const {items, pageSize, maxPages} = this;
        const pager = (0, import_paginate.default)(items.length, page, pageSize, maxPages);
        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.pager = pager;
        this.$emit("changePage", pageOfItems);
      }
    },
    watch: {
      items() {
        this.setPage(this.initialPage);
      }
    }
  };
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.pager.pages && _vm.pager.pages.length ? _c("ul", {staticClass: "pagination", style: _vm.ulStyles}, [
      _c("li", {
        staticClass: "page-item first",
        class: {disabled: _vm.pager.currentPage === 1},
        style: _vm.liStyles
      }, [
        _c("a", {
          staticClass: "page-link",
          style: _vm.aStyles,
          on: {
            click: function($event) {
              return _vm.setPage(1);
            }
          }
        }, [_vm._v(_vm._s(_vm.labels.first))])
      ]),
      _vm._v(" "),
      _c("li", {
        staticClass: "page-item previous",
        class: {disabled: _vm.pager.currentPage === 1},
        style: _vm.liStyles
      }, [
        _c("a", {
          staticClass: "page-link",
          style: _vm.aStyles,
          on: {
            click: function($event) {
              return _vm.setPage(_vm.pager.currentPage - 1);
            }
          }
        }, [_vm._v(_vm._s(_vm.labels.previous))])
      ]),
      _vm._v(" "),
      _vm._l(_vm.pager.pages, function(page) {
        return _c("li", {
          key: page,
          staticClass: "page-item page-number",
          class: {active: _vm.pager.currentPage === page},
          style: _vm.liStyles
        }, [
          _c("a", {
            staticClass: "page-link",
            style: _vm.aStyles,
            on: {
              click: function($event) {
                return _vm.setPage(page);
              }
            }
          }, [_vm._v(_vm._s(page))])
        ]);
      }),
      _vm._v(" "),
      _c("li", {
        staticClass: "page-item next",
        class: {
          disabled: _vm.pager.currentPage === _vm.pager.totalPages
        },
        style: _vm.liStyles
      }, [
        _c("a", {
          staticClass: "page-link",
          style: _vm.aStyles,
          on: {
            click: function($event) {
              return _vm.setPage(_vm.pager.currentPage + 1);
            }
          }
        }, [_vm._v(_vm._s(_vm.labels.next))])
      ]),
      _vm._v(" "),
      _c("li", {
        staticClass: "page-item last",
        class: {
          disabled: _vm.pager.currentPage === _vm.pager.totalPages
        },
        style: _vm.liStyles
      }, [
        _c("a", {
          staticClass: "page-link",
          style: _vm.aStyles,
          on: {
            click: function($event) {
              return _vm.setPage(_vm.pager.totalPages);
            }
          }
        }, [_vm._v(_vm._s(_vm.labels.last))])
      ])
    ], 2) : _vm._e();
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
  <ul
    v-if="pager.pages && pager.pages.length"
    class="pagination"
    :style="ulStyles"
  >
    <li
      class="page-item first"
      :class="{ disabled: pager.currentPage === 1 }"
      :style="liStyles"
    >
      <a class="page-link" @click="setPage(1)" :style="aStyles">{{
        labels.first
      }}</a>
    </li>
    <li
      class="page-item previous"
      :class="{ disabled: pager.currentPage === 1 }"
      :style="liStyles"
    >
      <a
        class="page-link"
        @click="setPage(pager.currentPage - 1)"
        :style="aStyles"
        >{{ labels.previous }}</a
      >
    </li>
    <li
      v-for="page in pager.pages"
      :key="page"
      class="page-item page-number"
      :class="{ active: pager.currentPage === page }"
      :style="liStyles"
    >
      <a class="page-link" @click="setPage(page)" :style="aStyles">{{
        page
      }}</a>
    </li>
    <li
      class="page-item next"
      :class="{ disabled: pager.currentPage === pager.totalPages }"
      :style="liStyles"
    >
      <a
        class="page-link"
        @click="setPage(pager.currentPage + 1)"
        :style="aStyles"
        >{{ labels.next }}</a
      >
    </li>
    <li
      class="page-item last"
      :class="{ disabled: pager.currentPage === pager.totalPages }"
      :style="liStyles"
    >
      <a
        class="page-link"
        @click="setPage(pager.totalPages)"
        :style="aStyles"
        >{{ labels.last }}</a
      >
    </li>
  </ul>
</template>

<script>
// https://github.com/cornflourblue/jw-vue-pagination/blob/master/src/JwPagination.vue
// https://jasonwatmore.com/post/2019/08/21/vue-js-simple-pagination-example
import paginate from "./paginate";
const defaultLabels = {
  first: "First",
  last: "Last",
  previous: "Previous",
  next: "Next"
};
const defaultStyles = {
  ul: {
    margin: 0,
    padding: 0,
    display: "inline-block"
  },
  li: {
    listStyle: "none",
    display: "inline",
    textAlign: "center"
  },
  a: {
    cursor: "pointer",
    padding: "6px 12px",
    display: "block",
    float: "left"
  }
};
export default {
  name: "Paginator",
  props: {
    items: {
      type: Array,
      required: true
    },
    initialPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    maxPages: {
      type: Number,
      default: 10
    },
    labels: {
      type: Object,
      default: () => defaultLabels
    },
    styles: {
      type: Object
    },
    disableDefaultStyles: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pager: {},
      ulStyles: {},
      liStyles: {},
      aStyles: {}
    };
  },
  created() {
    if (!this.$listeners.changePage) {
      throw 'Missing required event listener: "changePage"';
    }
    // set default styles unless disabled
    if (!this.disableDefaultStyles) {
      this.ulStyles = defaultStyles.ul;
      this.liStyles = defaultStyles.li;
      this.aStyles = defaultStyles.a;
    }
    // merge custom styles with default styles
    if (this.styles) {
      this.ulStyles = { ...this.ulStyles, ...this.styles.ul };
      this.liStyles = { ...this.liStyles, ...this.styles.li };
      this.aStyles = { ...this.aStyles, ...this.styles.a };
    }
    // set to initial page
    this.setPage(this.initialPage);
  },
  methods: {
    setPage(page) {
      const { items, pageSize, maxPages } = this;
      // get new pager object for specified page
      const pager = paginate(items.length, page, pageSize, maxPages);
      // get new page of items from items array
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      // update pager
      this.pager = pager;
      // emit change page event to parent component
      this.$emit("changePage", pageOfItems);
    }
  },
  watch: {
    items() {
      this.setPage(this.initialPage);
    }
  }
};
</script>`;
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
  var Paginator_default = __vue_component__5;

  // ../frontend/frontend/public/js/pharmacy/components/core/container/PatientInfo.vue
  var __vue_script__6 = {
    name: "PatientInfo",
    props: {
      prescription: {
        type: Object,
        required: true
      },
      customer_group: {
        type: Object,
        required: true
      }
    }
  };
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _vm.prescription ? _c("b-row", {staticClass: "card", staticStyle: {"margin-top": "1%"}}, [
        _c("b-col", [
          _c("div", {staticStyle: {margin: "0px", padding: "0px"}}, [
            _c("div", {}, [
              _c("h3", {staticClass: "h3 card-text patient-name"}, [
                _vm._v(_vm._s(_vm.prescription.patient_name) + " | " + _vm._s(_vm.prescription.patient_number) + " | " + _vm._s(_vm.prescription.encounter) + "\n              ")
              ]),
              _vm._v("\n              " + _vm._s(_vm.prescription.warehouse) + " |\n              " + _vm._s(_vm.prescription.sales_invoice || "Not Invoiced") + " |\n              " + _vm._s(_vm.prescription.status) + " | \n              "),
              _vm.customerInfo ? _c("span", [
                _vm._v("\n                " + _vm._s(_vm.customerInfo.customer_group) + "\n              ")
              ]) : _vm._e()
            ])
          ])
        ])
      ], 1) : _vm._e()
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
        <b-row v-if="prescription" class="card" style="margin-top:1%">
          <b-col>
            <div style="margin:0px;padding:0px;">
               <div class="">
                <h3 class="h3 card-text patient-name">{{ prescription.patient_name }} | {{ prescription.patient_number}} | {{ prescription.encounter }}
                  </h3>
                  {{ prescription.warehouse }} |
                  {{ prescription.sales_invoice || 'Not Invoiced'}} |
                  {{ prescription.status }} | 
                  <span v-if="customerInfo">
                    {{ customerInfo.customer_group}}
                  </span>
               </div>
          </div>
          </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name:'PatientInfo',
    props:{
        prescription:{
            type:Object,
            required:true
        },
         customer_group:{
            type:Object,
            required:true
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
  var PatientInfo_default = __vue_component__6;

  // ../frontend/frontend/public/js/state/pharmacy-stock/state.js
  var state_default2 = {};

  // ../frontend/frontend/public/js/state/pharmacy-stock/mutations.js
  var mutations_default2 = {};

  // ../frontend/frontend/public/js/state/pharmacy-stock/actions.js
  var actions_default2 = {
    createMaterialRequest({commit}, payload) {
      prescriptionItemMaterialRequest({
        drug: payload.drug,
        quantity: payload.quantity,
        warehouse: payload.warehouse,
        from_warehouse: payload.from_warehouse
      }).then((result) => {
        if (result) {
          frappe.show_alert({
            message: `Material Request Created. Awaiting response`,
            indicator: "green"
          }, 5);
        } else {
          frappe.show_alert({
            message: `Request Failed. Please try again`,
            indicator: "red"
          }, 5);
        }
      });
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-stock/getters.js
  var getters_default2 = {};

  // ../frontend/frontend/public/js/state/pharmacy-stock/index.js
  var pharmacy_stock_default = {
    namespaced: true,
    state: state_default2,
    mutations: mutations_default2,
    actions: actions_default2,
    getters: getters_default2
  };

  // ../frontend/frontend/public/js/pharmacy/components/core/container/UserPrescription.vue
  var import_moment = __toModule(require_moment());
  var __vue_script__7 = {
    props: {
      queueState: {
        type: Object,
        default: {},
        required: true
      },
      prescription: {
        type: Object,
        required: true
      },
      patientData: {
        type: Object
      },
      patientName: {
        type: String,
        required: true,
        default: ""
      },
      selectedPharmacy: {
        type: String,
        default: "",
        required: true
      }
    },
    components: {
      Paginator: Paginator_default
    },
    data() {
      return {
        toDispenseFields: ["drug_name", {key: "item_name", label: "Selected Item"}, {key: "creation", label: "Creation", formatter: (value, key, item) => (0, import_moment.default)(item.creation).fromNow()}, "rate", {label: "Quantity", key: "quantity"}, {key: "total_price", label: "Total Price", formatter: (value, key, item) => item.quantity * parseFloat(item.rate)}, {key: "action", label: " "}],
        staged: [],
        itemGroups: [],
        totalUnpaid: 0,
        selected: {},
        filterdPrescription: [],
        tt: false,
        prescriptionItems: [],
        prescriptionItemsPage: [],
        loading: true,
        alternativeDrugs: [],
        alternativeDrug: null,
        prescriptionItem: null,
        warehouses: [],
        warehouse: null,
        customerInfo: null,
        totalAmount: 0,
        selectedPrescriptions: [],
        selectedTotals: 0,
        paidPres: [],
        showPrevious: 0,
        fields: [
          "drug_name",
          {label: "Dose", key: "doctor_dose"},
          "frequency",
          "duration",
          {key: "creation", label: "Creation", formatter: (value, key, item) => (0, import_moment.default)(item.creation).fromNow()},
          "route_of_administration",
          {label: "Ordered By", key: "practitioner"},
          {label: "Actions", key: "action"}
        ],
        activeRow: {},
        items: [],
        addItem: false,
        insurance: 1e5
      };
    },
    watch: {
      patientData() {
        if (this.patientData.customer_group === "All Customer Groups") {
          this.insurance = 0;
        } else {
          this.insurance = 1e5;
        }
      },
      prescription() {
        this.selectedPrescriptions = [], this.selectedTotals = 0;
        this.paidPres = this.prescription.filter(function(e) {
          return e.sales_order_status === "Fully Billed";
        });
        this.filterdPrescription = this.prescription.filter(this.filter);
      },
      activeRow() {
        const promises = [calculatePrescriptionQuantity({period: this.activeRow.duration, dosage: this.activeRow.frequency}), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, warehouse: this.selectedPharmacy.warehouse, patient: this.activeRow.patient_number, filters: {item: ["!=", ""]}})];
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({quantity: quantity || 1, in_stock: item.stock_balance, rate: 0, ...item}));
        });
      },
      patientName() {
        getDrugsAwaitingDispense({patient: this.patientName, status: "Staged"}).then((data) => {
          this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity}));
          this.totalUnpaid = data.reduce((a, b2) => a + parseFloat(b2.total_price), 0);
        });
      }
    },
    methods: {
      filter(item) {
        return !(0, import_moment.default)(item.creation).diff((0, import_moment.default)(), "days");
      },
      onSelect(name) {
        const el = document.getElementById(name);
        console.log(name, el);
        if (el) {
          el.focus();
        }
      },
      unStage(row) {
        unStageApi(row.item).then(() => {
          this.$emit("onUpdateList");
          getDrugsAwaitingDispense({patient: this.patientName, status: "Staged"}).then((data) => {
            this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity}));
            this.totalUnpaid = data.reduce((a, b2) => a + parseFloat(b2.total_price), 0);
          });
        });
      },
      clearSelected() {
        this.selected = {};
      },
      openEditModal(item) {
        const parent2 = this;
        const previousName = item.drug_name;
        let d = new frappe.ui.Dialog({
          title: `Edit Drug Prescription`,
          fields: [{
            label: "Drug",
            fieldname: "drug",
            fieldtype: "Link",
            options: "Item",
            reqd: true,
            filters: {item_group: ["in", parent2.itemGroups], has_variants: 1},
            default: item.drug,
            onchange: () => {
              frappe.db.get_value("Item", d.fields_dict.drug.value, "item_name").then(({message}) => {
                d.set_value("drug_name", message.item_name);
                d.set_value("instructions", `Take ${message.item_name} ${item.doctor_dose || item.dose || ""} for ${item.duration} ${item.period || ""}`);
                d.refresh();
              });
            }
          }, {
            label: "Drug Name",
            fieldname: "drug_name",
            fetch_from: "drug.item_name",
            fieldtype: "Data",
            reqd: true,
            default: item.drug_name,
            read_only: 1
          }, {
            label: "Instructions",
            fieldname: "instructions",
            fieldtype: "Small Text",
            default: item.instructions
          }],
          primary_action: (values) => {
            updateDrugPrescription({...values, name: item.name}).then((res) => {
              item.drug_name = res.drug_name;
              item.instructions = res.instructions;
              item.drug = res.drug;
              this.$emit("onUpdateList");
            });
            d.hide();
          }
        });
        d.show();
      },
      removeMatchedItem(item) {
        removeMatchedItem(item).then(() => {
          const promises = [calculatePrescriptionQuantity({period: this.activeRow.duration, dosage: this.activeRow.frequency}), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, filters: {item: ["!=", ""]}})];
          Promise.all(promises).then(([quantity, message]) => {
            this.items = message.map((item2) => ({quantity: 1, in_stock: item2.stock_balance, rate: 0, ...item2}));
          });
        });
      },
      calculateUnpaid(e, i) {
        const data = this.staged;
        const maximum = Math.min(parseInt(i.item.initialQuantity), i.item.quantity);
        i.item.quantity = maximum;
        this.totalUnpaid = data.reduce((a, b2) => a + parseFloat(b2.rate) * parseFloat(b2.quantity), 0);
      },
      openModal(row) {
        this.activeRow = row;
        console.log(row);
        this.$refs.viewPrescription.show();
      },
      addAMatch(item) {
        let d = new frappe.ui.Dialog({
          title: `Add Matching Stock Item`,
          fields: [
            {
              label: "Item",
              fieldname: "item",
              fieldtype: "Link",
              options: "Item",
              filters: {has_variants: 0, item_group: ["in", this.itemGroups]}
            },
            {
              label: "Strength",
              fieldname: "strength",
              fieldtype: "Data"
            },
            {
              label: "Route of Administration",
              fieldname: "dosage_form",
              fieldtype: "Link",
              options: "Dosage Form"
            }
          ],
          primary_action: (values) => {
            matchStockItemApi({dosage_form: item.dosage_form, ...values, drug: item.drug}).then(() => {
              frappe.show_alert(`${item.drug} matched successfully with ${values.item}`, 5);
              this.getStagedItems();
              const promises = [calculatePrescriptionQuantity({period: this.activeRow.duration, dosage: this.activeRow.frequency}), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, filters: {item: ["!=", ""]}})];
              Promise.all(promises).then(([quantity, message]) => {
                this.items = message.map((item2) => ({quantity: 1, in_stock: item2.stock_balance, rate: 0, ...item2}));
              });
              d.hide();
            });
          }
        });
        d.show();
      },
      stageForOrder() {
        if (!this.selected.item) {
          return frappe.throw("Please select an item or add a matched Item before creating a medication order");
        }
        console.log(this.selected);
        const args = {
          patient: this.activeRow.patient_number,
          encounter: this.activeRow.patient_encounter,
          inpatient_record: this.activeRow.inpatient_record,
          item: this.selected.item.item,
          quantity: this.selected.item.quantity,
          service_unit: this.activeRow.service_unit,
          appointment_name: this.activeRow.patient_appointment,
          doctors_prescription: this.activeRow.name,
          route_of_administration: this.activeRow.route_of_administration || "",
          rate: this.selected.item.rate
        };
        stageItemForOrder(args).then(() => {
          this.$emit("onUpdateList");
          this.getStagedItems();
        });
      },
      createSalesOrders() {
        const args = {
          items: this.staged,
          limit: this.insurance,
          total: this.totalUnpaid,
          warehouse: this.selectedPharmacy.warehouse
        };
        console.log();
        createDrugSalesOrder(args).then(() => {
          updateQueueStatus({state_name: this.queueState.name, status: "Invoiced"}).then((m) => {
          });
          this.getStagedItems();
          this.$emit("onUpdateList");
        });
      },
      getAmountAndPayerSum(payer, rate, qty, remaining_quantity = 0, co_paid_quantity = 0, type) {
        switch (payer) {
          case "Patient":
            return type === "Amount" ? Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas : "Patient incurs";
          case "Copay":
            return type === "Amount" ? Math.ceil(rate * (remaining_quantity * qty)).toFixed(2) || 1 | numberWithCommas : "Copaid amount: (" + (Math.ceil(rate * (co_paid_quantity * qty)).toFixed(2) || 1 | numberWithCommas) + ")";
          case "Insurance":
            return type === "Amount" ? 0 : "Insurance covers: (" + (Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas) + ")";
          case "Pre-auth Insurance":
            return type === "Amount" ? 0 : "Insurance Pre-auth: (" + (Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas) + ")";
          case "Pre-auth Copay":
            return type === "Amount" ? Math.ceil(rate * (remaining_quantity * qty)).toFixed(2) || 1 | numberWithCommas : "Pre-auth Copay:: (" + (Math.ceil(rate * (co_paid_quantity * qty)).toFixed(2) || 1 | numberWithCommas) + ")";
        }
      },
      selectAll() {
        this.prescription.forEach((item) => {
          if (!item.sales_order) {
            this.selectRow(item);
          }
        });
      },
      printPrescription(prescriptionItem) {
        var w = window.open(frappe.urllib.get_full_url("/printview?doctype=" + encodeURIComponent("Patient Encounter") + "&name=" + encodeURIComponent(prescriptionItem.encounter) + "&format=Encounter Prescription Print Format&_lang=en&trigger_print=1"));
        if (!w) {
          msgprint(__("Please enable pop-ups"));
          return;
        }
      },
      dispense() {
        let paidPrescription = this.prescription.filter(function(e) {
          return e.sales_order_status === "Fully Billed";
        });
        if (paidPrescription.length) {
          dispenseStockEntry({
            warehouse: paidPrescription[0].warehouse,
            encounter_name: paidPrescription[0].encounter,
            sales_order: paidPrescription[0].sales_order,
            patient_name: paidPrescription[0].patient_number
          }).then((result) => {
            frappe.show_alert({
              message: `Stocks Updated`,
              indicator: "green"
            }, 15);
            dispensePrescription({
              prescription_names: paidPrescription.map((drug) => drug.prescription_id),
              patient_name: paidPrescription[0].patient_number,
              warehouse_name: paidPrescription[0].warehouse
            }).then((data) => {
              frappe.show_alert({
                message: `Prescription Dispensed`,
                indicator: "green"
              }, 15);
            });
            removeFromQueue2({queue_state_name: parent.queueState.name}).then((r) => {
              console.log("REMOVED FROM QUEUE");
            });
            prescriptionChangeComment({
              reference_doctype: "Patient Encounter",
              reference_name: paidPrescription[0].encounter,
              content: `Prescriptions : ${paidPrescription.map((x) => x.drug_code).toString()} Dispensed`,
              comment_email: frappe.session.user,
              comment_by: frappe.session.user_fullname
            }).then((result2) => {
            });
          });
        } else {
          frappe.show_alert({
            message: `No invoiced Prescription`,
            indicator: "red"
          }, 5);
        }
      },
      selectRow(item) {
        console.log("Start ", this.selectedPrescriptions.length);
        if (typeof item === "object") {
          let replaced = false;
          this.selectedPrescriptions.map((pres, x) => {
            if (pres.prescription_id === item.prescription_id) {
              this.selectedPrescriptions.splice(this.selectedPrescriptions.indexOf(item), 1);
              replaced = true;
            }
          });
          if (!replaced) {
            this.selectedPrescriptions.push(item);
          }
          this.selectedTotals = Math.ceil(this.selectedPrescriptions.reduce((accum, item2) => accum + item2.rate * item2.qty, 0)).toFixed(2);
        } else {
        }
      },
      printPrescriptionLabel(prescriptionItem) {
        var w = window.open(frappe.urllib.get_full_url("/printview?doctype=" + encodeURIComponent("Drug Prescription") + "&name=" + encodeURIComponent(prescriptionItem.prescription_id) + "&format=Drug Prescription Label&_lang=en&no_letterhead=1&letterhead=No Letterhead&trigger_print=1"));
        if (!w) {
          msgprint(__("Please enable pop-ups"));
          return;
        }
      },
      createMaterialRequest(prescriptionItem) {
        let parent2 = this;
        let d = new frappe.ui.Dialog({
          title: `Material Request for ${prescriptionItem.drug_name}`,
          fields: [
            {
              label: "Warehouse",
              fieldname: "warehouse",
              fieldtype: "Select",
              options: this.warehouses
            },
            {
              label: "Quantity",
              fieldname: "quantity",
              fieldtype: "Int"
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            d.hide();
            parent2.$store.dispatch("prescriptionStockModule/createMaterialRequest", {
              drug: prescriptionItem.drug_name,
              quantity: values.quantity,
              warehouse: prescriptionItem.warehouse,
              from_warehouse: values.warehouse
            });
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            d.hide();
          }
        });
        d.show();
        this.loading = false;
      },
      resetMaterialRequestModal() {
        this.prescriptionItem = null;
      },
      materialRequest(prescriptionItem) {
        this.prescriptionItem = prescriptionItem;
        getWarehouses({}).then((result) => {
          if (result && result.length) {
            this.warehouses = result.map((unit) => unit.name);
            this.createMaterialRequest(prescriptionItem);
          } else {
            frappe.show_alert({
              message: `No Warehouses Available`,
              indicator: "orange"
            }, 5);
          }
        });
      },
      updateWarehouse() {
        if (this.prescription && this.prescription.name) {
          updatePrescriptionWarehouse({
            prescription_name: this.prescription.name,
            warehouse_name: this.warehouse
          }).then((result) => {
            if (result) {
              frappe.show_alert({
                message: `Prescription  Moved to ${result.warehouse}.`,
                indicator: "green"
              }, 5);
              this.prescription = result;
              this.loading = false;
            } else {
              frappe.show_alert({
                message: `Transfer Failed. Please try again`,
                indicator: "red"
              }, 5);
            }
          });
        } else {
          frappe.show_alert({
            message: `No Prescription Selected`,
            indicator: "orange"
          }, 5);
        }
        this.loading = false;
      },
      resetServiceUnits() {
        this.warehouse = null;
      },
      transferPrescription() {
        if (this.prescription && this.prescription.name) {
          getWarehouses({}).then((result) => {
            if (result && result.length) {
              this.warehouses = result.map((unit) => unit.name);
              this.$refs.changeServiceUnitModal.show();
            } else {
              frappe.show_alert({
                message: `No Healthcare Service Units`,
                indicator: "orange"
              }, 5);
            }
          });
        } else {
          frappe.show_alert({
            message: `No Prescription Selected`,
            indicator: "orange"
          }, 5);
        }
      },
      fetchAlternates(prescriptionItem) {
        this.prescriptionItem = prescriptionItem;
        getDrugItemAlternates({
          drug_name: prescriptionItem.drug_code
        }).then((result) => {
          if (result && result.length) {
            this.alternativeDrugs = result.map((drugs) => drugs.alternative_item_code);
            this.changeDrug(prescriptionItem, this.alternativeDrugs);
          } else {
            frappe.show_alert({
              message: `${prescriptionItem.drug_code} has no alternative setup in the system`,
              indicator: "orange"
            }, 5);
          }
        });
      },
      resetAlternateDrugModal() {
        this.alternativeDrugs = [];
        this.alternativeDrug = null;
        this.prescriptionItems = null;
      },
      changeDrug(prescriptionItem, alternativeDrugs) {
        let parent2 = this;
        let d = new frappe.ui.Dialog({
          title: `Select Alternate Drug for ${prescriptionItem.drug_name}`,
          fields: [
            {
              label: "Drug",
              fieldname: "alternativeDrug",
              fieldtype: "Select",
              options: alternativeDrugs
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            updatePrescriptionItemDrug({
              patient_name: prescriptionItem.patient_number,
              prescription_item_name: prescriptionItem.prescription_id,
              drug_name: values.alternativeDrug
            }).then((result) => {
              parent2.loading = false;
              parent2.updateTableRow(result);
            });
            d.hide();
            prescriptionChangeComment({
              reference_doctype: "Patient Encounter",
              reference_name: prescriptionItem.encounter,
              content: `Prescription Drug Change from ${prescriptionItem.drug_code} to ${values.alternativeDrug}`,
              comment_email: frappe.session.user,
              comment_by: frappe.session.user_fullname
            }).then((result) => {
            });
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            d.hide();
            parent2.resetAlternateDrugModal();
          }
        });
        d.show();
        this.loading = false;
      },
      updateTableRow(result) {
        this.prescription.map((item, x) => {
          if (item.prescription_id === result.name) {
            Vue.set(this.prescription, x, result);
          }
        });
        this.itemUnitsChanged();
        this.resetAlternateDrugModal();
      },
      numberOfUnitsChange(prescriptionItem) {
        this.loading = true;
        updatePrescriptionItem({
          name: prescriptionItem.prescription_id,
          qty: prescriptionItem.qty
        }).then((result) => {
          this.loading = false;
          this.prescription.prescription_item.map((item, x) => {
            if (item.name === result.name) {
              Vue.set(this.prescription.prescription_item, x, result);
            }
          });
          frappe.show_alert({
            message: `Drug  #${prescriptionItem.drug_code} unit changed.`,
            indicator: "green"
          }, 5);
          this.itemUnitsChanged();
        }).catch((err) => {
          this.loading = false;
        });
        this.loading = false;
      },
      itemUnitsChanged(type) {
        let totalAmount = 0;
        if (this.prescription && this.prescription.length) {
          let itemList = [];
          if (type === "Gross") {
            itemList = this.prescription;
          } else {
            itemList = this.selectedPrescriptions;
          }
          itemList.forEach((item, index) => {
            switch (item.payer) {
              case "Patient":
                totalAmount = totalAmount + item.rate * item.qty;
                break;
              case "Copay":
                totalAmount = totalAmount + Math.ceil(item.rate * (item.qty * item.remaining_quantity));
                break;
              case "Insurance":
                totalAmount = totalAmount + 0;
                break;
              case "Pre-auth Insurance":
                totalAmount = totalAmount + 0;
                break;
              case "Pre-auth Copay":
                totalAmount = totalAmount + Math.ceil(item.rate * (item.qty * item.remaining_quantity));
                break;
            }
          });
          this.totalAmount = totalAmount;
        }
        return totalAmount;
      },
      postInvoice() {
        if (this.selectedPrescriptions && this.selectedPrescriptions.length) {
          createPrescriptionSalesOrder({prescription_docs: this.selectedPrescriptions, warehouse_name: ""}).then((r) => {
            frappe.show_alert({
              message: `Prescription Sales order created`,
              indicator: "green"
            }, 5);
            updateQueueStatus({state_name: this.queueState.name, status: "Invoiced"}).then((m) => {
            });
            this.selectedPrescriptions = [];
          });
        } else {
          frappe.show_alert({
            message: "Please Select prescription",
            indicator: "orange"
          }, 5);
        }
      },
      getStagedItems() {
        getDrugsAwaitingDispense({patient: this.patientName, status: "Staged"}).then((data) => {
          this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity}));
          console.log(data);
          this.totalUnpaid = data.reduce((a, b2) => a + parseFloat(b2.total_price), 0);
        });
      },
      checkInvoice() {
        if (this.prescription && this.prescription.length && this.prescription[0].sales_order) {
          getPrescriptionInvoice({
            name: this.prescription[0].sales_order
          }).then((result) => {
            this.loading = false;
            frappe.show_alert({
              message: `Prescription Invoice #${result.name} status is ${result.status}`,
              indicator: "green"
            }, 5);
          });
        } else {
          frappe.show_alert({
            message: `Sales Invoice not found.`,
            indicator: "orange"
          }, 5);
        }
        this.loading = false;
      },
      setPrescriptionInvoice(invoiceName) {
        setPrescriptionInvoiceNumber({
          prescription_name: this.prescription.name,
          invoice_name: invoiceName
        }).then((result) => {
          if (result) {
            frappe.show_alert({
              message: `Invoice #${invoiceName} posted. Awaiting Payment`,
              indicator: "green"
            }, 5);
            this.prescription = result;
            this.loading = false;
          } else {
            frappe.show_alert({
              message: `Invoice not Created`,
              indicator: "red"
            }, 5);
          }
        });
        this.loading = false;
      },
      changePage(pageOfItems) {
        this.prescriptionItemsPage = pageOfItems;
      },
      stockCheck(prescription) {
        frappe.call({
          method: "erpnext.stock.dashboard.item_dashboard.get_data",
          args: {
            item_code: prescription.drug_code
          },
          callback: ({message = []}) => {
            const context = get_item_dashboard_data(message, 10, true);
            if (message.length) {
              let msgText = `<ol>`;
              message.forEach((msg) => {
                msgText += `<li> ${msg.warehouse}  <b> ${msg.projected_qty}/${msg.actual_qty}</b></li>`;
              });
              msgText += `</ol>`;
              frappe.msgprint({
                title: __((prescription.drug_code || "").toUpperCase()),
                indicator: "green",
                message: msgText
              });
            } else {
              frappe.msgprint({
                title: __((prescription.drug_code || "").toUpperCase()),
                message: "Stock Data Unavailable.",
                indicator: "green"
              });
            }
          }
        });
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
    },
    created() {
      this.$store.registerModule("prescriptionStockModule", pharmacy_stock_default);
    },
    mounted() {
      const host = this.get_host(3e3);
      const socket = io.connect();
      this.socket = socket;
      let parent2 = this;
      socket.on("connect", () => {
        console.log("User Prescription connected");
      });
      this.getStagedItems();
      getDrugGroups().then((data) => {
        this.itemGroups = data;
      });
    },
    filters: {
      Upper(value) {
        return value.toUpperCase();
      },
      title(str) {
        return str.replace(/\w([^-\s]*)/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
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
    return _c("div", {staticStyle: {"margin-left": "-1%"}}, [
      _c("b-modal", {
        ref: "changeServiceUnitModal",
        attrs: {
          id: "modal-prevent-closing",
          title: "Select Pharmacy Warehouse"
        },
        on: {hidden: _vm.resetServiceUnits, ok: _vm.updateWarehouse}
      }, [
        _c("b-form-select", {
          attrs: {options: _vm.warehouses, placeholder: "Select warehouse"},
          model: {
            value: _vm.warehouse,
            callback: function($$v) {
              _vm.warehouse = $$v;
            },
            expression: "warehouse"
          }
        }),
        _vm._v(" "),
        _c("div", {staticClass: "mt-3"}, [
          _vm._v("\n      Selected: "),
          _c("strong", [_vm._v(_vm._s(_vm.warehouse))])
        ])
      ], 1),
      _vm._v(" "),
      _c("div", {staticStyle: {"padding-top": "0.2%", "margin-top": "8px"}}, [
        _c("b-row", [
          _c("b-col", [
            _c("div", {
              staticStyle: {
                display: "flex",
                "justify-content": "flex-end"
              }
            }, [
              _c("b-button-group", {
                staticStyle: {
                  "margin-right": "16px",
                  "margin-top": "4px"
                }
              }, [
                _vm.paidPres.length > 0 ? _c("b-button", {
                  staticStyle: {"margin-right": "2px"},
                  attrs: {variant: "primary"},
                  on: {click: _vm.dispense}
                }, [_vm._v("Dispense")]) : _vm._e()
              ], 1)
            ], 1)
          ])
        ], 1),
        _vm._v(" "),
        _c("b-form-checkbox", {
          attrs: {switch: ""},
          model: {
            value: _vm.showPrevious,
            callback: function($$v) {
              _vm.showPrevious = $$v;
            },
            expression: "showPrevious"
          }
        }, [
          _vm._v("Click to " + _vm._s(_vm.showPrevious ? "Show Today only" : "Show Previous Prescriptions"))
        ]),
        _vm._v(" "),
        _c("div", [
          _c("h4", [
            _vm._v("\n        " + _vm._s(_vm.showPrevious ? "All Prescriptions" : "Today's Prescriptions") + "\n      ")
          ])
        ]),
        _vm._v(" "),
        _c("div", {staticClass: "table-responsive"}, [
          _c("b-table", {
            staticClass: "table",
            attrs: {
              fields: _vm.fields,
              stacked: "md",
              small: "",
              hover: "",
              items: _vm.showPrevious ? _vm.prescription : _vm.filterdPrescription
            },
            scopedSlots: _vm._u([
              {
                key: "cell(action)",
                fn: function(row) {
                  return [
                    _c("div", {staticStyle: {display: "flex"}}, [
                      _c("b-button", {
                        staticClass: "sm",
                        attrs: {variant: "primary"},
                        on: {
                          click: function($event) {
                            return _vm.openModal(row.item);
                          }
                        }
                      }, [_vm._v(" View")]),
                      _vm._v(" "),
                      _c("b-button", {
                        staticStyle: {"margin-left": "8px"},
                        attrs: {variant: "primary"},
                        on: {
                          click: function($event) {
                            return _vm.openEditModal(row.item);
                          }
                        }
                      }, [_vm._v("Edit Prescription")])
                    ], 1)
                  ];
                }
              }
            ])
          }),
          _vm._v(" "),
          _vm.staged.length ? _c("h4", {staticStyle: {"margin-top": "16px"}}, [
            _vm._v("Drugs Staged to Bill")
          ]) : _vm._e(),
          _vm._v(" "),
          _vm.staged.length ? _c("b-table", {
            attrs: {items: _vm.staged, fields: _vm.toDispenseFields},
            scopedSlots: _vm._u([
              {
                key: "cell(quantity)",
                fn: function(i) {
                  return [
                    _c("b-input", {
                      attrs: {
                        type: "number",
                        name: "quantity",
                        max: i.item.quantity,
                        value: i.item.quantity
                      },
                      on: {
                        blur: function($event) {
                          return _vm.calculateUnpaid(_vm.e, i);
                        }
                      },
                      model: {
                        value: i.item.quantity,
                        callback: function($$v) {
                          _vm.$set(i.item, "quantity", $$v);
                        },
                        expression: "i.item.quantity"
                      }
                    })
                  ];
                }
              },
              {
                key: "cell(action)",
                fn: function(row) {
                  return [
                    _c("b-button", {
                      attrs: {variant: "danger"},
                      on: {
                        click: function($event) {
                          return _vm.unStage(row);
                        }
                      }
                    }, [_vm._v("Unstage")])
                  ];
                }
              }
            ], null, false, 4164980478)
          }) : _vm._e(),
          _vm._v(" "),
          _vm.staged.length ? _c("div", {
            staticStyle: {
              display: "flex",
              "justify-content": "space-between",
              padding: "16px",
              background: "lightgray",
              "align-items": "center"
            }
          }, [
            _c("h4", [_vm._v("Total Amount to Bill")]),
            _vm._v(" "),
            _c("strong", [
              _c("h4", [
                _vm._v("KES " + _vm._s(_vm.totalUnpaid.toFixed(_vm.e).toLocaleString()))
              ])
            ])
          ]) : _vm._e(),
          _vm._v(" "),
          _c("div", {
            staticStyle: {
              display: "flex",
              "justify-content": "space-between",
              padding: "16px",
              "align-items": "center"
            }
          }, [
            _c("h4", [_vm._v("Insurance Limit")]),
            _vm._v(" "),
            _c("div", {
              staticStyle: {display: "flex", "align-items": "center"}
            }, [
              _c("h4", {
                staticStyle: {
                  "margin-right": "32px",
                  "margin-bottom": "0"
                }
              }, [_vm._v("KES")]),
              _c("b-input", {
                staticStyle: {width: "200px"},
                attrs: {type: "number"},
                model: {
                  value: _vm.insurance,
                  callback: function($$v) {
                    _vm.insurance = $$v;
                  },
                  expression: "insurance"
                }
              })
            ], 1)
          ]),
          _vm._v(" "),
          _c("div", {
            staticStyle: {
              display: "flex",
              "justify-content": "space-between",
              padding: "16px",
              "align-items": "center"
            }
          }, [
            _c("h4", [_vm._v("Individual Amount")]),
            _vm._v(" "),
            _c("div", {
              staticStyle: {display: "flex", "align-items": "center"}
            }, [
              _vm._v("\n          KES "),
              _c("span", [
                _vm._v(_vm._s(Number(Math.ceil(_vm.totalUnpaid - _vm.insurance, 0)).toFixed(2).toLocaleString()))
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.staged.length ? _c("div", {
            staticStyle: {
              display: "flex",
              "justify-content": "flex-end",
              padding: "16px",
              "align-items": "center"
            }
          }, [
            _c("b-button", {
              attrs: {variant: "primary"},
              on: {
                click: function($event) {
                  return _vm.createSalesOrders();
                }
              }
            }, [_vm._v("Create Sales Order For Staged Items")])
          ], 1) : _vm._e(),
          _vm._v(" "),
          _c("b-modal", {
            ref: "viewPrescription",
            attrs: {
              size: "lg",
              "ok-title": _vm.activeRow.patient_appointment ? "submit" : "Create Medication Order",
              id: "modal-1",
              title: "Doctor's Drug Prescription"
            },
            on: {
              ok: function($event) {
                return _vm.stageForOrder();
              },
              hidden: function($event) {
                return _vm.clearSelected();
              }
            }
          }, [
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Patient Status:")]),
              _vm._v(" "),
              _c("span", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.inpatient_record ? "Inpatient" : "Outpatient"))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Drug:")]),
              _vm._v(" "),
              _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.drug_name))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Dose:")]),
              _vm._v(" "),
              _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.dose))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Route of Administration:")]),
              _vm._v(" "),
              _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.route_of_administration))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Start Date:")]),
              _vm._v(" "),
              _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.start_date))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Instructions:")]),
              _vm._v(" "),
              _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.instructions))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("h4", [_vm._v("Matched Stock Items")]),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  bordered: "",
                  items: _vm.items,
                  fields: [
                    {label: "Select", key: "select"},
                    {label: "Item Name", key: "item_name"},
                    {label: "Quantity", key: "quantity"},
                    "in_stock",
                    {label: "Rate", key: "rate"},
                    {key: "total", label: "Total"}
                  ]
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(rate)",
                    fn: function(i) {
                      return [
                        _c("div", {staticStyle: {"text-align": "right"}}, [
                          _vm._v("\n              " + _vm._s(i.item.rate.toFixed(2)) + "\n            ")
                        ])
                      ];
                    }
                  },
                  {
                    key: "cell(total)",
                    fn: function(item) {
                      return [
                        _c("div", {staticStyle: {"text-align": "right"}}, [
                          _c("span", [
                            _vm._v(_vm._s("KES " + Number(item.item.quantity * parseFloat(item.item.rate)).toFixed(2).toLocaleString()))
                          ])
                        ])
                      ];
                    }
                  },
                  {
                    key: "cell(item_name)",
                    fn: function(it) {
                      return [
                        it.item.rate == 0 ? _c("span", {staticStyle: {color: "red"}}, [_vm._v(_vm._s(it.item.item_name))]) : _vm._e(),
                        _vm._v(" "),
                        it.item.rate != 0 ? _c("span", [
                          _vm._v(_vm._s(it.item.item_name))
                        ]) : _vm._e()
                      ];
                    }
                  },
                  {
                    key: "cell(select)",
                    fn: function(row) {
                      return [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected,
                              expression: "selected"
                            }
                          ],
                          attrs: {
                            disabled: row.item.rate == 0,
                            type: "radio",
                            variant: "primary",
                            name: "some-radio"
                          },
                          domProps: {
                            value: row,
                            checked: _vm._q(_vm.selected, row)
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.selected = row;
                              },
                              function($event) {
                                _vm.onSelect(row.item.item.split(/\s+/).join("-"));
                              }
                            ]
                          }
                        })
                      ];
                    }
                  },
                  {
                    key: "cell(quantity)",
                    fn: function(i) {
                      return [
                        _vm.selected.item && _vm.selected.item.item === i.item.item ? _c("b-input", {
                          attrs: {
                            disabled: i.item.rate == 0,
                            type: "number",
                            name: "qty",
                            id: i.item.item.split(/\s+/).join("-"),
                            value: i.item.quantity
                          },
                          model: {
                            value: i.item.quantity,
                            callback: function($$v) {
                              _vm.$set(i.item, "quantity", $$v);
                            },
                            expression: "i.item.quantity"
                          }
                        }) : _vm._e(),
                        _vm._v(" "),
                        !(_vm.selected.item && _vm.selected.item.item === i.item.item) ? _c("span", [
                          _vm._v(_vm._s(i.item.quantity))
                        ]) : _vm._e()
                      ];
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("span", {staticStyle: {color: "red"}}, [
                _vm._v("* Items in red cannot be selected. (Not in any warehouse)")
              ])
            ], 1)
          ])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__7 = [];
  __vue_render__7._withStripped = true;
  var __vue_inject_styles__7 = function(inject) {
    if (!inject)
      return;
    inject("data-v-32cd97d1_0", {source: "\n.patient-name[data-v-32cd97d1] {\n  text-transform: capitalize;\n}\n.totals[data-v-32cd97d1] {\n  font-size: 14px;\n  font-weight: 700;\n}\n.total-row[data-v-32cd97d1] {\n  display: flex;\n  justify-content: space-between;\n}\ninput[type='number'][data-v-32cd97d1] {\n  padding: 1px;\n  border: 1;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n.table-responsive[data-v-32cd97d1] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/container/UserPrescription.vue"], "names": [], "mappings": ";AAshCA;EACA,0BAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;AACA;AAEA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;EACA,YAAA;EACA,SAAA;EACA,4CAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;AACA", "file": "UserPrescription.vue", "sourcesContent": [`<template>
  <div class="" style="margin-left: -1%;">
    <b-modal
      id="modal-prevent-closing"
      ref="changeServiceUnitModal"
      title="Select Pharmacy Warehouse"
      @hidden="resetServiceUnits"
      @ok="updateWarehouse"
    >
      <b-form-select v-model="warehouse" :options="warehouses" placeholder="Select warehouse"></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ warehouse }}</strong>
      </div>
    </b-modal>
    <!-- <div v-if="loading" style="padding-top:25%; text-align:center; height:100vh;">
                                                                                <b-spinner style="width: 300px; height: 300px;margin:auto;"></b-spinner>
                                                                            </div> -->

    <div style="padding-top: 0.2%; margin-top: 8px">
      <b-row>
        <b-col>
          <div style="display: flex; justify-content: flex-end">
            <b-button-group style="margin-right: 16px; margin-top: 4px">
              <!-- <b-button style="margin-right: 2px" variant="primary" @click="postInvoice">Create Sales Order</b-button> -->
              <!-- <b-button
                v-if="prescription && prescription.length"
                style="margin-right: 2px"
                variant="primary"
                @click="printPrescription(prescription[0])"
                >Print</b-button
              > -->
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="checkInvoice">Payment </b-button> -->
              <b-button style="margin-right: 2px" variant="primary" @click="dispense" v-if="paidPres.length > 0"
                >Dispense</b-button
              >
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="transferPrescription">Transfer</b-button> -->
            </b-button-group>
          </div>
        </b-col>
      </b-row>
      <b-form-checkbox v-model="showPrevious" switch>Click to {{showPrevious ? 'Show Today only':\`Show Previous Prescriptions\`}}</b-form-checkbox>
      <div>
        <h4>
          {{showPrevious ? 'All Prescriptions':\`Today's Prescriptions\`}}
        </h4>
      </div>
      <div class="table-responsive">

        <b-table :fields="fields" class="table" stacked="md" small hover :items="showPrevious ? prescription : filterdPrescription">
          <template #cell(action)="row">
            <div style="display: flex;">
            <b-button @click="openModal(row.item)" class="sm" variant="primary"> View</b-button>
            <b-button style="margin-left: 8px" @click="openEditModal(row.item)" variant="primary">Edit Prescription</b-button>
            </div>
          </template>
        </b-table>
        <h4  v-if="staged.length" style="margin-top: 16px">Drugs Staged to Bill</h4>
            <b-table v-if="staged.length" :items="staged" :fields="toDispenseFields">
              <template #cell(quantity)="i">
                <b-input type="number" name="quantity" v-model="i.item.quantity" :max="i.item.quantity" @blur="calculateUnpaid(e, i)" :value="i.item.quantity" />
              </template>
              <template #cell(action)="row">
                <b-button @click="unStage(row)" variant="danger">Unstage</b-button>
              </template>
            </b-table>
          <div v-if="staged.length" style="display: flex; justify-content: space-between; padding: 16px; background: lightgray; align-items: center">
            <h4>Total Amount to Bill</h4>
            <strong>
            <h4>KES {{totalUnpaid.toFixed(e).toLocaleString()}}</h4>
            </strong>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 16px; align-items: center">
          <h4>Insurance Limit</h4>
          <div style="display: flex; align-items: center;">
          <h4 style="margin-right: 32px; margin-bottom: 0">KES</h4><b-input v-model="insurance" type="number" style="width: 200px" />
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 16px; align-items: center">
          <h4>Individual Amount</h4>
          <div style="display: flex; align-items: center;">
            KES <span>{{Number(Math.ceil(totalUnpaid - insurance, 0)).toFixed(2).toLocaleString() }}</span>
          </div>
        </div>
        <div v-if="staged.length" style="display: flex; justify-content: flex-end; padding: 16px; align-items: center">
            <b-button @click="createSalesOrders()" variant="primary">Create Sales Order For Staged Items</b-button>
        </div>
        <b-modal
          size="lg"
          :ok-title="activeRow.patient_appointment ? 'submit' : 'Create Medication Order'"
          id="modal-1"
          ref="viewPrescription"
          title="Doctor's Drug Prescription"
          @ok="stageForOrder()"
          @hidden="clearSelected()"
        >
        
        <div style="margin-top: 16px">
            <strong>Patient Status:</strong>
            <span style="margin-bottom: 0">{{ activeRow.inpatient_record ? 'Inpatient': 'Outpatient' }}</span>
          </div>
          <div style="margin-top: 16px">
            <strong>Drug:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.drug_name }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Dose:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.dose }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Route of Administration:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.route_of_administration }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Start Date:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.start_date }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Instructions:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.instructions }}</pre>
          </div>
          <div style="margin-top: 16px">
            <h4>Matched Stock Items</h4>
            <b-table
              bordered
              :items="items"
              :fields="[
                { label: 'Select', key: 'select' },
                {label: 'Item Name', key: 'item_name',},
                { label: 'Quantity', key: 'quantity' },
                'in_stock',
                { label: 'Rate', key: 'rate' },
                {key: 'total', label: 'Total'},
              ]"
            >
            <template #cell(rate)="i">
              <div style="text-align: right;">
                {{ i.item.rate.toFixed(2) }}
              </div>
            </template>
            <template #cell(total)="item">
              <div style="text-align: right;">
              <span>{{'KES ' + Number(item.item.quantity * parseFloat(item.item.rate)).toFixed(2).toLocaleString()}}</span>
              </div>
            </template>
            <template #cell(item_name)="it">
                <span v-if="it.item.rate == 0" style="color: red">{{ it.item.item_name }}</span>
                <span v-if="it.item.rate != 0">{{ it.item.item_name }}</span>
              </template>
              <template #cell(select)="row">
                <input :disabled="row.item.rate == 0" v-model="selected" @change="onSelect(row.item.item.split(/\\s+/).join('-'))" type="radio" variant="primary" name="some-radio" :value="row" />
              </template>
              <template #cell(quantity)="i">
                <b-input :disabled="i.item.rate == 0" v-if="selected.item && selected.item.item === i.item.item" type="number" name="qty" v-model="i.item.quantity" :id="i.item.item.split(/\\s+/).join('-')" :value="i.item.quantity" />
                 <span v-if="!(selected.item && selected.item.item === i.item.item)">{{i.item.quantity}}</span>
              </template>
              <!-- <template #cell(action)="row">
                <b-button @click="removeMatchedItem(row.item)" variant="danger">Remove</b-button>
              </template> -->
            </b-table>
            <span style="color: red">* Items in red cannot be selected. (Not in any warehouse)</span>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { get_item_dashboard_data } from '../../../utils';
import Paginator from '../../util/Paginator.vue';
// import { Vue } from 'vue';
// import PatientInfo from './PatientInfo.vue';
import {
  // getPrescriptions,
  // getPatientPrescriptionsV2,
  updatePrescriptionItem,
  createPrescriptionInvoice,
  getPrescriptionInvoice,
  setPrescriptionInvoiceNumber,
  getDrugItemAlternates,
  updatePrescriptionItemDrug,
  getPrecriptionDrugUnitPrice,
  getWarehouses,
  updatePrescriptionWarehouse,
  dispensePrescription,
  // prescriptionItemMaterialRequest,
  dispenseStockEntry,
  prescriptionChangeComment,
  stageItemForOrder,
  createDrugSalesOrder,
  getMatchedItems,
  matchStockItemApi,
  calculatePrescriptionQuantity,
  getDrugsAwaitingDispense,
  getDrugGroups,
  updateDrugPrescription,
  removeMatchedItem as removeMatchedItemApi,unStageApi,
} from '../../../../services/pharmacy/prescriptions.js';
import { updateQueueStatus, removeFromQueue } from '../../../../services/pharmacy/queue.js';
import prescriptionStockModule from '../../../../state/pharmacy-stock/index.js';
import moment from 'moment';

export default {
  props: {
    queueState: {
      type: Object,
      default: {},
      required: true,
    },
    prescription: {
      type: Object,
      required: true,
    },
     patientData: {
      type: Object,
    },
    patientName: {
      type: String,
      required: true,
      default: ''
    },
    selectedPharmacy: {
      type: String,
      default: "",
      required: true,
    }
  },
  components: {
    Paginator,
    // PatientInfo
  },
  data() {
    return {
      // prescription: {},
      toDispenseFields: ['drug_name', {key: 'item_name', label: 'Selected Item' },  {key: 'creation', label: 'Creation', formatter: (value, key, item) => moment(item.creation).fromNow()}, 'rate', { label: 'Quantity', key: 'quantity' }, {key: 'total_price', label: 'Total Price', formatter: (value, key, item) => item.quantity * parseFloat(item.rate)}, {key: 'action', label: ' '}],
      staged: [],
      itemGroups: [],
      totalUnpaid: 0,
      selected: {},
      filterdPrescription: [],
      tt: false,
      prescriptionItems: [],
      prescriptionItemsPage: [],
      loading: true,
      alternativeDrugs: [],
      alternativeDrug: null,
      prescriptionItem: null,
      warehouses: [],
      warehouse: null,
      customerInfo: null,
      totalAmount: 0,
      selectedPrescriptions: [],
      selectedTotals: 0,
      paidPres: [],
      showPrevious: 0,
      fields: [
        'drug_name',
        { label: 'Dose', key: 'doctor_dose' },
        'frequency',
        'duration',
        {key: 'creation', label: 'Creation', formatter: (value, key, item) => moment(item.creation).fromNow()},
        'route_of_administration',
         { label: 'Ordered By', key: 'practitioner' },
        { label: 'Actions', key: 'action' },
      ],
      activeRow: {},
      items: [],
      addItem: false,
      insurance: 100000
    };
  },
  watch: {
    patientData(){
      if(this.patientData.customer_group === 'All Customer Groups') {
        this.insurance = 0
      } else {
        this.insurance = 100000
      }
    },
    prescription() {
      (this.selectedPrescriptions = []), (this.selectedTotals = 0);
      // this.totalAmount = Math.ceil(this.prescription.reduce((accum, item) => accum + (item.rate * item.qty || 1), 0)).toFixed(2);
      this.paidPres = this.prescription.filter(function (e) {
        return e.sales_order_status === 'Fully Billed';
      });
      this.filterdPrescription = this.prescription.filter(this.filter)
    },
    activeRow(){
        const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, warehouse: this.selectedPharmacy.warehouse, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: quantity || 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
      
    },
    patientName(){
      getDrugsAwaitingDispense({ patient: this.patientName, status: 'Staged'})
    .then((data) => {
      this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity }));
      this.totalUnpaid = data.reduce((a, b) => a + parseFloat(b.total_price),0)
    })
    }
  },
  methods: {
    filter (item){ return !moment(item.creation).diff(moment(), 'days')},
    onSelect(name){
      // const name = ev.item.split(/\\s+/).join('-')
      const el = document.getElementById(name);
      console.log(name, el)
      if(el){
        el.focus()
      }
    },
    unStage(row){
      unStageApi(row.item)
      .then(() => {
        this.$emit('onUpdateList')
        getDrugsAwaitingDispense({ patient: this.patientName, status: 'Staged'})
    .then((data) => {
      this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity }));
      this.totalUnpaid = data.reduce((a, b) => a + parseFloat(b.total_price),0)
    })
      })
    },
    clearSelected(){
      this.selected = {}
    },
    openEditModal(item){
      const parent = this;
      const previousName = item.drug_name;
      let d = new frappe.ui.Dialog({
        title: \`Edit Drug Prescription\`,
        fields: [{
                    label: 'Drug',
                    fieldname: 'drug',
                    fieldtype: 'Link',
                    options: 'Item',
                    reqd: true,
                    filters: { item_group: ['in', parent.itemGroups ], has_variants: 1},
                    default : item.drug,
                    onchange: () => {
                       frappe.db.get_value('Item', d.fields_dict.drug.value, 'item_name').then(({ message }) => {
                         d.set_value('drug_name', message.item_name);
                         d.set_value('instructions', \`Take \${message.item_name} \${item.doctor_dose || item.dose || ''} for \${item.duration} \${item.period || ''}\`)
                         d.refresh();
                });
                    }
                },{
                    label: 'Drug Name',
                    fieldname: 'drug_name',
                    fetch_from: 'drug.item_name',
                    fieldtype: 'Data',
                    reqd: true,
                     default : item.drug_name,
                    read_only: 1
                },{
                    label: 'Instructions',
                    fieldname: 'instructions',
                    fieldtype: 'Small Text',
                    default: item.instructions
                }],
        primary_action: (values) => {
          updateDrugPrescription({...values, name: item.name })
          .then((res) => {
            item.drug_name = res.drug_name
            item.instructions = res.instructions
            item.drug = res.drug
            this.$emit('onUpdateList')
          })
          d.hide();
        }    
      });
      d.show()
    },
    removeMatchedItem(item){
      removeMatchedItemApi(item)
      .then(() => {
        const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
      })
    },
    calculateUnpaid(e, i) {
      const data = this.staged;
      const maximum = Math.min(parseInt(i.item.initialQuantity), i.item.quantity);
      i.item.quantity = maximum;
      this.totalUnpaid = data.reduce((a, b) => a + (parseFloat(b.rate) * parseFloat(b.quantity)),0)
    },
    openModal(row) {
      this.activeRow = row;
      console.log(row);
      this.$refs.viewPrescription.show();
    },
    addAMatch(item){
      let d = new frappe.ui.Dialog({
        title: \`Add Matching Stock Item\`,
        fields: [{
            label: 'Item',
            fieldname: 'item',
            fieldtype: 'Link',
            options: 'Item',
            filters: { has_variants: 0, item_group: ['in', this.itemGroups]}
          },
          {
            label: 'Strength',
            fieldname: 'strength',
            fieldtype: 'Data',
          },{
            label: 'Route of Administration',
            fieldname: 'dosage_form',
            fieldtype: 'Link',
            options: 'Dosage Form'
          },],
        primary_action: (values) => {
          matchStockItemApi({dosage_form: item.dosage_form, ...values, drug: item.drug}).then(() => {
            frappe.show_alert(\`\${item.drug} matched successfully with \${values.item}\`, 5);
            this.getStagedItems();
            const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
            d.hide();
          })
        }
      });
      d.show()
    },
    stageForOrder(){
      if(!this.selected.item) {
          return frappe.throw('Please select an item or add a matched Item before creating a medication order')
        }

        console.log(this.selected)
      const args = {
        patient: this.activeRow.patient_number,
        encounter: this.activeRow.patient_encounter, 
        inpatient_record: this.activeRow.inpatient_record, 
        item: this.selected.item.item, 
        quantity: this.selected.item.quantity,
        service_unit: this.activeRow.service_unit,
        appointment_name: this.activeRow.patient_appointment,
        doctors_prescription: this.activeRow.name,
        route_of_administration: this.activeRow.route_of_administration || '',
        rate: this.selected.item.rate,
        
      }

      stageItemForOrder(args).then(() => {
        this.$emit('onUpdateList');
        this.getStagedItems();
        })
    
    },
    createSalesOrders(){
      const args = {
        items: this.staged,
        limit: this.insurance,
        total: this.totalUnpaid,
        warehouse: this.selectedPharmacy.warehouse,
      }
      console.log()
      createDrugSalesOrder(args).then(() => {
        updateQueueStatus({ state_name: this.queueState.name, status: 'Invoiced' }).then((m) => {})
        this.getStagedItems();
        this.$emit('onUpdateList')
      })
    },
    getAmountAndPayerSum(payer, rate, qty, remaining_quantity = 0, co_paid_quantity = 0, type) {
      switch (payer) {
        case 'Patient':
          return type === 'Amount' ? Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas : 'Patient incurs';
        case 'Copay':
          return type === 'Amount'
            ? Math.ceil(rate * (remaining_quantity * qty)).toFixed(2) || 1 | numberWithCommas
            : 'Copaid amount: ' +
                '(' +
                (Math.ceil(rate * (co_paid_quantity * qty)).toFixed(2) || 1 | numberWithCommas) +
                ')';
        case 'Insurance':
          return type === 'Amount'
            ? 0
            : 'Insurance covers: ' + '(' + (Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas) + ')';
        case 'Pre-auth Insurance':
          return type === 'Amount'
            ? 0
            : 'Insurance Pre-auth: ' + '(' + (Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas) + ')';
        case 'Pre-auth Copay':
          return type === 'Amount'
            ? Math.ceil(rate * (remaining_quantity * qty)).toFixed(2) || 1 | numberWithCommas
            : 'Pre-auth Copay:: ' +
                '(' +
                (Math.ceil(rate * (co_paid_quantity * qty)).toFixed(2) || 1 | numberWithCommas) +
                ')';
      }
    },
    selectAll() {
      this.prescription.forEach((item) => {
        if (!item.sales_order) {
          this.selectRow(item);
        }
      });
    },
    printPrescription(prescriptionItem) {
      var w = window.open(
        frappe.urllib.get_full_url(
          '/printview?' +
            'doctype=' +
            encodeURIComponent('Patient Encounter') +
            '&name=' +
            encodeURIComponent(prescriptionItem.encounter) +
            '&format=Encounter Prescription Print Format&_lang=en&trigger_print=1',
        ),
      );
      if (!w) {
        msgprint(__('Please enable pop-ups'));
        return;
      }
    },
    dispense() {
      let paidPrescription = this.prescription.filter(function (e) {
        return e.sales_order_status === 'Fully Billed';
      });
      if (paidPrescription.length) {
        dispenseStockEntry({
          warehouse: paidPrescription[0].warehouse,
          encounter_name: paidPrescription[0].encounter,
          // prescription_names: this.prescription.map(drug=>drug.prescription_id) ,
          sales_order: paidPrescription[0].sales_order,
          patient_name: paidPrescription[0].patient_number,
        }).then((result) => {
          frappe.show_alert(
            {
              message: \`Stocks Updated\`,
              indicator: 'green',
            },
            15,
          );
          dispensePrescription({
            prescription_names: paidPrescription.map((drug) => drug.prescription_id),
            patient_name: paidPrescription[0].patient_number,
            warehouse_name: paidPrescription[0].warehouse,
          }).then((data) => {
            frappe.show_alert(
              {
                message: \`Prescription Dispensed\`,
                indicator: 'green',
              },
              15,
            );
          });
          removeFromQueue({ queue_state_name: parent.queueState.name }).then((r) => {
            console.log('REMOVED FROM QUEUE');
          });
          prescriptionChangeComment({
            reference_doctype: 'Patient Encounter',
            reference_name: paidPrescription[0].encounter,
            content: \`Prescriptions : \${paidPrescription.map((x) => x.drug_code).toString()} Dispensed\`,
            comment_email: frappe.session.user,
            comment_by: frappe.session.user_fullname,
          }).then((result) => {});
        });
      } else {
        frappe.show_alert(
          {
            message: \`No invoiced Prescription\`,
            indicator: 'red',
          },
          5,
        );
      }
    },
    selectRow(item) {
      console.log('Start ', this.selectedPrescriptions.length);
      if (typeof item === 'object') {
        let replaced = false;
        this.selectedPrescriptions.map((pres, x) => {
          if (pres.prescription_id === item.prescription_id) {
            this.selectedPrescriptions.splice(this.selectedPrescriptions.indexOf(item), 1);
            replaced = true;
          }
        });
        if (!replaced) {
          this.selectedPrescriptions.push(item);
        }
        this.selectedTotals = Math.ceil(
          this.selectedPrescriptions.reduce((accum, item) => accum + item.rate * item.qty, 0),
        ).toFixed(2);
      } else {
        //
      }
    },
    printPrescriptionLabel(prescriptionItem) {
      // console.log(JSON.stringify(prescriptionItem))
      // https://docs.erpnext.com/docs/user/manual/en/setting-up/print/raw-printing
      var w = window.open(
        frappe.urllib.get_full_url(
          '/printview?' +
            'doctype=' +
            encodeURIComponent('Drug Prescription') +
            '&name=' +
            encodeURIComponent(prescriptionItem.prescription_id) +
            '&format=Drug Prescription Label&_lang=en&no_letterhead=1&letterhead=No Letterhead&trigger_print=1',
        ),
      );
      if (!w) {
        msgprint(__('Please enable pop-ups'));
        return;
      }
    },
    createMaterialRequest(prescriptionItem) {
      let parent = this;
      let d = new frappe.ui.Dialog({
        title: \`Material Request for \${prescriptionItem.drug_name}\`,
        fields: [
          {
            label: 'Warehouse',
            fieldname: 'warehouse',
            fieldtype: 'Select',
            options: this.warehouses,
          },
          {
            label: 'Quantity',
            fieldname: 'quantity',
            fieldtype: 'Int',
          },
        ],
        primary_action_label: 'Submit',
        primary_action(values) {
          d.hide();
          parent.$store.dispatch('prescriptionStockModule/createMaterialRequest', {
            drug: prescriptionItem.drug_name,
            quantity: values.quantity,
            warehouse: prescriptionItem.warehouse,
            from_warehouse: values.warehouse,
          });
        },
        secondary_action_label: 'Cancel',
        secondary_action() {
          d.hide();
        },
      });
      d.show();
      this.loading = false;
    },
    resetMaterialRequestModal() {
      this.prescriptionItem = null;
    },
    materialRequest(prescriptionItem) {
      this.prescriptionItem = prescriptionItem;
      getWarehouses({}).then((result) => {
        if (result && result.length) {
          this.warehouses = result.map((unit) => unit.name);
          this.createMaterialRequest(prescriptionItem);
        } else {
          frappe.show_alert(
            {
              message: \`No Warehouses Available\`,
              indicator: 'orange',
            },
            5,
          );
        }
      });
    },
    updateWarehouse() {
      if (this.prescription && this.prescription.name) {
        updatePrescriptionWarehouse({
          prescription_name: this.prescription.name,
          warehouse_name: this.warehouse,
        }).then((result) => {
          if (result) {
            frappe.show_alert(
              {
                message: \`Prescription  Moved to \${result.warehouse}.\`,
                indicator: 'green',
              },
              5,
            );
            this.prescription = result;
            this.loading = false;
          } else {
            frappe.show_alert(
              {
                message: \`Transfer Failed. Please try again\`,
                indicator: 'red',
              },
              5,
            );
          }
        });
      } else {
        frappe.show_alert(
          {
            message: \`No Prescription Selected\`,
            indicator: 'orange',
          },
          5,
        );
      }
      this.loading = false;
    },
    resetServiceUnits() {
      this.warehouse = null;
    },
    transferPrescription() {
      // frappe.set_route("prescription", this.prescription.name);
      if (this.prescription && this.prescription.name) {
        getWarehouses({}).then((result) => {
          if (result && result.length) {
            this.warehouses = result.map((unit) => unit.name);
            this.$refs.changeServiceUnitModal.show();
          } else {
            frappe.show_alert(
              {
                message: \`No Healthcare Service Units\`,
                indicator: 'orange',
              },
              5,
            );
          }
        });
      } else {
        frappe.show_alert(
          {
            message: \`No Prescription Selected\`,
            indicator: 'orange',
          },
          5,
        );
      }
    },
    fetchAlternates(prescriptionItem) {
      this.prescriptionItem = prescriptionItem;
      getDrugItemAlternates({
        drug_name: prescriptionItem.drug_code,
      }).then((result) => {
        if (result && result.length) {
          this.alternativeDrugs = result.map((drugs) => drugs.alternative_item_code);
          this.changeDrug(prescriptionItem, this.alternativeDrugs);
        } else {
          frappe.show_alert(
            {
              message: \`\${prescriptionItem.drug_code} has no alternative setup in the system\`,
              indicator: 'orange',
            },
            5,
          );
        }
      });
    },
    resetAlternateDrugModal() {
      this.alternativeDrugs = [];
      this.alternativeDrug = null;
      this.prescriptionItems = null;
    },
    changeDrug(prescriptionItem, alternativeDrugs) {
      let parent = this;
      // https://frappeframework.com/docs/user/en/guides/app-development/dialogs-types
      let d = new frappe.ui.Dialog({
        title: \`Select Alternate Drug for \${prescriptionItem.drug_name}\`,
        fields: [
          {
            label: 'Drug',
            fieldname: 'alternativeDrug',
            fieldtype: 'Select',
            options: alternativeDrugs,
          },
        ],
        primary_action_label: 'Submit',
        primary_action(values) {
          updatePrescriptionItemDrug({
            patient_name: prescriptionItem.patient_number,
            prescription_item_name: prescriptionItem.prescription_id,
            drug_name: values.alternativeDrug,
          }).then((result) => {
            parent.loading = false;
            parent.updateTableRow(result);
          });
          d.hide();
          prescriptionChangeComment({
            reference_doctype: 'Patient Encounter',
            reference_name: prescriptionItem.encounter,
            content: \`Prescription Drug Change from \${prescriptionItem.drug_code} to \${values.alternativeDrug}\`,
            comment_email: frappe.session.user,
            comment_by: frappe.session.user_fullname,
          }).then((result) => {});
        },
        secondary_action_label: 'Cancel',
        secondary_action() {
          d.hide();
          parent.resetAlternateDrugModal();
        },
      });
      d.show();
      this.loading = false;
    },
    updateTableRow(result) {
      this.prescription.map((item, x) => {
        if (item.prescription_id === result.name) {
          Vue.set(this.prescription, x, result);
        }
      });
      this.itemUnitsChanged();
      this.resetAlternateDrugModal();
    },
    numberOfUnitsChange(prescriptionItem) {
      this.loading = true;
      updatePrescriptionItem({
        name: prescriptionItem.prescription_id,
        qty: prescriptionItem.qty,
      })
        .then((result) => {
          this.loading = false;
          this.prescription.prescription_item.map((item, x) => {
            if (item.name === result.name) {
              Vue.set(this.prescription.prescription_item, x, result);
            }
          });
          frappe.show_alert(
            {
              message: \`Drug  #\${prescriptionItem.drug_code} unit changed.\`,
              indicator: 'green',
            },
            5,
          );
          this.itemUnitsChanged();
        })
        .catch((err) => {
          this.loading = false;
        });
      this.loading = false;
    },
    itemUnitsChanged(type) {
      let totalAmount = 0;
      if (this.prescription && this.prescription.length) {
        let itemList = [];
        if (type === 'Gross') {
          itemList = this.prescription;
        } else {
          itemList = this.selectedPrescriptions;
        }
        itemList.forEach((item, index) => {
          switch (item.payer) {
            case 'Patient':
              totalAmount = totalAmount + item.rate * item.qty;
              break;
            case 'Copay':
              totalAmount = totalAmount + Math.ceil(item.rate * (item.qty * item.remaining_quantity));
              break;
            case 'Insurance':
              totalAmount = totalAmount + 0;
              break;
            case 'Pre-auth Insurance':
              totalAmount = totalAmount + 0;
              break;
            case 'Pre-auth Copay':
              totalAmount = totalAmount + Math.ceil(item.rate * (item.qty * item.remaining_quantity));
              break;
          }
        });
        this.totalAmount = totalAmount;
      }

      return totalAmount;
    },
    postInvoice() {
      if (this.selectedPrescriptions && this.selectedPrescriptions.length) {
        // console.log(JSON.stringify(this.selectedPrescriptions))
        createPrescriptionSalesOrder({ prescription_docs: this.selectedPrescriptions, warehouse_name: '' }).then(
          (r) => {
            frappe.show_alert(
              {
                message: \`Prescription Sales order created\`,
                indicator: 'green',
              },
              5,
            );
            updateQueueStatus({ state_name: this.queueState.name, status: 'Invoiced' }).then((m) => {});
            this.selectedPrescriptions = [];
          },
        );
      } else {
        frappe.show_alert(
          {
            message: 'Please Select prescription',
            indicator: 'orange',
          },
          5,
        );
      }
    },
    getStagedItems(){
       getDrugsAwaitingDispense({ patient: this.patientName, status: 'Staged'})
    .then((data) => {
      this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity}));
      console.log(data)
      this.totalUnpaid = data.reduce((a, b) => a + parseFloat(b.total_price),0)
    })
    },
    checkInvoice() {
      if (this.prescription && this.prescription.length && this.prescription[0].sales_order) {
        getPrescriptionInvoice({
          name: this.prescription[0].sales_order,
        }).then((result) => {
          this.loading = false;
          frappe.show_alert(
            {
              message: \`Prescription Invoice #\${result.name} status is \${result.status}\`,
              indicator: 'green',
            },
            5,
          );
        });
      } else {
        frappe.show_alert(
          {
            message: \`Sales Invoice not found.\`,
            indicator: 'orange',
          },
          5,
        );
      }
      this.loading = false;
    },
    setPrescriptionInvoice(invoiceName) {
      setPrescriptionInvoiceNumber({
        prescription_name: this.prescription.name,
        invoice_name: invoiceName,
      }).then((result) => {
        if (result) {
          frappe.show_alert(
            {
              message: \`Invoice #\${invoiceName} posted. Awaiting Payment\`,
              indicator: 'green',
            },
            5,
          );
          this.prescription = result;
          this.loading = false;
        } else {
          frappe.show_alert(
            {
              message: \`Invoice not Created\`,
              indicator: 'red',
            },
            5,
          );
        }
      });
      this.loading = false;
    },
    changePage(pageOfItems) {
      this.prescriptionItemsPage = pageOfItems;
    },
    stockCheck(prescription) {
      frappe.call({
        method: 'erpnext.stock.dashboard.item_dashboard.get_data',
        args: {
          item_code: prescription.drug_code,
        },
        callback: ({ message = [] }) => {
          const context = get_item_dashboard_data(message, 10, true);
          if (message.length) {
            let msgText = \`<ol>\`;
            message.forEach((msg) => {
              msgText += \`<li> \${msg.warehouse}  <b> \${msg.projected_qty}/\${msg.actual_qty}</b></li>\`;
            });
            msgText += \`</ol>\`;
            frappe.msgprint({
              title: __((prescription.drug_code || '').toUpperCase()),
              indicator: 'green',
              message: msgText,
            });
          } else {
            frappe.msgprint({
              title: __((prescription.drug_code || '').toUpperCase()),
              message: 'Stock Data Unavailable.',
              indicator: 'green',
            });
          }
          //frappe.msgprint(JSON.stringify(message))

          // frappe.msgprint({
          //     title: __((prescription.drug_code || "").toUpperCase()),
          //     indicator: message.length ? "green" : "red",
          //     message: \`\${
          //     message.length
          //         ? frappe.render_template("item_dashboard_list", context)
          //         : \`<div class='text-muted small'>  \${__(
          //             "Currently no stock available in any warehouse"
          //         )} </span>\`
          //     }\`
          // });
        },
      });
    },
    get_host: function (port = 3000) {
      var host = window.location.origin;
      if (window.dev_server || true) {
        var parts = host.split(':');
        port = frappe.boot.socketio_port || port.toString() || '3000';
        if (parts.length > 2) {
          host = parts[0] + ':' + parts[1];
        }
        host = host + ':' + port;
      }
      return host;
    },
  },
  created() {
    this.$store.registerModule('prescriptionStockModule', prescriptionStockModule);
  },
  mounted() {
    const host = this.get_host(3000);
    const socket = io.connect();
    this.socket = socket;
    let parent = this;
    socket.on('connect', () => {
      console.log('User Prescription connected');
    });
   this.getStagedItems();
   getDrugGroups().then((data) => {
       this.itemGroups = data
      })
  },
  filters: {
    // Filter definitions
    Upper(value) {
      return value.toUpperCase();
    },
    title(str) {
      return str.replace(/\\w([^-\\s]*)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    numberWithCommas(x) {
      if (x) {
        return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.patient-name {
  text-transform: capitalize;
}

.totals {
  font-size: 14px;
  font-weight: 700;
}

.total-row {
  display: flex;
  justify-content: space-between;
}

input[type='number'] {
  padding: 1px;
  border: 1;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.table-responsive {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
`]}, media: void 0});
  };
  var __vue_scope_id__7 = "data-v-32cd97d1";
  var __vue_module_identifier__7 = void 0;
  var __vue_is_functional_template__7 = false;
  function __vue_normalize__7(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div class="" style="margin-left: -1%;">
    <b-modal
      id="modal-prevent-closing"
      ref="changeServiceUnitModal"
      title="Select Pharmacy Warehouse"
      @hidden="resetServiceUnits"
      @ok="updateWarehouse"
    >
      <b-form-select v-model="warehouse" :options="warehouses" placeholder="Select warehouse"></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ warehouse }}</strong>
      </div>
    </b-modal>
    <!-- <div v-if="loading" style="padding-top:25%; text-align:center; height:100vh;">
                                                                                <b-spinner style="width: 300px; height: 300px;margin:auto;"></b-spinner>
                                                                            </div> -->

    <div style="padding-top: 0.2%; margin-top: 8px">
      <b-row>
        <b-col>
          <div style="display: flex; justify-content: flex-end">
            <b-button-group style="margin-right: 16px; margin-top: 4px">
              <!-- <b-button style="margin-right: 2px" variant="primary" @click="postInvoice">Create Sales Order</b-button> -->
              <!-- <b-button
                v-if="prescription && prescription.length"
                style="margin-right: 2px"
                variant="primary"
                @click="printPrescription(prescription[0])"
                >Print</b-button
              > -->
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="checkInvoice">Payment </b-button> -->
              <b-button style="margin-right: 2px" variant="primary" @click="dispense" v-if="paidPres.length > 0"
                >Dispense</b-button
              >
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="transferPrescription">Transfer</b-button> -->
            </b-button-group>
          </div>
        </b-col>
      </b-row>
      <b-form-checkbox v-model="showPrevious" switch>Click to {{showPrevious ? 'Show Today only':\`Show Previous Prescriptions\`}}</b-form-checkbox>
      <div>
        <h4>
          {{showPrevious ? 'All Prescriptions':\`Today's Prescriptions\`}}
        </h4>
      </div>
      <div class="table-responsive">

        <b-table :fields="fields" class="table" stacked="md" small hover :items="showPrevious ? prescription : filterdPrescription">
          <template #cell(action)="row">
            <div style="display: flex;">
            <b-button @click="openModal(row.item)" class="sm" variant="primary"> View</b-button>
            <b-button style="margin-left: 8px" @click="openEditModal(row.item)" variant="primary">Edit Prescription</b-button>
            </div>
          </template>
        </b-table>
        <h4  v-if="staged.length" style="margin-top: 16px">Drugs Staged to Bill</h4>
            <b-table v-if="staged.length" :items="staged" :fields="toDispenseFields">
              <template #cell(quantity)="i">
                <b-input type="number" name="quantity" v-model="i.item.quantity" :max="i.item.quantity" @blur="calculateUnpaid(e, i)" :value="i.item.quantity" />
              </template>
              <template #cell(action)="row">
                <b-button @click="unStage(row)" variant="danger">Unstage</b-button>
              </template>
            </b-table>
          <div v-if="staged.length" style="display: flex; justify-content: space-between; padding: 16px; background: lightgray; align-items: center">
            <h4>Total Amount to Bill</h4>
            <strong>
            <h4>KES {{totalUnpaid.toFixed(e).toLocaleString()}}</h4>
            </strong>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 16px; align-items: center">
          <h4>Insurance Limit</h4>
          <div style="display: flex; align-items: center;">
          <h4 style="margin-right: 32px; margin-bottom: 0">KES</h4><b-input v-model="insurance" type="number" style="width: 200px" />
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 16px; align-items: center">
          <h4>Individual Amount</h4>
          <div style="display: flex; align-items: center;">
            KES <span>{{Number(Math.ceil(totalUnpaid - insurance, 0)).toFixed(2).toLocaleString() }}</span>
          </div>
        </div>
        <div v-if="staged.length" style="display: flex; justify-content: flex-end; padding: 16px; align-items: center">
            <b-button @click="createSalesOrders()" variant="primary">Create Sales Order For Staged Items</b-button>
        </div>
        <b-modal
          size="lg"
          :ok-title="activeRow.patient_appointment ? 'submit' : 'Create Medication Order'"
          id="modal-1"
          ref="viewPrescription"
          title="Doctor's Drug Prescription"
          @ok="stageForOrder()"
          @hidden="clearSelected()"
        >
        
        <div style="margin-top: 16px">
            <strong>Patient Status:</strong>
            <span style="margin-bottom: 0">{{ activeRow.inpatient_record ? 'Inpatient': 'Outpatient' }}</span>
          </div>
          <div style="margin-top: 16px">
            <strong>Drug:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.drug_name }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Dose:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.dose }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Route of Administration:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.route_of_administration }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Start Date:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.start_date }}</pre>
          </div>
          <div style="margin-top: 16px">
            <strong>Instructions:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.instructions }}</pre>
          </div>
          <div style="margin-top: 16px">
            <h4>Matched Stock Items</h4>
            <b-table
              bordered
              :items="items"
              :fields="[
                { label: 'Select', key: 'select' },
                {label: 'Item Name', key: 'item_name',},
                { label: 'Quantity', key: 'quantity' },
                'in_stock',
                { label: 'Rate', key: 'rate' },
                {key: 'total', label: 'Total'},
              ]"
            >
            <template #cell(rate)="i">
              <div style="text-align: right;">
                {{ i.item.rate.toFixed(2) }}
              </div>
            </template>
            <template #cell(total)="item">
              <div style="text-align: right;">
              <span>{{'KES ' + Number(item.item.quantity * parseFloat(item.item.rate)).toFixed(2).toLocaleString()}}</span>
              </div>
            </template>
            <template #cell(item_name)="it">
                <span v-if="it.item.rate == 0" style="color: red">{{ it.item.item_name }}</span>
                <span v-if="it.item.rate != 0">{{ it.item.item_name }}</span>
              </template>
              <template #cell(select)="row">
                <input :disabled="row.item.rate == 0" v-model="selected" @change="onSelect(row.item.item.split(/\\s+/).join('-'))" type="radio" variant="primary" name="some-radio" :value="row" />
              </template>
              <template #cell(quantity)="i">
                <b-input :disabled="i.item.rate == 0" v-if="selected.item && selected.item.item === i.item.item" type="number" name="qty" v-model="i.item.quantity" :id="i.item.item.split(/\\s+/).join('-')" :value="i.item.quantity" />
                 <span v-if="!(selected.item && selected.item.item === i.item.item)">{{i.item.quantity}}</span>
              </template>
              <!-- <template #cell(action)="row">
                <b-button @click="removeMatchedItem(row.item)" variant="danger">Remove</b-button>
              </template> -->
            </b-table>
            <span style="color: red">* Items in red cannot be selected. (Not in any warehouse)</span>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { get_item_dashboard_data } from '../../../utils';
import Paginator from '../../util/Paginator.vue';
// import { Vue } from 'vue';
// import PatientInfo from './PatientInfo.vue';
import {
  // getPrescriptions,
  // getPatientPrescriptionsV2,
  updatePrescriptionItem,
  createPrescriptionInvoice,
  getPrescriptionInvoice,
  setPrescriptionInvoiceNumber,
  getDrugItemAlternates,
  updatePrescriptionItemDrug,
  getPrecriptionDrugUnitPrice,
  getWarehouses,
  updatePrescriptionWarehouse,
  dispensePrescription,
  // prescriptionItemMaterialRequest,
  dispenseStockEntry,
  prescriptionChangeComment,
  stageItemForOrder,
  createDrugSalesOrder,
  getMatchedItems,
  matchStockItemApi,
  calculatePrescriptionQuantity,
  getDrugsAwaitingDispense,
  getDrugGroups,
  updateDrugPrescription,
  removeMatchedItem as removeMatchedItemApi,unStageApi,
} from '../../../../services/pharmacy/prescriptions.js';
import { updateQueueStatus, removeFromQueue } from '../../../../services/pharmacy/queue.js';
import prescriptionStockModule from '../../../../state/pharmacy-stock/index.js';
import moment from 'moment';

export default {
  props: {
    queueState: {
      type: Object,
      default: {},
      required: true,
    },
    prescription: {
      type: Object,
      required: true,
    },
     patientData: {
      type: Object,
    },
    patientName: {
      type: String,
      required: true,
      default: ''
    },
    selectedPharmacy: {
      type: String,
      default: "",
      required: true,
    }
  },
  components: {
    Paginator,
    // PatientInfo
  },
  data() {
    return {
      // prescription: {},
      toDispenseFields: ['drug_name', {key: 'item_name', label: 'Selected Item' },  {key: 'creation', label: 'Creation', formatter: (value, key, item) => moment(item.creation).fromNow()}, 'rate', { label: 'Quantity', key: 'quantity' }, {key: 'total_price', label: 'Total Price', formatter: (value, key, item) => item.quantity * parseFloat(item.rate)}, {key: 'action', label: ' '}],
      staged: [],
      itemGroups: [],
      totalUnpaid: 0,
      selected: {},
      filterdPrescription: [],
      tt: false,
      prescriptionItems: [],
      prescriptionItemsPage: [],
      loading: true,
      alternativeDrugs: [],
      alternativeDrug: null,
      prescriptionItem: null,
      warehouses: [],
      warehouse: null,
      customerInfo: null,
      totalAmount: 0,
      selectedPrescriptions: [],
      selectedTotals: 0,
      paidPres: [],
      showPrevious: 0,
      fields: [
        'drug_name',
        { label: 'Dose', key: 'doctor_dose' },
        'frequency',
        'duration',
        {key: 'creation', label: 'Creation', formatter: (value, key, item) => moment(item.creation).fromNow()},
        'route_of_administration',
         { label: 'Ordered By', key: 'practitioner' },
        { label: 'Actions', key: 'action' },
      ],
      activeRow: {},
      items: [],
      addItem: false,
      insurance: 100000
    };
  },
  watch: {
    patientData(){
      if(this.patientData.customer_group === 'All Customer Groups') {
        this.insurance = 0
      } else {
        this.insurance = 100000
      }
    },
    prescription() {
      (this.selectedPrescriptions = []), (this.selectedTotals = 0);
      // this.totalAmount = Math.ceil(this.prescription.reduce((accum, item) => accum + (item.rate * item.qty || 1), 0)).toFixed(2);
      this.paidPres = this.prescription.filter(function (e) {
        return e.sales_order_status === 'Fully Billed';
      });
      this.filterdPrescription = this.prescription.filter(this.filter)
    },
    activeRow(){
        const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, warehouse: this.selectedPharmacy.warehouse, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: quantity || 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
      
    },
    patientName(){
      getDrugsAwaitingDispense({ patient: this.patientName, status: 'Staged'})
    .then((data) => {
      this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity }));
      this.totalUnpaid = data.reduce((a, b) => a + parseFloat(b.total_price),0)
    })
    }
  },
  methods: {
    filter (item){ return !moment(item.creation).diff(moment(), 'days')},
    onSelect(name){
      // const name = ev.item.split(/\\s+/).join('-')
      const el = document.getElementById(name);
      console.log(name, el)
      if(el){
        el.focus()
      }
    },
    unStage(row){
      unStageApi(row.item)
      .then(() => {
        this.$emit('onUpdateList')
        getDrugsAwaitingDispense({ patient: this.patientName, status: 'Staged'})
    .then((data) => {
      this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity }));
      this.totalUnpaid = data.reduce((a, b) => a + parseFloat(b.total_price),0)
    })
      })
    },
    clearSelected(){
      this.selected = {}
    },
    openEditModal(item){
      const parent = this;
      const previousName = item.drug_name;
      let d = new frappe.ui.Dialog({
        title: \`Edit Drug Prescription\`,
        fields: [{
                    label: 'Drug',
                    fieldname: 'drug',
                    fieldtype: 'Link',
                    options: 'Item',
                    reqd: true,
                    filters: { item_group: ['in', parent.itemGroups ], has_variants: 1},
                    default : item.drug,
                    onchange: () => {
                       frappe.db.get_value('Item', d.fields_dict.drug.value, 'item_name').then(({ message }) => {
                         d.set_value('drug_name', message.item_name);
                         d.set_value('instructions', \`Take \${message.item_name} \${item.doctor_dose || item.dose || ''} for \${item.duration} \${item.period || ''}\`)
                         d.refresh();
                });
                    }
                },{
                    label: 'Drug Name',
                    fieldname: 'drug_name',
                    fetch_from: 'drug.item_name',
                    fieldtype: 'Data',
                    reqd: true,
                     default : item.drug_name,
                    read_only: 1
                },{
                    label: 'Instructions',
                    fieldname: 'instructions',
                    fieldtype: 'Small Text',
                    default: item.instructions
                }],
        primary_action: (values) => {
          updateDrugPrescription({...values, name: item.name })
          .then((res) => {
            item.drug_name = res.drug_name
            item.instructions = res.instructions
            item.drug = res.drug
            this.$emit('onUpdateList')
          })
          d.hide();
        }    
      });
      d.show()
    },
    removeMatchedItem(item){
      removeMatchedItemApi(item)
      .then(() => {
        const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
      })
    },
    calculateUnpaid(e, i) {
      const data = this.staged;
      const maximum = Math.min(parseInt(i.item.initialQuantity), i.item.quantity);
      i.item.quantity = maximum;
      this.totalUnpaid = data.reduce((a, b) => a + (parseFloat(b.rate) * parseFloat(b.quantity)),0)
    },
    openModal(row) {
      this.activeRow = row;
      console.log(row);
      this.$refs.viewPrescription.show();
    },
    addAMatch(item){
      let d = new frappe.ui.Dialog({
        title: \`Add Matching Stock Item\`,
        fields: [{
            label: 'Item',
            fieldname: 'item',
            fieldtype: 'Link',
            options: 'Item',
            filters: { has_variants: 0, item_group: ['in', this.itemGroups]}
          },
          {
            label: 'Strength',
            fieldname: 'strength',
            fieldtype: 'Data',
          },{
            label: 'Route of Administration',
            fieldname: 'dosage_form',
            fieldtype: 'Link',
            options: 'Dosage Form'
          },],
        primary_action: (values) => {
          matchStockItemApi({dosage_form: item.dosage_form, ...values, drug: item.drug}).then(() => {
            frappe.show_alert(\`\${item.drug} matched successfully with \${values.item}\`, 5);
            this.getStagedItems();
            const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
            d.hide();
          })
        }
      });
      d.show()
    },
    stageForOrder(){
      if(!this.selected.item) {
          return frappe.throw('Please select an item or add a matched Item before creating a medication order')
        }

        console.log(this.selected)
      const args = {
        patient: this.activeRow.patient_number,
        encounter: this.activeRow.patient_encounter, 
        inpatient_record: this.activeRow.inpatient_record, 
        item: this.selected.item.item, 
        quantity: this.selected.item.quantity,
        service_unit: this.activeRow.service_unit,
        appointment_name: this.activeRow.patient_appointment,
        doctors_prescription: this.activeRow.name,
        route_of_administration: this.activeRow.route_of_administration || '',
        rate: this.selected.item.rate,
        
      }

      stageItemForOrder(args).then(() => {
        this.$emit('onUpdateList');
        this.getStagedItems();
        })
    
    },
    createSalesOrders(){
      const args = {
        items: this.staged,
        limit: this.insurance,
        total: this.totalUnpaid,
        warehouse: this.selectedPharmacy.warehouse,
      }
      console.log()
      createDrugSalesOrder(args).then(() => {
        updateQueueStatus({ state_name: this.queueState.name, status: 'Invoiced' }).then((m) => {})
        this.getStagedItems();
        this.$emit('onUpdateList')
      })
    },
    getAmountAndPayerSum(payer, rate, qty, remaining_quantity = 0, co_paid_quantity = 0, type) {
      switch (payer) {
        case 'Patient':
          return type === 'Amount' ? Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas : 'Patient incurs';
        case 'Copay':
          return type === 'Amount'
            ? Math.ceil(rate * (remaining_quantity * qty)).toFixed(2) || 1 | numberWithCommas
            : 'Copaid amount: ' +
                '(' +
                (Math.ceil(rate * (co_paid_quantity * qty)).toFixed(2) || 1 | numberWithCommas) +
                ')';
        case 'Insurance':
          return type === 'Amount'
            ? 0
            : 'Insurance covers: ' + '(' + (Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas) + ')';
        case 'Pre-auth Insurance':
          return type === 'Amount'
            ? 0
            : 'Insurance Pre-auth: ' + '(' + (Math.ceil(rate * qty).toFixed(2) || 1 | numberWithCommas) + ')';
        case 'Pre-auth Copay':
          return type === 'Amount'
            ? Math.ceil(rate * (remaining_quantity * qty)).toFixed(2) || 1 | numberWithCommas
            : 'Pre-auth Copay:: ' +
                '(' +
                (Math.ceil(rate * (co_paid_quantity * qty)).toFixed(2) || 1 | numberWithCommas) +
                ')';
      }
    },
    selectAll() {
      this.prescription.forEach((item) => {
        if (!item.sales_order) {
          this.selectRow(item);
        }
      });
    },
    printPrescription(prescriptionItem) {
      var w = window.open(
        frappe.urllib.get_full_url(
          '/printview?' +
            'doctype=' +
            encodeURIComponent('Patient Encounter') +
            '&name=' +
            encodeURIComponent(prescriptionItem.encounter) +
            '&format=Encounter Prescription Print Format&_lang=en&trigger_print=1',
        ),
      );
      if (!w) {
        msgprint(__('Please enable pop-ups'));
        return;
      }
    },
    dispense() {
      let paidPrescription = this.prescription.filter(function (e) {
        return e.sales_order_status === 'Fully Billed';
      });
      if (paidPrescription.length) {
        dispenseStockEntry({
          warehouse: paidPrescription[0].warehouse,
          encounter_name: paidPrescription[0].encounter,
          // prescription_names: this.prescription.map(drug=>drug.prescription_id) ,
          sales_order: paidPrescription[0].sales_order,
          patient_name: paidPrescription[0].patient_number,
        }).then((result) => {
          frappe.show_alert(
            {
              message: \`Stocks Updated\`,
              indicator: 'green',
            },
            15,
          );
          dispensePrescription({
            prescription_names: paidPrescription.map((drug) => drug.prescription_id),
            patient_name: paidPrescription[0].patient_number,
            warehouse_name: paidPrescription[0].warehouse,
          }).then((data) => {
            frappe.show_alert(
              {
                message: \`Prescription Dispensed\`,
                indicator: 'green',
              },
              15,
            );
          });
          removeFromQueue({ queue_state_name: parent.queueState.name }).then((r) => {
            console.log('REMOVED FROM QUEUE');
          });
          prescriptionChangeComment({
            reference_doctype: 'Patient Encounter',
            reference_name: paidPrescription[0].encounter,
            content: \`Prescriptions : \${paidPrescription.map((x) => x.drug_code).toString()} Dispensed\`,
            comment_email: frappe.session.user,
            comment_by: frappe.session.user_fullname,
          }).then((result) => {});
        });
      } else {
        frappe.show_alert(
          {
            message: \`No invoiced Prescription\`,
            indicator: 'red',
          },
          5,
        );
      }
    },
    selectRow(item) {
      console.log('Start ', this.selectedPrescriptions.length);
      if (typeof item === 'object') {
        let replaced = false;
        this.selectedPrescriptions.map((pres, x) => {
          if (pres.prescription_id === item.prescription_id) {
            this.selectedPrescriptions.splice(this.selectedPrescriptions.indexOf(item), 1);
            replaced = true;
          }
        });
        if (!replaced) {
          this.selectedPrescriptions.push(item);
        }
        this.selectedTotals = Math.ceil(
          this.selectedPrescriptions.reduce((accum, item) => accum + item.rate * item.qty, 0),
        ).toFixed(2);
      } else {
        //
      }
    },
    printPrescriptionLabel(prescriptionItem) {
      // console.log(JSON.stringify(prescriptionItem))
      // https://docs.erpnext.com/docs/user/manual/en/setting-up/print/raw-printing
      var w = window.open(
        frappe.urllib.get_full_url(
          '/printview?' +
            'doctype=' +
            encodeURIComponent('Drug Prescription') +
            '&name=' +
            encodeURIComponent(prescriptionItem.prescription_id) +
            '&format=Drug Prescription Label&_lang=en&no_letterhead=1&letterhead=No Letterhead&trigger_print=1',
        ),
      );
      if (!w) {
        msgprint(__('Please enable pop-ups'));
        return;
      }
    },
    createMaterialRequest(prescriptionItem) {
      let parent = this;
      let d = new frappe.ui.Dialog({
        title: \`Material Request for \${prescriptionItem.drug_name}\`,
        fields: [
          {
            label: 'Warehouse',
            fieldname: 'warehouse',
            fieldtype: 'Select',
            options: this.warehouses,
          },
          {
            label: 'Quantity',
            fieldname: 'quantity',
            fieldtype: 'Int',
          },
        ],
        primary_action_label: 'Submit',
        primary_action(values) {
          d.hide();
          parent.$store.dispatch('prescriptionStockModule/createMaterialRequest', {
            drug: prescriptionItem.drug_name,
            quantity: values.quantity,
            warehouse: prescriptionItem.warehouse,
            from_warehouse: values.warehouse,
          });
        },
        secondary_action_label: 'Cancel',
        secondary_action() {
          d.hide();
        },
      });
      d.show();
      this.loading = false;
    },
    resetMaterialRequestModal() {
      this.prescriptionItem = null;
    },
    materialRequest(prescriptionItem) {
      this.prescriptionItem = prescriptionItem;
      getWarehouses({}).then((result) => {
        if (result && result.length) {
          this.warehouses = result.map((unit) => unit.name);
          this.createMaterialRequest(prescriptionItem);
        } else {
          frappe.show_alert(
            {
              message: \`No Warehouses Available\`,
              indicator: 'orange',
            },
            5,
          );
        }
      });
    },
    updateWarehouse() {
      if (this.prescription && this.prescription.name) {
        updatePrescriptionWarehouse({
          prescription_name: this.prescription.name,
          warehouse_name: this.warehouse,
        }).then((result) => {
          if (result) {
            frappe.show_alert(
              {
                message: \`Prescription  Moved to \${result.warehouse}.\`,
                indicator: 'green',
              },
              5,
            );
            this.prescription = result;
            this.loading = false;
          } else {
            frappe.show_alert(
              {
                message: \`Transfer Failed. Please try again\`,
                indicator: 'red',
              },
              5,
            );
          }
        });
      } else {
        frappe.show_alert(
          {
            message: \`No Prescription Selected\`,
            indicator: 'orange',
          },
          5,
        );
      }
      this.loading = false;
    },
    resetServiceUnits() {
      this.warehouse = null;
    },
    transferPrescription() {
      // frappe.set_route("prescription", this.prescription.name);
      if (this.prescription && this.prescription.name) {
        getWarehouses({}).then((result) => {
          if (result && result.length) {
            this.warehouses = result.map((unit) => unit.name);
            this.$refs.changeServiceUnitModal.show();
          } else {
            frappe.show_alert(
              {
                message: \`No Healthcare Service Units\`,
                indicator: 'orange',
              },
              5,
            );
          }
        });
      } else {
        frappe.show_alert(
          {
            message: \`No Prescription Selected\`,
            indicator: 'orange',
          },
          5,
        );
      }
    },
    fetchAlternates(prescriptionItem) {
      this.prescriptionItem = prescriptionItem;
      getDrugItemAlternates({
        drug_name: prescriptionItem.drug_code,
      }).then((result) => {
        if (result && result.length) {
          this.alternativeDrugs = result.map((drugs) => drugs.alternative_item_code);
          this.changeDrug(prescriptionItem, this.alternativeDrugs);
        } else {
          frappe.show_alert(
            {
              message: \`\${prescriptionItem.drug_code} has no alternative setup in the system\`,
              indicator: 'orange',
            },
            5,
          );
        }
      });
    },
    resetAlternateDrugModal() {
      this.alternativeDrugs = [];
      this.alternativeDrug = null;
      this.prescriptionItems = null;
    },
    changeDrug(prescriptionItem, alternativeDrugs) {
      let parent = this;
      // https://frappeframework.com/docs/user/en/guides/app-development/dialogs-types
      let d = new frappe.ui.Dialog({
        title: \`Select Alternate Drug for \${prescriptionItem.drug_name}\`,
        fields: [
          {
            label: 'Drug',
            fieldname: 'alternativeDrug',
            fieldtype: 'Select',
            options: alternativeDrugs,
          },
        ],
        primary_action_label: 'Submit',
        primary_action(values) {
          updatePrescriptionItemDrug({
            patient_name: prescriptionItem.patient_number,
            prescription_item_name: prescriptionItem.prescription_id,
            drug_name: values.alternativeDrug,
          }).then((result) => {
            parent.loading = false;
            parent.updateTableRow(result);
          });
          d.hide();
          prescriptionChangeComment({
            reference_doctype: 'Patient Encounter',
            reference_name: prescriptionItem.encounter,
            content: \`Prescription Drug Change from \${prescriptionItem.drug_code} to \${values.alternativeDrug}\`,
            comment_email: frappe.session.user,
            comment_by: frappe.session.user_fullname,
          }).then((result) => {});
        },
        secondary_action_label: 'Cancel',
        secondary_action() {
          d.hide();
          parent.resetAlternateDrugModal();
        },
      });
      d.show();
      this.loading = false;
    },
    updateTableRow(result) {
      this.prescription.map((item, x) => {
        if (item.prescription_id === result.name) {
          Vue.set(this.prescription, x, result);
        }
      });
      this.itemUnitsChanged();
      this.resetAlternateDrugModal();
    },
    numberOfUnitsChange(prescriptionItem) {
      this.loading = true;
      updatePrescriptionItem({
        name: prescriptionItem.prescription_id,
        qty: prescriptionItem.qty,
      })
        .then((result) => {
          this.loading = false;
          this.prescription.prescription_item.map((item, x) => {
            if (item.name === result.name) {
              Vue.set(this.prescription.prescription_item, x, result);
            }
          });
          frappe.show_alert(
            {
              message: \`Drug  #\${prescriptionItem.drug_code} unit changed.\`,
              indicator: 'green',
            },
            5,
          );
          this.itemUnitsChanged();
        })
        .catch((err) => {
          this.loading = false;
        });
      this.loading = false;
    },
    itemUnitsChanged(type) {
      let totalAmount = 0;
      if (this.prescription && this.prescription.length) {
        let itemList = [];
        if (type === 'Gross') {
          itemList = this.prescription;
        } else {
          itemList = this.selectedPrescriptions;
        }
        itemList.forEach((item, index) => {
          switch (item.payer) {
            case 'Patient':
              totalAmount = totalAmount + item.rate * item.qty;
              break;
            case 'Copay':
              totalAmount = totalAmount + Math.ceil(item.rate * (item.qty * item.remaining_quantity));
              break;
            case 'Insurance':
              totalAmount = totalAmount + 0;
              break;
            case 'Pre-auth Insurance':
              totalAmount = totalAmount + 0;
              break;
            case 'Pre-auth Copay':
              totalAmount = totalAmount + Math.ceil(item.rate * (item.qty * item.remaining_quantity));
              break;
          }
        });
        this.totalAmount = totalAmount;
      }

      return totalAmount;
    },
    postInvoice() {
      if (this.selectedPrescriptions && this.selectedPrescriptions.length) {
        // console.log(JSON.stringify(this.selectedPrescriptions))
        createPrescriptionSalesOrder({ prescription_docs: this.selectedPrescriptions, warehouse_name: '' }).then(
          (r) => {
            frappe.show_alert(
              {
                message: \`Prescription Sales order created\`,
                indicator: 'green',
              },
              5,
            );
            updateQueueStatus({ state_name: this.queueState.name, status: 'Invoiced' }).then((m) => {});
            this.selectedPrescriptions = [];
          },
        );
      } else {
        frappe.show_alert(
          {
            message: 'Please Select prescription',
            indicator: 'orange',
          },
          5,
        );
      }
    },
    getStagedItems(){
       getDrugsAwaitingDispense({ patient: this.patientName, status: 'Staged'})
    .then((data) => {
      this.staged = data.map((e) => ({...e, initialQuantity: e.quantity, original_qty: e.quantity}));
      console.log(data)
      this.totalUnpaid = data.reduce((a, b) => a + parseFloat(b.total_price),0)
    })
    },
    checkInvoice() {
      if (this.prescription && this.prescription.length && this.prescription[0].sales_order) {
        getPrescriptionInvoice({
          name: this.prescription[0].sales_order,
        }).then((result) => {
          this.loading = false;
          frappe.show_alert(
            {
              message: \`Prescription Invoice #\${result.name} status is \${result.status}\`,
              indicator: 'green',
            },
            5,
          );
        });
      } else {
        frappe.show_alert(
          {
            message: \`Sales Invoice not found.\`,
            indicator: 'orange',
          },
          5,
        );
      }
      this.loading = false;
    },
    setPrescriptionInvoice(invoiceName) {
      setPrescriptionInvoiceNumber({
        prescription_name: this.prescription.name,
        invoice_name: invoiceName,
      }).then((result) => {
        if (result) {
          frappe.show_alert(
            {
              message: \`Invoice #\${invoiceName} posted. Awaiting Payment\`,
              indicator: 'green',
            },
            5,
          );
          this.prescription = result;
          this.loading = false;
        } else {
          frappe.show_alert(
            {
              message: \`Invoice not Created\`,
              indicator: 'red',
            },
            5,
          );
        }
      });
      this.loading = false;
    },
    changePage(pageOfItems) {
      this.prescriptionItemsPage = pageOfItems;
    },
    stockCheck(prescription) {
      frappe.call({
        method: 'erpnext.stock.dashboard.item_dashboard.get_data',
        args: {
          item_code: prescription.drug_code,
        },
        callback: ({ message = [] }) => {
          const context = get_item_dashboard_data(message, 10, true);
          if (message.length) {
            let msgText = \`<ol>\`;
            message.forEach((msg) => {
              msgText += \`<li> \${msg.warehouse}  <b> \${msg.projected_qty}/\${msg.actual_qty}</b></li>\`;
            });
            msgText += \`</ol>\`;
            frappe.msgprint({
              title: __((prescription.drug_code || '').toUpperCase()),
              indicator: 'green',
              message: msgText,
            });
          } else {
            frappe.msgprint({
              title: __((prescription.drug_code || '').toUpperCase()),
              message: 'Stock Data Unavailable.',
              indicator: 'green',
            });
          }
          //frappe.msgprint(JSON.stringify(message))

          // frappe.msgprint({
          //     title: __((prescription.drug_code || "").toUpperCase()),
          //     indicator: message.length ? "green" : "red",
          //     message: \`\${
          //     message.length
          //         ? frappe.render_template("item_dashboard_list", context)
          //         : \`<div class='text-muted small'>  \${__(
          //             "Currently no stock available in any warehouse"
          //         )} </span>\`
          //     }\`
          // });
        },
      });
    },
    get_host: function (port = 3000) {
      var host = window.location.origin;
      if (window.dev_server || true) {
        var parts = host.split(':');
        port = frappe.boot.socketio_port || port.toString() || '3000';
        if (parts.length > 2) {
          host = parts[0] + ':' + parts[1];
        }
        host = host + ':' + port;
      }
      return host;
    },
  },
  created() {
    this.$store.registerModule('prescriptionStockModule', prescriptionStockModule);
  },
  mounted() {
    const host = this.get_host(3000);
    const socket = io.connect();
    this.socket = socket;
    let parent = this;
    socket.on('connect', () => {
      console.log('User Prescription connected');
    });
   this.getStagedItems();
   getDrugGroups().then((data) => {
       this.itemGroups = data
      })
  },
  filters: {
    // Filter definitions
    Upper(value) {
      return value.toUpperCase();
    },
    title(str) {
      return str.replace(/\\w([^-\\s]*)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    numberWithCommas(x) {
      if (x) {
        return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.patient-name {
  text-transform: capitalize;
}

.totals {
  font-size: 14px;
  font-weight: 700;
}

.total-row {
  display: flex;
  justify-content: space-between;
}

input[type='number'] {
  padding: 1px;
  border: 1;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}

.table-responsive {
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
  var __vue_component__7 = /* @__PURE__ */ __vue_normalize__7({render: __vue_render__7, staticRenderFns: __vue_staticRenderFns__7}, __vue_inject_styles__7, __vue_script__7, __vue_scope_id__7, __vue_is_functional_template__7, __vue_module_identifier__7, false, __vue_create_injector__5, void 0, void 0);
  var UserPrescription_default = __vue_component__7;

  // ../frontend/frontend/public/js/services/patient_chart/accounts.js
  var api3 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var getPatientInvoices = ({
    patient_number = "",
    appointment_number = "",
    inpatient_record = ""
  }) => api3({
    method: "clinical.api.patient_accounts.get_patient_invoice",
    args: {
      patient_number,
      appointment_number,
      inpatient_record
    }
  }).then(({message}) => message);
  var getSalesOrders = ({
    patient_number = "",
    appointment_number = "",
    inpatient_record = ""
  }) => api3({
    method: "clinical.api.patient_accounts.get_patient_sales_orders",
    args: {
      patient_number,
      appointment_number,
      inpatient_record
    }
  }).then(({message}) => message);
  var getAccountsDashboard = ({
    patient_number = ""
  }) => api3({
    method: "clinical.api.patient_accounts.customer_account_dashboard_info",
    args: {
      patient_number
    }
  }).then(({message}) => message);
  var createSalesInvoiceFromSalesOrder = ({
    sales_order_name
  }) => api3({
    method: "clinical.api.patient_accounts.create_sales_invoice_from_order",
    args: {
      sales_order_name
    }
  }).then(({message}) => message);
  var getUnbilledSalesOrderTotals = ({
    patient_number
  }) => api3({
    method: "clinical.api.patient_accounts.get_unbilled_sales_order_totals",
    args: {
      patient_number
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/pharmacy/components/core/container/SalesOrder.vue
  var __vue_script__8 = {
    name: "SalesOrder",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        salesOrderItems: void 0,
        selectedOrders: []
      };
    },
    methods: {
      changeQuantity(salesOrderItem) {
      },
      createSalesInvoice() {
        if (this.selectedOrders && this.selectedOrders.length > 0) {
          createSalesInvoiceFromSalesOrder({
            sales_order_name: this.selectedOrders.map((item) => item.parent)
          }).then((data) => {
            if (data) {
              this.fetchSalesOrders();
              this.selectedOrders = [];
              this.$emit("salesInvoiceCreated");
              frappe.show_alert({
                message: `Sales Invoice Created`,
                indicator: "green"
              }, 5);
            }
          });
        } else {
          frappe.show_alert({
            message: `No Sales Orders Selected`,
            indicator: "orange"
          }, 5);
        }
      },
      fetchSalesOrders() {
        this.selectedOrders = [];
        getSalesOrders({
          patient_number: this.patient_number
        }).then((data) => {
          this.salesOrderItems = data;
        });
        ``;
      },
      selectRow(item) {
        if (typeof item === "object") {
          this.selectedOrders.push(item);
        } else {
          let _x;
          this.selectedOrders.map((salesOrderItem, x) => {
            if (salesOrderItem.name === item)
              _x = x;
          });
          this.selectedOrders.splice(_x, 1);
        }
      }
    },
    watch: {
      patient_number() {
        this.fetchSalesOrders();
      }
    },
    created() {
      this.fetchSalesOrders();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes();
      },
      Upper(value) {
        return value.toUpperCase();
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
                attrs: {variant: "primary"},
                on: {click: _vm.fetchSalesOrders}
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
                _c("th", [_vm._v("Sales Order")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer")]),
                _vm._v(" "),
                _c("th", [_vm._v("Status")]),
                _vm._v(" "),
                _c("th", [_vm._v("Item")]),
                _vm._v(" "),
                _c("th", [_vm._v("Quantity")]),
                _vm._v(" "),
                _c("th", [_vm._v("Rate")]),
                _vm._v(" "),
                _c("th", [_vm._v("Amount")])
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
                  _c("span", [_vm._v(_vm._s(salesOrderItem.customer))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(salesOrderItem.parent_status))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(salesOrderItem.item_code))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(salesOrderItem.qty))])
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("numberWithCommas")(salesOrderItem.rate.toFixed(2))))
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
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__8 = [];
  __vue_render__8._withStripped = true;
  var __vue_inject_styles__8 = void 0;
  var __vue_scope_id__8 = void 0;
  var __vue_module_identifier__8 = void 0;
  var __vue_is_functional_template__8 = false;
  function __vue_normalize__8(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <!-- <b-button style="margin-right:2px;" variant="primary" @click="createSalesInvoice">Waive</b-button> -->
                        <b-button style="margin-right:2px;" variant="primary" @click="fetchSalesOrders">Refresh </b-button>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <table class="table table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Sales Order</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Amount</th>    
                        </tr>
                    </thead>
                    <tr v-for="salesOrderItem in salesOrderItems" :key="salesOrderItem.parent">
                        <td><span>{{ salesOrderItem.creation | dateFormat }}</span> </td>
                        <td><span>{{ salesOrderItem.parent }}</span> </td>
                        <td><span>{{ salesOrderItem.customer }}</span> </td>
                         <td><span>{{ salesOrderItem.parent_status }}</span> </td>
                        <td><span>{{ salesOrderItem.item_code }}</span> </td>
                        <td><span>{{ salesOrderItem.qty }}</span> </td>
                        <td style="text-align: right;"><span>{{ salesOrderItem.rate.toFixed(2) | numberWithCommas }}</span> </td>
                        <td style="text-align: right;"><span>{{ salesOrderItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <!-- <td>
                            <b-btn variant="primary" @click="changeQuantity(salesOrderItem)">Change Quantity</b-btn>
                        </td> -->
                    </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { getSalesOrders, createSalesInvoiceFromSalesOrder } from "../../../../services/patient_chart/accounts.js";
export default {
    name: 'SalesOrder',
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
            selectedOrders: []
        };
    },
    methods: {
        changeQuantity(salesOrderItem) {
            // console.log(JSON.stringify(salesOrderItem))
            // var d = new frappe.ui.Dialog({
            //     'fields': [
            //         { 'fieldname': 'Qunatity', 'fieldtype': 'Int' },
            //     ],
            //     primary_action: function() {
            //         d.hide();
            //         show_alert(d.get_values());
            //     }
            // });
            // d.show();
        },
        createSalesInvoice() {
            if (this.selectedOrders && this.selectedOrders.length > 0) {
                createSalesInvoiceFromSalesOrder({
                    sales_order_name: this.selectedOrders.map(item => item.parent),
                }).then((data) => {
                    if (data) {
                        this.fetchSalesOrders();
                        this.selectedOrders = [];
                        this.$emit('salesInvoiceCreated');
                        frappe.show_alert({
                            message: \`Sales Invoice Created\`,
                            indicator: 'green'
                        }, 5);
                    }
                });
            } else {
                frappe.show_alert({
                    message: \`No Sales Orders Selected\`,
                    indicator: 'orange'
                }, 5);
            }
        },
        fetchSalesOrders() {
            this.selectedOrders = [];
            getSalesOrders({
                patient_number: this.patient_number,
            }).then((data) => {
                this.salesOrderItems = data;
            });
            \`\`
        },
        selectRow(item) {
            if (typeof item === 'object') {
                this.selectedOrders.push(item);
            } else {
                let _x;
                this.selectedOrders.map((salesOrderItem, x) => {
                    if (salesOrderItem.name === item) _x = x;
                });

                this.selectedOrders.splice(_x, 1);
            }
            //console.log(JSON.stringify(this.selectedOrders.map(item=>item.parent)));
        },
    },
    watch: {
        patient_number() {
            this.fetchSalesOrders();
        }
    },
    created() {
        this.fetchSalesOrders();
    },
    filters: {
        // Filter definitions
        dateFormat(date) {
            let current_datetime = new Date(date);
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " +
                current_datetime.getHours() + ":" + current_datetime.getMinutes() //+ ":" + current_datetime.getSeconds()
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
</script>`;
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
  var __vue_component__8 = /* @__PURE__ */ __vue_normalize__8({render: __vue_render__8, staticRenderFns: __vue_staticRenderFns__8}, __vue_inject_styles__8, __vue_script__8, __vue_scope_id__8, __vue_is_functional_template__8, __vue_module_identifier__8, false, void 0, void 0, void 0);
  var SalesOrder_default = __vue_component__8;

  // ../frontend/frontend/public/js/pharmacy/components/core/container/Invoice.vue
  var __vue_script__9 = {
    name: "Invoices",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      },
      appointment_number: {
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
    methods: {
      finalizeInvoices() {
        if (this.invoices.length) {
          let salesInvoice = {
            name: this.invoices[0].parent
          };
          finalizeInvoice(salesInvoice).then((data) => {
            frappe.show_alert({
              message: `Invoice finalized`,
              indicator: "green"
            }, 5);
            this.fetchInvoices();
          });
        } else {
          frappe.show_alert({
            message: `No invoice(s) to finalize`,
            indicator: "orange"
          }, 5);
        }
      },
      fetchInvoices() {
        getPatientInvoices({patient_number: this.patient_number}).then((data) => {
          this.invoices = data;
        });
      }
    },
    watch: {
      patient_number() {
        this.fetchInvoices();
      }
    },
    created() {
      this.fetchInvoices();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value) {
        return value.toUpperCase();
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
          _c("div", {
            staticStyle: {display: "flex", "justify-content": "flex-end"}
          }, [
            _c("b-button-group", {
              staticStyle: {"margin-right": "16px", "margin-top": "4px"}
            }, [
              _c("b-button", {
                staticStyle: {"margin-right": "2px"},
                attrs: {variant: "primary"},
                on: {click: _vm.fetchInvoices}
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
                _c("th", [_vm._v("Item")]),
                _vm._v(" "),
                _c("th", [_vm._v("Invoice")]),
                _vm._v(" "),
                _c("th", [_vm._v("Customer")]),
                _vm._v(" "),
                _c("th", [_vm._v("Status")]),
                _vm._v(" "),
                _c("th", [_vm._v("Date")]),
                _vm._v(" "),
                _c("th", [_vm._v("Quantity")]),
                _vm._v(" "),
                _c("th", [_vm._v("Rate")]),
                _vm._v(" "),
                _c("th", [_vm._v("Amount")]),
                _vm._v(" "),
                _c("th", [_vm._v("Sales Order")])
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.invoices, function(invoiceItem) {
              return _c("tr", {key: invoiceItem.name}, [
                _c("td", [_vm._v(_vm._s(invoiceItem.item_code))]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(invoiceItem.parent))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(invoiceItem.customer))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("span", [_vm._v(_vm._s(invoiceItem.parent_status))])
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
                  _c("span", [_vm._v(_vm._s(invoiceItem.sales_order))])
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
        <!-- {{ invoices }} -->
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <!-- <b-button style="margin-right:2px;" variant="primary" @click="finalizeInvoices">Finalize Invoices</b-button> -->
                        <b-button style="margin-right:2px;" variant="primary" @click="fetchInvoices">Refresh </b-button>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Invoice</th>
                            <th>Customer</th>
                             <th>Status</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Amount</th>
                            <th>Sales Order</th>
                            <!-- <th>Account</th> -->
                            <!-- <th>Action</th> -->
                        </tr>
                    </thead>
                    <tr v-for="invoiceItem in invoices" :key="invoiceItem.name">
                        <td>{{ invoiceItem.item_code }}</td>
                        <td><span>{{ invoiceItem.parent }}</span> </td>
                        <td><span>{{ invoiceItem.customer }}</span> </td>
                        <td><span>{{ invoiceItem.parent_status }}</span> </td>
                        <td><span>{{ invoiceItem.creation | dateFormat}}</span> </td>
                        <td>{{ invoiceItem.qty || 1 | numberWithCommas }}</td>
                        <td>{{ invoiceItem.rate.toFixed(2) | numberWithCommas }}</td>
                        <td style="text-align: right;"><span>{{ invoiceItem.amount.toFixed(2) | numberWithCommas }}</span> </td>
                        <td><span>{{ invoiceItem.sales_order}}</span> </td>
                    </tr>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
// import { getPatientInvoices,finalizeInvoice } from "../../../../../services/patient_chart/accounts.js";
import { getPatientInvoices } from "../../../../services/patient_chart/accounts.js";

export default {
    name: 'Invoices',
    props: {
        patient_number: {
            type: String,
            default: " ",
            required: true,
        },
        appointment_number: {
            type: String,
            default: " ",
            required: true,
        },
    },
    data() {
        return {
            invoices: [],
        };
    },
    methods: {
        finalizeInvoices() {
            if (this.invoices.length) {
                let salesInvoice = {
                    name: this.invoices[0].parent
                };
                finalizeInvoice(salesInvoice).then((data) => {
                    frappe.show_alert({
                        message: \`Invoice finalized\`,
                        indicator: 'green'
                    }, 5);
                    this.fetchInvoices();
                });
            } else {
                frappe.show_alert({
                    message: \`No invoice(s) to finalize\`,
                    indicator: 'orange'
                }, 5);
            }
        },
        fetchInvoices() {
            // ,appointment_number:this.appointment_number
            getPatientInvoices({ patient_number: this.patient_number })
                .then((data) => {
                    //    console.log(JSON.stringify(data));
                    this.invoices = data;
                });
        }
    },
    watch: {
        patient_number() {
            this.fetchInvoices();
        }
    },
    created() {
        this.fetchInvoices();
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
  var Invoice_default = __vue_component__9;

  // ../frontend/frontend/public/js/pharmacy/components/core/container/Refills.vue
  var __vue_script__10 = {
    name: "Refills",
    props: {
      patient_number: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        refills: []
      };
    },
    methods: {
      dispense(refillrefills) {
        dispensePrescriptionRefill({refill_name: refillrefills.name}).then((r) => {
          frappe.show_alert({
            message: `Refill Dispensed`,
            indicator: "green"
          }, 5);
          this.getRefills();
        });
      },
      numberOfUnitsChange(refillrefills) {
        updatePrescriptionRefillQuantity({
          refill_name: refillrefills.name,
          qty: refillrefills.dispensed_quantity
        }).then((result) => {
          this.loading = false;
          this.refills.map((item, x) => {
            if (item.name === result.name) {
              Vue.set(this.refills, x, result);
            }
          });
          frappe.show_alert({
            message: `Drug  #${refillrefills.drug_code} unit changed.`,
            indicator: "green"
          }, 5);
        });
      },
      createSalesOrder(refillrefills) {
        createRefillSalesOrder({refill_doc_name: refillrefills.name}).then((r) => {
          frappe.show_alert({
            message: `Sales Order created`,
            indicator: "green"
          }, 5);
          this.getRefills();
        });
      },
      updateRefillQty(refillItem, qty) {
        updatePrescriptionRefillQuantity({
          refill_name: refillItem.name,
          qty
        }).then((r) => {
          frappe.show_alert({
            message: `Quantity for ${r.name} updated`,
            indicator: "green"
          }, 5);
          this.getRefills();
        });
      },
      refreshRefillRate(refillrefills) {
        updatePrescriptionRefillRate({refill_name: refillrefills.name}).then((response) => {
          frappe.show_alert({
            message: `Price rate for ${response.name} updated`,
            indicator: "green"
          }, 5);
          this.getRefills();
        });
      },
      getRefills() {
        getPrescriptionRefills({patient_name: this.patient_number}).then((data) => {
          this.refills = data;
        });
      }
    },
    watch: {
      patient_number() {
        this.getRefills();
      }
    },
    created() {
      this.getRefills();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value) {
        return value.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__10 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-row", [
        _c("b-col", [
          _c("b-alert", {attrs: {variant: "primary", show: ""}}, [
            _vm._v("Rates may be different due to new stock, click refresh rate in actions to update")
          ])
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-row", [
        _c("b-col", [
          _c("table", {staticClass: "table table-striped table-bordered"}, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Date")]),
                _vm._v(" "),
                _c("th", [_vm._v("Drug")]),
                _vm._v(" "),
                _c("th", [_vm._v("Refill Qty")]),
                _vm._v(" "),
                _c("th", [_vm._v("Quantity")]),
                _vm._v(" "),
                _c("th", [_vm._v("Sales Order")]),
                _vm._v(" "),
                _c("th", [_vm._v("Rate")]),
                _vm._v(" "),
                _c("th", [_vm._v("Amount")]),
                _vm._v(" "),
                _c("th", [_vm._v("Action")])
              ])
            ]),
            _vm._v(" "),
            _vm._l(_vm.refills, function(refillrefills) {
              return _c("tr", {key: refillrefills.name}, [
                _c("td", [
                  _c("span", [
                    _vm._v(_vm._s(_vm._f("dateFormat")(refillrefills.creation)))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(refillrefills.drug_code))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("numberWithCommas")(refillrefills.refill_quantity)))
                ]),
                _vm._v(" "),
                _c("td", [
                  !refillrefills.sales_order ? _c("span", {staticStyle: {"max-width": "70px"}}, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: refillrefills.dispensed_quantity,
                          expression: "refillrefills.dispensed_quantity",
                          modifiers: {trim: true}
                        }
                      ],
                      ref: refillrefills.drug_prescription,
                      refInFor: true,
                      staticStyle: {width: "60px"},
                      attrs: {
                        type: "number",
                        min: "1",
                        id: "numberOfUnits"
                      },
                      domProps: {
                        value: refillrefills.dispensed_quantity
                      },
                      on: {
                        change: function($event) {
                          return _vm.numberOfUnitsChange(refillrefills);
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return;
                          }
                          _vm.$set(refillrefills, "dispensed_quantity", $event.target.value.trim());
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate();
                        }
                      }
                    })
                  ]) : _c("span", {staticClass: "form-group"}, [
                    _vm._v("\n                                    " + _vm._s(refillrefills.dispensed_quantity) + "\n                                ")
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(refillrefills.sales_order || "Not Invoiced"))
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(_vm._f("numberWithCommas")(refillrefills.rate.toFixed(2))))
                ]),
                _vm._v(" "),
                _c("td", {staticStyle: {"text-align": "right"}}, [
                  _c("span", [
                    _vm._v("\n                            " + _vm._s(_vm._f("numberWithCommas")(Math.ceil(refillrefills.rate * refillrefills.dispensed_quantity).toFixed(2) || 1)) + "\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("b-dropdown", {
                    staticClass: "m-md-2",
                    attrs: {
                      id: "dropdown-1",
                      variant: "outline-primary",
                      text: "Actions"
                    }
                  }, [
                    refillrefills.sales_order ? _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.dispense(refillrefills);
                        }
                      }
                    }, [_vm._v("Dispense")]) : _vm._e(),
                    _vm._v(" "),
                    !refillrefills.sales_order ? _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.createSalesOrder(refillrefills);
                        }
                      }
                    }, [_vm._v("Sales Order")]) : _vm._e(),
                    _vm._v(" "),
                    !refillrefills.sales_order ? _c("b-dropdown-item", {
                      attrs: {variant: "primary"},
                      on: {
                        click: function($event) {
                          return _vm.refreshRefillRate(refillrefills);
                        }
                      }
                    }, [_vm._v("Refresh Rates")]) : _vm._e()
                  ], 1)
                ], 1)
              ]);
            })
          ], 2)
        ])
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__10 = [];
  __vue_render__10._withStripped = true;
  var __vue_inject_styles__10 = void 0;
  var __vue_scope_id__10 = void 0;
  var __vue_module_identifier__10 = void 0;
  var __vue_is_functional_template__10 = false;
  function __vue_normalize__10(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <!-- {{ refills }} -->
        <b-row>
            <b-col>
                <b-alert variant="primary" show>Rates may be different due to new stock, click refresh rate in actions to update</b-alert>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <!-- <th>Name</th> -->
                            <th>Date</th>
                            <th>Drug</th>
                            <th>Refill Qty</th>
                            <th>Quantity</th>
                            <th>Sales Order</th>
    
                            <th>Rate</th>
                            <th>Amount</th>
                            <!-- <th>Account</th> -->
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tr v-for="refillrefills in refills" :key="refillrefills.name">
                        <!-- <td>{{ refillrefills.name }}</td> -->
                        <td><span>{{ refillrefills.creation | dateFormat}}</span> </td>
                        <td>{{ refillrefills.drug_code }}</td>
                        <td>{{ refillrefills.refill_quantity | numberWithCommas }}</td>
                        <!-- <td><span>{{ refillrefills.dispensed_quantity | numberWithCommas }}</span> </td>
                                            @change="itemUnitsChanged"
                                            @input="itemUnitsChanged"
                            
                             -->
                        <td>
                            <span v-if="!refillrefills.sales_order" style="max-width: 70px;">
                                        <input
                                            :ref="refillrefills.drug_prescription"
                                            type="number"
                                            min="1"
                                            style="width: 60px;"
                                            id="numberOfUnits"
                                            v-model.trim="refillrefills.dispensed_quantity"
                                            v-on:change="numberOfUnitsChange(refillrefills)"
                                        />
                                        </span>
                            <span v-else class="form-group">
                                        {{ refillrefills.dispensed_quantity }}
                                    </span>
                        </td>
                        <td>{{ refillrefills.sales_order || 'Not Invoiced' }}</td>
                        <td>{{ refillrefills.rate.toFixed(2) | numberWithCommas }}</td>
                        <td style="text-align: right;"><span>
                                {{
                                Math.ceil(refillrefills.rate * refillrefills.dispensed_quantity).toFixed(2) ||
                                1 | numberWithCommas
                                }}
                            </span> </td>
                        <td>
                            <b-dropdown id="dropdown-1" variant="outline-primary" text="Actions" class="m-md-2">
                                <b-dropdown-item v-if="refillrefills.sales_order" variant="primary" @click="dispense(refillrefills)">Dispense</b-dropdown-item>
                                <b-dropdown-item v-if="!refillrefills.sales_order" variant="primary" @click="createSalesOrder(refillrefills)">Sales Order</b-dropdown-item>
                                <b-dropdown-item v-if="!refillrefills.sales_order" variant="primary" @click="refreshRefillRate(refillrefills)">Refresh Rates</b-dropdown-item>
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
    getPrescriptionRefills,
    updatePrescriptionRefillRate,
    updatePrescriptionRefillQuantity,
    createRefillSalesOrder,
    dispensePrescriptionRefill
} from '../../../../services/pharmacy/prescriptions.js'
export default {
    name: 'Refills',
    props: {
        patient_number: {
            type: String,
            default: " ",
            required: true,
        }
    },
    data() {
        return {
            refills: [],
        };
    },
    methods: {
        dispense(refillrefills) {
            dispensePrescriptionRefill({ refill_name: refillrefills.name }).then(r => {
                frappe.show_alert({
                    message: \`Refill Dispensed\`,
                    indicator: 'green'
                }, 5);
                this.getRefills();
            })
        },
        numberOfUnitsChange(refillrefills) {
            updatePrescriptionRefillQuantity({
                refill_name: refillrefills.name,
                qty: refillrefills.dispensed_quantity,
            }).then(result => {
                this.loading = false;
                this.refills.map((item, x) => {
                    if (item.name === result.name) {
                        Vue.set(this.refills, x, result);
                    }
                });
                frappe.show_alert({
                    message: \`Drug  #\${refillrefills.drug_code} unit changed.\`,
                    indicator: 'green'
                }, 5);
                // this.itemUnitsChanged();
            })
        },
        createSalesOrder(refillrefills) {
            createRefillSalesOrder({ refill_doc_name: refillrefills.name }).then(r => {
                frappe.show_alert({
                    message: \`Sales Order created\`,
                    indicator: 'green'
                }, 5);
                this.getRefills();
            })
        },
        updateRefillQty(refillItem, qty) {
            updatePrescriptionRefillQuantity({
                refill_name: refillItem.name,
                qty
            }).then(r => {
                frappe.show_alert({
                    message: \`Quantity for \${r.name} updated\`,
                    indicator: 'green'
                }, 5);
                this.getRefills();
            })
        },
        refreshRefillRate(refillrefills) {
            // refill_name
            updatePrescriptionRefillRate({ refill_name: refillrefills.name }).then(response => {
                frappe.show_alert({
                    message: \`Price rate for \${response.name} updated\`,
                    indicator: 'green'
                }, 5);
                this.getRefills();
            })
        },
        getRefills() {
            getPrescriptionRefills({ patient_name: this.patient_number })
                .then((data) => {
                    //    console.log(JSON.stringify(data));
                    this.refills = data;
                });
        }
    },
    watch: {
        patient_number() {
            this.getRefills();
        }
    },
    created() {
        this.getRefills();
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
</script>`;
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
  var __vue_component__10 = /* @__PURE__ */ __vue_normalize__10({render: __vue_render__10, staticRenderFns: __vue_staticRenderFns__10}, __vue_inject_styles__10, __vue_script__10, __vue_scope_id__10, __vue_is_functional_template__10, __vue_module_identifier__10, false, void 0, void 0, void 0);
  var Refills_default = __vue_component__10;

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
  var createPrescription = (order, order_list, type) => api4({
    method: "clinical.api.orders.prescriptions.create_prescription",
    args: {
      order,
      order_list,
      type
    }
  });
  var createPatientEncounter = (patient, is_walk_in) => api4({
    method: "clinical.api.patient_encounter.patient_encounter.create_patient_encounter",
    args: {
      patient,
      is_walk_in
    }
  });
  var checkOpenAppointment = (patient) => api4({
    method: "clinical.api.patient_encounter.patient_encounter.check_open_appointment",
    args: {
      patient
    }
  });
  var transferPatient = (args) => api4({
    method: "clinical.api.patients.transfer_inpatient",
    args
  });

  // ../frontend/frontend/public/js/pharmacy/components/core/container/AddPrescription.vue
  var __vue_script__11 = {
    name: "AddPrescription",
    data() {
      return {
        medicationItemGroups: []
      };
    },
    methods: {
      fetchItemGroups() {
        api4({
          method: "clinical.api.prescription.prescription.get_is_prescription_item",
          args: {}
        }).then((res) => {
          this.medicationItemGroups = res;
          this.addPrescription();
        });
      },
      addPrescription() {
        let parent2 = this;
        const fields = [
          {
            label: "Start Date",
            fieldname: "start_date",
            fieldtype: "Date",
            reqd: true,
            default: frappe.datetime.now_datetime(),
            in_list_view: 1,
            columns: 1
          },
          {
            label: "Drug",
            fieldname: "drug_code",
            fieldtype: "Link",
            options: "Item",
            reqd: true,
            in_list_view: 1,
            filters: {is_stock_item: 1, disabled: 0, has_variants: "No", item_group: ["IN", parent2.medicationItemGroups]},
            columns: 2
          },
          {
            label: "Dosage",
            fieldname: "dosage",
            fieldtype: "Link",
            options: "Prescription Dosage",
            reqd: true,
            in_list_view: 1,
            columns: 1
          },
          {
            label: "Period",
            fieldname: "period",
            fieldtype: "Link",
            options: "Prescription Duration",
            reqd: true,
            in_list_view: 1,
            columns: 1
          },
          {
            label: "Dosage Form",
            fieldname: "dosage_form",
            fieldtype: "Link",
            options: "Dosage Form",
            reqd: true,
            in_list_view: 1,
            columns: 1
          },
          {
            label: "Comments/Instructions",
            fieldname: "comment",
            fieldtype: "Small Text",
            in_list_view: 1,
            columns: 2
          }
        ];
        const me = this;
        const dialog = new frappe.ui.Dialog({
          title: "Add a Prescription",
          fields: [
            {
              label: "Patient",
              fieldname: "patient",
              fieldtype: "Link",
              options: "Patient",
              reqd: true,
              in_list_view: 1
            },
            {
              fieldname: "drug_list",
              fieldtype: "Table",
              label: "Drugs",
              cannot_add_rows: false,
              in_place_edit: true,
              reqd: 1,
              data: [],
              fields
            }
          ],
          primary_action_label: "Submit",
          primary_action: (values) => {
            me.loading = true;
            checkOpenAppointment(values.patient).then((res) => {
              if (res === true) {
                createPatientEncounter(values.patient, this.walkin).then((val) => {
                  const current = me;
                  createPrescription({...values, patient_name: values.patient, encounter: val.name}, values.drug_list, "Multiple").then((encounter) => {
                    dialog.hide();
                    frappe.show_alert({
                      message: `Prescription Saved`,
                      indicator: "green"
                    }, 5);
                  });
                });
              } else {
                frappe.show_alert({
                  message: `Ensure the patient has an open appointment`,
                  indicator: "red"
                }, 5);
              }
            });
          }
        });
        dialog.show();
        dialog.$wrapper.find(".modal-content").css("width", "1000px");
        dialog.$wrapper.find(".modal-content").css("margin-left", "-200px");
      }
    },
    watch: {},
    created() {
    },
    computed: {},
    components: {}
  };
  var __vue_render__11 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("b-button", {
        staticStyle: {"margin-right": "2px"},
        attrs: {variant: "primary"},
        on: {click: _vm.fetchItemGroups}
      }, [_vm._v("Add Prescription")])
    ], 1);
  };
  var __vue_staticRenderFns__11 = [];
  __vue_render__11._withStripped = true;
  var __vue_inject_styles__11 = function(inject) {
    if (!inject)
      return;
    inject("data-v-767b329c_0", {source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version": 3, "sources": [], "names": [], "mappings": "", "file": "AddPrescription.vue"}, media: void 0});
  };
  var __vue_scope_id__11 = void 0;
  var __vue_module_identifier__11 = void 0;
  var __vue_is_functional_template__11 = false;
  function __vue_normalize__11(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <b-button style="margin-right:2px;" variant="primary" @click="fetchItemGroups">Add Prescription</b-button>
    </div>
</template>

<script>
import { createPrescription, getPrescriptions, createPatientEncounter, checkOpenAppointment, removePrescription, api } from "../../../../services/patient_chart/api"

export default {
    name: "AddPrescription",
    data () {
        return {
            medicationItemGroups: [],

        };
    },

    methods: {
         fetchItemGroups() {
            api({
                method:'clinical.api.prescription.prescription.get_is_prescription_item',
                args: {
                    
                },

            }).then(res => {
                this.medicationItemGroups = res; 
                this.addPrescription();
            })
        },
        addPrescription() {
            let parent = this;
            const fields = [{
                    label: 'Start Date',
                    fieldname: 'start_date',
                    fieldtype: 'Date',
                    reqd: true,
                    default: frappe.datetime.now_datetime(),
                    in_list_view: 1,
                    columns: 1
                },
                {
                    label: 'Drug',
                    fieldname: 'drug_code',
                    fieldtype: 'Link',
                    options: 'Item',
                    reqd: true,
                    in_list_view: 1,
                    // filters: { is_stock_item: 1, disabled: 0, has_variants: 'No' },
                    filters: { is_stock_item: 1, disabled: 0, has_variants: 'No', item_group: ['IN', parent.medicationItemGroups] },
                    columns: 2
                },
                {
                    label: 'Dosage',
                    fieldname: 'dosage',
                    fieldtype: 'Link',
                    options: 'Prescription Dosage',
                    reqd: true,
                    in_list_view: 1,
                    columns: 1
                },
                {
                    label: 'Period',
                    fieldname: 'period',
                    fieldtype: 'Link',
                    options: 'Prescription Duration',
                    reqd: true,
                    in_list_view: 1,
                    columns: 1
                },
                {
                    label: 'Dosage Form',
                    fieldname: 'dosage_form',
                    fieldtype: 'Link',
                    options: 'Dosage Form',
                    reqd: true,
                    in_list_view: 1,
                    columns: 1
                },
                {
                    label: 'Comments/Instructions',
                    fieldname: 'comment',
                    fieldtype: 'Small Text',
                    in_list_view: 1,
                    columns: 2
                },
            ];

            const me = this;
            const dialog = new frappe.ui.Dialog({
                title: 'Add a Prescription',
                fields: [{
                        label: 'Patient',
                        fieldname: 'patient',
                        fieldtype: 'Link',
                        options: 'Patient',
                        reqd: true,
                        in_list_view: 1,
                    },
                    {
                        fieldname: "drug_list",
                        fieldtype: "Table",
                        label: "Drugs",
                        cannot_add_rows: false,
                        in_place_edit: true,
                        reqd: 1,
                        data: [],
                        fields
                    }
                ],
                primary_action_label: 'Submit',
                primary_action: (values) => {
                    me.loading = true;
                    //dialog.get_primary_btn().attr("disabled", true);
                    checkOpenAppointment(values.patient).then(
                        res => {
                            if (res === true) {
                                createPatientEncounter(values.patient, this.walkin).then((val) => {
                                    const current = me

                                    createPrescription({ ...values, patient_name: values.patient, encounter: val.name }, values.drug_list, "Multiple").then((encounter) => {
                                        // current.updateEncounter(encounter)
                                        dialog.hide();

                                        frappe.show_alert({
                                            message: \`Prescription Saved\`,
                                            indicator: 'green'
                                        }, 5);
                                    });
                                });
                            } else {
                                frappe.show_alert({
                                    message: \`Ensure the patient has an open appointment\`,
                                    indicator: 'red'
                                }, 5);
                            }

                        }
                    );


                },
            });

            dialog.show();
            dialog.$wrapper.find('.modal-content').css("width", "1000px");
            dialog.$wrapper.find('.modal-content').css("margin-left", "-200px");


        },
    },

    watch: {

    },
    created() {

    },
    computed: {},
    components: {

    },
};
</script>

<style>`;
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
  var __vue_component__11 = /* @__PURE__ */ __vue_normalize__11({render: __vue_render__11, staticRenderFns: __vue_staticRenderFns__11}, __vue_inject_styles__11, __vue_script__11, __vue_scope_id__11, __vue_is_functional_template__11, __vue_module_identifier__11, false, __vue_create_injector__6, void 0, void 0);
  var AddPrescription_default = __vue_component__11;

  // ../frontend/frontend/public/js/pharmacy/components/core/container/AwaitingDispense.vue
  var __vue_script__12 = {
    name: "AwaitingDispense",
    props: {
      selectedPharmacy: {
        type: String,
        default: "",
        required: true
      },
      patientNumber: {
        type: String,
        default: "",
        required: true
      },
      queueState: {
        type: Object,
        default: {},
        required: true
      }
    },
    data() {
      return {
        unpaidFields: [
          "drug_name",
          "item_name",
          {key: "creation", label: "Creation", formatter: (value, key, item) => moment(item.creation).fromNow()},
          "sales_order",
          {key: "to_dispense", label: "Quantity"},
          {
            key: "total_amount",
            label: "Total Amount",
            formatter: (value, key, item) => Number(value).toLocaleString()
          },
          "payment_status",
          {key: "actions", label: " "}
        ],
        unpaidItems: [],
        fields: [
          "drug_name",
          "item_name",
          {key: "creation", label: "Creation", formatter: (value, key, item) => moment(item.creation).fromNow()},
          "payment_status",
          {key: "to_dispense", label: "Quantity"},
          "dosage",
          "dosage_form",
          "instructions",
          {key: "actions", label: ""}
        ],
        totalUnpaid: 0,
        drugs: [],
        dispensed: [],
        dispensedFields: [
          "drug_name",
          "item_name",
          {key: "to_dispense", label: "Quantity"},
          "dosage_form",
          "instructions"
        ]
      };
    },
    mounted() {
      this.mountMethod();
    },
    methods: {
      onDispense(item) {
        console.log(item);
        dispenseStockEntry({
          warehouse: item.item.warehouse,
          patient_name: this.patientNumber,
          prescription_item: item.item.name,
          sales_order: item.item.sales_order,
          doctors_prescription: item.item.prescription_name
        }).then(() => {
          frappe.show_alert({
            message: `Stocks Updated`,
            indicator: "green"
          }, 15);
          this.mountMethod();
          removeFromQueue({queue_state_name: parent.queueState.name}).then((r) => {
            console.log("REMOVED FROM QUEUE");
          });
        });
      },
      cancelToDispense(item) {
        frappe.confirm("Are you sure you want to cancel this order?", () => {
          cancelOrderReadyForDispense(item).then(() => {
            this.mountMethod();
          });
        }, () => {
        });
      },
      onCancel(item) {
        cancelOrderedPrescription(item).then(() => {
          this.mountMethod();
        });
      },
      mountMethod() {
        getDrugsAwaitingDispense({patient: this.patientNumber}).then((drugs) => {
          this.drugs = drugs.filter((e) => e.payment_status === "Completed" || e.payment_status === "Pending Supplies Approval");
          this.unpaidItems = drugs.filter((e) => e.payment_status !== "Completed" && e.payment_status !== "Pending Supplies Approval");
          this.totalUnpaid = Math.ceil(this.unpaidItems.reduce((a, b2) => a + parseFloat(b2.total_amount), 0));
        });
        getDrugsAwaitingDispense({
          patient: this.patientNumber,
          status: "Dispensed"
        }).then((drugs) => {
          this.dispensed = drugs;
        });
      }
    },
    watch: {
      patientNumber() {
        this.mountMethod();
      }
    }
  };
  var __vue_render__12 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _vm.unpaidItems.length ? _c("h4", [_vm._v("Unpaid for Prescriptions")]) : _vm._e(),
      _vm._v(" "),
      _vm.unpaidItems.length ? _c("b-table", {
        attrs: {fields: _vm.unpaidFields, items: _vm.unpaidItems},
        scopedSlots: _vm._u([
          {
            key: "cell(actions)",
            fn: function(row) {
              return [
                _c("b-button", {
                  attrs: {variant: "danger"},
                  on: {
                    click: function($event) {
                      return _vm.onCancel(row.item);
                    }
                  }
                }, [_vm._v("Cancel")])
              ];
            }
          }
        ], null, false, 1303916300)
      }) : _vm._e(),
      _vm._v(" "),
      _c("div", {
        staticStyle: {
          display: "flex",
          "justify-content": "space-between",
          padding: "16px",
          background: "lightgray",
          "align-items": "center"
        }
      }, [
        _c("h4", [_vm._v("Total Unpaid Amount")]),
        _vm._v(" "),
        _c("strong", [_c("h4", [_vm._v("KES " + _vm._s(_vm.totalUnpaid))])])
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("Awaiting Dispense")]),
      _vm._v(" "),
      _c("b-table", {
        attrs: {fields: _vm.fields, items: _vm.drugs},
        scopedSlots: _vm._u([
          {
            key: "cell(actions)",
            fn: function(row) {
              return [
                _c("b-button", {
                  attrs: {variant: "primary"},
                  on: {
                    click: function($event) {
                      return _vm.onDispense(row);
                    }
                  }
                }, [_vm._v("Dispense")]),
                _vm._v(" "),
                _c("b-button", {
                  staticStyle: {"margin-left": "8px"},
                  attrs: {variant: "danger"},
                  on: {
                    click: function($event) {
                      return _vm.cancelToDispense(row.item);
                    }
                  }
                }, [_vm._v("Cancel")])
              ];
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("h4", [_vm._v("Dispensed")]),
      _vm._v(" "),
      _c("b-table", {
        attrs: {fields: _vm.dispensedFields, items: _vm.dispensed}
      })
    ], 1);
  };
  var __vue_staticRenderFns__12 = [];
  __vue_render__12._withStripped = true;
  var __vue_inject_styles__12 = void 0;
  var __vue_scope_id__12 = void 0;
  var __vue_module_identifier__12 = void 0;
  var __vue_is_functional_template__12 = false;
  function __vue_normalize__12(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div>
    <h4 v-if="unpaidItems.length">Unpaid for Prescriptions</h4>
    <b-table
      v-if="unpaidItems.length"
      :fields="unpaidFields"
      :items="unpaidItems"
    >
      <template #cell(actions)="row">
        <b-button @click="onCancel(row.item)" variant="danger">Cancel</b-button>
      </template>
    </b-table>
    <div
      style="
        display: flex;
        justify-content: space-between;
        padding: 16px;
        background: lightgray;
        align-items: center;
      "
    >
      <h4>Total Unpaid Amount</h4>
      <strong>
        <h4>KES {{ totalUnpaid }}</h4>
      </strong>
    </div>
    <h4>Awaiting Dispense</h4>
    <b-table :fields="fields" :items="drugs">
      <template #cell(actions)="row">
        <b-button @click="onDispense(row)" variant="primary">Dispense</b-button>
        <b-button
          style="margin-left: 8px"
          @click="cancelToDispense(row.item)"
          variant="danger"
          >Cancel</b-button
        >
      </template>
    </b-table>
    <h4>Dispensed</h4>
    <b-table :fields="dispensedFields" :items="dispensed"> </b-table>
  </div>
</template>
<script>
import {
  getDrugsAwaitingDispense,
  dispenseStockEntry,
  cancelOrderedPrescription,
  cancelOrderReadyForDispense
} from "../../../../services/pharmacy/prescriptions.js";
export default {
  name: "AwaitingDispense",
  props: {
      selectedPharmacy: {
      type: String,
      default: "",
      required: true,
    },
    patientNumber: {
      type: String,
      default: "",
      required: true,
    },
    queueState: {
      type: Object,
      default: {},
      required: true,
    },
  },

  data() {
    return {
      unpaidFields: [
        "drug_name",
        "item_name",
        {key: 'creation', label: 'Creation', formatter: (value, key, item) => moment(item.creation).fromNow()},
        "sales_order",
        { key: "to_dispense", label: "Quantity" },
        {
          key: "total_amount",
          label: "Total Amount",
          formatter: (value, key, item) => Number(value).toLocaleString(),
        },
        "payment_status",
        { key: "actions", label: " " },
      ],
      unpaidItems: [],
      fields: [
        "drug_name",
        "item_name",
        {key: 'creation', label: 'Creation', formatter: (value, key, item) => moment(item.creation).fromNow()},
        "payment_status",
        { key: "to_dispense", label: "Quantity" },
        "dosage",
        "dosage_form",
        "instructions",
        { key: "actions", label: "" },
      ],
      totalUnpaid: 0,
      drugs: [],
      dispensed: [],
      dispensedFields: [
        "drug_name",
        "item_name",
        { key: "to_dispense", label: "Quantity" },
        "dosage_form",
        "instructions",
      ],
    };
  },
  mounted() {
    this.mountMethod();
  },
  methods: {
    onDispense(item) {
      console.log(item);
      dispenseStockEntry({
        warehouse: item.item.warehouse,
        patient_name: this.patientNumber,
        prescription_item: item.item.name,
        sales_order: item.item.sales_order,
        doctors_prescription: item.item.prescription_name,
      }).then(() => {
        frappe.show_alert(
          {
            message: \`Stocks Updated\`,
            indicator: "green",
          },
          15
        );
        this.mountMethod();
        removeFromQueue({ queue_state_name: parent.queueState.name }).then(
          (r) => {
            console.log("REMOVED FROM QUEUE");
          }
        );
      });
    },
    cancelToDispense(item) {
      frappe.confirm(
        "Are you sure you want to cancel this order?",
        () => {
         cancelOrderReadyForDispense(item).then(() => {
        this.mountMethod();
      })
        },
        () => {
          // action to perform if No is selected
        }
      );
    },
    onCancel(item) {
      cancelOrderedPrescription(item).then(() => {
        this.mountMethod();
      });
    },
    mountMethod() {
      getDrugsAwaitingDispense({ patient: this.patientNumber }).then(
        (drugs) => {
          this.drugs = drugs.filter((e) => e.payment_status === "Completed" || e.payment_status === "Pending Supplies Approval");
          this.unpaidItems = drugs.filter(
            (e) => e.payment_status !== "Completed" && e.payment_status !== "Pending Supplies Approval"
          );
          this.totalUnpaid = Math.ceil(
            this.unpaidItems.reduce((a, b) => a + parseFloat(b.total_amount), 0)
          );
        }
      );
      getDrugsAwaitingDispense({
        patient: this.patientNumber,
        status: "Dispensed",
      }).then((drugs) => {
        this.dispensed = drugs;
      });
    },
  },
  watch: {
    patientNumber() {
      this.mountMethod();
    },
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
  var __vue_component__12 = /* @__PURE__ */ __vue_normalize__12({render: __vue_render__12, staticRenderFns: __vue_staticRenderFns__12}, __vue_inject_styles__12, __vue_script__12, __vue_scope_id__12, __vue_is_functional_template__12, __vue_module_identifier__12, false, void 0, void 0, void 0);
  var AwaitingDispense_default = __vue_component__12;

  // ../frontend/frontend/public/js/state/pharmacy-customer/state.js
  var state_default3 = {
    customerInfo: {}
  };

  // ../frontend/frontend/public/js/state/pharmacy-customer/mutations.js
  var mutations_default3 = {
    SET_CUSTOMER_INFO(state5, customerInfo) {
      state5.customerInfo = customerInfo;
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-customer/actions.js
  var actions_default3 = {
    fetchCustomerInfomation({commit}, patient) {
      customerInfomation({
        patient_name: patient
      }).then((result) => {
        if (result) {
          commit("SET_CUSTOMER_INFO", result);
        }
      });
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-customer/getters.js
  var getters_default3 = {
    customerInfo: (state5) => state5.customerInfo
  };

  // ../frontend/frontend/public/js/state/pharmacy-customer/index.js
  var pharmacy_customer_default = {
    namespaced: true,
    state: state_default3,
    mutations: mutations_default3,
    actions: actions_default3,
    getters: getters_default3
  };

  // ../frontend/frontend/public/js/state/pharmacy-prescription/state.js
  var state_default4 = {
    prescription: []
  };

  // ../frontend/frontend/public/js/state/pharmacy-prescription/mutations.js
  var mutations_default4 = {
    SET_PRESCRIPTIONS(state5, prescription) {
      state5.prescription = prescription;
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-prescription/actions.js
  var actions_default4 = {
    fetchPrescription({commit}, payload) {
      getPatientPrescriptionsV2({
        patient_name: payload.patient,
        encounter_name: payload.encounter,
        ...payload
      }).then((result) => {
        if (result) {
          commit("SET_PRESCRIPTIONS", result);
        }
      });
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-prescription/getters.js
  var getters_default4 = {
    prescription: (state5) => {
      console.log(JSON.stringify(state5.prescription));
      return state5.prescription;
    }
  };

  // ../frontend/frontend/public/js/state/pharmacy-prescription/index.js
  var pharmacy_prescription_default = {
    namespaced: true,
    state: state_default4,
    mutations: mutations_default4,
    actions: actions_default4,
    getters: getters_default4
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

  // ../frontend/frontend/public/js/pharmacy/components/core/container/Container.vue
  var __vue_script__13 = {
    props: {
      queueState: {
        type: Object,
        default: {},
        required: true
      },
      patientName: {
        type: String,
        default: "",
        required: true
      },
      encounterName: {
        type: String,
        default: "",
        required: true
      },
      selectedPharmacy: {
        type: String,
        default: "",
        required: true
      }
    },
    components: {
      Paginator: Paginator_default,
      PatientInfo: PatientInfo_default,
      UserPrescription: UserPrescription_default,
      SalesOrder: SalesOrder_default,
      Invoice: Invoice_default,
      Refills: Refills_default,
      AddPrescription: AddPrescription_default,
      AwaitingDispense: AwaitingDispense_default
    },
    data() {
      return {
        prescription: {},
        socket: null,
        tab: 0,
        patientData: {},
        patientSummary: {}
      };
    },
    computed: {
      customerInfo() {
        return this.$store.getters["customerModule/customerInfo"];
      },
      prescription() {
        return this.$store.getters["prescriptionModule/prescription"];
      }
    },
    watch: {
      queueState() {
        this.socket.on(this.queueState.name, function(data) {
          console.log("queueState event connected");
          this.getPrescriptionDrugs(this.queueState.patient, this.queueState.appointment);
        });
      },
      patientName() {
        getPatientInfo(this.patientName).then((d) => {
          this.patientSummary = d.message.summary.vitals || {};
        });
        const parent2 = this;
        frappe.call({
          method: "frappe.client.get",
          args: {
            doctype: "Patient",
            name: this.patientName
          },
          callback(r) {
            parent2.patientData = r.message;
          }
        });
      },
      customerInfo() {
        console.log(this.customerInfo);
      },
      prescription() {
        this.totalAmount = Math.ceil(this.prescription.reduce((accum, item) => accum + (item.unit_price * item.qty || 1), 0)).toFixed(2);
      }
    },
    methods: {
      verifyMpesaPayment() {
        frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
          frappe.db.get_value("Patient", this.queueState.patient, "customer").then(({message}) => {
            const customer = message.customer;
            const callback = () => {
              updateQueueStatus({state_name: this.queueState.name, status: "Payment Completed"}).then((m) => {
              });
            };
            mpesaDialog(customer, this.queueState.patient, callback);
          });
        });
      },
      pullFunsoftReceipt() {
        frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
          console.log(b);
          funsoftBankReceipt(this.queueState.patient);
        });
      },
      addDrugModal() {
        const fields = [
          {
            "fieldname": "item",
            "fieldtype": "Link",
            "in_list_view": 1,
            "label": "Item",
            reqd: 1,
            "options": "Item"
          },
          {
            "fetch_from": "item.item_name",
            "fieldname": "item_name",
            "fieldtype": "Data",
            "label": "Item Name",
            "read_only": 1
          },
          {
            "fetch_from": "item.stock_uom",
            "fieldname": "uom",
            "fieldtype": "Link",
            "label": "UOM",
            "options": "UOM",
            "read_only": 1
          },
          {
            "fieldname": "dosage_form",
            "fieldtype": "Link",
            "label": "Dosage Form",
            reqd: 1,
            "in_list_view": 1,
            "options": "Dosage Form"
          },
          {
            "fieldname": "strength",
            "fieldtype": "Data",
            "in_list_view": 1,
            reqd: 1,
            "label": "Strength"
          }
        ];
        const dialog = new frappe.ui.Dialog({
          title: "Add a Drug",
          fields: [
            {
              fieldname: "medicine_name",
              fieldtype: "Data",
              in_list_view: 1,
              label: "Medicine Name",
              unique: 1
            },
            {
              fieldname: "drug_stock_detail",
              fieldtype: "Table",
              label: "Drug Stock Detail",
              options: "Drug Stock Detail",
              fields
            }
          ],
          primary_action: (values) => {
            addADrug(values).then(() => {
              dialog.hide();
              frappe.show_alert({
                message: "Drug Added Succesfully",
                indicator: "green"
              }, 10);
            });
          }
        });
        dialog.show();
      },
      onUpdateList() {
        this.getPrescriptionDrugs(this.queueState.patient, this.queueState.appointment);
      },
      getPrescriptionDrugs(patient, encounter) {
        getPatientPrescriptionsV2({
          patient_name: patient,
          encounter_name: encounter,
          fetch: "all"
        }).then((result) => {
          if (result) {
            this.prescription = result;
          } else {
            frappe.show_alert({
              message: `Request Failed. Please try again`,
              indicator: "red"
            }, 5);
          }
        });
        this.$store.dispatch("customerModule/fetchCustomerInfomation", patient);
      },
      getConditionalItemPrice(item) {
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
    },
    created() {
      this.$store.registerModule("customerModule", pharmacy_customer_default);
      this.$store.registerModule("prescriptionModule", pharmacy_prescription_default);
    },
    mounted() {
      const host = this.get_host(3e3);
      const socket = io.connect();
      this.socket = socket;
      socket.on("connect", () => {
        console.log("parent connected");
      });
      socket.on(this.queueState.name, function(data) {
        console.log("queueState event connected");
        this.getPrescriptionDrugs(this.queueState.patient, this.queueState.appointment);
      });
    },
    filters: {
      Upper(value) {
        return value.toUpperCase();
      },
      title(str) {
        return str.replace(/\w([^-\s]*)/g, function(txt) {
          return (txt || "").charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__13 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticStyle: {
        "margin-left": "0.1%",
        "background-color": "#ffffff",
        overflow: "scroll",
        height: "88vh"
      }
    }, [
      _c("div", {
        staticStyle: {
          "padding-top": "1%",
          "margin-top": "1px",
          "margin-left": "16px",
          "margin-right": "16px",
          "align-content": "center",
          "padding-left": "8px",
          "padding-right": "8px"
        }
      }, [
        _c("div", {
          staticStyle: {
            display: "flex",
            "justify-content": "space-between"
          }
        }, [
          _c("b-button", {
            staticStyle: {"margin-right": "2px"},
            attrs: {size: "md", variant: "primary"},
            on: {click: _vm.verifyMpesaPayment}
          }, [_vm._v("Verify Mpesa\n      ")]),
          _vm._v(" "),
          _c("b-button", {
            staticStyle: {"margin-right": "2px"},
            attrs: {size: "md", variant: "secondary"},
            on: {click: _vm.pullFunsoftReceipt}
          }, [_vm._v("Pull Funsoft Receipt\n      ")]),
          _vm._v(" "),
          _c("b-button", {
            staticStyle: {"margin-right": "2px"},
            attrs: {size: "md", variant: "primary"},
            on: {click: _vm.addDrugModal}
          }, [_vm._v("Add a Drug")])
        ], 1),
        _vm._v(" "),
        _c("hr", {
          staticStyle: {
            width: "100%",
            "text-align": "left",
            "margin-left": "0",
            "margin-top": "5px",
            "margin-bottom": "2px"
          }
        }),
        _vm._v(" "),
        _c("b-row", [
          _c("b-col", [
            _c("div", [
              _c("div", {staticStyle: {"margin-bottom": "8px", padding: "4px"}}, [
                _c("div", {staticStyle: {display: "flex"}}, [
                  _c("div", {staticStyle: {flex: "1"}}, [
                    _c("span", [
                      _c("h3", {staticClass: "h3 card-text patient-name"}, [
                        _vm._v("\n                    " + _vm._s(_vm.patientData.patient_name) + " |\n                    " + _vm._s(_vm.patientData.patient_number) + " |\n                  ")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.patientData.customer_group === "All Customer Groups" ? "CASH PAYER" : _vm.patientData.customer_group))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", {staticStyle: {flex: "1"}}, [
                    _c("div", [
                      _c("span", [_vm._v("Height: ")]),
                      _vm._v(" " + _vm._s(_vm.patientSummary.height) + "\n                ")
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("span", [_vm._v("Weight: ")]),
                      _vm._v("  " + _vm._s(_vm.patientSummary.weight) + "\n                ")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ], 1),
        _vm._v(" "),
        _c("hr", {
          staticStyle: {
            width: "100%",
            "text-align": "left",
            "margin-left": "0",
            "margin-top": "2px",
            "margin-bottom": "2px"
          }
        }),
        _vm._v(" "),
        _c("b-row", [
          _c("b-col", [
            _vm.patientName ? _c("div", {staticStyle: {"margin-top": "8px", padding: "4px"}}, [
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
                _c("b-tab", {attrs: {title: "Prescriptions"}}, [
                  _vm.tab === 0 ? _c("UserPrescription", {
                    attrs: {
                      queueState: _vm.queueState,
                      patientName: _vm.patientName,
                      encounterName: _vm.encounterName,
                      prescription: _vm.prescription,
                      patientData: _vm.patientData,
                      selectedPharmacy: _vm.selectedPharmacy
                    },
                    on: {
                      onUpdateList: function($event) {
                        return _vm.onUpdateList();
                      }
                    }
                  }) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("b-tab", {attrs: {title: "Awaiting Dispense"}}, [
                  _vm.tab === 1 ? _c("AwaitingDispense", {
                    attrs: {
                      queueState: _vm.queueState,
                      patientNumber: _vm.patientName,
                      selectedPharmacy: _vm.selectedPharmacy
                    }
                  }) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("b-tab", {attrs: {title: "Refills"}}, [
                  _vm.tab === 2 ? _c("Refills", {
                    attrs: {patient_number: _vm.patientName}
                  }) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("b-tab", {attrs: {title: "Sales Orders"}}, [
                  _vm.tab === 3 ? _c("SalesOrder", {
                    attrs: {patient_number: _vm.patientName}
                  }) : _vm._e()
                ], 1),
                _vm._v(" "),
                _c("b-tab", {attrs: {title: "Sales Invoice"}}, [
                  _vm.tab === 4 ? _c("Invoice", {
                    attrs: {patient_number: _vm.patientName}
                  }) : _vm._e()
                ], 1)
              ], 1)
            ], 1) : _c("div", {staticClass: "center-image"}, [
              _c("img", {
                attrs: {
                  src: "https://cdn.dribbble.com/users/1449854/screenshots/4136663/no_data_found.png",
                  alt: "No data IMG"
                }
              })
            ])
          ])
        ], 1)
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__13 = [];
  __vue_render__13._withStripped = true;
  var __vue_inject_styles__13 = function(inject) {
    if (!inject)
      return;
    inject("data-v-70d59b0a_0", {source: "\n.center-image[data-v-70d59b0a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10%;\n  height: 100%;\n  width: 100%;\n  vertical-align: middle;\n}\n.center-image img[data-v-70d59b0a] {\n  width: 300px;\n  height: 350px;\n  top: 20%;\n}\n.patient-name[data-v-70d59b0a] {\n  text-transform: capitalize;\n}\n.note-tabs-content[data-v-70d59b0a] {\n  padding: 10px;\n  border: none;\n  color: #676a6c;\n}\n\n/* .custom-tabs {\n  .card-header {\n    background-color: #fff;\n    ul {\n      li {\n        margin: 2px;\n        display: flex;\n        flex-direction: column;\n        flex: 1 0;\n      }\n    }\n  }\n  .card-footer {\n    min-height: 60px;\n  }\n} */\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/container/Container.vue"], "names": [], "mappings": ";AAieA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;AACA;AAEA;EACA,YAAA;EACA,aAAA;EACA,QAAA;AACA;AAEA;EACA,0BAAA;AACA;AAEA;EACA,aAAA;EACA,YAAA;EACA,cAAA;AACA;;AAEA;;;;;;;;;;;;;;;GAeA", "file": "Container.vue", "sourcesContent": [`<template>
  <div class="" style="margin-left: 0.1%; background-color: #ffffff; overflow: scroll; height: 88vh;">
    <!-- <b-modal id="modal-prevent-closing" ref="changeServiceUnitModal" title="Select Pharmacy Warehouse" @hidden="resetServiceUnits" @ok="updateWarehouse">
                <b-form-select v-model="warehouse" :options="warehouses" placeholder="Select warehouse"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ warehouse }}</strong></div>
            </b-modal> -->
    <!-- <div v-if="loading" style="padding-top:25%; text-align:center; height:100vh;">
                <b-spinner style="width: 300px; height: 300px;margin:auto;"></b-spinner>
            </div> -->
    <!-- v-else -->
    <div
      style="
        padding-top: 1%;
        margin-top: 1px;
        margin-left: 16px;
        margin-right: 16px;
        align-content: center;
        padding-left: 8px;
        padding-right: 8px;
      "
    >
      <div style="display: flex; justify-content: space-between">
        <b-button
          style="margin-right: 2px"
          size="md"
          variant="primary"
          @click="verifyMpesaPayment"
          >Verify Mpesa
        </b-button>
        <b-button
          style="margin-right: 2px"
          size="md"
          variant="secondary"
          @click="pullFunsoftReceipt"
          >Pull Funsoft Receipt
        </b-button>
        <b-button
          style="margin-right: 2px"
          size="md"
          variant="primary"
          @click="addDrugModal"
          >Add a Drug</b-button
        >
      </div>
      <hr
        style="
          width: 100%;
          text-align: left;
          margin-left: 0;
          margin-top: 5px;
          margin-bottom: 2px;
        "
      />
      <b-row>
        <b-col>
          <div>
            <!-- {{ patientData }} -->
            <div style="margin-bottom: 8px; padding: 4px">
              <div style="display:flex;" class="">
                <div style="flex: 1" class="">
                  <span>
                    <h3 class="h3 card-text patient-name">
                      {{ patientData.patient_name }} |
                      {{ patientData.patient_number }} |
                    </h3>
                    <span>{{
                      patientData.customer_group === 'All Customer Groups' ? 'CASH PAYER': patientData.customer_group
                    }}</span>
                  </span>
                </div>
                <div style="flex: 1">
                  <div>
                  <span>Height: </span> {{ patientSummary.height }}
                  </div>
                  <div>
                  <span>Weight: </span>  {{ patientSummary.weight }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <hr
        style="
          width: 100%;
          text-align: left;
          margin-left: 0;
          margin-top: 2px;
          margin-bottom: 2px;
        "
      />
      <b-row>
        <b-col>
          <div
            v-if="patientName"
            class=""
            style="margin-top: 8px; padding: 4px"
          >
            <b-tabs
              v-model="tab"
              content-class="note-tabs-content"
              class="custom-tabs"
            >
              <b-tab title="Prescriptions">
                <UserPrescription
                  v-if="tab === 0"
                  :queueState="queueState"
                  @onUpdateList="onUpdateList()"
                  :patientName="patientName"
                  :encounterName="encounterName"
                  :prescription="prescription"
                  :patientData="patientData"
                  :selectedPharmacy="selectedPharmacy"
                />
              </b-tab>
              <b-tab title="Awaiting Dispense">
                <AwaitingDispense
                  v-if="tab === 1"
                  :queueState="queueState"
                  :patientNumber="patientName"
                  :selectedPharmacy="selectedPharmacy"
                />
              </b-tab>
              <b-tab title="Refills">
                <Refills v-if="tab === 2" :patient_number="patientName" />
              </b-tab>
              <b-tab title="Sales Orders">
                <SalesOrder v-if="tab === 3" :patient_number="patientName" />
              </b-tab>
              <b-tab title="Sales Invoice">
                <Invoice v-if="tab === 4" :patient_number="patientName" />
              </b-tab>
            </b-tabs>
          </div>
          <div v-else class="center-image">
            <img
              src="https://cdn.dribbble.com/users/1449854/screenshots/4136663/no_data_found.png"
              alt="No data IMG"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { get_item_dashboard_data } from "../../../utils";
import Paginator from "../../util/Paginator.vue";
import PatientInfo from "./PatientInfo.vue";
import UserPrescription from "./UserPrescription.vue";
// import Accounts from './Accounts.vue'
import SalesOrder from "./SalesOrder.vue";
import Invoice from "./Invoice.vue";
import Refills from "./Refills.vue";
import AddPrescription from "./AddPrescription.vue";
import AwaitingDispense from "./AwaitingDispense.vue";

import {
  getPrescriptions,
  getPatientPrescriptionsV2,
  addADrug,
  getPrescriptionInvoice,
  setPrescriptionInvoiceNumber,
  getWarehouses,
  updatePrescriptionWarehouse,
  createPrescriptionSalesOrder,
  getPatientInfo
} from "../../../../services/pharmacy/prescriptions.js";
import customerModule from "../../../../state/pharmacy-customer";
import prescriptionModule from "../../../../state/pharmacy-prescription";
import { fetchConditionalItemPrice } from "../../../../services/accounts/patient.js";
import { updateQueueStatus } from '../../../../services/pharmacy/queue.js';

export default {
  props: {
    queueState: {
      type: Object,
      default: {},
      required: true,
    },
    patientName: {
      type: String,
      default: "",
      required: true,
    },
    encounterName: {
      type: String,
      default: "",
      required: true,
    },
    selectedPharmacy: {
      type: String,
      default: "",
      required: true,
    }
  },
  components: {
    Paginator,
    PatientInfo,
    UserPrescription,
    // Accounts
    SalesOrder,
    Invoice,
    Refills,
    AddPrescription,
    AwaitingDispense,
  },
  data() {
    return {
      prescription: {},
      socket: null,
      tab: 0,
      patientData: {},
      patientSummary: {}
    };
  },
  computed: {
    customerInfo() {
      return this.$store.getters["customerModule/customerInfo"];
    },
    prescription() {
      return this.$store.getters["prescriptionModule/prescription"];
    },
  },
  watch: {
    queueState() {
      this.socket.on(this.queueState.name, function (data) {
        console.log("queueState event connected");
        this.getPrescriptionDrugs(
          this.queueState.patient,
          this.queueState.appointment
        );
      });
      // console.log('****', this.queueState.patient)
    },
    patientName(){
      getPatientInfo(this.patientName).then((d) => {
        this.patientSummary = d.message.summary.vitals || {}
      })
      const parent = this;

       frappe.call({
             method: "frappe.client.get",
             args: {
                 doctype: "Patient",
                 name: this.patientName,
             },
             callback(r) {
                 parent.patientData = r.message
             }
         });
    },
    customerInfo() {
      console.log(this.customerInfo)
    },
    prescription() {
      this.totalAmount = Math.ceil(
        this.prescription.reduce(
          (accum, item) => accum + (item.unit_price * item.qty || 1),
          0
        )
      ).toFixed(2);
    },
  },
  methods: {
    verifyMpesaPayment() {
      frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
        frappe.db
          .get_value("Patient", this.queueState.patient, "customer")
          .then(({ message }) => {
            const customer = message.customer;
            const callback = () => {
              updateQueueStatus({ state_name: this.queueState.name, status: 'Payment Completed' }).then(m => {});
            }
            mpesaDialog(customer, this.queueState.patient, callback);
          });
      });
    },
    pullFunsoftReceipt(){
       frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
            // chat.js is loaded
                console.log(b)
                funsoftBankReceipt(this.queueState.patient)
            })
    },
    addDrugModal() {
        const fields = [
            {
   "fieldname": "item",
   "fieldtype": "Link",
   "in_list_view": 1,
   "label": "Item",
   reqd: 1,
   "options": "Item"
  },
  {
   "fetch_from": "item.item_name",
   "fieldname": "item_name",
   "fieldtype": "Data",
   "label": "Item Name",
   "read_only": 1
  },
  {
   "fetch_from": "item.stock_uom",
   "fieldname": "uom",
   "fieldtype": "Link",
   "label": "UOM",
   "options": "UOM",
   "read_only": 1
  },
  {
   "fieldname": "dosage_form",
   "fieldtype": "Link",
   "label": "Dosage Form",
   reqd: 1,
    "in_list_view": 1,
   "options": "Dosage Form"
  },
  {
   "fieldname": "strength",
   "fieldtype": "Data",
    "in_list_view": 1,
   reqd: 1,
   "label": "Strength"
  },
 ];
      const dialog = new frappe.ui.Dialog({
        title: "Add a Drug",
        fields: [
          {
            fieldname: "medicine_name",
            fieldtype: "Data",
            in_list_view: 1,
            label: "Medicine Name",
            unique: 1,
          },
          {
            fieldname: "drug_stock_detail",
            fieldtype: "Table",
            label: "Drug Stock Detail",
            options: "Drug Stock Detail",
            fields,
          },
        ],
        primary_action: (values) => {
            addADrug(values).then(() => {
                 dialog.hide();
                 frappe.show_alert({
                     message: 'Drug Added Succesfully',
                     indicator: 'green'
                 }, 10)
            })
        }
      });
      dialog.show();
    //   dialog.$wrapper.find('.modal-dialog').css("width", "800px");
    },
    onUpdateList() {
      this.getPrescriptionDrugs(
        this.queueState.patient,
        this.queueState.appointment
      );
    },
    getPrescriptionDrugs(patient, encounter) {
      getPatientPrescriptionsV2({
        patient_name: patient,
        encounter_name: encounter,
        fetch: "all",
        // appointment_name:appointment
      }).then((result) => {
        if (result) {
          // result.map((item) => {
          //     fetchConditionalItemPrice({
          //         item_code: item.drug_code,
          //         patient: patient,
          //     }).then(res => {

          //         if (res.type === "Patient") {
          //             item['rate'] = 0;
          //             item['rate'] = res.price;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Copay") {
          //             item['rate'] = res.price;
          //             item['remaining_quantity'] = res.remaining_quantity;
          //             item['co_paid_quantity'] = res.co_paid_quantity;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Insurance") {
          //             item['rate'] = res.price;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Pre-auth Insurance") {
          //             item['rate'] = res.price;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Pre-auth Copay") {
          //             item['rate'] = res.price;
          //             item['remaining_quantity'] = res.remaining_quantity;
          //             item['co_paid_quantity'] = res.co_paid_quantity;
          //             item['payer'] = res.type

          //         }
          //     })

          // })
          this.prescription = result;
          // this.loading = false;
        } else {
          frappe.show_alert(
            {
              message: \`Request Failed. Please try again\`,
              indicator: "red",
            },
            5
          );
        }
      });
      // this.$store.dispatch("prescriptionModule/fetchPrescription", { patient, encounter, });
      this.$store.dispatch("customerModule/fetchCustomerInfomation", patient);
    },
    getConditionalItemPrice(item) {},
    get_host: function (port = 3000) {
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
  },
  created() {
    this.$store.registerModule("customerModule", customerModule);
    this.$store.registerModule("prescriptionModule", prescriptionModule);
    // this.getPrescriptionDrugs(this.queueState.patient, this.queueState.appointment);
    // this.socket.on(this.queueState.name, function(data) {
    //     console.log('queueState eventprescriptionModule connected')
    //     this.getPrescriptionDrugs(this.queueState.patient, this.queueState.appointment);
    // });
  },
  mounted() {
    const host = this.get_host(3000);
    const socket = io.connect();
    this.socket = socket;
    socket.on("connect", () => {
      console.log("parent connected");
    });
    socket.on(this.queueState.name, function (data) {
      console.log("queueState event connected");
      this.getPrescriptionDrugs(
        this.queueState.patient,
        this.queueState.appointment
      );
    });
  },
  filters: {
    // Filter definitions
    Upper(value) {
      return value.toUpperCase();
    },
    title(str) {
      return str.replace(/\\w([^-\\s]*)/g, function (txt) {
        return (txt || '').charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    numberWithCommas(x) {
      if (x) {
        return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  height: 100%;
  width: 100%;
  vertical-align: middle;
}

.center-image img {
  width: 300px;
  height: 350px;
  top: 20%;
}

.patient-name {
  text-transform: capitalize;
}

.note-tabs-content {
  padding: 10px;
  border: none;
  color: #676a6c;
}

/* .custom-tabs {
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
} */
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
</style>`]}, media: void 0}), inject("data-v-70d59b0a_1", {source: ".custom-tabs .card-header[data-v-70d59b0a] {\n  background-color: #fff;\n}\n.custom-tabs .card-header ul li[data-v-70d59b0a] {\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n}\n.custom-tabs .card-footer[data-v-70d59b0a] {\n  min-height: 60px;\n}\n", map: {"version": 3, "sources": ["Container.vue"], "names": [], "mappings": "AAAA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB", "file": "Container.vue", "sourcesContent": [".custom-tabs .card-header {\n  background-color: #fff;\n}\n.custom-tabs .card-header ul li {\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n}\n.custom-tabs .card-footer {\n  min-height: 60px;\n}\n"]}, media: void 0});
  };
  var __vue_scope_id__13 = "data-v-70d59b0a";
  var __vue_module_identifier__13 = void 0;
  var __vue_is_functional_template__13 = false;
  function __vue_normalize__13(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div class="" style="margin-left: 0.1%; background-color: #ffffff; overflow: scroll; height: 88vh;">
    <!-- <b-modal id="modal-prevent-closing" ref="changeServiceUnitModal" title="Select Pharmacy Warehouse" @hidden="resetServiceUnits" @ok="updateWarehouse">
                <b-form-select v-model="warehouse" :options="warehouses" placeholder="Select warehouse"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ warehouse }}</strong></div>
            </b-modal> -->
    <!-- <div v-if="loading" style="padding-top:25%; text-align:center; height:100vh;">
                <b-spinner style="width: 300px; height: 300px;margin:auto;"></b-spinner>
            </div> -->
    <!-- v-else -->
    <div
      style="
        padding-top: 1%;
        margin-top: 1px;
        margin-left: 16px;
        margin-right: 16px;
        align-content: center;
        padding-left: 8px;
        padding-right: 8px;
      "
    >
      <div style="display: flex; justify-content: space-between">
        <b-button
          style="margin-right: 2px"
          size="md"
          variant="primary"
          @click="verifyMpesaPayment"
          >Verify Mpesa
        </b-button>
        <b-button
          style="margin-right: 2px"
          size="md"
          variant="secondary"
          @click="pullFunsoftReceipt"
          >Pull Funsoft Receipt
        </b-button>
        <b-button
          style="margin-right: 2px"
          size="md"
          variant="primary"
          @click="addDrugModal"
          >Add a Drug</b-button
        >
      </div>
      <hr
        style="
          width: 100%;
          text-align: left;
          margin-left: 0;
          margin-top: 5px;
          margin-bottom: 2px;
        "
      />
      <b-row>
        <b-col>
          <div>
            <!-- {{ patientData }} -->
            <div style="margin-bottom: 8px; padding: 4px">
              <div style="display:flex;" class="">
                <div style="flex: 1" class="">
                  <span>
                    <h3 class="h3 card-text patient-name">
                      {{ patientData.patient_name }} |
                      {{ patientData.patient_number }} |
                    </h3>
                    <span>{{
                      patientData.customer_group === 'All Customer Groups' ? 'CASH PAYER': patientData.customer_group
                    }}</span>
                  </span>
                </div>
                <div style="flex: 1">
                  <div>
                  <span>Height: </span> {{ patientSummary.height }}
                  </div>
                  <div>
                  <span>Weight: </span>  {{ patientSummary.weight }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <hr
        style="
          width: 100%;
          text-align: left;
          margin-left: 0;
          margin-top: 2px;
          margin-bottom: 2px;
        "
      />
      <b-row>
        <b-col>
          <div
            v-if="patientName"
            class=""
            style="margin-top: 8px; padding: 4px"
          >
            <b-tabs
              v-model="tab"
              content-class="note-tabs-content"
              class="custom-tabs"
            >
              <b-tab title="Prescriptions">
                <UserPrescription
                  v-if="tab === 0"
                  :queueState="queueState"
                  @onUpdateList="onUpdateList()"
                  :patientName="patientName"
                  :encounterName="encounterName"
                  :prescription="prescription"
                  :patientData="patientData"
                  :selectedPharmacy="selectedPharmacy"
                />
              </b-tab>
              <b-tab title="Awaiting Dispense">
                <AwaitingDispense
                  v-if="tab === 1"
                  :queueState="queueState"
                  :patientNumber="patientName"
                  :selectedPharmacy="selectedPharmacy"
                />
              </b-tab>
              <b-tab title="Refills">
                <Refills v-if="tab === 2" :patient_number="patientName" />
              </b-tab>
              <b-tab title="Sales Orders">
                <SalesOrder v-if="tab === 3" :patient_number="patientName" />
              </b-tab>
              <b-tab title="Sales Invoice">
                <Invoice v-if="tab === 4" :patient_number="patientName" />
              </b-tab>
            </b-tabs>
          </div>
          <div v-else class="center-image">
            <img
              src="https://cdn.dribbble.com/users/1449854/screenshots/4136663/no_data_found.png"
              alt="No data IMG"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { get_item_dashboard_data } from "../../../utils";
import Paginator from "../../util/Paginator.vue";
import PatientInfo from "./PatientInfo.vue";
import UserPrescription from "./UserPrescription.vue";
// import Accounts from './Accounts.vue'
import SalesOrder from "./SalesOrder.vue";
import Invoice from "./Invoice.vue";
import Refills from "./Refills.vue";
import AddPrescription from "./AddPrescription.vue";
import AwaitingDispense from "./AwaitingDispense.vue";

import {
  getPrescriptions,
  getPatientPrescriptionsV2,
  addADrug,
  getPrescriptionInvoice,
  setPrescriptionInvoiceNumber,
  getWarehouses,
  updatePrescriptionWarehouse,
  createPrescriptionSalesOrder,
  getPatientInfo
} from "../../../../services/pharmacy/prescriptions.js";
import customerModule from "../../../../state/pharmacy-customer";
import prescriptionModule from "../../../../state/pharmacy-prescription";
import { fetchConditionalItemPrice } from "../../../../services/accounts/patient.js";
import { updateQueueStatus } from '../../../../services/pharmacy/queue.js';

export default {
  props: {
    queueState: {
      type: Object,
      default: {},
      required: true,
    },
    patientName: {
      type: String,
      default: "",
      required: true,
    },
    encounterName: {
      type: String,
      default: "",
      required: true,
    },
    selectedPharmacy: {
      type: String,
      default: "",
      required: true,
    }
  },
  components: {
    Paginator,
    PatientInfo,
    UserPrescription,
    // Accounts
    SalesOrder,
    Invoice,
    Refills,
    AddPrescription,
    AwaitingDispense,
  },
  data() {
    return {
      prescription: {},
      socket: null,
      tab: 0,
      patientData: {},
      patientSummary: {}
    };
  },
  computed: {
    customerInfo() {
      return this.$store.getters["customerModule/customerInfo"];
    },
    prescription() {
      return this.$store.getters["prescriptionModule/prescription"];
    },
  },
  watch: {
    queueState() {
      this.socket.on(this.queueState.name, function (data) {
        console.log("queueState event connected");
        this.getPrescriptionDrugs(
          this.queueState.patient,
          this.queueState.appointment
        );
      });
      // console.log('****', this.queueState.patient)
    },
    patientName(){
      getPatientInfo(this.patientName).then((d) => {
        this.patientSummary = d.message.summary.vitals || {}
      })
      const parent = this;

       frappe.call({
             method: "frappe.client.get",
             args: {
                 doctype: "Patient",
                 name: this.patientName,
             },
             callback(r) {
                 parent.patientData = r.message
             }
         });
    },
    customerInfo() {
      console.log(this.customerInfo)
    },
    prescription() {
      this.totalAmount = Math.ceil(
        this.prescription.reduce(
          (accum, item) => accum + (item.unit_price * item.qty || 1),
          0
        )
      ).toFixed(2);
    },
  },
  methods: {
    verifyMpesaPayment() {
      frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
        frappe.db
          .get_value("Patient", this.queueState.patient, "customer")
          .then(({ message }) => {
            const customer = message.customer;
            const callback = () => {
              updateQueueStatus({ state_name: this.queueState.name, status: 'Payment Completed' }).then(m => {});
            }
            mpesaDialog(customer, this.queueState.patient, callback);
          });
      });
    },
    pullFunsoftReceipt(){
       frappe.require("/assets/frontend/js/mpesa_dialog.js", () => {
            // chat.js is loaded
                console.log(b)
                funsoftBankReceipt(this.queueState.patient)
            })
    },
    addDrugModal() {
        const fields = [
            {
   "fieldname": "item",
   "fieldtype": "Link",
   "in_list_view": 1,
   "label": "Item",
   reqd: 1,
   "options": "Item"
  },
  {
   "fetch_from": "item.item_name",
   "fieldname": "item_name",
   "fieldtype": "Data",
   "label": "Item Name",
   "read_only": 1
  },
  {
   "fetch_from": "item.stock_uom",
   "fieldname": "uom",
   "fieldtype": "Link",
   "label": "UOM",
   "options": "UOM",
   "read_only": 1
  },
  {
   "fieldname": "dosage_form",
   "fieldtype": "Link",
   "label": "Dosage Form",
   reqd: 1,
    "in_list_view": 1,
   "options": "Dosage Form"
  },
  {
   "fieldname": "strength",
   "fieldtype": "Data",
    "in_list_view": 1,
   reqd: 1,
   "label": "Strength"
  },
 ];
      const dialog = new frappe.ui.Dialog({
        title: "Add a Drug",
        fields: [
          {
            fieldname: "medicine_name",
            fieldtype: "Data",
            in_list_view: 1,
            label: "Medicine Name",
            unique: 1,
          },
          {
            fieldname: "drug_stock_detail",
            fieldtype: "Table",
            label: "Drug Stock Detail",
            options: "Drug Stock Detail",
            fields,
          },
        ],
        primary_action: (values) => {
            addADrug(values).then(() => {
                 dialog.hide();
                 frappe.show_alert({
                     message: 'Drug Added Succesfully',
                     indicator: 'green'
                 }, 10)
            })
        }
      });
      dialog.show();
    //   dialog.$wrapper.find('.modal-dialog').css("width", "800px");
    },
    onUpdateList() {
      this.getPrescriptionDrugs(
        this.queueState.patient,
        this.queueState.appointment
      );
    },
    getPrescriptionDrugs(patient, encounter) {
      getPatientPrescriptionsV2({
        patient_name: patient,
        encounter_name: encounter,
        fetch: "all",
        // appointment_name:appointment
      }).then((result) => {
        if (result) {
          // result.map((item) => {
          //     fetchConditionalItemPrice({
          //         item_code: item.drug_code,
          //         patient: patient,
          //     }).then(res => {

          //         if (res.type === "Patient") {
          //             item['rate'] = 0;
          //             item['rate'] = res.price;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Copay") {
          //             item['rate'] = res.price;
          //             item['remaining_quantity'] = res.remaining_quantity;
          //             item['co_paid_quantity'] = res.co_paid_quantity;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Insurance") {
          //             item['rate'] = res.price;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Pre-auth Insurance") {
          //             item['rate'] = res.price;
          //             item['payer'] = res.type;

          //         } else if (res.type === "Pre-auth Copay") {
          //             item['rate'] = res.price;
          //             item['remaining_quantity'] = res.remaining_quantity;
          //             item['co_paid_quantity'] = res.co_paid_quantity;
          //             item['payer'] = res.type

          //         }
          //     })

          // })
          this.prescription = result;
          // this.loading = false;
        } else {
          frappe.show_alert(
            {
              message: \`Request Failed. Please try again\`,
              indicator: "red",
            },
            5
          );
        }
      });
      // this.$store.dispatch("prescriptionModule/fetchPrescription", { patient, encounter, });
      this.$store.dispatch("customerModule/fetchCustomerInfomation", patient);
    },
    getConditionalItemPrice(item) {},
    get_host: function (port = 3000) {
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
  },
  created() {
    this.$store.registerModule("customerModule", customerModule);
    this.$store.registerModule("prescriptionModule", prescriptionModule);
    // this.getPrescriptionDrugs(this.queueState.patient, this.queueState.appointment);
    // this.socket.on(this.queueState.name, function(data) {
    //     console.log('queueState eventprescriptionModule connected')
    //     this.getPrescriptionDrugs(this.queueState.patient, this.queueState.appointment);
    // });
  },
  mounted() {
    const host = this.get_host(3000);
    const socket = io.connect();
    this.socket = socket;
    socket.on("connect", () => {
      console.log("parent connected");
    });
    socket.on(this.queueState.name, function (data) {
      console.log("queueState event connected");
      this.getPrescriptionDrugs(
        this.queueState.patient,
        this.queueState.appointment
      );
    });
  },
  filters: {
    // Filter definitions
    Upper(value) {
      return value.toUpperCase();
    },
    title(str) {
      return str.replace(/\\w([^-\\s]*)/g, function (txt) {
        return (txt || '').charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    numberWithCommas(x) {
      if (x) {
        return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  height: 100%;
  width: 100%;
  vertical-align: middle;
}

.center-image img {
  width: 300px;
  height: 350px;
  top: 20%;
}

.patient-name {
  text-transform: capitalize;
}

.note-tabs-content {
  padding: 10px;
  border: none;
  color: #676a6c;
}

/* .custom-tabs {
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
} */
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
  var Container_default = __vue_component__13;

  // ../frontend/frontend/public/js/pharmacy/components/core/container/InpatientPrescriptions.vue
  var __vue_script__14 = {
    name: "InpatientPrescriptions",
    props: {
      selectedPharmacy: {
        type: String,
        default: "",
        required: true
      }
    },
    data() {
      return {
        filters: {},
        dispense: false,
        selected: {},
        tt: false,
        itemGroups: [],
        prescriptionItems: [],
        prescriptionItemsPage: [],
        loading: true,
        alternativeDrugs: [],
        alternativeDrug: null,
        prescriptionItem: null,
        warehouses: [],
        warehouse: null,
        customerInfo: null,
        totalAmount: 0,
        selectedPrescriptions: [],
        selectedTotals: 0,
        prescription: [],
        paidPres: [],
        currentPage: 1,
        fields: [
          "patient_name",
          "patient",
          "drug_name",
          {label: "Dose", key: "doctor_dose"},
          "bed",
          "frequency",
          "route_of_administration",
          "start_date",
          {label: "Actions", key: "action"}
        ],
        imoFields: [
          "drug",
          {key: "drug_code", label: "Stock Item"},
          "duration",
          "frequency",
          {
            label: "Scheduled Time",
            key: "date",
            formatter: (value, key, item) => {
              return moment(item.date + " " + item.time).fromNow();
            }
          },
          "route_of_administration"
        ],
        imoItems: [],
        activeRow: {},
        items: [],
        addItem: false
      };
    },
    mounted() {
      if (this.filters.service_unit) {
        getPatientPrescriptionsV2({fetch: "inpatients", ...this.filters}).then((data) => {
          this.prescription = data;
        });
      }
      getDrugGroups().then((data) => {
        this.itemGroups = data;
      });
      this.makeFields();
    },
    watch: {
      activeRow() {
        const promises = [calculatePrescriptionQuantity({period: this.activeRow.duration, dosage: this.activeRow.frequency}), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, warehouse: this.selectedPharmacy.warehouse, patient: this.activeRow.patient_number, filters: {item: ["!=", ""]}})];
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({quantity: quantity || 1, original_quantity: quantity || 1, in_stock: item.stock_balance, rate: 0, ...item}));
        });
        getCurrentMedicationOrders({patient: this.activeRow.patient}).then((items) => {
          this.imoItems = items;
        });
      }
    },
    methods: {
      cancel(item) {
        frappe.confirm("Are you sure you want to cancel this prescription?", () => {
          cancelInpatientPrescriptions(item.name).then((i) => {
            this.prescription = this.prescription.filter((item2) => {
              return item2.name !== i.name;
            });
          });
        }, () => {
        });
      },
      makeFields() {
        const parent2 = this;
        const customer_field = frappe.ui.form.make_control({
          df: {
            label: "Service Unit",
            fieldtype: "Link",
            fieldname: "service_unit",
            options: "Healthcare Service Unit",
            placeholder: __(`Search Per Service Unit`),
            filters: {
              is_group: 1
            },
            onchange: function() {
              parent2.filters.service_unit = this.value;
              getPatientPrescriptionsV2({fetch: "inpatients", ...parent2.filters, service_unit: this.value}).then((data) => {
                parent2.prescription = data;
              });
            }
          },
          parent: this.$refs["appointment-search"],
          render_input: true
        });
        const patient_field = frappe.ui.form.make_control({
          df: {
            label: "Patient",
            fieldtype: "Link",
            fieldname: "patient",
            options: "Patient",
            placeholder: __(`Patient`),
            onchange: function() {
              parent2.filters.patient = this.value;
              getPatientPrescriptionsV2({fetch: "inpatients", ...parent2.filters, patient_name: this.value}).then((data) => {
                parent2.prescription = data;
              });
            }
          },
          parent: this.$refs["appointment-search"],
          render_input: true
        });
      },
      onSelect(name) {
        const el = document.getElementById(name);
        console.log(name, el);
        if (el) {
          el.focus();
        }
      },
      openEditModal(item) {
        const parent2 = this;
        const previousName = item.drug_name;
        let d = new frappe.ui.Dialog({
          title: `Edit Drug Prescription`,
          fields: [{
            label: "Drug",
            fieldname: "drug",
            fieldtype: "Link",
            options: "Item",
            reqd: true,
            filters: {item_group: ["in", parent2.itemGroups], has_variants: 1},
            default: item.drug,
            onchange: () => {
              frappe.db.get_value("Item", d.fields_dict.drug.value, "item_name").then(({message}) => {
                d.set_value("drug_name", message.item_name);
                d.set_value("instructions", `Take ${message.item_name} ${item.doctor_dose || item.dose || ""} for ${item.duration} ${item.period || ""}`);
                d.refresh();
              });
            }
          }, {
            label: "Drug Name",
            fieldname: "drug_name",
            fetch_from: "drug.item_name",
            fieldtype: "Data",
            reqd: true,
            default: item.drug_name,
            read_only: 1
          }, {
            label: "Instructions",
            fieldname: "instructions",
            fieldtype: "Small Text",
            default: item.instructions
          }],
          primary_action: (values) => {
            updateDrugPrescription({...values, name: item.name}).then((res) => {
              item.drug_name = res.drug_name;
              item.instructions = res.instructions;
              item.drug = res.drug;
              this.$emit("onUpdateList");
            });
            d.hide();
          }
        });
        d.show();
      },
      openModal(row) {
        this.activeRow = row;
        this.$refs.viewPrescription.show();
        console.log(row);
      },
      removeMatchedItem(item) {
        removeMatchedItem(item).then(() => {
          const promises = [
            calculatePrescriptionQuantity({
              period: this.activeRow.duration,
              dosage: this.activeRow.frequency
            }),
            getMatchedItems({
              drug: this.activeRow.drug,
              strength: this.activeRow.strength,
              warehouse: this.selectedPharmacy.warehouse,
              patient: this.activeRow.patient_number,
              filters: {item: ["!=", ""]}
            })
          ];
          Promise.all(promises).then(([quantity, message]) => {
            this.items = message.map((item2) => ({
              quantity: quantity || 1,
              original_quantity: quantity || 1,
              in_stock: item2.stock_balance,
              rate: 0,
              ...item2
            }));
          });
        });
      },
      createMedicationOrder() {
        if (!this.selected.item) {
          return frappe.throw("Please select an item or add a matched Item before creating a medication order");
        }
        const order = {
          patient: this.activeRow.patient_number,
          patient_encounter: this.activeRow.patient_encounter,
          drug_code: this.selected.item.item,
          dosage: this.activeRow.frequency,
          period: this.activeRow.duration,
          dosage_form: this.activeRow.route_of_administration,
          start_date: this.activeRow.start_date,
          service_unit: this.activeRow.service_unit || "",
          prescription: this.activeRow.name,
          quantity: this.selected.item.quantity,
          warehouse: this.selectedPharmacy.warehouse,
          original_quantity: this.selected.item.original_quantity
        };
        console.log("===========>", this.activeRow.frequency * (this.selected.item.quantity / this.selected.item.original_quantity));
        if (!this.dispense) {
          createMedicationOrder(order).then(() => {
            let idx = 0;
            this.prescription = this.prescription.filter((item) => {
              return item.name !== this.activeRow.name;
            });
            const nextItem = this.prescription[0];
            if (nextItem) {
              this.openModal(nextItem);
            }
          });
        } else {
          this.createSalesOrders();
        }
      },
      createSalesOrders() {
        const parent2 = this;
        const item = {
          patient: this.activeRow.patient_number,
          encounter: this.activeRow.patient_encounter,
          inpatient_record: this.activeRow.inpatient_record,
          item: this.selected.item.item,
          quantity: this.selected.item.quantity,
          service_unit: this.activeRow.service_unit,
          appointment_name: this.activeRow.patient_appointment,
          doctors_prescription: this.activeRow.name,
          prescription_name: this.activeRow.name,
          route_of_administration: this.activeRow.route_of_administration || "",
          rate: this.selected.item.rate
        };
        const args = {
          items: [item],
          limit: 0,
          total: parseInt(this.selected.item.rate) * parseInt(this.selected.item.quantity),
          warehouse: this.selectedPharmacy.warehouse,
          is_inpatient: 1
        };
        console.log(args);
        createDrugSalesOrder(args).then(() => {
          let idx = 0;
          this.prescription = this.prescription.filter((item2) => {
            return item2.name !== this.activeRow.name;
          });
          const nextItem = this.prescription[0];
          if (nextItem) {
            this.openModal(nextItem);
          }
          this.$emit("onUpdateList");
        });
      },
      addAMatch(item) {
        let d = new frappe.ui.Dialog({
          title: `Add Matching Stock Item`,
          fields: [
            {
              label: "Item",
              fieldname: "item",
              fieldtype: "Link",
              options: "Item",
              filters: {item_group: ["in", this.itemGroups], has_variants: 0}
            },
            {
              label: "Strength",
              fieldname: "strength",
              fieldtype: "Data"
            }
          ],
          primary_action: (values) => {
            matchStockItemApi({
              ...values,
              drug: item.drug,
              dosage_form: item.dosage_form
            }).then(() => {
              frappe.show_alert(`${item.drug} matched successfully with ${values.item}`, 5);
              const promises = [calculatePrescriptionQuantity({period: this.activeRow.duration, dosage: this.activeRow.frequency}), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, warehouse: this.selectedPharmacy.warehouse, filters: {item: ["!=", ""]}})];
              Promise.all(promises).then(([quantity, message]) => {
                this.items = message.map((item2) => ({quantity: quantity || 1, original_quantity: quantity || 1, in_stock: item2.stock_balance, rate: 0, ...item2}));
              });
              d.hide();
            });
          }
        });
        d.show();
      }
    }
  };
  var __vue_render__14 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "root"}, [
      _c("div", {}, [
        _c("div", {staticStyle: {}}, [
          _c("div", [
            _c("div", {
              ref: "appointment-search",
              staticClass: "ref-field-input",
              staticStyle: {
                width: "400px",
                display: "flex",
                "justify-content": "space-between"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", [
            _c("div", {
              ref: "patient-search",
              staticClass: "ref-field-input",
              staticStyle: {
                width: "400px",
                display: "flex",
                "justify-content": "space-between"
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("b-modal", {
        ref: "changeServiceUnitModal",
        attrs: {
          id: "modal-prevent-closing",
          title: "Select Pharmacy Warehouse"
        },
        on: {hidden: _vm.resetServiceUnits, ok: _vm.updateWarehouse}
      }, [
        _c("b-form-select", {
          attrs: {options: _vm.warehouses, placeholder: "Select warehouse"},
          model: {
            value: _vm.warehouse,
            callback: function($$v) {
              _vm.warehouse = $$v;
            },
            expression: "warehouse"
          }
        }),
        _vm._v(" "),
        _c("div", {staticClass: "mt-3"}, [
          _vm._v("\n      Selected: "),
          _c("strong", [_vm._v(_vm._s(_vm.warehouse))])
        ])
      ], 1),
      _vm._v(" "),
      _c("div", {staticStyle: {"padding-top": "0.2%", "margin-top": "8px"}}, [
        _c("b-row", [
          _c("b-col", [
            _c("div", {
              staticStyle: {
                display: "flex",
                "justify-content": "flex-end"
              }
            }, [
              _c("b-button-group", {
                staticStyle: {
                  "margin-right": "16px",
                  "margin-top": "4px"
                }
              }, [
                _vm.paidPres.length > 0 ? _c("b-button", {
                  staticStyle: {"margin-right": "2px"},
                  attrs: {variant: "primary"},
                  on: {click: _vm.dispense}
                }, [_vm._v("Dispense")]) : _vm._e()
              ], 1)
            ], 1)
          ])
        ], 1),
        _vm._v(" "),
        _c("div", {staticClass: "table-responsive"}, [
          _c("b-table", {
            staticClass: "table",
            attrs: {
              fields: _vm.fields,
              stacked: "md",
              "per-page": 10,
              "current-page": _vm.currentPage,
              small: "",
              hover: "",
              items: _vm.prescription
            },
            scopedSlots: _vm._u([
              {
                key: "cell(action)",
                fn: function(row) {
                  return [
                    _c("div", {staticStyle: {display: "flex"}}, [
                      _c("b-button", {
                        staticClass: "sm",
                        attrs: {variant: "primary"},
                        on: {
                          click: function($event) {
                            return _vm.openModal(row.item);
                          }
                        }
                      }, [_vm._v("\n              View")]),
                      _vm._v(" "),
                      _c("b-button", {
                        staticStyle: {"margin-left": "8px"},
                        attrs: {variant: "primary"},
                        on: {
                          click: function($event) {
                            return _vm.openEditModal(row.item);
                          }
                        }
                      }, [_vm._v("Edit Prescription")]),
                      _vm._v(" "),
                      _c("b-button", {
                        staticStyle: {"margin-left": "8px"},
                        attrs: {variant: "danger"},
                        on: {
                          click: function($event) {
                            return _vm.cancel(row.item);
                          }
                        }
                      }, [_vm._v("Cancel Prescription")])
                    ], 1)
                  ];
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("b-pagination", {
            attrs: {
              "total-rows": _vm.prescription.length,
              "per-page": 10,
              "aria-controls": "my-table"
            },
            model: {
              value: _vm.currentPage,
              callback: function($$v) {
                _vm.currentPage = $$v;
              },
              expression: "currentPage"
            }
          }),
          _vm._v(" "),
          _c("b-modal", {
            ref: "viewPrescription",
            attrs: {
              size: "xl",
              "ok-title": _vm.activeRow.patient_appointment ? "Create Sales Order" : "Create Medication Order",
              id: "modal-1",
              title: "Doctor's Drug Prescription"
            },
            on: {
              ok: function($event) {
                return _vm.createMedicationOrder();
              }
            }
          }, [
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Patient Status:")]),
              _vm._v(" "),
              _c("span", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.inpatient_record ? "Inpatient" : "Outpatient"))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {display: "flex"}}, [
              _c("div", {
                staticStyle: {
                  "margin-top": "16px",
                  width: "50%",
                  flex: "1"
                }
              }, [
                _c("strong", [_vm._v("Drug:")]),
                _vm._v(" "),
                _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                  _vm._v(_vm._s(_vm.activeRow.drug))
                ])
              ]),
              _vm._v(" "),
              _c("div", {
                staticStyle: {
                  "margin-top": "16px",
                  width: "50%",
                  flex: "1"
                }
              }, [
                _c("strong", [_vm._v("Dose:")]),
                _vm._v(" "),
                _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                  _vm._v(_vm._s(_vm.activeRow.dose))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {display: "flex"}}, [
              _c("div", {
                staticStyle: {
                  "margin-top": "16px",
                  width: "50%",
                  flex: "1"
                }
              }, [
                _c("strong", [_vm._v("Route of Administration:")]),
                _vm._v(" "),
                _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                  _vm._v(_vm._s(_vm.activeRow.route_of_administration))
                ])
              ]),
              _vm._v(" "),
              _c("div", {
                staticStyle: {
                  "margin-top": "16px",
                  width: "50%",
                  flex: "1"
                }
              }, [
                _c("strong", [_vm._v("Start Date:")]),
                _vm._v(" "),
                _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                  _vm._v(_vm._s(_vm.activeRow.start_date))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("strong", [_vm._v("Instructions:")]),
              _vm._v(" "),
              _c("pre", {staticStyle: {"margin-bottom": "0"}}, [
                _vm._v(_vm._s(_vm.activeRow.instructions))
              ])
            ]),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("b-button", {
                directives: [
                  {
                    name: "b-toggle",
                    rawName: "v-b-toggle.collapse-1",
                    modifiers: {"collapse-1": true}
                  }
                ],
                attrs: {variant: "primary"}
              }, [_vm._v("Ongoing Medication Orders")]),
              _vm._v(" "),
              _c("b-collapse", {staticClass: "mt-2", attrs: {id: "collapse-1"}}, [
                _c("b-table", {
                  attrs: {
                    fields: _vm.imoFields,
                    items: _vm.imoItems
                  }
                })
              ], 1)
            ], 1),
            _vm._v(" "),
            _c("div", {staticStyle: {"margin-top": "16px"}}, [
              _c("h4", [_vm._v("Matched Stock Items")]),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  bordered: "",
                  items: _vm.items,
                  fields: [
                    {label: "Select", key: "select"},
                    "item_name",
                    {label: "Quantity", key: "quantity"},
                    "in_stock",
                    "rate",
                    {
                      key: "total",
                      label: "Total",
                      formatter: function(value, key, item) {
                        return item.quantity * parseFloat(item.rate);
                      }
                    },
                    {key: "action", label: " "}
                  ]
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(rate)",
                    fn: function(i) {
                      return [
                        _c("div", {staticStyle: {"text-align": "right"}}, [
                          _vm._v("\n              " + _vm._s(i.item.rate.toFixed(2)) + "\n            ")
                        ])
                      ];
                    }
                  },
                  {
                    key: "cell(total)",
                    fn: function(item) {
                      return [
                        _c("div", {staticStyle: {"text-align": "right"}}, [
                          _c("span", [
                            _vm._v(_vm._s("KES " + Number(item.item.quantity * parseFloat(item.item.rate)).toFixed(2).toLocaleString()))
                          ])
                        ])
                      ];
                    }
                  },
                  {
                    key: "cell(item_name)",
                    fn: function(it) {
                      return [
                        it.item.rate == 0 ? _c("span", {staticStyle: {color: "red"}}, [_vm._v(_vm._s(it.item.item_name))]) : _vm._e(),
                        _vm._v(" "),
                        it.item.rate != 0 ? _c("span", [
                          _vm._v(_vm._s(it.item.item_name))
                        ]) : _vm._e()
                      ];
                    }
                  },
                  {
                    key: "cell(select)",
                    fn: function(row) {
                      return [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected,
                              expression: "selected"
                            }
                          ],
                          attrs: {
                            disabled: row.item.rate == 0,
                            type: "radio",
                            variant: "primary",
                            name: "some-radio"
                          },
                          domProps: {
                            value: row,
                            checked: _vm._q(_vm.selected, row)
                          },
                          on: {
                            change: [
                              function($event) {
                                _vm.selected = row;
                              },
                              function($event) {
                                _vm.onSelect(row.item.item.split(/\s+/).join("-"));
                              }
                            ]
                          }
                        })
                      ];
                    }
                  },
                  {
                    key: "cell(quantity)",
                    fn: function(i) {
                      return [
                        _vm.selected.item && _vm.selected.item.item === i.item.item ? _c("b-input", {
                          attrs: {
                            disabled: i.item.rate == 0,
                            type: "number",
                            name: "qty",
                            id: i.item.item.split(/\s+/).join("-"),
                            value: i.item.quantity
                          },
                          model: {
                            value: i.item.quantity,
                            callback: function($$v) {
                              _vm.$set(i.item, "quantity", $$v);
                            },
                            expression: "i.item.quantity"
                          }
                        }) : _vm._e(),
                        _vm._v(" "),
                        !(_vm.selected.item && _vm.selected.item.item === i.item.item) ? _c("span", [
                          _vm._v(_vm._s(i.item.quantity))
                        ]) : _vm._e()
                      ];
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("b-form-checkbox", {
                attrs: {
                  id: "checkbox-1",
                  name: "checkbox-1",
                  value: true,
                  "unchecked-value": false
                },
                model: {
                  value: _vm.dispense,
                  callback: function($$v) {
                    _vm.dispense = $$v;
                  },
                  expression: "dispense"
                }
              }, [_vm._v("\n    Dispense as a one off prescription\n  ")]),
              _vm._v(" "),
              _c("span", {staticStyle: {color: "red"}}, [
                _vm._v("**(The patient will be billed on submit of this)")
              ])
            ], 1)
          ])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__14 = [];
  __vue_render__14._withStripped = true;
  var __vue_inject_styles__14 = function(inject) {
    if (!inject)
      return;
    inject("data-v-8862f3cc_0", {source: "\n.root[data-v-8862f3cc] {\n  height: 85vh;\n  overflow: scroll;\n}\n.search[data-v-8862f3cc] {\n  display: flex;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/container/InpatientPrescriptions.vue"], "names": [], "mappings": ";AAkkBA;EACA,YAAA;EACA,gBAAA;AACA;AACA;EACA,aAAA;AACA", "file": "InpatientPrescriptions.vue", "sourcesContent": [`<template>
  <div class="root">
    <div class="">
                    <div style="search">
                      <div>
                      <div style="width: 400px; display: flex; justify-content: space-between;" ref="appointment-search" class="ref-field-input" />
                      </div>
                      <div>
                    <div style="width: 400px; display: flex; justify-content: space-between;" ref="patient-search" class="ref-field-input" />
                    </div>
                    </div> 
                </div>
    <b-modal
      id="modal-prevent-closing"
      ref="changeServiceUnitModal"
      title="Select Pharmacy Warehouse"
      @hidden="resetServiceUnits"
      @ok="updateWarehouse"
    >
      <b-form-select
        v-model="warehouse"
        :options="warehouses"
        placeholder="Select warehouse"
      ></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ warehouse }}</strong>
      </div>
    </b-modal>
    <!-- <div v-if="loading" style="padding-top:25%; text-align:center; height:100vh;">
                                                                                <b-spinner style="width: 300px; height: 300px;margin:auto;"></b-spinner>
                                                                            </div> -->

    <div style="padding-top: 0.2%; margin-top: 8px">
      <b-row>
        <b-col>
          <div style="display: flex; justify-content: flex-end">
            <b-button-group style="margin-right: 16px; margin-top: 4px">
              <!-- <b-button
                style="margin-right: 2px"
                variant="primary"
                @click="postInvoice"
                >Create Sales Order</b-button
              > -->
              <!-- <b-button
                v-if="prescription && prescription.length"
                style="margin-right: 2px"
                variant="primary"
                @click="printPrescription(prescription[0])"
                >Print</b-button
              > -->
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="checkInvoice">Payment </b-button> -->
              <b-button
                style="margin-right: 2px"
                variant="primary"
                @click="dispense"
                v-if="paidPres.length > 0"
                >Dispense</b-button
              >
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="transferPrescription">Transfer</b-button> -->
            </b-button-group>
          </div>
        </b-col>
      </b-row>
      <div class="table-responsive">
        <b-table
          :fields="fields"
          class="table"
          stacked="md"
          :per-page="10"
          :current-page="currentPage"
          small
          hover
          :items="prescription"
        >
          <template #cell(action)="row">
            <div style="display: flex">
              <b-button
                @click="openModal(row.item)"
                class="sm"
                variant="primary"
              >
                View</b-button
              >
              <!-- <b-button
                style="margin-left: 8px"
                @click="addAMatch()"
                variant="primary"
                >MatchStock Item</b-button -->
              <b-button style="margin-left: 8px" @click="openEditModal(row.item)" variant="primary">Edit Prescription</b-button>
              <b-button style="margin-left: 8px" @click="cancel(row.item)" variant="danger">Cancel Prescription</b-button>
            </div>
          </template>
        </b-table>
        <b-pagination
      v-model="currentPage"
      :total-rows="prescription.length"
      :per-page="10"
      aria-controls="my-table"
    ></b-pagination>
        <b-modal
          size="xl"
          :ok-title="
            activeRow.patient_appointment
              ? 'Create Sales Order'
              : 'Create Medication Order'
          "
          id="modal-1"
          ref="viewPrescription"
          title="Doctor's Drug Prescription"
          @ok="createMedicationOrder()"
        >
          <div style="margin-top: 16px">
            <strong>Patient Status:</strong>
            <span style="margin-bottom: 0">{{
              activeRow.inpatient_record ? "Inpatient" : "Outpatient"
            }}</span>
          </div>
          <div style="display: flex">
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Drug:</strong>
              <pre style="margin-bottom: 0">{{ activeRow.drug }}</pre>
            </div>
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Dose:</strong>
              <pre style="margin-bottom: 0">{{ activeRow.dose }}</pre>
            </div>
          </div>
          <div style="display: flex">
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Route of Administration:</strong>
              <pre style="margin-bottom: 0">{{
                activeRow.route_of_administration
              }}</pre>
            </div>
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Start Date:</strong>
              <pre style="margin-bottom: 0">{{ activeRow.start_date }}</pre>
            </div>
          </div>
          <div style="margin-top: 16px">
            <strong>Instructions:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.instructions }}</pre>
          </div>
          <div style="margin-top: 16px">
            <b-button variant="primary" v-b-toggle.collapse-1
              >Ongoing Medication Orders</b-button
            >
            <b-collapse id="collapse-1" class="mt-2">
              <b-table :fields="imoFields" :items="imoItems"> </b-table>
            </b-collapse>
          </div>
          <div style="margin-top: 16px">
            <h4>Matched Stock Items</h4>

            <b-table
              bordered
              :items="items"
              :fields="[
                { label: 'Select', key: 'select' },
                'item_name',
                { label: 'Quantity', key: 'quantity' },
                'in_stock',
                'rate',
                {
                  key: 'total',
                  label: 'Total',
                  formatter: (value, key, item) =>
                    item.quantity * parseFloat(item.rate),
                },
                {key: 'action', label: ' '}
              ]"
            >
              <template #cell(rate)="i">
              <div style="text-align: right;">
                {{ i.item.rate.toFixed(2) }}
              </div>
            </template>
            <template #cell(total)="item">
              <div style="text-align: right;">
              <span>{{'KES ' + Number(item.item.quantity * parseFloat(item.item.rate)).toFixed(2).toLocaleString()}}</span>
              </div>
            </template>
            <template #cell(item_name)="it">
                <span v-if="it.item.rate == 0" style="color: red">{{ it.item.item_name }}</span>
                <span v-if="it.item.rate != 0">{{ it.item.item_name }}</span>
              </template>
              <template #cell(select)="row">
                <input :disabled="row.item.rate == 0" v-model="selected" @change="onSelect(row.item.item.split(/\\s+/).join('-'))" type="radio" variant="primary" name="some-radio" :value="row" />
              </template>
              <template #cell(quantity)="i">
                <b-input :disabled="i.item.rate == 0" v-if="selected.item && selected.item.item === i.item.item" type="number" name="qty" v-model="i.item.quantity" :id="i.item.item.split(/\\s+/).join('-')" :value="i.item.quantity" />
                 <span v-if="!(selected.item && selected.item.item === i.item.item)">{{i.item.quantity}}</span>
              </template>
              <!-- <template #cell(action)="row">
                <b-button @click="removeMatchedItem(row.item)" variant="danger"
                  >Remove</b-button
                >
              </template> -->
            </b-table>
            <b-form-checkbox
      id="checkbox-1"
      v-model="dispense"
      name="checkbox-1"
      :value="true"
      :unchecked-value="false"
    >
      Dispense as a one off prescription
    </b-form-checkbox>
    <span style="color: red;">**(The patient will be billed on submit of this)</span>

          </div>
        </b-modal>
      
      
      </div>
    </div>
  </div>
</template>
<script>
import {
  getPatientPrescriptionsV2,
  calculatePrescriptionQuantity,
  createMedicationOrder as createMedicationOrderApi,
  getMatchedItems,
  matchStockItemApi,
  getCurrentMedicationOrders,
  getDrugGroups,
  removeMatchedItem as removeMatchedItemApi,
   updateDrugPrescription,
   createDrugSalesOrder,
   cancelInpatientPrescriptions,
} from "../../../../services/pharmacy/prescriptions.js";
export default {
  name: "InpatientPrescriptions",
    props: {
      selectedPharmacy: {
      type: String,
      default: "",
      required: true,
    }
  },
  data() {
    return {
      filters: {},
      dispense: false,
      selected: {},
      tt: false,
      itemGroups: [],
      prescriptionItems: [],
      prescriptionItemsPage: [],
      loading: true,
      alternativeDrugs: [],
      alternativeDrug: null,
      prescriptionItem: null,
      warehouses: [],
      warehouse: null,
      customerInfo: null,
      totalAmount: 0,
      selectedPrescriptions: [],
      selectedTotals: 0,
      prescription: [],
      paidPres: [],
      currentPage: 1,
      fields: [
        'patient_name',
        'patient',
        'drug_name',
        // { label: 'Strength', key: 'dose' },
        { label: 'Dose', key: 'doctor_dose' },
        'bed',
        'frequency',
        'route_of_administration',
        'start_date',
        { label: 'Actions', key: 'action' },
      ],
      imoFields: [
        "drug",
        { key: "drug_code", label: "Stock Item" },
        "duration",
        "frequency",
        {
          label: "Scheduled Time",
          key: "date",
          formatter: (value, key, item) => {
            return moment(item.date + " " + item.time).fromNow();
          },
        },
        "route_of_administration",
      ],
      imoItems: [],
      activeRow: {},
      items: [],
      addItem: false,
    };
  },
  mounted() {
    if(this.filters.service_unit) {
      getPatientPrescriptionsV2({ fetch: "inpatients", ...this.filters }).then((data) => {
      this.prescription = data;
    });
    }
  
    getDrugGroups().then((data) => {
      this.itemGroups = data;
    });
    this.makeFields();
  },
  watch: {
    activeRow() {
      const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, warehouse: this.selectedPharmacy.warehouse, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: quantity || 1, original_quantity: quantity || 1,  in_stock: item.stock_balance, rate: 0, ...item}));
        })
      getCurrentMedicationOrders({ patient: this.activeRow.patient }).then(
        (items) => {
          this.imoItems = items;
        }
      );
    },
  },
  methods: {
    cancel(item){
      frappe.confirm('Are you sure you want to cancel this prescription?',
    () => {
     cancelInpatientPrescriptions(item.name)
     .then((i) => {
       this.prescription = this.prescription.filter((item) => {
            return item.name !==i.name
          });
     })
    }, () => {
        // action to perform if No is selected
    })
    },
    makeFields(){
      const parent = this;
      const customer_field = frappe.ui.form.make_control({
        df: {
            label: "Service Unit",
            fieldtype: "Link",
            fieldname: "service_unit",
            options: "Healthcare Service Unit",
            placeholder: __(\`Search Per Service Unit\`),
            filters: {
               is_group: 1
            },
            onchange: function() {
              parent.filters.service_unit = this.value
                getPatientPrescriptionsV2({ fetch: "inpatients", ...parent.filters, service_unit: this.value }).then((data) => {
          parent.prescription = data;
        });
            },
            },
            parent: this.$refs["appointment-search"],
            render_input: true,
      })
       const patient_field = frappe.ui.form.make_control({
        df: {
            label: "Patient",
            fieldtype: "Link",
            fieldname: "patient",
            options: "Patient",
            placeholder: __(\`Patient\`),
        
            onchange: function() {
                    parent.filters.patient = this.value
                getPatientPrescriptionsV2({ fetch: "inpatients", ...parent.filters, patient_name: this.value }).then((data) => {
          parent.prescription = data;
        });
                
            },
            },
            parent: this.$refs["appointment-search"],
            render_input: true,
      })
    },
    onSelect(name){
      // const name = ev.item.split(/\\s+/).join('-')
      const el = document.getElementById(name);
      console.log(name, el)
      if(el){
        el.focus()
      }
    },
     openEditModal(item){
      const parent = this;
      const previousName = item.drug_name;
      let d = new frappe.ui.Dialog({
        title: \`Edit Drug Prescription\`,
        fields: [{
                    label: 'Drug',
                    fieldname: 'drug',
                    fieldtype: 'Link',
                    options: 'Item',
                    reqd: true,
                    filters: { item_group: ['in', parent.itemGroups ], has_variants: 1},
                    default : item.drug,
                    onchange: () => {
                       frappe.db.get_value('Item', d.fields_dict.drug.value, 'item_name').then(({ message }) => {
                         d.set_value('drug_name', message.item_name);
                         d.set_value('instructions', \`Take \${message.item_name} \${item.doctor_dose || item.dose || ''} for \${item.duration} \${item.period || ''}\`)
                         d.refresh();
                });
                    }
                },{
                    label: 'Drug Name',
                    fieldname: 'drug_name',
                    fetch_from: 'drug.item_name',
                    fieldtype: 'Data',
                    reqd: true,
                     default : item.drug_name,
                    read_only: 1
                },{
                    label: 'Instructions',
                    fieldname: 'instructions',
                    fieldtype: 'Small Text',
                    default: item.instructions
                }],
        primary_action: (values) => {
          updateDrugPrescription({...values, name: item.name })
          .then((res) => {
            item.drug_name = res.drug_name
            item.instructions = res.instructions
            item.drug = res.drug
            this.$emit('onUpdateList')
          })
          d.hide();
        }    
      });
      d.show()
    },
    openModal(row) {
      this.activeRow = row;
      this.$refs.viewPrescription.show();
      console.log(row);
    },
    removeMatchedItem(item) {
      removeMatchedItemApi(item).then(() => {
        const promises = [
          calculatePrescriptionQuantity({
            period: this.activeRow.duration,
            dosage: this.activeRow.frequency,
          }),
          getMatchedItems({
            drug: this.activeRow.drug,
            strength: this.activeRow.strength,
            warehouse: this.selectedPharmacy.warehouse,
            patient: this.activeRow.patient_number,
            filters: { item: ["!=", ""] },
          }),
        ];
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({
            quantity: quantity || 1,
            original_quantity: quantity || 1, 
            in_stock: item.stock_balance,
            rate: 0,
            ...item,
          }));
        });
      });
    },
    createMedicationOrder() {
      if (!this.selected.item) {
        return frappe.throw(
          "Please select an item or add a matched Item before creating a medication order"
        );
      }
      const order = {
        patient: this.activeRow.patient_number,
        patient_encounter: this.activeRow.patient_encounter,
        drug_code: this.selected.item.item,
        dosage: this.activeRow.frequency,
        period: this.activeRow.duration,
        dosage_form: this.activeRow.route_of_administration,
        start_date: this.activeRow.start_date,
        service_unit: this.activeRow.service_unit || "",
        prescription: this.activeRow.name,
        quantity: this.selected.item.quantity,
        warehouse: this.selectedPharmacy.warehouse,
        original_quantity: this.selected.item.original_quantity
      };

console.log('===========>', this.activeRow.frequency * (this.selected.item.quantity / this.selected.item.original_quantity))
      if(!this.dispense){
        createMedicationOrderApi(order).then(() => {
          let idx = 0
          this.prescription = this.prescription.filter((item) => {
            return item.name !==this.activeRow.name
          });
          const nextItem = this.prescription[0]
          if (nextItem) {
            this.openModal(nextItem)
          }
        // });
      });
      } else {
        // Create medicatiop
        this.createSalesOrders()
      }
    },
    createSalesOrders(){
      const parent = this
      const item = {
        patient: this.activeRow.patient_number,
        encounter: this.activeRow.patient_encounter, 
        inpatient_record: this.activeRow.inpatient_record, 
        item: this.selected.item.item, 
        quantity: this.selected.item.quantity,
        service_unit: this.activeRow.service_unit,
        appointment_name: this.activeRow.patient_appointment,
        doctors_prescription: this.activeRow.name,
        prescription_name: this.activeRow.name,
        route_of_administration: this.activeRow.route_of_administration || '',
        rate: this.selected.item.rate,
      }
      const args = {
        items: [item],
        limit: 0,
        total: parseInt(this.selected.item.rate) * parseInt(this.selected.item.quantity),
        warehouse: this.selectedPharmacy.warehouse,
        is_inpatient: 1
      }
      console.log(args)
      // return
      createDrugSalesOrder(args).then(() => {
        let idx = 0
          this.prescription = this.prescription.filter((item) => {
            return item.name !==this.activeRow.name
          });
          const nextItem = this.prescription[0]
          if (nextItem) {
            this.openModal(nextItem)
          }
        this.$emit('onUpdateList')
      })
    },
    addAMatch(item) {
      let d = new frappe.ui.Dialog({
        title: \`Add Matching Stock Item\`,
        fields: [
          {
            label: "Item",
            fieldname: "item",
            fieldtype: "Link",
            options: "Item",
            filters: { item_group: ["in", this.itemGroups], has_variants: 0 },
          },
          {
            label: "Strength",
            fieldname: "strength",
            fieldtype: "Data",
          },
        ],
        primary_action: (values) => {
          matchStockItemApi({
            ...values,
            drug: item.drug,
            dosage_form: item.dosage_form,
          }).then(() => {
            frappe.show_alert(
              \`\${item.drug} matched successfully with \${values.item}\`,
              5
            );
            const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, warehouse: this.selectedPharmacy.warehouse, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: quantity || 1, original_quantity: quantity || 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
            d.hide();
          });
        },
      });
      d.show();
    },
  },
};
</script>
<style scoped>
.root {
  height: 85vh;
  overflow: scroll;
}
.search {
  display: flex;
}
</style>`]}, media: void 0});
  };
  var __vue_scope_id__14 = "data-v-8862f3cc";
  var __vue_module_identifier__14 = void 0;
  var __vue_is_functional_template__14 = false;
  function __vue_normalize__14(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div class="root">
    <div class="">
                    <div style="search">
                      <div>
                      <div style="width: 400px; display: flex; justify-content: space-between;" ref="appointment-search" class="ref-field-input" />
                      </div>
                      <div>
                    <div style="width: 400px; display: flex; justify-content: space-between;" ref="patient-search" class="ref-field-input" />
                    </div>
                    </div> 
                </div>
    <b-modal
      id="modal-prevent-closing"
      ref="changeServiceUnitModal"
      title="Select Pharmacy Warehouse"
      @hidden="resetServiceUnits"
      @ok="updateWarehouse"
    >
      <b-form-select
        v-model="warehouse"
        :options="warehouses"
        placeholder="Select warehouse"
      ></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ warehouse }}</strong>
      </div>
    </b-modal>
    <!-- <div v-if="loading" style="padding-top:25%; text-align:center; height:100vh;">
                                                                                <b-spinner style="width: 300px; height: 300px;margin:auto;"></b-spinner>
                                                                            </div> -->

    <div style="padding-top: 0.2%; margin-top: 8px">
      <b-row>
        <b-col>
          <div style="display: flex; justify-content: flex-end">
            <b-button-group style="margin-right: 16px; margin-top: 4px">
              <!-- <b-button
                style="margin-right: 2px"
                variant="primary"
                @click="postInvoice"
                >Create Sales Order</b-button
              > -->
              <!-- <b-button
                v-if="prescription && prescription.length"
                style="margin-right: 2px"
                variant="primary"
                @click="printPrescription(prescription[0])"
                >Print</b-button
              > -->
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="checkInvoice">Payment </b-button> -->
              <b-button
                style="margin-right: 2px"
                variant="primary"
                @click="dispense"
                v-if="paidPres.length > 0"
                >Dispense</b-button
              >
              <!-- <b-button style="margin-right:2px;" variant="primary" @click="transferPrescription">Transfer</b-button> -->
            </b-button-group>
          </div>
        </b-col>
      </b-row>
      <div class="table-responsive">
        <b-table
          :fields="fields"
          class="table"
          stacked="md"
          :per-page="10"
          :current-page="currentPage"
          small
          hover
          :items="prescription"
        >
          <template #cell(action)="row">
            <div style="display: flex">
              <b-button
                @click="openModal(row.item)"
                class="sm"
                variant="primary"
              >
                View</b-button
              >
              <!-- <b-button
                style="margin-left: 8px"
                @click="addAMatch()"
                variant="primary"
                >MatchStock Item</b-button -->
              <b-button style="margin-left: 8px" @click="openEditModal(row.item)" variant="primary">Edit Prescription</b-button>
              <b-button style="margin-left: 8px" @click="cancel(row.item)" variant="danger">Cancel Prescription</b-button>
            </div>
          </template>
        </b-table>
        <b-pagination
      v-model="currentPage"
      :total-rows="prescription.length"
      :per-page="10"
      aria-controls="my-table"
    ></b-pagination>
        <b-modal
          size="xl"
          :ok-title="
            activeRow.patient_appointment
              ? 'Create Sales Order'
              : 'Create Medication Order'
          "
          id="modal-1"
          ref="viewPrescription"
          title="Doctor's Drug Prescription"
          @ok="createMedicationOrder()"
        >
          <div style="margin-top: 16px">
            <strong>Patient Status:</strong>
            <span style="margin-bottom: 0">{{
              activeRow.inpatient_record ? "Inpatient" : "Outpatient"
            }}</span>
          </div>
          <div style="display: flex">
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Drug:</strong>
              <pre style="margin-bottom: 0">{{ activeRow.drug }}</pre>
            </div>
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Dose:</strong>
              <pre style="margin-bottom: 0">{{ activeRow.dose }}</pre>
            </div>
          </div>
          <div style="display: flex">
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Route of Administration:</strong>
              <pre style="margin-bottom: 0">{{
                activeRow.route_of_administration
              }}</pre>
            </div>
            <div style="margin-top: 16px; width: 50%; flex: 1">
              <strong>Start Date:</strong>
              <pre style="margin-bottom: 0">{{ activeRow.start_date }}</pre>
            </div>
          </div>
          <div style="margin-top: 16px">
            <strong>Instructions:</strong>
            <pre style="margin-bottom: 0">{{ activeRow.instructions }}</pre>
          </div>
          <div style="margin-top: 16px">
            <b-button variant="primary" v-b-toggle.collapse-1
              >Ongoing Medication Orders</b-button
            >
            <b-collapse id="collapse-1" class="mt-2">
              <b-table :fields="imoFields" :items="imoItems"> </b-table>
            </b-collapse>
          </div>
          <div style="margin-top: 16px">
            <h4>Matched Stock Items</h4>

            <b-table
              bordered
              :items="items"
              :fields="[
                { label: 'Select', key: 'select' },
                'item_name',
                { label: 'Quantity', key: 'quantity' },
                'in_stock',
                'rate',
                {
                  key: 'total',
                  label: 'Total',
                  formatter: (value, key, item) =>
                    item.quantity * parseFloat(item.rate),
                },
                {key: 'action', label: ' '}
              ]"
            >
              <template #cell(rate)="i">
              <div style="text-align: right;">
                {{ i.item.rate.toFixed(2) }}
              </div>
            </template>
            <template #cell(total)="item">
              <div style="text-align: right;">
              <span>{{'KES ' + Number(item.item.quantity * parseFloat(item.item.rate)).toFixed(2).toLocaleString()}}</span>
              </div>
            </template>
            <template #cell(item_name)="it">
                <span v-if="it.item.rate == 0" style="color: red">{{ it.item.item_name }}</span>
                <span v-if="it.item.rate != 0">{{ it.item.item_name }}</span>
              </template>
              <template #cell(select)="row">
                <input :disabled="row.item.rate == 0" v-model="selected" @change="onSelect(row.item.item.split(/\\s+/).join('-'))" type="radio" variant="primary" name="some-radio" :value="row" />
              </template>
              <template #cell(quantity)="i">
                <b-input :disabled="i.item.rate == 0" v-if="selected.item && selected.item.item === i.item.item" type="number" name="qty" v-model="i.item.quantity" :id="i.item.item.split(/\\s+/).join('-')" :value="i.item.quantity" />
                 <span v-if="!(selected.item && selected.item.item === i.item.item)">{{i.item.quantity}}</span>
              </template>
              <!-- <template #cell(action)="row">
                <b-button @click="removeMatchedItem(row.item)" variant="danger"
                  >Remove</b-button
                >
              </template> -->
            </b-table>
            <b-form-checkbox
      id="checkbox-1"
      v-model="dispense"
      name="checkbox-1"
      :value="true"
      :unchecked-value="false"
    >
      Dispense as a one off prescription
    </b-form-checkbox>
    <span style="color: red;">**(The patient will be billed on submit of this)</span>

          </div>
        </b-modal>
      
      
      </div>
    </div>
  </div>
</template>
<script>
import {
  getPatientPrescriptionsV2,
  calculatePrescriptionQuantity,
  createMedicationOrder as createMedicationOrderApi,
  getMatchedItems,
  matchStockItemApi,
  getCurrentMedicationOrders,
  getDrugGroups,
  removeMatchedItem as removeMatchedItemApi,
   updateDrugPrescription,
   createDrugSalesOrder,
   cancelInpatientPrescriptions,
} from "../../../../services/pharmacy/prescriptions.js";
export default {
  name: "InpatientPrescriptions",
    props: {
      selectedPharmacy: {
      type: String,
      default: "",
      required: true,
    }
  },
  data() {
    return {
      filters: {},
      dispense: false,
      selected: {},
      tt: false,
      itemGroups: [],
      prescriptionItems: [],
      prescriptionItemsPage: [],
      loading: true,
      alternativeDrugs: [],
      alternativeDrug: null,
      prescriptionItem: null,
      warehouses: [],
      warehouse: null,
      customerInfo: null,
      totalAmount: 0,
      selectedPrescriptions: [],
      selectedTotals: 0,
      prescription: [],
      paidPres: [],
      currentPage: 1,
      fields: [
        'patient_name',
        'patient',
        'drug_name',
        // { label: 'Strength', key: 'dose' },
        { label: 'Dose', key: 'doctor_dose' },
        'bed',
        'frequency',
        'route_of_administration',
        'start_date',
        { label: 'Actions', key: 'action' },
      ],
      imoFields: [
        "drug",
        { key: "drug_code", label: "Stock Item" },
        "duration",
        "frequency",
        {
          label: "Scheduled Time",
          key: "date",
          formatter: (value, key, item) => {
            return moment(item.date + " " + item.time).fromNow();
          },
        },
        "route_of_administration",
      ],
      imoItems: [],
      activeRow: {},
      items: [],
      addItem: false,
    };
  },
  mounted() {
    if(this.filters.service_unit) {
      getPatientPrescriptionsV2({ fetch: "inpatients", ...this.filters }).then((data) => {
      this.prescription = data;
    });
    }
  
    getDrugGroups().then((data) => {
      this.itemGroups = data;
    });
    this.makeFields();
  },
  watch: {
    activeRow() {
      const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, warehouse: this.selectedPharmacy.warehouse, patient: this.activeRow.patient_number, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: quantity || 1, original_quantity: quantity || 1,  in_stock: item.stock_balance, rate: 0, ...item}));
        })
      getCurrentMedicationOrders({ patient: this.activeRow.patient }).then(
        (items) => {
          this.imoItems = items;
        }
      );
    },
  },
  methods: {
    cancel(item){
      frappe.confirm('Are you sure you want to cancel this prescription?',
    () => {
     cancelInpatientPrescriptions(item.name)
     .then((i) => {
       this.prescription = this.prescription.filter((item) => {
            return item.name !==i.name
          });
     })
    }, () => {
        // action to perform if No is selected
    })
    },
    makeFields(){
      const parent = this;
      const customer_field = frappe.ui.form.make_control({
        df: {
            label: "Service Unit",
            fieldtype: "Link",
            fieldname: "service_unit",
            options: "Healthcare Service Unit",
            placeholder: __(\`Search Per Service Unit\`),
            filters: {
               is_group: 1
            },
            onchange: function() {
              parent.filters.service_unit = this.value
                getPatientPrescriptionsV2({ fetch: "inpatients", ...parent.filters, service_unit: this.value }).then((data) => {
          parent.prescription = data;
        });
            },
            },
            parent: this.$refs["appointment-search"],
            render_input: true,
      })
       const patient_field = frappe.ui.form.make_control({
        df: {
            label: "Patient",
            fieldtype: "Link",
            fieldname: "patient",
            options: "Patient",
            placeholder: __(\`Patient\`),
        
            onchange: function() {
                    parent.filters.patient = this.value
                getPatientPrescriptionsV2({ fetch: "inpatients", ...parent.filters, patient_name: this.value }).then((data) => {
          parent.prescription = data;
        });
                
            },
            },
            parent: this.$refs["appointment-search"],
            render_input: true,
      })
    },
    onSelect(name){
      // const name = ev.item.split(/\\s+/).join('-')
      const el = document.getElementById(name);
      console.log(name, el)
      if(el){
        el.focus()
      }
    },
     openEditModal(item){
      const parent = this;
      const previousName = item.drug_name;
      let d = new frappe.ui.Dialog({
        title: \`Edit Drug Prescription\`,
        fields: [{
                    label: 'Drug',
                    fieldname: 'drug',
                    fieldtype: 'Link',
                    options: 'Item',
                    reqd: true,
                    filters: { item_group: ['in', parent.itemGroups ], has_variants: 1},
                    default : item.drug,
                    onchange: () => {
                       frappe.db.get_value('Item', d.fields_dict.drug.value, 'item_name').then(({ message }) => {
                         d.set_value('drug_name', message.item_name);
                         d.set_value('instructions', \`Take \${message.item_name} \${item.doctor_dose || item.dose || ''} for \${item.duration} \${item.period || ''}\`)
                         d.refresh();
                });
                    }
                },{
                    label: 'Drug Name',
                    fieldname: 'drug_name',
                    fetch_from: 'drug.item_name',
                    fieldtype: 'Data',
                    reqd: true,
                     default : item.drug_name,
                    read_only: 1
                },{
                    label: 'Instructions',
                    fieldname: 'instructions',
                    fieldtype: 'Small Text',
                    default: item.instructions
                }],
        primary_action: (values) => {
          updateDrugPrescription({...values, name: item.name })
          .then((res) => {
            item.drug_name = res.drug_name
            item.instructions = res.instructions
            item.drug = res.drug
            this.$emit('onUpdateList')
          })
          d.hide();
        }    
      });
      d.show()
    },
    openModal(row) {
      this.activeRow = row;
      this.$refs.viewPrescription.show();
      console.log(row);
    },
    removeMatchedItem(item) {
      removeMatchedItemApi(item).then(() => {
        const promises = [
          calculatePrescriptionQuantity({
            period: this.activeRow.duration,
            dosage: this.activeRow.frequency,
          }),
          getMatchedItems({
            drug: this.activeRow.drug,
            strength: this.activeRow.strength,
            warehouse: this.selectedPharmacy.warehouse,
            patient: this.activeRow.patient_number,
            filters: { item: ["!=", ""] },
          }),
        ];
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({
            quantity: quantity || 1,
            original_quantity: quantity || 1, 
            in_stock: item.stock_balance,
            rate: 0,
            ...item,
          }));
        });
      });
    },
    createMedicationOrder() {
      if (!this.selected.item) {
        return frappe.throw(
          "Please select an item or add a matched Item before creating a medication order"
        );
      }
      const order = {
        patient: this.activeRow.patient_number,
        patient_encounter: this.activeRow.patient_encounter,
        drug_code: this.selected.item.item,
        dosage: this.activeRow.frequency,
        period: this.activeRow.duration,
        dosage_form: this.activeRow.route_of_administration,
        start_date: this.activeRow.start_date,
        service_unit: this.activeRow.service_unit || "",
        prescription: this.activeRow.name,
        quantity: this.selected.item.quantity,
        warehouse: this.selectedPharmacy.warehouse,
        original_quantity: this.selected.item.original_quantity
      };

console.log('===========>', this.activeRow.frequency * (this.selected.item.quantity / this.selected.item.original_quantity))
      if(!this.dispense){
        createMedicationOrderApi(order).then(() => {
          let idx = 0
          this.prescription = this.prescription.filter((item) => {
            return item.name !==this.activeRow.name
          });
          const nextItem = this.prescription[0]
          if (nextItem) {
            this.openModal(nextItem)
          }
        // });
      });
      } else {
        // Create medicatiop
        this.createSalesOrders()
      }
    },
    createSalesOrders(){
      const parent = this
      const item = {
        patient: this.activeRow.patient_number,
        encounter: this.activeRow.patient_encounter, 
        inpatient_record: this.activeRow.inpatient_record, 
        item: this.selected.item.item, 
        quantity: this.selected.item.quantity,
        service_unit: this.activeRow.service_unit,
        appointment_name: this.activeRow.patient_appointment,
        doctors_prescription: this.activeRow.name,
        prescription_name: this.activeRow.name,
        route_of_administration: this.activeRow.route_of_administration || '',
        rate: this.selected.item.rate,
      }
      const args = {
        items: [item],
        limit: 0,
        total: parseInt(this.selected.item.rate) * parseInt(this.selected.item.quantity),
        warehouse: this.selectedPharmacy.warehouse,
        is_inpatient: 1
      }
      console.log(args)
      // return
      createDrugSalesOrder(args).then(() => {
        let idx = 0
          this.prescription = this.prescription.filter((item) => {
            return item.name !==this.activeRow.name
          });
          const nextItem = this.prescription[0]
          if (nextItem) {
            this.openModal(nextItem)
          }
        this.$emit('onUpdateList')
      })
    },
    addAMatch(item) {
      let d = new frappe.ui.Dialog({
        title: \`Add Matching Stock Item\`,
        fields: [
          {
            label: "Item",
            fieldname: "item",
            fieldtype: "Link",
            options: "Item",
            filters: { item_group: ["in", this.itemGroups], has_variants: 0 },
          },
          {
            label: "Strength",
            fieldname: "strength",
            fieldtype: "Data",
          },
        ],
        primary_action: (values) => {
          matchStockItemApi({
            ...values,
            drug: item.drug,
            dosage_form: item.dosage_form,
          }).then(() => {
            frappe.show_alert(
              \`\${item.drug} matched successfully with \${values.item}\`,
              5
            );
            const promises = [calculatePrescriptionQuantity({ period: this.activeRow.duration, dosage: this.activeRow.frequency }), getMatchedItems({drug: this.activeRow.drug, strength: this.activeRow.strength, patient: this.activeRow.patient_number, warehouse: this.selectedPharmacy.warehouse, filters: {item: ['!=', '']}})]
        Promise.all(promises).then(([quantity, message]) => {
          this.items = message.map((item) => ({ quantity: quantity || 1, original_quantity: quantity || 1, in_stock: item.stock_balance, rate: 0, ...item}));
        })
            d.hide();
          });
        },
      });
      d.show();
    },
  },
};
</script>
<style scoped>
.root {
  height: 85vh;
  overflow: scroll;
}
.search {
  display: flex;
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
  var InpatientPrescriptions_default = __vue_component__14;

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

  // ../frontend/frontend/public/js/services/patient/patient.js
  var api6 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({
    method,
    args,
    freeze,
    callback: ({message}) => resolve(message),
    error: reject
  }));
  var getPatientInfo2 = (patient_name) => api6({
    method: "clinical.api.patients.get_patient_details",
    args: patient_name
  });

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

  // ../frontend/frontend/public/js/pharmacy/components/TopHeader.vue
  var __vue_script__15 = {
    name: "TopHeader",
    props: {
      servicePoint: {
        type: Object,
        required: true,
        default: {}
      }
    },
    data() {
      return {
        socket: null,
        warehouses: [],
        selectedWarehouse: null,
        servicePoints: null,
        selectedServicePoint: null
      };
    },
    computed: {
      notificationList() {
        return this.$store.getters["notification/getNotificationList"];
      }
    },
    created() {
    },
    mounted() {
      const user = frappe.session.user;
      this.getWarehouses();
      this.getNotifications(user);
    },
    watch: {
      selectedWarehouse() {
        getWarehouseServicePoints({warehouse_name: this.selectedWarehouse.warehouse}).then((result) => {
          if (result && result.length > 0) {
            this.servicePoints = result;
            this.setServicePoint(result[0]);
          } else {
            frappe.msgprint({
              message: `No service Point(s) for this warehouse.`,
              indicator: "red"
            }, 5);
          }
        });
      }
    },
    methods: {
      selectServicePoint() {
        let parent2 = this;
        let d = new frappe.ui.Dialog({
          title: `Select Service Point for ${parent2.selectedWarehouse.warehouse.replace(/^\w/, (c) => c.toUpperCase())}`,
          fields: [{
            label: "Service Point",
            fieldname: "service_point",
            fieldtype: "Select",
            options: parent2.servicePoints.map((w) => w.point_name)
          }],
          primary_action_label: "Select",
          primary_action(values) {
            let servicePoint2 = parent2.servicePoints.find((el) => el.point_name === values.service_point.replace(/^\w/, (c) => c.toUpperCase()));
            parent2.setServicePoint(servicePoint2);
            d.hide();
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            d.hide();
          }
        });
        d.show();
      },
      selectWarehouse() {
        let parent2 = this;
        let d = new frappe.ui.Dialog({
          title: "Select Pharmacy",
          fields: [{
            label: "Pharmacy",
            fieldname: "pharmacy",
            fieldtype: "Select",
            options: parent2.warehouses.map((w) => w.warehouse)
          }],
          primary_action_label: "Select",
          primary_action(values) {
            let warehouse = parent2.warehouses.find((el) => el.warehouse.replace(/^\w/, (c) => c.toUpperCase()) === values.pharmacy.replace(/^\w/, (c) => c.toUpperCase()));
            parent2.setWarehouse(warehouse);
            d.hide();
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            d.hide();
          }
        });
        d.show();
      },
      refresh() {
        if (this.selectedWarehouse && this.selectedServicePoint) {
          this.$emit("warehouseSelected", this.selectedWarehouse);
          this.$emit("selectedServicePoint", this.selectedServicePoint);
        }
      },
      setWarehouse(warehouse) {
        this.selectedWarehouse = warehouse;
        this.$emit("warehouseSelected", warehouse);
      },
      setServicePoint(servicePoint2) {
        this.selectedServicePoint = servicePoint2;
        this.$emit("selectedServicePoint", servicePoint2);
      },
      getWarehouses() {
        getUserWarehouses({
          user_name: frappe.session.user
        }).then((result) => {
          if (result && result.length > 0) {
            this.warehouses = result;
            this.setWarehouse(result[0]);
            this.loading = false;
          } else {
            frappe.msgprint({
              message: `You are not assigned to any warehouse.
Contact Support for help.`,
              indicator: "red"
            }, 5);
          }
        });
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
  var __vue_render__15 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("header", {
        staticClass: "navbar navbar-expand sticky-top",
        staticStyle: {"background-color": "#ffffff"},
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
              _c("a", {attrs: {href: "/app/pharmacy", target: "_blank"}}, [_vm._v("Pharmacy")])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm.selectedWarehouse ? _c("b-link", {
                staticStyle: {"text-transform": "capitalize"},
                attrs: {href: "#"},
                on: {click: _vm.selectWarehouse}
              }, [_vm._v(_vm._s(_vm.selectedWarehouse.warehouse))]) : _vm._e()
            ], 1),
            _vm._v(" "),
            _c("li", [
              _vm.selectedServicePoint ? _c("b-link", {
                staticStyle: {"text-transform": "capitalize"},
                attrs: {href: "#"},
                on: {click: _vm.selectServicePoint}
              }, [_vm._v(_vm._s(_vm.selectedServicePoint.point_name))]) : _vm._e()
            ], 1)
          ]),
          _vm._v(" "),
          _c("div", {staticClass: "row warehouse-dropdown"}),
          _vm._v(" "),
          _c("div", {
            staticClass: "collapse navbar-collapse justify-content-end hidden"
          }, [
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
                          _vm._v("\n                                            Notifications\n                                        ")
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
                              return _vm.clearNotification(notification);
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
                                _vm._v("\n                                          " + _vm._s(notification.message) + "\n                                        ")
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
                                  _vm._v("\n                                            ago")
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
                              _vm._v("\n                                        All your notifications will be listed here\n                                      ")
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
                  _vm._v("\n                            Help\n                            "),
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
                    _vm._v("\n                              Go back to Home page\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {href: "https://discuss.erpnext.com"}
                  }, [
                    _vm._v("\n                              Raise a support ticket\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      href: "https://github.com/frappe/erpnext/issues"
                    }
                  }, [
                    _vm._v("\n                              Report an Issue\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.show_about()"
                    }
                  }, [
                    _vm._v("\n                              About\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.show_shortcuts(event)"
                    }
                  }, [
                    _vm._v("\n                              Step by step tutorial\n                            ")
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
                    _vm._v("\n                              My Profile\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.route_to_user()"
                    }
                  }, [
                    _vm._v("\n                              My Settings\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.setup_session_defaults()"
                    }
                  }, [
                    _vm._v("\n                              Session Defaults\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.clear_cache()"
                    }
                  }, [
                    _vm._v("\n                              Reload\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.view_website()"
                    }
                  }, [
                    _vm._v("\n                              View Website\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return frappe.ui.toolbar.toggle_full_width()"
                    }
                  }, [
                    _vm._v("\n                              Toggle Full Width\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {
                      onclick: "return new frappe.ui.ThemeSwitcher().show()"
                    }
                  }, [
                    _vm._v("\n                              Toggle Theme\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {href: "/app/background_jobs"}
                  }, [
                    _vm._v("\n                              Background Jobs\n                            ")
                  ]),
                  _vm._v(" "),
                  _c("div", {staticClass: "dropdown-divider"}),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "dropdown-item",
                    attrs: {onclick: "return frappe.app.logout()"}
                  }, [
                    _vm._v("\n                              Logout\n                            ")
                  ])
                ])
              ])
            ])
          ])
        ])
      ], 1)
    ]);
  };
  var __vue_staticRenderFns__15 = [];
  __vue_render__15._withStripped = true;
  var __vue_inject_styles__15 = function(inject) {
    if (!inject)
      return;
    inject("data-v-1c0bd094_0", {source: "\n.dropdown {\n    /* width: 200px; */\n    margin-left: 8px;\n    margin-right: 8px;\n    text-transform: capitalize;\n    font-weight: 800;\n}\n.warehouse-dropdown {\n    width: 600px;\n    margin-left: 16px;\n    align-items: center;\n    display: flex;\n    /* justify-content: center; */\n    /* justify-content: space-between; */\n}\n#page-patient-chart {\n    height: 100vh;\n}\n.notification-badge {\n    position: absolute;\n    margin-left: -9px;\n    top: -3px;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/TopHeader.vue"], "names": [], "mappings": ";AA8cA;IACA,kBAAA;IACA,gBAAA;IACA,iBAAA;IACA,0BAAA;IACA,gBAAA;AACA;AAEA;IACA,YAAA;IACA,iBAAA;IACA,mBAAA;IACA,aAAA;IACA,6BAAA;IACA,oCAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;IACA,kBAAA;IACA,iBAAA;IACA,SAAA;AACA", "file": "TopHeader.vue", "sourcesContent": [`<template>
    <div>
        <header class="navbar navbar-expand sticky-top" role="navigation" style="background-color:#ffffff;">
            <b-container>
                <a class="navbar-brand navbar-home pull-left" href="/app" target="_blank">
                          <img
                            class="app-logo"
                            style="width: 24px" 
                            src="/assets/mtrh_dev/images/logo.jpeg"
                          />
                        </a>
                <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
                    <li>
                        <a href="/app/pharmacy" target="_blank">Pharmacy</a>
                    </li>
                    <li>
                        <b-link href="#" v-if="selectedWarehouse" style="text-transform:capitalize;" @click="selectWarehouse">{{selectedWarehouse.warehouse}}</b-link>
                    </li>
                    <li>
                        <b-link href="#" v-if="selectedServicePoint" style="text-transform:capitalize;" @click="selectServicePoint">{{selectedServicePoint.point_name}}</b-link>
                    </li>
                </ul>
                <div class="row warehouse-dropdown">
                    <!-- <div>
                        <b-link href="#" v-if="selectedWarehouse" style="text-transform:capitalize;" >{{selectedWarehouse.warehouse}}</b-link>
                      </div>
                      <div>
                        <b-link href="#" v-if="selectedServicePoint" style="text-transform:capitalize;">{{selectedServicePoint.point_name}}</b-link>
                      </div> -->
                    <!-- <div class="col-md-6" style="text-transform: capitalize;font-weight:800;">
                            <b-dropdown v-if="selectedWarehouse" :text="selectedWarehouse.warehouse" split split-variant="outline-secondary" class=" dropdown fill-width custom-menu-bg" style="width:100%;margin:auto;">
                                <b-dropdown-item v-for="warehouse in warehouses" :key="warehouse.name" @click="setWarehouse(warehouse)" >{{ warehouse.warehouse }}</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="col-md-6" style="text-transform:capitalize;font-weight:800;">
                            <b-dropdown v-if="selectedServicePoint && selectedServicePoint.point_name" 
                                        :text="selectedServicePoint.point_name + ' ' + selectedServicePoint.service_type" 
                                        split split-variant="outline-secondary" 
                                        class="dropdown fill-width custom-menu-bg" 
                                        style="width:100%;margin:auto;">
                                <b-dropdown-item v-for="servicePoint in servicePoints" :key="servicePoint.name" 
                                  @click="setServicePoint(servicePoint)">
                                <span style="text-transform:capitalize;"> {{ servicePoint.point_name }}: {{ servicePoint.service_type }} </span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div> -->
                </div>
                <div class="collapse navbar-collapse justify-content-end hidden">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown dropdown-notifications dropdown-mobile">
                            <a class="nav-link notifications-icon text-muted" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="#" onclick="return false;" title="" data-original-title="Notifications">
                                <div>
                                    <span class="notifications-seen">
                                    <svg class="icon icon-md">
                                      <use href="#icon-notification"></use>
                                    </svg>
                                  </span>
                                    <b-badge v-if="notificationList.length > 0" class="notification-badge" variant="danger">{{ notificationList.length }}</b-badge>
                                </div>
    
                                <span class="notifications-unseen">
                                  <svg class="icon icon-md">
                                    <use href="#icon-notification-with-indicator"></use>
                                  </svg>
                                </span>
                            </a>
                            <div class="dropdown-menu notifications-list dropdown-menu-right" role="menu">
                                <div class="notification-list-header">
                                    <div class="header-items">
                                        <ul class="notification-item-tabs nav nav-tabs" role="tablist">
                                            <li class="notifications-category" id="notifications" data-toggle="collapse">
                                                Notifications
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="header-actions">
                                        <span v-if="notificationList.length > 0" class="mark-all-read pull-right" data-action="mark_all_as_read" title="" data-original-title="Mark all as read" @click="clearNotification()">
                                      <svg class="icon icon-sm" style="">
                                        <use class="" href="#icon-mark-as-read"></use>
                                      </svg>
                                    </span>
                                    </div>
                                </div>
                                <div class="notification-list-body">
                                    <div class="panel-notifications">
                                        <div style="display: block">
                                            <a v-for="notification in notificationList" :key="notification.name" class="recent-item notification-item unread" href="javascript:function() { return false; }" data-name="0a283f5b8f" @click="clearNotification(notification)">
                                                <div class="notification-body">
                                                    <span class="avatar avatar-medium user-avatar" title="Philip Ademba">
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
                                                            <b class="subject-title">{{ notification.title }} :</b
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
                                <a class="dropdown-item" href="/app/user-profile">
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
                                <a
                                  class="dropdown-item"
                                  onclick="return new frappe.ui.ThemeSwitcher().show()"
                                >
                                  Toggle Theme
                                </a>
                                <a class="dropdown-item" href="/app/background_jobs">
                                  Background Jobs
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
import notificationModule from "./../../state/notification/moduleNotification.js";
import {
    getUserWarehouses,
    getWarehouseServicePoints
} from '../../services/pharmacy/prescriptions.js'

export default {
    name: "TopHeader",
    props: {
        servicePoint: {
            type: Object,
            required: true,
            default: {}
        }
    },
    data() {
        return {
            socket: null,
            warehouses: [],
            selectedWarehouse: null,
            servicePoints: null,
            selectedServicePoint: null
        };
    },
    computed: {
        notificationList() {
            return this.$store.getters["notification/getNotificationList"];
        },
    },
    created() {},
    mounted() {
        const user = frappe.session.user;
        this.getWarehouses();
        this.getNotifications(user);
    },
    watch: {
        selectedWarehouse() {
            getWarehouseServicePoints({ warehouse_name: this.selectedWarehouse.warehouse }).then(result => {
                if (result && result.length > 0) {
                    this.servicePoints = result;
                    this.setServicePoint(result[0])
                } else {
                    frappe.msgprint({
                        message: \`No service Point(s) for this warehouse.\`,
                        indicator: 'red'
                    }, 5);
                }
            })
        }
    },
    methods: {
        selectServicePoint() {
           let parent = this;
            let d = new frappe.ui.Dialog({
                title: \`Select Service Point for \${parent.selectedWarehouse.warehouse.replace(/^\\w/, c => c.toUpperCase())}\`,
                fields: [{
                    label: 'Service Point',
                    fieldname: 'service_point',
                    fieldtype: 'Select',
                    options: parent.servicePoints.map(w => w.point_name)
                } ],
                primary_action_label: 'Select',
                primary_action(values) {
                  let servicePoint = parent.servicePoints.find(el => el.point_name === values.service_point.replace(/^\\w/, c => c.toUpperCase()));
                  parent.setServicePoint(servicePoint);
                  d.hide();
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                  d.hide();
                }
            });

            d.show();
        },
        selectWarehouse() {
            let parent = this;
            let d = new frappe.ui.Dialog({
                title: 'Select Pharmacy',
                fields: [{
                    label: 'Pharmacy',
                    fieldname: 'pharmacy',
                    fieldtype: 'Select',
                    options: parent.warehouses.map(w => w.warehouse)
                } ],
                primary_action_label: 'Select',
                primary_action(values) {
                  //let warehouse = parent.warehouses.find(el => el.warehouse === values.pharmacy.replace(/^\\w/, c => c.toUpperCase()));
                  let warehouse = parent.warehouses.find(el => el.warehouse.replace(/^\\w/, c => c.toUpperCase()) === values.pharmacy.replace(/^\\w/, c => c.toUpperCase()));
                  parent.setWarehouse(warehouse);
                  d.hide();
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    d.hide();
                }
            });

            d.show();
        },
        refresh() {
            if (this.selectedWarehouse && this.selectedServicePoint) {
                this.$emit('warehouseSelected', this.selectedWarehouse)
                this.$emit('selectedServicePoint', this.selectedServicePoint)
            }
        },
        setWarehouse(warehouse) {
            this.selectedWarehouse = warehouse;
            this.$emit('warehouseSelected', warehouse)
        },
        setServicePoint(servicePoint) {
            this.selectedServicePoint = servicePoint;
            this.$emit('selectedServicePoint', servicePoint)
        },
        getWarehouses() {
            getUserWarehouses({
                user_name: frappe.session.user
            }).then(result => {
                if (result && result.length > 0) {

                    this.warehouses = result;
                    this.setWarehouse(result[0]);
                    this.loading = false;
                } else {
                    frappe.msgprint({
                        message: \`You are not assigned to any warehouse.\\nContact Support for help.\`,
                        indicator: 'red'
                    }, 5);
                }
            });
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
.dropdown {
    /* width: 200px; */
    margin-left: 8px;
    margin-right: 8px;
    text-transform: capitalize;
    font-weight: 800;
}

.warehouse-dropdown {
    width: 600px;
    margin-left: 16px;
    align-items: center;
    display: flex;
    /* justify-content: center; */
    /* justify-content: space-between; */
}

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
  var __vue_scope_id__15 = void 0;
  var __vue_module_identifier__15 = void 0;
  var __vue_is_functional_template__15 = false;
  function __vue_normalize__15(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div>
        <header class="navbar navbar-expand sticky-top" role="navigation" style="background-color:#ffffff;">
            <b-container>
                <a class="navbar-brand navbar-home pull-left" href="/app" target="_blank">
                          <img
                            class="app-logo"
                            style="width: 24px" 
                            src="/assets/mtrh_dev/images/logo.jpeg"
                          />
                        </a>
                <ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs">
                    <li>
                        <a href="/app/pharmacy" target="_blank">Pharmacy</a>
                    </li>
                    <li>
                        <b-link href="#" v-if="selectedWarehouse" style="text-transform:capitalize;" @click="selectWarehouse">{{selectedWarehouse.warehouse}}</b-link>
                    </li>
                    <li>
                        <b-link href="#" v-if="selectedServicePoint" style="text-transform:capitalize;" @click="selectServicePoint">{{selectedServicePoint.point_name}}</b-link>
                    </li>
                </ul>
                <div class="row warehouse-dropdown">
                    <!-- <div>
                        <b-link href="#" v-if="selectedWarehouse" style="text-transform:capitalize;" >{{selectedWarehouse.warehouse}}</b-link>
                      </div>
                      <div>
                        <b-link href="#" v-if="selectedServicePoint" style="text-transform:capitalize;">{{selectedServicePoint.point_name}}</b-link>
                      </div> -->
                    <!-- <div class="col-md-6" style="text-transform: capitalize;font-weight:800;">
                            <b-dropdown v-if="selectedWarehouse" :text="selectedWarehouse.warehouse" split split-variant="outline-secondary" class=" dropdown fill-width custom-menu-bg" style="width:100%;margin:auto;">
                                <b-dropdown-item v-for="warehouse in warehouses" :key="warehouse.name" @click="setWarehouse(warehouse)" >{{ warehouse.warehouse }}</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="col-md-6" style="text-transform:capitalize;font-weight:800;">
                            <b-dropdown v-if="selectedServicePoint && selectedServicePoint.point_name" 
                                        :text="selectedServicePoint.point_name + ' ' + selectedServicePoint.service_type" 
                                        split split-variant="outline-secondary" 
                                        class="dropdown fill-width custom-menu-bg" 
                                        style="width:100%;margin:auto;">
                                <b-dropdown-item v-for="servicePoint in servicePoints" :key="servicePoint.name" 
                                  @click="setServicePoint(servicePoint)">
                                <span style="text-transform:capitalize;"> {{ servicePoint.point_name }}: {{ servicePoint.service_type }} </span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div> -->
                </div>
                <div class="collapse navbar-collapse justify-content-end hidden">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown dropdown-notifications dropdown-mobile">
                            <a class="nav-link notifications-icon text-muted" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" href="#" onclick="return false;" title="" data-original-title="Notifications">
                                <div>
                                    <span class="notifications-seen">
                                    <svg class="icon icon-md">
                                      <use href="#icon-notification"></use>
                                    </svg>
                                  </span>
                                    <b-badge v-if="notificationList.length > 0" class="notification-badge" variant="danger">{{ notificationList.length }}</b-badge>
                                </div>
    
                                <span class="notifications-unseen">
                                  <svg class="icon icon-md">
                                    <use href="#icon-notification-with-indicator"></use>
                                  </svg>
                                </span>
                            </a>
                            <div class="dropdown-menu notifications-list dropdown-menu-right" role="menu">
                                <div class="notification-list-header">
                                    <div class="header-items">
                                        <ul class="notification-item-tabs nav nav-tabs" role="tablist">
                                            <li class="notifications-category" id="notifications" data-toggle="collapse">
                                                Notifications
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="header-actions">
                                        <span v-if="notificationList.length > 0" class="mark-all-read pull-right" data-action="mark_all_as_read" title="" data-original-title="Mark all as read" @click="clearNotification()">
                                      <svg class="icon icon-sm" style="">
                                        <use class="" href="#icon-mark-as-read"></use>
                                      </svg>
                                    </span>
                                    </div>
                                </div>
                                <div class="notification-list-body">
                                    <div class="panel-notifications">
                                        <div style="display: block">
                                            <a v-for="notification in notificationList" :key="notification.name" class="recent-item notification-item unread" href="javascript:function() { return false; }" data-name="0a283f5b8f" @click="clearNotification(notification)">
                                                <div class="notification-body">
                                                    <span class="avatar avatar-medium user-avatar" title="Philip Ademba">
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
                                                            <b class="subject-title">{{ notification.title }} :</b
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
                                <a class="dropdown-item" href="/app/user-profile">
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
                                <a
                                  class="dropdown-item"
                                  onclick="return new frappe.ui.ThemeSwitcher().show()"
                                >
                                  Toggle Theme
                                </a>
                                <a class="dropdown-item" href="/app/background_jobs">
                                  Background Jobs
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
import notificationModule from "./../../state/notification/moduleNotification.js";
import {
    getUserWarehouses,
    getWarehouseServicePoints
} from '../../services/pharmacy/prescriptions.js'

export default {
    name: "TopHeader",
    props: {
        servicePoint: {
            type: Object,
            required: true,
            default: {}
        }
    },
    data() {
        return {
            socket: null,
            warehouses: [],
            selectedWarehouse: null,
            servicePoints: null,
            selectedServicePoint: null
        };
    },
    computed: {
        notificationList() {
            return this.$store.getters["notification/getNotificationList"];
        },
    },
    created() {},
    mounted() {
        const user = frappe.session.user;
        this.getWarehouses();
        this.getNotifications(user);
    },
    watch: {
        selectedWarehouse() {
            getWarehouseServicePoints({ warehouse_name: this.selectedWarehouse.warehouse }).then(result => {
                if (result && result.length > 0) {
                    this.servicePoints = result;
                    this.setServicePoint(result[0])
                } else {
                    frappe.msgprint({
                        message: \`No service Point(s) for this warehouse.\`,
                        indicator: 'red'
                    }, 5);
                }
            })
        }
    },
    methods: {
        selectServicePoint() {
           let parent = this;
            let d = new frappe.ui.Dialog({
                title: \`Select Service Point for \${parent.selectedWarehouse.warehouse.replace(/^\\w/, c => c.toUpperCase())}\`,
                fields: [{
                    label: 'Service Point',
                    fieldname: 'service_point',
                    fieldtype: 'Select',
                    options: parent.servicePoints.map(w => w.point_name)
                } ],
                primary_action_label: 'Select',
                primary_action(values) {
                  let servicePoint = parent.servicePoints.find(el => el.point_name === values.service_point.replace(/^\\w/, c => c.toUpperCase()));
                  parent.setServicePoint(servicePoint);
                  d.hide();
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                  d.hide();
                }
            });

            d.show();
        },
        selectWarehouse() {
            let parent = this;
            let d = new frappe.ui.Dialog({
                title: 'Select Pharmacy',
                fields: [{
                    label: 'Pharmacy',
                    fieldname: 'pharmacy',
                    fieldtype: 'Select',
                    options: parent.warehouses.map(w => w.warehouse)
                } ],
                primary_action_label: 'Select',
                primary_action(values) {
                  //let warehouse = parent.warehouses.find(el => el.warehouse === values.pharmacy.replace(/^\\w/, c => c.toUpperCase()));
                  let warehouse = parent.warehouses.find(el => el.warehouse.replace(/^\\w/, c => c.toUpperCase()) === values.pharmacy.replace(/^\\w/, c => c.toUpperCase()));
                  parent.setWarehouse(warehouse);
                  d.hide();
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    d.hide();
                }
            });

            d.show();
        },
        refresh() {
            if (this.selectedWarehouse && this.selectedServicePoint) {
                this.$emit('warehouseSelected', this.selectedWarehouse)
                this.$emit('selectedServicePoint', this.selectedServicePoint)
            }
        },
        setWarehouse(warehouse) {
            this.selectedWarehouse = warehouse;
            this.$emit('warehouseSelected', warehouse)
        },
        setServicePoint(servicePoint) {
            this.selectedServicePoint = servicePoint;
            this.$emit('selectedServicePoint', servicePoint)
        },
        getWarehouses() {
            getUserWarehouses({
                user_name: frappe.session.user
            }).then(result => {
                if (result && result.length > 0) {

                    this.warehouses = result;
                    this.setWarehouse(result[0]);
                    this.loading = false;
                } else {
                    frappe.msgprint({
                        message: \`You are not assigned to any warehouse.\\nContact Support for help.\`,
                        indicator: 'red'
                    }, 5);
                }
            });
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
.dropdown {
    /* width: 200px; */
    margin-left: 8px;
    margin-right: 8px;
    text-transform: capitalize;
    font-weight: 800;
}

.warehouse-dropdown {
    width: 600px;
    margin-left: 16px;
    align-items: center;
    display: flex;
    /* justify-content: center; */
    /* justify-content: space-between; */
}

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
  var TopHeader_default = __vue_component__15;

  // ../frontend/frontend/public/js/services/stock/material-request.js
  var api7 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: resolve}));
  var outgoingMateriallRequests = ({
    warehouse_name
  }) => api7({
    method: "clinical.api.warehouse.warehouse.get_outgoing_material_request",
    args: {
      warehouse_name
    }
  }).then(({message}) => message);
  var materiallRequestItems = ({
    request_name
  }) => api7({
    method: "clinical.api.warehouse.warehouse.get_material_request_items",
    args: {
      request_name
    }
  }).then(({message}) => message);
  var itemStockBalance = ({
    item_code
  }) => api7({
    method: "clinical.api.warehouse.warehouse.get_item_stock_quantities",
    args: {
      item_code
    }
  }).then(({message}) => message);
  var createMaterialRequest = ({
    item_code,
    qty,
    warehouse,
    from_warehouse
  }) => api7({
    method: "clinical.api.warehouse.warehouse.create_material_request",
    args: {
      item_code,
      qty,
      warehouse,
      from_warehouse
    }
  }).then(({message}) => message);

  // ../frontend/frontend/public/js/pharmacy/components/core/material-request/OutgoingRequest.vue
  var __vue_script__16 = {
    name: "OutgoingRequest",
    props: {
      warehouseName: {
        type: String,
        default: " ",
        required: true
      }
    },
    data() {
      return {
        fields: ["creation", {"key": "name1", "label": "Name"}, {"key": "set_from_warehouse", "label": "Source Warehouse"}, {"key": "stock_entry", "label": "Stock Entry"}, "status", "action"],
        materialRequests: [],
        medicationItemGroups: [],
        perPage: 10,
        currentPage: 1
      };
    },
    methods: {
      createMaterialRequest() {
        let parent2 = this;
        let dialog = new frappe.ui.Dialog({
          title: `Add Material Request`,
          fields: [
            {
              label: "Drug",
              fieldname: "drug_code",
              fieldtype: "Link",
              options: "Item",
              reqd: true,
              filters: {is_stock_item: 1, disabled: 0, has_variants: "No", item_group: ["IN", parent2.medicationItemGroups]}
            },
            {
              label: "Warehouse",
              fieldname: "warehouse",
              fieldtype: "Link",
              options: "Warehouse",
              reqd: true
            },
            {
              label: "Quantity",
              fieldname: "quantity",
              fieldtype: "Int",
              reqd: 1,
              default: 0
            }
          ],
          primary_action_label: "Submit",
          primary_action(values) {
            dialog.hide();
            createMaterialRequest({
              item_code: values.drug_code,
              qty: values.quantity,
              warehouse: parent2.warehouseName,
              from_warehouse: values.warehouse
            }).then((r) => {
              parent2.getMaterialRequests();
              frappe.show_alert({
                message: `material Request Created`,
                indicator: "green"
              }, 5);
            });
          },
          secondary_action_label: "Cancel",
          secondary_action() {
            dialog.hide();
          }
        });
        const onDrugChange = (event) => {
          const value = dialog.get_value("drug_code");
          if (value) {
            parent2.checkAvailability(value);
          }
        };
        dialog.fields_dict["drug_code"].df.onchange = () => {
          const value = dialog.get_value("drug_code");
          if (value) {
            parent2.checkAvailability(value);
          }
        };
        dialog.show();
      },
      fetchItemGroups() {
        api7({
          method: "clinical.api.prescription.prescription.get_is_prescription_item",
          args: {}
        }).then((res) => {
          this.medicationItemGroups = res;
          this.openModal();
        });
      },
      writeUrl(url) {
      },
      checkAvailability(item) {
        itemStockBalance({item_code: item}).then((stocks) => {
          const bodyElements = document.getElementsByClassName("modal-body");
          const body = bodyElements[bodyElements.length - 1];
          let rptElement = document.getElementById("stock-report-div");
          if (rptElement) {
            rptElement.remove();
          }
          const node = document.createElement("div");
          node.setAttribute("id", "stock-report-div");
          node.innerHTML = `Stock Availability for <b>${item}</b>`;
          node.style.color = "black";
          const ul = document.createElement("ul");
          stocks.forEach((item2) => {
            const li = document.createElement("li");
            li.innerHTML = `<span><b>${item2.warehouse} : ${item2.actual_qty} ${item2.stock_uom}(s)</b></span>`;
            ul.appendChild(li);
          });
          node.appendChild(ul);
          body.appendChild(node);
        });
      },
      viewItems(requestItem) {
        materiallRequestItems({request_name: requestItem.name}).then((r) => {
          console.log(JSON.stringify(r));
          let msgText = "<ul>";
          if (r.length) {
            r.forEach((item) => {
              msgText += `<li> ${item.item_code} ${item.qty} ${item.stock_uom} </li>`;
            });
            msgText += "</ul>";
            frappe.msgprint({title: __((requestItem.name || " Items").toUpperCase()), indicator: "green", message: msgText});
          } else {
            frappe.msgprint({title: __((requestItem.name || " Items").toUpperCase()), indicator: "green", message: "No items to list"});
          }
        });
      },
      getMaterialRequests() {
        outgoingMateriallRequests({warehouse_name: this.warehouseName}).then((r) => {
          this.materialRequests = r;
        });
      },
      getMaterialRequestItems(request) {
        materiallRequestItems({request_name: request.name}).then((r) => {
          materialRequests = r;
        });
      }
    },
    created() {
      this.getMaterialRequests();
    },
    filters: {
      dateFormat(date) {
        let current_datetime = new Date(date);
        return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
      },
      Upper(value) {
        return value.toUpperCase();
      },
      numberWithCommas(x) {
        if (x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return 0;
      }
    }
  };
  var __vue_render__16 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticClass: "container"}, [
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
                attrs: {variant: "primary"},
                on: {click: _vm.fetchItemGroups}
              }, [_vm._v("Create Material Request")])
            ], 1)
          ], 1)
        ])
      ], 1),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          id: "my-table",
          "per-page": _vm.perPage,
          "current-page": _vm.currentPage,
          responsive: "",
          items: _vm.materialRequests,
          fields: _vm.fields
        },
        scopedSlots: _vm._u([
          {
            key: "cell(creation)",
            fn: function(data) {
              return [
                _vm._v("\n                " + _vm._s(_vm._f("dateFormat")(data.item.creation)) + "\n        ")
              ];
            }
          },
          {
            key: "cell(name1)",
            fn: function(data) {
              return [
                _c("span", {
                  domProps: {innerHTML: _vm._s(data.item.name1)}
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" " + _vm._s(data.item.title) + "\n        ")
              ];
            }
          },
          {
            key: "cell(stock_entry)",
            fn: function(data) {
              return [
                _c("span", {
                  domProps: {innerHTML: _vm._s(data.item.stock_entry)}
                })
              ];
            }
          },
          {
            key: "cell(action)",
            fn: function(data) {
              return [
                _c("b-btn", {
                  attrs: {variant: "primary"},
                  on: {
                    click: function($event) {
                      return _vm.viewItems(data.item);
                    }
                  }
                }, [_vm._v("\n                View Items\n            ")])
              ];
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("div", [
        _c("b-pagination", {
          attrs: {
            "total-rows": _vm.materialRequests.length,
            "per-page": _vm.perPage,
            "aria-controls": "my-table"
          },
          model: {
            value: _vm.currentPage,
            callback: function($$v) {
              _vm.currentPage = $$v;
            },
            expression: "currentPage"
          }
        })
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__16 = [];
  __vue_render__16._withStripped = true;
  var __vue_inject_styles__16 = void 0;
  var __vue_scope_id__16 = void 0;
  var __vue_module_identifier__16 = void 0;
  var __vue_is_functional_template__16 = false;
  function __vue_normalize__16(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div class="container">
        <b-row>
            <b-col>
                <div style="display: flex; justify-content: flex-end">
                    <b-button-group style="margin-right:16px;margin-top:4px;">
                        <b-button style="margin-right:2px;" variant="primary" @click="fetchItemGroups">Create Material Request</b-button>
                    </b-button-group>
                </div>
            </b-col>
        </b-row>
        <b-table id="my-table" :per-page="perPage" :current-page="currentPage" responsive :items="materialRequests" :fields="fields">
            <template #cell(creation)="data">
                    {{ data.item.creation | dateFormat }}
            </template>

            <template #cell(name1)="data">
                <span v-html="data.item.name1"></span>
                <br> {{ data.item.title}}
            </template>

            <template #cell(stock_entry)="data">
                <span v-html="data.item.stock_entry"></span>
            </template>

            <template #cell(action)="data">
                <b-btn variant="primary" @click="viewItems(data.item)">
                    View Items
                </b-btn>
            </template>
            </b-table>
                <div>
                    <b-pagination
                    v-model="currentPage"
                    :total-rows="materialRequests.length"
                    :per-page="perPage"
                    aria-controls="my-table"
                    />
                </div>
        <!-- // </b-pagination> -->
    </div>
</template>

<script>
import {
    outgoingMateriallRequests,
    materiallRequestItems,
    api,
    itemStockBalance,
    createMaterialRequest
} from '../../../../services/stock/material-request.js';
export default {
    name: 'OutgoingRequest',
    props: {
        warehouseName: {
            type: String,
            default: " ",
            required: true,
        },
    },
    data() {
        return {
            fields: ['creation', { 'key': 'name1', 'label': 'Name' }, { 'key': 'set_from_warehouse', 'label': 'Source Warehouse' }, { 'key': 'stock_entry', 'label': 'Stock Entry' }, 'status', 'action'],
            materialRequests: [],
            medicationItemGroups: [],
            perPage: 10,
            currentPage: 1,
        }
    },
    methods: {
        createMaterialRequest() {
            let parent = this;
            let dialog = new frappe.ui.Dialog({
                title: \`Add Material Request\`,
                fields: [{
                        label: 'Drug',
                        fieldname: 'drug_code',
                        fieldtype: 'Link',
                        options: 'Item',
                        reqd: true,
                        filters: { is_stock_item: 1, disabled: 0, has_variants: 'No', item_group: ['IN', parent.medicationItemGroups] },
                    },
                    {
                        label: 'Warehouse',
                        fieldname: 'warehouse',
                        fieldtype: 'Link',
                        options: 'Warehouse',
                        reqd: true,
                    },
                    {
                        label: 'Quantity',
                        fieldname: 'quantity',
                        fieldtype: 'Int',
                        reqd: 1,
                        default: 0
                    }
                ],
                primary_action_label: 'Submit',
                primary_action(values) {
                    dialog.hide();
                    createMaterialRequest({
                        item_code: values.drug_code,
                        qty: values.quantity,
                        warehouse: parent.warehouseName,
                        from_warehouse: values.warehouse
                    }).then(r => {
                        parent.getMaterialRequests();
                        frappe.show_alert({
                            message: \`material Request Created\`,
                            indicator: 'green'
                        }, 5);
                    })
                },
                secondary_action_label: 'Cancel',
                secondary_action() {
                    dialog.hide();
                }
            });
            const onDrugChange = (event) => {
                const value = dialog.get_value("drug_code");
                if (value) {
                    parent.checkAvailability(value);
                }
            };
            dialog.fields_dict["drug_code"].df.onchange = () => {
                const value = dialog.get_value("drug_code");
                if (value) {
                    parent.checkAvailability(value);
                }
            };
            dialog.show();
        },
        fetchItemGroups() {
            api({
                method:'clinical.api.prescription.prescription.get_is_prescription_item',
                args: {
                    // doctype: 'Item Group',
                    // async: false,
                    // filters: { is_prescription_item: 1 }
                },

            }).then(res => {
                this.medicationItemGroups = res; 
                this.openModal();
            })
        },
        writeUrl(url) {},
        checkAvailability(item) {
            itemStockBalance({ item_code: item }).then(stocks => {
                const bodyElements = document.getElementsByClassName("modal-body");
                const body = bodyElements[bodyElements.length - 1];
                let rptElement = document.getElementById("stock-report-div");
                if (rptElement) {
                    rptElement.remove();
                }
                const node = document.createElement("div");
                node.setAttribute("id", "stock-report-div");
                // node.innerHTML = \`Insufficient stocks in the hospital for <strong>\${item}</strong>. Consider alternatives listed below or await procurement.\`;
                node.innerHTML = \`Stock Availability for <b>\${item}</b>\`;
                node.style.color = "black";

                const ul = document.createElement("ul");
                stocks.forEach((item) => {
                    const li = document.createElement("li");
                    li.innerHTML = \`<span><b>\${item.warehouse} : \${item.actual_qty} \${item.stock_uom}(s)</b></span>\`;
                    ul.appendChild(li);
                });
                node.appendChild(ul);

                body.appendChild(node);
            });
        },
        viewItems(requestItem) {
            materiallRequestItems({ request_name: requestItem.name }).then(r => {
                console.log(JSON.stringify(r))
                let msgText = '<ul>';
                if (r.length) {
                    r.forEach(item => {
                        msgText += \`<li> \${item.item_code} \${item.qty} \${item.stock_uom} </li>\`;
                    });
                    msgText += '</ul>';
                    frappe.msgprint({ title: __((requestItem.name || " Items").toUpperCase()), indicator: "green", message: msgText })
                } else {
                    frappe.msgprint({ title: __((requestItem.name || " Items").toUpperCase()), indicator: "green", message: "No items to list" })
                }
            })
        },
        getMaterialRequests() {
            outgoingMateriallRequests({ warehouse_name: this.warehouseName }).then(r => {
                this.materialRequests = r;
            })
        },
        getMaterialRequestItems(request) {
            materiallRequestItems({ request_name: request.name }).then(r => {
                materialRequests = r;
            })
        },
    },
    created() {
        this.getMaterialRequests();
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
</script>`;
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
  var __vue_component__16 = /* @__PURE__ */ __vue_normalize__16({render: __vue_render__16, staticRenderFns: __vue_staticRenderFns__16}, __vue_inject_styles__16, __vue_script__16, __vue_scope_id__16, __vue_is_functional_template__16, __vue_module_identifier__16, false, void 0, void 0, void 0);
  var OutgoingRequest_default = __vue_component__16;

  // ../frontend/frontend/public/js/pharmacy/components/core/container/PendingMedicationOrders.vue
  var import_moment2 = __toModule(require_moment());
  var __vue_script__17 = {
    name: "PendingMedicationOrders",
    props: {
      warehouse: {type: String}
    },
    data() {
      return {
        items: [],
        fields: [
          "drug_name",
          "service_unit",
          "patient_name",
          "date",
          "time",
          "frequency",
          "instructions",
          {key: "action", label: " "}
        ],
        confirmItems: [],
        dispatchedIncomplete: [],
        service_unit: void 0,
        dispatchedToday: [],
        filters: {},
        dispatchedTodayFields: [
          "drug_name",
          "service_unit",
          "patient_name",
          "date",
          "time",
          "frequency",
          "instructions"
        ]
      };
    },
    mounted() {
      this.getList();
      this.makeFields();
      this.getDispatchedToday();
      this.computeitems();
    },
    watch: {
      items() {
        this.computeitems();
      },
      dispatchedIncomplete() {
        this.computeitems();
      }
    },
    methods: {
      getDispatchedToday() {
        const today = (0, import_moment2.default)().format("YYYY-MM-DD");
        getMedicationOrders({
          dispatch_time: today,
          is_dispatched: 1
        }).then((data) => {
          this.dispatchedToday = data;
        });
      },
      computeitems() {
        const computer = (items2) => {
          const output = {};
          items2.forEach((item) => {
            output[item.drug_name] = (output[item.drug_name] || 0) + (item.dosage || 1);
          });
          return output;
        };
        const fullQuantities = computer(this.items);
        const dispatchedIncomplete = computer(this.dispatchedIncomplete);
        const items = Object.keys(fullQuantities).map((key) => ({
          drug: key,
          quantity: fullQuantities[key].toFixed(2),
          incomplete: (dispatchedIncomplete[key] || 0).toFixed(2)
        }));
        const drugs = Object.keys(fullQuantities);
        calculateStockBalance({drugs, warehouse: this.warehouse}).then((res) => {
          this.confirmItems = items.map((item) => ({
            drug: item.drug,
            quantity: item.quantity,
            incomplete: res[item.drug]
          }));
        });
      },
      makeFields() {
        const parent2 = this;
        const patient_field = frappe.ui.form.make_control({
          df: {
            label: "Patient",
            fieldtype: "Link",
            fieldname: "patient",
            options: "Patient",
            placeholder: __(`Patient`),
            onchange: function() {
              if (this.value) {
                console.log(this.value);
                const today = (0, import_moment2.default)().format("YYYY-MM-DD");
                const tomorrow = (0, import_moment2.default)().add(1, "days").format("YYYY-MM-DD");
                const to_time = (0, import_moment2.default)().format("HH:mm");
                getMedicationOrders({
                  from_date: today,
                  to_date: tomorrow,
                  is_dispatched: 0,
                  patient: this.value,
                  to_time
                }).then((data) => {
                  parent2.items = data;
                });
                getMedicationOrders({
                  patient: this.value,
                  is_dispatched: 1,
                  is_completed: 0
                }).then((data) => {
                  parent2.dispatchedIncomplete = data;
                });
              } else {
                parent2.getList();
              }
            }
          },
          parent: this.$refs["patient-search"],
          render_input: true
        });
        const service_unit = frappe.ui.form.make_control({
          df: {
            label: "Ward",
            fieldtype: "Link",
            fieldname: "service_unit",
            options: "Healthcare Service Unit",
            placeholder: __(`Healthcare Service Unit`),
            filters: {
              name: ["NOT LIKE", "%bed%"]
            },
            onchange: function() {
              parent2.service_unit = this.value;
              if (this.value) {
                console.log(this.value);
                const today = (0, import_moment2.default)().format("YYYY-MM-DD");
                const tomorrow = (0, import_moment2.default)().add(1, "days").format("YYYY-MM-DD");
                const to_time = (0, import_moment2.default)().format("HH:mm");
                getMedicationOrders({
                  from_date: today,
                  to_date: tomorrow,
                  is_dispatched: 0,
                  service_unit: this.value,
                  to_time
                }).then((data) => {
                  parent2.items = data;
                });
                getMedicationOrders({
                  service_unit: this.value,
                  is_dispatched: 1,
                  is_completed: 0
                }).then((data) => {
                  parent2.dispatchedIncomplete = data;
                });
              } else {
                parent2.getList();
              }
            }
          },
          parent: this.$refs["service-unit"],
          render_input: true
        });
      },
      openModal() {
        this.$refs.viewPrescription.show();
      },
      getList() {
        const today = (0, import_moment2.default)().format("YYYY-MM-DD");
        const tomorrow = (0, import_moment2.default)().add(1, "days").format("YYYY-MM-DD");
        const to_time = (0, import_moment2.default)().format("HH:mm");
        getMedicationOrders({
          from_date: today,
          to_date: tomorrow,
          is_dispatched: 0,
          to_time
        }).then((data) => {
          this.items = data;
          this.getDispatchedToday();
        });
        getMedicationOrders({
          service_unit: this.value,
          is_dispatched: 1,
          is_completed: 0
        }).then((data) => {
          console.log("******", data);
          this.dispatchedIncomplete = data;
          this.computeitems();
        });
      },
      dispatch(item) {
        dispatchMedicationOrder(item.name).then(() => {
          this.getList();
        });
      },
      primaryAction() {
        const items = this.items.map((item) => item.name);
        const service_unit = this.service_unit;
        const dispatch_summary = this.confirmItems.map((it) => ({drug: it.drug, expected_quantity: it.quantity, quantity: Math.ceil(it.quantity)}));
        dispatchMedicationOrder({items, service_unit, dispatch_summary, warehouse: this.warehouse}).then(() => this.getList());
      },
      dispatchAll() {
        this.openModal();
      }
    }
  };
  var __vue_render__17 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {staticStyle: {height: "85vh", "overflow-y": "scroll"}}, [
      _c("div", {staticStyle: {display: "flex"}}, [
        _c("div", {
          ref: "service-unit",
          staticClass: "ref-field-input",
          staticStyle: {
            width: "400px",
            display: "flex",
            "justify-content": "space-between"
          }
        }),
        _vm._v(" "),
        _c("div", {
          ref: "patient-search",
          staticClass: "ref-field-input",
          staticStyle: {
            width: "400px",
            display: "flex",
            "justify-content": "space-between"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", {staticStyle: {display: "flex", "justify-content": "flex-end"}}, [
        _c("b-button", {
          staticClass: "sm",
          attrs: {variant: "primary"},
          on: {
            click: function($event) {
              return _vm.dispatchAll();
            }
          }
        }, [_vm._v("\n      Dispatch All")])
      ], 1),
      _vm._v(" "),
      _c("b-modal", {
        ref: "viewPrescription",
        attrs: {
          id: "modal-prevent-closing",
          title: "Dispatch Summary",
          size: "lg",
          "ok-title": "Create a Stock Transfer"
        },
        on: {
          ok: function($event) {
            return _vm.primaryAction();
          }
        }
      }, [
        _c("b-table", {
          attrs: {
            items: _vm.confirmItems,
            fields: [
              "drug",
              {
                key: "quantity",
                label: "Quantity",
                formatter: function(value, key, item) {
                  return Math.ceil(item.quantity);
                }
              },
              {
                key: "incomplete",
                label: "In Stock",
                formatter: function(value, key, item) {
                  return item.incomplete.toFixed(2);
                }
              }
            ]
          }
        })
      ], 1),
      _vm._v(" "),
      _c("b-table", {
        attrs: {bordered: "", fields: _vm.fields, items: _vm.items}
      }),
      _vm._v(" "),
      _c("h4", [_vm._v("Dispatched today")]),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          bordered: "",
          fields: _vm.dispatchedTodayFields,
          items: _vm.dispatchedToday
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__17 = [];
  __vue_render__17._withStripped = true;
  var __vue_inject_styles__17 = function(inject) {
    if (!inject)
      return;
    inject("data-v-3e49393c_0", {source: "\n.search[data-v-3e49393c] {\n  display: flex;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/container/PendingMedicationOrders.vue"], "names": [], "mappings": ";AAmRA;EACA,aAAA;AACA", "file": "PendingMedicationOrders.vue", "sourcesContent": [`<template>
  <div style="height: 85vh; overflow-y: scroll">
    <div style="display: flex" class="">
      <div
        style="width: 400px; display: flex; justify-content: space-between"
        ref="service-unit"
        class="ref-field-input"
      />
      <div
        style="width: 400px; display: flex; justify-content: space-between"
        ref="patient-search"
        class="ref-field-input"
      />
    </div>
    <!-- <div display="flex">
        <div style="width: 400px;" ref="patient-search" class="ref-field-input" />
        <div style="width: 400px;" ref="service-unit" class="ref-field-input" />
        </div> -->
    <div style="display: flex; justify-content: flex-end">
      <b-button class="sm" @click="dispatchAll()" variant="primary">
        Dispatch All</b-button
      >
    </div>
    <b-modal
      id="modal-prevent-closing"
      ref="viewPrescription"
      title="Dispatch Summary"
      size="lg"
      ok-title="Create a Stock Transfer"
      @ok="primaryAction()"
    >
      <b-table
        :items="confirmItems"
        :fields="['drug', {key: 'quantity', label: 'Quantity', formatter: (value, key, item) => Math.ceil(item.quantity)}, { key: 'incomplete', label: 'In Stock', formatter: (value, key, item) => item.incomplete.toFixed(2)},]"
      >
      </b-table>
    </b-modal>
    <b-table bordered :fields="fields" :items="items">
    </b-table>
    <h4>Dispatched today</h4>
    <b-table bordered :fields="dispatchedTodayFields" :items="dispatchedToday">
    </b-table>
  </div>
</template>
<script>
import moment from "moment";
import {
  getMedicationOrders,
  dispatchMedicationOrder,
  calculateStockBalance
} from "../../../../services/pharmacy/prescriptions.js";
export default {
  name: "PendingMedicationOrders",
  props: {
    warehouse: { type: String },
  },
  data() {
    return {
      items: [],
      fields: [
        "drug_name",
        "service_unit",
        "patient_name",
        "date",
        "time",
        "frequency",
        "instructions",
        { key: "action", label: " " },
      ],
      confirmItems: [],
      dispatchedIncomplete: [],
      service_unit: undefined,
      dispatchedToday: [],
      filters: {},
      dispatchedTodayFields :["drug_name",
        "service_unit",
        "patient_name",
        "date",
        "time",
        "frequency",
        "instructions",]
    };
  },
  mounted() {
    this.getList();
    this.makeFields();
    this.getDispatchedToday();
    this.computeitems();
  },
  watch: {
    items() {
      this.computeitems();
    },
    dispatchedIncomplete() {
      this.computeitems();
    },
  },
  methods: {
      getDispatchedToday(){
          const today = moment().format("YYYY-MM-DD");
          getMedicationOrders({
              dispatch_time: today,
        is_dispatched: 1,
      }).then((data) => {
          this.dispatchedToday = data
      })
      },
    computeitems() {
      // const output = this.items.reduce((a, b) =>({
      //     ...a,
      //     [a.drug_name]: (a[b.drug_name] || 0) + 1
      // }), {});
      const computer = (items) => {
        const output = {};
        items.forEach((item) => {
          output[item.drug_name] = (output[item.drug_name] || 0) + (item.dosage || 1);
        });
        return output;
        // return Object.keys(output).map((key) => ({ drug: key, quantity: output[key] }))
      };

      const fullQuantities = computer(this.items);
      
      const dispatchedIncomplete = computer(this.dispatchedIncomplete);
    
      
      const items = Object.keys(fullQuantities).map((key) => ({
        drug: key,
        quantity: (fullQuantities[key]).toFixed(2),
        incomplete: (dispatchedIncomplete[key] || 0).toFixed(2),
      }));

      const drugs =  Object.keys(fullQuantities)
      
      calculateStockBalance({ drugs, warehouse: this.warehouse}).then((res) => {
         this.confirmItems = items.map((item) => ({
        drug: item.drug,
        quantity: item.quantity,
        incomplete: res[item.drug],
      }));
      })
      
      // this.confirmItems = items;
    },
    makeFields() {
      const parent = this;
      const patient_field = frappe.ui.form.make_control({
        df: {
          label: "Patient",
          fieldtype: "Link",
          fieldname: "patient",
          options: "Patient",
          placeholder: __(\`Patient\`),

          onchange: function () {
            if (this.value) {
              console.log(this.value);
              const today = moment().format("YYYY-MM-DD");
              const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
              const to_time = moment().format("HH:mm");
              getMedicationOrders({
                from_date: today,
                to_date: tomorrow,
                is_dispatched: 0,
                patient: this.value,
                to_time,
              }).then((data) => {
                parent.items = data;
              });
              getMedicationOrders({
                patient: this.value,
                is_dispatched: 1,
                is_completed: 0,
              }).then((data) => {
                parent.dispatchedIncomplete = data;
              });
            } else {
              parent.getList();
            }
          },
        },
        parent: this.$refs["patient-search"],
        render_input: true,
      });
      const service_unit = frappe.ui.form.make_control({
        df: {
          label: "Ward",
          fieldtype: "Link",
          fieldname: "service_unit",
          options: "Healthcare Service Unit",
          placeholder: __(\`Healthcare Service Unit\`),
          filters: {
            name: ["NOT LIKE", "%bed%"],
          },
          onchange: function () {
            parent.service_unit = this.value;
            if (this.value) {
              console.log(this.value);
              const today = moment().format("YYYY-MM-DD");
              const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
              const to_time = moment().format("HH:mm");
              getMedicationOrders({
                from_date: today,
                to_date: tomorrow,
                is_dispatched: 0,
                service_unit: this.value,
                to_time,
              }).then((data) => {
                parent.items = data;
              });
              getMedicationOrders({
                service_unit: this.value,
                is_dispatched: 1,
                is_completed: 0,
              }).then((data) => {
                parent.dispatchedIncomplete = data;
              });
            } else {
              parent.getList();
            }
          },
        },
        parent: this.$refs["service-unit"],
        render_input: true,
      });
    },
    openModal() {
      this.$refs.viewPrescription.show();
    },
    getList() {
      const today = moment().format("YYYY-MM-DD");
      const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
      const to_time = moment().format("HH:mm");
      getMedicationOrders({
        from_date: today,
        to_date: tomorrow,
        is_dispatched: 0,
        to_time,
      }).then((data) => {
        this.items = data;
        this.getDispatchedToday();
      });
      getMedicationOrders({
        service_unit: this.value,
        is_dispatched: 1,
        is_completed: 0,
      }).then((data) => {
          console.log('******',data)
        this.dispatchedIncomplete = data;
        this.computeitems();
      });
    },
    dispatch(item) {
      dispatchMedicationOrder(item.name).then(() => {
        this.getList();
      });
    },
    primaryAction() {

      const items = this.items.map((item) =>item.name);
      const service_unit = this.service_unit;
      const dispatch_summary = this.confirmItems.map((it) => ({ drug: it.drug, expected_quantity: it.quantity,quantity: Math.ceil(it.quantity) }))
      dispatchMedicationOrder({ items, service_unit, dispatch_summary, warehouse: this.warehouse })
      .then(() => this.getList())
    },
    dispatchAll() {
      this.openModal();
    },
  },
};
// const today = moment().format('YYYY-MM-DD')
//     const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
//     getMedicationOrders({ from_date: today, to_date: tomorrow}).then(console.log)
</script>
<style scoped>
.search {
  display: flex;
}
</style>`]}, media: void 0});
  };
  var __vue_scope_id__17 = "data-v-3e49393c";
  var __vue_module_identifier__17 = void 0;
  var __vue_is_functional_template__17 = false;
  function __vue_normalize__17(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
  <div style="height: 85vh; overflow-y: scroll">
    <div style="display: flex" class="">
      <div
        style="width: 400px; display: flex; justify-content: space-between"
        ref="service-unit"
        class="ref-field-input"
      />
      <div
        style="width: 400px; display: flex; justify-content: space-between"
        ref="patient-search"
        class="ref-field-input"
      />
    </div>
    <!-- <div display="flex">
        <div style="width: 400px;" ref="patient-search" class="ref-field-input" />
        <div style="width: 400px;" ref="service-unit" class="ref-field-input" />
        </div> -->
    <div style="display: flex; justify-content: flex-end">
      <b-button class="sm" @click="dispatchAll()" variant="primary">
        Dispatch All</b-button
      >
    </div>
    <b-modal
      id="modal-prevent-closing"
      ref="viewPrescription"
      title="Dispatch Summary"
      size="lg"
      ok-title="Create a Stock Transfer"
      @ok="primaryAction()"
    >
      <b-table
        :items="confirmItems"
        :fields="['drug', {key: 'quantity', label: 'Quantity', formatter: (value, key, item) => Math.ceil(item.quantity)}, { key: 'incomplete', label: 'In Stock', formatter: (value, key, item) => item.incomplete.toFixed(2)},]"
      >
      </b-table>
    </b-modal>
    <b-table bordered :fields="fields" :items="items">
    </b-table>
    <h4>Dispatched today</h4>
    <b-table bordered :fields="dispatchedTodayFields" :items="dispatchedToday">
    </b-table>
  </div>
</template>
<script>
import moment from "moment";
import {
  getMedicationOrders,
  dispatchMedicationOrder,
  calculateStockBalance
} from "../../../../services/pharmacy/prescriptions.js";
export default {
  name: "PendingMedicationOrders",
  props: {
    warehouse: { type: String },
  },
  data() {
    return {
      items: [],
      fields: [
        "drug_name",
        "service_unit",
        "patient_name",
        "date",
        "time",
        "frequency",
        "instructions",
        { key: "action", label: " " },
      ],
      confirmItems: [],
      dispatchedIncomplete: [],
      service_unit: undefined,
      dispatchedToday: [],
      filters: {},
      dispatchedTodayFields :["drug_name",
        "service_unit",
        "patient_name",
        "date",
        "time",
        "frequency",
        "instructions",]
    };
  },
  mounted() {
    this.getList();
    this.makeFields();
    this.getDispatchedToday();
    this.computeitems();
  },
  watch: {
    items() {
      this.computeitems();
    },
    dispatchedIncomplete() {
      this.computeitems();
    },
  },
  methods: {
      getDispatchedToday(){
          const today = moment().format("YYYY-MM-DD");
          getMedicationOrders({
              dispatch_time: today,
        is_dispatched: 1,
      }).then((data) => {
          this.dispatchedToday = data
      })
      },
    computeitems() {
      // const output = this.items.reduce((a, b) =>({
      //     ...a,
      //     [a.drug_name]: (a[b.drug_name] || 0) + 1
      // }), {});
      const computer = (items) => {
        const output = {};
        items.forEach((item) => {
          output[item.drug_name] = (output[item.drug_name] || 0) + (item.dosage || 1);
        });
        return output;
        // return Object.keys(output).map((key) => ({ drug: key, quantity: output[key] }))
      };

      const fullQuantities = computer(this.items);
      
      const dispatchedIncomplete = computer(this.dispatchedIncomplete);
    
      
      const items = Object.keys(fullQuantities).map((key) => ({
        drug: key,
        quantity: (fullQuantities[key]).toFixed(2),
        incomplete: (dispatchedIncomplete[key] || 0).toFixed(2),
      }));

      const drugs =  Object.keys(fullQuantities)
      
      calculateStockBalance({ drugs, warehouse: this.warehouse}).then((res) => {
         this.confirmItems = items.map((item) => ({
        drug: item.drug,
        quantity: item.quantity,
        incomplete: res[item.drug],
      }));
      })
      
      // this.confirmItems = items;
    },
    makeFields() {
      const parent = this;
      const patient_field = frappe.ui.form.make_control({
        df: {
          label: "Patient",
          fieldtype: "Link",
          fieldname: "patient",
          options: "Patient",
          placeholder: __(\`Patient\`),

          onchange: function () {
            if (this.value) {
              console.log(this.value);
              const today = moment().format("YYYY-MM-DD");
              const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
              const to_time = moment().format("HH:mm");
              getMedicationOrders({
                from_date: today,
                to_date: tomorrow,
                is_dispatched: 0,
                patient: this.value,
                to_time,
              }).then((data) => {
                parent.items = data;
              });
              getMedicationOrders({
                patient: this.value,
                is_dispatched: 1,
                is_completed: 0,
              }).then((data) => {
                parent.dispatchedIncomplete = data;
              });
            } else {
              parent.getList();
            }
          },
        },
        parent: this.$refs["patient-search"],
        render_input: true,
      });
      const service_unit = frappe.ui.form.make_control({
        df: {
          label: "Ward",
          fieldtype: "Link",
          fieldname: "service_unit",
          options: "Healthcare Service Unit",
          placeholder: __(\`Healthcare Service Unit\`),
          filters: {
            name: ["NOT LIKE", "%bed%"],
          },
          onchange: function () {
            parent.service_unit = this.value;
            if (this.value) {
              console.log(this.value);
              const today = moment().format("YYYY-MM-DD");
              const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
              const to_time = moment().format("HH:mm");
              getMedicationOrders({
                from_date: today,
                to_date: tomorrow,
                is_dispatched: 0,
                service_unit: this.value,
                to_time,
              }).then((data) => {
                parent.items = data;
              });
              getMedicationOrders({
                service_unit: this.value,
                is_dispatched: 1,
                is_completed: 0,
              }).then((data) => {
                parent.dispatchedIncomplete = data;
              });
            } else {
              parent.getList();
            }
          },
        },
        parent: this.$refs["service-unit"],
        render_input: true,
      });
    },
    openModal() {
      this.$refs.viewPrescription.show();
    },
    getList() {
      const today = moment().format("YYYY-MM-DD");
      const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
      const to_time = moment().format("HH:mm");
      getMedicationOrders({
        from_date: today,
        to_date: tomorrow,
        is_dispatched: 0,
        to_time,
      }).then((data) => {
        this.items = data;
        this.getDispatchedToday();
      });
      getMedicationOrders({
        service_unit: this.value,
        is_dispatched: 1,
        is_completed: 0,
      }).then((data) => {
          console.log('******',data)
        this.dispatchedIncomplete = data;
        this.computeitems();
      });
    },
    dispatch(item) {
      dispatchMedicationOrder(item.name).then(() => {
        this.getList();
      });
    },
    primaryAction() {

      const items = this.items.map((item) =>item.name);
      const service_unit = this.service_unit;
      const dispatch_summary = this.confirmItems.map((it) => ({ drug: it.drug, expected_quantity: it.quantity,quantity: Math.ceil(it.quantity) }))
      dispatchMedicationOrder({ items, service_unit, dispatch_summary, warehouse: this.warehouse })
      .then(() => this.getList())
    },
    dispatchAll() {
      this.openModal();
    },
  },
};
// const today = moment().format('YYYY-MM-DD')
//     const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
//     getMedicationOrders({ from_date: today, to_date: tomorrow}).then(console.log)
</script>
<style scoped>
.search {
  display: flex;
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
  var __vue_component__17 = /* @__PURE__ */ __vue_normalize__17({render: __vue_render__17, staticRenderFns: __vue_staticRenderFns__17}, __vue_inject_styles__17, __vue_script__17, __vue_scope_id__17, __vue_is_functional_template__17, __vue_module_identifier__17, false, __vue_create_injector__10, void 0, void 0);
  var PendingMedicationOrders_default = __vue_component__17;

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

  // ../frontend/frontend/public/js/pharmacy/components/core/Main.vue
  var __vue_script__18 = {
    name: "Main",
    name: "Main",
    components: {
      Sidebar: Sidebar_default,
      Container: Container_default,
      TopHeader: TopHeader_default,
      OutgoingRequest: OutgoingRequest_default,
      InpatientPrescriptions: InpatientPrescriptions_default,
      PendingMedicationOrders: PendingMedicationOrders_default
    },
    data() {
      return {
        prescription: {},
        socket: null,
        warehouse: null,
        tab: 0,
        currentServicePoint: {}
      };
    },
    computed: {
      socketData() {
        return this.$store.getters["socket/getSocketData"];
      }
    },
    watch: {
      prescription() {
        this.$refs.prescriptionContainer.itemUnitsChanged();
      },
      tab() {
        this.selectedServicePoint(this.currentServicePoint);
      }
    },
    methods: {
      selectedServicePoint(sp) {
        this.currentServicePoint = sp;
        this.$refs.sidebar.onSelectedServicePoint(sp);
      },
      warehouseSelected(wh) {
        this.warehouse = wh;
      },
      sidebarQueueStateUpdated(queueState) {
        this.prescription = queueState;
        this.$refs.prescriptionContainer.getPrescriptionDrugs(queueState.patient, queueState.appointment);
      },
      prescriptionClicked(prescription) {
        this.prescription = prescription;
        if (prescription.patient && prescription.appointment) {
          this.$refs.prescriptionContainer.getPrescriptionDrugs(prescription.patient, prescription.appointment);
        }
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
    },
    mounted() {
      $("body").css({"overflow-y": "hidden"});
      $("body").css({"overflow-x": "hidden"});
      const host = this.get_host(3e3);
      const socket = io.connect();
      this.socket = socket;
      socket.on("connect", () => {
        console.log("Pharmacy main connected");
      });
    },
    created() {
      this.$store.registerModule("socket", moduleSocket_default);
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
      }
    }
  };
  var __vue_render__18 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", {
      staticClass: "main page-wrapper",
      staticStyle: {"background-color": "#ffffff"}
    }, [
      _c("b-row", [
        _c("b-col", [
          _c("TopHeader", {
            staticStyle: {width: "100%"},
            on: {
              warehouseSelected: _vm.warehouseSelected,
              selectedServicePoint: _vm.selectedServicePoint
            }
          })
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("b-tabs", {
        staticClass: "custom-tabs",
        attrs: {fill: "", "content-class": "note-tabs-content"},
        model: {
          value: _vm.tab,
          callback: function($$v) {
            _vm.tab = $$v;
          },
          expression: "tab"
        }
      }, [
        _c("b-tab", {attrs: {title: "Outpatient Prescriptions"}}, [
          _c("b-row", [
            _c("b-col", {attrs: {md: "3"}}, [
              _c("div", {staticClass: "sidebar"}, [
                _vm.tab === 0 ? _c("Sidebar", {
                  ref: "sidebar",
                  attrs: {
                    currentServicePoint: _vm.currentServicePoint
                  },
                  on: {
                    prescriptionClicked: _vm.prescriptionClicked,
                    queueStateUpdated: _vm.sidebarQueueStateUpdated
                  }
                }) : _vm._e()
              ], 1)
            ]),
            _vm._v(" "),
            _c("b-col", {attrs: {md: "9"}}, [
              _c("div", {staticClass: "content"}, [
                _vm.tab === 0 ? _c("Container", {
                  ref: "prescriptionContainer",
                  attrs: {
                    selectedPharmacy: _vm.warehouse,
                    patientName: _vm.prescription.patient,
                    encounterName: _vm.prescription.encounter,
                    queueState: _vm.prescription
                  }
                }) : _vm._e()
              ], 1)
            ])
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Inpatient Prescriptions"}}, [
          _c("b-row", {
            staticStyle: {display: "flex", "justify-content": "center"}
          }, [
            _c("b-col", {attrs: {md: "11"}}, [
              _vm.tab === 1 ? _c("inpatient-prescriptions", {
                attrs: {selectedPharmacy: _vm.warehouse}
              }) : _vm._e()
            ], 1)
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Pending Medication Orders"}}, [
          _c("b-row", {
            staticStyle: {display: "flex", "justify-content": "center"}
          }, [
            _c("b-col", {attrs: {md: "11"}}, [
              _vm.tab === 2 ? _c("pending-medication-orders", {
                attrs: {warehouse: _vm.warehouse.warehouse}
              }) : _vm._e()
            ], 1)
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("b-tab", {attrs: {title: "Material Requests"}}, [
          _c("b-row", [
            _c("b-col", [
              _vm.tab === 3 && _vm.warehouse ? _c("OutgoingRequest", {
                attrs: {warehouseName: _vm.warehouse.warehouse}
              }) : _vm._e()
            ], 1)
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__18 = [];
  __vue_render__18._withStripped = true;
  var __vue_inject_styles__18 = function(inject) {
    if (!inject)
      return;
    inject("data-v-7cd9370b_0", {source: "\n.sidebar[data-v-7cd9370b] {\n    margin: 0;\n    padding: 0;\n    /* width: 400px; */\n    height: calc(100vh - 0.01rem);\n}\n\n/* Page content. The value of the margin-left property should match the value of the sidebar's width property */\ncontent[data-v-7cd9370b] {\n    margin-left: 10px;\n    margin-right: 10px;\n    padding: 1px 4px;\n    max-height: calc(100vh - 0.01rem);\n    margin-top: 0px;\n}\n\n/* On screens that are less than 700px wide, make the sidebar into a topbar */\n@media screen and (max-width: 700px) {\n.sidebar[data-v-7cd9370b] {\n        width: 100%;\n        height: auto;\n        position: relative;\n}\n.sidebar a[data-v-7cd9370b] {\n        float: left;\n}\ndiv.content[data-v-7cd9370b] {\n        margin-left: 0;\n}\n}\n\n/* On screens that are less than 400px, display the bar vertically, instead of horizontally */\n@media screen and (max-width: 400px) {\n.sidebar a[data-v-7cd9370b] {\n        text-align: center;\n        float: none;\n}\n}\n.main[data-v-7cd9370b] {\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n", map: {"version": 3, "sources": ["../frontend/frontend/public/js/pharmacy/components/core/Main.vue"], "names": [], "mappings": ";AA8JA;IACA,SAAA;IACA,UAAA;IACA,kBAAA;IACA,6BAAA;AACA;;AAEA,+GAAA;AAEA;IACA,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,iCAAA;IACA,eAAA;AACA;;AAEA,6EAAA;AAEA;AACA;QACA,WAAA;QACA,YAAA;QACA,kBAAA;AACA;AACA;QACA,WAAA;AACA;AACA;QACA,cAAA;AACA;AACA;;AAEA,6FAAA;AAEA;AACA;QACA,kBAAA;QACA,WAAA;AACA;AACA;AAEA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,gBAAA;AACA", "file": "Main.vue", "sourcesContent": [`<template>
    <div class="main page-wrapper" style="background-color:#ffffff;">
        <b-row>
            <b-col>
                <TopHeader style="width: 100%" @warehouseSelected="warehouseSelected" @selectedServicePoint="selectedServicePoint" />
            </b-col>
        </b-row>
        <b-tabs v-model="tab" fill content-class="note-tabs-content" class="custom-tabs">
           
            <b-tab title="Outpatient Prescriptions">
                <b-row>
                    <b-col md="3">
                        <div class="sidebar">
                            <Sidebar  v-if="tab === 0" ref="sidebar" @prescriptionClicked="prescriptionClicked" @queueStateUpdated="sidebarQueueStateUpdated" :currentServicePoint="currentServicePoint" />
                        </div>
                    </b-col>
                    <b-col md="9">
                        <div class="content">
                            <Container :selectedPharmacy="warehouse"  v-if="tab === 0" ref="prescriptionContainer" :patientName="prescription.patient" :encounterName="prescription.encounter" :queueState="prescription" />
                        </div>
                    </b-col>
                </b-row>
            </b-tab>
             <b-tab title="Inpatient Prescriptions">
                 <b-row style="display: flex; justify-content: center;">
                     <b-col md="11">
                <inpatient-prescriptions :selectedPharmacy="warehouse" v-if="tab === 1">

                </inpatient-prescriptions>
                </b-col>
                 </b-row>
            </b-tab>
            <b-tab title="Pending Medication Orders">
                 <b-row style="display: flex; justify-content: center;">
                     <b-col md="11">
                <pending-medication-orders :warehouse="warehouse.warehouse" v-if="tab === 2" />
                </b-col>
                 </b-row>
            </b-tab>
            <b-tab title="Material Requests">
                <b-row>
                    <b-col>
                        <OutgoingRequest v-if="tab === 3 && warehouse" :warehouseName="warehouse.warehouse" />
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar.vue';
import Container from './container/Container.vue';
import InpatientPrescriptions from './container/InpatientPrescriptions.vue';
import TopHeader from '../TopHeader.vue';
import OutgoingRequest from './material-request/OutgoingRequest.vue';
import PendingMedicationOrders from './container/PendingMedicationOrders.vue'
import { getPatientsPerServiceUnit, getMyServiceUnits, getPatientInfo, getMyPatientTabPermissions } from '../../../services/patient_chart/api';
import { getPatientPrescriptionsV2 } from '../../../services/pharmacy/prescriptions.js'
// import { sendSocketMesage } from "../../../services/intergrations/socketio/send.js";
import socketModule from "../../../state/socket/moduleSocket.js";
export default {
    name: 'Main',
    name: 'Main',
    components: {
        Sidebar,
        Container,
        TopHeader,
        OutgoingRequest,
        InpatientPrescriptions,
        PendingMedicationOrders
    },
    data() {
        return {
            prescription: {},
            socket: null,
            warehouse: null,
            tab: 0,
            currentServicePoint:{}
        };
    },
    computed: {
        socketData() {
            return this.$store.getters["socket/getSocketData"];
        },
    },
    watch: {
        prescription() {
            this.$refs.prescriptionContainer.itemUnitsChanged();
        },
        tab(){
            this.selectedServicePoint(this.currentServicePoint);
        }
    },
    methods: {
        selectedServicePoint(sp) {
            this.currentServicePoint = sp;
            this.$refs.sidebar.onSelectedServicePoint(sp);
        },
        warehouseSelected(wh) {
            // alert(JSON.stringify(wh))
            this.warehouse = wh;
        },
        sidebarQueueStateUpdated(queueState) {
            this.prescription = queueState;
            this.$refs.prescriptionContainer.getPrescriptionDrugs(queueState.patient, queueState.appointment);
        },
        prescriptionClicked(prescription) {
            this.prescription = prescription;
            if (prescription.patient && prescription.appointment) {
                this.$refs.prescriptionContainer.getPrescriptionDrugs(prescription.patient, prescription.appointment);
            }
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
    },
    mounted() {
        $('body').css({ 'overflow-y': 'hidden' });
        $('body').css({ 'overflow-x': 'hidden' });
        const host = this.get_host(3000);
        const socket = io.connect();
        this.socket = socket;
        socket.on("connect", () => {
            console.log("Pharmacy main connected");
        });
    },
    created() {
        this.$store.registerModule("socket", socketModule);
    },
    watch: {
        socketData(socketData) {
            // console.log("SOCKET DATA", socketData);
            if (socketData.action === "off") {
                this.socket.off(socketData.event);
            } else if (socketData.action === "on") {
                this.socket.on(socketData.event, function() {
                    console.log("subscribed to " + socketData.event);
                });
            }
        },
    },
}
</script>

<style scoped>
.sidebar {
    margin: 0;
    padding: 0;
    /* width: 400px; */
    height: calc(100vh - 0.01rem);
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */

content {
    margin-left: 10px;
    margin-right: 10px;
    padding: 1px 4px;
    max-height: calc(100vh - 0.01rem);
    margin-top: 0px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */

@media screen and (max-width: 700px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
    .sidebar a {
        float: left;
    }
    div.content {
        margin-left: 0;
    }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */

@media screen and (max-width: 400px) {
    .sidebar a {
        text-align: center;
        float: none;
    }
}

.main {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
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

`]}, media: void 0}), inject("data-v-7cd9370b_1", {source: ".custom-tabs .card-header[data-v-7cd9370b] {\n  background-color: #fff;\n}\n.custom-tabs .card-header ul li[data-v-7cd9370b] {\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n}\n.custom-tabs .card-footer[data-v-7cd9370b] {\n  min-height: 60px;\n}\n", map: {"version": 3, "sources": ["Main.vue"], "names": [], "mappings": "AAAA;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB", "file": "Main.vue", "sourcesContent": [".custom-tabs .card-header {\n  background-color: #fff;\n}\n.custom-tabs .card-header ul li {\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n}\n.custom-tabs .card-footer {\n  min-height: 60px;\n}\n"]}, media: void 0});
  };
  var __vue_scope_id__18 = "data-v-7cd9370b";
  var __vue_module_identifier__18 = void 0;
  var __vue_is_functional_template__18 = false;
  function __vue_normalize__18(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = `<template>
    <div class="main page-wrapper" style="background-color:#ffffff;">
        <b-row>
            <b-col>
                <TopHeader style="width: 100%" @warehouseSelected="warehouseSelected" @selectedServicePoint="selectedServicePoint" />
            </b-col>
        </b-row>
        <b-tabs v-model="tab" fill content-class="note-tabs-content" class="custom-tabs">
           
            <b-tab title="Outpatient Prescriptions">
                <b-row>
                    <b-col md="3">
                        <div class="sidebar">
                            <Sidebar  v-if="tab === 0" ref="sidebar" @prescriptionClicked="prescriptionClicked" @queueStateUpdated="sidebarQueueStateUpdated" :currentServicePoint="currentServicePoint" />
                        </div>
                    </b-col>
                    <b-col md="9">
                        <div class="content">
                            <Container :selectedPharmacy="warehouse"  v-if="tab === 0" ref="prescriptionContainer" :patientName="prescription.patient" :encounterName="prescription.encounter" :queueState="prescription" />
                        </div>
                    </b-col>
                </b-row>
            </b-tab>
             <b-tab title="Inpatient Prescriptions">
                 <b-row style="display: flex; justify-content: center;">
                     <b-col md="11">
                <inpatient-prescriptions :selectedPharmacy="warehouse" v-if="tab === 1">

                </inpatient-prescriptions>
                </b-col>
                 </b-row>
            </b-tab>
            <b-tab title="Pending Medication Orders">
                 <b-row style="display: flex; justify-content: center;">
                     <b-col md="11">
                <pending-medication-orders :warehouse="warehouse.warehouse" v-if="tab === 2" />
                </b-col>
                 </b-row>
            </b-tab>
            <b-tab title="Material Requests">
                <b-row>
                    <b-col>
                        <OutgoingRequest v-if="tab === 3 && warehouse" :warehouseName="warehouse.warehouse" />
                    </b-col>
                </b-row>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar.vue';
import Container from './container/Container.vue';
import InpatientPrescriptions from './container/InpatientPrescriptions.vue';
import TopHeader from '../TopHeader.vue';
import OutgoingRequest from './material-request/OutgoingRequest.vue';
import PendingMedicationOrders from './container/PendingMedicationOrders.vue'
import { getPatientsPerServiceUnit, getMyServiceUnits, getPatientInfo, getMyPatientTabPermissions } from '../../../services/patient_chart/api';
import { getPatientPrescriptionsV2 } from '../../../services/pharmacy/prescriptions.js'
// import { sendSocketMesage } from "../../../services/intergrations/socketio/send.js";
import socketModule from "../../../state/socket/moduleSocket.js";
export default {
    name: 'Main',
    name: 'Main',
    components: {
        Sidebar,
        Container,
        TopHeader,
        OutgoingRequest,
        InpatientPrescriptions,
        PendingMedicationOrders
    },
    data() {
        return {
            prescription: {},
            socket: null,
            warehouse: null,
            tab: 0,
            currentServicePoint:{}
        };
    },
    computed: {
        socketData() {
            return this.$store.getters["socket/getSocketData"];
        },
    },
    watch: {
        prescription() {
            this.$refs.prescriptionContainer.itemUnitsChanged();
        },
        tab(){
            this.selectedServicePoint(this.currentServicePoint);
        }
    },
    methods: {
        selectedServicePoint(sp) {
            this.currentServicePoint = sp;
            this.$refs.sidebar.onSelectedServicePoint(sp);
        },
        warehouseSelected(wh) {
            // alert(JSON.stringify(wh))
            this.warehouse = wh;
        },
        sidebarQueueStateUpdated(queueState) {
            this.prescription = queueState;
            this.$refs.prescriptionContainer.getPrescriptionDrugs(queueState.patient, queueState.appointment);
        },
        prescriptionClicked(prescription) {
            this.prescription = prescription;
            if (prescription.patient && prescription.appointment) {
                this.$refs.prescriptionContainer.getPrescriptionDrugs(prescription.patient, prescription.appointment);
            }
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
    },
    mounted() {
        $('body').css({ 'overflow-y': 'hidden' });
        $('body').css({ 'overflow-x': 'hidden' });
        const host = this.get_host(3000);
        const socket = io.connect();
        this.socket = socket;
        socket.on("connect", () => {
            console.log("Pharmacy main connected");
        });
    },
    created() {
        this.$store.registerModule("socket", socketModule);
    },
    watch: {
        socketData(socketData) {
            // console.log("SOCKET DATA", socketData);
            if (socketData.action === "off") {
                this.socket.off(socketData.event);
            } else if (socketData.action === "on") {
                this.socket.on(socketData.event, function() {
                    console.log("subscribed to " + socketData.event);
                });
            }
        },
    },
}
</script>

<style scoped>
.sidebar {
    margin: 0;
    padding: 0;
    /* width: 400px; */
    height: calc(100vh - 0.01rem);
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */

content {
    margin-left: 10px;
    margin-right: 10px;
    padding: 1px 4px;
    max-height: calc(100vh - 0.01rem);
    margin-top: 0px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */

@media screen and (max-width: 700px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
    .sidebar a {
        float: left;
    }
    div.content {
        margin-left: 0;
    }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */

@media screen and (max-width: 400px) {
    .sidebar a {
        text-align: center;
        float: none;
    }
}

.main {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
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
  var __vue_component__18 = /* @__PURE__ */ __vue_normalize__18({render: __vue_render__18, staticRenderFns: __vue_staticRenderFns__18}, __vue_inject_styles__18, __vue_script__18, __vue_scope_id__18, __vue_is_functional_template__18, __vue_module_identifier__18, false, __vue_create_injector__11, void 0, void 0);
  var Main_default = __vue_component__18;

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
  var state_default5 = state;

  // ../frontend/frontend/public/js/state/getters.js
  var getters = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default5 = getters;

  // ../frontend/frontend/public/js/state/mutations.js
  var mutations = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default5 = mutations;

  // ../frontend/frontend/public/js/state/actions.js
  var actions = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default5 = actions;

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
        return getPatientInfo2(payload).then((patientData) => {
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
  var api8 = ({method, args = {}, freeze = true}) => new Promise((resolve, reject) => frappe.call({method, args, freeze, callback: ({message}) => resolve(message), error: reject}));
  var getScheduledOrUnscheduledprocedures = (args) => {
    return api8({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedures_per_service_unit",
      args
    });
  };
  var getClinicalProcedureTemplates = (args) => {
    return api8({
      method: "clinical.api.clinical_procedure.clinical_procedure.get_clinical_procedure_templates_per_service_unit",
      args
    });
  };
  var getProcedureStatistics = (args) => {
    return api8({
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
    setSelectedServicePoint({commit}, servicePoint2) {
      commit("SET_SELECTED_SERVICE_POINT", servicePoint2);
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
  var state_default6 = state2;

  // ../frontend/frontend/public/js/state/render/getters.js
  var getters2 = {
    getUser: (state5) => {
      return state5.AppActiveUser;
    },
    getTableData: (state5) => {
      return state5.AppActiveUser;
    }
  };
  var getters_default6 = getters2;

  // ../frontend/frontend/public/js/state/render/mutations.js
  var mutations2 = {
    UPDATE_USER_INFO(state5, payload) {
      state5.AppActiveUser = payload;
    },
    UPDATE_TABLE_DATA(state5, payload) {
      state5.tableData = payload;
    }
  };
  var mutations_default6 = mutations2;

  // ../frontend/frontend/public/js/state/render/actions.js
  var actions2 = {
    updateUserInfo({commit}, payload) {
      commit("UPDATE_USER_INFO", payload);
    },
    updateTable({commit}, payload) {
      commit("UPDATE_TABLE_DATA", payload);
    }
  };
  var actions_default6 = actions2;

  // ../frontend/frontend/public/js/state/render/module.js
  var module_default = {
    namespaced: true,
    state: state_default6,
    mutations: mutations_default6,
    actions: actions_default6,
    getters: getters_default6
  };

  // ../frontend/frontend/public/js/state/accounts/state.js
  var state_default7 = {
    patient: {},
    accountSummary: void 0,
    salesOrderTotal: 0,
    invoiceFInalization: []
  };

  // ../frontend/frontend/public/js/state/accounts/mutations.js
  var mutations_default7 = {
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

  // ../frontend/frontend/public/js/state/accounts/actions.js
  var actions_default7 = {
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
  var getters_default7 = {
    patient: (state5) => state5.patient,
    accountSummary: (state5) => state5.accountSummary,
    salesOrderTotal: (state5) => state5.salesOrderTotal,
    invoiceFInalization: (state5) => state5.invoiceFInalization
  };

  // ../frontend/frontend/public/js/state/accounts/index.js
  var accounts_default = {
    namespaced: true,
    state: state_default7,
    mutations: mutations_default7,
    actions: actions_default7,
    getters: getters_default7
  };

  // ../frontend/frontend/public/js/state/context/state.js
  var state_default8 = {
    context: {}
  };

  // ../frontend/frontend/public/js/state/context/mutations.js
  var mutations_default8 = {
    SET_CONTEXT(state5, context) {
      state5.context = context;
    },
    SET_CONTEXT_ITEM(state5, contextItem) {
      state5.context[contextItem.key] = contextItem.value;
    }
  };

  // ../frontend/frontend/public/js/state/context/actions.js
  var actions_default8 = {
    setContextItem({commit}, payload) {
      commit("SET_CONTEXT_ITEM", payload);
    }
  };

  // ../frontend/frontend/public/js/state/context/getters.js
  var getters_default8 = {
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
    state: state_default8,
    mutations: mutations_default8,
    actions: actions_default8,
    getters: getters_default8
  };

  // ../frontend/frontend/public/js/state/patient-encounter/state.js
  var state3 = {
    encounter: {}
  };
  var state_default9 = state3;

  // ../frontend/frontend/public/js/state/patient-encounter/getters.js
  var getters3 = {
    getEncounter: (state5) => {
      return state5.encounter;
    }
  };
  var getters_default9 = getters3;

  // ../frontend/frontend/public/js/state/patient-encounter/mutations.js
  var mutations3 = {
    SET_ENCOUNTER(state5, payload) {
      state5.encounter = payload;
    }
  };
  var mutations_default9 = mutations3;

  // ../frontend/frontend/public/js/state/patient-encounter/actions.js
  var actions3 = {
    setEncounter({commit}, payload) {
      commit("SET_ENCOUNTER", payload);
    }
  };
  var actions_default9 = actions3;

  // ../frontend/frontend/public/js/state/patient-encounter/module.js
  var module_default2 = {
    namespaced: true,
    state: state_default9,
    mutations: mutations_default9,
    actions: actions_default9,
    getters: getters_default9
  };

  // ../frontend/frontend/public/js/state/patient_appointments/state.js
  var state4 = {
    appointments_count: null
  };
  var state_default10 = state4;

  // ../frontend/frontend/public/js/state/patient_appointments/getters.js
  var getters4 = {
    getAppointmentsCount: (state5) => {
      return state5.appointments_count;
    }
  };
  var getters_default10 = getters4;

  // ../frontend/frontend/public/js/state/patient_appointments/mutations.js
  var mutations4 = {
    SET_APPOINTMENTS_COUNT(state5, payload) {
      state5.appointments_count = payload;
    }
  };
  var mutations_default10 = mutations4;

  // ../frontend/frontend/public/js/state/patient_appointments/actions.js
  var actions4 = {
    setAppointmentsCount({commit}, payload) {
      commit("SET_APPOINTMENTS_COUNT", payload);
    }
  };
  var actions_default10 = actions4;

  // ../frontend/frontend/public/js/state/patient_appointments/module.js
  var module_default3 = {
    namespaced: true,
    state: state_default10,
    mutations: mutations_default10,
    actions: actions_default10,
    getters: getters_default10
  };

  // ../frontend/frontend/public/js/state/store.js
  window.process = {
    env: {
      NODE_ENV: "production"
    }
  };
  Vue.use(import_vuex_common.default);
  var store_default = new import_vuex_common.default.Store({
    getters: getters_default5,
    mutations: mutations_default5,
    state: state_default5,
    actions: actions_default5,
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

  // ../frontend/frontend/public/js/pharmacy/pharmacy.bundle.js
  frappe.provide("frappe.pharmacy");
  frappe.pharmacy.ExportTool = class {
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
      new Vue({
        store: store_default,
        el: ".hub-page-container",
        render: (h) => h(Main_default)
      });
    }
    setup_header() {
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
//# sourceMappingURL=pharmacy.bundle.A2HU6Z3S.js.map
