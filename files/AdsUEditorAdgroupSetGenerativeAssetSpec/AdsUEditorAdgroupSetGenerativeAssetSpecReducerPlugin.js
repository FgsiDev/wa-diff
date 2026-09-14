__d(
  "AdsUEditorAdgroupSetGenerativeAssetSpecReducerPlugin",
  [
    "AdsCreativeGenAITypes",
    "AdsCreativeVideoGenStateHelpers",
    "AdsGenAIVariationsUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetGenerativeAssetSpecDataActionFlux",
    "GenAISpecWriter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {},
        function (e, t) {
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            if (s(e, t)) return e;
            var n = o(
                "AdsGenAIVariationsUtils",
              ).getGeneratedVariablesFromActionParams(t),
              r = n.filter(function (e) {
                var t = e.enroll_status;
                return t === "OPT_IN";
              });
            return u(r) || c(e, t, n)
              ? e
              : t.modalActionType ===
                  o("AdsCreativeGenAITypes").GenAIModalAction.SAVE
                ? d(e, t, r)
                : e;
          });
        },
        r("AdsUEditorAdgroupSetGenerativeAssetSpecDataActionFlux").actionType,
      ),
    };
    function s(e, t) {
      var n;
      return (
        t.modalActionType ===
          o("AdsCreativeGenAITypes").GenAIModalAction.CANCEL &&
        ((n = e.creative) == null ||
        (n = n.generative_asset_spec) == null ||
        (n = n.images) == null
          ? void 0
          : n.enroll_status) != null
      );
    }
    function u(e) {
      return e.some(function (e) {
        var t;
        return (t = e.hash) == null ? void 0 : t.match(/^[0-9]+$/);
      });
    }
    function c(e, t, n) {
      var r;
      return (
        t.modalActionType ===
          o("AdsCreativeGenAITypes").GenAIModalAction.SAVE &&
        n.length === 0 &&
        ((r = e.creative) == null ||
        (r = r.generative_asset_spec) == null ||
        (r = r.images) == null
          ? void 0
          : r.enroll_status) != null &&
        t.saveVideoGen !== !0
      );
    }
    function d(e, t, n) {
      var r,
        a,
        i,
        l,
        s =
          t.videoGenState != null
            ? o("AdsCreativeVideoGenStateHelpers")
                .getSelectedEntVideos(t.videoGenState)
                .map(function (e) {
                  return { videoID: e, metadata: { source: "GENERATION" } };
                })
            : [];
      return o("GenAISpecWriter").adoptGenAIVariants(e, {
        adgroupId: e.id,
        entrypoint: "ads_manager__media_picker",
        imageAssets: n.map(function (e) {
          var t;
          return {
            adImageHash: e.hash,
            metadata: {
              source: "GENERATION",
              model: (t = e.model) != null ? t : void 0,
            },
          };
        }),
        heroImageHash: (r = t.heroHash) != null ? r : void 0,
        saveVideoGen: t.saveVideoGen,
        videoGenerationStatusID:
          (a = t.videoGenState) == null ? void 0 : a.videoStatusID,
        sourcedAssetID:
          (i = t.videoGenState) == null ? void 0 : i.sourcedAssetID,
        videoGenRequestID: (l = t.videoGenState) == null ? void 0 : l.requestID,
        videoAssets: t.saveVideoGen === !0 ? s : void 0,
      });
    }
    var m = e;
    l.default = m;
  },
  98,
);
