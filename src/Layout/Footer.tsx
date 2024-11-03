import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Article {
  title: string;
  content: string[];
}

const articles: Article[] = [
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
      'Newsletter Subscription',
    ],
  },
  {
    title: 'PC Parts',
    content: [
      'CPUs',
      'Add On Cards',
      'Hard Drives (Internal)',
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
      'Address: 1234 Street Address, City Address, 1234',
      'Phones: (00) 12345678',
      'Open: Mon-Thu: 9:00 AM - 5:30 PM',
      'Fri: 9:00 AM - 6:00 PM',
      'Sat: 11:00 AM - 5:00 PM',
      'Email: shop@email.com',
    ],
  },
];

const Footer: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
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
          <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p>Be the first to hear about the latest offers.</p>
        </div>
        <div className="flex gap-2">
          <input
            type="email"
            className="border border-gray-400 rounded px-2 py-1 flex-grow-0 md:flex-grow"
            placeholder="Enter your email"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-1">
            Subscribe
          </button>
        </div>
      </section>

      <section className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {articles.map((article, index) => (
            <article key={index} className="mb-4 md:mb-0">
              {isWideScreen ? (
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
              ) : (
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
              <Image width={25} height={25} src="/footer/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image width={25} height={25} src="/footer/instagram.png" alt="Instagram" />
            </a>
          </li>
        </ul>
        <div className="flex col-span-3 justify-center gap-2">
          <Image width={35} height={25} src="/footer/paypal.png" alt="PayPal" />
          <Image width={35} height={25} src="/footer/visa.png" alt="Visa card" />
          <Image width={35} height={25} src="/footer/maestro.png" alt="Master Card" />
          <Image width={35} height={25} src="/footer/discover.png" alt="Discover card" />
          <Image width={35} height={25} src="/footer/american-express.png" alt="American express card" />
        </div>
        <div className="flex col-span-1 justify-end">
          <p>&copy; {new Date().getFullYear()} TechShop</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
