__d(
  "AdsPEExportPresetListDataManager",
  [
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "AdsPEExportPresetBatchLoadedAction",
    "AdsPEExportPresetDataManagerFields",
    "AdsPEExportPresetListLoadErrorAction",
    "AdsPEExportPresetListLoadedAction",
    "AdsPEExportPresetListPartialLoadAction",
    "GraphAPIPaging",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Map();
      (e.forEach(function (e) {
        return t.set(e.id, e);
      }),
        r("AdsPEExportPresetBatchLoadedAction").dispatch(
          { presets: t },
          {
            line: "37",
            module: "AdsPEExportPresetListDataManager.js",
            moduleID: i.id,
          },
        ));
    }
    var s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("user", t)
                .edge("ad_export_presets")
                .batched()
                .get({
                  fields: r("AdsPEExportPresetDataManagerFields"),
                  limit: 250,
                })
                .then(
                  o("GraphAPIPaging").eachPage(function (n) {
                    return e.$AdsPEExportPresetListDataManager$p_1(t, n.data);
                  }),
                ),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (a.$AdsPEExportPresetListDataManager$p_1 = function (n, o) {
            (e(o),
              r("AdsPEExportPresetListPartialLoadAction").dispatch(
                { presets: o, userID: n },
                {
                  line: "68",
                  module: "AdsPEExportPresetListDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__onBatchLoaded = function (n) {
            n.forEach(function (t, n) {
              (e(t.data),
                r("AdsPEExportPresetListLoadedAction").dispatch(
                  { presets: t.data, userID: n },
                  {
                    line: "77",
                    module: "AdsPEExportPresetListDataManager.js",
                    moduleID: i.id,
                  },
                ));
            });
          }),
          (a.__onBatchLoadError = function (t) {
            t.forEach(function (e, t) {
              r("AdsPEExportPresetListLoadErrorAction").dispatch(
                { userID: t },
                {
                  line: "89",
                  module: "AdsPEExportPresetListDataManager.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      u = new s();
    l.default = u;
  },
  98,
);
