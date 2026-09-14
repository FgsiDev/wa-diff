__d(
  "AdsPECreateLoggerHelper",
  [
    "AdsAdgroupCombinedStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupUtils",
    "AdsCampaignCombinedStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupCombinedStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsMessageMarketingLiquidityLoggingUtils",
    "AdsPELoggerUtils",
    "AdsSmartPromotionTypeUtils",
    "Promise",
    "asyncToGeneratorRuntime",
    "distinctArray",
    "filterSet",
    "isValidID",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return babelHelpers.extends(
        {},
        o("AdsPELoggerUtils").getObjectCountsFromAction({
          adgroupIDs: e.adgroupIDs,
          campaignGroupIDs: e.campaignGroupIDs,
          campaignIDs: e.campaignIDs,
        }),
        {
          object_creation_source: e.creationSource,
          created_in_cf: e.createdInCF,
        },
      );
    }
    function c(e) {
      var t = e.values.get("originalAdObjectID");
      return t ? t.newValue : null;
    }
    function d(e, t, n, a, i, l, s, u) {
      var d;
      return {
        adgroup_id: u == null ? void 0 : u.id,
        buying_type: l.buying_type,
        campaign_group_id: l.id,
        campaign_id: s == null ? void 0 : s.id,
        created_in_cf: n,
        dco_optimization_type:
          u == null ||
          (d = u.creative) == null ||
          (d = d.asset_feed_spec) == null
            ? void 0
            : d.optimization_type,
        draft_id: i.draftID,
        event_source: t,
        fragment_id: i.fragmentID,
        media_format: u && o("AdsAdgroupUtils").getMediaFormat(u),
        mockup_id: a,
        object_creation_source: e,
        objective: l.objective,
        optimization_goal: s == null ? void 0 : s.optimization_goal,
        original_ad_object_id: c(i),
        is_campaign_group_budget: !!l.daily_budget || !!l.lifetime_budget,
        smart_promotion_type: r("AdsSmartPromotionTypeUtils")(
          l.smart_promotion_type,
        ),
        campaign_destination_type: s == null ? void 0 : s.destination_type,
        campaign_bid_strategy: l.bid_strategy
          ? l.bid_strategy
          : s == null
            ? void 0
            : s.bid_strategy,
      };
    }
    function m(e, t, n, r, o) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, o, a, i) {
            if (!e || !e.length) return [];
            var l = yield y(
                e,
                n("AdsCampaignGroupDraftFragmentStore"),
                r("AdsCampaignGroupCombinedStore"),
              ),
              s = [];
            return (
              l.forEach(function (e) {
                var n = e.adObject,
                  r = e.fragment;
                s.push(d(t, a, !!o, i, r, n));
              }),
              s
            );
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            if (!e || !e.length) return [];
            var u = yield y(
                e,
                n("AdsCampaignDraftFragmentStore"),
                r("AdsCampaignCombinedStore"),
              ),
              c = (s || (s = r("distinctArray")))(
                u.map(function (e) {
                  var t = e.adObject;
                  return t.campaign_id;
                }),
              ),
              m = yield r("promiseStoreGet").all(
                r("AdsCampaignGroupCombinedStore"),
                function () {
                  return r("AdsCampaignGroupCombinedStore").getAllObjects(
                    c.filter(r("isValidID")),
                  );
                },
              ),
              p = [];
            return (
              u.forEach(function (e) {
                var n,
                  r,
                  s = e.adObject,
                  u = e.fragment,
                  c = m.get(s.campaign_id);
                if (c) {
                  var _ =
                    (n = o(
                      "AdsMessageMarketingLiquidityLoggingUtils",
                    ).getMessageMarketingLiquidityCampaignFragmentCreatedDataForLogging(
                      c,
                      s,
                    )) != null
                      ? n
                      : {};
                  p.push(
                    babelHelpers.extends({}, d(t, i, !!a, l, u, c, s), {
                      subsequent_data: JSON.stringify(
                        babelHelpers.extends(
                          {
                            whatsAppBusinessPhoneNumberID:
                              s == null || (r = s.promoted_object) == null
                                ? void 0
                                : r.whats_app_business_phone_number_id,
                          },
                          _,
                        ),
                      ),
                    }),
                  );
                }
              }),
              p
            );
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, o, a, i, l) {
            if (!t || !t.length) return [];
            var s = yield y(
                t,
                n("AdsAdgroupDraftFragmentStore"),
                r("AdsAdgroupCombinedStore"),
              ),
              u = new Set(),
              c = new Set();
            s.forEach(function (e) {
              var t = e.adObject;
              (u.add(t.adset_id), c.add(t.campaign_id));
            });
            var m = yield (e || (e = n("Promise"))).all([
                r("promiseStoreGet").all(
                  r("AdsCampaignGroupCombinedStore"),
                  function () {
                    return r("AdsCampaignGroupCombinedStore").getAllObjects(
                      r("filterSet")(c, r("isValidID")),
                    );
                  },
                ),
                r("promiseStoreGet").all(
                  r("AdsCampaignCombinedStore"),
                  function () {
                    return r("AdsCampaignCombinedStore").getAllObjects(
                      r("filterSet")(u, r("isValidID")),
                    );
                  },
                ),
              ]),
              p = m[0],
              _ = m[1],
              f = [];
            return (
              s.forEach(function (e) {
                var t = e.adObject,
                  n = e.fragment,
                  r = p.get(t.campaign_id),
                  s = _.get(t.adset_id);
                !r || !s || f.push(d(o, i, !!a, l, n, r, s, t));
              }),
              f
            );
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o, a) {
          var i = r("promiseStoreGet").all(o, function () {
              return o.getAll(t);
            }),
            l = r("promiseStoreGet").all(a, function () {
              return a.getAllObjects(t.filter(r("isValidID")));
            }),
            s = yield (e || (e = n("Promise"))).all([i, l]),
            u = s[0],
            c = s[1],
            d = [];
          for (var m of c.entries()) {
            var p = m[0],
              _ = m[1],
              f = u.get(p);
            _ == null ||
              !f ||
              d.push({ adObject: _, adObjectID: p, fragment: f });
          }
          return d;
        })),
        C.apply(this, arguments)
      );
    }
    ((l.getCreateCountsData = u),
      (l.getNewCampaignGroupFragmentData = m),
      (l.getNewCampaignFragmentData = _),
      (l.getNewAdgroupFragmentData = g));
  },
  98,
);
