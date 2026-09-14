__d(
  "AdsAdgroupUsingExistingPostPrefiller",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupInstagramActorIDPrefillUtils",
    "AdsAdgroupUsingExistingPostPrefillerExtraDataSelector",
    "AdsFBStorySelectionReader",
    "AdsPagePostUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "usingExistingPost",
        genExtraDataSelector: r(
          "AdsAdgroupUsingExistingPostPrefillerExtraDataSelector",
        ),
        genPaths: function (t, n) {
          var e,
            a = t.current.campaign.optimization_goal,
            i = t.current.campaignGroup.objective,
            l = t.current.campaign.destination_type,
            s =
              (e = t.original.adgroup.creative) == null
                ? void 0
                : e.object_story_spec,
            u = n == null ? void 0 : n.storySelections,
            c =
              u != null
                ? o(
                    "AdsFBStorySelectionReader",
                  ).getFBStorySelectionFromProviderData(
                    u,
                    t.original.adgroup.id,
                    s,
                  )
                : null;
          if (c != null) {
            var d;
            return [
              {
                current: (d = r("AdsAPIAdgroupPaths")).CREATIVE
                  .OBJECT_STORY_SPEC.path,
                original: d.CREATIVE.OBJECT_STORY_SPEC.path,
              },
              {
                current: d.CREATIVE.OBJECT_TYPE,
                original: d.CREATIVE.OBJECT_TYPE,
              },
            ];
          }
          var m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
              i,
              t.current.campaign,
            ),
            p = n && n.originalPagePostLoadObject,
            _ = p && p.hasValueWithoutError() ? p.getValueEnforcing() : null,
            f =
              !!_ && o("AdsPagePostUtils").isVisible(_, i, a, null, null, l, m);
          return f
            ? [
                {
                  current: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_ID,
                  original: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_ID,
                },
                {
                  current: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID,
                  original: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_ID,
                },
                {
                  current:
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.path,
                  original:
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.path,
                },
                {
                  current: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_TYPE,
                  original: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_TYPE,
                },
                {
                  current: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_URL,
                  original: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_URL,
                },
              ].concat(o("AdsAdgroupInstagramActorIDPrefillUtils").genPaths(t))
            : [];
        },
        isExtraDataReady: function (t) {
          var e = t && t.originalPagePostLoadObject;
          return !e || e.isDone();
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
