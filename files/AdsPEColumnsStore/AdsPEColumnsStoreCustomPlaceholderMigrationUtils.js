__d(
  "AdsPEColumnsStoreCustomPlaceholderMigrationUtils",
  ["AdsCustomPresetLocalStorageUtil", "AdsMgmtColumnPresetStoreWrapper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r(
        "AdsCustomPresetLocalStorageUtil",
      ).getCustomPresetMetricsLocalStorage();
      if (!Array.isArray(o) || o.length === 0) return { type: "skip" };
      var a = r("AdsMgmtColumnPresetStoreWrapper").findByContent(e, o, t, !1);
      return a != null
        ? (r(
            "AdsCustomPresetLocalStorageUtil",
          ).updateCustomPresetMetricsLocalStorage([]),
          { type: "already_migrated" })
        : {
            type: "migrate",
            columnIDs: o,
            shouldSaveAsDefault: n === "CUSTOM_PLACEHOLDER",
          };
    }
    l.getCustomPlaceholderMigrationAction = e;
  },
  98,
);
