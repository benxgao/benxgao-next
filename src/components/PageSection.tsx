import { sourceCodePro400 } from '../../styles/fonts';

export default function PageSection({
  id,
  title,
  children,
  className,
  style,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: any;
}) {
  return (
    <section
      id={id}
      className={`${className} ${sourceCodePro400.className} relative z-10 bg-white p-4 sm:px-4 md:px-8 lg:px-16 sm:py-4 md:py-12 lg:py-24 rounded-lg shadow-md m-4 sm:m-4 md:m-8 lg:mx-16 min-h-[10rem]`}
      style={style}
    >
      <h2 className='text sm:text-xl lg:text-2xl font-semibold mb-6'>{title}</h2>
      {children}
    </section>
  );
}
