import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Pusula Deniz Spor Kulübü - Kocaeli\'nin En İyi Yüzme Eğitimi Merkezi'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    
  return new ImageResponse(
    (
      <main tw="h-full w-full flex flex-col relative">
        {/* Background Image with Overlay */}
        <div 
          tw="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${baseUrl}/images/enes-1.jpg)`,
            backgroundSize: '1200px 630px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark Overlay */}
        <div tw="absolute inset-0 w-full h-full bg-black opacity-60" />
        
        {/* Content */}
        <div tw="relative z-10 w-full h-full flex flex-col items-center justify-center text-white p-8">
          {/* Logo */}
            <img
              src={`${baseUrl}/images/logo.png`}
              alt="Pusula Deniz Spor Logo"
              tw="w-48 h-48"
              style={{
                filter: 'brightness(0) invert(1)',
              }}
            />
          
          {/* Main Title */}
          <h1 tw="text-6xl font-bold text-center mb-5" style={{
            textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)',
          }}>
            Pusula Deniz Spor Kulübü
          </h1>
          
          {/* Divider */}
          <div tw="w-32 h-1 bg-white rounded mb-8" />
          
          {/* Subtitle */}
          <p tw="text-3xl text-center mb-5 max-w-4xl" style={{
            textShadow: '2px 2px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)',
          }}>
            Kocaeli'nin En İyi Yüzme Eğitimi Merkezi
          </p>
          
          {/* Features */}
          <p tw="text-2xl text-center opacity-95" style={{
            textShadow: '2px 2px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)',
          }}>
            15+ Yıllık Deneyim • Profesyonel Eğitim • Modern Tesisler
          </p>

          {/* Bottom Location */}
          <p tw="text-xl text-center mb-5 max-w-4xl" style={{
            textShadow: '2px 2px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)',
          }}>
            📍 Şekerpınar & Gebze Lokasyonları
          </p>
        </div>
      </main>
    ),
    {
      ...size,
    }
  )
} 