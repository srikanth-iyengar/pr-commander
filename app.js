module.exports = ((app) => {
    app.log("PR Commander bot started");
    app.on(["issues.closed", "issues.reopened"], (ctx) => {
      const issueComment = ctx.issue({
        body: "Thanks for your contribution",
      });
      return ctx.octokit.issues.createComment(issueComment);
    });
})