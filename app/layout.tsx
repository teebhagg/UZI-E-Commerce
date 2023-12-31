import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./utils/redux/provider";
import SessionProv from "./utils/authorisation/session_provider";
import { Session } from "next-auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProv session={session}>
          <Providers>
            {children}
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Providers>
        </SessionProv>
      </body>
    </html>
  );
}
