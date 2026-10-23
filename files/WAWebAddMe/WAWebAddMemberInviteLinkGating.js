__d(
  "WAWebAddMemberInviteLinkGating",
  [
    "WAWebABProps",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.groupMetadata;
      return t == null ||
        !s(t) ||
        o("WAWebGroupMetadataGetters").getIsUnnamed(t) ||
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "web_invite_options_in_add_membes_enabled",
          );
    }
    function s(e) {
      if (
        e.support ||
        e.isSuspendedOrTerminated() ||
        o(
          "WAWebCommunitySubgroupInviteLinkRestriction",
        ).isSubgroupInviteLinkRestrictedByParentCommunity(e)
      )
        return !1;
      var t = e.participants;
      return (
        t.iAmAdmin() ||
        (t.iAmMember() &&
          e.memberLinkMode ===
            o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK)
      );
    }
    l.shouldShowAddMemberInviteTiles = e;
  },
  98,
);
