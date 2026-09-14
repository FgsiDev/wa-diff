__d(
  "AdsUEditorAdgroupSetCreativeBadgePaymentOptionsReducerPlugin",
  [
    "AdsCreativeBadgeEditingUtils",
    "AdsCreativeBadgeGetUtils",
    "AdsMutators",
    "AdsUEditorAdgroupBadgesMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeBadgePaymentOptionsDataActionFlux",
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
                  r =
                    ((n = e.creative) == null || (n = n.asset_feed_spec) == null
                      ? void 0
                      : n.badge_sets) || o("immutable").List(),
                  a = o("AdsCreativeBadgeEditingUtils").updatePaymentOptions(
                    o(
                      "AdsCreativeBadgeGetUtils",
                    ).getBadgeItemSpecMapFromAssetFeed(r),
                    t.paymentOptionsSpec,
                  );
                return o(
                  "AdsUEditorAdgroupBadgesMutators",
                ).sanitizeBadgeItemSpecMap(a, e);
              })(e);
            });
          },
          o("AdsUEditorAdgroupSetCreativeBadgePaymentOptionsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
