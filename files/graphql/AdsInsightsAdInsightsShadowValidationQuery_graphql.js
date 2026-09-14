__d(
  "AdsInsightsAdInsightsShadowValidationQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "datePreset" },
        t = { defaultValue: null, kind: "LocalArgument", name: "from" },
        n = { defaultValue: null, kind: "LocalArgument", name: "ids" },
        r = { defaultValue: null, kind: "LocalArgument", name: "to" },
        o = [{ kind: "Variable", name: "ids", variableName: "ids" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "date_preset",
              variableName: "datePreset",
            },
            { kind: "Literal", name: "filter_zero_delivery", value: !0 },
            { kind: "Literal", name: "first", value: 1 },
            { kind: "Variable", name: "from", variableName: "from" },
            {
              kind: "Literal",
              name: "metrics",
              value: [
                "SPEND",
                "IMPRESSIONS",
                "REACH",
                "RESULTS",
                "COST_PER_RESULT",
                "PERFORMANCE_INDICATOR",
              ],
            },
            { kind: "Variable", name: "to", variableName: "to" },
          ],
          concreteType: "AdInsightsConnection",
          kind: "LinkedField",
          name: "ad_insights",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdInsightsNode",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "spend",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "impressions_as_string",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "reach",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "results",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "cost_per_result",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AdInsightsMetricNode",
                  kind: "LinkedField",
                  name: "metrics",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "metric_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "metric_value_raw",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        l = [a, i],
        s = [i];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "AdsInsightsAdInsightsShadowValidationQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: l,
                  type: "AdCampaignGroup",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: l,
                  type: "AdCampaign",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: l,
                  type: "Adgroup",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: l,
                  type: "AdAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [n, e, t, r],
          kind: "Operation",
          name: "AdsInsightsAdInsightsShadowValidationQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                a,
                {
                  kind: "InlineFragment",
                  selections: s,
                  type: "AdCampaignGroup",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: s,
                  type: "AdCampaign",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: s,
                  type: "Adgroup",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: s,
                  type: "AdAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27899630786320403",
          metadata: {},
          name: "AdsInsightsAdInsightsShadowValidationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
