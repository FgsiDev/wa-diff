__d(
  "AdsUEditorAdgroupCachedRecord",
  ["AdsEditorPostEditMode", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(
        r("immutable").Record({
          additionalImageIndex: null,
          callToActionValue: r("immutable").Map(),
          childMediaFormatData: r("immutable").List(),
          creatives:
            ((e = {}),
            (e[r("AdsEditorPostEditMode").EXISTING] = null),
            (e[r("AdsEditorPostEditMode").INLINE] = null),
            e),
          existingPostPageID: null,
          instagramActorID: null,
          pageIDForInstagram: null,
          metadata: null,
          pageID: null,
          imageAssetFeedSpec: null,
          videoAssetFeedSpec: null,
          automaticFlowData: null,
          nonAutomaticFlowDoFSpec: null,
          cfpDOFspec: null,
          newBrandedContentIdentities: null,
          oldBrandedContentIdentities: null,
        }),
      );
    s.getEmptyRecord = function () {
      return u;
    };
    var u = new s();
    l.default = s;
  },
  98,
);
