__d(
  "AMClickToMarketplaceAdsUtils",
  ["fbt", "Tooltip"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("Tooltip").propsFor(
        s._(
          /*BTDS*/ "This ad format is currently not supported for the on-Facebook destination.",
        ),
      );
    }
    function u() {
      return s._(
        /*BTDS*/ "This feature is not available for the on-Facebook destination.",
      );
    }
    ((l.getAdFormatDisabledTooltip = e), (l.getGeneralDisabledTooltip = u));
  },
  226,
);
