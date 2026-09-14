__d(
  "AdsPEImportMIMEConstants",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("immutable")).Set([
        "application/excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ]),
      u = e.Set(["text/csv", "text/plain"]),
      c = s.union(u),
      d = e.Set(["text/csv", "application/vnd.ms-excel"]),
      m = e.Set([
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/bmp",
        "image/png",
        "image/tiff",
        "image/tif",
      ]);
    ((l.SUPPORTED_EXCEL_MIME_TYPES = s),
      (l.SUPPORTED_SHEET_MIME_TYPES = c),
      (l.POSSIBLE_CSV_MIME_TYPES = d),
      (l.SUPPORTED_IMAGE_MIME_TYPES = m));
  },
  98,
);
