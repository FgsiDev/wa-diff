__d(
  "A2UIBusinessPortfolioEditState",
  ["fbt", "A2UIFormFieldChecks", "isEmail"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = /[!_~|^@*{}\[\]()<>]/,
      u = 50;
    function c() {
      return s._(/*BTDS*/ "The business portfolio name can't be empty.");
    }
    function d() {
      return s._(
        /*BTDS*/ "The business portfolio name can\u2019t have special characters.",
      );
    }
    function m() {
      return s._(/*BTDS*/ "The name can't be empty.");
    }
    function p() {
      return s._(/*BTDS*/ "The maximum number of characters is 50");
    }
    function _() {
      return s._(/*BTDS*/ "Please enter a valid email address.");
    }
    function f() {
      return s._(/*BTDS*/ "The email address can't be empty.");
    }
    function g(t) {
      return t.trim().length === 0 ? null : e.test(t) ? d() : null;
    }
    function h(e) {
      return e.trim().length > u ? p() : null;
    }
    function y(e) {
      return e === "" || r("isEmail")(e) ? null : _();
    }
    function C(e, t) {
      switch (e) {
        case "business_name":
          return g(t);
        case "person_name":
          return h(t);
        case "email":
          return y(t);
        default:
          return null;
      }
    }
    function b(e) {
      switch (e) {
        case "business_name":
          return c();
        case "person_name":
          return m();
        default:
          return f();
      }
    }
    function v(e, t) {
      var n = {};
      for (var r of e) {
        var a,
          i,
          l = (a = t[r.name]) != null ? a : "",
          s = r.validation,
          u = s != null ? C(s, l) : null;
        if (u != null) {
          n[r.name] = u;
          continue;
        }
        if (r.required === !0 && l.trim().length === 0) {
          var c = s != null ? b(s) : null;
          if (c != null) {
            n[r.name] = c;
            continue;
          }
        }
        var d = o("A2UIFormFieldChecks").runFieldChecks(
          (i = r.checks) != null ? i : [],
          l,
        );
        d != null && (n[r.name] = d);
      }
      return n;
    }
    var S = "business_portfolio_update",
      R = "business_portfolio_cancel",
      L = "Update business portfolio info",
      E = "Cancel";
    function k(e, t) {
      var n = I(t, "aria_label");
      n != null && (e.aria_label = n);
      var r = I(t, "helper_text");
      r != null && (e.helper_text = r);
      var o = I(t, "label");
      o != null && (e.label = o);
      var a = I(t, "placeholder");
      a != null && (e.placeholder = a);
      var i = I(t, "row");
      i != null && (e.row = i);
      var l = I(t, "tooltip");
      l != null && (e.tooltip = l);
      var s = I(t, "value");
      s != null && (e.value = s);
      var u = I(t, "validation");
      (u === "business_name" || u === "person_name" || u === "email") &&
        (e.validation = u);
    }
    function I(e, t) {
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function T(e) {
      if (typeof e != "object" || e == null) return null;
      var t = e,
        n = {},
        r = I(t, "rationale");
      r != null && (n.rationale = r);
      var o = I(t, "attribution_label");
      return (o != null && (n.attribution_label = o), n);
    }
    function D(e) {
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e)
        if (!(typeof n != "object" || n == null)) {
          var r = n,
            a = I(r, "name");
          if (!(a == null || a === "")) {
            var i = { name: a };
            (k(i, r), r.required === !0 && (i.required = !0));
            var l = T(r.ai_suggestion);
            (l != null && (i.ai_suggestion = l),
              Array.isArray(r.checks) &&
                (i.checks = o("A2UIFormFieldChecks").parseFieldChecks(
                  r.checks,
                )),
              t.push(i));
          }
        }
      return t;
    }
    function x(e) {
      var t = [];
      for (var n of e) {
        var r = t[t.length - 1],
          o = n.row;
        o != null && o !== "" && r != null && r.key === o
          ? (t[t.length - 1] = { fields: [].concat(r.fields, [n]), key: r.key })
          : t.push({ fields: [n], key: o != null ? o : n.name });
      }
      return t;
    }
    function $(e, t) {
      return e + "\n\n```json\n" + JSON.stringify(t) + "\n```";
    }
    function P(e) {
      return $(L, { action: S, values: e });
    }
    function N() {
      return $(E, { action: R });
    }
    function M(e) {
      if (e == null) return !1;
      var t = /```json\n([\s\S]*?)\n```/.exec(e);
      if (t == null) return !1;
      var n;
      try {
        n = JSON.parse(t[1]);
      } catch (e) {
        return !1;
      }
      if (typeof n != "object" || n == null) return !1;
      var r = n;
      return I(r, "action") === S;
    }
    ((l.validateFields = v),
      (l.UPDATE_ACTION = S),
      (l.CANCEL_ACTION = R),
      (l.parseFields = D),
      (l.groupIntoRows = x),
      (l.buildSubmitMessage = P),
      (l.buildCancelMessage = N),
      (l.isOwnSubmitMessage = M));
  },
  226,
);
