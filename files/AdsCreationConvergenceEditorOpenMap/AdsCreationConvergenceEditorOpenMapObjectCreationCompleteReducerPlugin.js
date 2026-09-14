__d(
  "AdsCreationConvergenceEditorOpenMapObjectCreationCompleteReducerPlugin",
  ["isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, o) {
          return (e || (e = r("isEmpty")))(o.campaignGroupIDs)
            ? n
            : (e || (e = r("isEmpty")))(o.campaignIDs) ||
                (e || (e = r("isEmpty")))(o.adgroupIDs)
              ? babelHelpers.extends({}, n, {
                  campaignGroupIDsWithUnseenChildren:
                    n.campaignGroupIDsWithUnseenChildren.concat(
                      o.campaignGroupIDs,
                    ),
                })
              : {
                  campaignGroupIDsWithUnseenChildren:
                    n.campaignGroupIDsWithUnseenChildren.concat(
                      o.campaignGroupIDs,
                    ),
                  campaignIDsThatAreUnseen: n.campaignIDsThatAreUnseen.concat(
                    o.campaignIDs,
                  ),
                  adgroupIDsThatAreUnseen: n.adgroupIDsThatAreUnseen.concat(
                    o.adgroupIDs,
                  ),
                };
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
