import SingleService from "@/components/services/SingleService";
import Breadcrumb from "@/components/utils/Breadcrumb";

const page = ({ params }) => {
  const { slug } = params;

  const formatSlug = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedTitle = formatSlug(slug);

  return (
    <>
      <Breadcrumb
        title={formattedTitle}
        breadcrumbs={[
          { label: "Főoldal", href: "/" },
          { label: "Szolgáltatások", href: "/services" },
          { label: formattedTitle, href: `/services/${slug}`, current: true },
        ]}
      />
      <SingleService slug={slug} />
    </>
  );
};


export default page;