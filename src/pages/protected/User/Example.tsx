// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { parsePhoneNumberFromString } from "libphonenumber-js";

// const PhoneInputWithCountry: React.FC = () => {
//   const [phone, setPhone] = useState("");
//   const [isValidLength, setIsValidLength] = useState(true);
//   const [country, setCountry] = useState("ye"); // Default country

//   const handlePhoneChange = (value: string, countryData: any) => {
//     setPhone(value);
//     setCountry(countryData.countryCode); // Get the country code
//     const phoneNumber = parsePhoneNumberFromString(value, countryData.countryCode?.toUpperCase());
//     if (phoneNumber) {
//       setIsValidLength(phoneNumber.isValid());
//     } else {
//       setIsValidLength(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number:</label>
//       <PhoneInput
//         country={country}
//         value={phone}
//         onChange={(value, countryData) => handlePhoneChange(value, countryData)}
//         inputClass="w-full p-2 border rounded"
//         containerClass="mb-4"
//       />
//       <p className={`text-sm ${isValidLength ? "text-green-500" : "text-red-500"}`}>
//         {isValidLength
//           ? "Phone number is valid."
//           : "Invalid phone number for the selected country."}
//       </p>
//       <p className="text-sm text-gray-500">Entered Phone Number: {phone}</p>
//     </div>
//   );
// };

// export default PhoneInputWithCountry;



// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { parsePhoneNumberFromString } from "libphonenumber-js";

// const PhoneInputWithCountry: React.FC = () => {
//   const [phone, setPhone] = useState("");
//   const [isValidLength, setIsValidLength] = useState(false);
//   const [country, setCountry] = useState("ye"); // Default country
//   const [nationalNumberLength, setNationalNumberLength] = useState<number | null>(null);

//   const handlePhoneChange = (value: string, countryData: any) => {
//     setPhone(value);
//     setCountry(countryData.countryCode); // Get the country code
//     const phoneNumber = parsePhoneNumberFromString(value, countryData.countryCode?.toUpperCase());

//     if (phoneNumber) {
//       setIsValidLength(phoneNumber.isValid()); // تحقق من صحة الرقم
//       setNationalNumberLength(phoneNumber.nationalNumber.length); // استخراج طول الرقم الوطني
//     } else {
//       setIsValidLength(false);
//       setNationalNumberLength(null);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number:</label>
//       <PhoneInput
//         country={country}
//         value={phone}
//         onChange={(value, countryData) => handlePhoneChange(value, countryData)}
//         inputClass="w-full p-2 border rounded"
//         containerClass="mb-4"
//       />
//       {/* الرسالة عند صحة الرقم */}
//       {isValidLength && (
//         <p className="text-sm text-green-500">Phone number is valid for the selected country.</p>
//       )}
//       {/* الرسالة عند عدم صحة الرقم */}
//       {!isValidLength && phone && (
//         <p className="text-sm text-red-500">Invalid phone number for the selected country.</p>
//       )}
//       {/* طباعة طول الرقم الوطني */}
//       {nationalNumberLength !== null && (
//         <p className="text-sm text-gray-500">
//           National phone number length for selected country: {nationalNumberLength} digits.
//         </p>
//       )}
//       <p className="text-sm text-gray-500">Entered Phone Number: {phone}</p>
//     </div>
//   );
// };

// export default PhoneInputWithCountry;






import React, { useState } from "react";
//import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const PhoneInputWithCountry: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [isValidLength, setIsValidLength] = useState(false);
  const [country, setCountry] = useState("ye"); // Default country
  const [nationalNumberLength, setNationalNumberLength] = useState<number | null>(null);

  const handlePhoneChange = (value: string, countryData: any) => {
    setPhone(value);
    setCountry(countryData.countryCode); // Get the country code
    const phoneNumber = parsePhoneNumberFromString(value, countryData.countryCode?.toUpperCase());

    if (phoneNumber) {
      setIsValidLength(phoneNumber.isValid()); // تحقق من صحة الرقم
      setNationalNumberLength(phoneNumber.nationalNumber.length); // استخراج طول الرقم الوطني مباشرة من المكتبة
    } else {
      setIsValidLength(false);
      setNationalNumberLength(null);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number:</label>
      <PhoneInput
        country={country}
        value={phone}
        onChange={(value, countryData) => handlePhoneChange(value, countryData)}
        inputClass="w-full p-2 border rounded"
        containerClass="mb-4"
      />
      {/* الرسالة عند صحة الرقم */}
      {isValidLength && (
        <p className="text-sm text-green-500">Phone number is valid for the selected country.</p>
      )}
      {/* الرسالة عند عدم صحة الرقم */}
      {!isValidLength && phone && (
        <p className="text-sm text-red-500">Invalid phone number for the selected country.</p>
      )}
      {/* طباعة طول الرقم الوطني */}
      {nationalNumberLength !== null && (
        <p className="text-sm text-gray-500">
          The allowed national phone number length for the selected country is: {nationalNumberLength} digits.
        </p>
      )}
      <p className="text-sm text-gray-500">Entered Phone Number: {phone}</p>
    </div>
  );
};

export default PhoneInputWithCountry;





// import React, { useState, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const countryPhoneLength = {
//   ye: 9, // Yemen - 9 digits
//   us: 10, // United States - 10 digits
//   sa: 9, // Saudi Arabia - 9 digits
//   eg: 10, // Egypt - 10 digits
//   // يمكنك إضافة المزيد من الدول هنا مع الطول المحدد للرقم
// };

// const PhoneInputWithCountry: React.FC = () => {
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("ye"); // Default country
//   const [nationalNumberLength, setNationalNumberLength] = useState<number | null>(null);

//   // عند تغيير الدولة، نحدد الطول المسموح به للرقم
//   useEffect(() => {
//     setNationalNumberLength(countryPhoneLength[country] || null);
//   }, [country]);

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number:</label>
//       <PhoneInput
//         country={country}
//         value={phone}
//         onChange={(value, countryData) => {
//           setPhone(value);
//           setCountry(countryData.countryCode); // Get the country code
//         }}
//         inputClass="w-full p-2 border rounded"
//         containerClass="mb-4"
//       />
//       {/* طباعة الرسالة حول الطول المسموح به */}
//       {nationalNumberLength !== null && (
//         <p className="text-sm text-gray-500">
//           The phone number should be at least {nationalNumberLength} digits for the selected country.
//         </p>
//       )}
//       <p className="text-sm text-gray-500">Entered Phone Number: {phone}</p>
//     </div>
//   );
// };

// export default PhoneInputWithCountry;