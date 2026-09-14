__d(
  "IsReminderAd",
  [
    "AdsAPICampaignRecordUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupAdObjectsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        (e == null || (t = e.pivots) == null
          ? void 0
          : t.promotedObjectType) === r("AdsPromotedObjectTypes").REMINDER
      );
    }
    function s(e) {
      var t = o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(e),
        n = o("AdsAPICampaignRecordUtils").getPromotedObjectType(t, e.campaign);
      return n === r("AdsPromotedObjectTypes").REMINDER;
    }
    function u(e) {
      return [
        "INSTAGRAM_REELS",
        "INSTAGRAM_STANDARD",
        "INSTAGRAM_STORY",
      ].includes(e);
    }
    ((l.isReminderAdFromSpecPlugin = e),
      (l.isReminderAdFromAdObjects = s),
      (l.isSupportedReminderAdPreviewApiFormat = u));
  },
  98,
);
