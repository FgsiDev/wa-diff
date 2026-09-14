__d(
  "RelayEverywhereUEditorRegistry",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(e) {
      return e;
    }
    var u = 0,
      c = (function () {
        function e(e) {
          ((this.contextToKey = new Map()),
            (this.keyToContext = new Map()),
            (this.toKey = e));
        }
        var t = e.prototype;
        return (
          (t.getKey = function (t) {
            var e = this.contextToKey.get(t);
            if (e != null) return e;
            var n = this.toKey(u);
            return (
              u++,
              this.contextToKey.set(t, n),
              this.keyToContext.set(n, t),
              n
            );
          }),
          (t.getContext = function (t) {
            return this.keyToContext.get(t);
          }),
          (t.getContextEnforce = function (t) {
            var e = this.keyToContext.get(t);
            if (e == null)
              throw r("err")(
                "Missing %s context for %s key",
                this.constructor.name,
                t,
              );
            return e;
          }),
          (t.size = function () {
            return this.contextToKey.size;
          }),
          e
        );
      })(),
      d = new c(function (e) {
        return "UEL1Context-" + e;
      }),
      m = new c(function (e) {
        return "UEL2Context-" + e;
      }),
      p = new c(function (e) {
        return "UEL3Context-" + e;
      });
    ((l.toAdgroupContextKey = e),
      (l.toCampaignContextKey = s),
      (l.Adgroup = d),
      (l.Campaign = m),
      (l.CampaignGroup = p));
  },
  98,
);
