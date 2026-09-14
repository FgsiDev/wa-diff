__d(
  "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedMutationUtils",
    "AdsInteractiveComponentConstants",
    "AdsMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupVideoMutators",
    "AdsUnifiedCreativeAPIFields",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "adsInteractiveComponentsUtils",
    "adsPlacementAssetMutationEditCarouselCardDetail",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.interactive_components_spec.child_attachments.get(e);
      return o == null
        ? e
        : ((o =
            (n = o) == null
              ? void 0
              : n.setIn(
                  t,
                  r("immutable").Map({ components: r("immutable").List() }),
                )),
          s(o, e));
    }
    function s(e, t) {
      var n = e.some(function (e) {
          var t;
          return (t = e.getIn(["components"])) == null ? void 0 : t.size;
        }),
        a =
          n &&
          e.some(function (e) {
            var t;
            return (t = e.getIn(["components"])) == null
              ? void 0
              : t.some(function (e) {
                  return (
                    e.get("type") ===
                    o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG
                  );
                });
          }),
        i = t;
      return (
        a ||
          (i = r("AdsAdgroupRecordAccessors").creative.product_set_id.delete(
            t,
          )),
        n
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.interactive_components_spec.child_attachments.set(e, i)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.interactive_components_spec.delete(i)
      );
    }
    function u(e, t, n, r) {
      var o = r.plugins,
        a = o.get(t);
      return c(e, a, n);
    }
    function c(t, n, a) {
      return n == null
        ? t
        : a != null
          ? e(t, [a])
          : o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative
                .interactive_components_spec.delete,
              r("AdsAdgroupRecordAccessors").creative.instant_checkout_setting
                .delete,
            )(t);
    }
    function d(t, n, a) {
      var i,
        l,
        s,
        u,
        c =
          (i =
            (l = t.creative) == null ||
            (l = l.interactive_components_spec) == null ||
            (l = l.components) == null
              ? void 0
              : l.some(function (e) {
                  return e.get("type") === n;
                })) != null
            ? i
            : !1;
      if (c) {
        var d;
        return (d = r("AdsAdgroupRecordAccessors").creative) == null ||
          (d = d.interactive_components_spec) == null
          ? void 0
          : d.delete(t);
      }
      var m = r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.child_attachments.get(t);
      if (m != null) {
        for (var p = [], _ = 0; _ < m.size; _++) {
          var f,
            g = o("adsInteractiveComponentsUtils").extractNormailzedSpecFromRaw(
              m.get(_),
            );
          g != null &&
            (f = g.components) != null &&
            f.some(function (e) {
              return e.type != null && String(e.type) === n;
            }) &&
            p.push(_);
        }
        if (p.length !== 0) {
          var h = t;
          return (
            p.forEach(function (t) {
              h = e(h, [t]);
            }),
            h
          );
        }
      }
      var y =
        (s = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec) == null
          ? void 0
          : s.images.get(t);
      if (y != null) {
        var C,
          b = y.map(function (e) {
            var t,
              r = o(
                "adsInteractiveComponentsUtils",
              ).extractNormailzedSpecFromRaw(
                o("adsInteractiveComponentsUtils").getICSfromAsset(e),
              );
            return r != null &&
              (t = r.components) != null &&
              t.some(function (e) {
                return e.type != null && String(e.type) === n;
              })
              ? e.delete("interactive_components_spec")
              : e;
          }),
          v =
            (C = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec) ==
            null
              ? void 0
              : C.images.set(b, t);
        return o("AdsUEditorAdgroupImageMutators").removeDuplicateImageAssets(
          v,
          a,
        );
      }
      var S =
        (u = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec) == null
          ? void 0
          : u.videos.get(t);
      if (S != null) {
        var R,
          L = S.map(function (e) {
            var t,
              r = o(
                "adsInteractiveComponentsUtils",
              ).extractNormailzedSpecFromRaw(
                o("adsInteractiveComponentsUtils").getICSfromAsset(e),
              );
            return r != null &&
              (t = r.components) != null &&
              t.some(function (e) {
                return e.type != null && String(e.type) === n;
              })
              ? e.delete("interactive_components_spec")
              : e;
          }),
          E =
            (R = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec) ==
            null
              ? void 0
              : R.videos.set(L, t);
        return o("AdsUEditorAdgroupVideoMutators").removeDuplicateVideoAssets(
          E,
          a,
        );
      }
      return t;
    }
    function m(e, t, n, o, a) {
      if (e.carouselAssetIndex != null) {
        var i = e.carouselAssetIndex,
          l;
        if (
          (a
            ? (l = r("AdsUnifiedCreativeAPIFields").videoID.getValue(t, n))
            : (l = r("AdsUnifiedCreativeAPIFields").imageHash.getValue(t, n)),
          l != null && typeof l != "string")
        ) {
          var s = l.get(o);
          if (s == null) return null;
          var u = "interactive_components_spec",
            c =
              e.componentsSpec != null && e.componentsSpec.size > 0
                ? s.setIn(
                    [u],
                    r("immutable").Map({ components: e.componentsSpec }),
                  )
                : s.remove(u);
          return r("adsPlacementAssetMutationEditCarouselCardDetail")(
            t,
            e.label,
            i,
            a ? "videos" : "images",
            c.toJS(),
          );
        }
      }
      return null;
    }
    function p(e, t, n, a) {
      return a != null && a.size > 0
        ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            n,
            "interactive_components_spec",
            r("immutable").fromJS({ components: a.toJS() }),
          )
        : o(
            "adsAssetFeedSpecRemoveAssetFieldAtIndex",
          ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
            e,
            "videos",
            n,
            "interactive_components_spec",
          );
    }
    function _(e, t, n, a) {
      return a != null && a.size > 0
        ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").imageHash,
            n,
            "interactive_components_spec",
            r("immutable").fromJS({ components: a }),
          )
        : o(
            "adsAssetFeedSpecRemoveAssetFieldAtIndex",
          ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
            e,
            "images",
            n,
            "interactive_components_spec",
          );
    }
    ((l.mutateChildAttachments = e),
      (l.syncChildAttachments = s),
      (l.removeInteractiveComponents = u),
      (l.removeInteractiveComponent = c),
      (l.removeInteractiveComponentsFromAdgroup = d),
      (l.applyInteractiveComponentSpecToCarouselAsset = m),
      (l.applyInteractiveComponentSpecToVideoAsset = p),
      (l.applyInteractiveComponentSpecToImageAsset = _));
  },
  98,
);
