import Oe, { useRef as P, useEffect as F, createContext as te, useState as ee, useContext as q, useReducer as mr, Children as yr, isValidElement as Rr } from "react";
var re = { exports: {} }, $ = {};
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
function br() {
  if (Se)
    return $;
  Se = 1;
  var n = Oe, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, g, E) {
    var _, C = {}, S = null, M = null;
    E !== void 0 && (S = "" + E), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (M = g.ref);
    for (_ in g)
      u.call(g, _) && !p.hasOwnProperty(_) && (C[_] = g[_]);
    if (m && m.defaultProps)
      for (_ in g = m.defaultProps, g)
        C[_] === void 0 && (C[_] = g[_]);
    return { $$typeof: a, type: m, key: S, ref: M, props: C, _owner: v.current };
  }
  return $.Fragment = c, $.jsx = d, $.jsxs = d, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Er() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Oe, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ye = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ye];
      return typeof r == "function" ? r : null;
    }
    var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var o = O.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Me = !1, Le = !1, Be = !1, Ne = !1, Ue = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === p || Ue || e === v || e === E || e === _ || Ne || e === M || Me || Le || Be || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === C || e.$$typeof === d || e.$$typeof === m || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case c:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return oe(r) + ".Consumer";
          case d:
            var t = e;
            return oe(t._context) + ".Provider";
          case g:
            return qe(e, e.render, "ForwardRef");
          case C:
            var o = e.displayName || null;
            return o !== null ? o : w(e.type) || "Memo";
          case S: {
            var l = e, f = l._payload, s = l._init;
            try {
              return w(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, ie, se, ue, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function ze() {
      {
        if (I === 0) {
          ie = console.log, se = console.info, ue = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
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
        I++;
      }
    }
    function Je() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ie
            }),
            info: k({}, e, {
              value: se
            }),
            warn: k({}, e, {
              value: ue
            }),
            error: k({}, e, {
              value: le
            }),
            group: k({}, e, {
              value: ce
            }),
            groupCollapsed: k({}, e, {
              value: fe
            }),
            groupEnd: k({}, e, {
              value: de
            })
          });
        }
        I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = O.ReactCurrentDispatcher, J;
    function L(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            J = o && o[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, B;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ge();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      G = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = z.current, z.current = null, ze();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (x) {
              o = x;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (x) {
              o = x;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            o = x;
          }
          e();
        }
      } catch (x) {
        if (x && o && typeof x.stack == "string") {
          for (var i = x.stack.split(`
`), b = o.stack.split(`
`), h = i.length - 1, y = b.length - 1; h >= 1 && y >= 0 && i[h] !== b[y]; )
            y--;
          for (; h >= 1 && y >= 0; h--, y--)
            if (i[h] !== b[y]) {
              if (h !== 1 || y !== 1)
                do
                  if (h--, y--, y < 0 || i[h] !== b[y]) {
                    var T = `
` + i[h].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, T), T;
                  }
                while (h >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = f, Je(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", xe = A ? L(A) : "";
      return typeof e == "function" && B.set(e, xe), xe;
    }
    function He(e, r, t) {
      return pe(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ke(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case E:
          return L("Suspense");
        case _:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return He(e.render);
          case C:
            return N(e.type, r, t);
          case S: {
            var o = e, l = o._payload, f = o._init;
            try {
              return N(f(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ge = {}, he = O.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Xe(e, r, t, o, l) {
      {
        var f = Function.call.bind(U);
        for (var s in e)
          if (f(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var b = Error((o || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              i = e[s](r, s, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              i = h;
            }
            i && !(i instanceof Error) && (V(l), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, s, typeof i), V(null)), i instanceof Error && !(i.message in ge) && (ge[i.message] = !0, V(l), R("Failed %s type: %s", t, i.message), V(null));
          }
      }
    }
    var Ze = Array.isArray;
    function H(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function er(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ye(e) {
      if (er(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), me(e);
    }
    var Y = O.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, be, K;
    K = {};
    function tr(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = w(Y.current.type);
        K[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(Y.current.type), e.ref), K[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Re || (Re = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          be || (be = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, o, l, f, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
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
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ur(e, r, t, o, l) {
      {
        var f, s = {}, i = null, b = null;
        t !== void 0 && (ye(t), i = "" + t), nr(r) && (ye(r.key), i = "" + r.key), tr(r) && (b = r.ref, ar(r, l));
        for (f in r)
          U.call(r, f) && !rr.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (f in h)
            s[f] === void 0 && (s[f] = h[f]);
        }
        if (i || b) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && or(s, y), b && ir(s, y);
        }
        return sr(e, i, b, l, o, Y.current, s);
      }
    }
    var X = O.ReactCurrentOwner, Ee = O.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function _e() {
      {
        if (X.current) {
          var e = w(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Te = {};
    function cr(e) {
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
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = cr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + w(e._owner.type) + "."), j(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), j(null);
      }
    }
    function Ce(e, r) {
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
          var l = $e(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), s; !(s = f.next()).done; )
              Q(s.value) && Pe(s.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = w(r);
          Xe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var l = w(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            j(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function we(e, r, t, o, l, f) {
      {
        var s = Ve(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = lr(l);
          b ? i += b : i += _e();
          var h;
          e === null ? h = "null" : H(e) ? h = "array" : e !== void 0 && e.$$typeof === a ? (h = "<" + (w(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, i);
        }
        var y = ur(e, r, t, l, f);
        if (y == null)
          return y;
        if (s) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (H(T)) {
                for (var A = 0; A < T.length; A++)
                  Ce(T[A], e);
                Object.freeze && Object.freeze(T);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(T, e);
        }
        return e === u ? dr(y) : fr(y), y;
      }
    }
    function vr(e, r, t) {
      return we(e, r, t, !0);
    }
    function pr(e, r, t) {
      return we(e, r, t, !1);
    }
    var gr = pr, hr = vr;
    W.Fragment = u, W.jsx = gr, W.jsxs = hr;
  }()), W;
}
process.env.NODE_ENV === "production" ? re.exports = br() : re.exports = Er();
var D = re.exports;
const _r = ({
  trigger: n,
  setMekuriState: a,
  millisecond: c
}) => {
  const u = P(!0), v = P(0);
  F(() => {
    if (u.current) {
      u.current = !1, a((d) => ({
        ...d,
        initialRender: !1
      }));
      return;
    }
    const p = window.scrollY || document.documentElement.scrollTop;
    return a((d) => ({
      ...d,
      nextTrigger: n,
      phase: "leave",
      yPosBeforeLeave: p
    })), v.current = setTimeout(() => {
      a((d) => ({
        ...d,
        prevTrigger: d.currentTrigger,
        currentTrigger: n,
        nextTrigger: n,
        phase: "enter"
      }));
    }, c), () => {
      clearTimeout(v.current);
    };
  }, [n, c, a]);
}, Tr = {
  millisecond: 0,
  second: 0
}, Pr = {
  initialRender: !1,
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  yPosBeforeLeave: 0
}, Cr = {
  scrollRestoration: "top",
  mode: "wait"
}, je = te(Tr), Ae = te(Pr), De = te(Cr), Fr = ({
  trigger: n,
  millisecond: a = 1e3,
  scrollRestoration: c = "top",
  mode: u = "wait",
  children: v
}) => {
  const [p] = ee({
    millisecond: a,
    second: a / 1e3
  }), [d, m] = ee({
    initialRender: !0,
    prevTrigger: null,
    currentTrigger: n,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  }), [g] = ee({
    scrollRestoration: c,
    mode: u
  });
  return _r({
    trigger: n,
    setMekuriState: m,
    millisecond: a
  }), /* @__PURE__ */ D.jsx(je.Provider, { value: p, children: /* @__PURE__ */ D.jsx(De.Provider, { value: g, children: /* @__PURE__ */ D.jsx(Ae.Provider, { value: d, children: v }) }) });
}, Ir = () => q(je), Fe = () => q(De), Ie = () => q(Ae), wr = () => {
  const n = window.location.hash.substring(1);
  if (!n)
    return !1;
  const a = document.getElementById(n);
  if (!a)
    return !1;
  const c = window.scrollY || document.documentElement.scrollTop;
  return a.getBoundingClientRect().top + c;
}, Yr = ({
  onOnce: n,
  onLeave: a,
  onEnter: c,
  onEveryLeave: u,
  onEveryEnter: v
}) => {
  const p = P(!0), d = P(null), m = Ie(), { mode: g } = Fe();
  F(() => {
    d.current = location.pathname;
  }, []), F(() => {
    if (m.initialRender) {
      p.current && (n && n(), p.current = !1);
      return;
    }
    const E = {
      prevTrigger: m.prevTrigger,
      currentTrigger: m.currentTrigger,
      nextTrigger: m.nextTrigger,
      yPosBeforeLeave: m.yPosBeforeLeave,
      getHashPos: () => wr()
    };
    m.phase === "leave" && (u && u(E), g === "wait" && a && a(E), g === "sync" && (d.current === location.pathname ? c && c({
      ...E,
      prevTrigger: m.currentTrigger,
      currentTrigger: m.nextTrigger
    }) : a && a(E))), m.phase === "enter" && (v && v(E), d.current === location.pathname && g === "wait" && c && c(E));
  }, [m]);
}, $r = ({ routerContext: n, children: a }) => {
  const c = q(n), u = P(c).current;
  return /* @__PURE__ */ D.jsx(n.Provider, { value: u, children: a });
}, xr = ({
  mekuriState: n,
  mode: a,
  children: c,
  setComponentState: u
}) => {
  const v = P(!0), p = (d) => {
    u({
      type: d,
      nextChildren: c,
      restorePos: {
        key: n.currentTrigger || "",
        pos: n.yPosBeforeLeave
      }
    });
  };
  F(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    n.phase === "enter" && a === "wait" && p("update-unmount"), n.phase === "leave" && a === "sync" && p("update");
  }, [n]);
}, Sr = ({
  mekuriState: n,
  mode: a,
  setComponentState: c
}) => {
  const u = P(!0);
  F(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    n.phase === "enter" && a === "sync" && c({
      type: "unmount-prev"
    });
  }, [n]);
}, kr = ({
  cache: n,
  key: a,
  isPopstate: c,
  pos: u
}) => {
  if (c === !1)
    return n.backPosY = u, n.keysArr.push(a), 0;
  const v = a === n.keysArr[n.keysArr.length - 2] && n.backPosY || 0;
  return n.keysArr = [a], v;
}, Or = ({
  scrollRestoration: n,
  componentState: a
}) => {
  const c = P(!0), u = P(!1), v = P({
    backPosY: 0,
    keysArr: []
  }), p = () => {
    const d = kr({
      cache: v.current,
      key: a.restorePos.key,
      isPopstate: u.current,
      pos: a.restorePos.pos
    });
    return u.current = !1, d;
  };
  F(() => {
    if (n !== "none") {
      if (c.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          u.current = !0;
        }), v.current.keysArr.push(a.restorePos.key), c.current = !1;
        return;
      }
      switch (n) {
        case "top":
          window.scrollTo({ top: 0 });
          break;
        case "restore":
          window.scrollTo({ top: p() });
          break;
        default:
          typeof n == "object" && "scrollRestoration" in n && (n.scrollRestoration === "top" ? n.onRestore(0) : n.scrollRestoration === "restore" && n.onRestore(p()));
          break;
      }
    }
  }, [a.restorePos]);
}, jr = (n, a) => {
  switch (a.type) {
    case "update":
      return {
        ...n,
        nextChildren: a.nextChildren || null,
        restorePos: a.restorePos
      };
    case "unmount-prev":
      return {
        ...n,
        currentChildren: n.nextChildren || null,
        nextChildren: null
      };
    case "update-unmount":
      return {
        ...n,
        currentChildren: a.nextChildren || null,
        restorePos: a.restorePos
      };
    default:
      throw new Error();
  }
};
function Ar(n) {
  return yr.toArray(n).filter(
    Rr
  );
}
const Wr = ({ children: n }) => {
  const a = Ar(n), { scrollRestoration: c, mode: u } = Fe(), v = Ie(), [p, d] = mr(jr, {
    currentChildren: a,
    nextChildren: null,
    restorePos: {
      key: v.currentTrigger ?? "",
      pos: 0
    }
  });
  return xr({
    mekuriState: v,
    mode: u,
    children: a,
    setComponentState: d
  }), Sr({
    mekuriState: v,
    mode: u,
    setComponentState: d
  }), Or({ scrollRestoration: c, componentState: p }), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    p.currentChildren,
    p.nextChildren
  ] });
};
export {
  Wr as Mekuri,
  Fr as MekuriContext,
  $r as MekuriFreezer,
  Yr as useMekuriAnimation,
  Ir as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
