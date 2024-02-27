const { fetchProjects } = VM.require("buildbox.near/widget/utils.projects-sdk");
//   || {
//   fetchProjects: () => {},
// };
const { Avatar } = VM.require("buildhub.near/widget/components");
// Feed
const app = props.app || "buildbox";
const type = props.type || "project";

const data = fetchProjects(app, type);

if (!data) {
  return "Loading...";
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px auto 0;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 10px;

  @media (min-width: 576px) {
    grid-gap: 15px;
  }

  @media (min-width: 992px) {
    grid-gap: 20px;
  }

  > * {
    transition: transform 0.3s ease; // Smooth transition for hover effect

    &:hover {
      transform: scale(1.03); // Subtle scale effect on hover
    }
  }

  .card-img-top {
    position: relative;
  }

  .card-body {
    padding: 10px 20px 0 10px;
    overflow: scroll;
    text-overflow: elipsis;
  }

  .user-avatar {
    position: absolute;
    bottom: -20px;
    left: 10px;
  }
  .card-bottom {
    border-top: 1px solid #0005;
    padding: 5px 10px 0 10px;
  }
`;

const processData = useCallback(
  (data) => {
    const accounts = Object.entries(data);

    const allItems = accounts
      .map((account) => {
        const accountId = account[0];

        return Object.entries(account[1][app][type]).map((kv) => {
          return {
            accountId,
            type: type,
            name: kv[0],
            metadata: kv[1].metadata,
          };
        });
      })
      .flat();

    // sort by latest
    allItems.sort((a, b) => b.blockHeight - a.blockHeight);
    return allItems;
  },
  [type]
);

const items = processData(data);

console.log("items: ", data);

if (!items) {
  return "Loading data...";
}

if (items.length === 0) {
  return `No items of type: "${type}" found.`;
}

function Item({ accountId, name, type, metadata }) {
  // Use metadata.name if it exists, otherwise use the passed name
  const displayName = metadata.name || name;
  const defaultImage =
    "https://ipfs.near.social/ipfs/bafkreihi3qh72njb3ejg7t2mbxuho2vk447kzkvpjtmulsb2njd6m2cfgi";

  const image = metadata.backgroundImage || defaultImage;

  return (
    <div
      className="card"
      style={{
        maxWidth: "100%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        backgroundColor: "#17181C",
        color: "#fff",
      }}
    >
      <div
        className="card-img-top"
        style={{
          backgroundImage: `url(${image})`,
          height: "80px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="user-avatar">
          <Avatar variant={"mobile"} accountId={accountId} />
        </div>
      </div>

      <div className="card-body">
        <Link
          to={`/buildbox.near/widget/app?page=view&id=${accountId}/${app}/${type}/${name}`}
          style={{ textDecoration: "none" }}
        >
          <h5 className="card-title mt-3">
            {displayName.length > 23
              ? `${displayName.slice(0, 17)}...`
              : displayName}
          </h5>
        </Link>
        {metadata.description && (
          <p
            className="card-text"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {metadata.description}
          </p>
        )}
      </div>
      {context.accountId && (
        <div
          className="pb-2 card-bottom"
          style={{ display: "flex", justifyContent: "flex-end", gap: "4px" }}
        >
          <Widget
            src="mob.near/widget/N.StarButton"
            props={{
              notifyAccountId: accountId,
              item: {
                type: "social",
                path: `${accountId}/${type}/${name}`,
              },
            }}
          />
          <Widget
            src="mob.near/widget/N.LikeButton"
            props={{
              notifyAccountId: accountId,
              item: {
                type: "social",
                path: `${accountId}/${type}/${name}`,
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

return (
  <Container>
    <Widget
      src="everycanvas.near/widget/ItemFeed"
      props={{
        items: items,
        renderItem: Item,
        perPage: 100,
        renderLayout: (items) => <Grid>{items}</Grid>,
      }}
    />
  </Container>
);
