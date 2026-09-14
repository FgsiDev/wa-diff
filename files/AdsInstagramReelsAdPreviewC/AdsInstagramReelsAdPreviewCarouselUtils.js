__d(
  "AdsInstagramReelsAdPreviewCarouselUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2,
      l = 2,
      s = e * l;
    function u(e, t) {
      return (e + 1) % t;
    }
    function c(e, t) {
      return (e - 1 + t) % t;
    }
    ((i.TOTAL_GRIDS = s),
      (i.getNextCarouselIndex = u),
      (i.getPrevCarouselIndex = c));
  },
  66,
);
