import je, { useRef as C, useEffect as F, createContext as te, useState as ee, useContext as q, useCallback as mr, useReducer as br, Children as yr, isValidElement as Er } from "react";
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
var Oe;
function Rr() {
  if (Oe)
    return $;
  Oe = 1;
  var a = je, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(g, p, y) {
    var _, w = {}, O = null, M = null;
    y !== void 0 && (O = "" + y), p.key !== void 0 && (O = "" + p.key), p.ref !== void 0 && (M = p.ref);
    for (_ in p)
      s.call(p, _) && !h.hasOwnProperty(_) && (w[_] = p[_]);
    if (g && g.defaultProps)
      for (_ in p = g.defaultProps, p)
        w[_] === void 0 && (w[_] = p[_]);
    return { $$typeof: n, type: g, key: O, ref: M, props: w, _owner: v.current };
  }
  return $.Fragment = c, $.jsx = l, $.jsxs = l, $;
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
    var a = je, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), g = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ye = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ye];
      return typeof r == "function" ? r : null;
    }
    var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var o = j.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Me = !1, We = !1, Be = !1, Ne = !1, Ue = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === h || Ue || e === v || e === y || e === _ || Ne || e === M || Me || We || Be || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === l || e.$$typeof === g || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case y:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return oe(r) + ".Consumer";
          case l:
            var t = e;
            return oe(t._context) + ".Provider";
          case p:
            return qe(e, e.render, "ForwardRef");
          case w:
            var o = e.displayName || null;
            return o !== null ? o : P(e.type) || "Memo";
          case O: {
            var f = e, d = f._payload, u = f._init;
            try {
              return P(u(d));
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
    function ze() {
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
    function Je() {
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
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
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
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = z.current, z.current = null, ze();
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
`), R = o.stack.split(`
`), m = i.length - 1, b = R.length - 1; m >= 1 && b >= 0 && i[m] !== R[b]; )
            b--;
          for (; m >= 1 && b >= 0; m--, b--)
            if (i[m] !== R[b]) {
              if (m !== 1 || b !== 1)
                do
                  if (m--, b--, b < 0 || i[m] !== R[b]) {
                    var T = `
` + i[m].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, T), T;
                  }
                while (m >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = d, Je(), Error.prepareStackTrace = f;
      }
      var A = e ? e.displayName || e.name : "", xe = A ? W(A) : "";
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
        return W(e);
      switch (e) {
        case y:
          return W("Suspense");
        case _:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return He(e.render);
          case w:
            return N(e.type, r, t);
          case O: {
            var o = e, f = o._payload, d = o._init;
            try {
              return N(d(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ge = {}, he = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Xe(e, r, t, o, f) {
      {
        var d = Function.call.bind(U);
        for (var u in e)
          if (d(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((o || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              i = e[u](r, u, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              i = m;
            }
            i && !(i instanceof Error) && (V(f), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, u, typeof i), V(null)), i instanceof Error && !(i.message in ge) && (ge[i.message] = !0, V(f), E("Failed %s type: %s", t, i.message), V(null));
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
    function be(e) {
      if (er(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), me(e);
    }
    var Y = j.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ee, K;
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
        var t = P(Y.current.type);
        K[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Y.current.type), e.ref), K[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          ye || (ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ee || (Ee = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, o, f, d, u) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
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
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function sr(e, r, t, o, f) {
      {
        var d, u = {}, i = null, R = null;
        t !== void 0 && (be(t), i = "" + t), nr(r) && (be(r.key), i = "" + r.key), tr(r) && (R = r.ref, ar(r, f));
        for (d in r)
          U.call(r, d) && !rr.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (d in m)
            u[d] === void 0 && (u[d] = m[d]);
        }
        if (i || R) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && or(u, b), R && ir(u, b);
        }
        return ur(e, i, R, f, o, Y.current, u);
      }
    }
    var X = j.ReactCurrentOwner, Re = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function _e() {
      {
        if (X.current) {
          var e = P(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
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
    function lr(e) {
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
        var t = lr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + P(e._owner.type) + "."), k(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), k(null);
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
          var f = $e(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), u; !(u = d.next()).done; )
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
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = P(r);
          Xe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = P(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
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
    function Pe(e, r, t, o, f, d) {
      {
        var u = Ve(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = cr(f);
          R ? i += R : i += _e();
          var m;
          e === null ? m = "null" : H(e) ? m = "array" : e !== void 0 && e.$$typeof === n ? (m = "<" + (P(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, i);
        }
        var b = sr(e, r, t, f, d);
        if (b == null)
          return b;
        if (u) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (H(T)) {
                for (var A = 0; A < T.length; A++)
                  we(T[A], e);
                Object.freeze && Object.freeze(T);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(T, e);
        }
        return e === s ? dr(b) : fr(b), b;
      }
    }
    function vr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function pr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var gr = pr, hr = vr;
    L.Fragment = s, L.jsx = gr, L.jsxs = hr;
  }()), L;
}
process.env.NODE_ENV === "production" ? re.exports = Rr() : re.exports = _r();
var D = re.exports;
const Tr = ({
  trigger: a,
  setMekuriState: n,
  millisecond: c
}) => {
  const s = C(!0), v = C(0);
  F(() => {
    if (s.current) {
      s.current = !1, n((l) => ({
        ...l,
        initialRender: !1
      }));
      return;
    }
    const h = window.scrollY || document.documentElement.scrollTop;
    return n((l) => ({
      ...l,
      nextTrigger: a,
      phase: "leave",
      yPosBeforeLeave: h
    })), v.current = setTimeout(() => {
      n((l) => ({
        ...l,
        prevTrigger: l.currentTrigger,
        currentTrigger: a,
        nextTrigger: a,
        phase: "enter"
      }));
    }, c), () => {
      clearTimeout(v.current);
    };
  }, [a, c, n]);
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
}, ke = te(Cr), Ae = te(wr), De = te(Pr), Yr = ({
  trigger: a,
  millisecond: n = 1e3,
  scrollRestoration: c = "top",
  mode: s = "wait",
  children: v
}) => {
  const [h] = ee({
    millisecond: n,
    second: n / 1e3
  }), [l, g] = ee({
    initialRender: !0,
    prevTrigger: null,
    currentTrigger: a,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  }), [p] = ee({
    scrollRestoration: c,
    mode: s
  });
  return Tr({
    trigger: a,
    setMekuriState: g,
    millisecond: n
  }), /* @__PURE__ */ D.jsx(ke.Provider, { value: h, children: /* @__PURE__ */ D.jsx(De.Provider, { value: p, children: /* @__PURE__ */ D.jsx(Ae.Provider, { value: l, children: v }) }) });
}, $r = () => q(ke), Fe = () => q(De), Ie = () => q(Ae), xr = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const c = window.scrollY || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + c;
}, Or = (a, n) => {
  const c = a == null ? void 0 : a.current;
  if (!c)
    return;
  new IntersectionObserver(
    (v, h) => {
      v.forEach((l) => {
        n(l.isIntersecting), h.unobserve(l.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(c);
}, Lr = ({
  onOnce: a,
  onLeave: n,
  onEnter: c,
  onEveryLeave: s,
  onEveryEnter: v
}) => {
  const h = C(!0), l = C(null), g = Ie(), { mode: p } = Fe();
  F(() => {
    l.current = location.pathname;
  }, []), F(() => {
    const y = {
      prevTrigger: g.prevTrigger,
      currentTrigger: g.currentTrigger,
      nextTrigger: g.nextTrigger,
      yPosBeforeLeave: g.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Or
    };
    if (g.initialRender) {
      h.current && (a && a(y), h.current = !1);
      return;
    }
    g.phase === "leave" && (s && s(y), p === "wait" && n && n(y), p === "sync" && (l.current === location.pathname ? c && c({
      ...y,
      prevTrigger: g.currentTrigger,
      currentTrigger: g.nextTrigger
    }) : n && n(y))), g.phase === "enter" && (v && v(y), l.current === location.pathname && p === "wait" && c && c(y));
  }, [g]);
}, Mr = ({ routerContext: a, children: n }) => {
  const c = q(a), s = C(c).current;
  return /* @__PURE__ */ D.jsx(a.Provider, { value: s, children: n });
}, Sr = ({
  mekuriState: a,
  mode: n,
  children: c,
  setComponentState: s
}) => {
  const v = C(!0), h = (l) => {
    s({
      type: l,
      nextChildren: c
    });
  };
  F(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    a.phase === "enter" && n === "wait" && h("update-unmount"), a.phase === "leave" && n === "sync" && h("update");
  }, [a.phase]);
}, jr = ({
  mekuriState: a,
  mode: n,
  setComponentState: c
}) => {
  const s = C(!0);
  F(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    a.phase === "enter" && n === "sync" && c({
      type: "unmount-prev"
    });
  }, [a.phase]);
}, kr = ({
  cache: a,
  key: n,
  isPopstate: c,
  pos: s
}) => {
  if (c === !1)
    return a.backPosY = s, a.keysArr.push(n), 0;
  const v = n === a.keysArr[a.keysArr.length - 2] && a.backPosY || 0;
  return a.keysArr = [n], v;
}, Ar = ({
  mekuriState: a,
  scrollRestoration: n
}) => {
  const c = C(!0), s = C(!1), v = C({
    backPosY: 0,
    keysArr: []
  }), h = mr(() => {
    const l = kr({
      cache: v.current,
      key: a.currentTrigger || "",
      pos: a.yPosBeforeLeave,
      isPopstate: s.current
    });
    return s.current = !1, l;
  }, [a.currentTrigger, a.yPosBeforeLeave]);
  F(() => {
    if (n === "none")
      return;
    if (c.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        s.current = !0;
      }), v.current.keysArr.push(a.currentTrigger || ""), c.current = !1;
      return;
    }
    const l = typeof n == "object" && "scrollRestoration" in n, g = (p, y) => {
      p === "top" ? y(0) : p === "restore" && y(h());
    };
    if (a.phase === "leave" && l && (n != null && n.onLeave) && g(
      n.scrollRestoration,
      n.onLeave
    ), a.phase === "enter")
      switch (n) {
        case "top":
          window.scrollTo({ top: 0 });
          break;
        case "restore":
          window.scrollTo({ top: h() });
          break;
        default:
          l && (n != null && n.onEnter) && g(
            n.scrollRestoration,
            n.onEnter
          );
          break;
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
  const n = Fr(a), { scrollRestoration: c, mode: s } = Fe(), v = Ie(), [h, l] = br(Dr, {
    currentChildren: n,
    nextChildren: null
  });
  return Sr({
    mekuriState: v,
    mode: s,
    children: n,
    setComponentState: l
  }), jr({
    mekuriState: v,
    mode: s,
    setComponentState: l
  }), Ar({ mekuriState: v, scrollRestoration: c }), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    h.currentChildren,
    h.nextChildren
  ] });
};
export {
  Wr as Mekuri,
  Yr as MekuriContext,
  Mr as MekuriFreezer,
  Lr as useMekuriAnimation,
  $r as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
