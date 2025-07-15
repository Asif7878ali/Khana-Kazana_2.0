import Icons from '@/utils/Icons';

const DrawerFooter = ({ open, handleDrawer }) => {
  return (
     <footer className={`fixed bottom-0 left-0 right-0 bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 shadow-2xl transition-all duration-700 ease-in-out ${
      open 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-full opacity-0'
    }`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute animate-pulse top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute animate-pulse delay-300 top-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute animate-pulse delay-700 bottom-20 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-[1166px] px-4 xl:px-0 pt-8">
        <div className="flex flex-col justify-between sm:px-4 md:flex-row md:px-10">
          
          {/* Brand Section */}
          <div className="md:w-80 animate-fade-in-up">
            <div className="flex justify-between items-baseline">
              <div>
                <p className="font-bold text-white text-3xl">
                  Khana 
                  <span className="text-white italic text-lg ml-1 opacity-90">Kazana</span>
                </p>           
              </div>            
              <span 
                onClick={() => setDynamicFooter(false)} 
                className="cursor-pointer block md:hidden p-2 hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <Icons.CheronUp className={'text-white hover:scale-110 transition-transform'} />
              </span>   
            </div>
            
            <p className="mt-6 text-sm font-normal text-white/90 leading-relaxed">
              Explore our meticulously curated menu that showcases a symphony of
              flavors, each dish a testament to the artistry of our skilled
              chefs. From mouthwatering appetizers that tantalize your taste
              buds to decadent desserts that provide a sweet crescendo to your
              meal, every bite is a celebration of culinary excellence.
            </p>
            
            <div className="mt-6 flex gap-4">
              <a className="hover:scale-125 transition-transform duration-300 p-2 hover:bg-white/10 rounded-full" target="_blank" href="#">
                <Icons.FaceBook className={"text-white w-5 h-5"} />
              </a>
              <a className="hover:scale-125 transition-transform duration-300 p-2 hover:bg-white/10 rounded-full" target="_blank" href="/">
                <Icons.Instagram className={"text-white w-5 h-5"} />
              </a>
              <a className="hover:scale-125 transition-transform duration-300 p-2 hover:bg-white/10 rounded-full" target="_blank" href="">
                <Icons.Twitter className={"text-white w-5 h-5"} />
              </a>
              <a className="hover:scale-125 transition-transform duration-300 p-2 hover:bg-white/10 rounded-full" target="_blank" href="https://www.youtube.com/">
                <Icons.Github className={"text-white w-5 h-5"} />
              </a>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="md:w-80 animate-fade-in-up delay-200">
            <div className="mt-6 flex items-center group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                <Icons.Dial className="text-white" />
              </div>
              <div className="ml-4">
                <a
                  href="tel:+911800123444"
                  className="font-Inter text-sm font-medium text-white hover:text-rose-200 transition-colors"
                >
                  +91 1800123444
                </a>
                <p className="font-Inter text-xs font-medium text-white/80">
                  Support Number
                </p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                <Icons.Msg className="text-white" />
              </div>
              <div className="ml-4">
                <a
                  href="mailto:help@lorem.com"
                  className="font-Inter text-sm font-medium text-white hover:text-rose-200 transition-colors"
                >
                  help@lorem.com
                </a>
                <p className="font-Inter text-xs font-medium text-white/80">
                  Support Email
                </p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                <Icons.Location className="text-white" />
              </div>
              <div className="ml-4">
                <a
                  href="#"
                  className="font-Inter text-sm font-medium text-white hover:text-rose-200 transition-colors"
                >
                  Vasundhara, Ghazibad, India, 201012
                </a>
                <p className="font-Inter text-xs font-medium text-white/80">
                  Address
                </p>
              </div>
            </div>
          </div>
          
          {/* Links and App Downloads */}
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-sm animate-fade-in-up delay-300">
            <div>
              <p className="text-white font-inter text-lg font-semibold leading-normal mb-2">
                Pages
              </p>
              <ul className='grid grid-cols-2 md:grid-cols-1 gap-1'>
                {['Home', 'News', 'Contact', 'Plans and pricing'].map((item, index) => (
                  <li key={index} className="mt-3">
                    <span className="text-white hover:text-rose-200 font-inter text-sm font-normal hover:font-semibold cursor-pointer transition-all duration-300 hover:translate-x-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <p className="text-white font-inter text-lg font-semibold">
                Download the app
              </p>
              <div className="flex gap-3 sm:flex-col">
                <div className="flex items-center border border-white/20 rounded-xl px-4 py-3 w-52 mx-2 hover:border-white/40 hover:bg-white/5 transition-all duration-300 cursor-pointer group">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8 group-hover:scale-110 transition-transform"
                    width={20}
                    height={20}
                    alt="Google Play"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base font-medium"> Google Play Store </p>
                  </div>
                </div>
                
                <div className="flex items-center border border-white/20 rounded-xl px-4 py-3 w-52 mx-2 hover:border-white/40 hover:bg-white/5 transition-all duration-300 cursor-pointer group">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8 group-hover:scale-110 transition-transform"
                    width={20}
                    height={20}
                    alt="Apple Store"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base font-medium">Apple Store</p>
                  </div>
                </div>
              </div>
            </div>            
            
            <span 
              onClick={() => handleDrawer(false)} 
              className="cursor-pointer hidden md:block p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Icons.CheronUp className="text-white" />
            </span>
          </div>
        </div>
        
        <hr className="mt-8 border-white/20" />
        <div className="flex items-center justify-center pb-6 pt-4 md:py-6">
          <p className="text-xs font-normal text-white/90 md:text-sm text-center">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by Khana
            Kazana. PVT. LTD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DrawerFooter;
