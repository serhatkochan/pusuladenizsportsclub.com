'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const reviews = [
  {
    name: "Ayşe Y.",
    type: "Veli",
    body: "Kızım 6 aydır Pusula'da yüzme eğitimi alıyor. Eğitmenlerin ilgisi ve profesyonelliği gerçekten takdire şayan.",
  },
  {
    name: "Mehmet K.",
    type: "Öğrenci",
    body: "3 ay gibi kısa bir sürede yüzmeyi öğrendim. Eğitmenlerimizin sabırlı yaklaşımı ve pozitif enerjisi sayesinde su korkumu yendim.",
  },
  {
    name: "Zeynep A.",
    type: "Veli",
    body: "İkiz çocuklarım için aradığımız güvenli ve profesyonel ortamı Pusula'da bulduk. Çocuklar her dersi iple çekiyor.",
  },
  {
    name: "Can B.",
    type: "Öğrenci",
    body: "Yetişkin grubu dersleri için tereddüt ederek başladım ama iyi ki de başlamışım. Hem spor yapıyor hem de keyifli vakit geçiriyorum.",
  },
  {
    name: "Deniz M.",
    type: "Veli",
    body: "Oğlumun özgüveni yüzme dersleriyle birlikte çok arttı. Eğitmenlerin yaklaşımı ve tesislerin kalitesi mükemmel.",
  },
  {
    name: "Selin T.",
    type: "Öğrenci",
    body: "Yarışmalara hazırlanma sürecinde Pusula'nın profesyonel kadrosu her zaman yanımda oldu. Başarılarımda büyük payları var.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  type,
  body,
}: {
  name: string;
  type: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[350px] cursor-pointer overflow-hidden rounded-xl border p-6 mx-2",
        "border-blue-100 bg-white",
        "transition-all duration-300 ease-in-out hover:border-blue-200",
      )}
    >
      <div className="flex flex-col">
        <figcaption className="text-base font-medium text-blue-600">
          {name}
        </figcaption>
        <p className="text-sm font-medium text-gray-400">{type}</p>
      </div>
      <blockquote className="mt-3 text-base text-gray-600 leading-relaxed">{body}</blockquote>
    </figure>
  );
};

