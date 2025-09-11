import React, { useState } from 'react';
import { Button } from './ui/button';

interface NavbarProps {
  onSectionClick?: (sectionId: string) => void;
}

export function Navbar({ onSectionClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { id: 'home', label: 'Home', type: 'section' },
    { id: 'about', label: 'About', type: 'section' },
    { id: 'projects', label: 'Projects', type: 'section' },
    { id: 'cv', label: 'CV', type: 'download' },
  ];

  const handleClick = (id: string, type: string) => {
    if (type === 'download') {
      handleCVDownload();
    } else if (onSectionClick) {
      onSectionClick(id);
    }
    setIsOpen(false);
  };

  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/CV_EMIR_RISYAD.pdf';
    link.download = 'Emir_Risyad_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        onClick={toggleMenu}
        className={`
          fixed top-4 left-4 sm:top-6 sm:left-6 z-[60]
          w-10 h-10 sm:w-12 sm:h-12 
          bg-golden-rod-yellow/20 backdrop-blur-sm
          border-2 border-golden-rod-yellow/50 
          rounded-full flex flex-col items-center justify-center 
          transition-all duration-300 hover:scale-110 
          hover:border-golden-rod-yellow hover:bg-golden-rod-yellow/30
          group
          ${isOpen ? 'border-golden-rod-yellow bg-golden-rod-yellow/40' : ''}
        `}>
        <div className='w-5 h-3 sm:w-6 sm:h-4 flex flex-col justify-between'>
          <span
            className={`w-full h-0.5 bg-golden-rod-yellow transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-1.5 md:translate-y-2' : ''
            }`}
          />
          <span
            className={`
              w-full h-0.5 bg-golden-rod-yellow transition-all duration-300
              ${isOpen ? 'opacity-0' : 'opacity-100'}
            `}
          />
          <span
            className={`
              w-full h-0.5 bg-golden-rod-yellow transition-all duration-300 origin-center
              ${isOpen ? '-rotate-45 -translate-y-1 md:-translate-y-1.5' : ''}
            `}
          />
        </div>
      </Button>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-100
          '
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav
        className={`
          fixed top-0 left-0 h-full 
          w-64 sm:w-72 lg:w-80
        bg-white/10
          border-r border-golden-rod-yellow/20
          flex items-center justify-center z-50
          transition-transform duration-100 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
        <ul
          className='flex flex-col items-start leading-none 
          text-xl sm:text-2xl 
          uppercase space-y-6 sm:space-y-8 
          p-6 sm:p-8'>
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              className={`
                relative group cursor-pointer
                transform transition-all duration-300 ease-out
                ${
                  isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
                }
              `}
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
              }}>
              <div
                className='absolute top-0 w-1 h-full 
                -translate-x-4 sm:-translate-x-6 
                bg-golden-rod-yellow transition-all duration-300 
                group-hover:w-2 group-hover:-translate-x-5 sm:group-hover:-translate-x-7'></div>
              <a
                onClick={() => handleClick(item.id, item.type)}
                className='relative block cursor-pointer overflow-hidden pl-3 sm:pl-4'>
                <span
                  className='
                  text-white transition-all duration-300 
                  group-hover:text-golden-rod-yellow flex items-center gap-2
                '>
                  {item.label}
                  {item.type === 'download' && (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='opacity-70 group-hover:opacity-100 transition-opacity duration-300'>
                      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                      <polyline points='7,10 12,15 17,10' />
                      <line
                        x1='12'
                        y1='15'
                        x2='12'
                        y2='3'
                      />
                    </svg>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
