__d(
  "adsMessengerDataModelGetQRResponseType",
  [
    "AdsMessengerVisualEditorQRResponseType",
    "adsMessengerDataModelGetQuickReplies",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsMessengerDataModelGetQuickReplies")(e);
      if (n && n[t]) {
        var o = n[t].response_type;
        return o || r("AdsMessengerVisualEditorQRResponseType").TEXT;
      }
      return r("AdsMessengerVisualEditorQRResponseType").TEXT;
    }
    l.default = e;
  },
  98,
);
