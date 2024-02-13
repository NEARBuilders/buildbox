const { href } = props;

const data = Social.get(href + "/**", "final");

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(28, 31, 51);
  color: #fff;
  gap: 5rem;
  .link {
    text-decoration: none;
    color: #b0b0b0;
  }

  &:hover {
    background-color: #23242c;
    text-decoration: none;
  }

  overflow: hidden;
  .truncated-content {
    max-height: 38em;
    position: relative;
    overflow: hidden;

    @media (max-width: 991px) {
      max-height: 30em;
      .expand-post {
        top: 27em;
      }
    }
  }
`;

const Header = styled.p`
  color: #fff;
  font-size: 24px;
  max-width: 900px;
  font-style: normal;
  text-align: left;
  font-weight: 500;
  line-height: 36px;
  text-transform: lowercase;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 16px !important;
    max-width: 70%;
  }
`;

const Content = styled.p`
  color: rgb(255, 255, 255);
  font-size: 14px;
  max-width: 800px;
  text-align: left;
  line-height: 16px;
  text-decoration: none;
  color: #b0b0b0;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const {
  title,
  description,
  tracks,
  teammates,
  projectLink,
  demoLink,
  contactInfo,
  referrer,
  learning,
} = JSON.parse(data[""]);

return (
  <Root>
    <Link to={`/buildbox.near/widget/page.view?path=${href}`} className="link">
      <DetailContainer className="truncated-content">
        <Header>{title}</Header>
        <Content>{description}</Content>
        <div>
          <Label>Tracks:</Label> {tracks && tracks.join(", ")}
        </div>
        <div>
          <Label>Teammates:</Label> {teammates}
        </div>
        <div>
          <Label>Project Link:</Label> <a href={projectLink}>{projectLink}</a>
        </div>
        <div>
          <Label>Demo Link:</Label> <a href={demoLink}>{demoLink}</a>
        </div>
      </DetailContainer>
    </Link>
  </Root>
);