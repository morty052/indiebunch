const Tag = ({ title }: { title: string }) => {
  return (
    <div className="max-w-max rounded-xl bg-gray-300 px-4 py-1">
      <p className="text-sm font-medium text-dark">{title}</p>
    </div>
  );
};

export default Tag;
