import * as React from 'react';
import Layout from '../components/layout';

const HeroPage = ({ pageContext: { id, title, content } }) => {
  // console.log('*** props', pageContext);
  return (
    <Layout pageTitle={title}>
      <p>{content}</p>
    </Layout>
  );
};

export default HeroPage;
