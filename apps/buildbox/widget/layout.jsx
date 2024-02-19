const { Button } = VM.require("buildhub.near/widget/components");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  padding-bottom: 1.5rem;
`;

function Header({ active, routes }) {
  return (
    <>
      <ButtonGroup>
        {routes &&
          (Object.keys(routes) || []).map((k) => {
            return (
              <Link key={k} to={`?page=${k}`}>
                <Button key={k} variant={active === k && "primary"}>
                  {`${k.slice(0, 1).toUpperCase()}${k.slice(1)}`}
                </Button>
              </Link>
            );
          })}
      </ButtonGroup>
    </>
  );
}

function Footer() {
  return <></>;
}

// Define the new component that follows the AppLayout pattern
function AppLayout({ active, routes, children }) {
  return (
    <>
      <Container>
        <Header active={active} routes={routes} />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </Container>
    </>
  );
}

return { AppLayout };
