__d(
  "AdsPEAudienceStore",
  ["AdsDataAtom", "AdsPEFluxCreateAudienceActionFlux", "FluxStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPEAudienceStoreClass$p_1 = []),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getAndDestroyLastAudienceSpecs = function () {
            var e = this.$AdsPEAudienceStoreClass$p_1;
            return ((this.$AdsPEAudienceStoreClass$p_1 = []), e);
          }),
          (a.__getActionTypes = function () {
            return [o("AdsPEFluxCreateAudienceActionFlux").actionType];
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            e: {
              if (
                e.actionType ===
                o("AdsPEFluxCreateAudienceActionFlux").actionType
              ) {
                ((this.$AdsPEAudienceStoreClass$p_1 = e.audienceSpecs),
                  this.__emitChange());
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.actionType,
              );
            }
          }),
          n
        );
      })(r("FluxStore"));
    s.__moduleID = i.id;
    var u = new s();
    t.debug_AdsPEAudienceStore = u;
    var c = u;
    l.default = c;
  },
  98,
);
