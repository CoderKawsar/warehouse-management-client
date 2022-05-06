import { Spinner as BootStrapSpinner } from "react-bootstrap";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loading-spinner d-flex justify-content-center align-items-center">
      <BootStrapSpinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </BootStrapSpinner>
    </div>
  );
};

export default Spinner;
