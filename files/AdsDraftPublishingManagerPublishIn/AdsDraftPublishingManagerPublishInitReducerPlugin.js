__d(
  "AdsDraftPublishingManagerPublishInitReducerPlugin",
  ["AdsDraftPublishingManagerProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return r("AdsDraftPublishingManagerProvider")
            .getInitialState()
            .merge({ fragmentIDs: n.fragmentIDs });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
