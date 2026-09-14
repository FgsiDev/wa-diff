__d(
  "AdsReportBuilderInitialRoutingParamsStore",
  [
    "AdsDataAtom",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "FluxReduceStore",
    "VultureJSDeadSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Record({ routingData: null }),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.$AdsReportBuilderInitialRoutingParamsStore$p_1 = !1),
            (t.getIsInitialLoadSelector = r("VultureJSDeadSelector")(
              i.id,
              "getIsInitialLoadSelector",
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getActionTypes = function () {
            return [
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
            ];
          }),
          (n.getInitialState = function () {
            return s();
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            if (this.$AdsReportBuilderInitialRoutingParamsStore$p_1) return t;
            switch (e.type) {
              case o("AdsInterfacesRouteUpdateParamsDataActionFlux")
                .actionType: {
                var r = e.data,
                  a = r.params;
                return !a || !a.tool || !a.section || a.tool !== "REPORTING"
                  ? t
                  : ((this.$AdsReportBuilderInitialRoutingParamsStore$p_1 = !0),
                    t.set("routingData", r));
              }
              default:
                break;
            }
            return t;
          }),
          (n.getInitialRoutingData = function () {
            return this.getState().routingData;
          }),
          t
        );
      })(r("FluxReduceStore"));
    u.__moduleID = i.id;
    var c = new u(e || (e = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
