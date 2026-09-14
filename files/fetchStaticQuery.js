__d(
  "fetchStaticQuery",
  ["RelayRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = o("RelayRuntime").getRequest(t),
        i = o("RelayRuntime").__internal.getOperationVariables(
          a.operation,
          a.params.providedVariables,
          n,
        );
      return e.execute(a.params, i, r || {}).toPromise();
    }
    l.default = e;
  },
  98,
);
