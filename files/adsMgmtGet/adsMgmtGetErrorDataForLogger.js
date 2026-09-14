__d(
  "adsMgmtGetErrorDataForLogger",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return (
        (t = {}),
        (t.error_name = e.name),
        (t.stack_trace = e.stack),
        (t.error_code = e.code),
        (t.error_data = e.error_data),
        (t.error_subcode = e.error_subcode),
        (t.error_type = e.type),
        (t.message = e.message),
        (t.fbtrace_id = e.fbtrace_id),
        (t.www_request_id = e.fbtrace_id),
        t
      );
    }
    i.default = e;
  },
  66,
);
