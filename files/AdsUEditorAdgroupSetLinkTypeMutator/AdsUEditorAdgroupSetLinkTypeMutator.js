__d(
  "AdsUEditorAdgroupSetLinkTypeMutator",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAppProductPageIdsMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupWebToWhatsappDefaultedAction",
    "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
    "AdsUEditorHostIDs",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorWebToAppMutators",
    "Promise",
    "WebToWhatsappUtils",
    "WebToXDefaultingUtils",
    "WebToXFeatureGating",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, a, i) {
      a === void 0 && (a = !0);
      var l = e.withMutations(function (e) {
        return e.deleteIn(
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .CALL_TO_ACTION.VALUE.LINK,
        );
      });
      return (
        n &&
          !r("AdsAppUtils").isAppObjective(i) &&
          (l = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, l, function (e) {
            return e.deleteIn(["call_to_action", "value"]);
          })),
        a
          ? l.withMutations(function (e) {
              return e.deleteIn(
                r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                  .LINK,
              );
            })
          : l
      );
    }
    function u(e, t, n) {
      if (!t) return e;
      var r = n ? m(e) : p(e);
      return ((r = y(r)), o("AdsDynamicAdsUtils").isDynamicAd(r) ? m(r) : r);
    }
    function c(e) {
      var t = m(e);
      return p(t);
    }
    function d(e) {
      var t = m(e);
      return p(t);
    }
    function m(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.template_url_spec.config.app_id.delete(e);
    }
    function p(e) {
      return o("AdsMutators").chain(
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_link.delete(
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.call_to_action.value.app_link.delete(
            e,
          );
        },
        function (e) {
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.value.app_link.delete(
            e,
          );
        },
      )(e);
    }
    function _(e, t, n) {
      var a;
      n === void 0 && (n = !0);
      var i = !!(
          (a = e.creative) != null &&
          (a = a.object_story_spec) != null &&
          a.link_data
        ),
        l = e;
      return (
        i &&
          (l = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .call_to_action.value.event_id.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
              .call_to_action.value.link.delete,
          )(l)),
        r("AdsAdgroupSemanticFields").eventID.isSupported(t, l) &&
        r("AdsAdgroupSemanticFields").linkURL.isSupported(t, l) &&
        r("AdsAdgroupSemanticFields").headline.isSupported(t, l)
          ? ((l = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").eventID.delete(t, e);
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").headline.delete(t, e);
              },
            )(l)),
            n ? r("AdsAdgroupSemanticFields").linkURL.delete(t, l) : l)
          : l
      );
    }
    function f(e, t, n) {
      return r("AdsAdgroupSemanticFields").linkURL.isSupported(t, e) &&
        r("AdsAdgroupSemanticFields").callToAction.isSupported(t, e) &&
        r("AdsAdgroupSemanticFields").headline.isSupported(t, e)
        ? o("AdsMutators").chain(
            function (e) {
              return n ? r("AdsAdgroupSemanticFields").linkURL.delete(t, e) : e;
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").callToAction.delete(t, e);
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").headline.delete(t, e);
            },
          )(e)
        : e;
    }
    function g(e, t, n, a) {
      a === void 0 && (a = !0);
      var i = e;
      if (
        (n &&
          (i = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, i, function (e) {
            return e.deleteIn(["call_to_action", "value"]);
          })),
        r("AdsAdgroupSemanticFields").callToActionValue.get(t, i) != null)
      ) {
        var l,
          s,
          u = r("AdsAdgroupSemanticFields").callToActionValue.get(t, i);
        ((u = (l = u) == null ? void 0 : l.delete("app_destination")),
          (u = (s = u) == null ? void 0 : s.delete("link")),
          (i = r("AdsAdgroupSemanticFields").callToActionValue.set(t, i, u)));
      }
      return a
        ? i.withMutations(function (e) {
            return e.deleteIn(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
            );
          })
        : i;
    }
    function h(e, t, n) {
      if (
        (n === void 0 && (n = !0),
        o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
      )
        return e;
      var a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.object_story_spec.video_data.call_to_action.value.movie_id.delete(
        e,
      );
      return n ? r("AdsAdgroupSemanticFields").linkURL.delete(t, a) : a;
    }
    function y(e) {
      return o(
        "AdsUEditorAdgroupAppProductPageIdsMutators",
      ).isAdgroupUsingOnlyAppProductPageId(
        r("adsConvertAdObjectRecordToPlainJS")(e),
      )
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.app_product_page_id.delete(e);
    }
    function C(e) {
      var t;
      return (t = r("AdsAdgroupRecordAccessors").creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.link_urls) == null ||
        (t = t.at(0)) == null ||
        (t = t.deeplink_url) == null
        ? void 0
        : t.delete(e);
    }
    function b(e) {
      var t = y(e);
      return (
        (t = C(t)),
        o("AdsUEditorWebToAppMutators").clearWebToAppFields(t)
      );
    }
    function v(e, t, n, r, a, i, l, c, d, m, p, f) {
      return o("AdsMutators").chain(
        function (e) {
          return h(e, l, m);
        },
        function (e) {
          return _(e, l, m);
        },
        function (e) {
          return s(e, l, i, m, c);
        },
        function (e) {
          return g(e, l, i, m);
        },
        function (e) {
          return o(
            "AdsUEditorUnifiedCreationAdgroupMutators",
          ).clearMessagingAppsFields(e, l, i, d, c, m, p, r.optimization_goal);
        },
        function (e) {
          return u(e, a, i);
        },
        function (e) {
          var a = o("AdsDynamicAdsUtils").isDynamicAd(e);
          return S(e, t, n, r, l, a ? f : null);
        },
      )(e);
    }
    function S(e, t, n, a, i, l) {
      var s = !1,
        u = r("AdsAdgroupSemanticFields").callToActionType.get(i, e);
      return (
        u instanceof o("immutable").Iterable && l == null && (s = !0),
        o("AdsMutators").chain(
          function (e) {
            return o("AdsDynamicAdsUtils").isDynamicAd(e)
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.template_url_spec.web.url.delete(e)
              : e;
          },
          function (e) {
            return o("AdsChildAttachmentsUtils").isCarouselAd(e)
              ? o(
                  "AdsUEditorAdgroupChildAttachmentsMutators",
                ).mutateChildAttachments(i, e, function (e) {
                  return e.setIn(
                    ["call_to_action", "type"],
                    l != null
                      ? l
                      : r("gkx")("14839")
                        ? "SEE_DETAILS"
                        : "LEARN_MORE",
                  );
                })
              : e;
          },
          function (e) {
            return s
              ? r("AdsAdgroupSemanticFields").callToActionType.set(
                  i,
                  e,
                  r("immutable").List([
                    r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                  ]),
                )
              : r("AdsAdgroupSemanticFields").callToActionType.set(
                  i,
                  e,
                  l != null
                    ? l
                    : r("gkx")("14839")
                      ? "SEE_DETAILS"
                      : "LEARN_MORE",
                );
          },
          function (e) {
            return R(e, t, i, n, a);
          },
        )(e)
      );
    }
    function R(t, a, l, s, u) {
      var c,
        d = o("WebToWhatsappUtils").isWebToXEligibleForSingleCreative(
          { campaign: u, campaignGroup: s, adgroup: t },
          l,
        );
      if (!d) return t;
      var m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.page_id.get(t),
        p = o("WebToXDefaultingUtils").enableBrowserAddOnDefaultingType(
          a,
          [t.id],
          s,
          u,
          t,
          r("AdsUEditorHostIDs").EDITING,
          m ? r("AdsPageStore").getLoadObject(m).getValue() : null,
          "page_selection_L1",
          u == null ||
            (c = u.toJS()) == null ||
            (c = c.targeting) == null ||
            (c = c.geo_locations) == null
            ? void 0
            : c.countries,
          u.optimization_goal,
        ).type;
      if (p === "whatsapp") {
        var _ = o(
          "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
        ).setWhatsAppWebsiteExtensionType(t);
        return (
          r("promiseDone")((e || (e = n("Promise"))).resolve({}), function () {
            r("AdsUEditorAdgroupWebToWhatsappDefaultedAction").dispatch(
              { adgroupIDs: [_.id], hostID: r("AdsUEditorHostIDs").EDITING },
              {
                line: "474",
                module: "AdsUEditorAdgroupSetLinkTypeMutator.js",
                moduleID: i.id,
              },
            );
          }),
          _
        );
      }
      return p === "messenger" &&
        s.objective === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
        o("WebToXFeatureGating").enableWTMDefaultingExpansion()
        ? o(
            "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
          ).setMessengerWebsiteExtensionType(t)
        : t;
    }
    ((l.clearPhoneCallLinkFields = s),
      (l.clearAppFields = u),
      (l.clearReminderAppFields = c),
      (l.clearAwarenessWithULFields = d),
      (l.clearEventLinkFields = _),
      (l.clearExternalLinkFields = f),
      (l.clearWhatsAppFields = g),
      (l.clearMovieLinkFields = h),
      (l.clearApplinkAndWebToAppFields = b),
      (l.setExternalLinkType = v));
  },
  98,
);
