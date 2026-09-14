__d(
  "HSMUrlUtils",
  ["ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        try {
          var e = new URL(t).hostname;
          return /(^|\.)(whatsapp\.com|wa\.me)$/gi.test(e);
        } catch (e) {
          return !1;
        }
      },
      s = function (n) {
        return e(n)
          ? /^https?:\/\/.*?whatsapp\.com\/otp(\/|$)/gi.test(n) ||
              /^https?:\/\/.*?wa\.me\/in\/bill\/reminder(\/|\?|$)/gi.test(n) ||
              /^https?:\/\/.*?wa\.me\/pay(\/|\?|$)/gi.test(n)
          : !1;
      },
      u = function (t) {
        try {
          var e;
          return (
            o("ConstUriUtils").isValidUri(t) &&
            ((e = o("ConstUriUtils").getUri(t)) == null
              ? void 0
              : e.getProtocol()) === "whatsapp-smb"
          );
        } catch (e) {
          return !1;
        }
      },
      c = function (t) {
        var e = [
          /[?&](redirect|url|q|goto|out|away|external)=/i,
          /[?&]link\?u=/i,
        ];
        return e.some(function (e) {
          return e.test(t);
        });
      },
      d = function (t) {
        var e = [
            "bit.ly",
            "goo.gl",
            "tinyurl.com",
            "ow.ly",
            "short.url",
            "shorte.st",
            "short.gs",
          ],
          n;
        try {
          n = new URL(t).hostname.toLowerCase();
        } catch (e) {
          return !1;
        }
        return (
          n.startsWith("www.") && (n = n.slice(4)),
          e.some(function (e) {
            return n === e || n.endsWith("." + e);
          })
        );
      },
      m = function (t) {
        try {
          var e = new URL(t).hostname;
          return /(^|\.)(payu\.in|rzp\.io|payments\.cashfree\.com|ccavenue\.com|ssp\.billdesk\.io)$/gi.test(
            e,
          );
        } catch (e) {
          return !1;
        }
      };
    ((l.isWhatsAppDomainUrl = e),
      (l.isAllowlistedWhatsAppUrl = s),
      (l.isValidWASMBURI = u),
      (l.hasRedirectUrlPattern = c),
      (l.isShortUrl = d),
      (l.isValidPaymentLinkDomain = m));
  },
  98,
);
