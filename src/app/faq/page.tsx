'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const faqCategories = [
  {
    title: "Genel Sorular",
    items: [
      {
        question: "Pusula Deniz Spor Kulübü nerede bulunuyor?",
        answer: "Kulübümüz Kocaeli'nde iki farklı lokasyonda hizmet vermektedir: Şekerpınar Perla Verde Spor Salonu ve Gebze Kapalı Olimpik Yüzme Havuzu. Her iki lokasyonumuz da modern tesisler ve profesyonel eğitim imkanları sunmaktadır."
      },
      {
        question: "Hangi yaş gruplarına hizmet veriyorsunuz?",
        answer: "Kulübümüz, her yaş grubuna uygun programlar sunmaktadır. Çocuklar, gençler ve yetişkinler için özel olarak tasarlanmış derslerimiz bulunmaktadır. Yaş ve seviyeye göre kişiselleştirilmiş eğitim programları hazırlıyoruz."
      },
      {
        question: "Tesislerinizde ne tür imkanlar bulunuyor?",
        answer: "Tesislerimizde olimpik yüzme havuzu (50m, 8 kulvar), yarı olimpik yüzme havuzu (25m, 6 kulvar), açık havuz (yaz sezonu), çocuk havuzu, fitness & kara antrenman salonu, premium soyunma odaları, sauna & wellness (Finlandiya tipi sauna, buhar odası) ve spor kafeterya & dinlenme alanları bulunmaktadır."
      },
      {
        question: "Kulübünüz ne zaman kuruldu?",
        answer: "Pusula Deniz Spor Kulübü 2025 yılının Ocak ayında kurulmuştur. Kurucumuz Enes Şirin, 15 yıllık deneyimi ve 2. Kademe Antrenörlük lisansı ile profesyonel yüzme eğitimi alanında hizmet vermektedir."
      }
    ]
  },
  {
    title: "Eğitmenler ve Dersler",
    items: [
      {
        question: "Eğitmenleriniz kimlerdir?",
        answer: "Eğitmen kadromuz deneyimli profesyonellerden oluşmaktadır: Enes Şirin (Kurucu, 15 yıllık deneyim, 2. Kademe Antrenörlük lisansı), Burak Kırman (Uzman Eğitmen), Burak Öndüç (Uzman Eğitmen) ve İdil (Uzman Eğitmen). Tüm eğitmenlerimiz alanında uzman ve sertifikalı profesyonellerdir."
      },
      {
        question: "Hangi tür yüzme dersleri sunuyorsunuz?",
        answer: "Özel dersler (birebir kişiselleştirilmiş eğitim), grup dersleri (yaş ve seviye gruplarına göre), yaz kampı (her yaş grubuna yönelik yoğun eğitim) ve kondisyon & fitness (yüzme performansını artıran kara antrenmanları) programları sunmaktayız."
      },
      {
        question: "Çalışma saatleriniz nelerdir?",
        answer: "Hafta içi akşam 18:00-20:00 saatleri arasında, hafta sonu ise öğleden sonra 14:00, 15:00, 16:00 ve 17:00 saatlerinde derslerimiz bulunmaktadır. Esnek saat seçenekleri için bizimle iletişime geçebilirsiniz."
      },
      {
        question: "Bir derste kaç öğrenci oluyor?",
        answer: "Grup derslerinde maksimum 6-8 öğrenci bulunmaktadır. Özel dersler bire bir yapılmaktadır. Küçük gruplar halinde eğitim, her öğrenciye yeterli ilgiyi gösterebilmemizi sağlar."
      },
      {
        question: "Enes Şirin'in başarıları nelerdir?",
        answer: "Kurucumuz Enes Şirin'in önemli başarıları arasında İstanbul Boğazı 6.5K birinciliği, Aquamasters 10K birinciliği ve Megisti Kaş 7.2K birinciliği bulunmaktadır. 15 yıllık deneyimi ve 2. Kademe Antrenörlük lisansı ile profesyonel eğitim vermektedir."
      }
    ]
  },
  {
    title: "Kayıt ve İletişim",
    items: [
      {
        question: "Nasıl kayıt olabilirim?",
        answer: "Kayıt için +90 541 900 41 91 numaralı telefondan bizi arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz. Ayrıca web sitemizden iletişim formunu doldurarak bilgi alabilirsiniz."
      },
      {
        question: "Deneme dersi imkanınız var mı?",
        answer: "Evet, kulübümüzde deneme dersi imkanımız bulunmaktadır. Bu sayede derslerimizin kalitesini ve tesislerimizi deneyimleyebilirsiniz. Detaylar için bizimle iletişime geçiniz."
      },
      {
        question: "Kayıt için hangi belgeler gerekli?",
        answer: "Kayıt için kimlik fotokopisi ve sağlık raporu (yüzmeye engel bir durumunuz olmadığına dair) talep edilmektedir. Çocuklar için veli onayı da gerekmektedir."
      },
      {
        question: "İletişim bilgileriniz nelerdir?",
        answer: "Telefon: +90 541 900 41 91, WhatsApp: Aynı numara üzerinden mesaj gönderebilirsiniz. Lokasyonlarımız: Şekerpınar Perla Verde Spor Salonu ve Gebze Kapalı Olimpik Yüzme Havuzu (Kocaeli). Sosyal medya hesaplarımızdan da bizi takip edebilirsiniz."
      },
      {
        question: "Fiyatlarınız hakkında bilgi alabilir miyim?",
        answer: "Fiyatlarımız; yaş grubu, seviye, ders sıklığı, bireysel veya grup dersi tercihi gibi faktörlere göre değişiklik göstermektedir. Her öğrencimiz için kişiselleştirilmiş programlar hazırladığımızdan, detaylı bilgi ve size özel fiyat teklifi için lütfen bizimle iletişime geçin."
      }
    ]
  },
  {
    title: "Güvenlik ve Kalite",
    items: [
      {
        question: "Havuzlarınızın hijyen standartları nelerdir?",
        answer: "Havuzlarımız düzenli olarak temizlenmekte ve su kalitesi günlük kontrol edilmektedir. Uluslararası standartlarda filtreleme ve dezenfeksiyon sistemlerimiz mevcuttur. Tüm tesislerimiz hijyen kurallarına uygun olarak işletilmektedir."
      },
      {
        question: "Güvenlik önlemleriniz nelerdir?",
        answer: "Güvenlik bizim en önemli önceliğimizdir. Eğitmenlerimiz güvenlik prosedürleri konusunda düzenli eğitim almaktadır. Tüm havuz alanları sürekli gözlem altında tutulmaktadır ve acil durum protokollerimiz mevcuttur."
      },
      {
        question: "Çocuğumun yüzme sırasında güvenliği nasıl sağlanıyor?",
        answer: "Çocuk güvenliği konusunda özel önlemler alıyoruz. Eğitmenlerimiz çocuk gelişimi ve güvenliği konusunda uzmanlaşmıştır. Küçük grup eğitimleri ile her çocuğa bireysel ilgi gösterilmektedir."
      },
      {
        question: "Özel ihtiyaçları olan bireyler için hizmetiniz var mı?",
        answer: "Evet, özel sağlık durumlarına ve ihtiyaçlara göre programlarımızı kişiselleştiriyoruz. Fiziksel engelli bireyler, kronik rahatsızlığı olanlar veya özel ihtiyaçları olan kişiler için uyarlanmış derslerimiz bulunmaktadır."
      },
      {
        question: "Neden Pusula Deniz Spor Kulübü'nü tercih etmeliyim?",
        answer: "15+ yıllık deneyim, 100+ mutlu öğrenci, 4 uzman eğitmen kadromuz, modern tesislerimiz, kişiselleştirilmiş eğitim programlarımız ve güvenlik öncelikli yaklaşımımız ile Kocaeli'nin en kaliteli yüzme eğitimi hizmetini sunmaktayız."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>("Genel Sorular");

  const toggleFAQ = (question: string) => {
    setOpenItems(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  const [contentRef, contentInView] = useInView({
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
            Sıkça Sorulan Sorular
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
            Pusula Deniz Spor Kulübü hakkında merak edilenler
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

      {/* FAQ Content Section */}
      <section ref={contentRef} className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Kategori Seçimi */}
            <div className="bg-gray-50 p-6 border-b sticky top-0 z-20 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(category.title)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors btn-like ${
                      activeCategory === category.title
                        ? 'bg-blue-600 text-white shine'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQ Öğeleri */}
            <div className="p-6">
              {faqCategories
                .filter(category => category.title === activeCategory)
                .map((category) => (
                  <div key={category.title}>
                    <motion.h2 
                      variants={fadeIn}
                      className="text-2xl font-bold mb-6 text-blue-600 wavy-underline"
                    >
                      {category.title}
                    </motion.h2>
                    
                    <div className="space-y-4">
                      {category.items.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeIn}
                          className={`border rounded-lg overflow-hidden transition-all ${
                            openItems[item.question] ? 'shadow-md' : ''
                          }`}
                        >
                          <button
                            onClick={() => toggleFAQ(item.question)}
                            className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-medium text-gray-800">{item.question}</span>
                            <span className="text-blue-600">
                              {openItems[item.question] ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                              )}
                            </span>
                          </button>
                          
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openItems[item.question] ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            <div className="p-4 bg-gray-50 border-t">
                              <p className="text-gray-700">{item.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>


    </main>
  );
}

 