__d(
  "BaseModalDialogContext",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext(null);
    function d() {
      var e = u(c);
      if (!e)
        throw r("FBLogger")("comet_ui").mustfixThrow(
          "BaseModalDialogContext can only be used inside of BaseModalDialog",
        );
      return e;
    }
    ((l.BaseModalDialogContext = c), (l.useBaseModalDialogContext = d));
  },
  98,
);
