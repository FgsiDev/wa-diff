__d(
  "AdsLoadDuplicationDialogLoggerPlugin",
  [
    "AdDraftFragmentSource",
    "AdFLEXPerfConfig",
    "AdsPerfInteractionsController",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        log: function (n) {
          if (
            [
              r("AdDraftFragmentSource").QUICK_DUPLICATE_REDIRECT,
              r("AdDraftFragmentSource").COPY_PASTE_REDIRECT,
              r("AdDraftFragmentSource")
                .QUICK_DUPLICATE_UPGRADE_FROM_EDIT_DROPDOWN,
              r("AdDraftFragmentSource").QUICK_DUPLICATE_UPGRADE_FROM_SHORTCUT,
              r("AdDraftFragmentSource").QUICK_DUPLICATE_UPGRADE_FROM_TOOLBAR,
              r("AdDraftFragmentSource").QUICK_DUPLICATE_UPGRADE_FROM_TREE,
              r("AdDraftFragmentSource")
                .DUPLICATE_UPGRADE_CAMPAIGN_GROUP_FROM_CLIPBOARD,
              r("AdDraftFragmentSource")
                .DUPLICATE_UPGRADE_CAMPAIGN_FROM_CLIPBOARD,
              r("AdDraftFragmentSource").DUPLICATE_UPGRADE_AD_FROM_CLIPBOARD,
              r("AdDraftFragmentSource").DUPLICATE_UPGRADE_COPY_PASTE_REDIRECT,
            ].includes(n.source)
          )
            r("AdsPerfInteractionsController").startInteraction(
              "am.duplication.load_dialog_quick_duplicate",
              i.id,
            );
          else {
            var t, o;
            (r("AdsPerfInteractionsController").startInteraction(
              (t =
                r("AdFLEXPerfConfig") == null ||
                (o = r("AdFLEXPerfConfig").get()) == null ||
                o.getAdsPerfInteractionsDuplicationLoadDialogEvent == null
                  ? void 0
                  : o.getAdsPerfInteractionsDuplicationLoadDialogEvent()) !=
                null
                ? t
                : "am.duplication.load_dialog",
              i.id,
            ),
              (e || (e = r("QuickPerformanceLogger"))).markerStart(
                r("qpl")._(41484303, "5895"),
              ),
              e.markerAnnotate(r("qpl")._(41484303, "5895"), {
                string: { level: n.objectLevel },
              }));
          }
          r("QPLUserFlow").addAnnotations(r("qpl")._(270218207, "7032"), {
            string: { start_callsite: n.source },
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
