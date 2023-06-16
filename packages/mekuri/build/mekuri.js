import ke, { useRef as x, useEffect as B, createContext as je, useState as Er, useReducer as De, useContext as Fe, useLayoutEffect as br, memo as _r } from "react";
var ee = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Pr() {
  if (Se)
    return I;
  Se = 1;
  var a = ke, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(d, v, h) {
    var g, b = {}, S = null, $ = null;
    h !== void 0 && (S = "" + h), v.key !== void 0 && (S = "" + v.key), v.ref !== void 0 && ($ = v.ref);
    for (g in v)
      u.call(v, g) && !m.hasOwnProperty(g) && (b[g] = v[g]);
    if (d && d.defaultProps)
      for (g in v = d.defaultProps, v)
        b[g] === void 0 && (b[g] = v[g]);
    return { $$typeof: n, type: d, key: S, ref: $, props: b, _owner: l.current };
  }
  return I.Fragment = i, I.jsx = y, I.jsxs = y, I;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function wr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ke, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ne = Symbol.iterator, We = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[We];
      return typeof r == "function" ? r : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var p = t.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Ue = !1, Ve = !1, Be = !1, qe = !1, Je = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === m || Je || e === l || e === h || e === g || qe || e === $ || Ue || Ve || Be || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === b || e.$$typeof === y || e.$$typeof === d || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case i:
          return "Portal";
        case m:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return oe(r) + ".Consumer";
          case y:
            var t = e;
            return oe(t._context) + ".Provider";
          case v:
            return ze(e, e.render, "ForwardRef");
          case b:
            var o = e.displayName || null;
            return o !== null ? o : T(e.type) || "Memo";
          case S: {
            var f = e, p = f._payload, c = f._init;
            try {
              return T(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, F = 0, ue, ie, se, ce, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function He() {
      {
        if (F === 0) {
          ue = console.log, ie = console.info, se = console.warn, ce = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ke() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ue
            }),
            info: O({}, e, {
              value: ie
            }),
            warn: O({}, e, {
              value: se
            }),
            error: O({}, e, {
              value: ce
            }),
            group: O({}, e, {
              value: le
            }),
            groupCollapsed: O({}, e, {
              value: fe
            }),
            groupEnd: O({}, e, {
              value: de
            })
          });
        }
        F < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, G;
    function W(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            G = o && o[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, M;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Xe();
    }
    function pe(e, r) {
      if (!e || z)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      z = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = J.current, J.current = null, He();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (C) {
              o = C;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (C) {
              o = C;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            o = C;
          }
          e();
        }
      } catch (C) {
        if (C && o && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), P = o.stack.split(`
`), R = s.length - 1, E = P.length - 1; R >= 1 && E >= 0 && s[R] !== P[E]; )
            E--;
          for (; R >= 1 && E >= 0; R--, E--)
            if (s[R] !== P[E]) {
              if (R !== 1 || E !== 1)
                do
                  if (R--, E--, E < 0 || s[R] !== P[E]) {
                    var w = `
` + s[R].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, w), w;
                  }
                while (R >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = p, Ke(), Error.prepareStackTrace = f;
      }
      var D = e ? e.displayName || e.name : "", Ce = D ? W(D) : "";
      return typeof e == "function" && M.set(e, Ce), Ce;
    }
    function Ze(e, r, t) {
      return pe(e, !1);
    }
    function Qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Qe(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case h:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ze(e.render);
          case b:
            return N(e.type, r, t);
          case S: {
            var o = e, f = o._payload, p = o._init;
            try {
              return N(p(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, he = {}, me = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function er(e, r, t, o, f) {
      {
        var p = Function.call.bind(U);
        for (var c in e)
          if (p(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var P = Error((o || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              s = e[c](r, c, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              s = R;
            }
            s && !(s instanceof Error) && (V(f), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, c, typeof s), V(null)), s instanceof Error && !(s.message in he) && (he[s.message] = !0, V(f), _("Failed %s type: %s", t, s.message), V(null));
          }
      }
    }
    var rr = Array.isArray;
    function H(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function nr(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function ye(e) {
      if (nr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), ge(e);
    }
    var A = k.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Ee, K;
    K = {};
    function or(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = T(A.current.type);
        K[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(A.current.type), e.ref), K[t] = !0);
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, o, f, p, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function fr(e, r, t, o, f) {
      {
        var p, c = {}, s = null, P = null;
        t !== void 0 && (ye(t), s = "" + t), ur(r) && (ye(r.key), s = "" + r.key), or(r) && (P = r.ref, ir(r, f));
        for (p in r)
          U.call(r, p) && !ar.hasOwnProperty(p) && (c[p] = r[p]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (p in R)
            c[p] === void 0 && (c[p] = R[p]);
        }
        if (s || P) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && sr(c, E), P && cr(c, E);
        }
        return lr(e, s, P, f, o, A.current, c);
      }
    }
    var X = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function _e() {
      {
        if (X.current) {
          var e = T(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Pe = {};
    function vr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = vr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + T(e._owner.type) + "."), j(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), j(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            Q(o) && we(o, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Me(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), c; !(c = p.next()).done; )
              Q(c.value) && we(c.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = T(r);
          er(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = T(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            j(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Te(e, r, t, o, f, p) {
      {
        var c = Ge(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = dr(f);
          P ? s += P : s += _e();
          var R;
          e === null ? R = "null" : H(e) ? R = "array" : e !== void 0 && e.$$typeof === n ? (R = "<" + (T(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, s);
        }
        var E = fr(e, r, t, f, p);
        if (E == null)
          return E;
        if (c) {
          var w = r.children;
          if (w !== void 0)
            if (o)
              if (H(w)) {
                for (var D = 0; D < w.length; D++)
                  xe(w[D], e);
                Object.freeze && Object.freeze(w);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(w, e);
        }
        return e === u ? hr(E) : pr(E), E;
      }
    }
    function mr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var yr = gr, Rr = mr;
    Y.Fragment = u, Y.jsx = yr, Y.jsxs = Rr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ee.exports = Pr() : ee.exports = wr();
var q = ee.exports;
const re = (a, n = !1) => {
  const i = n ? "^" : "", u = n ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)", l = i + a.replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\#/g, "\\#").replace(/★/g, ".*") + u;
  return new RegExp(l);
}, xr = (a, n) => !n || a.length === 0 ? !1 : !!a.slice().find((u) => re(u, !0).test(n)), Tr = ({
  state: a,
  dispatch: n,
  millisecond: i,
  preventArr: u,
  router: l
}) => {
  const m = x(!0), y = x(0);
  B(() => {
    if (m.current || xr(u, l)) {
      m.current = !1, n({
        prev: null,
        current: l,
        phase: null,
        next: null
      });
      return;
    }
    const d = document.documentElement.scrollTop;
    return n({
      next: l,
      phase: "leave",
      yPosBeforeLeave: d
    }), y.current = setTimeout(() => {
      n({
        prev: a.current,
        current: l,
        next: l,
        phase: "enter"
      });
    }, i), () => {
      clearTimeout(y.current);
    };
  }, [l]);
}, Ae = {
  prev: null,
  current: null,
  next: null,
  phase: null,
  yPosBeforeLeave: 0
}, Cr = {
  millisecond: 0,
  second: 0
}, Ie = je(Cr), Ye = je(Ae), $r = ({
  millisecond: a,
  preventArr: n,
  router: i,
  children: u
}) => {
  const [l] = Er({
    millisecond: a,
    second: a / 1e3
  }), [m, y] = De(
    (d, v) => ({
      ...d,
      ...v
    }),
    Ae
  );
  return Tr({
    state: m,
    dispatch: y,
    router: i,
    millisecond: a,
    preventArr: n
  }), /* @__PURE__ */ q.jsx(Ie.Provider, { value: l, children: /* @__PURE__ */ q.jsx(Ye.Provider, { value: m, children: u }) });
}, Sr = () => Fe(Ie), Or = () => Fe(Ye), Le = (a, n) => a.slice().sort((i, u) => u.path.length - i.path.length).find((i) => re(i.path, !1).test(n)), $e = ({
  componentArr: a,
  router: n,
  children: i
}) => {
  const u = Le(a, n);
  return u ? u.component : i;
}, kr = ({
  componentArr: a,
  router: n,
  state: i
}) => {
  const u = Le(a, n);
  return (u == null ? void 0 : u.component) === i.current;
}, te = typeof document < "u" ? br : B, jr = (a, n) => {
  switch (n.type) {
    case "update":
      return {
        ...a,
        next: n.component || null,
        restorePos: n.restorePos
      };
    case "unmount-prev":
      return {
        ...a,
        current: a.next || null,
        next: null
      };
    case "update-unmount":
      return {
        ...a,
        current: n.component || null,
        restorePos: n.restorePos
      };
    default:
      throw new Error();
  }
}, Dr = ({
  router: a,
  mode: n,
  millisecond: i,
  state: u,
  componentArr: l,
  children: m,
  dispatch: y
}) => {
  const d = x(!0), v = x(0), h = () => {
    const g = $e({
      componentArr: l,
      router: a,
      children: m
    });
    !g || kr({ componentArr: l, router: a, state: u }) || y({
      type: n === "wait" ? "update-unmount" : "update",
      component: g,
      restorePos: {
        key: a,
        pos: window.pageYOffset || document.documentElement.scrollTop || 0
      }
    });
  };
  te(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    return n === "wait" ? v.current = setTimeout(h, i) : h(), () => {
      clearTimeout(v.current);
    };
  }, [a]);
}, Fr = ({
  state: a,
  mode: n,
  millisecond: i,
  dispatch: u
}) => {
  const l = x(!0), m = x(0), y = () => {
    n === "sync" && u({
      type: "unmount-prev"
    });
  };
  te(() => {
    if (l.current) {
      l.current = !1;
      return;
    }
    if (!(!a.next && n === "sync"))
      return n === "wait" ? y() : m.current = setTimeout(y, i), () => {
        clearTimeout(m.current);
      };
  }, [a.current, a.next]);
}, Ar = ({
  cache: a,
  key: n,
  isPopstate: i,
  pos: u
}) => i === !1 ? (a.backPosY = u, a.keysArr.push(n), 0) : n === a.keysArr[a.keysArr.length - 2] ? (a.keysArr = [n], a.backPosY || 0) : 0, Ir = ({
  scrollRestoration: a,
  state: n
}) => {
  const i = x(!0), u = x(!1), l = x({
    backPosY: 0,
    keysArr: []
  });
  te(() => {
    if (i.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        u.current = !0;
      }), l.current.keysArr.push(n.restorePos.key), i.current = !1;
      return;
    }
    if (a === "top")
      window.scrollTo({ top: 0 });
    else if (a === "restore") {
      const m = Ar({
        cache: l.current,
        key: n.restorePos.key,
        isPopstate: u.current,
        pos: n.restorePos.pos
      });
      window.scrollTo({ top: m }), u.current = !1;
    }
  }, [n.restorePos]);
}, Wr = _r(function({
  componentArr: n,
  mode: i,
  scrollRestoration: u,
  router: l,
  children: m
}) {
  const y = Sr().millisecond, [d, v] = De(jr, {
    current: $e({ componentArr: n, router: l, children: m }),
    next: null,
    restorePos: {
      key: l,
      pos: 0
    }
  });
  return Dr({
    router: l,
    mode: i,
    millisecond: y,
    state: d,
    componentArr: n,
    children: m,
    dispatch: v
  }), Fr({ state: d, mode: i, millisecond: y, dispatch: v }), Ir({ scrollRestoration: u, state: d }), /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    d.current && d.current,
    d.next && d.next
  ] });
}), L = (a, n) => n ? a.slice().find((u) => re(u, !0).test(n)) ?? !1 : !1, Yr = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const i = window.pageYOffset || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + i;
}, Mr = ({
  isReRender: a = !0,
  mode: n,
  once: i,
  leave: u,
  enter: l,
  afterEnter: m
}) => {
  const y = x(!0), d = x(null), v = x(!0), h = Or();
  B(() => {
    d.current = location.pathname, v.current = !1;
  }, []), B(() => {
    if (h.phase === null) {
      y.current && (i && i(), y.current = !1);
      return;
    }
    const g = {
      prev: h.prev,
      current: h.current,
      next: h.next,
      yPosBeforeLeave: h.yPosBeforeLeave,
      isPrev: (b) => L(b, h.prev),
      isCurrent: (b) => L(b, h.current),
      isNext: (b) => L(b, h.next),
      getHashPos: () => Yr()
    };
    if (h.phase === "leave")
      n === "wait" && u && u(g), n === "sync" && (d.current === location.pathname ? (l && l({
        ...g,
        prev: h.current,
        current: h.next,
        isPrev: (b) => L(b, h.current),
        isCurrent: (b) => L(b, h.next)
      }), v.current = !0) : u && u(g));
    else if (h.phase === "enter") {
      if (n === "sync" && d.current === location.pathname && !v.current && m && m(g), d.current !== location.pathname && a)
        return;
      n === "wait" && l && l(g);
    }
  }, [h]);
};
export {
  $r as MekuriContext,
  Wr as MekuriLayout,
  Mr as useMekuriAnimation,
  Sr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
