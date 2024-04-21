import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getSession } from './session';
import { getAdminSession } from './admin-session';
import ClientSessionProvider from './SessionProvider';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "800" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Tiffin Box",
  description: "A food booking app for GEC canteen",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const adminSession = await getAdminSession();

  return (
    <html lang="en">
      <head></head>
      <body className={`${bebas.className}`}>
        <ClientSessionProvider session={session || adminSession}>
          {/* Render different layouts based on the session */}
          {adminSession ? (
            <AdminLayout>{children}</AdminLayout>
          ) : (
            <>
              <Navbar />
              {children}
            </>
          )}
        </ClientSessionProvider>
      </body>
    </html>
  );
}

// Create an AdminLayout component
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Admin Panel</h1>
      {children}
    </div>
  );
};