__d(
  "CometVideoPlayerAutoDubbingWWWStrings",
  ["fbt", "FDSLink.react", "gkx", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Meta AI translation"),
      d = s._(/*BTDS*/ "Translated with AI"),
      m = s._(/*BTDS*/ "Translate with AI");
    function p() {
      return r("gkx")("3795") ? d : c;
    }
    var _ = s._(
        /*BTDS*/ "This reel is translated into your default language using Meta AI to simulate the speaker\u2019s voice and, if the creator chooses, sync their lips to match.",
      ),
      f = s._(/*BTDS*/ "AI translations may be inaccurate."),
      g = s._(/*BTDS*/ "{=m0}", [
        s._implicitParam(
          "=m0",
          u.jsx(r("FDSLink.react"), {
            "aria-label": s._(
              /*BTDS*/ "Learn more about AI voice translations",
            ),
            href: "https://www.facebook.com/help/576364395068889",
            target: "_blank",
            children: s._(/*BTDS*/ "Learn more"),
          }),
        ),
      ]),
      h = s._(/*BTDS*/ "{warning} {learnMore}", [
        s._param("warning", f),
        s._param("learnMore", g),
      ]),
      y = s._(/*BTDS*/ "Close"),
      C = s._(/*BTDS*/ "Translated audio"),
      b = s._(/*BTDS*/ "Translate audio");
    function v(e, t) {
      return (
        t === void 0 && (t = !1),
        e === "BYOA"
          ? C
          : e === "AUTODUB"
            ? p()
            : e === "NONE" && r("gkx")("3795")
              ? t
                ? m
                : b
              : null
      );
    }
    var S = s._(
        /*BTDS*/ "This video has been translated and re-recorded into your default language by the creator. Some translations may be inaccurate.",
      ),
      R = s._(/*BTDS*/ "Audio translations rating options"),
      L = s._(/*BTDS*/ "Audio and language"),
      E = s._(/*BTDS*/ "Audio description"),
      k = s._(/*BTDS*/ "Rate this voice translation"),
      I = s._(/*BTDS*/ "Additional details (optional)"),
      T = s._(/*BTDS*/ "Why did you give this rating? (optional)"),
      D = s._(
        /*BTDS*/ "Thanks for your rating, your feedback helps improve Facebook.",
      ),
      x = s._(/*BTDS*/ "Voice translation is inaccurate"),
      $ = s._(/*BTDS*/ "Voice translation is accurate"),
      P = s._(/*BTDS*/ "Voice translation is robotic"),
      N = s._(/*BTDS*/ "Voice translation is natural"),
      M = s._(/*BTDS*/ "Poor sound quality"),
      w = s._(/*BTDS*/ "Good sound quality"),
      A = s._(/*BTDS*/ "Audio is unclear"),
      F = s._(/*BTDS*/ "Audio is clear"),
      O = s._(/*BTDS*/ "Audio is too fast or slow"),
      B = s._(/*BTDS*/ "Audio is the right speed"),
      W = s._(/*BTDS*/ "Very good"),
      q = s._(/*BTDS*/ "Good"),
      U = s._(/*BTDS*/ "OK"),
      V = s._(/*BTDS*/ "Very bad"),
      H = s._(/*BTDS*/ "Bad"),
      G = s._(/*BTDS*/ "More menu options"),
      z = s._(/*BTDS*/ "Submit"),
      j = function (t) {
        return s._(/*BTDS*/ "{language}", [
          s._param("language", t.charAt(0).toUpperCase() + t.slice(1)),
        ]);
      },
      K = s._(/*BTDS*/ "Don't translate"),
      Q = s._(/*BTDS*/ "Choose languages you prefer to keep untranslated."),
      X = s._(/*BTDS*/ "Preferred languages"),
      Y = s._(
        /*BTDS*/ "We'll translate reels into these languages in the order you choose and may also suggest reels that were originally created in these languages.",
      ),
      J = s._(/*BTDS*/ "Add languages"),
      Z = s._(/*BTDS*/ "Suggested for you"),
      ee = s._(/*BTDS*/ "Added"),
      te = s._(/*BTDS*/ "Languages"),
      ne = function (t) {
        return s._(/*BTDS*/ "Add {language}", [s._param("language", t)]);
      },
      re = function (t) {
        return s._(/*BTDS*/ "Remove {language}", [s._param("language", t)]);
      },
      oe = s._(
        /*BTDS*/ "Your language settings couldn't be saved. Please try again.",
      ),
      ae = s._(/*BTDS*/ "Primary"),
      ie = s._(/*BTDS*/ "Original audio"),
      le = s._(/*BTDS*/ "Audio description"),
      se = s._(/*BTDS*/ "Preferred language"),
      ue = s._(/*BTDS*/ "Auto-detected"),
      ce = s._(/*BTDS*/ "Save"),
      de = s._(/*BTDS*/ "Next"),
      me = s._(/*BTDS*/ "Translations and language"),
      pe = s._(/*BTDS*/ "Off"),
      _e = s._(
        /*BTDS*/ "Hear audio translated into your default language in the speaker\u2019s voice when available.",
      ),
      fe = s._(/*BTDS*/ "Review voice translation"),
      ge = s._(/*BTDS*/ "Manage voice translation"),
      he = s._(
        /*BTDS*/ "This video does not have voice translations available at the moment.",
      ),
      ye = s._(/*BTDS*/ "Voice translations not available"),
      Ce = s._(/*BTDS*/ "View reel"),
      be = s._(/*BTDS*/ "Speak in English, Spanish, Hindi or Portuguese"),
      ve = s._(
        /*BTDS*/ "We currently support voice translations between English, Spanish, Hindi or Portuguese with more languages coming in the future.",
      ),
      Se = s._(/*BTDS*/ "Say it loud and clear"),
      Re = s._(
        /*BTDS*/ "Try to speak clearly and limit background noise in the video you upload.",
      ),
      Le = s._(/*BTDS*/ "Add music later"),
      Ee = s._(
        /*BTDS*/ "Music or audio from the audio library can be added, but it will not be translated.",
      ),
      ke = s._(/*BTDS*/ "Film with your mouth visible"),
      Ie = s._(
        /*BTDS*/ "To sync your lips to the translation, make sure your mouth is uncovered and in the frame.",
      ),
      Te = s._(/*BTDS*/ "Failed AI translations image"),
      De = s._(/*BTDS*/ "About translating your voice with Meta AI"),
      xe = s._(
        /*BTDS*/ "Sometimes we\u2019re not able to translate certain content. Try following these best practices next time you post.",
      ),
      $e = s._(/*BTDS*/ "Review voice translations"),
      Pe = s._(/*BTDS*/ "Translated with Meta AI"),
      Ne = s._(/*BTDS*/ "AI translation"),
      Me = function (t) {
        var e = j(t);
        return s._(/*BTDS*/ "{ originalLabel} ({language})", [
          s._param(" originalLabel", ie),
          s._param("language", e),
        ]);
      },
      we = s._(/*BTDS*/ "Shared"),
      Ae = s._(/*BTDS*/ "Not shared"),
      Fe = s._(
        /*BTDS*/ "Approve your translation to share your reel in those languages. Your original reel has already been shared.",
      ),
      Oe = function (t, n) {
        var e =
          n === "approve" ? s._(/*BTDS*/ "Approve") : s._(/*BTDS*/ "Delete");
        return t === 0
          ? s._(/*BTDS*/ "{action} translations", [s._param("action", e)])
          : s._(
              /*BTDS*/ '_j{"*":"{action} {numTranslations} translations","_1":"{action} {numTranslations} translation"}',
              [
                s._plural(t),
                s._param("action", e),
                s._param("numTranslations", t),
              ],
            );
      },
      Be = s._(/*BTDS*/ "Select all"),
      We = s._(
        /*BTDS*/ "Your translation has been shared. You can remove it anytime from the reel.",
      ),
      qe = s._(/*BTDS*/ "Translations deleted"),
      Ue = s._(/*BTDS*/ "Meta AI translation deleted"),
      Ve = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"{number} translations shared","_1":"1 translation shared"}',
          [s._plural(t, "number")],
        );
      },
      He = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"{number} translations deleted","_1":"1 translation deleted"}',
          [s._plural(t, "number")],
        );
      },
      Ge = function (t, n, r) {
        return r === "approve"
          ? s._(
              /*BTDS*/ '_j{"*":"Shared {numSucceeded} of {number} translations","_1":"Shared {numSucceeded} of 1 translation"}',
              [s._plural(n, "number"), s._param("numSucceeded", t)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"Deleted {numSucceeded} of {number} translations","_1":"Deleted {numSucceeded} of 1 translation"}',
              [s._plural(n, "number"), s._param("numSucceeded", t)],
            );
      },
      ze = function (t) {
        return t === "approve"
          ? s._(/*BTDS*/ "Couldn't share your translations. Please try again.")
          : s._(
              /*BTDS*/ "Couldn't delete your translations. Please try again.",
            );
      },
      je = s._(/*BTDS*/ "Pending voice translations"),
      Ke = s._(/*BTDS*/ "Translation in progress"),
      Qe = s._(/*BTDS*/ "You won't be able to translate this reel again."),
      Xe = function (t) {
        return s._(
          /*BTDS*/ '_j{"*":"Delete {numTranslations} voice translations?","_1":"Delete {numTranslations} voice translation?"}',
          [s._plural(t), s._param("numTranslations", t)],
        );
      },
      Ye = function (t) {
        return s._(/*BTDS*/ "Delete {selected language} voice translation?", [
          s._param("selected language", t),
        ]);
      },
      Je = s._(/*BTDS*/ "Delete"),
      Ze = s._(/*BTDS*/ "Go back"),
      et = s._(/*BTDS*/ "Cancel"),
      tt = function (t) {
        return s._(/*BTDS*/ "Don't translate {language}?", [
          s._param("language", t),
        ]);
      },
      nt = function (t) {
        return s._(
          /*BTDS*/ "You won't hear translated audio on {language} reels in the future. You can change this in Settings.",
          [s._param("language", t)],
        );
      },
      rt = s._(/*BTDS*/ "Don't translate"),
      ot = function (t) {
        return s._(/*BTDS*/ "Add {language} to your preferred languages?", [
          s._param("language", t),
        ]);
      },
      at = s._(/*BTDS*/ "Add language");
    ((l.AI_TRANSLATION_LABEL = c),
      (l.TRANSLATED_WITH_AI_LABEL = d),
      (l.TRANSLATE_WITH_AI_LABEL = m),
      (l.getAITranslationLabel = p),
      (l.AI_TRANSLATION_BODY = _),
      (l.AI_TRANSLATION_WARNING = f),
      (l.AI_TRANSLATION_WARNING_LEARN_MORE_BODY = h),
      (l.AI_TRANSLATION_MODAL_CLOSE = y),
      (l.AUDIO_TRACKS_TRANSLATION_LABEL = C),
      (l.TRANSLATE_AUDIO_LABEL = b),
      (l.getDubbingLabel = v),
      (l.AUDIO_TRACKS_TRANSLATION_BODY = S),
      (l.AUDIO_LANGUAGE_RATINGS_OPTIONS = R),
      (l.AUDIO_LANGUAGE_MODAL_TITLE = L),
      (l.AUDIO_DESCRIPTION_MENU_ITEM_TITLE = E),
      (l.AUDIO_LANGUAGE_RATE_TITLE = k),
      (l.AUDIO_LANGUAGE_RATE_ADDITIONAL_INFO = I),
      (l.AUDIO_LANGUAGE_RATE_REASON_TITLE = T),
      (l.AUDIO_LANGUAGE_RATE_TOAST = D),
      (l.AUDIO_LANGUAGE_RATE_REASON_INACCURATE = x),
      (l.AUDIO_LANGUAGE_RATE_REASON_ACCURATE = $),
      (l.AUDIO_LANGUAGE_RATE_REASON_ROBOTIC = P),
      (l.AUDIO_LANGUAGE_RATE_REASON_NATURAL = N),
      (l.AUDIO_LANGUAGE_RATE_REASON_BAD_SOUND_QUALITY = M),
      (l.AUDIO_LANGUAGE_RATE_REASON_GOOD_SOUND_QUALITY = w),
      (l.AUDIO_LANGUAGE_RATE_REASON_AUDIO_UNCLEAR = A),
      (l.AUDIO_LANGUAGE_RATE_REASON_AUDIO_CLEAR = F),
      (l.AUDIO_LANGUAGE_RATE_REASON_AUDIO_WRONG_SPEED = O),
      (l.AUDIO_LANGUAGE_RATE_REASON_AUDIO_RIGHT_SPEED = B),
      (l.AUDIO_LANGUAGE_RATE_OPTION_VERY_GOOD = W),
      (l.AUDIO_LANGUAGE_RATE_OPTION_GOOD = q),
      (l.AUDIO_LANGUAGE_RATE_OPTION_OK = U),
      (l.AUDIO_LANGUAGE_RATE_OPTION_VERY_BAD = V),
      (l.AUDIO_LANGUAGE_RATE_OPTION_BAD = H),
      (l.REELS_MENU_MORE_OPTIONS = G),
      (l.AUDIO_LANGUAGE_RATE_SUBMIT = z),
      (l.getLanguageLabel = j),
      (l.DO_NOT_TRANSLATE_TITLE = K),
      (l.DO_NOT_TRANSLATE_EXPLANATION = Q),
      (l.PREFERRED_LANGUAGES_TITLE = X),
      (l.PREFERRED_LANGUAGES_EXPLANATION = Y),
      (l.PREFERRED_LANGUAGES_ADD = J),
      (l.PREFERRED_LANGUAGES_SUGGESTED = Z),
      (l.PREFERRED_LANGUAGES_ADDED = ee),
      (l.ADD_LANGUAGES_TITLE = te),
      (l.getAddPreferredLanguageLabel = ne),
      (l.getRemovePreferredLanguageLabel = re),
      (l.PREFERRED_LANGUAGES_SAVE_FAILED_TOAST = oe),
      (l.PREFERRED_LANGUAGES_PRIMARY_LABEL = ae),
      (l.ORIGINAL_AUDIO_LABEL = ie),
      (l.AUDIO_DESCRIPTION_LABEL = le),
      (l.PREFERRED_LANGUAGE_LABEL = se),
      (l.AUTO_DETECTED_LABEL = ue),
      (l.SAVE_USER_LANGUAGE_PREFERENCE = ce),
      (l.GO_TO_NEXT_MODAL = de),
      (l.VOD_TRANSLATIONS_MENU_ITEM = me),
      (l.VOD_TRANSLATIONS_OFF = pe),
      (l.VOD_TRANSLATIONS_DESCRIPTION = _e),
      (l.REVIEW_TRANSLATION_MODAL_HEADER = fe),
      (l.MANAGE_TRANSLATION_MODAL_HEADER = ge),
      (l.DUBBING_NULL_STATE_BODY = he),
      (l.DUBBING_NULL_STATE_HEADER = ye),
      (l.DUBBING_MANAGEMENT_REROUTE_TO_REEL = Ce),
      (l.BEST_PRACTICES_ELLIGIBLE_LANGUAGES_HEADER = be),
      (l.BEST_PRACTICES_ELLIGIBLE_LANGUAGES_BODY = ve),
      (l.BEST_PRACTICES_CLEAR_SPEECH_HEADER = Se),
      (l.BEST_PRACTICES_CLEAR_SPEECH_BODY = Re),
      (l.BEST_PRACTICES_NO_MUSIC_HEADER = Le),
      (l.BEST_PRACTICES_NO_MUSIC_BODY = Ee),
      (l.BEST_PRACTICES_VISIBLE_MOUTH_HEADER = ke),
      (l.BEST_PRACTICES_VISIBLE_MOUTH_BODY = Ie),
      (l.FAILED_TRANSLATION_IMG_ALT = Te),
      (l.BEST_PRACTICES_PAGE_HEADER = De),
      (l.GENERIC_TRANSLATIONS_ERROR = xe),
      (l.REVIEW_TRANSLATION_SECTION_HEADER = $e),
      (l.META_AI_SECTION_HEADER = Pe),
      (l.AI_TRANSLATION_SECTION_HEADER = Ne),
      (l.getOriginalLanguageLabel = Me),
      (l.TRANSLATION_SHARED_DESCRIPTION = we),
      (l.TRANSLATION_NOT_SHARED_DESCRIPTION = Ae),
      (l.COMET_TRANSLATION_APPROVAL_META = Fe),
      (l.COMET_APPROVE_DELETE_TRANSLATION_LABEL = Oe),
      (l.COMET_SELECT_ALL_LANGUAGES_LABEL = Be),
      (l.COMET_TRANSLATION_APPROVED_SUCCESS = We),
      (l.COMET_TRANSLATION_DELETED_SUCCESS = qe),
      (l.COMET_TRANSLATION_DELETED_SUCCESS_MANAGEMENT = Ue),
      (l.COMET_TRANSLATIONS_APPROVED_SUCCESS = Ve),
      (l.COMET_TRANSLATIONS_DELETED_SUCCESS = He),
      (l.COMET_TRANSLATIONS_PARTIAL_SUCCESS = Ge),
      (l.COMET_TRANSLATIONS_ACTION_FAILED = ze),
      (l.PENDING_VOICE_TRANSLATIONS_HEADER = je),
      (l.TRANSLATION_IN_PROGRESS_DESCRIPTION = Ke),
      (l.COMET_DELETE_MODAL_BODY = Qe),
      (l.COMET_DELETE_MODAL_TITLE_MULTI_LANG = Xe),
      (l.COMET_DELETE_MODAL_TITLE_SINGLE_LANG = Ye),
      (l.COMET_DELETE_MODAL_CONFIRMATION = Je),
      (l.COMET_DELETE_MODAL_CANCEL = Ze),
      (l.COMET_DELETE_MODAL_CANCEL_BUTTON = et),
      (l.getDoNotTranslateConfirmTitle = tt),
      (l.getDoNotTranslateConfirmBody = nt),
      (l.DO_NOT_TRANSLATE_CONFIRM_ACCEPT = rt),
      (l.getAddPreferredLanguageConfirmTitle = ot),
      (l.ADD_PREFERRED_LANGUAGE_CONFIRM_ACCEPT = at));
  },
  226,
);
