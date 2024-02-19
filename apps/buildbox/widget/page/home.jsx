/**
 * build box home
 */

const { Button } = VM.require("buildhub.near/widget/components") || {
  Button: () => <></>
};

const Root = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const HeroSection = styled.div`
  &.home-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    ${'' /* padding: 2rem; */}
    color: #fff;

    .home-heading {
      flex: 1;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-flow: column nowrap;

      .home-header {
        span {
          font-size: 7vw;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

const Header = styled.h1`
  font-size: 90px;
  max-width: 900px;
  font-style: normal;
  text-align: left;
  font-weight: 900;
  line-height: 108px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 43px;
  }
`;

const Subheader = styled.p`
  font-size: 24px;
  max-width: 800px;
  text-align: left;
  line-height: 36px;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

return (
  <Root>
    <HeroSection className="home-hero">
      <div className="home-heading">
        <Header>
          <span>🔨 Build Box 📦</span>
          <br />
        </Header>
        <Subheader>hackathon platform</Subheader>
      </div>
      <Button href={`/buildbox.near/widget/app?page=submit`}>
        Submit a Project
      </Button>
    </HeroSection>
  </Root>
);
