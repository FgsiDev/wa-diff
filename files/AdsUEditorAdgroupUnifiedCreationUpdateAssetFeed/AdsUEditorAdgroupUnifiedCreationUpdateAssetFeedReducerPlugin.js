__d(
  "AdsUEditorAdgroupUnifiedCreationUpdateAssetFeedReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUnifiedCreationUpdateAssetFeedDataActionFlux",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.destinationType,
                a = e;
              if (
                (o("AdsUEditorMessagingDestinationUtils").isMultiDestination(n)
                  ? (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.additional_data.is_click_to_message.set(
                      !0,
                      a,
                    ))
                  : o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(
                      e,
                    ) &&
                    (a = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.additional_data.is_click_to_message.delete(
                      a,
                    )),
                o("AdsAssetFeedUtils").isPACAdgroupFromRecord(a))
              )
                return n != null &&
                  !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                    n,
                  )
                  ? o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).filterPacAfsCtaByAppDestination(a, n)
                  : a;
              if (
                o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(a) &&
                o("AdsUEditorMessagingDestinationUtils").isMultiDestination(n)
              ) {
                var i,
                  l,
                  s =
                    (i =
                      (l = a.creative_asset_groups_spec) == null ||
                      (l = l.toJS()) == null
                        ? void 0
                        : l.groups) != null
                      ? i
                      : [];
                s.forEach(function (e, t) {
                  var n = e.texts;
                  n != null &&
                    ((n = n.filter(function (e, t) {
                      var r;
                      return (
                        ((r = n) == null
                          ? void 0
                          : r.findIndex(function (t) {
                              return t.text_type === e.text_type;
                            })) === t
                      );
                    })),
                    (a = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setSpecsInCagGroup(a, t, n, "texts")));
                });
              }
              return o(
                "AdsUEditorUnifiedCreationAdgroupMutators",
              ).deleteAssetFeedSpec(a);
            });
          },
          o("AdsUEditorAdgroupUnifiedCreationUpdateAssetFeedDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
