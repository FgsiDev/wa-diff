__d(
  "adsGetCreativeTypeByCreativeFields",
  ["ApiAdObjectTypes", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("ApiAdObjectTypes").DOMAIN:
          return 1;
        case r("ApiAdObjectTypes").PAGE:
          return 2;
        case r("ApiAdObjectTypes").EVENT:
          return 3;
        case r("ApiAdObjectTypes").OFFER:
        case r("ApiAdObjectTypes").PHOTO:
        case r("ApiAdObjectTypes").SHARE:
        case r("ApiAdObjectTypes").STATUS:
        case r("ApiAdObjectTypes").VIDEO:
          return 27;
        case r("ApiAdObjectTypes").INVALID:
        case r("ApiAdObjectTypes").POST_DELETED:
        case r("ApiAdObjectTypes").PRIVACY_CHECK_FAIL:
          return 0;
        case null:
        case void 0:
          return null;
        default:
          return (
            r("FBLogger")("ads")
              .blameToPreviousFrame()
              .mustfix("Failed to infer type for object type %s", e),
            null
          );
      }
    }
    l.default = e;
  },
  98,
);
