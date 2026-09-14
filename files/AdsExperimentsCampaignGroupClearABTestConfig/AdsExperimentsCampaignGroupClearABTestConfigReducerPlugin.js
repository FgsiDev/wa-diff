__d(
  "AdsExperimentsCampaignGroupClearABTestConfigReducerPlugin",
  [
    "AdsDataAtom",
    "AdsExperimentsCampaignGroupClearABTestConfigActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupSetFreeformTestAction",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorHostIDs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(
              t,
              n.campaignGroupIDs,
              function (t) {
                var o,
                  a,
                  l,
                  s,
                  u =
                    (o = n.campaignGroupIDToChildrenAdgroups.get(t.id)) != null
                      ? o
                      : [],
                  c = u.map(function (e) {
                    return e.id;
                  }),
                  d =
                    (a = (l = t.ab_test_config) == null ? void 0 : l.toJS()) !=
                    null
                      ? a
                      : {};
                if (
                  t.is_opted_into_experiments === !0 &&
                  u.length > 0 &&
                  (d == null || (s = d.creative_multicell_test) == null
                    ? void 0
                    : s.study_id) === u[0].include_in_ad_study_id
                ) {
                  var m,
                    p,
                    _,
                    f =
                      (m =
                        (p = d.creative_multicell_test) == null ||
                        (p = p.adgroup_ids) == null
                          ? void 0
                          : p.filter(function (e) {
                              return !c.includes(e);
                            })) != null
                        ? m
                        : [];
                  return (
                    f.length > 0 &&
                      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                        function () {
                          r("AdsUEditorAdgroupSetFreeformTestAction").dispatch(
                            {
                              studyCellIDs: null,
                              studyID: null,
                              adgroupIDs: f,
                              hostID: r("AdsUEditorHostIDs").EDITING,
                            },
                            {
                              line: "54",
                              module:
                                "AdsExperimentsCampaignGroupClearABTestConfigReducerPlugin.js",
                              moduleID: i.id,
                            },
                          );
                        },
                      ),
                    t.set(
                      "ab_test_config",
                      babelHelpers.extends({}, d, {
                        creative_multicell_test: babelHelpers.extends(
                          {},
                          (_ = d.creative_multicell_test) != null ? _ : {},
                          { adgroup_ids: [], study_id: null },
                        ),
                      }),
                    )
                  );
                }
                return t;
              },
            );
          },
          r("AdsExperimentsCampaignGroupClearABTestConfigActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
