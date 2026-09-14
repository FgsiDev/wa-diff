__d(
  "adsUEditorAdgroupOCRTextSelector",
  [
    "AdgroupsOCRTextDataStore",
    "ReminderAdsGating",
    "adsChooseSelector",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdgroupsOCRTextDataStore").fluxGetSelector(),
      s = r("adsChooseSelector")(
        function () {
          return (
            !r("justknobx")._("3193") &&
            o("ReminderAdsGating").isAutoDetectOCRDateEnabled()
          );
        },
        r("adsCreateSelector")(
          [e, r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
          function (t, n) {
            var e = n.map(function (e) {
                return e.adgroup.id;
              }),
              r = e
                .map(function (e) {
                  return t(e).getValue();
                })
                .filter(Boolean);
            return r.length > 0 ? r.join(" ") : null;
          },
          { name: i.id },
        ),
        r("adsCreateSelector")(
          [],
          function () {
            return null;
          },
          { name: i.id },
        ),
        !0,
        i.id + ".adsUEditorAdgroupOCRTextSelector",
      ),
      u = s;
    l.default = u;
  },
  98,
);
