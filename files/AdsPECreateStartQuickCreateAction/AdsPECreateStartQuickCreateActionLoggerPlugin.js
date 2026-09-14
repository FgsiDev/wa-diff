__d(
  "AdsPECreateStartQuickCreateActionLoggerPlugin",
  ["AdsPECreationSource", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e, n, o;
          if (
            ((e = t.data) == null ? void 0 : e.source) ===
            r("AdsPECreationSource").CREATION_BUTTON
          ) {
            var a, i;
            r("adsMgmtLogger")(
              "create_click",
              ((i = {}),
              (i.object_level = (a = t.data) == null ? void 0 : a.level),
              (i.event_source = t.actionType),
              i),
              "creation",
            );
          }
          if (
            ((n = t.data) == null ? void 0 : n.source) ===
            r("AdsPECreationSource").CREATION_BUTTON
          ) {
            var l;
            switch ((l = t.data) == null ? void 0 : l.level) {
              case "campaign":
                r("adsMgmtLogger")("campaign_group_create_click_quick_draft");
                break;
              case "ad_set":
                r("adsMgmtLogger")("campaign_create_click_quick_draft");
                break;
              case "ad":
                r("adsMgmtLogger")("adgroup_create_click_quick_draft");
                break;
            }
          } else if (
            ((o = t.data) == null ? void 0 : o.source) ===
            r("AdsPECreationSource").EDITING_DRAWER
          ) {
            var s;
            switch ((s = t.data) == null ? void 0 : s.level) {
              case "ad_set":
                r("adsMgmtLogger")(
                  "campaign_create_click_quick_draft_from_editor",
                );
                break;
              case "ad":
                r("adsMgmtLogger")(
                  "adgroup_create_click_quick_draft_from_editor",
                );
                break;
            }
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
