__d(
  "AdsUEditorAdgroupInstantBookConfigurationDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupInstantBookConfigurationDataActionFlux",
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
                var o = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.instant_book_configuration.is_enabled.set(
                  !0,
                  e,
                );
                return t.bookingUrl == null || t.bookingUrl === ""
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.instant_book_configuration.booking_url.delete(
                      o,
                    )
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.instant_book_configuration.booking_url.set(
                      t.bookingUrl,
                      o,
                    );
              },
            );
          },
          r("AdsUEditorAdgroupInstantBookConfigurationDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
