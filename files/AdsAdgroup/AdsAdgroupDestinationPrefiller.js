__d(
  "AdsAdgroupDestinationPrefiller",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAdgroupPrefillerUtils",
    "AdsDestinationUtils",
    "AdsUnifiedCreativeAPIFields",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      key: "destination",
      genPaths: function (t) {
        var e = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
        );
        if (s(t)) return [];
        var n = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
            t,
            r("AdsUnifiedCreativeAPIFields").callToActionValue,
            ["app_destination"],
          ),
          a = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
            t,
            r("AdsUnifiedCreativeAPIFields").pageWelcomeMessage,
          );
        return c(t, n) || u(t)
          ? c(t, n) &&
            o("AdsDestinationUtils").isMessengerDestinationCapable(
              t.current.campaignGroup.objective,
              t.current.campaign,
            )
            ? d([e, n, a])
            : []
          : t.current.campaignGroup.objective ===
                r("AdsAPIObjectives").MESSAGES ||
              t.current.campaignGroup.objective ===
                r("AdsAPIObjectives").POST_ENGAGEMENT
            ? []
            : d([e]);
      },
    };
    function s(e) {
      var t = o("AdsAdgroupPrefillerUtils").genAdgroupCreativePlugins(e),
        n = t.current;
      return n.supportsLandingView();
    }
    function u(e) {
      var t;
      return (
        ((t = e.original.campaign) == null ? void 0 : t.destination_type) ===
        r("AdCampaignDestination").MESSENGER
      );
    }
    function c(e, t) {
      var n = t.current,
        r = t.original;
      return !!n && !!r && e.original.adgroup.getIn(r) === "MESSENGER";
    }
    function d(e) {
      return r("filterNulls")(
        e.map(function (e) {
          var t = e.current,
            n = e.original;
          return t && n ? { current: t, original: n } : null;
        }),
      );
    }
    var m = e;
    l.default = m;
  },
  98,
);
