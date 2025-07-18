import "./globals.css";
import { ReduxProvider } from "@/store/reduxProvider";
import GlobalAlert from "@/components/foundation/GlobalAlert";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased">
        <ReduxProvider> 
             <GlobalAlert />
            {children}          
        </ReduxProvider>
      </body>
    </html>
  );
}
