__d(
  "convertIGMediaTypeToPostType",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "IMAGE"
        ? "photo"
        : e === "VIDEO"
          ? "video"
          : e === "CAROUSEL_ALBUM"
            ? "carousel"
            : "";
    }
    i.default = e;
  },
  66,
);
