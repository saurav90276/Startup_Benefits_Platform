import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";


import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
