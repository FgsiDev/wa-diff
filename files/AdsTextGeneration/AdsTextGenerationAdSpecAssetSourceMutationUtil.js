__d(
  "AdsTextGenerationAdSpecAssetSourceMutationUtil",
  ["AdsAssetFeedMutationUtils", "AdsUnifiedCreativeAPIFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdsUnifiedCreativeAPIFields").message:
          return "bodies";
        case r("AdsUnifiedCreativeAPIFields").headline:
          return "titles";
      }
    }
    function s(t, n, a, i, l, s, u) {
      var c, d, m;
      if (a === r("AdsUnifiedCreativeAPIFields").message) {
        var p;
        m =
          t == null ||
          (p = t.creative) == null ||
          (p = p.asset_feed_spec) == null ||
          (p = p.bodies) == null
            ? void 0
            : p.get(i);
      } else if (a === r("AdsUnifiedCreativeAPIFields").headline) {
        var _;
        m =
          t == null ||
          (_ = t.creative) == null ||
          (_ = _.asset_feed_spec) == null ||
          (_ = _.titles) == null
            ? void 0
            : _.get(i);
      }
      var f = (c = m) == null ? void 0 : c.get("text"),
        g = (d = m) == null ? void 0 : d.get("asset_source");
      if (
        l == null ||
        f == null ||
        typeof f != "string" ||
        t.id !== (l == null ? void 0 : l.adgroupID)
      )
        return t;
      var h = e(a),
        y;
      if (h != null) {
        var C;
        y =
          (C = l.suggestionsByField.get(h)) == null
            ? void 0
            : C.suggestionsLoadObject
                .mapValue(function (e) {
                  var t;
                  return e == null || (t = e.suggestions) == null
                    ? void 0
                    : t.map(function (e) {
                        var t = e.editedText,
                          n = e.fetchTime,
                          r = e.field,
                          o = e.id,
                          a = e.index,
                          i = e.input,
                          l = e.language,
                          s = e.persona,
                          u = e.source,
                          c = e.status,
                          d = e.text;
                        return {
                          id: o,
                          field: r,
                          text: d,
                          source: u,
                          status: c,
                          input: i,
                          editedText: t,
                          index: a,
                          language: l,
                          fetchTime: n,
                          persona: s,
                        };
                      });
                })
                .getValue();
      }
      if (y == null) return t;
      var b = y.findIndex(function (e) {
          return e.text === f;
        }),
        v = y.findIndex(function (e) {
          var t;
          return ((t = e.editedText) != null ? t : e.text) === s;
        }),
        S = null;
      if (b >= 0)
        switch (y[b].source) {
          case "paraphrasing":
            S = "TEXT_GEN_SUGGESTION_PARAPHRASING_UNEDITED";
            break;
          case "diversity":
            S = "TEXT_GEN_SUGGESTION_DIVERSITY_UNEDITED";
            break;
          case "LLM_V0":
            S = "TEXT_GEN_SUGGESTION_LLM_UNEDITED";
            break;
          case "mock":
            S = "TEXT_GEN_SUGGESTION_MOCK_UNEDITED";
            break;
          case "LLM_SEMANTIC_VARIATIONS":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_UNEDITED";
            break;
          case "LLM_SEMANTIC_VARIATIONS_V_1_1":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_UNEDITED";
            break;
          case "LLM_SEMANTIC_VARIATIONS_V_1_2":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_UNEDITED";
            break;
          case "LLM_SEMANTIC_VARIATIONS_SINGLE_STAGE":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED";
            break;
          case "LLM_BRAND_IDENTITY":
            S = "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_UNEDITED";
            break;
          case "LLM_BRAND_IDENTITY_V_1_1":
            S = "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_UNEDITED";
            break;
          case "LLM_V2":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_UNEDITED";
            break;
          case "LLM_V2_LONG":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_LONG_UNEDITED";
            break;
          case "LLM_V2_DPO":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_DPO_UNEDITED";
            break;
          case "LLM_V2_DPO_PPO":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_UNEDITED";
            break;
          case "LLM_V2_DPO_PPO_LONG":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_UNEDITED";
            break;
          case "LLM_V3":
            S = "TEXT_GEN_SUGGESTION_LLM_V3_UNEDITED";
            break;
          case "LLM_V3_LONG":
            S = "TEXT_GEN_SUGGESTION_LLM_V3_LONG_UNEDITED";
            break;
          case "LC_PPO":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_UNEDITED";
            break;
          case "LC_PPO_V2":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_UNEDITED";
            break;
          case "LLM_APP_DESCRIPTION":
            S = "TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_UNEDITED";
            break;
          case "LLM_ADS_MANAGER_LLM_ORCHESTRATOR_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_UNEDITED";
            break;
          case "LLM_ADS_MANAGER_LLM_ORCHESTRATOR_V2":
            S = "TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V2_UNEDITED";
            break;
          case "LLM_ADS_MANAGER_LLM_ORCHESTRATOR_V3":
            S = "TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V3_UNEDITED";
            break;
          case "ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1":
            S =
              "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_UNEDITED";
            break;
          case "LLM_HEADLINE_LLAMA4_HOOKS":
            S =
              "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_UNEDITED";
            break;
          case "LLM_HEADLINE_GPT_OSS_HOOKS":
            S =
              "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_UNEDITED";
            break;
          case "LLM_ORCHESTRATOR_MULTILINGUAL":
            S = "TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_UNEDITED";
            break;
          case "LLM_SFT_LLAMA3_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_UNEDITED";
            break;
          case "LLM_LC_PPO_LLAMA3_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_UNEDITED";
            break;
          case "LLM_FC_PPO_LLAMA3_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_UNEDITED";
            break;
          case "LLM_PPO_ORCHESTRATOR_V1":
            S = "TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_UNEDITED";
            break;
          case "LLM_BRAND_ALIGNER":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_UNEDITED";
            break;
          case "LLM_LIGHTHOUSE_LLAMA3_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_UNEDITED";
            break;
          case "LLM_COHORT_LLAMA3_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_UNEDITED";
            break;
          case "LLM_ADS_MANAGER_LLM_PURPOSEFUL_GEN_SP_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_UNEDITED";
            break;
          case "LLM_ADS_MANAGER_LLM_PURPOSEFUL_GEN_EMOTION_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_UNEDITED";
            break;
          case "TRANSLATION_LLAMA3_V1":
            break;
          case "LLM_UNIFIED_MULTILINGUAL":
            S = "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_UNEDITED";
            break;
          case "LLM_UNIFIED_MULTILINGUAL_NON_EN":
            S = "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_UNEDITED";
            break;
          case "LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_PPO":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_PPO_LLAMA4":
            S = "TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_HOOKS_V0":
            S =
              "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_HOOKS_V1":
            S =
              "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_UNEDITED";
            break;
          case "LLM_LC_PPO_LLAMA3_V1_FOR_IG":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_UNEDITED";
            break;
          case "LLM_FC_PPO_LLAMA3_V1_FOR_FB":
            S = "TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_UNEDITED";
            break;
          case "LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS":
            S =
              "TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_UNEDITED";
            break;
          case "LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT":
            S =
              "TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_UNEDITED";
            break;
          case "LLM_ADS_MANAGER_LLM_TARGET_PERSONA_GEN_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_UNEDITED";
            break;
          case "LLM_FREEFORM_BRAND_TONE":
            S = "TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_UNEDITED";
            break;
          case "ADS_MANAGER_LLM_AUTOMATION_ALPHA":
          case "ADS_MANAGER_LLM_AUTOMATION_ALPHA_DEEPER_FUNNEL_USER_COHORT_BATCH_GENERATION":
          case "ADS_MANAGER_LLM_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_SEQUENTIAL_GENERATION":
          case "ADS_MANAGER_LLM_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_BATCH_GENERATION":
            break;
          case "LLM_UNIFIED_HEADLINE_WITH_PERSONA":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_UNEDITED";
            break;
          case "LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_UNEDITED";
            break;
          case "LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_BRAND_VOICE":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_BRAND_VOICE_UNEDITED";
            break;
          case "LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_UNEDITED";
            break;
          case "LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_BRAND_VOICE":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_BRAND_VOICE_UNEDITED";
            break;
          case "LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_UNEDITED";
            break;
          case "LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_UNEDITED";
            break;
          case "LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_BRAND_VOICE":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_BRAND_VOICE_UNEDITED";
            break;
          case "LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_UNEDITED";
            break;
          case "LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_BRAND_VOICE":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_BRAND_VOICE_UNEDITED";
            break;
          case "AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE":
            S =
              "TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED";
            break;
          case "AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE":
            S =
              "TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_MM":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_UNEDITED";
            break;
          case "LLM_PPO_TEXT_IMAGE_RM":
            S = "TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_UNEDITED";
            break;
          case "LLM_BRAND_LLAMA4":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_UNEDITED";
            break;
          case "LLM_BRAND_GPT4O":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_UNEDITED";
            break;
          case "LLM_BRAND_HISTORICAL_ADS_V2":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_UNEDITED";
            break;
          case "LLM_PERSONA_V2":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_UNEDITED";
            break;
          case "LLM_PERSONA_GPT4O":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_UNEDITED";
            break;
          case "LLM_PERSONA_EDITABLE":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_UNEDITED";
            break;
          case "LLM_PERSONA_EDITABLE_COMPOUND":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_UNEDITED";
            break;
          case "LLM_PERSONA_DEEPER_FUNNEL":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_UNEDITED";
            break;
          case "LLM_PERSONA_V2_COMPOUND":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_UNEDITED";
            break;
          case "LLM_LLAMA4_SEGMENT_BASED":
            S = "TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_UNEDITED";
            break;
          case "LLM_CONVERTER_BASED_PERSONA":
            S = "TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_UNEDITED";
            break;
          case "LLM_CONVERTER_BASED_PERSONA_COMPOUND":
            S =
              "TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_UNEDITED";
            break;
          case "LLM_LLAMA4_LANDING_PAGE_CONTEXT":
            S = "TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_UNEDITED";
            break;
          case "LLM_GPT4O_LANDING_PAGE_CONTEXT":
            S = "TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_UNEDITED";
            break;
          case "LLM_PERSONA_IF_MORL":
            S = "TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK":
            S =
              "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_UNEDITED";
            break;
          case "LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1":
            S =
              "TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_UNEDITED";
            break;
          case "LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2":
            S =
              "TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_UNEDITED";
            break;
          case "HEADLINE_ARPG_OSS_BUNDLE":
            S = "TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_UNEDITED";
            break;
          case "HEADLINE_ARPG_L4BASE_BUNDLE":
            S = "TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_UNEDITED";
            break;
          case "LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_UNEDITED";
            break;
          case "LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_UNEDITED";
            break;
        }
      else
        switch (g) {
          case "TEXT_GEN_SUGGESTION_PARAPHRASING_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_ADD":
            S = "TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_DIVERSITY_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_DIVERSITY_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_ADD":
            S = "TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_ADD":
            S = "TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_ADD":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_ADD":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_LONG_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_ADD":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_DPO_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V3_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_V3_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_V3_LONG_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_LC_PPO_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_EDITED";
            break;
          case "TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED":
            S =
              "TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED";
            break;
          case "TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED":
            S =
              "TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_BRAND_VOICE_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_BRAND_VOICE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_BRAND_VOICE_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_BRAND_VOICE_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_BRAND_VOICE_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_BRAND_VOICE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_BRAND_VOICE_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_BRAND_VOICE_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_UNEDITED":
            S = "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_BRAND_VOICE_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_BRAND_VOICE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_BRAND_VOICE_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_BRAND_VOICE_EDITED_BEFORE_AND_AFTER_ADD";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_BRAND_VOICE_UNEDITED":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_BRAND_VOICE_EDITED";
            break;
          case "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_BRAND_VOICE_EDITED_BEFORE_ADD":
            S =
              "TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_BRAND_VOICE_EDITED_BEFORE_AND_AFTER_ADD";
            break;
        }
      return S == null
        ? t
        : o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            t,
            n,
            a,
            i,
            "asset_source",
            S,
          );
    }
    l.maybeSetAssetSourceAtIndex = s;
  },
  98,
);
