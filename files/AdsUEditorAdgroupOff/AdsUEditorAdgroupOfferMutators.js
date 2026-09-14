__d(
  "AdsUEditorAdgroupOfferMutators",
  [
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupCreation",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorCallToActionMutators",
    "ApiDynamicCreativeOptimizationTypes",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("AdsMutators").chain(
        function (e) {
          return r("AdsAdgroupSemanticFields").offerID.delete(t, e);
        },
        function (e) {
          return r("AdsAdgroupSemanticFields").callToActionType.isSupported(
            t,
            e,
          )
            ? o("AdsUEditorCallToActionMutators").setCallToAction({
                callToActionType: t.getDefaultCallToActionType(e),
                pages: null,
                cachedCallToActionLink: null,
                adgroup: e,
                campaignGroupPromotedPageID: null,
                objective: n,
                specPlugin: t,
              })
            : e;
        },
        function (e) {
          var o;
          if (!r("AdsAdgroupSemanticFields").message.isSupported(t, e))
            return e;
          var a = u(e, t, n),
            i =
              (o = e.creative) == null || (o = o.asset_feed_spec) == null
                ? void 0
                : o.optimization_type;
          return a === "" &&
            r("ApiDynamicCreativeOptimizationTypes").REGULAR === i
            ? e
            : r("AdsAdgroupSemanticFields").message.set(t, e, a);
        },
        function (e) {
          return s(e, t, !1);
        },
      )(e);
    }
    function s(e, t, n, o, a) {
      var i = r("AdsAdgroupSemanticFields").childAttachments.get(t, e);
      return i
        ? (n && r("isTruthy")(o) && r("isTruthy")(a)
            ? (i = i.map(function (e) {
                return e
                  .setIn(r("AdsAPIChildAttachmentPaths").LINK, o)
                  .setIn(r("AdsAPIChildAttachmentPaths").NAME, a)
                  .setIn(
                    r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
                    "GET_OFFER_VIEW",
                  );
              }))
            : (i = i.map(function (n) {
                return n.setIn(
                  r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION.TYPE,
                  t.getDefaultCallToActionType(e),
                );
              })),
          r("AdsAdgroupSemanticFields").childAttachments.set(t, e, i))
        : e;
    }
    function u(e, t, n) {
      var a;
      return (a = r("AdsAdgroupSemanticFields").message.get(t, e)) != null
        ? a
        : n === r("AdsAPIObjectives").STORE_VISITS
          ? o("AdsAdgroupCreation").getDefaultSVOMessage()
          : "";
    }
    l.removeOfferIDState = e;
  },
  98,
);
