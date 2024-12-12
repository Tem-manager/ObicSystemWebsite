// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // لاحظ استخدام /modules
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Home, Business, School, ShoppingCart, LocalHospital, Settings, Storefront, Translate, StarOutline, CampaignOutlined, AttachMoneyOutlined, WalletOutlined, FavoriteBorderOutlined, StoreOutlined, CastForEducationOutlined, CarRentalOutlined, WorkspacePremiumOutlined, SmartToyOutlined } from '@mui/icons-material'; // استيراد الأيقونات

// const ServicesHome: React.FC = () => {
//   return (
//     <div className="max-w-screen-lg mx-auto py-8">
//       {/* <h2 className="text-2xl font-bold text-center mb-6">خدماتنا</h2> */}

//       {/* سلايدر */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]} // إضافة Autoplay
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }} // تمكين Autoplay
//         loop
//         className="h-64"
//       >
//         <SwiperSlide className="flex justify-center items-center bg-blue-200 text-white rounded-lg shadow-lg">
//           <p>خدمة 1</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center items-center bg-green-200 text-white rounded-lg shadow-lg">
//           <p>خدمة 2</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center items-center bg-red-200 text-white rounded-lg shadow-lg">
//           <p>خدمة 3</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center items-center bg-red-300 text-white rounded-lg shadow-lg">
//           <p>خدمة 4</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center items-center bg-red-400 text-white rounded-lg shadow-lg">
//           <p>خدمة 5</p>
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center items-center bg-red-500 text-white rounded-lg shadow-lg">
//           <p>خدمة 6</p>
//         </SwiperSlide>
//       </Swiper>

//       {/* جزء الأيقونات مع الأسماء */}
//       <div className="mt-12 text-center">
//         <h3 className="text-xl font-bold mb-6"> الخدمات</h3>
//         <div className="grid grid-cols-6 gap-4">
//           {/* استخدام أيقونات من Material UI */}
//           <div className="flex flex-col justify-center items-center">
//             <Storefront  className="mb-2" />
//             <p>E-Market</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <Translate sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Translation</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <StarOutline sx={{ fontSize: 40 }} className="mb-2" />
//             <p>VIP</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <CampaignOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Publicites</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <SmartToyOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>OBIC AI</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <WorkspacePremiumOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Guarantees</p>
//           </div>

//           {/* الصف الثاني من الأيقونات */}
//           <div className="flex flex-col justify-center items-center">
//             <AttachMoneyOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Loans</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <WalletOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Wallet</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <CarRentalOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Car rental</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <FavoriteBorderOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Donations</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <StoreOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>Haraj</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <CastForEducationOutlined sx={{ fontSize: 40 }} className="mb-2" />
//             <p>E-learning</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesHome;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // لاحظ استخدام /modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { 
  Storefront, Translate, StarOutline, CampaignOutlined, SmartToyOutlined, WorkspacePremiumOutlined, 
  AttachMoneyOutlined, WalletOutlined, CarRentalOutlined, FavoriteBorderOutlined, StoreOutlined, 
  CastForEducationOutlined 
} from '@mui/icons-material'; // استيراد الأيقونات
import { Link } from 'react-router-dom'; // استيراد Link للتنقل بين الصفحات
import StatusBadge from '../../../../Components/ui/StatusBadge';

const ServicesHome: React.FC = () => {
  // مصفوفة الأيقونات والأسماء مع إضافة المسارات
  const services = [
    { icon: <Storefront />, name: 'E-Market', route: '' },
    { icon: <Translate />, name: 'Translation', route: '/services/translation' },
    { icon: <StarOutline />, name: 'VIP', route: '/services/vip' },
    { icon: <CampaignOutlined />, name: 'Publicites', route: '' },
    { icon: <SmartToyOutlined />, name: 'OBIC AI', route: '/services/obic-ai' },
    { icon: <WorkspacePremiumOutlined />, name: 'Guarantees', route: '' },
    { icon: <AttachMoneyOutlined />, name: 'Loans', route: '' },
    { icon: <WalletOutlined />, name: 'Wallet', route: '' },
    { icon: <CarRentalOutlined />, name: 'Car rental', route: '' },
    { icon: <FavoriteBorderOutlined />, name: 'Donations', route: '' },
    { icon: <StoreOutlined />, name: 'Haraj', route: '' },
    { icon: <CastForEducationOutlined />, name: 'E-learning', route: '' }
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-8">
      {/* سلايدر */}
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={10}
  slidesPerView={3} // للشاشات الصغيرة
  navigation
  pagination={{
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className} w-4 h-4 bg-gray-300 mx-1 transition-transform ease-in-out"></span>`,
  }}
  autoplay={{ delay: 3000 }}
  loop
  className="h-60"
  breakpoints={{
    640: { slidesPerView: 1 },  // لشاشات صغيرة
    768: { slidesPerView: 3 },  // لشاشات المتوسطة
    1024: { slidesPerView: 4 }, // لشاشات الكبيرة
  }}
>
  <SwiperSlide className="flex justify-center items-center bg-blue-200 text-white rounded-lg shadow-lg">
    <p>خدمة 1</p>
  </SwiperSlide>
  <SwiperSlide className="flex justify-center items-center bg-green-200 text-white rounded-lg shadow-lg">
    <p>خدمة 2</p>
  </SwiperSlide>
  <SwiperSlide className="flex justify-center items-center bg-red-200 text-white rounded-lg shadow-lg">
    <p>خدمة 3</p>
  </SwiperSlide>
  <SwiperSlide className="flex justify-center items-center bg-red-300 text-white rounded-lg shadow-lg">
    <p>خدمة 4</p>
  </SwiperSlide>
  <SwiperSlide className="flex justify-center items-center bg-red-400 text-white rounded-lg shadow-lg">
    <p>خدمة 5</p>
  </SwiperSlide>
  <SwiperSlide className="flex justify-center items-center bg-red-500 text-white rounded-lg shadow-lg">
    <p>خدمة 6</p>
  </SwiperSlide>
</Swiper>

      {/* جزء الأيقونات مع الأسماء */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-6">الخدمات</h3>
        <div className="grid grid-cols-6 gap-4">
          {/* استخدام map لتكرار الأيقونات مع الروابط */}
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <Link to={service.route}>  {/* استخدام Link للتنقل */}
                <StatusBadge
                  content={service.icon}
                  size={12} // يمكن تعديل الحجم هنا
                  color="bg-gray-200" // يمكنك تغيير اللون حسب الحاجة
                  textColor="text-black"
                />
              </Link>
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
