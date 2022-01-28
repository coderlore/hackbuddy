import React from 'react';
import Page from '../components/Page';
import Head from 'next/head';
export default function SpeakForUs() {
  return (
    <Page>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Speak For Us</div>
    </Page>
  );
}
