__d(
  "AdsCPASAdsManagerDataLoader",
  [
    "AdsGraphAPI",
    "AdsUEditorCollaborativeAdsStrings",
    "AsyncTypedRequest",
    "CatalogUnreadableIDCache",
    "CurrentBusinessUser",
    "FBLogger",
    "Promise",
    "XBusinessCPASCustomConversionDataFetchingAsyncControllerRouteBuilder",
    "XSignalsRecommendPixelForWCAControllerRouteBuilder",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("product_set", e)
        .batched()
        .get({ fields: ["product_catalog"] })
        .then(function (e) {
          var t = e.product_catalog;
          return t.id;
        });
    }
    function u(e) {
      return o("CatalogUnreadableIDCache").guardCatalogRead(e, function () {
        return o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .batched()
          .get({ fields: ["is_catalog_segment"] })
          .then(function (e) {
            var t = e.is_catalog_segment;
            return t;
          });
      });
    }
    function c(e) {
      var t = String(e).replace(/^act_/, "");
      return (
        String(e) !== t &&
          r("FBLogger")("CPAS").mustfix(
            "account ID check received account ID with act_ prefix",
          ),
        o("AdsGraphAPI")
          .get(i.id)
          .adaccount(t)
          .get({ fields: ["is_collaborative_ads_ad_account"] })
          .then(function (e) {
            var t = e.is_collaborative_ads_ad_account;
            return t;
          })
      );
    }
    function d(e) {
      return new (r("AsyncTypedRequest"))(
        r("XSignalsRecommendPixelForWCAControllerRouteBuilder").buildUri(
          babelHelpers.extends(
            { pixel_ids: e.pixelIds },
            e.fallbackToLA != null ? { fall_back_to_la: e.fallbackToLA } : {},
          ),
        ),
      )
        .setMethod("GET")
        .setReadOnly(!0)
        .promisePayload();
    }
    function m(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("business", e)
        .get({ fields: ["name"] })
        .then(function (e) {
          var t = e.name;
          return t;
        });
    }
    function p(t) {
      var o = t.adAccountID,
        a = t.businessID;
      return a == null
        ? (e || (e = n("Promise"))).resolve({ customConversions: [] })
        : new (r("AsyncTypedRequest"))(
            r(
              "XBusinessCPASCustomConversionDataFetchingAsyncControllerRouteBuilder",
            ).buildUri({ business_id: a, act_account_id: o }),
          )
            .setMethod("GET")
            .setReadOnly(!0)
            .promisePayload();
    }
    function _(e) {
      var t = e.adGroupID,
        n = e.agencyBusinessID,
        r = e.productCatalogID;
      return o("CatalogUnreadableIDCache")
        .guardCatalogRead(r, function () {
          return o("AdsGraphAPI")
            .get(i.id)
            .object("product_catalog", r)
            .get({
              fields: [
                "agency_cpas_lsb_ad_group_image_bank." +
                  ("agency_business_id(" + n + ").") +
                  ("ad_group_id(" + t + "){backup_images}"),
              ],
            })
            .then(function (e) {
              var t,
                n,
                r,
                o =
                  (t = e.agency_cpas_lsb_ad_group_image_bank) != null
                    ? t
                    : null;
              if (o == null) return null;
              var a = o.id,
                i = (n = o.backup_images) == null ? void 0 : n.data,
                l =
                  (r =
                    i == null
                      ? void 0
                      : i.map(function (e) {
                          return e.image_url;
                        })) != null
                    ? r
                    : [];
              return { id: a, imageUrls: l };
            });
        })
        .catch(function () {
          return null;
        });
    }
    function f(e) {
      var t = e.agencyBusinessID,
        n = e.productCatalogID;
      return o("CatalogUnreadableIDCache")
        .guardCatalogRead(n, function () {
          return o("AdsGraphAPI")
            .get(i.id)
            .object("product_catalog", n)
            .get({
              fields: [
                "agency_collaborative_ads_share_settings." +
                  ("agency_business_id(" + t + "){image_bank_usage_enabled}"),
              ],
            })
            .then(function (e) {
              var t,
                n =
                  (t = e.agency_collaborative_ads_share_settings) != null
                    ? t
                    : null;
              return n == null
                ? null
                : n != null
                  ? n.image_bank_usage_enabled
                  : null;
            });
        })
        .catch(function () {
          return null;
        });
    }
    function g(e) {
      var t = e.adgroupID,
        n = e.agencyBusinessID,
        a = e.backupImageUrls,
        l = e.onSuccessCallback,
        s = e.productCatalogID;
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", s)
          .edge("cpas_lsb_image_bank")
          .post({
            agency_business_id: n,
            ad_group_id: t,
            backup_image_urls: a,
          }),
        function (e) {
          l != null && l(e.id);
        },
        function (e) {},
      );
    }
    function h(e) {
      var t = e.backupImageUrls,
        n = e.imageBankID,
        a = e.onSuccessCallback;
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("cpas_lsb_image_bank", n)
          .post({ backup_image_urls: t }),
        function (e) {
          a != null && a();
        },
        function (e) {},
      );
    }
    function y(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e.account_id)
        .edge("collaborative_ads_partner_businesses")
        .get({
          fields: [
            "dedicated_partner_business_info",
            "dedicated_partners_business_info",
            "collaborative_ads_partner_businesses_info",
          ],
          business_id: r("CurrentBusinessUser").business_id,
        })
        .then(function (t) {
          var n,
            a,
            i = t.data[0],
            l =
              (n =
                i == null
                  ? void 0
                  : i.collaborative_ads_partner_businesses_info) != null
                ? n
                : [],
            s = i == null ? void 0 : i.dedicated_partner_business_info,
            u =
              (a = i == null ? void 0 : i.dedicated_partners_business_info) !=
              null
                ? a
                : [],
            c = s == null || r("gkx")("7973"),
            d =
              s != null
                ? {
                    businessID: s.id,
                    businessName: s.name,
                    adAccountID: e.account_id,
                    adAccountName: e.name,
                    isDisabled: !1,
                    disabledMessage: null,
                  }
                : null,
            m =
              u != null
                ? u.map(function (t) {
                    return {
                      businessID: t.id,
                      businessName: t.name,
                      adAccountID: e.account_id,
                      adAccountName: e.name,
                      isDisabled: !1,
                      disabledMessage: null,
                    };
                  })
                : null,
            p = m
              ? new Set(
                  m.map(function (e) {
                    return e.businessID;
                  }),
                )
              : new Set(),
            _ = l
              .filter(function (e) {
                return !p.has(e.id);
              })
              .map(function (e) {
                return {
                  businessID: e.id,
                  businessName: e.name,
                  adAccountID: null,
                  adAccountName: null,
                  isDisabled: !c,
                  disabledMessage: c
                    ? null
                    : o("AdsUEditorCollaborativeAdsStrings")
                        .DISABLE_MESSAGE_FOR_PARTNER_WITH_NO_AD_ACCOUNT,
                };
              });
          return (
            m != null && m.length > 0 ? _.push.apply(_, m) : d && _.push(d),
            { dedicatedPartner: d, partnerList: _ }
          );
        });
    }
    ((l.getAncestorCatalogID = s),
      (l.checkIfCPASCatalogSegment = u),
      (l.checkIfCPASAdAccount = c),
      (l.getPixelRecommendation = d),
      (l.getBusinessName = m),
      (l.getSharedCustomConversions = p),
      (l.getCPASLsbImageBank = _),
      (l.fetchLSBImageBankConfigure = f),
      (l.createCPASLsbImageBank = g),
      (l.updateBackupImagesforCPASLsbImageBank = h),
      (l.getCollaborativeAdsPartnerBusinesses = y));
  },
  98,
);
