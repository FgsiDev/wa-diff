__d(
  "AdsUEditorAdgroupSetPACInteractiveComponentReducerPlugin",
  [
    "invariant",
    "AdsAPIObjectives",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsInteractiveComponentConstants",
    "AdsInteractivePollLinkUtils",
    "AdsMutators",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPACInteractiveComponentDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUpcomingEventMetadataMutators",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorAdgroupVideoMutators",
    "AdsUEditorCampaignSelectors",
    "adsInteractiveComponentsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.eligibilityInformation,
              i = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                l,
                u,
                c = r("nullthrows")(i.get(e.id)),
                d = !!t.hasPollOptionLink,
                m =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.videos,
                p =
                  (l = e.creative) == null || (l = l.asset_feed_spec) == null
                    ? void 0
                    : l.images,
                _ =
                  (u = e.creative) == null || (u = u.asset_feed_spec) == null
                    ? void 0
                    : u.carousels,
                f = t.label;
              if (t.carouselAssetIndex != null && _ != null) {
                var g = t.carouselAssetIndex,
                  h = _.find(function (e) {
                    return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === f;
                  });
                if (h != null) {
                  var y,
                    C = h.getIn([
                      "child_attachments",
                      g,
                      "video_label",
                      "name",
                    ]),
                    b = h.getIn([
                      "child_attachments",
                      g,
                      "image_label",
                      "name",
                    ]);
                  f = (y = C != null ? C : b) != null ? y : f;
                }
              }
              var v = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                  m,
                  f,
                ).index,
                S =
                  v == null
                    ? o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(p, f)
                        .index
                    : null;
              v != null || S != null || s(0, 561);
              var R = e;
              if (
                (t.componentsSpec != null && t.componentsSpec.size > 0
                  ? (R = o(
                      "AdsUEditorAdgroupUpcomingEventsMutator",
                    ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
                      R,
                      o("AdsUEditorAdgroupUpcomingEventsMutator")
                        .ResetUpcomingEventSpecReason
                        .INTERACTIVE_COMPONENT_SPEC_CHANGED,
                    ))
                  : (R = o(
                      "AdsUEditorAdgroupUpcomingEventMetadataMutators",
                    ).removeUpcomingEventMetadataDisabledReason(
                      R,
                      "INTERACTIVE_COMPONENT_COLLISION",
                    )),
                m != null && v != null)
              ) {
                var L = o(
                    "AdsUEditorAdgroupVideoMutators",
                  ).isolateVideoAssetWithLabel(R, c, v, t.label),
                  E = L.adgroupWithIsolatedVideoAsset,
                  k = L.isolatedVideoAssetIndex;
                if (k === v) {
                  var I = o(
                    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                  ).applyInteractiveComponentSpecToCarouselAsset(
                    t,
                    R,
                    c,
                    v,
                    !0,
                  );
                  if (I != null) return I;
                }
                R = o(
                  "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                ).applyInteractiveComponentSpecToVideoAsset(
                  E,
                  c,
                  k,
                  t.componentsSpec,
                );
                var T = a.objective;
                (T === r("AdsAPIObjectives").APP_INSTALLS
                  ? (R = o(
                      "AdsInteractivePollLinkUtils",
                    ).updateAppInstallDisplayLink(R, c))
                  : ((R = o(
                      "AdsInteractivePollLinkUtils",
                    ).updateAdgroupWebsiteLink(
                      R,
                      c,
                      t.canUsePacOptionalLinks,
                      d,
                    )),
                    (R = o("AdsInteractivePollLinkUtils").updateDisplayLink(
                      R,
                      c,
                    ))),
                  (R = o(
                    "AdsUEditorAdgroupVideoMutators",
                  ).removeDuplicateVideoAssets(R, c)));
              } else if (S != null) {
                var D = o(
                    "AdsUEditorAdgroupImageMutators",
                  ).isolateImageAssetWithLabel(R, c, S, t.label),
                  x = D.adgroupWithIsolatedImageAsset,
                  $ = D.isolatedImageAssetIndex;
                if ($ === S) {
                  var P = o(
                    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                  ).applyInteractiveComponentSpecToCarouselAsset(
                    t,
                    R,
                    c,
                    S,
                    !1,
                  );
                  if (P != null) return P;
                }
                ((R = o(
                  "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                ).applyInteractiveComponentSpecToImageAsset(
                  x,
                  c,
                  $,
                  t.componentsSpec,
                )),
                  (R = o(
                    "AdsUEditorAdgroupImageMutators",
                  ).removeDuplicateImageAssets(R, c)));
              }
              var N = o(
                "adsInteractiveComponentsUtils",
              ).adgroupHasInteractiveComponents(
                R,
                o("AdsInteractiveComponentConstants")
                  .INTERACTIVE_COMPONENT_POLL_TYPE,
              );
              return (
                N &&
                  o("AdsAssetFeedUtils").isPacAdgroupUsingTextDOF(R) &&
                  (R = o(
                    "AdsAssetFeedMutationUtils",
                  ).removeTextDoFOptionsFromPACAssetFeed(R)),
                R
              );
            });
          },
          o("AdsUEditorAdgroupSetPACInteractiveComponentDataActionFlux")
            .actionType,
        ),
      },
      u = e;
    l.default = u;
  },
  98,
);
