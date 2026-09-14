__d(
  "AdsTrustTierAccountSelectors",
  ["AdsAccountUtils", "adsCreateSelector", "adsUEditorAccountSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAccountSelector")],
        function (t) {
          return r("AdsAccountUtils").hasCapability(t, "ADS_TRUST_TIER_0_FULL");
        },
        { name: i.id + ".isTrustTier0AccountSelector" },
      ),
      s = r("adsCreateSelector")(
        [r("adsUEditorAccountSelector")],
        function (t) {
          return r("AdsAccountUtils").hasCapability(t, "ADS_TRUST_TIER_1");
        },
        { name: i.id + ".isTrustTier1AccountSelector" },
      );
    ((l.isTrustTier0AccountSelector = e), (l.isTrustTier1AccountSelector = s));
  },
  98,
);
