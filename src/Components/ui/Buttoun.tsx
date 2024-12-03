
import classNames from "classnames"; // مكتبة لجعل إدارة الأصناف أكثر تنظيماً

const Button = ({
  children, // النص أو المحتوى داخل الزر
  type = "button", // نوع الزر الافتراضي
  variant = "primary", // النمط: primary, secondary, danger
  size = "md", // الحجم: sm, md, lg
  icon, // أيقونة يتم تمريرها كعنصر React
  disabled = false, // هل الزر معطل؟
  className = "", // أنماط إضافية
  onClick, // الحدث عند النقر
}) => {
  // الأنماط الأساسية
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2";

  // الأنماط الخاصة بالأنواع
  const variantStyles = {
    primary: "bg-[#192745] text-white  ",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  // الأنماط الخاصة بالأحجام
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className // للسماح بإضافة أنماط مخصصة
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {/* أيقونة (إذا وُجدت) */}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;


// امثلة للاستدعاء والتخصضص
    // <div className="p-6 space-y-4">
    //   {/* زر أساسي */}
    //   <Button onClick={() => alert("Button Clicked!")}>زر رئيسي</Button>

    //   {/* زر ثانوي */}
    //   <Button variant="secondary">زر ثانوي</Button>

    //   {/* زر خطر */}
    //   <Button variant="danger" onClick={() => alert("Danger Button!")}>
    //     زر خطر
    //   </Button>

    //   {/* زر صغير */}
    //   <Button size="sm">زر صغير</Button>

    //   {/* زر كبير */}
    //   <Button size="lg">زر كبير</Button>

    //   {/* زر مع أيقونة */}
    //   <Button icon={<FaHeart />} variant="primary">
    //     أحب
    //   </Button>

    //   {/* زر معطل */}
    //   <Button disabled>زر معطل</Button>

    //   {/* زر بخليط من الأنماط */}
    //   <Button variant="primary" size="lg" icon={<FaTrash />} className="shadow-lg">
    //     حذف
    //   </Button>
    // </div>
 
