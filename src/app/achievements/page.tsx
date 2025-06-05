'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { SparklesText } from "@/components/magicui/sparkles-text";

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



export default function AchievementsPage() {
  const { ref: medalssRef, inView: medalsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievementsRef = useInView({
    triggerOnce: true,
    threshold: 0.1
  }).ref;

  const enesAchievements = [
    {
      title: "İstanbul Boğazı 6.5K",
      description: "Birincilik",
      image: "/images/enes-istanbul-bogazi.jpg",
      year: "2023"
    },
    {
      title: "Aquamasters 10K",
      description: "Birincilik",
      image: "/images/enes-10k.jpg",
      year: "2023"
    },
    {
      title: "Megisti Kaş 7.2K",
      description: "Birincilik",
      image: "/images/enes-megisti-kas.jpg",
      year: "2023"
    }
  ];

  const idilAchievements = [
    {
      title: "Balıkesir 3K",
      description: "Üçüncülük",
      image: "/images/idil-balikesir.jpg",
      year: "2023"
    },
    {
      title: "Fethiye 6K",
      description: "Birincilik",
      image: "/images/idil-fethiye-6k.jpg",
      year: "2023"
    },
    {
      title: "Zonguldak Ereğli 3K",
      description: "Birincilik",
      image: "/images/idil-zonguldak-3k.jpg",
      year: "2023"
    }
  ];

  const burakAchievements = [
    {
      title: "Bodrum Açık Su Yarışı",
      description: "Birincilik",
      image: "/images/burak-onduc-bodrum.jpg",
      year: "2023"
    },
    {
      title: "Antalya Açık Su Yarışı",
      description: "İkincilik",
      image: "/images/burak-onduc-antalya.jpg",
      year: "2023"
    },
    {
      title: "Antalya Açık Su Yarışı",
      description: "Üçüncülük",
      image: "/images/burak-onduc-antalya-2.jpg",
      year: "2023"
    },
    {
      title: "Marmaris Açık Su Yarışı",
      description: "Birincilik",
      image: "/images/burak-onduc-marmaris.jpg",
      year: "2023"
    }
  ];

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
            Başarılarımız
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
            Eğitmenlerimizin ulusal ve uluslararası yarışmalardaki başarıları
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
      
      {/* Madalya Koleksiyonu */}
      <section ref={medalssRef} className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate={medalsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className=" font-bold mb-4 text-blue-700">
              <SparklesText className="text-5xl">Madalya Koleksiyonumuz</SparklesText>
            </motion.h2>
            <motion.div 
              className="divider mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={medalsInView ? { opacity: 1, width: 80 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p variants={fadeIn} className="text-xl text-gray-800 max-w-3xl mx-auto">
              Sporcularımızın yıllar içinde kazandığı başarılar
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🥇</div>
              <NumberTicker
                value={12}
                className="text-3xl font-bold text-amber-500"
              />
              <div className="text-gray-600">Altın Madalya</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🥈</div>
              <NumberTicker
                value={18}
                className="text-3xl font-bold text-gray-400"
              />
              <div className="text-gray-600">Gümüş Madalya</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🥉</div>
              <NumberTicker
                value={24}
                className="text-3xl font-bold text-amber-700"
              />
              <div className="text-gray-600">Bronz Madalya</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 floating">🏆</div>
              <NumberTicker
                value={7}
                className="text-3xl font-bold text-blue-600"
              />
              <div className="text-gray-600">Kupa</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          
          {/* Enes Şirin Başarıları */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Enes Şirin Başarıları</h2>
              <div className="divider mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Kurucu ve Baş Antrenörümüzün ulusal ve uluslararası yarışmalardaki başarıları
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {enesAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden relative group">
                    <Image 
                      src={achievement.image} 
                      alt={achievement.title} 
                      width={500}
                      height={400}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        achievement.title === 'Megisti Kaş 7.2K' ? 'object-top' : 
                        achievement.title === 'İstanbul Boğazı 6.5K' ? 'object-[center_75%]' : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-blue-200 font-semibold">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* İdil Melis Pehlivan Başarıları */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">İdil Melis Pehlivan Başarıları</h2>
              <div className="divider mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Uzman Eğitmenimizin açık su yarışmalarındaki başarıları
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {idilAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden relative group">
                    <Image 
                      src={achievement.image} 
                      alt={achievement.title} 
                      width={500}
                      height={400}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        achievement.title === 'Fethiye 6K' ? 'object-[center_30%]' : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-blue-200 font-semibold">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Burak Öndüç Başarıları */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Burak Öndüç Başarıları</h2>
              <div className="divider mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Uzman Eğitmenimizin açık su yarışmalarındaki başarıları
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {burakAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden relative group">
                    <Image 
                      src={achievement.image} 
                      alt={achievement.title} 
                      width={500}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                      <p className="text-blue-200 font-semibold">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>
      

      

    </main>
  );
} 