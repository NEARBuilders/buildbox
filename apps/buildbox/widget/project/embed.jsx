const { href } = props;

const data = Social.get(href + "/**", "final");

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #292320;
  color: #fff;
  gap: 5rem;
  padding: 20px;

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
  font-size: 90px;
  max-width: 900px;
  font-style: normal;
  text-align: left;
  font-weight: 500;
  line-height: 108px;
  text-transform: lowercase;

  @media screen and (max-width: 768px) {
    font-size: 36px !important;
    max-width: 70%;
    line-height: 43px;
  }
`;

const Subheader = styled.p`
  color: rgb(255, 255, 255);
  font-size: 24px;
  max-width: 800px;
  text-align: left;
  line-height: 36px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
    <DetailContainer className="truncated-content">
      <Header>{title}</Header>
      <Subheader>{description}</Subheader>
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
  </Root>
);
