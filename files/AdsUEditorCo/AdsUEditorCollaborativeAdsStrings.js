__d(
  "AdsUEditorCollaborativeAdsStrings",
  ["fbt", "isStringNullOrEmpty", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      return s._(
        /*BTDS*/ "{=m0} is partnered with your ad account name {=m2} Switch to that account to use Collaborative Ads.",
        [
          s._implicitParam(
            "=m0",
            u.jsx("strong", {
              children: s._(/*BTDS*/ "{Merchant name}", [
                s._param("Merchant name", e),
              ]),
            }),
          ),
          s._implicitParam(
            "=m2",
            u.jsx("strong", {
              children: s._(
                /*BTDS*/ "{Producer ad account id}\/ {Producer ad account name}",
                [
                  s._param("Producer ad account id", t),
                  s._param("Producer ad account name", n),
                ],
              ),
            }),
          ),
        ],
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = s._(
        /*BTDS*/ "Your current ad account is already connected to a partner. Switch to an account that isn't already connected to a partner.",
      ),
      m = s._(
        /*BTDS*/ "This section can't be changed because the campaign is published.",
      ),
      p = s._(
        /*BTDS*/ "Collaborative Ads are only available with the brand awareness, reach, traffic, catalog sales and conversions objectives.",
      ),
      _ = s._(
        /*BTDS*/ "Collaborative Ads are only available with the awareness, traffic and sales objectives.",
      ),
      f = s._(/*BTDS*/ "Catalog segment"),
      g = s._(/*BTDS*/ "Select a catalog segment"),
      h = s._(/*BTDS*/ "Collaborative Ads"),
      y = s._(
        /*BTDS*/ "Turn on Collaborative Ads when creating a campaign that uses a partner\u2019s assets.",
      ),
      C = function (t) {
        return s._(
          /*BTDS*/ "The ad account you are currently using will permanently be associated with {partner_name}. This means that this ad account will only be able to use assets shared by {partner_name_second}.",
          [
            s._param("partner_name", t != null && t != "" ? t : "--"),
            s._param("partner_name_second", t != null && t != "" ? t : "--"),
          ],
        );
      },
      b = function (t) {
        return s._(
          /*BTDS*/ "Your Collaborative Ads ad account is associated with {partner_name}. To create campaigns with a different partner or to create a non-Collaborative Ads campaign, switch accounts.",
          [s._param("partner_name", r("isStringNullOrEmpty")(t) ? "--" : t)],
        );
      },
      v = s._(
        /*BTDS*/ "Catalog sales can only be promoted in Collaborative Ads campaigns associated with this ad account. To create a non-Collaborative Ads campaign, disable the catalog sales option.",
      ),
      S = s._(
        /*BTDS*/ "Create campaigns that generate awareness and drive traffic or sales of your products on a partner\u2019s website or app.",
      ),
      R = s._(
        /*BTDS*/ "Some performance data will be missing if you continue to run a non-Collaborative Ads campaign with a Collaborative Ads ad account. Switch accounts or turn on Collaborative Ads for this campaign.",
      ),
      L = s._(
        /*BTDS*/ "Select a partner to drive sales of your products on their website or app.",
      ),
      E = s._(
        /*BTDS*/ "This is a local commerce & delivery catalog and is no longer supported.",
      ),
      k = s._(/*BTDS*/ "Do not use a catalog segment"),
      I = s._(/*BTDS*/ "A catalog segment is needed to run Collaborative Ads."),
      T = s._(/*BTDS*/ "Retail partner");
    ((l.getDisableMessage = c),
      (l.DISABLE_MESSAGE_FOR_PARTNER_WITH_NO_AD_ACCOUNT = d),
      (l.CANNOT_MODIFY_PUBLISHED_CAMPAIGN_FBT = m),
      (l.CURRENT_SELECTED_OBJECTIVE_IS_NOT_SUPPORTED_CAFF_CF_FBT = p),
      (l.CURRENT_SELECTED_OBJECTIVE_IS_NOT_SUPPORTED_ODAX_CAFF_FBT = _),
      (l.CATALOG_SEGMENT_SELECTOR_FBT = f),
      (l.CATALOG_SEGMENT_SELECTOR_PLACEHOLDER_FBT = g),
      (l.COLLABORATIVE_ADS_TITLE = h),
      (l.USE_COLLABORATIVE_ADS_TOOLTIP = y),
      (l.DEDICATED_AD_ACCOUNT_NOTICE_TEXT = C),
      (l.DEDICATED_AD_ACCOUNT_EXPLANATION_TEXT = b),
      (l.ODAX_CATALOG_TOGGLE_LOCK_EXPLANATION_TEXT = v),
      (l.COLLAB_ADS_ODAX_CAFF_EXPLAIN_TEXT = S),
      (l.COLLAB_ADS_MISSING_PERFORMANCE_DATA_WARNING = R),
      (l.COLLAB_ADS_CREATION_PACKAGE_EXPLAIN_TEXT = L),
      (l.DEPRECATE_LSB_TEXT = E),
      (l.DO_NOT_USE_CATALOG_SEGMENT_LABEL = k),
      (l.CATALOG_SEGMENT_REQUIRED_FOR_CPAS_MESSAGE = I),
      (l.RETAILER_PARTNER_LABEL = T));
  },
  226,
);
