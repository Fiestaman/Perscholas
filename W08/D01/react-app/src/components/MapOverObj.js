const MapOverObj = (props) => {
  const Joshua = {
    name: "Joshua Miller",
    age: "you wish you knew",
    email: "jomiller@perscholas.org"
  };

  const mapped = Object.keys(Joshua).map((key) => {
    return (
      <h2>
        {key}: {Joshua[key]}
      </h2>
    );
  });
  // console.log(mapped);

  return mapped;
};

export default MapOverObj;
