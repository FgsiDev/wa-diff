__d(
  "AdsUEditorCampaignRFAddNewTimeBasedAdRotationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignRFAddNewTimeBasedAdRotationActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "DateConsts",
    "DateTime",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.endDate,
              a = t.timezoneID;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t,
                i = e.time_based_ad_rotation_intervals;
              if (!i || i.size === 0) return e;
              var l = i.slice(),
                s = i.last(),
                u = (n - s) / o("DateConsts").SEC_PER_DAY,
                c = s + Math.ceil(u / 2) * o("DateConsts").SEC_PER_DAY,
                d = new (r("DateTime"))(c, a);
              d.getHours() === 1
                ? (c -= o("DateConsts").SEC_PER_HOUR)
                : d.getHours() === 23 && (c += o("DateConsts").SEC_PER_HOUR);
              var m =
                  (t = e.time_based_ad_rotation_id_blocks) != null
                    ? t
                    : r("immutable").List(),
                p = m.slice();
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).time_based_ad_rotation_intervals.set(l.push(c)),
                r(
                  "AdsCampaignRecordAccessors",
                ).time_based_ad_rotation_id_blocks.set(p.push(m.last())),
              )(e);
            });
          },
          o("AdsUEditorCampaignRFAddNewTimeBasedAdRotationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
