import { useState, useEffect } from "react";
// import axios from "axios";
// import "./styles.css";

function Targets() {
//   const [targets, setTargets] = useState([]);
//   const [newTarget, setNewTarget] = useState("");

//   // Fetch the list of targets from the backend
//   useEffect(() => {
//     axios.get("/api/gymtargets").then((response) => {
//       setTargets(response.data);
//     });
//   }, []);

//   // Add a new target to the list
//   const handleAddTarget = () => {
//     axios
//       .post("/api/gymtargets", { target: newTarget })
//       .then((response) => {
//         setTargets([...targets, response.data]);
//         setNewTarget("");
//       });
//   };

  // Delete a target from the list
  // const handleDeleteTarget = (id) => {
  //   axios.delete(`/api/gymtargets/${id}`).then(() => {
  //     setTargets(targets.filter((t) => t.id !== id));
  //   });
  // };

  return (
    <div className="gym-targets">
      <h2>My Gym Targets</h2>
      <ul>
        {Targets.map((target) => (
          <li key={target.id}>
            {target.target}
            {/* <button onClick={() => handleDeleteTarget(Target.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
      <div className="add-target">
        <input
          type="text"
          // value={newTarget}
          // onChange={(e) => setNewTarget(e.target.value)}
          placeholder="Enter a new target"
        />
        {/* <button onClick={handleAddTarget}>Add Target</button> */}
      </div>
    </div>
  );
}

export default Targets;