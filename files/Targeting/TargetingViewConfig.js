__d(
  "TargetingViewConfig",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.component;
    }
    function s(e) {
      if (!e.targetingSpecFields) {
        var t;
        return (
          r("FBLogger")("ads").mustfix(
            "%s is not a valid component. Please add .targetingSpecFields as a static property on the component.",
            ((t = e.displayName) != null ? t : null) || e.name,
          ),
          []
        );
      }
      var n = Object.keys(e.targetingSpecFields);
      return (
        (e.displayName ===
          "AdsTargetingConnectionsDeprecationEditorAddNewConnectionWrapper" ||
          e.displayName ===
            "AdsTargetingConnectionsDeprecationEditorDeleteOldConnectionWrapper") &&
          (n = n.filter(function (e) {
            return (
              e !== "customAudiences" &&
              e !== "excludedCustomAudiences" &&
              e !== "geoLocations"
            );
          })),
        n
      );
    }
    ((l.getComponent = e), (l.getFieldsForComponent = s));
  },
  98,
);
