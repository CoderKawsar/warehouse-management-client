import { Spinner as BootStrapSpinner } from "react-bootstrap";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "400px" }}
    >
      <BootStrapSpinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </BootStrapSpinner>
    </div>
  );
};

export default Spinner;
