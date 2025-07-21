import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-seaside-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-seaside-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-seaside-600 text-white hover:bg-seaside-700',
        destructive:
          'bg-red-600 text-white hover:bg-red-700',
        outline:
          'border border-seaside-600 bg-seaside-50 text-seaside-600 hover:bg-seaside-100 hover:text-seaside-800',
        secondary:
          'bg-seaside-100 text-seaside-800 hover:bg-seaside-200',
        ghost: 'hover:bg-seaside-50 hover:text-seaside-700',
        link: 'text-seaside-600 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
