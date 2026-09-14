__d(
  "AdsCreativeGenAILoggingUtils",
  [
    "AdGenaiCreationClientFalcoEvent",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeGenAIBaseAssetUtils",
    "AdsCreativeGenAILoggingContext",
    "AdsCreativeGenAIQPLLoggingUtils",
    "AdsCreativeGenAITypes",
    "AdsInterfacesLogger",
    "AdsUEditorMediaPickerMediaFormat",
    "CurrentAdAccount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l;
      (n === void 0 && (n = null),
        r("AdsInterfacesLogger").logOnce({
          eventName: "ads_gen_ai__image_gen_entry_impression",
          data:
            ((l = {}),
            (l.adgroup_id = e),
            (l.object_creation_source = a
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (l.event_source = t),
            (l.subsequent_data = n),
            (l.source = o(
              "AdsCreativeGenAITypes",
            ).GenAIModalEntryPointType.A_PLUS_C),
            (l.targeting_ui_event_data = i ? "pac" : "non_pac"),
            l),
        }));
    }
    function s(e, t, n, a) {
      var i, l;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_gen_ai__image_gen_media_picker_stepper_eligibility",
        data: babelHelpers.extends(
          {},
          o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
            adgroupID: e.id,
            assetGenerationPath: null,
            baseAssetSetup: null,
            entryPoint: t,
            isDuplicatedAdgroup: o(
              "AdsAPIAdgroupRecordUtils",
            ).isDuplicatedAdgroup(e),
          }),
          ((l = {}),
          (l.media_format =
            (i = a == null ? void 0 : a.media_format) != null ? i : p(n)),
          l),
        ),
      });
    }
    function u(e, t, n, a, i, l, s, u) {
      var c, d;
      r("AdsInterfacesLogger").log({
        eventName: "ads_gen_ai__image_gen_media_picker_primary_button_click",
        data:
          ((d = {}),
          (d.adgroup_id = e),
          (d.source = _(t)),
          (d.current_flows = n),
          (d.item_count = a),
          (d.load_status = i ? "loading" : "loaded"),
          (d.creative_editor_type =
            l === o("AdsCreativeGenAITypes").GenAIModalStep.SELECT_HERO_ASSET
              ? "select_asset"
              : "view_variations"),
          (d.subsequent_data =
            l === o("AdsCreativeGenAITypes").GenAIModalStep.SELECT_HERO_ASSET
              ? "default"
              : "primary"),
          (d.media_format =
            (c = u == null ? void 0 : u.media_format) != null ? c : p(s)),
          d),
      });
    }
    function c(e) {
      return {
        is_duplicated_adgroup: o(
          "AdsAPIAdgroupRecordUtils",
        ).isDuplicatedAdgroup(e),
        is_pac_adgroup: o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e),
        is_video_adgroup: o("AdsAdgroupTypeUtils").isVideoAd(e),
      };
    }
    function d(e, t, n, a, i, l, s, u) {
      var c, d, m, p, f;
      (a === void 0 && (a = null), l === void 0 && (l = {}));
      var g =
          (c = (d = l) == null ? void 0 : d.is_pac_adgroup) != null ? c : !1,
        h =
          (m = (p = l) == null ? void 0 : p.is_duplicated_adgroup) != null
            ? m
            : !1;
      (o("AdsCreativeGenAIQPLLoggingUtils").startGenAIQPLFlow({
        actionType: n,
        entryPoint: _(t),
        adgroupID: e,
        adgroupAnnotations: l,
        layout: i,
        sessionUUID: u,
      }),
        r("AdsInterfacesLogger").log(
          Object.freeze({
            eventName: "ads_gen_ai__image_gen_modal_open",
            data: babelHelpers.extends(
              {},
              o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
                adgroupID: e,
                assetGenerationPath: null,
                baseAssetSetup: g
                  ? o("AdsCreativeGenAITypes").GenAIBaseAssetSetup.PAC
                  : o("AdsCreativeGenAITypes").GenAIBaseAssetSetup.NON_PAC,
                entryPoint: t,
                isDuplicatedAdgroup: h,
              }),
              ((f = {}),
              (f.event_source = n),
              (f.message = JSON.stringify({
                msg: "duration from image selected",
                duration: a,
              })),
              (f.media_format = s),
              f),
            ),
          }),
        ),
        i === "GRID" &&
          r("AdGenaiCreationClientFalcoEvent").logImmediately(function () {
            return {
              event_name: "ads_gen_ai__image_gen_modal_open",
              ad_account_id: r("CurrentAdAccount").getID(),
              adgroup_id: e,
              entrypoint: t,
              feature: "ADS_IMAGE_GEN",
              session_uuid: u,
            };
          }));
    }
    function m(e, t, n, a, i, l, s) {
      var u, c;
      (t === void 0 && (t = null),
        i === void 0 && (i = null),
        l === void 0 && (l = !1),
        s === void 0 && (s = null),
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__leave_select_media_step",
          data:
            ((c = {}),
            (c.adgroup_id = e.id),
            (c.object_creation_source = o(
              "AdsAPIAdgroupRecordUtils",
            ).isDuplicatedAdgroup(e)
              ? "click_ad_duplicate"
              : "click_quick_create"),
            (c.message = JSON.stringify({
              msg: "duration from creative setup",
              duration: t,
            })),
            (c.media_format =
              (u = a == null ? void 0 : a.media_format) != null ? u : p(n)),
            (c.metadata = JSON.stringify(
              babelHelpers.extends(
                { is_media_upload_complete: i, had_upload_in_session: l },
                s,
              ),
            )),
            c),
        }));
    }
    function p(e) {
      if (e == null) return null;
      switch (e) {
        case r("AdsUEditorMediaPickerMediaFormat").VIDEO_PICKER:
          return "VIDEO";
        case r("AdsUEditorMediaPickerMediaFormat").IMAGE_PICKER:
          return "IMAGE";
        case r("AdsUEditorMediaPickerMediaFormat").PLAYABLE_PICKER:
          return "PLAYABLE";
        default:
          return "UNKNOWN";
      }
    }
    function _(e) {
      switch (e) {
        case "ads_manager__media_picker":
          return o("AdsCreativeGenAITypes").GenAIModalEntryPointType
            .MEDIA_PICKER;
        case "ads_manager__awareness_card":
          return o("AdsCreativeGenAITypes").GenAIModalEntryPointType
            .AWARENESS_CARD;
        case "ads_manager__a_plus_c":
          return o("AdsCreativeGenAITypes").GenAIModalEntryPointType.A_PLUS_C;
        case "gen_ai_mvp_recommendation":
          return o("AdsCreativeGenAITypes").GenAIModalEntryPointType
            .GEN_AI_MVP_RECOMMENDATION;
        case "success_toast":
          return o("AdsCreativeGenAITypes").GenAIModalEntryPointType
            .SUCCESS_TOAST;
        default:
          return null;
      }
    }
    function f(e, t, n, a, i) {
      var l;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_gen_ai__generated_thumbnail_impression",
        data: babelHelpers.extends(
          {},
          o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
            adgroupID: e.id,
            assetGenerationPath: t,
            baseAssetSetup:
              i == null
                ? null
                : i
                  ? o("AdsCreativeGenAITypes").GenAIBaseAssetSetup.PAC
                  : o("AdsCreativeGenAITypes").GenAIBaseAssetSetup.NON_PAC,
            entryPoint: "ads_manager__a_plus_c",
            isDuplicatedAdgroup: a,
          }),
          ((l = {}),
          (l.message = JSON.stringify({ seedImageHash: g(e), assetURLs: n })),
          l),
        ),
      });
    }
    function g(e) {
      var t, n;
      return (t =
        (n = o(
          "AdsCreativeGenAIBaseAssetUtils",
        ).getBaseAssetImageSpecFromAdgroup(e)) == null
          ? void 0
          : n.imageHash) != null
        ? t
        : null;
    }
    function h(e, t, n, a, i) {
      var l;
      (o("AdsCreativeGenAIQPLLoggingUtils").addAssetSelectionToggleQPLPoint(
        n,
        t,
        a,
        i,
      ),
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__variations_asset_selection_update",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            {},
            e,
            ((l = {}),
            (l.metadata = JSON.stringify({
              asset_key: n,
              is_selected: a,
              position: i,
            })),
            (l.is_enabled = a),
            l),
          ),
        }));
    }
    function y(e, t, n, a, i, l, s) {
      var u;
      e != null &&
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__intent_field_submit_edit",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            { event_source: n },
            o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
              adgroupID: e.id,
              assetGenerationPath: null,
              baseAssetSetup: null,
              entryPoint: t,
              isDuplicatedAdgroup: o(
                "AdsAPIAdgroupRecordUtils",
              ).isDuplicatedAdgroup(e),
            }),
            ((u = {}),
            (u.subsequent_data = JSON.stringify({
              intent_fields: i,
              is_edited: a,
              experiment_name: l,
              caller: s,
            })),
            u),
          ),
        });
    }
    function C(e, t, n, a) {
      var i;
      e != null &&
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__intent_creation_or_fetch_triggered",
          data: babelHelpers.extends(
            {},
            o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
              adgroupID: e.id,
              assetGenerationPath: null,
              baseAssetSetup: null,
              entryPoint: t,
              isDuplicatedAdgroup: o(
                "AdsAPIAdgroupRecordUtils",
              ).isDuplicatedAdgroup(e),
            }),
            ((i = {}),
            (i.subsequent_data = JSON.stringify({
              destination_url: n.destinationUrl,
              description: n.description,
              headline: n.headline,
              primary_text: n.primaryText,
              experiment_name: a,
            })),
            i),
          ),
        });
    }
    function b(e, t, n, a, i) {
      var l;
      e != null &&
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__intent_creation_or_fetch_success",
          data: babelHelpers.extends(
            {},
            o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
              adgroupID: e.id,
              assetGenerationPath: null,
              baseAssetSetup: null,
              entryPoint: t,
              isDuplicatedAdgroup: o(
                "AdsAPIAdgroupRecordUtils",
              ).isDuplicatedAdgroup(e),
            }),
            ((l = {}),
            (l.subsequent_data = JSON.stringify({
              destination_url: n.destinationUrl,
              description: n.description,
              headline: n.headline,
              primary_text: n.primaryText,
              intent_id: a,
              experiment_name: i,
            })),
            l),
          ),
        });
    }
    function v(e, t, n, a, i) {
      var l;
      e != null &&
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__intent_creation_or_fetch_failure",
          data: babelHelpers.extends(
            {},
            o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
              adgroupID: e.id,
              assetGenerationPath: null,
              baseAssetSetup: null,
              entryPoint: t,
              isDuplicatedAdgroup: o(
                "AdsAPIAdgroupRecordUtils",
              ).isDuplicatedAdgroup(e),
            }),
            ((l = {}),
            (l.subsequent_data = JSON.stringify({
              destination_url: n.destinationUrl,
              description: n.description,
              headline: n.headline,
              primary_text: n.primaryText,
              experiment_name: i,
            })),
            (l.message = a),
            l),
          ),
        });
    }
    function S(e, t, n, a, i) {
      var l;
      e != null &&
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__intent_fields_update_success",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            { event_source: n },
            o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
              adgroupID: e.id,
              assetGenerationPath: null,
              baseAssetSetup: null,
              entryPoint: t,
              isDuplicatedAdgroup: o(
                "AdsAPIAdgroupRecordUtils",
              ).isDuplicatedAdgroup(e),
            }),
            ((l = {}),
            (l.subsequent_data = JSON.stringify({
              experiment_name: a,
              caller: i,
            })),
            l),
          ),
        });
    }
    function R(e, t, n, a, i, l) {
      var s;
      e != null &&
        r("AdsInterfacesLogger").log({
          eventName: "ads_gen_ai__intent_fields_update_failure",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            { event_source: n },
            o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
              adgroupID: e.id,
              assetGenerationPath: null,
              baseAssetSetup: null,
              entryPoint: t,
              isDuplicatedAdgroup: o(
                "AdsAPIAdgroupRecordUtils",
              ).isDuplicatedAdgroup(e),
            }),
            ((s = {}),
            (s.subsequent_data = JSON.stringify({
              experiment_name: i,
              caller: l,
            })),
            (s.message = a),
            s),
          ),
        });
    }
    function L(e, t, n) {
      e != null &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "ads_gen_ai__intent_creative_setup_impression",
          eventCategory: "user_action",
          data: babelHelpers.extends(
            { event_source: n },
            o("AdsCreativeGenAILoggingContext").getGenAILoggingContext({
              adgroupID: e.id,
              assetGenerationPath: null,
              baseAssetSetup: null,
              entryPoint: t,
              isDuplicatedAdgroup: o(
                "AdsAPIAdgroupRecordUtils",
              ).isDuplicatedAdgroup(e),
            }),
          ),
        });
    }
    ((l.logComponentEntryImpressionInViewport = e),
      (l.logImageGenerationStepAvailableOnce = s),
      (l.logMediaPickerPrimaryButtonClickOnce = u),
      (l.getAdgroupAnnotations = c),
      (l.logModalOpen = d),
      (l.logLeaveSelectMediaStep = m),
      (l.getMediaFormatString = p),
      (l.convertEntryPointForLogging = _),
      (l.logL1ThumbnailPreview = f),
      (l.logImageSelectionChange = h),
      (l.logIntentFieldSubmitEdits = y),
      (l.logTriggerIntentCreationOrFetch = C),
      (l.logIntentCreationFetchSuccess = b),
      (l.logIntentCreationFetchFail = v),
      (l.logIntentFieldsUpdateSuccess = S),
      (l.logIntentFieldsUpdateFail = R),
      (l.logIntentImpressionAtCreativeSetup = L));
  },
  98,
);
