__d(
  "AdsPEExportConstants",
  ["fbt", "$InternalEnum"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum")({ Comma: ",", Tab: "	" }),
      u = "\n",
      c = { removeEmptyColumns: !1, removeUnsupportedFeatures: !1 },
      d = n("$InternalEnum").Mirrored(["PACCarousel"]),
      m = s._(/*BTDS*/ "No issue").toString(),
      p = new Map([
        ["Export & Import Issue Code", m],
        ["Export & Import Issue Details", m],
        ["Export & Import Issue", m],
      ]),
      _ = new Set([
        "Export & Import Issue Code",
        "Export & Import Issue Details",
        "Export & Import Issue",
      ]);
    ((l.Delimiter = e),
      (l.DELIMITER_LINE = u),
      (l.DEFAULT_USER_OPTIONS = c),
      (l.UnsupportedReason = d),
      (l.NO_ISSUE = m),
      (l.HEADER_TO_EMPTY_VALUE_MAP = p),
      (l.ISSUE_COLUMN_HEADERS = _));
  },
  226,
);
