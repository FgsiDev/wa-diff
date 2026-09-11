__d(
  "CometUFICommentTimestampBadgeWrapper_badge$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometUFICommentTimestampBadgeWrapper_badge$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Comment",
          kind: "LinkedField",
          name: "comment",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "created_time",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
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
    };
    a.exports = e;
  },
  null,
);
