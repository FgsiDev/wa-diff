__d(
  "AdCampaignToastUtils",
  [
    "fbt",
    "AdsPlacementExcludeParentPositionModalUtils",
    "AdsPlacementPositionPlugins",
    "AdsUEditorCampaignAddMultiplePlacementsAction",
    "AdsUEditorHostIDs",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var a = null,
        l = t.groupingPluginKey,
        u = t.parentPositionPluginKey,
        c = t.positionPluginKeys;
      if (e === !1) {
        var d = function () {
          r("AdsUEditorCampaignAddMultiplePlacementsAction").dispatch(
            {
              campaignIDs: Array.from(t.campaignIDs),
              dismissToast: !0,
              groupingPluginKey: l,
              hostID: r("AdsUEditorHostIDs").EDITING,
              positionPluginKeys: c,
              parentPositionPluginKey: u,
            },
            { line: "59", module: "AdCampaignToastUtils.js", moduleID: i.id },
          );
        };
        a = [{ label: s._(/*BTDS*/ "Undo"), onClick: d, use: "default" }];
      }
      var m =
          u != null
            ? r("AdsPlacementPositionPlugins").get(u).nameWithPlatform
            : null,
        p = 0;
      if (e && l != null && u == null && c.size > 0) {
        var _ = o(
          "AdsPlacementExcludeParentPositionModalUtils",
        ).getGroupingPluginFromEligiblePositionGroups(l, n);
        if (_ != null) {
          var f;
          ((m = (f = _ == null ? void 0 : _.name) != null ? f : null),
            (p = o(
              "AdsPlacementExcludeParentPositionModalUtils",
            ).getChildPlacementsOutsideGroupingPlugin(_, n).length));
        }
        return {
          bodyText: s._(
            /*BTDS*/ "You included the {grouping_plugin_name} category, which included {position_plugin_keys_count} placements.",
            [
              s._param("grouping_plugin_name", _ == null ? void 0 : _.name),
              s._param("position_plugin_keys_count", c.size),
            ],
          ),
          callsToAction: a != null ? a : void 0,
          cardType: "info",
          canDismiss: !0,
          "data-testid": "grouping-plugin-included-confirmation-toast",
          dismissTimer: 5e3,
          header: s._(
            /*BTDS*/ "{position_plugin_keys_count} placements included",
            [s._param("position_plugin_keys_count", c.size)],
          ),
          id: "campaignPlacementConfirmationToast",
        };
      } else if (!e && l != null && u == null && c.size > 0) {
        var g = o(
          "AdsPlacementExcludeParentPositionModalUtils",
        ).getGroupingPluginFromEligiblePositionGroups(l, n);
        if (g != null) {
          var h;
          ((m = (h = g == null ? void 0 : g.name) != null ? h : null),
            (p = o(
              "AdsPlacementExcludeParentPositionModalUtils",
            ).getChildPlacementsOutsideGroupingPlugin(g, n).length));
        }
        return {
          bodyText: s._(
            /*BTDS*/ "You excluded the {grouping_plugin_name} category, which excluded {position_plugin_keys_count_outside_of_grouping} placements.",
            [
              s._param("grouping_plugin_name", g == null ? void 0 : g.name),
              s._param(
                "position_plugin_keys_count_outside_of_grouping",
                c.size,
              ),
            ],
          ),
          callsToAction: a != null ? a : void 0,
          cardType: "success",
          canDismiss: !0,
          "data-testid": "grouping-plugin-excluded-confirmation-toast",
          dismissTimer: 5e3,
          header: s._(
            /*BTDS*/ "{position_plugin_keys_count} placements excluded",
            [s._param("position_plugin_keys_count", c.size)],
          ),
          id: "campaignPlacementConfirmationToast",
        };
      } else if (l == null && c.size > 0 && u != null && !e) {
        var y,
          C = Array.from(c)
            .map(function (e) {
              return r("AdsPlacementPositionPlugins").get(e);
            })
            .filter(Boolean);
        return {
          bodyText: s._(
            /*BTDS*/ "{parent_placement_name} and {position_plugin_keys_count} other placements excluded.",
            [
              s._param(
                "parent_placement_name",
                (y = C.at(0)) == null ? void 0 : y.nameWithPlatform,
              ),
              s._param(
                "position_plugin_keys_count",
                c.size > 0 ? c.size - 1 : 0,
              ),
            ],
          ),
          callsToAction: a != null ? a : void 0,
          cardType: "success",
          canDismiss: !0,
          "data-testid": "placement-exclusion-confirmation-toast",
          dismissTimer: 5e3,
          header: s._(
            /*BTDS*/ "{position_plugin_keys_count} placements excluded",
            [s._param("position_plugin_keys_count", C.length)],
          ),
          id: "campaignPlacementConfirmationToast",
        };
      } else if (l == null && c.size > 0 && u != null && e) {
        var b = r("AdsPlacementPositionPlugins").get(Array.from(c)[0]);
        return {
          bodyText: s._(
            /*BTDS*/ "{parent_placement_name} and {position_plugin_keys_count} other placements included.",
            [
              s._param("parent_placement_name", b.nameWithPlatform),
              s._param("position_plugin_keys_count", c.size - 1),
            ],
          ),
          callsToAction: a != null ? a : void 0,
          cardType: "info",
          canDismiss: !0,
          "data-testid": "parent-position-exclude-undo-confirmation-toast",
          dismissTimer: 5e3,
          header: s._(
            /*BTDS*/ "{position_plugin_keys_count_with_the_current_position_plugin_key_on_undo} placements included",
            [
              s._param(
                "position_plugin_keys_count_with_the_current_position_plugin_key_on_undo",
                c.size,
              ),
            ],
          ),
          id: "campaignPlacementConfirmationToast",
        };
      } else if (!e && u == null && c.size > 0 && l == null) {
        var v,
          S,
          R = r("AdsPlacementPositionPlugins").get(Array.from(c)[0]),
          L =
            R == null || (v = R.parentPlacements) == null ? void 0 : v.first();
        return {
          bodyText: s._(
            /*BTDS*/ "{parent_placement_name} and {position_plugin_keys_count} other placements excluded.",
            [
              s._param(
                "parent_placement_name",
                L != null
                  ? (S = r("AdsPlacementPositionPlugins").get(L)) == null
                    ? void 0
                    : S.nameWithPlatform
                  : null,
              ),
              s._param("position_plugin_keys_count", c.size - 1),
            ],
          ),
          callsToAction: a != null ? a : void 0,
          cardType: "success",
          canDismiss: !0,
          "data-testid": "parent-position-exclude-confirmation-toast",
          dismissTimer: 5e3,
          header: s._(
            /*BTDS*/ "{position_plugin_keys_count_with_the_current_position_plugin_key} placements excluded",
            [
              s._param(
                "position_plugin_keys_count_with_the_current_position_plugin_key",
                c.size,
              ),
            ],
          ),
          id: "campaignPlacementConfirmationToast",
        };
      } else if (e && l == null && u == null && c.size > 0) {
        var E,
          k,
          I = r("AdsPlacementPositionPlugins").get(Array.from(c)[0]),
          T =
            I == null || (E = I.parentPlacements) == null ? void 0 : E.first();
        return {
          bodyText: s._(
            /*BTDS*/ "{parent_placement_name} and {position_plugin_keys_count} other placements included.",
            [
              s._param(
                "parent_placement_name",
                T != null
                  ? (k = r("AdsPlacementPositionPlugins").get(T)) == null
                    ? void 0
                    : k.nameWithPlatform
                  : null,
              ),
              s._param("position_plugin_keys_count", c.size - 1),
            ],
          ),
          callsToAction: a != null ? a : void 0,
          cardType: "info",
          canDismiss: !0,
          "data-testid": "parent-position-exclude-undo-confirmation-toast",
          dismissTimer: 5e3,
          header: s._(
            /*BTDS*/ "{position_plugin_keys_count_with_the_current_position_plugin_key_on_undo} placements included",
            [
              s._param(
                "position_plugin_keys_count_with_the_current_position_plugin_key_on_undo",
                c.size,
              ),
            ],
          ),
          id: "campaignPlacementConfirmationToast",
        };
      } else {
        var D,
          x,
          $ = s._(
            /*BTDS*/ "You included {child_position_plugin_key} which also requires {parent_placement_name} to be included.",
            [
              s._param("child_position_plugin_key", m),
              s._param("parent_placement_name", m),
            ],
          ),
          P = s._(
            /*BTDS*/ "{parent_placement_name} and {position_plugin_keys_count} other placements excluded.",
            [
              s._param("parent_placement_name", m),
              s._param("position_plugin_keys_count", p),
            ],
          );
        return {
          bodyText: e ? $ : P,
          callsToAction: a != null ? a : void 0,
          cardType: e ? "info" : "success",
          canDismiss: !0,
          "data-testid": "placement-change-confirmation-toast",
          dismissTimer: 5e3,
          header: s._(
            /*BTDS*/ "{position_plugin_keys_count} placements {verb}",
            [
              s._param(
                "position_plugin_keys_count",
                e && u != null
                  ? (D =
                      (x = t.positionPluginKeys) == null ? void 0 : x.size) !=
                    null
                    ? D
                    : 0
                  : p + 1,
              ),
              s._param("verb", e ? "included" : "excluded"),
            ],
          ),
          id: "campaignPlacementConfirmationToast",
        };
      }
    }
    l.successToastDetails = e;
  },
  226,
);
