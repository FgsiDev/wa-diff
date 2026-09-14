__d(
  "AdsDeliveryOmnichannelSelectors",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsBulkValueUtils",
    "AdsDeliveryOmnichannelSelectorsUtils",
    "AdsPromotedObjectOmnichannelAppUtils",
    "AdsPromotedObjectOmnichannelUtils",
    "AdsPromotedObjectTypeUIProvider",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupsAreASASelectors",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorSelectorUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAreSomeCampaignGroupsBwISelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "isAccountEligibleForThreeCOL2AdEx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (s = r("adsCreateSelector"))(
        [
          (c = r("adsGetUniformValueSelector"))(
            (e = o("AdsUEditorSelectors")).campaignGroup.bulkByAccessorToJS(
              function (e) {
                return e.objective;
              },
            ),
          ),
          o("AdsUEditorCampaignSelectors").campaigns.some(
            o("AdsAssetFeedSimpleFieldCheckUtils").isCarteDCOCampaign,
          ),
        ],
        function (t, n) {
          return (
            (t === r("AdsAPIObjectives").CONVERSIONS ||
              t === r("AdsAPIObjectives").OUTCOME_SALES) &&
            !n
          );
        },
        { name: i.id + ".canUseOmnichannelSelector" },
      ),
      m = e.campaign.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.promoted_object) == null ||
          (t = t.omnichannel_object) == null
          ? void 0
          : t.pixel;
      }),
      p = e.campaign.bulkByAccessorToJS(function (e) {
        var t;
        return (t = e.promoted_object) == null ||
          (t = t.omnichannel_object) == null
          ? void 0
          : t.onsite;
      }),
      _ = s(
        [c(m)],
        function (t) {
          return t == null ? void 0 : t.at(0);
        },
        { name: i.id + ".selectedPixelObjectSelector" },
      ),
      f = s(
        [_],
        function (t) {
          return t == null ? void 0 : t.custom_event_type;
        },
        { name: i.id + ".selectedEventSelector" },
      ),
      g = s(
        [_],
        function (t) {
          return t == null ? void 0 : t.pixel_id;
        },
        { name: i.id + ".selectedPixelIDSelector" },
      ),
      h = s(
        [(u = r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"))],
        function (t) {
          return y(t);
        },
        { name: i.id + ".someUsingOmnichannel" },
      );
    function y(e) {
      return e.getValues().some(function (e) {
        return o(
          "AdsPromotedObjectOmnichannelUtils",
        ).OMNICHANNEL_PROMOTED_OBJECT_TYPES.includes(e);
      });
    }
    var C = s(
        [u],
        function (t) {
          return o("AdsBulkValueUtils")
            .parallelIterator(
              function (e) {
                var t = e[0];
                return t === r("AdsPromotedObjectTypes").WEB_AND_APP;
              },
              [t],
            )
            .getValues()
            .includes(!0);
        },
        { name: i.id + ".someUsingWebsiteAndAppSelector" },
      ),
      b = s(
        [
          e.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.bid_strategy;
          }),
          c(
            e.campaignGroup.bulkByAccessorToJS(function (e) {
              return e.objective;
            }),
            null,
          ),
          o("AdsUEditorCampaignGroupsAreASASelectors")
            .areSomeCampaignGroupsASASelector,
        ],
        function (t, n, r) {
          return o("AdsDeliveryOmnichannelSelectorsUtils").isValidBidStrategy(
            t,
            n,
            r,
          );
        },
        { name: i.id + ".isValidBidStrategySelector" },
      ),
      v = s(
        [
          h,
          d,
          r("adsUEditorSelectedCampaignIDsSelector"),
          o("AdsUEditorCampaignSelectors").campaigns.some(
            o("AdsAssetFeedSimpleFieldCheckUtils").isCarteDCOCampaign,
          ),
          b,
          r("adsUEditorAreSomeCampaignGroupsBwISelector"),
          c(
            e.campaignGroup.bulkByAccessorToJS(function (e) {
              return e.objective;
            }),
          ),
        ],
        function (t, n, a, i, l, s, u) {
          var e = a.length === 1,
            c =
              u === r("AdsAPIObjectives").OUTCOME_SALES ||
              u === r("AdsAPIObjectives").WEBSITE_CONVERSIONS;
          return (
            (!s &&
              !i &&
              l &&
              (t ||
                ((e ||
                  (o("isAccountEligibleForThreeCOL2AdEx").is3coDogfoodFix() &&
                    c)) &&
                  n))) ||
            (e &&
              o(
                "isAccountEligibleForThreeCOL2AdEx",
              ).isAccountEligibleForThreeCOL2AdEx(
                u != null ? u : r("AdsAPIObjectives").NONE,
              ))
          );
        },
        {
          name: i.id + ".shouldShowOmnichannelPromotedObjectTypeOptionSelector",
        },
      ),
      S = s(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          r("AdsPromotedObjectTypeUIProvider").toFluxSelector(),
        ],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, t) {
          return e.map(function (e) {
            var n = e.campaign,
              r = e.campaignGroup,
              a = r.objective,
              i = t.get(n.id);
            return o("AdsAPICampaignRecordUtils").getPromotedObjectType(
              a,
              n,
              i,
            );
          });
        }),
        { name: i.id + ".adgroupPromotedObjectTypeSelector" },
      ),
      R = s(
        [S],
        function (t) {
          return t.getValues().some(function (e) {
            return o(
              "AdsPromotedObjectOmnichannelUtils",
            ).OMNICHANNEL_PROMOTED_OBJECT_TYPES.includes(e);
          });
        },
        { name: i.id + ".someUsingOmnichannelFromAdgroup" },
      ),
      L = s(
        [c(u, null)],
        function (t) {
          return (
            t != null &&
            o(
              "AdsPromotedObjectOmnichannelUtils",
            ).OMNICHANNEL_PROMOTED_OBJECT_TYPES.includes(t)
          );
        },
        { name: i.id + ".allUsingOmnichannelPromotedObjectTypeSelector" },
      ),
      E = s(
        [L],
        function (t) {
          return t;
        },
        { name: i.id + ".allUsingOmnichannel" },
      ),
      k = s(
        [c(u, null)],
        function (t) {
          return (
            t != null &&
            o(
              "AdsPromotedObjectOmnichannelAppUtils",
            ).OMNICHANNEL_IN_APP_DESTINATION_PROMOTED_OBJECT_TYPES.includes(t)
          );
        },
        {
          name:
            i.id +
            ".allUsingOmnichannelInAppDestinationPromotedObjectTypeSelector",
        },
      ),
      I = s(
        [k],
        function (t) {
          return t;
        },
        { name: i.id + ".allUsingOmnichannelInAppDestination" },
      ),
      T = s(
        [
          c(
            e.campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null ||
                (t = t.omnichannel_object) == null
                ? void 0
                : t.app;
            }),
            null,
          ),
        ],
        function (t) {
          return t == null ? void 0 : t.at(0);
        },
        { name: i.id + ".appObjectSelector" },
      ),
      D = s(
        [T],
        function (t) {
          return t == null ? void 0 : t.application_id;
        },
        { name: i.id + ".omnichannelAppIDSelector" },
      ),
      x = s(
        [T],
        function (t) {
          var e;
          return (e = t == null ? void 0 : t.object_store_urls) != null
            ? e
            : [];
        },
        { name: i.id + ".appUrlsSelector" },
      );
    ((l.bulkOnsiteObjectSelector = p),
      (l.selectedEventSelector = f),
      (l.selectedPixelIDSelector = g),
      (l.someUsingOmnichannel = h),
      (l.someUsingOmnichannelLogic = y),
      (l.someUsingWebsiteAndAppSelector = C),
      (l.isValidBidStrategySelector = b),
      (l.shouldShowOmnichannelPromotedObjectTypeOptionSelector = v),
      (l.adgroupPromotedObjectTypeSelector = S),
      (l.someUsingOmnichannelFromAdgroup = R),
      (l.allUsingOmnichannelPromotedObjectTypeSelector = L),
      (l.allUsingOmnichannel = E),
      (l.allUsingOmnichannelInAppDestinationPromotedObjectTypeSelector = k),
      (l.allUsingOmnichannelInAppDestination = I),
      (l.omnichannelAppIDSelector = D),
      (l.appUrlsSelector = x));
  },
  98,
);
