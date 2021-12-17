import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const CoffeeShop = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{ router.query.id }</title>
            </Head>
            <div>Coffee shop page { router.query.id }</div>
            <Link href='/'>
                <a>Back to home</a>
            </Link>
        </>
    );
}

export default CoffeeShop;