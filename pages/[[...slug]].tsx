import axios from 'axios'
import { GetServerSideProps } from "next"
import Head from 'next/head'
import Script from 'next/script'
import { Container, Row } from 'react-bootstrap'
import { IWebsite, IPage } from 'WNTR/interfaces'
import { Sidebar, Main, Footer } from 'WNTR/structures'

export default function Index({ website, page }: { website: IWebsite, page: IPage }) {

  return (
    <>
      <Head>
        <title>{(page.metaData.title ?? page.name) + ' | ' + website.name}</title>
        <meta name="description" content={page.metaData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="google-site-verification" content="4IefcvdWLw_tHrKPDH2gK0du0cei_wm2BoS7bxBmcqQ" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={(page.metaData.title ?? page.name) + ' | ' + website.name} />
        <meta property="og:description" content={page.metaData.description} />
        <meta property="og:url" content={page.url} />
        <meta property="og:image" content={`${page.metaData.image}?mode=crop&width=500&height=500`} />
        <meta name="site_name" property="og:site_name" content={website.name} />
        <meta name="twitter:site" content="CarbonFireEngineering" />
        <meta name="twitter:site:id" content="CarbonFireEngineering" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.metaData.title ?? page.name + ' | ' + website.name} />
        <meta name="twitter:description" content={page.metaData.description} />
        <meta name="twitter:image" content={`${page.metaData.image}?mode=crop&width=500&height=500`} />
        <meta name="environment" content={process.env.NEXT_PUBLIC_VERCEL_ENV} />
        {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' ? <meta name="robots" content="noindex,follow" /> : null }
        <link rel="canonical" href={page.url}></link>
      </Head>
      <Container fluid className='h-100'>
        <Row className='h-100'>
          <Sidebar {...website} />
          <Main {...page} />
          <Footer {...website} />
        </Row>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let path = "/";
  [params?.slug].map((slug) => path += slug?.toString().replace(",", "/") + "/");

  axios.defaults.headers.method = 'get';
  axios.defaults.baseURL = process.env.API_HOST;
  axios.defaults.headers.common['ApiKey'] = process.env.API_KEY;

  const website = await axios({ url: '/api/website' });
  const page = await axios({ url: `/api/page/${params?.slug && website.data.routes[path] !== undefined ? website.data.routes[path] : website.data.id}` });

  return { props: { website: website.data, page: page.data } }
}