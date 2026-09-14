__d(
  "targetingBulkSpecGetBulkApiSpecFromState",
  [
    "AdsAggregateTargetingSpecsSchema",
    "AdsBulkValueUtils",
    "AdsCommonTargetingApiTransformer",
    "AdsMixedValue",
    "AdsUniformValue",
    "mapObject",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.toJS(),
        a = Object.values(n).find(function (e) {
          return e instanceof r("AdsMixedValue");
        });
      if (!a) {
        var i = o("AdsCommonTargetingApiTransformer").targetingSpecToApi(
          (e || (e = r("mapObject")))(n, function (e) {
            return e.getValue();
          }),
        );
        return (
          Object.entries(i).forEach(function (e) {
            var t = e[0],
              n = e[1];
            i[t] = r("AdsUniformValue").create([n]);
          }),
          i
        );
      }
      var l = a,
        s = o("AdsBulkValueUtils").deaggregateDeep(n, l.getValues().length);
      s = s.map(o("AdsCommonTargetingApiTransformer").targetingSpecToApi);
      var u = new Set(
        s.reduce(function (e, t) {
          return [].concat(Object.keys(t), e);
        }, []),
      );
      return o("AdsBulkValueUtils").aggregateDeep(
        r("whitelistObjectKeys")(
          r("AdsAggregateTargetingSpecsSchema"),
          Array.from(u),
        ),
        s,
      );
    }
    l.default = s;
  },
  98,
);
