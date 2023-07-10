import Ae, { useRef as w, useMemo as Pr, useEffect as O, createContext as te, useState as Oe, useReducer as De, useContext as ne } from "react";
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
var ke;
function xr() {
  if (ke)
    return W;
  ke = 1;
  var n = Ae, o = Symbol.for("react.element"), u = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(p, l, v) {
    var g, y = {}, b = null, Y = null;
    v !== void 0 && (b = "" + v), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (Y = l.ref);
    for (g in l)
      a.call(l, g) && !m.hasOwnProperty(g) && (y[g] = l[g]);
    if (p && p.defaultProps)
      for (g in l = p.defaultProps, l)
        y[g] === void 0 && (y[g] = l[g]);
    return { $$typeof: o, type: p, key: b, ref: Y, props: y, _owner: f.current };
  }
  return W.Fragment = u, W.jsx = R, W.jsxs = R, W;
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
function wr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ae, o = Symbol.for("react.element"), u = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), p = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), oe = Symbol.iterator, Ue = "@@iterator";
    function Ve(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = oe && e[oe] || e[Ue];
      return typeof r == "function" ? r : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          t[s - 1] = arguments[s];
        Be("error", e, t);
      }
    }
    function Be(e, r, t) {
      {
        var s = A.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var h = t.map(function(c) {
          return String(c);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var qe = !1, Je = !1, Ge = !1, ze = !1, He = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === m || He || e === f || e === v || e === g || ze || e === Y || qe || Je || Ge || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === R || e.$$typeof === p || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var s = e.displayName;
      if (s)
        return s;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
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
        case u:
          return "Portal";
        case m:
          return "Profiler";
        case f:
          return "StrictMode";
        case v:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return se(r) + ".Consumer";
          case R:
            var t = e;
            return se(t._context) + ".Provider";
          case l:
            return Xe(e, e.render, "ForwardRef");
          case y:
            var s = e.displayName || null;
            return s !== null ? s : C(e.type) || "Memo";
          case b: {
            var d = e, h = d._payload, c = d._init;
            try {
              return C(c(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, $ = 0, ue, ie, ce, le, fe, de, pe;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ze() {
      {
        if ($ === 0) {
          ue = console.log, ie = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, pe = console.groupEnd;
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
            log: k({}, e, {
              value: ue
            }),
            info: k({}, e, {
              value: ie
            }),
            warn: k({}, e, {
              value: ce
            }),
            error: k({}, e, {
              value: le
            }),
            group: k({}, e, {
              value: fe
            }),
            groupCollapsed: k({}, e, {
              value: de
            }),
            groupEnd: k({}, e, {
              value: pe
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
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            z = s && s[1] || "";
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
    function he(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var s;
      H = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = G.current, G.current = null, Ze();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (S) {
              s = S;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (S) {
              s = S;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            s = S;
          }
          e();
        }
      } catch (S) {
        if (S && s && typeof S.stack == "string") {
          for (var i = S.stack.split(`
`), x = s.stack.split(`
`), E = i.length - 1, _ = x.length - 1; E >= 1 && _ >= 0 && i[E] !== x[_]; )
            _--;
          for (; E >= 1 && _ >= 0; E--, _--)
            if (i[E] !== x[_]) {
              if (E !== 1 || _ !== 1)
                do
                  if (E--, _--, _ < 0 || i[E] !== x[_]) {
                    var T = `
` + i[E].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, T), T;
                  }
                while (E >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = h, Qe(), Error.prepareStackTrace = d;
      }
      var F = e ? e.displayName || e.name : "", Se = F ? N(F) : "";
      return typeof e == "function" && U.set(e, Se), Se;
    }
    function rr(e, r, t) {
      return he(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, tr(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case v:
          return N("Suspense");
        case g:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return rr(e.render);
          case y:
            return V(e.type, r, t);
          case b: {
            var s = e, d = s._payload, h = s._init;
            try {
              return V(h(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, me = {}, ge = A.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function nr(e, r, t, s, d) {
      {
        var h = Function.call.bind(B);
        for (var c in e)
          if (h(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var x = Error((s || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              i = e[c](r, c, s, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              i = E;
            }
            i && !(i instanceof Error) && (q(d), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", t, c, typeof i), q(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, q(d), P("Failed %s type: %s", t, i.message), q(null));
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
    function sr(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function ye(e) {
      if (sr(e))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Re(e);
    }
    var M = A.ReactCurrentOwner, ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, be, X;
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
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = C(M.current.type);
        X[t] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(M.current.type), e.ref), X[t] = !0);
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          be || (be = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, s, d, h, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: h
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
        value: s
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function vr(e, r, t, s, d) {
      {
        var h, c = {}, i = null, x = null;
        t !== void 0 && (ye(t), i = "" + t), cr(r) && (ye(r.key), i = "" + r.key), ir(r) && (x = r.ref, lr(r, d));
        for (h in r)
          B.call(r, h) && !ur.hasOwnProperty(h) && (c[h] = r[h]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (h in E)
            c[h] === void 0 && (c[h] = E[h]);
        }
        if (i || x) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && fr(c, _), x && dr(c, _);
        }
        return pr(e, i, x, d, s, M.current, c);
      }
    }
    var Z = A.ReactCurrentOwner, _e = A.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Pe() {
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
    var xe = {};
    function mr(e) {
      {
        var r = Pe();
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
        var t = mr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var s = "";
        e && e._owner && e._owner !== Z.current && (s = " It was passed a child from " + C(e._owner.type) + "."), D(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, s), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var s = e[t];
            ee(s) && we(s, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = Ve(e);
          if (typeof d == "function" && d !== e.entries)
            for (var h = d.call(e), c; !(c = h.next()).done; )
              ee(c.value) && we(c.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var s = C(r);
          nr(t, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var d = C(r);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var s = r[t];
          if (s !== "children" && s !== "key") {
            D(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Ce(e, r, t, s, d, h) {
      {
        var c = Ke(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = hr(d);
          x ? i += x : i += Pe();
          var E;
          e === null ? E = "null" : K(e) ? E = "array" : e !== void 0 && e.$$typeof === o ? (E = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, i);
        }
        var _ = vr(e, r, t, d, h);
        if (_ == null)
          return _;
        if (c) {
          var T = r.children;
          if (T !== void 0)
            if (s)
              if (K(T)) {
                for (var F = 0; F < T.length; F++)
                  Te(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(T, e);
        }
        return e === a ? Rr(_) : gr(_), _;
      }
    }
    function yr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function Er(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var br = Er, _r = yr;
    L.Fragment = a, L.jsx = br, L.jsxs = _r;
  }()), L;
}
process.env.NODE_ENV === "production" ? re.exports = xr() : re.exports = wr();
var j = re.exports;
const Fe = (n, o = !1) => {
  const u = o ? "^" : "", a = o ? "(?:[\\/#\\?]|$)$" : "(?:[\\/#\\?]|$)", f = u + n.replace(/\//g, "\\/").replace(/\?/g, "\\?").replace(/\#/g, "\\#").replace(/★/g, ".*") + a;
  return new RegExp(f);
}, J = (n, o) => n.slice().sort((u, a) => a.path.length - u.path.length).find((u) => Fe(u.path, !1).test(o)), Ie = ({
  router: n,
  routing: o
}) => {
  const u = w(n), a = Pr(() => {
    const f = !!J(o, n), m = !!J(o, u.current);
    return f && m;
  }, [o, n]);
  return O(() => {
    u.current = n;
  }, [n]), a;
}, Tr = ({
  state: n,
  dispatch: o,
  millisecond: u,
  routing: a,
  router: f
}) => {
  const m = w(!0), R = w(0), p = Ie({ router: f, routing: a });
  O(() => {
    if (m.current || !p) {
      m.current = !1, o({
        firstAccess: !1,
        prev: null,
        current: f,
        phase: null,
        next: null
      });
      return;
    }
    const l = document.documentElement.scrollTop;
    return o({
      next: f,
      phase: "leave",
      yPosBeforeLeave: l
    }), R.current = setTimeout(() => {
      o({
        prev: n.current,
        current: f,
        next: f,
        phase: "enter"
      });
    }, u), () => {
      clearTimeout(R.current);
    };
  }, [f]);
}, Ye = {
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
}, $e = te(Cr), Me = te(Ye), We = te(Sr), Wr = ({
  millisecond: n,
  routing: o,
  scrollRestoration: u,
  mode: a,
  router: f,
  children: m
}) => {
  if (o.length === 0)
    throw new Error("routing length is empty");
  const [R] = Oe({
    millisecond: n,
    second: n / 1e3
  }), [p] = Oe({
    routing: o,
    scrollRestoration: u,
    mode: a
  }), [l, v] = De(
    (g, y) => ({
      ...g,
      ...y
    }),
    Ye
  );
  return Tr({
    state: l,
    dispatch: v,
    router: f,
    millisecond: n,
    routing: o
  }), /* @__PURE__ */ j.jsx($e.Provider, { value: R, children: /* @__PURE__ */ j.jsx(We.Provider, { value: p, children: /* @__PURE__ */ j.jsx(Me.Provider, { value: l, children: m }) }) });
}, Or = () => ne($e), Le = () => ne(We), kr = () => ne(Me), Ne = ({
  routing: n,
  router: o,
  children: u
}) => {
  const a = J(n, o);
  return a ? a.children : u;
}, jr = ({
  routing: n,
  router: o,
  state: u
}) => {
  const a = J(n, o);
  return (a == null ? void 0 : a.children) === u.current;
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
  millisecond: u,
  state: a,
  routing: f,
  children: m,
  dispatch: R,
  isMatchRouting: p
}) => {
  const l = w(!0), v = w(0), g = (y = !1) => {
    const b = Ne({
      routing: f,
      router: n,
      children: m
    });
    if (!b || jr({ routing: f, router: n, state: a }))
      return;
    R({
      type: (() => y === "reset" || o === "wait" ? "update-unmount" : "update")(),
      component: b,
      restorePos: {
        key: n,
        pos: window.scrollY || document.documentElement.scrollTop || 0
      }
    });
  };
  O(() => {
    if (l.current) {
      l.current = !1;
      return;
    }
    if (!p) {
      g("reset");
      return;
    }
    return o === "wait" ? v.current = setTimeout(g, u) : g(), () => {
      clearTimeout(v.current);
    };
  }, [n]);
}, Fr = ({
  state: n,
  mode: o,
  millisecond: u,
  dispatch: a,
  isMatchRouting: f
}) => {
  const m = w(!0), R = w(0), p = w("");
  O(() => {
    p.current = location.pathname;
  }, []);
  const l = () => {
    p.current !== location.pathname ? a({
      type: "unmount-prev"
    }) : a({
      type: "rapid-fire"
    }), p.current = location.pathname;
  };
  O(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    if (!(!n.next && o === "sync") && f)
      return o === "sync" && (R.current = setTimeout(l, u)), () => {
        clearTimeout(R.current);
      };
  }, [n.current, n.next]);
}, Ir = ({
  cache: n,
  key: o,
  isPopstate: u,
  pos: a
}) => u === !1 ? (n.backPosY = a, n.keysArr.push(o), 0) : o === n.keysArr[n.keysArr.length - 2] ? (n.keysArr = [o], n.backPosY || 0) : (n.keysArr = [o], 0), Yr = ({
  scrollRestoration: n,
  state: o
}) => {
  const u = w(!0), a = w(!1), f = w({
    backPosY: 0,
    keysArr: []
  });
  O(() => {
    if (u.current) {
      window.history.scrollRestoration === "auto" && (window.history.scrollRestoration = "manual"), window.addEventListener("popstate", () => {
        a.current = !0;
      }), f.current.keysArr.push(o.restorePos.key), u.current = !1;
      return;
    }
    if (n === "top")
      window.scrollTo({ top: 0 });
    else if (n === "restore") {
      const m = Ir({
        cache: f.current,
        key: o.restorePos.key,
        isPopstate: a.current,
        pos: o.restorePos.pos
      });
      window.scrollTo({ top: m }), a.current = !1;
    }
  }, [o.restorePos]);
}, Lr = ({ router: n, children: o }) => {
  const { millisecond: u } = Or(), { routing: a, scrollRestoration: f, mode: m } = Le();
  if (!a || !m || !f)
    throw new Error("routing is null");
  const R = Ie({ router: n, routing: a }), [p, l] = De(Ar, {
    current: Ne({ routing: a, router: n, children: o }),
    next: null,
    restorePos: {
      key: n,
      pos: 0
    }
  });
  return Dr({
    router: n,
    mode: m,
    millisecond: u,
    state: p,
    routing: a,
    children: o,
    dispatch: l,
    isMatchRouting: R
  }), Fr({
    state: p,
    mode: m,
    millisecond: u,
    dispatch: l,
    isMatchRouting: R
  }), Yr({ scrollRestoration: f, state: p }), /* @__PURE__ */ j.jsx(j.Fragment, { children: R ? /* @__PURE__ */ j.jsxs("div", { children: [
    p.current && p.current,
    p.next && p.next
  ] }) : /* @__PURE__ */ j.jsx("div", { children: o }) });
}, I = (n, o) => o ? n.slice().find((a) => Fe(a, !0).test(o)) ?? !1 : !1, $r = () => {
  const n = window.location.hash.substring(1);
  if (!n)
    return !1;
  const o = document.getElementById(n);
  if (!o)
    return !1;
  const u = window.scrollY || document.documentElement.scrollTop;
  return o.getBoundingClientRect().top + u;
}, Nr = ({
  isReRender: n = !0,
  once: o,
  leave: u,
  enter: a,
  afterEnter: f,
  everyLeave: m,
  everyEnter: R
}) => {
  const p = w(!0), l = w(null), v = kr(), { mode: g } = Le();
  O(() => {
    l.current = location.pathname;
  }, []), O(() => {
    if (v.firstAccess) {
      p.current && (o && o(), p.current = !1);
      return;
    }
    const y = {
      prev: v.prev,
      current: v.current,
      next: v.next,
      yPosBeforeLeave: v.yPosBeforeLeave,
      isPrev: (b) => I(b, v.prev),
      isCurrent: (b) => I(b, v.current),
      isNext: (b) => I(b, v.next),
      getHashPos: () => $r()
    };
    if (v.phase === "leave")
      m && m(y), g === "wait" && u && u(y), g === "sync" && (l.current === location.pathname ? a && a({
        ...y,
        prev: v.current,
        current: v.next,
        isPrev: (b) => I(b, v.current),
        isCurrent: (b) => I(b, v.next)
      }) : u && u(y));
    else if (v.phase === "enter") {
      if (R && R(y), g === "sync" && I([v.current], location.pathname) && f && f(y), l.current !== location.pathname && n)
        return;
      g === "wait" && a && a(y);
    }
  }, [v]);
};
export {
  Wr as MekuriContext,
  Lr as MekuriLayout,
  Nr as useMekuriAnimation,
  Or as useMekuriDuration
};
//# sourceMappingURL=main.js.map
