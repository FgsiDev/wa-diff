__d(
  "AdsUEditorAdgroupPartnershipAdIdentityUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIObjectives",
    "AdsInstagramUserIdMigrationUtils",
    "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
    "AdsUEditorAdgroupCachedUtils",
    "cr:38101",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").List([
        (e = r("AdsAPIAdgroupPaths")).CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        e.CREATIVE.INSTAGRAM_ACTOR_ID,
      ]),
      u = r("immutable").List([
        e.CREATIVE.INSTAGRAM_BRANDED_CONTENT.SPONSOR_ID,
        e.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
      ]);
    function c(e) {
      return (e == null ? void 0 : e.boostingType) === "SPONSOR_BOOST" ||
        (e == null ? void 0 : e.boostingType) === "SPONSOR_INLINE"
        ? e == null
          ? void 0
          : e.secondaryPageID
        : e == null
          ? void 0
          : e.primaryPageID;
    }
    var d = function (t, n, a, i, l, s, u, d, m) {
      if (!i) return null;
      if (r("isTruthy")(s) && (d === !0 || m === !0)) return s;
      var e =
        l != null
          ? l
          : o("AdsUEditorAdgroupCachedUtils").getBrandedContentIdentities(
              n,
              t,
              i,
            );
      if (
        (e == null ? void 0 : e.primaryPageID) == null &&
        (e == null ? void 0 : e.primaryInstagramActorID) == null
      ) {
        var p;
        if (r("isTruthy")(s) && u === r("AdsAPIObjectives").LEAD_GENERATION)
          return s;
        var _ = o("AdsUEditorAdgroupCachedUtils").getBrandedContentIdentities(
            n,
            t,
            !1,
          ),
          f = c(_);
        return (p = a == null ? void 0 : a.pageID) != null ? p : f;
      }
      return null;
    };
    function m(e, t, r, a, l, s, u, c) {
      var d = r,
        m =
          (s == null ? void 0 : s.legacy_instagram_user_id) ===
          o("AdsUEditorAdgroupBrandedContentIdentityModalUtils").PBIA_DEFAULT_ID
            ? null
            : s == null
              ? void 0
              : s.legacy_instagram_user_id,
        p =
          (s == null ? void 0 : s.id) ===
          o("AdsUEditorAdgroupBrandedContentIdentityModalUtils").PBIA_DEFAULT_ID
            ? null
            : s == null
              ? void 0
              : s.id,
        _ =
          (c == null ? void 0 : c.id) ===
          o("AdsUEditorAdgroupBrandedContentIdentityModalUtils").PBIA_DEFAULT_ID
            ? null
            : c == null
              ? void 0
              : c.id,
        f = o(
          "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
        ).getBoostingTypeFromAdvertiserPageID(t, r, u == null ? void 0 : u.id);
      n("cr:38101").dispatch(
        {
          hostID: a,
          adgroupIDs: e,
          secondaryPageID: u == null ? void 0 : u.id,
          secondaryIgV2ID: _,
          primaryPageID: l == null ? void 0 : l.id,
          primaryInstagramActorID: m,
          primaryInstagramUserID: o(
            "AdsInstagramUserIdMigrationUtils",
          ).convertIGIDV2FromStringToStrongType(p),
          advertiserPageID: d,
          boostingType: f,
        },
        {
          line: "148",
          module: "AdsUEditorAdgroupPartnershipAdIdentityUtils.js",
          moduleID: i.id,
        },
      );
    }
    function p(e, t, n, r, o, a, i, l, s) {
      o ? m(e, t, n, r, a, i, l, s) : m(e, t, n, r, l, s, a, i);
    }
    ((l.PRIMARY_IDENTITY_PATHS = s),
      (l.SECONDARY_IDENTITY_PATHS = u),
      (l.getBAUPageID = c),
      (l.getPartnershipAdDefaultPageID = d),
      (l.savePartnershipAdsIdentities = m),
      (l.saveCorrectPAIdentitiesOnAccountSelection = p));
  },
  98,
);
