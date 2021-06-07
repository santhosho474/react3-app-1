import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteMechanicAction,
  getAllMechanicAction,
  getByIdMechanicAction,
  updateRefMechanic
} from "../redux/MechanicReducer";
import { MechanicModal } from "./MechanicModal";

export function MechanicList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllMechanicAction());
  }, []);

  const deleteMechanic = (item, index) => {
    dispatch(deleteMechanicAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);
  };

  const updateMechanic = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateRefMechanic(item));

    // form page
    history.push("/create-employee");
  };

  const getMechanicById = (item) => {
    dispatch(getByIdMechanicAction(item));
  };

  return (
    <>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-secondary">Employee List</h3>

          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">USERNAME</th>
                <th scope="col">PASSWORD</th>
                <th scope="col">EMAIL</th>
                <th scope="col">MOBILE</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...state.employee.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.userName}</td>
                  <td>{"********"}</td>
                  <td>{"****@gmail.com"}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => getMechanicById(item)}
                      value="Detail"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      onClick={() => updateMechanic(item)}
                      value="Edit"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteMechanic(item, index)}
                      className="btn btn-link text-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-2 d-none d-md-block"></div>
      </div>

      {/** EMPLOYEE MODAL */}
      <MechanicModal />
    </>
  );
}
