__d(
  "AdsUEditorAdgroupPartnershipAdsSourcedTestimonialsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupPartnershipAdsSourcedTestimonialsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignPartnershipAdsSourcedContentActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.enroll_status.get(
                e,
              );
              return t.briefID === null && n === "OPT_IN"
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.enroll_status.set(
                    "OPT_OUT",
                    e,
                  )
                : t.shouldEnableTestimonials != null
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.degrees_of_freedom_spec.creative_features_spec.enable_ncs_testimonials.enroll_status.set(
                      t.shouldEnableTestimonials ? "OPT_IN" : "OPT_OUT",
                      e,
                    )
                  : e;
            });
          },
          [
            r("AdsUEditorAdgroupPartnershipAdsSourcedTestimonialsActionFlux")
              .actionType,
            r("AdsUEditorCampaignPartnershipAdsSourcedContentActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
