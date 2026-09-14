__d(
  "AdsInstagramMediaSourceSetAccountOnAccountChangeReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (n.instagramAccountID == null) return { query: null };
          var e = t.query
            ? t.query
                .set("accountID", n.instagramAccountID)
                .set("instagram_user_id", n.instagramUserID)
            : null;
          return babelHelpers.extends({}, t, { query: e });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
