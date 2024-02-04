const { path } = props;

const data = Social.get(path + "/**", "final");

return <p>{JSON.stringify(data)}</p>