__d(
  "AdsUEditorCampaignGroupReducerUtils",
  ["ifRequired", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = function (o, a) {
          var n = o;
          return (
            r("ifRequired")(
              "AdsCFCampaignGroupRecordReducerUtils",
              function (r) {
                n = r.callReduce(t, o, a, e);
              },
              function () {},
            ),
            n
          );
        },
        a = function (a, i) {
          if (Array.isArray(n) ? !n.includes(i.actionType) : n !== i.actionType)
            return a;
          var o = a;
          return (
            r("ifRequired")(
              "AdsEditingCampaignGroupReducerUtils",
              function (n) {
                o = n.callReduce(t, a, i, e);
              },
              function () {
                r("vulture")("TYkAqgOpiWrYtzj3s-6AuasvqO8=");
              },
            ),
            o
          );
        };
      return ((o.actionType = n), (o.editingReducer = a), (o.reduceFn = t), o);
    }
    l.createReducer = e;
  },
  98,
);
