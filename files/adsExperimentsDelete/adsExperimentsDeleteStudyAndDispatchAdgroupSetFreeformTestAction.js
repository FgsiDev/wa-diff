__d(
  "adsExperimentsDeleteStudyAndDispatchAdgroupSetFreeformTestAction",
  [
    "AdStudyGraphAPIUtils",
    "AdsExperimentsFunnelLogger",
    "AdsUEditorAdgroupSetFreeformTestAction",
    "AdsUEditorHostIDs",
    "adsExperimentsCreativemulticellClearPublishedAdgroups",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e != null &&
        (r("promiseDone")(
          o("AdStudyGraphAPIUtils").deleteAdStudy(e),
          function () {
            r("AdsExperimentsFunnelLogger")
              .withoutAccountID()
              .setAction("DELETE_CREATIVE_MULTICELL_TEST_SUCCESS")
              .addActionPayload("studyID", e)
              .log();
          },
          function (t) {
            r("AdsExperimentsFunnelLogger")
              .withoutAccountID()
              .setAction("DELETE_CREATIVE_MULTICELL_TEST_ERROR")
              .addActionPayload("studyID", e)
              .addActionPayload("error", t)
              .log();
          },
        ),
        t != null &&
          t.length > 0 &&
          (r("AdsUEditorAdgroupSetFreeformTestAction").dispatch(
            {
              studyCellIDs: null,
              studyID: null,
              adgroupIDs: t,
              hostID: r("AdsUEditorHostIDs").EDITING,
            },
            {
              line: "41",
              module:
                "adsExperimentsDeleteStudyAndDispatchAdgroupSetFreeformTestAction.js",
              moduleID: i.id,
            },
          ),
          r("adsExperimentsCreativemulticellClearPublishedAdgroups")(e)));
    }
    l.default = e;
  },
  98,
);
