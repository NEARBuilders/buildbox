const { extractValidNearAddresses } = VM.require(
  "buildbox.near/widget/utils.extractValidNearAddresses"
) || {
  validNearAddresses: () => {},
};

const { fetchProjects } = VM.require(
  "buildbox.near/widget/utils.fetchProjects"
) || {
  fetchProjects: () => {},
};

return {
  fetchProjects,
  extractValidNearAddresses,
};
