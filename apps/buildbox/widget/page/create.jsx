// this is where you can create a hackathon

// then you have people submit projects to the hackathon, but they create the project locally

const accountId = context.accountId;

const admins = ["efiz.near"];

if (!admins.includes(accountId)) {
  // unauthorized, return 401
  return <p>401 unauthorized.</p>;
}

const hackathons = Social.keys("*/every/hackathon/**", "final", {
  return_type: "BlockHeight"
});

if (!hackathons) {
  return <p>No hackathons found.</p>;
}

const hackathon = {
  create: (v) => {
    const { title, description, image, backgroundImage, category, tags } = v;

    const hackathonPath = `${context.accountId}/every/project/${normalize(title)}`;

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const StyledItem = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .description {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .author {
    display: flex;
    align-items: center;
  }

  .author-image {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .author-name {
    font-size: 0.875rem;
    font-weight: 600;
  }

  .date {
    font-size: 0.875rem;
    font-weight: 400;
    color: #888;
  }

`;

const Item = ({ item }) => {
  const { title, description, image, backgroundImage, category, tags } = item;

  return (
    <StyledItem>
      <img className="image" src={image} alt="" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="footer">
        <div className="author">
          <img className="author-image" src={image} alt="" />
          <p className="author-name">Author</p>
        </div>
        <p className="date">Date</p>
      </div>
    </StyledItem>
  );
}


return <ItemFeed items={} Item={} Layout={Grid} />;

// create hackathon
// create project
// create submission
