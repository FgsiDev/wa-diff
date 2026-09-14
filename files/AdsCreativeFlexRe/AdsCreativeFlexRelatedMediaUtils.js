__d(
  "AdsCreativeFlexRelatedMediaUtils",
  [
    "AdsCreativeFlexSpecUtils",
    "AdsCreativeFlexTypes",
    "immutable",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "IMAGE":
          return "IMAGE";
        case "VIDEO":
          return "VIDEO";
        default:
          return null;
      }
    }
    function s(e) {
      return e == null || r("isStringNullOrEmpty")(e.original_ig_media_fbid)
        ? null
        : "instagram";
    }
    function u(t, n) {
      var a, i;
      return (a =
        (i = t.xfb_ads_creative_flex_recommended_media) == null
          ? void 0
          : i.recommended_media_with_info
              .map(function (t) {
                var a;
                if (t == null) return null;
                var i = t.ad_media_id,
                  l = t.creation_source,
                  u = t.is_default_selected,
                  c = t.media_identifier,
                  d = t.media_type,
                  m = t.organic_media_source,
                  p = t.retriever_sources,
                  _ = t.source;
                if (
                  r("isStringNullOrEmpty")(c) ||
                  r("isStringNullOrEmpty")(d) ||
                  ((n == null ? void 0 : n.length) !== 0 &&
                    n != null &&
                    n.includes(c))
                )
                  return null;
                var f = e(d);
                return f == null
                  ? null
                  : {
                      action_metadata: null,
                      ad_media_id: i,
                      creationSource: l,
                      id: c,
                      isDefaultSelected: u,
                      mediaSourcePlatform: s(m),
                      organicMediaSource: m,
                      type: f,
                      retriever_sources:
                        (a =
                          p == null
                            ? void 0
                            : p
                                .map(
                                  o("AdsCreativeFlexSpecUtils")
                                    .convertSpecStringToRetrieverSource,
                                )
                                .filter(Boolean)) != null
                          ? a
                          : null,
                      selection:
                        u === !0
                          ? o("AdsCreativeFlexTypes").RelatedMediaSelection
                              .OPT_IN
                          : u === !1
                            ? o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .OPT_OUT
                            : o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .UNDEFINED,
                      source: _,
                      textData: null,
                      destinationData: null,
                      placementCustomizationsData: null,
                    };
              })
              .filter(Boolean)) != null
        ? a
        : [];
    }
    function c(e) {
      return e.map(function (e) {
        return {
          action_metadata: null,
          id: e.id,
          type: e.type,
          retriever_sources: null,
          selection: o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN,
          textData: null,
          destinationData: null,
          placementCustomizationsData: null,
        };
      });
    }
    function d(t, n) {
      var a = [];
      return (
        t.forEach(function (t) {
          var r = t.media_identifier,
            i = t.media_type != null ? e(t.media_type) : null;
          r == null ||
            i == null ||
            !n.has(r) ||
            a.push([
              r,
              {
                action_metadata: null,
                id: r,
                type: i,
                mediaSourcePlatform: t.mediaSourcePlatform,
                organicMediaSource: t.organicMediaSource,
                retriever_sources: null,
                selection: o("AdsCreativeFlexTypes").RelatedMediaSelection
                  .OPT_IN,
                textData: null,
                destinationData: null,
                placementCustomizationsData: null,
              },
            ]);
        }),
        r("immutable").OrderedMap(a)
      );
    }
    function m(e, t) {
      var n = e.reduce(function (e, t) {
          return (e.set(t.id, t), e);
        }, new Map()),
        o = new Map();
      return (
        n.forEach(function (e, n) {
          var r = t.get(n);
          r != null
            ? o.set(n, babelHelpers.extends({}, e, { selection: r.selection }))
            : o.set(n, e);
        }),
        r("immutable").OrderedMap(o)
      );
    }
    ((l.deriveMediaSourcePlatform = s),
      (l.convertToRelatedMediaFromQueryData = u),
      (l.convertRelatedMediaDisplay = c),
      (l.buildRelatedMediaOptInMap = d),
      (l.mergeSelectionMap = m));
  },
  98,
);
