__d(
  "AdsPEExportPresetListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPEExportPresetBatchCreatedActionFlux",
    "AdsPEExportPresetBatchDeletedActionFlux",
    "AdsPEExportPresetListDataManager",
    "AdsPEExportPresetListLoadErrorActionFlux",
    "AdsPEExportPresetListLoadedActionFlux",
    "AdsPEExportPresetListPartialLoadActionFlux",
    "CurrentUser",
    "FBLogger",
    "adsCreateStoreSelector",
    "isTruthy",
    "naturalComparator",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.getForCurrentUser = r("adsCreateStoreSelector")(
              [t],
              function () {
                return t.getFor(r("CurrentUser").getAccountID());
              },
              { name: i.id },
            )),
            (t.$AdsPEExportPresetListStore$p_1 = new Map()),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsPEExportPresetListDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsPEExportPresetBatchCreatedActionFlux").actionType,
              o("AdsPEExportPresetBatchDeletedActionFlux").actionType,
              o("AdsPEExportPresetListLoadErrorActionFlux").actionType,
              o("AdsPEExportPresetListLoadedActionFlux").actionType,
              o("AdsPEExportPresetListPartialLoadActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            e: {
              var n = e;
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "actionType" in n &&
                n.actionType ===
                  o("AdsPEExportPresetBatchCreatedActionFlux").actionType &&
                "presets" in n
              ) {
                var a = n.presets;
                this.$AdsPEExportPresetListStore$p_2(a);
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "actionType" in n &&
                n.actionType ===
                  o("AdsPEExportPresetBatchDeletedActionFlux").actionType &&
                "ids" in n
              ) {
                var i = n.ids;
                this.$AdsPEExportPresetListStore$p_3(i);
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "actionType" in n &&
                n.actionType ===
                  o("AdsPEExportPresetListLoadedActionFlux").actionType &&
                "userID" in n &&
                "presets" in n
              ) {
                var l = n.userID,
                  s = n.presets;
                this.__handleDataFor(l, s, r("AdsLoadState_LEGACY").LOADED);
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "actionType" in n &&
                n.actionType ===
                  o("AdsPEExportPresetListLoadErrorActionFlux").actionType &&
                "userID" in n
              ) {
                var u = n.userID;
                this.__handleDataFor(u, null, r("AdsLoadState_LEGACY").ERROR);
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                "actionType" in n &&
                n.actionType ===
                  o("AdsPEExportPresetListPartialLoadActionFlux").actionType &&
                "userID" in n &&
                "presets" in n
              ) {
                var c = n.userID,
                  d = n.presets;
                this.__handleDataFor(c, d, r("AdsLoadState_LEGACY").LOADING);
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  n,
              );
            }
          }),
          (n.getSortKey = function () {
            return "name";
          }),
          (n.compare = function (t, n) {
            return r("naturalComparator")(t, n);
          }),
          (n.__handleDataFor = function (n, r, o) {
            var t = this,
              a = e.prototype.__handleDataFor.call(this, n, r, o);
            return (
              a &&
                r &&
                r.forEach(function (e) {
                  e.id != null &&
                    t.$AdsPEExportPresetListStore$p_1.set(e.id, n);
                }),
              !1
            );
          }),
          (n.$AdsPEExportPresetListStore$p_2 = function (t) {
            var e = this;
            t.forEach(function (t) {
              e.__handleDataFor(t.userID, [{ id: t.id }]);
            });
          }),
          (n.$AdsPEExportPresetListStore$p_3 = function (t) {
            var e = this;
            (r("vulture")("YCKjEiWPtKB9kUNhpyb2ujdsLm0="),
              t.forEach(function (t) {
                var n = e.$AdsPEExportPresetListStore$p_1.get(t);
                if (!r("isTruthy")(n)) {
                  r("FBLogger")("ads").warn(
                    "Export preset ID %s was deleted, but it seems to be orphaned",
                    t,
                  );
                  return;
                }
                (e.__invalidateChild(n, t),
                  e.$AdsPEExportPresetListStore$p_1.delete(t));
              }));
          }),
          t
        );
      })(r("AdsBaseListStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
