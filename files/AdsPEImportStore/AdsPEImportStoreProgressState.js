__d(
  "AdsPEImportStoreProgressState",
  ["LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        loadObject: r("LoadObject").empty({ creatorModuleID: i.id }),
        progress: 0,
        request: null,
      },
      u = (e = r("immutable")).Record(s),
      c = e.Record(s),
      d = e.Record(s),
      m = e.Record(s),
      p = e.Record(s),
      _ = e.Record(s),
      f = {
        parseSpec: u(),
        imageMapping: c(),
        videoMapping: d(),
        excelUploadSpec: m(),
        tsvText: p(),
        draftImport: _(),
      },
      g = Object.keys(f),
      h = e.Record(f);
    function y() {
      return h();
    }
    function C(e) {
      return r("immutable")
        .Map(
          r("immutable")
            .List(g)
            .map(function (t) {
              return [t, e.get(t)];
            }),
        )
        .toKeyedSeq();
    }
    function b(e, t) {
      return e.get(t);
    }
    ((l.createAdsPEImportStoreProgressState = y),
      (l.toTypedSeq = C),
      (l.getProgressStateValue = b));
  },
  98,
);
