__d(
  "TargetingConditionalReduceStore",
  [
    "AdsTargetingLoadTimeInitTargetingContainerActionFlux",
    "FluxReduceStore",
    "abstractMethod",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.$TargetingConditionalReduceStore$p_1 = !1),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__getActionTypes = function () {
          return [
            o("AdsTargetingLoadTimeInitTargetingContainerActionFlux")
              .actionType,
          ];
        }),
        (n.reduce = function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsTargetingLoadTimeInitTargetingContainerActionFlux")
              .actionType:
              this.$TargetingConditionalReduceStore$p_1 = !0;
              break;
            default:
              break;
          }
          return this.$TargetingConditionalReduceStore$p_1
            ? this.reduceIfActive(t, n)
            : t;
        }),
        (n.isActive = function () {
          return this.$TargetingConditionalReduceStore$p_1;
        }),
        (n.reduceIfActive = function (t, n) {
          return r("abstractMethod")(
            "reduceIfActive",
            "TargetingConditionalReduceStore",
          );
        }),
        t
      );
    })(r("FluxReduceStore"));
    ((e.__moduleID = i.id), (l.default = e));
  },
  98,
);
