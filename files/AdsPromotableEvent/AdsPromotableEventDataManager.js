__d(
  "AdsPromotableEventDataManager",
  [
    "AdsBaseDataManager",
    "AdsDataManagerApiUtils",
    "AdsGraphAPI",
    "AdsPromotableEventBatchLoadErrorDataAction",
    "AdsPromotableEventBatchLoadedDataAction",
    "AdsPromotableEventListBatchLoadErrorDataAction",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "picture",
        "cover",
        "description",
        "has_ticket_onsale_for_viewer",
        "id",
        "is_viewer_admin",
        "name",
        "place",
        "start_time",
        "ticket_uri",
        "owner",
        "is_pay_to_access",
      ],
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadAllFor = function (n, a) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .objects("promotable_events", a)
                .get({ fields: e }),
              function (e) {
                (t.__handleSuccess(["load"], n, null, e),
                  r("AdsPromotableEventBatchLoadErrorDataAction").dispatch(
                    {
                      accountID: n,
                      errors: o("AdsDataManagerApiUtils").extractErrors(e, a),
                    },
                    {
                      line: "61",
                      module: "AdsPromotableEventDataManager.js",
                      moduleID: i.id,
                    },
                  ));
              },
              function (e) {
                return r("AdsPromotableEventBatchLoadErrorDataAction").dispatch(
                  {
                    accountID: n,
                    errors: o("AdsDataManagerApiUtils").extractErrors({}, a, e),
                  },
                  {
                    line: "67",
                    module: "AdsPromotableEventDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (a.loadFor = function (t, n) {
            this.loadAllFor(t, [n]);
          }),
          (a.__onBatchLoaded = function (t) {
            t.forEach(function (e, t) {
              var n = new Map(Object.entries(e));
              r("AdsPromotableEventBatchLoadedDataAction").dispatch(
                { accountID: t, promotableEvents: n },
                {
                  line: "84",
                  module: "AdsPromotableEventDataManager.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsPromotableEventListBatchLoadErrorDataAction").dispatch(
              { accountID: t },
              {
                line: "98",
                module: "AdsPromotableEventDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("AdsBaseDataManager")),
      u = new s();
    l.default = u;
  },
  98,
);
