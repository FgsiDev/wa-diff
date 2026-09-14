__d(
  "AdsUEditorAdgroupWriteBackWebsiteMedia",
  ["cr:2674"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, r, o, a) {
      n("cr:2674").dispatch(
        {
          adgroupIDs: [e],
          enrollStatus: t,
          enrollActionType: r,
          media: o,
          imageClusters: a,
        },
        {
          line: "32",
          module: "AdsUEditorAdgroupWriteBackWebsiteMedia.js",
          moduleID: i.id,
        },
      );
    }
    l.writeBackWebsiteMedia = e;
  },
  98,
);
