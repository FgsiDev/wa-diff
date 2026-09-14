__d(
  "AdsDuplicateOptimalLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_duplicate_optimal_entry_point_interaction",
        data:
          ((o = {}),
          (o.source = e),
          (o.message = t),
          (o.selected_ad_object_ids = n != null ? [n] : void 0),
          o),
      });
    }
    function s(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "ads_duplicate_optimal_surface_impression",
        data:
          ((a = {}),
          (a.selected_ad_object_ids = t),
          (a.source = e),
          (a.is_enabled = n),
          (a.message = o),
          a),
      });
    }
    function u(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_duplicate_optimal_cta_click",
        data:
          ((o = {}),
          (o.selected_ad_object_ids = [t]),
          (o.message = e),
          (o.event_source = n),
          o),
      });
    }
    function c(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_optimal_start_expansion_exposure_point",
        data:
          ((o = {}),
          (o.sub_event = n != null ? e + "." + n : null),
          (o.message = e),
          (o.is_enabled = t),
          o),
      });
    }
    ((l.logDuplicateOptimalEntryPointInteraction = e),
      (l.logDuplicateOptimalSurfaceImpression = s),
      (l.logDuplicateOptimalCTAClick = u),
      (l.logOptimalStartExpansionExposurePoint = c));
  },
  98,
);
