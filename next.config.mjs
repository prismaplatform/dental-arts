import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["tester10.prismaweb.ro"], 
  },
};

export default withNextIntl(nextConfig);
