import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Başarılarımız",
  description: "Pusula Deniz Spor Kulübü eğitmenlerinin ulusal ve uluslararası yarışmalardaki başarıları. Enes Şirin ve Burak Öndüç'ün açık su yüzme yarışmalarındaki dereceleri.",
  keywords: [
    "yüzme başarıları",
    "açık su yarışları",
    "İstanbul Boğazı",
    "Aquamasters",
    "Megisti Kaş",
    "Bodrum yarışı",
    "Antalya yarışı",
    "Marmaris yarışı",
    "yüzme dereceleri",
    "Pusula Deniz Spor başarıları"
  ],
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 