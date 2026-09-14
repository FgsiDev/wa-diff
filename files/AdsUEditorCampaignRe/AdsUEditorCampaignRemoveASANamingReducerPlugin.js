__d(
  "AdsUEditorCampaignRemoveASANamingReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPECrepePackages",
    "AdsUEditorCampaignGroupRemoveAdCreationPackageConfigActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCrepeNamingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = r("AdsCampaignRecordAccessors").name,
                a = n.get(e);
              return o("AdsUEditorCrepeNamingUtils").nameMatchesASCCrepeName(a)
                ? n.set("New Sales Ad Set", e)
                : t.packageID ===
                    o("AdsPECrepePackages")
                      .MESSAGE_ACQUISITION_POST_ODAX_PACKAGE_ID
                  ? n.set("New Engagement Ad Set", e)
                  : e;
            });
          },
          r("AdsUEditorCampaignGroupRemoveAdCreationPackageConfigActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
