declare module '@splidejs/react-splide' {
    import { ReactNode } from 'react';
  
    interface SplideProps {
      options?: Record<string, any>;
      onActive?: (index: number) => void;
      onMoved?: (newIndex: number, oldIndex: number, direction: 'prev' | 'next') => void;
      children: ReactNode;
      className?: string;
    }
  
    export function Splide(props: SplideProps): JSX.Element;
    export function SplideSlide(props: { children: ReactNode }): JSX.Element;
  }
  