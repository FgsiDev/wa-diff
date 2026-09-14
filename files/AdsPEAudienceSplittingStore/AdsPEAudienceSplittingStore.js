__d(
  "AdsPEAudienceSplittingStore",
  [
    "AdsAudienceSplittingUtils",
    "AdsPEFluxAccountChangeDefaultDemographicsActionFlux",
    "AdsPEUserStorage",
    "FBLogger",
    "FluxReduceStore",
    "WebStorage",
    "getErrorSafe",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "__audience_split_data__";
    function u() {
      var t = new Map();
      try {
        var n = r("AdsPEUserStorage"),
          o = !!(e || (e = r("WebStorage"))).getLocalStorage() && n.get(s);
        if (o) {
          var a = JSON.parse(o);
          for (var i in a)
            Object.prototype.hasOwnProperty.call(a, i) && t.set(i, a[i]);
        }
      } catch (e) {
        var l = r("getErrorSafe")(e);
        r("FBLogger")("ads")
          .catching(l)
          .mustfix("Deserialization of audience splits failed");
      }
      return t;
    }
    function c(t) {
      var n = {};
      t.forEach(function (e, t) {
        if (e) {
          var r = o("AdsAudienceSplittingUtils").cloneArray(e);
          (r.forEach(function (e) {
            return delete e.name;
          }),
            (n[t] = r));
        }
      });
      var a = r("AdsPEUserStorage");
      (e || (e = r("WebStorage"))).getLocalStorage() &&
        a.set(s, JSON.stringify(n));
    }
    var d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(
        r("immutable").Record({
          defaultDemographics: null,
          defaultDemographicsPerAccountMap: null,
        }),
      ),
      m = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return new d().set("defaultDemographicsPerAccountMap", u());
          }),
          (n.getDefaultData = function () {
            return this.getState().get("defaultDemographics");
          }),
          (n.getDefaultDataForAccount = function (t) {
            var e = this.getState().get("defaultDemographicsPerAccountMap"),
              n = e.get(t);
            return n ? o("AdsAudienceSplittingUtils").cloneArray(n) : null;
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsPEFluxAccountChangeDefaultDemographicsActionFlux")
                .actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            e: {
              if (
                e.actionType ===
                o("AdsPEFluxAccountChangeDefaultDemographicsActionFlux")
                  .actionType
              ) {
                var r = o("AdsAudienceSplittingUtils")
                  .cloneArray([].concat(e.defaultDemographics))
                  .slice(1);
                r.forEach(function (e) {
                  e.genders = e.genders[0] || 0;
                });
                var a = new Map(
                  this.getState().get("defaultDemographicsPerAccountMap"),
                );
                return (
                  a.set(e.accountID, r),
                  c(a),
                  t
                    .set("defaultDemographics", e.defaultDemographics)
                    .set("defaultDemographicsPerAccountMap", a)
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.actionType,
              );
            }
          }),
          t
        );
      })(r("FluxReduceStore"));
    ((m.__moduleID = i.id), (l.default = m));
  },
  98,
);
