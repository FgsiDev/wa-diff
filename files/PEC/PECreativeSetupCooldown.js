__d(
  "PECreativeSetupCooldown",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesModalSaveStateAction",
    "AdsInterfacesLogger",
    "AdsMetadataConnectedSourcesUtils",
    "AdsUserSettingsDataManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i = t.userSettingsID;
      if (!(e == null || i == null || i === "")) {
        var l = e.action === "set";
        (r("AdsUserSettingsDataManager").setPeAiRelevancyOptOutTimestamp(
          i,
          l ? Math.floor(Date.now() / 1e3) : 1,
        ),
          o("AdsMetadataConnectedSourcesUtils").updateRelevancyOptOutTimestamp(
            (n = t.accountID) != null ? n : "",
            l,
            i,
            t.objective,
            t.pageID,
            t.urlType,
          ),
          r("AdsInterfacesLogger").log({
            eventName: "ai_relevancy_cooldown_state_changed",
            data: {
              adgroup_id: (a = t.adgroupID) != null ? a : null,
              subsequent_data: JSON.stringify({
                cooldown_action: e.action,
                cooldown_window_days: e.windowDays,
                cooldown_entrypoint: e.entrypoint,
                ai_relevancy_session_id: e.sessionID,
              }),
            },
          }));
      }
    }
    function s(e) {
      var t,
        n,
        o,
        a,
        l,
        s,
        u,
        c,
        d = r("AdsConnectedSourcesDataProvider")().pluginState;
      r("AdsConnectedSourcesModalSaveStateAction").dispatch(
        {
          state: babelHelpers.extends({}, d, {
            strategy: {
              adgroupIDs: [].concat(
                (t =
                  d == null || (n = d.strategy) == null
                    ? void 0
                    : n.adgroupIDs) != null
                  ? t
                  : [],
              ),
              selectedStrategyID:
                (o =
                  d == null || (a = d.strategy) == null
                    ? void 0
                    : a.selectedStrategyID) != null
                  ? o
                  : null,
              sessionID:
                (l =
                  d == null || (s = d.strategy) == null
                    ? void 0
                    : s.sessionID) != null
                  ? l
                  : "",
              virtualPsetID:
                (u =
                  d == null || (c = d.strategy) == null
                    ? void 0
                    : c.virtualPsetID) != null
                  ? u
                  : null,
              pendingCooldown: e,
            },
          }),
        },
        { line: "97", module: "PECreativeSetupCooldown.js", moduleID: i.id },
      );
    }
    ((l.applyPendingCooldown = e), (l.recordPendingCooldown = s));
  },
  98,
);
