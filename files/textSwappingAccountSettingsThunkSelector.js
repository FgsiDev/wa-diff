__d(
  "textSwappingAccountSettingsThunkSelector",
  ["AdsSettingsStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsSettingsStore"),
      function (e) {
        return r("AdsSettingsStore").getByFields(e, [
          "should_default_text_swapping_optimization",
        ]);
      },
    );
    l.default = e;
  },
  98,
);
