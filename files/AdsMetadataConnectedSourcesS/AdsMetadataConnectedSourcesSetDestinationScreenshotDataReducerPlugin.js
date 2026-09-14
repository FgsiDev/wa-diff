__d(
  "AdsMetadataConnectedSourcesSetDestinationScreenshotDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMetadataConnectedSourcesSetDestinationScreenshotDataActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a = t.screenshotImageHash;
              if (a == null || a === "")
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.destination_screenshot_spec.screenshot_image_hash.delete(
                  e,
                );
              var i =
                (n = e.creative) == null ||
                (n = n.creative_sourcing_spec) == null ||
                (n = n.destination_screenshot_spec) == null
                  ? void 0
                  : n.enroll_status;
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.destination_screenshot_spec.screenshot_image_hash.set(
                  a,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.destination_screenshot_spec.enroll_status.set(
                  i != null ? i : "OPT_IN",
                ),
              )(e);
            });
          },
          [
            r(
              "AdsMetadataConnectedSourcesSetDestinationScreenshotDataActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
