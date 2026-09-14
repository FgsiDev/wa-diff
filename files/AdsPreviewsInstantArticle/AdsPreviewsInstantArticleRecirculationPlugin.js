__d(
  "AdsPreviewsInstantArticleRecirculationPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instant_article_recirculation",
        apiFormat: "INSTANT_ARTICLE_RECIRCULATION_AD",
        loadingPlaceholderSize: { width: 320, height: 385 },
        name: s._(/*BTDS*/ "Instant Articles (bottom)"),
        positionName: s._(/*BTDS*/ "Instant Articles"),
        positionDetails: s._(/*BTDS*/ "Related articles"),
        icon: u("22171"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
