__d(
  "AdsMgmtUEditorAdgroupSetWebsiteURLDataActionLoggerPlugin",
  ["AdsUEditorHostIDs", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.hostID === r("AdsUEditorHostIDs").EDITING &&
            r("adsMgmtLogger")("set_website_url", { url: t.websiteURL });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
