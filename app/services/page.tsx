import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/navbar';


// Dynamically load the client component
const ServicesClient = dynamic(() => import('./ServicesClient'), {
  ssr: false,
});

export default function ServicesPage() {
  return (
    <>
      <Navbar scrollToWebsiteDesign={() => {}}
  scrollToGraphicDesign={() => {}}
  scrollToShopifyStores={() => {}}
  scrollToBrands={() => {}}
  scrollToServices={() => {}}/>
      <Suspense fallback={<div className="text-white text-center py-20">Loading Services...</div>}>
        <ServicesClient />
      </Suspense>
    </>
  );
}
