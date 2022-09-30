import Image from 'next/image'; 
import Link from 'next/link';

const footerLinks = [
    {
        icon: 'https://img.icons8.com/ios-glyphs/24/ECF0F1/linkedin-circled--v1.png',
        name: 'LinkedIn',
        webAddress: 'https://www.linkedin.com/in/ish-suarez/'
    },
    {
        icon: 'https://img.icons8.com/ios-glyphs/24/ECF0F1/github.png',
        name: 'GitHub',
        webAddress: 'https://github.com/ish-suarez'
    },
    {
        icon: 'https://img.icons8.com/ios-glyphs/24/ECF0F1/youtube--v1.png',
        name: 'Youtube',
        webAddress: 'https://www.youtube.com/channel/UCa8O8mEXoEVJ-FK81j_p3Pg'
    }
];

const FooterLink = ({ to, children }) => (
    <a href={to} target={'_blank'} rel='noreferrer' >
        {children}
    </a>
)

const SocialMedia = () => (
    <div className='px-3'>
        {footerLinks.map(({icon, name, webAddress}) => (
            <FooterLink key={name} to={webAddress}>
                <Image priority className='cursor-pointer hover:scale-105' src={icon} width={24} height={24} alt={name} />
            </FooterLink>
        ))}
    </div>
);


export default function Footer() {
    return(
        <footer className='flex self-end justify-end z-20 w-full py-2 max-w-sm'>
            <SocialMedia />
        </footer>
    )
}