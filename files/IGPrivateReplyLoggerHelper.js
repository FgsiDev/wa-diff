__d(
  "IGPrivateReplyLoggerHelper",
  ["AdsAPIObjectives", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === r("AdsAPIObjectives").NONE ? null : e;
    }
    var s = { EDIT: "edit", TURN_ON: "turn_on" },
      u = {
        GUIDANCE_CARD: "guidance_card",
        MESSAGE_TEMPLATE: "message_template",
      };
    function c(e, t, n) {
      return {
        keywords: e.join(", "),
        private_messages: t != null ? t : "",
        is_enabled: n != null ? n : !1,
      };
    }
    function d(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "private_reply_section_load_error",
        data:
          ((i = {}),
          (i.error_data = e.message),
          (i.page_id = n),
          (i.adgroup_id = o),
          (i.object_type_explicit = t),
          (i.campaign_destination_type = a),
          i),
      });
    }
    ((l.normalizeObjectiveForLog = e),
      (l.ObjectType = s),
      (l.PrivateReplyDialogTriggerSource = u),
      (l.getPrivateReplyConfigLoggerField = c),
      (l.logPrivateReplySectionLoadError = d));
  },
  98,
);
