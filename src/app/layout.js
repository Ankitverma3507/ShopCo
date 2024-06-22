
import { Navbar } from '@/components/component/navbar';
import { Footer } from '@/components/component/footer';
import "./globals.css";
export const metadata = {
    title: 'SHOP.CO',
    description: 'Modern, stylish, and affordable clothing for all ages.',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                    <div className='gradient'/>
            </div>

            <main className='app px-4 md:px-6'>
                <Navbar />
                {children}
                {/* <Footer/> */}
            </main>
        </body>
    </html>
  )
}

export default RootLayout