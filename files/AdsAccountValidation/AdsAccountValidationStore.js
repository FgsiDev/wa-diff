__d(
  "AdsAccountValidationStore",
  [
    "AdsAccountStatusValidator",
    "AdsActionTypes",
    "AdsBaseValidationStore",
    "adsValidationAccountDataSelector",
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
        (n.__getValidators = function () {
          return [r("AdsAccountStatusValidator")];
        }),
        (n.__getData = function (t) {
          return r("adsValidationAccountDataSelector")(t);
        }),
        t
      );
    })(r("AdsBaseValidationStore"));
    e.__moduleID = i.id;
    var s = new e(r("AdsActionTypes").CAMPAIGN_GROUP.ASYNC_VALIDATION.LOADED),
      u = s;
    l.default = u;
  },
  98,
);
