import ke, { useRef as P, useEffect as F, createContext as te, useState as ee, useContext as q, useCallback as Oe, useReducer as mr, Children as yr, isValidElement as Er } from "react";
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
  var a = ke, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, p, E) {
    var y, T = {}, C = null, M = null;
    E !== void 0 && (C = "" + E), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (M = p.ref);
    for (y in p)
      s.call(p, y) && !g.hasOwnProperty(y) && (T[y] = p[y]);
    if (h && h.defaultProps)
      for (y in p = h.defaultProps, p)
        T[y] === void 0 && (T[y] = p[y]);
    return { $$typeof: n, type: h, key: C, ref: M, props: T, _owner: d.current };
  }
  return L.Fragment = i, L.jsx = f, L.jsxs = f, L;
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
var je;
function Rr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ke, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ne = Symbol.iterator, Le = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Me("error", e, t);
      }
    }
    function Me(e, r, t) {
      {
        var o = j.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var v = t.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var We = !1, Ue = !1, Be = !1, Ne = !1, Ve = !1, ae;
    ae = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === g || Ve || e === d || e === E || e === y || Ne || e === M || We || Ue || Be || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === T || e.$$typeof === f || e.$$typeof === h || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
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
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case g:
          return "Profiler";
        case d:
          return "StrictMode";
        case E:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return oe(r) + ".Consumer";
          case f:
            var t = e;
            return oe(t._context) + ".Provider";
          case p:
            return ze(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : x(e.type) || "Memo";
          case C: {
            var l = e, v = l._payload, c = l._init;
            try {
              return x(c(v));
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
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
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
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = z.current, z.current = null, Je();
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
            } catch (O) {
              o = O;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (O) {
              o = O;
            }
            e.call(c.prototype);
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
          for (var u = O.stack.split(`
`), R = o.stack.split(`
`), b = u.length - 1, m = R.length - 1; b >= 1 && m >= 0 && u[b] !== R[m]; )
            m--;
          for (; b >= 1 && m >= 0; b--, m--)
            if (u[b] !== R[m]) {
              if (b !== 1 || m !== 1)
                do
                  if (b--, m--, m < 0 || u[b] !== R[m]) {
                    var w = `
` + u[b].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, w), w;
                  }
                while (b >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = v, Ge(), Error.prepareStackTrace = l;
      }
      var A = e ? e.displayName || e.name : "", xe = A ? W(A) : "";
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
        case E:
          return W("Suspense");
        case y:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ke(e.render);
          case T:
            return B(e.type, r, t);
          case C: {
            var o = e, l = o._payload, v = o._init;
            try {
              return B(v(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ge = {}, he = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ze(e, r, t, o, l) {
      {
        var v = Function.call.bind(N);
        for (var c in e)
          if (v(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var R = Error((o || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              u = e[c](r, c, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              u = b;
            }
            u && !(u instanceof Error) && (V(l), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, c, typeof u), V(null)), u instanceof Error && !(u.message in ge) && (ge[u.message] = !0, V(l), _("Failed %s type: %s", t, u.message), V(null));
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
    function me(e) {
      if (rr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), be(e);
    }
    var Y = j.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ee, K;
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
          ye || (ye = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
    var sr = function(e, r, t, o, l, v, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function cr(e, r, t, o, l) {
      {
        var v, c = {}, u = null, R = null;
        t !== void 0 && (me(t), u = "" + t), ar(r) && (me(r.key), u = "" + r.key), nr(r) && (R = r.ref, or(r, l));
        for (v in r)
          N.call(r, v) && !tr.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (v in b)
            c[v] === void 0 && (c[v] = b[v]);
        }
        if (u || R) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && ir(c, m), R && ur(c, m);
        }
        return sr(e, u, R, l, o, Y.current, c);
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
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Re() {
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
    var Te = {};
    function fr(e) {
      {
        var r = Re();
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
        if (Te[t])
          return;
        Te[t] = !0;
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
          var l = $e(e);
          if (typeof l == "function" && l !== e.entries)
            for (var v = l.call(e), c; !(c = v.next()).done; )
              Q(c.value) && Ce(c.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = x(r);
          Ze(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var l = x(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
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
    function Pe(e, r, t, o, l, v) {
      {
        var c = qe(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = lr(l);
          R ? u += R : u += Re();
          var b;
          e === null ? b = "null" : H(e) ? b = "array" : e !== void 0 && e.$$typeof === n ? (b = "<" + (x(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, u);
        }
        var m = cr(e, r, t, l, v);
        if (m == null)
          return m;
        if (c) {
          var w = r.children;
          if (w !== void 0)
            if (o)
              if (H(w)) {
                for (var A = 0; A < w.length; A++)
                  we(w[A], e);
                Object.freeze && Object.freeze(w);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(w, e);
        }
        return e === s ? vr(m) : dr(m), m;
      }
    }
    function pr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var hr = gr, br = pr;
    $.Fragment = s, $.jsx = hr, $.jsxs = br;
  }()), $;
}
process.env.NODE_ENV === "production" ? re.exports = _r() : re.exports = Rr();
var D = re.exports;
const Tr = ({
  trigger: a,
  setMekuriState: n,
  millisecond: i
}) => {
  const s = P(!0), d = P(0);
  F(() => {
    if (s.current) {
      s.current = !1, n((f) => ({
        ...f,
        initialRender: !1
      }));
      return;
    }
    const g = window.scrollY || document.documentElement.scrollTop;
    return n((f) => ({
      ...f,
      nextTrigger: a,
      phase: "leave",
      yPosBeforeLeave: g
    })), d.current = setTimeout(() => {
      n((f) => ({
        ...f,
        prevTrigger: f.currentTrigger,
        currentTrigger: a,
        nextTrigger: a,
        phase: "enter"
      }));
    }, i), () => {
      clearTimeout(d.current);
    };
  }, [a, i, n]);
}, Cr = {
  millisecond: 0,
  second: 0
}, wr = {
  initialRender: !1,
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  yPosBeforeLeave: 0
}, Pr = {
  scrollRestoration: "top",
  mode: "wait"
}, Ae = te(Cr), De = te(wr), Fe = te(Pr), Yr = ({
  trigger: a,
  millisecond: n = 1e3,
  scrollRestoration: i = "top",
  mode: s = "wait",
  children: d
}) => {
  const [g] = ee({
    millisecond: n,
    second: n / 1e3
  }), [f, h] = ee({
    initialRender: !0,
    prevTrigger: null,
    currentTrigger: a,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  }), [p] = ee({
    scrollRestoration: i,
    mode: s
  });
  return Tr({
    trigger: a,
    setMekuriState: h,
    millisecond: n
  }), /* @__PURE__ */ D.jsx(Ae.Provider, { value: g, children: /* @__PURE__ */ D.jsx(Fe.Provider, { value: p, children: /* @__PURE__ */ D.jsx(De.Provider, { value: f, children: d }) }) });
}, Lr = () => q(Ae), Ie = () => q(Fe), Ye = () => q(De), xr = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const i = window.scrollY || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + i;
}, Or = (a, n) => {
  const i = a == null ? void 0 : a.current;
  if (!i)
    return;
  new IntersectionObserver(
    (d, g) => {
      d.forEach((f) => {
        n(f.isIntersecting), g.unobserve(f.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, $r = ({
  onOnce: a,
  onLeave: n,
  onEnter: i,
  onEveryLeave: s,
  onEveryEnter: d
}) => {
  const g = P(!0), f = P(null), h = Ye(), { mode: p } = Ie();
  F(() => {
    f.current = location.pathname;
  }, []), F(() => {
    const E = {
      prevTrigger: h.prevTrigger,
      currentTrigger: h.currentTrigger,
      nextTrigger: h.nextTrigger,
      yPosBeforeLeave: h.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Or
    };
    if (h.initialRender) {
      g.current && (a && a(E), g.current = !1);
      return;
    }
    h.phase === "leave" && (s && s(E), p === "wait" && n && n(E), p === "sync" && (f.current === location.pathname ? i && i({
      ...E,
      prevTrigger: h.currentTrigger,
      currentTrigger: h.nextTrigger
    }) : n && n(E))), h.phase === "enter" && (d && d(E), f.current === location.pathname && p === "wait" && i && i(E));
  }, [h]);
}, Mr = ({ routerContext: a, children: n }) => {
  const i = q(a), s = P(i).current;
  return /* @__PURE__ */ D.jsx(a.Provider, { value: s, children: n });
}, Sr = ({
  mekuriState: a,
  mode: n,
  children: i,
  setComponentState: s
}) => {
  const d = P(!0), g = (f) => {
    s({
      type: f,
      nextChildren: i
    });
  };
  F(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    a.phase === "enter" && n === "wait" && g("update-unmount"), a.phase === "leave" && n === "sync" && g("update");
  }, [a.phase]);
}, jr = ({
  mekuriState: a,
  mode: n,
  setComponentState: i
}) => {
  const s = P(!0);
  F(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    a.phase === "enter" && n === "sync" && i({
      type: "unmount-prev"
    });
  }, [a.phase]);
}, kr = ({
  isCacheUpdate: a,
  offsetIndex: n,
  cache: i,
  key: s,
  isPopstate: d,
  pos: g
}) => {
  if (d === !1)
    return a && (i.backPosY = g, i.keysArr.push(s)), 0;
  const f = s === i.keysArr[i.keysArr.length - n] && i.backPosY || 0;
  return a && (i.keysArr = [s]), f;
}, Ar = ({
  mekuriState: a,
  scrollRestoration: n
}) => {
  const i = P(!0), s = P(!1), d = typeof n == "object" && "scrollRestoration" in n, g = P({
    backPosY: 0,
    keysArr: []
  }), f = d && !n.onEnter && n.onLeave, h = P(f ? "leave" : "enter"), p = Oe(
    (y) => {
      const T = h.current === y, C = kr({
        isCacheUpdate: T,
        offsetIndex: y === "enter" ? 2 : 1,
        cache: g.current,
        key: a.currentTrigger || "",
        pos: a.yPosBeforeLeave,
        isPopstate: s.current
      });
      return T && (s.current = !1), C;
    },
    [a.currentTrigger, a.yPosBeforeLeave, h]
  ), E = Oe(
    (y, T, C) => {
      y === "top" ? C(0) : y === "restore" && C(p(T));
    },
    [p]
  );
  F(() => {
    if (n !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          s.current = !0;
        }), g.current.keysArr.push(a.currentTrigger || ""), i.current = !1;
        return;
      }
      if (a.phase === "leave" && d && (n != null && n.onLeave) && E(
        n.scrollRestoration,
        a.phase,
        n.onLeave
      ), a.phase === "enter")
        switch (n) {
          case "top":
            window.scrollTo({ top: 0 });
            break;
          case "restore":
            window.scrollTo({ top: p(a.phase) });
            break;
          default:
            d && (n != null && n.onEnter) && E(
              n.scrollRestoration,
              a.phase,
              n.onEnter
            );
            break;
        }
    }
  }, [a.phase]);
}, Dr = (a, n) => {
  switch (n.type) {
    case "update":
      return {
        ...a,
        nextChildren: n.nextChildren || null
      };
    case "unmount-prev":
      return {
        ...a,
        currentChildren: a.nextChildren || null,
        nextChildren: null
      };
    case "update-unmount":
      return {
        ...a,
        currentChildren: n.nextChildren || null
      };
    default:
      throw new Error();
  }
};
function Fr(a) {
  return yr.toArray(a).filter(
    Er
  );
}
const Wr = ({ children: a }) => {
  const n = Fr(a), { scrollRestoration: i, mode: s } = Ie(), d = Ye(), [g, f] = mr(Dr, {
    currentChildren: n,
    nextChildren: null
  });
  return Sr({
    mekuriState: d,
    mode: s,
    children: n,
    setComponentState: f
  }), jr({
    mekuriState: d,
    mode: s,
    setComponentState: f
  }), Ar({ mekuriState: d, scrollRestoration: i }), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    g.currentChildren,
    g.nextChildren
  ] });
};
export {
  Wr as Mekuri,
  Yr as MekuriContext,
  Mr as MekuriFreezer,
  $r as useMekuriAnimation,
  Lr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
