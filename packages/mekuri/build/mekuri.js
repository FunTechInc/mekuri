import Oe, { useRef as w, useEffect as F, createContext as ke, useState as Rr, useReducer as je, useContext as Ae, memo as Er } from "react";
var ee = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function br() {
  if (Ce)
    return $;
  Ce = 1;
  var a = Oe, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(g, i, E) {
    var h, x = {}, S = null, W = null;
    E !== void 0 && (S = "" + E), i.key !== void 0 && (S = "" + i.key), i.ref !== void 0 && (W = i.ref);
    for (h in i)
      u.call(i, h) && !m.hasOwnProperty(h) && (x[h] = i[h]);
    if (g && g.defaultProps)
      for (h in i = g.defaultProps, i)
        x[h] === void 0 && (x[h] = i[h]);
    return { $$typeof: n, type: g, key: S, ref: W, props: x, _owner: f.current };
  }
  return $.Fragment = c, $.jsx = p, $.jsxs = p, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function _r() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Oe, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), g = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, Le = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Me("error", e, t);
      }
    }
    function Me(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var v = t.map(function(l) {
          return String(l);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ne = !1, Ue = !1, Ve = !1, Be = !1, qe = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === m || qe || e === f || e === E || e === h || Be || e === W || Ne || Ue || Ve || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === x || e.$$typeof === p || e.$$typeof === g || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function ae(e) {
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
          case g:
            var r = e;
            return ae(r) + ".Consumer";
          case p:
            var t = e;
            return ae(t._context) + ".Provider";
          case i:
            return Ge(e, e.render, "ForwardRef");
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
    var O = Object.assign, Y = 0, oe, ue, ie, se, ce, le, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function ze() {
      {
        if (Y === 0) {
          oe = console.log, ue = console.info, ie = console.warn, se = console.error, ce = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        Y++;
      }
    }
    function He() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: oe
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: ie
            }),
            error: O({}, e, {
              value: se
            }),
            group: O({}, e, {
              value: ce
            }),
            groupCollapsed: O({}, e, {
              value: le
            }),
            groupEnd: O({}, e, {
              value: fe
            })
          });
        }
        Y < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, G;
    function M(e, r, t) {
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
    var z = !1, N;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ke();
    }
    function ve(e, r) {
      if (!e || z)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      z = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = J.current, J.current = null, ze();
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
          for (var s = C.stack.split(`
`), _ = o.stack.split(`
`), y = s.length - 1, R = _.length - 1; y >= 1 && R >= 0 && s[y] !== _[R]; )
            R--;
          for (; y >= 1 && R >= 0; y--, R--)
            if (s[y] !== _[R]) {
              if (y !== 1 || R !== 1)
                do
                  if (y--, R--, R < 0 || s[y] !== _[R]) {
                    var P = `
` + s[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, P), P;
                  }
                while (y >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = v, He(), Error.prepareStackTrace = d;
      }
      var A = e ? e.displayName || e.name : "", Te = A ? M(A) : "";
      return typeof e == "function" && N.set(e, Te), Te;
    }
    function Xe(e, r, t) {
      return ve(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ze(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case E:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Xe(e.render);
          case x:
            return U(e.type, r, t);
          case S: {
            var o = e, d = o._payload, v = o._init;
            try {
              return U(v(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, pe = {}, he = k.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Qe(e, r, t, o, d) {
      {
        var v = Function.call.bind(V);
        for (var l in e)
          if (v(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var _ = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              s = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              s = y;
            }
            s && !(s instanceof Error) && (B(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof s), B(null)), s instanceof Error && !(s.message in pe) && (pe[s.message] = !0, B(d), b("Failed %s type: %s", t, s.message), B(null));
          }
      }
    }
    var er = Array.isArray;
    function H(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function tr(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ge(e) {
      if (tr(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), me(e);
    }
    var I = k.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Re, K;
    K = {};
    function ar(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = T(I.current.type);
        K[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(I.current.type), e.ref), K[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          ye || (ye = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, o, d, v, l) {
      var s = {
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
        value: d
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, t, o, d) {
      {
        var v, l = {}, s = null, _ = null;
        t !== void 0 && (ge(t), s = "" + t), or(r) && (ge(r.key), s = "" + r.key), ar(r) && (_ = r.ref, ur(r, d));
        for (v in r)
          V.call(r, v) && !nr.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            l[v] === void 0 && (l[v] = y[v]);
        }
        if (s || _) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(l, R), _ && sr(l, R);
        }
        return cr(e, s, _, d, o, I.current, l);
      }
    }
    var X = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function be() {
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
    function fr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var _e = {};
    function dr(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = dr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + T(e._owner.type) + "."), j(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), j(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            Q(o) && Pe(o, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = We(e);
          if (typeof d == "function" && d !== e.entries)
            for (var v = d.call(e), l; !(l = v.next()).done; )
              Q(l.value) && Pe(l.value, r);
        }
      }
    }
    function vr(e) {
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
          Qe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var d = T(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
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
    function xe(e, r, t, o, d, v) {
      {
        var l = Je(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = fr(d);
          _ ? s += _ : s += be();
          var y;
          e === null ? y = "null" : H(e) ? y = "array" : e !== void 0 && e.$$typeof === n ? (y = "<" + (T(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, s);
        }
        var R = lr(e, r, t, d, v);
        if (R == null)
          return R;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (H(P)) {
                for (var A = 0; A < P.length; A++)
                  we(P[A], e);
                Object.freeze && Object.freeze(P);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(P, e);
        }
        return e === u ? pr(R) : vr(R), R;
      }
    }
    function hr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function mr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var gr = mr, yr = hr;
    L.Fragment = u, L.jsx = gr, L.jsxs = yr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ee.exports = br() : ee.exports = _r();
var q = ee.exports;
const re = (a, n = !1) => {
  const c = n ? "^" : "", u = n ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)", f = c + a.replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\#/g, "\\#").replace(/★/g, ".*") + u;
  return new RegExp(f);
}, Pr = (a, n) => !n || a.length === 0 ? !1 : !!a.slice().find((u) => re(u, !0).test(n)), wr = ({
  state: a,
  dispatch: n,
  millisecond: c,
  preventArr: u,
  router: f
}) => {
  const m = w(!0), p = w(0);
  F(() => {
    if (m.current || Pr(u, f)) {
      m.current = !1, n({
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
}, De = {
  firstAccess: !0,
  prev: null,
  current: null,
  next: null,
  phase: null,
  yPosBeforeLeave: 0
}, xr = {
  millisecond: 0,
  second: 0
}, Fe = ke(xr), Ye = ke(De), $r = ({
  millisecond: a,
  preventArr: n,
  router: c,
  children: u
}) => {
  const [f] = Rr({
    millisecond: a,
    second: a / 1e3
  }), [m, p] = je(
    (g, i) => ({
      ...g,
      ...i
    }),
    De
  );
  return wr({
    state: m,
    dispatch: p,
    router: c,
    millisecond: a,
    preventArr: n
  }), /* @__PURE__ */ q.jsx(Fe.Provider, { value: f, children: /* @__PURE__ */ q.jsx(Ye.Provider, { value: m, children: u }) });
}, Tr = () => Ae(Fe), Cr = () => Ae(Ye), Ie = (a, n) => a.slice().sort((c, u) => u.path.length - c.path.length).find((c) => re(c.path, !1).test(n)), $e = ({ pages: a, router: n, children: c }) => {
  const u = Ie(a, n);
  return u ? u.children : c;
}, Sr = ({
  pages: a,
  router: n,
  state: c
}) => {
  const u = Ie(a, n);
  return (u == null ? void 0 : u.children) === c.current;
}, Or = (a, n) => {
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
}, kr = ({
  router: a,
  mode: n,
  millisecond: c,
  state: u,
  pages: f,
  children: m,
  dispatch: p
}) => {
  const g = w(!0), i = w(0), E = () => {
    const h = $e({
      pages: f,
      router: a,
      children: m
    });
    !h || Sr({ pages: f, router: a, state: u }) || p({
      type: n === "wait" ? "update-unmount" : "update",
      component: h,
      restorePos: {
        key: a,
        pos: window.scrollY || document.documentElement.scrollTop || 0
      }
    });
  };
  F(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    return n === "wait" ? i.current = setTimeout(E, c) : E(), () => {
      clearTimeout(i.current);
    };
  }, [a]);
}, jr = ({
  state: a,
  mode: n,
  millisecond: c,
  dispatch: u
}) => {
  const f = w(!0), m = w(0), p = () => {
    n === "sync" && u({
      type: "unmount-prev"
    });
  };
  F(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    if (!(!a.next && n === "sync"))
      return n === "wait" ? p() : m.current = setTimeout(p, c), () => {
        clearTimeout(m.current);
      };
  }, [a.current, a.next]);
}, Ar = ({
  cache: a,
  key: n,
  isPopstate: c,
  pos: u
}) => c === !1 ? (a.backPosY = u, a.keysArr.push(n), 0) : n === a.keysArr[a.keysArr.length - 2] ? (a.keysArr = [n], a.backPosY || 0) : (a.keysArr = [n], 0), Dr = ({
  scrollRestoration: a,
  state: n
}) => {
  const c = w(!0), u = w(!1), f = w({
    backPosY: 0,
    keysArr: []
  });
  F(() => {
    if (c.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        u.current = !0;
      }), f.current.keysArr.push(n.restorePos.key), c.current = !1;
      return;
    }
    if (a === "top")
      window.scrollTo({ top: 0 });
    else if (a === "restore") {
      const m = Ar({
        cache: f.current,
        key: n.restorePos.key,
        isPopstate: u.current,
        pos: n.restorePos.pos
      });
      window.scrollTo({ top: m }), u.current = !1;
    }
  }, [n.restorePos]);
}, Fr = ({
  pages: a,
  mode: n,
  scrollRestoration: c,
  router: u,
  children: f
}) => {
  const m = Tr().millisecond, [p, g] = je(Or, {
    current: $e({ pages: a, router: u, children: f }),
    next: null,
    restorePos: {
      key: u,
      pos: 0
    }
  });
  return kr({
    router: u,
    mode: n,
    millisecond: m,
    state: p,
    pages: a,
    children: f,
    dispatch: g
  }), jr({ state: p, mode: n, millisecond: m, dispatch: g }), Dr({ scrollRestoration: c, state: p }), /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    p.current && p.current,
    p.next && p.next
  ] });
}, Lr = Er(Fr), D = (a, n) => n ? a.slice().find((u) => re(u, !0).test(n)) ?? !1 : !1, Yr = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const c = window.pageYOffset || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + c;
}, Wr = ({
  isReRender: a = !0,
  mode: n,
  once: c,
  leave: u,
  enter: f,
  afterEnter: m
}) => {
  const p = w(!0), g = w(null), i = Cr();
  F(() => {
    g.current = location.pathname;
  }, []), F(() => {
    if (i.firstAccess) {
      p.current && (c && c(), p.current = !1);
      return;
    }
    const E = {
      prev: i.prev,
      current: i.current,
      next: i.next,
      yPosBeforeLeave: i.yPosBeforeLeave,
      isPrev: (h) => D(h, i.prev),
      isCurrent: (h) => D(h, i.current),
      isNext: (h) => D(h, i.next),
      getHashPos: () => Yr()
    };
    if (i.phase === "leave")
      n === "wait" && u && u(E), n === "sync" && (g.current === location.pathname ? f && f({
        ...E,
        prev: i.current,
        current: i.next,
        isPrev: (h) => D(h, i.current),
        isCurrent: (h) => D(h, i.next)
      }) : u && u(E));
    else if (i.phase === "enter") {
      if (n === "sync" && D([i.current], location.pathname) && m && m(E), g.current !== location.pathname && a)
        return;
      n === "wait" && f && f(E);
    }
  }, [i]);
};
export {
  $r as MekuriContext,
  Lr as MekuriLayout,
  Wr as useMekuriAnimation,
  Tr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
