__d(
  "LowCustomerBaseSizeWarningFbts",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Marketing messages won't be sent"),
      u = s._(
        /*BTDS*/ "A larger customer base is required to send marketing messages. Grow your customer base by turning on contact syncs and uploading a file containing everyone you want to reach with marketing messages.",
      ),
      c = s._(
        /*BTDS*/ "A larger customer base is required to send marketing messages. To grow your customer base, upload a file containing everyone you want to reach with marketing messages.",
      ),
      d = s._(
        /*BTDS*/ "A larger customer base is required to send marketing messages. Save time by turning on contact syncs that will automatically grow your customer base.",
      ),
      m = s._(/*BTDS*/ "Marketing messages may have limited reach"),
      p = s._(
        /*BTDS*/ "A larger messaging customer base may help increase your reach with marketing messages. Grow your customer base by turning on contact syncs and uploading a file containing everyone you want to reach with marketing messages.",
      ),
      _ = s._(
        /*BTDS*/ "A larger messaging customer base may help increase your reach with marketing messages. To grow your customer base, upload a file containing everyone you want to reach with marketing messages.",
      ),
      f = s._(
        /*BTDS*/ "A larger messaging customer base may help increase your reach with marketing messages. Save time by turning on contact syncs that will automatically grow your customer base.",
      ),
      g = s._(/*BTDS*/ "Sync contacts"),
      h = s._(/*BTDS*/ "Upload file");
    function y(t, n) {
      return t
        ? { heading: e, message: n ? u : c }
        : { heading: m, message: n ? p : _ };
    }
    function C(e, t) {
      return t ? (e ? d : u) : c;
    }
    ((l.CUSTOMER_BASE_SIZE_BELOW_THRESHOLD_WARNING_TITLE = e),
      (l.CUSTOMER_BASE_SIZE_BELOW_THRESHOLD_UPSELL_AUTOMATION_SETTINGS_AND_DFCA_DESCRIPTION =
        u),
      (l.CUSTOMER_BASE_SIZE_BELOW_THRESHOLD_UPSELL_AUTOMATION_SETTINGS_DESCRIPTION =
        d),
      (l.CUSTOMER_BASE_SIZE_NOT_IDEAL_WARNING_TITLE = m),
      (l.CUSTOMER_BASE_SIZE_NOT_IDEAL_UPSELL_AUTOMATION_SETTINGS_AND_DFCA_DESCRIPTION =
        p),
      (l.CUSTOMER_BASE_SIZE_NOT_IDEAL_UPSELL_AUTOMATION_SETTINGS_DESCRIPTION =
        f),
      (l.LOW_CUSTOMER_BASE_SIZE_SYNC_CONTACTS_BUTTON_LABEL = g),
      (l.LOW_CUSTOMER_BASE_SIZE_UPLOAD_FILE_BUTTON_LABEL = h),
      (l.getLowCustomerBaseSizeWarningCopy = y),
      (l.getBelowThresholdMessage = C));
  },
  226,
);
