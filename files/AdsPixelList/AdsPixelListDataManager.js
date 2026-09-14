__d(
  "AdsPixelListDataManager",
  [
    "fbt",
    "AdsAdsPixelListPartialLoadDataAction",
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "AdsPixelListBatchLoadErrorDataAction",
    "AdsPixelListBatchLoadedDataAction",
    "GraphAPIPaging",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["creation_time", "id"],
      u = 100,
      c = 800,
      d = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (t) {
            this.loadForAccount(t);
          }),
          (a.loadForAccount = function (n) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(n)
                .edge("adspixels")
                .batched()
                .get({ fields: e })
                .then(
                  o("GraphAPIPaging").eachPage(function (e) {
                    return t.$AdsPixelListDataManagerClass$p_1(n, e.data);
                  }, u),
                ),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.loadForBusiness = function (n, a, l, s, u) {
            var t = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("business_id", a)
                .edge("adspixels")
                .batched()
                .get({
                  fields: e,
                  name_filter: s,
                  id_filter: u,
                  limit: l || c,
                }),
              function (e) {
                return t.__handleSuccess(["load"], n, null, e);
              },
              function (e) {
                return t.__handleError(["load"], n, null, e);
              },
            );
          }),
          (a.$AdsPixelListDataManagerClass$p_1 = function (t, n) {
            r("AdsAdsPixelListPartialLoadDataAction").dispatch(
              { sourceID: t, adsPixels: n },
              {
                line: "77",
                module: "AdsPixelListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoaded = function (t) {
            r("AdsPixelListBatchLoadedDataAction").dispatch(
              { responses: t },
              {
                line: "84",
                module: "AdsPixelListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__onBatchLoadError = function (t) {
            r("AdsPixelListBatchLoadErrorDataAction").dispatch(
              { responses: t },
              {
                line: "90",
                module: "AdsPixelListDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Ad account");
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      m = new d(),
      p = m;
    l.default = p;
  },
  226,
);
