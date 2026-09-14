__d(
  "RelayFBNetwork",
  [
    "RelayFBResponseCache",
    "createRelayFBNetwork",
    "createRelayFBNetworkFetch",
    "createRelayFBSubscribeFunction",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("createRelayFBNetwork")(
      n("createRelayFBNetworkFetch")({
        queryResponseCache: n("RelayFBResponseCache"),
      }),
      n("createRelayFBSubscribeFunction")({
        queryResponseCache: n("RelayFBResponseCache"),
      }),
    );
  },
  null,
);
