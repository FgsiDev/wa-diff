__d(
  "SYDPreloading",
  [
    "AdsDuplicateOptimalGoodCampaignsExperimentUtils",
    "AdsManager2026H2ExperimentUtils",
    "SYDAccountInfoWidgetContainerV3Query.graphql",
    "SYDGuidanceHubConstants",
    "SYDGuidanceHubV3RelayContainerLiveQuery.graphql",
    "SYDMetricSnapshotWidgetContainerQuery.graphql",
    "SYDNewFeaturesWidgetGraphQLContainerQuery.graphql",
    "SYDPageRELAYQuery.graphql",
    "gkx",
    "qex",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = {
          accountID: t,
          shouldPrefetchThumbnails: o(
            "AdsDuplicateOptimalGoodCampaignsExperimentUtils",
          ).isEligibleForOptimalStartExpansionSilent(),
          shouldPrefetchSYDUris: (n = r("gkx"))("23673"),
          shouldDeferAdSliderOutcomeEstimates: o(
            "AdsManager2026H2ExperimentUtils",
          ).getShouldDeferAdsSliderEstimates(),
          shouldUseRelay3D: n("25009"),
          shouldSkipWhatsAppMM: !n("23048"),
          shouldSkipMessengerMM: !n("25010"),
          failsGK: !1,
          flexSolutionID: "752633296223652",
          channel: "ADS_PERSONAL_SETTINGS_WIDGET",
          gk_perseus_syd_nuo_merge_3d: n("11703"),
          shouldFetchSYDMAIBAAccountInsights: r("qex")._("4661") === !0,
        },
        i = o("relay-runtime").getRequest(r("SYDPageRELAYQuery.graphql")),
        l = o("relay-runtime").createOperationDescriptor(i, a),
        s = e.retain(l),
        u = !1,
        c = !1,
        d = o("relay-runtime")
          .fetchQuery(e, r("SYDPageRELAYQuery.graphql"), a, {
            fetchPolicy: "store-or-network",
          })
          .subscribe(
            r("gkx")("8403")
              ? {
                  complete: function () {
                    u = !0;
                  },
                  error: function () {
                    ((c = !0), s.dispose());
                  },
                }
              : {},
          );
      return {
        hasError: function () {
          return c;
        },
        unsubscribe: function () {
          return d.unsubscribe();
        },
        release: function () {
          return s.dispose();
        },
        isComplete: function () {
          return u;
        },
      };
    }
    function s(e, t) {
      if (r("qex")._("5523") || r("qex")._("4706"))
        return {
          hasError: function () {
            return !1;
          },
          unsubscribe: function () {},
          release: function () {},
          isComplete: function () {
            return !0;
          },
        };
      var n = {
          accountID: t,
          useEntrypointForWidgetModal: !0,
          shouldPrefetchSYDUris: r("gkx")("23673"),
        },
        a = o("relay-runtime").getRequest(
          r("SYDMetricSnapshotWidgetContainerQuery.graphql"),
        ),
        i = o("relay-runtime").createOperationDescriptor(a, n),
        l = e.retain(i),
        s = !1,
        u = !1,
        c = o("relay-runtime")
          .fetchQuery(
            e,
            r("SYDMetricSnapshotWidgetContainerQuery.graphql"),
            n,
            { fetchPolicy: "store-or-network" },
          )
          .subscribe(
            r("gkx")("8403")
              ? {
                  complete: function () {
                    s = !0;
                  },
                  error: function () {
                    ((u = !0), l.dispose());
                  },
                }
              : {},
          );
      return {
        hasError: function () {
          return u;
        },
        unsubscribe: function () {
          return c.unsubscribe();
        },
        release: function () {
          return l.dispose();
        },
        isComplete: function () {
          return s;
        },
      };
    }
    function u(e, t) {
      if (!r("gkx")("18880"))
        return {
          hasError: function () {
            return !1;
          },
          isComplete: function () {
            return !0;
          },
          release: function () {},
          unsubscribe: function () {},
        };
      var n = { adAccountID: t },
        a = o("relay-runtime").getRequest(
          r("SYDAccountInfoWidgetContainerV3Query.graphql"),
        ),
        i = o("relay-runtime").createOperationDescriptor(a, n),
        l = e.retain(i),
        s = !1,
        u = !1,
        c = o("relay-runtime")
          .fetchQuery(e, r("SYDAccountInfoWidgetContainerV3Query.graphql"), n, {
            fetchPolicy: "store-or-network",
          })
          .subscribe({
            complete: function () {
              s = !0;
            },
            error: function () {
              ((u = !0), l.dispose());
            },
          });
      return {
        hasError: function () {
          return u;
        },
        unsubscribe: function () {
          return c.unsubscribe();
        },
        release: function () {
          return l.dispose();
        },
        isComplete: function () {
          return s;
        },
      };
    }
    function c(e, t) {
      var n = {
          adAccountID: t,
          requestId: o("SYDGuidanceHubConstants").OPPORTUNITY_SCORE_REQUEST_ID,
          contentRequest: {
            group_by: ["RECOMMENDATION_TYPE", "EXPERIENCE_TYPE"],
          },
          recommendation3D: r("gkx")("11331"),
          shouldPrefetchSYDUris: r("gkx")("23673"),
        },
        a = o("relay-runtime").getRequest(
          r("SYDGuidanceHubV3RelayContainerLiveQuery.graphql"),
        ),
        i = o("relay-runtime").createOperationDescriptor(a, n),
        l = e.retain(i),
        s = !1,
        u = !1,
        c = o("relay-runtime")
          .fetchQuery(
            e,
            r("SYDGuidanceHubV3RelayContainerLiveQuery.graphql"),
            n,
            { fetchPolicy: "store-or-network" },
          )
          .subscribe(
            r("gkx")("8403")
              ? {
                  complete: function () {
                    s = !0;
                  },
                  error: function () {
                    ((u = !0), l.dispose());
                  },
                }
              : {},
          );
      return {
        hasError: function () {
          return u;
        },
        unsubscribe: function () {
          return c.unsubscribe();
        },
        release: function () {
          return l.dispose();
        },
        isComplete: function () {
          return s;
        },
      };
    }
    function d(e, t) {
      if (
        !o("AdsManager2026H2ExperimentUtils").getShouldPreloadNewFeaturesSyd()
      )
        return {
          hasError: function () {
            return !1;
          },
          isComplete: function () {
            return !0;
          },
          release: function () {},
          unsubscribe: function () {},
        };
      var n = { adAccountID: t, shouldPrefetchSYDUris: r("gkx")("23673") },
        a = o("relay-runtime").getRequest(
          r("SYDNewFeaturesWidgetGraphQLContainerQuery.graphql"),
        ),
        i = o("relay-runtime").createOperationDescriptor(a, n),
        l = e.retain(i),
        s = !1,
        u = !1,
        c = o("relay-runtime")
          .fetchQuery(
            e,
            r("SYDNewFeaturesWidgetGraphQLContainerQuery.graphql"),
            n,
            { fetchPolicy: "store-or-network" },
          )
          .subscribe({
            complete: function () {
              s = !0;
            },
            error: function () {
              ((u = !0), l.dispose());
            },
          });
      return {
        hasError: function () {
          return u;
        },
        unsubscribe: function () {
          return c.unsubscribe();
        },
        release: function () {
          return l.dispose();
        },
        isComplete: function () {
          return s;
        },
      };
    }
    ((l.preloadPage = e),
      (l.preloadMetricSnapshot = s),
      (l.preloadAccountInfoV3 = u),
      (l.preloadGuidanceHub = c),
      (l.preloadNewFeatures = d));
  },
  98,
);
