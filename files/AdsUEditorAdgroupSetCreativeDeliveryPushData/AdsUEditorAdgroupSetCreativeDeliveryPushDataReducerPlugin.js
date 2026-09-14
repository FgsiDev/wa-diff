__d(
  "AdsUEditorAdgroupSetCreativeDeliveryPushDataReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeDeliveryPushDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs || [];
            return o("AdsMutators").mutateEach(e, n, function (e, n) {
              return e.set("creative_delivery_push", t.creativeDeliveryPush);
            });
          },
          o("AdsUEditorAdgroupSetCreativeDeliveryPushDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
