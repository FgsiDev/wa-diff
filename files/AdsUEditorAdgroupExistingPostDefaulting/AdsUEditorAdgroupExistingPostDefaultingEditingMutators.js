__d(
  "AdsUEditorAdgroupExistingPostDefaultingEditingMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsIGIDv2SemanticFields",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorExistingPostUtils",
    "AdsUEditorSetPostEditModeMutators",
    "gkx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      return (r("gkx")("15865") ? r("isTruthy")(a) : r("isTruthy")(n))
        ? o("AdsIGIDv2SemanticFields").IGIDV2SemanticFields.instagramUserID.set(
            e,
            t,
            n,
            a,
          )
        : t;
    }
    function s(t, n, a, i, l, s, u) {
      var c = r("AdsAdgroupRecordAccessors").creative.object_type.get(i),
        d = o("AdsUEditorExistingPostUtils").convertToExistingPostAd(i, t);
      return (
        (d = e(u, d, n, a)),
        (d = r("AdsAdgroupRecordAccessors").creative.object_type.set(c, d)),
        o("AdsUEditorSetPostEditModeMutators").setToUsingExistingPost({
          adgroup: d,
          cachedCreative: null,
          cachedPageID: null,
          defaultPagePost: null,
          specPathPlugin: u,
          campaign: l,
          campaignGroup: s,
          promotedObjectType: o(
            "AdsUEditorCampaignAdObjectsUtils",
          ).getPromotedObjectType({
            adgroup: i,
            campaign: l,
            campaignGroup: s,
          }),
        })
      );
    }
    l.initExistingPostAd = s;
  },
  98,
);
