import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="row g-0 align-items-center">
        <div className="col-md-2 text-center">
          <img
            src={contact.image || "https://via.placeholder.com/150"}
            className="img-fluid rounded-circle"
            alt={contact.name}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text">
              <i className="fas fa-envelope me-2"></i>{contact.email}<br />
              <i className="fas fa-phone me-2"></i>{contact.phone}<br />
              <i className="fas fa-map-marker-alt me-2"></i>{contact.address}
            </p>
          </div>
        </div>
        <div className="col-md-2 justify-content-end">
          <button className="btn btn-primary me-2" onClick={() => navigate(`/add-contact/${contact.id}`)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

