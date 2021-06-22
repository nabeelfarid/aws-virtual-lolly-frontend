import { useStaticQuery, graphql } from "gatsby";

interface SiteMetaData {
  title: string;
  subtitle: string;
  description: string;
  slogan: string;
  author: string;
  repo: string;
  siteUrl: string;
}

const useSiteMetadata = (): SiteMetaData => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            subtitle
            description
            slogan
            author
            repo
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
