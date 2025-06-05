'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Yüzme temalı gradient arka plan */}
      <div className="ocean-gradient">
        {/* Su dalgası efekti */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-0 left-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              fill="rgba(255,255,255,0.1)" 
              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1440,48L1440,120L0,120Z"
            />
          </svg>
          <svg className="absolute top-4 left-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              fill="rgba(255,255,255,0.05)" 
              d="M0,48L80,32C160,16,320,16,480,26.7C640,37,800,59,960,64C1120,69,1280,59,1440,48L1440,120L0,120Z"
            />
          </svg>
        </div>

        {/* Yüzen baloncuklar */}
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
          {/* Ana İçerik */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Logo ve Açıklama */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm p-1">
                  <Image 
                    src="/images/logo.png" 
                    alt="Pusula Deniz Spor Kulübü Logo" 
                    width={48}
                    height={48}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">Pusula Deniz Spor Kulübü</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Kocaeli&apos;nin en deneyimli yüzme eğitimi merkezi. Profesyonel antrenörlerimizle her yaş ve seviyeye uygun eğitim programları sunuyoruz.
              </p>
              
              {/* Sosyal Medya */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Sosyal Medya
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="group">
                    <div className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/pusuladenizsporkulubu_/" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group">
                    <div className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12 S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group">
                    <div className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm group-hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hızlı Linkler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
                Hızlı Linkler
              </h4>
                             <ul className="space-y-3">
                 <li>
                   <Link href="/" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                     Ana Sayfa
                   </Link>
                 </li>
                 <li>
                   <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                     Hakkımızda
                   </Link>
                 </li>
                 <li>
                   <Link href="/services" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                     Hizmetler
                   </Link>
                 </li>
                 <li>
                   <Link href="/team" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                     Eğitmenler
                   </Link>
                 </li>
                 <li>
                   <Link href="/faq" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                     SSS
                   </Link>
                 </li>
                 <li>
                   <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                     <span className="w-2 h-2 bg-white/60 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                     İletişim
                   </Link>
                 </li>
               </ul>
            </motion.div>

            {/* İletişim Bilgileri */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                İletişim
              </h4>
              <div className="space-y-4">
                <a href="tel:+905419004191" className="flex items-center text-white/80 hover:text-white transition-colors duration-300 group">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-sm">+90 541 900 41 91</p>
                  </div>
                </a>
                
                <div className="flex items-center text-white/80">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                                     <div>
                     <p className="font-medium">Lokasyon</p>
                     <p className="text-sm">Şekerpınar & Gebze, Kocaeli</p>
                   </div>
                </div>

                <a 
                  href="https://wa.me/905419004191?text=Merhaba%2C%20Pusula%20Deniz%20Spor%20Kul%C3%BCb%C3%BC%27nde%20y%C3%BCzme%20e%C4%9Fitimi%20i%C3%A7in%20bilgi%20almak%20istiyorum.%20Bana%20yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  WhatsApp ile İletişim
                </a>
              </div>
            </motion.div>
          </div>

          {/* Alt Çizgi ve Telif Hakkı */}
          <motion.div 
            className="border-t border-white/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-white/80">
              <p className="text-sm mb-4 md:mb-0">
                © 2025 Pusula Deniz Spor Kulübü. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center text-sm">
                <span className="mr-2">Profesyonel yüzme eğitimi ile</span>
                <svg className="w-4 h-4 text-red-400 mx-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="ml-2">tasarlandı</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 