import Link from 'next/link'
import {BiHomeCircle,BiUser} from 'react-icons/bi'
import {MdOutlineExplore} from 'react-icons/md'
import {BsBell,BsBookmark,BsTwitter,BsEnvelope, BsThreeDots} from 'react-icons/bs'
/*import {HiEnvelope} from 'react-icons/hi2'*/
const Navigation_icon = [
  {
    title:'Twitter',
    icon:BsTwitter
  }
  {
    title:'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:MdOutlineExplore
  },
  {
    title:'Notifications',
    icon:BsBell
  },
  {
    title:'Messages',
    icon:BsEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  },
]

const Home = () =>{
  return(
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/*left side bar*/}
        <section className="fixed w-[275px] flex flex-col h-screen">
          <div className="flex flex-col h-full space-y-4 my-4">
            <Link href={"/"}>
              <BsTwitter />
            </Link>
            {Navigation_icon.map((item)=>(

              <Link 
                className="hover:bg-white/10 text-2xl transition duration-200 item-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6" 
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon/>
                </div>
                {item.title === "Twitter" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="rounded-full m-4 bg-primary px-6 py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200"></button>
          </div>
          <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full">
            <div className="flex item-center space-x-2">
              <div className="rounded-full bg-slate-400 w-8 h-8">
              </div>
              <div className="text-left text-xs">
                <div className="font-Bold">Club of Coders</div>
                <div className="">@clubofcoders</div>

              </div>
            </div>
            <div>
              <BsThreeDots/>
            </div>
          </button>
          <div>at the bottom</div>
        </section>
        <main>main page</main>
        <section>right section</section>


      </div>

    </div>
  )
}