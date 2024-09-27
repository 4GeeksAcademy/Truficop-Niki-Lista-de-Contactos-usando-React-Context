import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "../component/deleteModal";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);

  useEffect(() => {
    actions.getContacts();
  }, []);

  const handleDelete = (id) => {
    setShowModal(true); 
    setContactIdToDelete(id);
  };

  const confirmDelete = () => {
    actions.deleteContact(contactIdToDelete); o
    setShowModal(false); 
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  if (!Array.isArray(store.contacts)) {
    return <p>Loading contacts...</p>;  
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Contact List</h1>
        <button className="btn btn-success" onClick={() => navigate("/add-contact")}>
          Add New Contact
        </button>
      </div>
      <div className="row flex-column">
        {store.contacts.map((contact) => (
          <div className="mb-3" key={contact.id}>
            <ContactCard contact={contact} onDelete={handleDelete} />
          </div>
        ))}
      </div>

      {showModal && (
        <DeleteModal
          show={showModal}
          onConfirm={confirmDelete}
          onClose={cancelDelete}
          message="Are you sure you want to delete this contact?"
        />
      )}
    </div>
  );
};


