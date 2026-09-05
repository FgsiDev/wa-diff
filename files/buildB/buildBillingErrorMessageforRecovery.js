__d(
  "buildBillingErrorMessageforRecovery",
  [
    "fbt",
    "BillingWizardLink.react",
    "promiseDone",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n;
      if (e == null) return null;
      function a(e) {
        var t = o("react-compiler-runtime").c(2),
          n = e.linkBody,
          a;
        return (
          t[0] !== n
            ? ((a = u.jsx(r("BillingWizardLink.react"), {
                color: "highlight",
                inline: !0,
                label: n,
                onClick: i,
              })),
              (t[0] = n),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      function i() {
        r("promiseDone")(t());
      }
      var l = s._(/*BTDS*/ "try again with a different payment method."),
        c = s._(/*BTDS*/ "add a different payment method."),
        d = s._(/*BTDS*/ "use a different payment method."),
        m = s._(/*BTDS*/ "Try adding a different payment method."),
        p = s._(/*BTDS*/ "Try using a different payment method."),
        _ = s._(/*BTDS*/ "Can't save card"),
        f = s._(/*BTDS*/ "Couldn't save card"),
        g = {
          2314: {
            body: s._(
              /*BTDS*/ "Add more funds to your card or bank account and then try again, or {link}",
              [s._param("link", u.jsx(a, { linkBody: d }))],
            ),
            title: null,
          },
          2390: {
            body: s._(
              /*BTDS*/ "This credit card is being used by too many accounts. Please remove this card from the other accounts or {link}",
              [s._param("link", u.jsx(a, { linkBody: c }))],
            ),
            title: null,
          },
          2399: {
            body: s._(
              /*BTDS*/ "Contact your credit card company to fix the issues or {link}",
              [s._param("link", u.jsx(a, { linkBody: c }))],
            ),
            title: null,
          },
          1353001: {
            body: s._(
              /*BTDS*/ "The card you're trying to use is inactive or has been disabled. Please contact your bank for assistance or {link}",
              [s._param("link", u.jsx(a, { linkBody: l }))],
            ),
            title: null,
          },
          1383118: {
            body: s._(
              /*BTDS*/ "We noticed something unusual and, for your security, this request couldn't be completed. Please try again later, or {link}",
              [s._param("link", u.jsx(a, { linkBody: c }))],
            ),
            title: null,
          },
          1463025: {
            body: s._(
              /*BTDS*/ "Your card can't be saved due to trade restrictions in your country. {link}",
              [s._param("link", u.jsx(a, { linkBody: m }))],
            ),
            title: _,
          },
          1675030: {
            body: s._(
              /*BTDS*/ "Something went wrong on our end. Please wait a moment and try again, or {link}",
              [s._param("link", u.jsx(a, { linkBody: c }))],
            ),
            title: f,
          },
          1818127: {
            body: s._(
              /*BTDS*/ "Your card was declined. Please contact your bank for assistance or {link}",
              [s._param("link", u.jsx(a, { linkBody: l }))],
            ),
            title: null,
          },
          2078019: {
            body: s._(
              /*BTDS*/ "Your card was declined. Please contact your bank for assistance or {link}",
              [s._param("link", u.jsx(a, { linkBody: l }))],
            ),
            title: null,
          },
          2078022: {
            body: s._(
              /*BTDS*/ "This payment method has been temporarily suspended for your security. Please {link}",
              [s._param("link", u.jsx(a, { linkBody: d }))],
            ),
            title: null,
          },
          2078073: {
            body: s._(
              /*BTDS*/ "Your card is associated with too many ad accounts. Please {link}",
              [s._param("link", u.jsx(a, { linkBody: l }))],
            ),
            title: null,
          },
          2078176: {
            body: s._(
              /*BTDS*/ "Check your card details and try again, or {link}",
              [s._param("link", u.jsx(a, { linkBody: c }))],
            ),
            title: null,
          },
          2078177: {
            body: s._(
              /*BTDS*/ "Contact your credit card company to fix the issue, or {link}",
              [s._param("link", u.jsx(a, { linkBody: c }))],
            ),
            title: null,
          },
          2078178: {
            body: s._(
              /*BTDS*/ "Add more funds to your card or bank account and then try again, or {link}",
              [s._param("link", u.jsx(a, { linkBody: d }))],
            ),
            title: null,
          },
          2992007: {
            body: s._(/*BTDS*/ "Double-check your card info or {link}", [
              s._param("link", u.jsx(a, { linkBody: l })),
            ]),
            title: null,
          },
          3212024: {
            body: s._(
              /*BTDS*/ "You can't save a credit card from India to your account due to local restrictions. {link}",
              [s._param("link", u.jsx(a, { linkBody: m }))],
            ),
            title: _,
          },
          3212046: {
            body: s._(
              /*BTDS*/ "Your card wasn't saved because your card type isn't supported. {link}",
              [s._param("link", u.jsx(a, { linkBody: m }))],
            ),
            title: s._(/*BTDS*/ "Card not supported"),
          },
          3212061: {
            body: s._(
              /*BTDS*/ "This card is not usable. Please contact your bank or {link}",
              [s._param("link", u.jsx(a, { linkBody: c }))],
            ),
            title: null,
          },
          3212063: {
            body: s._(
              /*BTDS*/ "Credit cards can't be used to add funds in Brazil. {link}",
              [s._param("link", u.jsx(a, { linkBody: p }))],
            ),
            title: s._(/*BTDS*/ "Can't add funds"),
          },
          4992042: {
            body: s._(
              /*BTDS*/ "This payment method does not support recurring payments and cannot be set as your default. Please try a different one.",
            ),
            title: s._(/*BTDS*/ "Unable to Set Payment Method as Primary"),
          },
        };
      return (n = g[e]) != null ? n : null;
    }
    l.default = c;
  },
  226,
);
