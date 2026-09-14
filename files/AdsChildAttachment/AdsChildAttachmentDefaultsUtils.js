__d(
  "AdsChildAttachmentDefaultsUtils",
  [
    "AdsAPIAdgroupRecordGetWebsiteURL",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupSpecUtils",
    "AdsArLinkUtils",
    "AdsCallToActionURLUtils",
    "AdsMessengerConstants",
    "AdsPromotedObjectTypes",
    "isAdsCanvasLink",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d = r("AdsAPIAdgroupRecordGetWebsiteURL")(t, a),
        m = o("AdsAdgroupSpecUtils").getAppDestination(t),
        p = o("AdsAdgroupSpecUtils").getHeadline(t),
        _ = o("AdsAdgroupSpecUtils").getCallToActionType(t),
        f =
          (s =
            (u = t.creative) == null ||
            (u = u.object_story_spec) == null ||
            (u = u.link_data) == null ||
            (u = u.call_to_action) == null ||
            (u = u.value) == null
              ? void 0
              : u.lead_gen_form_id) != null
            ? s
            : (c = t.creative) == null ||
                (c = c.object_story_spec) == null ||
                (c = c.video_data) == null ||
                (c = c.call_to_action) == null ||
                (c = c.value) == null
              ? void 0
              : c.lead_gen_form_id,
        g = o("AdsAdgroupSpecUtils").getInstagramAppLink(t);
      return e.map(function (e) {
        var t = e,
          a = t.getIn(r("AdsAPIChildAttachmentPaths").LINK) || d;
        (((r("isAdsCanvasLink")(a) &&
          i !== r("AdsAPIObjectives").LEAD_GENERATION) ||
          o("AdsArLinkUtils").isArAdsLink(a)) &&
          (a = o("AdsCallToActionURLUtils").getDefaultURL(n, i, l)),
          a
            ? (t = t.setIn(r("AdsAPIChildAttachmentPaths").LINK, a))
            : (t = t.deleteIn(r("AdsAPIChildAttachmentPaths").LINK)));
        var s = t.getIn(
          r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.APP_LINK,
        );
        return (
          m === "MESSENGER" &&
            (t = t.setIn(
              r("AdsAPIChildAttachmentPaths").NAME,
              p != null
                ? p
                : o("AdsMessengerConstants").DEFAULT_HEADLINE.toString(),
            )),
          _ == null
            ? (t = t.deleteIn(
                r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path,
              ))
            : ((t = t.setIn(
                r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
                _,
              )),
              s &&
                (t = t.setIn(
                  r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.APP_LINK,
                  s,
                )),
              f != null &&
                ((t = t.setIn(
                  r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                    .LEAD_GEN_FORM_ID,
                  f,
                )),
                i === r("AdsAPIObjectives").LEAD_GENERATION &&
                  (t = t
                    .setIn(
                      r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.LINK,
                      d,
                    )
                    .setIn(r("AdsAPIChildAttachmentPaths").LINK, d))),
              r("isTruthy")(m)
                ? (t = t.setIn(
                    r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                      .APP_DESTINATION,
                    m,
                  ))
                : (t = t.deleteIn(
                    r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                      .APP_DESTINATION,
                  )),
              (t = t.deleteIn(
                r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                  .WHATSAPP_NUMBER,
              )),
              i === r("AdsAPIObjectives").LEAD_GENERATION &&
                l === r("AdsPromotedObjectTypes").PHONE_CALL &&
                (t = t.deleteIn(
                  r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
                    .LEAD_GEN_FORM_ID,
                )),
              r("isTruthy")(g) &&
                i === r("AdsAPIObjectives").MESSAGES &&
                l === r("AdsPromotedObjectTypes").INSTAGRAM &&
                (t = t.setIn(
                  r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.APP_LINK,
                  g,
                ))),
          t
        );
      });
    }
    l.initializeChildAttachments = e;
  },
  98,
);
