__d(
  "AdsVideoCoordinateUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      if (n == null || n <= 0)
        return {
          aspect_ratio: r,
          crop_section_top_x: 0,
          crop_section_top_y: 0,
          crop_section_width: e,
          crop_section_height: t,
          crop_section_relative_top_x: 0,
          crop_section_relative_top_y: 0,
          crop_section_relative_width: 1,
          crop_section_relative_height: 1,
          displayed_video_width: e,
          displayed_video_height: t,
        };
      var o, a;
      (e / n > t ? ((a = t), (o = t * n)) : ((o = e), (a = e / n)),
        (o = Math.round(Math.min(o, e))),
        (a = Math.round(Math.min(a, t))));
      var i = (e - o) / 2,
        l = (t - a) / 2,
        s = Math.floor(i) - i,
        u = Math.floor(l) - l;
      return {
        aspect_ratio: r,
        crop_section_top_x: i + s,
        crop_section_top_y: l + u,
        crop_section_width: o,
        crop_section_height: a,
        crop_section_relative_top_x: (i + s) / e,
        crop_section_relative_top_y: (l + u) / t,
        crop_section_relative_width: o / e,
        crop_section_relative_height: a / t,
        displayed_video_width: e,
        displayed_video_height: t,
      };
    }
    i.calculateDefaultCoordinates = e;
  },
  66,
);
