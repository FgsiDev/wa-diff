__d(
  "AdsUEditorAdgroupLeadgenPlusCleanLeadNurtureChannelsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorPromotedObjectSetLeadAdsFollowUpEventActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.leadAdsFollowUpEvent !== "whatsapp_conversations"
              ? e
              : o("AdsMutators").mutateEach(
                  e,
                  t.adgroupIDs,
                  o("AdsUEditorAdgroupLeadNurtureChannelsMutator")
                    .cleanLeadNurtureChannelsField,
                );
          },
          o("AdsUEditorPromotedObjectSetLeadAdsFollowUpEventActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
