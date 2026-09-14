__d(
  "adsAYMTGlobalBannerTipSelector",
  [
    "AMYTAMGlobalBannerMultiTipsProvider",
    "AMYTAMGlobalBannerProvider",
    "AYMTClientSideLogging",
    "AdsAccountStore",
    "AdsPEMegaphoneTipStore",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsPEManageAdsSectionSelector",
    "getShouldShowNewReachabilityWidgetAndSettings",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      [r("AdsPEMegaphoneTipStore")],
      function () {
        return r("AdsPEMegaphoneTipStore").getState().renderedMessageCount;
      },
      { name: i.id + ".campaignTableMessageCount" },
    );
    function s(e, t) {
      var n,
        r = e == null || (n = e.aymtData) == null ? void 0 : n.name,
        a = r === "aymt_contact_info_collection_tip",
        i = r === "aymt_wa_phone_number_collection_tip";
      if (a || i) {
        if (t > 0) return !1;
        if (a) {
          var l = o(
            "getShouldShowNewReachabilityWidgetAndSettings",
          ).getShouldShowReachabilityWidgetBanner();
          if (l !== !0) return !1;
        }
      }
      return !0;
    }
    var u = null,
      c = r("adsCreateSelector")(
        [
          r("AMYTAMGlobalBannerProvider").toFluxSelector(),
          e,
          r("AdsAccountStore").getSelectedAccountID,
          r("AMYTAMGlobalBannerMultiTipsProvider").toFluxSelector(),
          r("adsPEManageAdsSectionSelector"),
        ],
        function (t, n, a, i) {
          if (i.hasValue() && !i.isLoading()) {
            var e = r("qex")._("2247") === !0;
            if (e) {
              var l = i.getValue(),
                c = l == null ? void 0 : l.tips;
              if (c != null && c.length > 0) {
                for (var d = [], m = 0; m < c.length; m++) {
                  var p,
                    _,
                    f = c[m];
                  if (s(f, n)) {
                    var g,
                      h,
                      y =
                        (g =
                          f == null || (h = f.aymtData) == null
                            ? void 0
                            : h.name) != null
                          ? g
                          : "",
                      C = (a != null ? a : "") + ":" + y;
                    return (
                      m > 0 &&
                        u !== C &&
                        ((u = C),
                        o("AYMTClientSideLogging").logImpressionNew(
                          f.aymtData,
                          JSON.stringify({
                            event: "multi_tip_fallback",
                            fallback_position: m,
                            dropped_tip_names: d,
                            shown_tip_name: y,
                            channel: "AYMTAMGlobalBannerChannel",
                          }),
                        )),
                      f
                    );
                  }
                  d.push(
                    (p =
                      f == null || (_ = f.aymtData) == null
                        ? void 0
                        : _.name) != null
                      ? p
                      : "",
                  );
                }
                return null;
              }
            }
          }
          if (t.isLoading()) return null;
          if (t.hasValue()) {
            var b = t.getValue();
            if (b != null && s(b, n)) return b;
          }
          return null;
        },
        { name: i.id },
      ),
      d = c;
    l.default = d;
  },
  98,
);
