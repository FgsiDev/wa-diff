__d(
  "AdsUEditorAdgroupSetApplinkTreatmentReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetApplinkTreatmentDataActionFlux",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "ProductBrowsingAdsUtils",
    "Promise",
    "WebToXDefaultingUtils",
    "WebToXFeatureGating",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, a, l) {
            var s = l.parentData;
            return a.applinkTreatment == null
              ? o("AdsMutators").mutateEach(t, a.adgroupIDs, function (e) {
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.applink_treatment.delete(e);
                })
              : o("AdsMutators").mutateEach(t, a.adgroupIDs, function (t, l) {
                  var u,
                    c = r("nullthrows")(s.get(l)),
                    d = c.campaign,
                    m = c.campaignGroup,
                    p = o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.applink_treatment.set(a.applinkTreatment),
                      function (e) {
                        return a.applinkTreatment === "web_only"
                          ? r(
                              "AdsAdgroupRecordAccessors",
                            ).creative.template_url_spec.config.app_id.delete(e)
                          : e;
                      },
                    )(t);
                  if (
                    (a.applinkTreatment === "deeplink_with_appstore_fallback" &&
                      (p = o(
                        "AdsUEditorAdgroupTurnoffPromoAdMutator",
                      ).turnOffPromo(
                        p,
                        o("AdsUEditorAdgroupTurnoffPromoAdMutator")
                          .PromoAdDefaultOptOutCallsite
                          .SET_INCOMPATIBLE_APP_LINK_TREATMENT,
                      )),
                    o("WebToXFeatureGating").shouldShowWTXForL3CatalogAds(
                      m,
                      d,
                      t,
                      (u = d.promoted_object) == null ? void 0 : u.variation,
                    ))
                  ) {
                    var _,
                      f = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.page_id.get(t),
                      g = f
                        ? r("AdsPageStore").getLoadObject(f).getValue()
                        : null,
                      h = r("AdsAccountStore").getSelectedAccount(),
                      y = h.getValue(),
                      C = o(
                        "WebToXDefaultingUtils",
                      ).enableBrowserAddOnDefaultingType(
                        y,
                        [t.id],
                        m,
                        d,
                        t,
                        a.hostID,
                        g,
                        "app_link_treatment_switch_L1",
                        d == null ||
                          (_ = d.toJS()) == null ||
                          (_ = _.targeting) == null ||
                          (_ = _.geo_locations) == null
                          ? void 0
                          : _.countries,
                        d == null ? void 0 : d.optimization_goal,
                      ),
                      b = C.type;
                    if (b === "whatsapp" && a.applinkTreatment === "web_only")
                      ((p = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setWhatsAppWebsiteExtensionType(p)),
                        r("promiseDone")(
                          (e || (e = n("Promise"))).resolve({}),
                          function () {
                            r(
                              "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
                            ).dispatch(
                              { adgroupIDs: [t.id], hostID: a.hostID },
                              {
                                line: "131",
                                module:
                                  "AdsUEditorAdgroupSetApplinkTreatmentReducerPlugin.js",
                                moduleID: i.id,
                              },
                            );
                          },
                        ));
                    else if (
                      b === "messenger" &&
                      a.applinkTreatment === "web_only"
                    )
                      p = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setMessengerWebsiteExtensionType(p);
                    else if (
                      b === "messaging_apps" &&
                      a.applinkTreatment === "web_only"
                    ) {
                      var v;
                      p = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).setMessagingAppsWebsiteExtensionType(
                        p,
                        [].concat(
                          (v = C.multiDestinationType) != null ? v : [],
                        ),
                        void 0,
                        m.objective,
                      );
                    } else
                      p = o(
                        "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
                      ).cleanWebsiteExtensionFields(p);
                  }
                  return (
                    (p = o(
                      "ProductBrowsingAdsUtils",
                    ).maybeUpdateProductBrowsingSpec(
                      p,
                      !1,
                      null,
                      m,
                      d,
                      "applink_treatment_dropdown",
                      a.applinkTreatment === "web_only" ? "external" : "none",
                    )),
                    p
                  );
                });
          },
          o("AdsUEditorAdgroupSetApplinkTreatmentDataActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
