__d(
  "AdsUEditorCategorizationCriteriaUtils",
  [
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = r("nullthrows")(t.get(n)),
        i = !!r("AdsAdgroupSemanticFields").childAttachments.get(a, e),
        l = e;
      if (i) {
        var s = r("AdsAdgroupChildAttachmentsFields").headline.get(e, a, 1);
        l = s.supported ? e.setIn(s.path, o) : e;
      } else l = r("AdsAdgroupSemanticFields").headline.set(a, e, o);
      return l;
    }
    function s(e, t, n, o) {
      var a = r("nullthrows")(t.get(n)),
        i = !!r("AdsAdgroupSemanticFields").childAttachments.get(a, e),
        l = e;
      if (i) {
        var s = r("AdsAdgroupChildAttachmentsFields").description.get(e, a, 1);
        l = s.supported ? e.setIn(s.path, o) : e;
      } else
        r("gkx")("4915") && o === ""
          ? (l = r("AdsAdgroupSemanticFields").linkDescription.delete(a, e))
          : (l = r("AdsAdgroupSemanticFields").linkDescription.set(a, e, o));
      return l;
    }
    function u(e, t) {
      var n = e,
        a = !!r("AdsAdgroupSemanticFields").childAttachments.get(t, e);
      return (
        a
          ? [
              r("AdsAdgroupChildAttachmentsFields").headline,
              r("AdsAdgroupChildAttachmentsFields").description,
            ].forEach(function (r) {
              var o = r.get(e, t, 1);
              o.supported && (n = n.deleteIn(o.path));
            })
          : (n = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").headline.delete(t, e);
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").linkDescription.delete(
                  t,
                  e,
                );
              },
            )(e)),
        n
      );
    }
    ((l.setTokenizedHeadline = e),
      (l.setTokenizedDescription = s),
      (l.removeTokenizedHeadlineAndDescription = u));
  },
  98,
);
