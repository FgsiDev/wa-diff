__d(
  "CometUFICommentEditHistoryActionLink_commentActionLink.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFICommentEditHistoryActionLink_commentActionLink",
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
              args: null,
              kind: "FragmentSpread",
              name: "CometUFIEditHistoryCommentActionLink_comment",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBCommentEditHistoryActionLink",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
