__d(
  "VideoPollCardStore",
  [
    "FluxReduceStore",
    "ImmutableRecordWithV4Types",
    "VideoPollCardActionTypes",
    "VideoPollCardDispatcher",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ImmutableRecordWithV4Types").Record({
        pollCardsActiveForVPC: {},
      }),
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.reduce = function (e, t) {
              var n = t.pollEventID,
                a = t.vpcID;
              switch (t.type) {
                case o("VideoPollCardActionTypes").VideoPollCardActionTypes
                  .MARK_POLL_CARD_ACTIVE:
                  if (e.pollCardsActiveForVPC[a] === null) {
                    var i = e.pollCardsActiveForVPC,
                      l = r("immutable").List();
                    return (
                      (i[a] = l.push(n)),
                      e.set("pollCardsActiveForVPC", i)
                    );
                  } else {
                    var s,
                      u = e.pollCardsActiveForVPC,
                      c =
                        (s = e.pollCardsActiveForVPC[a]) != null
                          ? s
                          : r("immutable").List();
                    return (
                      (u[a] = c.push(n)),
                      e.set("pollCardsActiveForVPC", u)
                    );
                  }
                case o("VideoPollCardActionTypes").VideoPollCardActionTypes
                  .MARK_POLL_CARD_INACTIVE:
                  if (e.pollCardsActiveForVPC[a] !== null) {
                    var d,
                      m = e.pollCardsActiveForVPC,
                      p = (d = m[a]) != null ? d : r("immutable").List();
                    return (
                      (p = p.filter(function (e) {
                        return e !== n;
                      })),
                      (m[a] = p),
                      e.set("pollCardsActiveForVPC", m)
                    );
                  }
                  return e;
                default:
                  return e;
              }
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return e();
          }),
          n
        );
      })(r("FluxReduceStore"));
    s.__moduleID = i.id;
    var u = new s(r("VideoPollCardDispatcher"));
    l.default = u;
  },
  98,
);
