__d(
  "VideoChannelStoryFetcher",
  [
    "AsyncRequest",
    "HTML",
    "ThisControllerNoLongerExists",
    "XVideoChannelViewStoryAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n, r, o, a, i) {
        if (
          ((this.$7 = e),
          (this.$8 = t),
          (this.$4 = n),
          (this.$10 = 0),
          (this.$2 = null),
          (this.$3 = !0),
          (this.$5 = []),
          (this.$6 = []),
          (this.$9 = {}),
          o)
        ) {
          ((this.$5 = o.videoIDs),
            (this.$6 = o.feedTrackingData),
            (this.$2 = o.cursorInfo.cursor),
            (this.$3 = o.cursorInfo.hasNextPage));
          var l = this.$5.indexOf(this.$7);
          ((this.$9.start = l), (this.$9.end = l + 1));
        }
        if (a) {
          ((this.$5 = a), (this.$3 = !!i));
          var s = this.$5.indexOf(this.$7);
          ((this.$9.start = s), (this.$9.end = s + 1));
        }
        ((this.$11 = r), (this.$12 = []), (this.$13 = []));
      }
      var t = e.prototype;
      return (
        (t.reset = function (t, n) {
          ((this.$7 = t),
            (this.$8 = n),
            (this.$10 = 0),
            (this.$2 = null),
            (this.$3 = !0),
            (this.$5 = []),
            (this.$6 = []),
            (this.$9 = {}),
            (this.$12 = []),
            (this.$13 = []));
        }),
        (t.abandonRequest = function () {
          this.$1 && this.$1.abandon();
        }),
        (t.hasNext = function () {
          var e = this.$5.length - this.$9.end > 0;
          return this.$3 || e;
        }),
        (t.$14 = function (t, n, r) {
          var e = {};
          ((e.event = t),
            (e.request_status = n),
            (e.perf_time_ms = Date.now() - r));
        }),
        (t.fetchFirstStory = function (t, n, o) {
          var e = this;
          if (n === null && this.$5.length !== 0) {
            var a = this.$5.indexOf(this.$7);
            n = this.$6[a];
          }
          var i = {
            caller: this.$4,
            channel_id: this.$8,
            is_first_story: !0,
            root_video_id: this.$7,
            setup_interactions: o,
            use_video_placeholder: t,
            video_ids: [this.$7],
          };
          (this.$11 != null && (i.ad_impression_token = this.$11),
            n && (i.feed_tracking_data = [JSON.stringify(n)]));
          var l = Date.now(),
            s = new (r("AsyncRequest"))(
              r("XVideoChannelViewStoryAsyncControllerRouteBuilder").buildUri(
                i,
              ),
            )
              .setAllowCrossPageTransition(!0)
              .setHandler(function () {
                (e.$14("fetch_first_story", "succeeded", l), e.$15());
              })
              .setErrorHandler(function () {
                (e.$14("fetch_first_story", "failed", l), e.$15());
              })
              .setAbortHandler(function () {
                (e.$14("fetch_first_story", "aborted", l), e.$15());
              });
          ((this.$1 = s), (this.$10 = Date.now()), s.send());
        }),
        (t.getPreloadedData = function () {
          return { stories: this.$12, thumbnails: this.$13 };
        }),
        (t.$16 = function (t, n) {
          var e = this;
          if (this.$8) {
            var a = o("ThisControllerNoLongerExists")
              .__DEADBUILDER__("jp6s5648o")
              .setString("id", this.$8)
              .setEnum("caller", this.$4)
              .setString("original_video_id", this.$7)
              .setInt("story_count", t);
            this.$2 && a.setString("cursor", this.$2.toString());
            var i = Date.now(),
              l = a.getURI(),
              s = new (r("AsyncRequest"))(l)
                .setAllowCrossPageTransition(!0)
                .setHandler(function (t) {
                  (e.$14("fetch_stories_from_entquery", "succeeded", i),
                    (e.$2 = t.getPayload().cursor),
                    (e.$3 = t.getPayload().hasNextPage),
                    e.$15(),
                    e.$17(t, function (t, r) {
                      return (
                        (e.$12 = [].concat(e.$12, t)),
                        (e.$13 = [].concat(e.$13, r)),
                        n(t, r)
                      );
                    }));
                })
                .setErrorHandler(function () {
                  (e.$14("fetch_stories_from_entquery", "failed", i), e.$15());
                })
                .setAbortHandler(function () {
                  (e.$14("fetch_stories_from_entquery", "aborted", i), e.$15());
                });
            ((this.$1 = s), s.send());
          }
        }),
        (t.$18 = function (t, n, o) {
          var e = this,
            a = this.$9.end,
            i = this.$5.length - a,
            l = a + Math.min(i, t);
          if (i > 0) {
            var s = this.$5.slice(a, l),
              u = this.$6.slice(a, l).map(function (e) {
                return JSON.stringify(e);
              }),
              c = Date.now();
            ((this.$1 = new (r("AsyncRequest"))(
              r("XVideoChannelViewStoryAsyncControllerRouteBuilder").buildUri({
                caller: this.$4,
                channel_id: this.$8,
                feed_tracking_data: u,
                root_video_id: this.$7,
                video_ids: s,
              }),
            )
              .setAllowCrossPageTransition(!0)
              .setErrorHandler(function () {
                (e.$14("fetch_stories_forward", "failed", c), e.$15());
              })
              .setAbortHandler(function () {
                (e.$14("fetch_stories_forward", "aborted", c), e.$15());
              })
              .setHandler(function (t) {
                (e.$14("fetch_stories_forward", "succeeded", c),
                  (e.$9.end = l),
                  e.$15(),
                  e.$17(t, function (t, r) {
                    return (
                      (e.$12 = [].concat(e.$12, t)),
                      (e.$13 = [].concat(e.$13, r)),
                      n(t, r)
                    );
                  }));
              })),
              this.$1.send(),
              o && o(i));
          } else this.$3 && (this.$16(t, n), o && o(t));
        }),
        (t.$19 = function (t, n, o) {
          var e = this,
            a = this.$9.start;
          if (a > 0) {
            var i = Math.max(a - t, 0),
              l = this.$5.slice(i, a),
              s = this.$6.slice(i, a).map(function (e) {
                return JSON.stringify(e);
              }),
              u = Date.now();
            ((this.$1 = new (r("AsyncRequest"))(
              r("XVideoChannelViewStoryAsyncControllerRouteBuilder").buildUri({
                caller: this.$4,
                channel_id: this.$8,
                feed_tracking_data: s,
                root_video_id: this.$7,
                video_ids: l,
              }),
            )
              .setAllowCrossPageTransition(!0)
              .setErrorHandler(function () {
                (e.$14("fetch_stories_backward", "failed", u), e.$15());
              })
              .setAbortHandler(function () {
                (e.$14("fetch_stories_backward", "aborted", u), e.$15());
              })
              .setHandler(function (t) {
                (e.$14("fetch_stories_backward", "succeeded", u),
                  (e.$9.start = i),
                  e.$15(),
                  e.$17(t, n));
              })),
              this.$1.send(),
              o && o(a - i));
          }
        }),
        (t.fetchStories = function (t, n, r) {
          var e = 3;
          this.$1 || (t ? this.$18(e, n, r) : this.$19(e, n, r));
        }),
        (t.$17 = function (t, n) {
          var e = t.getPayload(),
            o = r("HTML").replaceJSONWrapper(e.stories).getNodes(),
            a = e.thumbnails.map(function (e) {
              return r("HTML").replaceJSONWrapper(e).getRootNode();
            });
          n(o, a);
        }),
        (t.$15 = function () {
          this.$1 = null;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
