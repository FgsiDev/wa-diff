__d(
  "L4SettingsBusinessConstraintsAudienceControlsSelector",
  [
    "AdsAccountStore",
    "AdsBusinessConstraintsAdAccountDataStore",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsAccountStore"), r("AdsBusinessConstraintsAdAccountDataStore")],
        function () {
          var e,
            t,
            n = r("AdsAccountStore").getSelectedAccountID();
          return n == null
            ? {}
            : (e =
                  (t = r("AdsBusinessConstraintsAdAccountDataStore")
                    .get(n)
                    .getValue()) == null || (t = t.data) == null
                    ? void 0
                    : t[0]) != null
              ? e
              : {};
        },
        {
          name: i.id + ".L4SettingsBusinessConstraintsAudienceControlsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
