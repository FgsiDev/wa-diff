__d(
  "AdsPlaceDataUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsCallToActionGeoUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsEmptyValue",
    "AdsInstagramApplicabilityUtils",
    "AdsLeadGenAdGroupUtils",
    "AdsLocalUtils",
    "AdsMixedValue",
    "AdsMultiProductConstants",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageUtils",
    "AdsPromotedObjectOmnichannelUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUniformValue",
    "AdsWebsiteAdUtils",
    "GeoCoordinates",
    "GeoPlace",
    "adsAdgroupIsDynamicProductCarouselAd",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("AdsMixedValue"))([]),
      s = 1;
    function u(t, n, a) {
      if (
        t instanceof r("AdsUniformValue") &&
        n instanceof r("AdsUniformValue") &&
        a instanceof r("AdsUniformValue")
      ) {
        var i = n.getValue(),
          l = a.getValue();
        if (i == null || l == null) return r("AdsEmptyValue").instance();
        var s = new (r("GeoPlace"))(
          new (r("GeoCoordinates"))(i, l),
          t.getValue(),
        );
        return new (r("AdsUniformValue"))(
          o("AdsCallToActionGeoUtils").makeGeoLink(s),
        );
      }
      return e;
    }
    function c(e, t, n) {
      var a = e < o("AdsMultiProductConstants").MAX_PRODUCTS;
      return a || t >= 0 || n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES;
    }
    function d(e, t, n, a, i, l, s) {
      (l === void 0 && (l = !1), s === void 0 && (s = !1));
      var u = o("AdsWebsiteAdUtils").isWebsiteObjective(t, n),
        c = o("AdsWebsiteAdUtils").isWebsiteAndInStoreObjective(t, n),
        d =
          o("AdsWebsiteAdUtils").isWebsiteConversionsOfflineObjective(t, n) &&
          r("AdsAccountUtils").hasCapability(
            e,
            "CAN_SEE_MAP_CARD_FOR_OFFLINE_CONVERSION_OPT",
          ),
        m = a.every(function (e) {
          return o("AdsPageUtils").hasLocation(e);
        }),
        p = a.every(function (e) {
          return (
            o("AdsPageUtils").hasLocation(e) ||
            o("AdsPageUtils").hasLocations(e)
          );
        });
      return s ||
        u ||
        c ||
        t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        d
        ? p
          ? !i && l
            ? "DYNAMIC"
            : "REALTIME"
          : null
        : t === r("AdsAPIObjectives").REACH
          ? p && !m
            ? "REALTIME"
            : m
              ? "SINGLE"
              : null
          : o("AdsLocalUtils").isLocalObjective(t)
            ? i
              ? "REALTIME"
              : "DYNAMIC"
            : null;
    }
    function m(e, t) {
      var n, a;
      switch (t) {
        case "DYNAMIC":
          return r("immutable").fromJS(
            ((a = {}),
            (a.name = e.name),
            (a.link = e.link),
            (a.place_data = r("immutable").Map(
              ((n = {}), (n.type = "DYNAMIC"), n),
            )),
            a),
          );
        case "REALTIME": {
          var i = o("AdsPageUtils").hasLocations(e),
            l = o("AdsPageUtils").hasLocation(e);
          if (i || l) {
            var s, u;
            return r("immutable").fromJS(
              ((u = {}),
              (u.name = e.name),
              (u.link = e.link),
              (u.place_data = r("immutable").Map(
                ((s = {}),
                (s.type = "REALTIME"),
                (s.location_source_id = e.id),
                s),
              )),
              u),
            );
          }
          return null;
        }
        case "SINGLE": {
          var c = e.location;
          if (c != null && c.latitude != null && c.longitude != null) {
            var d,
              m,
              p,
              _ = c.latitude,
              f = c.longitude,
              g = e.link,
              h = e.name,
              y = _ + "," + f;
            return h
              ? r("immutable").fromJS(
                  ((p = {}),
                  (p.place_data = r("immutable").Map(
                    ((d = {}),
                    (d.type = "SINGLE"),
                    (d.address_string = y),
                    (d.label = h),
                    (d.latitude = _),
                    (d.longitude = f),
                    d),
                  )),
                  (p.name = (m = c.street) != null ? m : h),
                  (p.link = g),
                  p),
                )
              : null;
          }
        }
      }
      return null;
    }
    function p(e) {
      var t = o("AdsChildAttachmentsUtils").getChildAttachments(e);
      return t
        ? t.findIndex(function (e) {
            return e.place_data;
          })
        : -1;
    }
    function _(e, t, n) {
      var a,
        i = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e),
        l = o("AdsODAXUtils").maybeTranslateObjective(
          o("AdsAPICampaignGroupRecordUtils").getObjective(e.campaignGroup),
          i,
          e.campaign.optimization_goal,
        ),
        s = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e),
        u = o("AdsChildAttachmentsUtils")
          .getChildAttachmentCount(e.adgroup, s)
          .withDefault(0),
        m = o("AdsChildAttachmentsUtils").getPlaceDataIndex(e.adgroup, s),
        p = d(
          t,
          l,
          i,
          [n],
          o("AdsChildAttachmentsUtils").isStaticAndDynamicCarouselAd(e.adgroup),
          !!((a = e.adgroup.creative) != null && a.dynamic_ad_voice),
        ),
        _ = c(u, m, l),
        f = r("AdsInstagramApplicabilityUtils").hasInstagramStoryPlacementOnly(
          e.campaign,
        ),
        g = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e.adgroup),
        h = o("AdsLeadGenAdGroupUtils").isLeadGenFormEnabled(
          e.campaign,
          e.adgroup,
          s,
        );
      return !!p && _ && !f && !g && !h;
    }
    function f(e) {
      var t = e.adgroup,
        n = e.specPlugin,
        a = e.objective,
        i = e.page,
        l = e.placeDataType,
        u = e.index,
        c = u === void 0 ? s : u;
      if (!i) return t;
      var d = m(i, l);
      return d
        ? r("adsAdgroupIsDynamicProductCarouselAd")(t, n, a)
          ? o("AdsUEditorAdgroupChildAttachmentsMutators").appendPlaceData(t, d)
          : o("AdsMutators").chain(
              function (e) {
                var t = (
                  r("AdsAdgroupSemanticFields").childAttachments.get(n, e) ||
                  r("immutable").List()
                )
                  .filter(function (e) {
                    return r("isTruthy")(e) && !e.get("place_data");
                  })
                  .splice(c, 0, d);
                return r("AdsAdgroupSemanticFields").childAttachments.set(
                  n,
                  e,
                  t,
                );
              },
              function (e) {
                var t = !!r("AdsAdgroupSemanticFields").multiShareOptimized.get(
                  n,
                  e,
                );
                return t
                  ? r("AdsAdgroupSemanticFields").multiShareOptimized.set(
                      n,
                      e,
                      !1,
                    )
                  : e;
              },
              function (e) {
                return o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
                  e,
                  "CarouselProductCatalog",
                );
              },
            )(t)
        : t;
    }
    function g(e) {
      var t;
      return []
        .concat(
          o("AdsPromotedObjectOmnichannelUtils")
            .OMNICHANNEL_PROMOTED_OBJECT_TYPES,
          [
            (t = r("AdsPromotedObjectTypes")).OFFLINE_EVENT_SET,
            t.PIXEL,
            t.PLACE_PAGE_SET_ID,
            t.PRODUCT_SET,
            t.WEBSITE,
          ],
        )
        .includes(e);
    }
    function h(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.interactive_components_spec.child_attachments.get(e);
      return n == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.interactive_components_spec.child_attachments.set(
            n.splice(
              t,
              0,
              r("immutable").Map({ components: r("immutable").List() }),
            ),
            e,
          );
    }
    ((l.DEFAULT_POSITION_OF_MAP_CARD = s),
      (l.getGeoLink = u),
      (l.canAddMapCardToCarousel = c),
      (l.getSupportedPlaceDataType = d),
      (l.initDefaultPlaceData = m),
      (l.getPlaceDataPosition = p),
      (l.supportsAddPlaceDataField = _),
      (l.addPlaceData = f),
      (l.isMapCardSupportedForPromotedObject = g),
      (l.processInteractiveComponents = h));
  },
  98,
);
