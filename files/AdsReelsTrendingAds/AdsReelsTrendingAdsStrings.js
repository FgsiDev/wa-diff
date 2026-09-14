__d(
  "AdsReelsTrendingAdsStrings",
  ["fbt", "AdsLearnMore.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Reels trending ads"),
      d = function (t) {
        return (
          t === void 0 && (t = !0),
          u.jsx(r("AdsLearnMore.react"), {
            cmsID: t ? "705518531802910" : "1982303025936689",
            label: s._(/*BTDS*/ "About Reels trending ads"),
          })
        );
      },
      m = s._(
        /*BTDS*/ "Show your ads right after popular Instagram Reels from topics you select or across all trending Reels. {link to a help article explaining the Reels trending ads product}",
        [
          s._param(
            "link to a help article explaining the Reels trending ads product",
            d(),
          ),
        ],
      ),
      p = s._(
        /*BTDS*/ "Choose the type of Reels you'd like your ads to appear after. {link to a help article explaining the Reels trending ads product}",
        [
          s._param(
            "link to a help article explaining the Reels trending ads product",
            d(!1),
          ),
        ],
      ),
      _ = s._(/*BTDS*/ "All trending Reels"),
      f = s._(/*BTDS*/ "Topics"),
      g = s._(/*BTDS*/ "Your ad will appear right after popular Reels."),
      h = s._(
        /*BTDS*/ "Your ad will appear after popular Reels from the topics you select.",
      ),
      y = s._(/*BTDS*/ "On"),
      C = s._(/*BTDS*/ "Off"),
      b = s._(/*BTDS*/ "Select topics");
    function v(e) {
      return s._(/*BTDS*/ "{levelLabel} (default for Reels trending ads)", [
        s._param("levelLabel", e),
      ]);
    }
    v.displayName = v.name + " [from " + i.id + "]";
    var S = s._(/*BTDS*/ "No topics selected"),
      R = s._(
        /*BTDS*/ "Select your topics in the Reels trending ads section to review and reserve your campaign.",
      ),
      L = s._(/*BTDS*/ "Select at least one topic"),
      E = s._(
        /*BTDS*/ "Select the age ranges of the people who will find your ad relevant. When you select your minimum and maximum age ranges, we will automatically include the ranges in between.",
      ),
      k = s._(
        /*BTDS*/ "Instant experience is not available when using Reels trending ads.",
      ),
      I = s._(
        /*BTDS*/ "When using Reels trending ads, only the limited inventory filter is available.",
      ),
      T = s._(
        /*BTDS*/ "When using Reels trending ads, carousel is not available.",
      ),
      D = s._(
        /*BTDS*/ "When using Reels trending ads, collection is not available.",
      ),
      x = s._(/*BTDS*/ "Seasonal"),
      $ = s._(
        /*BTDS*/ "Your ad will appear after top Reels from the seasonal content you select.",
      ),
      P = s._(/*BTDS*/ "Select a tentpole event"),
      N = s._(/*BTDS*/ "Expired"),
      M = s._(/*BTDS*/ "Expiring soon"),
      w = s._(
        /*BTDS*/ "Select a date that is within the event running period.",
      );
    ((l.REELS_TRENDING_ADS_TITLE = c),
      (l.REELS_TRENDING_ADS_SECTION_COPY = m),
      (l.REELS_TRENDING_ADS_CAMPAIGN_SECTION_COPY = p),
      (l.ALL_TRENDING_REELS_BUTTON_LABEL = _),
      (l.TRENDING_TOPICS_BUTTON_LABEL = f),
      (l.ALL_TRENDING_REELS_BUTTON_SUBTEXT = g),
      (l.TRENDING_TOPICS_BUTTON_SUBTEXT = h),
      (l.TOGGLE_ON_LABEL = y),
      (l.TOGGLE_OFF_LABEL = C),
      (l.TRENDING_TOPICS_DROPDOWN_PLACEHOLDER = b),
      (l.getReelsTrendingAdsInventoryFilterLabel = v),
      (l.NO_TOPICS_SELECTED_WARNING_NOTICE_HEADER = S),
      (l.NO_TOPICS_SELECTED_WARNING_NOTICE_BODY = R),
      (l.NO_TOPICS_SELECTED_FORM_SUGGESTION_TEXT = L),
      (l.AGE_BUCKET_SELECTOR_TOOLTIP = E),
      (l.INSTANT_EXPERIENCE_NOT_COMPATIBLE = k),
      (l.LIMITED_FEED_FILTER_ONLY_AVAILABLE = I),
      (l.CAROUSEL_FORMAT_DISABLED = T),
      (l.COLLECTION_FORMAT_DISABLED = D),
      (l.TENTPOLE_BUTTON_LABEL = x),
      (l.TENTPOLE_BUTTON_SUBTEXT = $),
      (l.TENTPOLE_DROPDOWN_PLACEHOLDER = P),
      (l.EXPIRED_BADGE_LABEL = N),
      (l.EXPIRING_SOON_BADGE_LABEL = M),
      (l.TENTPOLE_EVENT_PERIOD_TOOLTIP = w));
  },
  226,
);
