__d(
  "AdsLocationBreakdownStore",
  [
    "AdsDataAtom",
    "AdsLocationBreakdownActionsType",
    "AdsLocationBreakdownDataManager",
    "AdsLocationBreakdownTypes",
    "Cache",
    "FluxStore",
    "LoadObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.getCountries = function (e, t) {
              var a = o("AdsLocationBreakdownTypes").COUNTRY,
                l = n.$AdsLocationBreakdownStore$p_3(e, t, a);
              return (
                l ||
                (r("AdsLocationBreakdownDataManager").getBreakdown(e, t, a),
                n.$AdsLocationBreakdownStore$p_2(
                  e,
                  t,
                  a,
                  r("LoadObject").loading({ creatorModuleID: i.id }),
                ),
                r("LoadObject").loading({ creatorModuleID: i.id }))
              );
            }),
            (n.$AdsLocationBreakdownStore$p_1 = new (r("Cache"))()),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsLocationBreakdownDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              r("AdsLocationBreakdownActionsType").DEFAULT_LOADED,
              r("AdsLocationBreakdownActionsType").DEFAULT_LOAD_ERROR,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case r("AdsLocationBreakdownActionsType").DEFAULT_LOADED:
                (this.$AdsLocationBreakdownStore$p_2(
                  e.objectID,
                  e.objectType,
                  e.breakdownKey,
                  r("LoadObject")
                    .withValue(e.locations, { creatorModuleID: i.id })
                    .done(),
                ),
                  this.__emitChange());
                break;
              case r("AdsLocationBreakdownActionsType").DEFAULT_LOAD_ERROR:
                (this.$AdsLocationBreakdownStore$p_2(
                  e.objectID,
                  e.objectType,
                  e.breakdownKey,
                  r("LoadObject")
                    .withError(e.error, { creatorModuleID: i.id })
                    .done(),
                ),
                  this.__emitChange());
                break;
              default:
                return;
            }
          }),
          (n.$AdsLocationBreakdownStore$p_3 = function (t, n, o) {
            var e = "" + t + n;
            this.$AdsLocationBreakdownStore$p_1.has(e) ||
              this.$AdsLocationBreakdownStore$p_1.set(e, new Map());
            var a = r("nullthrows")(this.$AdsLocationBreakdownStore$p_1.get(e));
            return a.get(o);
          }),
          (n.$AdsLocationBreakdownStore$p_2 = function (t, n, o, a) {
            var e = "" + t + n;
            this.$AdsLocationBreakdownStore$p_1.has(e) ||
              this.$AdsLocationBreakdownStore$p_1.set(e, new Map());
            var i = r("nullthrows")(this.$AdsLocationBreakdownStore$p_1.get(e));
            i.set(o, a);
          }),
          t
        );
      })(r("FluxStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
