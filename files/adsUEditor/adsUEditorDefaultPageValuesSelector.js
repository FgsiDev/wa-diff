__d(
  "adsUEditorDefaultPageValuesSelector",
  [
    "AdsDefaultPageDataProvider",
    "adsCreateSelector",
    "adsUEditorAccountIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
      [
        r("AdsDefaultPageDataProvider").toFluxSelector(),
        r("adsUEditorAccountIDSelector"),
      ],
      function (t, n) {
        return s(t, n);
      },
      { name: i.id + ".adsUEditorDefaultPageValuesSelector" },
    );
    function s(e, t) {
      var n = e.get(t).getValue();
      return (n == null ? void 0 : n.pageID) == null ||
        (n == null ? void 0 : n.pageName) == null
        ? null
        : n;
    }
    ((l.adsUEditorDefaultPageValuesSelector = e),
      (l.adsUEditorDefaultPageValues = s));
  },
  98,
);
