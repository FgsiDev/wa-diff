__d(
  "AdsAdgroupCatalogUIStore",
  [
    "AdsDataAtom",
    "AdsUEditorAdgroupSetCatalogIDDataActionFlux",
    "AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceActionFlux",
    "AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaActionFlux",
    "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux",
    "AdsUEditorBwIToggleActionFlux",
    "AdsUEditorCampaignShopAdsOptInDataActionFlux",
    "AdsUEditorHostIDs",
    "FluxMapStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getActionTypes = function () {
            return [
              o("AdsUEditorAdgroupSetCatalogIDDataActionFlux").actionType,
              o(
                "AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaActionFlux",
              ).actionType,
              o(
                "AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaActionFlux",
              ).actionType,
              o(
                "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux",
              ).actionType,
              o(
                "AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceActionFlux",
              ).actionType,
              r("AdsUEditorBwIToggleActionFlux").actionType,
              o("AdsUEditorCampaignShopAdsOptInDataActionFlux").actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o(
                "AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaActionFlux",
              ).actionType:
              case o(
                "AdsUEditorAdgroupTransformStaticToDynamicCarouselMediaActionFlux",
              ).actionType:
              case o(
                "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux",
              ).actionType:
              case o(
                "AdsUEditorAdgroupTransformDynamicToStaticCreativeSourceActionFlux",
              ).actionType:
              case r("AdsUEditorBwIToggleActionFlux").actionType:
                return e.hostID !== r("AdsUEditorHostIDs").EDITING
                  ? t
                  : t.withMutations(function (t) {
                      return (
                        e.adgroupIDs.forEach(function (e) {
                          return t.delete(e);
                        }),
                        t
                      );
                    });
              case o("AdsUEditorCampaignShopAdsOptInDataActionFlux").actionType:
                return e.hostID !== r("AdsUEditorHostIDs").EDITING ||
                  e.adgroupToProductSetIDMap == null
                  ? t
                  : t.withMutations(function (t) {
                      return (
                        e.adgroupIDs.forEach(function (n) {
                          var r, o;
                          (r = e.adgroupToProductSetIDMap) != null &&
                            r.has(n) &&
                            ((o = e.adgroupToProductSetIDMap) == null
                              ? void 0
                              : o.get(n)) != null &&
                            t.delete(n);
                        }),
                        t
                      );
                    });
              case o("AdsUEditorAdgroupSetCatalogIDDataActionFlux").actionType:
                return t.withMutations(function (t) {
                  return (
                    e.adgroupIDs.forEach(function (n) {
                      return t.set(n, e.productCatalogID);
                    }),
                    t
                  );
                });
              default:
                return t;
            }
          }),
          (n.getCatalog = function (t) {
            return this.getState().get(t);
          }),
          t
        );
      })(r("FluxMapStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
