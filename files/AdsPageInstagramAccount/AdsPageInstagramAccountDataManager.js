__d(
  "AdsPageInstagramAccountDataManager",
  [
    "fbt",
    "AdsBaseDataManager",
    "AdsDataManagerApiUtils",
    "AdsGraphAPI",
    "AdsInstagramAccountPageBatchLoadErrorDataAction",
    "AdsInstagramAccountPageBatchLoadedDataAction",
    "AdsInstagramBackedThreadsAccountDataManager",
    "AdsPageInstagramAccountShadowValidateUtils",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "GraphAPIFieldUtils",
    "Promise",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = [
        "has_profile_picture",
        "id",
        "id_v2",
        "is_messaging_light_switch_enabled",
        "is_authorized_for_political_ads",
        "is_business",
        "is_professional",
        "is_private",
        "is_published",
        "profile_pic",
        "user_id",
        "username",
        "shopping_review_status",
        "is_shopping_onsite_checkout_enabled",
        "date_joined",
        "is_shopless_account_with_static_product_tags_enabled",
        "is_shopless_account_with_dynamic_product_tags_enabled",
        "eimu_id",
        o("GraphAPIFieldUtils").getFieldWithSubfields(
          "mini_shop_storefront",
          o("AdsUEditorCrossChannelShopsAdsCommon").STOREFRONT_FIELDS,
        ),
        "threads_user_id",
        "threads_profile_pic",
      ]
        .filter(Boolean)
        .join(),
      c = [
        "id",
        "profile_picture_url",
        "username",
        "is_business_account",
        "is_professional",
        "is_private",
        "is_unpublished",
        "shopping_review_status",
        "is_shopping_onsite_checkout_enabled",
      ].join(),
      d = { data: [] },
      m = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.createAndUsePageBackedAccount = function (e, t, n, r, a, i) {
              o(
                "AdsPageInstagramAccountShadowValidateUtils",
              ).createAndUsePageBackedAccountV2(e, t, n, r, a, i);
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (l.load = function (t) {
            this.loadPageInstagramAccounts(t);
          }),
          (l.buildPageInstagramAccountsRequest = function (t, n) {
            return o("AdsGraphAPI")
              .get(i.id)
              .objectByName("page", t)
              .batched()
              .declareOnly()
              .get({ fields: this.getFields(n) });
          }),
          (l.loadPageInstagramAccounts = function (t, n) {
            var e = this;
            r("promiseDone")(
              this.buildPageInstagramAccountsRequest(t, n)
                .go()
                .then(function (t) {
                  var r, o;
                  return e
                    .loadInstagramAccountsWithIBTA(
                      (r =
                        (o = t.instagram_accounts) == null ? void 0 : o.data) !=
                        null
                        ? r
                        : [],
                      n,
                    )
                    .then(function (e) {
                      return Object.fromEntries(
                        Object.entries(
                          babelHelpers.extends({}, t, {
                            instagram_accounts: e,
                            instagram_business_account:
                              t.instagram_business_account,
                          }),
                        ).filter(function (e) {
                          var t = e[0],
                            n = e[1];
                          return n !== null;
                        }),
                      );
                    });
                }),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (l.loadInstagramAccountsWithIBTA = function (o, a) {
            if (o.length === 0) return (e || (e = n("Promise"))).resolve(d);
            var t = o.map(function (e) {
              return r("AdsInstagramBackedThreadsAccountDataManager").loadFor(
                e.id_v2,
                a,
              );
            });
            return (e || (e = n("Promise"))).all(t).then(function (e) {
              var t = o.map(function (t, n) {
                return r(
                  "AdsInstagramBackedThreadsAccountDataManager",
                ).mergeInstagramAccountDataWithIBTA(t, e[n]);
              });
              return { data: t };
            });
          }),
          (l.getFields = function (t) {
            return [
              o("AdsDataManagerApiUtils").buildParamsForEdge(
                "instagram_accounts",
                { adgroupID: t, pageFields: u, limit: 1 },
              ),
              o("AdsDataManagerApiUtils").buildParamsForEdge(
                "page_backed_instagram_accounts",
                { adgroupID: t, pageFields: u, limit: 1 },
              ),
              o("AdsDataManagerApiUtils").buildParamsForEdge(
                "instagram_business_account",
                { pageFields: c },
              ),
            ];
          }),
          (l.__onBatchLoaded = function (t) {
            r("AdsInstagramAccountPageBatchLoadedDataAction").dispatch(
              { specs: t },
              {
                line: "191",
                module: "AdsPageInstagramAccountDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (l.__onBatchLoadError = function (t) {
            r("AdsInstagramAccountPageBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "197",
                module: "AdsPageInstagramAccountDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (l.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Page Instagram profiles");
          }),
          a
        );
      })(r("AdsBaseDataManager")),
      p = new m();
    l.default = p;
  },
  226,
);
