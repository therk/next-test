import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Test</title>
      </Head>

      <main>
        <h1>
          Environment Variables: 
          {process.env.NEXT_PUBLIC_TEST_VAR}
        </h1>
      </main>
    </div>
    )
    
}
