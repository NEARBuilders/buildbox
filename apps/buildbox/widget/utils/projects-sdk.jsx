const flattenObject = (obj, parentKey) => {
  parentKey = parentKey ?? "";
  let paths = [];

  Object.keys(obj).forEach((key) => {
    const currentPath = parentKey ? `${parentKey}/${key}` : key;

    if (typeof obj[key] === "object") {
      paths = paths.concat(flattenObject(obj[key], currentPath));
    } else {
      paths.push(currentPath);
    }
  });

  console.log("from the helper function!");

  return paths;
};

const fetchProjects = (app, type) => {
  const keys = Social.keys(`*/${app}/${type}/*`, "final", {
    return_type: "BlockHeight",
  });

  if (!keys) {
    return "Loading...";
  }

  let flattenedKeys = flattenObject(keys);
  flattenedKeys = flattenedKeys.filter(
    (s) => !s.includes("/project/hackathon")
  );

  const projects = Social.get(flattenedKeys, "final");
  return projects;
};

return { fetchProjects };
