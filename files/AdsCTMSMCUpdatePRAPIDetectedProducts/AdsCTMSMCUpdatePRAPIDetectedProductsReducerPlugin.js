__d(
  "AdsCTMSMCUpdatePRAPIDetectedProductsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCTMSMCUpdatePRAPIDetectedProductsActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "CTMSMCUpdateDetectedProductsAction",
    "ClickToWhatsAppFeatureGating",
    "XFBCTMSMCProductDataDecisionUtils.facebook",
    "adsUEditorCTMCatalogProductMutatorUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        (e.isAutoGenCatalogEligiblePage ||
          e.isX2PDefaultOptInEligiblePage === !0) &&
        o("ClickToWhatsAppFeatureGating").isCTWAAutogenCatalogTreatmentEnabled(
          e.destination,
        ) &&
        (t == null
          ? void 0
          : t.some(function (t) {
              var n = t.get("product_decision"),
                r = t.get("product_source");
              return (
                r === "MANUAL" ||
                n === "REJECT" ||
                (e.isAutogenCatalogConsented !== !0 &&
                  r === "PRAPI" &&
                  n === "ACCEPT")
              );
            })) === !0
      );
    }
    function s(e) {
      var t = e.defaultOptInWithoutAcceptedProducts,
        n = e.hasAcceptedProducts,
        r = e.isAutoGenCatalogEligiblePage,
        o = e.isDefaultOptInSuppressed,
        a = e.isStickyOptedOut,
        i = e.requiresReview;
      return i || o
        ? "OPT_OUT"
        : r
          ? (n || t) && !a
            ? "OPT_IN"
            : "OPT_OUT"
          : "OPT_IN";
    }
    function u(e, t) {
      var n;
      if (e.isStickyOptedOut === !0) return "REJECT";
      if (
        (o("ClickToWhatsAppFeatureGating").isCTWAAutogenCatalogTreatmentEnabled(
          e.destination,
        ) &&
          o("adsUEditorCTMCatalogProductMutatorUtils")
            .getPlaceholderProductID()
            .includes(t)) ||
        (o("ClickToWhatsAppFeatureGating").isCTWAAutogenCatalogTreatmentEnabled(
          e.destination,
        ) &&
          e.isX2PDefaultOptInEligiblePage === !0 &&
          (e.isAutogenCatalogConsented !== !0 ||
            e.isCTWADefaultOptInSuppressed === !0))
      )
        return "PENDING";
      if (!e.isAutoGenCatalogEligiblePage) return "ACCEPT";
      var r = (n = e.productDecisions) == null ? void 0 : n[t],
        a =
          r != null
            ? o("XFBCTMSMCProductDataDecisionUtils.facebook").toJSEnum(r)
            : null;
      return a === "ACCEPT" ||
        (e.isX2PDefaultOptInEligiblePage === !0 &&
          (a == null || a === "PENDING"))
        ? "ACCEPT"
        : "PENDING";
    }
    function c(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
        "OPT_OUT",
        e,
      );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
        "DEFAULT",
        t,
      );
    }
    function d(e, t) {
      var n,
        a =
          t.postID != null
            ? r("AdsAdgroupRecordAccessors").creative.product_data
            : r("AdsAdgroupRecordAccessors").creative.object_story_spec
                .product_data,
        i = Array.from(t.detectedProducts).map(function (e) {
          return { decision: u(t, e), productID: e };
        }),
        l = r("immutable").List(
          i.map(function (e) {
            var t = e.decision,
              n = e.productID;
            return r("immutable").Map({
              product_decision: t,
              product_id: n,
              product_source: "PRAPI",
            });
          }),
        ),
        c = a.set(l, e),
        d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.get(
          c,
        ),
        m = t.isX2PDefaultOptInEligiblePage === !0,
        p =
          o(
            "ClickToWhatsAppFeatureGating",
          ).isCTWAAutogenCatalogTreatmentEnabled(t.destination) &&
          m &&
          t.isAutogenCatalogConsented === !0,
        _ = s({
          defaultOptInWithoutAcceptedProducts: p,
          hasAcceptedProducts: i.some(function (e) {
            var t = e.decision;
            return t === "ACCEPT";
          }),
          isAutoGenCatalogEligiblePage: t.isAutoGenCatalogEligiblePage,
          isDefaultOptInSuppressed:
            o(
              "ClickToWhatsAppFeatureGating",
            ).isCTWAAutogenCatalogTreatmentEnabled(t.destination) &&
            m &&
            t.isAutogenCatalogConsented === !0 &&
            t.isCTWADefaultOptInSuppressed === !0,
          isStickyOptedOut: t.isStickyOptedOut === !0,
          requiresReview:
            o(
              "ClickToWhatsAppFeatureGating",
            ).isCTWAAutogenCatalogTreatmentEnabled(t.destination) &&
            m &&
            t.isAutogenCatalogConsented !== !0,
        });
      d !== _ &&
        ((c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
          _,
          c,
        )),
        (c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
          m ? "DEFAULT" : "MANUAL",
          c,
        )));
      var f =
          (n = c.creative) == null || (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.associated_product_set_id,
        g =
          o(
            "ClickToWhatsAppFeatureGating",
          ).isCTWAAutogenCatalogTreatmentEnabled(t.destination) &&
          t.shouldRefreshOptedOutSelection === !0;
      return t.productSetID == null || (f != null && !g)
        ? c
        : (g &&
            (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.catalog.delete(c)),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.associated_product_set_id.set(
            t.productSetID,
            c,
          ));
    }
    function m(t, n) {
      if (
        n.action ===
        o("CTMSMCUpdateDetectedProductsAction")
          .CTMSMCUpdateDetectedProductsAction.X2P_CONTROL_ARM_OPT_OUT
      )
        return c(t);
      var a =
          n.postID != null
            ? r("AdsAdgroupRecordAccessors").creative.product_data
            : r("AdsAdgroupRecordAccessors").creative.object_story_spec
                .product_data,
        i = n.mediaID != null || n.postID != null;
      return i && n.shouldRefreshOptedOutSelection !== !0 && e(n, a.get(t))
        ? t
        : n.action ===
            o("CTMSMCUpdateDetectedProductsAction")
              .CTMSMCUpdateDetectedProductsAction.DELETE
          ? a.delete(t)
          : i &&
              n.action ===
                o("CTMSMCUpdateDetectedProductsAction")
                  .CTMSMCUpdateDetectedProductsAction.UPDATE
            ? d(t, n)
            : t;
    }
    var p = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return m(e, t);
            });
          },
          r("AdsCTMSMCUpdatePRAPIDetectedProductsActionFlux").actionType,
        ),
      },
      _ = p;
    l.default = _;
  },
  98,
);
