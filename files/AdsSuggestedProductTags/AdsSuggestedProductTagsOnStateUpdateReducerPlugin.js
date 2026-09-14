__d(
  "AdsSuggestedProductTagsOnStateUpdateReducerPlugin",
  ["AdsSuggestedProductTagsConstants", "LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.query,
            a = t.getLoadedValue(e);
          if (a != null) {
            switch (n.newState) {
              case o("AdsSuggestedProductTagsConstants")
                .SuggestedProductTagState.REMOVED:
                if (
                  a.state !==
                  o("AdsSuggestedProductTagsConstants").SuggestedProductTagState
                    .ADDED
                )
                  return t;
                break;
              default:
            }
            var l = a;
            return (
              (l.state = n.newState),
              t.merge([
                [e, r("LoadObject").withValue(l, { creatorModuleID: i.id })],
              ])
            );
          }
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
