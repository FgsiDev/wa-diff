__d(
  "AdsVideoBackgroundUploadUtils",
  ["AdsUEditorHostIDs", "AdsVideoUploadStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        ((n == null ? void 0 : n.status) ===
          r("AdsVideoUploadStatus").UPLOADING ||
          (n == null ? void 0 : n.status) ===
            r("AdsVideoUploadStatus").ENCODING) &&
        e.some(function (e) {
          return t.includes(e);
        })
      );
    }
    function s(t, n) {
      var r,
        o =
          n == null || (r = n.videoBackgroundUploadInfo) == null
            ? void 0
            : r.videoUploadingAdgroupIDs;
      return o == null ? !1 : e(t, o, n);
    }
    function u(t, n) {
      var r,
        o =
          n == null || (r = n.videoBackgroundUploadInfo) == null
            ? void 0
            : r.videoUploadingCampaignGroupIDs;
      return o == null ? !1 : e(t, o, n);
    }
    function c(t, n) {
      var r,
        o =
          n == null || (r = n.videoBackgroundUploadInfo) == null
            ? void 0
            : r.videoUploadingCampaignIDs;
      return o == null ? !1 : e(t, o, n);
    }
    function d(e) {
      return e !== r("AdsUEditorHostIDs").CREATION;
    }
    function m(e, t, n) {
      var r = t == null ? void 0 : t.videoBackgroundUploadInfo,
        o = r == null ? void 0 : r.videoUploadingTabID,
        a = s(e, t),
        i = o == null || n === o;
      return !!r && a && i;
    }
    ((l.areCurrentAdgroupsUploadingVideo = s),
      (l.areCurrentCampaignGroupsUploadingVideo = u),
      (l.areCurrentCampaignsUploadingVideo = c),
      (l.isBackgroundUploadSupported = d),
      (l.currentlyBackgroundUploadingForAdgroupsAndSelectedProductTab = m));
  },
  98,
);
