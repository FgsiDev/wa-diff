__d(
  "adsUEditorCampaignDCOToggleForDeprecationSelector",
  [
    "AdsCampaignDynamicCreativeToggleProvider",
    "CagLaunchStatusUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("AdsCampaignDynamicCreativeToggleProvider").toFluxSelector(),
          r("adsUEditorSelectedCampaignIDsSelector"),
        ],
        function (t, n, a) {
          return a == null || a.length === 0
            ? !1
            : o("CagLaunchStatusUtils").checkPassGKByAdAccount(t, !1) &&
                r("isTruthy")(n.CampaignIDDCOMap.get(a[0]));
        },
        { name: i.id + ".adsUEditorCampaignDCOToggleForDeprecationSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
