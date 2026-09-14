__d(
  "AdsFBStorySelectionReader",
  ["AdsFBStorySelectionProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e == null ? void 0 : e.page_id;
      if (n == null || String(n).trim() === "") return null;
      var r = e == null || (t = e.video_data) == null ? void 0 : t.video_id;
      if (r != null && String(r).trim() !== "")
        return JSON.stringify(["video", String(n), String(r)]);
      var o = e == null ? void 0 : e.photo_data,
        a = o == null ? void 0 : o.image_hash,
        i = a != null && a.trim() !== "" ? a : o == null ? void 0 : o.url;
      return i == null || i.trim() === ""
        ? null
        : JSON.stringify(["photo", String(n), i]);
    }
    function s(e, t) {
      return u(r("AdsFBStorySelectionProvider")(), e, t);
    }
    function u(t, n, r) {
      if (n == null) return null;
      var o = e(r),
        a = t.get(String(n));
      return o != null && a != null && a.creativeKey === o ? a.post : null;
    }
    function c(e, t, n) {
      var r = null;
      for (var o of t) {
        var a = u(e, o, n);
        if (a == null || (r != null && r.id !== a.id)) return null;
        r = a;
      }
      return r;
    }
    ((l.getFBStoryCreativeKey = e),
      (l.getFBStorySelection = s),
      (l.getFBStorySelectionFromProviderData = u),
      (l.getFBStorySelectionForAdgroupsFromProviderData = c));
  },
  98,
);
