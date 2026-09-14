__d(
  "AdsUEditorCampaignBulkSelectors",
  [
    "AdsBulkValueUtils",
    "AdsError",
    "AdsUEditorErrorSelectorUtils",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsMemoizeWithArgs",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
    "adsUEditorCampaignCombinedErrorsForSelectedCampaignsSelector",
    "adsUEditorCampaignGroupCrossValidationErrorsSelector",
    "adsUEditorCampaignPublishStatusSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "adsUEditorSelectedCampaignsSelector",
    "concatArrays",
    "immutable",
    "memoizeByReference",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorCampaignCombinedErrorsForSelectedCampaignsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return r("concatArrays")(e.valueSeq().toArray())
              .filter(function (e) {
                return e.path != null && r("shallowArrayEqual")(e.path, t);
              })
              .map(function (e) {
                return e.message;
              });
          }),
          { name: i.id },
        );
      },
      u = function (t) {
        return r("adsCreateSelector")(
          [
            r("adsUEditorCampaignCombinedErrorsForSelectedCampaignsSelector"),
            r("adsUEditorCampaignGroupCrossValidationErrorsSelector"),
          ],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, n) {
            var o = r("concatArrays")
              .apply(void 0, [e.valueSeq().toArray()].concat(n))
              .filter(function (e) {
                return e.path && r("shallowArrayEqual")(e.path, t);
              });
            return o.length > 0
              ? o.map(function (e) {
                  return r("AdsError").clone(
                    e,
                    {},
                    { fragmentID: e.fragmentID },
                  );
                })
              : o;
          }),
          { name: i.id },
        );
      },
      c = (e = r("adsMemoizeWithArgs"))(
        s,
        function (e) {
          return e.join(".");
        },
        i.id + ".errorMessageSelectorByPath",
      ),
      d = e(
        u,
        function (e) {
          return e.join(".");
        },
        i.id + ".errorSelectorByPath",
      ),
      m = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorCampaignCombinedErrorsForSelectedCampaignsSelector")],
          o("AdsUEditorErrorSelectorUtils").getBulkErrorObjectByPath(t),
          { name: i.id },
        );
      },
      p = e(
        m,
        function (e) {
          return e
            .map(function (e) {
              return e.join(".");
            })
            .join(",");
        },
        i.id + ".errorObjectSelectorByPaths",
      ),
      _ = function (t) {
        return r("adsCreateSelector")(
          [p(t)],
          function (t) {
            return o("AdsBulkValueUtils").mapBulkValue(t, function (e) {
              return e.message;
            });
          },
          { name: i.id },
        );
      },
      f = e(
        _,
        function (e) {
          return e
            .map(function (e) {
              return e.join(".");
            })
            .join(",");
        },
        i.id + ".errorMessageSelectorByPaths",
      ),
      g = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignIDsSelector"),
          r("adsUEditorCampaignPublishStatusSelector"),
        ],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, t) {
          return e.map(function (e) {
            var n = t.get(e);
            return n ? n.isNew : !1;
          });
        }),
        { name: i.id + ".isObjectNew" },
      ),
      h = function (t, n) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              var n = e.getIn(t),
                o =
                  n != null &&
                  (n instanceof r("immutable").Iterable ||
                    n instanceof r("immutable").Record);
              return o ? n.toJS() : n;
            });
          }, n),
          { name: i.id },
        );
      },
      y = e(
        h,
        function (e, t) {
          return (t ? [].concat(e, [t.getKey()]) : e).join(".");
        },
        i.id + ".selectorByPathToJS_DEPRECATED_USE_BULKBYACCESSORTOJS",
      ),
      C = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(t);
          }),
          { name: i.id },
        );
      },
      b = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(t);
          }),
          { name: i.id },
        );
      },
      v = function (t) {
        return r("adsCreateSelector")(
          [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
          o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e) {
            return e.map(function (e) {
              return t(e);
            });
          }),
          { name: i.id },
        );
      },
      S = r("memoizeByReference")(C),
      R = r("memoizeByReference")(b),
      L = r("memoizeByReference")(v);
    ((l.errorMessageSelectorByPath = c),
      (l.errorSelectorByPath = d),
      (l.errorObjectSelectorByPaths = p),
      (l.errorMessageSelectorByPaths = f),
      (l.isObjectNew = g),
      (l.selectorByPathToJS_DEPRECATED_USE_BULKBYACCESSORTOJS = y),
      (l.selectorByCampaignFn = S),
      (l.selectorByCampaignPlainObjectFn = R),
      (l.selectorByAdObjectsFn = L));
  },
  98,
);
