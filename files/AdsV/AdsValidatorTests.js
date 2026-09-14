__d(
  "AdsValidatorTests",
  [
    "AdmanagerAccountStatuses",
    "ClientIDs",
    "DirectDebitCredentialStatus",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "CONFIRMED",
      s = "PENDING",
      u = /^-?\d+$/,
      c = /[\f\n\r\t\v]/,
      d = /^[1-9]\d*$/,
      m = Date.parse("Jan 1, 1970"),
      p = Date.parse("March 21, 2100"),
      _ = 143,
      f = new RegExp("[^@]+@[^@]+$"),
      g = r("getObjectValues")(r("DirectDebitCredentialStatus")),
      h = r("getObjectValues")(r("AdmanagerAccountStatuses"));
    function y(e) {
      return { isValid: !!e, text: "must have non-zero length" };
    }
    function C(e) {
      return {
        isValid: typeof e == "boolean",
        text: "must represent a boolean value",
      };
    }
    function b(e) {
      return {
        isValid: e instanceof Array,
        text: "must represent a array value",
      };
    }
    function v(e, t) {
      return {
        isValid: t.length >= e,
        text: "should contain at least " + e + " items",
      };
    }
    function S(e) {
      return {
        isValid: e instanceof Object,
        text: "must represent a object value",
      };
    }
    function R(e, t) {
      return {
        isValid: t.length === e,
        text: "string should be exactly " + e + " characters",
      };
    }
    function L(e, t) {
      return {
        isValid: t.length >= e,
        text: "must be at least " + e + " characters",
      };
    }
    function E(e, t) {
      return {
        isValid: t.length <= e,
        text: "must be at most " + e + " characters",
      };
    }
    function k(e, t) {
      return {
        isValid: e.test(t),
        text: "must not contain invalid characters",
      };
    }
    function I(e) {
      return {
        isValid: !c.test(e),
        text: "must not contain invalid whitespace characters like tab or return",
      };
    }
    function T(e) {
      var t = parseFloat(e);
      return {
        isValid: !isNaN(t) && t === Number(e),
        text: "must represent a floating point number",
      };
    }
    function D(e) {
      var t = k(u, e);
      return ((t.text = "must represent an integer"), t);
    }
    function x(e) {
      return {
        isValid: e % 1 === 0 && e >= 0,
        text: "must be a positive integer or zero",
      };
    }
    function $(e) {
      return {
        isValid: e % 1 === 0 && e > 0,
        text: "must be a positive integer",
      };
    }
    function P(e) {
      return {
        isValid: e > m && e < p,
        text: "must be in the valid timestamp range,",
      };
    }
    function N(e) {
      return {
        isValid: P(e).isValid || e === 0,
        text: "must be either in the valid timestamp range or is zero",
      };
    }
    function M(e) {
      return {
        isValid: {}.toString.call(e) === "[object Date]",
        text: "must be a valid date",
      };
    }
    function w(e, t) {
      var n = t && t.endTime;
      return {
        isValid: P(e).isValid && typeof n == "number" && e <= n,
        text: "need valid end time and start time cannot be later than end time",
      };
    }
    function A(e, t) {
      var n = t.startTime;
      return {
        isValid: P(e).isValid && typeof n == "number" && n <= e,
        text: "need valid start time and end time cannot be earlier than start time",
      };
    }
    function F(e) {
      return { isValid: d.test(e), text: "must be a valid FBID" };
    }
    function O(e) {
      return { isValid: e >= 0 && e <= _, text: "must be a valid timezone id" };
    }
    function B(e, t) {
      return {
        isValid: !e.validateProperties(t),
        text: "must be a valid object",
      };
    }
    function W(e, t) {
      return {
        isValid: e.every(function (e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        text: "object must contain all given props",
      };
    }
    function q(e) {
      return {
        isValid: F(e).isValid || !!o("ClientIDs").isExistingClientID(e),
        text: "must be a valid FBID or ClientID",
      };
    }
    function U(e, t) {
      for (var n = !0, r = "", o = 0; o < t.length; o++) {
        var a = t[o],
          i = e(a).text;
        if (
          ((r = "each item " + typeof i == "string" ? i : ""), !e(a).isValid)
        ) {
          n = !1;
          break;
        }
      }
      return { isValid: n, text: r };
    }
    function V(t) {
      return {
        isValid: t === e || t === s,
        text: "must be a CONFIRMED or PENDING status",
      };
    }
    function H(e) {
      return {
        isValid: h.indexOf(e) >= 0,
        text: "must be a valid ad account status",
      };
    }
    function G(e) {
      return {
        isValid: g.indexOf(e) >= 0,
        text: "must be a valid direct debit credential status",
      };
    }
    function z(e, t) {
      return {
        isValid: e.indexOf(t) >= 0,
        text: "must be one of values in array",
      };
    }
    function j(e) {
      var t = !1;
      return (
        e.match(f) && (t = !0),
        { isValid: t, text: "must be a valid email address" }
      );
    }
    ((l.isLengthyString = y),
      (l.isBoolean = C),
      (l.isValidArray = b),
      (l.isMinLengthArray = v),
      (l.isValidJson = S),
      (l.isExactLengthString = R),
      (l.isMinLengthString = L),
      (l.isMaxLengthString = E),
      (l.isAllValidCharacters = k),
      (l.hasNoInvalidWhitespace = I),
      (l.isFloatString = T),
      (l.isIntegerString = D),
      (l.isPositiveOrZeroInteger = x),
      (l.isPositiveInteger = $),
      (l.isUnixTimestamp = P),
      (l.isUnixTimestampOrZero = N),
      (l.isDate = M),
      (l.isValidStartTime = w),
      (l.isValidEndTime = A),
      (l.isFBIDString = F),
      (l.isValidTimeZoneID = O),
      (l.isValidObject = B),
      (l.hasProperties = W),
      (l.isFBIDOrClientIDString = q),
      (l.isValidCollection = U),
      (l.isValidAssetStatus = V),
      (l.isValidAccountStatus = H),
      (l.isValidDirectDebitStatus = G),
      (l.isInArray = z),
      (l.isValidEmail = j));
  },
  98,
);
