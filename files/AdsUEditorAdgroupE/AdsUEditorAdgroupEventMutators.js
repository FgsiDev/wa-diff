__d(
  "AdsUEditorAdgroupEventMutators",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
    "AdsSetCTAEventFieldsForPlacementCustomizedAds",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUnifiedCreativeAPIFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l;
      i === void 0 && (i = !1);
      var s = t.cover,
        u = t.description,
        c = t.has_ticket_onsale_for_viewer,
        d = t.id,
        m = t.name,
        p = t.ticket_uri,
        _ = c || i ? a : p;
      if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
        return o(
          "AdsSetCTAEventFieldsForPlacementCustomizedAds",
        ).setCTAEventFieldsForPlacementCustomizedAds(e, n, _ || "", d, m, u);
      var f = e,
        g = !!(
          (l = f.creative) != null &&
          (l = l.object_story_spec) != null &&
          l.link_data
        );
      if (g) {
        var h = r("AdsAdgroupSemanticFields").imageURL.get(n, f),
          y = r("AdsAdgroupSemanticFields").imageHash.get(n, f);
        (y == null &&
          h == null &&
          (f = r("AdsAdgroupSemanticFields").imageURL.set(n, f, s && s.source)),
          (f = f.withMutations(function (e) {
            return e
              .setIn(
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .CALL_TO_ACTION.VALUE.EVENT_ID,
                d,
              )
              .setIn(
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .CALL_TO_ACTION.VALUE.LINK,
                _,
              );
          })));
      }
      var C = "BUY_TICKETS";
      return (
        (f = r("AdsAdgroupSemanticFields").callToActionType.set(n, f, C)),
        f.withMutations(function (e) {
          var t = e;
          if (o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t)) {
            var a;
            ((t = o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).setAssetFieldOrValueInAdgroup(
              t,
              n,
              (a = r("AdsUnifiedCreativeAPIFields")).message,
              "text",
              u,
              [a.headline, a.linkDescription],
            )),
              (t = o(
                "AdsUEditorAdgroupAssetFeedMutators",
              ).setAssetFieldOrValueInAdgroup(t, n, a.headline, "text", m)));
          } else
            t = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").message.set(n, e, u);
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").headline.set(n, e, m);
              },
            )(t);
          return o("AdsMutators").chain(
            function (e) {
              return r("AdsAdgroupSemanticFields").eventID.set(n, e, d);
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").linkURL.set(n, e, _);
            },
          )(t);
        })
      );
    }
    function s(e, t, n, a) {
      var i;
      if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
        return o(
          "AdsSetCTAEventFieldsForPlacementCustomizedAds",
        ).setCTAEventFieldsForPlacementCustomizedAds(
          e,
          a,
          n,
          o("AdsLinkTypeUtils").getEventIDFromLink(n),
        );
      var l = e,
        s = !!(
          (i = l.creative) != null &&
          (i = i.object_story_spec) != null &&
          i.link_data
        );
      if (s) {
        l = l
          .deleteIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.EVENT_ID,
          )
          .deleteIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.VALUE.LINK,
          );
        var u = r("AdsAdgroupSemanticFields").imageURL.get(a, l),
          c = r("AdsAdgroupSemanticFields").imageHash.get(a, l);
        if (t != null && c == null && u == null) {
          var d = t.cover;
          l = r("AdsAdgroupSemanticFields").imageURL.set(a, l, d && d.source);
        }
      }
      return o("AdsMutators").chain(
        function (e) {
          return r("AdsAdgroupSemanticFields").eventID.set(
            a,
            e,
            o("AdsLinkTypeUtils").getEventIDFromLink(n),
          );
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").linkURL.set(a, e, n);
        },
      )(l);
    }
    function u(e, t) {
      var n;
      if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
        return o(
          "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
        ).removeCTAEventFieldsForPlacementCustomizedAds(e, t);
      var a = e,
        i = !!(
          (n = a.creative) != null &&
          (n = n.object_story_spec) != null &&
          n.link_data
        );
      return (
        i &&
          (a = a.withMutations(function (e) {
            return e
              .deleteIn(
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .CALL_TO_ACTION.VALUE.EVENT_ID,
              )
              .deleteIn(
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .CALL_TO_ACTION.VALUE.LINK,
              );
          })),
        a.withMutations(function (e) {
          return (
            r("AdsAdgroupSemanticFields").eventID.delete(t, e),
            r("AdsAdgroupSemanticFields").linkURL.delete(t, e),
            r("AdsAdgroupSemanticFields").headline.isSupported(t, e) &&
              r("AdsAdgroupSemanticFields").headline.delete(t, e),
            e
          );
        })
      );
    }
    ((l.setCreativeFieldsFromEvent = e),
      (l.setEventFields = s),
      (l.removeEventFields = u));
  },
  98,
);
