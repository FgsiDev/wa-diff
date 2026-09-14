__d(
  "AdsPixelPickerStore",
  [
    "AdsDataAtom",
    "AdsPixelDialogTypes",
    "AdsPixelViewDialogTypeChangeDataActionFlux",
    "AdsPixelViewDisablePixelPickerDataActionFlux",
    "AdsPixelViewOutcomeBasePixelChangeDataActionFlux",
    "FluxStore",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPixelPickerStoreClass$p_2 = !1),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              o("AdsPixelViewDialogTypeChangeDataActionFlux").actionType,
              o("AdsPixelViewDisablePixelPickerDataActionFlux").actionType,
              o("AdsPixelViewOutcomeBasePixelChangeDataActionFlux").actionType,
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            switch (e.actionType) {
              case o("AdsPixelViewDialogTypeChangeDataActionFlux").actionType:
                e.data.dialogType === r("AdsPixelDialogTypes").NO_DIALOG &&
                  ((this.$AdsPixelPickerStoreClass$p_2 = !1),
                  this.__emitChange());
                break;
              case o("AdsPixelViewOutcomeBasePixelChangeDataActionFlux")
                .actionType:
                e.data.pixelID &&
                  e.data.pixelID !== this.$AdsPixelPickerStoreClass$p_1 &&
                  ((this.$AdsPixelPickerStoreClass$p_1 = e.data.pixelID),
                  this.__emitChange());
                break;
              case o("AdsPixelViewDisablePixelPickerDataActionFlux").actionType:
                ((this.$AdsPixelPickerStoreClass$p_2 = !0),
                  this.__emitChange());
                break;
            }
          }),
          (a.getCurrentPixelID = function () {
            return this.$AdsPixelPickerStoreClass$p_1;
          }),
          (a.setCurrentPixelID = function (t) {
            this.$AdsPixelPickerStoreClass$p_1 = t;
          }),
          (a.isPickerDisabled = function () {
            return (
              r("vulture")("3ZIdDpfcB95-DXHYCY2w58gm_Lc="),
              this.$AdsPixelPickerStoreClass$p_2
            );
          }),
          n
        );
      })(r("FluxStore"));
    s.__moduleID = i.id;
    var u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
