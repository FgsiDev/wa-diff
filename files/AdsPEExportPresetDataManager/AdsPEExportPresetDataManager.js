__d(
  "AdsPEExportPresetDataManager",
  [
    "AdsBaseDataManager",
    "AdsGraphAPI",
    "AdsPEExportPresetBatchCreateErrorAction",
    "AdsPEExportPresetBatchCreatedAction",
    "AdsPEExportPresetBatchDeleteErrorAction",
    "AdsPEExportPresetBatchDeletedAction",
    "AdsPEExportPresetBatchLoadErrorAction",
    "AdsPEExportPresetBatchLoadedAction",
    "AdsPEExportPresetDataManagerFields",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.loadAll = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.load(t);
            });
          }),
          (n.load = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("exportpreset", t)
                .batched()
                .get({ fields: r("AdsPEExportPresetDataManagerFields") }),
              function (n) {
                return e.__handleSuccess(["load"], t, null, n);
              },
              function (n) {
                return e.__handleError(["load"], t, null, n);
              },
            );
          }),
          (n.create = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("user", t.userID)
                .edge("ad_export_presets")
                .batched()
                .post(t),
              function (n) {
                return e.__handleSuccess(["create"], t.tempID, null, {
                  id: n.id,
                  name: t.name,
                  tempID: t.tempID,
                  userID: t.userID,
                });
              },
              function (n) {
                ((n.userID = t.userID),
                  e.__handleError(["create"], t.tempID, null, n));
              },
            );
          }),
          (n.delete = function (t) {
            var e = this;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("exportpreset", t)
                .batched()
                .remove(),
              function (n) {
                return e.__handleSuccess(["delete"], t, null, n);
              },
              function (n) {
                return e.__handleError(["delete"], t, null, n);
              },
            );
          }),
          (n.__onBatchCreated = function (t) {
            r("AdsPEExportPresetBatchCreatedAction").dispatch(
              { presets: t },
              {
                line: "95",
                module: "AdsPEExportPresetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchCreateError = function (t) {
            r("AdsPEExportPresetBatchCreateErrorAction").dispatch(
              { errors: t },
              {
                line: "101",
                module: "AdsPEExportPresetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchDeleted = function (t) {
            r("AdsPEExportPresetBatchDeletedAction").dispatch(
              { ids: Array.from(t.keys()) },
              {
                line: "110",
                module: "AdsPEExportPresetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchDeleteError = function (t) {
            r("AdsPEExportPresetBatchDeleteErrorAction").dispatch(
              { errors: t },
              {
                line: "116",
                module: "AdsPEExportPresetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchLoaded = function (t) {
            r("AdsPEExportPresetBatchLoadedAction").dispatch(
              { presets: t },
              {
                line: "125",
                module: "AdsPEExportPresetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchLoadError = function (t) {
            r("AdsPEExportPresetBatchLoadErrorAction").dispatch(
              { errors: t },
              {
                line: "131",
                module: "AdsPEExportPresetDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          t
        );
      })(r("AdsBaseDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
