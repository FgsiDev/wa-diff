__d(
  "AdsMultiDestinationUtils",
  ["AdCampaignDestination", "AdsUEditorMessagingDestinationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) ||
        e === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
      );
    }
    l.isMultiDestinationMessagingOrProfileVisits = e;
  },
  98,
);
