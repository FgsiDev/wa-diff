__d(
  "AdsDynamicTargetingCategoryUIStore",
  [
    "AdsDataAtom",
    "AdsUEditorCampaignSetDynamicTargetingCategoryActionFlux",
    "FluxReduceStore",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          return t.call(this, e || (e = r("AdsDataAtom"))) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return r("immutable").Map();
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsUEditorCampaignSetDynamicTargetingCategoryActionFlux")
                .actionType,
            ];
          }),
          (a.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsUEditorCampaignSetDynamicTargetingCategoryActionFlux")
                .actionType:
                return t.withMutations(function (t) {
                  return e.ids.forEach(function (n) {
                    return t.set(n, e.targetingCategory);
                  });
                });
            }
            return t;
          }),
          (a.getTargetingCategory = function (t) {
            return this.getState().get(t);
          }),
          n
        );
      })(r("FluxReduceStore"));
    s.__moduleID = i.id;
    var u = new s();
    l.default = u;
  },
  98,
);
