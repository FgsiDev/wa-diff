__d(
  "AdsInstagramMediaSourceSetAccountOnUPVInstagramActorIdChangeReducerPlugin",
  ["AdsInstagramUserIdMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e;
          if (n.instagramActorID == null) return { query: null };
          var r = t.query
            ? t.query
                .set("accountID", n.instagramActorID)
                .set(
                  "instagram_user_id",
                  (e = o(
                    "AdsInstagramUserIdMigrationUtils",
                  ).convertIGIDV2FromStrongTypeToString(n.instagramUserID)) !=
                    null
                    ? e
                    : n.instagramActorID,
                )
            : null;
          return babelHelpers.extends({}, t, { query: r });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
