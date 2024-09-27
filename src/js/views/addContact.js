import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    if (id) {
      const contactToEdit = store.contacts.find((c) => c.id === parseInt(id));
      if (contactToEdit) {
        setContact(contactToEdit);
      }
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      actions.updateContact(id, contact); 
    } else {
      actions.addContact(contact); 
    }
    navigate("/"); 
  };

  return (
    <div className="container mt-5">
      <h1>{id ? "Edit Contact" : "Add New Contact"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            {id ? "Update Contact" : "Save Contact"}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};
