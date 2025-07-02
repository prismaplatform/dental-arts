import SingleBlog from "@/components/blog/SingleBlog";
import Breadcrumb from "@/components/utils/Breadcrumb";
import React from "react";

const page = ({ params }) => {
  // Slug kinyerése a params-ból
  const { slug } = params;

  // Slug formázása (kötőjel helyett szóköz, első betű nagybetű)
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
        { label: "Blog", href: "/blog" },
        { label: formattedTitle, href: "/blog/my-blog-post", current: true },
      ]}
    />
    <SingleBlog/>
    </>
  );
};

export default page;
