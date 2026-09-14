__d(
  "AdsUeditorAdgroupPACReorderCarouselCardsReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsMutators",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUeditorAdgroupPACReorderCarouselCardsActionFlux",
    "adsPACCarouselContants",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a,
                i = t.carouselLabel,
                l =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.carousels;
              if (l == null) return e;
              var s = l.findIndex(function (e) {
                return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === i;
              });
              if (s === -1) return e;
              var u =
                (a = l.get(s)) == null ? void 0 : a.get("child_attachments");
              if (
                !(u instanceof r("immutable").List) ||
                u.size > o("adsPACCarouselContants").MAX_PAC_CAROUSEL_CARD_COUNT
              )
                return e;
              var c = r("immutable").List(
                  t.targetArrayIndices.reduce(function (e, t) {
                    return (e == null || e.push(u.get(t)), e);
                  }, []),
                ),
                d = [].concat(
                  r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CAROUSELS,
                  [s.toString(), "child_attachments"],
                );
              return e.setIn(d, c);
            });
          },
          o("AdsUeditorAdgroupPACReorderCarouselCardsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
