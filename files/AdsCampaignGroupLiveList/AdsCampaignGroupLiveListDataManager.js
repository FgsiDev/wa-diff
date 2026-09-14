__d(
  "AdsCampaignGroupLiveListDataManager",
  [
    "AdsBaseListDataManager",
    "AdsCampaignGroupListPartialLoadDataAction",
    "AdsCampaignGroupLiveListBatchLoadErrorAction",
    "AdsCampaignGroupLiveListBatchLoadedAction",
    "AdsGraphAPI",
    "GraphAPIPaging",
    "GraphAPIRetry",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "name"],
      s = 1e3,
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (n) {
            var t = this,
              a = o("AdsGraphAPI")
                .get(i.id)
                .adaccount(n)
                .edge("campaigns")
                .batched(),
              l = { fields: e, limit: s, summary: !0 },
              u = r("gkx")("22099")
                ? o("GraphAPIRetry").getWithRetries(a, l, 3)
                : a.get(l);
            r("promiseDone")(
              u.then(
                o("GraphAPIPaging").eachPage(function (e) {
                  return r(
                    "AdsCampaignGroupListPartialLoadDataAction",
                  ).dispatch(
                    {
                      accountID: n,
                      campaignGroups: e.data,
                      totalCount: e.summary.total_count,
                    },
                    {
                      line: "64",
                      module: "AdsCampaignGroupLiveListDataManager.js",
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
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsCampaignGroupLiveListBatchLoadedAction").dispatch(
              { responses: t },
              {
                line: "80",
                module: "AdsCampaignGroupLiveListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsCampaignGroupLiveListBatchLoadErrorAction").dispatch(
              { responses: t },
              {
                line: "86",
                module: "AdsCampaignGroupLiveListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      c = new u();
    l.default = c;
  },
  98,
);
