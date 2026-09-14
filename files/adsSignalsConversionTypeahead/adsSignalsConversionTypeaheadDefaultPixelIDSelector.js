__d(
  "adsSignalsConversionTypeaheadDefaultPixelIDSelector",
  [
    "AdsCPASCampaignPartnerEventSourcesStateDataProvider",
    "adsCreateSelector",
    "adsSignalSourceContainersSelector",
    "adsSignalsWebsiteOptimizableCustomConversionsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r(
            "AdsCPASCampaignPartnerEventSourcesStateDataProvider",
          ).toFluxSelector(),
          o("adsSignalSourceContainersSelector").createSignalContainersSelector(
            "website",
          ),
          r("adsSignalsWebsiteOptimizableCustomConversionsSelector"),
        ],
        function (t, n, r) {
          if (
            t.isPartnerSourcesSelected ||
            !n.hasValueWithoutError() ||
            !r.hasValueWithoutError()
          )
            return null;
          var e = n.getValueEnforcing();
          if (e.size !== 1) return null;
          var o = e.first(),
            a = o.id,
            i = r.getValueEnforcing().filter(function (e) {
              return !e.isArchived;
            });
          return i.every(function (e) {
            var t;
            return ((t = e.pixel) == null ? void 0 : t.id) === a;
          })
            ? a
            : null;
        },
        { name: i.id + ".adsSignalsConversionTypeaheadDefaultPixelIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
