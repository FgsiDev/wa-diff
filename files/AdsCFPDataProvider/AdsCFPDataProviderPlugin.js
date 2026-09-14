__d(
  "AdsCFPDataProviderPlugin",
  ["AdsCreativeOptimizationToolChangeSetRecord", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: {
          availableTools: r("immutable").OrderedSet(),
          isModalVisible: !1,
          entryPoint: null,
          globalChangeSet: new (r(
            "AdsCreativeOptimizationToolChangeSetRecord",
          ))(),
          selectedPlacement: null,
          toolsEdit: r("immutable").Map(),
          previewAwarenessMap: r("immutable").Map(),
          initialAdgroup: null,
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
