__d(
  "AdsTemplateDataDefaultsStoreUtils",
  ["AdsPromotedObjectTypes", "CatalogVertical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "";
    function s(e) {
      return e === r("AdsPromotedObjectTypes").WEB_AND_SHOP;
    }
    function u(e, t, n) {
      switch (e) {
        case "multi_share_end_card":
          return s();
      }
      return c(e, t, n);
    }
    function c(e, t, n) {
      switch (t) {
        case r("CatalogVertical").AUTOMOTIVE_MODELS:
          return g(e);
        case r("CatalogVertical").COMMERCE:
          return n != null ? v(e, n) : _(e);
        case r("CatalogVertical").DESTINATIONS:
          return f(e);
        case r("CatalogVertical").FLIGHTS:
          return C(e);
        case r("CatalogVertical").HOME_LISTINGS:
          return h(e);
        case r("CatalogVertical").HOTELS:
          return y(e);
        case r("CatalogVertical").LOCAL_SERVICE_BUSINESSES:
          return d(e);
        case r("CatalogVertical").VEHICLE_OFFERS:
          return m(e);
        case r("CatalogVertical").VEHICLES:
          return p(e);
        default:
          return _(e);
      }
    }
    function d(t) {
      switch (t) {
        case "name":
          return "{{local_service_business.title}}";
        case "description":
          return "{{local_service_business.description}}";
        default:
          return e;
      }
    }
    function m(t) {
      switch (t) {
        case "name":
          return "{{vehicle_offer.title}}";
        case "description":
          return "{{vehicle_offer.description}}";
        default:
          return e;
      }
    }
    function p(t) {
      switch (t) {
        case "name":
          return "{{vehicle.title}}";
        case "description":
          return "{{vehicle.description}}";
        default:
          return e;
      }
    }
    function _(t) {
      switch (t) {
        case "name":
          return "{{product.name}}";
        default:
          return e;
      }
    }
    function f(t) {
      switch (t) {
        case "name":
          return "{{destination.name}}";
        case "description":
          return "{{destination.description}}";
        default:
          return e;
      }
    }
    function g(t) {
      switch (t) {
        case "name":
          return "{{automotive_model.title}}";
        case "description":
          return "{{automotive_model.description}}";
        default:
          return e;
      }
    }
    function h(t) {
      switch (t) {
        case "name":
          return "{{home_listing.name}}";
        case "description":
          return "{{home_listing.description}}";
        default:
          return e;
      }
    }
    function y(t) {
      switch (t) {
        case "name":
          return "{{hotel.name}}";
        case "description":
          return "{{hotel.description}}";
        default:
          return e;
      }
    }
    function C(t) {
      switch (t) {
        case "name":
        case "description":
          return "";
        default:
          return e;
      }
    }
    function b() {
      return e;
    }
    function v(e, t) {
      switch (t) {
        case "ACTIVITY":
          return S(e);
        case "APP_AND_SOFTWARE":
          return R(e);
        case "ARTICLE_AND_PUBLICATION":
          return L(e);
        case "MEDIA_TITLE":
          return E(e);
        case "SERVICE":
          return k(e);
        case "HOTEL":
          return I(e);
        case "PRODUCT":
        default:
          return _(e);
      }
    }
    function S(t) {
      switch (t) {
        case "name":
          return "{{activity.name}}";
        case "description":
          return "{{activity.description}}";
        default:
          return e;
      }
    }
    function R(t) {
      switch (t) {
        case "name":
          return "{{app_and_software.name}}";
        case "description":
          return "{{app_and_software.description}}";
        default:
          return e;
      }
    }
    function L(t) {
      switch (t) {
        case "name":
          return "{{article_and_publication.name}}";
        case "description":
          return "{{article_and_publication.description}}";
        default:
          return e;
      }
    }
    function E(t) {
      switch (t) {
        case "name":
          return "{{media_title.name}}";
        case "description":
          return "{{media_title.description}}";
        default:
          return e;
      }
    }
    function k(t) {
      switch (t) {
        case "name":
          return "{{service.name}}";
        case "description":
          return "{{service.description}}";
        default:
          return e;
      }
    }
    function I(t) {
      switch (t) {
        case "name":
          return "{{hotel.name}}";
        case "description":
          return "{{hotel.description}}";
        default:
          return e;
      }
    }
    ((l.getMultiShareEndCardDefault = s),
      (l.getDefault = u),
      (l.getStringDefault = c),
      (l.getLocalServiceBusinessDefault = d),
      (l.getVehicleOfferDefault = m),
      (l.getVehicleDefault = p),
      (l.getCommerceDefault = _),
      (l.getDestinationDefault = f),
      (l.getAutomotiveModelDefault = g),
      (l.getHomeListingDefault = h),
      (l.getHotelDefault = y),
      (l.getFlightDefault = C),
      (l.getStoreVisitsDefault = b));
  },
  98,
);
