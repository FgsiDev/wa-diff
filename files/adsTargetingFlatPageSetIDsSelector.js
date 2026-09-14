__d(
  "adsTargetingFlatPageSetIDsSelector",
  [
    "AdsBulkValueUtils",
    "AdsFlatPageSetStoreKey",
    "AdsLoadStateUtils_LEGACY",
    "AdsPageStore",
    "AdsPageUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsPageSetStoreGetAllSelector",
    "adsTargetingLocationPromotedPageIDSelector",
    "adsUEditorAccountSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("adsTargetingLocationPromotedPageIDSelector"),
          r("adsPageSetStoreGetAllSelector"),
          r("AdsPageStore").getSelector,
        ],
        function (t, n, a, l) {
          var e = o("AdsBulkValueUtils").getUniformValue(n);
          return e == null
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : o("AdsLoadStateUtils_LEGACY")
                .toLoadObject(l(e))
                .map(function (e) {
                  var n = [].concat(
                    o("AdsPageUtils").hasLocations(e) ? [e.id] : [],
                  );
                  return r("immutable").OrderedMap(
                    n.map(function (e) {
                      return [
                        e,
                        a(
                          new (r("AdsFlatPageSetStoreKey"))({
                            accountID: t.account_id,
                            dlaParentPageID: e,
                          }),
                        ),
                      ];
                    }),
                  );
                });
        },
        { name: i.id + ".adsTargetingFlatPageSetIDsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
