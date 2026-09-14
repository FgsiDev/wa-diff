__d(
  "AdsUEditorAdgroupMessageMarketingErrorStrings",
  ["fbt", "CommonCampaignLimitsConfig.experimental"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = s._(
        /*BTDS*/ "Your headline can't be longer than {Common campaign headline character max limit} characters. Shorten your headline so your message can be sent.",
        [
          s._param(
            "Common campaign headline character max limit",
            (e = r("CommonCampaignLimitsConfig.experimental"))
              .header_character_max_limit,
          ),
        ],
      ),
      c = s._(
        /*BTDS*/ "Your body text can't be longer than {Common campaign body character max limit} characters. Shorten your body text so your message can be sent.",
        [
          s._param(
            "Common campaign body character max limit",
            e.body_character_max_limit,
          ),
        ],
      ),
      d = s._(
        /*BTDS*/ "If your primary text exceeds {Common campaign body character max limit} characters, it will be trimmed in your marketing message.",
        [
          s._param(
            "Common campaign body character max limit",
            e.body_character_max_limit,
          ),
        ],
      ),
      m = s._(
        /*BTDS*/ "More than two consecutive line breaks are not supported in Marketing messages. Extra line breaks will be removed when your message is sent.",
      ),
      p = s._(
        /*BTDS*/ "Your footer text can't be longer than {Common campaign footer character max limit} characters. Shorten your footer text so your message can be sent.",
        [
          s._param(
            "Common campaign footer character max limit",
            e.footer_character_max_limit,
          ),
        ],
      ),
      _ = s._(
        /*BTDS*/ "Your greeting can't be longer than {Common campaign greeting character max limit} characters. Shorten your greeting so your message can be sent.",
        [
          s._param(
            "Common campaign greeting character max limit",
            e.carousel_greeting_character_max_limit,
          ),
        ],
      ),
      f = s._(
        /*BTDS*/ "Some text fields exceed the character limits. Shorten your text so your message can be sent.",
      ),
      g = s._(
        /*BTDS*/ "All text fields exceed the character limits. Shorten your text so your message can be sent.",
      ),
      h = s._(
        /*BTDS*/ "Primary text for marketing message is required. Add primary text so your message can be sent.",
      ),
      y = s._(
        /*BTDS*/ "Primary text for marketing message is required. Add primary text so your message can be sent.",
      ),
      C = s._(
        /*BTDS*/ "First names are missing for some subscribers in the list you selected. They will receive a blank in place of the first name.",
      ),
      b = s._(/*BTDS*/ "Update subscriber list"),
      v = function (t) {
        return s._(
          /*BTDS*/ "The body text for {Number of carousel cards with body text error} {Plural form of card card exceeds text based on number of cards parameter} the character limit. Shorten your body text so your message can be sent.",
          [
            s._param("Number of carousel cards with body text error", t),
            s._param(
              "Plural form of card card exceeds text based on number of cards parameter",
              t > 1 ? "cards exceed" : "card exceeds",
            ),
          ],
        );
      };
    ((l.HEADLINE_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE = u),
      (l.BODY_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE = c),
      (l.BODY_TEXT_WILL_BE_TRIMMED_WARNING_MESSAGE = d),
      (l.BODY_EXTRA_NEW_LINES_WARNING_MESSAGE = m),
      (l.FOOTER_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE = p),
      (l.GREETING_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE = _),
      (l.SOME_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE = f),
      (l.ALL_TEXT_EXCEEDS_LIMIT_WARNING_MESSAGE = g),
      (l.BODY_TEXT_REQUIRED_MESSAGE = h),
      (l.GREETING_TEXT_REQUIRED_MESSAGE = y),
      (l.EMPTY_SUBSCRIBER_FIRST_NAME_WARNING_MESSAGE = C),
      (l.EMPTY_SUBSCRIBER_FIRST_NAME_WARNING_CTA = b),
      (l.getCarouselCardsBodyTextError = v));
  },
  226,
);
