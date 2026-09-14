__d(
  "AdsUEditorAdgroupMessengerPromotedObjectSetPartnerEventReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignMessengerPromotedObjectSetPartnerEventActionFlux",
    "AdsUEditorCampaignPartnerPlatformEventsUtils",
    "areEqual",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = d(
                t.selectedPartnerAccountLinkingID,
                t.selectedConversionEventType,
              );
              return c(n, e);
            });
          },
          o(
            "AdsUEditorCampaignMessengerPromotedObjectSetPartnerEventActionFlux",
          ).actionType,
        ),
      };
    function u(e, t) {
      return e.length
        ? r("AdsAdgroupRecordAccessors").tracking_specs.set(
            r("immutable").fromJS(e),
            t,
          )
        : r("AdsAdgroupRecordAccessors").tracking_specs.delete(t);
    }
    function c(t, n) {
      var o = n.tracking_specs && n.tracking_specs.toJS();
      if (!o) return u([t].filter(Boolean), n);
      var a = o.filter(function (t) {
        return !(e || (e = r("areEqual")))(t["action.type"], [
          "offsite_engagement",
        ]);
      });
      return (t != null && a.push(t), u(a, n));
    }
    function d(e, t) {
      if (
        e != null &&
        t ===
          o("AdsUEditorCampaignPartnerPlatformEventsUtils")
            .ConversionEventTypeOptions.PARTNER_PLATFORM_EVENTS
      ) {
        var n,
          r = ((n = {}), (n["action.type"] = ["offsite_engagement"]), n);
        return ((r.partner_account_link = [e]), r);
      }
      return null;
    }
    var m = s;
    l.default = m;
  },
  98,
);
