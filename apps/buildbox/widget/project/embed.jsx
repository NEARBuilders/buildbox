const { href } = props;

const data = Social.get(href + "/**", "final");
return <p>{JSON.stringify(data)}</p>