import type { NextPage } from 'next';
import Head from 'next/head';

import styled from 'styled-components';
import Layout from '../components/Layout';
import NewsletterSignupForm from '../components/NewsletterSignUpForm';

const StyledDiv = styled.div`
  color: blue;
`;

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>Les matches de foot du jour | Statium</title>
        <meta
          name="description"
          content="Les calendriers, résultats et résumés du foot vu de France."
        />
        <link rel="icon" href="/favicon.ico" />
        {process.env.NODE_ENV === 'production' && (
          <script
            defer
            data-domain="statium.app"
            src="https://plausible.io/js/plausible.js"
          ></script>
        )}
      </Head>
      <h1>Les matches qui comptent</h1>
      <p>
        Statium guide les fans de foot qui vivent en France à ne pas rater les matches ou les
        highlights des compétitions françaises et les meilleures affiches des compétitions
        européennes.
      </p>
      <NewsletterSignupForm />
    </Layout>
  );
};

export default Home;
