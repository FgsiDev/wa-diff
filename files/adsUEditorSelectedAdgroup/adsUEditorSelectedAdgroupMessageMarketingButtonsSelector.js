__d(
  "adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsBulkValueUtils",
    "AdsUEditorSelectedAdgroupMessageMarketingButtonsSelectorUtil",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").adgroup.bulkByAccessor(
            r("AdsAdgroupRecordAccessors").creative
              .marketing_message_structured_spec.get,
          ),
          o("AdsUEditorSelectors").adgroup.bulkByAccessor(
            r("AdsAdgroupRecordAccessors").creative
              .marketing_message_structured_spec.buttons.get,
          ),
        ],
        function (t, n) {
          var e = o("AdsBulkValueUtils").getUniformValue(t, null),
            a = o("AdsBulkValueUtils").getUniformValue(n, null);
          return e == null
            ? r("immutable").List()
            : o(
                "AdsUEditorSelectedAdgroupMessageMarketingButtonsSelectorUtil",
              ).adsUEditorSelectedAdgroupMessageMarketingButtonsLogic(a);
        },
        {
          name:
            i.id + ".adsUEditorSelectedAdgroupMessageMarketingButtonsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
