__d(
  "AdsAPIDraftPublishStatusErrorPaths",
  ["generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("generatePaths")([
        {
          pathKeys: [],
          expandsTo: {
            ERROR_CODE: "error_code",
            ERROR_DATA: "error_data",
            ERROR_MESSAGE: "error_message",
          },
        },
        { pathKeys: ["ERROR_DATA"], expandsTo: { FRAGMENT_ID: "fragment_id" } },
      ]),
      s = e;
    l.default = s;
  },
  98,
);
