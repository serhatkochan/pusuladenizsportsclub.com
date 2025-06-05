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

export default function Team() {
  const [instructorsRef, instructorsInView] = useInView({
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
            Ekibimiz
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
            Deneyimli eğitmenlerimizle tanışın
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

      {/* Instructors Section */}
      <section ref={instructorsRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={instructorsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4 text-blue-600 wavy-underline">
              Eğitmenlerimiz
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={instructorsInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-700 max-w-3xl mx-auto">
              Deneyimli ve lisanslı eğitmenlerimizle tanışın
            </motion.p>
          </motion.div>

          {/* Baş Antrenör Bölümü */}
          <motion.div
            initial="hidden"
            animate={instructorsInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-[500px] relative overflow-hidden group">
                <Image 
                  src="/images/enes-1.jpg" 
                  alt="Enes Şirin" 
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white pointer-events-none">
                  <div className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4">
                    Baş Antrenör & Kulüp Kurucusu
                  </div>
                  <h3 className="text-4xl font-bold mb-4 text-shadow-lg">Enes Şirin</h3>
                </div>
              </div>
              <div className="p-8 bg-white">
                <div className="space-y-4 text-gray-600 mb-6">
                  <p>2010 yılından bu yana profesyonel yüzme dünyasında sayısız başarıya imza atan Enes Şirin, uluslararası açık su ve havuz yarışmalarında Türkiye'yi başarıyla temsil etmiştir. İstanbul Boğazı 6.5K yarışında birincilik, Aquamasters 10K'da birincilik ve Megisti Kaş 7.2K yarışında birincilik gibi prestijli başarılara imza atmıştır. Boğaz geçişleri ve uluslararası açık su maratonlarındaki deneyimini 2. Kademe Antrenörlük lisansı ile taçlandırarak, binlerce öğrencinin hayatına dokunmuştur. İstanbul ve Gebze bölgelerinde verdiği özel dersler ve grup eğitimleriyle, yüzlerce sporcunun gelişimine katkıda bulunmuştur. 2025 Ocak ayında tutkusunu bir adım öteye taşıyarak Pusula Deniz Spor Kulübü'nü kurmuş ve profesyonel spor eğitimi vizyonunu kendi kulübü çatısı altında sürdürmeye başlamıştır. Modern eğitim teknikleri ve kişiye özel antrenman programlarıyla, her yaştan sporcuya dünya standartlarında eğitim vermektedir.</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-3">Uzmanlık Alanları:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      2. Kademe Antrenörlük
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      Kulüp Yönetimi
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      Açık Su Yüzme
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      Profesyonel Eğitim
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Diğer Eğitmenler Başlığı */}
          <motion.div
            initial="hidden"
            animate={instructorsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16 mt-24"
          >
            <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4 text-blue-600">
              Eğitmen Kadromuz
            </motion.h3>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={instructorsInView ? { opacity: 1, width: 60 } : {}}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          {/* Diğer Eğitmenler Grid */}
          <motion.div
            initial="hidden"
            animate={instructorsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "İdil Melis Pehlivan",
                title: "Yüzme Eğitmeni & Cankurtaran Eğitmeni",
                bio: "2015 yılından bu yana yüzme sporuna tutkuyla bağlı olan İdil, açık su yarışmalarında önemli başarılara imza atmıştır. Aquamasters 10K yarışında birincilik, Fethiye 6K'da birincilik, Zonguldak Ereğli 3K'da birincilik ve Balıkesir 3K'da birincilik gibi prestijli derecelere sahiptir. Çeşitli organizasyonlarda defalarca kürsüye çıkarak başarılarını taçlandırmıştır. Cankurtaranlık belgesi ile hem yüzme eğitmenliği hem de güvenlik eğitimi vermektedir. Şu an antrenörlük kademesini yükseltmeye hazırlanarak, profesyonel gelişimine devam etmektedir.",
                image: "/images/idil-1.jpg",
                specialties: ["Yüzme Eğitmenliği", "Cankurtaranlık Eğitimi", "Açık Su Yüzme", "Güvenlik Eğitimi"]
              },
              {
                name: "Burak Öndüç",
                title: "Yüzme Eğitmeni & Performans Koçu",
                bio: "2016 yılından bu yana yüzme sporunda aktif olarak yer alan Burak, açık su yarışmalarında etkileyici bir başarı geçmişine sahiptir. Bodrum yarışmalarında birincilik ve üçüncülük, Antalya'da ikincilik ve üçüncülük, Marmaris'te birincilik ve ikincilik, Ereğli'de ikincilik ve Gölcük'te birincilik ve ikincilik dereceleri elde etmiştir. Yarışmalarda elde ettiği kürsü deneyimlerini, şimdi Pusula Deniz Spor Kulübü'nde genç sporculara aktarmaktadır. Özel ve grup dersleri vererek, sporcuların teknik gelişimine ve performans artışına odaklanmaktadır.",
                image: "/images/burak-onduc-1.jpg",
                specialties: ["Yüzme Eğitmenliği", "Performans Koçluğu", "Açık Su Yüzme", "Teknik Gelişim"]
              },
              {
                name: "Burak Kırman",
                title: "Yüzme Eğitmeni & Yarışma Koçu",
                bio: "2011 yılında başladığı yüzme kariyerinde ulusal çapta önemli başarılara imza atmıştır. 7 yaşında 50 metre sabit ve 50 metre sırtta İstanbul birinciliği, Ankara'da 100 metrede rekor kırma başarısı ve 8 yaşında Manisa üçüncülüğü elde etmiştir. 14 yaşında Tekirdağ birinciliği kazanmış, Gaziantep'te düzenlenen Türkiye şampiyonasında 1500 metrede Türkiye 8.'liği ve 800 metrede Türkiye 11.'liği gibi önemli dereceler elde etmiştir. 2022'den bu yana açık su yarışmalarında aktif olarak yarışmakta ve 2025'te aldığı Cankurtaranlık belgesi ile genç sporculara rehberlik etmektedir.",
                image: "/images/burak-kirman-1.jpg",
                specialties: ["Yüzme Eğitmenliği", "Yarışma Koçluğu", "Açık Su Yüzme", "Performans Gelişimi"]
              }
            ].map((instructor, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-72 overflow-hidden relative group">
                  <Image 
                    src={instructor.image} 
                    alt={instructor.name} 
                    width={500}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-90 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white pointer-events-none">
                    <h3 className="text-xl font-bold mb-1 text-shadow-sm">{instructor.name}</h3>
                    <p className="text-blue-200">{instructor.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{instructor.bio}</p>
                  <div>
                    <h4 className="text-sm text-gray-500 mb-2">Uzmanlık Alanları:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </main>
  );
} 