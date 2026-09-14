__d(
  "AdsUEditorAdgroupSetCallDestinationTypeReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupCallAdsConfigurationUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCallDestinationTypeActionFlux",
    "AdsUEditorCallDestinationTypeMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              a = t.callDestinationType,
              i = t.plugins,
              l = t.whatsAppNumber;
            return o("AdsMutators").mutateEach(e, n, function (e, t) {
              var n = e,
                s = i == null ? void 0 : i.get(t);
              e: {
                if (a === "PHONE") {
                  return (
                    (n = o(
                      "AdsUEditorAdgroupCallAdsConfigurationUtils",
                    ).clearPhoneNumber(e)),
                    o(
                      "AdsUEditorCallDestinationTypeMutators",
                    ).setCallDestinationType(n, a)
                  );
                  break e;
                }
                if (a === "WHATSAPP") {
                  return (
                    (n = o(
                      "AdsUEditorAdgroupCallAdsConfigurationUtils",
                    ).clearCallAdsConfiguration(e)),
                    s != null &&
                      (n = r("AdsAdgroupSemanticFields").phoneDataID.delete(
                        s,
                        n,
                      )),
                    o(
                      "AdsUEditorCallDestinationTypeMutators",
                    ).setWhatsAppCallDestinationWithWhatsAppNumber(n, l)
                  );
                  break e;
                }
                if (a === "MESSENGER" || a === "MESSENGER_AND_PHONE") {
                  return (
                    (n = o(
                      "AdsUEditorAdgroupCallAdsConfigurationUtils",
                    ).clearCallAdsConfiguration(e)),
                    s != null &&
                      (n = r("AdsAdgroupSemanticFields").phoneDataID.delete(
                        s,
                        n,
                      )),
                    o(
                      "AdsUEditorCallDestinationTypeMutators",
                    ).setCallDestinationType(n, a)
                  );
                  break e;
                }
                return o(
                  "AdsUEditorCallDestinationTypeMutators",
                ).setCallDestinationType(n, a);
              }
            });
          },
          o("AdsUEditorAdgroupSetCallDestinationTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
