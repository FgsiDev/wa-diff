__d(
  "PartnershipAdsStrings",
  [
    "fbt",
    "AdsUEditorAdgroupPartnershipAdsHubLink.react",
    "PartnershipDynamicAdsGatingUtils",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "1718812952272049",
      d = s._(/*BTDS*/ "Create multiple ads from list"),
      m = s._(
        /*BTDS*/ "Select a business asset and associated list to create partnership ads.",
      ),
      p = s._(/*BTDS*/ "Select content"),
      _ = s._(
        /*BTDS*/ "Select content from a list or approved brief submissions to create partnership ads.",
      ),
      f = s._(/*BTDS*/ "Content list"),
      g = s._(/*BTDS*/ "Select list or brief"),
      h = s._(/*BTDS*/ "Select a content list"),
      y = s._(/*BTDS*/ "Select a list or brief"),
      C = s._(/*BTDS*/ "Search list or brief");
    function b(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number of approved submissions} approved submissions","_1":"1 approved submission"}',
        [s._plural(e, "number of approved submissions")],
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Previewing {number of approved submissions} approved submissions","_1":"Previewing 1 approved submission"}',
        [s._plural(e, "number of approved submissions")],
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return s._(
        /*BTDS*/ "Manage your lists and briefs in {partnership_ads_hub_link}",
        [s._param("partnership_ads_hub_link", e)],
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    var R = s._(
        /*BTDS*/ "You don't have permission to create ads for this business asset.",
      ),
      L = s._(/*BTDS*/ "You must have a Facebook Page in order to create ads."),
      E = s._(/*BTDS*/ "About using catalog ads with partners");
    function k() {
      return r("gkx")("17492")
        ? s._(
            /*BTDS*/ "Partnership ads that use catalog content from partners isn't supported for Collections.",
          )
        : s._(
            /*BTDS*/ "Partnership ads that use catalog content from partners can only include one image or video.",
          );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    var I = s._(
        /*BTDS*/ "You can't manually upload media when using partner content from your catalog.",
      ),
      T = s._(/*BTDS*/ "Partnership ads for catalog"),
      D = s._(/*BTDS*/ "Collection format"),
      x = o(
        "PartnershipDynamicAdsGatingUtils",
      ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost()
        ? s._(
            /*BTDS*/ "Now you can run ads with partners using a catalog. Turn on {=m2} to get started.",
            [
              s._implicitParam(
                "=m2",
                u.jsx("b", { children: s._(/*BTDS*/ "Partnership ad") }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "Now you can run ads with partners using a catalog and the collection format. Turn on {=m1} to get started.",
            [
              s._implicitParam(
                "=m1",
                u.jsx("b", { children: s._(/*BTDS*/ "Partnership ad") }),
              ),
            ],
          ),
      $ = s._(
        /*BTDS*/ "Catalog now uses the collection format for partnership ads. Choosing catalog as the creative source will select {=m1} as the format.",
        [
          s._implicitParam(
            "=m1",
            u.jsx("b", { children: s._(/*BTDS*/ "Collection") }),
          ),
        ],
      ),
      P = s._(/*BTDS*/ "Second identity"),
      N = s._(
        /*BTDS*/ "This will appear to viewers as the second account in the ad's header, unless you opt in to dynamic Instagram usernames.",
      ),
      M = s._(
        /*BTDS*/ "Choose the Facebook Page and Instagram account that this ad will be associated with.",
      ),
      w = s._(
        /*BTDS*/ "Choose the Facebook Page, Instagram account, and WhatsApp phone number that this ad will be associated with.",
      ),
      A = s._(
        /*BTDS*/ "The profiles and branding that will be used in your ad.",
      ),
      F = s._(/*BTDS*/ "The profiles and app that will be used in your ad."),
      O = s._(/*BTDS*/ "The profiles that will be used in your ad."),
      B = s._(
        /*BTDS*/ "The profiles that will be used in your ad and message.",
      ),
      W = s._(
        /*BTDS*/ "Choose the Facebook Pages and Instagram profiles that this partnership ad will be associated with.",
      ),
      q = s._(
        /*BTDS*/ "Choose the Facebook Pages, Instagram profiles, and WhatsApp accounts that this partnership will be associated with.",
      );
    function U(e, t) {
      return (
        e === void 0 && (e = 1),
        t === void 0 && (t = !1),
        t
          ? s._(
              /*BTDS*/ '_j{"*":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers these partnerships will be associated with.","_1":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers this partnership will be associated with."}',
              [s._plural(e)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers these partnership ads will be associated with.","_1":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers this partnership ad will be associated with."}',
              [s._plural(e)],
            )
      );
    }
    var V = s._(
        /*BTDS*/ "The first identity has been set by the partnership ad code and cannot be switched.",
      ),
      H = s._(/*BTDS*/ "Dynamic identity."),
      G = s._(/*BTDS*/ "Both identities in the header."),
      z = s._(/*BTDS*/ "First identity only in the header."),
      j = s._(/*BTDS*/ "Identities to display in the header"),
      K = s._(/*BTDS*/ "Identity display options"),
      Q = s._(
        /*BTDS*/ "Displaying the first and second identities showcases your partnership and cross-promotes accounts, while displaying only the first identity lets you leverage your partner's voice.",
      ),
      X = s._(
        /*BTDS*/ "Both identities will be displayed for unsupported placements and in the UK.",
      ),
      Y = s._(
        /*BTDS*/ "We'll show the partnership ad with the header that's likely to perform best. It may have the first identity only or both identities in the ad's header.",
      ),
      J = s._(
        /*BTDS*/ "Both identities will be displayed for unsupported placements and in the UK. *This result is based on an experiment run between May 10, 2025 and May 24, 2025. The experiment used dynamic identity display for partnership ads for all advertisers excluding healthcare, pharmaceutical, political, financial services and luxury advertisers. This is provided to give you an idea of possible performance, but performance isn't guaranteed.",
      ),
      Z = s._(/*BTDS*/ "Dynamic identity"),
      ee = s._(
        /*BTDS*/ "One or more of your partnership ads are not using dynamic identity. Using {=m2} on your partnership ads could result in improved performance.",
        [
          s._implicitParam(
            "=m2",
            u.jsx("strong", { children: s._(/*BTDS*/ "Dynamic identity") }),
          ),
        ],
      ),
      te = s._(
        /*BTDS*/ "Both identities will be displayed for unsupported placements. *This result is based on an experiment run between May 10, 2025 and May 24, 2025. The experiment used dynamic identity display for partnership ads for all advertisers excluding healthcare, pharmaceutical, political, financial services and luxury advertisers. This is provided to give you an idea of possible performance, but performance isn't guaranteed.",
      ),
      ne = s._(
        /*BTDS*/ "You could get 1.3\u0025 lower cost per result by using dynamic identity.*",
      ),
      re = s._(
        /*BTDS*/ "You can't use an existing post when using partner content from your catalog.",
      ),
      oe = s._(
        /*BTDS*/ "This product set can't be selected because it doesn't have any partner content.",
      ),
      ae = s._(
        /*BTDS*/ "Both identities will be displayed when using partner content from your catalog.",
      ),
      ie = s._(
        /*BTDS*/ "Both identities will be displayed when using automation.",
      ),
      le = s._(
        /*BTDS*/ "You could get 1.3\u0025 lower cost per result by using dynamic identity",
      );
    function se(e) {
      switch (e) {
        case 2:
          return z;
        case 3:
          return H;
        case 1:
        default:
          return G;
      }
    }
    function ue(e) {
      return s._(
        /*BTDS*/ "Choose the Facebook Page and Instagram profiles that this partnership ad will be associated with. You can connect new accounts from the {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("AdsUEditorAdgroupPartnershipAdsHubLink.react"), {
              businessID: e,
              tab: "PARTNERS",
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ],
      );
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    function ce(e, t, n) {
      (t === void 0 && (t = 1), n === void 0 && (n = !1));
      var o, o;
      return n
        ? ((o = s._plural(t)),
          s._(
            /*BTDS*/ '_j{"*":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers these partnerships will be associated with. You can connect new identities from the {=m6}.","_1":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers this partnership will be associated with. You can connect new identities from the {=m6}."}',
            [
              o,
              s._implicitParam(
                "=m6",
                u.jsx(r("AdsUEditorAdgroupPartnershipAdsHubLink.react"), {
                  businessID: e,
                  tab: "PARTNERS",
                  children: s._(/*BTDS*/ '_j{"*":""}', [o]),
                }),
              ),
            ],
          ))
        : ((o = s._plural(t)),
          s._(
            /*BTDS*/ '_j{"*":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers these partnership ads will be associated with. You can connect new identities from the {=m6}.","_1":"Choose the Facebook Pages, Instagram profiles and WhatsApp phone numbers this partnership ad will be associated with. You can connect new identities from the {=m6}."}',
            [
              o,
              s._implicitParam(
                "=m6",
                u.jsx(r("AdsUEditorAdgroupPartnershipAdsHubLink.react"), {
                  businessID: e,
                  tab: "PARTNERS",
                  children: s._(/*BTDS*/ '_j{"*":""}', [o]),
                }),
              ),
            ],
          ));
    }
    function de(e) {
      return s._(
        /*BTDS*/ "These ads will be shown in a single image format. Link products to partner content in the {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("AdsUEditorAdgroupPartnershipAdsHubLink.react"), {
              businessID: e,
              tab: "CONTENT",
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ],
      );
    }
    de.displayName = de.name + " [from " + i.id + "]";
    function me() {
      return s._(
        /*BTDS*/ "Displaying both identities showcases your partnership and cross-promotes accounts, while displaying only the first identity leverages your partner's voice. Dynamic identity uses the version that's likely to perform best.",
      );
    }
    ((me.displayName = me.name + " [from " + i.id + "]"),
      (l.PA_CATALOG_COLLECTION_HCA_CMS_ID = c),
      (l.SELECT_CONTENT_LIST_MODAL_TITLE = d),
      (l.SELECT_CONTENT_LIST_MODAL_DESCRIPTION = m),
      (l.SELECT_CONTENT_LIST_OR_BRIEF_MODAL_TITLE = p),
      (l.SELECT_CONTENT_LIST_OR_BRIEF_MODAL_DESCRIPTION = _),
      (l.CONTENT_LIST_LABEL = f),
      (l.CONTENT_LIST_OR_BRIEF_LABEL = g),
      (l.CONTENT_LIST_PLACEHOLDER = h),
      (l.CONTENT_LIST_OR_BRIEF_PLACEHOLDER = y),
      (l.CONTENT_LIST_OR_BRIEF_SEARCH_PLACEHOLDER = C),
      (l.getApprovedSubmissionsCountText = b),
      (l.getPreviewingApprovedSubmissionsText = v),
      (l.getManageListsAndBriefsFooterText = S),
      (l.NO_CREATE_ADS_ACCESS_ERROR = R),
      (l.NO_FACEBOOK_PAGE_ERROR = L),
      (l.PA_CATALOG_COLLECTION_HCA_TEXT = E),
      (l.getFormatNotSupportedWithDynamicPartnerContentDelivery = k),
      (l.MANUAL_UPLOAD_DISABLED_FOR_DYNAMIC_PARTNER_CONTENT = I),
      (l.PARTNERSHIP_ADS_FOR_CATALOG = T),
      (l.COLLECTION_FORMAT = D),
      (l.CHOOSING_PA_SELECTS_COLLECTION = x),
      (l.CHOOSING_CATALOG_SELECTS_COLLECTION = $),
      (l.IDENTITY_MODAL_SECOND_IDENTITY_HEADER = P),
      (l.IDENTITY_MODAL_SECOND_IDENTITY_HEADER_TOOLTIP = N),
      (l.IDENTITY_CARD_DESC = M),
      (l.IDENTITY_CARD_WITH_WAMO_DESC = w),
      (l.IDENTITY_CARD_PROFILES_BRANDING = A),
      (l.IDENTITY_CARD_PROFILES_APP = F),
      (l.IDENTITY_CARD_PROFILES = O),
      (l.IDENTITY_CARD_PROFILES_AD_AND_MESSAGE = B),
      (l.PARTNERSHIP_AD_IDENTITY_CARD_DESC = W),
      (l.PARTNERSHIP_MM_IDENTITY_CARD_DESC = q),
      (l.getWAMOStatusIdentityCardDesc = U),
      (l.PARTNERSHIP_AD_IDENTITY_CARD_AD_CODE_USED_NOTICE = V),
      (l.PARTNERSHIP_AD_AD_FORMAT_DYNAMIC_HEADER_LIST_TEXT = H),
      (l.PARTNERSHIP_AD_AD_FORMAT_DUAL_HEADER_LIST_TEXT = G),
      (l.PARTNERSHIP_AD_AD_FORMAT_SINGLE_HEADER_LIST_TEXT = z),
      (l.PARTNERSHIP_AD_AD_FORMAT_SELECTOR_LIST_HEADER_V2 = j),
      (l.PARTNERSHIP_AD_AD_FORMAT_SELECTOR_LIST_HEADER_TOOLTIP_HEADER = K),
      (l.PARTNERSHIP_AD_AD_FORMAT_SELECTOR_LIST_HEADER_TOOLTIP_DESC = Q),
      (l.PARTNERSHIP_AD_SINGLE_HEADER_FORMAT_UK_REGULATION_DESC = X),
      (l.PARTNERSHIP_AD_DYNAMIC_HEADER_PFR_DESC = Y),
      (l.PARTNERSHIP_AD_DUAL_HEADER_OPT_VARIANT_TOOLTIP_SUB_DESC = J),
      (l.PARTNERSHIP_AD_DUPLICATION_UPGRADE_TOOLTIP_HEADER = Z),
      (l.PARTNERSHIP_AD_DUPLICATION_UPGRADE_TOOLTIP_DESC = ee),
      (l.PARTNERSHIP_AD_DUAL_HEADER_OPT_VARIANT_TOOLTIP_SUB_DESC_REMOVE_UK_BLOCK =
        te),
      (l.PARTNERSHIP_AD_DUAL_HEADER_TOOLTIP_STAT = ne),
      (l.EXISTING_POST_DISABLED_FOR_DYNAMIC_PARTNER_CONTENT = re),
      (l.PRODUCT_SET_PARTNER_CONTENT_INFO = oe),
      (l.PARTNERSHIP_AD_DYNAMIC_PARTNER_CONTENT_DUAL_HEADER_TOOLTIP = ae),
      (l.PARTNERSHIP_AD_AUTOMATED_ADGROUP_CREATION_DUAL_HEADER_TOOLTIP = ie),
      (l.PARTNERSHIP_AD_DYNAMIC_HEADER_PFR_TITLE = le),
      (l.getAdFormatCollapsedText = se),
      (l.getDescriptionTextForPAHub = ue),
      (l.getWAMOStatusDescriptionTextForPAHub = ce),
      (l.getDynamicPartnerContentCheckboxDescription = de),
      (l.getAdFormatSelectorTooltipDescriptionForDynamicHeader = me));
  },
  226,
);
