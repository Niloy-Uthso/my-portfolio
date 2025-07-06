import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Footer = () => {
    const navigate = useNavigate();

const handleScrollTo = (sectionId) => {
  navigate('/', { state: { scrollTo: sectionId } });
};
  return (
    <footer className="bg-neutral text-neutral-content py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold mb-2">NSU</h2>
          <p className="text-sm leading-relaxed">
            © {new Date().getFullYear()} Niloy Sarkar Uthso <br />
            Passionate MERN Stack Developer
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="footer-title mb-2">Social</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/Niloy-Uthso"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/niloy-sarkar-uthso-91b053372/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/nilnineteenforty.oynineteenfortysix?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaFacebook />
            </a>
            <a
              href="mailto:niloyuthso16@gmail.com"
              className="hover:text-primary transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
           <li><button onClick={() => handleScrollTo('skills')} className="link link-hover">Skills</button></li>
<li><button onClick={() => handleScrollTo('education')} className="link link-hover">Education</button></li>
<li><button onClick={() => handleScrollTo('projects')} className="link link-hover">Projects</button></li>
<li><button onClick={() => handleScrollTo('contact')} className="link link-hover">Contact</button></li>

          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
