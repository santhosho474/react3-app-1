import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createMechanicAction,
  updateMechanicAction,
} from "../redux/MechanicReducer";

export function MechanicUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [mechanicsName, setMechanicsName] = useState(state.employee.refmec.mechanicsName);
  const [mechanicsAge, setMechanicsAge] = useState(state.employee.refmec.mechanicsAge);
  const [mechanicsMobile, setMechanicsMobile] = useState(state.employee.refmec.mechanicsMobile);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateMechanicsName = (e) => setMechanicsName(e.target.value);
  const updateMechanicsAge = (e) => setMechanicsAge(e.target.value);
  const updateMechanicsMobile = (e) => setMechanicsMobile(e.target.value);

  const addMechanic = (e) => {
    e.preventDefault();
    console.log(mechanicsName, mechanicsAge, mechanicsMobile);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createMechanicAction({
        mechanicsName, 
        mechanicsAge, 
        mechanicsMobile
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setMechanicsName("");
    setMechanicsAge("");
    setMechanicsMobile("");
  };

  const updateMechanic = () => {
    dispatch(
      updateMechanicAction({
        mechanicsId: state.employee.refmec.mechanicsId,
        mechanicsName,
        mechanicsAge,
        mechanicsMobile
      })
    );

    // reset the form
    setMechanicsName("");
    setMechanicsAge("");
    setMechanicsMobile("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.employee.refmec.mechanicsName ? "Update Mechanic" : "Create Mechanic"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={mechanicsName}
            onChange={(e) => updateMechanicsName(e)}
            className="form-control"
            placeholder="Enter Mechanics name"
          />
        </div>

        <div className="mb-1">
          <input
            type="number"
            value={mechanicsAge}
            onChange={(e) => updateMechanicsAge(e)}
            className="form-control"
            placeholder="Enter age"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={mechanicsMobile}
            onChange={(e) => updateMechanicsMobile(e)}
            className="form-control"
            placeholder="Enter Mobile"
          />
        </div>

        <div className="mb-1">
          {state.employee.refmec.mechanicsName ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Mechanic"
              onClick={() => updateMechanic()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Add Mechanic"
              onClick={(e) => addMechanic(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
