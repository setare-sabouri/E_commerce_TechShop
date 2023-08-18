import React, { useState, useEffect } from 'react';
const articles = [
  {
    title: 'Information',
    content: [
      'About Us',
      'About Zip',
      'Privacy Policy',
      'Search',
      'Terms',
      'Orders and Returns',
      'Contact Us',
      'Advanced Search',
      'NewsLetter Subscription',
    ],
  },
  {
    title: 'PC Parts',
    content: [
      'CPUS',
      'Add On Cards',
      'Hard Drives(Internal)',
      'Graphic Cards',
      'Keyboards / Mice',
      'Cases / Power Supplies / Cooling',
      'RAM (Memory)',
      'Software',
      'Speakers / Headers',
      'Motherboards',
    ],
  },
  {
    title: 'Desktop PCs',
    content: [
      'Custom PCs',
      'Servers',
      'MSI All-In-One PCs',
      'HP/Compaq PCs',
      'ASUS PCs',
      'Tecs PCs',
    ],
  },
  {
    title: 'Laptops',
    content: [
      'Everyday Use Notebooks',
      'MSI Workstation Series',
      'MSI Prestige Series',
      'Tablets and Pads',
      'Netbooks',
      'Infinity Gaming Notebooks',
    ],
  },
  {
    title: 'Address',
    content: [
      'Address:1234 Street Address City Address,1234',
      'Phones:(00) 12345678',
      'We are Open : Monday-Thursday: 9:00 AM - 5:30 PM',
      'Friday:9:00 AM - 6:00 PM ',
      'Saturday: 11:00 AM - 5:00 PM',
      'E-mail: shop@email.com',
    ],
  },
];
const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="bg-black text-white flex flex-col gap-2 px-5 py-4 md:px-20">
      <section className="p-4 grid grid-cols-1 gap-1 md:grid-cols-2">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p>Be the first to hear about the latest offers.</p>
        </div>

        <div className="flex gap-2">
          <input
            type="email"
            className="border border-gray-400 rounded px-2 py-1 flex-grow-0 md:flex-grow "
            placeholder="Enter your email"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-1">
            Subscribe
          </button>
        </div>
      </section>

      <section className="p-4">
        <div className="grid grid-cols-1  md:grid-cols-5 gap-2">
          {articles.map((article, index) => (
            <article key={index} className="mb-4 md:mb-0">

              {isWideScreen && (
                <div>
                  <h3 className="text-lg font-bold mb-2 cursor-pointer">
                    {article.title}
                  </h3>
                  <ul>
                    {article.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {!isWideScreen && (
                <div>
                  <h3
                    className="text-lg font-bold mb-2 cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    {article.title}
                  </h3>
                  {activeAccordion === index && (
                    <ul>
                      {article.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-5 items-center place-content-between">
        <ul className="flex gap-2 col-span-1">
          <li>
            <a href="#">
              <img src="footer/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="footer/instagram.png" alt="Instagram" />
            </a>
          </li>
        </ul>
        <div className="flex col-span-3 justify-center gap-2">
          <img src="footer/paypal.png" alt="PayPal" />
          <img src="footer/visa.png" alt="Visa card" />
          <img src="footer/maestro.png" alt="Master Card" />
          <img src="footer/discover.png" alt="Discover card" />
          <img src="footer/american-express.png" alt="American express card" />
        </div>
        <div className="flex col-span-1 justify-end">
          <p>&copy; {new Date().getFullYear()} TechShop</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
