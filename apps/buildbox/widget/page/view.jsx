const { path, backgroundImage } = props;
const { User, Button } = VM.require("buildhub.near/widget/components");

const data = Social.get(path + "/**", "final");

if (!data) {
  return <p>Project not found: {path}</p>;
}

console.log("img: ", backgroundImage);

const Root = styled.div`
  width: 100%;
  background-color: #0b0c14;
  max-width: 1440px;
  margin: 0 auto;
  .main {
    padding: 24px 44px;
    position: relative;
    display: flex;
    flex-direction: row;
    color: #fff;
    gap: 1rem;
    margin: 0 auto;
    .sidebar {
      width: 240px;
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-right: 14px;
    }
    .rhs {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1rem;
        opacity: 0.8;
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 24px;
      .sidebar {
        width: 100%;
        & > div {
          justify-content: center;
          align-items: center;
        }
        div a div>div:nth-child(2) {
          display: none !important;
        }
      }
      .rhs {
        width: 100%;
        .sec{
            text-align: center;
        }
      }
    }
  }
  .embedDemo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 460px;
    overflow-y: scroll;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  .tracks {
    display: flex;
    flex-direction: column;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 45px;
  max-width: 900px;
  font-style: normal;
  text-align: left;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    max-width: 70%;
  }
`;

const Desc = styled.p`
  color: rgb(255, 255, 255);
  font-size: 16px;
  max-width: 800px;
  text-align: left;
  line-height: 32px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
`;

const Label = styled.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  text-align: left;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Tracks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  .track-pill {
    padding: 0.3em 0.5em;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    ${"" /* flex: 1; */}
    white-space: nowrap;
  }
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

/* HELPER FUNCTION */
function isNearAddress(address) {
  if (typeof address !== "string") {
    return false;
  }

  // Allow both ".near" and ".testnet" endings
  if (!address.endsWith(".near") && !address.endsWith(".testnet")) {
    return false;
  }

  const parts = address.split(".");
  if (parts.length !== 2) {
    return false;
  }

  if (parts[0].length < 2 || parts[0].length > 32) {
    return false;
  }

  if (!/^[a-z0-9_-]+$/i.test(parts[0])) {
    return false;
  }

  return true;
}

// removing extra characters and splitting the string into an array
const teammatesArray = teammates.replace(/[\[\]\(\)@]/g, "").split(/[\s,]+/);

console.log("teammatesArray: ", teammatesArray);

const hexRegex = /^[0-9A-F\-_]+$/i;
// filtering out teammates that are not near addresses
const validTeammates = teammatesArray.filter((teammate) => {
  if (hexRegex.test(teammate)) {
    return teammate;
  }
  return isNearAddress(teammate);
});

const teamMates = validTeammates.map((teammate) => (
  <User accountId={teammate} variant={"mobile"} />
));

const defaultImage =
  "https://ipfs.near.social/ipfs/bafkreihi3qh72njb3ejg7t2mbxuho2vk447kzkvpjtmulsb2njd6m2cfgi";

const image = metadata.backgroundImage || defaultImage;

return (
  <Root>
    <Banner image={image}>
      <Title>{title}</Title>
    </Banner>
    <div className="main">
      <div className="sidebar">
        <div className="d-flex flex-column gap-3 flex-wrap">
          <Label>Team</Label>{" "}
          <div className="d-flex gap-2 flex-wrap">{teamMates}</div>
        </div>
        <hr />
        <div className="tracks gap-3">
          <Label>Tracks</Label>
          <Tracks>
            {tracks &&
              tracks.map((track) => (
                <Button variant="outline" disable={true} className="track-pill">
                  {track}
                </Button>
              ))}
          </Tracks>
        </div>
        <hr />
        <div className="d-flex flex-column gap-3">
          <Label>Links</Label>
          <div className="d-flex gap-2">
            <Button href={projectLink} target="_blank">
              Project GitHub
            </Button>
            <Button href={demoLink} target="_blank">
              Demo
            </Button>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column gap-3">
          <Label>Referrer</Label> <p>{referrer}</p>
        </div>
      </div>
      <div className="rhs">
        <div className="sec">
          <h3>Project Description</h3>
          <Desc>{description}</Desc>
        </div>
        <div className="sec">
          <h3>Project Demo</h3>
          <div className="embedDemo">
            <iframe src={demoLink} title="Demo"></iframe>
          </div>
        </div>
        <div className="sec">
          <h3>What I learned:</h3> <p>{learning}</p>
        </div>
      </div>
    </div>
  </Root>
);
