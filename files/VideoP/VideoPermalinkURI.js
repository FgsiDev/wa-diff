__d(
  "VideoPermalinkURI",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return l(e) !== null;
    }
    function l(e) {
      if (u(e)) {
        var t = e.getQueryData();
        return t.v != null
          ? {
              video_id: String(t.v),
              set_token: t.set != null ? String(t.set) : t.set,
            }
          : null;
      }
      var n = e.getPath();
      n[n.length - 1] === "/" && (n = n.substring(0, n.length - 1));
      var r = n.split("/");
      if (r.length >= 3 && r[2] === "videos") {
        if (r.length === 4 && s(r[3]))
          return { video_id: r[3], set_token: null };
        if (r.length === 5) {
          if (s(r[4])) return { video_id: r[4], set_token: r[3] };
          if (s(r[3])) return { video_id: r[3], story_id: r[4] };
        } else if (r.length === 6 && s(r[4]))
          return { video_id: r[4], set_token: r[3], story_id: r[5] };
      }
      return null;
    }
    function s(e) {
      return /^\d+$/.exec(e) !== null;
    }
    function u(e) {
      var t = e.getPath();
      return (
        t[t.length - 1] === "/" && (t = t.substring(0, t.length - 1)),
        t === "/photo.php" ||
          t === "/force_photo/photo.php" ||
          t === "/photo" ||
          t === "/force_photo/photo/index.php" ||
          t === "/photo/index.php" ||
          t === "/force_photo/photo" ||
          t === "/video.php" ||
          t === "/video/video.php"
      );
    }
    function c(e) {
      var t = e.getDomain();
      return t === "fb.watch" || t === "fbwat.ch";
    }
    function d(e, t) {
      return e + t + "/";
    }
    ((i.isValid = e),
      (i.parse = l),
      (i.isNumeric = s),
      (i.isValidLegacy = u),
      (i.isValidFBWatchDomain = c),
      (i.getCustomStoryURI = d));
  },
  66,
);
