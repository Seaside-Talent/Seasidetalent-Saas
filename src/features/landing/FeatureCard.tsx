export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex h-64 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-seaside-100 bg-seaside-50 p-6 py-10 text-seaside-800 shadow-sm transition-shadow hover:shadow-md">
    <div className="mb-2 flex items-center justify-center">
      <div className="flex size-14 items-center justify-center rounded-xl bg-seaside-100 py-4">
        <span className="text-seaside-600">{props.icon}</span>
      </div>
    </div>
    <div className="mt-2 text-center text-xl font-bold text-seaside-900">{props.title}</div>
    <div className="my-2 w-8 border-t-2 border-seaside-300" />
    <div className="mt-2 text-center text-base leading-relaxed text-seaside-700">{props.children}</div>
  </div>
);
