__d(
  "AdsPEExportTypes",
  ["ImmutableRecordWithV4Types"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ImmutableRecordWithV4Types").Record({
        body: null,
        image_file_name: null,
        link_url: null,
        permalink_url: null,
        story_spec_description: null,
        story_spec_call_to_action_type: null,
        video_file_name: null,
      }),
      s = o("ImmutableRecordWithV4Types").Record({
        audience_network_positions: null,
        device_platforms: null,
        facebook_positions: null,
        instagram_positions: null,
        messenger_positions: null,
        whatsapp_positions: null,
        publisher_platforms: null,
      });
    ((l.AdgroupExtraDataRecord = e), (l.CampaignExtraDataRecord = s));
  },
  98,
);
