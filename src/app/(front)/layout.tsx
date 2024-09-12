import Footer from "../components/front/footer/Footer";
import Navbar from "../components/front/ืnavbar/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    );
  }