__d(
  "AdsUEditorRestoreOmnichannelAppDataMutator",
  [
    "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
    "immutable",
    "isAccountEligibleForThreeCOL2AdEx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a, i;
      if (t == null || n == null) return e;
      var l = (a = t.promoted_object) == null ? void 0 : a.omnichannel_object,
        s = l == null || (i = l.app) == null ? void 0 : i.get(0);
      if (s == null) return e;
      var u = s.get("object_store_urls"),
        c = s.get("application_id"),
        d =
          u instanceof r("immutable").List
            ? Array.from(u, function (e) {
                return String(e);
              })
            : Array.isArray(u)
              ? u.map(function (e) {
                  return String(e);
                })
              : [];
      return d.length === 0 || c == null
        ? e
        : o(
            "AdsUEditorOmnichannelWebAppMCMEConversionObjectMutators",
          ).applyOmnichannelAppData(e, t, n, {
            application_id: String(c),
            object_store_urls: d,
          });
    }
    function s(t, n, r) {
      return o(
        "isAccountEligibleForThreeCOL2AdEx",
      ).is3coPcaFlowWithOmniAndPacIssueFix()
        ? e(t, n, r)
        : t;
    }
    ((l.restoreOmnichannelAppDataFromCampaign = e),
      (l.maybeRestoreOmnichannelAppDataFromCampaign = s));
  },
  98,
);
