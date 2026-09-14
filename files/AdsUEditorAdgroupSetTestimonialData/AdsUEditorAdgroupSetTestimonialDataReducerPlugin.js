__d(
  "AdsUEditorAdgroupSetTestimonialDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetTestimonialDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.branded_content.testimonial.set(t.testimonial, e);
            });
          },
          r("AdsUEditorAdgroupSetTestimonialDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
