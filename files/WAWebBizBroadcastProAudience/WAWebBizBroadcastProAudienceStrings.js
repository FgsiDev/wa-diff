__d(
  "WAWebBizBroadcastProAudienceStrings",
  ["fbt", "WAWebBroadcastConsts", "WDSTextualLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Create audience");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s._(
        /*BTDS*/ "I confirm I have marketing consent from all recipients in this list and it complies with {=m1} .",
        [
          s._implicitParam(
            "=m1",
            u.jsx(r("WDSTextualLink.react"), {
              href: o("WAWebBroadcastConsts").WHATSAPP_BUSINESS_POLICY_URL,
              children: s._(/*BTDS*/ "policy guidelines for WhatsApp"),
            }),
          ),
        ],
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Add");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Choose an audience");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Open thread");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Add recipients");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Remove recipients");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Remove recipients");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Your changes couldn't be saved. Please try again.");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Your audience couldn't be saved. Please try again.");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Add more recipients");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Add more recipients");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "OK");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Keep at least {number} recipients to continue.","_1":"Keep at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a file with at least {number} recipients to continue.","_1":"Upload a file with at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "Upload new file");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "Cancel");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' names and phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s name and phone number. For best results, {template_link}."}',
        [s._plural(e, "number"), s._param("template_link", t)],
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e, t) {
      return e <= 0
        ? s._(
            /*BTDS*/ "Upload a CSV or Excel file with your recipients' phone numbers. For best results, {template_link}.",
            [s._param("template_link", t)],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s phone number. For best results, {template_link}."}',
            [s._plural(e, "number"), s._param("template_link", t)],
          );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "Go back");
    }
    function P() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w() {
      return s._(/*BTDS*/ "Select all");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "Search name or number");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Search number");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(/*BTDS*/ "Contact list");
    }
    function B(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function W(e) {
      return s._(
        /*BTDS*/ "Keep recipient {recipient phone number} in this audience",
        [s._param("recipient phone number", e)],
      );
    }
    function q() {
      return s._(/*BTDS*/ "Load more");
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(/*BTDS*/ "Processing your audience\u2026");
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return s._(/*BTDS*/ "We'll update you when it's complete.");
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z() {
      return s._(
        /*BTDS*/ "Your edits are processing. We'll update you when it's complete.",
      );
    }
    ((z.displayName = z.name + " [from " + i.id + "]"),
      (l.getCreateAudienceButtonLabel = c),
      (l.getMarketingConsentCheckboxLabel = d),
      (l.getAddSelectedAudiencesButtonLabel = m),
      (l.getChooseAnAudienceDialogTitle = p),
      (l.getOpenThreadLabel = _),
      (l.getAddRecipientsLabel = f),
      (l.getRemoveRecipientsLabel = g),
      (l.getRemoveRecipientsButtonLabel = h),
      (l.getEditAudienceFailureToastMessage = y),
      (l.getCreateAudienceFailureToastMessage = C),
      (l.getAudienceTooSmallTitle = b),
      (l.getAudienceBelowFloorBannerTitle = v),
      (l.getAudienceBelowFloorBannerBody = S),
      (l.getAudienceTooSmallSelectBody = R),
      (l.getAudienceTooSmallDismissLabel = L),
      (l.getAudienceTooSmallRemoveBody = E),
      (l.getAudienceTooSmallUploadBody = k),
      (l.getAudienceTooSmallUploadNewFileLabel = I),
      (l.getAudienceTooSmallCancelLabel = T),
      (l.getImportAudienceMinRecipientsDescription = D),
      (l.getImportAudiencePhoneOnlyDescription = x),
      (l.getGoBackAriaLabel = $),
      (l.getChooseRecipientsToAddHeader = P),
      (l.getChooseRecipientsToRemoveHeader = N),
      (l.getSelectedCountSubtitle = M),
      (l.getSelectAllLabel = w),
      (l.getSearchPlaceholder = A),
      (l.getSearchByNumberPlaceholder = F),
      (l.getContactListAriaLabel = O),
      (l.getSelectRecipientAriaLabel = B),
      (l.getKeepRecipientAriaLabel = W),
      (l.getLoadMorePaginationLabel = q),
      (l.getLoadingPaginationLabel = U),
      (l.getDeleteAudienceModalTitle = V),
      (l.getAudienceProcessingTitle = H),
      (l.getAudienceProcessingSubtitle = G),
      (l.getAudienceEditsProcessingMessage = z));
  },
  226,
);
