// I think this could show all of the options, maybe

// create, browse
// if create, then link to /create
// if browse, then link to /browse

// can grab this from mapbox
// libertydao.near/widget/Mapbox.

const buttons = [
  { icon: "bi bi-hammer", title: "Create", to: "?page=create" },
  { icon: "bi bi-globe", title: "Browse", to: "?page=browse" },
];

const ButtonGrid = ({ buttons }) => {
  return (
    <div className="button-grid">
      {buttons.map((button, index) => (
        <Link
          to={button.to}
          key={index}
          className="button"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <i className={button.icon} />
          {button.title}
        </Link>
      ))}
    </div>
  );
};

// it's almost like this is a layout -- maybe theme should be pulled out to layout...

const CSS = styled.div`
  .app {
    height: 85vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1rem;
  }


  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #f8f8f8; 
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px); 
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

return (
  <CSS>
    <div className="app">
      <div className="container">
        <ButtonGrid buttons={buttons} />
      </div>
    </div>
  </CSS>
);