import React, { useState } from 'react';

const Footer = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    return (
        <footer className="bg-gray-900 text-white">

            <section className="p-4 grid  grid-cols-1 md:grid-cols-2">
                <div className='flex flex-col'>
                    <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
                    <p>Be the first to hear about the latest offers.</p>
                </div>

                <div className="flex gap-2">
                    <input
                        type="email"
                        className="border border-gray-400 rounded px-2 py-1 flex-grow "
                        placeholder="Enter your email"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-1">
                        Subscribe
                    </button>
                </div>
            </section>


            <section className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                    <article className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2 cursor-pointer" onClick={() => toggleAccordion(1)} >
                            Information
                        </h3>
                        {activeAccordion === 1 && (
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        )}
                    </article>
                    <article className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2 cursor-pointer" onClick={() => toggleAccordion(2)} >
                            PC Parts
                        </h3>
                        {activeAccordion === 2 && (
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        )}
                    </article>
                    <article className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2 cursor-pointer" onClick={() => toggleAccordion(3)} >
                            Desktop Parts
                        </h3>
                        {activeAccordion === 3 && (
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        )}
                    </article>
                    <article className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2 cursor-pointer" onClick={() => toggleAccordion(4)} >
                            Laptops
                        </h3>
                        {activeAccordion === 4 && (
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        )}
                    </article>
                    <article className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2 cursor-pointer" onClick={() => toggleAccordion(5)} >
                            Address
                        </h3>
                        {activeAccordion === 5 && (
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        )}
                    </article>
                </div>
            </section>


            <section className="flex justify-between items-center p-4">
                <ul className="flex space-x-4">
                    <li><a href="#"><img src="facebook-icon.png" alt="Facebook" /></a></li>
                    <li><a href="#"><img src="twitter-icon.png" alt="Twitter" /></a></li>
                    <li><a href="#"><img src="instagram-icon.png" alt="Instagram" /></a></li>
                </ul>
                <div className="flex space-x-4">
                    <img src="visa-card.png" alt="Visa" />
                    <img src="mastercard.png" alt="MasterCard" />
                    <img src="paypal.png" alt="PayPal" />
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} TechShop</p>
                </div>
            </section>



        </footer>
    );
}

export default Footer;
