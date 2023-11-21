'use client';

import Header from '@/components/Header';
import NewsletterSignupForm from '@/components/NewsletterSignUpForm';
import WhyThisNewsletter from '@/components/WhyThisNewsletter';
import type { NextPage } from 'next';

import styled from 'styled-components';

const StyledDiv = styled.div`
  color: blue;
`;

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="markdown-body">
        <h1>⚽️ Les matches qui comptent</h1>
        <p>
          Statium guide les fans de foot qui vivent en France à ne pas rater les matches ou les
          highlights des compétitions françaises et les meilleures affiches des compétitions
          européennes.
        </p>
        <NewsletterSignupForm />
        <WhyThisNewsletter />
      </div>
    </>
  );
};

export default Home;
