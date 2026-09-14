__d(
  "AdsSAOffCouponGuidanceModalAction",
  [
    "AdsSAOffCouponGuidanceModalProvider",
    "AdsSAOffCouponGuidanceModalReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsSAOffCouponGuidanceModalReducerPlugin"),
            n("AdsSAOffCouponGuidanceModalProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsSAOffCouponGuidanceModalActionPlugin",
    );
    a.exports = e;
  },
  null,
);
