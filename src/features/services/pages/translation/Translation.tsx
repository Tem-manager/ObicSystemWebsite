import React, { useState } from "react";

// قاموس الترجمات
const translations = {
  en: {
    title: "Real-time Translation",
    description: "Enter text to translate.",
    support: "24/7 dedicated support",
    discounts: "Exclusive discounts and offers",
    events: "Priority access to major events",
    services: "Personalized services and customization",
    vipExperience: "Luxurious VIP experience"
  },
  ar: {
    title: "الترجمة في الوقت الفعلي",
    description: "أدخل النص لترجمته.",
    support: "دعم مخصص على مدار الساعة",
    discounts: "خصومات وعروض حصرية",
    events: "وصول أولوية إلى الفعاليات الكبرى",
    services: "خدمات مخصصة وتخصيص",
    vipExperience: "تجربة VIP فاخرة"
  },
  // أضف المزيد من اللغات هنا
};

const Translation: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  // دالة الترجمة
  const handleTranslate = () => {
    // هنا يمكن إضافة منطق للترجمة (على سبيل المثال تحويل النص المدخل إلى ترجمة استنادًا إلى القاموس)
    setTranslatedText(inputText);
  };

  // دالة تغيير اللغة
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    setTranslatedText(""); // إعادة تعيين النص المترجم عند تغيير اللغة
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">{translations[selectedLanguage].title}</h2>

      <div className="mb-4">
        <label htmlFor="language" className="block text-lg">
          Select Language:
        </label>
        <select
          id="language"
          className="w-full p-3 mt-2 border rounded-md"
          value={selectedLanguage}
          onChange={changeLanguage}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          {/* يمكنك إضافة المزيد من اللغات هنا */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="inputText" className="block text-lg">
          {translations[selectedLanguage].description}
        </label>
        <textarea
          id="inputText"
          className="w-full p-3 mt-2 border rounded-md"
          rows={5}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <button
        onClick={handleTranslate}
        className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md"
      >
        Translate
      </button>

      {translatedText && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">
            {translations[selectedLanguage].vipExperience}:
          </h3>
          <p className="mt-2 text-lg">{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translation;
