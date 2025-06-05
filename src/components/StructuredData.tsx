export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": "Pusula Deniz Spor Kulübü",
    "alternateName": "Pusula Deniz Spor",
    "description": "Kocaeli'nde 15+ yıllık deneyimle profesyonel yüzme eğitimi. Özel dersler, grup eğitimleri ve yarışma hazırlık programları.",
            "url": "https://pusuladenizsportsclub.com",
        "logo": "https://pusuladenizsportsclub.com/images/logo.png",
    "image": "https://pusuladenizsportsclub.com/opengraph-image",
    "telephone": "+905419004191",
    "sport": "Swimming",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Şekerpınar Perla Verde Spor Salonu",
        "addressLocality": "Şekerpınar",
        "addressRegion": "Kocaeli",
        "addressCountry": "TR"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Gebze Kapalı Olimpik Yüzme Havuzu",
        "addressLocality": "Gebze",
        "addressRegion": "Kocaeli", 
        "addressCountry": "TR"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.862192",
      "longitude": "29.3695011"
    },
    "openingHours": [
      "Mo-Fr 18:00-20:00",
      "Sa-Su 14:00-17:00"
    ],
    "founder": {
      "@type": "Person",
      "name": "Enes Şirin",
      "jobTitle": "Kurucu ve Baş Antrenör",
      "description": "15+ yıllık deneyimli profesyonel yüzücü ve antrenör. 2. Kademe Antrenörlük lisansı sahibi."
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Enes Şirin",
        "jobTitle": "Kurucu ve Baş Antrenör"
      },
      {
        "@type": "Person", 
        "name": "Burak Kırman",
        "jobTitle": "Uzman Eğitmen"
      },
      {
        "@type": "Person",
        "name": "Burak Öndüç", 
        "jobTitle": "Uzman Eğitmen"
      },
      {
        "@type": "Person",
        "name": "İdil",
        "jobTitle": "Uzman Eğitmen"
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Özel Yüzme Dersleri",
        "description": "Her yaş ve seviyeye uygun birebir özel dersler"
      },
      {
        "@type": "Offer", 
        "name": "Grup Yüzme Eğitimleri",
        "description": "Yaş ve seviye gruplarına göre sosyal öğrenme ortamında eğitimler"
      },
      {
        "@type": "Offer",
        "name": "Yaz Kampı",
        "description": "Her yaş grubuna yönelik yoğun yüzme eğitimi"
      },
      {
        "@type": "Offer",
        "name": "Kondisyon ve Fitness",
        "description": "Yüzme performansını artıran kara antrenmanları"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/pusuladenizsporkulubu_/"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pusula Deniz Spor Kulübü",
    "image": "https://pusuladenizsportsclub.com/opengraph-image",
    "@id": "https://pusuladenizsportsclub.com",
    "url": "https://pusuladenizsportsclub.com",
    "telephone": "+905419004191",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Şekerpınar Perla Verde Spor Salonu",
      "addressLocality": "Şekerpınar",
      "addressRegion": "Kocaeli",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.862192,
      "longitude": 29.3695011
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "18:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "14:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
    </>
  );
} 