__d(
  "AdsUEditorAdgroupSetCreativeBadgeBusinessInfoFromProfileReducerPlugin",
  [
    "AdsCreativeBadgeEditingUtils",
    "AdsCreativeBadgeGetUtils",
    "AdsMutators",
    "AdsUEditorAdgroupBadgesMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeBadgeBusinessInfoFromProfileDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(function (e) {
                var n,
                  a =
                    ((n = e.creative) == null || (n = n.asset_feed_spec) == null
                      ? void 0
                      : n.badge_sets) || r("immutable").List(),
                  i = o(
                    "AdsCreativeBadgeEditingUtils",
                  ).selectBusinessInfoFromProfileOption(
                    o(
                      "AdsCreativeBadgeGetUtils",
                    ).getBadgeItemSpecMapFromAssetFeed(a),
                    t.businessInfoFromProfileOption,
                    t.checkboxValue,
                  );
                return o(
                  "AdsUEditorAdgroupBadgesMutators",
                ).sanitizeBadgeItemSpecMap(i, e);
              })(e);
            });
          },
          o(
            "AdsUEditorAdgroupSetCreativeBadgeBusinessInfoFromProfileDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
