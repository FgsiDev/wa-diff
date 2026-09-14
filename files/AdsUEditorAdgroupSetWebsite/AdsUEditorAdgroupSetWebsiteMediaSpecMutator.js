__d(
  "AdsUEditorAdgroupSetWebsiteMediaSpecMutator",
  [
    "AdsWebsiteMediaSpecMutators",
    "fetchWebsiteMediaImages",
    "justknobx",
    "promiseDone",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
      "AdsUEditorAdgroupWriteBackWebsiteMedia",
    ).__setRef("AdsUEditorAdgroupSetWebsiteMediaSpecMutator");
    function s(t, n, a, i) {
      var l,
        s = t.id,
        u =
          (l = t.creative) == null || (l = l.creative_sourcing_spec) == null
            ? void 0
            : l.website_media_spec,
        c = r("justknobx")._("614");
      return (
        c && i
          ? o("fetchWebsiteMediaImages").fetchWebsiteMediaImages(
              n,
              a,
              String(s),
              function (t, n) {
                r("promiseDone")(
                  e.load().then(function (e) {
                    var r;
                    return e.writeBackWebsiteMedia(
                      s,
                      u == null ? void 0 : u.enroll_status,
                      u == null || (r = u.action_metadata) == null
                        ? void 0
                        : r.type,
                      t,
                      n,
                    );
                  }),
                );
              },
            )
          : o("fetchWebsiteMediaImages").fetchWebsiteMediaImages(
              n,
              a,
              String(s),
            ),
        i ? o("AdsWebsiteMediaSpecMutators").resetWebsiteMediaSpec(t) : t
      );
    }
    l.setWebsiteMediaDefaultAdgroupField = s;
  },
  98,
);
