__d(
  "afcPageIDsSelector",
  [
    "AdsAccountStore",
    "AdsAccountUtils",
    "adsCreateSelector",
    "afcPromotableObjectsStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("afcPromotableObjectsStoreThunkSelector"),
          r("AdsAccountStore").getSelectedAccount,
        ],
        function (t, n) {
          var e = n.getValue();
          if (e == null) return null;
          var o = r("AdsAccountUtils").hasCapability(
            e,
            "CAN_USE_AAC_ENFORCE_PO_SELECTOR",
          );
          if (!o) return null;
          var a = t(e.account_id).getValue();
          return a == null ? void 0 : a.promotable_page_ids;
        },
        { name: i.id + ".afcPageIDsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
