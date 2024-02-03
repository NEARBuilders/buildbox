const { Feed } = VM.require("devs.near/widget/Feed") || {
  Feed: () => <></>,
};

return (
  <Feed
    index={[
      {
        action: "hashtag",
        key: "abstraction",
        options: {
          limit: 10,
          order: "desc",
        },
        cacheOptions: {
          ignoreCache: true,
        },
        required: true
      },
      {
        action: "hashtag",
        key: "hack",
        options: {
          limit: 10,
          order: "desc",
        },
        cacheOptions: {
          ignoreCache: true,
        },
        required: true
      },
    ]}
    Item={(p) => (
      <Widget
        src="buildbox.near/widget/post.item"
        loading={<div className="w-100" style={{ height: "200px" }} />}
        props={{
          item: p.item,
          accountId: p.accountId,
          blockHeight: p.blockHeight,
          noBorder: true,
        }}
      />
    )}
  />
);
