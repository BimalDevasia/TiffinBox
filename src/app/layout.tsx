import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getSession } from './session';
import { getAdminSession } from './admin-session';
import ClientSessionProvider from './SessionProvider';
import { GlobalProvider } from "./GlobalProvider";

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
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className={`${bebas.className}`}>
        <ClientSessionProvider session={session || adminSession}>
          <GlobalProvider>
            {adminSession ? (
              <AdminLayout>{children}</AdminLayout>
            ) : (
              <>
                <Navbar />
                {children}
              </>
            )}
          </GlobalProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};