__d(
  "AdsUEditorAdgroupUpdateCreativeAudiencePairingPersonaReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUpdateCreativeAudiencePairingPersonaDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                t.ageMin != null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative_audience_pairing_persona.age_min.set(t.ageMin, n)),
                t.ageMax != null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative_audience_pairing_persona.age_max.set(t.ageMax, n)),
                t.genders != null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative_audience_pairing_persona.genders.set(
                    r("immutable").List(t.genders),
                    n,
                  )),
                n
              );
            });
          },
          o(
            "AdsUEditorAdgroupUpdateCreativeAudiencePairingPersonaDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
