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
      className={`${className} ${sourceCodePro400.className} relative z-10 bg-white px-4 py-8 sm:px-4 md:px-8 lg:px-16 sm:py-8 md:py-12 lg:py-24 rounded-lg shadow-lg m-4 sm:m-4 md:m-8 lg:mx-16 min-h-[10rem]`}
      style={style}
    >
      <h2 className='text-xl sm:text-2xl lg:text-2xl font-semibold mb-8'>{title}</h2>
      {children}
    </section>
  );
}
