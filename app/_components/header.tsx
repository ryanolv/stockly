interface HeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <div className="mt-8 flex items-end justify-between">
      <div className="space-y-2">
        <span>{subtitle}</span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Header;
