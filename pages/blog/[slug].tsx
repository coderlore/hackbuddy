import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { Container, Row, Col } from 'react-bootstrap';
import 'highlight.js/styles/github-dark-dimmed.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import Image from 'next/image';
import Page from '../../components/Page';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';

export default function Blogs({ post, posts, preview }) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Page>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="blog">
        <h1 className={`mt-5 mb-5 text-center`}>{post.title}</h1>
        <div>
          {post.featuredImage && (
            <div className={`text-center`}>
              <Image
                src={post.featuredImage.node.sourceUrl}
                width={`1080`}
                height={`480`}
              />
            </div>
          )}
        </div>
        <Container>
          <Row>
            <Col>
              <div
                className="mt-5 mb-5"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Page>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  const paths = allPosts.edges.map(({ node }) => `/blog/${node.slug}` || []);

  return {
    paths,
    fallback: true,
  };
}
