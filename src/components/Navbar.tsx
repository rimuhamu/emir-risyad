import React from 'react';

interface NavbarProps {
  onSectionClick?: (sectionId: string) => void;
}

export function Navbar({ onSectionClick }: NavbarProps) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'cv', label: 'CV' },
  ];

  const handleClick = (id: string) => {
    if (onSectionClick) {
      onSectionClick(id);
    }
  };

  return (
    <nav className='fixed top-0 left-0 h-full w-64 bg-transparent backdrop-blur-sm flex items-center justify-center z-50'>
      <ul className='flex flex-col items-start leading-none text-2xl uppercase space-y-6 p-8'>
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            className='relative group cursor-pointer'>
            <div className='absolute top-0 w-1 h-full -translate-x-4 bg-golden-rod-yellow'></div>
            <a
              onClick={() => handleClick(item.id)}
              className='relative block cursor-pointer overflow-hidden'>
              <span className='block text-white transition-all duration-300 group-hover:text-golden-rod-yellow'>
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
