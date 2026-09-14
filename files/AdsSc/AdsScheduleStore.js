__d(
  "AdsScheduleStore",
  [
    "AdsDataAtom",
    "AdsLoadState_LEGACY",
    "AdsScheduleDataDispatcher",
    "AdsScheduleEndDateLoadedActionFlux",
    "FluxStore",
    "URI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsScheduleStoreClass$p_1 = {
              date: null,
              loadState: r("AdsLoadState_LEGACY").NOT_LOADED,
            }),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getEndDate = function () {
            if (
              this.$AdsScheduleStoreClass$p_1.loadState ===
              r("AdsLoadState_LEGACY").LOADING
            )
              return this.$AdsScheduleStoreClass$p_1;
            if (
              this.$AdsScheduleStoreClass$p_1.loadState ===
              r("AdsLoadState_LEGACY").NOT_LOADED
            ) {
              var e = new (s || (s = r("URI")))(window.location.href),
                t = e.getQueryData();
              t &&
                t.fbid &&
                o("AdsScheduleDataDispatcher").getEventEndDate(t.fbid);
            }
            return this.$AdsScheduleStoreClass$p_1;
          }),
          (a.__onDispatch = function (t) {
            var e = t.action,
              n = e.data,
              a = e.type;
            switch ((a || (a = e.actionType), e.type)) {
              case o("AdsScheduleEndDateLoadedActionFlux").actionType:
                ((this.$AdsScheduleStoreClass$p_1.loadState = r(
                  "AdsLoadState_LEGACY",
                ).LOADED),
                  (this.$AdsScheduleStoreClass$p_1.date = new Date(
                    n.end_time,
                  )));
                break;
            }
          }),
          n
        );
      })(r("FluxStore"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
