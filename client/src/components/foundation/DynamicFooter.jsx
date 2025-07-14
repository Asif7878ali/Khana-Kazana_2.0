import Icons from '@/utils/Icons';

const DynamicFooter = ({setDynamicFooter }) => {
   
  return (
    <footer className='mt-8 shadow-2xl pt-9 fixed bottom-0 left-0 right-0 bg-rose-500'>
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-4 md:flex-row md:px-10">
          <div className="md:w-80">
            <div className="flex justify-between items-baseline">
              <div>
              <p className="font-bold text-white text-2xl">Khana 
                 <span className="text-white italic text-sm ml-1">Kazana</span>
              </p>           
             </div>            
              <span onClick={() => setDynamicFooter(false)} className=" cursor-pointer block md:hidden p-2">
              <Icons.CheronUp className={'text-white'}/>
              </span>   
            </div>
            <p className="mt-4 text-sm font-normal text-white/80">
              Explore our meticulously curated menu that showcases a symphony of
              flavors, each dish a testament to the artistry of our skilled
              chefs. From mouthwatering appetizers that tantalize your taste
              buds to decadent desserts that provide a sweet crescendo to your
              meal, every bite is a celebration of culinary excellence.
            </p>
            <div className="mt-4 flex gap-4">
              <a className="hover:scale-110" target="_blank" href="#">
                <Icons.FaceBook className={"text-white"} />
              </a>
              <a className="hover:scale-110" target="_blank" href="/">
                <Icons.Instagram className={"text-white"} />
              </a>
              <a className="hover:scale-110" target="_blank" href="">
                <Icons.Twitter className={"text-white"} />
              </a>
              <a
                className="hover:scale-110"
                target="_blank"
                href="https://www.youtube.com/"
              >
                <Icons.Github className={"text-white"} />
              </a>
            </div>
          </div>
          <div className="md:w-80">
            <div className="mt-6 flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <Icons.Dial />
              </div>
              <div className="ml-4">
                <a
                  href="tel:+911800123444"
                  className="font-Inter text-sm font-medium text-white"
                >
                  +91 1800123444
                </a>
                <p className="font-Inter text-xs font-medium text-white">
                  Support Number
                </p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <Icons.Msg />
              </div>
              <div className="ml-4">
                <a
                  href="mailto:help@lorem.com"
                  className="font-Inter text-sm font-medium text-white"
                >
                  help@lorem.com
                </a>
                <p className="font-Inter text-xs font-medium text-white">
                  Support Email
                </p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <Icons.Location />
              </div>
              <div className="ml-4">
                <a
                  href="mailto:help@lorem.com"
                  className="font-Inter text-sm font-medium text-white"
                >
                  Vasundhara, Ghazibad, India, 201012
                </a>
                <p className="font-Inter text-xs font-medium text-white">
                  Address
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-sm">
            <div>
              <p className="text-deutziawhite font-inter text-lg font-medium leading-normal">
                Pages
              </p>
              <ul className='grid grid-cols-2 md:grid-cols-1 gap-2'>
                <li className="mt-4">
                  <span className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-sm font-normal hover:font-semibold">
                    Home
                  </span>
                </li>
                <li className="mt-4">
                  <span className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-sm font-normal hover:font-semibold">
                    News
                  </span>
                </li>
                <li className="mt-4">
                  <span className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-sm font-normal hover:font-semibold">
                    Contact
                  </span>
                </li>
                <li className="mt-4">
                  <span className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-sm font-normal hover:font-semibold">
                    Plans and pricing
                  </span>
                </li>
               
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <p className="text-deutziawhite font-inter text-lg font-medium">
                Download the app
              </p>
              <div className="flex gap-4 sm:flex-col">
                <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                    width={20}
                    height={20}
                    alt="Icon"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
                <div className="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                    width={20}
                    height={20}
                    alt="Icon"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base">  Apple Store </p>
                  </div>
                </div>
              </div>
            </div>            
            <span onClick={() => setDynamicFooter(false)} className="cursor-pointer hidden md:block p-2">
              <Icons.CheronUp/>
           </span>
            
          </div>
        </div>
        <hr className="mt-8 text-white" />
        <div className="flex items-center justify-center pb-8 pt-2 md:py-8">
          <p className="text-xs font-normal text-white md:text-sm">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by Khana
            Kazana. PVT. LTD
          </p>
        </div>
      </div>
    </footer>
  )
}

export default DynamicFooter