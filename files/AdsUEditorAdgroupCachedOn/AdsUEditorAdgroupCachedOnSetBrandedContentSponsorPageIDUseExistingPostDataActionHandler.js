__d(
  "AdsUEditorAdgroupCachedOnSetBrandedContentSponsorPageIDUseExistingPostDataActionHandler",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedRecord",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetBrandedContentSponsorPageIDUseExistingPostDataActionFlux",
    "adsUEditorAccountSelector",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorAdgroupSetBrandedContentSponsorPageIDUseExistingPostDataActionFlux",
        ).actionType,
        fluxInputs: {
          account: r("adsUEditorAccountSelector"),
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
        },
        mutate: function (t, n, a) {
          var e = a.parentData,
            i = t.adgroupIDs,
            l = t.adgroupsToCache;
          return l
            ? n.withMutations(function (n) {
                return i.reduce(function (n, a) {
                  var i = l.get(a);
                  if (!i || r("isTruthy")(t.isBrandedContentSwitchedOn))
                    return n;
                  n.get(a) ||
                    n.set(
                      a,
                      r("AdsUEditorAdgroupCachedRecord").getEmptyRecord(),
                    );
                  var s = r("nullthrows")(e.get(a)),
                    u = s.specPlugin,
                    c = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      u,
                      i,
                    ),
                    d = o("AdsAPIAdgroupRecordUtils").getPrimaryPageIDInSpec(
                      i,
                      u,
                    ),
                    m = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content_boosting_type.get(i),
                    p = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.facebook_branded_content.sponsor_page_id.get(i);
                  if (
                    m === "SPONSOR_BOOST" &&
                    o("AdsAPIAdgroupRecordUtils").isExistingPostAd(i) &&
                    o("AdsAPIAdgroupRecordUtils").isInstagramMedia(i)
                  ) {
                    var _ = [p, d];
                    ((d = _[0]), (p = _[1]));
                  }
                  return (
                    n.setIn([a, "oldBrandedContentIdentities"], {
                      secondaryPageID: p,
                      primaryPageID: d,
                      primaryInstagramActorID: c,
                      boostingType: m,
                      sourceInstagramMediaID: null,
                    }),
                    n
                  );
                }, n);
              })
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
