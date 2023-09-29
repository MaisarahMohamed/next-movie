import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
    const router = useRouter();
    return ( 
        <nav>
            <div className='container'>
				<div className='page-title'><Link href="/">PcariMovie</Link></div>
                <div className={router.pathname === "/" ? "current-menu" : "menu"}><Link  href="/" key={1}>Home</Link></div>
                <div className={"menu"}><Link href="/" key={2}>Movies</Link></div>
                <div className={"menu"}><Link href="/" key={3}>TV Show</Link></div>
                <div className={"menu"}><Link href="/" key={4}>Video</Link></div>
                <div className={"menu"}><Link href="/" key={5}>FAQ</Link></div>
                <div className={"menu"}><Link href="/" key={6}>Pricing</Link></div>
                <div className={"menu"}><Link href="/" key={7}>Contact Us</Link></div>
                <div className={"menu"}><Link href="/search"><FiSearch/></Link></div>
                <div className={"menu"}><Link href="/">John Glich</Link></div>
			</div>
        </nav>
     );
}
 
export default NavBar;