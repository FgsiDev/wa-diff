__d(
  "adsAdgroupDraftFragmentCreateReducer",
  [
    "AdsAdgroupDraftFragmentHelpers",
    "AdsApplicationUtils",
    "AdsDraftFragmentStoreStateApplyChangesMutators",
    "AdsEditorActionUtils",
    "AdsPEAdgroupSelectors",
    "AdsPEPrefetchedIDsActionFlux",
    "AdsPayloadUtils",
    "AdsUEditorHostIDs",
    "AdsUEditorUtils",
    "QPLDraftFragmentMutationLogger",
    "QPLSharing",
    "QuickPerformanceLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      if (o("AdsApplicationUtils").isCreativeStudio()) return e;
      var r = o("AdsPayloadUtils").getAdgroupIDsFromPayload_DO_NOT_USE({
          action: t,
        }),
        a = r.filter(function (e) {
          var t = o("AdsPEAdgroupSelectors").getCachedSelector_LEGACY()(e);
          return t.isDone() && t.hasValue();
        });
      if (a.length === 0) return e;
      var i = o("AdsPEAdgroupSelectors").getAllRecordsSelector_LEGACY()(a),
        l = n(i, t),
        s = o("AdsAdgroupDraftFragmentHelpers").removeAdgroupRedundantFields(
          i,
          l,
        );
      return o(
        "AdsDraftFragmentStoreStateApplyChangesMutators",
      ).applyChangesFromAdObjectsMutation(e, i, s);
    }
    function u(t, n, a, i) {
      return function (l, u) {
        if (
          (u && u.type === o("AdsPEPrefetchedIDsActionFlux").actionType) ||
          o("AdsEditorActionUtils").isNotAMEditorAction(u) ||
          !o("AdsUEditorUtils").shouldHostHandleAction(
            u,
            r("AdsUEditorHostIDs").EDITING,
          ) ||
          (u.adsApplicationID != null &&
            u.adsApplicationID !== l.adsApplicationID)
        )
          return l;
        o("QPLDraftFragmentMutationLogger").markerStart();
        var c = l,
          d = (e || (e = r("QuickPerformanceLogger"))).currentTimestamp();
        if (
          ((c = t(c, u)),
          a != null &&
            n != null &&
            (c = s(c, u, function (e, t) {
              return a(n(e, t), t);
            })),
          (c = i(c, u)),
          l !== c)
        ) {
          var m;
          (r("QPLSharing").emitPoint("DRAFT_SYNC", "MUTATE_ADGROUP_START", {
            timestamp: d,
            data: {
              string: {
                ad_object_level: "ad",
                action:
                  (m = u == null ? void 0 : u.actionType) != null
                    ? m
                    : "UNKNOWN",
              },
            },
          }),
            r("QPLSharing").emitPoint("DRAFT_SYNC", "MUTATE_ADGROUP_END"));
        } else o("QPLDraftFragmentMutationLogger").markerDropIfEmpty();
        return c;
      };
    }
    l.default = u;
  },
  98,
);
