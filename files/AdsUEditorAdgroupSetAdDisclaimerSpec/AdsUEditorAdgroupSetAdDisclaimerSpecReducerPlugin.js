__d(
  "AdsUEditorAdgroupSetAdDisclaimerSpecReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAdDisclaimerSpecActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.adDisclaimer;
              if (n == null)
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.ad_disclaimer_spec.delete(e);
              var a = n.text,
                i = n.title,
                l = n.url;
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.ad_disclaimer_spec.title.set(i),
                a == null
                  ? r("AdsAdgroupRecordAccessors").creative.ad_disclaimer_spec
                      .text.delete
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.ad_disclaimer_spec.text.set(a),
                l == null
                  ? r("AdsAdgroupRecordAccessors").creative.ad_disclaimer_spec
                      .url.delete
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.ad_disclaimer_spec.url.set(l),
              )(e);
            });
          },
          o("AdsUEditorAdgroupSetAdDisclaimerSpecActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
