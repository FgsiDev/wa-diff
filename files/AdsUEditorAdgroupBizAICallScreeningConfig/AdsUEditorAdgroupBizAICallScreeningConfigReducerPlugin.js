__d(
  "AdsUEditorAdgroupBizAICallScreeningConfigReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupBizAICallScreeningConfigActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var o = e;
                return t.clearAll === !0
                  ? ((o = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.call_ads_configuration.agent_greeting.delete(
                      o,
                    )),
                    (o = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.call_ads_configuration.bizai_config.delete(
                      o,
                    )),
                    (o = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.call_ads_configuration.greeting_audio_url.delete(
                      o,
                    )),
                    o)
                  : (t.agentGreeting != null &&
                      (o = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.call_ads_configuration.agent_greeting.set(
                        t.agentGreeting,
                        o,
                      )),
                    t.bizaiConfig != null &&
                      (o = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.call_ads_configuration.bizai_config.set(
                        t.bizaiConfig,
                        o,
                      )),
                    t.greetingAudioUrl != null &&
                      (o = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.call_ads_configuration.greeting_audio_url.set(
                        t.greetingAudioUrl,
                        o,
                      )),
                    o);
              },
            );
          },
          r("AdsUEditorAdgroupBizAICallScreeningConfigActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
