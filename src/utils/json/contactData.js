// utils/json/contactData.js

import { FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";

const contactData = {
  subheading: "Let’s Connect",
  title: "Reach Us Anytime",
  description:
    "Whether you’re looking for a new website, a custom software solution, or digital marketing services, we’re here to help. Fill out the form below or reach out directly, and we’ll get back to you as soon as possible.",
  iconBox: [
    {
      id: 1,
      title: "Email",
      description: "hello@makersofcode.com",
      icon: FaMailBulk,
    },
    {
      id: 2,
      title: "Phone",
      description: "+91-8792810754",
      icon: FaPhoneVolume,
    },
    {
      id: 3,
      title: "Location",
      description: "15th Floor, Ocus Quantum, Sector 51, Gurgaon",
      icon: MdAddLocationAlt,
    },
  ],
  mapLink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.0364199919345!2d77.06615897450143!3d28.424644343492545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2277f766242f%3A0xc932b58d70526b94!2sOcus%20Quantum!5e1!3m2!1sen!2sin!4v1760608319520!5m2!1sen!2sin",
};

export default contactData;
