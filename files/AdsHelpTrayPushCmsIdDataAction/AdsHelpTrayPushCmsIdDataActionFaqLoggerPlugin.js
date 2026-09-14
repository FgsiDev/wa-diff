__d(
  "AdsHelpTrayPushCmsIdDataActionFaqLoggerPlugin",
  ["adsMgmtGetWindowDimensions", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "help_tray_faq_click",
            babelHelpers.extends(
              { cms_id: t.data.cmsID, object_ids: [t.data.cmsID] },
              r("adsMgmtGetWindowDimensions")(),
            ),
            "help_tray",
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
