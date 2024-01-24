return (
  <div data-thq="thq-navbar" className="home-navbar">
    <span className="home-logo">📦 abstracting</span>
    <div
      data-thq="thq-navbar-nav"
      data-role="Nav"
      className="home-desktop-menu"
    >
      <div data-thq="thq-navbar-nav-links" data-role="Nav" className="home-nav">
        <a
          href="/register"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link button-clean button"
        >
          Register
        </a>
        <a
          href="/calendar"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link01 button-clean button"
        >
          Calendar
        </a>
        <a
          href="/manual"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link02 button-clean button"
        >
          Manual
        </a>
      </div>
    </div>
    <div data-thq="thq-navbar-btn-group" className="home-btn-group">
      <div className="home-socials">
        <button className="social button">
          <a href="/telegram" target="_blank" rel="noreferrer noopener">
            <img
              alt="image"
              src="/iconmonstr-telegram-1%201.svg"
              className="home-image"
            />
          </a>
        </button>
      </div>
      <a
        href="/register"
        target="_blank"
        rel="noreferrer noopener"
        className="home-view button"
      >
        Register
      </a>
    </div>
    <div data-thq="thq-burger-menu" className="home-burger-menu">
      <button className="button home-button">
        <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </button>
    </div>
    <div data-thq="thq-mobile-menu" className="home-mobile-menu">
      <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="home-nav1">
        <div className="home-container1">
          <span className="home-logo1">📦  abstracting</span>
          <div data-thq="thq-close-menu" className="home-menu-close">
            <svg viewBox="0 0 1024 1024" className="home-icon02">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div
          data-thq="thq-mobile-menu-nav-links"
          data-role="Nav"
          className="home-nav2"
        >
          <a
            href="/register"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link04"
          >
            Register
          </a>
          <a
            href="/partner"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link05"
          >
            Partner
          </a>
          <a
            href="/manual"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link06"
          >
            Manual
          </a>
        </div>
        <div className="home-container2">
          <a
            href="/register"
            target="_blank"
            rel="noreferrer noopener"
            className="home-register button"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  </div>
);
