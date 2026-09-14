__d(
  "AdsOffsiteConversionConstants",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      pixelTOS: "/customaudiences/app/tos",
      pixelNameMaxLength: 100,
      statuses: {
        UNVERIFIED: "Unverified",
        ACTIVE: "Active",
        INACTIVE: "Inactive",
        DELETED: "Deleted",
      },
      statusOrdering: { Active: 0, Inactive: 1, Unverified: 2 },
      tags: [
        "checkout",
        "registration",
        "lead",
        "key_page_view",
        "add_to_cart",
        "other",
      ],
      tagOrdering: {
        checkout: 0,
        registration: 1,
        lead: 2,
        key_page_view: 3,
        add_to_cart: 4,
        other: 5,
      },
      tosProjectName: "offsite_conversion",
      emailSources: {
        ADS_MANAGER: "ads_manager",
        AYMT: "aymt",
        CREATE_FLOW: "create_flow",
        POWER_EDITOR: "power_editor",
      },
      uris: { HELP_PAGE_URL: "/help/435189689870514" },
      jsPixelFields: {
        PIXEL_ID: "id",
        NAME: "name",
        TAG: "tag",
        CREATED_BY: "created_by",
        CREATE_TIME: "create_time",
        STATUS: "status",
        OWNER_ADMARKET_ID: "owner_admarket_id",
        OWNER_ADACCOUNT_ID: "owner_adaccount_id",
        CREATOR_NAME: "creator_name",
        SHARERS_NAMES: "sharers_names",
        HAS_WRITE_PERMISSION: "has_write_permission",
        LAST_FIRING_TIME: "last_firing_time",
      },
    });
    i.default = e;
  },
  66,
);
