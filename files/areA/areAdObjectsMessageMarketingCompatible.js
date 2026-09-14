__d(
  "areAdObjectsMessageMarketingCompatible",
  [
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "areUpstreamSettingsMessageMarketingCompatible",
    "getMessageMarketingUpstreamSettingValuesFromAdObjects",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a) {
        var e = r("getMessageMarketingUpstreamSettingValuesFromAdObjects")(
            t,
            n,
          ),
          i = babelHelpers.extends({}, e, a);
        return o(
          "areUpstreamSettingsMessageMarketingCompatible",
        ).areUpstreamSettingsMessageMarketingCompatible(
          i,
          o("AdsMessageMarketingCompatibleSettingsPluginType")
            .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
        );
      },
      s = e;
    l.default = s;
  },
  98,
);
