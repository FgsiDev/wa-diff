__d(
  "AdgroupOCRTextDataStoreSourceServerLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "ad_ocr_text",
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdgroupOCRTextDataStoreSourceServerLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Adgroup",
                  kind: "LinkedField",
                  name: "loaded_adgroups",
                  plural: !0,
                  selections: [e],
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdgroupOCRTextDataStoreSourceServerLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "Adgroup",
                  kind: "LinkedField",
                  name: "loaded_adgroups",
                  plural: !0,
                  selections: [
                    e,
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
          cacheID: "f395332a1599d2ad8374a02f94d17aa7",
          id: null,
          metadata: {},
          name: "AdgroupOCRTextDataStoreSourceServerLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
