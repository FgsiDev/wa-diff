__d(
  "adsSingleVideoUploadSelector",
  ["AdsVideoUploadStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsVideoUploadStore")],
        function () {
          return r("AdsVideoUploadStore").getState().last() || null;
        },
        { name: i.id + ".adsSingleVideoUploadSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
