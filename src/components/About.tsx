export function About() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-mountain-shadow-blue to-background flex items-center justify-center px-8 py-16'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start'>
        {/* Text Content */}
        <div className='space-y-6 sm:space-y-8'>
          <div>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat text-golden-rod-yellow mb-3 sm:mb-4'>
              About Me
            </h2>
            <div className='w-16 sm:w-20 h-1 bg-golden-rod-yellow mb-6 sm:mb-8'></div>
          </div>

          <div className='space-y-4 sm:space-y-6 text-base sm:text-lg text-white leading-relaxed'>
            <p>
              I&apos;m a motivated computer science student with a strong
              interest in web development, specializing in TypeScript and modern
              backend frameworks. I have experience in designing and
              implementing scalable APIs, optimizing database interactions, and
              building reliable systems, with a passion for creating something
              impactful.
            </p>

            <p>
              Currently pursuing my Bachelor of Applied Computer Science at
              Technische Hochschule Brandenburg, with additional experience from
              an Erasmus+ exchange at Fachhochschule Vorarlberg focusing on
              digital innovation, AI, and web development.
            </p>

            <p>
              I&apos;m skilled at problem-solving, collaborative development,
              and learning new technologies quickly. I&apos;m seeking internship
              opportunities where I can contribute to impactful projects while
              further developing expertise in distributed systems and
              cloud-based architectures.
            </p>
          </div>
        </div>

        {/* Skills & Info Section */}
        <div className='space-y-6 sm:space-y-8'>
          {/* Core Skills */}
          <div className='space-y-3 sm:space-y-4'>
            <h3 className='text-xl sm:text-2xl font-semibold text-golden-rod-yellow font-montserrat'>
              Core Skills
            </h3>
            <div className='flex flex-wrap gap-2 sm:gap-3'>
              {[
                'Next.js',
                'Express.js',
                'TypeScript',
                'Python',
                'Kotlin',
                'Java',
                'SQL',
                'NoSQL',
                'RESTful APIs',
                'AWS',
                'Docker',
                'Android Development',
                'Microservices',
              ].map((skill) => (
                <span
                  key={skill}
                  className='px-3 sm:px-4 py-1.5 sm:py-2 bg-golden-rod-yellow/20 text-golden-rod-yellow rounded-full text-sm font-medium border border-golden-rod-yellow/30 hover:bg-golden-rod-yellow/30 transition-colors duration-300'>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Certifications */}
          <div className='space-y-3 sm:space-y-4'>
            <h3 className='text-xl sm:text-2xl font-semibold text-golden-rod-yellow font-montserrat'>
              Languages & Certifications
            </h3>
            <div className='space-y-3 sm:space-y-4'>
              <div>
                <h4 className='text-base sm:text-lg font-medium text-white mb-2'>
                  Languages:
                </h4>
                <div className='flex gap-1 sm:gap-2 text-sm sm:text-base text-golden-rod-yellow'>
                  <span>English</span>{' '}
                  <span className='hidden sm:inline'>•</span>
                  <span className='sm:hidden'>,</span>
                  <span>German</span> •{' '}
                  <span className='hidden sm:inline'>•</span>
                  <span className='sm:hidden'>,</span>
                  <span>Indonesian</span>
                </div>
              </div>
              <div>
                <h4 className='text-base sm:text-lg font-medium text-white mb-2'>
                  Certifications:
                </h4>
                <div className='flex flex-wrap gap-2 text-xs sm:text-sm'>
                  {[
                    'AWS Cloud Practitioner (AWS)',
                    'Full Stack Open (University of Helsinki)',
                    'Postman API Expert (Postman)',
                    'Rapid Developer Certification (Mendix)',
                  ].map((cert) => (
                    <span
                      key={cert}
                      className='px-2 sm:px-3 py-1 bg-blue-underling/20 text-blue-underling rounded-full border border-blue-underling/30'>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
