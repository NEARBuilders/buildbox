const { page, layout, loading, ...passProps } = props;

const { routes, theme } = VM.require("buildbox.near/widget/config") ?? {
  routes: {},
};

const { AppLayout } = VM.require("buildbox.near/widget/layout") || {
  AppLayout: () => <>Layout loading...</>,
};

if (!page) page = Object.keys(routes)[0] || "home";

const Root = styled.div`
  a {
    color: inherit;
  }
  background-color: #0b0c14;
  padding: 1rem;
  height: 100%;
`;

const [activeRoute, setActiveRoute] = useState(page);

useEffect(() => {
  setActiveRoute(page);
}, [page]);

function Router({ active, routes }) {
  // this may be converted to a module at devs.near/widget/Router
  const routeParts = active.split(".");

  let currentRoute = routes;
  let src = "";
  let defaultProps = {};

  for (let part of routeParts) {
    if (currentRoute[part]) {
      currentRoute = currentRoute[part];
      src = currentRoute.path;

      if (currentRoute.init) {
        defaultProps = { ...defaultProps, ...currentRoute.init };
      }
    } else {
      // Handle 404 or default case for unknown routes
      return <p>404 Not Found</p>;
    }
  }

  return (
    <div key={active}>
      <Widget
        src={src}
        props={{ ...passProps, ...defaultProps, path: src }}
      />
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

return (
  <Root>
    <Container>
      <AppLayout active={activeRoute} routes={routes}>
        <Content>
          <Router active={activeRoute} routes={routes} />
        </Content>
      </AppLayout>
    </Container>
  </Root>
);
