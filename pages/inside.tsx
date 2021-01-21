import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'

export default function Inside() {
    return (
        <>
            <Head>
                <title>HackBuddy Inside Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Header />
                <Container>
                    <h2>Container Page</h2>
                </Container>
                <Footer />
            </div>
        </>
    )
}