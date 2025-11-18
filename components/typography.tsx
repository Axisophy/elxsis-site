// components/typography.tsx

type HeadingProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export function PageTitle({ children, className = "" }: HeadingProps) {
    return (
      <h1
        className={
          "text-xl md:text-5xl text-neutral-900 font-[700] tracking-[-0.025em] " +
          className
        }
      >
        {children}
      </h1>
    );
  }
  
  export function SectionTitle({ children, className = "" }: HeadingProps) {
    return (
      <h2
        className={
          "text-base md:text-3xl text-neutral-900 font-[700] tracking-[-0.025em] " +
          className
        }
      >
        {children}
      </h2>
    );
  }