__d(
  "AdsUEditorAdgroupSetChildPlatformLinkReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsEmptyValue",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetChildPlatformLinkActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "FBLogger",
    "adsCallToActionGetDefaultCallToActionType",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
        campaign: t,
        campaignGroup: n,
      });
      return (
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        n.objective === r("AdsAPIObjectives").LINK_CLICKS &&
        a === r("AdsPromotedObjectTypes").MOBILE_APP
      );
    }
    function s(e, t) {
      var n = r("AdsAdgroupSemanticFields").linkURL.get(t, e);
      if (
        (n === void 0 && (n = r("immutable").List()),
        !(n instanceof r("immutable").List))
      )
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "this function must be invoked on an asset feed field",
        );
      return n;
    }
    var u = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (t, n, a) {
            var i = a.parentData,
              l = a.plugins;
            return o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t) {
              var a,
                u = n.android_url,
                c = n.childIndex,
                d = n.ios_url,
                m = r("nullthrows")(i.get(t.id)),
                p = m.campaign,
                _ = m.campaignGroup,
                f = r("nullthrows")(l.get(t.id)),
                g =
                  o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(t) ||
                  o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t);
              if (g) {
                var h,
                  y,
                  C = t,
                  b =
                    (h =
                      (y = p.promoted_object) == null
                        ? void 0
                        : y.object_store_urls) != null
                      ? h
                      : r("immutable").List();
                if (
                  ((C = r("AdsAdgroupRecordAccessors")
                    .creative.asset_feed_spec.link_urls.at(0)
                    .object_store_urls.set(b.toArray(), C)),
                  u != null &&
                    (C = r("AdsAdgroupRecordAccessors")
                      .creative.asset_feed_spec.link_urls.at(0)
                      .android_url.set(u, C)),
                  d != null &&
                    (C = r("AdsAdgroupRecordAccessors")
                      .creative.asset_feed_spec.link_urls.at(0)
                      .ios_url.set(d, C)),
                  u != null || d != null)
                ) {
                  var v = s(C, f).map(function (e) {
                    var t = e;
                    return (
                      u != null && (t = t.set("android_url", u)),
                      d != null && (t = t.set("ios_url", d)),
                      t
                    );
                  });
                  return r("AdsAdgroupSemanticFields").linkURL.set(f, t, v);
                } else return t;
              }
              if (c === -1) {
                if (e(t, p, _) && r("gkx")("7662")) {
                  var S = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.call_to_action.get(t),
                    R = t;
                  if (
                    (u != null &&
                      (R = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.android_url.set(u)(R)),
                    d != null &&
                      (R = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.ios_url.set(d)(R)),
                    (S == null ? void 0 : S.type) == null)
                  ) {
                    var L,
                      E =
                        (L = r("adsCallToActionGetDefaultCallToActionType")(
                          _.objective,
                          r("AdsPromotedObjectTypes").MOBILE_APP,
                        )) != null
                          ? L
                          : "LEARN_MORE";
                    R = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.call_to_action.type.set(E)(R);
                  }
                  return R;
                }
                var k = t;
                return (
                  u != null &&
                    (k = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueAndroidURL(k, f, u)),
                  d != null &&
                    (k = o(
                      "AdsUEditorCallToActionMutators",
                    ).setCallToActionValueIOSURL(k, f, d)),
                  k
                );
              }
              var I = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.link_data.child_attachments.get(t),
                T = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.child_attachments.get(
                  t,
                ),
                D = I == null || I instanceof r("AdsEmptyValue"),
                x = D ? T : I;
              return (
                (x =
                  (a = x) == null
                    ? void 0
                    : a.map(function (e, t) {
                        if (c !== t) return e;
                        var n = e,
                          o = r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION
                            .VALUE.path,
                          a = n.getIn(o);
                        return (
                          (!r("immutable").Iterable.isIterable(a) ||
                            a instanceof r("AdsEmptyValue")) &&
                            (n = n.setIn(o, r("immutable").Map())),
                          u != null &&
                            (n = n.setIn(
                              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION
                                .VALUE.ANDROID_URL,
                              u,
                            )),
                          d != null &&
                            (n = n.setIn(
                              r("AdsAPIChildAttachmentPaths").CALL_TO_ACTION
                                .VALUE.IOS_URL,
                              d,
                            )),
                          n
                        );
                      })),
                D
                  ? o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.template_data.child_attachments.set(
                        x,
                      ),
                    )(t)
                  : o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.child_attachments.set(
                        x,
                      ),
                    )(t)
              );
            });
          },
          r("AdsUEditorAdgroupSetChildPlatformLinkActionFlux").actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
