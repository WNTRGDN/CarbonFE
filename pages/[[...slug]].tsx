import axios from 'axios'
import { GetServerSideProps } from "next"
import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'
import { IWebsite, IPage } from 'WNTR/interfaces'
import { Sidebar, Main } from 'WNTR/structures'

export default function Index({ website, page }: { website: IWebsite, page: IPage }) {
  console.log(website)
  console.log(page)

  return (
    <>
      <Head>
        <title>{(page.metaData.title ?? page.name) + ' | ' + website.name}</title>
        <meta name="description" content={page.metaData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={(page.metaData.title ?? page.name) + ' | ' + website.name} />
        <meta property="og:description" content={page.metaData.description} />
        <meta property="og:url" content={page.url} />
        <meta property="og:image" content={`${page.metaData.image}?mode=crop&width=500&height=500`} />
        <meta name="site_name" property="og:site_name" content={website.name} />
        <meta name="fb:admins" property="fb:admins" content="100000426992446" />
        <meta name="twitter:site" content="EnvisionCarpet" />
        <meta name="twitter:site:id" content="EnvisionCarpet" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.metaData.title ?? page.name + ' | ' + website.name} />
        <meta name="twitter:description" content={page.metaData.description} />
        <meta name="twitter:image" content={`${page.metaData.image}?mode=crop&width=500&height=500`} />
        <link rel="canonical" href={page.url}></link>
      </Head>
      <Container fluid className='h-100'>
        <Row className='h-100'>
          <Sidebar {...website} />
          <Main {...page} />
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