export const StickyBanner = (props: { children: React.ReactNode }) => (
  <div className="sticky top-0 z-50 bg-seaside-600 p-4 text-center text-lg font-semibold text-white [&_a:hover]:text-seaside-200 [&_a]:text-white [&_a]:underline">
    {props.children}
  </div>
);
