import Logo from '@components/ui/icons/logo';

const Header = () => {
  return (
    <header style={{ padding: '2rem' }}>
      <a href={'https://ecological.earth'}>
        <Logo style={{ height: 10 }} />
      </a>
    </header>
  );
};

export default Header;
