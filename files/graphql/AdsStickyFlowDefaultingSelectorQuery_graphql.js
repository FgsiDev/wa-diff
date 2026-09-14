__d(
  "AdsStickyFlowDefaultingSelectorQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "pageID" },
          { defaultValue: !0, kind: "LocalArgument", name: "should_skip" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ctwa_sticky_flow_default_template_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsStickyFlowDefaultingSelectorQuery",
          selections: [
            {
              condition: "should_skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [n],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsStickyFlowDefaultingSelectorQuery",
          selections: [
            {
              condition: "should_skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [
                    n,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "26161214400237637",
          metadata: {},
          name: "AdsStickyFlowDefaultingSelectorQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
