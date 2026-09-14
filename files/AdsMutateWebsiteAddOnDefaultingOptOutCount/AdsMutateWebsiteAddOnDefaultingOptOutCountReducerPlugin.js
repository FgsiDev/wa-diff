__d(
  "AdsMutateWebsiteAddOnDefaultingOptOutCountReducerPlugin",
  [
    "AsyncRequest",
    "FBLogger",
    "XAdvertiserWebsiteAddOnDefaultingOptOutCountControllerRouteBuilder",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (t.has(n.pageID)) return t;
          var e = t;
          if (((e = e.set(n.pageID, !0)), r("justknobx")._("3907")))
            try {
              var o = n.pageID,
                a = r(
                  "XAdvertiserWebsiteAddOnDefaultingOptOutCountControllerRouteBuilder",
                ).buildUri({ page_id: o });
              new (r("AsyncRequest"))().setMethod("POST").setURI(a).send();
            } catch (e) {
              var i = r("getErrorSafe")(e);
              r("FBLogger")(
                "bump_page_advertisers_website_add_on_defaulting_opt_out_count",
              )
                .catching(i)
                .mustfix("Error in reducer while bumping opt out count");
            }
          return e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
