__d(
  "AdsAggregateTargetingSpecsSchema",
  [
    "AdsAPITargetFields",
    "AdsEmptyGeoMixedBulkValueTypes",
    "AdsEmptySetMixedBulkValueTypes",
    "AdsEmptyUniformMixedBulkValueTypes",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {};
    (r("getObjectValues")((e = r("AdsAPITargetFields"))).forEach(function (e) {
      c[e] = r("AdsEmptySetMixedBulkValueTypes");
    }),
      (c[e.AGE_MAX] = s = r("AdsEmptyUniformMixedBulkValueTypes")),
      (c[e.AGE_MIN] = s),
      (c[e.USER_DEVICE] = u = r("AdsEmptySetMixedBulkValueTypes")),
      (c[e.USER_OS] = u),
      (c[e.WIRELESS_CARRIER] = u),
      (c[e.EXCLUDED_PUBLISHER_LIST_IDS] = u),
      (c[e.FACEBOOK_POSITIONS] = u),
      (c[e.FB_DEAL_ID] = s),
      (c[e.PUBLISHER_PLATFORMS] = u),
      (c[e.AUDIENCE_NETWORK_POSITIONS] = u),
      (c[e.INSTAGRAM_POSITIONS] = u),
      (c[e.MESSENGER_POSITIONS] = u),
      (c[e.WHATSAPP_POSITIONS] = u),
      (c[e.DEVICE_PLATFORMS] = u),
      (c[e.GEO_LOCATIONS] = r("AdsEmptyGeoMixedBulkValueTypes")),
      (c[e.EXCLUDED_GEO_LOCATIONS] = r("AdsEmptyGeoMixedBulkValueTypes")),
      (c[e.PROSPECTING_AUDIENCE] = s),
      (c[e.CATALOG_BASED_TARGETING] = u),
      (c[e.BRAND_SAFETY_CONTENT_FILTER_LEVELS] = u),
      (c[e.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES] = u),
      (c[e.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED] = s),
      (c[e.CONTEXTUAL_TARGETING_CATEGORIES] = u));
    var d = c;
    l.default = d;
  },
  98,
);
