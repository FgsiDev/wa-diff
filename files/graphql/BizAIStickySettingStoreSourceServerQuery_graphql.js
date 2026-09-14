__d(
  "BizAIStickySettingStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "ad_account_id",
              },
            ],
            concreteType: "XFBBizAIAdgroupStickySettingData",
            kind: "LinkedField",
            name: "xfb_biz_ai_ad_account_sticky_setting_query",
            plural: !1,
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BizAIStickySettingStoreSourceServerQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BizAIStickySettingStoreSourceServerQuery",
          selections: t,
        },
        params: {
          id: "26102086532766068",
          metadata: {},
          name: "BizAIStickySettingStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
