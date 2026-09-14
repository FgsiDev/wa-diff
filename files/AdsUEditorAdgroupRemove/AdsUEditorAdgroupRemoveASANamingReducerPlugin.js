__d(
  "AdsUEditorAdgroupRemoveASANamingReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPECrepePackages",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignGroupRemoveAdCreationPackageConfigActionFlux",
    "AdsUEditorCrepeNamingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("AdsAdgroupRecordAccessors").name,
                a = n.get(e);
              return o("AdsUEditorCrepeNamingUtils").nameMatchesASCCrepeName(a)
                ? n.set("New Sales Ad", e)
                : t.packageID ===
                      o("AdsPECrepePackages")
                        .MESSAGE_ACQUISITION_POST_ODAX_PACKAGE_ID ||
                    t.packageID ===
                      o("AdsPECrepePackages").MESSAGE_ACQUISITION_PGD_PACKAGE_ID
                  ? n.set("New Engagement Ad", e)
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
