__d(
  "adsUEditorIsPagelessAdvertiserSelector",
  [
    "AdsUEditorCampaignInstagramSelectors",
    "PagelessCTXAdsUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorDefaultPageValuesSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAccountSelector"),
        o("adsUEditorDefaultPageValuesSelector")
          .adsUEditorDefaultPageValuesSelector,
        o("AdsUEditorCampaignInstagramSelectors")
          .businessInstagramAccountsWithIABP,
      ],
      function (t, n, r) {
        return s(t, n, r);
      },
      { name: i.id + ".adsUEditorIsPagelessAdvertiserSelector" },
    );
    function s(e, t, n) {
      var r, a;
      if (e == null) return !1;
      var i = (r = e.business) == null ? void 0 : r.id;
      return i == null || t != null
        ? !1
        : !!(
            n &&
            n.hasValue() &&
            o("PagelessCTXAdsUtils").getInstagramAccountBackedPageID(
              (a = n.getValueEnforcing()) == null ? void 0 : a.data,
            ) != null
          );
    }
    ((l.adsUEditorIsPagelessAdvertiserSelector = e),
      (l.adsUEditorIsPagelessAdvertiser = s));
  },
  98,
);
