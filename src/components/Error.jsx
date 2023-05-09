const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white text-center font-bold p-3 rounded">
      <h2>{mensaje}</h2>
    </div>
  );
};

export default Error;
