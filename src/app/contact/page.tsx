'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Contact() {
  const contactRef = useInView({
    triggerOnce: true,
    threshold: 0.1
  }).ref;

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-36 min-h-[400px] ocean-gradient text-white">
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            İletişim
          </motion.h1>
          <motion.div 
            className="divider divider-light mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 100 }}
            transition={{ duration: 1 }}
          />
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-shadow-sm mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Sorularınız, kayıt işlemleri ve daha fazlası için bizimle iletişime geçin
          </motion.p>
        </div>
        
        {/* Dekoratif dalga şekli */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="section-transition-wave">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1440,48L1440,120L0,120Z">
            </path>
          </svg>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              ref={contactRef}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="bg-gradient-to-br from-white to-blue-50/30 relative overflow-hidden rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 h-auto min-h-[600px] backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full filter blur-3xl transform translate-x-32 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full filter blur-3xl transform -translate-x-32 translate-y-16"></div>
              
              <div className="relative z-10 p-12">
                <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                  İletişim Bilgilerimiz
                </motion.h2>
                <motion.div 
                  className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mb-10"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 80 }}
                  transition={{ duration: 0.8 }}
                />
                
                <motion.div variants={fadeIn} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start group min-h-[80px]">
                      <div className="mr-4 p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">Telefon</h3>
                        <a 
                          href="tel:+905419004191" 
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                        >
                          +90 541 900 41 91
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start group min-h-[80px]">
                      <div className="mr-4 p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">WhatsApp</h3>
                        <a 
                          href="https://wa.me/905419004191?text=Merhaba%2C%20Pusula%20Deniz%20Spor%20Kul%C3%BCb%C3%BC%27nde%20y%C3%BCzme%20e%C4%9Fitimi%20i%C3%A7in%20bilgi%20almak%20istiyorum.%20Bana%20yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
                        >
                          Mesaj Gönder
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="mr-4 p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">Eğitim Lokasyonlarımız</h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="font-medium text-blue-700">📍 Şekerpınar Lokasyonu</p>
                          <p className="text-gray-600 text-sm">Şekerpınar Perla Verde Spor Salonu, Çayırova/Kocaeli</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <p className="font-medium text-blue-700">🏊‍♂️ Gebze Lokasyonu</p>
                          <p className="text-gray-600 text-sm">913/1. Sk. No:22, Güzeller, 41400 Gebze/Kocaeli</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="mr-4 p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">Çalışma Saatleri</h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <p className="font-medium text-green-700">📅 Hafta İçi</p>
                          <p className="text-gray-600 text-sm">Akşam 18:00 - 20:00</p>
                        </div>
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <p className="font-medium text-orange-700">🏖️ Hafta Sonu</p>
                          <p className="text-gray-600 text-sm">Öğleden sonra: 14:00, 15:00, 16:00, 17:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group pt-4">
                    <div className="mr-4 p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">Sosyal Medya</h3>
                      <div className="flex space-x-4">
                      <a href="#" className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12"></path>
                        </svg>
                      </a>
                      <a href="#" className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/pusuladenizsporkulubu_/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-pink-50 hover:text-pink-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 hover:text-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                        </svg>
                      </a>
                    </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Maps */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Şekerpınar Lokasyonu Haritası */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-b border-blue-200">
                  <h3 className="text-lg font-semibold">📍 Şekerpınar Lokasyonu</h3>
                  <p className="text-blue-600 text-sm">Şekerpınar Perla Verde Spor Salonu, Çayırova/Kocaeli</p>
                </div>
                <div className="h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8234567890123!2d29.3695011!3d40.862192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad96b0897d253%3A0x87068c3da1c5b7b6!2sPerla%20Verde%20Park!5e0!3m2!1str!2str!4v1656325855121!5m2!1str!2str" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pusula Deniz Spor Kulübü - Şekerpınar Perla Verde Park Lokasyonu"
                  ></iframe>
                </div>
              </div>

              {/* Gebze Lokasyonu Haritası */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-b border-blue-200">
                  <h3 className="text-lg font-semibold">🏊‍♂️ Gebze Lokasyonu</h3>
                  <p className="text-blue-600 text-sm">913/1. Sk. No:22, Güzeller, 41400 Gebze/Kocaeli</p>
                </div>
                <div className="h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.123456789!2d29.434523!3d40.802362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac82d6e2c8b5b%3A0x87068c3da1c5b7b7!2s913%2F1.%20Sk.%20No%3A22%2C%20G%C3%BCzeller%2C%2041400%20Gebze%2FKocaeli!5e0!3m2!1str!2str!4v1656325855128!5m2!1str!2str"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pusula Deniz Spor Kulübü - Gebze Lokasyonu"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </main>
  );
} 