__d(
  "WhatsAppHSMAuthContentRestrictionsConstants",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      CODE_EXPIRATION_MIN: 1,
      CODE_EXPIRATION_MAX: 90,
      CODE_EXPIRATION_DEFAULT: 10,
      PARAM_LENGTH_LIMIT: 15,
      URL_REGEX:
        "((http:\\/\\/|https:\\/\\/)?(www.)?(([a-zA-Z0-9-]){2,}\\.){1,4}([a-zA-Z]){2,6}(\\/([a-zA-Z-_\\/\\.0-9#:?=&;,]*)?)?)",
      OTP_CODE_EXAMPLE: "123456",
      SUPPORTED_APPS_LIMIT: 5,
      SIGNATURE_HASH_REGEX: "(^[a-zA-Z0-9\\/\\+=]*$)",
      SIGNATURE_HASH_REQUIRED_LENGTH: 11,
      PACKAGE_NAME_REGEX:
        "(^([A-Za-z]{1}[A-Za-z\\d_]*\\.)+[A-Za-z][A-Za-z\\d_]*$)",
      PACKAGE_NAME_LENGTH_LIMIT: 224,
    });
    i.default = e;
  },
  66,
);
