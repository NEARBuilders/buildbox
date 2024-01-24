console.log(JSON.stringify(context));
function composeData() {
  const data = {
    thing: {
      core: {
        value: {
          name: "lynkable",
          description: "",
          children: [{}],
        },
        type: "every.near/type/dao",
      },
    },
  };

  return data;
}

return (
  <>
    <CommitButton force data={composeData}>
      create
    </CommitButton>
  </>
);
