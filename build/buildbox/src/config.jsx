return {
  "type": "app",
  "routes": {
    "home": {
      "path": "${config/account}/widget/page.home",
      "blockHeight": "final",
      "init": {
        "name": "Home",
        "icon": "bi bi-house"
      }
    },
    "feed": {
      "path": "${config/account}/widget/page.submit",
      "blockHeight": "final",
      "init": {
        "icon": "bi bi-globe"
      }
    },
  },
  "theme": "background-color: red;"
}
;