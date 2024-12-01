import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import 'react-phone-number-input/style.css'; // Make sure to include the style for the library
import PhoneInput from "react-phone-number-input/input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // إضافة أيقونات لظهور وإخفاء كلمة المرور


const AccountInfo: React.FC = () => {
  const [accountInfoIsEditing, setAccountInfoIsEditing] = useState(false);
  const [phoneInfoIsEditing, setPhoneInfoIsEditing] = useState(false);
  const [passwordIsEditing, setPasswordIsEditing] = useState(false);
  const [emailIsEditing, setEmailIsEditing] = useState(false); // إضافة حالة لتعديل الايميل

 
  // إضافة حالة جديدة للتحكم في ظهور كلمة المرور
  const [passwordVisibility, setPasswordVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });


  const handlePasswordVisibilityToggle = (field: string) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };


  const [accountInfo, setAccountInfo] = useState([
    { field: "accountName", label: "Account Name", value: "Ahmed Account", maxLength: 50 },
    { field: "username", label: "Username", value: "Ahmed Mohamed", maxLength: 20 },
  ]);

  const [phoneInfo, setPhoneInfo] = useState([
    { field: "phone", label: "Phone Num", value: "00967777777777", country: "YE", maxLength: 9 }, // Default country Yemen and length 9
  ]);

  const [emailInfo, setEmailInfo] = useState([
    { field: "email", label: "Email", value: "ahmed@example.com"  ,type: 'email'}, // قسم الايميل
  ]);

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEdit = (section: string) => {
    if (section === "account") setAccountInfoIsEditing(true);
    if (section === "phone") setPhoneInfoIsEditing(true);
    if (section === "password") setPasswordIsEditing(true);
    if (section === "email") setEmailIsEditing(true); // إضافة التعديل لقسم الايميل
  };

  const handleSave = (section: string) => {
    if (section === "account") setAccountInfoIsEditing(false);
    if (section === "phone") setPhoneInfoIsEditing(false);
    if (section === "password") setPasswordIsEditing(false);
    if (section === "email") setEmailIsEditing(false); // إضافة الحفظ لقسم الايميل
  };

  const handleChangeAccount = (field: string, newValue: string, maxLength: number) => {
    if (newValue.length <= maxLength) {
      setAccountInfo((prev) =>
        prev.map((item) =>
          item.field === field ? { ...item, value: newValue } : item
        )
      );
    }
  };

  const getCharacterCountText = (value: string, maxLength: number) => {
    return `${value.length}/${maxLength}`;
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
    setPasswordInfo((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  return (
    <div className="lg:w-1/3 w-full bg-white shadow-md rounded-lg p-4">
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
          {accountInfo.map(({ field, label, value, maxLength }) => (
            <div key={field}>
              <p className={`${accountInfoIsEditing ? "text-black" : "text-gray-500"}`}>
                {accountInfoIsEditing ? (
                  <div>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">{label}</label>
                    <input
                      id={field}
                      type="text"
                      value={value}
                      onChange={(e) => handleChangeAccount(field, e.target.value, maxLength)}
                      className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <div className="text-sm text-gray-500 mt-1">
                      {getCharacterCountText(value, maxLength)}
                    </div>
                  </div>
                ) : (
                  <span className="font-semibold">{label}: {value}</span>
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
                    <input
                      id={field}
                      type="text"
                      value={value}
                      onChange={(e) => handleChangeEmail(field, e.target.value)}
                      className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
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
          {phoneInfo.map(({ field, label, value, country, maxLength }) => (
            <div key={field}>
              <p className={`${phoneInfoIsEditing ? "text-black" : "text-gray-500"}`}>
                {phoneInfoIsEditing ? (
                  <div className="flex items-center space-x-2">
                    {/* Country Selector with PhoneInput */}
                    <PhoneInput
                      id={field}
                      value={value}
                      onChange={(phone) => handleChangePhone(field, phone || '')}
                      className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      default={country} // Set default country code
                    />
                  </div>
                ) : (
                  <span className="font-semibold">{label}: {value}</span>
                )}
              </p>
              <div className="text-sm text-gray-500 mt-1">
                {getCharacterCountText(value, maxLength)}
              </div>
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

      <div className="mt-6">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Password</h3>
          <IconButton onClick={() => handleEdit("password")} color="primary" className="ml-2">
            <EditIcon />
          </IconButton>
        </div>
        <div className="bg-gray-100 rounded-md p-4 space-y-4">
          {passwordIsEditing ? (
            <div>
              <p className="text-gray-600">
                Current Password:{" "}
                <div className="relative">
                  <input
                    type={passwordVisibility.currentPassword ? "text" : "password"}
                    value={passwordInfo.currentPassword}
                    onChange={(e) => handleChangePassword("currentPassword", e.target.value)}
                    className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                 <IconButton
  onClick={() => handlePasswordVisibilityToggle("currentPassword")}
  className="absolute right-3 top-1/2 transform -translate-y-1/2"
  size="small"
>
  {passwordVisibility.currentPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
</IconButton>

                </div>
              </p>
              <p className="text-gray-600">
  New Password:{" "}
  <div className="relative">
    <input
      type={passwordVisibility.newPassword ? "text" : "password"}
      value={passwordInfo.newPassword}
      onChange={(e) => handleChangePassword("newPassword", e.target.value)}
      className="w-full px-4 pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
    />
    <IconButton
      onClick={() => handlePasswordVisibilityToggle("newPassword")}
      className="absolute left-2 top-1/2 transform -translate-y-1/2"
      size="small"
    >
      {passwordVisibility.newPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </IconButton>
  </div>
</p>

              <p className="text-gray-600">
                Confirm New Password:{" "}
                <div className="relative">
                  <input
                    type={passwordVisibility.confirmPassword ? "text" : "password"}
                    value={passwordInfo.confirmPassword}
                    onChange={(e) => handleChangePassword("confirmPassword", e.target.value)}
                    className="w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <IconButton
                    onClick={() => handlePasswordVisibilityToggle("confirmPassword")}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    size="small"
                  >
                    {passwordVisibility.confirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </div>
              </p>
            </div>
          ) : (
            <p className="text-gray-500">Change Password</p>
          )}

          {passwordIsEditing && (
            <div className="flex justify-end">
              <IconButton onClick={() => handleSave("password")} color="success">
                <SaveIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
