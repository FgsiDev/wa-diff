__d(
  "AdsUEditorAdgroupWamoIdentityLoadedReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPageUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupWamoIdentityLoadedActionFlux",
    "adsConvertAdObjectRecordToPlainJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t, n) {
            var a = t.adgroupIDs,
              i = t.identityID,
              l = t.identityType,
              s = l === "PAGE";
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t,
                n = r("adsConvertAdObjectRecordToPlainJS")(e),
                a =
                  n == null ||
                  (t = n.creative) == null ||
                  (t = t.wamo_whatsapp_identity_spec) == null
                    ? void 0
                    : t.wamo_whatsapp_identity_id;
              if (i == null)
                return a == null
                  ? e
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.delete(
                      e,
                    );
              if (s) {
                var l = o("AdsPageUtils").getPageID(n);
                return l != null
                  ? a === l
                    ? e
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.set(
                        l,
                        e,
                      )
                  : a == null
                    ? e
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.delete(
                        e,
                      );
              }
              return a === i
                ? e
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.wamo_whatsapp_identity_spec.wamo_whatsapp_identity_id.set(
                    i,
                    e,
                  );
            });
          },
          o("AdsUEditorAdgroupWamoIdentityLoadedActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
