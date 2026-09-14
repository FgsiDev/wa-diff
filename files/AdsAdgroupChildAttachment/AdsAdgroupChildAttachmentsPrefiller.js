__d(
  "AdsAdgroupChildAttachmentsPrefiller",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupPrefillerUtils",
    "AdsDestinationUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "enumObjectKeys",
    "filterNulls",
    "flattenArray",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("enumObjectKeys")((e = r("AdsAdgroupChildAttachmentsFields"))).map(
        function (e) {
          return r("AdsAdgroupChildAttachmentsFields")[e];
        },
      ),
      u = r("immutable").Set([e.callToActionValue, e.linkURL]),
      c = r("immutable").Set([
        e.callToActionValue,
        e.callToActionLink,
        e.linkURL,
      ]),
      d = {
        key: "childAttachments",
        genPaths: function (t) {
          var e = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
              t,
              r("AdsUnifiedCreativeAPIFields").childAttachments,
            ),
            n = e.current,
            a = e.original;
          if (!n || !a) return [];
          var i = t.original.adgroup.getIn(a),
            l = t.current.adgroup.getIn(n);
          if (!i || !i.size || !l || !l.size) return [];
          var s = Math.min(i.size, l.size);
          return r("filterNulls")(
            r("flattenArray")(
              Array(s)
                .fill()
                .map(function (e, n) {
                  return m(t, n);
                }),
            ),
          );
        },
      };
    function m(e, t) {
      var n = s
        .filter(function (t) {
          return p(t, e);
        })
        .filter(function (t) {
          return _(t, e);
        });
      return n.map(function (n) {
        var r = f(e, n, t),
          o = r.current,
          a = r.original;
        return o && a && e.original.adgroup.getIn(o)
          ? { current: o, original: a }
          : null;
      });
    }
    function p(e, t) {
      if (
        o("AdsAPIAdgroupRecordUtils").isMessengerDestinationAd(
          t.original.adgroup,
        )
      ) {
        if (
          !o("AdsDestinationUtils").isMessengerDestinationCapable(
            t.current.campaignGroup.objective,
            t.current.campaign,
          )
        )
          return !u.has(e);
      } else if (
        t.current.campaignGroup.objective === r("AdsAPIObjectives").MESSAGES
      )
        return !u.has(e);
      return !0;
    }
    function _(e, t) {
      return t.original.campaignGroup.objective ===
        r("AdsAPIObjectives").LEAD_GENERATION &&
        t.current.campaignGroup.objective !==
          r("AdsAPIObjectives").LEAD_GENERATION
        ? !c.has(e)
        : !0;
    }
    function f(e, t, n) {
      var r = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e.current),
        a = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e.original),
        i = t.get(e.current.adgroup, r, n),
        l = t.get(e.original.adgroup, a, n);
      return {
        current: i.supported ? i.path : null,
        original: l.supported ? l.path : null,
      };
    }
    var g = d;
    l.default = g;
  },
  98,
);
