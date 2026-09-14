__d(
  "adsUEditorAdgroupUpcomingEventDetailsVisibilitySelectorUtil",
  ["AdsAssetFeedFieldUtils", "AdsEditorPostEditMode", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["none", "external"],
      s = [
        r("AdsEditorPostEditMode").INLINE,
        r("AdsEditorPostEditMode").USE_MOCKUP,
      ];
    function u(t) {
      return t != null && e.includes(t);
    }
    function c(e) {
      return e.every(function (e) {
        return s.includes(e);
      });
    }
    var d = function (t) {
      return t.getValues().some(function (e) {
        return (
          e != null &&
          e.some(function (e) {
            var t = o("AdsAssetFeedFieldUtils").getAssetInteractiveComponents(
              r("immutable").fromJS(e),
            );
            return t != null && !t.isEmpty();
          })
        );
      });
    };
    function m(e, t, n, r) {
      var o = e.getValues().some(function (e) {
        return e != null;
      });
      if (o) return !0;
      var a = t.getValues().some(function (e) {
        return e != null;
      });
      if (a) return !0;
      var i = d(n);
      if (i) return !0;
      var l = d(r);
      return !!l;
    }
    ((l.linkTypeIsEligible = u),
      (l.postEditModesAreEligible = c),
      (l.getSelectedAdsHaveInteractiveComponents = m));
  },
  98,
);
