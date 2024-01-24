// this is where you can create a hackathon

// then you have people submit projects to the hackathon, but they create the project locally

const { normalize } = VM.require("buildbox.near/widget/utils.stringUtils") || {
  normalize: (s) => s,
};

const type = props.type || "project";
const app = props.app || "test";

const accountId = context.accountId;

const admins = ["efiz.near"];

if (!admins.includes(accountId)) {
  // unauthorized, return 401
  return <p>401 unauthorized.</p>;
}

const hackathons = Social.keys("*/test/hackathon/**", "final", {
  return_type: "BlockHeight",
});

if (!hackathons) {
  return <p>No hackathons found.</p>;
}

/**
 * build box submit hackathon
 * or submit project to whatever hackathon is main
 */

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subheader = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  width: 80%;
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const Subtext = styled.p`
  font-size: 12px;
  color: #888;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  margin-right: 15px;
`;

const CheckBox = styled.input`
  margin-right: 5px;
`;

const ConsentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConsentCheckbox = styled.input`
  margin-right: 5px;
`;

const ConsentLabel = styled.label`
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [tracks, setTracks] = useState([]);
const [teammates, setTeammates] = useState("");
const [projectLink, setProjectLink] = useState("");
const [demoLink, setDemoLink] = useState("");
const [contactInfo, setContactInfo] = useState("");
const [consentChecked, setConsentChecked] = useState(false);
const [referrer, setReferrer] = useState("");

const handleCheckboxChange = (track) => {
  if (tracks.includes(track)) {
    setTracks(tracks.filter((t) => t !== track));
  } else {
    setTracks([...tracks, track]);
  }
};

const handleSubmit = () => {
  if (contactInfo && consentChecked) {
    const { title, description, image, backgroundImage, category, tags } = v; // comes fr
    const id = normalize(title);
    const hackathonPath = `${context.accountId}/${app}/${type}/${id}`;

    Social.set(
      {
        // post: {
        //   main: JSON.stringify({
        //     text: `I've just created a hackathon! #build #every #hackathon \n\n[EMBED](buildbox.near/widget/embed?hackathon=${hackathonPath})\n\n`,
        //     image: "",
        //     type: "md",
        //     metadata: {},
        //   }),
        // },
        [app]: {
          [type]: {
            [id]: {
              "": JSON.stringify({
                // what data does a hackathon have?
              }),
              metadata: {
                name: title,
                description,
                image,
                backgroundImage,
                type: "every.near/type/hackathon",
                category,
                tags,
              },
            },
          },
        },
      },
      {
        force: true,
        onCommit: (v) => console.log("onCommit", v),
        onCancel: (v) => console.log("onCancel", v),
      }
    );
  } else {
    // alert("Please provide your Personal Contact Info and consent to submit.");
  }
};

return (
  <Root>
    <Header>submit project</Header>
    <FormContainer>
      <FormGroup>
        <Label>Title</Label>
        <Subtext>{/* Populate subtext here */}</Subtext>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Description</Label>
        <Subtext>{/* Populate subtext here */}</Subtext>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Tracks</Label>
        <Subtext>Check the tracks you are opting in for</Subtext>
        <CheckboxGroup>
          {[
            "Pagoda's Chain Signatures",
            "General Prize",
            "Keypom",
            "Metatransactions",
            "Abstraction on BOS",
            "Mintbase",
            "Postlock Bounty",
            "NEAR Balkans",
          ].map((track) => (
            <CheckboxLabel key={track}>
              <CheckBox
                type="checkbox"
                checked={tracks.includes(track)}
                onChange={() => handleCheckboxChange(track)}
              />
              {track}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FormGroup>

      <FormGroup>
        <Label>Teammates</Label>
        <Subtext>@ the near addresses of your teammates</Subtext>
        <Input
          type="text"
          value={teammates}
          onChange={(e) => setTeammates(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Project Link</Label>
        <Subtext>Put a URL of your project</Subtext>
        <Input
          type="text"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>Demo Link</Label>
        <Subtext>Put a URL of your demo/pitch</Subtext>
        <Input
          type="text"
          value={demoLink}
          onChange={(e) => setDemoLink(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Personal Contact Info</Label>
        <Subtext>Email/Telegram</Subtext>
        <Input
          type="text"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label>How did you hear about this hackathon?</Label>
        <Subtext>Developer DAO, 100x Devs, Build DAO, Twitter, ...</Subtext>
        <Input
          type="text"
          value={referrer}
          onChange={(e) => setReferrer(e.target.value)}
        />
      </FormGroup>

      <ConsentContainer>
        <ConsentCheckbox
          type="checkbox"
          checked={consentChecked}
          onChange={() => setConsentChecked(!consentChecked)}
        />
        <ConsentLabel>
          I consent to my personal contact info being saved in the social.near
          contract
        </ConsentLabel>
      </ConsentContainer>
      <SubmitButton
        onClick={handleSubmit}
        disabled={!contactInfo || !consentChecked}
      >
        Submit
      </SubmitButton>
    </FormContainer>
  </Root>
);
