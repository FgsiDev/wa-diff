__d(
  "AdsUEditorAdgroupDeleteWebsiteDestinationOptimizationAlternativeURLLinkValueReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupDeleteWebsiteDestinationOptimizationAlternativeURLLinkValueDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                r =
                  (n = e.creative) == null ||
                  (n = n.destination_spec) == null ||
                  (n = n.website) == null ||
                  (n = n.optimization) == null ||
                  (n = n.alternative_urls) == null
                    ? void 0
                    : n.get(t.index),
                a = (r == null ? void 0 : r.get("default_url")) != null;
              return o("AdsMutators").chain(
                function (e) {
                  return a
                    ? e
                    : o(
                        "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
                      ).deleteWebsiteDestinationOptimizationAlternativeURLNewLink(
                        e,
                        t.index,
                      );
                },
                function (e) {
                  return a && (r == null ? void 0 : r.get("url")) != null
                    ? o(
                        "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
                      ).deleteWebsiteDestinationOptimizationAlternativeURLLink(
                        e,
                        t.index,
                      )
                    : e;
                },
                function (e) {
                  return a &&
                    (r == null ? void 0 : r.get("value_weight")) != null
                    ? o(
                        "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
                      ).deleteWebsiteDestinationOptimizationAlternativeURLValueWeight(
                        e,
                        t.index,
                      )
                    : e;
                },
                function (e) {
                  return a &&
                    (r == null ? void 0 : r.get("value_weight_direction")) !=
                      null
                    ? o(
                        "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
                      ).deleteWebsiteDestinationOptimizationAlternativeURLValueWeightDirection(
                        e,
                        t.index,
                      )
                    : e;
                },
              )(e);
            });
          },
          r(
            "AdsUEditorAdgroupDeleteWebsiteDestinationOptimizationAlternativeURLLinkValueDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
