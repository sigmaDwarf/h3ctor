import TextLoop from './TextLoop';

const text = 'H3ctor.eth';

const Header = () => {
  return (
    <header className="w-full ">
      <TextLoop text={text} />
    </header>
  );
};

export default Header;
