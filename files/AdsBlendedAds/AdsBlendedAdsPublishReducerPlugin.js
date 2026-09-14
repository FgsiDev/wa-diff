__d(
  "AdsBlendedAdsPublishReducerPlugin",
  [
    "AdDraftFragmentSource",
    "AdsBlendedAdsCreationDefaultingStickyOptUpdateAction",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "Laminar",
    "Promise",
    "adsCreateSelector",
    "cr:8707",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        n("cr:8707") != null
          ? r("adsCreateSelector")(
              [n("cr:8707").adsBlendedAdsCreationDefaultingGeneralDataSelector],
              function (t) {
                return babelHelpers.extends({ moduleImported: !0 }, t);
              },
              { name: i.id },
            )
          : r("adsCreateSelector")(
              [],
              function () {
                return { moduleImported: !1 };
              },
              { name: i.id },
            );
    function u(e) {
      return e === r("AdDraftFragmentSource").BLENDED_ADS_VIA_CREATION;
    }
    var c = {
        reduce: o("Laminar").withFluxSelectors(
          { requiredData: s },
          function (t, a, l) {
            var s,
              c = l.requiredData;
            if (!c.moduleImported || !c.isBlendedAdsRuleShouldApply) return t;
            var d = ((s = a.selection) != null ? s : r("immutable").Map())
              .get("ad", r("immutable").OrderedSet())
              .toOrderedSet();
            if (d.isEmpty()) return t;
            var m = c.selectedAdgroups.find(function (e) {
              var t;
              return (
                d.contains(e.id) &&
                u(
                  e == null || (t = e.metadata) == null
                    ? void 0
                    : t.adgroup_creation_source,
                ) &&
                o("AdsDynamicAdsUtils").isDynamicAd(e) &&
                o("AdsChildAttachmentsUtils").isCarouselAd(e)
              );
            });
            return (
              m != null &&
                r("promiseDone")(
                  (e || (e = n("Promise"))).resolve({}),
                  function () {
                    r(
                      "AdsBlendedAdsCreationDefaultingStickyOptUpdateAction",
                    ).dispatch(
                      { toggleValue: "OPTED_IN" },
                      {
                        line: "87",
                        module: "AdsBlendedAdsPublishReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  },
                ),
              t
            );
          },
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
