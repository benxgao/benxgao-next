import PageSection from '@/src/components/PageSection';

export default function WorkshopSection() {
  return (
    <PageSection id='workshop' title="Workshops I've Attended">
      <div className='flex flex-col gap-8'>
        <div key={1} className='pb-8 sm:pb-2 md:pb-8 w-full'>
          <a href='https://designlab.com' target='_blank' rel='noopener noreferrer'>
            <h3 className='text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-blue-300'>
              Design 101 course (Oct 2015)
            </h3>
          </a>
          <p className='text-sm sm:text-base'>I completed the 4-week course on web design by designlab.com</p>
        </div>
        <div key={2} className='w-full'>
          <a
            href='https://idealog.co.nz/venture/2015/11/fashion-ghost-wins-auckland-startup-weekend-sets-sights-global-start-battle'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h3 className='text-lg sm:text-xl font-medium mb-2 hover:underline hover:text-green-300'>
              Auckland Startup Weekend (Nov 2015)
            </h3>
          </a>
          <p className='text-sm sm:text-base'>
            I joined in the team of Fashion Ghost and built a prototype for a fashion app in 54 hours
          </p>
        </div>
      </div>
    </PageSection>
  );
}
