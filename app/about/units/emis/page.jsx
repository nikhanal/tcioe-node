import AboutComponent from "../../../(research_facilities)/AboutComponent";

import emis_img from "/assets/units/emis.png";
const data = {
  heading: "EMIS Unit",
  body_text: `Established in 2016, the EMIS Unit at Thapathali Campus has significantly advanced IT operations and infrastructure. Their achievements include implementing a QR-based ID card and character certificate system for students, enhancing Wi-Fi bandwidth from 50 to 85 Mbps without extra cost, and expanding Wi-Fi coverage to 31 campus areas. They also improved server performance by increasing server RAM from 4 to 18 GB and installing a NAS system. The campus website software was upgraded, and a new campus email system (@tcioe.edu.np) was introduced for all staff and students. A Wi-Fi hotspot capable of handling 3000 users was created, while the server room received air conditioning and a power backup system. For security, the CCTV system was upgraded to IP-based NVR, and 41 additional cameras were installed. The unit also manages the ERA-SOFT software for educational management, which allows online admissions. Overall, the EMIS unit has played a crucial role in digitalizing campus operations, boosting security, and enhancing student and staff services.`,
  img: emis_img,
};

export default function page() {
  return (
    <>
      <AboutComponent
        heading={data.heading}
        body_text={data.body_text}
        img={data.img}
      />
    </>
  );
}