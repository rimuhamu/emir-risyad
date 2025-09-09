import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: '/icons/github.svg',
      url: 'https://github.com/rimuhamu',
      hoverColor: 'hover:text-white hover:bg-yellow-800',
    },
    {
      name: 'LinkedIn',
      icon: '/icons/linkedin.svg',
      url: 'https://www.linkedin.com/in/emir-risyad-aa917319b/',
      hoverColor: 'hover:text-white hover:bg-yellow-600',
    },
    {
      name: 'Email',
      icon: '/icons/email.svg',
      url: 'mailto:emirrsyd@gmail.com',
      hoverColor: 'hover:text-white hover:bg-yellow-500',
    },
  ];
  return (
    <div className='min-h-screen flex items-center justify-center relative'>
      <div className='relative'>
        <div
          className='w-[280px] h-[280px] 
          sm:w-[350px] sm:h-[350px] 
          md:w-[400px] md:h-[400px] 
          lg:w-[500px] lg:h-[500px] rounded-full border-4 sm:border-6 lg:border-8 
          border-golden-rod-yellow/70 scale-100 bg-transparent 
          flex items-center justify-center'>
          {/* Text overlay */}
          <div className='absolute inset-0 gap-4 sm:gap-6 lg:gap-8 flex items-center justify-center'>
            <h1 className='font-bold font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white tracking-wide whitespace-nowrap'>
              EMIR RISYAD
            </h1>
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className='absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2'>
        <div className='flex items-center space-x-3 sm:space-x-4 lg:space-x-6'>
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className={`
                w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                bg-golden-rod-yellow/20 
                border-2 border-golden-rod-yellow/50 
                rounded-full 
                flex items-center justify-center 
                text-xl sm:text-2xl
                text-golden-rod-yellow
                backdrop-blur-sm
                transition-all duration-300 
                hover:scale-110 
                hover:border-golden-rod-yellow
                hover:shadow-lg hover:shadow-golden-rod-yellow/25
                ${social.hoverColor}
                group
              `}
              title={social.name}>
              <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
                className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert'
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
