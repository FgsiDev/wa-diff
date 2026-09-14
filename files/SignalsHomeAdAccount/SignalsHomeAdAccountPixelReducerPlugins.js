__d(
  "SignalsHomeAdAccountPixelReducerPlugins",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.adAccountID,
            r = n.name,
            o = n.pixelID,
            a = t.get(e).map(function (e) {
              return e.map(function (e) {
                return (e.id === o && (e.name = r), e);
              });
            });
          return t.set(e, a);
        },
      },
      s = {
        reduce: function (t, n) {
          var e = n.adAccountID,
            o = n.name,
            a = n.pixelID,
            l = { hasPermission: !0, id: a, name: o, type: "PIXEL" };
          if (t.has(e)) {
            var s = t.get(e).map(function (e) {
              return e.concat(l);
            });
            return t.set(e, s);
          }
          return t.set(
            e,
            r("LoadObject").withValue([l], { creatorModuleID: i.id }),
          );
        },
      };
    ((l.onUpdateName = e), (l.onAddPixel = s));
  },
  98,
);
