__d(
  "AdsPackageDuplicationUpgradeEditorMessagesReducerPlugins",
  ["AdsPackageDuplicationUpgradeUtils", "mergeSets"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var o = e.updatedCampaignIDsInfo;
      return (
        t.forEach(function (e) {
          var t = o.get(e);
          t != null && (t.set(n, r), o.set(e, t));
        }),
        o
      );
    }
    var s = ["ad_set_budget_sharing_guidance", "adset_budget_sharing"],
      u = {
        reduce: function (t, n) {
          var e = n.updatedCampaignIDs;
          if (e == null && n.updatedAdObjectIDsInfoByKey != null) {
            var a = [];
            if (
              s.some(function (e) {
                var t;
                return (t = n.updatedAdObjectIDsInfoByKey) == null
                  ? void 0
                  : t.has(e);
              })
            ) {
              var i = s.map(function (e) {
                  var t,
                    r =
                      (t = n.updatedAdObjectIDsInfoByKey) == null ||
                      (t = t.get(e)) == null ||
                      (t = t.eligibleAdObjectIDsMap) == null
                        ? void 0
                        : t.campaign;
                  return r == null ? new Set() : r;
                }),
                l = r("mergeSets").apply(void 0, i);
              l.size !== 0 && a.push.apply(a, Array.from(l));
            }
            e = a;
          }
          if (e == null) return t;
          var u = new Map();
          return (
            e.forEach(function (e) {
              var t = new Map();
              for (var n of o(
                "AdsPackageDuplicationUpgradeUtils",
              ).MessageSection.members())
                t.set(n, !0);
              u.set(e, t);
            }),
            { updatedCampaignIDsInfo: u }
          );
        },
      },
      c = {
        reduce: function (n, r) {
          var t = r.campaignGroupIDs,
            o = r.isVisible,
            a = r.messageSection,
            i = e(n, t, a, o);
          return { updatedCampaignIDsInfo: i };
        },
      },
      d = {
        reduce: function (n, r) {
          var t = r.campaignGroupIDs;
          if (t == null) return n;
          var a = e(
            n,
            t,
            o("AdsPackageDuplicationUpgradeUtils").MessageSection.L3Budget,
            !1,
          );
          return { updatedCampaignIDsInfo: a };
        },
      },
      m = {
        reduce: function (n, r) {
          var t = r.campaignGroupIDs;
          if (t == null) return n;
          var a = e(
            n,
            t,
            o("AdsPackageDuplicationUpgradeUtils").MessageSection.L2Budget,
            !1,
          );
          return { updatedCampaignIDsInfo: a };
        },
      },
      p = {
        AdsPackageDuplicationUpgradeEditorMessagesReducerPlugin: u,
        AdsPackageDuplicationUpgradeUpdateMessageVisibilityReducerPlugin: c,
        AdsPackageDuplicationUpgradeDismissCampaignGroupBudgetSectionMessageReducerPlugin:
          d,
        AdsPackageDuplicationUpgradeDismissCampaignBudgetSectionMessageReducerPlugin:
          m,
      };
    l.default = p;
  },
  98,
);
