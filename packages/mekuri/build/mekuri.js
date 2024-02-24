import De, { useRef as P, useEffect as A, createContext as te, useState as ee, useContext as q, useCallback as Se, useReducer as yr, Children as mr, isValidElement as Er } from "react";
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
var je;
function Tr() {
  if (je)
    return L;
  je = 1;
  var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, s, R) {
    var b, g = {}, C = null, $ = null;
    R !== void 0 && (C = "" + R), s.key !== void 0 && (C = "" + s.key), s.ref !== void 0 && ($ = s.ref);
    for (b in s)
      u.call(s, b) && !v.hasOwnProperty(b) && (g[b] = s[b]);
    if (m && m.defaultProps)
      for (b in s = m.defaultProps, s)
        g[b] === void 0 && (g[b] = s[b]);
    return { $$typeof: a, type: m, key: C, ref: $, props: g, _owner: d.current };
  }
  return L.Fragment = i, L.jsx = h, L.jsxs = h, L;
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
var ke;
function _r() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), m = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ae = Symbol.iterator, Le = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
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
    var We = !1, Ue = !1, Be = !1, Ne = !1, Ve = !1, oe;
    oe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === v || Ve || e === d || e === R || e === b || Ne || e === $ || We || Ue || Be || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === g || e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case i:
          return "Portal";
        case v:
          return "Profiler";
        case d:
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
            return ie(r) + ".Consumer";
          case h:
            var t = e;
            return ie(t._context) + ".Provider";
          case s:
            return ze(e, e.render, "ForwardRef");
          case g:
            var o = e.displayName || null;
            return o !== null ? o : x(e.type) || "Memo";
          case C: {
            var f = e, p = f._payload, l = f._init;
            try {
              return x(l(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, I = 0, ue, se, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Je() {
      {
        if (I === 0) {
          ue = console.log, se = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
              value: ue
            }),
            info: S({}, e, {
              value: se
            }),
            warn: S({}, e, {
              value: ce
            }),
            error: S({}, e, {
              value: le
            }),
            group: S({}, e, {
              value: fe
            }),
            groupCollapsed: S({}, e, {
              value: de
            }),
            groupEnd: S({}, e, {
              value: ve
            })
          });
        }
        I < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    function ge(e, r) {
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
      var p;
      p = z.current, z.current = null, Je();
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
          for (var c = O.stack.split(`
`), _ = o.stack.split(`
`), y = c.length - 1, E = _.length - 1; y >= 1 && E >= 0 && c[y] !== _[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (c[y] !== _[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || c[y] !== _[E]) {
                    var w = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, w), w;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = p, Ge(), Error.prepareStackTrace = f;
      }
      var D = e ? e.displayName || e.name : "", Oe = D ? W(D) : "";
      return typeof e == "function" && U.set(e, Oe), Oe;
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
        return W(e);
      switch (e) {
        case R:
          return W("Suspense");
        case b:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ke(e.render);
          case g:
            return B(e.type, r, t);
          case C: {
            var o = e, f = o._payload, p = o._init;
            try {
              return B(p(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, he = {}, be = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Ze(e, r, t, o, f) {
      {
        var p = Function.call.bind(N);
        for (var l in e)
          if (p(e, l)) {
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
            c && !(c instanceof Error) && (V(f), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof c), V(null)), c instanceof Error && !(c.message in he) && (he[c.message] = !0, V(f), T("Failed %s type: %s", t, c.message), V(null));
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
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function me(e) {
      if (rr(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), ye(e);
    }
    var Y = j.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Te, K;
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
        K[t] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(Y.current.type), e.ref), K[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Te || (Te = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, o, f, p, l) {
      var c = {
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
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function cr(e, r, t, o, f) {
      {
        var p, l = {}, c = null, _ = null;
        t !== void 0 && (me(t), c = "" + t), ar(r) && (me(r.key), c = "" + r.key), nr(r) && (_ = r.ref, or(r, f));
        for (p in r)
          N.call(r, p) && !tr.hasOwnProperty(p) && (l[p] = r[p]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (p in y)
            l[p] === void 0 && (l[p] = y[p]);
        }
        if (c || _) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ir(l, E), _ && ur(l, E);
        }
        return sr(e, c, _, f, o, Y.current, l);
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
    var Ce = {};
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
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var o = "";
        e && e._owner && e._owner !== X.current && (o = " It was passed a child from " + x(e._owner.type) + "."), k(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), k(null);
      }
    }
    function Pe(e, r) {
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
          var f = Me(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), l; !(l = p.next()).done; )
              Q(l.value) && we(l.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = x(r);
          Ze(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = x(r);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            k(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function xe(e, r, t, o, f, p) {
      {
        var l = qe(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = lr(f);
          _ ? c += _ : c += Re();
          var y;
          e === null ? y = "null" : H(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (x(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var E = cr(e, r, t, f, p);
        if (E == null)
          return E;
        if (l) {
          var w = r.children;
          if (w !== void 0)
            if (o)
              if (H(w)) {
                for (var D = 0; D < w.length; D++)
                  Pe(w[D], e);
                Object.freeze && Object.freeze(w);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(w, e);
        }
        return e === u ? vr(E) : dr(E), E;
      }
    }
    function pr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function gr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var hr = gr, br = pr;
    M.Fragment = u, M.jsx = hr, M.jsxs = br;
  }()), M;
}
process.env.NODE_ENV === "production" ? re.exports = Tr() : re.exports = _r();
var F = re.exports;
const Rr = ({
  trigger: n,
  setMekuriState: a,
  millisecond: i
}) => {
  const u = P(n), d = P(0);
  A(() => (u.current !== n && (u.current = n, a((v) => ({
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
}, wr = {
  prevTrigger: null,
  currentTrigger: null,
  nextTrigger: null,
  phase: null,
  yPosBeforeLeave: 0
}, Pr = {
  scrollRestoration: "top",
  mode: "wait"
}, Fe = te(Cr), Ae = te(wr), Ie = te(Pr), Ir = ({
  trigger: n,
  children: a,
  millisecond: i = 1e3,
  scrollRestoration: u = "restore",
  mode: d = "wait"
}) => {
  const [v] = ee({
    scrollRestoration: u,
    mode: d
  }), [h] = ee({
    millisecond: i,
    second: i / 1e3
  }), [m, s] = ee({
    prevTrigger: null,
    currentTrigger: n,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  });
  return Rr({
    trigger: n,
    setMekuriState: s,
    millisecond: i
  }), /* @__PURE__ */ F.jsx(Fe.Provider, { value: h, children: /* @__PURE__ */ F.jsx(Ie.Provider, { value: v, children: /* @__PURE__ */ F.jsx(Ae.Provider, { value: m, children: a }) }) });
}, Yr = () => q(Fe), Ye = () => q(Ie), ne = () => q(Ae), xr = () => {
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
    (d, v) => {
      d.forEach((h) => {
        a(h.isIntersecting), v.unobserve(h.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, Lr = ({
  onOnce: n,
  onLeave: a,
  onEnter: i,
  onAfterSyncEnter: u,
  onEveryLeave: d,
  onEveryEnter: v
}) => {
  const h = P(!1), m = P(), s = ne(), { mode: R } = Ye();
  A(() => {
    m.current = location.pathname;
  }, []), A(() => {
    const b = m.current === location.pathname, g = {
      prevTrigger: s.prevTrigger,
      currentTrigger: s.currentTrigger,
      nextTrigger: s.nextTrigger,
      yPosBeforeLeave: s.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Or
    };
    if (!h.current && s.phase === null) {
      n && n(g), h.current = !0;
      return;
    }
    s.phase === "leave" && (d && d(g), R === "wait" && a && a(g), R === "sync" && (b ? i && i({
      ...g,
      prevTrigger: s.currentTrigger,
      currentTrigger: s.nextTrigger
    }) : a && a(g))), s.phase === "enter" && (v && v(g), R === "wait" && b && i && i(g), R === "sync" && u && u(g));
  }, [s]);
}, Mr = (n) => {
  const { phase: a, nextTrigger: i, currentTrigger: u } = ne(), d = P(u);
  return (n === "enter" && a === "enter" || n === "leave" && a === "leave") && (d.current = i), d.current;
}, $r = ({
  children: n,
  routerContext: a
}) => {
  const i = q(a), u = P(i).current;
  return /* @__PURE__ */ F.jsx(a.Provider, { value: u, children: n });
}, Sr = ({
  mekuriState: n,
  mode: a,
  children: i,
  setComponentState: u
}) => {
  const d = P(!0), v = (h) => {
    u({
      type: h,
      nextChildren: i
    });
  };
  A(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    n.phase === "enter" && a === "wait" && v("update-and-unmount"), n.phase === "leave" && a === "sync" && v("update");
  }, [n.phase]);
}, jr = ({
  mekuriState: n,
  mode: a,
  setComponentState: i
}) => {
  const u = P(!0);
  A(() => {
    if (u.current) {
      u.current = !1;
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
  key: u,
  isPopstate: d,
  pos: v
}) => {
  if (d === !1)
    return n && (i.backPosY = v, i.keysArr.push(u)), 0;
  const h = u === i.keysArr[i.keysArr.length - a] && i.backPosY || 0;
  return n && (i.keysArr = [u]), h;
}, Dr = ({
  mekuriState: n,
  scrollRestoration: a
}) => {
  const i = P(!0), u = P(!1), d = typeof a == "object" && "scrollRestoration" in a, v = P({
    backPosY: 0,
    keysArr: []
  }), h = d && !a.onEnter && a.onLeave, m = P(h ? "leave" : "enter"), s = Se(
    (b) => {
      const g = m.current === b, C = kr({
        isCacheUpdate: g,
        offsetIndex: b === "enter" ? 2 : 1,
        cache: v.current,
        key: n.currentTrigger || "",
        pos: n.yPosBeforeLeave,
        isPopstate: u.current
      });
      return g && (u.current = !1), C;
    },
    [n.currentTrigger, n.yPosBeforeLeave, m]
  ), R = Se(
    (b, g, C) => {
      b === "top" ? C(0) : b === "restore" && C(s(g));
    },
    [s]
  );
  A(() => {
    if (a !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          u.current = !0;
        }), v.current.keysArr.push(n.currentTrigger || ""), i.current = !1;
        return;
      }
      if (n.phase === "leave" && d && (a != null && a.onLeave) && R(
        a.scrollRestoration,
        n.phase,
        a.onLeave
      ), n.phase === "enter")
        switch (a) {
          case "top":
            window.scrollTo({ top: 0 });
            break;
          case "restore":
            window.scrollTo({ top: s(n.phase) });
            break;
          default:
            d && (a != null && a.onEnter) && R(
              a.scrollRestoration,
              n.phase,
              a.onEnter
            );
            break;
        }
    }
  }, [n.phase]);
}, Fr = (n) => mr.toArray(n).filter(
  Er
), Wr = ({ children: n }) => {
  const { scrollRestoration: a, mode: i } = Ye(), u = ne(), d = Fr(n), [v, h] = yr(
    (m, s) => {
      switch (s.type) {
        case "update":
          return {
            ...m,
            nextChildren: s.nextChildren || null
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
            currentChildren: s.nextChildren || null
          };
        default:
          throw new Error();
      }
    },
    {
      currentChildren: d,
      nextChildren: null
    }
  );
  return Sr({
    mekuriState: u,
    mode: i,
    children: d,
    setComponentState: h
  }), jr({
    mekuriState: u,
    mode: i,
    setComponentState: h
  }), Dr({ mekuriState: u, scrollRestoration: a }), /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    v.currentChildren,
    v.nextChildren
  ] });
};
export {
  Wr as Mekuri,
  Ir as MekuriContext,
  $r as MekuriFreezer,
  Or as intersectionObserverHandler,
  Lr as useMekuriAnimation,
  Yr as useMekuriDuration,
  Mr as useMekuriTrigger
};
//# sourceMappingURL=mekuri.js.map
