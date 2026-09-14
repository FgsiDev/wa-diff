__d(
  "AdsUEditorAdgroupChatOnWhatsAppDestinationIdReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChatOnWhatsAppDestinationIdActionFlux",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            account: r("adsUEditorAccountSelector"),
          },
          function (e, t, n) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return o(
                  "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                ).updateLeadNurtureDestinationIdField(e, t.destinationID);
              },
            );
          },
          r("AdsUEditorAdgroupChatOnWhatsAppDestinationIdActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
