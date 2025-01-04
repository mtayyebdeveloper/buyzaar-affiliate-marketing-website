import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);  // To manage which question is open

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);  // Toggle the accordion
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions (FAQ)</h1>

      <div className="space-y-6">
        {/* Question 1 */}
        <div className="border-b pb-4">
          <div onClick={() => toggleAccordion(0)} className="cursor-pointer flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">1. What is Buyzaar?</h2>
            <i className={`fa-solid ${activeIndex === 0 ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl text-gray-800`}></i>
          </div>
          <div className={`transition-all duration-500 ${activeIndex === 0 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {activeIndex === 0 && (
              <p className="text-gray-700 mt-2">
                Buyzaar is an affiliate marketing website where we provide curated product recommendations to help you find the best deals from trusted brands. We earn a small commission when you make a purchase through our affiliate links, at no extra cost to you.
              </p>
            )}
          </div>
        </div>

        {/* Question 2 */}
        <div className="border-b pb-4">
          <div onClick={() => toggleAccordion(1)} className="cursor-pointer flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">2. How does affiliate marketing work?</h2>
            <i className={`fa-solid ${activeIndex === 1 ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl text-gray-800`}></i>
          </div>
          <div className={`transition-all duration-500 ${activeIndex === 1 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {activeIndex === 1 && (
              <p className="text-gray-700 mt-2">
                Affiliate marketing allows us to earn a commission when you make a purchase after clicking on a link on our website. These links direct you to a third-party retailer, and if you make a purchase, we earn a small commission at no extra cost to you.
              </p>
            )}
          </div>
        </div>

        {/* Question 3 */}
        <div className="border-b pb-4">
          <div onClick={() => toggleAccordion(2)} className="cursor-pointer flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">3. How do I make a purchase through Buyzaar?</h2>
            <i className={`fa-solid ${activeIndex === 2 ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl text-gray-800`}></i>
          </div>
          <div className={`transition-all duration-500 ${activeIndex === 2 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {activeIndex === 2 && (
              <p className="text-gray-700 mt-2">
                To make a purchase, simply click on any affiliate link on our website that redirects you to the product page of a retailer. You can then add the item to your cart and complete the purchase directly on their website.
              </p>
            )}
          </div>
        </div>

        {/* Question 4 */}
        <div className="border-b pb-4">
          <div onClick={() => toggleAccordion(3)} className="cursor-pointer flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">4. Do I pay more if I buy through an affiliate link?</h2>
            <i className={`fa-solid ${activeIndex === 3 ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl text-gray-800`}></i>
          </div>
          <div className={`transition-all duration-500 ${activeIndex === 3 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {activeIndex === 3 && (
              <p className="text-gray-700 mt-2">
                No, you won’t pay more when you make a purchase through an affiliate link. The price of the product is the same whether you click on our link or visit the retailer directly. In some cases, you may even get exclusive discounts or offers through our affiliate links.
              </p>
            )}
          </div>
        </div>

        {/* Question 5 */}
        <div className="border-b pb-4">
          <div onClick={() => toggleAccordion(4)} className="cursor-pointer flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">5. Are the product recommendations on Buyzaar trustworthy?</h2>
            <i className={`fa-solid ${activeIndex === 4 ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl text-gray-800`}></i>
          </div>
          <div className={`transition-all duration-500 ${activeIndex === 4 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {activeIndex === 4 && (
              <p className="text-gray-700 mt-2">
                Yes! We carefully research and curate products based on quality, value, and user experience. We only recommend products that we genuinely believe in, and our affiliate relationships do not influence our opinions or reviews.
              </p>
            )}
          </div>
        </div>

        {/* Question 6 */}
        <div className="border-b pb-4">
          <div onClick={() => toggleAccordion(5)} className="cursor-pointer flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">6. How can I contact Buyzaar for support?</h2>
            <i className={`fa-solid ${activeIndex === 5 ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl text-gray-800`}></i>
          </div>
          <div className={`transition-all duration-500 ${activeIndex === 5 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {activeIndex === 5 && (
              <p className="text-gray-700 mt-2">
                If you have any questions or concerns, feel free to reach out to us at <a href="mailto:support@buyzaar.com" className="text-blue-500 hover:text-blue-700">support@buyzaar.com</a>, and we’ll get back to you as soon as possible.
              </p>
            )}
          </div>
        </div>

        {/* Question 7 */}
        <div className="pb-4">
          <div onClick={() => toggleAccordion(6)} className="cursor-pointer flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">7. Can I trust Buyzaar's affiliate links?</h2>
            <i className={`fa-solid ${activeIndex === 6 ? 'fa-chevron-up' : 'fa-chevron-down'} text-xl text-gray-800`}></i>
          </div>
          <div className={`transition-all duration-500 ${activeIndex === 6 ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
            {activeIndex === 6 && (
              <p className="text-gray-700 mt-2">
                Yes, absolutely! We ensure that every affiliate link on Buyzaar leads to trusted retailers or brands that we have verified. Our goal is to provide you with high-quality product recommendations and make your shopping experience better.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* User Input Form */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Have More Questions?</h2>
        <form className="flex flex-col items-center">
          <textarea
            rows="4"
            className="border outline-none border-gray-300 rounded-lg p-2 mb-4 w-full max-w-xl"
            placeholder="Ask your question here..."
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}

export default FAQ;
