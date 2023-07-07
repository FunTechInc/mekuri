import De, { useRef as w, useEffect as j, createContext as te, useState as ke, useReducer as Fe, useContext as ne, memo as Pr } from "react";
var re = { exports: {} }, W = {};
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
function xr() {
  if (je)
    return W;
  je = 1;
  var n = De, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(h, i, d) {
    var m, R = {}, b = null, Y = null;
    d !== void 0 && (b = "" + d), i.key !== void 0 && (b = "" + i.key), i.ref !== void 0 && (Y = i.ref);
    for (m in i)
      a.call(i, m) && !g.hasOwnProperty(m) && (R[m] = i[m]);
    if (h && h.defaultProps)
      for (m in i = h.defaultProps, i)
        R[m] === void 0 && (R[m] = i[m]);
    return { $$typeof: o, type: h, key: b, ref: Y, props: R, _owner: l.current };
  }
  return W.Fragment = s, W.jsx = y, W.jsxs = y, W;
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
var Ae;
function wr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ae = Symbol.iterator, Ue = "@@iterator";
    function Ve(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[Ue];
      return typeof r == "function" ? r : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          t[u - 1] = arguments[u];
        Be("error", e, t);
      }
    }
    function Be(e, r, t) {
      {
        var u = A.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var v = t.map(function(f) {
          return String(f);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var qe = !1, Je = !1, Ge = !1, ze = !1, He = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === g || He || e === l || e === d || e === m || ze || e === Y || qe || Je || Ge || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === R || e.$$typeof === y || e.$$typeof === h || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var u = e.displayName;
      if (u)
        return u;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case g:
          return "Profiler";
        case l:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return se(r) + ".Consumer";
          case y:
            var t = e;
            return se(t._context) + ".Provider";
          case i:
            return Xe(e, e.render, "ForwardRef");
          case R:
            var u = e.displayName || null;
            return u !== null ? u : C(e.type) || "Memo";
          case b: {
            var p = e, v = p._payload, f = p._init;
            try {
              return C(f(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, $ = 0, ie, ce, le, fe, de, pe, ve;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ze() {
      {
        if ($ === 0) {
          ie = console.log, ce = console.info, le = console.warn, fe = console.error, de = console.group, pe = console.groupCollapsed, ve = console.groupEnd;
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
        $++;
      }
    }
    function Qe() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ie
            }),
            info: O({}, e, {
              value: ce
            }),
            warn: O({}, e, {
              value: le
            }),
            error: O({}, e, {
              value: fe
            }),
            group: O({}, e, {
              value: de
            }),
            groupCollapsed: O({}, e, {
              value: pe
            }),
            groupEnd: O({}, e, {
              value: ve
            })
          });
        }
        $ < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = A.ReactCurrentDispatcher, z;
    function N(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (p) {
            var u = p.stack.trim().match(/\n( *(at )?)/);
            z = u && u[1] || "";
          }
        return `
` + z + e;
      }
    }
    var H = !1, U;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      U = new er();
    }
    function me(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var u;
      H = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = G.current, G.current = null, Ze();
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
            } catch (S) {
              u = S;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (S) {
              u = S;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            u = S;
          }
          e();
        }
      } catch (S) {
        if (S && u && typeof S.stack == "string") {
          for (var c = S.stack.split(`
`), x = u.stack.split(`
`), E = c.length - 1, _ = x.length - 1; E >= 1 && _ >= 0 && c[E] !== x[_]; )
            _--;
          for (; E >= 1 && _ >= 0; E--, _--)
            if (c[E] !== x[_]) {
              if (E !== 1 || _ !== 1)
                do
                  if (E--, _--, _ < 0 || c[E] !== x[_]) {
                    var T = `
` + c[E].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, T), T;
                  }
                while (E >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = v, Qe(), Error.prepareStackTrace = p;
      }
      var F = e ? e.displayName || e.name : "", Oe = F ? N(F) : "";
      return typeof e == "function" && U.set(e, Oe), Oe;
    }
    function rr(e, r, t) {
      return me(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, tr(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case d:
          return N("Suspense");
        case m:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return rr(e.render);
          case R:
            return V(e.type, r, t);
          case b: {
            var u = e, p = u._payload, v = u._init;
            try {
              return V(v(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, ge = {}, ye = A.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function nr(e, r, t, u, p) {
      {
        var v = Function.call.bind(B);
        for (var f in e)
          if (v(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var x = Error((u || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              c = e[f](r, f, u, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              c = E;
            }
            c && !(c instanceof Error) && (q(p), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", t, f, typeof c), q(null)), c instanceof Error && !(c.message in ge) && (ge[c.message] = !0, q(p), P("Failed %s type: %s", t, c.message), q(null));
          }
      }
    }
    var or = Array.isArray;
    function K(e) {
      return or(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ur(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Ee(e) {
      if (ur(e))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Re(e);
    }
    var L = A.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, _e, X;
    X = {};
    function ir(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = C(L.current.type);
        X[t] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(L.current.type), e.ref), X[t] = !0);
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          be || (be = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function dr(e, r) {
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
    var pr = function(e, r, t, u, p, v, f) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
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
        value: u
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function vr(e, r, t, u, p) {
      {
        var v, f = {}, c = null, x = null;
        t !== void 0 && (Ee(t), c = "" + t), cr(r) && (Ee(r.key), c = "" + r.key), ir(r) && (x = r.ref, lr(r, p));
        for (v in r)
          B.call(r, v) && !sr.hasOwnProperty(v) && (f[v] = r[v]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (v in E)
            f[v] === void 0 && (f[v] = E[v]);
        }
        if (c || x) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && fr(f, _), x && dr(f, _);
        }
        return pr(e, c, x, p, u, L.current, f);
      }
    }
    var Z = A.ReactCurrentOwner, Pe = A.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function xe() {
      {
        if (Z.current) {
          var e = C(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function hr(e) {
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
    function mr(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = mr(r);
        if (we[t])
          return;
        we[t] = !0;
        var u = "";
        e && e._owner && e._owner !== Z.current && (u = " It was passed a child from " + C(e._owner.type) + "."), D(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, u), D(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var u = e[t];
            ee(u) && Te(u, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = Ve(e);
          if (typeof p == "function" && p !== e.entries)
            for (var v = p.call(e), f; !(f = v.next()).done; )
              ee(f.value) && Te(f.value, r);
        }
      }
    }
    function gr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var u = C(r);
          nr(t, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var p = C(r);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var u = r[t];
          if (u !== "children" && u !== "key") {
            D(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Se(e, r, t, u, p, v) {
      {
        var f = Ke(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = hr(p);
          x ? c += x : c += xe();
          var E;
          e === null ? E = "null" : K(e) ? E = "array" : e !== void 0 && e.$$typeof === o ? (E = "<" + (C(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, c);
        }
        var _ = vr(e, r, t, p, v);
        if (_ == null)
          return _;
        if (f) {
          var T = r.children;
          if (T !== void 0)
            if (u)
              if (K(T)) {
                for (var F = 0; F < T.length; F++)
                  Ce(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(T, e);
        }
        return e === a ? yr(_) : gr(_), _;
      }
    }
    function Rr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function Er(e, r, t) {
      return Se(e, r, t, !1);
    }
    var br = Er, _r = Rr;
    M.Fragment = a, M.jsx = br, M.jsxs = _r;
  }()), M;
}
process.env.NODE_ENV === "production" ? re.exports = xr() : re.exports = wr();
var k = re.exports;
const oe = (n, o = !1) => {
  const s = o ? "^" : "", a = o ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)", l = s + n.replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\#/g, "\\#").replace(/★/g, ".*") + a;
  return new RegExp(l);
}, J = (n, o) => {
  if (n.length === 0)
    throw new Error("routing length is empty");
  return !!n.map((l) => l.path).slice().find((l) => oe(l, !0).test(o));
}, Tr = ({
  state: n,
  dispatch: o,
  millisecond: s,
  routing: a,
  router: l
}) => {
  const g = w(!0), y = w(0), h = w("");
  j(() => {
    const i = J(a, l) && J(a, h.current);
    if (h.current = l, g.current || !i) {
      g.current = !1, o({
        firstAccess: !1,
        prev: null,
        current: l,
        phase: null,
        next: null
      });
      return;
    }
    const d = document.documentElement.scrollTop;
    return o({
      next: l,
      phase: "leave",
      yPosBeforeLeave: d
    }), y.current = setTimeout(() => {
      o({
        prev: n.current,
        current: l,
        next: l,
        phase: "enter"
      });
    }, s), () => {
      clearTimeout(y.current);
    };
  }, [l]);
}, Ie = {
  firstAccess: !0,
  prev: null,
  current: null,
  next: null,
  phase: null,
  yPosBeforeLeave: 0
}, Cr = {
  millisecond: 0,
  second: 0
}, Sr = {
  routing: null,
  scrollRestoration: null,
  mode: null
}, Ye = te(Cr), $e = te(Ie), Le = te(Sr), Mr = ({
  millisecond: n,
  routing: o,
  scrollRestoration: s,
  mode: a,
  router: l,
  children: g
}) => {
  const [y] = ke({
    millisecond: n,
    second: n / 1e3
  }), [h] = ke({
    routing: o,
    scrollRestoration: s,
    mode: a
  }), [i, d] = Fe(
    (m, R) => ({
      ...m,
      ...R
    }),
    Ie
  );
  return Tr({
    state: i,
    dispatch: d,
    router: l,
    millisecond: n,
    routing: o
  }), /* @__PURE__ */ k.jsx(Ye.Provider, { value: y, children: /* @__PURE__ */ k.jsx(Le.Provider, { value: h, children: /* @__PURE__ */ k.jsx($e.Provider, { value: i, children: g }) }) });
}, Or = () => ne(Ye), We = () => ne(Le), kr = () => ne($e), Me = (n, o) => n.slice().sort((s, a) => a.path.length - s.path.length).find((s) => oe(s.path, !1).test(o)), Ne = ({
  routing: n,
  router: o,
  children: s
}) => {
  const a = Me(n, o);
  return a ? a.children : s;
}, jr = ({
  routing: n,
  router: o,
  state: s
}) => {
  const a = Me(n, o);
  return (a == null ? void 0 : a.children) === s.current;
}, Ar = (n, o) => {
  switch (o.type) {
    case "update":
      return {
        ...n,
        next: o.component || null,
        restorePos: o.restorePos
      };
    case "unmount-prev":
      return {
        ...n,
        current: n.next || null,
        next: null
      };
    case "rapid-fire":
      return {
        ...n,
        current: n.current || null,
        next: null
      };
    case "update-unmount":
      return {
        ...n,
        current: o.component || null,
        restorePos: o.restorePos
      };
    default:
      throw new Error();
  }
}, Dr = ({
  router: n,
  mode: o,
  millisecond: s,
  state: a,
  routing: l,
  children: g,
  dispatch: y,
  isMatchRouting: h
}) => {
  const i = w(!0), d = w(0), m = (R = !1) => {
    const b = Ne({
      routing: l,
      router: n,
      children: g
    });
    if (!b || jr({ routing: l, router: n, state: a }))
      return;
    y({
      type: (() => R || o === "wait" ? "update-unmount" : "update")(),
      component: b,
      restorePos: {
        key: n,
        pos: window.scrollY || document.documentElement.scrollTop || 0
      }
    });
  };
  j(() => {
    if (i.current) {
      i.current = !1;
      return;
    }
    if (!h) {
      m(!h);
      return;
    }
    return o === "wait" ? d.current = setTimeout(m, s) : m(), () => {
      clearTimeout(d.current);
    };
  }, [n]);
}, Fr = ({
  state: n,
  mode: o,
  millisecond: s,
  dispatch: a,
  isMatchRouting: l
}) => {
  const g = w(!0), y = w(0), h = w("");
  j(() => {
    h.current = location.pathname;
  }, []);
  const i = () => {
    h.current !== location.pathname ? a({
      type: "unmount-prev"
    }) : a({
      type: "rapid-fire"
    }), h.current = location.pathname;
  };
  j(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    if (!(!n.next && o === "sync") && l)
      return o === "sync" && (y.current = setTimeout(i, s)), () => {
        clearTimeout(y.current);
      };
  }, [n.current, n.next]);
}, Ir = ({
  cache: n,
  key: o,
  isPopstate: s,
  pos: a
}) => s === !1 ? (n.backPosY = a, n.keysArr.push(o), 0) : o === n.keysArr[n.keysArr.length - 2] ? (n.keysArr = [o], n.backPosY || 0) : (n.keysArr = [o], 0), Yr = ({
  scrollRestoration: n,
  state: o
}) => {
  const s = w(!0), a = w(!1), l = w({
    backPosY: 0,
    keysArr: []
  });
  j(() => {
    if (s.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        a.current = !0;
      }), l.current.keysArr.push(o.restorePos.key), s.current = !1;
      return;
    }
    if (n === "top")
      window.scrollTo({ top: 0 });
    else if (n === "restore") {
      const g = Ir({
        cache: l.current,
        key: o.restorePos.key,
        isPopstate: a.current,
        pos: o.restorePos.pos
      });
      window.scrollTo({ top: g }), a.current = !1;
    }
  }, [o.restorePos]);
}, $r = ({ router: n, children: o }) => {
  const { millisecond: s } = Or(), { routing: a, scrollRestoration: l, mode: g } = We();
  if (!a || !g || !l)
    throw new Error("routing is null");
  const y = w(n), h = J(a, n) && J(a, y.current);
  y.current = n;
  const [i, d] = Fe(Ar, {
    current: Ne({ routing: a, router: n, children: o }),
    next: null,
    restorePos: {
      key: n,
      pos: 0
    }
  });
  return Dr({
    router: n,
    mode: g,
    millisecond: s,
    state: i,
    routing: a,
    children: o,
    dispatch: d,
    isMatchRouting: h
  }), Fr({ state: i, mode: g, millisecond: s, dispatch: d, isMatchRouting: h }), Yr({ scrollRestoration: l, state: i }), /* @__PURE__ */ k.jsx(k.Fragment, { children: h ? /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    i.current && i.current,
    i.next && i.next
  ] }) : o });
}, Nr = Pr($r), I = (n, o) => o ? n.slice().find((a) => oe(a, !0).test(o)) ?? !1 : !1, Lr = () => {
  const n = window.location.hash.substring(1);
  if (!n)
    return !1;
  const o = document.getElementById(n);
  if (!o)
    return !1;
  const s = window.scrollY || document.documentElement.scrollTop;
  return o.getBoundingClientRect().top + s;
}, Ur = ({
  isReRender: n = !0,
  once: o,
  leave: s,
  enter: a,
  afterEnter: l,
  everyLeave: g,
  everyEnter: y
}) => {
  const h = w(!0), i = w(null), d = kr(), { mode: m } = We();
  j(() => {
    i.current = location.pathname;
  }, []), j(() => {
    if (d.firstAccess) {
      h.current && (o && o(), h.current = !1);
      return;
    }
    const R = {
      prev: d.prev,
      current: d.current,
      next: d.next,
      yPosBeforeLeave: d.yPosBeforeLeave,
      isPrev: (b) => I(b, d.prev),
      isCurrent: (b) => I(b, d.current),
      isNext: (b) => I(b, d.next),
      getHashPos: () => Lr()
    };
    if (d.phase === "leave")
      g && g(R), m === "wait" && s && s(R), m === "sync" && (i.current === location.pathname ? a && a({
        ...R,
        prev: d.current,
        current: d.next,
        isPrev: (b) => I(b, d.current),
        isCurrent: (b) => I(b, d.next)
      }) : s && s(R));
    else if (d.phase === "enter") {
      if (y && y(R), m === "sync" && I([d.current], location.pathname) && l && l(R), i.current !== location.pathname && n)
        return;
      m === "wait" && a && a(R);
    }
  }, [d]);
};
export {
  Mr as MekuriContext,
  Nr as MekuriLayout,
  Ur as useMekuriAnimation,
  Or as useMekuriDuration
};
//# sourceMappingURL=mekuri.js.map
