// src/ContactDialog.tsx
import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { IoCloseSharp } from "react-icons/io5";
import GenericCard from '../../../../Components/ui/GenericCard';
import { contactsModel } from '../../pages/protected/status/contactsModel';
import ListTitle from './ListTitle';
import CircleImage from './CircleImage';



interface ContactDialogProps {
  contacts: contactsModel[];
  onClose: () => void;
  Title:string;
  isOpen: boolean;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ contacts, onClose ,Title,isOpen}) => {
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);

  const toggleContact = (id: number) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((contactId) => contactId !== id) : [...prev, id]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="  flex items-center justify-center bg-gray-500   ">
      <div className="bg-white rounded-lg shadow-lg  w-96 ">
        <div className=' bg-green-900 text-white text-xl  p-5 font-semibold mb-4 rounded '>
        
          <GenericCard 
            hover='inherit'
            leftComponent = {
                <button
                    onClick={onClose}
                >
                    <IoCloseSharp />
                </button>
            }
            centerComponent =
                {
                    <h2 >{Title}</h2>
                }
            rightComponent =
            {
                <button
                        onClick={onClose}
                    >
                    <IoMdCheckmark />
                    </button>
            }
         />
        </div>
        
        <div className="max-h-60 p-5 overflow-y-auto">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center  mb-2">
              <input
                type="checkbox"
                checked={selectedContacts.includes(contact.id)}
                onChange={() => toggleContact(contact.id)}
                className="mr-2 "
              />
              <ListTitle Title={contact.name} imageComponent={<CircleImage size={10} imageUrl={contact.image}/>} subTitle={contact.description}/>
              
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default ContactDialog;