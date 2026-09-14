__d(
  "CastingState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return {
        isCastPending: !1,
        receiverExperience: null,
        receiverFriendlyName: null,
        receiverIsConnected: !1,
        receiverIsMuted: null,
        receiverVolume: null,
      };
    }
    function l() {
      return {
        currentDuration: null,
        currentPlaybackState: null,
        currentPosition: null,
        currentVideoID: null,
        type: "video_channel",
      };
    }
    function s() {
      return { type: "photo" };
    }
    function u() {
      return {
        currentAssetID: null,
        currentPlaybackState: null,
        type: "photo_album",
      };
    }
    ((i.initialCastingState = e),
      (i.initialVideoChannelExperienceState = l),
      (i.initialPhotoExperienceState = s),
      (i.initialPhotoAlbumExperienceState = u));
  },
  66,
);
