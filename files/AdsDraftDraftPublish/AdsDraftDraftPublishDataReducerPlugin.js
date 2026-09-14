__d(
  "AdsDraftDraftPublishDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.createdInCF != null &&
            n.shouldPublishImmediately != null &&
            n.createdInCF &&
            n.shouldPublishImmediately
            ? t.merge({
                isCreationOpen: !1,
                isReachFrequencyConfirmDialogOpen: !1,
                quickCreateStarted: !1,
              })
            : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
