import youtube from '../assets/youtube_icon.png';
import twitter from '../assets/twitter_icon.png';
import facebook from '../assets/facebook_icon.png';
import instagram from '../assets/instagram_icon.png';

function Footer() {
  const footerThings = [
    'Audio Description', 'Help Centre', 'Gift Cards', 'Investor Relations',
    'Media Centre', 'Jobs', 'Terms of Use', 'Privacy', 'Legal Notices',
    'Cookie Preferences', 'Corporate Information', 'Contact Us'
  ];

  return (
    <div className="px-[4%] max-w-[1000px] mx-auto my-0 text-gray-300">
      {/* Social Media Icons */}
      <div className="flex gap-5 mt-20">
        <img src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80" />
        <img src={instagram} alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80" />
        <img src={twitter} alt="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-80" />
        <img src={youtube} alt="YouTube" className="w-6 h-6 cursor-pointer hover:opacity-80" />
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 mb-8 text-sm">
        {footerThings.map((data, index) => (
          <p key={index} className="hover:underline cursor-pointer">{data}</p>
        ))}
      </div>

      {/* Service Code Button */}
      <button className="border border-gray-400 px-3 py-1 text-sm hover:bg-gray-700 rounded">
        Service Code
      </button>

      {/* Netflix Trademark */}
      <p className="mt-10 text-sm opacity-90">© 2024 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
