export function Hero() {
  return (
    <div className=' flex items-center justify-center'>
      <div className='absolute'>
        <div className='w-[500px] h-[500px] rounded-full border-8 border-golden-rod-yellow bg-transparent flex items-center justify-center animate-pulse-scale'></div>
        {/* Text overlay */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-8xl font-black text-white tracking-widest whitespace-nowrap'>
            EMIR RISYAD
          </h1>
        </div>
      </div>
    </div>
  );
}
