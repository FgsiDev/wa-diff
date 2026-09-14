__d(
  "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "AdsUEditorDestinationOptimizationUtils",
    "DestinationOptimizationUtils.react",
    "ODS",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a, i, l, s, u) {
      var c,
        d = o("AdsUEditorDestinationOptimizationUtils").shouldStickyOptOutDO(
          t.account_id,
          s,
        ),
        m = !(d && !(i != null && i)) && n ? "OPT_IN" : "OPT_OUT";
      if (a) {
        var p;
        (r("AdsInterfacesLogger").log({
          eventName: "ads_destination_optimization_enter_url",
          data:
            ((p = {}),
            (p.adgroup_id = t.id),
            (p.is_enabled = a),
            (p.is_edit = i === !0),
            (p.new_value = m),
            (p.old_value = r(
              "AdsAdgroupRecordAccessors",
            ).creative.destination_spec.website.optimization.status.get(t)),
            (p.edit_source = l),
            (p.url = u),
            p),
        }),
          (e || (e = o("ODS"))).bumpEntityKey(
            9696,
            "destination_optimization",
            "ads_destination_optimization_enter_url." +
              String(l) +
              "." +
              String(m),
          ));
      } else if (
        l ===
        o("DestinationOptimizationUtils.react")
          .DestinationOptimizationEditSource.PRE_CONDITION_DEFAULTING
      ) {
        var _;
        (r("AdsInterfacesLogger").log({
          eventName: "ads_destination_optimization_default_optin",
          data:
            ((_ = {}),
            (_.adgroup_id = t.id),
            (_.is_enabled = a),
            (_.is_edit = i === !0),
            (_.new_value = m),
            (_.edit_source = l),
            _),
        }),
          (e || (e = o("ODS"))).bumpEntityKey(
            9696,
            "destination_optimization",
            "ads_destination_optimization_default_optin." +
              String(l) +
              "." +
              String(m),
          ));
      } else {
        var f;
        (r("AdsInterfacesLogger").log({
          eventName: "ads_destination_optimization_click_checkbox",
          data:
            ((f = {}),
            (f.adgroup_id = t.id),
            (f.is_enabled = a),
            (f.is_edit = i === !0),
            (f.new_value = m),
            (f.old_value = r(
              "AdsAdgroupRecordAccessors",
            ).creative.destination_spec.website.optimization.status.get(t)),
            (f.edit_source = l),
            f),
        }),
          (e || (e = o("ODS"))).bumpEntityKey(
            9696,
            "destination_optimization",
            "ads_destination_optimization_click_checkbox." +
              String(l) +
              "." +
              String(m),
          ));
      }
      return (
        r("AdsInterfacesLogger").log({
          eventName: "destination_optimization_DO_status_set",
          data:
            ((c = {}),
            (c.adgroup_id = t.id),
            (c.is_config_enabled = d),
            (c.is_crop_better = n),
            (c.is_enabled = a),
            (c.is_edit = i === !0),
            (c.new_value = m),
            (c.old_value = r(
              "AdsAdgroupRecordAccessors",
            ).creative.destination_spec.website.optimization.status.get(t)),
            (c.edit_source = l),
            c),
        }),
        o("AdsMutators").chain(
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.destination_spec.website.optimization.status.set(m, e);
          },
          function (e) {
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.destination_spec.website.optimization.type.set(
              "website_destination_optimization",
              e,
            );
          },
        )(t)
      );
    }
    function u(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.destination_spec.website.delete(e);
    }
    ((l.setWebsiteDestinationOptimizationStatus = s),
      (l.clearWebsiteDestinationOptimization = u));
  },
  98,
);
