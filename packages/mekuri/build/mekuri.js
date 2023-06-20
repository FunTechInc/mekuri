import ke, { useRef as w, useEffect as B, createContext as je, useState as Er, useReducer as De, useContext as Ae, useLayoutEffect as br, memo as _r } from "react";
var ee = { exports: {} }, Y = {};
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
    return Y;
  Se = 1;
  var a = ke, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(g, s, E) {
    var m, x = {}, S = null, L = null;
    E !== void 0 && (S = "" + E), s.key !== void 0 && (S = "" + s.key), s.ref !== void 0 && (L = s.ref);
    for (m in s)
      u.call(s, m) && !h.hasOwnProperty(m) && (x[m] = s[m]);
    if (g && g.defaultProps)
      for (m in s = g.defaultProps, s)
        x[m] === void 0 && (x[m] = s[m]);
    return { $$typeof: n, type: g, key: S, ref: L, props: x, _owner: f.current };
  }
  return Y.Fragment = c, Y.jsx = p, Y.jsxs = p, Y;
}
var $ = {};
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
    var a = ke, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), g = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), ne = Symbol.iterator, We = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[We];
      return typeof r == "function" ? r : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var v = t.map(function(l) {
          return String(l);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ue = !1, Ve = !1, Be = !1, qe = !1, Je = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === h || Je || e === f || e === E || e === m || qe || e === L || Ue || Ve || Be || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === x || e.$$typeof === p || e.$$typeof === g || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case c:
          return "Portal";
        case h:
          return "Profiler";
        case f:
          return "StrictMode";
        case E:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return oe(r) + ".Consumer";
          case p:
            var t = e;
            return oe(t._context) + ".Provider";
          case s:
            return ze(e, e.render, "ForwardRef");
          case x:
            var o = e.displayName || null;
            return o !== null ? o : T(e.type) || "Memo";
          case S: {
            var d = e, v = d._payload, l = d._init;
            try {
              return T(l(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, F = 0, ue, se, ie, ce, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function He() {
      {
        if (F === 0) {
          ue = console.log, se = console.info, ie = console.warn, ce = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
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
              value: se
            }),
            warn: O({}, e, {
              value: ie
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
        F < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, G;
    function W(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (d) {
            var o = d.stack.trim().match(/\n( *(at )?)/);
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
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = J.current, J.current = null, He();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (C) {
              o = C;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              o = C;
            }
            e.call(l.prototype);
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
          for (var i = C.stack.split(`
`), _ = o.stack.split(`
`), y = i.length - 1, R = _.length - 1; y >= 1 && R >= 0 && i[y] !== _[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (i[y] !== _[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || i[y] !== _[R]) {
                    var P = `
` + i[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, P), P;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = v, Ke(), Error.prepareStackTrace = d;
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
        case E:
          return W("Suspense");
        case m:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ze(e.render);
          case x:
            return N(e.type, r, t);
          case S: {
            var o = e, d = o._payload, v = o._init;
            try {
              return N(v(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, me = {}, he = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function er(e, r, t, o, d) {
      {
        var v = Function.call.bind(U);
        for (var l in e)
          if (v(e, l)) {
            var i = void 0;
            try {
              if (typeof e[l] != "function") {
                var _ = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              i = y;
            }
            i && !(i instanceof Error) && (V(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof i), V(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, V(d), b("Failed %s type: %s", t, i.message), V(null));
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
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), ge(e);
    }
    var I = k.ReactCurrentOwner, ar = {
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
    function sr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = T(I.current.type);
        K[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(I.current.type), e.ref), K[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Re || (Re = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ee || (Ee = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, o, d, v, l) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function fr(e, r, t, o, d) {
      {
        var v, l = {}, i = null, _ = null;
        t !== void 0 && (ye(t), i = "" + t), ur(r) && (ye(r.key), i = "" + r.key), or(r) && (_ = r.ref, sr(r, d));
        for (v in r)
          U.call(r, v) && !ar.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            l[v] === void 0 && (l[v] = y[v]);
        }
        if (i || _) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ir(l, R), _ && cr(l, R);
        }
        return lr(e, i, _, d, o, I.current, l);
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
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + T(e._owner.type) + "."), j(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), j(null);
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
          var d = Me(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), l; !(l = v.next()).done; )
              Q(l.value) && we(l.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = T(r);
          er(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var d = T(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            j(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Te(e, r, t, o, d, v) {
      {
        var l = Ge(e);
        if (!l) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = dr(d);
          _ ? i += _ : i += _e();
          var y;
          e === null ? y = "null" : H(e) ? y = "array" : e !== void 0 && e.$$typeof === n ? (y = "<" + (T(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, i);
        }
        var R = fr(e, r, t, d, v);
        if (R == null)
          return R;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (H(P)) {
                for (var D = 0; D < P.length; D++)
                  xe(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(P, e);
        }
        return e === u ? mr(R) : pr(R), R;
      }
    }
    function hr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var yr = gr, Rr = hr;
    $.Fragment = u, $.jsx = yr, $.jsxs = Rr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ee.exports = Pr() : ee.exports = wr();
var q = ee.exports;
const re = (a, n = !1) => {
  const c = n ? "^" : "", u = n ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)", f = c + a.replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\#/g, "\\#").replace(/★/g, ".*") + u;
  return new RegExp(f);
}, xr = (a, n) => !n || a.length === 0 ? !1 : !!a.slice().find((u) => re(u, !0).test(n)), Tr = ({
  state: a,
  dispatch: n,
  millisecond: c,
  preventArr: u,
  router: f
}) => {
  const h = w(!0), p = w(0);
  B(() => {
    if (h.current || xr(u, f)) {
      h.current = !1, n({
        firstAccess: !1,
        prev: null,
        current: f,
        phase: null,
        next: null
      });
      return;
    }
    const g = document.documentElement.scrollTop;
    return n({
      next: f,
      phase: "leave",
      yPosBeforeLeave: g
    }), p.current = setTimeout(() => {
      n({
        prev: a.current,
        current: f,
        next: f,
        phase: "enter"
      });
    }, c), () => {
      clearTimeout(p.current);
    };
  }, [f]);
}, Fe = {
  firstAccess: !0,
  prev: null,
  current: null,
  next: null,
  phase: null,
  yPosBeforeLeave: 0
}, Cr = {
  millisecond: 0,
  second: 0
}, Ie = je(Cr), Ye = je(Fe), Wr = ({
  millisecond: a,
  preventArr: n,
  router: c,
  children: u
}) => {
  const [f] = Er({
    millisecond: a,
    second: a / 1e3
  }), [h, p] = De(
    (g, s) => ({
      ...g,
      ...s
    }),
    Fe
  );
  return Tr({
    state: h,
    dispatch: p,
    router: c,
    millisecond: a,
    preventArr: n
  }), /* @__PURE__ */ q.jsx(Ie.Provider, { value: f, children: /* @__PURE__ */ q.jsx(Ye.Provider, { value: h, children: u }) });
}, Sr = () => Ae(Ie), Or = () => Ae(Ye), $e = (a, n) => a.slice().sort((c, u) => u.path.length - c.path.length).find((c) => re(c.path, !1).test(n)), Le = ({
  componentArr: a,
  router: n,
  children: c
}) => {
  const u = $e(a, n);
  return u ? u.component : c;
}, kr = ({
  componentArr: a,
  router: n,
  state: c
}) => {
  const u = $e(a, n);
  return (u == null ? void 0 : u.component) === c.current;
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
  millisecond: c,
  state: u,
  componentArr: f,
  children: h,
  dispatch: p
}) => {
  const g = w(!0), s = w(0), E = () => {
    const m = Le({
      componentArr: f,
      router: a,
      children: h
    });
    !m || kr({ componentArr: f, router: a, state: u }) || p({
      type: n === "wait" ? "update-unmount" : "update",
      component: m,
      restorePos: {
        key: a,
        pos: window.pageYOffset || document.documentElement.scrollTop || 0
      }
    });
  };
  te(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    return n === "wait" ? s.current = setTimeout(E, c) : E(), () => {
      clearTimeout(s.current);
    };
  }, [a]);
}, Ar = ({
  state: a,
  mode: n,
  millisecond: c,
  dispatch: u
}) => {
  const f = w(!0), h = w(0), p = () => {
    n === "sync" && u({
      type: "unmount-prev"
    });
  };
  te(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    if (!(!a.next && n === "sync"))
      return n === "wait" ? p() : h.current = setTimeout(p, c), () => {
        clearTimeout(h.current);
      };
  }, [a.current, a.next]);
}, Fr = ({
  cache: a,
  key: n,
  isPopstate: c,
  pos: u
}) => c === !1 ? (a.backPosY = u, a.keysArr.push(n), 0) : n === a.keysArr[a.keysArr.length - 2] ? (a.keysArr = [n], a.backPosY || 0) : (a.keysArr = [n], 0), Ir = ({
  scrollRestoration: a,
  state: n
}) => {
  const c = w(!0), u = w(!1), f = w({
    backPosY: 0,
    keysArr: []
  });
  te(() => {
    if (c.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        u.current = !0;
      }), f.current.keysArr.push(n.restorePos.key), c.current = !1;
      return;
    }
    if (a === "top")
      window.scrollTo({ top: 0 });
    else if (a === "restore") {
      const h = Fr({
        cache: f.current,
        key: n.restorePos.key,
        isPopstate: u.current,
        pos: n.restorePos.pos
      });
      window.scrollTo({ top: h }), u.current = !1;
    }
  }, [n.restorePos]);
}, Yr = ({
  componentArr: a,
  mode: n,
  scrollRestoration: c,
  router: u,
  children: f
}) => {
  const h = Sr().millisecond, [p, g] = De(jr, {
    current: Le({ componentArr: a, router: u, children: f }),
    next: null,
    restorePos: {
      key: u,
      pos: 0
    }
  });
  return Dr({
    router: u,
    mode: n,
    millisecond: h,
    state: p,
    componentArr: a,
    children: f,
    dispatch: g
  }), Ar({ state: p, mode: n, millisecond: h, dispatch: g }), Ir({ scrollRestoration: c, state: p }), /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    p.current && p.current,
    p.next && p.next
  ] });
}, Mr = _r(Yr), A = (a, n) => n ? a.slice().find((u) => re(u, !0).test(n)) ?? !1 : !1, $r = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const c = window.pageYOffset || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + c;
}, Nr = ({
  isReRender: a = !0,
  mode: n,
  once: c,
  leave: u,
  enter: f,
  afterEnter: h
}) => {
  const p = w(!0), g = w(null), s = Or();
  B(() => {
    g.current = location.pathname;
  }, []), B(() => {
    if (s.firstAccess) {
      p.current && (c && c(), p.current = !1);
      return;
    }
    const E = {
      prev: s.prev,
      current: s.current,
      next: s.next,
      yPosBeforeLeave: s.yPosBeforeLeave,
      isPrev: (m) => A(m, s.prev),
      isCurrent: (m) => A(m, s.current),
      isNext: (m) => A(m, s.next),
      getHashPos: () => $r()
    };
    if (s.phase === "leave")
      n === "wait" && u && u(E), n === "sync" && (g.current === location.pathname ? f && f({
        ...E,
        prev: s.current,
        current: s.next,
        isPrev: (m) => A(m, s.current),
        isCurrent: (m) => A(m, s.next)
      }) : u && u(E));
    else if (s.phase === "enter") {
      if (n === "sync" && A([s.current], location.pathname) && h && h(E), g.current !== location.pathname && a)
        return;
      n === "wait" && f && f(E);
    }
  }, [s]);
};
export {
  Wr as MekuriContext,
  Mr as MekuriLayout,
  Nr as useMekuriAnimation,
  Sr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
