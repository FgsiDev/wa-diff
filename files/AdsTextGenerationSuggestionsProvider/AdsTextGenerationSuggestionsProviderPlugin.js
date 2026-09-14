__d(
  "AdsTextGenerationSuggestionsProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: {
          adgroupID: null,
          suggestionsByField: r("immutable").Map(),
          shouldRefetch: !1,
          pageID: null,
          objectStoreUrl: null,
          hostID: null,
          toneList: null,
          outputLanguages: [],
          inputTextField: null,
          personaEditInput: null,
          isTranslationsEnabled: !1,
          isTextAutomationEnabled: null,
          isPersonaEnabled: null,
          imageHash: null,
          videoId: null,
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
