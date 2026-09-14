__d(
  "AdsPEAdgroupExportExtraStore",
  [
    "AdsAdgroupImageUtils",
    "AdsDCOPreviewTokenProvider",
    "AdsDataAtom",
    "AdsImageStore",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsObjectStorySpecUtils",
    "AdsPEAdgroupSelectors",
    "AdsPEExportTypes",
    "AdsPagePostProvider",
    "AdsVideoStore",
    "FluxDerivedStore",
    "isStringNullOrEmpty",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsPagePostProvider").toFluxStore(),
      u = o("AdsPEExportTypes").AdgroupExtraDataRecord({
        link_url: null,
        story_spec_description: null,
        body: null,
        story_spec_call_to_action_type: null,
        permalink_url: null,
      }),
      c = (function (t) {
        function n() {
          return t.call(this, e || (e = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__computeResult = function (t, n) {
            var e = n.adgroupLoader,
              a = n.image,
              i = n.post,
              l = n.video;
            return e.map(function (e) {
              var t,
                n,
                s,
                c,
                d,
                m = i;
              if (m) {
                if (m.loadState === r("AdsLoadState_LEGACY").LOADING)
                  return o("AdsLoadStateUtils_LEGACY")
                    .toLoadObject(m)
                    .map(function () {
                      return u;
                    });
                m.loadState === r("AdsLoadState_LEGACY").ERROR && (m = null);
              }
              var p;
              if (a && typeof a != "string") {
                if (a.loadState === r("AdsLoadState_LEGACY").LOADING)
                  return o("AdsLoadStateUtils_LEGACY")
                    .toLoadObject(a)
                    .map(function () {
                      return u;
                    });
                a.loadState === r("AdsLoadState_LEGACY").LOADED && (p = a.name);
              }
              var _;
              if (l) {
                if (l.loadState === r("AdsLoadState_LEGACY").LOADING)
                  return o("AdsLoadStateUtils_LEGACY")
                    .toLoadObject(l)
                    .map(function () {
                      return u;
                    });
                l.loadState === r("AdsLoadState_LEGACY").LOADED &&
                  (_ = l.title);
              }
              var f = (t = e.creative) == null ? void 0 : t.asset_feed_spec,
                g = f == null ? void 0 : f.asset_customization_rules,
                h =
                  g == null
                    ? void 0
                    : g.find(function (e) {
                        return e.is_default;
                      }),
                y = h == null || (n = h.link_url_label) == null ? void 0 : n.id,
                C = f == null ? void 0 : f.link_urls,
                b =
                  C == null
                    ? void 0
                    : C.find(function (e) {
                        var t;
                        return (t = e.adlabels) == null
                          ? void 0
                          : t.some(function (e) {
                              return e.id === y;
                            });
                      }),
                v =
                  (s = b == null ? void 0 : b.website_url) != null
                    ? s
                    : (c = m) == null ||
                        (c = c.call_to_action) == null ||
                        (c = c.value) == null
                      ? void 0
                      : c.link,
                S =
                  (d = m) == null || (d = d.call_to_action) == null
                    ? void 0
                    : d.type,
                R = o("AdsObjectStorySpecUtils").isUsingObjectStorySpec(e);
              return u.withMutations(function (e) {
                (p && e.set("image_file_name", p),
                  _ != null && e.set("video_file_name", _),
                  m &&
                    (e.set("link_url", v != null ? v : null),
                    e.set(
                      "story_spec_call_to_action_type",
                      S != null ? S : null,
                    ),
                    e.set("permalink_url", m.permalink_url),
                    R ||
                      (e.set("story_spec_description", m.description),
                      e.set("body", m.message))));
              });
            });
          }),
          (a.__getData = function (t) {
            var e = o("AdsPEAdgroupSelectors").getSelector_LEGACY()(t),
              n = e.getValue(),
              a = r("AdsDCOPreviewTokenProvider").toFluxSelector()(t).get(t),
              i,
              l,
              u;
            if (n) {
              var c,
                d,
                m = o("AdsAdgroupImageUtils").getImageHash(n);
              m != null && (l = r("AdsImageStore").getOneFor(n.account_id, m));
              var p =
                (c = n.creative) == null ||
                (c = c.object_story_spec) == null ||
                (c = c.video_data) == null
                  ? void 0
                  : c.video_id;
              p != null && (u = r("AdsVideoStore").get(p));
              var _ =
                n == null || (d = n.creative) == null
                  ? void 0
                  : d.object_story_id;
              r("isStringNullOrEmpty")(_) ||
                (i = o(
                  "AdsLoadStateUtils_LEGACY",
                ).fromLoadObjectTreatEmptyAsLoading(s.getState().get(_)));
            }
            return {
              adgroupLoader: e,
              dcoAdToken: a,
              post: i,
              image: l,
              video: u,
            };
          }),
          (a.__getStores = function () {
            return [].concat(
              o("AdsPEAdgroupSelectors").getSelector_LEGACY.getStores(),
              [s, r("AdsImageStore"), r("AdsVideoStore")],
            );
          }),
          (a.__areEqual = function (t, n) {
            return r("shallowEqual")(t, n);
          }),
          n
        );
      })(r("FluxDerivedStore"));
    c.__moduleID = i.id;
    var d = new c();
    l.default = d;
  },
  98,
);
