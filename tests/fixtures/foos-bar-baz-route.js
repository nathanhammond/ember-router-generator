Router.map(function() {
  this.resource("foos", function() {
    this.route("bar", function() {
      this.route("baz");
    });
  });
});
