__d(
  "CometAudioLanguageUtils",
  [
    "AutoDubbingConsumptionFalcoEvent",
    "AutoDubbingFalcoEvent",
    "CometAudioLanguageMenuItemsMutation",
    "CometAudioLanguageSupportedLanguagesEnum",
    "CometAudioLanguageUtils_doNotTranslate.graphql",
    "CometAudioLanguageUtils_dubbedDescription.graphql",
    "CometAudioLanguageUtils_dubbingInfo.graphql",
    "CometAudioLanguageUtils_dubtrackMapping.graphql",
    "CometRelay",
    "CometVideoPlayerAutoDubbingWWWStrings",
    "CurrentLocale",
    "VideoPlayerAudioTrackUtils",
    "cometPushToast",
    "gkx",
    "intlList",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["label"],
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = p.useCallback,
      f = p.useEffect,
      g = p.useMemo,
      h = p.useRef,
      y = null,
      C = function (t, n, o, a, i, l) {
        var e = {
          client_extra_data: {
            dubbing_type_from: o == null ? "original" : o,
            dubbing_type_to: a == null ? "original" : a,
            lang_from: t != null ? t : "original",
            lang_to: n != null ? n : "original",
            player_type: "Reel",
          },
          event: i,
          video_id: l != null ? l : "",
        };
        r("AutoDubbingConsumptionFalcoEvent").log(function () {
          return e;
        });
      },
      b = function (t, n) {
        var e,
          r = (e = t == null ? void 0 : t.lang) != null ? e : null;
        return (
          (t == null ? void 0 : t.lang) === null &&
            t.role == null &&
            (r = n != null ? n : null),
          r
        );
      },
      v = function (t, n, o) {
        var e = {
          client_extra_data: { lang: t != null ? t : "" },
          event: o,
          video_id: n != null ? n : "",
        };
        r("AutoDubbingConsumptionFalcoEvent").log(function () {
          return e;
        });
      };
    function S(e) {
      var t,
        r = o("CometRelay").useFragment(
          s !== void 0
            ? s
            : (s = n("CometAudioLanguageUtils_dubtrackMapping.graphql")),
          e,
        );
      return (t = r == null ? void 0 : r.dubbed_track_mapping) != null
        ? t
        : null;
    }
    var R = function (t) {
      var e = null;
      if (t != null) {
        var n;
        e =
          (n = t.find(function (e) {
            return e.dubbing_type === "NONE" && e.audio_lang != null;
          })) == null
            ? void 0
            : n.audio_lang;
      }
      return e;
    };
    function L(e, t) {
      var r,
        a,
        i = o("react-compiler-runtime").c(3),
        l = o("CometRelay").useFragment(
          u !== void 0
            ? u
            : (u = n("CometAudioLanguageUtils_dubbedDescription.graphql")),
          e,
        );
      if (t == null) return null;
      var s;
      if (
        i[0] !== t ||
        i[1] !== (l == null ? void 0 : l.dubbed_track_mapping)
      ) {
        var c;
        ((s =
          l == null || (c = l.dubbed_track_mapping) == null
            ? void 0
            : c.find(function (e) {
                var n;
                return (
                  e.audio_lang === t &&
                  e.dubbing_type !== "NONE" &&
                  ((n = e.description) == null ? void 0 : n.text) != null
                );
              })),
          (i[0] = t),
          (i[1] = l == null ? void 0 : l.dubbed_track_mapping),
          (i[2] = s));
      } else s = i[2];
      var d = s;
      return (r = d == null || (a = d.description) == null ? void 0 : a.text) !=
        null
        ? r
        : null;
    }
    function E(e, t) {
      var n = o("react-compiler-runtime").c(9),
        a,
        i;
      if (n[0] !== e || n[1] !== t) {
        var l = {};
        if (((a = null), e != null && t != null)) {
          var s = {},
            u = {},
            c;
          n[4] !== t
            ? ((c = t.some(T) && t.some(I)), (n[4] = t), (n[5] = c))
            : (c = n[5]);
          var d = c,
            m = d && r("gkx")("7622");
          (t.forEach(function (e) {
            var t;
            e.dubbing_type === "NONE" && e.audio_lang != null
              ? ((t = "Default"), (a = e.audio_lang))
              : (t = e.audio_lang);
            var n = o("VideoPlayerAudioTrackUtils").getIntlDisplayName(
              r("CurrentLocale").get(),
              e.audio_lang,
            );
            n != null &&
              t != null &&
              ((s[t] = n.charAt(0).toUpperCase() + n.slice(1)),
              t in u && u[t] !== e.dubbing_type
                ? (u[t] = null)
                : (u[t] = e.dubbing_type));
          }),
            e.forEach(function (e) {
              if (e.lang !== null && !(e.id in l) && e.lang in s) {
                var t = s[e.lang],
                  n = u[e.lang];
                if (e.role === "description")
                  t =
                    t +
                    " \xB7 " +
                    o(
                      "CometVideoPlayerAutoDubbingWWWStrings",
                    ).AUDIO_DESCRIPTION_LABEL.toString();
                else if (m && n != null && (n === "AUTODUB" || n === "BYOA")) {
                  var r = o(
                    "CometVideoPlayerAutoDubbingWWWStrings",
                  ).getDubbingLabel(n);
                  r != null && (t = t + " \xB7 " + r.toString());
                }
                l[e.id] = babelHelpers.extends({}, e, { label: t });
              } else if (e.displayLabel === "Default") {
                var a,
                  i = o(
                    "CometVideoPlayerAutoDubbingWWWStrings",
                  ).ORIGINAL_AUDIO_LABEL.toString();
                if (s[(a = e.lang) != null ? a : "Default"]) {
                  var c;
                  i = s[(c = e.lang) != null ? c : "Default"] + " \xB7 " + i;
                }
                l[e.id] = babelHelpers.extends({}, e, { label: i });
              }
            }));
        }
        ((i = Object.values(l).sort(k)),
          (n[0] = e),
          (n[1] = t),
          (n[2] = a),
          (n[3] = i));
      } else ((a = n[2]), (i = n[3]));
      var p = i,
        _;
      return (
        n[6] !== a || n[7] !== p
          ? ((_ = { allAvailableTracks: p, originalLanguage: a }),
            (n[6] = a),
            (n[7] = p),
            (n[8] = _))
          : (_ = n[8]),
        _
      );
    }
    function k(e, t) {
      return e.role === null
        ? -1
        : t.role === null
          ? 1
          : e.label.localeCompare(t.label);
    }
    function I(e) {
      return e.dubbing_type === "BYOA";
    }
    function T(e) {
      return e.dubbing_type === "AUTODUB";
    }
    function D(e) {
      var t,
        r = o("CometRelay").useFragment(
          c !== void 0
            ? c
            : (c = n("CometAudioLanguageUtils_doNotTranslate.graphql")),
          e,
        );
      return r == null || (t = r.audio_settings) == null
        ? void 0
        : t.do_not_translate_languages_string;
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      if (e == null || e.length === 0) n = null;
      else {
        var a;
        if (t[0] !== e) {
          var i = [];
          (e.forEach(function (e) {
            var t = o("VideoPlayerAudioTrackUtils").getIntlDisplayName(
              r("CurrentLocale").get(),
              e,
            );
            t != null &&
              ((t = t.charAt(0).toUpperCase() + t.slice(1)), i.push(t));
          }),
            i.sort(),
            (a = r("intlList")(i)),
            (t[0] = e),
            (t[1] = a));
        } else a = t[1];
        n = a;
      }
      return n;
    }
    var $ = function (t) {
      return o("VideoPlayerAudioTrackUtils").getIntlDisplayName(
        r("CurrentLocale").get(),
        t,
      );
    };
    function P(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      if (t[0] !== e) {
        var a = [];
        (e.forEach(function (e) {
          var t = $(e);
          t != null && a.push(t.charAt(0).toUpperCase() + t.slice(1));
        }),
          (n = a.length === 0 ? null : r("intlList")(a)),
          (t[0] = e),
          (t[1] = n));
      } else n = t[1];
      return n;
    }
    var N = function (n) {
      var t = n.controller,
        r = n.originalLanguage,
        o = n.saveAndLogPreferredLanguage,
        a = n.selectedTrack,
        i = n.setPause,
        l = n.setUpdatedTargetAudioTrack,
        s = n.updatedTargetAudioTrack,
        u = n.videoId;
      if ((t == null ? void 0 : t.selectVideoVariant) != null && a) {
        var c = a.label,
          d = babelHelpers.objectWithoutPropertiesLoose(a, e);
        (t.selectVideoVariant({ lang: d.lang, role: d.role }),
          i(!1, "AUDIO_LANGUAGE_SELECTOR"));
        var m = b(d, r),
          p = b(s != null ? s : null, r);
        (o(p, m, s == null ? void 0 : s.role, a.role, u), l(d));
      }
    };
    function M() {
      var e = o("react-compiler-runtime").c(2),
        t = o("CometRelay").useMutation(
          o("CometAudioLanguageMenuItemsMutation")
            .setUserPreferredAudioLanguageDataMutation,
        ),
        n = t[0],
        r;
      return (
        e[0] !== n
          ? ((r = function (t, r, o, a, i) {
              (r != null &&
                n({
                  onCompleted: A,
                  onError: w,
                  variables: { input: { language_code: r } },
                }),
                C(
                  t != null ? t : null,
                  r != null ? r : null,
                  o != null ? o : null,
                  a != null ? a : null,
                  "fb_reel_auto_dub_consumption_preferred_language_changed",
                  i != null ? i : null,
                ));
            }),
            (e[0] = n),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function w() {}
    function A(e, t) {}
    function F(e, t) {
      var a,
        i,
        l = o("react-compiler-runtime").c(14),
        s = r("gkx")("17327"),
        u = r("gkx")("19163"),
        c = r("gkx")("21790"),
        m = o("CometRelay").useFragment(
          d !== void 0
            ? d
            : (d = n("CometAudioLanguageUtils_dubbingInfo.graphql")),
          e,
        ),
        p = null,
        _ = y,
        f = null;
      if (
        !t &&
        m != null &&
        (m == null ? void 0 : m.dubbed_track_mapping) != null &&
        (m == null ? void 0 : m.dubbed_track_mapping.length) > 0 &&
        s
      ) {
        var g,
          h,
          C,
          b,
          v,
          S,
          R =
            (g =
              (h = m.dubbed_track_mapping.find(O)) == null
                ? void 0
                : h.audio_lang) != null
              ? g
              : null,
          L = !1;
        R != null &&
          (L =
            m.dubbed_track_mapping.filter(function (e) {
              return e.audio_lang === R;
            }).length > 1);
        var E =
            (C = m.audio_settings) == null
              ? void 0
              : C.do_not_translate_languages_string,
          k;
        if (
          l[0] !==
            ((b = m.audio_settings) == null
              ? void 0
              : b.has_primary_preferred_audio_language) ||
          l[1] !==
            ((v = m.audio_settings) == null
              ? void 0
              : v.preferred_language_string) ||
          l[2] !==
            ((S = m.audio_settings) == null
              ? void 0
              : S.resolved_preferred_audio_languages_string)
        ) {
          var I, T, D, x;
          if (
            ((k =
              m == null || (I = m.audio_settings) == null
                ? void 0
                : I.preferred_language_string),
            c)
          ) {
            var $,
              P,
              N,
              M =
                ($ = m.audio_settings) == null
                  ? void 0
                  : $.resolved_preferred_audio_languages_string;
            ((E = M),
              (k =
                ((P = m.audio_settings) == null
                  ? void 0
                  : P.has_primary_preferred_audio_language) === !0 &&
                (N = M == null ? void 0 : M[0]) != null
                  ? N
                  : null));
          }
          ((l[0] =
            (T = m.audio_settings) == null
              ? void 0
              : T.has_primary_preferred_audio_language),
            (l[1] =
              (D = m.audio_settings) == null
                ? void 0
                : D.preferred_language_string),
            (l[2] =
              (x = m.audio_settings) == null
                ? void 0
                : x.resolved_preferred_audio_languages_string),
            (l[3] = k),
            (l[4] = E));
        } else ((k = l[3]), (E = l[4]));
        var w =
            m == null ? void 0 : m.viewer_best_language_prediction_for_dubbing,
          A = m.audio_user_preferred_language;
        (R != null && E != null && E.includes(R)
          ? ((_ = R),
            (p =
              "fb_reel_auto_dub_consumption_do_not_translate_languages_match"))
          : k != null &&
              m.dubbed_track_mapping.find(function (e) {
                return e.audio_lang === k;
              }) != null
            ? ((_ = k),
              (p = "fb_reel_auto_dub_consumption_preferred_language_match"))
            : u &&
                w != null &&
                w !== R &&
                m.dubbed_track_mapping.find(function (e) {
                  return e.audio_lang === w;
                }) != null
              ? ((_ = w), (p = "fb_reel_auto_dub_consumption_blp_match"))
              : u &&
                A != null &&
                A !== R &&
                m.dubbed_track_mapping.find(function (e) {
                  return e.audio_lang === A;
                }) != null &&
                ((_ = A),
                (p = "fb_reel_auto_dub_consumption_fallback_to_app_lang")),
          (f = _),
          L && _ === R && (_ = y));
      }
      var F = m == null ? void 0 : m.audio_user_preferred_language,
        B =
          (m == null || (a = m.audio_settings) == null
            ? void 0
            : a.has_primary_preferred_audio_language) === !0,
        W;
      if (
        l[5] !==
        (m == null || (i = m.audio_settings) == null
          ? void 0
          : i.resolved_preferred_audio_languages_string)
      ) {
        var q, U, V;
        ((W =
          (q =
            m == null || (U = m.audio_settings) == null
              ? void 0
              : U.resolved_preferred_audio_languages_string) != null
            ? q
            : []),
          (l[5] =
            m == null || (V = m.audio_settings) == null
              ? void 0
              : V.resolved_preferred_audio_languages_string),
          (l[6] = W));
      } else W = l[6];
      var H;
      return (
        l[7] !== p ||
        l[8] !== f ||
        l[9] !== _ ||
        l[10] !== F ||
        l[11] !== B ||
        l[12] !== W
          ? ((H = {
              appLanguage: F,
              event: p,
              hasPrimaryPreferredLanguage: B,
              lang: _,
              loggingLang: f,
              preferredLanguages: W,
            }),
            (l[7] = p),
            (l[8] = f),
            (l[9] = _),
            (l[10] = F),
            (l[11] = B),
            (l[12] = W),
            (l[13] = H))
          : (H = l[13]),
        H
      );
    }
    function O(e) {
      return e.dubbing_type === "NONE";
    }
    var B = function (t) {
      switch (t) {
        case "fb_reel_auto_dub_consumption_preferred_language_match":
          return "PREFERRED";
        case "fb_reel_auto_dub_consumption_blp_match":
        case "fb_reel_auto_dub_consumption_fallback_to_app_lang":
          return "AUTO_DETECTED";
        default:
          return "NONE";
      }
    };
    function W() {
      var e = o("react-compiler-runtime").c(1),
        t;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var n = Array.from(
            r("CometAudioLanguageSupportedLanguagesEnum").members(),
            V,
          ),
          a = r("CurrentLocale").get();
        ((t = n
          .map(function (e) {
            var t = o("VideoPlayerAudioTrackUtils").getIntlDisplayName(a, e);
            return t != null ? [e, t] : null;
          })
          .filter(U)),
          t.sort(q),
          (e[0] = t));
      } else t = e[0];
      var i = t;
      return i;
    }
    function q(e, t) {
      return (e[1] || "").localeCompare(t[1] || "");
    }
    function U(e) {
      return e !== null && e[1] != null;
    }
    function V(e) {
      return e.valueOf().toLowerCase();
    }
    var H = function (t) {
        var e = t.availableAudioTracks,
          n = t.controller,
          r = t.currentValue,
          o = t.originalVideoLanguage,
          a = t.selectedLanguages,
          i = t.setSelectedLanguages,
          l;
        return (
          a.includes(r)
            ? (l = a.filter(function (e) {
                return e !== r;
              }))
            : ((l = [].concat(a, [r])),
              o != null &&
                r === o &&
                G({
                  availableAudioTracks: e,
                  controller: n,
                  originalVideoLanguage: o,
                })),
          i(l),
          l
        );
      },
      G = function (t) {
        var e = t.availableAudioTracks,
          n = t.controller,
          r = t.originalVideoLanguage;
        if (r != null && n != null && e != null) {
          var o = e.find(function (e) {
            return e.role == null;
          });
          o != null &&
            (n == null || n.selectVideoVariant({ lang: o.lang, role: o.role }));
        }
      },
      z = function (t) {
        var e,
          n = t.availableAudioTracks,
          r = t.hasPrimaryPreferredLanguage,
          o = t.originalVideoLanguage,
          a = t.preferredLanguages;
        if (n == null) return null;
        if (o != null && a.includes(o)) {
          var i;
          return (i = n.find(function (e) {
            return e.role == null;
          })) != null
            ? i
            : null;
        }
        return r &&
          (e = n.find(function (e) {
            return e.lang === a[0];
          })) != null
          ? e
          : null;
      },
      j = function (t) {
        var e = t.availableAudioTracks,
          n = t.controller,
          r = t.hasPrimaryPreferredLanguage,
          o = t.originalVideoLanguage,
          a = t.preferredLanguages,
          i = z({
            availableAudioTracks: e,
            hasPrimaryPreferredLanguage: r,
            originalVideoLanguage: o,
            preferredLanguages: a,
          });
        i != null &&
          n != null &&
          n.selectVideoVariant({ lang: i.lang, role: i.role });
      },
      K = function (t) {
        var e = t.onClose,
          n = t.rating,
          a = t.ratingDetails,
          i = t.selectedReasons,
          l = t.targetAudioLang,
          s = t.video_id,
          u = {
            event: "fb_reel_auto_dub_feedback",
            extra_data: {
              feedback: a != null ? a : "",
              player_type: "Reel",
              rating_reasons: JSON.stringify(i),
              selected_language: l != null ? l : "unknown",
              selected_rating: n != null ? n : "unknown",
            },
            video_id: s != null ? String(s) : "",
          };
        (r("AutoDubbingFalcoEvent").log(function () {
          return u;
        }),
          e(),
          o("cometPushToast").cometPushToast(
            {
              message: o("CometVideoPlayerAutoDubbingWWWStrings")
                .AUDIO_LANGUAGE_RATE_TOAST,
              withoutCloseButton: !0,
            },
            2e3,
          ));
      },
      Q = function (t, n) {
        var e = {
          client_extra_data: { languages: t.join(",") },
          event:
            "fb_reel_auto_dub_consumption_do_not_translate_languages_changed",
          video_id: n != null ? String(n) : "",
        };
        r("AutoDubbingConsumptionFalcoEvent").log(function () {
          return e;
        });
      },
      X = function (t, n) {
        var e = {
          client_extra_data: {
            languages: t.join(","),
            source: "preferred_languages",
          },
          event:
            "fb_reel_auto_dub_consumption_do_not_translate_languages_changed",
          video_id: n != null ? String(n) : "",
        };
        r("AutoDubbingConsumptionFalcoEvent").log(function () {
          return e;
        });
      },
      Y = function (t, n, o) {
        var e = {
          client_extra_data: {
            lang_from: t != null ? t : "none",
            lang_to: n != null ? n : "none",
            player_type: "Reel",
            source: "preferred_languages",
          },
          event: "fb_reel_auto_dub_consumption_preferred_language_changed",
          video_id: o != null ? String(o) : "",
        };
        r("AutoDubbingConsumptionFalcoEvent").log(function () {
          return e;
        });
      },
      J = function (t, n) {
        var e = {
          client_extra_data: { reason: t.message },
          event: "fb_reel_auto_dub_consumption_preferred_languages_save_failed",
          video_id: n != null ? String(n) : "",
        };
        r("AutoDubbingConsumptionFalcoEvent").log(function () {
          return e;
        });
      };
    function Z() {
      var e = o("react-compiler-runtime").c(2),
        t = o("CometRelay").useMutation(
          o("CometAudioLanguageMenuItemsMutation")
            .setUserPreferredAudioLanguagesDataMutation,
        ),
        n = t[0],
        r;
      return (
        e[0] !== n
          ? ((r = function (t, r, a, i) {
              n({
                onCompleted: function (n) {
                  var e;
                  (X(t, a),
                    t[0] !== r && Y(r, t[0], a),
                    i == null ||
                      i(
                        ((e = n.set_user_preferred_audio_languages) == null ||
                        (e = e.audio_settings) == null
                          ? void 0
                          : e.has_primary_preferred_audio_language) === !0,
                      ));
                },
                onError: function (t) {
                  (J(t, a),
                    o("cometPushToast").cometPushToast(
                      {
                        message: o("CometVideoPlayerAutoDubbingWWWStrings")
                          .PREFERRED_LANGUAGES_SAVE_FAILED_TOAST,
                        withoutCloseButton: !0,
                      },
                      3e3,
                    ));
                },
                updater: function (t) {
                  var e,
                    n =
                      (e = t.getRootField(
                        "set_user_preferred_audio_languages",
                      )) == null
                        ? void 0
                        : e.getLinkedRecord("audio_settings"),
                    r = a != null ? t.get(a) : null;
                  n != null &&
                    r != null &&
                    r.setLinkedRecord(n, "audio_settings");
                },
                variables: { input: { language_codes: t } },
              });
            }),
            (e[0] = n),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function ee() {
      var e = o("react-compiler-runtime").c(2),
        t = o("CometRelay").useMutation(
          o("CometAudioLanguageMenuItemsMutation")
            .setDoNotTranslateLanguageDataMutation,
        ),
        n = t[0],
        r;
      return (
        e[0] !== n
          ? ((r = function (t, r) {
              n({
                onCompleted: function () {
                  Q(t, r);
                },
                onError: te,
                optimisticResponse: {
                  audio_settings: {
                    do_not_translate_languages_string: t,
                    id: r,
                  },
                },
                variables: { input: { language_codes: t } },
              });
            }),
            (e[0] = n),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function te() {}
    var ne = function (t, n, o, a) {
        var e = {
          client_extra_data: {
            fromTrackId: o != null ? o : "",
            reason: t,
            toTrackId: a != null ? a : "",
          },
          event: "fb_reel_auto_dub_consumption_logger_error",
          video_id: n != null ? n : "",
        };
        r("AutoDubbingConsumptionFalcoEvent").log(function () {
          return e;
        });
      },
      re = function (t, n, r, o) {
        var e =
            (n == null && (r == null ? void 0 : r.role) === "dub") ||
            ((n == null ? void 0 : n.id) != null &&
              (r == null ? void 0 : r.id) !== (n == null ? void 0 : n.id)),
          a = null;
        return (
          e &&
            (t == null
              ? ((e = !1), (a = "availableAudioTracks is null"))
              : r == null
                ? (e = !1)
                : t != null &&
                    n != null &&
                    t.find(function (e) {
                      return e.id === n.id;
                    }) == null
                  ? ((e = !1), (a = "fromTrack is not in availableAudioTracks"))
                  : t != null &&
                      r != null &&
                      t.find(function (e) {
                        return e.id === r.id;
                      }) == null
                    ? ((e = !1), (a = "toTrack is not in availableAudioTracks"))
                    : (n == null ? void 0 : n.id) != null &&
                        (n == null ? void 0 : n.id) ===
                          (r == null ? void 0 : r.id)
                      ? ((e = !1), (a = "fromTrack and toTrack are the same"))
                      : n == null &&
                        (r == null ? void 0 : r.role) !== "dub" &&
                        ((e = !1), (a = "toTrack is not dubbed"))),
          !e &&
            a != null &&
            ne(a, o, n == null ? void 0 : n.id, r == null ? void 0 : r.id),
          e
        );
      };
    function oe(e, t, n, r) {
      var a = o("react-compiler-runtime").c(6),
        i = h(null),
        l,
        s;
      (a[0] !== r || a[1] !== n || a[2] !== t || a[3] !== e
        ? ((l = function () {
            var o = re(r, i.current, e, n);
            if (o) {
              var a,
                l,
                s,
                u,
                c = b((a = i.current) != null ? a : null, t);
              i.current == null && c == null && (c = t);
              var d = b(e, t);
              C(
                c,
                d,
                (l = (s = i.current) == null ? void 0 : s.role) != null
                  ? l
                  : null,
                (u = e == null ? void 0 : e.role) != null ? u : null,
                "fb_reel_auto_dub_consumption",
                n != null ? n : "",
              );
            }
            i.current = e;
          }),
          (s = [e, t, n, r]),
          (a[0] = r),
          (a[1] = n),
          (a[2] = t),
          (a[3] = e),
          (a[4] = l),
          (a[5] = s))
        : ((l = a[4]), (s = a[5])),
        f(l, s));
    }
    ((l.logConsumptionLanguageChange = C),
      (l.getSelectedLanguage = b),
      (l.logInitialDubbingConsumption = v),
      (l.useGetDubTrackMapping = S),
      (l.getOriginalLanguage = R),
      (l.useDubbedTrackDescription = L),
      (l.useGetAllAvailableTracks = E),
      (l.useGetUserSelectedDoNotTranslateLanguageList = D),
      (l.useGetCurrentDoNotTranslateLanguages = x),
      (l.getLocalizedLanguageName = $),
      (l.useGetPreferredLanguagesLabel = P),
      (l.changePreferredLanguage = N),
      (l.useSaveAndLogPreferredLanguage = M),
      (l.useUserPreferredLanguage = F),
      (l.getAutoplayLanguageReason = B),
      (l.useAllTransalateableLanguages = W),
      (l.changeUserPreferredDoNotTranslateLanguages = H),
      (l.changeAudioToOriginalLanguage = G),
      (l.getPreferredLanguagesAudioTrack = z),
      (l.changeAudioToPreferredLanguages = j),
      (l.logTransalationRating = K),
      (l.logDoNotTranslateLanguageSave = Q),
      (l.logPreferredAudioLanguagesSave = X),
      (l.logPreferredAudioLanguagePrimaryChange = Y),
      (l.logPreferredAudioLanguagesSaveFailure = J),
      (l.useSaveAndLogPreferredAudioLanguages = Z),
      (l.useSaveAndLogDoNotTranslateLanguages = ee),
      (l.useLogTargetAudioChange = oe));
  },
  98,
);
