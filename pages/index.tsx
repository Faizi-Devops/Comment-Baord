import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Compone from '@/components/Compone/Compone'
import Coment from '@/components/Comment/Coment'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Coment />
     
      
    </div>
  )
}
