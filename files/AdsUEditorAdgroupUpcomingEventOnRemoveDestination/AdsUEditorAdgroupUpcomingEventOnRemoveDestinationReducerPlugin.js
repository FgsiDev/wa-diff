__d(
  "AdsUEditorAdgroupUpcomingEventOnRemoveDestinationReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUpcomingEventConsts",
    "AdsUEditorAdgroupUpcomingEventOnRemoveDestinationActionFlux",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorWebsiteMutators",
    "AdsUpcomingEventsUtils",
    "IsReminderAd",
    "nullthrows",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e,
                i = r("nullthrows")(a.get(e.id)),
                l = i.campaign,
                s = i.campaignGroup,
                u = i.specPlugin,
                c = o("IsReminderAd").isReminderAdFromSpecPlugin(u);
              return (
                c &&
                  (n = o("AdsUEditorWebsiteMutators").setWebsiteURLReducerUtil({
                    adgroup: e,
                    campaign: l,
                    campaignGroup: s,
                    specPlugin: u,
                    websiteURL: o("AdsUEditorAdgroupUpcomingEventConsts")
                      .DEFAULT_UPCOMING_EVENT_DESTINATION_LINK,
                  })),
                o("AdsUpcomingEventsUtils").upcomingEventAccessor.get(e) == null
                  ? n
                  : o(
                      "AdsUEditorAdgroupUpcomingEventsMutator",
                    ).mutateUpcomingEventSpec(
                      n,
                      { use_remind_me_cta: c },
                      t.accountTimezoneID,
                    )
              );
            });
          },
          r("AdsUEditorAdgroupUpcomingEventOnRemoveDestinationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
