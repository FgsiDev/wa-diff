__d(
  "AdsManagerEntryPointRegistrationUtils",
  [
    "AdsAdgroupCombinedStore",
    "AdsInteractionTrigger",
    "AdsManagerEntryPointTriggerUtils",
    "AdsObjectTypes",
    "AdsPerfInteractionsController",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsInteractionTrigger").isCodeInteractionStartInfo(e)
        ? {
            interactionID: e.interactionID,
            interaction: e.interaction,
            tracePolicy: e.tracePolicy,
          }
        : { trigger: e.triggerContext.source };
    }
    function s(t, n) {
      (o("AdsInteractionTrigger").onInteractionStart.add(function (n) {
        o("AdsInteractionTrigger").isCodeInteractionStartInfo(n) &&
          n.interaction === "am.edit_ads.load_preview" &&
          n.triggerContext.objectIDs != null &&
          n.triggerContext.objectType === r("AdsObjectTypes").ADGROUP &&
          t(n.interaction, e(n), n.triggerContext.objectIDs, n.callsite);
      }),
        r("AdsAdgroupCombinedStore").addListener(function () {
          var e = r("AdsPerfInteractionsController").getActiveInteraction(
            "am.editor.preview",
          );
          e != null &&
            r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
              e,
            ) != null &&
            n(e, r("AdsAdgroupCombinedStore"));
        }));
    }
    function u(e) {
      o("AdsInteractionTrigger").onInteractionStart.add(function (t) {
        o("AdsManagerEntryPointTriggerUtils").isUserInitiatedTrigger(t.event) &&
          t.interaction === "am.insights_table.open_column_set_editor" &&
          e();
      });
    }
    ((l.epStartContextFromStartInfo = e),
      (l.registerPreviewEntryPoint = s),
      (l.registerOpenColumnSetEditorEntryPoint = u));
  },
  98,
);
