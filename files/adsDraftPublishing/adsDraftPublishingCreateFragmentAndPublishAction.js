__d(
  "adsDraftPublishingCreateFragmentAndPublishAction",
  [
    "AdDraftFragmentSource",
    "AdsApplicationIDs",
    "AdsDraftDraftPublishDataAction",
    "AdsDraftPublishDataManager",
    "AdsNewIDs",
    "adsPELockedAndPublishingSelectors",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.createdInCF,
        n = t === void 0 ? !1 : t,
        a = e.creationSource,
        l = a === void 0 ? r("AdDraftFragmentSource").NOT_SPECIFIED : a,
        s = e.draftID,
        u = e.fragment,
        c = e.tempFragmentID,
        d = e.ignoreErrors,
        m = e.selection,
        p = e.shouldPublishImmediately,
        _ = p === void 0 ? !1 : p,
        f = e.isFirstBlockingError,
        g = f === void 0 ? !1 : f,
        h = o("AdsNewIDs").newNegativeID().toString(),
        y = !o("adsPELockedAndPublishingSelectors")
          .adsPEPublishingIDsSelector()
          .isEmpty(),
        C = r("AdsDraftPublishDataManager").startCreateFragmentAndPublish(
          s,
          u,
          c,
          y,
          h,
          l,
          _,
          g,
        );
      return (
        r("AdsDraftDraftPublishDataAction").dispatch(
          {
            adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
            createdInCF: n,
            creationSource: l,
            draftID: s,
            fakePublishID: h,
            fragmentIDs: r("immutable").Set([c]),
            ignoreErrors: d,
            isCurrentlyPublishing: y,
            selection: m,
            shouldPublishImmediately: _,
          },
          {
            line: "72",
            module: "adsDraftPublishingCreateFragmentAndPublishAction.js",
            moduleID: i.id,
          },
        ),
        C
      );
    }
    l.default = e;
  },
  98,
);
