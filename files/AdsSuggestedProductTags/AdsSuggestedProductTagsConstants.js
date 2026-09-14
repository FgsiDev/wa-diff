__d(
  "AdsSuggestedProductTagsConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["image"],
      l = ["INSTAGRAM_STREAM", "INSTAGRAM_EXPLORE"],
      s = ["INSTAGRAM_PROFILE"],
      u = ["shops", "mini_shops", "da"],
      c = new Map([["SQUARE", "INSTAGRAM_STANDARD"]]),
      d = ["INSTAGRAM_STANDARD"],
      m = n("$InternalEnum")({
        ERROR: "error",
        LOADED: "loaded",
        ADDED: "added",
        REMOVED: "removed",
      });
    ((i.SPT_SUPPOURTED_MEDIA = e),
      (i.SPT_SUPPORTED_SURFACES = l),
      (i.SPT_UNSUPPORTED_CONVERSION_TYPES = s),
      (i.SPT_SUPPORTED_CATALOG_CAPABILITY = u),
      (i.SPT_SUPPORTED_ASPECT_TYPE_TO_ADS_PREVIEW_FORMAT = c),
      (i.GPT_SUPPORTED_FORMATS = d),
      (i.SuggestedProductTagState = m));
  },
  66,
);
