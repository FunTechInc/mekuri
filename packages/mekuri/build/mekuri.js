import ke, { useRef as C, useEffect as F, createContext as te, useState as ee, useContext as q, useReducer as mr, Children as yr, isValidElement as Rr } from "react";
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
  var n = ke, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, p, E) {
    var _, P = {}, S = null, M = null;
    E !== void 0 && (S = "" + E), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (M = p.ref);
    for (_ in p)
      s.call(p, _) && !h.hasOwnProperty(_) && (P[_] = p[_]);
    if (m && m.defaultProps)
      for (_ in p = m.defaultProps, p)
        P[_] === void 0 && (P[_] = p[_]);
    return { $$typeof: a, type: m, key: S, ref: M, props: P, _owner: v.current };
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
var Oe;
function Er() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ke, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ye = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ye];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Me = !1, Le = !1, Ne = !1, Ue = !1, Ve = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === h || Ve || e === v || e === E || e === _ || Ue || e === M || Me || Le || Ne || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === P || e.$$typeof === d || e.$$typeof === m || e.$$typeof === p || // This needs to include all possible module reference object
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
        case s:
          return "Fragment";
        case c:
          return "Portal";
        case h:
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
          case p:
            return qe(e, e.render, "ForwardRef");
          case P:
            var o = e.displayName || null;
            return o !== null ? o : w(e.type) || "Memo";
          case S: {
            var l = e, f = l._payload, u = l._init;
            try {
              return w(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, I = 0, ie, ue, se, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function ze() {
      {
        if (I === 0) {
          ie = console.log, ue = console.info, se = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
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
            log: O({}, e, {
              value: ie
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: se
            }),
            error: O({}, e, {
              value: le
            }),
            group: O({}, e, {
              value: ce
            }),
            groupCollapsed: O({}, e, {
              value: fe
            }),
            groupEnd: O({}, e, {
              value: de
            })
          });
        }
        I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = k.ReactCurrentDispatcher, J;
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
    var G = !1, N;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ge();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = N.get(e);
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
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (x) {
              o = x;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (x) {
              o = x;
            }
            e.call(u.prototype);
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
`), g = i.length - 1, y = b.length - 1; g >= 1 && y >= 0 && i[g] !== b[y]; )
            y--;
          for (; g >= 1 && y >= 0; g--, y--)
            if (i[g] !== b[y]) {
              if (g !== 1 || y !== 1)
                do
                  if (g--, y--, y < 0 || i[g] !== b[y]) {
                    var T = `
` + i[g].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, T), T;
                  }
                while (g >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = f, Je(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", xe = A ? L(A) : "";
      return typeof e == "function" && N.set(e, xe), xe;
    }
    function He(e, r, t) {
      return pe(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
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
          case p:
            return He(e.render);
          case P:
            return U(e.type, r, t);
          case S: {
            var o = e, l = o._payload, f = o._init;
            try {
              return U(f(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, ge = {}, he = k.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Xe(e, r, t, o, l) {
      {
        var f = Function.call.bind(V);
        for (var u in e)
          if (f(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var b = Error((o || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              i = e[u](r, u, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              i = g;
            }
            i && !(i instanceof Error) && (B(l), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, u, typeof i), B(null)), i instanceof Error && !(i.message in ge) && (ge[i.message] = !0, B(l), R("Failed %s type: %s", t, i.message), B(null));
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
    var Y = k.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, be, K;
    K = {};
    function tr(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (V.call(e, "key")) {
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
    var ur = function(e, r, t, o, l, f, u) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
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
    function sr(e, r, t, o, l) {
      {
        var f, u = {}, i = null, b = null;
        t !== void 0 && (ye(t), i = "" + t), nr(r) && (ye(r.key), i = "" + r.key), tr(r) && (b = r.ref, ar(r, l));
        for (f in r)
          V.call(r, f) && !rr.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            u[f] === void 0 && (u[f] = g[f]);
        }
        if (i || b) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && or(u, y), b && ir(u, y);
        }
        return ur(e, i, b, l, o, Y.current, u);
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
    function Ce(e, r) {
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
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            Q(o) && Ce(o, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = $e(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), u; !(u = f.next()).done; )
              Q(u.value) && Ce(u.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === P))
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
        var u = Be(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = lr(l);
          b ? i += b : i += _e();
          var g;
          e === null ? g = "null" : H(e) ? g = "array" : e !== void 0 && e.$$typeof === a ? (g = "<" + (w(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, i);
        }
        var y = sr(e, r, t, l, f);
        if (y == null)
          return y;
        if (u) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (H(T)) {
                for (var A = 0; A < T.length; A++)
                  Pe(T[A], e);
                Object.freeze && Object.freeze(T);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(T, e);
        }
        return e === s ? dr(y) : fr(y), y;
      }
    }
    function vr(e, r, t) {
      return we(e, r, t, !0);
    }
    function pr(e, r, t) {
      return we(e, r, t, !1);
    }
    var gr = pr, hr = vr;
    W.Fragment = s, W.jsx = gr, W.jsxs = hr;
  }()), W;
}
process.env.NODE_ENV === "production" ? re.exports = br() : re.exports = Er();
var D = re.exports;
const _r = ({
  trigger: n,
  setMekuriState: a,
  millisecond: c
}) => {
  const s = C(!0), v = C(0);
  F(() => {
    if (s.current) {
      s.current = !1, a((d) => ({
        ...d,
        initialRender: !1
      }));
      return;
    }
    const h = window.scrollY || document.documentElement.scrollTop;
    return a((d) => ({
      ...d,
      nextTrigger: n,
      phase: "leave",
      yPosBeforeLeave: h
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
}, Cr = {
  initialRender: !1,
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  yPosBeforeLeave: 0
}, Pr = {
  scrollRestoration: "top",
  mode: "wait"
}, je = te(Tr), Ae = te(Cr), De = te(Pr), Fr = ({
  trigger: n,
  millisecond: a = 1e3,
  scrollRestoration: c = "top",
  mode: s = "wait",
  children: v
}) => {
  const [h] = ee({
    millisecond: a,
    second: a / 1e3
  }), [d, m] = ee({
    initialRender: !0,
    prevTrigger: null,
    currentTrigger: n,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  }), [p] = ee({
    scrollRestoration: c,
    mode: s
  });
  return _r({
    trigger: n,
    setMekuriState: m,
    millisecond: a
  }), /* @__PURE__ */ D.jsx(je.Provider, { value: h, children: /* @__PURE__ */ D.jsx(De.Provider, { value: p, children: /* @__PURE__ */ D.jsx(Ae.Provider, { value: d, children: v }) }) });
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
  onEveryLeave: s,
  onEveryEnter: v
}) => {
  const h = C(!0), d = C(null), m = Ie(), { mode: p } = Fe();
  F(() => {
    d.current = location.pathname;
  }, []), F(() => {
    if (m.initialRender) {
      h.current && (n && n(), h.current = !1);
      return;
    }
    const E = {
      prevTrigger: m.prevTrigger,
      currentTrigger: m.currentTrigger,
      nextTrigger: m.nextTrigger,
      yPosBeforeLeave: m.yPosBeforeLeave,
      getHashPos: () => wr()
    };
    m.phase === "leave" && (s && s(E), p === "wait" && a && a(E), p === "sync" && (d.current === location.pathname ? c && c({
      ...E,
      prevTrigger: m.currentTrigger,
      currentTrigger: m.nextTrigger
    }) : a && a(E))), m.phase === "enter" && (v && v(E), d.current === location.pathname && p === "wait" && c && c(E));
  }, [m]);
}, $r = ({ routerContext: n, children: a }) => {
  const c = q(n), s = C(c).current;
  return /* @__PURE__ */ D.jsx(n.Provider, { value: s, children: a });
}, xr = ({
  mekuriState: n,
  mode: a,
  children: c,
  setComponentState: s
}) => {
  const v = C(!0), h = (d) => {
    s({
      type: d,
      nextChildren: c,
      restorePos: {
        key: n.currentTrigger || "",
        pos: window.scrollY || document.documentElement.scrollTop || 0
      }
    });
  };
  F(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    n.phase === "enter" && a === "wait" && h("update-unmount"), n.phase === "leave" && a === "sync" && h("update");
  }, [n]);
}, Sr = ({
  mekuriState: n,
  mode: a,
  setComponentState: c
}) => {
  const s = C(!0);
  F(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    n.phase === "enter" && a === "sync" && c({
      type: "unmount-prev"
    });
  }, [n]);
}, Or = ({
  cache: n,
  key: a,
  isPopstate: c,
  pos: s
}) => c === !1 ? (n.backPosY = s, n.keysArr.push(a), 0) : a === n.keysArr[n.keysArr.length - 2] ? (n.keysArr = [a], n.backPosY || 0) : (n.keysArr = [a], 0), kr = ({
  scrollRestoration: n,
  componentState: a
}) => {
  const c = C(!0), s = C(!1), v = C({
    backPosY: 0,
    keysArr: []
  });
  F(() => {
    if (n !== "none") {
      if (c.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          s.current = !0;
        }), v.current.keysArr.push(a.restorePos.key), c.current = !1;
        return;
      }
      if (n === "top" && window.scrollTo({ top: 0 }), n === "restore") {
        const h = Or({
          cache: v.current,
          key: a.restorePos.key,
          isPopstate: s.current,
          pos: a.restorePos.pos
        });
        window.scrollTo({ top: h }), s.current = !1;
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
  const a = Ar(n), { scrollRestoration: c, mode: s } = Fe(), v = Ie(), [h, d] = mr(jr, {
    currentChildren: a,
    nextChildren: null,
    restorePos: {
      key: v.currentTrigger ?? "",
      pos: 0
    }
  });
  return xr({
    mekuriState: v,
    mode: s,
    children: a,
    setComponentState: d
  }), Sr({
    mekuriState: v,
    mode: s,
    setComponentState: d
  }), kr({ scrollRestoration: c, componentState: h }), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    h.currentChildren,
    h.nextChildren
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
