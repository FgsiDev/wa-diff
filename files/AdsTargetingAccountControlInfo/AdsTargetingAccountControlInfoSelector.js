__d(
  "AdsTargetingAccountControlInfoSelector",
  [
    "AdsAccountStore",
    "AdsTargetingAccountControlInfoGAPISelector",
    "AdsTargetingAccountControlInfoUtils",
    "VultureJSDeadSelector",
    "adsChooseSelector",
    "cr:8494",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("VultureJSDeadSelector")(i.id, "noopSelector"),
      u = (e = n("cr:8494")) != null ? e : s;
    function c() {
      var e = r("AdsAccountStore").getSelectedAccount().getValue();
      return o(
        "AdsTargetingAccountControlInfoUtils",
      ).isBusinessConstraintsIntergrationEnabled(e);
    }
    var d = r("adsChooseSelector")(
      c,
      u,
      r("AdsTargetingAccountControlInfoGAPISelector"),
      !0,
      i.id,
    );
    l.default = d;
  },
  98,
);
