import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardNav from '@/components/DashboardNav';
import DashboardFooter from '@/components/DashboardFooter';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is for the login or sign-up page
  const isAuthPage = ['/login', '/signup'].includes(router.pathname);

  // Check if the current route is part of the dashboard or chat sections
  const isDashboard = ['/dashboard', '/chat'].some(path => router.pathname.startsWith(path));

  return (
    <>
      {!isAuthPage && (isDashboard ? <DashboardNav /> : <Navbar />)}
      <Component {...pageProps} />
      {/* {!isAuthPage && (isDashboard ? <DashboardFooter /> : <Footer />)} */}
      {!isAuthPage && (isDashboard ? "" : <Footer />)}
    </>
  );
}