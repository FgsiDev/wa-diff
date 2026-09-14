__d(
  "WhatsAppHSMAuthenticationRestriction",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "NO_EMOJI_IN_BODY",
        "NO_EMOJI_IN_PARAM",
        "NO_MEDIA_HEADER",
        "NO_URL_IN_CONTENT",
        "NO_URL_IN_PARAM",
        "PARAM_LENGTH_LIMIT",
      ]),
      l = Array.from(e.members());
    ((i.WhatsAppHSMAuthRestriction = e), (i.allAuthRestrictions = l));
  },
  66,
);
