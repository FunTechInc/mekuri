import Ae, { useRef as w, useEffect as q, createContext as te, useState as V, useContext as z, useCallback as Oe, useReducer as mr, Children as br, isValidElement as Er } from "react";
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
  var n = Ae, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(T, c, E) {
    var h, g = {}, C = null, M = null;
    E !== void 0 && (C = "" + E), c.key !== void 0 && (C = "" + c.key), c.ref !== void 0 && (M = c.ref);
    for (h in c)
      s.call(c, h) && !v.hasOwnProperty(h) && (g[h] = c[h]);
    if (T && T.defaultProps)
      for (h in c = T.defaultProps, c)
        g[h] === void 0 && (g[h] = c[h]);
    return { $$typeof: a, type: T, key: C, ref: M, props: g, _owner: d.current };
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
    var n = Ae, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), T = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), ae = Symbol.iterator, Le = "@@iterator";
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
        var p = t.map(function(l) {
          return String(l);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var We = !1, Be = !1, Ue = !1, Ne = !1, Ve = !1, oe;
    oe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === v || Ve || e === d || e === E || e === h || Ne || e === M || We || Be || Ue || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === g || e.$$typeof === y || e.$$typeof === T || e.$$typeof === c || // This needs to include all possible module reference object
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
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case v:
          return "Profiler";
        case d:
          return "StrictMode";
        case E:
          return "Suspense";
        case h:
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
    var O = Object.assign, F = 0, se, ue, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Je() {
      {
        if (F === 0) {
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
        F++;
      }
    }
    function Ge() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: se
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: ce
            }),
            error: O({}, e, {
              value: le
            }),
            group: O({}, e, {
              value: fe
            }),
            groupCollapsed: O({}, e, {
              value: de
            }),
            groupEnd: O({}, e, {
              value: ve
            })
          });
        }
        F < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    function he(e, r) {
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
      var p;
      p = J.current, J.current = null, Je();
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
            } catch (S) {
              o = S;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (S) {
              o = S;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            o = S;
          }
          e();
        }
      } catch (S) {
        if (S && o && typeof S.stack == "string") {
          for (var u = S.stack.split(`
`), R = o.stack.split(`
`), m = u.length - 1, b = R.length - 1; m >= 1 && b >= 0 && u[m] !== R[b]; )
            b--;
          for (; m >= 1 && b >= 0; m--, b--)
            if (u[m] !== R[b]) {
              if (m !== 1 || b !== 1)
                do
                  if (m--, b--, b < 0 || u[m] !== R[b]) {
                    var P = `
` + u[m].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, P), P;
                  }
                while (m >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = p, Ge(), Error.prepareStackTrace = f;
      }
      var A = e ? e.displayName || e.name : "", Se = A ? $(A) : "";
      return typeof e == "function" && W.set(e, Se), Se;
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
        return $(e);
      switch (e) {
        case E:
          return $("Suspense");
        case h:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
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
    var U = Object.prototype.hasOwnProperty, ge = {}, ye = k.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ze(e, r, t, o, f) {
      {
        var p = Function.call.bind(U);
        for (var l in e)
          if (p(e, l)) {
            var u = void 0;
            try {
              if (typeof e[l] != "function") {
                var R = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              u = e[l](r, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              u = m;
            }
            u && !(u instanceof Error) && (N(f), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof u), N(null)), u instanceof Error && !(u.message in ge) && (ge[u.message] = !0, N(f), _("Failed %s type: %s", t, u.message), N(null));
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
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function be(e) {
      if (rr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), me(e);
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
        var p, l = {}, u = null, R = null;
        t !== void 0 && (be(t), u = "" + t), ar(r) && (be(r.key), u = "" + r.key), nr(r) && (R = r.ref, or(r, f));
        for (p in r)
          U.call(r, p) && !tr.hasOwnProperty(p) && (l[p] = r[p]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (p in m)
            l[p] === void 0 && (l[p] = m[p]);
        }
        if (u || R) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && ir(l, b), R && sr(l, b);
        }
        return ur(e, u, R, f, o, I.current, l);
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
            for (var p = f.call(e), l; !(l = p.next()).done; )
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
        r.$$typeof === g))
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
    function xe(e, r, t, o, f, p) {
      {
        var l = qe(e);
        if (!l) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = lr(f);
          R ? u += R : u += Re();
          var m;
          e === null ? m = "null" : K(e) ? m = "array" : e !== void 0 && e.$$typeof === a ? (m = "<" + (x(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, u);
        }
        var b = cr(e, r, t, f, p);
        if (b == null)
          return b;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (o)
              if (K(P)) {
                for (var A = 0; A < P.length; A++)
                  we(P[A], e);
                Object.freeze && Object.freeze(P);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(P, e);
        }
        return e === s ? vr(b) : dr(b), b;
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
var D = re.exports;
const Rr = ({
  trigger: n,
  setMekuriState: a,
  millisecond: i
}) => {
  const s = w(n), d = w(0);
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
}, De = te(Cr), Fe = te(Pr), Ie = te(wr), Ir = ({
  trigger: n,
  children: a,
  millisecond: i = 1e3,
  scrollRestoration: s = "restore",
  mode: d = "wait"
}) => {
  const [v] = V({
    scrollRestoration: s,
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
  }), /* @__PURE__ */ D.jsx(De.Provider, { value: y, children: /* @__PURE__ */ D.jsx(Ie.Provider, { value: v, children: /* @__PURE__ */ D.jsx(Fe.Provider, { value: T, children: a }) }) });
}, Yr = () => z(De), Ye = () => z(Ie), ne = () => z(Fe), xr = () => {
  const n = window.location.hash.substring(1);
  if (!n)
    return !1;
  const a = document.getElementById(n);
  if (!a)
    return !1;
  const i = window.scrollY || document.documentElement.scrollTop;
  return a.getBoundingClientRect().top + i;
}, Sr = (n, a) => {
  const i = n == null ? void 0 : n.current;
  if (!i)
    return;
  new IntersectionObserver(
    (d, v) => {
      d.forEach((y) => {
        a(y.isIntersecting), v.unobserve(y.target);
      });
    },
    { rootMargin: "0px", threshold: 0 }
  ).observe(i);
}, Or = (n) => Array.from(document.styleSheets).some((a) => a.href ? a.href.split("?")[0] === n.split("?")[0] : !1), kr = (n) => {
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
    Or(v.href) ? d() : v.addEventListener("load", d, {
      once: !0
    });
  });
}, Lr = ({
  onOnce: n,
  onLeave: a,
  onEnter: i,
  onAfterSyncEnter: s,
  onEveryLeave: d,
  onEveryEnter: v
}) => {
  const y = w(!1), T = w(), c = ne(), { mode: E } = Ye();
  q(() => {
    T.current = location.pathname;
  }, []), q(() => {
    const h = T.current === location.pathname, g = {
      prevTrigger: c.prevTrigger,
      currentTrigger: c.currentTrigger,
      nextTrigger: c.nextTrigger,
      yPosBeforeLeave: c.yPosBeforeLeave,
      getHashPos: xr,
      intersectionObserver: Sr,
      onStylesheetLoaded: kr
    };
    if (!y.current && c.phase === null) {
      n && n(g), y.current = !0;
      return;
    }
    c.phase === "leave" && (d && d(g), E === "wait" && a && a(g), E === "sync" && (h ? i && i({
      ...g,
      prevTrigger: c.currentTrigger,
      currentTrigger: c.nextTrigger
    }) : a && a(g))), c.phase === "enter" && (v && v(g), E === "wait" && h && i && i(g), E === "sync" && s && s(g));
  }, [c]);
}, Mr = (n) => {
  const { phase: a, nextTrigger: i, currentTrigger: s } = ne(), d = w(s);
  return (n === "enter" && a === "enter" || n === "leave" && a === "leave") && (d.current = i), d.current;
}, $r = ({
  children: n,
  routerContext: a
}) => {
  const i = z(a), s = w(i).current;
  return /* @__PURE__ */ D.jsx(a.Provider, { value: s, children: n });
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
  const y = s === i.keysArr[i.keysArr.length - a] && i.backPosY || 0;
  return n && (i.keysArr = [s]), y;
}, Ar = ({
  mekuriState: n,
  scrollRestoration: a
}) => {
  const i = w(!0), s = w(!1), d = typeof a == "object" && "scrollRestoration" in a, v = w({
    backPosY: 0,
    keysArr: []
  }), y = d && !a.onEnter && a.onLeave, T = w(y ? "leave" : "enter"), c = Oe(
    (h) => {
      const g = T.current === h, C = jr({
        isCacheUpdate: g,
        offsetIndex: h === "enter" ? 2 : 1,
        cache: v.current,
        key: n.currentTrigger || "",
        pos: n.yPosBeforeLeave,
        isPopstate: s.current
      });
      return g && (s.current = !1), C;
    },
    [n.currentTrigger, n.yPosBeforeLeave, T]
  ), E = Oe(
    (h, g, C) => {
      h === "top" ? C(0) : h === "restore" && C(c(g));
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
}, Dr = (n) => br.toArray(n).filter(
  Er
), Wr = ({ children: n }) => {
  const { scrollRestoration: a, mode: i } = Ye(), s = ne(), d = Dr(n), [v, y] = mr(
    (E, h) => {
      switch (h.type) {
        case "leave-sync":
          return {
            ...E,
            nextChildren: h.nextChildren || null
          };
        case "enter-wait":
          return {
            ...E,
            currentChildren: h.nextChildren || null
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
  ), [T, c] = V(s.phase);
  return T !== s.phase && (c(s.phase), s.phase === "leave" && i === "sync" && y({
    type: "leave-sync",
    nextChildren: d
  }), s.phase === "enter" && (i === "wait" && y({
    type: "enter-wait",
    nextChildren: d
  }), i === "sync" && y({
    type: "enter-sync"
  }))), Ar({ mekuriState: s, scrollRestoration: a }), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
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
