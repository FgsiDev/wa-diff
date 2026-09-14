__d(
  "AdsDraftFragmentStoreStateReducers",
  [
    "AdDraftFragmentValidationStatus",
    "AdsAPIDraftPublishStatusPaths",
    "AdsAccountListBatchLoadedDataActionFlux",
    "AdsAccountListPartialLoadDataActionFlux",
    "AdsAccountSelectDataActionFlux",
    "AdsAccountStore",
    "AdsAdPublishFrictionChallengeMitigatedActionFlux",
    "AdsApplicationUtils",
    "AdsDataAtom",
    "AdsDeletePostCTADataActionFlux",
    "AdsDraftDraftCloseDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadErrorDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftDiscardedDataActionFlux",
    "AdsDraftDraftDiscardedNotificationActionFlux",
    "AdsDraftDraftFragmentBatchCreateErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchCreatedDataActionFlux",
    "AdsDraftDraftFragmentBatchDeleteErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchDeletedDataActionFlux",
    "AdsDraftDraftFragmentBatchLoadedDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdatedDataActionFlux",
    "AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux",
    "AdsDraftDraftFragmentListBatchLoadedDataActionFlux",
    "AdsDraftDraftFragmentListLoadedDataActionFlux",
    "AdsDraftDraftFragmentListPartialLoadDataActionFlux",
    "AdsDraftDraftFragmentTooManyFragmentsInDraftDataActionFlux",
    "AdsDraftDraftFragmentUpdatePackageConfigDataActionFlux",
    "AdsDraftDraftPublishDataActionFlux",
    "AdsDraftDraftPublishInProgressDataActionFlux",
    "AdsDraftDraftSetCurrentDraftErrorDataActionFlux",
    "AdsDraftDraftSetCurrentDraftSuccessDataActionFlux",
    "AdsDraftDraftSyncRequestSentDataActionFlux",
    "AdsDraftForceDraftSyncDataActionFlux",
    "AdsDraftFragmentListStore",
    "AdsDraftFragmentStore",
    "AdsDraftFragmentStoreStateDeleteRevertMutators",
    "AdsDraftFragmentStoreStateInitDraftMutators",
    "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
    "AdsDraftFragmentStoreStateUtils",
    "AdsDraftSelectionStore",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsLoadState_LEGACY",
    "AdsMutatePostCTADataActionFlux",
    "AdsNewIDs",
    "AdsPageSignLeadgenTosSuccessDataActionFlux",
    "AdsPromotablePagePermissionsUpdatedActionFlux",
    "AdsVideoEncodingSuccessDataActionFlux",
    "AdsVideoUploadSuccessDataActionFlux",
    "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
    "adsDraftIsRecoverableError",
    "getByPath",
    "immutable",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      (e || (e = r("AdsDataAtom"))).waitFor([
        r("AdsDraftSelectionStore").getDispatchToken(),
      ]);
      var n = t,
        o = r("AdsAccountStore").getSelectedAccountID();
      if (!o) return n;
      var a = r("AdsDraftSelectionStore").getCached(o),
        i = a.hasError();
      return (i !== n.draftHasError && (n = n.set("draftHasError", i)), n);
    }
    function c(e) {
      return e
        .set("loadState", r("AdsLoadState_LEGACY").ERROR)
        .set("isLoading", !1);
    }
    function d(t) {
      return (
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsDraftSelectionStore").getDispatchToken(),
          r("AdsDraftFragmentListStore").getDispatchToken(),
          r("AdsDraftFragmentStore").getDispatchToken(),
        ]),
        o("AdsApplicationUtils").isCreativeStudio()
          ? t
          : o("AdsDraftFragmentStoreStateInitDraftMutators").initDraft(t)
      );
    }
    function m(e, t) {
      var n = t.data.changedParamKeys;
      return n.act || n.business_id ? d(e) : e;
    }
    function p(e) {
      return o("AdsApplicationUtils").isPowerEditor() ? e : d(e);
    }
    function _(e, t, n) {
      var r = e,
        a = r.dirtyIDs,
        i = o("AdsDraftFragmentStoreStateUtils").fragmentsMapWithMutations(
          r.fragments,
          function (e) {
            a = a.withMutations(function (r) {
              e.forEach(function (o, a) {
                var i = o.value;
                i &&
                  (t === i.draftID || !i.draftID) &&
                  (n == null || i.draftVersion !== n) &&
                  (e.delete(a), r.remove(a));
              });
            });
          },
        );
      return (
        (r.fragments !== i || r.dirtyIDs !== a) &&
          ((r = r.merge({ fragments: i, dirtyIDs: a })),
          (r = o(
            "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
          ).updateComputedValues(r))),
        r
      );
    }
    function f(t, n, o) {
      return (
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsDraftSelectionStore").getDispatchToken(),
          r("AdsDraftFragmentListStore").getDispatchToken(),
          r("AdsDraftFragmentStore").getDispatchToken(),
        ]),
        _(t, n, o)
      );
    }
    function g(e) {
      var t = e,
        n = t.fragments.immutableUpdate(
          t.fragments.value().map(function (e) {
            return e.map(function (e) {
              return e.set("publishStatus", null);
            });
          }),
        );
      return (n !== t.fragments && (t = t.set("fragments", n)), t);
    }
    function h(e, t) {
      var n = e;
      if (!t) return n;
      var r = t.flatten().toSet(),
        o = n.dirtyIDs.filter(function (e, t) {
          return !r.contains(t);
        });
      return (n.dirtyIDs !== o && (n = n.set("dirtyIDs", o)), n);
    }
    function y(e, t) {
      var n = t.isCurrentlyPublishing,
        r = t.selection,
        o = e;
      return ((o = h(o, r)), n || (o = g(o)), o);
    }
    function C(e, t) {
      return (e.lastSyncTime.mutate(Date.now()), e);
    }
    function b(e, t) {
      var n = t.fragmentIDs;
      return n == null
        ? e
        : o("AdsDraftFragmentStoreStateDeleteRevertMutators").deleteFragments(
            e,
            n,
          );
    }
    function v(e, t) {
      var n = e;
      if (!t.response) return n;
      var a = r("getByPath")(
          t.response,
          r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
          [],
        ),
        i = o("AdsDraftFragmentStoreStateUtils").fragmentsMapWithMutations(
          n.fragments,
          function (e) {
            a.forEach(function (t) {
              var r = o("AdsDraftFragmentStoreStateUtils").get(
                n,
                t.ad_object_id,
              );
              if (r && r.value) {
                var a = r.value.set("publishStatus", t.status);
                e.set(t.ad_object_id, r.setValue(a));
              }
            });
          },
        );
      return (i !== n.fragments && (n = n.set("fragments", i)), n);
    }
    function S(e, t) {
      var n = e,
        a = t.adCreationPackageConfig,
        i = t.adgroupIds,
        l = t.campaignGroupIds,
        u = t.campaignIds,
        c = [];
      switch (n.objectType) {
        case "campaign":
          c = l;
          break;
        case "ad_set":
          c = u;
          break;
        case "ad":
          c = i;
          break;
      }
      if ((s || (s = r("isEmpty")))(c)) return n;
      var d = o("AdsDraftFragmentStoreStateUtils").fragmentsMapWithMutations(
        n.fragments,
        function (e) {
          c.forEach(function (t) {
            var r = o("AdsDraftFragmentStoreStateUtils").get(n, t);
            if (r && r.value) {
              var i = r.value.set("adCreationPackageConfig", a);
              e.set(t, r.setValue(i));
            }
          });
        },
      );
      return (d !== n.fragments && (n = n.set("fragments", d)), n);
    }
    function R(e, t) {
      var n = o(
        "AdsDraftFragmentStoreStateUtils",
      ).getFragmentsInDraftWithValidationStatusFor(e, t);
      return k(e, {
        ids: n.map(function (e) {
          var t = e.objectID;
          return t;
        }),
      });
    }
    function L(t, n) {
      (e || (e = r("AdsDataAtom"))).waitFor([
        r("AdsDraftFragmentStore").getDispatchToken(),
      ]);
      var a = n.fragments,
        i = Array.isArray(a)
          ? a.map(function (e) {
              return e.id;
            })
          : Array.from(a.keys());
      return o(
        "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
      ).updateFragments(t, i);
    }
    function E(e, t) {
      var n = e,
        a = r("immutable").Set(t.fragments.keys()),
        i = o("AdsDraftFragmentStoreStateUtils").fragmentsMapWithMutations(
          n.fragments,
          function (e) {
            e.forEach(function (r, i) {
              var l = r == null ? void 0 : r.value;
              if (!(!l || !a.has(l.fragmentID))) {
                var s =
                  !l.values ||
                  l.values.size === 0 ||
                  l.action === "add" ||
                  t.forceDelete;
                if (s) {
                  e.delete(i);
                  var u = n.dirtyIDs.remove(i);
                  n = n.set("dirtyIDs", u);
                } else
                  e.setIn(
                    [i, "value", "fragmentID"],
                    "" + o("AdsNewIDs").newNegativeID(),
                  );
              }
            });
          },
        );
      return n.fragments === i
        ? n
        : o(
            "AdsDraftFragmentStoreStateUpdateFragmentsMutators",
          ).updateComputedValues(n.set("fragments", i));
    }
    function k(e, t) {
      var n = t.ids;
      if (n.length === 0) return e;
      var r = e,
        o = [];
      if (
        (n.forEach(function (e) {
          r.fragments.value().get(e) && o.push(e);
        }),
        o.length > 0)
      ) {
        var a = Date.now(),
          i = r.dirtyIDs.withMutations(function (e) {
            o.forEach(function (t) {
              return e.set(t, a);
            });
          });
        r = r.merge({ dirtyIDs: i });
      }
      return r;
    }
    function I(e, t) {
      if (t.errors.size === 0) return e;
      var n = e.dirtyIDs.withMutations(function (e) {
        t.errors.forEach(function (t) {
          var n = t.ad_object_id;
          r("adsDraftIsRecoverableError")(t) || n == null || e.delete(n);
        });
      });
      return e.set("dirtyIDs", n);
    }
    function T(e, t) {
      return t ? k(e, { ids: t }) : e;
    }
    function D(e, t, n) {
      return t && n ? k(e, { ids: t }) : e;
    }
    function x(t, n) {
      var a = n.action,
        i = t;
      if (a.adsApplicationID && a.adsApplicationID !== i.adsApplicationID)
        return i;
      switch (a.type) {
        case o("AdsDraftDraftCurrentDraftLoadErrorDataActionFlux").actionType:
        case o("AdsDraftDraftSetCurrentDraftErrorDataActionFlux").actionType:
          i = u(i);
          break;
        case o("AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux")
          .actionType:
          ((i = u(i)), (i = c(i)));
          break;
        case o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType:
          i = m(i, a);
          break;
        case o("AdsAccountSelectDataActionFlux").actionType:
          i = p(i);
          break;
        case o("AdsAccountListBatchLoadedDataActionFlux").actionType:
        case o("AdsAccountListPartialLoadDataActionFlux").actionType:
        case o("AdsDraftDraftFragmentListBatchLoadedDataActionFlux").actionType:
        case o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux").actionType:
        case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType:
        case o("AdsDraftDraftFragmentListLoadedDataActionFlux").actionType:
          i = d(i);
          break;
        case o("AdsDraftDraftDiscardedDataActionFlux").actionType:
          i = f(i, a.draftID);
          break;
        case o("AdsDraftDraftDiscardedNotificationActionFlux").actionType:
          i = f(i, a.draftID, a.draftVersion);
          break;
        case o("AdsDraftDraftPublishDataActionFlux").actionType:
          i = y(i, a);
          break;
        case o("AdsDraftDraftSyncRequestSentDataActionFlux").actionType:
          i = C(i, a);
          break;
        case o("AdsDraftDraftCloseDataActionFlux").actionType:
        case o("AdsDraftDraftFragmentTooManyFragmentsInDraftDataActionFlux")
          .actionType:
          i = b(i, a);
          break;
        case o("AdsDraftDraftPublishInProgressDataActionFlux").actionType:
          i = v(i, a);
          break;
        case o("AdsDraftDraftFragmentUpdatePackageConfigDataActionFlux")
          .actionType:
          i = S(i, a);
          break;
        case o("AdsDraftDraftFragmentBatchCreatedDataActionFlux").actionType:
        case o("AdsDraftDraftFragmentBatchLoadedDataActionFlux").actionType:
        case o("AdsDraftDraftFragmentBatchUpdatedDataActionFlux").actionType:
        case o("AdsDraftDraftFragmentListPartialLoadDataActionFlux").actionType:
          i = L(i, a);
          break;
        case o("AdsDraftDraftFragmentBatchDeletedDataActionFlux").actionType:
          i = E(i, a);
          break;
        case o("AdsPageSignLeadgenTosSuccessDataActionFlux").actionType:
        case o("AdsDraftForceDraftSyncDataActionFlux").actionType:
          i = k(i, a);
          break;
        case r("AdsAdPublishFrictionChallengeMitigatedActionFlux").actionType:
          ((e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsDraftSelectionStore").getDispatchToken(),
            r("AdsDraftFragmentListStore").getDispatchToken(),
            r("AdsDraftFragmentStore").getDispatchToken(),
          ]),
            (i = R(i, [
              r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION,
              r("AdDraftFragmentValidationStatus").HAS_ERRORS,
              r("AdDraftFragmentValidationStatus").VALIDATED,
            ])));
          break;
        case o("AdsDraftDraftFragmentBatchCreateErrorDataActionFlux")
          .actionType:
        case o("AdsDraftDraftFragmentBatchDeleteErrorDataActionFlux")
          .actionType:
        case o("AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux")
          .actionType:
          i = I(i, a);
          break;
        case o("AdsDeletePostCTADataActionFlux").actionType:
          i = T(i, a.adgroupIDs);
          break;
        case o("AdsMutatePostCTADataActionFlux").actionType:
          i = T(i, a.adgroupIDs);
          break;
        case o("AdsVideoUploadSuccessDataActionFlux").actionType:
        case o("AdsVideoEncodingSuccessDataActionFlux").actionType:
          i = D(i, a.adgroupIDs, a.sourceInstagramMediaID);
          break;
        case r("AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux")
          .actionType:
        case r("AdsPromotablePagePermissionsUpdatedActionFlux").actionType:
          (a.campaignIDs || a.adgroupIDs) &&
            (i = k(i, { ids: [].concat(a.campaignIDs, a.adgroupIDs) }));
          break;
      }
      return i;
    }
    ((l.initDraft = d),
      (l.fragmentsUpdated = L),
      (l.markFragmentsDirty = k),
      (l.draftFragmentStateReducer = x));
  },
  98,
);
