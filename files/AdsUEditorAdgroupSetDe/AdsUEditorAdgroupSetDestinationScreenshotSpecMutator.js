__d(
  "AdsUEditorAdgroupSetDestinationScreenshotSpecMutator",
  ["AdsAdgroupRecordAccessors", "justknobx", "promiseDone", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
      "AdsUEditorAdgroupWriteBackDestinationScreenshot",
    ).__setRef("AdsUEditorAdgroupSetDestinationScreenshotSpecMutator");
    function s(t, n, o, a) {
      if (!a || !r("justknobx")._("614")) return t;
      var i = t.id;
      return (
        r("promiseDone")(
          e.load().then(function (e) {
            return e.refetchAndWriteBackDestinationScreenshot(i, n, o);
          }),
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.destination_screenshot_spec.screenshot_image_hash.delete(
          t,
        )
      );
    }
    l.setDestinationScreenshotDefaultAdgroupField = s;
  },
  98,
);
