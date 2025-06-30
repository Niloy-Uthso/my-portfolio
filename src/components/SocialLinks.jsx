import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/Niloy-Uthso',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/niloy-sarkar-uthso-91b053372/',
      label: 'LinkedIn',
    },
    {
      icon: <FaFacebook />,
      link: 'https://www.facebook.com/nilnineteenforty.oynineteenfortysix?locale=fr_FR',
      label: 'Facebook',
    },
    {
      icon: <FaTwitter />,
      link: 'https://x.com/NiloyUthso',
      label: 'Twitter',
    },
  ];

  return (
    <div className="flex gap-4 mt-6">
      {socials.map(({ icon, link, label }) => (
        <a
          key={label}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-2xl text-base-content hover:text-primary transition-transform duration-300 hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
