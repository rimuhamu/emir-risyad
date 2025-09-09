import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CODEGREEN AI Hackacthon 2021',
      description:
        'Implemented form submission functionality using jQuery, improving user interaction and data collection for event participants.',
      technologies: ['JQuery', 'Wix', 'Figma'],
      status: 'Completed',
      category: 'Volunteer',
    },
    {
      id: 2,
      title: 'Shinjang',
      description:
        'Order tracking web application with real-time status updates.',
      technologies: [
        'Next.js',
        'TypeScript',
        'PayloadCMS',
        'MongoDB',
        'Tailwind CSS',
      ],
      status: 'Live',
      category: 'Web Application',
      github: 'https://github.com/rimuhamu/shinjang-v2',
      liveLink: 'https://www.shinjang.site/',
    },
    {
      id: 3,
      title: 'Medrec API',
      description: 'Medical record API',
      technologies: [
        'Hono.js',
        'TypeScript',
        'SQLite',
        'JWT Authentication',
        'OpenAPI',
        'Zod Validation',
      ],
      status: 'Live',
      category: 'API',
      github: 'https://github.com/rimuhamu/medrec-api',
      liveLink: 'https://www.shinjang.site/',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-custom-green text-black';
      case 'Completed':
        return 'bg-blue-underling text-black';
      case 'In Progress':
        return 'bg-golden-rod-yellow text-black';
      case 'Beta':
        return 'bg-pinky-ring text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className='min-h-screen bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2
            className='text-4xl sm:text-5xl lg:text-6xl 
            font-bold font-montserrat text-golden-rod-yellow 
            mb-3 sm:mb-4'>
            Projects
          </h2>
          <div
            className='w-16 sm:w-20 h-1 bg-golden-rod-yellow mx-auto mb-6 sm:mb-8
          '></div>
          <p
            className='text-lg sm:text-xl text-white 
            max-w-3xl mx-auto leading-relaxed px-4'>
            A showcase of my work that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 
          gap-6 sm:gap-8'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='bg-mountain-shadow-blue/50 border-golden-rod-yellow/30 hover:border-golden-rod-yellow/90 transition-all duration-300 cursor-pointer group'>
              <CardHeader>
                <div className='flex justify-between items-start mb-2'>
                  <Badge
                    variant='outline'
                    className='text-golden-rod-yellow border-golden-rod-yellow/50 
                      bg-golden-rod-yellow/10 text-xs sm:text-sm
                      shrink-0'>
                    {project.category}
                  </Badge>
                  <Badge
                    className={`${getStatusColor(
                      project.status
                    )} font-medium text-xs sm:text-sm shrink-0`}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className='text-white group-hover:text-golden-rod-yellow transition-colors duration-300 font-montserrat text-lg sm:text-xl leading-tight'>
                  {project.title}
                </CardTitle>

                <CardDescription className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4 pt-0'>
                <div>
                  <h4
                    className='text-xs sm:text-sm font-semibold 
                    text-golden-rod-yellow mb-3'>
                    Technologies Used:
                  </h4>
                  <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 bg-golden-rod-yellow/20 
                          text-golden-rod-yellow text-xs rounded 
                          border border-golden-rod-yellow/30 
                          hover:bg-golden-rod-yellow/30 
                          transition-colors duration-200'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2'>
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center gap-2 
                        px-3 sm:px-4 py-2 bg-golden-rod-yellow 
                        text-black text-xs sm:text-sm font-semibold 
                        rounded-lg hover:bg-golden-rod-yellow/80 
                        transition-all duration-300 shadow-md 
                        hover:shadow-lg hover:scale-105
                        w-full sm:w-auto'>
                      <span>🚀</span>
                      Live Demo
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-center gap-2 
                        px-3 sm:px-4 py-2 bg-white/10 text-white 
                        text-xs sm:text-sm font-semibold rounded-lg 
                        border border-golden-rod-yellow/50 
                        hover:bg-golden-rod-yellow/20 
                        hover:border-golden-rod-yellow 
                        transition-all duration-300 shadow-md 
                        hover:shadow-lg hover:scale-105
                        w-full sm:w-auto'>
                      <span>
                        <Image
                          src='/icons/github.svg'
                          alt='github'
                          width={18}
                          height={18}
                          className='w-4 h-4 opacity-80 group-hover:opacity-100 
                            transition-opacity duration-300 
                            filter brightness-0 invert'
                        />
                      </span>
                      GitHub
                    </Link>
                  )}
                  {!project.liveLink && !project.github && (
                    <div
                      className='flex items-center justify-center gap-2 
                      px-3 sm:px-4 py-2 bg-gray-600/30 
                      text-gray-400 text-xs sm:text-sm rounded-lg 
                      cursor-not-allowed w-full sm:w-auto'>
                      <span>🔒</span>
                      Private Project
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
