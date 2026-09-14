__d(
  "AdsDraftPublishAdsDraftDraftPublishDataReducerPlugin",
  ["LoadObject", "adsDraftIsApplicationIDPowerEditor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID)
            ? t.active.isLoading()
              ? t.merge({
                  activePublishIDs: t.activePublishIDs.add(n.fakePublishID),
                })
              : t.merge({
                  active: r("LoadObject").loading({ creatorModuleID: i.id }),
                  activePublishIDs: t.activePublishIDs.add(n.fakePublishID),
                })
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
