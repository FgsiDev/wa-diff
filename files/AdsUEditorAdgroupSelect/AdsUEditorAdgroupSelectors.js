__d(
  "AdsUEditorAdgroupSelectors",
  [
    "codedError",
    "AdsAPICampaignRecordUtils",
    "AdsChildAttachmentsUtils",
    "AdsCustomCarouselTabUtils",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPromotedObjectTypeUIProvider",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "Result",
    "VultureJSDeadSelector",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorBlockListAccountListSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "immutable",
    "memoizeByReference",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = (e = r("adsCreateSelector"))(
        [r("adsUEditorSelectedAdgroupIDsSelector")],
        function (t) {
          return t.length <= 1;
        },
        { name: i.id + ".isSingularSelector" },
      ),
      m = e(
        [
          r("adsUEditorAccountSelector"),
          r("adsUEditorBlockListAccountListSelector"),
          (u = r("adsUEditorAdObjectsForSelectedAdgroupsSelector")),
        ],
        function (t, n, a) {
          return r("immutable").Map(
            a.map(function (e) {
              var r,
                a,
                i = e.campaignGroup.buying_type,
                l = e.campaignGroup.objective,
                s =
                  (r = e.campaign) == null || (r = r.promoted_object) == null
                    ? void 0
                    : r.object_store_url,
                u = o(
                  "AdsPlacementEligibilityInfoUtils",
                ).buildEligibilityInformationFromCampaignSpec(
                  e.campaign,
                  i,
                  t.capabilities,
                  l,
                  n,
                  s,
                  void 0,
                  void 0,
                  void 0,
                  e.campaignGroup.buy_with_integration_partner,
                  e.campaignGroup.buy_with_prime_type,
                  e.campaignGroup.smart_promotion_type,
                  (a = e.campaignGroup.special_ad_categories) == null
                    ? void 0
                    : a.toArray(),
                  e.campaignGroup.is_opted_into_experiments,
                  e.campaignGroup.campaign_group_creation_source,
                );
              return [e.adgroup.id, u];
            }),
          );
        },
        { name: i.id + ".placementEligibilityInfoMap" },
      ),
      p = e(
        [m],
        function (t) {
          return r("immutable").Map(
            t.map(function (e) {
              return e.spec;
            }),
          );
        },
        { name: i.id + ".placementSpecsMap" },
      ),
      _ = e(
        [u],
        function (t) {
          if (t.length === 0) return o("Result").withSuccess(0);
          var e = o("AdsChildAttachmentsUtils").getChildAttachmentCount(
            t[0].adgroup,
            o(
              "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
            ).getAdgroupSpecPathPlugin(t[0]),
          );
          if (e.success !== !0) return e;
          for (var n of t) {
            var r = o("AdsChildAttachmentsUtils").getChildAttachmentCount(
              n.adgroup,
              o(
                "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
              ).getAdgroupSpecPathPlugin(n),
            );
            if (r.success !== !0) return r;
            if (e.value !== r.value)
              return o("Result").withError(
                s._(
                  2016069,
                  function (e) {
                    return e._(/*BTDS*/ "Carousel Length Mismatch");
                  },
                  function (e, t) {
                    return e._(
                      /*BTDS*/ "It was expected for the carousel in each of the selected Ads to have the same number of cards",
                    );
                  },
                  {},
                ),
              );
          }
          return e;
        },
        { name: i.id + ".uniformChildAttachmentCount" },
      ),
      f = e(
        [u],
        function (t) {
          if (t.length === 0) return o("Result").withSuccess(0);
          var e = o("AdsCustomCarouselTabUtils").getCarouselTabCount(t[0]);
          if (e.success !== !0) return e;
          for (var n of t) {
            var r = o("AdsCustomCarouselTabUtils").getCarouselTabCount(n);
            if (r.success !== !0) return r;
            if (e.value !== r.value)
              return o("Result").withError(
                s._(
                  2016069,
                  function (e) {
                    return e._(/*BTDS*/ "Carousel Length Mismatch");
                  },
                  function (e, t) {
                    return e._(
                      /*BTDS*/ "It was expected for the carousel in each of the selected Ads to have the same number of cards",
                    );
                  },
                  {},
                ),
              );
          }
          return e;
        },
        { name: i.id + ".uniformCarouselTabCount" },
      ),
      g = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.every(t);
          },
          { name: i.id },
        );
      },
      h = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.map(t);
          },
          { name: i.id },
        );
      },
      y = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [e.adgroup.id, t(e, n, r)];
              }),
            );
          },
          { name: i.id },
        );
      },
      C = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.some(function (e) {
              return t(
                e.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(e),
              );
            });
          },
          { name: i.id },
        );
      },
      b = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.some(function (e) {
              return t(
                e.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(e),
              );
            });
          },
          { name: i.id },
        );
      },
      v = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.every(function (e) {
              return t(
                e.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(e),
              );
            });
          },
          { name: i.id },
        );
      },
      S = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.every(function (e) {
              return t(
                e.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(e),
              );
            });
          },
          { name: i.id },
        );
      },
      R = function () {
        return r("VultureJSDeadSelector")(i.id, "adgroupsFilterSelector");
      },
      L = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n
              .filter(function (e) {
                return t(
                  e.adgroup,
                  o(
                    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                  ).getAdgroupSpecPathPlugin(e),
                );
              })
              .map(function (e) {
                var t = e.adgroup;
                return t;
              });
          },
          { name: i.id },
        );
      },
      E = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.map(function (e) {
              return t(
                e.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(e),
              );
            });
          },
          { name: i.id },
        );
      },
      k = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return n.map(function (e) {
              return t(
                e.adgroup,
                o(
                  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                ).getAdgroupSpecPathPlugin(e),
              );
            });
          },
          { name: i.id },
        );
      },
      I = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [
                  e.adgroup.id,
                  t(
                    e.adgroup,
                    o(
                      "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                    ).getAdgroupSpecPathPlugin(e),
                  ),
                ];
              }),
            );
          },
          { name: i.id },
        );
      },
      T = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
          function (n) {
            return r("immutable").Map(
              n.map(function (e, n, r) {
                return [
                  e.adgroup.id,
                  t(
                    e.adgroup,
                    o(
                      "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                    ).getAdgroupSpecPathPlugin(e),
                  ),
                ];
              }),
            );
          },
          { name: i.id },
        );
      },
      D = e(
        [u, r("AdsPromotedObjectTypeUIProvider").toFluxSelector()],
        function (t, n) {
          return r("immutable").Map(
            t.map(function (e) {
              var t = e.adgroup,
                r = e.campaign,
                a = e.campaignGroup,
                i = a.objective,
                l = n.get(r.id);
              return [
                t.id,
                o("AdsAPICampaignRecordUtils").getPromotedObjectType(i, r, l),
              ];
            }),
          );
        },
        { name: i.id + ".derivedPromotedObjectTypesMap" },
      ),
      x = {
        every: (c = r("memoizeByReference"))(g),
        map: c(h),
        mapTransform: c(y),
      },
      $ = {
        some: c(C),
        somePlainObject: c(b),
        every: c(v),
        everyPlainObject: c(S),
        filter: c(R),
        filterPlainObject: c(L),
        map: c(E),
        mapPlainObject: c(k),
        mapTransform: c(I),
        mapTransformPlainObject: c(T),
      };
    ((l.isSingularSelector = d),
      (l.placementEligibilityInfoMap = m),
      (l.placementSpecsMap = p),
      (l.uniformChildAttachmentCount = _),
      (l.uniformCarouselTabCount = f),
      (l.derivedPromotedObjectTypesMap = D),
      (l.adObjectsList = x),
      (l.adgroups = $));
  },
  226,
);
