__d(
  "AdsDynamicOverlayContentTypeToShapesMapping",
  ["DynamicImageLayerTextOverlayShapes", "getObjectValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("getObjectValues")(r("DynamicImageLayerTextOverlayShapes"));
    function s(e) {
      switch (e) {
        case "rectangle":
          return 0;
        case "pill":
          return 1;
        case "circle":
          return 2;
        case "triangle":
          return 3;
        case "none":
          return 1e3;
        default:
          return 100;
      }
    }
    function u(e) {
      return [].concat(e).sort(function (e, t) {
        return s(e) - s(t);
      });
    }
    var c = new Map(
        [
          ["price", e],
          ["strikethrough_price", e],
          ["percentage_off", e],
          ["from_price", ["pill", "rectangle"]],
          ["free_shipping", e],
          ["inventory", ["pill", "rectangle", "none"]],
          ["pickup", ["pill", "rectangle", "none"]],
          ["disclaimer", ["none"]],
          ["guest_rating", ["none"]],
          ["star_rating", ["none"]],
          ["location", ["none"]],
          ["mileage", ["none"]],
          ["year", ["none"]],
          ["sustainable", ["rectangle"]],
          ["automated_personalize", e],
          ["sale", e],
        ].map(function (e) {
          var t = e[0],
            n = e[1];
          return [t, u(n)];
        }),
      ),
      d = c;
    l.default = d;
  },
  98,
);
