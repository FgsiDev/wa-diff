__d(
  "setMessageMarketingPlacementAndDownstreamSettingsMutator",
  [
    "AdsAdgroupStoreUtils",
    "AdsDataAtom",
    "cr:38060",
    "promiseDone",
    "setMessageMarketingPlacementMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, l) {
      var s,
        u,
        c =
          ((s = t.targeting.subscriber_universe) == null ||
          (s = s.whatsapp_subscriber_pool) == null
            ? void 0
            : s.id) != null,
        d =
          (u = t.promoted_object) == null
            ? void 0
            : u.whats_app_business_phone_number_id;
      return !c && d == null
        ? t
        : ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            r("promiseDone")(
              o("AdsAdgroupStoreUtils").loadAdgroupIDsInCampaigns([t.id]),
              function (e) {
                n("cr:38060").dispatch(
                  { adgroupIDs: e, hostID: a },
                  {
                    line: "44",
                    module:
                      "setMessageMarketingPlacementAndDownstreamSettingsMutator.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          r("setMessageMarketingPlacementMutator")(t, l));
    }
    l.default = s;
  },
  98,
);
