__d(
  "AdsUEditorAdgroupReducerUtils",
  ["ifRequired", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = function (o, a) {
          var n = o;
          return (
            r("ifRequired")(
              "AdsCFAdgroupDataReducerUtils",
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
              "AdsEditingAdgroupDataReducerUtils",
              function (n) {
                o = n.callReduce(t, a, i, e);
              },
              function () {
                r("vulture")("EoGAXk6zrTPwnmEAuSOF4fvyeRM=");
              },
            ),
            o
          );
        },
        i = Object.assign(o, { editingReducer: a, reduceFn: t }),
        l = function (a, i) {
          if (
            Array.isArray(n)
              ? !n.includes(i.actionType)
              : n != null && n !== i.actionType
          )
            return a;
          var o = a;
          return (
            r("ifRequired")(
              "AdsCreativeContainerAdgroupDataReducerUtils",
              function (n) {
                o = n.callReduce(t, a, i, e);
              },
              function () {
                r("vulture")("RJI2mWzdVIRBVDl8yTj1Gq9XOBs=");
              },
            ),
            o
          );
        };
      return Object.assign(i, { creativeContainerReducer: l });
    }
    l.createReducer = e;
  },
  98,
);
