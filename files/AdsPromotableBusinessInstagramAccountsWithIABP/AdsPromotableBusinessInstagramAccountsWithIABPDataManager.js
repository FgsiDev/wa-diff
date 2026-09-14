__d(
  "AdsPromotableBusinessInstagramAccountsWithIABPDataManager",
  [
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "AdsPromotableBusinessInstagramAccountsWithIABPBatchErrorDataAction",
    "AdsPromotableBusinessInstagramAccountsWithIABPBatchLoadedDataAction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (t, n) {
            var e = this;
            r("promiseDone")(
              this.buildRequest(t, n).go(),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (a.buildRequest = function (n, r) {
            return o("AdsGraphAPI")
              .get(i.id)
              .adaccount(n)
              .edge("connected_instagram_accounts_with_iabp")
              .batched()
              .declareOnly()
              .get({
                fields: [
                  "has_profile_picture",
                  "id",
                  "id_v2",
                  "is_authorized_for_political_ads",
                  "is_business",
                  "is_professional",
                  "is_private",
                  "is_published",
                  "profile_pic",
                  "username",
                  "eimu_id",
                  "iabp_id",
                ],
                limit: e,
                business_id: r,
              });
          }),
          (a.__onBatchLoaded = function (t) {
            r(
              "AdsPromotableBusinessInstagramAccountsWithIABPBatchLoadedDataAction",
            ).dispatch(
              { responses: t },
              {
                line: "70",
                module:
                  "AdsPromotableBusinessInstagramAccountsWithIABPDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r(
              "AdsPromotableBusinessInstagramAccountsWithIABPBatchErrorDataAction",
            ).dispatch(
              { errors: t },
              {
                line: "78",
                module:
                  "AdsPromotableBusinessInstagramAccountsWithIABPDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      u = new s();
    l.default = u;
  },
  98,
);
