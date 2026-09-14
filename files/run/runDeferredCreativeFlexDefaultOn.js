__d(
  "runDeferredCreativeFlexDefaultOn",
  [
    "AdsCreativeFlexDefaultOnDispatchState",
    "AdsCreativeFlexLoggingUtils",
    "AdsCreativeFlexMediaPickerUtils",
    "AdsCreativeFlexRelatedMediaUtils",
    "FBLogger",
    "LoadObject",
    "RelayHooks",
    "immutable",
    "performanceNow",
    "useAdsCreativeFlexRecommendedMediaData.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.adgroupIDs,
        a = t.callsite,
        l = t.excludedMediaIdentifiers,
        s = t.fetchPolicy,
        u = s === void 0 ? "store-or-network" : s,
        c = t.hostID,
        d = t.isDeferred,
        m = t.isStaleAtWriteTime,
        p = t.relatedMediaQueryInput,
        _ = t.relayEnvironment,
        f = t.warningMessage;
      if (
        !(
          n.length === 0 ||
          o(
            "AdsCreativeFlexDefaultOnDispatchState",
          ).isCreativeFlexDefaultOnDispatched(n) ||
          p == null
        )
      ) {
        var g = p.target_media_identifier;
        if (!(g == null || g === "")) {
          var h = o(
              "AdsCreativeFlexDefaultOnDispatchState",
            ).captureCreativeFlexDefaultOnGeneration(n),
            y = n[0],
            C = (e || (e = r("performanceNow")))();
          o("RelayHooks")
            .fetchQuery(
              _,
              o("useAdsCreativeFlexRecommendedMediaData.react")
                .adsCreativeFlexRecommendedMediaDataQuery,
              { input: p, skip: !1 },
              { fetchPolicy: u },
            )
            .subscribe({
              next: function (s) {
                var t = Math.round((e || (e = r("performanceNow")))() - C);
                if (
                  o(
                    "AdsCreativeFlexDefaultOnDispatchState",
                  ).isCreativeFlexDefaultOnSuperseded(h)
                ) {
                  o("AdsCreativeFlexLoggingUtils").logCreativeFlexRescueOutcome(
                    y,
                    "superseded_generation",
                    t,
                    g,
                    null,
                    a,
                  );
                  return;
                }
                if (
                  o(
                    "AdsCreativeFlexDefaultOnDispatchState",
                  ).isCreativeFlexDefaultOnDispatched(n)
                ) {
                  o("AdsCreativeFlexLoggingUtils").logCreativeFlexRescueOutcome(
                    y,
                    "guard_claimed",
                    t,
                    g,
                    null,
                    a,
                  );
                  return;
                }
                if (m()) {
                  o("AdsCreativeFlexLoggingUtils").logCreativeFlexRescueOutcome(
                    y,
                    "stale_target_media",
                    t,
                    g,
                    null,
                    a,
                  );
                  return;
                }
                var u = (l != null ? l : []).filter(Boolean),
                  p = o(
                    "AdsCreativeFlexRelatedMediaUtils",
                  ).convertToRelatedMediaFromQueryData(
                    s,
                    u.length > 0 ? u : [g],
                  ),
                  _ = o(
                    "AdsCreativeFlexMediaPickerUtils",
                  ).dispatchCreativeFlexDefaultOn(
                    n,
                    c,
                    r("LoadObject").withValue(
                      r("immutable").OrderedMap([[g, p]]),
                      { creatorModuleID: i.id },
                    ),
                    d,
                    a,
                  );
                (_ &&
                  o(
                    "AdsCreativeFlexDefaultOnDispatchState",
                  ).markCreativeFlexDefaultOnDispatched(n),
                  o("AdsCreativeFlexLoggingUtils").logCreativeFlexRescueOutcome(
                    y,
                    _ ? "wrote" : "no_optin_media",
                    t,
                    g,
                    p.length,
                    a,
                  ));
              },
              error: function (n) {
                (o("AdsCreativeFlexLoggingUtils").logCreativeFlexRescueOutcome(
                  y,
                  "fetch_error",
                  Math.round((e || (e = r("performanceNow")))() - C),
                  g,
                  null,
                  a,
                ),
                  r("FBLogger")("ads_creative_flex").catching(n).warn(f));
              },
            });
        }
      }
    }
    l.default = s;
  },
  98,
);
