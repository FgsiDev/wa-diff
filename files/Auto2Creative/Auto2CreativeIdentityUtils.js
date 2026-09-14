__d(
  "Auto2CreativeIdentityUtils",
  [
    "Auto2CreativeIdentityUtilsDefaultIGForPageQuery.graphql",
    "Auto2CreativeIdentityUtilsIGAccountsQuery.graphql",
    "Auto2CreativeIdentityUtilsPagesQuery.graphql",
    "CurrentUserInitialData",
    "GeoBaseSearchableSelectorItem.react",
    "PaginationSearchSource",
    "RelayHooks",
    "SearchableEntry",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useState,
      g =
        e !== void 0
          ? e
          : (e = n("Auto2CreativeIdentityUtilsPagesQuery.graphql")),
      h =
        s !== void 0
          ? s
          : (s = n("Auto2CreativeIdentityUtilsIGAccountsQuery.graphql")),
      y =
        u !== void 0
          ? u
          : (u = n("Auto2CreativeIdentityUtilsDefaultIGForPageQuery.graphql"));
    function C(e, t) {
      var n;
      t === void 0 && (t = !1);
      var o = e.username;
      return e.instagram_actor_id == null || o == null
        ? null
        : new (r("SearchableEntry"))({
            auxiliaryData: {
              instagramActorId: String(e.instagram_actor_id),
              profilePictureUrl: t
                ? null
                : (n = e.profile_picture_url) != null
                  ? n
                  : null,
            },
            order: 0,
            title: o,
            uniqueID: String(e.instagram_actor_id),
          });
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("RelayHooks")
              .fetchQuery(e, y, { pageIds: [t] })
              .toPromise(),
            a = (n = r == null ? void 0 : r.pages) != null ? n : [],
            i = a[0];
          for (var l of (s =
            i == null || (u = i.page_instagram_users_v2) == null
              ? void 0
              : u.nodes) != null
            ? s
            : []) {
            var s,
              u,
              c = C(l);
            if (c != null) return c;
          }
          for (var d of (m =
            i == null || (p = i.page_backed_instagram_users_v2) == null
              ? void 0
              : p.nodes) != null
            ? m
            : []) {
            var m,
              p,
              _ = C(d, !0);
            if (_ != null) return _;
          }
          return null;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t,
        n = (t = e.getAuxiliaryData()) == null ? void 0 : t.profilePictureUri;
      return m.jsx(r("GeoBaseSearchableSelectorItem.react"), {
        label: e.getTitle(),
        media:
          n != null
            ? m.jsx("img", {
                alt: e.getTitle(),
                src: n,
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x10w6t97 xl1xv1r x1td3qas",
              })
            : void 0,
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t,
        n,
        o,
        a = (t = e.getAuxiliaryData()) == null ? void 0 : t.profilePictureUrl;
      return m.jsx(r("GeoBaseSearchableSelectorItem.react"), {
        description: String(
          (n =
            (o = e.getAuxiliaryData()) == null ? void 0 : o.instagramActorId) !=
            null
            ? n
            : "",
        ),
        label: "@" + e.getTitle(),
        media:
          a != null
            ? m.jsx("img", {
                alt: e.getTitle(),
                src: a,
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x10w6t97 xl1xv1r x1td3qas",
              })
            : void 0,
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t,
        n =
          e.has_create_ads_access === !0 ||
          e.has_transitioned_to_new_page_experience === !0 ||
          ((t = e.permitted_tasks) != null ? t : []).includes("ADVERTISE");
      return !(
        !n ||
        e.is_published === !1 ||
        e.is_page_ale_ban_hammered === !0
      );
    }
    function E() {
      var e = o("react-compiler-runtime").c(2),
        t = o("RelayHooks").useRelayEnvironment(),
        a = String((c || (c = r("CurrentUserInitialData"))).USER_ID),
        i;
      return (
        e[0] !== t
          ? ((i = new (r("PaginationSearchSource"))(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n,
                      i,
                      l = yield o("RelayHooks")
                        .fetchQuery(t, g, {
                          filter: e !== "" ? e : null,
                          limit: 50,
                          userId: a,
                        })
                        .toPromise(),
                      s =
                        (n =
                          l == null ||
                          (i = l.user) == null ||
                          (i = i.facebook_pages) == null
                            ? void 0
                            : i.nodes) != null
                          ? n
                          : [],
                      u = [],
                      c = 0;
                    for (var d of s) {
                      var m,
                        p,
                        _ = d.id,
                        f = d.name;
                      _ == null ||
                        f == null ||
                        (L(d) &&
                          u.push(
                            new (r("SearchableEntry"))({
                              auxiliaryData: {
                                pageId: _,
                                profilePictureUri:
                                  (m =
                                    (p = d.profile_picture) == null
                                      ? void 0
                                      : p.uri) != null
                                    ? m
                                    : null,
                              },
                              order: c++,
                              title: f,
                              uniqueID: _,
                            }),
                          ));
                    }
                    return u;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )),
            (e[0] = t),
            (e[1] = i))
          : (i = e[1]),
        i
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(3),
        a = o("RelayHooks").useRelayEnvironment(),
        i;
      return (
        t[0] !== a || t[1] !== e
          ? ((i = new (r("PaginationSearchSource"))(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n;
                    if (e == null) {
                      var i = [];
                      return i;
                    }
                    var l = yield o("RelayHooks")
                        .fetchQuery(a, h, { pageIds: [e] })
                        .toPromise(),
                      s = (n = l == null ? void 0 : l.pages) != null ? n : [],
                      u = [],
                      c = 0;
                    for (var d of s) {
                      var m,
                        p,
                        _ =
                          (m =
                            d == null || (p = d.page_instagram_users_v2) == null
                              ? void 0
                              : p.nodes) != null
                            ? m
                            : [];
                      for (var f of _) {
                        var g,
                          y = f.username;
                        f.instagram_actor_id == null ||
                          y == null ||
                          (t !== "" &&
                            !y.toLowerCase().includes(t.toLowerCase())) ||
                          u.push(
                            new (r("SearchableEntry"))({
                              auxiliaryData: {
                                instagramActorId: String(f.instagram_actor_id),
                                profilePictureUrl:
                                  (g = f.profile_picture_url) != null
                                    ? g
                                    : null,
                              },
                              order: c++,
                              title: y,
                              uniqueID: String(f.instagram_actor_id),
                            }),
                          );
                      }
                    }
                    return u;
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            )),
            (t[0] = a),
            (t[1] = e),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(4),
        a = o("RelayHooks").useRelayEnvironment(),
        i = String((c || (c = r("CurrentUserInitialData"))).USER_ID),
        l = f(null),
        s = l[0],
        u = l[1],
        d,
        m;
      return (
        t[0] !== e || t[1] !== a
          ? ((d = function () {
              if (e == null) {
                u(null);
                return;
              }
              var t = !1;
              return (
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n,
                    l,
                    s = yield o("RelayHooks")
                      .fetchQuery(a, g, { filter: e, limit: 10, userId: i })
                      .toPromise();
                  if (!t) {
                    var c =
                      (n =
                        s == null ||
                        (l = s.user) == null ||
                        (l = l.facebook_pages) == null
                          ? void 0
                          : l.nodes) != null
                        ? n
                        : [];
                    for (var d of c) {
                      var m = d.name;
                      if (d.id === e && m != null && L(d)) {
                        var p, _;
                        u(
                          new (r("SearchableEntry"))({
                            auxiliaryData: {
                              pageId: e,
                              profilePictureUri:
                                (p =
                                  (_ = d.profile_picture) == null
                                    ? void 0
                                    : _.uri) != null
                                  ? p
                                  : null,
                            },
                            order: 0,
                            title: m,
                            uniqueID: e,
                          }),
                        );
                        return;
                      }
                    }
                    u(null);
                  }
                })(),
                function () {
                  t = !0;
                }
              );
            }),
            (m = [e, a, i]),
            (t[0] = e),
            (t[1] = a),
            (t[2] = d),
            (t[3] = m))
          : ((d = t[2]), (m = t[3])),
        _(d, m),
        s
      );
    }
    function T(e, t) {
      var a = o("react-compiler-runtime").c(5),
        i = o("RelayHooks").useRelayEnvironment(),
        l = f(null),
        s = l[0],
        u = l[1],
        c,
        d;
      return (
        a[0] !== t || a[1] !== e || a[2] !== i
          ? ((c = function () {
              if (e == null || t == null) {
                u(null);
                return;
              }
              var a = !1;
              return (
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n,
                    l,
                    s = yield o("RelayHooks")
                      .fetchQuery(i, h, { pageIds: [e] })
                      .toPromise();
                  if (!a) {
                    var c = (n = s == null ? void 0 : s.pages) != null ? n : [];
                    for (var d of c) {
                      var m,
                        p,
                        _ =
                          (m =
                            d == null || (p = d.page_instagram_users_v2) == null
                              ? void 0
                              : p.nodes) != null
                            ? m
                            : [];
                      for (var f of _) {
                        var g = f.username;
                        if (
                          f.instagram_actor_id != null &&
                          String(f.instagram_actor_id) === t &&
                          g != null
                        ) {
                          var b;
                          u(
                            new (r("SearchableEntry"))({
                              auxiliaryData: {
                                instagramActorId: String(f.instagram_actor_id),
                                profilePictureUrl:
                                  (b = f.profile_picture_url) != null
                                    ? b
                                    : null,
                              },
                              order: 0,
                              title: g,
                              uniqueID: String(f.instagram_actor_id),
                            }),
                          );
                          return;
                        }
                      }
                    }
                    var v = yield o("RelayHooks")
                      .fetchQuery(i, y, { pageIds: [e] })
                      .toPromise();
                    if (!a) {
                      var S =
                        (l = v == null ? void 0 : v.pages) != null ? l : [];
                      for (var R of S) {
                        var L,
                          E,
                          k =
                            (L =
                              R == null ||
                              (E = R.page_backed_instagram_users_v2) == null
                                ? void 0
                                : E.nodes) != null
                              ? L
                              : [];
                        for (var I of k)
                          if (
                            (I == null ? void 0 : I.instagram_actor_id) !=
                              null &&
                            String(I.instagram_actor_id) === t
                          ) {
                            var T = C(I, !0);
                            if (T != null) {
                              u(T);
                              return;
                            }
                          }
                      }
                      u(null);
                    }
                  }
                })(),
                function () {
                  a = !0;
                }
              );
            }),
            (d = [e, t, i]),
            (a[0] = t),
            (a[1] = e),
            (a[2] = i),
            (a[3] = c),
            (a[4] = d))
          : ((c = a[3]), (d = a[4])),
        _(c, d),
        s
      );
    }
    ((l.genDefaultIGEntryForPage = b),
      (l.renderPageEntry = S),
      (l.renderIGEntry = R),
      (l.usePageSearchSource = E),
      (l.useIGSearchSource = k),
      (l.usePageEntryById = I),
      (l.useIGEntryByActorId = T));
  },
  98,
);
