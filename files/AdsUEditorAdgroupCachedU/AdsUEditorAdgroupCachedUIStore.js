__d(
  "AdsUEditorAdgroupCachedUIStore",
  [
    "AdsDataAtom",
    "AdsUEditorAdgroupBaseUIStore",
    "AdsUEditorAdgroupCachedNonAutomaticFlowLiteDoFSpecOpenCFPActionHandler",
    "AdsUEditorAdgroupCachedOnBrandedContentToggleDataActionHandler",
    "AdsUEditorAdgroupCachedOnSetBrandedContentSponsorPageIDUseExistingPostDataActionHandler",
    "AdsUEditorAdgroupCachedPromotedObjectSetInstagramActorIDActionHandler",
    "AdsUEditorAdgroupCachedSetCallToActionLinkActionHandler",
    "AdsUEditorAdgroupCachedSetCallToActionTypeActionHandler",
    "AdsUEditorAdgroupCachedSetCatalogAssetFormatOptionActionHandler",
    "AdsUEditorAdgroupCachedSetChildMediaFormatActionHandler",
    "AdsUEditorAdgroupCachedSetInstagramActorIDActionHandler",
    "AdsUEditorAdgroupCachedSetMediaFormatActionHandler",
    "AdsUEditorAdgroupCachedSetNonAutomaticFlowDoFSpecActionHandler",
    "AdsUEditorAdgroupCachedSetPostEditModeActionHandler",
    "AdsUEditorAdgroupCachedSetUseStaticCardDataActionHandler",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return r("immutable").Map();
          }),
          (n.getHandlers = function () {
            return [
              r("AdsUEditorAdgroupCachedSetCallToActionLinkActionHandler"),
              r("AdsUEditorAdgroupCachedSetCallToActionTypeActionHandler"),
              r(
                "AdsUEditorAdgroupCachedSetCatalogAssetFormatOptionActionHandler",
              ),
              r("AdsUEditorAdgroupCachedSetChildMediaFormatActionHandler"),
              r("AdsUEditorAdgroupCachedSetInstagramActorIDActionHandler"),
              r("AdsUEditorAdgroupCachedSetMediaFormatActionHandler"),
              r(
                "AdsUEditorAdgroupCachedOnBrandedContentToggleDataActionHandler",
              ),
              r(
                "AdsUEditorAdgroupCachedOnSetBrandedContentSponsorPageIDUseExistingPostDataActionHandler",
              ),
              r(
                "AdsUEditorAdgroupCachedPromotedObjectSetInstagramActorIDActionHandler",
              ),
              r("AdsUEditorAdgroupCachedSetPostEditModeActionHandler"),
              r("AdsUEditorAdgroupCachedSetUseStaticCardDataActionHandler"),
              r(
                "AdsUEditorAdgroupCachedSetNonAutomaticFlowDoFSpecActionHandler",
              ),
              r(
                "AdsUEditorAdgroupCachedNonAutomaticFlowLiteDoFSpecOpenCFPActionHandler",
              ),
            ];
          }),
          t
        );
      })(r("AdsUEditorAdgroupBaseUIStore")),
      u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
