__d(
  "MarketingMessagesCreationPackageUtils",
  [
    "AdsObjectTypes",
    "AdsPECrepeEditorStructureTypes",
    "AdsPECrepePackages",
    "FBLogger",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("22331")
        ? o("AdsPECrepePackages").PAID_MESSAGING_DEV_PACKAGE_CONFIG_ID
        : o("AdsPECrepePackages").PAID_MESSAGING_PACKAGE_CONFIG_ID;
    }
    function s() {
      var e;
      return (
        r("gkx")("21201") &&
          !r("gkx")("21590") &&
          r("FBLogger")("ads").mustfix(
            "Required CREPE features are not enabled",
          ),
        {
          editorLevels: [],
          editorAppearances: [
            o("AdsPECrepeEditorStructureTypes").EditorAppearance.FULLY_MERGED,
            o("AdsPECrepeEditorStructureTypes").EditorAppearance.UNMERGED,
          ],
          actionMenuConfig:
            ((e = {}),
            (e[r("AdsObjectTypes").CAMPAIGN_GROUP] = [
              "copyID",
              "create",
              "delete",
              "duplicate",
            ]),
            (e[r("AdsObjectTypes").CAMPAIGN] = [
              "copyID",
              "delete",
              "duplicate",
            ]),
            (e[r("AdsObjectTypes").ADGROUP] = []),
            e),
        }
      );
    }
    function u() {
      var e;
      return {
        editorLevels: [],
        editorAppearances: [
          o("AdsPECrepeEditorStructureTypes").EditorAppearance.FULLY_MERGED,
          o("AdsPECrepeEditorStructureTypes").EditorAppearance.UNMERGED,
        ],
        actionMenuConfig:
          ((e = {}),
          (e[r("AdsObjectTypes").CAMPAIGN_GROUP] = [
            "copyID",
            "create",
            "delete",
            "duplicate",
          ]),
          (e[r("AdsObjectTypes").CAMPAIGN] = ["copyID", "delete", "duplicate"]),
          (e[r("AdsObjectTypes").ADGROUP] = []),
          e),
      };
    }
    ((l.getMarketingMessagesPackageConfigID = e),
      (l.getMarketingMessagesPackageEditorStructure = s),
      (l.getDMBroadcastPreconfiguredCampaignPackageEditorStructure = u));
  },
  98,
);
