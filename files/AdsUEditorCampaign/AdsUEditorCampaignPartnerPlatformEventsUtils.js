__d(
  "AdsUEditorCampaignPartnerPlatformEventsUtils",
  [
    "fbt",
    "$InternalEnum",
    "AdsActionSpecUtils",
    "AdsBulkValueUtils",
    "AdsMixedValue",
    "AdsUniformValue",
    "PartnerPlatformEventTrackingRowConfig",
    "SignalsStatusEnum",
    "filterNulls",
    "immutable",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "PARTNER_PLATFORM_EVENTS",
      "PIXEL_EVENTS",
      "WEB_AND_APP_EVENTS",
    ]);
    function u(e) {
      return e.includes("shopee") ? s._(/*BTDS*/ "Shopee") : "";
    }
    function c(e) {
      if (!e) return new (r("AdsUniformValue"))([]);
      var t = r("filterNulls")(e.getValues()).map(function (e) {
        return o("AdsActionSpecUtils")
          .filterByConstraint(r("objectValues")(e), {
            "action.type": "offsite_engagement",
          })
          .map(function (e) {
            return e.partner_account_link;
          })
          .map(function (e) {
            return Array.isArray(e) ? Array.from(e) : e != null ? [e] : [];
          });
      });
      return o("AdsBulkValueUtils").aggregate(t);
    }
    function d(e, t, n, a, i) {
      var l,
        s = e.account_id,
        u = e.business,
        d = new (r("PartnerPlatformEventTrackingRowConfig"))(
          s,
          u != null ? u.id : null,
        );
      if (a == null || a.size === 0) return d;
      var m = (a != null ? a : {}).map(function (e) {
        return {
          cluster: null,
          id: e.id,
          name: e.name,
          seller_identifier: e.seller_identifier,
          status: r("SignalsStatusEnum").ACTIVE,
        };
      });
      d = d.setSources(r("immutable").List(m));
      var p = o("AdsBulkValueUtils").aggregate(i.valueSeq().toArray()),
        _ = c(p),
        f = _ instanceof r("AdsMixedValue"),
        g =
          _ instanceof r("AdsUniformValue")
            ? (l = _.getValue()) != null
              ? l
              : []
            : [],
        h = g.filter(function (e) {
          return e.length > 0;
        }),
        y = h[0];
      return (
        (d = d.setSelectedSources(r("immutable").List(y)).setIsMixedValue(f)),
        (t || n.length > 0) && (d = d.setIsDisableEditing(!0)),
        d
      );
    }
    ((l.ConversionEventTypeOptions = e),
      (l.getThirdPartyPartnerName = u),
      (l.getPartnerPlatformEventTrackingRowConfig = d));
  },
  226,
);
