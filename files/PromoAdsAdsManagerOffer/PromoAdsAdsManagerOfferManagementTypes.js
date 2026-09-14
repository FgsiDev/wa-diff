__d(
  "PromoAdsAdsManagerOfferManagementTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({
        MISSING_ADGROUP_OR_PAGE_ID: "missing_adgroup_or_page_id",
        MUTATION_HAS_ERROR: "mutation_has_error",
        GRAPHQL_EXCEPTION_NULL_OFFER_RETURNED:
          "graphql_exception_null_offer_returned",
      }),
      s = e({
        VIEW_OPENED: "view_opened",
        ADD_OFFER_SAVE: "add_offer_save",
        EDIT_OFFER_SAVE: "edit_offer_save",
        CONFIRM_OFFER_SAVE: "confirm_offer_save",
        OFFER_EDITED: "offer_edited",
        VIEW_CLOSED: "view_closed",
        OFFER_DELETED: "offer_deleted",
        CM_REDIRECT_CLICKED: "cm_redirect_clicked",
      }),
      u = e({
        ADD_OFFER_OPENED: "add_offer_opened",
        EDIT_OFFER_OPENED: "edit_offer_opened",
        ADD_OFFER_SAVE: "add_offer_save",
        ADD_OFFER_CANCEL: "add_offer_cancel",
        EDIT_OFFER_CANCEL: "edit_offer_cancel",
        EDIT_OFFER_SAVE: "edit_offer_save",
        ADD_OFFER_CLOSED: "add_offer_closed",
        EDIT_OFFER_CLOSED: "edit_offer_closed",
      }),
      c = e({
        CM_REDIRECT: "cm_redirect",
        CM_REDIRECT_FROM_HOVER: "cm_redirect_from_hover",
        LC_RECIRECT: "lc_redirect",
        SHOPIFY_REDIRECT: "shopify_redirect",
        LEARN_MORE_REDIRECT: "learn_more_redirect",
      }),
      d = e({ INLINE_BUTTON: "inline_button", GUIDANCE_CARD: "guidance_card" }),
      m = e.Mirrored(["ADD", "REMOVE", "CLEAR"]),
      p = e.Mirrored(["ADD", "EDIT", "CONFIRM"]),
      _ = e.Mirrored(["MINIMUM_SUBTOTAL", "MINIMUM_QUANTITY"]);
    ((i.OfferManagementOfferMutationFailStatus = l),
      (i.OfferManagementEvent = s),
      (i.EmailCaptureOfferManagementEvent = u),
      (i.EmailCaptureRecirectType = c),
      (i.EmailCaptureApplyOfferSource = d),
      (i.AdsPromoManualOfferSelectionActionType = m),
      (i.AdsPromoOfferManagementEditType = p),
      (i.AdsPromoOfferMinimumSpendType = _));
  },
  66,
);
