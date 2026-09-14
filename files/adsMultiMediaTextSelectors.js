__d(
  "adsMultiMediaTextSelectors",
  [
    "AdsMultiMediaUtils",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsUEditorIsAdgroupMultiUploadEligibleSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "first",
    "getByPath",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsCreateSelector")(
        [
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          o("adsUEditorIsAdgroupMultiUploadEligibleSelector")
            .adsUEditorIsOptedOutFromMultiUploadSelector,
        ],
        o("AdsUEditorSelectorUtils").memoizeCreateArray(function (t, n) {
          var a = r("first")(t);
          return a === null || n
            ? []
            : o("AdsMultiMediaUtils").getMultiTextDataFromAdgroup(a, e);
        }),
        { name: i.id },
      );
    }
    function s(e) {
      switch (r("getByPath")(e, ["name"])) {
        case "message":
          return o("AdsMultiMediaUtils").MultiMediaTextType.MESSAGE;
        case "headline":
          return o("AdsMultiMediaUtils").MultiMediaTextType.HEADLINE;
        case "linkDescription":
          return o("AdsMultiMediaUtils").MultiMediaTextType.DESCRIPTION;
      }
    }
    function u(e) {
      return r("adsCreateSelector")(
        [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
        function (n) {
          var t = r("first")(n);
          if (t != null) {
            var a = s(e);
            if (a) {
              var i = o("AdsMultiMediaUtils").getMultiTextSpecsFromAdgroup(
                  t,
                  a,
                ),
                l = r("immutable").List(
                  i.map(function (e) {
                    return e.asset_source != null
                      ? r("immutable").Map({
                          text: e.text,
                          asset_source: e.asset_source,
                        })
                      : r("immutable").Map({ text: e.text });
                  }),
                );
              return l;
            }
          }
        },
        { name: i.id },
      );
    }
    ((l.createMultiMediaTextValueSelector = e),
      (l.createMultiMediaTextAssetsSelector = u));
  },
  98,
);
