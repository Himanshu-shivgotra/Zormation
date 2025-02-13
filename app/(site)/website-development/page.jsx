import Breadcrumb from "@/components/Common/Breadcrump";
import Services from "@/components/Common/Services";
import WhyChoose from "@/components/Common/WhyChoose";

const websiteDevelopment = () => {
  return (
    <>
      <Breadcrumb
        pageName="Website Development"
        description="
        Website development involves the creation and maintenance of websites, which can range from simple static pages to complex interactive platforms. It includes tasks such as web design, coding, testing, and deployment, with the goal of creating a functional and visually appealing website that meets the needs of its intended audience. Effective website development requires a combination of technical skills, creativity, and attention to detail."
      />
     <Services/>
      <WhyChoose/>
    </>
  );
};

export default websiteDevelopment;
