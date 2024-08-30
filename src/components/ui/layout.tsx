const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-neutral-900">
      <div className="max-w-screen-2xl 2xl:mx-auto">{children}</div>
    </main>
  );
};

export default Layout;
