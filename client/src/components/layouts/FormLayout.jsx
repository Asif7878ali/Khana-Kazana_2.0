import Image from "next/image";


const Layout = ({ children, image }) => {

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className='w-full max-w-md max-h-[85vh] overflow-y-auto no-scrollbar p-6 rounded-lg shadow-box bg-white'>
          {children}
        </div>
      </div>

      {/* Right Side: Image (Hidden on iPad and Mobile) */}
      <div className='hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-rose-100 via-white to-rose-100'>
        <Image
          src={image}
          alt="auth"
          height={800}
          width={500}
          priority={true}
          className="w-3/4 h-auto object-contain rounded-3xl shadow-box transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Layout;
