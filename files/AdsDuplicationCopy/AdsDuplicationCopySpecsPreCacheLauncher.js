__d(
  "AdsDuplicationCopySpecsPreCacheLauncher",
  ["AdsAccountStore", "AdsDataAtom", "AdsDraftSelectionStore", "cr:8200"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e
        .map(function (e) {
          var t = null;
          return (
            e.l3_campaign_group != null
              ? (t = e.l3_campaign_group)
              : e.l3_campaign_group_with_draft_data != null
                ? (t = e.l3_campaign_group_with_draft_data)
                : e.l2_campaign != null
                  ? (t = e.l2_campaign)
                  : e.l2_campaign_with_draft_data != null
                    ? (t = e.l2_campaign_with_draft_data)
                    : e.l1_ad_group != null
                      ? (t = e.l1_ad_group)
                      : e.l1_ad_group_with_draft_data != null &&
                        (t = e.l1_ad_group_with_draft_data),
            t
          );
        })
        .filter(Boolean);
    }
    function u(e) {
      if (e != null) {
        var t = r("AdsAccountStore").getSelectedAccountID();
        if (t != null) {
          var o = r("AdsDraftSelectionStore").getCached(t),
            a = o != null && o.isDone() ? o.value : null;
          if (a != null) {
            var i = s(e);
            i.length !== 0 &&
              (n("cr:8200") == null ||
                n("cr:8200").onReadyImmediately(function (e) {
                  return e(t, a, i);
                }));
          }
        }
      }
    }
    function c(t) {
      (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        return u(t);
      });
    }
    l.default = c;
  },
  98,
);
