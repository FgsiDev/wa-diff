__d(
  "AdsUEditorAdgroupSetAppExperienceSpecAdditionalSourceEnrollStatusReducerPlugin",
  [
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAppExperiencesContainerMutators",
    "AdsAppExperiencesUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAppExperienceSpecAdditionalSourceEnrollStatusActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "details_to_ad_layout":
          return o(
            "AdsAppExperiencesUtils",
          ).isAppExperiencesM3MoreAdSourcesEnabled(!0)
            ? r("AdsAdgroupRecordAccessors").creative.app_experience_spec
                .details_to_ad_layout
            : null;
        case "reveal_details":
          return r("AdsAdgroupRecordAccessors").creative.app_experience_spec
            .reveal_details;
        case "show_spotlights":
          return r("AdsAdgroupRecordAccessors").creative.app_experience_spec
            .show_spotlights;
        default:
          return null;
      }
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a = t,
                i = n.sourceStatesByExperience;
              for (var l of Object.keys(i)) {
                var s = i[l];
                if (s != null) {
                  var u = e(l);
                  if (u != null) {
                    var c = function (t) {
                      var e, n;
                      if (t === "website_summaries") return 1;
                      var i = s[t] ? "OPT_IN" : "OPT_OUT",
                        l = u.data_sources.get(a),
                        c =
                          (e =
                            l == null
                              ? void 0
                              : l.findIndex(function (e) {
                                  return e.get("feature_name") === t;
                                })) != null
                            ? e
                            : -1,
                        d =
                          c >= 0
                            ? l == null || (n = l.get(c)) == null
                              ? void 0
                              : n.get("enroll_status")
                            : null;
                      if (d !== i) {
                        var m = r("immutable").fromJS({
                            action_metadata: { type: "MANUAL" },
                            enroll_status: i,
                            feature_name: t,
                          }),
                          p =
                            c >= 0 && l != null
                              ? l.set(c, m)
                              : (l != null ? l : r("immutable").List()).push(m);
                        a = u.data_sources.set(p)(a);
                      }
                      i === "OPT_IN" &&
                        (a = o(
                          "AdsAdgroupConnectedSourcesMutators",
                        ).upwardGrantConnectedSourceConsentMutator(a, t));
                    };
                    for (var d of Object.keys(s)) c(d);
                    if (
                      l === "reveal_details" &&
                      o(
                        "AdsAppExperiencesUtils",
                      ).isAppExperiencesRevealDetailsWriteEnabled(!0)
                    ) {
                      var m;
                      a = o(
                        "AdsAppExperiencesContainerMutators",
                      ).mutateAdgroupForRevealDetailsContainer(
                        a,
                        (m = n.manuallyToggledByExperience) == null
                          ? void 0
                          : m[l],
                      );
                    }
                  }
                }
              }
              return a;
            });
          },
          o(
            "AdsUEditorAdgroupSetAppExperienceSpecAdditionalSourceEnrollStatusActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
