__d(
  "AdsUEditorAdgroupPACAddCarouselCardReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAssetFeedFieldUtils",
    "AdsIsApplicationInCallToAction",
    "AdsMessengerConstants",
    "AdsMessengerDestinationAdgroupUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupPACAddCarouselCardActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsWhatsAppConstants",
    "AdsWhatsappDestinationAdgroupUtils",
    "adsPlacementAssetMutationAddCarouselCardDetail",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "",
      s = 10;
    function u(t, n) {
      var a = o("AdsIsApplicationInCallToAction").isApplicationInCallToAction(
        t,
      );
      if (a) {
        var i,
          l,
          s =
            (i = t.creative) == null ||
            (i = i.asset_feed_spec) == null ||
            (i = i.link_urls) == null ||
            (i = i.first()) == null
              ? void 0
              : i.get("website_url");
        return ((l = {}), (l.website_url = typeof s == "string" ? s : e), l);
      } else if (n === r("AdsAPIObjectives").LEAD_GENERATION) {
        var u;
        return ((u = {}), (u.website_url = "http://fb.me"), u);
      } else if (
        o(
          "AdsMessengerDestinationAdgroupUtils",
        ).hasMessengerDestinationForAdgroupSpec(t)
      ) {
        var c;
        return (
          (c = {}),
          (c.website_url = o("AdsMessengerConstants").EMPTY_MESSENGER_LINK),
          c
        );
      } else if (
        o("AdsWhatsappDestinationAdgroupUtils").hasWhatsappCTAinAFS(t)
      ) {
        var d;
        return (
          (d = {}),
          (d.website_url = o("AdsWhatsAppConstants").WHATSAPP_API_LINK),
          d
        );
      } else {
        var m,
          p,
          _,
          f =
            (m = t.creative) == null ||
            (m = m.asset_feed_spec) == null ||
            (m = m.carousels) == null ||
            (m = m.first()) == null
              ? void 0
              : m.getIn(["child_attachments", 0, "link_url_label"]).get("name"),
          g = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (p = t.creative) == null || (p = p.asset_feed_spec) == null
              ? void 0
              : p.link_urls,
            f,
            "website_url",
          ).fieldValue;
        return ((_ = {}), (_.website_url = typeof g == "string" ? g : e), _);
      }
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            objectivesMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaign,
                n = e.campaignGroup,
                r = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  n.objective,
                  t,
                );
              return o("AdsODAXUtils").maybeTranslateObjective(
                n.objective,
                r,
                null,
              );
            }),
          },
          function (t, n, a) {
            var i = a.objectivesMap;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var l,
                  c,
                  d = n.carouselLabel,
                  m =
                    (l = t.creative) == null || (l = l.asset_feed_spec) == null
                      ? void 0
                      : l.carousels;
                if (m == null) return t;
                var p = m.findIndex(function (e) {
                  return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === d;
                });
                if (p === -1) return t;
                var _ =
                  (c = m.get(p)) == null ? void 0 : c.get("child_attachments");
                if (!(_ instanceof r("immutable").List) || _.size >= s)
                  return t;
                var f = _.size,
                  g = t;
                ((g = r("adsPlacementAssetMutationAddCarouselCardDetail")(
                  g,
                  d,
                  f,
                  "titles",
                  { text: e },
                )),
                  (g = r("adsPlacementAssetMutationAddCarouselCardDetail")(
                    g,
                    d,
                    f,
                    "descriptions",
                    { text: e },
                  )));
                var h = i.get(a),
                  y = u(g, h);
                return (
                  (g = r("adsPlacementAssetMutationAddCarouselCardDetail")(
                    g,
                    d,
                    f,
                    "link_urls",
                    y,
                  )),
                  g
                );
              },
            );
          },
          o("AdsUEditorAdgroupPACAddCarouselCardActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
