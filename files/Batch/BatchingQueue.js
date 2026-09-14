__d(
  "BatchingQueue",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e(e, t) {
        var n = this;
        ((this.$2 = function () {
          (n.tasks--, n.$3());
        }),
          (this.$1 = function () {
            (n.queue.push(n.nextBatch),
              (n.nextBatch = []),
              n.$3(),
              window.clearTimeout(n.batchHandle),
              (n.batchHandle = null));
          }),
          (this.batchHandler = e),
          (this.timeout = t.timeout),
          (this.maxBatchSize = t.maxBatchSize),
          (this.concurrency = t.concurrency),
          (this.useTimeout = !t.dangerouslyCallBatchHandlerSynchronously),
          this.timeout != null || this.maxBatchSize != null || s(0, 4669),
          (this.nextBatch = []),
          (this.queue = []),
          (this.batchHandle = null),
          (this.tasks = 0),
          (this.readyBatch = this.$1.bind(this)),
          (this.batchDone = this.$2.bind(this)));
      }
      var t = e.prototype;
      return (
        (t.$3 = function () {
          if (!(this.concurrency != null && this.concurrency <= this.tasks)) {
            var e = this.queue.shift();
            if (e) {
              var t = this.batchHandler.bind(null, e, this.batchDone);
              (this.tasks++, this.useTimeout ? window.setTimeout(t, 0) : t());
            }
          }
        }),
        (t.add = function (t) {
          if (
            (this.nextBatch.push(t),
            this.maxBatchSize != null &&
              this.nextBatch.length >= this.maxBatchSize)
          ) {
            this.$1();
            return;
          }
          this.timeout != null &&
            !this.batchHandle &&
            (this.batchHandle = window.setTimeout(
              this.readyBatch,
              this.timeout,
            ));
        }),
        (t.cancel = function () {
          (window.clearTimeout(this.batchHandle),
            (this.batchHandle = null),
            (this.queue = []),
            (this.nextBatch = []),
            (this.tasks = 0));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
