'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function About() {
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [facilityRef, facilityInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
            Hakkımızda
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
            Profesyonel ekibimiz ve modern tesislerimizle yüzme tutkunlarına hizmet veriyoruz
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

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-blue-600 wavy-underline">Hikayemiz</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pusula Deniz Spor Kulübü, 2025 Ocak ayında deneyimli yüzücü ve antrenör Enes Şirin tarafından kurulmuştur. Kurucu Enes Şirin, 2010 yılından bu yana profesyonel yüzme dünyasında sayısız başarıya imza atmış, uluslararası açık su ve havuz yarışmalarında Türkiye'yi başarıyla temsil etmiştir.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                İstanbul Boğazı 6.5K yarışında birincilik, Aquamasters 10K'da birincilik ve Megisti Kaş 7.2K yarışında birincilik gibi prestijli başarılara imza atan Enes Şirin, Boğaz geçişleri ve uluslararası açık su maratonlarındaki deneyimini 2. Kademe Antrenörlük lisansı ile taçlandırmıştır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                İstanbul ve Gebze bölgelerinde verdiği özel dersler ve grup eğitimleriyle yüzlerce sporcunun gelişimine katkıda bulunan Enes Şirin, tutkusunu bir adım öteye taşıyarak Pusula Deniz Spor Kulübü'nü kurmuştur. Modern eğitim teknikleri ve kişiye özel antrenman programlarıyla, her yaştan sporcuya dünya standartlarında eğitim vermektedir.
              </p>
              
              <div className="mt-10">
                <motion.div
                  className="grid grid-cols-3 gap-4"
                  initial="hidden"
                  animate={storyInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn} className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all shadow-sm card-hover">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all shadow-sm card-hover">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">100+</div>
                    <div className="text-sm text-gray-600">Mutlu Öğrenci</div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn} className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all shadow-sm card-hover">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">4</div>
                    <div className="text-sm text-gray-600">Uzman Eğitmen</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn} 
              className="order-first lg:order-last h-80 md:h-96 rounded-xl overflow-hidden shadow-xl img-overlay shine"
            >
              <Image 
                src="https://images.unsplash.com/photo-1606438472743-ba3403ac13f1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Pusula Deniz Spor Kulübü" 
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Dekoratif arka plan deseni */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-300 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400 transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Değerlerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={valuesInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Kulübümüzü başarıya taşıyan temel ilkelerimiz
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Kalite",
                description: "En yüksek standartlarda eğitim ve tesisler sunarak, öğrencilerimizin potansiyellerini maksimum seviyede kullanmalarına olanak tanıyoruz.",
                icon: "✨"
              },
              {
                title: "Güvenlik",
                description: "Öğrencilerimizin fiziksel ve duygusal güvenliği bizim için her zaman önceliklidir. Tüm eğitmenlerimiz ilk yardım ve güvenlik konusunda düzenli eğitim alır.",
                icon: "🛡️"
              },
              {
                title: "Kişisel Gelişim",
                description: "Sadece yüzme becerileri değil, aynı zamanda özgüven, disiplin ve takım ruhu gibi değerleri de öğrencilerimize kazandırmaya çalışıyoruz.",
                icon: "🌱"
              },
              {
                title: "Kapsayıcılık",
                description: "Her yaştan ve seviyeden öğrenciye kapımız açıktır. Herkesin yüzme öğrenme ve geliştirme hakkı olduğuna inanıyoruz.",
                icon: "🤝"
              },
              {
                title: "Yenilikçilik",
                description: "Eğitim metodlarımızı ve tesislerimizi sürekli güncelleyerek, en modern ve etkili yüzme eğitimini sunuyoruz.",
                icon: "💡"
              },
              {
                title: "Tutku",
                description: "Yüzmeye olan tutkumuz, kulübümüzün her köşesine yansır. Bu tutkuyu öğrencilerimize de aktarmak için çalışıyoruz.",
                icon: "❤️"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 card-hover"
              >
                <div className="text-4xl mb-4 text-blue-500 floating">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section ref={facilityRef} className="py-20 px-4 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={facilityInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Tesislerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={facilityInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Lüks ve tam donanımlı premium tesislerimiz
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={facilityInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Olimpik Yüzme Havuzu",
                description: "50 metre uzunluğunda, 8 kulvarlı, uluslararası standartlarda olimpik havuzumuz profesyonel yarışma eğitimleri için tasarlanmıştır.",
                image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Yarı Olimpik Yüzme Havuzu",
                description: "25 metre uzunluğunda, 6 kulvarlı, ısıtmalı kapalı havuzumuz günlük antrenmanlar ve eğitimler için idealdir.",
                image: "https://images.unsplash.com/photo-1721097777541-eb4bdfe6719d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Açık Havuz",
                description: "Yaz aylarında kullanıma açılan, doğal ışık alan açık havuzumuz rekreasyonel yüzme ve dinlence için mükemmeldir.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Çocuk Havuzu",
                description: "Derinliği ayarlanabilir, ısıtmalı çocuk havuzumuz, minik öğrencilerimizin güvenli bir ortamda yüzme öğrenmesi için tasarlanmıştır.",
                image: "https://images.unsplash.com/photo-1721571388957-0a65fcd4371d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Fitness Salonu",
                description: "Yüzücülerimizin kara antrenmanı yapabilmeleri için modern ekipmanlarla donatılmış, geniş fitness salonumuz bulunmaktadır.",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                title: "Sauna & Wellness",
                description: "Antrenman sonrası kas gevşetme ve dinlenme için Finlandiya tipi sauna, buhar odası ve wellness alanımız hizmetinizde.",
                image: "https://images.unsplash.com/photo-1605614307370-f7a1e58ae751?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Premium Soyunma Odaları",
                description: "Kadın ve erkek sporcularımız için ayrı, duş, sauna ve kişisel dolap imkanı sunan lüks soyunma odalarımız mevcuttur.",
                image: "https://images.unsplash.com/photo-1676012088690-d2197f76db9b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Spor Kafeterya & Dinlenme",
                description: "Öğrencilerimizin ve velilerimizin dinlenebileceği, sağlıklı spor besini ve atıştırmalıklar bulabileceği modern kafeteryamız.",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-500 card-hover"
              >
                <div className="h-56 overflow-hidden img-overlay">
                  <Image 
                    src={facility.image} 
                    alt={facility.title} 
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 