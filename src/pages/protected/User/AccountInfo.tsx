import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
// import 'react-phone-number-input/style.css';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Email, Lock, PersonRounded } from "@mui/icons-material";
import PhoneInputWithCountry from "./Example";

const AccountInfo: React.FC = () => {
  // State for toggling editing modes
  const [accountInfoIsEditing, setAccountInfoIsEditing] = useState(false);
  const [phoneInfoIsEditing, setPhoneInfoIsEditing] = useState(false);
  const [passwordIsEditing, setPasswordIsEditing] = useState(false);
  const [emailIsEditing, setEmailIsEditing] = useState(false);

  // State for password visibility
  const [passwordVisibility, setPasswordVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // State for holding information
  const [accountInfo, setAccountInfo] = useState([
    { field: "accountName", label: "Account Name", value: "Ahmed Account", maxLength: 50 },
    { field: "username", label: "Username", value: "Ahmed Mohamed", maxLength: 20 },
  ]);

  const [phoneInfo, setPhoneInfo] = useState([
    { field: "phone", label: "Phone Num", value: "00967777777777",  maxLength: 9 },
  ]);

  const [emailInfo, setEmailInfo] = useState([
    { field: "email", label: "Email", value: "ahmed@example.com", type: "email" },
  ]);

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handlers for toggling editing modes
  const handleEdit = (section: string) => {
    if (section === "account") setAccountInfoIsEditing(true);
    if (section === "phone") setPhoneInfoIsEditing(true);
    if (section === "password") setPasswordIsEditing(true);
    if (section === "email") setEmailIsEditing(true);
  };

  const handleSave = (section: string) => {
    if (section === "account") setAccountInfoIsEditing(false);
    if (section === "phone") setPhoneInfoIsEditing(false);
    if (section === "password") setPasswordIsEditing(false);
    if (section === "email") setEmailIsEditing(false);
  };

  // Handlers for updating information
  const handleChangeAccount = (field: string, newValue: string, maxLength: number) => {
    if (newValue.length <= maxLength) {
      setAccountInfo((prev) =>
        prev.map((item) =>
          item.field === field ? { ...item, value: newValue } : item
        )
      );
    }
  };
  const [phone, setPhone] = useState<string>('');

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const handleChangePhone = (field: string, newValue: string) => {
    setPhoneInfo((prev) =>
      prev.map((item) =>
        item.field === field ? { ...item, value: newValue } : item
      )
    );
  };

  const handleChangeEmail = (field: string, newValue: string) => {
    setEmailInfo((prev) =>
      prev.map((item) =>
        item.field === field ? { ...item, value: newValue } : item
      )
    );
  };

  const handleChangePassword = (field: string, newValue: string) => {
    if (newValue.length <= 15) { // تحديد أقصى عدد للأحرف بـ 15
      setPasswordInfo((prev) => ({
        ...prev,
        [field]: newValue,
      }));
    }
  };

  // Utility functions
  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const getCharacterCountText = (value: string, maxLength: number) => {
    return `${value.length}/${maxLength}`;
  };
 
  return (
    <div className="lg:w-1/3 w-full bg-white shadow-md rounded-lg p-4">

      {/* Profile Image Section */}
      <div className="flex flex-col items-center text-center relative">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-30 h-30 rounded-full mb-4 shadow-lg"
        />
        <label htmlFor="imageUpload" className="px-4 py-2 text-black rounded cursor-pointer"></label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={() => alert("Choose Image Successfully ")}
        />
      </div>

      {/* Account Information Section */}
      <div className="mt-6">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Information</h3>
          <IconButton onClick={() => handleEdit("account")} color="primary" className="ml-2">
            <EditIcon />
          </IconButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md space-y-4">
{accountInfo.map(({ field, label, value, maxLength }, index) => (
  <div key={field}>
    <p className={`${accountInfoIsEditing ? "text-black" : "text-gray-500"}`}>
      {accountInfoIsEditing ? (
        <div>
          <label htmlFor={field} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              {index === 0 ? (
                <PersonRounded className="text-black" />
              ) : (
                <AccountCircleIcon className="text-black" />
              )}
            </span>
            <input
              id={field}
              type="text"
              value={value}
              onChange={(e) => handleChangeAccount(field, e.target.value, maxLength)}
              className="w-full pl-10 px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="text-sm text-gray-500 mt-1 text-right">
            {getCharacterCountText(value, maxLength)}
          </div>
        </div>
      ) : (
        <span className="font-semibold">
          {label}: {value}
        </span>
      )}
    </p>
  </div>
))}

          {accountInfoIsEditing && (
            <div className="flex justify-end">
              <IconButton onClick={() => handleSave("account")} color="success">
                <SaveIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>

    {/* Email Section */}
    <div className="mt-6">
        <div className="flex items-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <IconButton onClick={() => handleEdit("email")} color="primary" className="ml-2">
            <EditIcon />
            </IconButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md space-y-4">
            {emailInfo.map(({ field, label, value }) => (
            <div key={field}>
                <p className={`${emailIsEditing ? "text-black" : "text-gray-500"}`}>
                {emailIsEditing ? (
                    <div>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">{label}</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <Email className="text-black"/> {/* أيقونة البريد الإلكتروني */}
                        </span>
                        <input
                        id={field}
                        type="text"
                        value={value}
                        onChange={(e) => handleChangeEmail(field, e.target.value)}
                        className="w-full pl-10 px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                    </div>
                    </div>
                ) : (
                    <span className="font-semibold">{label}: {value}</span>
                )}
                </p>
            </div>
            ))}
            {emailIsEditing && (
            <div className="flex justify-end">
                <IconButton onClick={() => handleSave("email")} color="success">
                <SaveIcon />
                </IconButton>
            </div>
            )}
        </div>
     </div>

      {/* Phone Number Section */}

      <div className="mt-6">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Number</h3>
          <IconButton onClick={() => handleEdit("phone")} color="primary" className="ml-2">
            <EditIcon />
          </IconButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md space-y-4">
          {phoneInfo.map(({ field, label, value,  maxLength }) => (
            <div key={field}>
              <p className={`${phoneInfoIsEditing ? "text-black" : "text-gray-500"}`}>
                {phoneInfoIsEditing ? (
                  <div className="flex items-center space-x-2">
                   
                    <div className="text-sm text-gray-500">
                    <PhoneInputWithCountry  />.

                      {getCharacterCountText(value, maxLength)}
                    </div>
                  </div>
                ) : (
                  <span className="font-semibold">{label}: {value}</span>
                )}
              </p>
            </div>
          ))}
          {phoneInfoIsEditing && (
            <div className="flex justify-end">
              <IconButton onClick={() => handleSave("phone")} color="success">
                <SaveIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>

     {/* Password Section */}
     <div className="mt-6">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Password</h3>
          <IconButton onClick={() => handleEdit("password")} color="primary" className="ml-2">
            <EditIcon />
          </IconButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-md space-y-4">
          {passwordIsEditing ? (
            <>
              {Object.entries(passwordInfo).map(([field, value]) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field === "currentPassword" && "Current Password"}
                    {field === "newPassword" && "New Password"}
                    {field === "confirmPassword" && "Confirm Password"}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <Lock className="text-black" /> {/* أيقونة القفل */}
                    </span>
                    <input
                      id={field}
                      type={passwordVisibility[field as keyof typeof passwordVisibility] ? "text" : "password"}
                      value={value}
                      onChange={(e) => handleChangePassword(field, e.target.value)}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-10"
                    />
                    <button
                      onClick={() => togglePasswordVisibility(field as keyof typeof passwordVisibility)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none text-gray-600 hover:text-gray-800"
                    >
                      {passwordVisibility[field as keyof typeof passwordVisibility] ? (
                        <VisibilityIcon className="text-red-600"  />
                      ) : (
                        <VisibilityOffIcon  className="text-red-600"/>
                      )}
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 mt-1 text-right">
                    {getCharacterCountText(value, 15)} {/* عرض عدد الأحرف */}
                  </div>
                </div>
              ))}
              <div className="flex justify-end">
                <IconButton onClick={() => handleSave("password")} color="success">
                  <SaveIcon />
                </IconButton>
              </div>
            </>
          ) : (
            <span className="text-gray-500">Password is hidden </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
