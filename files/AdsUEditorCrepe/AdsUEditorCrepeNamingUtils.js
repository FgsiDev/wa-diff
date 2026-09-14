__d(
  "AdsUEditorCrepeNamingUtils",
  ["AdsAutoNamingConfig"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        CAMPAIGN_GROUP:
          " " +
          (e = o("AdsAutoNamingConfig"))
            .getCategoryLabel(e.CATEGORIES.CAMPAIGN_GROUP)
            .toString(),
        CAMPAIGN: " " + e.getCategoryLabel(e.CATEGORIES.CAMPAIGN).toString(),
        ADGROUP: " " + e.getCategoryLabel(e.CATEGORIES.ADGROUP).toString(),
      };
    function u(e, t) {
      return t.trim() === "" ? t : "" + t + s[e].toString();
    }
    var c = new RegExp(s[e.CATEGORIES.CAMPAIGN_GROUP].toString() + "$");
    function d(e) {
      return e.replace(c, "");
    }
    function m(e) {
      var t = /Advantage\+ shopping campaign \d\d\/\d\d\/\d\d\d\d/;
      return t.test(e);
    }
    ((l.getCrepeAdsObjectName = u),
      (l.getRawCrepeCampaignGroupName = d),
      (l.nameMatchesASCCrepeName = m));
  },
  98,
);
