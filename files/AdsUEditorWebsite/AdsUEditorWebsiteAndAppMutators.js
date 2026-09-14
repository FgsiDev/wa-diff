__d(
  "AdsUEditorWebsiteAndAppMutators",
  [
    "AdsALCustomEvent",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAppUrlUtils",
    "AdsAssetFeedMutationUtils",
    "AdsCFWebsiteAndAppPromotedObjectUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsOmnichannelTrackingSpecsUtils",
    "AdsOptimizationMutationUtils",
    "AdsPCAUnificationUtils",
    "AdsPlacementReducerUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupTurnoffPromoAdMutator",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessengerMutators",
    "AdsUEditorSetPostEditModeMutators",
    "AdsUnifiedCreativeAPIFields",
    "AdsValueOptimizationUtils",
    "adsAutomaticFlowMutationSetDoFSpec",
    "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
    "areEqual",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      var i = t.tracking_specs && t.tracking_specs.toJS(),
        l = 20,
        s = null;
      if (i) {
        var u = i.filter(function (t) {
          return (e || (e = r("areEqual")))(t["action.type"], [
            "offline_conversion",
          ]);
        });
        if (((s = u.length > 0 ? u : null), s != null)) {
          var c = u[0].dataset;
          if (c != null && c.length > 0) {
            var d;
            c.length >= l && (c = c.slice(0, l));
            var m = { callsite: a, datasetIDs: c };
            r("AdsInterfacesLogger").log({
              eventName: "tracking_spec_after_conversion_location_change",
              data:
                ((d = {}), (d.signals_ui_event_data = JSON.stringify(m)), d),
            });
          }
        }
      }
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "AdsUEditorCallToActionMutators",
          ).deleteCallToActionValueObjectStoreURLs(e, n);
        },
        function (e) {
          return o(
            "AdsUEditorCallToActionMutators",
          ).deleteCallToActionValueAppLink(e, n);
        },
        function (e) {
          return o(
            "AdsUEditorCallToActionMutators",
          ).deleteCallToActionValueApplication(e, n);
        },
        function (e) {
          return s != null
            ? r("AdsAdgroupRecordAccessors").tracking_specs.set(s)(e)
            : r("AdsAdgroupRecordAccessors").tracking_specs.delete(e);
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.applink_treatment.delete(e);
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.omnichannel_link_spec.delete(e);
        },
        function (e) {
          return v(e);
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.template_url_spec.delete(e);
        },
      )(t);
    }
    function u(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.omnichannel_link_spec.web.url.set(t),
      )(e);
    }
    function c(e) {
      var t,
        n =
          (t = o("AdsChildAttachmentsUtils").getChildAttachments(e)) == null ||
          (t = t[0]) == null
            ? void 0
            : t.link;
      return n != null && n !== "" ? n : null;
    }
    function d(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.omnichannel_link_spec.web.url.get(e);
      if (t == null) {
        var n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.get(e),
          o = n != null && n !== "" ? n : c(e);
        if (o != null) return u(e, o);
      }
      return e;
    }
    function m(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.omnichannel_link_spec.app.application_id.set(t),
      )(e);
    }
    function p(t, n, a, i, l, s, u, c, d, m, p) {
      var _ = r("AdsAdgroupSemanticFields").multiShareEndCard.isSupported(u, i),
        f = o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID(s),
        g = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: l,
          campaignGroup: s,
        }),
        h = o("AdsODAXUtils").maybeTranslateObjective(
          s.objective,
          g,
          l.optimization_goal,
        ),
        y = o("AdsUEditorAdgroupCachedUtils").getCachedCallToActionLink(
          n,
          a,
          c,
        ),
        C = o("AdsUEditorAdgroupCachedUtils").getMetadata(n, a),
        b = o("AdsAPICampaignGroupRecordUtils").isAutomatedShoppingAds(s),
        v = l.optimization_goal === r("AdsAPIOptimizationGoals").VALUE,
        S = b && !v ? "deeplink_with_web_fallback" : "automatic",
        R = i.tracking_specs && i.tracking_specs.toJS();
      if (R) {
        var L = R.filter(function (t) {
          return (e || (e = r("areEqual")))(t["action.type"], [
            "offline_conversion",
          ]);
        });
        if (L.length > 0) {
          var E = L[0].dataset;
          if (E != null && E.length > 0) {
            var k,
              I = 20;
            E.length >= I && (E = E.slice(0, I));
            var T = {
              callsite: r("AdsPromotedObjectTypes").WEB_AND_APP,
              datasetIDs: E,
            };
            r("AdsInterfacesLogger").log({
              eventName: "tracking_spec_after_conversion_location_change",
              data:
                ((k = {}), (k.signals_ui_event_data = JSON.stringify(T)), k),
            });
          }
        }
      }
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec.delete,
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete,
        r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
        r("AdsAdgroupRecordAccessors").creative.shop_spec.delete,
        function (e) {
          return o(
            "AdsUEditorInstagramMutators",
          ).maybeSetAdgroupCreativeInstagramAccountID(e, u, p);
        },
        function (e) {
          return r("adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported")(e, {
            campaign: l,
            campaignGroup: s,
          });
        },
        function (e) {
          return o(
            "AdsUEditorSetPostEditModeMutators",
          ).setToUsingInlineCreation({
            adgroup: e,
            cachedMetadata: C,
            campaign: l,
            campaignGroup: s,
            objective: h,
            promotedObjectType: g,
            specPathPlugin: u,
          });
        },
        function (e) {
          return o(
            "AdsUEditorMessengerMutators",
          ).deleteMessengerDestinationFields({
            adgroup: e,
            specPlugin: u,
            supportPageEndCard: _,
          });
        },
        function (e) {
          return r("AdsAdgroupRecordAccessors").creative.applink_treatment.set(
            S,
            e,
          );
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupShopAdsUtils",
          ).deleteAssetFeedSpecOnsiteDestinationAndShopSpec(e);
        },
        function (e) {
          return o("AdsUEditorCallToActionMutators").setCallToAction({
            callToActionType: c,
            cachedCallToActionLink: y,
            adgroup: e,
            campaignGroupPromotedPageID: f,
            objective: h,
            promotedObjectType: g,
            specPlugin: u,
          });
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
          ).updateContextualDiscoveryAdsEligibilitySpec(e, {
            shouldOptIn: m.shouldOptIn === !0,
            shouldRenderCheckbox: m.shouldRenderCheckbox,
            isExplicitOptOut: m.isExplicitOptOut,
            actionMetadataType: m.actionMetadataType,
          });
        },
        function (e) {
          return o(
            "adsAutomaticFlowMutationSetDoFSpec",
          ).adsAutomaticFlowLiteSpecMutator(
            t,
            { campaign: l, campaignGroup: s, adgroup: e },
            d,
          );
        },
        function (e) {
          return o("AdsUEditorAdgroupTurnoffPromoAdMutator").turnOffPromo(
            e,
            o("AdsUEditorAdgroupTurnoffPromoAdMutator")
              .PromoAdDefaultOptOutCallsite.SET_WEB_APP_PROMOTED_OBJECT_TYPE,
          );
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).cleanWebsiteExtensionFields(e);
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupLeadNurtureChannelsMutator",
          ).cleanLeadNurtureChannelsField(e);
        },
      )(i);
    }
    function _(e, t, n, a) {
      var i,
        l,
        s = {
          campaign: e,
          campaignGroup: t,
          hasBackingApplication: !1,
          prefilledOptimizationGoal: r("AdsAPIOptimizationGoals")
            .OFFSITE_CONVERSIONS,
          promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_APP,
        },
        u = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
            campaign: e,
            campaignGroup: t,
          }),
          e.optimization_goal,
        ),
        c = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: u,
          promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_APP,
        }),
        d = (i = e.promoted_object) == null ? void 0 : i.place_page_set_id,
        m =
          o("AdsAPICampaignGroupRecordUtils").isCollabAdsASC(t, e) ||
          o("AdsPCAUnificationUtils").isPcaUnifiedCollaborativeAd(t),
        p = m
          ? (l = e.promoted_object) == null
            ? void 0
            : l.product_set_id
          : void 0,
        _ =
          o("AdsValueOptimizationUtils").shouldDefaultVOOptimizationGoal(
            e,
            n,
            t,
            !0,
            "web_app_pfr_laser_based",
            !0,
          ) || e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE;
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").targeting.user_os.delete,
        r("AdsCampaignRecordAccessors").targeting.user_device.delete,
        r("AdsCampaignRecordAccessors").targeting.is_whatsapp_destination_ad
          .delete,
        r("AdsCampaignRecordAccessors").targeting.app_install_state.delete,
        r("AdsCampaignRecordAccessors").destination_type.delete,
        r("AdsCampaignRecordAccessors").promoted_object.delete,
        r("AdsCampaignRecordAccessors").promoted_object.product_set_id.set(p),
        r("AdsCampaignRecordAccessors").promoted_object.place_page_set_id.set(
          d,
        ),
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.pixel.set(r("immutable").List()),
        function (e) {
          return o(
            "AdsOptimizationMutationUtils",
          ).resetOptimizationRelatedFields(n, e, c, u, s, void 0, void 0, _);
        },
        function (e) {
          return o("AdsPlacementReducerUtils").resetPlacement(
            e,
            babelHelpers.extends({}, a, {
              promotedObjectType: r("AdsPromotedObjectTypes").WEB_AND_APP,
              objectStoreURL: null,
              containsOffer: !1,
            }),
          );
        },
      )(e);
    }
    function f(e, t, n) {
      var a, i;
      return (
        o("AdsALCustomEvent").AdsALCustomEventLogger.log(
          "destination_conversion_event_default_applied",
          { string: ((a = {}), (a.objective = String(t.objective)), a) },
        ),
        o("AdsMutators").chain(
          (i = r(
            "AdsCampaignRecordAccessors",
          )).promoted_object.omnichannel_object.pixel.set(
            o(
              "AdsCFWebsiteAndAppPromotedObjectUtils",
            ).buildOmnichannelPixelList({}, n),
          ),
          i.promoted_object.omnichannel_object.app.set(
            r("immutable").List([
              o("AdsCFWebsiteAndAppPromotedObjectUtils").buildMCMEAppObject(n),
            ]),
          ),
          i.promoted_object.mcme_conversion_id.set(n.conversion.id),
          i.promoted_object.value_semantic_type.set(null),
        )(e)
      );
    }
    function g(e, t) {
      var n;
      return (
        o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: e,
          campaignGroup: t,
        }) === r("AdsPromotedObjectTypes").WEB_AND_APP &&
        ((n = e.promoted_object) == null ? void 0 : n.mcme_conversion_id) ==
          null
      );
    }
    function h(e, t) {
      var n,
        a = o("AdsOmnichannelTrackingSpecsUtils").addAppTrackingSpecs(
          (n = e.tracking_specs) == null ? void 0 : n.toJS(),
          t,
        );
      return r("AdsAdgroupRecordAccessors").tracking_specs.set(
        r("immutable").fromJS(a),
        e,
      );
    }
    function y(e, t, n, a) {
      var i = e;
      if (
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        a === r("AdsPromotedObjectTypes").WEB_AND_APP
      ) {
        var l,
          s =
            !o("AdsDynamicAdsUtils").isDynamicAd(e) && r("justknobx")._("4166"),
          u =
            (l = n.promoted_object) == null ||
            (l = l.omnichannel_object) == null ||
            (l = l.app) == null
              ? void 0
              : l.toJS();
        if (Array.isArray(u) && u.length > 0) {
          var d,
            m,
            p = u[0],
            _ = p == null ? void 0 : p.object_store_urls,
            f =
              (d = e.creative) == null ||
              (d = d.call_to_action) == null ||
              (d = d.value) == null
                ? void 0
                : d.object_store_urls;
          _ != null &&
            (_ == null ? void 0 : _.length) > 0 &&
            (f == null || f.count() === 0) &&
            (i = o("AdsUEditorCallToActionMutators").setCallToActionValueField(
              e,
              t,
              "object_store_urls",
              _,
              a,
            ));
          var g = p == null ? void 0 : p.application_id,
            h =
              (m = e.creative) == null ||
              (m = m.call_to_action) == null ||
              (m = m.value) == null
                ? void 0
                : m.application;
          (g !== null &&
            h == null &&
            (i = o("AdsUEditorCallToActionMutators").setCallToActionValueField(
              e,
              t,
              "application",
              g,
              a,
            )),
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.omnichannel_link_spec.app.application_id.set(g, i)),
            s &&
              _ != null &&
              _.length > 0 &&
              ((i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.omnichannel_link_spec.app.platform_specs.delete(i)),
              _.some(r("AdsAppUrlUtils").isItunesURL) &&
                (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.omnichannel_link_spec.app.platform_specs.ios.url.set(
                  null,
                  i,
                )),
              _.some(r("AdsAppUrlUtils").isGooglePlayURL) &&
                (i = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.omnichannel_link_spec.app.platform_specs.android.url.set(
                  null,
                  i,
                ))));
        }
        if (s) {
          var y,
            C,
            b,
            v,
            S = r(
              "AdsAdgroupRecordAccessors",
            ).creative.omnichannel_link_spec.web.url.get(i),
            R =
              (y =
                (C =
                  (b = e.creative) == null ||
                  (b = b.call_to_action) == null ||
                  (b = b.value) == null
                    ? void 0
                    : b.link) != null
                  ? C
                  : (v = e.creative) == null ||
                      (v = v.object_story_spec) == null ||
                      (v = v.link_data) == null
                    ? void 0
                    : v.link) != null
                ? y
                : c(e);
          S == null &&
            R != null &&
            R !== "" &&
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.omnichannel_link_spec.web.url.set(R, i));
        }
      }
      return i;
    }
    function C(e, t) {
      var n,
        a,
        i =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.link_urls;
      if (i == null || i.size === 0) return e;
      for (
        var l = e,
          s = (a = e.creative) == null ? void 0 : a.omnichannel_link_spec,
          u = 0;
        u < i.size;
        u++
      ) {
        var c = i.get(u),
          d = c == null ? void 0 : c.get("website_url"),
          m = s;
        if (d != null && s != null) {
          var p = s.getIn(["web", "url"]);
          p !== d && (m = s.setIn(["web", "url"], d));
        }
        l = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          l,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          u,
          "omnichannel_link_spec",
          m,
        );
      }
      return l;
    }
    function b(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.link_urls;
      if (n == null || n.size === 0) return e;
      var o = n.get(0),
        a = o == null ? void 0 : o.get("website_url"),
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.omnichannel_link_spec.web.url.get(e);
      return i == null && a != null && typeof a == "string" ? u(e, a) : e;
    }
    function v(e) {
      var t,
        n,
        o =
          ((t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.link_urls) &&
          r("immutable").fromJS(
            (n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.link_urls.map(function (e) {
                  return e.delete("omnichannel_link_spec");
                }),
          );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.link_urls.set(o, e);
    }
    ((l.deleteAdgroupFields = s),
      (l.setOmnichannelLinkSpecWebsiteURL = u),
      (l.setOmnichannelLinkSpecWebsiteURLFromCreative = d),
      (l.setOmnichannelLinkSpecApplicationID = m),
      (l.selectWebsiteAndAppPromotedObjectTypeForAdgroup = p),
      (l.selectWebsiteAndAppPromotedObjectTypeForCampaign = _),
      (l.applyDefaultMCMEConversionForCampaign = f),
      (l.canDefaultMCMEConversionForCampaign = g),
      (l.setTrackingSpecs = h),
      (l.setCTAValuesFromOmnichannelSpec = y),
      (l.setOmnichannelLinkSpecInLinkUrls = C),
      (l.setCreativeOmnichannelLinkSpecWebUrlFromFirstLinkUrl = b));
  },
  98,
);
