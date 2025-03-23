import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

export default function SocialMediaIcons() {
  
   const whatsappNumber = "+923332682636"
  
  const icons = [
   
    { icon: faLinkedinIn, name: "LinkedIn", color: "text-[#0A66C2]", border: "border-[#0A66C2]" , link:"https://www.linkedin.com/in/sayyed-jalees/"},
    { icon: faGithub, name: "GitHub", color: "text-white", border: "border-white", link:"https://github.com/syedjalees" },
    { icon: faInstagram, name: "Instagram", color: "text-[#E1306C]", border: "border-[#E1306C]", link:"https://www.instagram.com/mr.jalees.0/?hl=en" },
    { icon: faTwitter, name: "Twitter", color: "text-[#1DA1F2]", border: "border-[#1DA1F2]", link:"https://x.com/isyedjan" },
    {
      icon: faWhatsapp,
      name: "WhatsApp",
      color: "text-[#25D366]",
      border: "border-[#25D366]",
      link: `https://wa.me/${whatsappNumber}`,
    },
  ]
  
  
  return (
    // Full screen container
    <div className="  mt-10 lg:flex lg:justify-start">
      {/* Icons container - made responsive with flex-wrap */}
      <div className=" flex flex-wrap justify-center gap-2  sm:gap-4 md:gap-6 lg:gap-8">
        {icons.map((social, idx) => (
          <a key={idx} href={social.link} target="_blank" className={`group no-underline text-center ${social.color}`}>
            {/* ICON SIZE IS SET HERE - This div controls the size of each icon container */}
            {/* Made responsive with different sizes for different screen sizes */}
            <div className=" relative  w-[40px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] mx-auto transition-transform duration-300 group-hover:-rotate-[35deg] group-hover:skew-x-[20deg]">
              {/* Layer 1 */}
              <span
                className={`absolute inset-0 w-full h-full border rounded-lg transition-all duration-300 box-border bg-transparent ${social.border} opacity-0 group-hover:opacity-20 group-hover:translate-x-[6px] group-hover:-translate-y-[6px]`}
              ></span>
              {/* Layer 2 */}
              <span
                className={`absolute inset-0 w-full h-full border rounded-lg transition-all duration-300 box-border bg-transparent ${social.border} opacity-0 group-hover:opacity-40 group-hover:translate-x-[12px] group-hover:-translate-y-[12px]`}
              ></span>
              {/* Layer 3 */}
              <span
                className={`absolute inset-0 w-full h-full border rounded-lg transition-all duration-300 box-border bg-transparent ${social.border} opacity-0 group-hover:opacity-60 group-hover:translate-x-[18px] group-hover:-translate-y-[18px]`}
              ></span>
              {/* Layer 4 */}
              <span
                className={`absolute inset-0 w-full h-full border rounded-lg transition-all duration-300 box-border bg-transparent ${social.border} opacity-0 group-hover:opacity-80 group-hover:translate-x-[24px] group-hover:-translate-y-[24px]`}
              ></span>
              {/* Base layer */}
              <span
                className={`absolute inset-0 w-full h-full border rounded-lg transition-all duration-300 box-border bg-transparent ${social.border}`}
              ></span>
              {/* Icon - Font size is set here */}
              <span className="absolute inset-0 flex justify-center items-center text-[18px] sm:text-[22px] md:text-[26px] leading-[45px] sm:leading-[50px] md:leading-[60px]">
                <FontAwesomeIcon icon={social.icon} />
              </span>
            </div>
            {/* Icon label - Font size is set here */}
            <div className="mt-2 text-xs sm:text-sm">{social.name}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

