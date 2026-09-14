__d(
  "AdsUEditorAdgroupSetWebsiteExtensionTypeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPageUtils",
    "AdsUEditorAdgroupCallAddOnDefaultingMutator",
    "AdsUEditorAdgroupPageSelectors",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetWebsiteExtensionTypeDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "adsUEditorCampaignGroupObjectiveSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            adgroupIDsToPages: o("AdsUEditorAdgroupPageSelectors")
              .adgroupIDsToPages,
            objective: r("adsUEditorCampaignGroupObjectiveSelector"),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.adgroupIDsToPages,
              i = n.objective,
              l = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(l.get(e.id)),
                s = e;
              (t.websiteExtensionType !== "none" &&
                (s = o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
                  s,
                  o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                    .PromoAdDefaultOptOutCallsite.SET_IAB_EXTENSION,
                )),
                t.websiteExtensionType !== "instant_book" &&
                  (s = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.instant_book_configuration.delete(
                    s,
                  )));
              var u = o("AdsPageUtils").getPageID(s);
              switch (t.websiteExtensionType) {
                case "messaging_apps":
                  return o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).setMessagingAppsWebsiteExtensionType(
                    s,
                    t.multiDestinationType,
                    n,
                    i,
                  );
                case "whatsapp":
                  s = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).setWhatsAppWebsiteExtensionType(s, n);
                  break;
                case "phone_call": {
                  var c = a.get(e.id);
                  s = o(
                    "AdsUEditorAdgroupCallAddOnDefaultingMutator",
                  ).applyCallAddOnDefaultBrowserAddOn(
                    s,
                    c == null ? void 0 : c.phone_number_prefill,
                    u,
                    n,
                  );
                  break;
                }
                case "none":
                  s = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).cleanWebsiteExtensionFields(s, n);
                  break;
                case "instant_form":
                  s = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).cleanWebsiteExtensionFields(s, n);
                  break;
                case "instant_book":
                  s = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).setInstantBookWebsiteExtensionType(s, n);
                  break;
                case "messenger":
                  s = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).setMessengerWebsiteExtensionType(s, n);
                  break;
                case "instagram_direct":
                  s = o(
                    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                  ).setInstagramDirectWebsiteExtensionType(s, n);
                  break;
                default:
                  break;
              }
              return o(
                "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
              ).setPageWelcomeMessageOnWebsiteExtensionTypeSelection(
                s,
                u,
                t.websiteExtensionType,
                i,
              );
            });
          },
          r("AdsUEditorAdgroupSetWebsiteExtensionTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
