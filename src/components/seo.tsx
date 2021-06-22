/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetaData";

interface SeoMetatags {
  name: string;
  property?: string;
  content?: string;
}

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: SeoMetatags[];
  title: string;
}

const Seo: React.FC<SeoProps> = ({
  description,
  lang = `en`,
  meta = [],
  title,
}) => {
  const siteMetadata = useSiteMetadata();

  const pageTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title;
  const pageDescription = description || siteMetadata.description;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {meta.map((t) => {
        return (
          <>
            {t.name && <meta name={t.name} content={t.content} />}
            {t.property && <meta property={t.property} content={t.content} />}
          </>
        );
      })}
    </Helmet>
  );
};

export default Seo;
