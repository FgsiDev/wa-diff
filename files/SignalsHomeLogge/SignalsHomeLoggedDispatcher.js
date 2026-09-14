__d(
  "SignalsHomeLoggedDispatcher",
  ["AdsDataAtom", "SignalsHomeLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var o = babelHelpers.extends({}, n || t);
      delete o.type;
      var a = o.error;
      (delete o.error,
        a != null
          ? r("SignalsHomeLogger").logError(t.type, a, o)
          : r("SignalsHomeLogger").logEvent(t.type, o),
        (e || (e = r("AdsDataAtom"))).handleUpdateFromViewAction(t));
    }
    function u(t, n) {
      var o = babelHelpers.extends({}, n || t);
      if (o.results != null || o.errors != null)
        o.errors != null
          ? o.errors.forEach(function (e) {
              r("SignalsHomeLogger").logError(t.type, e.error, { key: e.key });
            })
          : o.results.forEach(function (e) {
              r("SignalsHomeLogger").logEvent(t.type, {
                key: e.key,
                result: e.result,
              });
            });
      else {
        delete o.type;
        var a = o.error;
        (delete o.error,
          a != null
            ? r("SignalsHomeLogger").logError(t.type, a, o)
            : r("SignalsHomeLogger").logEvent(t.type, o));
      }
      (e || (e = r("AdsDataAtom"))).handleUpdateFromServerResponse(t);
    }
    ((l.handleUpdateFromViewAction = s),
      (l.handleUpdateFromServerResponse = u));
  },
  98,
);
