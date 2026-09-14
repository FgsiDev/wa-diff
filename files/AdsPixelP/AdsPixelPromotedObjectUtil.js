__d(
  "AdsPixelPromotedObjectUtil",
  ["isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getDefaultTrackingSpecFromPromotedObject = function (t) {
            var e =
              t.custom_event_type != null ? t.custom_event_type : t.pixel_rule;
            return r("isTruthy")(e) && t.pixel_id != null && t.pixel_id !== ""
              ? { fb_pixel: [t.pixel_id] }
              : t.pixel_id != null && t.pixel_id !== ""
                ? { offsite_pixel: [t.pixel_id] }
                : babelHelpers.extends({}, Object.freeze({}));
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
