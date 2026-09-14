__d(
  "AdsUEditorSelectedAdgroupMessageMarketingButtonsSelectorUtil",
  ["MarketingMessageButtonUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (e == null) return r("immutable").List();
      var n =
        (t = r("immutable").fromJS(e)) != null ? t : r("immutable").List();
      return n.map(
        o("MarketingMessageButtonUtils")
          .getMarketingMessageButtonFromButtonDict,
      );
    }
    l.adsUEditorSelectedAdgroupMessageMarketingButtonsLogic = e;
  },
  98,
);
