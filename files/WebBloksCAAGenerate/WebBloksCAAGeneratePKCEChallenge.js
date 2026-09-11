__d(
  "WebBloksCAAGeneratePKCEChallenge",
  ["ErrorPubSub", "WebBloksCAAPKCEStore", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i) {
      var l = o("WebBloksCAAPKCEStore").beginPKCEMint();
      r("promiseDone")(
        o("WebBloksCAAPKCEStore").generatePKCEPair(),
        function (e) {
          o("WebBloksCAAPKCEStore").writePKCE(e, l)
            ? t.executeCatch(a, [n])
            : t.executeCatch(i, [n]);
        },
        function (o) {
          ((e || (e = r("ErrorPubSub"))).reportError(o),
            t.executeCatch(i, [n]));
        },
      );
    }
    l.default = s;
  },
  98,
);
