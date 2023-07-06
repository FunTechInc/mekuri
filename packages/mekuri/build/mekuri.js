import Oe, { useRef as x, useEffect as k, createContext as ke, useState as Rr, useReducer as je, useContext as Ae, memo as Er } from "react";
var ee = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function br() {
  if (Ce)
    return $;
  Ce = 1;
  var a = Oe, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(m, i, E) {
    var h, w = {}, S = null, W = null;
    E !== void 0 && (S = "" + E), i.key !== void 0 && (S = "" + i.key), i.ref !== void 0 && (W = i.ref);
    for (h in i)
      o.call(i, h) && !y.hasOwnProperty(h) && (w[h] = i[h]);
    if (m && m.defaultProps)
      for (h in i = m.defaultProps, i)
        w[h] === void 0 && (w[h] = i[h]);
    return { $$typeof: n, type: m, key: S, ref: W, props: w, _owner: f.current };
  }
  return $.Fragment = c, $.jsx = v, $.jsxs = v, $;
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
    var a = Oe, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), m = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, Le = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Le];
      return typeof r == "function" ? r : null;
    }
    var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          t[u - 1] = arguments[u];
        Me("error", e, t);
      }
    }
    function Me(e, r, t) {
      {
        var u = j.ReactDebugCurrentFrame, d = u.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var p = t.map(function(l) {
          return String(l);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Ne = !1, Ue = !1, Ve = !1, Be = !1, qe = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === y || qe || e === f || e === E || e === h || Be || e === W || Ne || Ue || Ve || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === w || e.$$typeof === v || e.$$typeof === m || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
      var u = e.displayName;
      if (u)
        return u;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case c:
          return "Portal";
        case y:
          return "Profiler";
        case f:
          return "StrictMode";
        case E:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ae(r) + ".Consumer";
          case v:
            var t = e;
            return ae(t._context) + ".Provider";
          case i:
            return Ge(e, e.render, "ForwardRef");
          case w:
            var u = e.displayName || null;
            return u !== null ? u : T(e.type) || "Memo";
          case S: {
            var d = e, p = d._payload, l = d._init;
            try {
              return T(l(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, Y = 0, oe, ue, ie, se, ce, le, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function ze() {
      {
        if (Y === 0) {
          oe = console.log, ue = console.info, ie = console.warn, se = console.error, ce = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        Y++;
      }
    }
    function He() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: oe
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: ie
            }),
            error: O({}, e, {
              value: se
            }),
            group: O({}, e, {
              value: ce
            }),
            groupCollapsed: O({}, e, {
              value: le
            }),
            groupEnd: O({}, e, {
              value: fe
            })
          });
        }
        Y < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = j.ReactCurrentDispatcher, G;
    function M(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (d) {
            var u = d.stack.trim().match(/\n( *(at )?)/);
            G = u && u[1] || "";
          }
        return `
` + G + e;
      }
    }
    var z = !1, N;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ke();
    }
    function ve(e, r) {
      if (!e || z)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var u;
      z = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = J.current, J.current = null, ze();
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
            } catch (C) {
              u = C;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              u = C;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            u = C;
          }
          e();
        }
      } catch (C) {
        if (C && u && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), _ = u.stack.split(`
`), g = s.length - 1, R = _.length - 1; g >= 1 && R >= 0 && s[g] !== _[R]; )
            R--;
          for (; g >= 1 && R >= 0; g--, R--)
            if (s[g] !== _[R]) {
              if (g !== 1 || R !== 1)
                do
                  if (g--, R--, R < 0 || s[g] !== _[R]) {
                    var P = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, P), P;
                  }
                while (g >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        z = !1, J.current = p, He(), Error.prepareStackTrace = d;
      }
      var D = e ? e.displayName || e.name : "", Te = D ? M(D) : "";
      return typeof e == "function" && N.set(e, Te), Te;
    }
    function Xe(e, r, t) {
      return ve(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ze(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case E:
          return M("Suspense");
        case h:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Xe(e.render);
          case w:
            return U(e.type, r, t);
          case S: {
            var u = e, d = u._payload, p = u._init;
            try {
              return U(p(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, pe = {}, he = j.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Qe(e, r, t, u, d) {
      {
        var p = Function.call.bind(V);
        for (var l in e)
          if (p(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var _ = Error((u || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              s = e[l](r, l, u, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (B(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", t, l, typeof s), B(null)), s instanceof Error && !(s.message in pe) && (pe[s.message] = !0, B(d), b("Failed %s type: %s", t, s.message), B(null));
          }
      }
    }
    var er = Array.isArray;
    function H(e) {
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
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function ye(e) {
      if (tr(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), me(e);
    }
    var I = j.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, Re, K;
    K = {};
    function ar(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = T(I.current.type);
        K[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(I.current.type), e.ref), K[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          ge || (ge = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Re || (Re = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, u, d, p, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
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
        value: u
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function lr(e, r, t, u, d) {
      {
        var p, l = {}, s = null, _ = null;
        t !== void 0 && (ye(t), s = "" + t), or(r) && (ye(r.key), s = "" + r.key), ar(r) && (_ = r.ref, ur(r, d));
        for (p in r)
          V.call(r, p) && !nr.hasOwnProperty(p) && (l[p] = r[p]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (p in g)
            l[p] === void 0 && (l[p] = g[p]);
        }
        if (s || _) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && ir(l, R), _ && sr(l, R);
        }
        return cr(e, s, _, d, u, I.current, l);
      }
    }
    var X = j.ReactCurrentOwner, Ee = j.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function be() {
      {
        if (X.current) {
          var e = T(X.current.type);
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
    var _e = {};
    function dr(e) {
      {
        var r = be();
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
        var t = dr(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var u = "";
        e && e._owner && e._owner !== X.current && (u = " It was passed a child from " + T(e._owner.type) + "."), A(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, u), A(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var u = e[t];
            Q(u) && Pe(u, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = We(e);
          if (typeof d == "function" && d !== e.entries)
            for (var p = d.call(e), l; !(l = p.next()).done; )
              Q(l.value) && Pe(l.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var u = T(r);
          Qe(t, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var d = T(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var u = r[t];
          if (u !== "children" && u !== "key") {
            A(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function we(e, r, t, u, d, p) {
      {
        var l = Je(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = fr(d);
          _ ? s += _ : s += be();
          var g;
          e === null ? g = "null" : H(e) ? g = "array" : e !== void 0 && e.$$typeof === n ? (g = "<" + (T(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var R = lr(e, r, t, d, p);
        if (R == null)
          return R;
        if (l) {
          var P = r.children;
          if (P !== void 0)
            if (u)
              if (H(P)) {
                for (var D = 0; D < P.length; D++)
                  xe(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(P, e);
        }
        return e === o ? pr(R) : vr(R), R;
      }
    }
    function hr(e, r, t) {
      return we(e, r, t, !0);
    }
    function mr(e, r, t) {
      return we(e, r, t, !1);
    }
    var yr = mr, gr = hr;
    L.Fragment = o, L.jsx = yr, L.jsxs = gr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ee.exports = br() : ee.exports = _r();
var q = ee.exports;
const re = (a, n = !1) => {
  const c = n ? "^" : "", o = n ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)", f = c + a.replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\#/g, "\\#").replace(/★/g, ".*") + o;
  return new RegExp(f);
}, Pr = (a, n) => !n || a.length === 0 ? !1 : !!a.slice().find((o) => re(o, !0).test(n)), xr = ({
  state: a,
  dispatch: n,
  millisecond: c,
  preventArr: o,
  router: f
}) => {
  const y = x(!0), v = x(0);
  k(() => {
    if (y.current || Pr(o, f)) {
      y.current = !1, n({
        firstAccess: !1,
        prev: null,
        current: f,
        phase: null,
        next: null
      });
      return;
    }
    const m = document.documentElement.scrollTop;
    return n({
      next: f,
      phase: "leave",
      yPosBeforeLeave: m
    }), v.current = setTimeout(() => {
      n({
        prev: a.current,
        current: f,
        next: f,
        phase: "enter"
      });
    }, c), () => {
      clearTimeout(v.current);
    };
  }, [f]);
}, De = {
  firstAccess: !0,
  prev: null,
  current: null,
  next: null,
  phase: null,
  yPosBeforeLeave: 0
}, wr = {
  millisecond: 0,
  second: 0
}, Fe = ke(wr), Ye = ke(De), $r = ({
  millisecond: a,
  preventArr: n,
  router: c,
  children: o
}) => {
  const [f] = Rr({
    millisecond: a,
    second: a / 1e3
  }), [y, v] = je(
    (m, i) => ({
      ...m,
      ...i
    }),
    De
  );
  return xr({
    state: y,
    dispatch: v,
    router: c,
    millisecond: a,
    preventArr: n
  }), /* @__PURE__ */ q.jsx(Fe.Provider, { value: f, children: /* @__PURE__ */ q.jsx(Ye.Provider, { value: y, children: o }) });
}, Tr = () => Ae(Fe), Cr = () => Ae(Ye), Ie = (a, n) => a.slice().sort((c, o) => o.path.length - c.path.length).find((c) => re(c.path, !1).test(n)), $e = ({ pages: a, router: n, children: c }) => {
  const o = Ie(a, n);
  return o ? o.children : c;
}, Sr = ({
  pages: a,
  router: n,
  state: c
}) => {
  const o = Ie(a, n);
  return (o == null ? void 0 : o.children) === c.current;
}, Or = (a, n) => {
  switch (n.type) {
    case "update":
      return {
        ...a,
        next: n.component || null,
        restorePos: n.restorePos
      };
    case "unmount-prev":
      return {
        ...a,
        current: a.next || null,
        next: null
      };
    case "rapid-fire":
      return {
        ...a,
        current: a.current || null,
        next: null
      };
    case "update-unmount":
      return {
        ...a,
        current: n.component || null,
        restorePos: n.restorePos
      };
    default:
      throw new Error();
  }
}, kr = ({
  router: a,
  mode: n,
  millisecond: c,
  state: o,
  pages: f,
  children: y,
  dispatch: v
}) => {
  const m = x(!0), i = x(0), E = () => {
    const h = $e({
      pages: f,
      router: a,
      children: y
    });
    !h || Sr({ pages: f, router: a, state: o }) || v({
      type: n === "wait" ? "update-unmount" : "update",
      component: h,
      restorePos: {
        key: a,
        pos: window.scrollY || document.documentElement.scrollTop || 0
      }
    });
  };
  k(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    return n === "wait" ? i.current = setTimeout(E, c) : E(), () => {
      clearTimeout(i.current);
    };
  }, [a]);
}, jr = ({
  state: a,
  mode: n,
  millisecond: c,
  dispatch: o
}) => {
  const f = x(!0), y = x(0), v = x("");
  k(() => {
    v.current = location.pathname;
  }, []);
  const m = () => {
    n === "sync" && (v.current !== location.pathname ? o({
      type: "unmount-prev"
    }) : o({
      type: "rapid-fire"
    }), v.current = location.pathname);
  };
  k(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    if (!(!a.next && n === "sync"))
      return n === "wait" ? m() : y.current = setTimeout(m, c), () => {
        clearTimeout(y.current);
      };
  }, [a.current, a.next]);
}, Ar = ({
  cache: a,
  key: n,
  isPopstate: c,
  pos: o
}) => c === !1 ? (a.backPosY = o, a.keysArr.push(n), 0) : n === a.keysArr[a.keysArr.length - 2] ? (a.keysArr = [n], a.backPosY || 0) : (a.keysArr = [n], 0), Dr = ({
  scrollRestoration: a,
  state: n
}) => {
  const c = x(!0), o = x(!1), f = x({
    backPosY: 0,
    keysArr: []
  });
  k(() => {
    if (c.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        o.current = !0;
      }), f.current.keysArr.push(n.restorePos.key), c.current = !1;
      return;
    }
    if (a === "top")
      window.scrollTo({ top: 0 });
    else if (a === "restore") {
      const y = Ar({
        cache: f.current,
        key: n.restorePos.key,
        isPopstate: o.current,
        pos: n.restorePos.pos
      });
      window.scrollTo({ top: y }), o.current = !1;
    }
  }, [n.restorePos]);
}, Fr = ({
  pages: a,
  mode: n,
  scrollRestoration: c,
  router: o,
  children: f
}) => {
  const y = Tr().millisecond, [v, m] = je(Or, {
    current: $e({ pages: a, router: o, children: f }),
    next: null,
    restorePos: {
      key: o,
      pos: 0
    }
  });
  return kr({
    router: o,
    mode: n,
    millisecond: y,
    state: v,
    pages: a,
    children: f,
    dispatch: m
  }), jr({ state: v, mode: n, millisecond: y, dispatch: m }), Dr({ scrollRestoration: c, state: v }), /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
    v.current && v.current,
    v.next && v.next
  ] });
}, Lr = Er(Fr), F = (a, n) => n ? a.slice().find((o) => re(o, !0).test(n)) ?? !1 : !1, Yr = () => {
  const a = window.location.hash.substring(1);
  if (!a)
    return !1;
  const n = document.getElementById(a);
  if (!n)
    return !1;
  const c = window.scrollY || document.documentElement.scrollTop;
  return n.getBoundingClientRect().top + c;
}, Wr = ({
  isReRender: a = !0,
  mode: n,
  once: c,
  leave: o,
  enter: f,
  afterEnter: y
}) => {
  const v = x(!0), m = x(null), i = Cr();
  k(() => {
    m.current = location.pathname;
  }, []), k(() => {
    if (i.firstAccess) {
      v.current && (c && c(), v.current = !1);
      return;
    }
    const E = {
      prev: i.prev,
      current: i.current,
      next: i.next,
      yPosBeforeLeave: i.yPosBeforeLeave,
      isPrev: (h) => F(h, i.prev),
      isCurrent: (h) => F(h, i.current),
      isNext: (h) => F(h, i.next),
      getHashPos: () => Yr()
    };
    if (i.phase === "leave")
      n === "wait" && o && o(E), n === "sync" && (m.current === location.pathname ? f && f({
        ...E,
        prev: i.current,
        current: i.next,
        isPrev: (h) => F(h, i.current),
        isCurrent: (h) => F(h, i.next)
      }) : o && o(E));
    else if (i.phase === "enter") {
      if (n === "sync" && F([i.current], location.pathname) && y && y(E), m.current !== location.pathname && a)
        return;
      n === "wait" && f && f(E);
    }
  }, [i]);
};
export {
  $r as MekuriContext,
  Lr as MekuriLayout,
  Wr as useMekuriAnimation,
  Tr as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