function TestimonialsSection() {
  return (
    <section className="py-20 bg-blue-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">
            Bizimle Çalışanlar Ne Diyor?
          </h2>
          <div className="divider mx-auto mb-6" />
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
          <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1rem]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-50/50 via-blue-50/50 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-50/50 via-blue-50/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });



  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center ocean-gradient-deep">
        {/* Baloncuk animasyonları */}
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        {/* Arka plan ve overlay */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.85) contrast(1.1)'
          }}
        ></div>
        
        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/30 to-blue-700/20 z-0"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pusula Deniz Spor Kulübü
          </motion.h1>
          <motion.div 
            className="divider divider-light mx-auto mb-8"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 96 }}
            transition={{ duration: 1 }}
          />
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Profesyonel eğitmenler eşliğinde en iyi yüzme deneyimi
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link 
              href="/contact" 
              className="btn-primary shine transition-all hover:-translate-y-2 w-64 text-center"
            >
              Bize Ulaşın
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary transition-all hover:-translate-y-2 w-64 text-center"
            >
              Hizmetlerimiz
            </Link>
          </motion.div>

          {/* Keşfet Scroll Indicator - butonların altına taşındı */}
          <motion.div 
            className="mt-28 text-center cursor-pointer mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })}
          >
            <div className="flex flex-col items-center">
              <span className="text-white font-medium text-shadow-md text-sm mb-3">Keşfet</span>
              <motion.div 
                animate={{ 
                  y: [0, 10, 0], 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
                className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1 shadow-lg bg-blue-500/20 backdrop-blur-sm"
              >
                <motion.div 
                  animate={{ 
                    y: [0, 16, 0] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-3 bg-white rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative">
        {/* Su altı dekoratif öğeleri */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -top-20 left-1/4 w-64 h-64 rounded-full bg-blue-300 floating-slow"></div>
          <div className="absolute top-40 right-1/4 w-48 h-48 rounded-full bg-blue-400 floating"></div>
          <div className="absolute bottom-20 left-1/3 w-56 h-56 rounded-full bg-blue-200 floating-fast"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl font-bold mb-4 text-gray-800 wavy-underline"
            >
              Hakkımızda
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={aboutInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              2025 Ocak ayında kurucu Enes Şirin tarafından kurulan Pusula Deniz Spor Kulübü, 15 yıllık profesyonel yüzme deneyimini modern eğitim teknikleriyle birleştirerek her yaştan sporcuya dünya standartlarında eğitim sunmaktadır. Deneyimli eğitmen kadromuz ve kişiye özel antrenman programlarımızla öğrencilerimizin gelişimlerini en üst seviyeye taşıyoruz.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                title: "Profesyonel Eğitim",
                description: "Deneyimli eğitmenlerimiz ile her yaş grubu için özel programlar",
                icon: "🏊‍♂️"
              },
              {
                title: "Modern Tesisler",
                description: "Uluslararası standartlarda yüzme havuzları ve spor alanları",
                icon: "🏆"
              },
              {
                title: "Yarışma Hazırlık",
                description: "Ulusal ve uluslararası yarışmalara hazırlayan özel programlar",
                icon: "⏱️"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center card-hover"
              >
                <div className="text-5xl mb-4 floating">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        {/* Eski dalga animasyonu kaldırıldı */}
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-800 wavy-underline"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Hizmetlerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={servicesInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pusula Deniz Spor Kulübü&apos;nde sunduğumuz profesyonel hizmetler
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Özel Dersler */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="overflow-hidden rounded-t-xl img-overlay h-56">
                <Image
                  src="https://images.unsplash.com/photo-1726800753985-d9cdbaa97265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUMzJUI2emVsJTIweSVDMyVCQ3ptZSUyMGRlcnNpfGVufDB8fDB8fHwy"
                  alt="Özel Dersler"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Özel Dersler</h3>
                <p className="text-gray-700 flex-grow">Her yaş ve seviyeye uygun birebir özel derslerle kişiselleştirilmiş yüzme eğitimi ve teknik geliştirme.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Grup Dersleri */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-t-xl img-overlay h-56">
                <Image
                  src="https://images.unsplash.com/photo-1718953324897-8b05b1b7ff04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdydXAlMjB5JUMzJUJDem1lJTIwZGVyc2l8ZW58MHx8MHx8fDI%3D"
                  alt="Grup Dersleri"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Grup Dersleri</h3>
                <p className="text-gray-700 flex-grow">Yaş ve seviye gruplarına göre sosyal öğrenme ortamında eğlenceli ve motivasyonel grup eğitimleri.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            

            {/* Yaz Kampı */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="overflow-hidden rounded-t-xl img-overlay h-56">
          <Image
                  src="https://images.unsplash.com/photo-1606484589718-070f61cbd72d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eSVDMyVCQ3ptZSUyMHlheiUyMGthbXAlQzQlQjF8ZW58MHx8MHx8fDI%3D"
                  alt="Yaz Kampı"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Yaz Kampı</h3>
                <p className="text-gray-700 flex-grow">Her yaş grubuna yönelik yoğun yüzme eğitimi, su sporları ve eğlenceli aktivitelerle dolu yaz kampları.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Kondisyon ve Fitness */}
            <motion.div 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 card-hover flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="overflow-hidden rounded-t-xl img-overlay h-56">
          <Image
                  src="https://images.unsplash.com/photo-1571388072750-31a921b3d900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGtvbmRpc3lvbiUyMHRyYWluZXJ8ZW58MHwwfDB8fHwy"
                  alt="Kondisyon ve Fitness"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
                             <div className="p-6 flex flex-col flex-grow">
                 <h3 className="text-xl font-bold text-blue-600 mb-2">Kondisyon ve Fitness</h3>
                 <p className="text-gray-700 flex-grow">Yüzme performansını artıran kara antrenmanları, güç ve dayanıklılık geliştirme programları.</p>
                <div className="mt-4">
                  <Link 
                    href="/services" 
                    className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 ocean-gradient text-white relative overflow-hidden">
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-shadow-md">Hemen Başlayın</h2>
          <motion.div 
            className="divider divider-light mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow-sm">Profesyonel eğitmenlerimiz eşliğinde yüzme öğrenmek veya tekniklerinizi geliştirmek için hemen iletişime geçin.</p>
          <Link
            href="/contact"
            className="btn-primary shine transition-all hover:-translate-y-2"
          >
            Ücretsiz Deneme Dersi
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />


    </main>
  );
}
