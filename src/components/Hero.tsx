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
      name: 'Instagram',
      icon: '/icons/ig.svg',
      url: 'https://www.instagram.com/emir.rsyd/',
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
      {/* Social Media Links */}
      <div className='absolute bottom-12 left-1/2 transform -translate-x-1/2'>
        <div className='flex items-center space-x-6'>
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target={'_blank'}
              rel={'noopener noreferrer'}
              className={`
                w-14 h-14 
                bg-golden-rod-yellow/20 
                border-2 border-golden-rod-yellow/50 
                rounded-full 
                flex items-center justify-center 
                text-2xl 
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
                className='opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert'
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
