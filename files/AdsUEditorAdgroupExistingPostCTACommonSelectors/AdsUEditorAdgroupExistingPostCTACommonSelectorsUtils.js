__d(
  "AdsUEditorAdgroupExistingPostCTACommonSelectorsUtils",
  ["AdsExistingPostCTAUtils", "LoadObject", "isFalsey", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return e.map(function (e, o) {
        var a = t.get(o),
          l = n.get(o);
        return e.map(function (e) {
          var t = e.displayCTALink,
            n = e.displayCTAType;
          if (!a) return r("LoadObject").loading({ creatorModuleID: i.id });
          if (a.hasError())
            return r("LoadObject").withError(a.getErrorEnforcing(), {
              creatorModuleID: i.id,
            });
          if (a.isLoading() || (l && l.mutatingCTA))
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var o = a.getValueEnforcing(),
            s = o.postAppLink,
            u = o.postCTALink,
            c = o.postCTAType;
          return {
            displayCTALink: t,
            displayCTAType: n,
            postCTALink: u,
            postCTAType: c,
            postAppLink: s,
          };
        });
      });
    }
    function s(e, t) {
      return e.map(function (e) {
        return e == null ? null : t.get(e);
      });
    }
    function u(e, t) {
      var n = e.map(function (e) {
        var n = o("AdsExistingPostCTAUtils").maybeGetPostIDFromObjectStoryID(e);
        if (r("isFalsey")(n)) return !1;
        var a = t({ postID: n, currentAdgroupID: null });
        if (a.hasValue()) return a.getValueEnforcing();
      });
      return n.every(function (e) {
        return e === !0;
      });
    }
    function c(e) {
      return e
        .filter(function (e) {
          return !!e;
        })
        .map(function (e) {
          return r("nullthrows")(e);
        });
    }
    ((l.adgroupIDsToExistingPostCTAObject = e),
      (l.adgroupIDToExistingPostCTAValues = s),
      (l.showPageWelcomeMessageBulkLogic = u),
      (l.pagePostIDLogic = c));
  },
  98,
);
