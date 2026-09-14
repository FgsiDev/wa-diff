__d(
  "AdsPlacementsCreativeQualityUtils",
  [
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIFacebookPosition",
    "AdsAPIInstagramPosition",
    "AdsAPIMessengerPosition",
    "AdsAPIOculusPosition",
    "AdsAPIPublisherPlatform",
    "AdsAPITargetFields",
    "AdsAPIThreadsPosition",
    "AdsAPIWhatsAppPosition",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementPlatformUtils",
    "AdsPlacementPluginList",
    "gkx",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPITargetFields")).AUDIENCE_NETWORK_POSITIONS,
        e.FACEBOOK_POSITIONS,
        e.INSTAGRAM_POSITIONS,
        e.MESSENGER_POSITIONS,
        e.WHATSAPP_POSITIONS,
        e.OCULUS_POSITIONS,
        e.THREADS_POSITIONS,
      ];
    function u(e) {
      var t = e.targeting;
      return t == null ? null : r("whitelistObjectKeys")(t, s);
    }
    function c(e) {
      var t = E(e);
      return r("whitelistObjectKeys")(t, s);
    }
    function d(e, t) {
      var n, r, o, a, i, l, s;
      switch (t) {
        case "facebook":
          return (n = e.facebook_positions) != null ? n : [];
        case "instagram":
          return (r = e.instagram_positions) != null ? r : [];
        case "audience_network":
          return (o = e.audience_network_positions) != null ? o : [];
        case "messenger":
          return (a = e.messenger_positions) != null ? a : [];
        case "oculus":
          return (i = e.oculus_positions) != null ? i : [];
        case "threads":
          return (l = e.threads_positions) != null ? l : [];
        case "whatsapp":
          return (s = e.whatsapp_positions) != null ? s : [];
        default:
          return [];
      }
    }
    function m(e, t, n) {
      var r, o, a, i, l, s, u, c;
      switch (t) {
        case "facebook":
          return (
            (c =
              (r = e.facebook_positions) == null
                ? void 0
                : r.filter(function (e, t) {
                    return e !== n;
                  })),
            babelHelpers.extends({}, e, { facebook_positions: c })
          );
        case "instagram":
          return (
            (c =
              (o = e.instagram_positions) == null
                ? void 0
                : o.filter(function (e, t) {
                    return e !== n;
                  })),
            babelHelpers.extends({}, e, { instagram_positions: c })
          );
        case "audience_network":
          return (
            (c =
              (a = e.audience_network_positions) == null
                ? void 0
                : a.filter(function (e, t) {
                    return e !== n;
                  })),
            babelHelpers.extends({}, e, { audience_network_positions: c })
          );
        case "messenger":
          return (
            (c =
              (i = e.messenger_positions) == null
                ? void 0
                : i.filter(function (e, t) {
                    return e !== n;
                  })),
            babelHelpers.extends({}, e, { messenger_positions: c })
          );
        case "oculus":
          return (
            (c =
              (l = e.oculus_positions) == null
                ? void 0
                : l.filter(function (e, t) {
                    return e !== n;
                  })),
            babelHelpers.extends({}, e, { oculus_positions: c })
          );
        case "threads":
          return (
            (c =
              (s = e.threads_positions) == null
                ? void 0
                : s.filter(function (e, t) {
                    return e !== n;
                  })),
            babelHelpers.extends({}, e, { threads_positions: c })
          );
        case "whatsapp":
          return (
            (c =
              (u = e.whatsapp_positions) == null
                ? void 0
                : u.filter(function (e, t) {
                    return e !== n;
                  })),
            babelHelpers.extends({}, e, { whatsapp_positions: c })
          );
        default:
          return e;
      }
    }
    function p(e, t) {
      var n = Object.keys(t).find(function (n) {
        return t[n] === e;
      });
      return n == null ? null : t[n];
    }
    function _(e, t, n) {
      var r = p(e, t);
      return r == null ||
        n.some(function (e) {
          return e === r;
        })
        ? n
        : n.concat(r);
    }
    function f(e, t, n) {
      var o, a, i, l, s, u, c, d;
      switch (t) {
        case "facebook":
          return (
            (d = _(
              n,
              r("AdsAPIFacebookPosition"),
              (o = e.facebook_positions) != null ? o : [],
            )),
            babelHelpers.extends({}, e, { facebook_positions: d })
          );
        case "instagram":
          return (
            (d = _(
              n,
              r("AdsAPIInstagramPosition"),
              (a = e.instagram_positions) != null ? a : [],
            )),
            babelHelpers.extends({}, e, { instagram_positions: d })
          );
        case "audience_network":
          return (
            (d = _(
              n,
              r("AdsAPIAudienceNetworkPosition"),
              (i = e.audience_network_positions) != null ? i : [],
            )),
            babelHelpers.extends({}, e, { audience_network_positions: d })
          );
        case "messenger":
          return (
            (d = _(
              n,
              r("AdsAPIMessengerPosition"),
              (l = e.messenger_positions) != null ? l : [],
            )),
            babelHelpers.extends({}, e, { messenger_positions: d })
          );
        case "oculus":
          return (
            (d = _(
              n,
              r("AdsAPIOculusPosition"),
              (s = e.oculus_positions) != null ? s : [],
            )),
            babelHelpers.extends({}, e, { oculus_positions: d })
          );
        case "threads":
          return (
            (d = _(
              n,
              r("AdsAPIThreadsPosition"),
              (u = e.threads_positions) != null ? u : [],
            )),
            babelHelpers.extends({}, e, { threads_positions: d })
          );
        case "whatsapp":
          return (
            (d = _(
              n,
              r("AdsAPIWhatsAppPosition"),
              (c = e.whatsapp_positions) != null ? c : [],
            )),
            babelHelpers.extends({}, e, { whatsapp_positions: d })
          );
        default:
          return e;
      }
    }
    function g(e, t) {
      if (t == null) return [];
      var n = [];
      return (
        e.forEach(function (e) {
          t.find(function (t) {
            return t.platform === e.platform && t.position === e.position;
          }) || n.push(e);
        }),
        n
      );
    }
    function h(e) {
      switch (e) {
        case "audience_network":
          return "audience_network";
        case "facebook":
          return "facebook";
        case "instagram":
          return "instagram";
        case "messenger":
          return "messenger";
        case "oculus":
          return "oculus";
        case "threads":
          return "threads";
        case "whatsapp":
          return "whatsapp";
        default:
          return "facebook";
      }
    }
    function y(e) {
      switch (e) {
        case "audience_network":
          return "audience_network";
        case "facebook":
          return "facebook";
        case "instagram":
          return "instagram";
        case "messenger":
          return "messenger";
        case "oculus":
          return "oculus";
        case "threads":
          return "threads";
        case "whatsapp":
          return "whatsapp";
        default:
          return "facebook";
      }
    }
    function C(e, t) {
      return e.some(function (e) {
        return b(e, t) > 0;
      });
    }
    function b(e, t) {
      if (e == null || Object.keys(e).length === 0) return 0;
      var n = Object.entries(e).flatMap(function (e) {
          var t = e[0],
            n = e[1];
          return n;
        }).length,
        r = t - n;
      return r >= 0 ? r : 0;
    }
    function v(e) {
      var t = o("AdsPlacementPluginList").getAllPositions(),
        n = t.filter(function (t) {
          return (
            t.getIneligibilityReason(e) === null &&
            t.isEnabled(e.capabilities) === !0
          );
        });
      return n.toArray();
    }
    function S(e) {
      return v(e).length;
    }
    function R() {
      return r("gkx")("8177");
    }
    function L(e, t) {
      var n = o("AdsPlacementPlatformUtils").getPlatformPluginForPluginKey(
          t,
          "placements/position",
        ),
        r = n.positions.filter(function (t) {
          return (
            t.getIneligibilityReason(e) === null &&
            t.isEnabled(e.capabilities) === !0
          );
        });
      return r.map(function (e) {
        return e.key;
      });
    }
    function E(e) {
      var t = e.spec.publisher_platforms,
        n = o("AdsPlacementAPISpecDefaultsUtils").getPlacementSpecWithDefaults(
          e,
        );
      return (
        (n.facebook_positions =
          t != null && t.includes("facebook") ? n.facebook_positions : []),
        (n.instagram_positions =
          t != null && t.includes("instagram") ? n.instagram_positions : []),
        (n.audience_network_positions =
          t != null && t.includes("audience_network")
            ? n.audience_network_positions
            : []),
        (n.messenger_positions =
          t != null && t.includes("messenger") ? n.messenger_positions : []),
        (n.threads_positions =
          t != null && t.includes("threads") ? n.threads_positions : []),
        (n.whatsapp_positions =
          t != null && t.includes("whatsapp") ? n.whatsapp_positions : []),
        (n.oculus_positions =
          t != null && t.includes(r("AdsAPIPublisherPlatform"))
            ? n.oculus_positions
            : []),
        n
      );
    }
    var k = function (t, n) {
      var e, r, o, a, i, l, s;
      if (n == null) return [];
      var u = n.spec,
        c = [];
      switch (t) {
        case "facebook":
          (e = u.facebook_positions) == null ||
            e.forEach(function (e) {
              c.push(e);
            });
          break;
        case "instagram":
          (r = u.instagram_positions) == null ||
            r.forEach(function (e) {
              c.push(e);
            });
          break;
        case "audience_network":
          (o = u.audience_network_positions) == null ||
            o.forEach(function (e) {
              c.push(e);
            });
          break;
        case "messenger":
          (a = u.messenger_positions) == null ||
            a.forEach(function (e) {
              c.push(e);
            });
          break;
        case "threads":
          (i = u.threads_positions) == null ||
            i.forEach(function (e) {
              c.push(e);
            });
          break;
        case "whatsapp":
          (l = u.whatsapp_positions) == null ||
            l.forEach(function (e) {
              c.push(e);
            });
          break;
        case "oculus":
          (s = u.oculus_positions) == null ||
            s.forEach(function (e) {
              c.push(e);
            });
          break;
        default:
          return [];
      }
      return c;
    };
    ((l.getAdgroupPlacementSpecFromCampaignTargetingSpec = u),
      (l.getAdgroupPlacementSpecForL1Reset = c),
      (l.getPositionListForPlatfromFromPlacementConfig = d),
      (l.excludeL1Placement = m),
      (l.includeL1Placement = f),
      (l.getExclusionPositionsFromAccordionPlacementsAndPlacementSpec = g),
      (l.convertPlatformPluginKeyToAPIPublisherPlatform = h),
      (l.getPlacementPlatformPluginKey = y),
      (l.isL1ExclusionsApplied = C),
      (l.getNumberOfExclusionFromL1PlacementSpec = b),
      (l.getNumberOfEligiblePlacementsFromEligibilityInfo = S),
      (l.isAdsPlacementCreativeQualityQELaunchEnabled = R),
      (l.getAllEligiblePlacementPositionsForPlatform = L),
      (l.getPublisherPlatformsPositions = k));
  },
  98,
);
