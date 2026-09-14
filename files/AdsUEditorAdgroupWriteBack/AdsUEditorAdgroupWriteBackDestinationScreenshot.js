__d(
  "AdsUEditorAdgroupWriteBackDestinationScreenshot",
  ["cr:2457", "fetchDestinationScreenshot"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, r) {
      o("fetchDestinationScreenshot").fetchDestinationScreenshot(
        t,
        r,
        function (t) {
          n("cr:2457").dispatch(
            { adgroupIDs: [e], screenshotImageHash: t },
            {
              line: "32",
              module: "AdsUEditorAdgroupWriteBackDestinationScreenshot.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    l.refetchAndWriteBackDestinationScreenshot = e;
  },
  98,
);
