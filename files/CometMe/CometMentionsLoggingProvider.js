__d(
  "CometMentionsLoggingProvider",
  [
    "FBLogger",
    "MentionsSessionEndWithoutClickFalcoEvent",
    "MentionsSessionStartFalcoEvent",
    "MentionsSuggestionClickedFalcoEvent",
    "WithTagSuggestionContinueClickedFalcoEvent",
    "guid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = !1), (this.$3 = null), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.getSessionID = function () {
          return (
            this.$3 == null &&
              r("FBLogger")("search").mustfix(
                "Mentions logging sessionID does not exist.",
              ),
            this.$3
          );
        }),
        (t.isSessionActive = function () {
          return this.$2;
        }),
        (t.startSession = function (t) {
          var e = this;
          if (t != null) {
            var n = r("guid")();
            ((this.$3 = n),
              (this.$2 = !0),
              r("MentionsSessionStartFalcoEvent").log(function () {
                return babelHelpers.extends({}, e.$1, {
                  session_id: n,
                  typed_query: t,
                });
              }));
          }
        }),
        (t.maybeEndSession = function (t, n, o, a) {
          if (t != null) {
            var e =
                n != null
                  ? JSON.stringify(
                      n.map(function (e) {
                        return { id: e.key };
                      }),
                    )
                  : null,
              i = babelHelpers.extends({}, this.$1, {
                serialized_candidate_suggestions: e,
                session_id: this.getSessionID(),
                typed_query: t,
              });
            if (o != null) {
              var l,
                s = o.key,
                u =
                  (l =
                    n == null
                      ? void 0
                      : n.findIndex(function (e) {
                          return e.key === s;
                        })) != null
                    ? l
                    : null,
                c = isNaN(parseInt(o.key, 10)) ? "0" : o.key;
              if (a === !0) {
                r("WithTagSuggestionContinueClickedFalcoEvent").log(
                  function () {
                    return babelHelpers.extends({}, i, {
                      selected_position: String(u),
                      selected_result_display_text: o.label,
                      selected_result_id: c,
                      selected_result_id_string: o.key,
                    });
                  },
                );
                return;
              } else
                r("MentionsSuggestionClickedFalcoEvent").log(function () {
                  return babelHelpers.extends({}, i, {
                    selected_position: String(u),
                    selected_result_display_text: o.label,
                    selected_result_id: c,
                    selected_result_id_string: o.key,
                  });
                });
            } else
              r("MentionsSessionEndWithoutClickFalcoEvent").log(function () {
                return i;
              });
            ((this.$3 = null), (this.$2 = !1));
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
