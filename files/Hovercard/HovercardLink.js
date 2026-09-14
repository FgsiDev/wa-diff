__d(
  "HovercardLink",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return new (e || (e = r("URI")))("/ajax/hovercard/hovercard.php");
    }
    function u(e, t) {
      return d(e, t, null);
    }
    function c(e, t) {
      return d(e, null, t);
    }
    function d(e, t, n, r) {
      return m(e, t, n, r);
    }
    function m(t, n, o, a, i) {
      i === void 0 && (i = null);
      var l = new (e || (e = r("URI")))(s()).setQueryData({ id: t.id }),
        u = {};
      if (i !== null) for (var c in i) u[c] = i[c];
      return (
        (t.weakreference || a) && n && (u.group_id = n),
        o && (u.hc_location = o),
        n && (u.directed_target_id = n),
        l.addQueryData({ extragetparams: JSON.stringify(u) }),
        l
      );
    }
    ((l.getBaseURI = s),
      (l.constructEndpoint = u),
      (l.constructEndpointWithLocation = c),
      (l.constructEndpointWithGroupAndLocation = d),
      (l.constructEndpointWithGroupLocationAndExtraParams = m));
  },
  98,
);
