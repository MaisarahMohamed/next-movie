import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
    const router = useRouter();
    return ( 
        <nav>
            <div className='container'>
				<Link className="page-title" href="/">PcariMovie</Link>
                <Link className={router.pathname === "/" ? "current-menu" : "menu"} href="/" key={1}>Home</Link>
                <Link className={router.pathname === "/movies" ? "current-menu" : "menu"} href="/movies" key={2}>Movies</Link>
                <Link className={router.pathname === "/tv-show" ? "current-menu" : "menu"} href="/tv-show" key={3}>TV Show</Link>
                <Link className={router.pathname === "/video" ? "current-menu" : "menu"} href="/video" key={4}>Video</Link>
                <Link className={router.pathname === "/faq" ? "current-menu" : "menu"} href="/faq" key={5}>FAQ</Link>
                <Link className={router.pathname === "/pricing" ? "current-menu" : "menu"} href="/pricing" key={6}>Pricing</Link>
                <Link className={router.pathname === "/contact-us" ? "current-menu" : "menu"} href="/contact-us" key={7}>Contact Us</Link>
				<Link className={router.pathname === "/search?search-by-theatre" ? "profile-search" : "menu"} href="/search?search-by-theatre">search</Link>
				<Link className={router.pathname === "/profile" ? "current-menu" : "profile-search"} href="/profile">John Glich</Link>
			</div>
        </nav>
     );
}
 
export default NavBar;