__d(
  "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFlexGKCheckUtils",
    "AdsCreativeFlexMediaUtils",
    "AdsCreativeFlexTypes",
    "AdsFormatTransformationUtils",
    "AdsInterfacesLogger",
    "AdsObjectTypeUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUserSettingsDataManager",
    "AdsUserSettingsProvider",
    "DAFlexibleFormatUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return e == null
        ? 0
        : (t =
              (n = r("AdsUserSettingsProvider")()) == null ||
              (n = n.getData()) == null ||
              (n = n.get(e)) == null ||
              (n = n.getValue()) == null
                ? void 0
                : n.creative_flex_opt_out_count) != null
          ? t
          : 0;
    }
    function s(e, t, n) {
      return o(
        "AdsCreativeFlexGKCheckUtils",
      ).isEligibleForSBGAdgroupStickyOptOut()
        ? t > 0 && n !== o("AdsCreativeFlexTypes").ActionCategory.DEFAULT_ON
          ? r("AdsAdgroupRecordAccessors").related_media_user_opted_out.set(!1)(
              e,
            )
          : n === o("AdsCreativeFlexTypes").ActionCategory.DELETE_ALL
            ? r("AdsAdgroupRecordAccessors").related_media_user_opted_out.set(
                !0,
              )(e)
            : e
        : e;
    }
    function u(e, t, n, a, i, l, u) {
      (i === void 0 && (i = o("AdsCreativeFlexTypes").ActionCategory.DEFAULT),
        u === void 0 && (u = 0));
      var c = new Map(t),
        d = e.toJS(),
        m = o("AdsCreativeFlexMediaUtils").getRelatedMediaFromAllSpecs(
          o("AdsCreativeFlexMediaUtils").FilterType.ALL,
          [d],
        );
      i !== o("AdsCreativeFlexTypes").ActionCategory.DEFAULT_ON &&
        m.forEach(function (e) {
          c.has(e.id) || c.set(e.id, e);
        });
      var p = o("AdsCreativeFlexMediaUtils").getOptInRelatedMediaFromMap(
          c,
          o("AdsCreativeFlexGKCheckUtils").isAccountEligibleForGlobalish() ||
            o(
              "AdsCreativeFlexGKCheckUtils",
            ).isAccountEligibleForMidflightDefaultOn(),
        ),
        _ =
          i === o("AdsCreativeFlexTypes").ActionCategory.DEFAULT_ON &&
          o(
            "AdsCreativeFlexGKCheckUtils",
          ).shouldSkipCreativeFlexSettingWriteOnDefaultOn();
      if (a != null) {
        var f;
        (p.length > 0
          ? (f = "OPTED_IN")
          : i === o("AdsCreativeFlexTypes").ActionCategory.DELETE_ALL &&
            (f = "OPTED_OUT"),
          f != null &&
            !_ &&
            r("AdsUserSettingsDataManager").setCreativeFlexOptInStatus(a, f));
        var g = i !== o("AdsCreativeFlexTypes").ActionCategory.DEFAULT_ON;
        if (f != null && g) {
          var h,
            y = f === "OPTED_OUT" ? u + 1 : 0;
          (r("AdsUserSettingsDataManager").setCreativeFlexOptOutCount(a, y),
            r("AdsInterfacesLogger").log({
              eventName: "creative_flex_sbg_sticky_strike_count_change",
              data:
                ((h = {}),
                (h.adgroup_id = e.id),
                (h.sub_event = i),
                (h.status = f),
                (h.old_value = String(u)),
                (h.new_value = String(y)),
                h),
            }));
        }
      }
      var C = e;
      if (
        ((C = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayDeleteMediaSourcingRelatedMediaSpec(C)),
        c.size === 0)
      )
        C = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayRemoveCAGandMSSpecForRelatedMedia(C);
      else {
        var b =
          i === o("AdsCreativeFlexTypes").ActionCategory.DEFAULT_ON ||
          Array.from(c).some(function (e) {
            var t = e[0],
              n = e[1];
            return n.action_metadata === "DEFAULT";
          });
        C = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).maySetMSSandCAGSpecForRelatedMedia(C, c, n, b ? "DEFAULT" : "MANUAL");
      }
      return (
        o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(
          l != null ? l : null,
          C,
        ) &&
          (i === o("AdsCreativeFlexTypes").ActionCategory.DELETE_ALL &&
          !o(
            "AdsFormatTransformationUtils",
          ).getPcaUnificationUploadedMediaPresent(C)
            ? (C = o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                C,
                "single_media",
                "manual_uploads",
              ))
            : (C = o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                C,
                "single_media",
                "manual_uploads",
              ))),
        (C = s(C, p.length, i)),
        C
      );
    }
    function c(e, t, n, a, i, l, u, c) {
      var d;
      (l === void 0 && (l = o("AdsCreativeFlexTypes").ActionCategory.DEFAULT),
        u === void 0 && (u = !1));
      var m = new Map(t),
        p = o("DAFlexibleFormatUtils").hasDAIntroCard(e),
        _ = e.toJS(),
        f = o("AdsCreativeFlexMediaUtils").getRelatedMediaFromAllSpecs(
          o("AdsCreativeFlexMediaUtils").FilterType.ALL,
          [_],
        ),
        g = r("nullthrows")(i.get(e.id)),
        h,
        y;
      f.forEach(function (e) {
        (m.has(e.id) || m.set(e.id, e),
          e.selection ===
            o("AdsCreativeFlexTypes").RelatedMediaSelection
              .OPT_IN_AS_INFERRED_DA_INTRO_CARD && (h = e));
      });
      var C = o("AdsCreativeFlexMediaUtils").getOptInRelatedMediaFromMap(m, !1);
      if (
        a != null &&
        o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
        o("DAFlexibleFormatUtils").isDACreativeFlexDefaultOnJKEnabled()
      ) {
        var b;
        (C.length > 0
          ? (b = "OPTED_IN")
          : l === o("AdsCreativeFlexTypes").ActionCategory.DELETE_ALL &&
            (b = "OPTED_OUT"),
          b != null &&
            r("AdsUserSettingsDataManager").setDACreativeFlexOptInStatus(a, b));
      }
      var v = e;
      if (
        ((v = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayDeleteMediaSourcingRelatedMediaSpec(v)),
        m.size === 0)
      )
        v = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).mayRemoveCAGandMSSpecForRelatedMedia(v);
      else {
        if (!p || h != null) {
          var S;
          ((y = h != null ? m.get(h.id) : null),
            ((S = y) == null ? void 0 : S.selection) !==
              o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN &&
              (y = Array.from(m.values()).find(function (e) {
                return (
                  e.selection ===
                  o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
                );
              })));
        }
        (h != null || y != null) &&
          (o("DAFlexibleFormatUtils").passUpdatePrimaryAdWithDAIntroCardGK()
            ? (y != null &&
                ((y = babelHelpers.extends({}, y, {
                  selection: o("AdsCreativeFlexTypes").RelatedMediaSelection
                    .OPT_IN_AS_INFERRED_DA_INTRO_CARD,
                })),
                m.set(y.id, y)),
              (v = o(
                "AdsUEditorAdgroupMediaSourcingSpecMutators",
              ).maybeUpdateInferredDAIntroCard(v, h, y, g)))
            : h != null &&
              o(
                "DAFlexibleFormatUtils",
              ).skipGKCheckOnInferredIntroCardForRenderingOrRemoval() &&
              (v = o(
                "AdsUEditorAdgroupChildAttachmentsMutators",
              ).removeLeadingStaticCard(v)));
        var R =
          u ||
          Array.from(m).some(function (e) {
            var t = e[0],
              n = e[1];
            return n.action_metadata === "DEFAULT";
          });
        v = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).maySetMSSandCAGSpecForRelatedMedia(v, m, n, R ? "DEFAULT" : "MANUAL");
      }
      return (
        (v = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).maybeUpdateFormatReactiveControlForDARelatedMedia(
          v,
          t,
          (d = e.creative) == null ||
            (d = d.media_sourcing_spec) == null ||
            (d = d.related_media) == null
            ? void 0
            : d.toJS(),
          l,
        )),
        (v = s(v, C.length, l)),
        v
      );
    }
    ((l.getCreativeFlexOptOutCountFromProvider = e),
      (l.executeSACreativeFlex = u),
      (l.executeDACreativeFlex = c));
  },
  98,
);
