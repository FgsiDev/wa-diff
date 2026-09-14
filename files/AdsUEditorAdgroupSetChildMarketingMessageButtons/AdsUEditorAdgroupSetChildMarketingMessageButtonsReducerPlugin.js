__d(
  "AdsUEditorAdgroupSetChildMarketingMessageButtonsReducerPlugin",
  [
    "invariant",
    "AdsAdgroupChildAttachmentsFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildMarketingMessageButtonsDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var o = "www.example.com",
                  i = t.buttons,
                  l = t.childIndex,
                  s = t.numberOfChildren,
                  u = t.updateAllChildren,
                  c = r("nullthrows")(a.get(n));
                if (u === !0) {
                  for (var d = e, m = 0; m < s; m++) {
                    var p = r(
                        "AdsAdgroupChildAttachmentsFields",
                      ).marketingMessageButtons.get(e, c, m),
                      _ = r("AdsAdgroupChildAttachmentsFields").linkURL.get(
                        e,
                        c,
                        m,
                      );
                    p.supported &&
                      _.supported &&
                      ((d = d.setIn(p.path, i)), (d = d.setIn(_.path, o)));
                  }
                  return d;
                } else {
                  var f = r(
                    "AdsAdgroupChildAttachmentsFields",
                  ).marketingMessageButtons.get(e, c, l);
                  return f.supported ? e.setIn(f.path, i) : e;
                }
              },
            );
          },
          r("AdsUEditorAdgroupSetChildMarketingMessageButtonsDataActionFlux")
            .actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
