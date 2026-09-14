__d(
  "AdsAdgroupDraftFragmentSetCollectionCoverMediaReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAudienceDirectConfig",
    "AdsDataAtom",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsPageStore",
    "AdsSelectorUtils",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupMutators",
    "AdsVideoStore",
    "ApiAdObjectTypes",
    "adsAdgroupDraftFragmentCreateReducer",
    "adsObjectiveSelector",
    "adsPromotedObjectTypeSelector_LEGACY",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n) {
      return o("AdsMutators").mutateEach(e, t, function (e) {
        var t = r("adsObjectiveSelector")({ adgroup: e }),
          a = r("AdsAdgroupSpecPathPluginResolver").resolve({
            accountType: r("AdsAudienceDirectConfig").accountType,
            objective: t,
            promotedObjectType: r("adsPromotedObjectTypeSelector_LEGACY")(
              e.adset_id,
            ),
          });
        return o("AdsMediaFormatMutators").setMediaFormat(n, e, a, t);
      });
    }
    var c = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (t, n) {
            (s || (s = r("AdsDataAtom"))).waitFor(
              [r("AdsAccountStore"), r("AdsPageStore")]
                .concat(
                  r("adsObjectiveSelector").getStores(),
                  r("adsPromotedObjectTypeSelector_LEGACY").getStores(),
                )
                .map(function (e) {
                  return e.getDispatchToken();
                }),
            );
            var a = r("AdsAccountStore").getSelectedAccount().getValue(),
              i = o("AdsMutators").chain(function (e) {
                return e;
              });
            if (n.canvasHasTemplateVideoElement)
              i = o("AdsMutators").chain(function (e) {
                return o("AdsMutators").mutateEach(e, n.ids, function (e) {
                  return o(
                    "AdsUEditorAdgroupMutators",
                  ).templateVideoMediaTypeSelected(e);
                });
              });
            else if (n.imageURL != null && n.imageURL !== "" && a != null)
              i = o("AdsMutators").chain(
                function (e) {
                  return o("AdsMutators").mutateEach(e, n.ids, function (e) {
                    return o(
                      "AdsUEditorAdgroupMutators",
                    ).transformTemplateVideoMediaToImageMedia(e);
                  });
                },
                function (e) {
                  return u(e, n.ids, "IMAGE");
                },
                function (e) {
                  return o("AdsMutators").mutateEach(e, n.ids, function (e) {
                    var t = r("AdsAdgroupSpecPathPluginResolver").resolve({
                        accountType: r("AdsAudienceDirectConfig").accountType,
                        objective: r("adsObjectiveSelector")({ adgroup: e }),
                        promotedObjectType: r(
                          "adsPromotedObjectTypeSelector_LEGACY",
                        )(e.adset_id),
                      }),
                      i = r("AdsAdgroupSemanticFields").pageID.get(t, e),
                      l = i != null ? r("AdsPageStore").get(i) : null;
                    return o("AdsUEditorAdgroupImageMutators").setImage(
                      a,
                      void 0,
                      n.imageURL,
                      void 0,
                      void 0,
                      void 0,
                      void 0,
                      e,
                      t,
                      l,
                    );
                  });
                },
              );
            else if (n.videoId != null && n.videoId != "") {
              var l = n.videoId;
              (s || (s = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                  r("AdsVideoStore").getSelector,
                ]),
              );
              var c = r("AdsVideoStore").getSelector();
              i = o("AdsMutators").chain(
                function (e) {
                  return o("AdsMutators").mutateEach(e, n.ids, function (e) {
                    return o(
                      "AdsUEditorAdgroupMutators",
                    ).transformTemplateVideoMediaToImageMedia(e);
                  });
                },
                function (e) {
                  return u(e, n.ids, "VIDEO");
                },
                function (e) {
                  return o("AdsMutators").mutateEach(e, n.ids, function (e) {
                    var t = r("AdsAdgroupSpecPathPluginResolver").resolve({
                        accountType: r("AdsAudienceDirectConfig").accountType,
                        objective: r("adsObjectiveSelector")({ adgroup: e }),
                        promotedObjectType: r(
                          "adsPromotedObjectTypeSelector_LEGACY",
                        )(e.adset_id),
                      }),
                      n = c(l);
                    return o("AdsUEditorAdgroupMutators").setVideoID({
                      adgroup: e,
                      specPathPlugin: t,
                      videoID: n == null ? void 0 : n.id,
                      preferredThumbnail:
                        n == null ? void 0 : n.preferredThumbnail,
                    });
                  });
                },
              );
            } else
              a != null &&
                (i = o("AdsMutators").chain(function (e) {
                  return o("AdsMutators").mutateEach(e, n.ids, function (e) {
                    var t;
                    r("vulture")("lkmB5qO14lwa3cTQXqRiW2tusN0=");
                    var n = r("AdsAdgroupSpecPathPluginResolver").resolve({
                        accountType: r("AdsAudienceDirectConfig").accountType,
                        objective: r("adsObjectiveSelector")({ adgroup: e }),
                        promotedObjectType: r(
                          "adsPromotedObjectTypeSelector_LEGACY",
                        )(e.adset_id),
                      }),
                      i = (t = e.creative) == null ? void 0 : t.object_type;
                    return i === r("ApiAdObjectTypes").VIDEO
                      ? o("AdsUEditorAdgroupMutators").setVideoID({
                          adgroup: e,
                          specPathPlugin: n,
                          videoID: null,
                          preferredThumbnail: null,
                        })
                      : o("AdsUEditorAdgroupImageMutators").setImage(
                          a,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          e,
                          n,
                          null,
                        );
                  });
                }));
            return i(t);
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
