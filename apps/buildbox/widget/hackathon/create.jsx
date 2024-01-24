// this is where you can create a hackathon

// then you have people submit projects to the hackathon, but they create the project locally

const { normalize } = VM.require("buildbox.near/widget/utils.stringUtils") || { normalize: (s) => s };

const accountId = context.accountId;

const admins = ["efiz.near"];

if (!admins.includes(accountId)) {
  // unauthorized, return 401
  return <p>401 unauthorized.</p>;
}

const hackathons = Social.keys("*/test/hackathon/**", "final", {
  return_type: "BlockHeight"
});

if (!hackathons) {
  return <p>No hackathons found.</p>;
}

const hackathon = {
  create: (v) => {
    const { title, description, image, backgroundImage, category, tags } = v;
    const id = normalize(title);
    const hackathonPath = `${context.accountId}/test/hackathon/${normalize(title)}`;

    Social.set({
      post: {
        main: JSON.stringify({
          text: `I've just created a hackathon! #build #every #hackathon \n\n[EMBED](buildbox.near/widget/embed?hackathon=${hackathonPath})\n\n ${notes}`,
          image: "",
          type: "md",
          metadata: {},
        }),
      },
      every: {
        hackathon: {
          ["my-hackathon"]: {
            // normalized title?
            "": JSON.stringify({
              linkedAccounts: {
                admin: "",
              },
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
    });

    return id;
  },
  get: (id) => {
    if (Storage.get(id)) { // is there a more elegant way to do this? 
      return Storage.get(id); // check mob.near and mattb.near
    }
    return Social.get(`*/every/hackathon/${id}`, "final");
  }
};

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
  if (true) {
    const id = normalize(title);
    const hackathonPath = `${context.accountId}/test/hackathon/${id}`;
    const notes = ""; // what I learned

    Social.set({
      // post: {
      //   main: JSON.stringify({
      //     text: `I've just submitted my project to abstraction hacks #abstraction #hack #build #everything\n\n[EMBED](buildbox.near/widget/embed?project=${projectPath})\n\n ${notes}`,
      //     image: "",
      //     type: "md",
      //     metadata: {},
      //   }),
      // },
      test: {
        // it's like we create a project and a submission at the same time
        hackathon: {
          [id]: {
            // normalized title?
            "": JSON.stringify({
              tracks,
              teammates,
            }),
            metadata: {
              title,
              description,
              // image,
              // backgroundImage,
              // category: "", // this would be nice to be a thing stored somewhere
              type: "every.near/type/hackathon", // this is type stored on chain, defines stringified JSON
              tags: {},
            },
          },
        },
      },
      // every: {
      //   video: {
      //     "my-video-title": {
      //       // upload your video here (or attach link to elsewhere)
      //       "": JSON.stringify({}),
      //       metadata: {
      //         title,
      //         description,
      //         image,
      //         backgroundImage,
      //         category: "",
      //         tags: {
      //           hack: "",
      //         },
      //       },
      //     },
      //   },
      // },
      // buildbox: {
      //   hackathon: {
      //     "abstraction-hacks-W2024": {
      //       submission: {
      //         "----every/project----": "", // get from community voice, creates ID from accountId + project name
      //       },
      //     },
      //   },
      // },
    });
  } else {
    // alert("Please provide your Personal Contact Info and consent to submit.");
  }
};

return (
  <Root>
    <Header>create hackathon</Header>
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
        // disabled={!contactInfo || !consentChecked}
      >
        Submit
      </SubmitButton>
    </FormContainer>
  </Root>
);
