__d(
  "URLMatchUtils",
  ["canonicalizeURL"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t =
        /^(([\w-]+\.)+(xn--[\w-]+|\w+)|\[([\da-f]{0,4}:)*(?:[\da-f]{1,4}|(?:(?:\d{1,3}\.){3}\d{1,3}))\])(:[0-9]+)?([/\?].*)?$/;
      return e.match(t) !== null;
    }
    ((i.canonicalizeURL = importDefault("canonicalizeURL")), (i.isURL = e));
  },
  66,
);
