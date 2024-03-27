import De, { useRef as w, useEffect as q, createContext as te, useState as V, useContext as z, useCallback as Se, useReducer as br, Children as mr, isValidElement as Er } from "react";
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
var ke;
function Tr() {
  if (ke)
    return Y;
  ke = 1;
  var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(T, c, E) {
    var p, h = {}, C = null, M = null;
    E !== void 0 && (C = "" + E), c.key !== void 0 && (C = "" + c.key), c.ref !== void 0 && (M = c.ref);
    for (p in c)
      u.call(c, p) && !g.hasOwnProperty(p) && (h[p] = c[p]);
    if (T && T.defaultProps)
      for (p in c = T.defaultProps, c)
        h[p] === void 0 && (h[p] = c[p]);
    return { $$typeof: a, type: T, key: C, ref: M, props: h, _owner: d.current };
  }
  return Y.Fragment = i, Y.jsx = y, Y.jsxs = y, Y;
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
var je;
function _r() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), T = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ae = Symbol.iterator, Le = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var v = t.map(function(l) {
          return String(l);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var We = !1, Be = !1, Ue = !1, Ne = !1, Ve = !1, oe;
    oe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === g || Ve || e === d || e === E || e === p || Ne || e === M || We || Be || Ue || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === h || e.$$typeof === y || e.$$typeof === T || e.$$typeof === c || // This needs to include all possible module reference object
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
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case i:
          return "Portal";
        case g:
          return "Profiler";
        case d:
          return "StrictMode";
        case E:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ie(r) + ".Consumer";
          case y:
            var t = e;
            return ie(t._context) + ".Provider";
          case c:
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
        A < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, G;
    function $(e, r, t) {
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
    var H = !1, W;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      W = new He();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var t = W.get(e);
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
          for (var s = O.stack.split(`
`), R = o.stack.split(`
`), b = s.length - 1, m = R.length - 1; b >= 1 && m >= 0 && s[b] !== R[m]; )
            m--;
          for (; b >= 1 && m >= 0; b--, m--)
            if (s[b] !== R[m]) {
              if (b !== 1 || m !== 1)
                do
                  if (b--, m--, m < 0 || s[b] !== R[m]) {
                    var P = `
` + s[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, P), P;
                  }
                while (b >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = v, Ge(), Error.prepareStackTrace = f;
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
        case E:
          return $("Suspense");
        case p:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
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
    var U = Object.prototype.hasOwnProperty, he = {}, ye = k.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ze(e, r, t, o, f) {
      {
        var v = Function.call.bind(U);
        for (var l in e)
          if (v(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var R = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              s = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              s = b;
            }
            s && !(s instanceof Error) && (N(f), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof s), N(null)), s instanceof Error && !(s.message in he) && (he[s.message] = !0, N(f), _("Failed %s type: %s", t, s.message), N(null));
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), be(e);
    }
    var I = k.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Te, X;
    X = {};
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
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = x(I.current.type);
        X[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(I.current.type), e.ref), X[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Te || (Te = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, o, f, v, l) {
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
        var v, l = {}, s = null, R = null;
        t !== void 0 && (me(t), s = "" + t), ar(r) && (me(r.key), s = "" + r.key), nr(r) && (R = r.ref, or(r, f));
        for (v in r)
          U.call(r, v) && !tr.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (v in b)
            l[v] === void 0 && (l[v] = b[v]);
        }
        if (s || R) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(l, m), R && sr(l, m);
        }
        return ur(e, s, R, f, o, I.current, l);
      }
    }
    var Z = k.ReactCurrentOwner, _e = k.ReactDebugCurrentFrame;
    function j(e) {
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
        e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + x(e._owner.type) + "."), j(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), j(null);
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
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
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
            j(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function xe(e, r, t, o, f, v) {
      {
        var l = qe(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = lr(f);
          R ? s += R : s += Re();
          var b;
          e === null ? b = "null" : K(e) ? b = "array" : e !== void 0 && e.$$typeof === a ? (b = "<" + (x(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, s);
        }
        var m = cr(e, r, t, f, v);
        if (m == null)
          return m;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (K(P)) {
                for (var D = 0; D < P.length; D++)
                  we(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(P, e);
        }
        return e === u ? vr(m) : dr(m), m;
      }
    }
    function pr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function gr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var hr = gr, yr = pr;
    L.Fragment = u, L.jsx = hr, L.jsxs = yr;
  }()), L;
}
process.env.NODE_ENV === "production" ? re.exports = Tr() : re.exports = _r();
var F = re.exports;
const Rr = ({
  trigger: n,
  setMekuriState: a,
  millisecond: i
}) => {
  const u = w(n), d = w(0);
  q(() => (u.current !== n && (u.current = n, a((g) => ({
    ...g,
    nextTrigger: n,
    phase: "leave",
    yPosBeforeLeave: window.scrollY || document.documentElement.scrollTop
  })), d.current = setTimeout(() => {
    a((g) => ({
      ...g,
      prevTrigger: g.currentTrigger,
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
}, Fe = te(Cr), Ae = te(Pr), Ie = te(wr), Fr = ({
  trigger: n,
  children: a,
  millisecond: i = 1e3,
  scrollRestoration: u = "restore",
  mode: d = "wait"
}) => {
  const [g] = V({
    scrollRestoration: u,
    mode: d
  }), [y] = V({
    millisecond: i,
    second: i / 1e3
  }), [T, c] = V({
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
  }), /* @__PURE__ */ F.jsx(Fe.Provider, { value: y, children: /* @__PURE__ */ F.jsx(Ie.Provider, { value: g, children: /* @__PURE__ */ F.jsx(Ae.Provider, { value: T, children: a }) }) });
}, Ar = () => z(Fe), Ye = () => z(Ie), ne = () => z(Ae), xr = () => {
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
    (d, g) => {
      d.forEach((y) => {
        a(y.isIntersecting), g.unobserve(y.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, Ir = ({
  onOnce: n,
  onLeave: a,
  onEnter: i,
  onAfterSyncEnter: u,
  onEveryLeave: d,
  onEveryEnter: g
}) => {
  const y = w(!1), T = w(), c = ne(), { mode: E } = Ye();
  q(() => {
    T.current = location.pathname;
  }, []), q(() => {
    const p = T.current === location.pathname, h = {
      prevTrigger: c.prevTrigger,
      currentTrigger: c.currentTrigger,
      nextTrigger: c.nextTrigger,
      yPosBeforeLeave: c.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Or
    };
    if (!y.current && c.phase === null) {
      n && n(h), y.current = !0;
      return;
    }
    c.phase === "leave" && (d && d(h), E === "wait" && a && a(h), E === "sync" && (p ? i && i({
      ...h,
      prevTrigger: c.currentTrigger,
      currentTrigger: c.nextTrigger
    }) : a && a(h))), c.phase === "enter" && (g && g(h), E === "wait" && p && i && i(h), E === "sync" && u && u(h));
  }, [c]);
}, Yr = (n) => {
  const { phase: a, nextTrigger: i, currentTrigger: u } = ne(), d = w(u);
  return (n === "enter" && a === "enter" || n === "leave" && a === "leave") && (d.current = i), d.current;
}, Lr = ({
  children: n,
  routerContext: a
}) => {
  const i = z(a), u = w(i).current;
  return /* @__PURE__ */ F.jsx(a.Provider, { value: u, children: n });
}, Sr = ({
  isCacheUpdate: n,
  offsetIndex: a,
  cache: i,
  key: u,
  isPopstate: d,
  pos: g
}) => {
  if (d === !1)
    return n && (i.backPosY = g, i.keysArr.push(u)), 0;
  const y = u === i.keysArr[i.keysArr.length - a] && i.backPosY || 0;
  return n && (i.keysArr = [u]), y;
}, kr = ({
  mekuriState: n,
  scrollRestoration: a
}) => {
  const i = w(!0), u = w(!1), d = typeof a == "object" && "scrollRestoration" in a, g = w({
    backPosY: 0,
    keysArr: []
  }), y = d && !a.onEnter && a.onLeave, T = w(y ? "leave" : "enter"), c = Se(
    (p) => {
      const h = T.current === p, C = Sr({
        isCacheUpdate: h,
        offsetIndex: p === "enter" ? 2 : 1,
        cache: g.current,
        key: n.currentTrigger || "",
        pos: n.yPosBeforeLeave,
        isPopstate: u.current
      });
      return h && (u.current = !1), C;
    },
    [n.currentTrigger, n.yPosBeforeLeave, T]
  ), E = Se(
    (p, h, C) => {
      p === "top" ? C(0) : p === "restore" && C(c(h));
    },
    [c]
  );
  q(() => {
    if (a !== "none") {
      if (i.current) {
        window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
          u.current = !0;
        }), g.current.keysArr.push(n.currentTrigger || ""), i.current = !1;
        return;
      }
      if (n.phase === "leave" && d && (a != null && a.onLeave) && E(
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
            d && (a != null && a.onEnter) && E(
              a.scrollRestoration,
              n.phase,
              a.onEnter
            );
            break;
        }
    }
  }, [n.phase]);
}, jr = (n) => mr.toArray(n).filter(
  Er
), Mr = ({ children: n }) => {
  const { scrollRestoration: a, mode: i } = Ye(), u = ne(), d = jr(n), [g, y] = br(
    (E, p) => {
      switch (p.type) {
        case "leave-sync":
          return {
            ...E,
            nextChildren: p.nextChildren || null
          };
        case "enter-wait":
          return {
            ...E,
            currentChildren: p.nextChildren || null
          };
        case "enter-sync":
          return {
            ...E,
            currentChildren: E.nextChildren || null,
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
  ), [T, c] = V(u.phase);
  return T !== u.phase && (c(u.phase), u.phase === "leave" && i === "sync" && y({
    type: "leave-sync",
    nextChildren: d
  }), u.phase === "enter" && (i === "wait" && y({
    type: "enter-wait",
    nextChildren: d
  }), i === "sync" && y({
    type: "enter-sync"
  }))), kr({ mekuriState: u, scrollRestoration: a }), /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    g.currentChildren,
    g.nextChildren
  ] });
};
export {
  Mr as Mekuri,
  Fr as MekuriContext,
  Lr as MekuriFreezer,
  Or as intersectionObserverHandler,
  Ir as useMekuriAnimation,
  Ar as useMekuriDuration,
  Yr as useMekuriTrigger
};
//# sourceMappingURL=mekuri.js.map
