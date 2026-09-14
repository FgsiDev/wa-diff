__d(
  "AdsInsightsValues",
  ["AdsAccountStore", "AdsInsightsAPIValueTypes", "AdsInsightsDateUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      if (
        o("AdsInsightsAPIValueTypes").getJavaScriptType(t.apiValueType) !==
        typeof n
      )
        return n;
      var e = t.apiValueType,
        a = t.valueType;
      switch (e) {
        case "currency":
          return n;
        case "percentage":
          return parseFloat(n) / 100;
        case "date":
          var i = r("AdsAccountStore").getTimezoneID();
          if (typeof n == "string")
            try {
              return o("AdsInsightsDateUtils")
                .parseISODate(n, i)
                .getUnixTimestampSeconds();
            } catch (e) {
              return -1;
            }
          return -1;
        case "default":
          switch (a) {
            case "LONG_INTEGER":
            case "FLOAT":
            case "CURRENCY":
              return parseFloat(n);
            default:
              return n;
          }
        default:
          return n;
      }
    };
    l.fromAPI = e;
  },
  98,
);
