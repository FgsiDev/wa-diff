__d(
  "AdsCampaignGroupCreation",
  [
    "invariant",
    "AdsLoadStateUtils_LEGACY",
    "AdsRegulatedCategory",
    "ImmutableObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = new (r("ImmutableObject"))(
        ((e = {}),
        (e.status = "ACTIVE"),
        (e.special_ad_categories = [r("AdsRegulatedCategory").NONE]),
        (e.special_ad_category = r("AdsRegulatedCategory").NONE),
        e),
      );
    function c(e) {
      return babelHelpers.extends({}, u, { account_id: e.account_id });
    }
    function d(e, t) {
      return (
        e || s(0, 20425),
        t && o("AdsLoadStateUtils_LEGACY").enforceLoaded(t),
        babelHelpers.extends({}, u, {
          account_id: e.account_id,
          topline_id: t ? t.id : null,
        })
      );
    }
    ((l.getDefaultsForCreateFlow = c), (l.getDefaults = d));
  },
  98,
);
