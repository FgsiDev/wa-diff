__d(
  "WAWebCopyGroupInviteLinkAction",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChatGroupUtils",
    "WAWebCopyLinkToast.react",
    "WAWebCopyToClipboard",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupInviteAction",
    "WAWebGroupInviteLinkErrors.react",
    "WAWebGroupInviteUtils.react",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(e.groupMetadata);
          if (o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(e)) {
            p(t);
            return;
          }
          var n;
          try {
            n = yield _(t);
          } catch (e) {
            m(t, e);
            return;
          }
          o("WAWebCopyLinkToast.react").openLinkCopyResultToast(
            n != null &&
              (yield o("WAWebCopyToClipboard").copyTextToClipboard(n)),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(t) {
      var n = r("nullthrows")(t.groupMetadata);
      o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(t) ||
        o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(n) != null ||
        o("WAWebGroupInviteAction")
          .queryGroupInviteCode(n)
          .catch(function (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[add-member-invite-link] invite link prefetch failed",
                ])),
            );
          });
    }
    function m(e, t) {
      if (!(t instanceof o("WAWebBackendErrors").ServerStatusCodeError)) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[add-member-invite-link] invite link query failed",
            ])),
        ),
          o("WAWebCopyLinkToast.react").openLinkCopyResultToast(!1));
        return;
      }
      if (
        t.statusCode ===
        o("WAWebGroupInviteLinkErrors.react").GROWTH_LOCKED_STATUS_CODE
      ) {
        (o("WAWebGroupInviteLinkErrors.react").refreshGrowthLockedGroupMetadata(
          e.id,
        ),
          p(e));
        return;
      }
      o("WAWebGroupInviteLinkErrors.react").openGroupInviteLinkErrorToast(
        t.statusCode,
      );
    }
    function p(e) {
      o("WAWebGroupInviteUtils.react").openGrowthLockedModal(
        e.participants.iAmAdmin(),
        !0,
        e.memberLinkMode,
        !0,
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(e);
          return t != null
            ? t
            : (yield o("WAWebGroupInviteAction").queryGroupInviteCode(e),
              o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(e));
        })),
        f.apply(this, arguments)
      );
    }
    ((l.copyGroupInviteLink = u), (l.prefetchGroupInviteLink = d));
  },
  98,
);
