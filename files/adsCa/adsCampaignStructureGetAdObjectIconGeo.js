__d(
  "adsCampaignStructureGetAdObjectIconGeo",
  [
    "AdFLEXConfig",
    "AdsCoreAdSetsTableFilled24.svg.react",
    "AdsCoreAdSetsTableOutline24.svg.react",
    "AdsCoreAdTableFilled24.svg.react",
    "AdsCoreAdTableOutline24.svg.react",
    "AdsCoreCampaignTableFilled24.svg.react",
    "AdsCoreCampaignTableOutline24.svg.react",
    "AdsObjectTypes",
    "GeoIcon.react",
    "GeoVectorIcon.react",
    "memoizeWithArgsWeak",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("memoizeWithArgsWeak")(function (e, t, n) {
        var o,
          a,
          i = (o = n == null ? void 0 : n.selectedColor) != null ? o : "blue",
          l =
            r("AdFLEXConfig") == null ||
            (a = r("AdFLEXConfig").get()) == null ||
            a.getObjectIcon == null
              ? void 0
              : a.getObjectIcon(e, t);
        return l != null
          ? s.jsx(r("GeoIcon.react"), babelHelpers.extends({}, l))
          : e === r("AdsObjectTypes").CAMPAIGN_GROUP
            ? t
              ? s.jsx(r("GeoVectorIcon.react"), {
                  color: i,
                  icon: r("AdsCoreCampaignTableFilled24.svg.react"),
                  size: 16,
                })
              : s.jsx(r("GeoVectorIcon.react"), {
                  color: "default",
                  icon: r("AdsCoreCampaignTableOutline24.svg.react"),
                  size: 16,
                })
            : e === r("AdsObjectTypes").CAMPAIGN
              ? t
                ? s.jsx(r("GeoVectorIcon.react"), {
                    color: i,
                    icon: r("AdsCoreAdSetsTableFilled24.svg.react"),
                    size: 16,
                  })
                : s.jsx(r("GeoVectorIcon.react"), {
                    color: "default",
                    icon: r("AdsCoreAdSetsTableOutline24.svg.react"),
                    size: 16,
                  })
              : e === r("AdsObjectTypes").ADGROUP
                ? t
                  ? s.jsx(r("GeoVectorIcon.react"), {
                      color: i,
                      icon: r("AdsCoreAdTableFilled24.svg.react"),
                      size: 16,
                    })
                  : s.jsx(r("GeoVectorIcon.react"), {
                      color: "default",
                      icon: r("AdsCoreAdTableOutline24.svg.react"),
                      size: 16,
                    })
                : void 0;
      });
    function c(e, t, n) {
      return u(e, t, n);
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
