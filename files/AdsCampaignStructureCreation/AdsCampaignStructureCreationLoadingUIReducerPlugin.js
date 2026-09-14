__d(
  "AdsCampaignStructureCreationLoadingUIReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e;
          return {
            campaignGroupID: (e = n.campaignGroupID) != null ? e : null,
            creationSource: n.creationSource || null,
            isCreating: n.isCreating,
            objectID:
              n.objectID === "" || n.objectID == null ? null : n.objectID,
            objectType: n.objectType || null,
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
