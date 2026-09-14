__d(
  "AdsAdgroupDraftFragmentsCopyCompletedReducerPlugin",
  [
    "fbt",
    "AdsAPIImagePaths",
    "AdsAccountStore",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAudienceDirectConfig",
    "AdsDataAtom",
    "AdsFixCAGPostIDsAfterDuplication",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupDuplicatePAC1ToPAC2ReducerPlugin",
    "AdsUEditorAdgroupImageSwapMutatorUtils",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "ShutterstockImageUtils",
    "adsAdgroupDraftFragmentCreateReducer",
    "adsObjectiveSelector",
    "adsPromotedObjectTypeSelector_LEGACY",
    "getByPath",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(t, n) {
      var a;
      (e || (e = r("AdsDataAtom"))).waitFor(
        [r("AdsAccountStore"), r("AdsPageStore")]
          .concat(
            r("adsObjectiveSelector").getStores(),
            r("adsPromotedObjectTypeSelector_LEGACY").getStores(),
          )
          .map(function (e) {
            return e.getDispatchToken();
          }),
      );
      var i = n == null || (a = n.extraData) == null ? void 0 : a.images;
      return i == null || i.length === 0
        ? t
        : i.reduce(function (e, t, a) {
            var i,
              l,
              u,
              d = r("getByPath")(t, r("AdsAPIImagePaths").HASH),
              m =
                t == null || (i = t.creative) == null
                  ? void 0
                  : i.thumbnail_url,
              p =
                t == null || (l = t.creative) == null
                  ? void 0
                  : l.thumbnail_height,
              _ =
                t == null || (u = t.creative) == null
                  ? void 0
                  : u.thumbnail_width,
              f,
              g = t.stockImageID;
            g != null && g !== ""
              ? (f = o("ShutterstockImageUtils").idToURL(g))
              : (f = r("getByPath")(t, r("AdsAPIImagePaths").URL));
            var h = r("AdsAccountStore").getSelectedAccount().getValue();
            return h == null
              ? e
              : o("AdsMutators").mutateEach(e, [n.ids[a]], function (e) {
                  var t,
                    n,
                    i,
                    l = r("AdsAdgroupSpecPathPluginResolver").resolve({
                      accountType: r("AdsAudienceDirectConfig").accountType,
                      objective: r("adsObjectiveSelector")({ adgroup: e }),
                      promotedObjectType: r(
                        "adsPromotedObjectTypeSelector_LEGACY",
                      )(e.adset_id),
                    }),
                    u = r("AdsAdgroupSemanticFields").pageID.get(l, e),
                    g = u ? r("AdsPageStore").get(u) : null,
                    y =
                      (t =
                        (n = e.creative) == null ||
                        (n = n.object_story_spec) == null ||
                        (n = n.link_data) == null
                          ? void 0
                          : n.image_hash) != null
                        ? t
                        : (i = e.creative) == null ||
                            (i = i.object_story_spec) == null ||
                            (i = i.link_data) == null
                          ? void 0
                          : i.picture,
                    C = o(
                      "AdsUEditorAdgroupImageSwapMutatorUtils",
                    ).setPrimaryImageAndClearPlatformCustomizations({
                      account: h,
                      adgroup: e,
                      image: {
                        imageHash: d,
                        imageURL: f,
                        thumbnailHeight: p,
                        thumbnailURL: m,
                        thumbnailWidth: _,
                      },
                      page: g,
                      specPathPlugin: l,
                    }),
                    b = r("gkx")("5334")
                      ? o(
                          "AdsUEditorAdgroupMultiMediaSpecMutators",
                        ).maySyncPrimaryMSSImageWithOSS(C, y)
                      : C,
                    v = s._(/*BTDS*/ "- Image {number}", [
                      s._param("number", a + 1),
                    ]);
                  return c(b, v);
                });
          }, t);
    }
    function c(e, t) {
      var n = e.name,
        o = n + " " + t.toString();
      return r("AdsAdgroupRecordAccessors").name.set(o, e);
    }
    var d = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e, t) {
            return e;
          },
          function (e, t) {
            if (!t.responses || !t.responses.length) return e;
            var n = t.responses[0];
            return n.extraData ? u(e, n) : e;
          },
          function (e, t) {
            var n = r(
              "AdsUEditorAdgroupDuplicatePAC1ToPAC2ReducerPlugin",
            ).reduce.editingReducer(e, t);
            return r("AdsFixCAGPostIDsAfterDuplication")(n, t);
          },
          function (e) {
            return e;
          },
        ),
      },
      m = d;
    l.default = m;
  },
  226,
);
