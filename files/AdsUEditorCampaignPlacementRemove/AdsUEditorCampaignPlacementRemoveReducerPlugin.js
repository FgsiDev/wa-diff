__d(
  "AdsUEditorCampaignPlacementRemoveReducerPlugin",
  [
    "AdsAPIDevicePlatform",
    "AdsMutators",
    "AdsPlacementPluginList",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {},
        function (e, t) {
          var n = t.campaignIDs,
            r = t.eligibilityInformation;
          return o("AdsMutators").mutateEach(e, n, function (e) {
            return o("AdsPlacementReducerUtils").updatePlacementSpec(s(e, r));
          });
        },
        r("AdsUEditorCampaignPlacementRemoveActionFlux").actionType,
      ),
    };
    function s(e, t) {
      var n = e,
        a = n.targeting.publisher_platforms,
        i = n.targeting.facebook_positions,
        l = n.targeting.instagram_positions,
        s = n.targeting.messenger_positions,
        u = n.targeting.audience_network_positions,
        c = n.targeting.whatsapp_positions,
        d = babelHelpers.extends({}, t, {
          spec: {
            publisher_platforms: a ? a.toJS() : [],
            facebook_positions: i ? i.toJS() : [],
            instagram_positions: l ? l.toJS() : [],
            messenger_positions: s ? s.toJS() : [],
            audience_network_positions: u ? u.toJS() : [],
            whatsapp_positions: c ? c.toJS() : [],
            device_platforms: [r("AdsAPIDevicePlatform").MOBILE],
          },
        }),
        m = o("AdsPlacementPluginList")
          .getPositions(t)
          .some(function (e) {
            return e.isActive(d.spec) && !e.getIneligibilityReason(d);
          });
      return (
        m || (n = o("AdsPlacementReducerUtils").clearUpMobileSettings(n)),
        (n = o("AdsUEditorCampaignMutators").updateBundledSettings(n, t)),
        n
      );
    }
    var u = e;
    l.default = u;
  },
  98,
);
