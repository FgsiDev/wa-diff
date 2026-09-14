__d(
  "adsAdvertiserProfileMessageMarketingDefaultWACSIDSelector",
  [
    "AdsLoadObjectUtils",
    "adsAdvertiserProfileMessageMarketingDataSelector",
    "adsCreateSelector",
    "adsMessageMarketingWABASelector",
    "getAdvertiserProfileMessageMarketingDefaultWACSID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsAdvertiserProfileMessageMarketingDataSelector"),
          r("adsMessageMarketingWABASelector"),
        ],
        function (t, n) {
          var e = o("AdsLoadObjectUtils").allByKeyFromObject({
            wabaDataList: n,
            advertiserProfileMessageMarketingData: t,
          });
          return e.mapValue(function (e) {
            var t = e.advertiserProfileMessageMarketingData,
              n = e.wabaDataList;
            return r("getAdvertiserProfileMessageMarketingDefaultWACSID")(
              t == null ? void 0 : t.whatsappDefaultProfileID,
              n,
            );
          });
        },
        {
          name:
            i.id + ".adsAdvertiserProfileMessageMarketingDefaultWACSIDSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
