__d(
  "AdsUEditorAdgroupSetCagPostFieldsReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupExistingPostDerivedCTAValues",
    "AdsUEditorAdgroupMultiPostSpecUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCagPostFieldsDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = {};
            return (
              t.body !== void 0 && (n.body = t.body),
              t.title !== void 0 && (n.title = t.title),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var a,
                  i,
                  l =
                    (a = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).getCagPostByIdentity(
                      e,
                      t.groupIndex,
                      t.postIdentityKey,
                    )) == null
                      ? void 0
                      : a.call_to_action;
                if (t.callToActionType !== void 0) {
                  var s,
                    u = o(
                      "AdsUEditorAdgroupExistingPostDerivedCTAValues",
                    ).getDerivedCTAValues(t.callToActionType);
                  n.call_to_action = {
                    type: t.callToActionType,
                    value:
                      u != null
                        ? {
                            app_destination:
                              u == null ? void 0 : u.appDestination,
                            link: u == null ? void 0 : u.link,
                          }
                        : {
                            link:
                              l == null || (s = l.value) == null
                                ? void 0
                                : s.link,
                          },
                  };
                }
                t.callToActionLink !== void 0 &&
                  (n.call_to_action = babelHelpers.extends({}, l, {
                    value: babelHelpers.extends(
                      {},
                      l == null ? void 0 : l.value,
                      { link: t.callToActionLink },
                    ),
                  }));
                var c = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setCagPostFieldsByIdentityKey(
                    e,
                    t.groupIndex,
                    t.postIdentityKey,
                    n,
                  ),
                  d =
                    (i = c.creative_asset_groups_spec) == null ||
                    (i = i.toJS()) == null ||
                    (i = i.groups) == null ||
                    (i = i[t.groupIndex]) == null ||
                    (i = i.posts) == null
                      ? void 0
                      : i[0];
                return (
                  d != null &&
                    o(
                      "AdsUEditorAdgroupMultiPostSpecUtils",
                    ).getPostIdentityKeyFromCagPost(d) === t.postIdentityKey &&
                    (n.body !== void 0 &&
                      (c = r("AdsAdgroupRecordAccessors").creative.body.set(
                        n.body,
                        c,
                      )),
                    n.title !== void 0 &&
                      (c = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.existing_post_title.set(n.title, c))),
                  c
                );
              })
            );
          },
          r("AdsUEditorAdgroupSetCagPostFieldsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
