__d(
  "AdsCCCategoryConfig",
  ["ix", "$InternalEnum", "AdsCCCategoryColors", "AdsCCCategoryIcons"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = s("482818"),
      m =
        ((e = {}),
        (e.ACTIVE_FEEDBACK = babelHelpers.extends(
          { color: (u = r("AdsCCCategoryColors")).ACTIVE_FEEDBACK },
          (c = r("AdsCCCategoryIcons")).ACTIVE_FEEDBACK,
        )),
        (e.ACTIVE_FEEDBACK_SUCCESS_MESSAGE = babelHelpers.extends(
          { color: u.ACTIVE_FEEDBACK_SUCCESS_MESSAGE },
          c.ACTIVE_FEEDBACK_SUCCESS_MESSAGE,
        )),
        (e.ERROR = babelHelpers.extends({ color: u.ERROR }, c.ERROR)),
        (e.HELP = babelHelpers.extends({ color: u.HELP }, c.HELP)),
        (e.LEGAL_AND_POLICY = babelHelpers.extends(
          { color: u.LEGAL_AND_POLICY },
          c.LEGAL_AND_POLICY,
        )),
        (e.NEW_PRODUCT = babelHelpers.extends(
          { color: u.NEW_PRODUCT },
          c.NEW_PRODUCT,
        )),
        (e.NEW_PRODUCT_ACTIVE = babelHelpers.extends(
          { color: u.NEW_PRODUCT_ACTIVE },
          c.NEW_PRODUCT_ACTIVE,
        )),
        (e.RECOMMENDATION_BEST_PRACTICE = babelHelpers.extends(
          { color: u.RECOMMENDATION_BEST_PRACTICE },
          c.RECOMMENDATION_BEST_PRACTICE,
        )),
        (e.RECOMMENDATION_PERSONALIZED = babelHelpers.extends(
          { color: u.RECOMMENDATION_PERSONALIZED },
          c.RECOMMENDATION_PERSONALIZED,
        )),
        (e.RELEASE_NOTE = babelHelpers.extends(
          { color: u.RELEASE_NOTE },
          c.RELEASE_NOTE,
        )),
        (e.WARNING = babelHelpers.extends({ color: u.WARNING }, c.WARNING)),
        (e.MULTI_ADVERTISER_ADS = babelHelpers.extends(
          { color: u.MULTI_ADVERTISER_ADS },
          c.MULTI_ADVERTISER_ADS,
        )),
        e),
      p = n("$InternalEnum").Mirrored(["HORIZONTAL", "VERTICAL"]),
      _ = n("$InternalEnum").Mirrored(["LOADING", "LOADED"]);
    ((l.CHEVRON_LEFT = d),
      (l.CATEGORY_CONFIG = m),
      (l.CardLayout = p),
      (l.CardState = _));
  },
  98,
);
