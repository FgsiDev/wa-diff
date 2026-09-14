__d(
  "AdsUEditorAdgroupExistingPostCTACommonSelectors",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAppUtils",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsEmptyValue",
    "AdsExistingPostCTAProvider",
    "AdsExistingPostCTAUtils",
    "AdsExistingPostPreSelectSendMessageCTAProvider",
    "AdsExistingPostPreSelectedCTATypeProvider",
    "AdsExistingPostRemoveSmctaProvider",
    "AdsLoadObjectUtils",
    "AdsMessagingAdsMessengingPostsUpgradeCTAInDuplicationProvider",
    "AdsMessengerExistingPostPageWelcomeMessageDataProvider",
    "AdsPagePostProvider",
    "AdsPagePostUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupExistingPostCTACommonSelectorsUtils",
    "AdsUEditorAdgroupPageSelectors",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorSelectors",
    "AdsUniformValue",
    "AdsWhatsAppUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageCTXMDFeatureGating",
    "LoadObject",
    "MessengerAdsExistingPostCTASelectorEligibilityTypedStore",
    "URI",
    "WebToXFeatureGating",
    "ads-lib-urllib",
    "adsAdgroupMessageTypeSelector",
    "adsCallToActionGetFBGEOUrlPrefix",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsSimpleCreateSurfaceSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
    "adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector",
    "err",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = r("AdsPagePostProvider").toFluxSelector(),
      _ = r("AdsPagePostProvider").toFluxStore(),
      f = r("AdsExistingPostCTAProvider").toFluxSelector(),
      g = r("AdsExistingPostCTAProvider").toFluxStore(),
      h = r("AdsExistingPostPreSelectSendMessageCTAProvider").toFluxSelector(),
      y = r(
        "MessengerAdsExistingPostCTASelectorEligibilityTypedStore",
      ).fluxGetSelector(),
      C = r(
        "AdsMessengerExistingPostPageWelcomeMessageDataProvider",
      ).toFluxSelector(),
      b = r(
        "AdsMessagingAdsMessengingPostsUpgradeCTAInDuplicationProvider",
      ).toFluxSelector(),
      v =
        "The post associated with this ad is not available. It could be deleted, or you may not have permission to edit it. Select a different post or create a new ad.",
      S = (m = r("adsCreateSelector"))(
        [r("adsUEditorODAXTranslatedObjectivesForSelectedAdgroupsSelector")],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(
            t,
            r("AdsAPIObjectives").NONE,
          );
        },
        { name: i.id + ".objectiveSelector" },
      ),
      R = m(
        [
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.omnichannel_link_spec;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(t, null);
        },
        { name: i.id + ".omnichannelLinkSpecSelector" },
      ),
      L = r("adsCreateStoreSelector")(
        [g],
        function (t) {
          return g.getState().get(t);
        },
        { name: i.id + ".existingPostCTAStoreSelector" },
      ),
      E = m(
        [
          (c = o(
            "AdsUEditorAdgroupSelectors",
          )).adgroups.mapTransformPlainObject(
            (d = o("AdsAPIAdgroupRecordUtils")).getPagePostID,
          ),
          f,
        ],
        function (t, n) {
          return o(
            "AdsUEditorAdgroupExistingPostCTACommonSelectorsUtils",
          ).adgroupIDToExistingPostCTAValues(t, n);
        },
        { name: i.id + ".adgroupIDToExistingPostCTAValuesSelector" },
      ),
      k = m(
        [c.adgroups.mapTransformPlainObject(d.getInstagramPagePostID), f],
        function (t, n) {
          return o(
            "AdsUEditorAdgroupExistingPostCTACommonSelectorsUtils",
          ).adgroupIDToExistingPostCTAValues(t, n);
        },
        { name: i.id + ".adgroupIDToExistingInstagramPostCTAValuesSelector" },
      ),
      I = m(
        [
          c.adgroups.mapPlainObject(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.object_story_id;
          }),
        ],
        function (t) {
          return o(
            "AdsUEditorAdgroupExistingPostCTACommonSelectorsUtils",
          ).pagePostIDLogic(t);
        },
        { name: i.id + ".pagePostIDSelector" },
      ),
      T = r("adsCreateStoreSelector")(
        [_],
        function (t) {
          return _.getState().get(t);
        },
        { name: i.id + ".pagePostStoreSelector" },
      ),
      D = m(
        [T],
        function (t) {
          var e, n, a, l, s, u, c;
          if (t.hasError())
            return r("LoadObject").withError(r("err")(v), {
              creatorModuleID: i.id,
            });
          if (!t.hasValue())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var d = t.getValueEnforcing(),
            m =
              ((e = d.call_to_action) == null ? void 0 : e.type) || "NO_BUTTON",
            p =
              (n =
                (a = d.attachment_call_to_action) == null ? void 0 : a.type) !=
              null
                ? n
                : null,
            _ =
              o("AdsUEditorMessagingDestinationUtils").isCTXCTAType(m) &&
              !o("AdsUEditorMessagingDestinationUtils").isCTXCTAType(p),
            f =
              p != null &&
              p !== m &&
              (p === "NO_BUTTON" ||
                o("AdsUEditorMessagingDestinationUtils").isCTXCTAType(p) ||
                _) &&
              d.type === "video" &&
              r("justknobx")._("1637") &&
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCTXPostCTARelaxationEnabled()
                ? p
                : m,
            g = f === "NO_BUTTON" && r("justknobx")._("1637"),
            h = g
              ? null
              : (l = d.call_to_action) == null || (l = l.value) == null
                ? void 0
                : l.lead_gen_form_id,
            y = g
              ? ""
              : ((s = d.call_to_action) == null ? void 0 : s.value.link) || "",
            C = g
              ? null
              : (u = d.call_to_action) == null
                ? void 0
                : u.value.app_destination,
            b =
              (c = o("AdsWhatsAppUtils").getCTADefaultingObject(
                d.post_cta_defaulting,
              )) == null
                ? void 0
                : c.cta;
          return r("LoadObject").withValue(
            {
              postCTALeadGenFormID: h,
              postCTALink: y,
              postCTAType: f,
              postCTAAppDestination: C,
              postCTADefaulting: b,
            },
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".postCTAValuesSelector" },
      ),
      x = m(
        [c.adgroups.mapTransformPlainObject(d.getPagePostID), p],
        function (t, n) {
          return t.filter(Boolean).map(function (e) {
            return n.get(e);
          });
        },
        { name: i.id + ".adgroupIDsToPostLoadObjectSelector" },
      ),
      $ = m(
        [x],
        function (t) {
          return t.map(function (e) {
            return e.mapValue(function (e) {
              var t, n, r, o;
              return {
                postCTAType:
                  ((t = e.call_to_action) == null ? void 0 : t.type) ||
                  "NO_BUTTON",
                postCTALeadGenFormID:
                  (n = e.call_to_action) == null || (n = n.value) == null
                    ? void 0
                    : n.lead_gen_form_id,
                postCTALink:
                  ((r = e.call_to_action) == null || (r = r.value) == null
                    ? void 0
                    : r.link) || "",
                postAppLink:
                  ((o = e.call_to_action) == null || (o = o.value) == null
                    ? void 0
                    : o.app_link) || "",
              };
            });
          });
        },
        { name: i.id + ".adgroupIDsToPostCTAValuesSelector" },
      ),
      P = m(
        [T],
        function (t) {
          var e;
          if (t.hasError())
            return r("LoadObject").withError(r("err")(v), {
              creatorModuleID: i.id,
            });
          if (!t.hasValue())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var n = t.getValueEnforcing();
          return r("LoadObject").withValue(
            {
              postAttachmentType:
                ((e = n.attachments) == null ? void 0 : e.data[0].type) || "",
              postStatusType: n.status_type || "",
            },
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".postTypeSelector" },
      );
    function N(e) {
      return e == null
        ? void 0
        : e.mapValue(function (e) {
            var t;
            return {
              isLiveVideoPost:
                e.is_fb_live_videos === !0 || e.was_fb_live_videos === !0,
              postAttachmentType:
                ((t = e.attachments) == null || (t = t.data[0]) == null
                  ? void 0
                  : t.type) || "",
              postStatusType: e.status_type || "",
            };
          });
    }
    var M = m(
        [L, D],
        function (t, n) {
          return n.map(function (e) {
            var n = e.postCTALink,
              o = e.postCTAType,
              a,
              l;
            t && ((a = t.fieldCTA), (l = t.fieldLink));
            var s = l != null ? l : n,
              u = a || o;
            return r("LoadObject").withValue(
              { displayCTALink: s, displayCTAType: u },
              { creatorModuleID: i.id },
            );
          });
        },
        { name: i.id + ".displayCTAValuesSelector" },
      ),
      w = m(
        [E, $],
        function (t, n) {
          return n.map(function (e, n) {
            var o = t.get(n);
            return e.map(function (e) {
              var t = e.postCTALink,
                n = e.postCTAType,
                a,
                l;
              o && ((a = o.fieldCTA), (l = o.fieldLink));
              var s = l != null ? l : t,
                u = a || n;
              return r("LoadObject").withValue(
                { displayCTALink: s, displayCTAType: u },
                { creatorModuleID: i.id },
              );
            });
          });
        },
        { name: i.id + ".adgroupIDsToDisplayCTAValuesSelector" },
      ),
      A = m(
        [M, D, L],
        function (t, n, o) {
          return t.map(function (e) {
            var t = e.displayCTALink,
              a = e.displayCTAType;
            if (n.hasError())
              return r("LoadObject").withError(n.getErrorEnforcing(), {
                creatorModuleID: i.id,
              });
            if (n.isLoading() || (o && o.mutatingCTA))
              return r("LoadObject").loading({ creatorModuleID: i.id });
            var l = n.getValueEnforcing(),
              s = l.postCTAAppDestination,
              u = l.postCTADefaulting,
              c = l.postCTALeadGenFormID,
              d = l.postCTALink,
              m = l.postCTAType;
            return {
              displayCTALink: t,
              displayCTAType: a,
              postCTALeadGenFormID: c,
              postCTALink: d,
              postCTAType: m,
              postCTAAppDestination: s,
              postCTADefaulting: u,
            };
          });
        },
        { name: i.id + ".existingPostCTAObjectSelector" },
      ),
      F = m(
        [c.derivedPromotedObjectTypesMap],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(
            r("AdsUniformValue").create(Array.from(t.values())),
            null,
          );
        },
        { name: i.id + ".uniformCampaignPromotedObjectSelector" },
      ),
      O = m(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").destination_type.get,
          ),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(t, null);
        },
        { name: i.id + ".uniformDestinationTypeSelector" },
      ),
      B = m(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessor(
            r("AdsCampaignRecordAccessors").promoted_object.object_store_url
              .get,
          ),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValueOrDefault(t, null);
        },
        { name: i.id + ".uniformAppStoreURLSelector" },
      ),
      W = m(
        [w, $, E],
        function (t, n, r) {
          return o(
            "AdsUEditorAdgroupExistingPostCTACommonSelectorsUtils",
          ).adgroupIDsToExistingPostCTAObject(t, n, r);
        },
        { name: i.id + ".adgroupIDsToExistingPostCTAObjectSelector" },
      ),
      q = m(
        [k],
        function (t) {
          return t.map(function (e, t) {
            if (!e || e.mutatingCTA)
              return r("LoadObject").loading({ creatorModuleID: i.id });
            var n = e.fieldCTA || "NO_BUTTON",
              o = e.fieldLink || "";
            return r("LoadObject").withValue(
              { displayCTALink: o, displayCTAType: n },
              { creatorModuleID: i.id },
            );
          });
        },
        { name: i.id + ".callAdsExistingPostCTAObjectSelector" },
      ),
      U = r("adsCreateStoreSelector")(
        function (e) {
          return [].concat(I.getStores(e), A.getStores());
        },
        function (t) {
          var e = I(t),
            n = {
              postCTAType: r("AdsEmptyUniformMixedBulkValueTypes"),
              postCTAAppDestination: r("AdsEmptyUniformMixedBulkValueTypes"),
            },
            a = e.map(function (e) {
              if (!o("AdsPagePostUtils").isPostLoaded(e))
                return r("LoadObject").loading({ creatorModuleID: i.id });
              var t = A(e);
              return t.isLoading()
                ? r("LoadObject").loading({ creatorModuleID: i.id })
                : t.hasError()
                  ? t.getErrorEnforcing()
                  : t.getValueEnforcing();
            }),
            l = a.some(function (e) {
              r("LoadObject").loading({ creatorModuleID: i.id });
            });
          if (l) return r("LoadObject").loading({ creatorModuleID: i.id });
          var s = o("AdsBulkValueUtils").aggregateDeep(n, a),
            u = s.postCTAAppDestination,
            c = s.postCTAType;
          return r("LoadObject").withValue(
            { bulkPostCTAType: c, bulkPostCTAAppDestination: u },
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".existingPostCTABulkSelector" },
      ),
      V = m(
        [I, y],
        function (t, n) {
          return o(
            "AdsUEditorAdgroupExistingPostCTACommonSelectorsUtils",
          ).showPageWelcomeMessageBulkLogic(t, n);
        },
        { name: i.id + ".showPageWelcomeMesageBulkSelector" },
      ),
      H = m(
        [I, C],
        function (t, n) {
          var e = t.map(function (e) {
            var t = o(
              "AdsExistingPostCTAUtils",
            ).maybeGetPostIDFromObjectStoryID(e);
            if (r("isFalsey")(t)) return null;
            var a = n.get(t);
            if (a.hasValue()) return a.getValueEnforcing();
          });
          return e[0];
        },
        { name: i.id + ".pageWelcomeMesageSelector" },
      );
    function G(e, t, n, a, i, l, s, u) {
      var c = o("AdsBulkValueUtils").getValueOrMixed_DEPRECATED(t);
      return l && (c == null || c === "NO_BUTTON")
        ? new (r("AdsUniformValue"))("SHOP_NOW")
        : (n === r("AdsPromotedObjectTypes").MESSENGER ||
              n === r("AdsPromotedObjectTypes").WHATSAPP ||
              n === r("AdsPromotedObjectTypes").INSTAGRAM ||
              (a &&
                !o("WebToXFeatureGating").enableMultiPhotoWebCTAExpansion(
                  a,
                  s,
                  e,
                  u == null ? void 0 : u.account_id,
                ))) &&
            c !== o("AdsBulkValueUtils").MIXED_VALUE &&
            c !== "NO_BUTTON"
          ? new (r("AdsUniformValue"))("NO_BUTTON")
          : c === o("AdsBulkValueUtils").MIXED_VALUE || c === "NO_BUTTON"
            ? n === r("AdsPromotedObjectTypes").MESSENGER
              ? new (r("AdsUniformValue"))("MESSAGE_PAGE")
              : n === r("AdsPromotedObjectTypes").WHATSAPP
                ? new (r("AdsUniformValue"))("WHATSAPP_MESSAGE")
                : n === r("AdsPromotedObjectTypes").INSTAGRAM
                  ? new (r("AdsUniformValue"))("INSTAGRAM_MESSAGE")
                  : n === r("AdsPromotedObjectTypes").PHONE_CALL
                    ? new (r("AdsUniformValue"))("CALL_NOW")
                    : a || i
                      ? new (r("AdsUniformValue"))("MESSAGE_PAGE")
                      : new (r("AdsUniformValue"))(
                          r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                        )
            : t;
    }
    function z(e, t, n, a, i) {
      var l = t;
      return (
        (e === r("AdsAPIObjectives").APP_INSTALLS ||
          r("AdsAppUtils").isAppEngagementObjective(e, n)) &&
          a != null &&
          !o("AdsBulkValueUtils").getValueOrMixed_DEPRECATED(l) &&
          (l = new (r("AdsUniformValue"))(a)),
        o("AdsAPICampaignRecordUtils").isWebAndAppPromotedObjectType(e, n) &&
          (l = new (r("AdsUniformValue"))(i)),
        l instanceof r("AdsEmptyValue")
          ? new (r("AdsUniformValue"))(void 0)
          : o("AdsBulkValueUtils").aggregate(
              l.getValues().filter(function (e) {
                return !!e;
              }),
            )
      );
    }
    function j(t, n, a, l, s, u, c, d, m, p, _, f, g) {
      var h,
        y,
        C = [],
        b = {
          displayCTALink: (y = r("AdsEmptyUniformMixedBulkValueTypes")),
          displayCTAType: y,
          postCTALeadGenFormID: y,
          postCTALink: y,
          postCTAType: y,
          postCTADefaulting: y,
        },
        v = !1,
        S = !1;
      for (var R of t) {
        if (!o("AdsPagePostUtils").isPostLoaded(R))
          return r("LoadObject").loading({ creatorModuleID: i.id });
        var L = n(R);
        if (L.isLoading())
          return r("LoadObject").loading({ creatorModuleID: i.id });
        if (L.hasError())
          return r("LoadObject").withError(L.getErrorEnforcing(), {
            creatorModuleID: i.id,
          });
        if ((C.push(L.getValueEnforcing()), !S)) {
          var E = a(R);
          if (E.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var k = E.getValueEnforcing();
          S = k.postAttachmentType === "album";
        }
        if (!v) {
          var I = a(R);
          if (I.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var T = I.getValueEnforcing();
          v = T.postAttachmentType === "new_album";
        }
      }
      var D = o("AdsBulkValueUtils").aggregateDeep(b, C),
        x = D.displayCTALink,
        $ = D.displayCTAType,
        P = D.postCTADefaulting,
        N = D.postCTALeadGenFormID,
        M = D.postCTALink,
        w = D.postCTAType,
        A = o("AdsBulkValueUtils").getValueOrMixed_DEPRECATED($),
        F = G(l, $, s, S, v, u, c, d),
        O = p == null || (h = p.web) == null ? void 0 : h.url,
        B = z(l, x, s, m, O),
        W = o("AdsBulkValueUtils").getUniformValueOrDefault(
          B,
          o("AdsBulkValueUtils").MIXED_VALUE,
        ),
        q =
          A === "GET_DIRECTIONS" &&
          W != null &&
          W !== o("AdsBulkValueUtils").MIXED_VALUE &&
          W.startsWith(r("adsCallToActionGetFBGEOUrlPrefix")()),
        U =
          A !== "GET_DIRECTIONS" &&
          W != null &&
          W !== o("AdsBulkValueUtils").MIXED_VALUE &&
          r("ads-lib-urllib").isUrl(W) &&
          (e || (e = r("URI"))).isValidURI(r("ads-lib-urllib").normalize(W)),
        V = W !== o("AdsBulkValueUtils").MIXED_VALUE && !(q || U),
        H =
          f.isInExistingPostRemoveSmctaFlow ||
          t.some(function (e) {
            return f.postIDsInRemoveSmctaFlow.has(e);
          }),
        j = t.some(function (e) {
          return _.has(e);
        }),
        K = j
          ? t.some(function (e) {
              return _.get(e);
            })
          : null,
        Q =
          g != null
            ? t.reduce(function (e, t) {
                var n;
                return (n = g.get(t)) != null ? n : e;
              }, null)
            : null;
      return r("LoadObject").withValue(
        {
          bulkDisplayCTALink: B,
          bulkDisplayCTAType: F,
          bulkPostCTALeadGenFormID: N,
          bulkPostCTALink: M,
          bulkPostCTAType: w,
          bulkPostCTADefaulting: P,
          hasDisplayCTALinkError: V,
          isCTAPreSelected: K,
          isInExistingPostRemoveSmctaFlow: H,
          objective: l,
          pagePostIDs: t,
          preSelectedCTAType: Q,
          showCTAMultiPhoto: S,
          showCTAAlbum: v,
        },
        { creatorModuleID: i.id },
      );
    }
    var K = m(
        [
          I,
          (s = r("adsCreateDynamicSelector"))(A),
          s(P),
          S,
          F,
          o("adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors")
            .adsUEditorCampaignIsAllShopsAdsIncentiveProgramSelector,
          O,
          (u = r("adsUEditorAccountSelector")),
          B,
          R,
          h,
          r("AdsExistingPostRemoveSmctaProvider").toFluxSelector(),
          r("AdsExistingPostPreSelectedCTATypeProvider").toFluxSelector(),
        ],
        function (t, n, r, o, a, i, l, s, u, c, d, m, p) {
          return j(t, n, r, o, a, i, l, s, u, c, d, m, p);
        },
        { name: i.id + ".existingPostCTABulkObjectSelector" },
      ),
      Q = m(
        [
          s(A),
          s(P),
          S,
          F,
          o("adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors")
            .adsUEditorCampaignIsAllShopsAdsIncentiveProgramSelector,
          O,
          u,
          B,
          R,
          h,
          r("AdsExistingPostRemoveSmctaProvider").toFluxSelector(),
        ],
        function (t, n, r, o, a, i, l, s, u, c, d) {
          return function (e) {
            return j([e], t, n, r, o, a, i, l, s, u, c, d);
          };
        },
        { name: i.id + ".selectedPostCTABulkObjectSelector" },
      ),
      X = m(
        [K, o("adsAdgroupMessageTypeSelector").adsAdgroupMessageTypeSelector],
        function (t, n) {
          return Y(t, n);
        },
        { name: i.id + ".existingPostDisplayCTATypeSelector" },
      );
    function Y(e, t) {
      var n,
        a =
          e == null || (n = e.getValue()) == null ? void 0 : n.bulkPostCTAType,
        i = r("isTruthy")(a) ? o("AdsBulkValueUtils").getUniformValue(a) : null;
      if (r("isTruthy")(t)) {
        var l =
          t === "MESSAGE_PAGE" ||
          t === "WHATSAPP_MESSAGE" ||
          t === "INSTAGRAM_MESSAGE";
        return i != null &&
          l &&
          !o("AdsUEditorMessagingDestinationUtils").isCTXCTAType(i)
          ? i
          : t;
      }
      return i;
    }
    var J = m(
        [o("AdsUEditorAdgroupPageSelectors").adgroupIDsToPageLoadObjects],
        function (t) {
          return t.map(function (e) {
            return e.mapValue(function (e) {
              return e == null ? void 0 : e.can_viewer_advertise_with_posts;
            });
          });
        },
        { name: i.id + ".adgroupIDsToHasMutateCTAPermissionSelector" },
      ),
      Z = m(
        [s(A), s(T), J, y],
        function (t, n, a, l) {
          return function (e, s) {
            if (e == null || r("isFalsey")(e))
              return r("LoadObject").withError(
                r("err")("Error loading post/page"),
                { creatorModuleID: i.id },
              );
            var u = o("AdsPagePostUtils").getPostIdFromPagePostId_BROKEN(e);
            if (u == null || u === "" || !o("AdsPagePostUtils").isPostLoaded(e))
              return r("LoadObject").loading({ creatorModuleID: i.id });
            var c = t(e),
              d = N(n(e)),
              m = a.get(s);
            if (!c || !d || !m || c.hasError() || d.hasError() || m.hasError())
              return r("LoadObject").withError(
                r("err")("Error loading post/page"),
                { creatorModuleID: i.id },
              );
            if (o("AdsLoadObjectUtils").anyLoadingOrEmpty([c, d, m]))
              return r("LoadObject").loading({ creatorModuleID: i.id });
            var p = c.getValueEnforcing(),
              _ = p.postCTAType,
              f = d.getValueEnforcing(),
              g = m.getValueEnforcing(),
              h = l({ postID: u, currentAdgroupID: s });
            if (!h || h.hasError())
              return r("LoadObject").withError(
                r("err")("Error loading post/page"),
                { creatorModuleID: i.id },
              );
            if (h.isLoading() || !h.hasValue())
              return r("LoadObject").loading({ creatorModuleID: i.id });
            var y = h.getValueEnforcing();
            return r("LoadObject").withValue(
              babelHelpers.extends({ postCTAType: _ }, f, {
                isEligibleForExistingPostCTASelector: y,
                hasMutateCTAPermission: r("isTruthy")(g),
              }),
              { creatorModuleID: i.id },
            );
          };
        },
        { name: i.id + ".selectedPostVisibilityExtraDataSelector" },
      ),
      ee = m(
        [
          c.adgroups.mapTransformPlainObject(d.getPagePostID),
          Z,
          r("adsSimpleCreateSurfaceSelector"),
        ],
        function (t, n, r) {
          return t.map(function (e, t) {
            return n(e, t).mapValue(function (e) {
              return babelHelpers.extends({}, e, {
                isAdsSimpleCreateSurface: r,
              });
            });
          });
        },
        { name: i.id + ".adgroupIDsToVisibilityExtraDataSelector" },
      ),
      te = m(
        [I, u],
        function (t, n) {
          var e,
            a = o(
              "ClickToMessageAdoptionPerformanceLongTermHoldout",
            ).isAccountInEpdJurisdiction();
          if (a || t == null || t.length !== 1)
            return r("LoadObject").withValue(
              { showInThreadMultiphotoCarousel: !1 },
              { creatorModuleID: i.id },
            );
          var l = T(t[0]);
          if (l.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var s = l.hasValueWithoutError() ? l.getValue() : null;
          if (s == null)
            return r("LoadObject").withValue(
              { showInThreadMultiphotoCarousel: !1 },
              { creatorModuleID: i.id },
            );
          var u = s.object_id,
            c = (e = s.attachments) == null ? void 0 : e.data;
          if (c == null)
            return r("LoadObject").withValue(
              { postID: u, showInThreadMultiphotoCarousel: !1 },
              { creatorModuleID: i.id },
            );
          var d = c.reduce(function (e, t) {
            var n;
            if (t.media_type !== "album") return e;
            var r = (n = t.subattachments) == null ? void 0 : n.data;
            return r
              ? e.concat(
                  r.reduce(function (e, t) {
                    var n,
                      r =
                        (n = t.media) == null || (n = n.image) == null
                          ? void 0
                          : n.src;
                    return (
                      t.type === "photo" && r != null && r !== "" && e.push(r),
                      e
                    );
                  }, []),
                )
              : e;
          }, []);
          return r("LoadObject").withValue(
            {
              imageSrcs: d,
              postID: u,
              showInThreadMultiphotoCarousel: d.length > 1,
            },
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".inThreadMultiphotoCarouselSourceSelector" },
      ),
      ne = m(
        [I, b],
        function (t, n) {
          var e = t.map(function (e) {
            var t = n.get(e);
            if (t.hasValue()) {
              var r;
              return (r = t.getValueEnforcing()) != null ? r : !1;
            }
            return !1;
          });
          return o("AdsBulkValueUtils").aggregate(e);
        },
        { name: i.id + ".postIsUpgradeCTASelector" },
      ),
      re = m(
        [I, u],
        function (t, n) {
          var e = o(
            "ClickToMessageAdoptionPerformanceLongTermHoldout",
          ).isAccountInEpdJurisdiction();
          if (e || t == null || t.length !== 1)
            return r("LoadObject").withValue(
              { isEnabled: !1 },
              { creatorModuleID: i.id },
            );
          var a = T(t[0]);
          if (a.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var l = a.hasValueWithoutError() ? a.getValue() : null;
          if (l == null)
            return r("LoadObject").withValue(
              { isEnabled: !1 },
              { creatorModuleID: i.id },
            );
          var s = l.object_id;
          return r("LoadObject").withValue(
            { isEnabled: !0, postID: s },
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".inThreadCarouselSourceSelector" },
      );
    ((l.pagePostIDSelector = I),
      (l.postCTAValuesSelector = D),
      (l.adgroupIDsToPostLoadObjectSelector = x),
      (l.adgroupIDsToPostCTAValuesSelector = $),
      (l.adgroupIDsToDisplayCTAValuesSelector = w),
      (l.uniformCampaignPromotedObjectSelector = F),
      (l.adgroupIDsToExistingPostCTAObjectSelector = W),
      (l.callAdsExistingPostCTAObjectSelector = q),
      (l.existingPostCTABulkSelector = U),
      (l.showPageWelcomeMesageBulkSelector = V),
      (l.pageWelcomeMesageSelector = H),
      (l.existingPostCTABulkObjectSelector = K),
      (l.selectedPostCTABulkObjectSelector = Q),
      (l.existingPostDisplayCTATypeSelector = X),
      (l.existingPostDisplayCTAType = Y),
      (l.selectedPostVisibilityExtraDataSelector = Z),
      (l.adgroupIDsToVisibilityExtraDataSelector = ee),
      (l.inThreadMultiphotoCarouselSourceSelector = te),
      (l.postIsUpgradeCTASelector = ne),
      (l.inThreadCarouselSourceSelector = re));
  },
  98,
);
