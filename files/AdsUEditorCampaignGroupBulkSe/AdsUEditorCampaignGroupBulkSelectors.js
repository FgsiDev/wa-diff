__d(
  "AdsUEditorCampaignGroupBulkSelectors",
  [
    "AdsBulkValueUtils",
    "AdsUEditorErrorSelectorUtils",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsMemoizeWithArgs",
    "adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector",
    "adsUEditorCampaignGroupCrossValidationErrorsSelector",
    "adsUEditorCampaignGroupPublishStatusSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "adsUEditorSelectedCampaignGroupsSelector",
    "concatArrays",
    "memoizeByReference",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignGroupsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(t);
          }),
          { name: i.id },
        );
      },
      s = function (t) {
        return r("adsCreateSelector")(
          [
            o(
              "adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector",
            )
              .adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector,
          ],
          o("AdsUEditorErrorSelectorUtils").getBulkErrorObjectByPath(t),
          { name: i.id },
        );
      },
      u = r("adsMemoizeWithArgs")(
        s,
        function (e) {
          return e.join(".");
        },
        i.id + ".errorObjectSelectorByPath",
      ),
      c = function (t) {
        return r("adsCreateSelector")(
          [u(t)],
          function (t) {
            return o("AdsBulkValueUtils").mapBulkValue(t, function (e) {
              return e.message;
            });
          },
          { name: i.id },
        );
      },
      d = r("adsMemoizeWithArgs")(
        c,
        function (e) {
          return e.join(".");
        },
        i.id + ".errorMessageSelectorByPath",
      ),
      m = r("adsCreateSelector")(
        [
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          o("adsUEditorCampaignGroupPublishStatusSelector")
            .adsUEditorCampaignGroupPublishStatusSelector,
        ],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, t) {
          return e.map(function (e) {
            var n = t.get(e);
            return n ? n.isNew : !1;
          });
        }),
        { name: i.id + ".isObjectNew" },
      ),
      p = r("memoizeByReference")(e),
      _ = function (t) {
        return r("adsCreateSelector")(
          [
            o(
              "adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector",
            )
              .adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector,
            r("adsUEditorCampaignGroupCrossValidationErrorsSelector"),
          ],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, n) {
            return r("concatArrays")
              .apply(void 0, [e.valueSeq().toArray()].concat(n))
              .filter(function (e) {
                return e.path && r("shallowArrayEqual")(e.path, t);
              });
          }),
          { name: i.id },
        );
      },
      f = r("adsMemoizeWithArgs")(
        _,
        function (e) {
          return e.join(".");
        },
        i.id + ".errorSelectorByPath",
      );
    ((l.errorObjectSelectorByPath = u),
      (l.errorMessageSelectorByPath = d),
      (l.isObjectNew = m),
      (l.selectorByCampaignGroupFn = p),
      (l.errorSelectorByPath = f));
  },
  98,
);
