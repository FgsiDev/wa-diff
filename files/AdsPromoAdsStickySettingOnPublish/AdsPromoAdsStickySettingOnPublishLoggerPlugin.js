__d(
  "AdsPromoAdsStickySettingOnPublishLoggerPlugin",
  [
    "AdsPromoAdsStickySettingPublishStash",
    "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
    "cr:4850",
    "cr:6613",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("cr:4850")) != null ? e : n("cr:6613"),
      u = {
        log: function (t) {
          try {
            var e = t.selection;
            if (e == null) return;
            var n = e.get("ad");
            if (n == null || n.size === 0) return;
            (o("AdsPromoAdsStickySettingPublishStash").clearStash(),
              n.forEach(function (e) {
                if (s != null && s.isNew(e)) {
                  var t = o(
                      "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
                    ).isPromoAdsAlwaysOnByAdgroupId(e, !1),
                    n = o(
                      "AdsUEditorAdgroupPromoAdMutatorStoreUtils",
                    ).isEmailCaptureAlwaysOnByAdgroupId(e, !1);
                  (t || n) &&
                    o("AdsPromoAdsStickySettingPublishStash").stashFlags(
                      String(e),
                      { promo: t, email: n },
                    );
                }
              }));
          } catch (e) {}
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
