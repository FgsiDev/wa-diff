__d(
  "AdsUEditorExistingPostMutators",
  ["AdsExistingPostCTXDefaultingUtils", "AdsUEditorSetPostEditModeMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, s, u) {
      return (
        u === void 0 && (u = !1),
        o(
          "AdsExistingPostCTXDefaultingUtils",
        ).shouldDefaultToExistingPostForCTXByQE(
          s,
          n.destination_type,
          u,
          r.objective,
        )
          ? o("AdsUEditorSetPostEditModeMutators").setToUsingExistingPost({
              adgroup: e,
              cachedCreative: null,
              cachedPageID: a,
              defaultPagePost: null,
              specPathPlugin: t,
              campaign: n,
              campaignGroup: r,
              instagramAccount: i,
              pages: l,
            })
          : e
      );
    }
    l.maybeDefaultToExistingPostForCTX = e;
  },
  98,
);
