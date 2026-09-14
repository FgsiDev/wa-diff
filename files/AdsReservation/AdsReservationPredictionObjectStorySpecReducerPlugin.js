__d(
  "AdsReservationPredictionObjectStorySpecReducerPlugin",
  ["first"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e,
            o,
            a = n.campaignIDs,
            i = n.destinationID,
            l = n.instagramDestinationID,
            s = l === void 0 ? null : l,
            u = n.instagramDestinationIDV2,
            c = r("first")(a);
          if (c == null) return t;
          var d = i == null && (s != null || u != null),
            m = (e = t.get(c)) == null ? void 0 : e.page_id,
            p = (o = t.get(c)) == null ? void 0 : o.instagram_user_id;
          return d && m != null
            ? t.set(c, {
                page_id: m,
                instagram_actor_id: s,
                instagram_user_id: u != null ? u : p,
              })
            : i != null
              ? t.set(c, {
                  page_id: i,
                  instagram_actor_id: s,
                  instagram_user_id: u != null ? u : null,
                })
              : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
