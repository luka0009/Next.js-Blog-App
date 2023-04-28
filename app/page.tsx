import Image from 'next/image'
import { Inter } from 'next/font/google'
import Trending from './(home)/Trending'
import Tech from './(home)/Tech'
import Literature from './(home)/Literature'
import Other from './(shared)/Other'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="px-10 leading-7">
    <Trending />
    <Tech />
    <Literature />
    <Other />
    {/* <div className="md:flex gap-10 mb-5">
      <div className="basis-3/4">
        <div className="hidden md:block">
          <Subscribe />
        </div>
      </div>
      <div className="basis-1/4">
        <Sidebar />
      </div>
    </div> */}
  </main>
  )
}
