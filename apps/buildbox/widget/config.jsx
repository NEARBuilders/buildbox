return {
  type: "app",
  routes: {
    home: {
      path: "buildbox.near/widget/page.home",
      blockHeight: "final",
      init: {
        name: "Home",
        icon: "bi bi-house",
      },
    },
    submit: {
      path: "buildbox.near/widget/page.submit",
      blockHeight: "final",
      init: {
        icon: "bi bi-globe",
      },
    },
    browse: {
      path: "buildbox.near/widget/page.browse",
      blockHeight: "final",
      init: {
        icon: "bi bi-globe",
      },
    },
    feed: {
      path: "buildbox.near/widget/page.feed",
      blockHeight: "final",
      init: {
        icon: "bi bi-globe",
      },
    },
    view: {
      path: "buildbox.near/widget/page.view",
      blockHeight: "final",
      init: {
        icon: "bi bi-globe",
        path: undefined
      },
      hide: true
    },
  },
  theme: "background-color: white;",
};
