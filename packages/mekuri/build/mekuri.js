import Ae, { useRef as P, useEffect as I, createContext as oe, useState as ne, useContext as G, useCallback as mr, useReducer as br, Children as yr, isValidElement as Er } from "react";
var ae = { exports: {} }, M = {};
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
function Rr() {
  if (je)
    return M;
  je = 1;
  var a = Ae, n = Symbol.for("react.element"), l = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(g, p, E) {
    var y, T = {}, w = null, Y = null;
    E !== void 0 && (w = "" + E), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (Y = p.ref);
    for (y in p)
      s.call(p, y) && !m.hasOwnProperty(y) && (T[y] = p[y]);
    if (g && g.defaultProps)
      for (y in p = g.defaultProps, p)
        T[y] === void 0 && (T[y] = p[y]);
    return { $$typeof: n, type: g, key: w, ref: Y, props: T, _owner: v.current };
  }
  return M.Fragment = l, M.jsx = f, M.jsxs = f, M;
}
var W = {};
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
    var a = Ae, n = Symbol.for("react.element"), l = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), g = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), B = Symbol.iterator, N = "@@iterator";
    function j(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[N];
      return typeof r == "function" ? r : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Le("error", e, t);
      }
    }
    function Le(e, r, t) {
      {
        var o = k.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Me = !1, We = !1, Be = !1, Ne = !1, Ue = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === m || Ue || e === v || e === E || e === y || Ne || e === Y || Me || We || Be || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === T || e.$$typeof === f || e.$$typeof === g || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function qe(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function x(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case l:
          return "Portal";
        case m:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return ue(r) + ".Consumer";
          case f:
            var t = e;
            return ue(t._context) + ".Provider";
          case p:
            return qe(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : x(e.type) || "Memo";
          case w: {
            var c = e, d = c._payload, u = c._init;
            try {
              return x(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, $ = 0, se, ce, le, fe, de, ve, pe;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function ze() {
      {
        if ($ === 0) {
          se = console.log, ce = console.info, le = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        $++;
      }
    }
    function Je() {
      {
        if ($--, $ === 0) {
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
        $ < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = k.ReactCurrentDispatcher, K;
    function U(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            K = o && o[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, V;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ge();
    }
    function he(e, r) {
      if (!e || X)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      X = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = H.current, H.current = null, ze();
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
            } catch (O) {
              o = O;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (O) {
              o = O;
            }
            e.call(u.prototype);
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
          for (var i = O.stack.split(`
`), _ = o.stack.split(`
`), h = i.length - 1, b = _.length - 1; h >= 1 && b >= 0 && i[h] !== _[b]; )
            b--;
          for (; h >= 1 && b >= 0; h--, b--)
            if (i[h] !== _[b]) {
              if (h !== 1 || b !== 1)
                do
                  if (h--, b--, b < 0 || i[h] !== _[b]) {
                    var C = `
` + i[h].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, C), C;
                  }
                while (h >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        X = !1, H.current = d, Je(), Error.prepareStackTrace = c;
      }
      var D = e ? e.displayName || e.name : "", Se = D ? U(D) : "";
      return typeof e == "function" && V.set(e, Se), Se;
    }
    function He(e, r, t) {
      return he(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ke(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case E:
          return U("Suspense");
        case y:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return He(e.render);
          case T:
            return q(e.type, r, t);
          case w: {
            var o = e, c = o._payload, d = o._init;
            try {
              return q(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, me = {}, be = k.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Xe(e, r, t, o, c) {
      {
        var d = Function.call.bind(z);
        for (var u in e)
          if (d(e, u)) {
            var i = void 0;
            try {
              if (typeof e[u] != "function") {
                var _ = Error((o || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              i = e[u](r, u, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              i = h;
            }
            i && !(i instanceof Error) && (J(c), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, u, typeof i), J(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, J(c), R("Failed %s type: %s", t, i.message), J(null));
          }
      }
    }
    var Ze = Array.isArray;
    function Z(e) {
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
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Ee(e) {
      if (er(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), ye(e);
    }
    var L = k.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e, Q;
    Q = {};
    function tr(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = x(L.current.type);
        Q[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(L.current.type), e.ref), Q[t] = !0);
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Re || (Re = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ur = function(e, r, t, o, c, d, u) {
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
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function sr(e, r, t, o, c) {
      {
        var d, u = {}, i = null, _ = null;
        t !== void 0 && (Ee(t), i = "" + t), nr(r) && (Ee(r.key), i = "" + r.key), tr(r) && (_ = r.ref, ar(r, c));
        for (d in r)
          z.call(r, d) && !rr.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (d in h)
            u[d] === void 0 && (u[d] = h[d]);
        }
        if (i || _) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && or(u, b), _ && ir(u, b);
        }
        return ur(e, i, _, c, o, L.current, u);
      }
    }
    var ee = k.ReactCurrentOwner, Te = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ce() {
      {
        if (ee.current) {
          var e = x(ee.current.type);
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
    var we = {};
    function lr(e) {
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
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (we[t])
          return;
        we[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ee.current && (o = " It was passed a child from " + x(e._owner.type) + "."), A(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), A(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            te(o) && Pe(o, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = j(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), u; !(u = d.next()).done; )
              te(u.value) && Pe(u.value, r);
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
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = x(r);
          Xe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var c = x(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
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
    function Oe(e, r, t, o, c, d) {
      {
        var u = Ve(e);
        if (!u) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = cr(c);
          _ ? i += _ : i += Ce();
          var h;
          e === null ? h = "null" : Z(e) ? h = "array" : e !== void 0 && e.$$typeof === n ? (h = "<" + (x(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, i);
        }
        var b = sr(e, r, t, c, d);
        if (b == null)
          return b;
        if (u) {
          var C = r.children;
          if (C !== void 0)
            if (o)
              if (Z(C)) {
                for (var D = 0; D < C.length; D++)
                  xe(C[D], e);
                Object.freeze && Object.freeze(C);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(C, e);
        }
        return e === s ? dr(b) : fr(b), b;
      }
    }
    function vr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function pr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var gr = pr, hr = vr;
    W.Fragment = s, W.jsx = gr, W.jsxs = hr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ae.exports = Rr() : ae.exports = _r();
var F = ae.exports;
const Tr = ({
  trigger: a,
  setMekuriState: n,
  millisecond: l
}) => {
  const s = P(!0), v = P(0);
  I(() => {
    if (s.current) {
      s.current = !1, n((f) => ({
        ...f,
        initialRender: !1
      }));
      return;
    }
    const m = window.scrollY || document.documentElement.scrollTop;
    return n((f) => ({
      ...f,
      nextTrigger: a,
      phase: "leave",
      yPosBeforeLeave: m
    })), v.current = setTimeout(() => {
      n((f) => ({
        ...f,
        prevTrigger: f.currentTrigger,
        currentTrigger: a,
        nextTrigger: a,
        phase: "enter"
      }));
    }, l), () => {
      clearTimeout(v.current);
    };
  }, [a, l, n]);
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
}, De = oe(Cr), Fe = oe(wr), Ie = oe(Pr), Ir = ({
  trigger: a,
  millisecond: n = 1e3,
  scrollRestoration: l = "top",
  mode: s = "wait",
  children: v
}) => {
  const [m] = ne({
    millisecond: n,
    second: n / 1e3
  }), [f, g] = ne({
    initialRender: !0,
    prevTrigger: null,
    currentTrigger: a,
    nextTrigger: null,
    phase: null,
    yPosBeforeLeave: 0
  }), [p] = ne({
    scrollRestoration: l,
    mode: s
  });
  return Tr({
    trigger: a,
    setMekuriState: g,
    millisecond: n
  }), /* @__PURE__ */ F.jsx(De.Provider, { value: m, children: /* @__PURE__ */ F.jsx(Ie.Provider, { value: p, children: /* @__PURE__ */ F.jsx(Fe.Provider, { value: f, children: v }) }) });
}, Yr = () => G(De), Ye = () => G(Ie), $e = () => G(Fe), xr = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const l = window.scrollY || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + l;
}, $r = ({
  onOnce: a,
  onLeave: n,
  onEnter: l,
  onEveryLeave: s,
  onEveryEnter: v
}) => {
  const m = P(!0), f = P(null), g = $e(), { mode: p } = Ye();
  I(() => {
    f.current = location.pathname;
  }, []), I(() => {
    if (g.initialRender) {
      m.current && (a && a(), m.current = !1);
      return;
    }
    const E = {
      prevTrigger: g.prevTrigger,
      currentTrigger: g.currentTrigger,
      nextTrigger: g.nextTrigger,
      yPosBeforeLeave: g.yPosBeforeLeave,
      getHashPos: () => xr(),
      intersectionObserver: (y, T) => {
        const w = y == null ? void 0 : y.current;
        if (!w)
          return;
        new IntersectionObserver(
          (B, N) => {
            B.forEach((j) => {
              j.isIntersecting ? (T(!0), N.unobserve(j.target)) : j.isIntersecting || (T(!1), N.unobserve(j.target));
            });
          },
          { rootMargin: "0px", threshold: 0 }
        ).observe(w);
      }
    };
    g.phase === "leave" && (s && s(E), p === "wait" && n && n(E), p === "sync" && (f.current === location.pathname ? l && l({
      ...E,
      prevTrigger: g.currentTrigger,
      currentTrigger: g.nextTrigger
    }) : n && n(E))), g.phase === "enter" && (v && v(E), f.current === location.pathname && p === "wait" && l && l(E));
  }, [g]);
}, Lr = ({ routerContext: a, children: n }) => {
  const l = G(a), s = P(l).current;
  return /* @__PURE__ */ F.jsx(a.Provider, { value: s, children: n });
}, Or = ({
  mekuriState: a,
  mode: n,
  children: l,
  setComponentState: s
}) => {
  const v = P(!0), m = (f) => {
    s({
      type: f,
      nextChildren: l
    });
  };
  I(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    a.phase === "enter" && n === "wait" && m("update-unmount"), a.phase === "leave" && n === "sync" && m("update");
  }, [a.phase]);
}, Sr = ({
  mekuriState: a,
  mode: n,
  setComponentState: l
}) => {
  const s = P(!0);
  I(() => {
    if (s.current) {
      s.current = !1;
      return;
    }
    a.phase === "enter" && n === "sync" && l({
      type: "unmount-prev"
    });
  }, [a.phase]);
}, jr = ({
  cache: a,
  key: n,
  isPopstate: l,
  pos: s
}) => {
  if (l === !1)
    return a.backPosY = s, a.keysArr.push(n), 0;
  const v = n === a.keysArr[a.keysArr.length - 2] && a.backPosY || 0;
  return a.keysArr = [n], v;
}, kr = ({
  mekuriState: a,
  scrollRestoration: n
}) => {
  const l = P(!0), s = P(!1), v = P({
    backPosY: 0,
    keysArr: []
  }), m = mr(() => {
    const f = jr({
      cache: v.current,
      key: a.currentTrigger || "",
      pos: a.yPosBeforeLeave,
      isPopstate: s.current
    });
    return s.current = !1, f;
  }, [a.currentTrigger, a.yPosBeforeLeave]);
  I(() => {
    if (n === "none")
      return;
    if (l.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        s.current = !0;
      }), v.current.keysArr.push(a.currentTrigger || ""), l.current = !1;
      return;
    }
    const f = typeof n == "object" && "scrollRestoration" in n, g = (p, E) => {
      p === "top" ? E(0) : p === "restore" && E(m());
    };
    if (a.phase === "leave" && f && (n != null && n.onLeave) && g(
      n.scrollRestoration,
      n.onLeave
    ), a.phase === "enter")
      switch (n) {
        case "top":
          window.scrollTo({ top: 0 });
          break;
        case "restore":
          window.scrollTo({ top: m() });
          break;
        default:
          f && (n != null && n.onEnter) && g(
            n.scrollRestoration,
            n.onEnter
          );
          break;
      }
  }, [a.phase]);
}, Ar = (a, n) => {
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
function Dr(a) {
  return yr.toArray(a).filter(
    Er
  );
}
const Mr = ({ children: a }) => {
  const n = Dr(a), { scrollRestoration: l, mode: s } = Ye(), v = $e(), [m, f] = br(Ar, {
    currentChildren: n,
    nextChildren: null
  });
  return Or({
    mekuriState: v,
    mode: s,
    children: n,
    setComponentState: f
  }), Sr({
    mekuriState: v,
    mode: s,
    setComponentState: f
  }), kr({ mekuriState: v, scrollRestoration: l }), /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    m.currentChildren,
    m.nextChildren
  ] });
};
export {
  Mr as Mekuri,
  Ir as MekuriContext,
  Lr as MekuriFreezer,
  $r as useMekuriAnimation,
  Yr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
