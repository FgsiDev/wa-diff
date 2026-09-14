__d(
  "AdsPEIssuesInfoErrorCodesToResolutionFieldMap",
  [
    "errorCode",
    "AdsAPIAdgroupPaths",
    "UnblockCustomAudienceDeletedErrorConstants",
    "UnblockCustomAudienceResolutionExperimentUtils",
    "UnblockPostDeletedErrorConstants",
    "UnblockPostDeletedResolutionExperimentUtils",
    "UnblockUnpublishedPageErrorConstants",
    "UnpublishedPageErrorExperimentUtils",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").Set([
        "targeting.targeting_relaxation_types.custom_audience",
      ]),
      u = r("immutable").Map(
        o("UnblockCustomAudienceDeletedErrorConstants")
          .UNBLOCK_CUSTOM_AUDIENCE_DELETED_ERRORS.map(function (e) {
            return [
              e,
              o(
                "UnblockCustomAudienceResolutionExperimentUtils",
              ).isPassingUnblockCustomAudienceResolutionExperiment(!1)
                ? "targeting"
                : null,
            ];
          })
          .concat(
            o(
              "UnblockPostDeletedErrorConstants",
            ).UNBLOCK_POST_DELETED_ERRORS.map(function (e) {
              return [
                e,
                o(
                  "UnblockPostDeletedResolutionExperimentUtils",
                ).isPassingUnblockPostDeletedResolutionExperiment(!1)
                  ? "creative"
                  : null,
              ];
            }),
          )
          .concat(
            o(
              "UnblockUnpublishedPageErrorConstants",
            ).UNBLOCK_PAGE_UNPUBLISHED_ERRORS.map(function (e) {
              return [
                e,
                o(
                  "UnpublishedPageErrorExperimentUtils",
                ).isInUnpublishedPageErrorExperiment(!1)
                  ? "creative"
                  : null,
              ];
            }),
          )
          .concat([
            [
              1341012,
              r("justknobx")._("1859")
                ? r(
                    "AdsAPIAdgroupPaths",
                  ).CREATIVE.OBJECT_STORY_SPEC.PAGE_ID.join(".")
                : null,
            ],
          ]),
      );
    function c(e) {
      return u.get(e.error_code);
    }
    ((l.DELIVERY_ISSUE_ERROR_FIELD_EXCLUSIONS = e),
      (l.getDeliveryIssueErrorResolutionField = c));
  },
  98,
);
