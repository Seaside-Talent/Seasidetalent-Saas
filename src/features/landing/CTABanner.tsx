export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div className="rounded-xl bg-seaside-100 px-6 py-10 text-center">
    <div className="text-3xl font-bold text-seaside-900">
      {props.title}
    </div>

    <div className="mt-2 text-lg font-medium text-seaside-700">
      {props.description}
    </div>

    <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
      {props.buttons}
    </div>
  </div>
);
