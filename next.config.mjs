import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["adminpanel.dentalarts.hu"], 
  },
};

export default withNextIntl(nextConfig);
