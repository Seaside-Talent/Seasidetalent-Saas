import { AppConfig } from '@/utils/AppConfig';

export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex flex-col items-start sm:items-center">
    <span className="bg-gradient-to-r from-seaside-600 to-seaside-700 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
      {!props.isTextHidden && AppConfig.name}
    </span>
    <span className="mt-0.5 text-xs font-medium text-gray-500 sm:mt-1 sm:text-sm">
      Healthcare Job Board
    </span>
  </div>
);
