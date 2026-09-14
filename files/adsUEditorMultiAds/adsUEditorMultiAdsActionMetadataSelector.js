__d(
  "adsUEditorMultiAdsActionMetadataSelector",
  [
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorContextualDiscoveryAdsEligibilitySelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(
        r("adsCreateSelector")(
          [r("adsUEditorContextualDiscoveryAdsEligibilitySelector")],
          function (t) {
            return t.mapValue(function (e) {
              return e.action_metadata_type;
            });
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
