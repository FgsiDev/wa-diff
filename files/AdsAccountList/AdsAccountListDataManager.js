__d(
  "AdsAccountListDataManager",
  [
    "fbt",
    "AdsAccountListBatchLoadErrorDataAction",
    "AdsAccountListBatchLoadedDataAction",
    "AdsAccountListPartialLoadDataAction",
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "GraphAPIPaging",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = Object.freeze({
        SUPER_KEY: "ALL_AD_ACCOUNTS",
        PERSONAL_AD_ACCOUNT_SUPER_KEY: "PERSONAL_AD_ACCOUNTS",
      }),
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (n) {
            var t = this,
              a = o("AdsGraphAPI").get(i.id).me(),
              l;
            (n === e.PERSONAL_AD_ACCOUNT_SUPER_KEY
              ? (l = a.edge("personal_ad_accounts"))
              : (l = a.edge("adaccounts")),
              r("promiseDone")(
                l.get({ fields: ["account_id"], summary: !0, limit: 50 }).then(
                  o("GraphAPIPaging").eachPage(function (e) {
                    return r("AdsAccountListPartialLoadDataAction").dispatch(
                      {
                        id: n,
                        accounts: e.data,
                        totalCount: e.summary.total_count,
                      },
                      {
                        line: "51",
                        module: "AdsAccountListDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  }),
                ),
                function (e) {
                  return t.__handleSuccess(["load"], n, null, e);
                },
                function (e) {
                  return t.__handleError(["load"], n, null, e);
                },
              ));
          }),
          (a.__onBatchLoaded = function (t) {
            t.forEach(function (e, t) {
              r("AdsAccountListBatchLoadedDataAction").dispatch(
                { accounts: e.data, id: t },
                {
                  line: "68",
                  module: "AdsAccountListDataManager.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          (a.__onBatchLoadError = function (t) {
            t.forEach(function (e, t) {
              r("AdsAccountListBatchLoadErrorDataAction").dispatch(
                { id: t },
                {
                  line: "80",
                  module: "AdsAccountListDataManager.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Ad accounts");
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      c = new u();
    ((l.AdsAccountListDataKeys = e), (l.AdsAccountListDataManager = c));
  },
  226,
);
