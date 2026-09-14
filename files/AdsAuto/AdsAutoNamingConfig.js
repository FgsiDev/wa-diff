__d(
  "AdsAutoNamingConfig",
  ["fbt", "invariant", "AdsAutoNamingTemplate"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = "custom:",
      c = s._(/*BTDS*/ "Enter custom text"),
      d = { adgroup: !0, campaign: !0, campaigngroup: !1 },
      m = { adgroup: !0, campaign: !1, campaigngroup: !1 },
      p = Object.freeze({
        ADGROUP_ID: "adgroupid",
        ADGROUP_NAME: "name",
        ADGROUP_UPDATED_TIME: "adgroupupdatedtime",
        AGE: "age",
        BID_TYPE: "bidtype",
        CALL_TO_ACTION: "calltoaction",
        CAMPAIGN_ID: "campaignid",
        CAMPAIGN_NAME: "campaignname",
        CAMPAIGN_GROUP_ID: "campaigngroupid",
        CAMPAIGN_GROUP_NAME: "campaigngroupname",
        CAMPAIGN_UPDATED_TIME: "campaignupdatedtime",
        CITY: "city",
        CUSTOM_AUDIENCE_EXCLUDED: "customaudienceexcluded",
        CUSTOM_AUDIENCE_INCLUDED: "customaudienceincluded",
        DISPLAY_SEQUENCE: "displaysequence",
        COUNTRY: "country",
        GENDER: "gender",
        HEADLINE: "headline",
        IMAGE_HASH: "imagehash",
        INSTAGRAM_ACCOUNT_ID: "instagramaccountid",
        INTERESTS: "interests",
        MOBILE_DEVICE: "mobiledevice",
        OBJECTIVE: "objective",
        OPERATING_SYSTEM: "operatingsystem",
        PAGE_ID: "pageid",
        ZIPCODE: "zipcode",
      }),
      _ = {
        ADGROUP: "ADGROUP",
        CAMPAIGN: "CAMPAIGN",
        CAMPAIGN_GROUP: "CAMPAIGN_GROUP",
        CUSTOM_TEXT: "CUSTOM_TEXT",
      },
      f = {
        ADGROUP: s._(/*BTDS*/ "Ad"),
        CAMPAIGN: s._(/*BTDS*/ "Ad set"),
        CAMPAIGN_GROUP: s._(/*BTDS*/ "Campaign"),
        CUSTOM_TEXT: s._(/*BTDS*/ "Custom text"),
      },
      g = [
        {
          name: p.ADGROUP_ID,
          label: s._(/*BTDS*/ "Current ad ID"),
          supportedTypes: { adgroup: !0, campaign: !1, campaigngroup: !1 },
          canTruncate: !1,
          category: _.ADGROUP,
        },
        {
          name: p.ADGROUP_NAME,
          label: s._(/*BTDS*/ "Current ad name"),
          supportedTypes: { adgroup: !0, campaign: !1, campaigngroup: !1 },
          canTruncate: !1,
          category: _.ADGROUP,
        },
        {
          name: p.CAMPAIGN_ID,
          label: s._(/*BTDS*/ "Ad set ID"),
          supportedTypes: { adgroup: !0, campaign: !0, campaigngroup: !1 },
          canTruncate: !0,
          category: _.CAMPAIGN,
        },
        {
          name: p.CAMPAIGN_NAME,
          label: s._(/*BTDS*/ "Ad set name"),
          supportedTypes: { adgroup: !0, campaign: !1, campaigngroup: !1 },
          canTruncate: !0,
          category: _.CAMPAIGN,
        },
        {
          name: p.CAMPAIGN_GROUP_ID,
          label: s._(/*BTDS*/ "Campaign ID"),
          supportedTypes: { adgroup: !0, campaign: !0, campaigngroup: !0 },
          canTruncate: !0,
          category: _.CAMPAIGN_GROUP,
        },
        {
          name: p.CAMPAIGN_GROUP_NAME,
          label: s._(/*BTDS*/ "Campaign name"),
          supportedTypes: { adgroup: !0, campaign: !0, campaigngroup: !0 },
          canTruncate: !0,
          category: _.CAMPAIGN_GROUP,
        },
        {
          name: p.OBJECTIVE,
          label: s._(/*BTDS*/ "Objective"),
          supportedTypes: { adgroup: !0, campaign: !0, campaigngroup: !0 },
          canTruncate: !1,
          category: _.CAMPAIGN_GROUP,
        },
        {
          name: p.GENDER,
          label: s._(/*BTDS*/ "Gender"),
          supportedTypes: d,
          canTruncate: !1,
          category: _.CAMPAIGN,
        },
        {
          name: p.AGE,
          label: s._(/*BTDS*/ "Age"),
          supportedTypes: d,
          canTruncate: !1,
          category: _.CAMPAIGN,
        },
      ]
        .concat([
          {
            name: p.COUNTRY,
            label: s._(/*BTDS*/ "Country"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
          {
            name: p.CITY,
            label: s._(/*BTDS*/ "City"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
          {
            name: p.ZIPCODE,
            label: s._(/*BTDS*/ "ZIP code"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
          {
            name: p.INTERESTS,
            label: s._(/*BTDS*/ "Interests"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
          {
            name: p.CALL_TO_ACTION,
            label: s._(/*BTDS*/ "Call to action"),
            supportedTypes: m,
            canTruncate: !1,
            category: _.ADGROUP,
          },
          {
            name: p.HEADLINE,
            label: s._(/*BTDS*/ "Headline"),
            supportedTypes: m,
            canTruncate: !0,
            category: _.ADGROUP,
          },
          {
            name: p.IMAGE_HASH,
            label: s._(/*BTDS*/ "Image hash"),
            supportedTypes: m,
            canTruncate: !0,
            category: _.ADGROUP,
          },
        ])
        .concat([
          {
            name: p.PAGE_ID,
            label: s._(/*BTDS*/ "Page ID"),
            supportedTypes: m,
            canTruncate: !1,
            category: _.ADGROUP,
          },
          {
            name: p.INSTAGRAM_ACCOUNT_ID,
            label: s._(/*BTDS*/ "Instagram profile ID"),
            supportedTypes: m,
            canTruncate: !1,
            category: _.ADGROUP,
          },
          {
            name: p.DISPLAY_SEQUENCE,
            label: s._(/*BTDS*/ "Display sequence"),
            supportedTypes: { adgroup: !0, campaign: !1, campaigngroup: !1 },
            canTruncate: !1,
            category: _.ADGROUP,
          },
          {
            name: p.ADGROUP_UPDATED_TIME,
            label: s._(/*BTDS*/ "Ad updated date"),
            supportedTypes: { adgroup: !0, campaign: !1, campaigngroup: !1 },
            canTruncate: !1,
            category: _.ADGROUP,
          },
          {
            name: p.CAMPAIGN_UPDATED_TIME,
            label: s._(/*BTDS*/ "Ad set updated date"),
            supportedTypes: { adgroup: !1, campaign: !0, campaigngroup: !1 },
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
          {
            name: p.OPERATING_SYSTEM,
            label: s._(/*BTDS*/ "Mobile operating system"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
        ])
        .concat([
          {
            name: p.MOBILE_DEVICE,
            label: s._(/*BTDS*/ "Mobile device"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
          {
            name: p.CUSTOM_AUDIENCE_INCLUDED,
            label: s._(/*BTDS*/ "Custom audiences (included)"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
          {
            name: p.CUSTOM_AUDIENCE_EXCLUDED,
            label: s._(/*BTDS*/ "Custom audiences (excluded)"),
            supportedTypes: d,
            canTruncate: !1,
            category: _.CAMPAIGN,
          },
        ]),
      h = {};
    g.forEach(function (e) {
      h[e.name] = e;
    });
    var y = g.filter(function (e) {
        return v(e.name, "adgroup");
      }),
      C = g.filter(function (e) {
        return v(e.name, "campaign");
      }),
      b = g.filter(function (e) {
        return v(e.name, "campaigngroup");
      });
    function v(e, t) {
      return (
        Object.prototype.hasOwnProperty.call(h, e) || u(0, 3059),
        h[e].supportedTypes[t] === !0
      );
    }
    function S(t) {
      return t.indexOf(e) === 0;
    }
    function R(t) {
      return t === e ? c : '"' + t.substr(e.length) + '"';
    }
    function L() {
      return new (r("AdsAutoNamingTemplate"))({
        fields: [],
        fieldSeparator: "_",
        listSeparator: ",",
      });
    }
    function E(e) {
      return S(e) ? _.CUSTOM_TEXT : (h[e] || u(0, 3060), h[e].category);
    }
    function k(e) {
      return S(e) ? R(e) : (h[e] || u(0, 3060), h[e].label);
    }
    function I(e) {
      return (_[e] || u(0, 3061), f[e]);
    }
    function T() {
      return y;
    }
    function D() {
      return C;
    }
    function x() {
      return b;
    }
    function $(e) {
      return v(e, "adgroup");
    }
    function P(e) {
      return v(e, "campaign");
    }
    function N(e) {
      return v(e, "campaigngroup");
    }
    function M(e) {
      return S(e)
        ? !1
        : (Object.prototype.hasOwnProperty.call(h, e) || u(0, 3062),
          h[e].canTruncate);
    }
    function w(e) {
      return S(e)
        ? !1
        : (Object.prototype.hasOwnProperty.call(h, e) || u(0, 3062), !0);
    }
    ((l.CUSTOM_FIELD_MARKER = e),
      (l.AUTO_NAMING_FIELD_NAMES = p),
      (l.CATEGORIES = _),
      (l.isCustomField = S),
      (l.getDefaultTemplate = L),
      (l.getFieldCategory = E),
      (l.getFieldLabel = k),
      (l.getCategoryLabel = I),
      (l.getAdgroupFields = T),
      (l.getCampaignFields = D),
      (l.getCampaigngroupFields = x),
      (l.fieldSupportsAdgroup = $),
      (l.fieldSupportsCampaign = P),
      (l.fieldSupportsCampaignGroup = N),
      (l.fieldCanBeTruncated = M),
      (l.fieldCanBeTrimmed = w));
  },
  226,
);
