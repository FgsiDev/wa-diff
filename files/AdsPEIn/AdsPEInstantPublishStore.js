__d(
  "AdsPEInstantPublishStore",
  [
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsDraftDraftSyncCompletedDataActionFlux",
    "AdsDraftSelectionStore",
    "AdsInstantPublishUIStore",
    "AdsInterfacesLogger",
    "AdsManagerQPLUserFlowLogger",
    "AdsPEAdgroupLiveSelectors",
    "AdsPEBatchInstantPublishActionFlux",
    "AdsPECampaignGroupLiveSelectors",
    "AdsPECampaignLiveSelectors",
    "AdsPEDraftPublishSelectors",
    "AdsPEDraftSyncStore",
    "AdsPEInstantDeleteActionFlux",
    "AdsPEUpdateSelectionForPublishAction",
    "AdsPEUploadStore",
    "AdsPublishSourceTypes",
    "FBLogger",
    "FluxStore",
    "QPLUserFlow",
    "adsDraftPublishingPublishAction",
    "immutable",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        (s = r("qpl"))._(270220129, "8408"),
        s._(270210707, "2940"),
        s._(270215142, "1053"),
        s._(270218338, "7144"),
        s._(270206350, "1675"),
      ]);
    function c(e, t, n) {
      var r =
        e == null
          ? void 0
          : e.find(function (e) {
              e.ad_object_id != null && t.has(e.ad_object_id);
            });
      if (r != null) {
        var o = {
          error_code: String(r.code),
          error_subcode: String(r.error_subcode),
          message: r.error_user_msg,
          fbtrace_id: r.fbtrace_id,
          www_request_id: r.fbtrace_id,
        };
        n(o);
      }
      return r != null;
    }
    function d(e) {
      u.forEach(function (t) {
        o("AdsManagerQPLUserFlowLogger").isActiveFlow(t) &&
          o("AdsManagerQPLUserFlowLogger").forEachMarker(t, e);
      });
    }
    function m(e, t) {
      d(function (n, a, i) {
        var l,
          s,
          u = new Set(
            (l =
              (s = n.annotations) == null || (s = s.string_array) == null
                ? void 0
                : s.ad_object_ids) != null
              ? l
              : [],
          ),
          d = e
            .filter(function (e) {
              return u.has(e.objectID);
            })
            .map(function (e) {
              return e.fragmentID;
            })
            .toJS();
        (o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(
          i,
          { string_array: { fragment_ids: d } },
          { instanceKey: a },
        ),
          c(t, u, function (e) {
            return r("QPLUserFlow").endFailure(i, "DRAFT_SYNC_FAILED", {
              annotations: { string: e },
              instanceKey: a,
            });
          }));
      });
    }
    function p(e) {
      var t = {};
      return (
        e.forEach(function (e, n) {
          t["num_" + n + "_items"] = e;
        }),
        t
      );
    }
    var _ = (function (t) {
      function n() {
        return t.call(this, e || (e = r("AdsDataAtom"))) || this;
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.__getActionTypes = function () {
          return [
            o("AdsDraftDraftSyncCompletedDataActionFlux").actionType,
            o("AdsPEBatchInstantPublishActionFlux").actionType,
            o("AdsPEInstantDeleteActionFlux").actionType,
          ];
        }),
        (a.__getDependencyStores = function () {
          return [
            r("AdsAccountStore"),
            r("AdsAdgroupDraftFragmentStore"),
          ].concat(
            o("AdsPEAdgroupLiveSelectors").getByFieldsSelector.getStores(),
            [
              r("AdsCampaignDraftFragmentStore"),
              r("AdsCampaignGroupDraftFragmentStore"),
            ],
            o(
              "AdsPECampaignGroupLiveSelectors",
            ).getByFieldsSelector.getStores(),
            o("AdsPECampaignLiveSelectors").getByFieldsSelector.getStores(),
            [
              r("AdsDraftSelectionStore"),
              r("AdsInstantPublishUIStore"),
              r("AdsPEDraftSyncStore"),
              r("AdsPEUploadStore"),
            ],
          );
        }),
        (a.__onDispatch = function (t) {
          var e = t.action;
          this.getDispatcher().waitFor(this.getDependencyDispatchTokens());
          e: {
            var n = e;
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              "type" in n &&
              n.type === o("AdsPEInstantDeleteActionFlux").actionType
            ) {
              var r = n;
              this.$AdsPEInstantPublishStore$p_1(
                r.campaignGroupIDs,
                r.campaignIDs,
                r.adgroupIDs,
                r.eventSource,
              );
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              "type" in n &&
              n.type === o("AdsPEBatchInstantPublishActionFlux").actionType
            ) {
              var a = n;
              this.$AdsPEInstantPublishStore$p_1(
                a.campaignGroupIDs,
                a.campaignIDs,
                a.adgroupIDs,
                a.eventSource,
              );
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              "type" in n &&
              n.type ===
                o("AdsDraftDraftSyncCompletedDataActionFlux").actionType
            ) {
              var i = n;
              this.$AdsPEInstantPublishStore$p_2(i);
              break e;
            }
            return;
          }
        }),
        (a.$AdsPEInstantPublishStore$p_1 = function (t, n, o, a) {
          var e,
            i,
            l = r("AdsAccountStore").getSelectedAccountIDX(),
            s = r("AdsPEDraftSyncStore").hasItemsToSyncFor(l),
            u = r("AdsPEDraftSyncStore").getSyncActionSummary(l),
            c = r("AdsPEDraftSyncStore").isSyncing();
          d(function (e, t, n) {
            r("QPLUserFlow").addAnnotations(
              n,
              {
                string: { publish_source: a },
                int: p(u),
                bool: { has_sync_items: s, is_syncing: c },
              },
              { instanceKey: t },
            );
          });
          var m = (i = r("immutable")).Map(
            ((e = {}),
            (e.campaign = i.OrderedSet(t)),
            (e.ad_set = i.OrderedSet(n)),
            (e.ad = i.OrderedSet(o)),
            e),
          );
          !s && !c
            ? this.$AdsPEInstantPublishStore$p_3(m, a, !1)
            : u.has("BLANK_IGNORE") &&
              (u.size === 1
                ? this.$AdsPEInstantPublishStore$p_3(m, a, !1)
                : r("FBLogger")("ads_manager_instant_publishing").warn(
                    "Bailing out of instant publishing because there are %d sync items of type BLANK_IGNORE! This will likely cause the publish to never start because they will never get marked as not dirty",
                    u.get("BLANK_IGNORE"),
                  ));
        }),
        (a.$AdsPEInstantPublishStore$p_2 = function (t) {
          var e = r("AdsInstantPublishUIStore").getState(),
            n = e.changedCampaignGroupIDs,
            o = e.changedCampaignIDs,
            a = e.changedAdgroupIDs;
          if (
            (d(function (e, t, i) {
              r("QPLUserFlow").addAnnotations(
                i,
                {
                  string: { publish_source: r("AdsPublishSourceTypes").TABLE },
                  int: {
                    changed_adgroup_ids: a.size,
                    changed_campaign_ids: o.size,
                    changed_campaign_group_ids: n.size,
                  },
                },
                { instanceKey: t },
              );
            }),
            !(!a.size && !n.size && !o.size))
          ) {
            var i = c(t.syncErrors, n.union(o).union(a), function (e) {}),
              l = r("AdsAccountStore").getSelectedAccountIDX(),
              s = r("AdsPEDraftSyncStore").hasItemsToSyncFor(l),
              u = r("AdsPEDraftSyncStore").getSyncActionSummary(l);
            if (
              (d(function (e, n, o) {
                r("QPLUserFlow").addAnnotations(
                  o,
                  {
                    string: {
                      publish_source: r("AdsPublishSourceTypes").TABLE,
                    },
                    int: p(u),
                    bool: {
                      completed_and_published: t.completedAndPublished,
                      has_sync_items: s,
                    },
                  },
                  { instanceKey: n },
                );
              }),
              !(s && (u.size > 1 || !u.has("BLANK_IGNORE"))) &&
                t.completedAndPublished !== !0)
            ) {
              var m,
                _ = r("immutable").Map(
                  ((m = {}),
                  (m.campaign = n.toOrderedSet()),
                  (m.ad_set = o.toOrderedSet()),
                  (m.ad = a.toOrderedSet()),
                  m),
                );
              this.$AdsPEInstantPublishStore$p_3(
                _,
                r("AdsPublishSourceTypes").TABLE,
                i,
                t.syncErrors,
              );
            }
          }
        }),
        (a.$AdsPEInstantPublishStore$p_3 = function (n, a, l, s) {
          (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(function () {
            var e = r("AdsAccountStore").getSelectedAccountIDX();
            r("AdsPEUpdateSelectionForPublishAction").dispatch(
              { selection: n, eventSource: a },
              {
                line: "394",
                module: "AdsPEInstantPublishStore.js",
                moduleID: i.id,
              },
            );
            var t = r("AdsDraftSelectionStore").getCached(e);
            if (t.isDone()) {
              var u = o("AdsPEDraftPublishSelectors").allSelectedFragments();
              m(u, s);
              var c = o("AdsPEDraftPublishSelectors").allSelectedFragmentIDs();
              if (c.isEmpty()) {
                var d;
                r("AdsInterfacesLogger").log({
                  eventName: "publish_fragment_ids_empty",
                  data: ((d = {}), (d.prior_data = JSON.stringify(n)), d),
                });
              }
              r("adsDraftPublishingPublishAction")({
                draftID: t.getValueEnforcing(),
                ignoreErrors: !0,
                fragmentIDs: o(
                  "AdsPEDraftPublishSelectors",
                ).allSelectedFragmentIDs(),
                selection: r("AdsPEUploadStore").getSelection(),
                isFirstBlockingError: l,
              });
            }
          });
        }),
        n
      );
    })(r("FluxStore"));
    _.__moduleID = i.id;
    var f = new _();
    l.default = f;
  },
  98,
);
