__d(
  "adsUEditorIsAccountDefaultOptedIntoTextSwappingSelector",
  [
    "adsCreateSelector",
    "adsUEditorAccountIDSelector",
    "adsUEditorIsAccountDefaultOptedIntoTextSwappingSelectorUtils",
    "textSwappingAccountSettingsThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountIDSelector"),
          r("textSwappingAccountSettingsThunkSelector"),
        ],
        function (t, n) {
          return o(
            "adsUEditorIsAccountDefaultOptedIntoTextSwappingSelectorUtils",
          ).adsUEditorIsAccountDefaultOptedIntoTextSwapping(t, n);
        },
        {
          name:
            i.id + ".adsUEditorIsAccountDefaultOptedIntoTextSwappingSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
