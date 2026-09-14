__d(
  "AdsOculusApplicabilityUtils",
  ["adsPlacementAPISpecReaderIsActivePublisherPlatform"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.some(u);
    }
    function s(e) {
      return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        e,
        "oculus",
      );
    }
    function u(e) {
      return (
        s(e) && !!e.oculus_positions && e.oculus_positions.includes("vr_apps")
      );
    }
    var c = {
        anySpecHasOculusVRAppsPlacement: e,
        placementSpecHasOculusPlacement: s,
        placementSpecHasOculusVRAppsPlacement: u,
      },
      d = c;
    l.default = d;
  },
  98,
);
