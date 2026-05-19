import { useState } from "react";

function NewHogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog({ ...formData, weight: Number(formData.weight) });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>

      <div className="field">
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input id="specialty" name="specialty" onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input id="weight" name="weight" type="number" onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="image">Image URL</label>
        <input id="image" name="image" onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="greased">Greased?</label>
        <input
          id="greased"
          name="greased"
          type="checkbox"
          onChange={handleChange}
        />
      </div>

      <button className="ui button" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default NewHogForm;