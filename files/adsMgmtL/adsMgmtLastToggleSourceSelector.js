__d(
  "adsMgmtLastToggleSourceSelector",
  ["AdsMgmtOpenTrayStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [o("AdsMgmtOpenTrayStore").AdsMgmtOpenTrayStore],
        function () {
          return o(
            "AdsMgmtOpenTrayStore",
          ).AdsMgmtOpenTrayStore.getLastToggleSource();
        },
        { name: i.id + ".adsMgmtLastToggleSourceSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
