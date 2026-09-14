__d(
  "AdsUEditorAdgroupSetEventReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsLinkTypeUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPromotableEventStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupEventMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetEventDataActionFlux",
    "adsUEditorAccountSelector",
    "isFalsey",
    "nullthrows",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getEventData: r("AdsPromotableEventStore").getForSelector,
          },
          function (e, t, n) {
            var a = t.adgroupIDs,
              i = t.eventURL,
              l = n.account,
              s = n.getEventData,
              u = n.parentData;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t = r("nullthrows")(u.get(e.id)),
                n = t.campaign,
                a = t.campaignGroup,
                c = t.specPlugin,
                d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  a.objective,
                  n,
                ),
                m = o("AdsODAXUtils").maybeTranslateObjective(
                  a.objective,
                  d,
                  null,
                );
              if (r("isFalsey")(i))
                return o("AdsUEditorAdgroupEventMutators").removeEventFields(
                  e,
                  c,
                );
              var p,
                _ = o("AdsLinkTypeUtils").getEventIDFromLink(i);
              if (_) {
                var f = s(l.account_id, _);
                o("AdsLoadStateUtils_LEGACY").isLoaded(f) && (p = f);
              }
              switch (m) {
                case r("AdsAPIObjectives").LINK_CLICKS:
                case r("AdsAPIObjectives").CONVERSIONS:
                  if (p) {
                    var g = r("qex")._("1593");
                    return o(
                      "AdsUEditorAdgroupEventMutators",
                    ).setCreativeFieldsFromEvent(e, p, c, i, g === !0);
                  }
                  break;
                case r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY:
                  if (p)
                    return o(
                      "AdsUEditorAdgroupEventMutators",
                    ).setCreativeFieldsFromEvent(e, p, c, i);
              }
              return o("AdsUEditorAdgroupEventMutators").setEventFields(
                e,
                p || null,
                i,
                c,
              );
            });
          },
          o("AdsUEditorAdgroupSetEventDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
