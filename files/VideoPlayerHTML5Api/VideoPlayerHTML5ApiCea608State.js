__d(
  "VideoPlayerHTML5ApiCea608State",
  ["Bootloader", "Deferred", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this,
          n = e.captionsDisplay,
          o = e.onCaptionsLoaded,
          a = e.onReady;
        ((this.$1 = null),
          (this.$2 = []),
          (this.$3 = null),
          (this.$4 = {
            changedCount: 0,
            dequeuedCount: 0,
            erroredCount: 0,
            processedCount: 0,
            processStartedCount: 0,
            queuedCount: 0,
          }),
          (this.source = null),
          (this.captionsDisplay = null),
          (this.$1 = r("Bootloader").loadModules(
            ["VideoPlayerCea608CaptionsSource"],
            function (e) {
              var r = new e({
                onCaptionsLoaded: o,
                onCaptionsChanged: function (n, r) {
                  (t.$4.changedCount++,
                    t.captionsDisplay &&
                      t.captionsDisplay.handleCaptionsChanged(n, r));
                },
              });
              ((t.source = r), (t.captionsDisplay = n), a(t));
            },
            "VideoPlayerHTML5ApiCea608State",
          )));
      }
      var t = e.prototype;
      return (
        (t.enqueueBytes = function (t) {
          (this.$4.queuedCount++, this.$2.push(t), this.$5());
        }),
        (t.processQueue = function () {
          this.$5();
        }),
        (t.getStats = function () {
          return this.$4;
        }),
        (t.getCurrentScreenRepresentation = function () {
          return this.source
            ? this.source.getCurrentScreenRepresentation()
            : null;
        }),
        (t.destroy = function () {
          (this.$1 && (this.$1.remove(), (this.$1 = null)),
            this.captionsDisplay &&
              (this.captionsDisplay.destroy(), (this.captionsDisplay = null)),
            this.source && (this.source.destroy(), (this.source = null)),
            (this.$4 = {
              changedCount: 0,
              dequeuedCount: 0,
              erroredCount: 0,
              processedCount: 0,
              processStartedCount: 0,
              queuedCount: 0,
            }));
        }),
        (t.$5 = function () {
          var e = this,
            t = this.source;
          if (t)
            for (
              var n = this.$2,
                o = this.$3,
                a = function () {
                  var a = n.shift();
                  if (!o) {
                    var i = new (r("Deferred"))();
                    (i.resolve(), (o = i.getPromise()));
                  }
                  (e.$4.dequeuedCount++,
                    (e.$3 = o =
                      o.then(function () {
                        return (
                          e.$4.processStartedCount++,
                          t
                            .processBytes(a)
                            .then(function () {
                              e.$4.processedCount++;
                            })
                            .catch(function (t) {
                              (e.$4.erroredCount++,
                                r("FBLogger")("video")
                                  .catching(t)
                                  .mustfix(
                                    "[VideoPlayerHTML5ApiCea608State] Caught error from CEA-608 source processBytes",
                                  ));
                            })
                        );
                      })));
                };
              n.length;
            )
              a();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
