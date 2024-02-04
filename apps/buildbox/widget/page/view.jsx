const { path } = props;

const data = Social.get(path + "/**", "final");

if (!data) {
  return <p>Project not found: {path}</p>
}

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #292320;
  color: #fff;
  gap: 5rem;
  padding: 64px 80px;
`;

const Header = styled.h1`
  color: #fff;
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
    <Header>{title}</Header>
    <Subheader>{description}</Subheader>
    <DetailContainer>
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
      <div>
        <Label>Referrer:</Label> {referrer}
      </div>
      <div>
        <Label>What I learned:</Label> {learning}
      </div>
    </DetailContainer>
  </Root>
);
