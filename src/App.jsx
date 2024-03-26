import "./App.css";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    gender: "",
    phoneNumber: "",
  });

  function handleFormChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then(() => {
      setForm({
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        gender: "",
        phoneNumber: "",
      })
    })
    .then(() => alert(`Details for ${form.firstName} ${form.lastName} have been received successfully!`))
  }

  return (
    <div className="create">
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>First Name</strong>
        </label>
        <input
          type="text"
          required
          id="firstName"
          value={form.firstName}
          onChange={handleFormChange}
        />
        <label>
          <strong>Last Name</strong>
        </label>
        <input
          type="text"
          required
          id="lastName"
          value={form.lastName}
          onChange={handleFormChange}
        />
        <label>
          <strong>Country</strong>
        </label>
        <input
          type="text"
          required
          id="country"
          value={form.country}
          onChange={handleFormChange}
        />
        <label>
          <strong>City</strong>
        </label>
        <input
          type="text"
          required
          id="city"
          value={form.city}
          onChange={handleFormChange}
        />
        <label>
          <strong>Gender</strong>
        </label>
        <select
          name=""
          id="gender"
          value={form.gender}
          onChange={handleFormChange}
        >
          <option value="">Select a gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
        <label>
          <strong>Phone Number</strong>
        </label>
        <input
          type="tel"
          required
          id="phoneNumber"
          value={form.phoneNumber}
          onChange={handleFormChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
