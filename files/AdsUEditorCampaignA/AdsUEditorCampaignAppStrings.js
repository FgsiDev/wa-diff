__d(
  "AdsUEditorCampaignAppStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(
        /*BTDS*/ "Application was deleted or you can no longer promote it",
      ),
      u = s._(/*BTDS*/ "Jobs"),
      c = s._(/*BTDS*/ "Unlisted App ID");
    function d(e) {
      return s._(/*BTDS*/ "App ID: {id}", [s._param("id", e)]);
    }
    function m() {
      return s._(/*BTDS*/ "App Store Country");
    }
    ((l.DISABLED_TOOLTIP = e),
      (l.JOBS_APP = u),
      (l.UNLISTED_APP = c),
      (l.getUnknownApp = d),
      (l.getAppStoreCountryLabel = m));
  },
  226,
);
