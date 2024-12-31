// src/ContactList.tsx
import React, { useState } from 'react';
import { contacts } from './contactsData';
import ContactDialog from '../../../Components/Ui/ContactDialog';

const ContactList: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  

  return (

    <div className="p-4">
      <div className="mb-2" onClick={() => setModalOpen(true)}>
            <input type="radio" id="except-contacts" name="privacy" />
            <label htmlFor="except-contacts" className="ml-2">My contacts except...</label>
          </div>
      
      <ContactDialog 
        isOpen={isModalOpen}
        contacts={contacts}
        onClose={() => setModalOpen(false)} 
        Title={"My contacts except"} />
    </div>
  );
};

export default ContactList;