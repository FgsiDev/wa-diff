__d(
  "AdsPECrepePackageDataManager",
  [
    "AdCreationPackageItemType",
    "AdsCrepeLogger",
    "AdsGraphAPI",
    "AdsPECrepeEditorStructureConstants",
    "AdsUEditorAdgroupCreativeFieldsOrder",
    "AdsUEditorAdgroupSectionPluginKeys",
    "AdsUEditorCampaignGroupSectionPluginKeys",
    "AdsUEditorCampaignSectionPluginKeys",
    "AdsUEditorCrepeContentDataConstants",
    "AdsUEditorCrepePackageDataStaticResolver",
    "AdsUEditorCrepeRequiredSections",
    "FBLogger",
    "GraphAPIFieldUtils",
    "XFBAdCreationPackageItemVisibilityUtils.facebook",
    "asyncToGeneratorRuntime",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("AdsCrepeLogger").AdsCrepeLogger.log({
        ad_creation_package_config_id: e,
        category: "EDITOR",
        event: "AM_ITEM_VISIBILITY_INVALID",
        data: { item_key: t },
      });
    }
    function s(t, n) {
      var a = [],
        i = [];
      return (
        n.forEach(function (n) {
          var l = n.item_key,
            s = n.item_visibility,
            u = l,
            c = o("XFBAdCreationPackageItemVisibilityUtils.facebook").toJSEnum(
              s,
            );
          if (!c)
            return r("FBLogger")("ads").warn(
              "Unknown item_visibility (" + s + ") for item: (" + l + ")",
            );
          r("AdsUEditorCrepeRequiredSections").has(l) && c !== 2 && e(t, l);
          e: {
            if (c === 2) {
              a.push(u);
              break e;
            }
            if (c === 1) {
              i.push(u);
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                c,
            );
          }
        }),
        { keysToAdd: a, keysToRemove: i }
      );
    }
    function u(e, t) {
      var n = t
          .filter(function (e) {
            return e.item_type === r("AdCreationPackageItemType").getName(3);
          })
          .flatMap(function (e) {
            var t;
            return (t = e.components) != null ? t : [];
          }),
        o = t
          .filter(function (e) {
            return e.item_type === r("AdCreationPackageItemType").getName(2);
          })
          .flatMap(function (e) {
            var t;
            return (t = e.components) != null ? t : [];
          }),
        a = t
          .filter(function (e) {
            return e.item_type === r("AdCreationPackageItemType").getName(4);
          })
          .flatMap(function (e) {
            var t;
            return (t = e.components) != null ? t : [];
          }),
        i = t
          .filter(function (e) {
            return e.item_type === r("AdCreationPackageItemType").getName(5);
          })
          .flatMap(function (e) {
            var t;
            return (t = e.components) != null ? t : [];
          }),
        l = t
          .filter(function (e) {
            return e.item_type === r("AdCreationPackageItemType").getName(1);
          })
          .flatMap(function (e) {
            var t;
            return (t = e.components) != null ? t : [];
          });
      return (
        (n = n.concat(
          l.filter(function (e) {
            var t = e.item_key;
            return r("AdsUEditorCampaignGroupSectionPluginKeys").includes(t);
          }),
        )),
        (o = o.concat(
          l.filter(function (e) {
            var t = e.item_key;
            return r("AdsUEditorCampaignSectionPluginKeys").includes(t);
          }),
        )),
        (a = a.concat(
          l.filter(function (e) {
            var t = e.item_key;
            return r("AdsUEditorAdgroupSectionPluginKeys").includes(t);
          }),
        )),
        (i = i.concat(
          l.filter(function (e) {
            var t = e.item_key;
            return r("AdsUEditorAdgroupCreativeFieldsOrder").includes(t);
          }),
        )),
        {
          campaignGroupVisibility: s(e, n),
          campaignVisibility: s(e, o),
          adgroupVisibility: s(e, a),
          creativeVisibility: s(e, i),
        }
      );
    }
    function c(e) {
      var t = r("first")(e);
      return t == null
        ? babelHelpers.extends(
            {},
            o("AdsUEditorCrepeContentDataConstants")
              .PACKAGE_NOT_READY_CONTENT_DATA,
          )
        : babelHelpers.extends(
            {},
            o("AdsUEditorCrepeContentDataConstants")
              .PACKAGE_NOT_READY_CONTENT_DATA,
            {
              firstSectionImage: t.large_icon_uri,
              selectionRowImage: t.thumbnail_uri,
              packageTitle: t.title,
              packageDescription: t.description,
              packageDetails: t.details,
            },
          );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            l,
            s,
            d = yield o("AdsGraphAPI")
              .get(i.id)
              .object("package_config", e)
              .get({
                fields: [
                  "package_id",
                  "status",
                  (s = o("GraphAPIFieldUtils")).getFieldWithSubfields(
                    "editor_config",
                    [
                      "item_type",
                      s.getFieldWithSubfields("components", [
                        "item_key",
                        "item_visibility",
                      ]),
                    ],
                  ),
                  s.getFieldWithSubfields("editor_config_components", [
                    "item_key",
                    "item_type",
                    "item_visibility",
                  ]),
                  s.getFieldWithSubfields(
                    s.getFieldWithParameterizedSubfields(
                      "contents",
                      ((t = {}),
                      (t.delivery_channel = "AD_CREATION_PACKAGE"),
                      t),
                    ),
                    [
                      "title",
                      "description",
                      "details",
                      "large_icon_uri",
                      "thumbnail_uri",
                    ],
                  ),
                ],
              }),
            m = u(
              e,
              (n = (r = d.editor_config) == null ? void 0 : r.data) != null
                ? n
                : [],
            ),
            p = {
              status: d.status,
              content: c(
                (a = (l = d.contents) == null ? void 0 : l.data) != null
                  ? a
                  : [],
              ),
              visibility: m,
              intelligentNuxBlocklist: [],
              editorModifications: {},
              editorStructure: o(
                "AdsPECrepeEditorStructureConstants",
              ).getDefaultEditorStructure(),
              packageConfigID: e,
              package_id: d.package_id,
            },
            _ = o(
              "AdsUEditorCrepePackageDataStaticResolver",
            ).getStaticPackageData(d.package_id);
          return o("AdsUEditorCrepePackageDataStaticResolver").mergePackageData(
            p,
            _,
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.loadPackageData = d;
  },
  98,
);
