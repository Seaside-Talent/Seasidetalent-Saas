import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-seaside-400 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-seaside-600 text-white hover:bg-seaside-700',
        secondary:
          'border-transparent bg-seaside-100 text-seaside-800 hover:bg-seaside-200',
        destructive:
          'border-transparent bg-red-600 text-white hover:bg-red-700',
        outline: 'border-seaside-600 text-seaside-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
