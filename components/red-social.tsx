import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

interface InputProps {
  href: string;
  icono: string;
}

function RedSocial({ href, icono }: InputProps) {
  return (
    <div className="flex justify-items-center">
      <a href={href}>
        {icono === 'GitHub' ? <SlSocialGithub className="w-8 h-8 bg-green-300 rounded-full"></SlSocialGithub> : null}
        {icono === 'Linkedin' ? <SlSocialLinkedin className="w-8 h-8 bg-green-300 rounded-full"></SlSocialLinkedin> : null}
        {icono === 'Facebook' ? <SlSocialFacebook className="w-8 h-8 bg-green-300 rounded-full"></SlSocialFacebook> : null}
        {icono === 'Instagram' ? <SlSocialInstagram className="w-8 h-8 bg-green-300 rounded-full"></SlSocialInstagram> : null}
      </a>
    </div>
  );
}

export { RedSocial };