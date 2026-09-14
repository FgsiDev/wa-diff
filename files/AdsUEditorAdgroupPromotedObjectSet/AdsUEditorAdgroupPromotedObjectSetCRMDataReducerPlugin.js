__d(
  "AdsUEditorAdgroupPromotedObjectSetCRMDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCampaignPromotedObjectSetCRMDataActionFlux",
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
              var n = d(t.crmData);
              return c(n, e);
            });
          },
          o("AdsUEditorCampaignPromotedObjectSetCRMDataActionFlux").actionType,
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
      if (!o) return u([t], n);
      var a = o.filter(function (t) {
        return !(e || (e = r("areEqual")))(t["action.type"], [
          "leadgen_quality_conversion",
        ]);
      });
      return (a.push(t), u(a, n));
    }
    function d(e) {
      var t,
        n = ((t = {}), (t["action.type"] = ["leadgen_quality_conversion"]), t);
      return (
        e.type === "DATA_SET" ? (n.dataset = [e.id]) : (n.fb_pixel = [e.id]),
        n
      );
    }
    var m = s;
    l.default = m;
  },
  98,
);
