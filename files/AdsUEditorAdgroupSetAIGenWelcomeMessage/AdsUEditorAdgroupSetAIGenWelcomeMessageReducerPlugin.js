__d(
  "AdsUEditorAdgroupSetAIGenWelcomeMessageReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMessengerConstants",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetAIGenWelcomeMessageDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUniformValue",
    "adsMessengerDataModelSetWelcomeMessage",
    "nullthrows",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(a.get(e.id)),
                i = r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(n, e);
              if (i == null) return e;
              var l;
              try {
                l = JSON.parse(i);
              } catch (t) {
                return e;
              }
              var s = l;
              if (t.modelVersion != null) {
                if (t.isAIGenWelcomeMessageEnabled === !0) {
                  var u;
                  s = r("adsMessengerDataModelSetWelcomeMessage")(
                    l,
                    new (r("AdsUniformValue"))(
                      (u = t.greetingText) != null ? u : "",
                    ),
                  );
                }
                r("setByPath")(
                  s,
                  ["ai_gen_welcome_message_model_version"],
                  t.isAIGenWelcomeMessageEnabled === !0
                    ? t.modelVersion
                    : "UNDEFINED",
                );
              }
              return (
                t.nudgeMessage != null &&
                  r("setByPath")(s, ["auto_follow_up", "text"], t.nudgeMessage),
                t.nudgeModelVersion != null &&
                  (r("setByPath")(
                    s,
                    ["ai_gen_nudge_model_version"],
                    t.nudgeModelVersion,
                  ),
                  r("setByPath")(s, ["auto_follow_up_message_edited"], !1),
                  t.nudgeModelVersion !==
                    o("AdsMessengerConstants")
                      .AI_GEN_NUDGE_MODEL_VERSION_UNDEFINED &&
                    r("setByPath")(s, ["nudge_was_ai_generated"], !0)),
                r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                  n,
                  e,
                  JSON.stringify(s),
                )
              );
            });
          },
          o("AdsUEditorAdgroupSetAIGenWelcomeMessageDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
