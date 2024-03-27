import Ae, { useRef as x, useEffect as q, createContext as ne, useState as V, useContext as J, useCallback as z, useReducer as mr, Children as br, isValidElement as Er } from "react";
var te = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Tr() {
  if (ke)
    return L;
  ke = 1;
  var n = Ae, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(E, c, b) {
    var h, T = {}, _ = null, P = null;
    b !== void 0 && (_ = "" + b), c.key !== void 0 && (_ = "" + c.key), c.ref !== void 0 && (P = c.ref);
    for (h in c)
      s.call(c, h) && !v.hasOwnProperty(h) && (T[h] = c[h]);
    if (E && E.defaultProps)
      for (h in c = E.defaultProps, c)
        T[h] === void 0 && (T[h] = c[h]);
    return { $$typeof: a, type: E, key: _, ref: P, props: T, _owner: d.current };
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
function _r() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ae, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), E = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), oe = Symbol.iterator, Le = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = oe && e[oe] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
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
        var p = t.map(function(l) {
          return String(l);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var We = !1, Be = !1, Ue = !1, Ne = !1, Ve = !1, ie;
    ie = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === v || Ve || e === d || e === b || e === h || Ne || e === P || We || Be || Ue || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === T || e.$$typeof === g || e.$$typeof === E || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case v:
          return "Profiler";
        case d:
          return "StrictMode";
        case b:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return se(r) + ".Consumer";
          case g:
            var t = e;
            return se(t._context) + ".Provider";
          case c:
            return ze(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : S(e.type) || "Memo";
          case _: {
            var f = e, p = f._payload, l = f._init;
            try {
              return S(l(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, ue, ce, le, fe, de, ve, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Je() {
      {
        if (I === 0) {
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
            log: k({}, e, {
              value: ue
            }),
            info: k({}, e, {
              value: ce
            }),
            warn: k({}, e, {
              value: le
            }),
            error: k({}, e, {
              value: fe
            }),
            group: k({}, e, {
              value: de
            }),
            groupCollapsed: k({}, e, {
              value: ve
            }),
            groupEnd: k({}, e, {
              value: pe
            })
          });
        }
        I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = j.ReactCurrentDispatcher, H;
    function $(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            H = o && o[1] || "";
          }
        return `
` + H + e;
      }
    }
    var K = !1, W;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      W = new He();
    }
    function ge(e, r) {
      if (!e || K)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      K = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = G.current, G.current = null, Je();
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
          for (var u = O.stack.split(`
`), C = o.stack.split(`
`), y = u.length - 1, m = C.length - 1; y >= 1 && m >= 0 && u[y] !== C[m]; )
            m--;
          for (; y >= 1 && m >= 0; y--, m--)
            if (u[y] !== C[m]) {
              if (y !== 1 || m !== 1)
                do
                  if (y--, m--, m < 0 || u[y] !== C[m]) {
                    var w = `
` + u[y].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, w), w;
                  }
                while (y >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        K = !1, G.current = p, Ge(), Error.prepareStackTrace = f;
      }
      var D = e ? e.displayName || e.name : "", Oe = D ? $(D) : "";
      return typeof e == "function" && W.set(e, Oe), Oe;
    }
    function Ke(e, r, t) {
      return ge(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Xe(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case b:
          return $("Suspense");
        case h:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ke(e.render);
          case T:
            return B(e.type, r, t);
          case _: {
            var o = e, f = o._payload, p = o._init;
            try {
              return B(p(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ye = {}, me = j.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Ze(e, r, t, o, f) {
      {
        var p = Function.call.bind(U);
        for (var l in e)
          if (p(e, l)) {
            var u = void 0;
            try {
              if (typeof e[l] != "function") {
                var C = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              u = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              u = y;
            }
            u && !(u instanceof Error) && (N(f), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof u), N(null)), u instanceof Error && !(u.message in ye) && (ye[u.message] = !0, N(f), R("Failed %s type: %s", t, u.message), N(null));
          }
      }
    }
    var Qe = Array.isArray;
    function X(e) {
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
    function Ee(e) {
      if (rr(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), be(e);
    }
    var Y = j.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, _e, Z;
    Z = {};
    function nr(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = S(Y.current.type);
        Z[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(Y.current.type), e.ref), Z[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Te || (Te = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, o, f, p, l) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
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
        value: f
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function cr(e, r, t, o, f) {
      {
        var p, l = {}, u = null, C = null;
        t !== void 0 && (Ee(t), u = "" + t), ar(r) && (Ee(r.key), u = "" + r.key), nr(r) && (C = r.ref, or(r, f));
        for (p in r)
          U.call(r, p) && !tr.hasOwnProperty(p) && (l[p] = r[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            l[p] === void 0 && (l[p] = y[p]);
        }
        if (u || C) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && ir(l, m), C && sr(l, m);
        }
        return ur(e, u, C, f, o, Y.current, l);
      }
    }
    var Q = j.ReactCurrentOwner, Re = j.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ce() {
      {
        if (Q.current) {
          var e = S(Q.current.type);
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
    var Pe = {};
    function fr(e) {
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
        var t = fr(r);
        if (Pe[t])
          return;
        Pe[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Q.current && (o = " It was passed a child from " + S(e._owner.type) + "."), A(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), A(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            re(o) && we(o, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Me(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), l; !(l = p.next()).done; )
              re(l.value) && we(l.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = S(r);
          Ze(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var f = S(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            A(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Se(e, r, t, o, f, p) {
      {
        var l = qe(e);
        if (!l) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = lr(f);
          C ? u += C : u += Ce();
          var y;
          e === null ? y = "null" : X(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (S(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, u);
        }
        var m = cr(e, r, t, f, p);
        if (m == null)
          return m;
        if (l) {
          var w = r.children;
          if (w !== void 0)
            if (o)
              if (X(w)) {
                for (var D = 0; D < w.length; D++)
                  xe(w[D], e);
                Object.freeze && Object.freeze(w);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(w, e);
        }
        return e === s ? vr(m) : dr(m), m;
      }
    }
    function pr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function hr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var gr = hr, yr = pr;
    M.Fragment = s, M.jsx = gr, M.jsxs = yr;
  }()), M;
}
process.env.NODE_ENV === "production" ? te.exports = Tr() : te.exports = _r();
var F = te.exports;
const Rr = ({
  trigger: n,
  setMekuriState: a,
  millisecond: i
}) => {
  const s = x(n), d = x(0);
  q(() => (s.current !== n && (s.current = n, a((v) => ({
    ...v,
    nextTrigger: n,
    phase: "leave",
    yPosBeforeLeave: window.scrollY || document.documentElement.scrollTop
  })), d.current = setTimeout(() => {
    a((v) => ({
      ...v,
      prevTrigger: v.currentTrigger,
      currentTrigger: n,
      nextTrigger: n,
      phase: "enter"
    }));
  }, i)), () => {
    clearTimeout(d.current);
  }), [n, i, a]);
}, Cr = {
  millisecond: 0,
  second: 0
}, Pr = {
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  yPosBeforeLeave: 0
}, wr = {
  scrollRestoration: "top",
  mode: "wait"
}, De = ne(Cr), Fe = ne(Pr), Ie = ne(wr), Ir = ({
  trigger: n,
  children: a,
  millisecond: i = 1e3,
  scrollRestoration: s = "restore",
  mode: d = "wait"
}) => {
  const [v] = V({
    scrollRestoration: s,
    mode: d
  }), [g] = V({
    millisecond: i,
    second: i / 1e3
  }), [E, c] = V({
    prevTrigger: null,
    currentTrigger: n,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  });
  return Rr({
    trigger: n,
    setMekuriState: c,
    millisecond: i
  }), /* @__PURE__ */ F.jsx(De.Provider, { value: g, children: /* @__PURE__ */ F.jsx(Ie.Provider, { value: v, children: /* @__PURE__ */ F.jsx(Fe.Provider, { value: E, children: a }) }) });
}, Yr = () => J(De), Ye = () => J(Ie), ae = () => J(Fe), xr = () => {
  const n = window.location.hash.substring(1);
  if (!n)
    return !1;
  const a = document.getElementById(n);
  if (!a)
    return !1;
  const i = window.scrollY || document.documentElement.scrollTop;
  return a.getBoundingClientRect().top + i;
}, Sr = () => z((n, a) => {
  const i = n == null ? void 0 : n.current;
  if (!i)
    return;
  new IntersectionObserver(
    (d, v) => {
      d.forEach((g) => {
        a(g.isIntersecting), v.unobserve(g.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, []), Or = (n) => Array.from(document.styleSheets).some((a) => a.href ? a.href.split("?")[0] === n.split("?")[0] : !1), kr = () => z((n) => {
  const a = location.pathname, i = document.querySelectorAll(
    'link[rel="stylesheet"]'
  );
  let s = i.length;
  if (s === 0) {
    n();
    return;
  }
  const d = () => {
    if (s--, s === 0) {
      if (a !== location.pathname)
        return;
      n();
    }
  };
  i.forEach((v) => {
    Or(v.href) ? d() : v.onload = () => {
      d();
    };
  });
}, []), Lr = ({
  onOnce: n,
  onLeave: a,
  onEnter: i,
  onAfterSyncEnter: s,
  onEveryLeave: d,
  onEveryEnter: v
}) => {
  const g = x(!1), E = x(), c = ae(), { mode: b } = Ye(), h = kr(), T = Sr();
  q(() => {
    E.current = location.pathname;
  }, []), q(() => {
    const _ = E.current === location.pathname, P = {
      prevTrigger: c.prevTrigger,
      currentTrigger: c.currentTrigger,
      nextTrigger: c.nextTrigger,
      yPosBeforeLeave: c.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: T,
      onStylesheetLoaded: h
    };
    if (!g.current && c.phase === null) {
      n && n(P), g.current = !0;
      return;
    }
    c.phase === "leave" && (d && d(P), b === "wait" && a && a(P), b === "sync" && (_ ? i && i({
      ...P,
      prevTrigger: c.currentTrigger,
      currentTrigger: c.nextTrigger
    }) : a && a(P))), c.phase === "enter" && (v && v(P), b === "wait" && _ && i && i(P), b === "sync" && s && s(P));
  }, [c]);
}, Mr = (n) => {
  const { phase: a, nextTrigger: i, currentTrigger: s } = ae(), d = x(s);
  return (n === "enter" && a === "enter" || n === "leave" && a === "leave") && (d.current = i), d.current;
}, $r = ({
  children: n,
  routerContext: a
}) => {
  const i = J(a), s = x(i).current;
  return /* @__PURE__ */ F.jsx(a.Provider, { value: s, children: n });
}, jr = ({
  isCacheUpdate: n,
  offsetIndex: a,
  cache: i,
  key: s,
  isPopstate: d,
  pos: v
}) => {
  if (d === !1)
    return n && (i.backPosY = v, i.keysArr.push(s)), 0;
  const g = s === i.keysArr[i.keysArr.length - a] && i.backPosY || 0;
  return n && (i.keysArr = [s]), g;
}, Ar = ({
  mekuriState: n,
  scrollRestoration: a
}) => {
  const i = x(!0), s = x(!1), d = typeof a == "object" && "scrollRestoration" in a, v = x({
    backPosY: 0,
    keysArr: []
  }), g = d && !a.onEnter && a.onLeave, E = x(g ? "leave" : "enter"), c = z(
    (h) => {
      const T = E.current === h, _ = jr({
        isCacheUpdate: T,
        offsetIndex: h === "enter" ? 2 : 1,
        cache: v.current,
        key: n.currentTrigger || "",
        pos: n.yPosBeforeLeave,
        isPopstate: s.current
      });
      return T && (s.current = !1), _;
    },
    [n.currentTrigger, n.yPosBeforeLeave, E]
  ), b = z(
    (h, T, _) => {
      h === "top" ? _(0) : h === "restore" && _(c(T));
    },
    [c]
  );
  q(() => {
    if (a !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          s.current = !0;
        }), v.current.keysArr.push(n.currentTrigger || ""), i.current = !1;
        return;
      }
      if (n.phase === "leave" && d && (a != null && a.onLeave) && b(
        a.scrollRestoration,
        n.phase,
        a.onLeave
      ), n.phase === "enter")
        switch (a) {
          case "top":
            window.scrollTo({ top: 0 });
            break;
          case "restore":
            window.scrollTo({ top: c(n.phase) });
            break;
          default:
            d && (a != null && a.onEnter) && b(
              a.scrollRestoration,
              n.phase,
              a.onEnter
            );
            break;
        }
    }
  }, [n.phase]);
}, Dr = (n) => br.toArray(n).filter(
  Er
), Wr = ({ children: n }) => {
  const { scrollRestoration: a, mode: i } = Ye(), s = ae(), d = Dr(n), [v, g] = mr(
    (b, h) => {
      switch (h.type) {
        case "leave-sync":
          return {
            ...b,
            nextChildren: h.nextChildren || null
          };
        case "enter-wait":
          return {
            ...b,
            currentChildren: h.nextChildren || null
          };
        case "enter-sync":
          return {
            ...b,
            currentChildren: b.nextChildren || null,
            nextChildren: null
          };
        default:
          throw new Error();
      }
    },
    {
      currentChildren: d,
      nextChildren: null
    }
  ), [E, c] = V(s.phase);
  return E !== s.phase && (c(s.phase), s.phase === "leave" && i === "sync" && g({
    type: "leave-sync",
    nextChildren: d
  }), s.phase === "enter" && (i === "wait" && g({
    type: "enter-wait",
    nextChildren: d
  }), i === "sync" && g({
    type: "enter-sync"
  }))), Ar({ mekuriState: s, scrollRestoration: a }), /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    v.currentChildren,
    v.nextChildren
  ] });
};
export {
  Wr as Mekuri,
  Ir as MekuriContext,
  $r as MekuriFreezer,
  Lr as useMekuriAnimation,
  Yr as useMekuriDuration,
  Mr as useMekuriTrigger
};
//# sourceMappingURL=mekuri.js.map
