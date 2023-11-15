import ke, { useRef as P, useEffect as A, createContext as te, useState as ee, useContext as q, useCallback as Oe, useReducer as yr, Children as mr, isValidElement as Er } from "react";
var re = { exports: {} }, L = {};
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
function _r() {
  if (Se)
    return L;
  Se = 1;
  var n = ke, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, p = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(m, u, R) {
    var b, h = {}, C = null, $ = null;
    R !== void 0 && (C = "" + R), u.key !== void 0 && (C = "" + u.key), u.ref !== void 0 && ($ = u.ref);
    for (b in u)
      c.call(u, b) && !d.hasOwnProperty(b) && (h[b] = u[b]);
    if (m && m.defaultProps)
      for (b in u = m.defaultProps, u)
        h[b] === void 0 && (h[b] = u[b]);
    return { $$typeof: a, type: m, key: C, ref: $, props: h, _owner: p.current };
  }
  return L.Fragment = i, L.jsx = g, L.jsxs = g, L;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Tr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ke, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), m = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ne = Symbol.iterator, Le = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var o = j.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var v = t.map(function(l) {
          return String(l);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var We = !1, Ue = !1, Be = !1, Ne = !1, Ve = !1, ae;
    ae = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === d || Ve || e === p || e === R || e === b || Ne || e === $ || We || Ue || Be || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === h || e.$$typeof === g || e.$$typeof === m || e.$$typeof === u || // This needs to include all possible module reference object
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
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case d:
          return "Profiler";
        case p:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return oe(r) + ".Consumer";
          case g:
            var t = e;
            return oe(t._context) + ".Provider";
          case u:
            return ze(e, e.render, "ForwardRef");
          case h:
            var o = e.displayName || null;
            return o !== null ? o : x(e.type) || "Memo";
          case C: {
            var f = e, v = f._payload, l = f._init;
            try {
              return x(l(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, I = 0, ie, ue, se, ce, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Je() {
      {
        if (I === 0) {
          ie = console.log, ue = console.info, se = console.warn, ce = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
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
    function Ge() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ie
            }),
            info: S({}, e, {
              value: ue
            }),
            warn: S({}, e, {
              value: se
            }),
            error: S({}, e, {
              value: ce
            }),
            group: S({}, e, {
              value: le
            }),
            groupCollapsed: S({}, e, {
              value: fe
            }),
            groupEnd: S({}, e, {
              value: de
            })
          });
        }
        I < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = j.ReactCurrentDispatcher, J;
    function W(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            J = o && o[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, U;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      U = new He();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      G = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = z.current, z.current = null, Je();
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
            } catch (O) {
              o = O;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (O) {
              o = O;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            o = O;
          }
          e();
        }
      } catch (O) {
        if (O && o && typeof O.stack == "string") {
          for (var s = O.stack.split(`
`), T = o.stack.split(`
`), y = s.length - 1, E = T.length - 1; y >= 1 && E >= 0 && s[y] !== T[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (s[y] !== T[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || s[y] !== T[E]) {
                    var w = `
` + s[y].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, w), w;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = v, Ge(), Error.prepareStackTrace = f;
      }
      var D = e ? e.displayName || e.name : "", xe = D ? W(D) : "";
      return typeof e == "function" && U.set(e, xe), xe;
    }
    function Ke(e, r, t) {
      return pe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Xe(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case R:
          return W("Suspense");
        case b:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ke(e.render);
          case h:
            return B(e.type, r, t);
          case C: {
            var o = e, f = o._payload, v = o._init;
            try {
              return B(v(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, he = {}, ge = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ze(e, r, t, o, f) {
      {
        var v = Function.call.bind(N);
        for (var l in e)
          if (v(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var T = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              s = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              s = y;
            }
            s && !(s instanceof Error) && (V(f), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof s), V(null)), s instanceof Error && !(s.message in he) && (he[s.message] = !0, V(f), _("Failed %s type: %s", t, s.message), V(null));
          }
      }
    }
    var Qe = Array.isArray;
    function H(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ye(e) {
      if (rr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), be(e);
    }
    var Y = j.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, Ee, K;
    K = {};
    function nr(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = x(Y.current.type);
        K[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(Y.current.type), e.ref), K[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          me || (me = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
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
    var sr = function(e, r, t, o, f, v, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
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
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function cr(e, r, t, o, f) {
      {
        var v, l = {}, s = null, T = null;
        t !== void 0 && (ye(t), s = "" + t), ar(r) && (ye(r.key), s = "" + r.key), nr(r) && (T = r.ref, or(r, f));
        for (v in r)
          N.call(r, v) && !tr.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            l[v] === void 0 && (l[v] = y[v]);
        }
        if (s || T) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(l, E), T && ur(l, E);
        }
        return sr(e, s, T, f, o, Y.current, l);
      }
    }
    var X = j.ReactCurrentOwner, _e = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Te() {
      {
        if (X.current) {
          var e = x(X.current.type);
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
    var Re = {};
    function fr(e) {
      {
        var r = Te();
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
        var t = fr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + x(e._owner.type) + "."), k(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), k(null);
      }
    }
    function we(e, r) {
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
          var f = Me(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), l; !(l = v.next()).done; )
              Q(l.value) && Ce(l.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = x(r);
          Ze(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = x(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            k(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Pe(e, r, t, o, f, v) {
      {
        var l = qe(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = lr(f);
          T ? s += T : s += Te();
          var y;
          e === null ? y = "null" : H(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (x(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, s);
        }
        var E = cr(e, r, t, f, v);
        if (E == null)
          return E;
        if (l) {
          var w = r.children;
          if (w !== void 0)
            if (o)
              if (H(w)) {
                for (var D = 0; D < w.length; D++)
                  we(w[D], e);
                Object.freeze && Object.freeze(w);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(w, e);
        }
        return e === c ? vr(E) : dr(E), E;
      }
    }
    function pr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function hr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var gr = hr, br = pr;
    M.Fragment = c, M.jsx = gr, M.jsxs = br;
  }()), M;
}
process.env.NODE_ENV === "production" ? re.exports = _r() : re.exports = Tr();
var F = re.exports;
const Rr = ({
  trigger: n,
  setMekuriState: a,
  millisecond: i
}) => {
  const c = P(n), p = P(0);
  A(() => (c.current !== n && (c.current = n, a((d) => ({
    ...d,
    nextTrigger: n,
    phase: "leave",
    yPosBeforeLeave: window.scrollY || document.documentElement.scrollTop
  })), p.current = setTimeout(() => {
    a((d) => ({
      ...d,
      prevTrigger: d.currentTrigger,
      currentTrigger: n,
      nextTrigger: n,
      phase: "enter"
    }));
  }, i)), () => {
    clearTimeout(p.current);
  }), [n, i, a]);
}, Cr = {
  millisecond: 0,
  second: 0
}, wr = {
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  yPosBeforeLeave: 0
}, Pr = {
  scrollRestoration: "top",
  mode: "wait"
}, De = te(Cr), Fe = te(wr), Ae = te(Pr), Ir = ({
  trigger: n,
  millisecond: a = 1e3,
  scrollRestoration: i = "top",
  mode: c = "wait",
  children: p
}) => {
  const [d] = ee({
    scrollRestoration: i,
    mode: c
  }), [g] = ee({
    millisecond: a,
    second: a / 1e3
  }), [m, u] = ee({
    prevTrigger: null,
    currentTrigger: n,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  });
  return Rr({
    trigger: n,
    setMekuriState: u,
    millisecond: a
  }), /* @__PURE__ */ F.jsx(De.Provider, { value: g, children: /* @__PURE__ */ F.jsx(Ae.Provider, { value: d, children: /* @__PURE__ */ F.jsx(Fe.Provider, { value: m, children: p }) }) });
}, Yr = () => q(De), Ie = () => q(Ae), Ye = () => q(Fe), xr = () => {
  const n = window.location.hash.substring(1);
  if (!n)
    return !1;
  const a = document.getElementById(n);
  if (!a)
    return !1;
  const i = window.scrollY || document.documentElement.scrollTop;
  return a.getBoundingClientRect().top + i;
}, Or = (n, a) => {
  const i = n == null ? void 0 : n.current;
  if (!i)
    return;
  new IntersectionObserver(
    (p, d) => {
      p.forEach((g) => {
        a(g.isIntersecting), d.unobserve(g.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, Lr = ({
  onOnce: n,
  onLeave: a,
  onEnter: i,
  onAfterSyncEnter: c,
  onEveryLeave: p,
  onEveryEnter: d
}) => {
  const g = P(!1), m = P(), u = Ye(), { mode: R } = Ie();
  A(() => {
    m.current = location.pathname;
  }, []), A(() => {
    const b = m.current === location.pathname, h = {
      prevTrigger: u.prevTrigger,
      currentTrigger: u.currentTrigger,
      nextTrigger: u.nextTrigger,
      yPosBeforeLeave: u.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Or
    };
    if (!g.current && u.phase === null) {
      n && n(h), g.current = !0;
      return;
    }
    u.phase === "leave" && (p && p(h), R === "wait" && a && a(h), R === "sync" && (b ? i && i({
      ...h,
      prevTrigger: u.currentTrigger,
      currentTrigger: u.nextTrigger
    }) : a && a(h))), u.phase === "enter" && (d && d(h), R === "wait" && b && i && i(h), R === "sync" && c && c(h));
  }, [u]);
}, Mr = ({
  routerContext: n,
  children: a
}) => {
  const i = q(n), c = P(i).current;
  return /* @__PURE__ */ F.jsx(n.Provider, { value: c, children: a });
}, Sr = ({
  mekuriState: n,
  mode: a,
  children: i,
  setComponentState: c
}) => {
  const p = P(!0), d = (g) => {
    c({
      type: g,
      nextChildren: i
    });
  };
  A(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    n.phase === "enter" && a === "wait" && d("update-and-unmount"), n.phase === "leave" && a === "sync" && d("update");
  }, [n.phase]);
}, jr = ({
  mekuriState: n,
  mode: a,
  setComponentState: i
}) => {
  const c = P(!0);
  A(() => {
    if (c.current) {
      c.current = !1;
      return;
    }
    n.phase === "enter" && a === "sync" && i({
      type: "unmount-prev"
    });
  }, [n.phase]);
}, kr = ({
  isCacheUpdate: n,
  offsetIndex: a,
  cache: i,
  key: c,
  isPopstate: p,
  pos: d
}) => {
  if (p === !1)
    return n && (i.backPosY = d, i.keysArr.push(c)), 0;
  const g = c === i.keysArr[i.keysArr.length - a] && i.backPosY || 0;
  return n && (i.keysArr = [c]), g;
}, Dr = ({
  mekuriState: n,
  scrollRestoration: a
}) => {
  const i = P(!0), c = P(!1), p = typeof a == "object" && "scrollRestoration" in a, d = P({
    backPosY: 0,
    keysArr: []
  }), g = p && !a.onEnter && a.onLeave, m = P(g ? "leave" : "enter"), u = Oe(
    (b) => {
      const h = m.current === b, C = kr({
        isCacheUpdate: h,
        offsetIndex: b === "enter" ? 2 : 1,
        cache: d.current,
        key: n.currentTrigger || "",
        pos: n.yPosBeforeLeave,
        isPopstate: c.current
      });
      return h && (c.current = !1), C;
    },
    [n.currentTrigger, n.yPosBeforeLeave, m]
  ), R = Oe(
    (b, h, C) => {
      b === "top" ? C(0) : b === "restore" && C(u(h));
    },
    [u]
  );
  A(() => {
    if (a !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          c.current = !0;
        }), d.current.keysArr.push(n.currentTrigger || ""), i.current = !1;
        return;
      }
      if (n.phase === "leave" && p && (a != null && a.onLeave) && R(
        a.scrollRestoration,
        n.phase,
        a.onLeave
      ), n.phase === "enter")
        switch (a) {
          case "top":
            window.scrollTo({ top: 0 });
            break;
          case "restore":
            window.scrollTo({ top: u(n.phase) });
            break;
          default:
            p && (a != null && a.onEnter) && R(
              a.scrollRestoration,
              n.phase,
              a.onEnter
            );
            break;
        }
    }
  }, [n.phase]);
};
function Fr(n) {
  return mr.toArray(n).filter(
    Er
  );
}
const $r = ({ children: n }) => {
  const { scrollRestoration: a, mode: i } = Ie(), c = Ye(), p = Fr(n), [d, g] = yr(
    (m, u) => {
      switch (u.type) {
        case "update":
          return {
            ...m,
            nextChildren: u.nextChildren || null
          };
        case "unmount-prev":
          return {
            ...m,
            currentChildren: m.nextChildren || null,
            nextChildren: null
          };
        case "update-and-unmount":
          return {
            ...m,
            currentChildren: u.nextChildren || null
          };
        default:
          throw new Error();
      }
    },
    {
      currentChildren: p,
      nextChildren: null
    }
  );
  return Sr({
    mekuriState: c,
    mode: i,
    children: p,
    setComponentState: g
  }), jr({
    mekuriState: c,
    mode: i,
    setComponentState: g
  }), Dr({ mekuriState: c, scrollRestoration: a }), /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    d.currentChildren,
    d.nextChildren
  ] });
};
export {
  $r as Mekuri,
  Ir as MekuriContext,
  Mr as MekuriFreezer,
  Or as intersectionObserverHandler,
  Lr as useMekuriAnimation,
  Yr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
