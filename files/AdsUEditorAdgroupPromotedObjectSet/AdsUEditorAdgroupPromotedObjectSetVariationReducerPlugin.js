__d(
  "AdsUEditorAdgroupPromotedObjectSetVariationReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsBwIUtils",
    "AdsMutators",
    "AdsPCAConsolidationUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignPromotedObjectSetVariationDataActionFlux",
    "AdsUEditorHostIDs",
    "ProductBrowsingAdsUtils",
    "Promise",
    "URI",
    "WebToXDefaultingUtils",
    "WebToXFeatureGating",
    "XVanityURLControllerRouteBuilder",
    "adsUEditorAdgroupBizAISectionSelector",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
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
            var a = n.bizAIEligibility,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n)),
                  s = l.campaign,
                  u = l.campaignGroup,
                  _ = l.specPlugin,
                  f = o("AdsMutators").chain(
                    function (e) {
                      return o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionType(
                        e,
                        o(
                          "AdsPCAConsolidationUtils",
                        ).getCallToActionTypeForPromotedObjectTypeVariation(
                          t.variation,
                        ),
                        _,
                      );
                    },
                    function (e) {
                      return d(e, _, t.variation);
                    },
                    function (e) {
                      return m(e, t.variation, u);
                    },
                    function (e) {
                      return c(e, s, u, t.variation);
                    },
                    function (e) {
                      return p(e, t.appID, t.isCollaborativeAdsCatalogSegment);
                    },
                    function (e) {
                      return o(
                        "ProductBrowsingAdsUtils",
                      ).maybeUpdateProductBrowsingSpec(
                        e,
                        !1,
                        null,
                        u,
                        s,
                        "pca_variation_change",
                      );
                    },
                  )(e);
                return (
                  a != null &&
                    (f = o(
                      "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                    ).updateBizAIDefaultOptIn(
                      f,
                      a,
                      o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                        .BizAIDefaultOptInCallSite
                        .SET_PROMOTED_OBJECT_VARIATION,
                    )),
                  f
                );
              },
            );
          },
          o("AdsUEditorCampaignPromotedObjectSetVariationDataActionFlux")
            .actionType,
        ),
      };
    function c(e, t, a, l) {
      if (l == null) return e;
      if (o("WebToXFeatureGating").shouldShowWTXForL3CatalogAds(a, t, e, l)) {
        var u,
          c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.page_id.get(e),
          d = c ? r("AdsPageStore").getLoadObject(c).getValue() : null,
          m = r("AdsAccountStore").getSelectedAccount(),
          p = m.getValue(),
          _ = o("WebToXDefaultingUtils").enableBrowserAddOnDefaultingType(
            p,
            [e.id],
            a,
            t,
            e,
            r("AdsUEditorHostIDs").EDITING,
            d,
            "conversion_variation_switch_L2",
            t == null ||
              (u = t.toJS()) == null ||
              (u = u.targeting) == null ||
              (u = u.geo_locations) == null
              ? void 0
              : u.countries,
            t == null ? void 0 : t.optimization_goal,
          ),
          f = _.type,
          g = e;
        if (f === "whatsapp")
          ((g = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setWhatsAppWebsiteExtensionType(e)),
            r("promiseDone")(
              (s || (s = n("Promise"))).resolve({}),
              function () {
                r("AdsUEditorAdgroupWebToWhatsappDefaultedAction").dispatch(
                  {
                    adgroupIDs: [e.id],
                    hostID: r("AdsUEditorHostIDs").EDITING,
                  },
                  {
                    line: "177",
                    module:
                      "AdsUEditorAdgroupPromotedObjectSetVariationReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              },
            ));
        else if (f === "messenger")
          g = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setMessengerWebsiteExtensionType(e);
        else if (f === "messaging_apps") {
          var h;
          g = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setMessagingAppsWebsiteExtensionType(
            e,
            [].concat((h = _.multiDestinationType) != null ? h : []),
            void 0,
            a.objective,
          );
        } else
          g = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).cleanWebsiteExtensionFields(e);
        return g;
      } else {
        var y = e;
        return (
          (y = o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).cleanWebsiteExtensionFields(e)),
          y
        );
      }
    }
    function d(t, n, o) {
      if (o === "PRODUCT_SET_AND_PHONE_CALL") {
        var a,
          i =
            (a = t.creative) == null || (a = a.object_story_spec) == null
              ? void 0
              : a.page_id;
        if (i == null) return t;
        var l = new (e || (e = r("URI")))(
          r("XVanityURLControllerRouteBuilder").buildURL({ vanity: i }),
        )
          .setDomain("facebook.com")
          .setProtocol("https")
          .toString();
        return r("AdsAdgroupSemanticFields").linkURL.set(n, t, l);
      }
      return t;
    }
    function m(e, t, n, a) {
      return o("AdsBwIUtils").isBwICampaignGroup(n)
        ? r("AdsAdgroupRecordAccessors").creative.applink_treatment.delete(e)
        : a != null
          ? r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(a, e)
          : t === "PRODUCT_SET_AND_WEBSITE"
            ? r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
                "web_only",
                e,
              )
            : t === "PRODUCT_SET_AND_PHONE_CALL"
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.applink_treatment.delete(e)
              : t != null
                ? r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
                    "automatic",
                    e,
                  )
                : e;
    }
    function p(e, t, n) {
      return t == null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.config.app_id.delete(e)
        : n === !0
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.template_url_spec.config.app_id.set(String(t), e)
          : e;
    }
    var _ = u;
    l.default = _;
  },
  98,
);
