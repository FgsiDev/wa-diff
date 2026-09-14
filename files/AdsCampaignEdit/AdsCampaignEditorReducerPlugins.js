__d(
  "AdsCampaignEditorReducerPlugins",
  ["AdsApplicationUtils", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      t.forEach(function (t) {
        var o = e.get(t) || {};
        ((o[n] = r), e.set(t, o));
      });
    }
    var s = {
        reduce: function (n, r) {
          var t = n.cache;
          return (
            e(t, r.ids, "isDynamicOptionsShown", r.isShown),
            { cache: t }
          );
        },
      },
      u = {
        reduce: function (n, a) {
          var t = !!a.createdInCF,
            i = a.buyingType === r("AdsBuyingTypes").RESERVED,
            l = a.campaignIDs;
          if (t && i && o("AdsApplicationUtils").isCampaignManager() && l) {
            var s = n.cache;
            return (e(s, l, "isEditMode", !1), { cache: s });
          }
          return n;
        },
      },
      c = {
        reduce: function (n, r) {
          if (o("AdsApplicationUtils").isCampaignManager()) {
            var t = n.cache;
            return (e(t, [r.campaignID], "isEditMode", !1), { cache: t });
          }
          return n;
        },
      },
      d = {
        reduce: function (n, r) {
          var t = n.cache;
          return (e(t, r.ids, "isEditMode", r.isEditMode), { cache: t });
        },
      },
      m = {
        reduce: function (n, r) {
          var t = n.cache;
          return (e(t, r.campaignIDs, "isEditMode", !0), { cache: t });
        },
      },
      p = {
        reduce: function (n, r) {
          var t = n.cache;
          return (e(t, r.ids, "showPauseDialog", r.isShown), { cache: t });
        },
      },
      _ = {
        reduce: function (n, r) {
          var t = n.cache;
          return (e(t, r.ids, "showUnpauseDialog", r.isShown), { cache: t });
        },
      };
    ((l.AdsCampaignSetShowDynamicTargetingOptionsDataReducerPlugin = s),
      (l.AdsCreateCompletedReducerPlugin = u),
      (l.AdsReachFrequencyFlowReservationCompletedReducerPlugin = c),
      (l.AdsReachFrequencyFlowSetIsEditModeReducerPlugin = d),
      (l.AdsUEditorCampaignGroupMutableL3IsEditModeReducerPlugin = m),
      (l.AdsReachFrequencyFlowSetShowPauseDialogReducerPlugin = p),
      (l.AdsReachFrequencyFlowSetShowUnpauseDialogReducerPlugin = _));
  },
  98,
);
