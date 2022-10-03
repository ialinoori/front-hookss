import "../../styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  );
}

export default MyApp;
