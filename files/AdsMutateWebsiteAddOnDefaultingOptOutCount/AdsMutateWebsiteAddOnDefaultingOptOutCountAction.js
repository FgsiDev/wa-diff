__d(
  "AdsMutateWebsiteAddOnDefaultingOptOutCountAction",
  [
    "AdsMutateWebsiteAddOnDefaultingOptOutCountProvider",
    "AdsMutateWebsiteAddOnDefaultingOptOutCountReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsMutateWebsiteAddOnDefaultingOptOutCountReducerPlugin"),
            n("AdsMutateWebsiteAddOnDefaultingOptOutCountProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsMutateWebsiteAddOnDefaultingOptOutCountActionPlugin",
    );
    a.exports = e;
  },
  null,
);
