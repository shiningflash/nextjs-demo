import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter();

    const handlePlaceOrderClick = () => {
        console.log('Place Order clicked!!');
        router.push('/product');
    }

    return (
        <div>
            <h1>Homepage</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/product'>
                <a>Product</a>
            </Link>
            <button onClick={handlePlaceOrderClick}>
                Place Order
            </button>
        </div>
    )
}

export default Home;