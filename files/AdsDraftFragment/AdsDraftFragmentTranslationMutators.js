__d(
  "AdsDraftFragmentTranslationMutators",
  ["adsDraftBrandedContentSponsorIDTranslator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [[!0, r("adsDraftBrandedContentSponsorIDTranslator")]];
    function s(t) {
      return t.objectType === "ad"
        ? e.reduce(function (e, t) {
            var n = t[0],
              r = t[1];
            return n ? r(e) : e;
          }, t)
        : t;
    }
    l.translateFragment = s;
  },
  98,
);
