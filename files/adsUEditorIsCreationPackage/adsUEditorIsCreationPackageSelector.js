__d(
  "adsUEditorIsCreationPackageSelector",
  [
    "AdsPECrepePackages",
    "adsCreateSelector",
    "adsUEditorCrepePackageIDSelector",
    "adsUEditorSelectedPackageConfigIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (e = r("adsCreateSelector"))(
        [r("adsUEditorSelectedPackageConfigIDSelector")],
        function (t) {
          return c(t);
        },
        { name: i.id + ".adsUEditorIsCreationPackageSelector" },
      );
    function c(e) {
      return e != null;
    }
    var d = e(
        [(s = r("adsUEditorCrepePackageIDSelector")), u],
        function (t, n) {
          var e = t == null ? void 0 : t.value;
          return (
            n &&
            e === o("AdsPECrepePackages").MESSAGE_ACQUISITION_PGD_PACKAGE_ID
          );
        },
        { name: i.id + ".isSBGCTXCreationPackageWithPGDSelector" },
      ),
      m = e(
        [s, u],
        function (t, n) {
          var e = t == null ? void 0 : t.value;
          return (
            n &&
            (e ===
              o("AdsPECrepePackages")
                .MESSAGE_ACQUISITION_POST_ODAX_PACKAGE_ID ||
              e ===
                o("AdsPECrepePackages")
                  .MESSAGE_ACQUISITION_PRE_ODAX_PACKAGE_ID ||
              e ===
                o("AdsPECrepePackages")
                  .MESSAGE_ACQUISITION_POST_ODAX_CTWA_AUDIENCE_EXPANSION_PACKAGE_ID ||
              e ===
                o("AdsPECrepePackages")
                  .MESSAGE_ACQUISITION_CTMPO_AUDIENCE_EXPANSION_PACKAGE_ID ||
              e ===
                o("AdsPECrepePackages")
                  .MESSAGE_ACQUISITION_CTD_AUDIENCE_EXPANSION_PACKAGE_ID ||
              e ===
                o("AdsPECrepePackages").MESSAGE_ACQUISITION_PGD_PACKAGE_ID ||
              e ===
                o("AdsPECrepePackages").LWI_GRADUATION_ENGAGEMENT_PACKAGE_ID)
          );
        },
        { name: i.id + ".isSBSMessageCreationPackageSelector" },
      ),
      p = e(
        [s, u],
        function (t, n) {
          var e = t == null ? void 0 : t.value;
          return (
            n &&
            (e ===
              o("AdsPECrepePackages").CONV_ACQUISITION_PRE_ODAX_PACKAGE_ID ||
              e ===
                o("AdsPECrepePackages").CONV_ACQUISITION_POST_ODAX_PACKAGE_ID)
          );
        },
        { name: i.id + ".isSBGConversionAcquisitionCreationPackageSelector" },
      ),
      _ = e(
        [s, u],
        function (t, n) {
          var e = t == null ? void 0 : t.value;
          return (
            n &&
            e ===
              o("AdsPECrepePackages").BOOST_TRAFFIC_ACQUISITION_POST_PACKAGE_ID
          );
        },
        { name: i.id + ".isBoostCreationPackageSelector" },
      ),
      f = e(
        [s, u],
        function (t, n) {
          return g(t == null ? void 0 : t.value, n);
        },
        { name: i.id + ".isLWIGraduationCreationPackageSelector" },
      );
    function g(e, t) {
      return (
        t &&
        (e === o("AdsPECrepePackages").LWI_GRADUATION_ENGAGEMENT_PACKAGE_ID ||
          e === o("AdsPECrepePackages").LWI_GRADUATION_WEB_TRAFFIC_PACKAGE_ID)
      );
    }
    ((l.adsUEditorIsCreationPackageSelector = u),
      (l.adsUEditorIsCreationPackage = c),
      (l.isSBGCTXCreationPackageWithPGDSelector = d),
      (l.isSBSMessageCreationPackageSelector = m),
      (l.isSBGConversionAcquisitionCreationPackageSelector = p),
      (l.isBoostCreationPackageSelector = _),
      (l.isLWIGraduationCreationPackageSelector = f),
      (l.isLWIGraduationCreationPackage = g));
  },
  98,
);
