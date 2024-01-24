const { hackathon, project } = props;


if (hackathon) {
  return <Widget src="buildbox.near/widget/hackathon" props={{ hackathon }} />;
}