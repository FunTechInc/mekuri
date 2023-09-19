import ke, { useRef as w, useEffect as A, createContext as te, useState as ee, useContext as q, useCallback as Oe, useReducer as yr, Children as mr, isValidElement as Er } from "react";
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
  var a = ke, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(b, g, R) {
    var d, T = {}, C = null, M = null;
    R !== void 0 && (C = "" + R), g.key !== void 0 && (C = "" + g.key), g.ref !== void 0 && (M = g.ref);
    for (d in g)
      s.call(g, d) && !h.hasOwnProperty(d) && (T[d] = g[d]);
    if (b && b.defaultProps)
      for (d in g = b.defaultProps, g)
        T[d] === void 0 && (T[d] = g[d]);
    return { $$typeof: n, type: b, key: C, ref: M, props: T, _owner: v.current };
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
function Tr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ke, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), b = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ne = Symbol.iterator, Le = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
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
        var p = t.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var We = !1, Ue = !1, Be = !1, Ne = !1, Ve = !1, ae;
    ae = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === h || Ve || e === v || e === R || e === d || Ne || e === M || We || Ue || Be || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === T || e.$$typeof === f || e.$$typeof === b || e.$$typeof === g || // This needs to include all possible module reference object
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
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case h:
          return "Profiler";
        case v:
          return "StrictMode";
        case R:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return oe(r) + ".Consumer";
          case f:
            var t = e;
            return oe(t._context) + ".Provider";
          case g:
            return ze(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : x(e.type) || "Memo";
          case C: {
            var l = e, p = l._payload, c = l._init;
            try {
              return x(c(p));
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
        I < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
      var p;
      p = z.current, z.current = null, Je();
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
`), _ = o.stack.split(`
`), y = u.length - 1, m = _.length - 1; y >= 1 && m >= 0 && u[y] !== _[m]; )
            m--;
          for (; y >= 1 && m >= 0; y--, m--)
            if (u[y] !== _[m]) {
              if (y !== 1 || m !== 1)
                do
                  if (y--, m--, m < 0 || u[y] !== _[m]) {
                    var P = `
` + u[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, P), P;
                  }
                while (y >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = p, Ge(), Error.prepareStackTrace = l;
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
        case d:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ke(e.render);
          case T:
            return B(e.type, r, t);
          case C: {
            var o = e, l = o._payload, p = o._init;
            try {
              return B(p(l), r, t);
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
        var p = Function.call.bind(N);
        for (var c in e)
          if (p(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var _ = Error((o || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              u = e[c](r, c, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              u = y;
            }
            u && !(u instanceof Error) && (V(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, c, typeof u), V(null)), u instanceof Error && !(u.message in ge) && (ge[u.message] = !0, V(l), E("Failed %s type: %s", t, u.message), V(null));
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
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), be(e);
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
        K[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(Y.current.type), e.ref), K[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          me || (me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ee || (Ee = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, o, l, p, c) {
      var u = {
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
        var p, c = {}, u = null, _ = null;
        t !== void 0 && (ye(t), u = "" + t), ar(r) && (ye(r.key), u = "" + r.key), nr(r) && (_ = r.ref, or(r, l));
        for (p in r)
          N.call(r, p) && !tr.hasOwnProperty(p) && (c[p] = r[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            c[p] === void 0 && (c[p] = y[p]);
        }
        if (u || _) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && ir(c, m), _ && ur(c, m);
        }
        return sr(e, u, _, l, o, Y.current, c);
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
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + x(e._owner.type) + "."), k(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), k(null);
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
            for (var p = l.call(e), c; !(c = p.next()).done; )
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
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
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
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            k(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function we(e, r, t, o, l, p) {
      {
        var c = qe(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = lr(l);
          _ ? u += _ : u += Te();
          var y;
          e === null ? y = "null" : H(e) ? y = "array" : e !== void 0 && e.$$typeof === n ? (y = "<" + (x(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, u);
        }
        var m = cr(e, r, t, l, p);
        if (m == null)
          return m;
        if (c) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (H(P)) {
                for (var D = 0; D < P.length; D++)
                  Pe(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(P, e);
        }
        return e === s ? vr(m) : dr(m), m;
      }
    }
    function pr(e, r, t) {
      return we(e, r, t, !0);
    }
    function gr(e, r, t) {
      return we(e, r, t, !1);
    }
    var hr = gr, br = pr;
    $.Fragment = s, $.jsx = hr, $.jsxs = br;
  }()), $;
}
process.env.NODE_ENV === "production" ? re.exports = _r() : re.exports = Tr();
var F = re.exports;
const Rr = ({
  trigger: a,
  setMekuriState: n,
  millisecond: i
}) => {
  const s = w(!0), v = w(0);
  A(() => {
    if (s.current) {
      s.current = !1, n((f) => ({
        ...f,
        initialRender: !1
      }));
      return;
    }
    const h = window.scrollY || document.documentElement.scrollTop;
    return n((f) => ({
      ...f,
      nextTrigger: a,
      phase: "leave",
      yPosBeforeLeave: h
    })), v.current = setTimeout(() => {
      n((f) => ({
        ...f,
        prevTrigger: f.currentTrigger,
        currentTrigger: a,
        nextTrigger: a,
        phase: "enter"
      }));
    }, i), () => {
      clearTimeout(v.current);
    };
  }, [a, i, n]);
}, Cr = {
  millisecond: 0,
  second: 0
}, Pr = {
  initialRender: !1,
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  yPosBeforeLeave: 0
}, wr = {
  scrollRestoration: "top",
  mode: "wait"
}, De = te(Cr), Fe = te(Pr), Ae = te(wr), Yr = ({
  trigger: a,
  millisecond: n = 1e3,
  scrollRestoration: i = "top",
  mode: s = "wait",
  children: v
}) => {
  const [h] = ee({
    millisecond: n,
    second: n / 1e3
  }), [f, b] = ee({
    initialRender: !0,
    prevTrigger: null,
    currentTrigger: a,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  }), [g] = ee({
    scrollRestoration: i,
    mode: s
  });
  return Rr({
    trigger: a,
    setMekuriState: b,
    millisecond: n
  }), /* @__PURE__ */ F.jsx(De.Provider, { value: h, children: /* @__PURE__ */ F.jsx(Ae.Provider, { value: g, children: /* @__PURE__ */ F.jsx(Fe.Provider, { value: f, children: v }) }) });
}, Lr = () => q(De), Ie = () => q(Ae), Ye = () => q(Fe), xr = () => {
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
    (v, h) => {
      v.forEach((f) => {
        n(f.isIntersecting), h.unobserve(f.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, $r = ({
  onOnce: a,
  onLeave: n,
  onEnter: i,
  onAfterSyncEnter: s,
  onEveryLeave: v,
  onEveryEnter: h
}) => {
  const f = w(), b = Ye(), { mode: g } = Ie();
  A(() => {
    f.current = location.pathname;
  }, []), A(() => {
    const R = f.current === location.pathname, d = {
      prevTrigger: b.prevTrigger,
      currentTrigger: b.currentTrigger,
      nextTrigger: b.nextTrigger,
      yPosBeforeLeave: b.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Or
    };
    if (b.phase === null) {
      a && a(d, b.initialRender);
      return;
    }
    b.phase === "leave" && (v && v(d), g === "wait" && n && n(d), g === "sync" && (R ? i && i({
      ...d,
      prevTrigger: b.currentTrigger,
      currentTrigger: b.nextTrigger
    }) : n && n(d))), b.phase === "enter" && (h && h(d), g === "wait" && R && i && i(d), g === "sync" && s && s(d));
  }, [b]);
}, Mr = ({ routerContext: a, children: n }) => {
  const i = q(a), s = w(i).current;
  return /* @__PURE__ */ F.jsx(a.Provider, { value: s, children: n });
}, Sr = ({
  mekuriState: a,
  mode: n,
  children: i,
  setComponentState: s
}) => {
  const v = w(!0), h = (f) => {
    s({
      type: f,
      nextChildren: i
    });
  };
  A(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    a.phase === "enter" && n === "wait" && h("update-unmount"), a.phase === "leave" && n === "sync" && h("update");
  }, [a.phase]);
}, jr = ({
  mekuriState: a,
  mode: n,
  setComponentState: i
}) => {
  const s = w(!0);
  A(() => {
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
  isPopstate: v,
  pos: h
}) => {
  if (v === !1)
    return a && (i.backPosY = h, i.keysArr.push(s)), 0;
  const f = s === i.keysArr[i.keysArr.length - n] && i.backPosY || 0;
  return a && (i.keysArr = [s]), f;
}, Dr = ({
  mekuriState: a,
  scrollRestoration: n
}) => {
  const i = w(!0), s = w(!1), v = typeof n == "object" && "scrollRestoration" in n, h = w({
    backPosY: 0,
    keysArr: []
  }), f = v && !n.onEnter && n.onLeave, b = w(f ? "leave" : "enter"), g = Oe(
    (d) => {
      const T = b.current === d, C = kr({
        isCacheUpdate: T,
        offsetIndex: d === "enter" ? 2 : 1,
        cache: h.current,
        key: a.currentTrigger || "",
        pos: a.yPosBeforeLeave,
        isPopstate: s.current
      });
      return T && (s.current = !1), C;
    },
    [a.currentTrigger, a.yPosBeforeLeave, b]
  ), R = Oe(
    (d, T, C) => {
      d === "top" ? C(0) : d === "restore" && C(g(T));
    },
    [g]
  );
  A(() => {
    if (n !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          s.current = !0;
        }), h.current.keysArr.push(a.currentTrigger || ""), i.current = !1;
        return;
      }
      if (a.phase === "leave" && v && (n != null && n.onLeave) && R(
        n.scrollRestoration,
        a.phase,
        n.onLeave
      ), a.phase === "enter")
        switch (n) {
          case "top":
            window.scrollTo({ top: 0 });
            break;
          case "restore":
            window.scrollTo({ top: g(a.phase) });
            break;
          default:
            v && (n != null && n.onEnter) && R(
              n.scrollRestoration,
              a.phase,
              n.onEnter
            );
            break;
        }
    }
  }, [a.phase]);
}, Fr = (a, n) => {
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
function Ar(a) {
  return mr.toArray(a).filter(
    Er
  );
}
const Wr = ({ children: a }) => {
  const n = Ar(a), { scrollRestoration: i, mode: s } = Ie(), v = Ye(), [h, f] = yr(Fr, {
    currentChildren: n,
    nextChildren: null
  });
  return Sr({
    mekuriState: v,
    mode: s,
    children: n,
    setComponentState: f
  }), jr({
    mekuriState: v,
    mode: s,
    setComponentState: f
  }), Dr({ mekuriState: v, scrollRestoration: i }), /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    h.currentChildren,
    h.nextChildren
  ] });
};
export {
  Wr as Mekuri,
  Yr as MekuriContext,
  Mr as MekuriFreezer,
  Or as intersectionObserverHandler,
  $r as useMekuriAnimation,
  Lr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
