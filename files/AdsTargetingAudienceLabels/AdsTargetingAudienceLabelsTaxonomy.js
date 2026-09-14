__d(
  "AdsTargetingAudienceLabelsTaxonomy",
  ["fbt", "$InternalEnum", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "LEADS",
        "CUSTOMER_TYPES",
        "ENGAGED_AUDIENCES",
        "CUSTOMERS",
        "BUSINESS_CONTROLS",
        "OTHER_AUDIENCES",
      ]),
      u = s._(/*BTDS*/ "Engaged audiences"),
      c = s._(
        /*BTDS*/ "Prospective customers who've engaged with your business but haven't converted yet.",
      ),
      d = s._(/*BTDS*/ "Other audiences"),
      m = s._(/*BTDS*/ "Audiences that don't fit into the other label groups."),
      p = s._(
        /*BTDS*/ "Audiences who have made a purchase from your business.",
      ),
      _ = s._(/*BTDS*/ "High value"),
      f = s._(/*BTDS*/ "Customers you consider valuable to your business."),
      g = s._(/*BTDS*/ "Low value"),
      h = s._(
        /*BTDS*/ "Customers who are of low or negative value to your business.",
      ),
      y = s._(/*BTDS*/ "Recent purchasers"),
      C = s._(
        /*BTDS*/ "Customers who have made a purchase or converted recently.",
      ),
      b = s._(/*BTDS*/ "At risk"),
      v = s._(
        /*BTDS*/ "Customers who are showing signs of disengaging or churning.",
      ),
      S = s._(/*BTDS*/ "Disengaged"),
      R = s._(
        /*BTDS*/ "Customers who have not made a purchase recently or stopped subscribing.",
      ),
      L = s._(/*BTDS*/ "Qualified leads"),
      E = s._(/*BTDS*/ "Leads that meet your qualification criteria."),
      k = s._(/*BTDS*/ "Disqualified leads"),
      I = s._(/*BTDS*/ "Leads that don't meet your qualification criteria."),
      T = s._(/*BTDS*/ "Customers"),
      D = s._(/*BTDS*/ "Your existing customers."),
      x = s._(/*BTDS*/ "General customers"),
      $ = s._(/*BTDS*/ "App installers"),
      P = s._(/*BTDS*/ "App users"),
      N = s._(/*BTDS*/ "People that are currently using your app."),
      M = s._(/*BTDS*/ "Trial users"),
      w = s._(/*BTDS*/ "People who started a trial of your product."),
      A = s._(/*BTDS*/ "Cart abandoners"),
      F = s._(
        /*BTDS*/ "People who added a product to their cart but didn't check out.",
      ),
      O = s._(/*BTDS*/ "Other engaged users"),
      B = s._(/*BTDS*/ "People that showed interest but are not customers."),
      W = s._(/*BTDS*/ "Personas"),
      q = s._(/*BTDS*/ "People who fit your business' customer personas."),
      U = s._(/*BTDS*/ "Other 1"),
      V = s._(/*BTDS*/ "Other 2"),
      H = s._(/*BTDS*/ "Other 3"),
      G = s._(/*BTDS*/ "Audiences that don't fit into the other labels.");
    function z() {
      return r("gkx")("19004");
    }
    var j = [e.ENGAGED_AUDIENCES, e.CUSTOMERS, e.OTHER_AUDIENCES];
    function K(t) {
      switch (t) {
        case e.ENGAGED_AUDIENCES:
          return { name: u, description: c };
        case e.CUSTOMERS:
          return { name: T, description: p };
        case e.OTHER_AUDIENCES:
        case e.LEADS:
        case e.CUSTOMER_TYPES:
        case e.BUSINESS_CONTROLS:
          return { name: d, description: m };
      }
    }
    function Q(t) {
      switch (t) {
        case e.ENGAGED_AUDIENCES:
          return [
            { value: "qualified_leads", name: L, description: E },
            { value: "disqualified_leads", name: k, description: I },
            { value: "app_users", name: z() ? $ : P, description: N },
            { value: "trial_users", name: M, description: w },
            { value: "cart_abandoners", name: A, description: F },
            { value: "engaged_users", name: O, description: B },
          ];
        case e.CUSTOMERS:
          return [
            { value: "high_value_customers", name: _, description: f },
            { value: "low_value_customers", name: g, description: h },
            { value: "recent_purchasers", name: y, description: C },
            { value: "at_risk", name: b, description: v },
            { value: "disengaged", name: S, description: R },
            { value: "general_customers", name: x, description: D },
          ];
        case e.OTHER_AUDIENCES:
        case e.LEADS:
        case e.CUSTOMER_TYPES:
        case e.BUSINESS_CONTROLS:
          return [
            { value: "personas", name: W, description: q },
            { value: "other_1", name: U, description: G },
            { value: "other_2", name: V, description: G },
            { value: "other_3", name: H, description: G },
          ];
      }
    }
    var X = new Set(["restricted_users", "personas"]),
      Y = new Set(["cart_abandoners", "recent_purchasers"]);
    ((l.AudienceLabelGroup = e),
      (l.AUDIENCE_LABEL_HIGH_VALUE_CUSTOMERS_NAME = _),
      (l.AUDIENCE_LABEL_LOW_VALUE_CUSTOMERS_NAME = g),
      (l.AUDIENCE_LABEL_QUALIFIED_LEADS_NAME = L),
      (l.AUDIENCE_LABEL_DISQUALIFIED_LEADS_NAME = k),
      (l.AUDIENCE_LABEL_CUSTOMER_LEADS_NAME = T),
      (l.AUDIENCE_LABEL_GENERAL_CUSTOMERS_NAME = x),
      (l.AUDIENCE_LABEL_V2_TAXONOMY_GROUPS = j),
      (l.getAudienceSelectorV2GroupInfo = K),
      (l.getAudienceSelectorV2GroupItems = Q),
      (l.DEPRECATED_AUDIENCE_LABELS = X),
      (l.VAR_BETA_ONLY_AUDIENCE_LABELS = Y));
  },
  226,
);
