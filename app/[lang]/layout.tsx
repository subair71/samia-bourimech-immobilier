import '../globals.css';
export const metadata={icons:{icon:'/samia-bourimech-immobilier/favicon.svg'}};
export default async function LanguageLayout({children,params}:{children:React.ReactNode,params:Promise<{lang:string}>}){const {lang}=await params;return <html lang={lang==='en'?'en':'fr'}><body>{children}</body></html>;}
