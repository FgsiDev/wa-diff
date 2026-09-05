__d(
  "FbWebWebBloksScreenQueryRootTemplate",
  [],
  function (t, n, r, o, a, i) {
    var e = {
      layout: {
        bloks_payload: {
          ft: {
            "8GtK85dK5LKwJvfIUAAXcg:1zlk6yp5sj":
              '(bk.action.core.TakeLast, (bk.action.core.SetArg, 0, (bk.action.map.Make, (bk.action.array.Make, "errorMessage", "errorCode"), (bk.action.array.Make, null, null))), (bk.action.core.If, (bk.action.core.Match, (bk.action.bloks.GetVariable2, "query_info_1zlk6yp5s0"), (bk.action.array.Make, (bk.action.core.Pattern, null, (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), (bk.action.core.GetArg, 0), (bk.action.core.Coalesce, (bk.action.map.Get, (bk.action.bloks.GetVariable2, "query_info_1zlk6yp5s0"), "error_info"), (bk.action.core.GetArg, 0))))',
          },
          data: [],
          embedded_payloads: [
            {
              id: "N609maMh0ax6Or_Hcdlz2A:1zlk6yp5s9",
              payload: {
                layout: {
                  bloks_payload: {
                    tree: {
                      "bk.components.internal.MergeWithBind": {
                        children: [],
                        on_bind: [
                          "children",
                          '(bk.action.array.Make, (bk.action.map.Get, (bk.action.bloks.GetVariableWithScope, "1zlk6yp5s3-0", 1), "errorFallbackUI"))',
                        ],
                      },
                    },
                  },
                },
              },
            },
          ],
          templates: {
            "z0zpODbpzoszTyuOLjldDA:1zlk6yp5sh": {
              "bk.components.Flexbox": {
                flex_direction: "column",
                justify_content: "center",
                align_items: "center",
                children: [
                  {
                    "bk.components.Text": {
                      text: "Something went wrong",
                      text_size: "20sp",
                    },
                  },
                  { "bk.components.Text": { text: "Please try again later" } },
                ],
                _style: { flex: { width: "100%", height: "100%" } },
              },
            },
          },
          error_attribution: { logging_id: null, source_map_id: null },
          tree: {
            "bk.components.Flexbox": {
              flex_direction: "column",
              children: [
                {
                  "bk.components.Flexbox": {
                    children: [
                      {
                        "bk.components.Flexbox": {
                          children: [
                            {
                              "bk.components.Flexbox": {
                                children: [
                                  {
                                    "bk.components.Flexbox": {
                                      justify_content: "center",
                                      children: [
                                        {
                                          "bk.components.Spinner": {
                                            _style: {
                                              flex: {
                                                width: "32dp",
                                                height: "32dp",
                                                align_self: "center",
                                              },
                                            },
                                          },
                                        },
                                      ],
                                      id: "bkscreen_roottemplate_loadingflexbox:0",
                                      _style: {
                                        flex: { width: "100%", height: "100%" },
                                      },
                                    },
                                  },
                                ],
                                id: "xel4j0:1",
                              },
                            },
                          ],
                          extensions: [
                            {
                              "bk.extensions.OnDataChange": {
                                on_change:
                                  '(bk.action.core.Apply, (bk.action.core.FuncConst, (bk.action.core.TakeLast, (bk.action.core.If, (bk.action.core.Match, "failed", (bk.action.array.Make, (bk.action.core.Pattern, (bk.action.core.GetArg, 1), (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), (bk.action.core.TakeLast, (bk.action.logging.LogEvent, "bloks_async_component_failure", "bloks_infra", (bk.action.map.Make, (bk.action.array.Make, "bloks_app_id", "error_message", "error_code"), (bk.action.array.Make, (bk.action.bloks.GetParameter, "__infra__app_id"), (bk.action.core.Coalesce, (bk.action.map.Get, (bk.action.core.Apply, (bk.action.bloks.GetScript, "8GtK85dK5LKwJvfIUAAXcg:1zlk6yp5sj")), "errorMessage"), ""), (bk.action.core.If, (bk.action.core.Match, (bk.action.map.Get, (bk.action.core.Apply, (bk.action.bloks.GetScript, "8GtK85dK5LKwJvfIUAAXcg:1zlk6yp5sj")), "errorCode"), (bk.action.array.Make, (bk.action.core.Pattern, null, (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), null, (bk.action.string.ValueOfNumber, (bk.action.map.Get, (bk.action.core.Apply, (bk.action.bloks.GetScript, "8GtK85dK5LKwJvfIUAAXcg:1zlk6yp5sj")), "errorCode")))))), (bk.action.core.SetArg, 2, (bk.action.core.Apply, (bk.action.core.FuncConst, (bk.action.core.TakeLast, (bk.action.core.SetArg, 2, (bk.action.core.If, (bk.action.core.Match, (bk.action.bloks.GetParameter, "__infra__on_failure"), (bk.action.array.Make, (bk.action.core.Pattern, null, (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), 1, (bk.action.map.Get, (bk.action.core.Apply, (bk.action.bloks.GetParameter, "__infra__on_failure"), (bk.action.core.GetArg, 0), (bk.action.core.GetArg, 1)), "onErrorAction"))), (bk.action.map.Make, (bk.action.array.Make, "onErrorAction", "errorFallbackUI"), (bk.action.array.Make, (bk.action.core.GetArg, 2), (bk.action.template.Make, "z0zpODbpzoszTyuOLjldDA:1zlk6yp5sh", (bk.action.map.Make, (bk.action.array.Make), (bk.action.array.Make)), "S:xel4j0:13"))))), (bk.action.core.GetArg, 0), (bk.action.core.Apply, (bk.action.bloks.GetScript, "8GtK85dK5LKwJvfIUAAXcg:1zlk6yp5sj")))), (bk.action.map.Get, (bk.action.core.GetArg, 2), "onErrorAction"), (bk.action.core.If, (bk.action.core.Match, (bk.action.map.Get, (bk.action.core.GetArg, 2), "errorFallbackUI"), (bk.action.array.Make, (bk.action.core.Pattern, null, (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), null, (bk.action.bloks.ReplaceEmbeddedChildren, "xel4j0:1", (bk.action.array.Make, (bk.action.bloks.GetPayload, "N609maMh0ax6Or_Hcdlz2A:1zlk6yp5s9", (bk.action.map.Make, (bk.action.array.Make, "1zlk6yp5s3-0"), (bk.action.array.Make, (bk.action.core.GetArg, 2))))), (bk.action.core.GetArg, 0)))), null), (bk.action.core.If, (bk.action.core.If, (bk.action.core.Match, "resolved_sync", (bk.action.array.Make, (bk.action.core.Pattern, (bk.action.core.GetArg, 1), (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), true, (bk.action.core.Match, "resolved_async", (bk.action.array.Make, (bk.action.core.Pattern, (bk.action.core.GetArg, 1), (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false)))), (bk.action.core.Apply, (bk.action.core.FuncConst, 1), (bk.action.core.GetArg, 0)), null))), (bk.action.core.GetArg, 0), (bk.action.core.GetArg, 2))',
                                on_bind: [
                                  "data",
                                  '(bk.action.core.If, (bk.action.core.Match, (bk.action.bloks.GetVariable2, "query_info_1zlk6yp5s0"), (bk.action.array.Make, (bk.action.core.Pattern, null, (bk.action.core.FuncConst, true))), (bk.action.core.Default, (bk.action.core.FuncConst, false))), null, (bk.action.map.Get, (bk.action.bloks.GetVariable2, "query_info_1zlk6yp5s0"), "resolution_type"))',
                                ],
                              },
                            },
                            {
                              "bk.components.OnMount": {
                                on_first_mount:
                                  '(bk.action.bloks.FetchAsyncComponents, (bk.action.bloks.GetParameter, "__infra__app_id"), (bk.action.map.Make, (bk.action.array.Make, "__infra__container_config_id"), (bk.action.array.Make, (bk.action.bloks.GetParameter, "__infra__container_config_id"))), (bk.action.i64.Convert, (bk.action.bloks.GetParameter, "__infra__cache_ttl")), (bk.action.tree.Make, "bk.data.action.bloks.FetchAsyncComponentsOptions"))',
                              },
                            },
                          ],
                        },
                      },
                    ],
                    id: "__infra_sq_content_id:0",
                    _style: { flex: { grow: 1 } },
                  },
                },
              ],
              id: "__infra_sq_root_id:0",
            },
          },
          component_queries: [
            {
              id: "1zlk6yp5s0",
              targets: { genScreenContent: "xel4j0:1" },
              app_id_expr: '(bk.action.bloks.GetParameter, "__infra__app_id")',
              params:
                '(bk.action.map.Make, (bk.action.array.Make, "__infra__container_config_id"), (bk.action.array.Make, (bk.action.bloks.GetParameter, "__infra__container_config_id")))',
              client_params:
                '(bk.action.map.Make, (bk.action.array.Make, "__infra_component_did_render"), (bk.action.array.Make, null))',
              cache_ttl_expr:
                '(bk.action.i64.Convert, (bk.action.bloks.GetParameter, "__infra__cache_ttl"))',
              is_scoped: !1,
            },
          ],
        },
      },
    };
    i.TEMPLATE = e;
  },
  66,
);
