__d(
  "A2UIAdAccountEditState",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "create_ad_account",
      u = "use_existing_ad_account",
      c = "Set up new ad account",
      d = "Use an existing ad account";
    function m(e, t, n) {
      var r = e[t];
      return typeof r == "string" && r !== "" ? r : n;
    }
    function p(e, t) {
      var n = e[t];
      return typeof n == "string" && n !== "" ? n : null;
    }
    function _(e) {
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e)
        if (!(typeof n != "object" || n == null)) {
          var r = n,
            o = r.label,
            a = r.value;
          typeof o != "string" ||
            o === "" ||
            typeof a != "string" ||
            a === "" ||
            t.push({ label: o, value: a });
        }
      return t;
    }
    function f(e) {
      return {
        currencyLabel: m(
          e,
          "currency_label",
          s._(/*BTDS*/ "Currency").toString(),
        ),
        currencyOptions: _(e.currency_options),
        currencyPlaceholder: m(
          e,
          "currency_placeholder",
          s._(/*BTDS*/ "Select currency").toString(),
        ),
        currencyValue: m(e, "currency_value", ""),
        description: p(e, "description"),
        error: p(e, "error"),
        helperText: m(
          e,
          "helper_text",
          s
            ._(
              /*BTDS*/ "Currency and time zone can't be changed once setup is complete.",
            )
            .toString(),
        ),
        nameLabel: m(
          e,
          "name_label",
          s._(/*BTDS*/ "Ad account name").toString(),
        ),
        namePlaceholder: m(
          e,
          "name_placeholder",
          s._(/*BTDS*/ "Enter a name").toString(),
        ),
        nameValue: m(e, "name_value", ""),
        secondaryDescription: p(e, "secondary_description"),
        secondaryLabel: m(
          e,
          "secondary_label",
          s._(/*BTDS*/ "Use an existing ad account").toString(),
        ),
        submitLabel: m(
          e,
          "submit_label",
          s._(/*BTDS*/ "Set up new ad account").toString(),
        ),
        timezoneLabel: m(
          e,
          "timezone_label",
          s._(/*BTDS*/ "Time zone").toString(),
        ),
        timezoneOptions: _(e.timezone_options),
        timezonePlaceholder: m(
          e,
          "timezone_placeholder",
          s._(/*BTDS*/ "Select time zone").toString(),
        ),
        timezoneValue: m(e, "timezone_value", ""),
        title: p(e, "title"),
        widgetID: p(e, "widget_id"),
      };
    }
    function g(e, t, n) {
      return e.trim() !== "" && t !== "" && n !== "";
    }
    function h(e, t) {
      return e + "\n\n```json\n" + JSON.stringify(t) + "\n```";
    }
    function y(t, n, r) {
      return h(c, {
        action: e,
        values: { currency: r, name: t.trim(), timezone: n },
      });
    }
    function C() {
      return h(d, { action: u });
    }
    function b(t) {
      if (t == null) return !1;
      var n = /```json\n([\s\S]*?)\n```/.exec(t);
      if (n == null) return !1;
      var r;
      try {
        r = JSON.parse(n[1]);
      } catch (e) {
        return !1;
      }
      if (typeof r != "object" || r == null) return !1;
      var o = r;
      return o.action === e;
    }
    ((l.CREATE_AD_ACCOUNT_ACTION = e),
      (l.USE_EXISTING_AD_ACCOUNT_ACTION = u),
      (l.parseOptions = _),
      (l.parseAdAccountEditData = f),
      (l.canSubmitAdAccount = g),
      (l.buildSubmitMessage = y),
      (l.buildUseExistingMessage = C),
      (l.isOwnSubmitMessage = b));
  },
  226,
);
