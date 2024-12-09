import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'], // تضمين مكتبة Swiper في التحسينات
  },
   server: {
    host: '0.0.0.0', // هذا يتيح الوصول إلى التطبيق عبر الشبكة المحلية
    port: 3000,       // يمكنك تغيير المنفذ إذا لزم الأمر
    open: true,       // يفتح المتصفح تلقائيًا عند بدء التشغيل
  },
})
