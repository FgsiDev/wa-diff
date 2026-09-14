__d(
  "adsDraftPublishingPublishAction",
  [
    "AdDraftFragmentSource",
    "AdsAccountStore",
    "AdsApplicationIDs",
    "AdsDraftDraftPublishDataAction",
    "AdsDraftPublishDataManager",
    "AdsDuplicationZeroEditTracker",
    "AdsDuplicationZeroEditTrackingKillSwitch",
    "AdsEditorTransitionConfig",
    "AdsICCPublishLoggingStoreUtils",
    "AdsManagerQPLUserFlowLogger",
    "AdsNewIDs",
    "AdsPerfInteractionsController",
    "CPASMerchantPredefinedAdgroupUTM",
    "FBLogger",
    "QPLUserFlow",
    "adsPELockedAndPublishingSelectors",
    "gkx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      r("FBLogger")("ads")
        .blameToPreviousFile()
        .warn(
          "am_publish_payload_undefined_field field=%s creation_source=%s is_currently_publishing=%s should_publish_immediately=%s transition_active=%s",
          e,
          t,
          String(n),
          String(o),
          String(r("AdsEditorTransitionConfig").shouldUseTransitions()),
        );
    }
    function s(t) {
      var n,
        a,
        l = t.createdInCF,
        s = l === void 0 ? !1 : l,
        u = t.creationSource,
        c = u === void 0 ? r("AdDraftFragmentSource").NOT_SPECIFIED : u,
        d = t.draftID,
        m = t.fragmentIDs,
        p = t.ignoreErrors,
        _ = t.selection,
        f = t.shouldPublishImmediately,
        g = f === void 0 ? !1 : f,
        h = t.isFirstBlockingError,
        y = h === void 0 ? !1 : h,
        C = o("AdsNewIDs").newNegativeID().toString(),
        b = !o("adsPELockedAndPublishingSelectors")
          .adsPEPublishingIDsSelector()
          .isEmpty(),
        v = { ignore_errors: p, include_fragment_statuses: !0 };
      ((m == null || m.size === 0) &&
        r("FBLogger")("ads").warn(
          "Attempting to start a draft publish of %s without specifiying which fragments to publish! This is legacy behavior that will not be supported in the future. Fragment IDs: %s, Creation Source: %s",
          d,
          m == null ? "null" : "[]",
          c,
        ),
        d == null && e("draftID", c, b, g),
        m == null
          ? e("fragmentIDs:null", c, b, g)
          : m.size === 0 && e("fragmentIDs:empty", c, b, g));
      var S =
          (n =
            _ == null ||
            (a = _.toArray()) == null ||
            (a = a.map(function (e) {
              return Array.from(e);
            })) == null
              ? void 0
              : a.flat()) != null
            ? n
            : [],
        R = r("AdsAccountStore").getSelectedAccount().getValue(),
        L = r("gkx")("14114");
      L &&
        o(
          "CPASMerchantPredefinedAdgroupUTM",
        ).updateAdgroupsWithMerchantPredefinedURL(R, S);
      var E = m ? m.toArray() : [];
      if (
        (r("QPLUserFlow").addAnnotations(r("qpl")._(270216423, "7513"), {
          int: { ad_object_id_count: S.length },
        }),
        o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(
          r("qpl")._(270216423, "7513"),
          { string_array: { ad_object_ids: S, fragment_ids: E } },
        ),
        r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
          "am.toast_card.publish",
          { ad_object_ids: S },
        ),
        o(
          "AdsDuplicationZeroEditTrackingKillSwitch",
        ).isZeroEditDuplicationTrackingEnabled())
      )
        try {
          (o("AdsDuplicationZeroEditTracker").logPublishSignal(d, E),
            o("AdsDuplicationZeroEditTracker").clearTrackedFragments(d, E));
        } catch (e) {
          r("FBLogger")("ads").warn(
            "Failed to log publish signal duplication zero edit",
          );
        }
      if (!b)
        try {
          o("AdsICCPublishLoggingStoreUtils").logICCPredictionOnPublish(m);
        } catch (e) {
          r("FBLogger")("ads").warn("Failed to log ICC prediction on publish");
        }
      (r("AdsDraftPublishDataManager").startPublish(d, E, b, v, C, c, g, y),
        r("AdsDraftDraftPublishDataAction").dispatch(
          {
            adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
            createdInCF: s,
            creationSource: c,
            draftID: d,
            fakePublishID: C,
            fragmentIDs: m,
            ignoreErrors: p,
            isCurrentlyPublishing: b,
            selection: _,
            shouldPublishImmediately: g,
          },
          {
            line: "218",
            module: "adsDraftPublishingPublishAction.js",
            moduleID: i.id,
          },
        ));
    }
    l.default = s;
  },
  98,
);
