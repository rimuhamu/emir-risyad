export function Hero() {
  return (
    <div className='min-h-screen flex items-center justify-center relative'>
      <div className='relative'>
        <div className='w-[500px] h-[500px] rounded-full border-8 border-golden-rod-yellow bg-transparent flex items-center justify-center animate-pulse-scale'></div>
        {/* Text overlay */}
        <div className='absolute inset-0 gap-8 flex items-center justify-center'>
          <h1 className='font-light font-montserrat text-8xl text-white tracking-wide whitespace-nowrap'>
            EMIR
          </h1>
          <h1 className='font-bold font-montserrat text-8xl text-white tracking-wide whitespace-nowrap'>
            RISYAD
          </h1>
        </div>
      </div>
    </div>
  );
}
