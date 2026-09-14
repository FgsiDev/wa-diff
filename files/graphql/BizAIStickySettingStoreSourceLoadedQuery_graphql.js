__d(
  "BizAIStickySettingStoreSourceLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBBizAIAdgroupStickySettingData",
              kind: "LinkedField",
              name: "loaded_biz_ai_sticky_data",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "turn_off_prompts",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "BizAIStickySettingStoreSourceLoadedQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "BizAIStickySettingStoreSourceLoadedQuery",
          selections: e,
        },
        params: {
          cacheID: "463fd21e32f2e8c5174478b88b7d47b7",
          id: null,
          metadata: {},
          name: "BizAIStickySettingStoreSourceLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
