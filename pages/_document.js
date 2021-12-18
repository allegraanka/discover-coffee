import Document, { Html, Head, Main, NextScript } from 'next/document';

class appDocument extends Document {
    render() {
        return <Html lang='en'>
            <Head>
                <link
                    rel='preload'
                    href='/fonts/ReadexPro-Bold.ttf'
                    as='font'
                    crossOrigin='anonymous'
                ></link>
                <link
                    rel='preload'
                    href='/fonts/ReadexPro-ExtraLight.ttf'
                    as='font'
                    crossOrigin='anonymous'
                ></link>
                <link
                    rel='preload'
                    href='/fonts/ReadexPro-Medium.ttf'
                    as='font'
                    crossOrigin='anonymous'
                ></link>
                <link
                    rel='preload'
                    href='/fonts/ReadexPro-Regular.ttf'
                    as='font'
                    crossOrigin='anonymous'
                ></link>
            </Head>
            <body>
                <Main></Main>
                <NextScript />
            </body>
        </Html>
    }
}

export default appDocument;