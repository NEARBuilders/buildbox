/**
 * build box home
 */

const HeroSection = styled.div`
  &.home-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .home-heading {
      flex: 1;
      max-width: 60%;

      .home-header {
        span {
          display: block;
          font-size: 72px;
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
  font-weight: 500;
  line-height: 108px;
  text-transform: lowercase;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    max-width: 70%;
    line-height: 43px;
  }
`;

const Subheader = styled.p`
  font-size: 24px;
  max-width: 800px;
  text-align: left;
  line-height: 36px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

return (
  <>
    <HeroSection className="home-hero">
      <div className="home-heading">
        <Header>
          <span>🔨 📦 build box</span>
          <br />
        </Header>
        <Subheader>hackathon platform</Subheader>
      </div>
    </HeroSection>
  </>
);
