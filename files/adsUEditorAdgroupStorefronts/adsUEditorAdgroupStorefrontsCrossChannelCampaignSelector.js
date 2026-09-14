__d(
  "adsUEditorAdgroupStorefrontsCrossChannelCampaignSelector",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, l) {
      if (n == null)
        return r("LoadObject").withValue(null, { creatorModuleID: i.id });
      var u = s(o, n, t, l);
      return u.getValue() != null
        ? u
        : a == null
          ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
          : e == null || e(a).isLoadingOrEmpty()
            ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
            : e(a).mapValue(function (e) {
                var t =
                  e == null
                    ? void 0
                    : e.data.find(function (e) {
                        var t = e.id;
                        return n === t;
                      });
                return t == null ? null : l(t);
              });
    }
    function s(e, t, n, o) {
      return e == null
        ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
        : n(e).mapValue(function (e) {
            var n = e.find(function (e) {
              var n = e.id;
              return t === n;
            });
            return n != null ? o(n) : null;
          });
    }
    l.getInstagramStorefrontLoadObject = e;
  },
  98,
);
