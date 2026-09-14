__d(
  "AdsUEditorAdgroupChatOnInstagramCheckboxReducerPlugin",
  [
    "AdsLeadGenB2PMesssagingUtil",
    "AdsLeadGenSharedMessageConstants",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChatOnInstagramCheckboxActionFlux",
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
              function (e, r) {
                if (t.isOptIn) {
                  var a = o(
                    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                  ).addChatOnInstagramLeadNurtureChannelField(e);
                  if (t.passLeadNurturingHubV3NewCardGK === !0) {
                    var i,
                      l,
                      s,
                      u,
                      c = n.parentData.get(r),
                      d =
                        c == null ||
                        (i = c.campaign) == null ||
                        (i = i.promoted_object) == null
                          ? void 0
                          : i.page_id,
                      m = o(
                        "AdsLeadGenB2PMesssagingUtil",
                      ).fetchPrefillIceBreaker(d);
                    a = o(
                      "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                    ).setSharedMessageChannelFields(
                      a,
                      (l = t.thankYouPageBody) != null
                        ? l
                        : o("AdsLeadGenSharedMessageConstants")
                            .DEFAULT_SHARED_MESSAGE_GREETING,
                      {
                        type: (s = t.thankYouPageButtonType) != null ? s : null,
                        value:
                          (u = t.thankYouPageActionValue) != null ? u : null,
                      },
                      m,
                    );
                  }
                  return a;
                } else
                  return o(
                    "AdsUEditorAdgroupLeadNurtureChannelsMutator",
                  ).deleteChatOnInstagramLeadNurtureChannelsField(e);
              },
            );
          },
          r("AdsUEditorAdgroupChatOnInstagramCheckboxActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
