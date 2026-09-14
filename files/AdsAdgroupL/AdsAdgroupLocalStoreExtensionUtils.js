__d(
  "AdsAdgroupLocalStoreExtensionUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPlusCLocalStoreExtensionUtils",
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsPCAUnificationUtils",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map([
        [
          (s = o("AdsAPIObjectives")).OUTCOME_SALES,
          [
            (e = r("AdsPromotedObjectTypes")).WEBSITE_AND_IN_STORE,
            e.WEBSITE_APP_AND_IN_STORE,
            e.IN_STORE,
          ],
        ],
      ]),
      c = new Map([
        [s.OUTCOME_SALES, [e.PIXEL]],
        [s.LINK_CLICKS, [e.WEBSITE]],
        [s.CONVERSIONS, [e.PIXEL]],
        [s.OUTCOME_ENGAGEMENT, [e.PIXEL]],
      ]),
      d = new Set(["IMAGE", "VIDEO"]),
      m = new Set(["IMAGE"]);
    function p(e, t, n) {
      return _(e, t, n);
    }
    function _(e, t, n) {
      return f(e, t, n) || g(e, t, n);
    }
    function f(e, t, n) {
      return h(e, t, n, u, d) && !0;
    }
    function g(e, t, n) {
      return h(e, t, n, c, m);
    }
    function h(e, t, n, r, a) {
      var i,
        l = t.objective,
        s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(l, e);
      return (!o("AdsPCAUnificationUtils").isPcaUnificationEnabled(t) &&
        o("AdsAPICampaignGroupRecordUtils").getPromotedObjectProductCatalogID(
          t,
        ) != null) ||
        !y(l, s, r) ||
        o("AdsAPIAdgroupRecordUtils").isDynamicHandleAd(n) ||
        o("AdsPlacementAssetEligibilityUtils").isDCOCampaignSelected(e) ||
        o("AdsChildAttachmentsUtils").isStaticCarouselAd(n) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(n.creative) ||
        ((i = n.creative) == null ? void 0 : i.product_set_id) != null
        ? !1
        : a.has(o("AdsAPIAdgroupRecordUtils").getSingleMediaType(n));
    }
    function y(e, t, n) {
      if (!n.has(e)) return !1;
      var r = n.get(e);
      return r == null || r.length === 0 ? !1 : r.includes(t);
    }
    function C(e, t, n, r) {
      if (
        !o("AdsAPlusCLocalStoreExtensionUtils").passPageLocationStructureCheck(
          r,
        )
      )
        return !1;
      var a = r == null ? void 0 : r.getValue();
      return f(t, e, n) &&
        o(
          "AdsAPlusCLocalStoreExtensionUtils",
        ).passLocalStoreExtensionDefaultOptInGK(
          a == null ? void 0 : a.id,
          a,
          !0,
        )
        ? !0
        : g(t, e, n) &&
            o(
              "AdsAPlusCLocalStoreExtensionUtils",
            ).passLocalStoreExtensionDefaultOptInGKForWebsite(a);
    }
    ((l.isEligibleForLocalStoreExtension = p),
      (l.isEligibleForLocalStoreExtensionByCampaignAndAdgroup = _),
      (l.isEligibleForLocalStoreExtensionByCampaignAndAdgroupForWebsiteAndInStore =
        f),
      (l.isEligibleForLocalStoreExtensionWithPageCheck = C));
  },
  98,
);
