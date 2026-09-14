__d(
  "AdsTargetingAudienceConstants",
  [
    "fbt",
    "$InternalEnum",
    "AdsHelpTrayUIActions",
    "AdsUniqueMetricsID",
    "GeoLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "__invalid_custom_audience",
      d = "regulated_categories_audience",
      m = s._(
        /*BTDS*/ "Reach {=m2} who make a purchase after messaging your Page in Messenger",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              onClick: function () {
                return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
                  o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                );
              },
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      ),
      p = s._(
        /*BTDS*/ "Now you can target ads to {=m2} who confirmed an order, added to order history, or people with conversations where a purchase was reported.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              onClick: function () {
                return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
                  o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                );
              },
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      ),
      _ = s._(
        /*BTDS*/ "Reach {=m2} who made a purchase or became a lead in WhatsApp",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              onClick: function () {
                return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
                  o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                );
              },
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      ),
      f = s._(
        /*BTDS*/ "Now you can target ads to {=m2} who messaged your Page on WhatsApp and then made a purchase or became a lead.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              onClick: function () {
                return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
                  o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                );
              },
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      ),
      g = n("$InternalEnum")({
        GEOGRAPHICAL: "geographical",
        STORE_SET: "store_set",
      }),
      h = s._(/*BTDS*/ "Geographical area"),
      y = s._(
        /*BTDS*/ "Refine your audience location by country, state or other geographical distance",
      ),
      C = s._(/*BTDS*/ "Store sets"),
      b = s._(
        /*BTDS*/ "Refine your audience location by the physical location for your business or set of stores",
      ),
      v = s._(
        /*BTDS*/ "You have selected a custom audience that we\u2019re still matching to profiles on Meta technologies. This can take up to 3 days. You can start running ads with this audience right away, but be aware that your audience size will increase as the audience is populated.",
      ),
      S = s._(
        /*BTDS*/ "We're matching your audience to profiles on Meta technologies, which can take up to 3 days. You can start running ads with this audience straight away.",
      ),
      R = s._(
        /*BTDS*/ "We're matching your audience to profiles on Meta technologies, which can take up to 3 days. You can start running ads with this audience once it's ready.",
      ),
      L = function (t) {
        return s._(
          /*BTDS*/ "New {objective} campaign created using a custom audience",
          [s._param("objective", t)],
        );
      },
      E = function (t, n) {
        return s._(
          /*BTDS*/ "New {objective} campaign created using {count} custom audiences",
          [s._param("objective", t), s._param("count", n)],
        );
      },
      k = function (t) {
        return s._(
          /*BTDS*/ "Your custom audience, {customAudienceName}, was used to create this campaign. You can see it under the audience settings in your new ad set.",
          [s._param("customAudienceName", t)],
        );
      },
      I = s._(
        /*BTDS*/ "You can see the custom audiences used to create this campaign under the audience settings in your new ad set.",
      );
    ((l.INVALID_AUDIENCE_DATA_SOURCE_KEY = c),
      (l.REGULATED_CATEGORIES_AUDIENCE = d),
      (l.PAGE_MESSAGING_PURCHASE_HEADER = m),
      (l.PAGE_MESSAGING_PURCHASE_BODY = p),
      (l.PAGE_WHATSAPP_DFO_HEADER = _),
      (l.PAGE_WHATSAPP_DFO_BODY = f),
      (l.LocationTargetingValues = g),
      (l.GEPGRAPHICAL_TARGETING_RADIO_ITEM_LABEL = h),
      (l.GEPGRAPHICAL_TARGETING_RADIO_ITEM_DESCRIPTION = y),
      (l.STORE_TARGETING_SET_RADIO_ITEM_LABEL = C),
      (l.STORE_SET_TARGETING_RADIO_ITEM_DESCRIPTION = b),
      (l.SELECTED_POPULATING_AUDIENCE_NOTICE = v),
      (l.SELECTED_POPULATING_AUDIENCE_NOTICE_NEW = S),
      (l.POPULATING_AUDIENCE_NOTICE_TARGET_FREQUENCY_FRICTION_MEDIUM_ROCK = R),
      (l.CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_HEADER = L),
      (l.MULTIPLE_CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_HEADER = E),
      (l.CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_BODY = k),
      (l.MULTIPLE_CA_DEFAULTED_FROM_EXTERNAL_SOURCE_TOAST_BODY = I));
  },
  226,
);
