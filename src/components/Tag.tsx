const Tag = ({ title }: { title: string }) => {
  return (
    <div className="max-w-max rounded-2xl bg-gray-300 px-4 py-2">
      <p className="text-dark text-sm font-medium">{title}</p>
    </div>
  );
};

export default Tag;
