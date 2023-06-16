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
  var a = ke, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(p, i, E) {
    var h, x = {}, S = null, L = null;
    E !== void 0 && (S = "" + E), i.key !== void 0 && (S = "" + i.key), i.ref !== void 0 && (L = i.ref);
    for (h in i)
      u.call(i, h) && !m.hasOwnProperty(h) && (x[h] = i[h]);
    if (p && p.defaultProps)
      for (h in i = p.defaultProps, i)
        x[h] === void 0 && (x[h] = i[h]);
    return { $$typeof: n, type: p, key: S, ref: L, props: x, _owner: f.current };
  }
  return Y.Fragment = s, Y.jsx = g, Y.jsxs = g, Y;
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
    var a = ke, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), p = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), ne = Symbol.iterator, We = "@@iterator";
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
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === m || Je || e === f || e === E || e === h || qe || e === L || Ue || Ve || Be || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === x || e.$$typeof === g || e.$$typeof === p || e.$$typeof === i || // This needs to include all possible module reference object
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
        case s:
          return "Portal";
        case m:
          return "Profiler";
        case f:
          return "StrictMode";
        case E:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return oe(r) + ".Consumer";
          case g:
            var t = e;
            return oe(t._context) + ".Provider";
          case i:
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
          for (var c = C.stack.split(`
`), _ = o.stack.split(`
`), y = c.length - 1, R = _.length - 1; y >= 1 && R >= 0 && c[y] !== _[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (c[y] !== _[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || c[y] !== _[R]) {
                    var P = `
` + c[y].replace(" at new ", " at ");
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
        case h:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
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
    var U = Object.prototype.hasOwnProperty, he = {}, me = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function er(e, r, t, o, d) {
      {
        var v = Function.call.bind(U);
        for (var l in e)
          if (v(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var _ = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              c = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (V(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof c), V(null)), c instanceof Error && !(c.message in he) && (he[c.message] = !0, V(d), b("Failed %s type: %s", t, c.message), V(null));
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
    function ir(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = T(I.current.type);
        K[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(I.current.type), e.ref), K[t] = !0);
      }
    }
    function sr(e, r) {
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
      var c = {
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
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function fr(e, r, t, o, d) {
      {
        var v, l = {}, c = null, _ = null;
        t !== void 0 && (ye(t), c = "" + t), ur(r) && (ye(r.key), c = "" + r.key), or(r) && (_ = r.ref, ir(r, d));
        for (v in r)
          U.call(r, v) && !ar.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            l[v] === void 0 && (l[v] = y[v]);
        }
        if (c || _) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && sr(l, R), _ && cr(l, R);
        }
        return lr(e, c, _, d, o, I.current, l);
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
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
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
    function hr(e) {
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
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = dr(d);
          _ ? c += _ : c += _e();
          var y;
          e === null ? y = "null" : H(e) ? y = "array" : e !== void 0 && e.$$typeof === n ? (y = "<" + (T(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
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
        return e === u ? hr(R) : pr(R), R;
      }
    }
    function mr(e, r, t) {
      return Te(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Te(e, r, t, !1);
    }
    var yr = gr, Rr = mr;
    $.Fragment = u, $.jsx = yr, $.jsxs = Rr;
  }()), $;
}
process.env.NODE_ENV === "production" ? ee.exports = Pr() : ee.exports = wr();
var q = ee.exports;
const re = (a, n = !1) => {
  const s = n ? "^" : "", u = n ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)", f = s + a.replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\#/g, "\\#").replace(/★/g, ".*") + u;
  return new RegExp(f);
}, xr = (a, n) => !n || a.length === 0 ? !1 : !!a.slice().find((u) => re(u, !0).test(n)), Tr = ({
  state: a,
  dispatch: n,
  millisecond: s,
  preventArr: u,
  router: f
}) => {
  const m = w(!0), g = w(0);
  B(() => {
    if (m.current || xr(u, f)) {
      m.current = !1, n({
        firstAccess: !1,
        prev: null,
        current: f,
        phase: null,
        next: null
      });
      return;
    }
    const p = document.documentElement.scrollTop;
    return n({
      next: f,
      phase: "leave",
      yPosBeforeLeave: p
    }), g.current = setTimeout(() => {
      n({
        prev: a.current,
        current: f,
        next: f,
        phase: "enter"
      });
    }, s), () => {
      clearTimeout(g.current);
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
}, Ie = je(Cr), Ye = je(Fe), Lr = ({
  millisecond: a,
  preventArr: n,
  router: s,
  children: u
}) => {
  const [f] = Er({
    millisecond: a,
    second: a / 1e3
  }), [m, g] = De(
    (p, i) => ({
      ...p,
      ...i
    }),
    Fe
  );
  return Tr({
    state: m,
    dispatch: g,
    router: s,
    millisecond: a,
    preventArr: n
  }), /* @__PURE__ */ q.jsx(Ie.Provider, { value: f, children: /* @__PURE__ */ q.jsx(Ye.Provider, { value: m, children: u }) });
}, Sr = () => Ae(Ie), Or = () => Ae(Ye), $e = (a, n) => a.slice().sort((s, u) => u.path.length - s.path.length).find((s) => re(s.path, !1).test(n)), Le = ({
  componentArr: a,
  router: n,
  children: s
}) => {
  const u = $e(a, n);
  return u ? u.component : s;
}, kr = ({
  componentArr: a,
  router: n,
  state: s
}) => {
  const u = $e(a, n);
  return (u == null ? void 0 : u.component) === s.current;
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
  millisecond: s,
  state: u,
  componentArr: f,
  children: m,
  dispatch: g
}) => {
  const p = w(!0), i = w(0), E = () => {
    const h = Le({
      componentArr: f,
      router: a,
      children: m
    });
    !h || kr({ componentArr: f, router: a, state: u }) || g({
      type: n === "wait" ? "update-unmount" : "update",
      component: h,
      restorePos: {
        key: a,
        pos: window.pageYOffset || document.documentElement.scrollTop || 0
      }
    });
  };
  te(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    return n === "wait" ? i.current = setTimeout(E, s) : E(), () => {
      clearTimeout(i.current);
    };
  }, [a]);
}, Ar = ({
  state: a,
  mode: n,
  millisecond: s,
  dispatch: u
}) => {
  const f = w(!0), m = w(0), g = () => {
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
      return n === "wait" ? g() : m.current = setTimeout(g, s), () => {
        clearTimeout(m.current);
      };
  }, [a.current, a.next]);
}, Fr = ({
  cache: a,
  key: n,
  isPopstate: s,
  pos: u
}) => s === !1 ? (a.backPosY = u, a.keysArr.push(n), 0) : n === a.keysArr[a.keysArr.length - 2] ? (a.keysArr = [n], a.backPosY || 0) : 0, Ir = ({
  scrollRestoration: a,
  state: n
}) => {
  const s = w(!0), u = w(!1), f = w({
    backPosY: 0,
    keysArr: []
  });
  te(() => {
    if (s.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        u.current = !0;
      }), f.current.keysArr.push(n.restorePos.key), s.current = !1;
      return;
    }
    if (a === "top")
      window.scrollTo({ top: 0 });
    else if (a === "restore") {
      const m = Fr({
        cache: f.current,
        key: n.restorePos.key,
        isPopstate: u.current,
        pos: n.restorePos.pos
      });
      window.scrollTo({ top: m }), u.current = !1;
    }
  }, [n.restorePos]);
}, Wr = _r(function({
  componentArr: n,
  mode: s,
  scrollRestoration: u,
  router: f,
  children: m
}) {
  const g = Sr().millisecond, [p, i] = De(jr, {
    current: Le({ componentArr: n, router: f, children: m }),
    next: null,
    restorePos: {
      key: f,
      pos: 0
    }
  });
  return Dr({
    router: f,
    mode: s,
    millisecond: g,
    state: p,
    componentArr: n,
    children: m,
    dispatch: i
  }), Ar({ state: p, mode: s, millisecond: g, dispatch: i }), Ir({ scrollRestoration: u, state: p }), /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    p.current && p.current,
    p.next && p.next
  ] });
}), A = (a, n) => n ? a.slice().find((u) => re(u, !0).test(n)) ?? !1 : !1, Yr = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const s = window.pageYOffset || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + s;
}, Mr = ({
  isReRender: a = !0,
  mode: n,
  once: s,
  leave: u,
  enter: f,
  afterEnter: m
}) => {
  const g = w(!0), p = w(null), i = Or();
  B(() => {
    p.current = location.pathname;
  }, []), B(() => {
    if (i.firstAccess) {
      g.current && (s && s(), g.current = !1);
      return;
    }
    const E = {
      prev: i.prev,
      current: i.current,
      next: i.next,
      yPosBeforeLeave: i.yPosBeforeLeave,
      isPrev: (h) => A(h, i.prev),
      isCurrent: (h) => A(h, i.current),
      isNext: (h) => A(h, i.next),
      getHashPos: () => Yr()
    };
    if (i.phase === "leave")
      n === "wait" && u && u(E), n === "sync" && (p.current === location.pathname ? f && f({
        ...E,
        prev: i.current,
        current: i.next,
        isPrev: (h) => A(h, i.current),
        isCurrent: (h) => A(h, i.next)
      }) : u && u(E));
    else if (i.phase === "enter") {
      if (n === "sync" && A([i.current], location.pathname) && m && m(E), p.current !== location.pathname && a)
        return;
      n === "wait" && f && f(E);
    }
  }, [i]);
};
export {
  Lr as MekuriContext,
  Wr as MekuriLayout,
  Mr as useMekuriAnimation,
  Sr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
