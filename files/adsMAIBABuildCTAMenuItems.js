__d(
  "adsMAIBABuildCTAMenuItems",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsCallToActionTypes",
    "AdsCallToActionTypesUtils",
    "ClickToMessageDestinationTypes",
    "adsCallToActionGetCTALabelUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "NO_BUTTON";
    function u(e) {
      if (e == null || e === "") return null;
      try {
        var t = o(
          "adsCallToActionGetCTALabelUtils",
        ).adsCallToActionGetCTALabelFromCTAType(e);
        return t != null ? String(t) : e;
      } catch (t) {
        return e;
      }
    }
    function c() {
      var e,
        t =
          (e = r("AdsCallToActionTypes").TYPES.NO_BUTTON) == null
            ? void 0
            : e.text;
      return t != null ? String(t) : null;
    }
    var d = new Map([
        ["MESSENGER", "MESSAGE_PAGE"],
        ["WHATSAPP", "WHATSAPP_MESSAGE"],
        ["INSTAGRAM_DIRECT", "INSTAGRAM_MESSAGE"],
      ]),
      m = new Set(d.values());
    function p(e) {
      var t = new Set();
      for (var n of d) {
        var r = n[0],
          o = n[1];
        (e.includes(r) ||
          (r === "INSTAGRAM_DIRECT" && e.includes("IG_DIRECT"))) &&
          t.add(o);
      }
      return t;
    }
    function _(e, t) {
      var n = new Set(
        f(
          e.map(function (e) {
            return e.name;
          }),
          t,
        ),
      );
      return e.filter(function (e) {
        return n.has(e.name);
      });
    }
    function f(e, t) {
      if (t == null || t === "") return e;
      if (
        o("ClickToMessageDestinationTypes").MESSAGING_APP_DESTINATION_TYPES.has(
          t,
        )
      ) {
        var n = p(t);
        return e.filter(function (e) {
          return e === "CALL_NOW" ? !1 : m.has(e) ? n.has(e) : !0;
        });
      }
      switch (t) {
        case "PHONE_CALL":
          return e.filter(function (e) {
            return e === "CALL_NOW";
          });
        case "WEBSITE":
        case "WEBSITE_AND_LEAD_FORM":
          return e.filter(function (e) {
            return (
              e !== "MESSAGE_PAGE" &&
              e !== "WHATSAPP_MESSAGE" &&
              e !== "INSTAGRAM_MESSAGE"
            );
          });
        default:
          return e;
      }
    }
    function g(e, t) {
      if (
        !(
          t == null ||
          t === "" ||
          !o(
            "ClickToMessageDestinationTypes",
          ).MESSAGING_APP_DESTINATION_TYPES.has(t)
        )
      ) {
        var n = new Set(
          e.map(function (e) {
            return e.value;
          }),
        );
        for (var r of p(t))
          if (!n.has(r)) {
            var a;
            e.push({ label: (a = u(r)) != null ? a : r, value: r });
          }
      }
    }
    var h = new Map([
      [
        r("AdsAPIObjectives").OUTCOME_TRAFFIC,
        r("AdsAPIObjectives").LINK_CLICKS,
      ],
    ]);
    function y(e) {
      var t;
      return e == null || e === "" ? e : (t = h.get(e)) != null ? t : e;
    }
    function C(t, n) {
      var r,
        a = _(o("AdsCallToActionTypesUtils").typesForObjective(y(t), null), n),
        i = (r = c()) != null ? r : s._(/*BTDS*/ "No button").toString(),
        l = [{ label: i, value: e }];
      for (var d of a) {
        var m,
          p,
          f =
            (m =
              (p = d.text != null && d.text !== "" ? String(d.text) : null) !=
              null
                ? p
                : u(d.name)) != null
              ? m
              : d.name;
        l.push({ label: f, value: d.name });
      }
      return (g(l, n), l);
    }
    function b(t, n) {
      var r,
        o = f(t, n),
        a = (r = c()) != null ? r : s._(/*BTDS*/ "No button").toString(),
        i = [{ label: a, value: e }];
      for (var l of o) {
        var d,
          m = (d = u(l)) != null ? d : l;
        i.push({ label: m, value: l });
      }
      return i;
    }
    ((l.NO_BUTTON = e),
      (l.adsMAIBAFormatCTALabel = u),
      (l.adsMAIBABuildCTAMenuItems = C),
      (l.adsMAIBABuildCTAMenuItemsFromNames = b));
  },
  226,
);
