import De, { useRef as O, useEffect as M, createContext as ne, useState as q, useContext as z, useCallback as ke, useMemo as br, useReducer as Er, Children as Tr, isValidElement as _r } from "react";
var te = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Pr() {
  if (je)
    return I;
  je = 1;
  var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, u, E) {
    var y, g = {}, m = null, $ = null;
    E !== void 0 && (m = "" + E), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && ($ = u.ref);
    for (y in u)
      c.call(u, y) && !v.hasOwnProperty(y) && (g[y] = u[y]);
    if (b && b.defaultProps)
      for (y in u = b.defaultProps, u)
        g[y] === void 0 && (g[y] = u[y]);
    return { $$typeof: a, type: b, key: m, ref: $, props: g, _owner: l.current };
  }
  return I.Fragment = i, I.jsx = h, I.jsxs = h, I;
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
var Ae;
function Cr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), oe = Symbol.iterator, Me = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = oe && e[oe] || e[Me];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        We("error", e, t);
      }
    }
    function We(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, d = o.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var p = t.map(function(f) {
          return String(f);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Ue = !1, Be = !1, Ne = !1, Ve = !1, qe = !1, ie;
    ie = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === v || qe || e === l || e === E || e === y || Ve || e === $ || Ue || Be || Ne || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === h || e.$$typeof === b || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Je(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case v:
          return "Profiler";
        case l:
          return "StrictMode";
        case E:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return se(r) + ".Consumer";
          case h:
            var t = e;
            return se(t._context) + ".Provider";
          case u:
            return Je(e, e.render, "ForwardRef");
          case g:
            var o = e.displayName || null;
            return o !== null ? o : w(e.type) || "Memo";
          case m: {
            var d = e, p = d._payload, f = d._init;
            try {
              return w(f(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ue, ce, le, fe, de, ve, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ge() {
      {
        if (F === 0) {
          ue = console.log, ce = console.info, le = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
    function He() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ue
            }),
            info: S({}, e, {
              value: ce
            }),
            warn: S({}, e, {
              value: le
            }),
            error: S({}, e, {
              value: fe
            }),
            group: S({}, e, {
              value: de
            }),
            groupCollapsed: S({}, e, {
              value: ve
            }),
            groupEnd: S({}, e, {
              value: pe
            })
          });
        }
        F < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var H = !1, U;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ke();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      H = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = J.current, J.current = null, Ge();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (x) {
              o = x;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (x) {
              o = x;
            }
            e.call(f.prototype);
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
          for (var s = x.stack.split(`
`), C = o.stack.split(`
`), T = s.length - 1, _ = C.length - 1; T >= 1 && _ >= 0 && s[T] !== C[_]; )
            _--;
          for (; T >= 1 && _ >= 0; T--, _--)
            if (s[T] !== C[_]) {
              if (T !== 1 || _ !== 1)
                do
                  if (T--, _--, _ < 0 || s[T] !== C[_]) {
                    var R = `
` + s[T].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, R), R;
                  }
                while (T >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = p, He(), Error.prepareStackTrace = d;
      }
      var A = e ? e.displayName || e.name : "", Se = A ? W(A) : "";
      return typeof e == "function" && U.set(e, Se), Se;
    }
    function Xe(e, r, t) {
      return ge(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ze(e));
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
          case u:
            return Xe(e.render);
          case g:
            return B(e.type, r, t);
          case m: {
            var o = e, d = o._payload, p = o._init;
            try {
              return B(p(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, ye = {}, me = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Qe(e, r, t, o, d) {
      {
        var p = Function.call.bind(N);
        for (var f in e)
          if (p(e, f)) {
            var s = void 0;
            try {
              if (typeof e[f] != "function") {
                var C = Error((o || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              s = e[f](r, f, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              s = T;
            }
            s && !(s instanceof Error) && (V(d), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, f, typeof s), V(null)), s instanceof Error && !(s.message in ye) && (ye[s.message] = !0, V(d), P("Failed %s type: %s", t, s.message), V(null));
          }
      }
    }
    var er = Array.isArray;
    function K(e) {
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
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function Ee(e) {
      if (tr(e))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), be(e);
    }
    var L = k.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, _e, X;
    X = {};
    function ar(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = w(L.current.type);
        X[t] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(L.current.type), e.ref), X[t] = !0);
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, o, d, p, f) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
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
        value: d
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, t, o, d) {
      {
        var p, f = {}, s = null, C = null;
        t !== void 0 && (Ee(t), s = "" + t), or(r) && (Ee(r.key), s = "" + r.key), ar(r) && (C = r.ref, ir(r, d));
        for (p in r)
          N.call(r, p) && !nr.hasOwnProperty(p) && (f[p] = r[p]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (p in T)
            f[p] === void 0 && (f[p] = T[p]);
        }
        if (s || C) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && sr(f, _), C && ur(f, _);
        }
        return cr(e, s, C, d, o, L.current, f);
      }
    }
    var Z = k.ReactCurrentOwner, Pe = k.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ce() {
      {
        if (Z.current) {
          var e = w(Z.current.type);
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
    var Re = {};
    function dr(e) {
      {
        var r = Ce();
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
        var t = dr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + w(e._owner.type) + "."), j(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), j(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ee(o) && we(o, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = $e(e);
          if (typeof d == "function" && d !== e.entries)
            for (var p = d.call(e), f; !(f = p.next()).done; )
              ee(f.value) && we(f.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = w(r);
          Qe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var d = w(r);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            j(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Oe(e, r, t, o, d, p) {
      {
        var f = ze(e);
        if (!f) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = fr(d);
          C ? s += C : s += Ce();
          var T;
          e === null ? T = "null" : K(e) ? T = "array" : e !== void 0 && e.$$typeof === a ? (T = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, s);
        }
        var _ = lr(e, r, t, d, p);
        if (_ == null)
          return _;
        if (f) {
          var R = r.children;
          if (R !== void 0)
            if (o)
              if (K(R)) {
                for (var A = 0; A < R.length; A++)
                  xe(R[A], e);
                Object.freeze && Object.freeze(R);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(R, e);
        }
        return e === c ? pr(_) : vr(_), _;
      }
    }
    function hr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var yr = gr, mr = hr;
    Y.Fragment = c, Y.jsx = yr, Y.jsxs = mr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? te.exports = Pr() : te.exports = Cr();
var D = te.exports;
const re = "mekuri-transitioning", Rr = ({
  trigger: n,
  setMekuriState: a,
  millisecond: i
}) => {
  const c = O(n), l = O(!1);
  M(() => {
    window.addEventListener("popstate", () => {
      document.documentElement.classList.contains(re) ? window.history.forward() : l.current = !0;
    });
  }, []), M(() => {
    let v;
    return c.current !== n && (c.current = n, a((h) => ({
      ...h,
      nextTrigger: n,
      yPosBeforeLeave: window.scrollY || document.documentElement.scrollTop,
      phase: "leave",
      isPopstate: l.current
    })), document.documentElement.classList.add(re), v = setTimeout(() => {
      document.documentElement.classList.remove(re), a((h) => ({
        ...h,
        prevTrigger: h.currentTrigger,
        currentTrigger: n,
        nextTrigger: n,
        phase: "enter"
      })), l.current = !1;
    }, i)), () => {
      clearTimeout(v);
    };
  }, [n, i, a]);
}, wr = {
  millisecond: 0,
  second: 0
}, xr = {
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  isPopstate: !1,
  yPosBeforeLeave: 0
}, Or = {
  scrollRestoration: "top",
  mode: "wait",
  waitOnPopstate: !0
}, Fe = ne(wr), Le = ne(xr), Ie = ne(Or), Yr = ({
  trigger: n,
  children: a,
  millisecond: i = 1e3,
  scrollRestoration: c = "restore",
  mode: l = "wait",
  waitOnPopstate: v = !1
}) => {
  const [h] = q({
    scrollRestoration: c,
    mode: l,
    waitOnPopstate: v
  }), [b] = q({
    millisecond: i,
    second: i / 1e3
  }), [u, E] = q({
    prevTrigger: null,
    currentTrigger: n,
    nextTrigger: null,
    phase: null,
    isPopstate: !1,
    yPosBeforeLeave: 0
  });
  return Rr({
    trigger: n,
    setMekuriState: E,
    millisecond: i
  }), /* @__PURE__ */ D.jsx(Fe.Provider, { value: b, children: /* @__PURE__ */ D.jsx(Ie.Provider, { value: h, children: /* @__PURE__ */ D.jsx(Le.Provider, { value: u, children: a }) }) });
}, Mr = () => z(Fe), Ye = () => z(Ie), ae = () => z(Le), Sr = () => {
  const n = window.location.hash.substring(1);
  if (!n)
    return !1;
  const a = document.getElementById(n);
  if (!a)
    return !1;
  const i = window.scrollY || document.documentElement.scrollTop;
  return a.getBoundingClientRect().top + i;
}, kr = (n, a) => {
  const i = n == null ? void 0 : n.current;
  if (!i)
    return;
  new IntersectionObserver(
    (l, v) => {
      l.forEach((h) => {
        a(h.isIntersecting), v.unobserve(h.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, jr = (n) => Array.from(document.styleSheets).some((a) => a.href ? a.href.split("?")[0] === n.split("?")[0] : !1), Ar = (n) => {
  const a = location.pathname, i = document.head.querySelectorAll(
    'link[rel="stylesheet"]'
  );
  let c = i.length;
  if (c === 0) {
    n();
    return;
  }
  const l = () => {
    if (c--, c === 0) {
      if (a !== location.pathname)
        return;
      n();
    }
  };
  i.forEach((v) => {
    jr(v.href) ? l() : v.addEventListener("load", l, {
      once: !0
    });
  });
}, $r = ({
  onOnce: n,
  onLeave: a,
  onEnter: i,
  onAfterSyncEnter: c,
  onEveryLeave: l,
  onEveryEnter: v
}) => {
  const h = O(!1), b = O(), u = ae(), { mode: E, waitOnPopstate: y } = Ye();
  M(() => {
    b.current = location.pathname;
  }, []), M(() => {
    const g = b.current === location.pathname, m = {
      prevTrigger: u.prevTrigger,
      currentTrigger: u.currentTrigger,
      nextTrigger: u.nextTrigger,
      yPosBeforeLeave: u.yPosBeforeLeave,
      getHashPos: Sr,
      intersectionObserver: kr,
      onStylesheetLoad: Ar,
      isPopstate: u.isPopstate
    };
    if (!h.current && u.phase === null) {
      n && n(m), h.current = !0;
      return;
    }
    u.phase === "leave" && (l && l(m), E === "wait" && a && a(m), E === "sync" && (g ? i && i({
      ...m,
      prevTrigger: u.currentTrigger,
      currentTrigger: u.nextTrigger
    }) : a && a(m))), u.phase === "enter" && (v && v(m), E === "wait" && g && i && i(m), E === "sync" && (g && y && u.isPopstate && i && i(m), c && c(m)));
  }, [u]);
}, Wr = (n) => {
  const { phase: a, nextTrigger: i, currentTrigger: c } = ae(), l = O(c);
  return (n === "enter" && a === "enter" || n === "leave" && a === "leave") && (l.current = i), l.current;
}, Ur = ({
  children: n,
  routerContext: a
}) => {
  const i = z(a), c = O(i).current;
  return /* @__PURE__ */ D.jsx(a.Provider, { value: c, children: n });
}, Dr = ({
  isCacheUpdate: n,
  offsetIndex: a,
  cache: i,
  key: c,
  isPopstate: l,
  pos: v
}) => {
  if (l === !1)
    return n && (i.backPosY = v, i.keysArr.push(c)), 0;
  const h = c === i.keysArr[i.keysArr.length - a] && i.backPosY || 0;
  return n && (i.keysArr = [c]), h;
}, Fr = ({
  mekuriState: n,
  scrollRestoration: a
}) => {
  const i = O(!0), c = typeof a == "object" && "scrollRestoration" in a, l = O({
    backPosY: 0,
    keysArr: []
  }), v = c && !a.onEnter && a.onLeave, h = O(v ? "leave" : "enter"), b = ke(
    (E) => {
      const y = h.current === E, g = y && v;
      return Dr({
        isCacheUpdate: y,
        offsetIndex: E === "enter" || g ? 2 : 1,
        cache: l.current,
        // If isFragOnLeave and isUpdate, pass nextTrigger to key
        key: (g ? n.nextTrigger : n.currentTrigger) || "",
        pos: n.yPosBeforeLeave,
        isPopstate: n.isPopstate
      });
    },
    [h, v, n]
  ), u = ke(
    (E, y, g) => {
      E === "top" ? g(0, n.isPopstate) : E === "restore" && g(b(y), n.isPopstate);
    },
    [b, n.isPopstate]
  );
  M(() => {
    if (a !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), l.current.keysArr.push(n.currentTrigger || ""), i.current = !1;
        return;
      }
      if (n.phase === "leave" && c && (a != null && a.onLeave) && u(
        a.scrollRestoration,
        n.phase,
        a.onLeave
      ), n.phase === "enter")
        switch (a) {
          case "top":
            window.scrollTo({ top: 0 });
            break;
          case "restore":
            window.scrollTo({ top: b(n.phase) });
            break;
          default:
            c && (a != null && a.onEnter) && u(
              a.scrollRestoration,
              n.phase,
              a.onEnter
            );
            break;
        }
    }
  }, [n.phase]);
}, Lr = (n) => Tr.toArray(n).filter(
  _r
), Br = ({ children: n }) => {
  const { scrollRestoration: a, mode: i, waitOnPopstate: c } = Ye(), l = ae();
  Fr({ mekuriState: l, scrollRestoration: a });
  const v = br(() => Lr(n), [n]), [h, b] = Er(
    (g, m) => {
      switch (m.type) {
        case "leave-sync":
          return {
            ...g,
            nextChildren: m.nextChildren || null
          };
        case "enter-wait":
          return {
            ...g,
            currentChildren: m.nextChildren || null
          };
        case "enter-sync":
          return {
            ...g,
            currentChildren: g.nextChildren || null,
            nextChildren: null
          };
        default:
          throw new Error();
      }
    },
    {
      currentChildren: v,
      nextChildren: null
    }
  ), [u, E] = q(l.phase), y = !c || !l.isPopstate;
  return u !== l.phase && (E(l.phase), l.phase === "leave" && i === "sync" && y && b({
    type: "leave-sync",
    nextChildren: v
  }), l.phase === "enter" && (i === "wait" && b({
    type: "enter-wait",
    nextChildren: v
  }), i === "sync" && b(y ? {
    type: "enter-sync"
  } : {
    type: "enter-wait",
    nextChildren: v
  }))), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    h.currentChildren,
    h.nextChildren
  ] });
};
export {
  Br as Mekuri,
  Yr as MekuriContext,
  Ur as MekuriFreezer,
  $r as useMekuri,
  Mr as useMekuriDuration,
  Wr as useMekuriTrigger
};
//# sourceMappingURL=mekuri.js.map
