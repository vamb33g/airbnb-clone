
import "tailwindcss/tailwind.css";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/Navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />          
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
