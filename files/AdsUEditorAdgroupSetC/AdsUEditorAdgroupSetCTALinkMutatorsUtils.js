__d(
  "AdsUEditorAdgroupSetCTALinkMutatorsUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsEditorPostEditMode",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorCallToActionMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.adgroup,
          n = t.appDestination,
          a = t.appLink,
          i = t.callToActionType,
          l = t.externalLink,
          p = t.postEditMode,
          _ = t.specPlugin,
          f = e;
        return (
          o("AdsAssetFeedUtils").hasCarouselFormat(e) ||
            (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(f)
              ? ((f = u(f, i)), (f = c(f, l, a)), (f = d(f)))
              : p === r("AdsEditorPostEditMode").INLINE ||
                  p === r("AdsEditorPostEditMode").USE_INSTAGRAM_LIVE_VIDEO
                ? ((f = r("AdsAdgroupSemanticFields").linkURL.set(_, f, l)),
                  (f = o(
                    "AdsUEditorCallToActionMutators",
                  ).setCallToActionValueField(f, _, "link", l)),
                  (f = o("AdsUEditorCallToActionMutators").setCallToActionType(
                    f,
                    i,
                    _,
                  )),
                  a != null
                    ? (f = o(
                        "AdsUEditorCallToActionMutators",
                      ).setCallToActionValueAppLink(f, _, a))
                    : (f = o(
                        "AdsUEditorCallToActionMutators",
                      ).deleteCallToActionValueAppLink(f, _)))
                : p === r("AdsEditorPostEditMode").EXISTING &&
                  ((f = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.value.link.set(l, f)),
                  (f = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.type.set(i, f)),
                  a != null
                    ? (f = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.app_link.set(a, f))
                    : (f = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.call_to_action.value.app_link.delete(f))),
            n != null &&
              (p === r("AdsEditorPostEditMode").EXISTING
                ? (f = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.value.app_destination.set(n, f))
                : (f = o(
                    "AdsUEditorCallToActionMutators",
                  ).setCallToActionValueAppDestination(f, _, n))),
            i === "WATCH_LIVE_VIDEO" &&
              ((f = m(f, n, a, i, l)),
              (f = s({
                adgroup: f,
                appDestination: n,
                appLink: a,
                callToActionType: i,
                externalLink: l,
              })))),
          f
        );
      },
      s = function (t) {
        var e = t.adgroup,
          n = t.appDestination,
          o = t.appLink,
          a = t.callToActionType,
          i = t.externalLink,
          l = r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
            a,
            e,
          );
        return (
          n != null &&
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.app_destination.set(n, l)),
          o != null &&
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.app_link.set(o, l)),
          i != null &&
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.call_to_action.value.link.set(i, l)),
          l
        );
      },
      u = function (t, n) {
        var e = r("immutable").List().setIn(["0", "type"], n),
          o = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_action_types.set(
            r("immutable").List([n]),
            t,
          );
        return (
          (o = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_actions.set(e, o)),
          o
        );
      },
      c = function (t, n, a) {
        var e,
          i,
          l = t;
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.delete(l);
        var s =
          (e = l.creative) == null || (e = e.asset_feed_spec) == null
            ? void 0
            : e.asset_customization_rules;
        if (s == null) return l;
        var u = [];
        s.forEach(function (e) {
          var n = o(
              "AdsPlacementAssetTargetingRuleUtils",
            ).convertTargetingRuleToPlacementList(e),
            r = o(
              "AdsUEditorAdgroupUrlMutators",
            ).getLinkUrlLabelOfTargetRuleHavingPlacementList(t, n);
          r != null && u.push({ name: r });
        });
        var c = r("immutable").fromJS([
          ((i = {}),
          (i.website_url = n),
          (i.display_url = ""),
          (i.adlabels = r("immutable").List(u)),
          (i.deeplink_url = a != null ? a : ""),
          i),
        ]);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(c, t);
      },
      d = function (t) {
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.ad_formats.set(
          r("immutable").List.of("AUTOMATIC_FORMAT"),
          t,
        );
      },
      m = function (t, n, o, a, i) {
        var e = t;
        return (
          (e = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.type.set(a, e)),
          n != null &&
            (e = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.value.app_destination.set(
              n,
              e,
            )),
          o != null &&
            (e = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.value.app_link.set(
              o,
              e,
            )),
          (e = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.link.set(
            i,
            e,
          )),
          (e = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(i, e)),
          e
        );
      };
    ((l.setCTAAppLinkAndExternalLink = e), (l.updateCreativeCallToAction = s));
  },
  98,
);
