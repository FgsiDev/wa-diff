__d(
  "createFeedCometMentionsDataEntry",
  [
    "FBLogger",
    "createFeedCometMentionsDataEntryWithInstagramTag_data.graphql",
    "createFeedCometMentionsDataEntryWithTagSuggestion_data.graphql",
    "createFeedCometMentionsDataEntryWithTag_data.graphql",
    "createFeedCometMentionsDataEntry_data.graphql",
    "createFeedCometMentionsDataEntry_profile.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    (e !== void 0 || (e = n("createFeedCometMentionsDataEntry_data.graphql")),
      s !== void 0 ||
        (s = n("createFeedCometMentionsDataEntryWithTag_data.graphql")),
      u !== void 0 ||
        (u = n(
          "createFeedCometMentionsDataEntryWithTagSuggestion_data.graphql",
        )),
      c !== void 0 ||
        (c = n("createFeedCometMentionsDataEntry_profile.graphql")),
      d !== void 0 ||
        (d = n(
          "createFeedCometMentionsDataEntryWithInstagramTag_data.graphql",
        )));
    function m(e) {
      var t,
        n,
        o,
        a = null;
      if (((a = e.data.node), a == null)) return null;
      var i = a,
        l = i.id,
        s = i.name,
        u = (t = a) == null ? void 0 : t.photo,
        c = a.__typename === "InstagramUserV2";
      c &&
        ((n = a) == null ? void 0 : n.username) == null &&
        r("FBLogger")("comet_composer").warn(
          "Instagram user is missing username for Comet mentions data entry",
        );
      var d = u == null ? void 0 : u.uri,
        m = "circle";
      switch (e.data.icon_shape) {
        case "square":
          m = "square";
          break;
        case "roundedRect":
          m = "roundedRect";
          break;
        default:
          m = "circle";
          break;
      }
      if (d == null && e.type === "MENTION_SEARCH_RESULT") {
        var p;
        ((d = (p = e.data.node) == null ? void 0 : p.thumbnail_link),
          (m = "roundedRect"));
      }
      if (s == null || l == null || d == null)
        return (
          r("FBLogger")("comet_composer").warn(
            "%s is missing the name, id, or photoURI for Comet mentions data entry",
            a.__typename,
          ),
          null
        );
      if (e.type === "MENTION_SEARCH_RESULT") {
        var _,
          f,
          g,
          h,
          y,
          C = e.data.score;
        if (C == null)
          return (
            r("FBLogger")("comet_composer").warn(
              "%s is missing score info for Comet mentions data entry",
              a.__typename,
            ),
            null
          );
        var b = !!((_ = e.data.node) != null && _.is_verified);
        return {
          key: l,
          label: s,
          rawData: {
            docTitle: (f = e.data.node) == null ? void 0 : f.doc_title,
            docUrl: (g = e.data.node) == null ? void 0 : g.doc_url,
            iconShape: m,
            isExternal: !1,
            isVerified: b,
            photoURI: d,
            resultType: (h = e.data.node) == null ? void 0 : h.__typename,
            score: C,
            subtext: (y = e.data.node) == null ? void 0 : y.mentions_subtext,
            type: "MENTION_SEARCH_RESULT",
          },
          type: "entry",
        };
      }
      return {
        key: l,
        label: ((o = a) == null ? void 0 : o.username) != null ? a.username : s,
        rawData: { isInstagramUser: c, photoURI: d, type: e.type },
        type: "entry",
      };
    }
    l.default = m;
  },
  98,
);
