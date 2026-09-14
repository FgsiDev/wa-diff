__d(
  "AdsUEditorAdgroupWebsiteAppAndInStoreReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignSelectWebsiteAppAndInStorePromotedObjectTypeDataActionFlux",
    "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
    "AdsUEditorPromotedObjectSetWebsiteAppAndInStoreOptimizationFieldsDataActionFlux",
    "AdsUEditorSetAppDatasetFieldsDataActionFlux",
    "adsUEditorAdgroupBizAISectionSelector",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a,
              i,
              l,
              s = n.bizAIEligibility,
              u = n.parentData,
              c =
                (a = (i = t.appData) == null ? void 0 : i.applicationID) != null
                  ? a
                  : t.appID,
              d = (l = t.pixelData) == null ? void 0 : l.pixelID,
              m,
              p;
            if (c != null) {
              var _, f, g;
              m = {
                application_id: c,
                object_store_urls: [].concat(
                  (_ =
                    (f =
                      (g = t.appData) == null ? void 0 : g.objectStoreUrls) !=
                    null
                      ? f
                      : t.objectStoreURLs) != null
                    ? _
                    : [],
                ),
              };
            }
            return (
              d != null && (p = { pixel_id: d }),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e, t) {
                var n = r("nullthrows")(u.get(t)),
                  a = n.campaign,
                  i = n.specPlugin,
                  l = e;
                if (m != null) {
                  var c;
                  ((l = o(
                    "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
                  ).applyOmnichannelAppData(l, a, i, m)),
                    ((c = l.creative) == null || (c = c.call_to_action) == null
                      ? void 0
                      : c.value) != null &&
                      ((l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.application.set(
                        m.application_id,
                        l,
                      )),
                      (l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.object_store_urls.set(
                        r("immutable").List(m.object_store_urls),
                        l,
                      ))));
                }
                return (
                  p != null &&
                    (l = o(
                      "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
                    ).applyOmnichannelPixelData(l, p)),
                  s != null &&
                    (l = o(
                      "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                    ).updateBizAIDefaultOptIn(
                      l,
                      s,
                      o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                        .BizAIDefaultOptInCallSite.SET_WEBSITE_APP_AND_IN_STORE,
                    )),
                  l
                );
              })
            );
          },
          [
            o(
              "AdsUEditorCampaignSelectWebsiteAppAndInStorePromotedObjectTypeDataActionFlux",
            ).actionType,
            o(
              "AdsUEditorPromotedObjectSetWebsiteAppAndInStoreOptimizationFieldsDataActionFlux",
            ).actionType,
            o("AdsUEditorSetAppDatasetFieldsDataActionFlux").actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
