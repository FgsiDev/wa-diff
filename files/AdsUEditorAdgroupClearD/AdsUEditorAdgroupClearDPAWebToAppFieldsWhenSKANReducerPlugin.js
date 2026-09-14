__d(
  "AdsUEditorAdgroupClearDPAWebToAppFieldsWhenSKANReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignAttributionTypeActionFlux",
    "AdsUEditorWebToAppMutators",
    "adsUEditorAdgroupWebToAppSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            webToAppData: o("adsUEditorAdgroupWebToAppSelector")
              .adsUEditorAdgroupWebToAppSelector,
          },
          function (e, t, n) {
            var a = n.webToAppData;
            return t.selectedCampaignAttributionType !== "SKADNETWORK" ||
              a.isAdWebToAppEligible
              ? e
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  return o("AdsMutators").chain(
                    function (e) {
                      return r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.applink_treatment.delete(e);
                    },
                    function (e) {
                      return r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.template_url_spec.web.delete(e);
                    },
                    function (e) {
                      return r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.template_data.caption.delete(
                        e,
                      );
                    },
                    function (e) {
                      return o(
                        "AdsUEditorWebToAppMutators",
                      ).clearWebToAppFields(e);
                    },
                  )(e);
                });
          },
          o("AdsUEditorCampaignAttributionTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
