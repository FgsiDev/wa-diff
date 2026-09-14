__d(
  "adsCFSAFRSelector",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsSpecialAdFrameworkConfigProvider",
    "adsCFCampaignGroupRecordSelector",
    "adsConvertAdObjectRecordToPlainJS",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsSpecialAdFrameworkConfigProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [r("adsCFCampaignGroupRecordSelector"), e],
        function (t, n) {
          var e = Object.freeze({}),
            a = n.get({
              accountID: null,
              regulatedCategories: o(
                "AdsAPICampaignGroupRecordUtils",
              ).getRegulatedCategories(
                r("adsConvertAdObjectRecordToPlainJS")(t),
              ),
              regulatedCategoryCountries: o(
                "AdsAPICampaignGroupRecordUtils",
              ).getRegulatedCategoryCountries(
                r("adsConvertAdObjectRecordToPlainJS")(t),
              ),
            });
          return a.match({
            loaded: function (n) {
              return n || e;
            },
            loading: function () {
              return e;
            },
            error: function () {
              return e;
            },
          });
        },
        { name: i.id + ".adsCFSAFRSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
