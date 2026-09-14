__d(
  "adsPlacementAssetMutationAddCarouselFromObjectStorySpec",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedConstant",
    "AdsChildAttachmentsUtils",
    "AdsEditorMPAConstants",
    "AdsIsApplicationInCallToAction",
    "AdsPlacementAssetUtils",
    "AdsUEditorInstagramUtils",
    "adsPlacementAssetMutationAddCarouselCardDetail",
    "adsPlacementAssetMutationSetInitialTargetingRule",
    "immutable",
    "isEmpty",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e,
        n = r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC;
      return (
        (t = [
          n.BODIES,
          n.CAROUSELS,
          n.DESCRIPTIONS,
          n.IMAGES,
          n.LINK_URLS,
          n.TITLES,
          n.VIDEOS,
        ].reduce(function (e, t) {
          return e.updateIn(t, function (e) {
            return e != null ? e : r("immutable").List();
          });
        }, t)),
        t
      );
    }
    function u(e, t, n, o) {
      var a,
        i =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.carousels;
      if (i == null) return e;
      var l = {
        adlabels: [{ name: t }],
        child_attachments: [],
        multi_share_end_card: n,
        multi_share_optimized: o,
      };
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.carousels.set(
        i.push(r("immutable").fromJS(l)),
        e,
      );
    }
    function c(e, t) {
      var n,
        a,
        i = e,
        l = r("immutable").Map(),
        s =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.link_urls,
        u = o("AdsPlacementAssetUtils").makeUniqueLabelNameForPlacementAsset(),
        c = r("immutable").fromJS([{ name: u }]);
      if (s != null && s.size === 1)
        s = s.update(0, function (e) {
          return e
            .set(o("AdsAssetFeedConstant").ADLABELS, c)
            .update("website_url", function (e) {
              return e != null ? e : "";
            })
            .update("display_url", function (e) {
              return e != null ? e : "";
            });
        });
      else {
        var d;
        s = r("immutable").fromJS([
          ((d = {}),
          (d.website_url = ""),
          (d.display_url = ""),
          (d[o("AdsAssetFeedConstant").ADLABELS] = c),
          d),
        ]);
      }
      ((i = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.link_urls.set(s, i)),
        (l = l.set("link_url_label", r("immutable").fromJS({ name: u }))));
      var m =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.bodies,
        p = o("AdsPlacementAssetUtils").makeUniqueLabelNameForPlacementAsset(),
        _ = r("immutable").fromJS([{ name: p }]);
      if (m != null && m.size === 1)
        m = m.update(0, function (e) {
          return e.set(o("AdsAssetFeedConstant").ADLABELS, _);
        });
      else {
        var f;
        m = r("immutable").fromJS([
          ((f = {}),
          (f.text = ""),
          (f[o("AdsAssetFeedConstant").ADLABELS] = _),
          f),
        ]);
      }
      return (
        (i = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
          m,
          i,
        )),
        (l = l.set("body_label", r("immutable").fromJS({ name: p }))),
        r("adsPlacementAssetMutationSetInitialTargetingRule")(
          i,
          "carousel_label",
          t,
          l,
        )
      );
    }
    function d(t, n, a) {
      var i,
        l = t,
        d =
          (i = n.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.link_data,
        m = d == null ? void 0 : d.child_attachments;
      if (d == null || m == null) return l;
      var p = o("AdsIsApplicationInCallToAction").isApplicationInCallToAction(
          n,
        ),
        _ = o("AdsUEditorInstagramUtils").isInstagramDirectDestinationAd(n);
      ((l = s(l)),
        (l = c(l, a)),
        (l = u(l, a, !!d.multi_share_end_card, !!d.multi_share_optimized)));
      var f = 0;
      return (
        m.forEach(function (t) {
          var n, i, s, u, c;
          if (!o("AdsChildAttachmentsUtils").hasPlaceData(t)) {
            var d = t.toJS(),
              m =
                (n = d.call_to_action) == null || (n = n.value) == null
                  ? void 0
                  : n.app_link,
              g =
                (p || _) && r("isStringNotNullAndNotWhitespaceOnly")(m)
                  ? ((s = {}),
                    (s.website_url = (i = d.link) != null ? i : ""),
                    (s.deeplink_url = m),
                    s)
                  : ((c = {}),
                    (c.website_url = (u = d.link) != null ? u : ""),
                    c);
            l = r("adsPlacementAssetMutationAddCarouselCardDetail")(
              l,
              a,
              f,
              "link_urls",
              g,
            );
            var h = d.description;
            l = r("adsPlacementAssetMutationAddCarouselCardDetail")(
              l,
              a,
              f,
              "descriptions",
              { text: h != null ? h : "" },
            );
            var y = d.name;
            l = r("adsPlacementAssetMutationAddCarouselCardDetail")(
              l,
              a,
              f,
              "titles",
              { text: y != null ? y : "" },
            );
            var C = d.image_hash,
              b = d.image_crops,
              v = d.video_id;
            if (
              ((b = b != null && !(e || (e = r("isEmpty")))(b) ? b : void 0),
              v == null)
            )
              if (C != null) {
                var S;
                l = r("adsPlacementAssetMutationAddCarouselCardDetail")(
                  l,
                  a,
                  f,
                  "images",
                  ((S = {}), (S.hash = C), (S.image_crops = b), S),
                );
              } else {
                var R = d.picture;
                if (R != null) {
                  var L;
                  l = r("adsPlacementAssetMutationAddCarouselCardDetail")(
                    l,
                    a,
                    f,
                    "images",
                    ((L = {}), (L.url = R), (L.image_crops = b), L),
                  );
                }
              }
            var E = d.picture;
            if (
              v != null &&
              v !==
                o("AdsEditorMPAConstants").AdsEditorMPAConstants
                  .MPA_PLACEHOLDER_VIDEO_ID
            ) {
              var k;
              l = r("adsPlacementAssetMutationAddCarouselCardDetail")(
                l,
                a,
                f,
                "videos",
                ((k = {}),
                (k.video_id = v),
                (k.thumbnail_url = E != null ? E : void 0),
                (k.thumbnail_source = "generated_default"),
                k),
              );
            }
            f++;
          }
        }),
        l
      );
    }
    l.default = d;
  },
  98,
);
