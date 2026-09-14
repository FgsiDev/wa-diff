__d(
  "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
  [
    "fbt",
    "AdsAPIAdgroupRecordUtils",
    "AdsBrandedContentIdentityTypes",
    "AdsBulkValueUtils",
    "AdsStrings",
    "SearchableEntry",
    "gkx",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 27,
      u = 20,
      c = 10,
      d = 5,
      m = "0",
      p = "0";
    function _(e, t, n) {
      return (
        n === void 0 && (n = !1),
        r("isTruthy")(e)
          ? { primaryPageID: e, isBulkEditing: n }
          : { primaryInstagramID: t, isBulkEditing: n }
      );
    }
    function f(e, t, n) {
      return (
        n === void 0 && (n = !1),
        r("isTruthy")(e)
          ? { partnerPageID: e, isBulkEditing: n }
          : { partnerInstagramID: t, isBulkEditing: n }
      );
    }
    function g(e, t, n, o, a) {
      return (
        a === void 0 && (a = !1),
        r("isTruthy")(n) || r("isTruthy")(o) ? f(n, o, a) : _(e, t, a)
      );
    }
    function h(e, t, n, o, a) {
      return {
        isPAFirstIdentitySelected: r("isTruthy")(e != null ? e : t),
        isPASecondIdentitySelected: r("isTruthy")(n != null ? n : o),
        isBulkEditing: a,
      };
    }
    function y(e, t) {
      return r("isTruthy")(e) ? { pageID: e } : { instagramID: t };
    }
    function C(e, t, n) {
      var r = e.every(function (e) {
        return !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e);
      });
      return t === n
        ? r
          ? "SPONSOR_INLINE"
          : "SPONSOR_BOOST"
        : r
          ? "CREATOR_INLINE"
          : "CREATOR_BOOST";
    }
    function b(e, t, n) {
      var o = e.fb_page,
        a = e.instagram_account;
      return r("isTruthy")(o)
        ? new (r("SearchableEntry"))({
            photo: o.profile_picture_url,
            uniqueID: o.id,
            title: o.name,
            subtitle: s._(/*BTDS*/ "ID : {facebook page id}", [
              s._param("facebook page id", o.id),
            ]),
            auxiliaryData: {
              fb_page: babelHelpers.extends({ is_managed: t }, o),
              instagram_account:
                a != null ? babelHelpers.extends({ is_managed: t }, a) : a,
              is_managed: t,
              permission_status: n,
            },
          })
        : null;
    }
    function v(e, t, n) {
      var o = e.fb_page,
        a = e.instagram_account;
      return r("isTruthy")(a) && a.is_unpublished !== !0
        ? new (r("SearchableEntry"))({
            photo: a.profile_picture_url,
            uniqueID: a.id,
            title: a.username,
            subtitle: s._(/*BTDS*/ "ID : {instagram account id}", [
              s._param("instagram account id", a.id),
            ]),
            auxiliaryData: {
              fb_page:
                o != null ? babelHelpers.extends({ is_managed: t }, o) : o,
              instagram_account: babelHelpers.extends({ is_managed: t }, a),
              is_managed: t,
              permission_status: n,
            },
          })
        : null;
    }
    function S(e, t, n) {
      if (r("isFalsey")(e)) return !1;
      var o = n && r("isFalsey")(t == null ? void 0 : t.id),
        a = (t == null ? void 0 : t.is_unpublished) === !0;
      return o || a;
    }
    function R(e, t, n, o, a) {
      if (r("isFalsey")(t)) return !1;
      var i = a && r("isFalsey")(n == null ? void 0 : n.id),
        l = e
          ? (n == null ? void 0 : n.id) === (o == null ? void 0 : o.id)
          : !1;
      return i || l || (n == null ? void 0 : n.is_iabp) === !0;
    }
    function L(e, t, n) {
      var o = e.fb_page,
        a = e.instagram_account,
        i =
          a != null
            ? a
            : {
                id: "0",
                is_business_accessible: !1,
                is_unpublished: !0,
                legacy_instagram_user_id: "0",
                profile_picture_url: "",
                username: "",
              };
      return new (r("SearchableEntry"))({
        photo: null,
        uniqueID: 0,
        title: s._(/*BTDS*/ "Use Facebook Page"),
        subtitle: "",
        auxiliaryData: {
          fb_page: o,
          instagram_account: i,
          is_managed: t,
          permission_status: n,
        },
      });
    }
    function E(e, t, n) {
      var o = e.fb_page,
        a = e.instagram_account,
        i = o != null ? o : { id: "0", name: "", profile_picture_url: "" };
      return new (r("SearchableEntry"))({
        photo: null,
        uniqueID: 0,
        title: s._(/*BTDS*/ "Use Instagram Account"),
        subtitle: "",
        auxiliaryData: {
          fb_page: i,
          instagram_account: a,
          is_managed: t,
          permission_status: n,
        },
      });
    }
    function k(e, t, n) {
      var a, i;
      if (n === !0)
        return new (r("SearchableEntry"))({
          photo:
            "/images/profile/picture/silhouette/profile-default_180_light.png",
          uniqueID: o("AdsBulkValueUtils").MIXED,
          title: o("AdsStrings").MixedValuePlaceholder,
        });
      if (r("isFalsey")(e) && r("isFalsey")(t)) return null;
      var l = E(
          { fb_page: e, instagram_account: t },
          (a = e == null ? void 0 : e.is_managed) != null ? a : !1,
        ),
        s = r("isFalsey")(e) || P(l);
      return s
        ? l
        : b(
            { fb_page: e, instagram_account: t },
            (i = e == null ? void 0 : e.is_managed) != null ? i : !1,
          );
    }
    function I(e, t, n) {
      var a;
      if (r("isTruthy")(n))
        return new (r("SearchableEntry"))({
          photo:
            "/images/profile/picture/silhouette/profile-default_180_light.png",
          uniqueID: o("AdsBulkValueUtils").MIXED,
          title: o("AdsStrings").MixedValuePlaceholder,
        });
      if (r("isFalsey")(e) && r("isFalsey")(t)) return null;
      if (r("isFalsey")(t) || t.is_unpublished === !0) {
        var i;
        return L(
          { fb_page: e },
          (i = e == null ? void 0 : e.is_managed) != null ? i : !1,
        );
      }
      return v(
        { fb_page: e, instagram_account: t },
        (a = t == null ? void 0 : t.is_managed) != null ? a : !1,
      );
    }
    function T(e) {
      return e
        ? s._(
            /*BTDS*/ "No results found. Try a different search or search all accounts under",
          )
        : s._(/*BTDS*/ "No results found. Try a different search.");
    }
    function D(e, t, n, o, a, i) {
      return (
        i === void 0 && (i = !1),
        n
          ? s._(
              /*BTDS*/ "This option is unavailable when ads use different identities.",
            )
          : e
            ? s._(/*BTDS*/ "Choose a Facebook Page or Instagram account.")
            : t
              ? s._(
                  /*BTDS*/ "Identities cannot be switched when you\u2019re using an existing post.",
                )
              : o
                ? s._(
                    /*BTDS*/ "Switching identities is disabled for partnership ads when partner content from your catalog is used.",
                  )
                : a
                  ? s._(
                      /*BTDS*/ "Switching identities is disabled for automation.",
                    )
                  : i
                    ? s._(
                        /*BTDS*/ "Identities can\u2019t be switched because you selected an ad partner\u2019s Instagram account as your live video location.",
                      )
                    : r("gkx")("12161")
                      ? s._(/*BTDS*/ "Swap the order of the identities.")
                      : s._(
                          /*BTDS*/ "Switch the order in which the identities appear.",
                        )
      );
    }
    function x(t, n) {
      return r("isTruthy")(n) && r("isTruthy")(t) && t.length > e
        ? t.slice(0, e).concat("...")
        : t;
    }
    function $(e) {
      var t;
      return (
        (e == null || (t = e.getAuxiliaryData().instagram_account) == null
          ? void 0
          : t.is_unpublished) === !0
      );
    }
    function P(e) {
      var t = e == null ? void 0 : e.getAuxiliaryData().fb_page;
      return (
        (t == null ? void 0 : t.id) === p ||
        (t == null ? void 0 : t.is_iabp) === !0
      );
    }
    var N = function (t) {
        var e = "info",
          n = null;
        return t.getUniqueID() === m
          ? { statusColor: e, statusString: null }
          : (t.getAuxiliaryData().is_managed === !0
              ? (n = s._(/*BTDS*/ "Managed account"))
              : t.getAuxiliaryData().is_managed === !1 &&
                (n = s._(/*BTDS*/ "Ad partnership")),
            { statusColor: e, statusString: n });
      },
      M = function (t) {
        if (t == null)
          return o("AdsBrandedContentIdentityTypes")
            .PartnershipAdsPermissionsStatus.REQUIRED;
        switch (t) {
          case "APPROVED":
          case "APPROVED_V2":
            return o("AdsBrandedContentIdentityTypes")
              .PartnershipAdsPermissionsStatus.APPROVED;
          case "PENDING_APPROVAL":
            return o("AdsBrandedContentIdentityTypes")
              .PartnershipAdsPermissionsStatus.PENDING;
          default:
            return o("AdsBrandedContentIdentityTypes")
              .PartnershipAdsPermissionsStatus.REQUIRED;
        }
      },
      w = function (t) {
        var e = t.getAuxiliaryData().permission_status;
        return t.getUniqueID() === m
          ? { statusColor: "warning", statusString: null }
          : A(e);
      },
      A = function (t) {
        var e = "warning",
          n = null;
        return (
          t ===
          o("AdsBrandedContentIdentityTypes").PartnershipAdsPermissionsStatus
            .APPROVED
            ? ((e = "success"), (n = s._(/*BTDS*/ "Permission approved")))
            : t ===
                o("AdsBrandedContentIdentityTypes")
                  .PartnershipAdsPermissionsStatus.PENDING
              ? ((e = "warning"), (n = s._(/*BTDS*/ "Permission pending")))
              : t ===
                  o("AdsBrandedContentIdentityTypes")
                    .PartnershipAdsPermissionsStatus.REQUIRED &&
                ((e = "warning"), (n = s._(/*BTDS*/ "Permission required"))),
          { statusColor: e, statusString: n }
        );
      };
    ((l.MAX_RESULTS_LIMIT = u),
      (l.MAX_RECOMMENDED_ACCOUNTS_LIMIT = c),
      (l.MAX_FREEFORM_ACCOUNTS_LIMIT = d),
      (l.PBIA_DEFAULT_ID = m),
      (l.IABP_DEFAULT_ID = p),
      (l.getPrimaryIdentityLoggingData = _),
      (l.getPartnerIdentityLoggingData = f),
      (l.getOneIdentityLoggingData = g),
      (l.getIdentityModalDoneLoggingData = h),
      (l.getGenericIdentityLoggingData = y),
      (l.getBoostingTypeFromAdvertiserPageID = C),
      (l.createFBPageSearchableEntry = b),
      (l.createIGAccountSearchableEntry = v),
      (l.shouldShowPBIA = S),
      (l.shouldShowIABP = R),
      (l.getPageBackedInstagramAccountEntry = L),
      (l.getInstagramAccountBackedPageEntry = E),
      (l.getFacebookSelectorInitialValue = k),
      (l.getInstagramSelectorInitialValue = I),
      (l.getEmptyIdentitySearchResultsString = T),
      (l.getSwitchIdentitiesTooltipString = D),
      (l.getPBIADisplayNameForPreview = x),
      (l.getIsSearchEntryPBIA = $),
      (l.getIsSearchEntryIABP = P),
      (l.getPrimaryIdentityBadgeConfig = N),
      (l.convertPermissionsStatusForRecommendedAccounts = M),
      (l.getSearchableEntryBadgeConfig = w));
  },
  226,
);
