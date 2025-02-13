import React from 'react'
import Image from 'next/image'
import ServiceBlock from './ServiceBlock'
function Services() {
  return (
    <>
       <div class="dark:bg-gray-900">
        <section class="container mx-auto py-20">
          <div class="flex flex-col items-center justify-center">
            <div class="text-gray-800 text-center text-3xl font-black leading-10 dark:text-white md:text-4xl lg:text-5xl">
              <h1>Our Web Building Tech Stacks</h1>
            </div>
            <div class="grid items-center justify-center gap-y-20 gap-x-16 pt-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:px-10 xl:gap-y-16 xl:gap-x-0 xl:px-0">
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg1.svg"}
                title={"Frontend"}
                description={"Angular js, ASP.net MVC, Winforms, Razor Views, jQuery/Javascript, HTML, CSS, Bootstrap, HTML 5, CSS3."}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg2.svg"}
                title={"Backend"}
                description={"NodeJs,Python, VB.Net"}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg3.svg"}
                title={"Databases"}
                description={"Microsoft SQL Server, MY SQL, PostgreSQL, Mongo DB."}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg4.svg"}
                title={"Frameworks"}
                description={"ReactJs, NextJs, VueJs, NuxtJs, AmgularJS, and Django"}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg5.svg"}
                title={"Services"}
                description={"Microsoft .Net/.Net core Web API, RESTful services, Web Services, WCF."}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg6.svg"}
                title={"Reporting"}
                description={"Microsoft SSRS, RDLC, Crystal Reports."}
                />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Services
