__d(
  "AdsUEditorSetBrandedContentSecondaryIdentityLoggerPlugin",
  [
    "AdsInterfacesLogger",
    "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.adgroupIDs.forEach(function (e) {
            if (
              r("isTruthy")(t.secondaryPageID) ||
              r("isTruthy")(t.secondaryIgV2ID)
            ) {
              var n = o(
                  "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
                ).getPrimaryIdentityLoggingData(
                  t.primaryPageID,
                  t.primaryInstagramActorID,
                ),
                a = o(
                  "AdsUEditorAdgroupBrandedContentIdentityModalUtils",
                ).getPartnerIdentityLoggingData(
                  t.secondaryPageID,
                  t.secondaryIgV2ID,
                ),
                i = babelHelpers.extends({}, n, a);
              if (t.boostingType != null) {
                var l;
                r("AdsInterfacesLogger").log({
                  eventName: "branded_content_partner_modal_done_clicked",
                  eventCategory: "user_action",
                  data:
                    ((l = {}),
                    (l.adgroup_id = e),
                    (l.prior_data = JSON.stringify(i)),
                    (l.branded_content_boosting_type = t.boostingType),
                    l),
                });
              } else {
                var s;
                r("AdsInterfacesLogger").log({
                  eventName: "branded_content_partner_modal_done_clicked",
                  eventCategory: "user_action",
                  data:
                    ((s = {}),
                    (s.adgroup_id = e),
                    (s.prior_data = JSON.stringify(i)),
                    s),
                });
              }
            }
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
