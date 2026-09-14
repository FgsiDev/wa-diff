__d(
  "adsUEditorPreloadedIdentityToStorefrontSelector",
  [
    "AdsAccountStore",
    "AdsLoadObjectUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsPromotablePageDataProvider",
    "AdsUEditorPageIGAccountWithAdgroupSelector",
    "FBLogger",
    "LoadObject",
    "ShopAdsPageToCommerceMerchantSettingsProvider",
    "ShopAdsPageToCommerceMerchantSettingsStore",
    "ShopsAdsInstagramAccountsSelector",
    "adsChooseSelector",
    "adsCreateSelector",
    "adsCreateStoreThunkSelector",
    "adsCreateThunkSelector",
    "adsPromotablePageListStoreSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUeditorBulkSelectedLinkTypeSelector",
    "err",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("ShopAdsPageToCommerceMerchantSettingsProvider").toFluxStore(),
      s = r("adsCreateStoreThunkSelector")(e, function (t) {
        return e.getState().getAll(t);
      }),
      u = r("gkx")("8187")
        ? r("adsCreateStoreThunkSelector")(
            r("ShopAdsPageToCommerceMerchantSettingsStore"),
            function (e) {
              return r("ShopAdsPageToCommerceMerchantSettingsStore").getAll(e);
            },
          )
        : s,
      c = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          o("ShopsAdsInstagramAccountsSelector")
            .ShopsAdsInstagramAccountsSelector,
          o("AdsUEditorPageIGAccountWithAdgroupSelector")
            .AdsUEditorPageIGAccountWithAdgroupSelector,
          r("AdsPromotablePageDataProvider").toFluxSelector(),
        ],
        function (t, n, a, l) {
          if (t == null)
            return r("LoadObject").withValue(r("immutable").Map(), {
              creatorModuleID: i.id,
            });
          r("gkx")("13081") &&
            r("FBLogger")("ads_page_migration").info(
              "loadPages GAPI called instead of GQL",
            );
          var e = g(t, a, l),
            s = p(n, t);
          return o("AdsLoadObjectUtils")
            .all([e, s])
            .mapValue(function (e) {
              var t = e[0],
                n = e[1];
              return r("immutable").Map(t.merge(n));
            });
        },
        { name: i.id + ".instagramAccountToStorefrontSelector_SLOW" },
      ),
      d = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          o("ShopsAdsInstagramAccountsSelector")
            .ShopsAdsInstagramAccountsSelector,
          o("AdsUEditorPageIGAccountWithAdgroupSelector")
            .AdsUEditorPageIGAccountWithAdgroupSelector,
          r("adsPromotablePageListStoreSelector"),
        ],
        function (t, n, a, l) {
          if (t == null)
            return r("LoadObject").withValue(r("immutable").Map(), {
              creatorModuleID: i.id,
            });
          var e = f(a, l),
            s = p(n, t);
          return o("AdsLoadObjectUtils")
            .all([e, s])
            .mapValue(function (e) {
              var t = e[0],
                n = e[1];
              return r("immutable").Map(t.merge(n));
            });
        },
        { name: i.id + ".instagramAccountToStorefrontSelector_FAST" },
      ),
      m = r("adsChooseSelector")(
        function () {
          return r("gkx")("13081");
        },
        d,
        c,
        !0,
        i.id + ".instagramAccountToStorefrontSelector",
      );
    function p(e, t) {
      return e(t).mapValue(function (e) {
        return r("immutable")
          .Map()
          .withMutations(function (t) {
            return e == null
              ? void 0
              : e.data.forEach(function (e) {
                  return t.set(e.id, e.mini_shop_storefront);
                });
          });
      });
    }
    function _(e) {
      var t = o("AdsLoadObjectUtils").all(e);
      return t.mapValue(function (e) {
        return e.reduce(function (e, t) {
          return e.merge(t);
        }, r("immutable").Map());
      });
    }
    function f(e, t) {
      var n = o("AdsLoadStateUtils_LEGACY").toLoadObject(t);
      return n.isLoading()
        ? r("LoadObject").loading({ creatorModuleID: i.id })
        : n
            .mapValue(function (t) {
              return t.list.map(function (t) {
                return e(t).mapValue(function (e) {
                  return r("immutable")
                    .Map()
                    .withMutations(function (t) {
                      return e.forEach(function (e) {
                        return t.set(e.id, e.mini_shop_storefront);
                      });
                    });
                });
              });
            })
            .mapValue(function (e) {
              return _(e);
            });
    }
    function g(e, t, n) {
      r("gkx")("13081") &&
        r("FBLogger")("ads_page_migration").info(
          "loadPages GAPI called instead of GQL",
        );
      var o = n.get(e);
      return o
        .mapValue(function (e) {
          return e.map(function (e) {
            return t(e.id).mapValue(function (e) {
              return r("immutable")
                .Map()
                .withMutations(function (t) {
                  return e.forEach(function (e) {
                    return t.set(e.id, e.mini_shop_storefront);
                  });
                });
            });
          });
        })
        .mapValue(function (e) {
          return _(e);
        });
    }
    function h(e, t, n) {
      var o = n.get(e);
      return o
        .mapValue(function (e) {
          return e.map(function (e) {
            return t(e).mapValue(function (e) {
              return r("immutable")
                .Map()
                .withMutations(function (t) {
                  return e.forEach(function (e) {
                    return t.set(e.id, e.mini_shop_storefront);
                  });
                });
            });
          });
        })
        .mapValue(function (e) {
          return _(e);
        });
    }
    var y = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("AdsPromotablePageDataProvider").toFluxSelector(),
          u,
        ],
        function (t, n, a) {
          return (
            r("gkx")("13081") &&
              r("FBLogger")("ads_page_migration").info(
                "loadPages GAPI called instead of GQL",
              ),
            t == null
              ? r("LoadObject").withValue(r("immutable").Map(), {
                  creatorModuleID: i.id,
                })
              : n
                  .get(t)
                  .mapValue(function (e) {
                    return e.map(function (e) {
                      var t = e.id;
                      return t;
                    });
                  })
                  .mapValue(function (e) {
                    return o("AdsLoadObjectUtils").allByKey(
                      a(e).filter(function (e) {
                        return !e.hasError();
                      }),
                    );
                  })
                  .mapValue(function (e) {
                    return e.mapEntries(function (e) {
                      var t = e[0],
                        n = e[1];
                      return [t, n.mini_shop_storefront];
                    });
                  })
          );
        },
        { name: i.id + ".pageToStorefrontSelector_SLOW" },
      ),
      C = r("adsCreateSelector")(
        [r("adsPromotablePageListStoreSelector"), u],
        function (t, n) {
          var e,
            a,
            l = o("AdsLoadStateUtils_LEGACY").toLoadObject(t);
          if (l.hasError()) {
            var s;
            return r("LoadObject").withError(
              (s = l.getError()) != null
                ? s
                : r("err")("pageIds.getError() failed to return an error"),
              { creatorModuleID: i.id },
            );
          }
          return l.isLoading()
            ? r("LoadObject").loading({ creatorModuleID: i.id })
            : o("AdsLoadObjectUtils")
                .allByKey(
                  n(
                    (e = (a = l.getValue()) == null ? void 0 : a.list) != null
                      ? e
                      : [],
                  ).filter(function (e) {
                    return !e.hasError();
                  }),
                )
                .mapValue(function (e) {
                  return e.mapEntries(function (e) {
                    var t = e[0],
                      n = e[1];
                    return [t, n.mini_shop_storefront];
                  });
                });
        },
        { name: i.id + ".pageToStorefrontSelector_FAST" },
      ),
      b = r("adsChooseSelector")(
        function () {
          return r("gkx")("13081");
        },
        C,
        y,
        !0,
        i.id + ".pageToStorefrontSelector",
      ),
      v = r("adsCreateSelector")(
        [b, m],
        function (t, n) {
          return n.hasError()
            ? t
            : n.isLoading() && !t.isLoading() && !t.hasError()
              ? (r("FBLogger")("shop_ads_product").warn(
                  "Instagram storefronts stuck loading, falling back to page storefronts",
                ),
                t)
              : o("AdsLoadObjectUtils")
                  .all([t, n])
                  .mapValue(function (e) {
                    var t = e[0],
                      n = e[1];
                    return r("immutable").Map(t.concat(n));
                  });
        },
        { name: i.id + ".preloadedIdentityToStorefrontSelector" },
      );
    function S(e) {
      return e.getValues().every(function (e) {
        return e === "website_and_shops";
      });
    }
    function R(e) {
      return e.every(function (e) {
        var t;
        return (
          ((t = e.creative) == null || (t = t.destination_spec) == null
            ? void 0
            : t.destination_type) === "WEBSITE_AND_SHOP"
        );
      });
    }
    function L(e, t) {
      var n = S(e),
        r = R(t);
      return n || r;
    }
    var E = r("adsCreateSelector")(
      [
        r("adsCreateThunkSelector")(v),
        o("adsUeditorBulkSelectedLinkTypeSelector")
          .adsUEditorBulkSelectedLinkTypeSelector,
        r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
        r("adsPromotablePageListStoreSelector"),
      ],
      function (t, n, o, a) {
        var e = r("gkx")("13081")
            ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
            : t(),
          l = r("justknobx")._("81"),
          s = a.loadState === "LOADED" && a.list.length <= l;
        return !s && !L(n, o)
          ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
          : r("gkx")("13081")
            ? t()
            : e;
      },
      {
        name:
          i.id + ".adsUEditorAdgroupWebsiteAndShopIdentityToStorefrontSelector",
      },
    );
    ((l.getAllShopAdsPageToCommerceMerchantSettingsSelector = u),
      (l.instagramAccountToStorefrontSelector = m),
      (l.getInstagramAccountsLoadObjectByPageID = g),
      (l.getInstagramAccountsLoadObjectByPageIDs = h),
      (l.preloadedIdentityToStorefrontSelector = v),
      (l.adsUEditorAdgroupWebsiteAndShopIdentityToStorefrontSelector = E));
  },
  98,
);
