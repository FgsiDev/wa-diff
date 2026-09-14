__d(
  "AdsUEditorCampaignSetFrequencyControlSpecReducerUtils",
  ["AdsCampaignRecordAccessors", "AdsMutators", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.campaign,
        n = e.frequencyControlSpec,
        a = t.frequency_control_specs,
        i = r("immutable").fromJS({
          interval_days: n.interval_days,
          max_frequency: n.max_frequency,
        });
      return a == null
        ? t
        : o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").frequency_control_specs.set(
              a.map(function (e) {
                return e.merge(i);
              }),
            ),
            function (e) {
              return e;
            },
          )(t);
    }
    l.campaignSetFrequencyControlSpecs = e;
  },
  98,
);
