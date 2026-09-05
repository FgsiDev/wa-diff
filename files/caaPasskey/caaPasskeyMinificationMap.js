__d(
  "caaPasskeyMinificationMap",
  ["WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksMinificationMap({
        䈶: {
          logicalStyleId: "bk.data.caa.passkey.CreatePasskeyOptions",
          attrs: {
            additional_params: "+",
            challenge: "#",
            create_silently: "4",
            enable_device_key_signature_ext: ",",
            exclude_credentials: "3",
            id: "!",
            no_immediately_available_credentials_threshold: ".",
            on_cancel: "-",
            on_error: "$",
            on_no_available_credentials: "0",
            on_success: "&",
            prefer_immediately_available_credentials: "1",
            prf_input_first: "2",
            rpid: "(",
            userid: ")",
            username: "*",
          },
        },
        䈷: {
          logicalStyleId: "bk.data.caa.passkey.UsePasskeyOptions",
          attrs: {
            additional_params: "*",
            allowed_passkey_ids: "#",
            challenge: "$",
            enable_device_key_signature_ext: "+",
            id: "!",
            include_payments_pub_key: "1",
            no_immediately_available_credentials_threshold: ".",
            on_cancel: ",",
            on_error: "&",
            on_no_available_credentials: "0",
            on_no_available_credentials_diagnostics: "4",
            on_success: "(",
            on_success_with_tta_attempt_token: "3",
            prefer_immediately_available_credentials: "-",
            prf_input_first: "2",
            rpid: ")",
          },
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
