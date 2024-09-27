const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [],
	  },
	  actions: {
		getContacts: async () => {
			try {
			  const response = await fetch('https://playground.4geeks.com/contact/agendas/agenda%20Niki/contacts', {
				method: 'GET',
				headers: {
				  'accept': 'application/json',
				},
			  });
			  if (response.ok) {
				const data = await response.json();
				console.log('Contacts fetched:', data); 
				setStore({ contacts: data.contacts });
			  } else {
				console.error('Error fetching contacts');
			  }
			} catch (error) {
			  console.error('Fetch error:', error);
			}
		  },
		  
		addContact: async (newContact) => {
		  try {
			const response = await fetch('https://playground.4geeks.com/contact/agendas/agenda%20Niki/contacts', {
			  method: 'POST',
			  headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(newContact),
			});
			if (response.ok) {
			  getActions().getContacts();
			} else {
			  console.error('Error adding contact');
			}
		  } catch (error) {
			console.error('Fetch error:', error);
		  }
		},

		updateContact: async (id, updatedContact) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/contact/agendas/agenda%20Niki/contacts/${id}`, {
			  method: 'PUT',
			  headers: {
				'accept': 'application/json',
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(updatedContact),
			});
			if (response.ok) {
			  getActions().getContacts();
			} else {
			  console.error('Error updating contact');
			}
		  } catch (error) {
			console.error('Fetch error:', error);
		  }
		},
  
		deleteContact: async (id) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/contact/agendas/agenda%20Niki/contacts/${id}`, {
			  method: 'DELETE',
			  headers: {
				'accept': 'application/json',
			  },
			});
			if (response.ok) {
			  getActions().getContacts();
			} else {
			  console.error('Error deleting contact');
			}
		  } catch (error) {
			console.error('Fetch error:', error);
		  }
		},
	  },
	};
  };
  
  export default getState;
  
  