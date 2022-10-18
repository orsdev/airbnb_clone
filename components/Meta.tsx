import Head from "next/head";
import { DefaultSeo } from "next-seo";

const Meta = ({ title }: { title: string }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        title={`${title} | Vacation Homes &amp; Condo Rentals - Airbnb`}
        openGraph={{
          title: `${title} | Vacation Homes &amp; Condo Rentals - Airbnb`,
          type: "website",
          locale: "en-US",
          site_name: `${title} | Vacation Homes &amp; Condo Rentals - Airbnb`,
        }}
      />
    </>
  );
};

export default Meta;
