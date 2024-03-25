import De, { useRef as w, useEffect as q, createContext as te, useState as M, useContext as z, useCallback as Se, useReducer as br, Children as mr, isValidElement as Er } from "react";
var re = { exports: {} }, Y = {};
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
    return Y;
  je = 1;
  var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(m, u, R) {
    var g, h = {}, C = null, $ = null;
    R !== void 0 && (C = "" + R), u.key !== void 0 && (C = "" + u.key), u.ref !== void 0 && ($ = u.ref);
    for (g in u)
      s.call(u, g) && !p.hasOwnProperty(g) && (h[g] = u[g]);
    if (m && m.defaultProps)
      for (g in u = m.defaultProps, u)
        h[g] === void 0 && (h[g] = u[g]);
    return { $$typeof: a, type: m, key: C, ref: $, props: h, _owner: d.current };
  }
  return Y.Fragment = i, Y.jsx = b, Y.jsxs = b, Y;
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
var ke;
function _r() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ae = Symbol.iterator, Le = "@@iterator";
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
        var v = t.map(function(l) {
          return String(l);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var We = !1, Ue = !1, Be = !1, Ne = !1, Ve = !1, oe;
    oe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === p || Ve || e === d || e === R || e === g || Ne || e === $ || We || Ue || Be || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === h || e.$$typeof === b || e.$$typeof === m || e.$$typeof === u || // This needs to include all possible module reference object
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
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case p:
          return "Profiler";
        case d:
          return "StrictMode";
        case R:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ie(r) + ".Consumer";
          case b:
            var t = e;
            return ie(t._context) + ".Provider";
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
    var S = Object.assign, A = 0, se, ue, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Je() {
      {
        if (A === 0) {
          se = console.log, ue = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
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
        A++;
      }
    }
    function Ge() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: se
            }),
            info: S({}, e, {
              value: ue
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
        A < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = j.ReactCurrentDispatcher, G;
    function W(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            G = o && o[1] || "";
          }
        return `
` + G + e;
      }
    }
    var H = !1, U;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      U = new He();
    }
    function he(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      H = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = J.current, J.current = null, Je();
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
                    var P = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, P), P;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = v, Ge(), Error.prepareStackTrace = f;
      }
      var D = e ? e.displayName || e.name : "", Oe = D ? W(D) : "";
      return typeof e == "function" && U.set(e, Oe), Oe;
    }
    function Ke(e, r, t) {
      return he(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Xe(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case R:
          return W("Suspense");
        case g:
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
    var N = Object.prototype.hasOwnProperty, ge = {}, ye = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ze(e, r, t, o, f) {
      {
        var v = Function.call.bind(N);
        for (var l in e)
          if (v(e, l)) {
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
            c && !(c instanceof Error) && (V(f), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof c), V(null)), c instanceof Error && !(c.message in ge) && (ge[c.message] = !0, V(f), T("Failed %s type: %s", t, c.message), V(null));
          }
      }
    }
    var Qe = Array.isArray;
    function K(e) {
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
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), be(e);
    }
    var I = j.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Te, X;
    X = {};
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
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = x(I.current.type);
        X[t] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(I.current.type), e.ref), X[t] = !0);
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
    function sr(e, r) {
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
    var ur = function(e, r, t, o, f, v, l) {
      var c = {
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
        var v, l = {}, c = null, _ = null;
        t !== void 0 && (me(t), c = "" + t), ar(r) && (me(r.key), c = "" + r.key), nr(r) && (_ = r.ref, or(r, f));
        for (v in r)
          N.call(r, v) && !tr.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            l[v] === void 0 && (l[v] = y[v]);
        }
        if (c || _) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ir(l, E), _ && sr(l, E);
        }
        return ur(e, c, _, f, o, I.current, l);
      }
    }
    var Z = j.ReactCurrentOwner, _e = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Re() {
      {
        if (Z.current) {
          var e = x(Z.current.type);
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
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + x(e._owner.type) + "."), k(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), k(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            ee(o) && Pe(o, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Me(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), l; !(l = v.next()).done; )
              ee(l.value) && Pe(l.value, r);
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
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
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
    function xe(e, r, t, o, f, v) {
      {
        var l = qe(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = lr(f);
          _ ? c += _ : c += Re();
          var y;
          e === null ? y = "null" : K(e) ? y = "array" : e !== void 0 && e.$$typeof === a ? (y = "<" + (x(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var E = cr(e, r, t, f, v);
        if (E == null)
          return E;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (K(P)) {
                for (var D = 0; D < P.length; D++)
                  we(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(P, e);
        }
        return e === s ? vr(E) : dr(E), E;
      }
    }
    function pr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function hr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var gr = hr, yr = pr;
    L.Fragment = s, L.jsx = gr, L.jsxs = yr;
  }()), L;
}
process.env.NODE_ENV === "production" ? re.exports = Tr() : re.exports = _r();
var F = re.exports;
const Rr = ({
  trigger: n,
  setMekuriState: a,
  millisecond: i
}) => {
  const s = w(n), d = w(0);
  q(() => (s.current !== n && (s.current = n, a((p) => ({
    ...p,
    nextTrigger: n,
    phase: "leave",
    yPosBeforeLeave: window.scrollY || document.documentElement.scrollTop
  })), d.current = setTimeout(() => {
    a((p) => ({
      ...p,
      prevTrigger: p.currentTrigger,
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
}, Fe = te(Cr), Ae = te(Pr), Ie = te(wr), Ir = ({
  trigger: n,
  children: a,
  millisecond: i = 1e3,
  scrollRestoration: s = "restore",
  mode: d = "wait"
}) => {
  const [p] = M({
    scrollRestoration: s,
    mode: d
  }), [b] = M({
    millisecond: i,
    second: i / 1e3
  }), [m, u] = M({
    prevTrigger: null,
    currentTrigger: n,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  });
  return Rr({
    trigger: n,
    setMekuriState: u,
    millisecond: i
  }), /* @__PURE__ */ F.jsx(Fe.Provider, { value: b, children: /* @__PURE__ */ F.jsx(Ie.Provider, { value: p, children: /* @__PURE__ */ F.jsx(Ae.Provider, { value: m, children: a }) }) });
}, Yr = () => z(Fe), Ye = () => z(Ie), ne = () => z(Ae), xr = () => {
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
    (d, p) => {
      d.forEach((b) => {
        a(b.isIntersecting), p.unobserve(b.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, Lr = ({
  onOnce: n,
  onLeave: a,
  onEnter: i,
  onAfterSyncEnter: s,
  onEveryLeave: d,
  onEveryEnter: p
}) => {
  const b = w(!1), m = w(), u = ne(), { mode: R } = Ye();
  q(() => {
    m.current = location.pathname;
  }, []), q(() => {
    const g = m.current === location.pathname, h = {
      prevTrigger: u.prevTrigger,
      currentTrigger: u.currentTrigger,
      nextTrigger: u.nextTrigger,
      yPosBeforeLeave: u.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Or
    };
    if (!b.current && u.phase === null) {
      n && n(h), b.current = !0;
      return;
    }
    u.phase === "leave" && (d && d(h), R === "wait" && a && a(h), R === "sync" && (g ? i && i({
      ...h,
      prevTrigger: u.currentTrigger,
      currentTrigger: u.nextTrigger
    }) : a && a(h))), u.phase === "enter" && (p && p(h), R === "wait" && g && i && i(h), R === "sync" && s && s(h));
  }, [u]);
}, Mr = (n) => {
  const { phase: a, nextTrigger: i, currentTrigger: s } = ne(), d = w(s);
  return (n === "enter" && a === "enter" || n === "leave" && a === "leave") && (d.current = i), d.current;
}, $r = ({
  children: n,
  routerContext: a
}) => {
  const i = z(a), s = w(i).current;
  return /* @__PURE__ */ F.jsx(a.Provider, { value: s, children: n });
}, Sr = ({
  mekuriState: n,
  mode: a,
  children: i,
  setComponentState: s
}) => {
  const [d, p] = M(n.phase);
  d !== n.phase && (p(n.phase), n.phase === "enter" && a === "wait" && s({
    type: "update-and-unmount",
    nextChildren: i
  }), n.phase === "leave" && a === "sync" && s({
    type: "update",
    nextChildren: i
  }));
}, jr = ({
  mekuriState: n,
  mode: a,
  setComponentState: i
}) => {
  const [s, d] = M(n.phase);
  n.phase !== s && n.phase === "enter" && a === "sync" && (d(n.phase), i({
    type: "unmount-prev"
  }));
}, kr = ({
  isCacheUpdate: n,
  offsetIndex: a,
  cache: i,
  key: s,
  isPopstate: d,
  pos: p
}) => {
  if (d === !1)
    return n && (i.backPosY = p, i.keysArr.push(s)), 0;
  const b = s === i.keysArr[i.keysArr.length - a] && i.backPosY || 0;
  return n && (i.keysArr = [s]), b;
}, Dr = ({
  mekuriState: n,
  scrollRestoration: a
}) => {
  const i = w(!0), s = w(!1), d = typeof a == "object" && "scrollRestoration" in a, p = w({
    backPosY: 0,
    keysArr: []
  }), b = d && !a.onEnter && a.onLeave, m = w(b ? "leave" : "enter"), u = Se(
    (g) => {
      const h = m.current === g, C = kr({
        isCacheUpdate: h,
        offsetIndex: g === "enter" ? 2 : 1,
        cache: p.current,
        key: n.currentTrigger || "",
        pos: n.yPosBeforeLeave,
        isPopstate: s.current
      });
      return h && (s.current = !1), C;
    },
    [n.currentTrigger, n.yPosBeforeLeave, m]
  ), R = Se(
    (g, h, C) => {
      g === "top" ? C(0) : g === "restore" && C(u(h));
    },
    [u]
  );
  q(() => {
    if (a !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          s.current = !0;
        }), p.current.keysArr.push(n.currentTrigger || ""), i.current = !1;
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
            window.scrollTo({ top: u(n.phase) });
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
  const { scrollRestoration: a, mode: i } = Ye(), s = ne(), d = Fr(n), [p, b] = br(
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
      currentChildren: d,
      nextChildren: null
    }
  );
  return Sr({
    mekuriState: s,
    mode: i,
    children: d,
    setComponentState: b
  }), jr({
    mekuriState: s,
    mode: i,
    setComponentState: b
  }), Dr({ mekuriState: s, scrollRestoration: a }), /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    p.currentChildren,
    p.nextChildren
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
