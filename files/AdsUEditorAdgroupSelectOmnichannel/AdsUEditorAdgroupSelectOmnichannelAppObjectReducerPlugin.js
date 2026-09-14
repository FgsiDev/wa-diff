__d(
  "AdsUEditorAdgroupSelectOmnichannelAppObjectReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAppUrlUtils",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignDeliveryChangeOmnichannelAppObjectActionFlux",
    "AdsUEditorWebsiteAndAppMutators",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l = e,
                  s = t.appData,
                  u = (i = t.appData) == null ? void 0 : i.application_id;
                if (o("AdsDynamicAdsUtils").isDynamicAd(l) && u != null)
                  return (
                    (l = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.template_url_spec.config.app_id.set(u, l)),
                    t.isCollabAdsASC !== !0 &&
                      (l = o(
                        "AdsUEditorWebsiteAndAppMutators",
                      ).setTrackingSpecs(l, u)),
                    l
                  );
                var c = r("nullthrows")(
                    a.get(n),
                    "AdsUEditorAdgroupSelectOmnichannelAppObjectReducerPlugin: Parent data must exist for adgroup ID.",
                  ),
                  d = c.specPlugin;
                if (t.clear === !0)
                  return o(
                    "AdsUEditorWebsiteAndAppMutators",
                  ).deleteAdgroupFields(l, d);
                var m = s == null ? void 0 : s.object_store_urls;
                return (
                  m != null &&
                    ((l = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueObjectStoreURLs(l, d, m)),
                    (l = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.omnichannel_link_spec.app.platform_specs.delete(
                      l,
                    )),
                    m.some(r("AdsAppUrlUtils").isItunesURL) &&
                      (l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.omnichannel_link_spec.app.platform_specs.ios.url.set(
                        null,
                        l,
                      )),
                    m.some(r("AdsAppUrlUtils").isGooglePlayURL) &&
                      (l = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.omnichannel_link_spec.app.platform_specs.android.url.set(
                        null,
                        l,
                      ))),
                  u != null &&
                    (t.isCollabAdsASC !== !0 &&
                      (l = o(
                        "AdsUEditorWebsiteAndAppMutators",
                      ).setTrackingSpecs(l, u)),
                    (l = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueApplication(l, d, u)),
                    (l = o(
                      "AdsUEditorWebsiteAndAppMutators",
                    ).setOmnichannelLinkSpecApplicationID(l, u)),
                    (l = o(
                      "AdsUEditorWebsiteAndAppMutators",
                    ).setOmnichannelLinkSpecWebsiteURLFromCreative(l))),
                  l
                );
              },
            );
          },
          o("AdsUEditorCampaignDeliveryChangeOmnichannelAppObjectActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
