import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <nav>
      <button onClick={() => navigateTo('/about')}>Welcome my about page</button>
      <button onClick={() => navigateTo('/contact')}>contact us on 03446752198</button>
      <button onClick={() => navigateTo('/footer')}>Stay connected</button>
    </nav>
  );
};

export default Navbar;
