import Sidebar from "@components/sidebar/Sidebar";
import Row from 'react-bootstrap/Row';
import Head from "next/head";

export default function Layout({ title = "Dashboard", sidebar, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Admin Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Row className='m-0 vh-100'>
          <Sidebar active={sidebar} />
          {children}
        </Row>
      </main>
    </>
  )
}
