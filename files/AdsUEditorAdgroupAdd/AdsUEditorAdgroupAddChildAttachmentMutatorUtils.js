__d(
  "AdsUEditorAdgroupAddChildAttachmentMutatorUtils",
  [
    "AdCampaignDestination",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAppUtils",
    "AdsChildAttachmentsUtils",
    "AdsClickToCallAdsUtils",
    "AdsLocalUtils",
    "AdsMessengerConstants",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUnifiedCreativeFieldPathResolvers",
    "ClickToMessagingStrings",
    "DeepRecordUtils",
    "immutable",
    "isAccountEligibleForThreeCOL2AdEx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("AdsAdgroupChildAttachmentsFields").linkURL.get(t, n, 0);
      return o.supported && r("isTruthy")(o.value)
        ? e.setIn(r("AdsAPIChildAttachmentPaths").LINK, o.value)
        : e;
    }
    function s(e, t) {
      var n = u(t);
      return e.setIn(r("AdsAPIChildAttachmentPaths").NAME, n);
    }
    function u(e) {
      return e === r("AdCampaignDestination").MESSENGER
        ? o("AdsMessengerConstants").DEFAULT_HEADLINE.toString()
        : o("ClickToMessagingStrings").DEFAULT_HEADLINE.toString();
    }
    function c(e, t, n, a) {
      var i = r("AdsUnifiedCreativeFieldPathResolvers").callToAction(t, n, a),
        l = i && t.getIn(i);
      if (l) {
        var s = r("immutable").fromJS(o("DeepRecordUtils").clean(l).toJS());
        return e.setIn(r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.path, s);
      }
      return e;
    }
    function d(e, t, n) {
      var o = r("AdsAdgroupSemanticFields").callToActionValue.get(n, t),
        a = o && o.get("app_destination");
      return r("isTruthy")(a)
        ? e.setIn(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE
              .APP_DESTINATION,
            a,
          )
        : e;
    }
    function m(e, t, n) {
      var o = e,
        a = r("AdsAdgroupSemanticFields").headline.get(n, t);
      return (a && (o = o.setIn(r("AdsAPIChildAttachmentPaths").NAME, a)), o);
    }
    function p(e, t, n, o) {
      var a = e;
      if (o === "GET_DIRECTIONS") {
        var i = r("AdsAdgroupSemanticFields").callToActionValue.get(n, t);
        if (i) {
          var l = i.get("link");
          r("isTruthy")(l) &&
            (a = a.setIn(
              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.LINK,
              l,
            ));
        }
      }
      return a;
    }
    function _(e, t, n) {
      var o = e,
        a = r("AdsAdgroupSemanticFields").callToActionValue.get(n, t);
      if (a) {
        var i = a.get("app_link");
        r("isTruthy")(i) &&
          (o = o.setIn(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.APP_LINK,
            i,
          ));
      }
      return o;
    }
    function f(e, t, n) {
      var o = e,
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.omnichannel_link_spec.app.platform_specs.ios.url.get(t),
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.omnichannel_link_spec.app.platform_specs.android.url.get(t);
      return (
        r("isTruthy")(a) &&
          (o = o.setIn(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.IOS_URL,
            a,
          )),
        r("isTruthy")(i) &&
          (o = o.setIn(
            r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.VALUE.ANDROID_URL,
            i,
          )),
        o
      );
    }
    function g(e, t, n, a, i, l, s) {
      var u = e;
      return (
        (l === r("AdsAPIObjectives").LEAD_GENERATION &&
          !o("AdsClickToCallAdsUtils").getIsCallAdsLeadGenObjective(l, i)) ||
        r("AdsAppUtils").isAppObjective(a.objective, i) ||
        o("AdsLocalUtils").isLocalObjective(a.objective)
          ? ((u = u.setIn(
              r("AdsAPIChildAttachmentPaths").LINK,
              r("AdsAdgroupSemanticFields").linkURL.get(n, t),
            )),
            (u = c(u, t, a, i)))
          : s &&
            ((u = u.setIn(
              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
              s,
            )),
            (u = d(u, t, n)),
            (u = m(u, t, n)),
            (u = p(u, t, n, s)),
            i === r("AdsPromotedObjectTypes").WEB_AND_APP &&
              o(
                "isAccountEligibleForThreeCOL2AdEx",
              ).is3coEnableCarouselFormat() &&
              (u = f(u, t, n)),
            l === r("AdsAPIObjectives").MESSAGES &&
              i === r("AdsPromotedObjectTypes").INSTAGRAM &&
              (u = _(u, t, n))),
        u
      );
    }
    function h(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.child_attachments.get(e);
      return t == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.interactive_components_spec.child_attachments.set(
            t.push(r("immutable").Map({ components: r("immutable").List() })),
            e,
          );
    }
    function y(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.child_attachments.get(e);
      if (n == null) return e;
      var o = r("immutable")
        .List(
          Array.from({ length: t }, function () {
            return r("immutable").Map({ components: r("immutable").List() });
          }),
        )
        .merge(n);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.child_attachments.set(o, e);
    }
    function C(e, t, n) {
      var o = e;
      return (
        r("isTruthy")(t)
          ? (o = o.setIn(r("AdsAPIChildAttachmentPaths").IMAGE_HASH, t))
          : r("isTruthy")(n) &&
            (o = o.setIn(r("AdsAPIChildAttachmentPaths").PICTURE, n)),
        o
      );
    }
    function b(e, t, n, a) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(e),
        r("AdsAdgroupRecordAccessors").creative.thumbnail_height.set(t),
        r("AdsAdgroupRecordAccessors").creative.thumbnail_width.set(n),
      )(a);
    }
    function v(e) {
      return o(
        "AdsChildAttachmentsUtils",
      ).hasOnlyEmptyChildAttachmentsPlaceholder(e)
        ? r("immutable").List()
        : e;
    }
    ((l.copyFirstChildLinkIntoChild = e),
      (l.setDefaultMessagingHeadline = s),
      (l.copyCTAsIntoChild = g),
      (l.processInteractiveComponents = h),
      (l.processInteractiveComponentsBulk = y),
      (l.addImageIntoChild = C),
      (l.setImageThumbnail = b),
      (l.removeEmptyChildAttachmentsPlaceholder = v));
  },
  98,
);
