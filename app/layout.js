import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";

const opensans = Open_Sans({ subsets: ["latin"] }); 
const fugaz = Fugaz_One({ subsets: ["latin"],weight: ['400'] }); 

export const metadata = {
  title: "ExpressUp",
  description: "How's your Mood?",
};

export default function RootLayout({ children }) {
  const header = (

    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">

      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>ExpressUp</h1>
      </Link>
      
      <div className="flex items-center justify-between">
        PLACEHOLDER
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={ 'text-red-200 font-bold duration-200 hover:text-white hover:bg-indigo-500' + fugaz.className}> &#169; axshat.ind</p>
    </footer>
  )
  
  return (
    <html lang="en">
      <AuthProvider>
      <body className={ 'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}> 
        {header}
        {children}
        {footer}
      </body>
      </AuthProvider>
    </html>

  );
} 
