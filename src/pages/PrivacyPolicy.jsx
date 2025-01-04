import React from 'react'

function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700">
          At Buyzaar, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website and interact with our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
        <p className="text-gray-700">
          We may collect personal information from you when you visit our website, create an account, or use our services. The types of information we collect include:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Personal Identification Information (e.g., name, email address, phone number)</li>
          <li>Technical Data (e.g., IP address, browser type, operating system)</li>
          <li>Usage Data (e.g., pages visited, time spent on the website)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-gray-700">
          We use your personal information for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>To personalize your experience on Buyzaar.</li>
          <li>To send you newsletters, updates, or promotional offers (if you have opted in).</li>
          <li>To analyze website usage and improve our services.</li>
          <li>To respond to customer service requests and support needs.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
        <p className="text-gray-700">
          We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that allow us to remember your preferences and behavior.
        </p>
        <p className="text-gray-700">
          You can control cookie settings through your browser, but please note that disabling cookies may affect your ability to use certain features of our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
        <p className="text-gray-700">
          Buyzaar may use third-party services, including affiliate links and advertising networks, which may collect and use your information for marketing purposes. We recommend reviewing the privacy policies of these third-party services before interacting with their content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Data Security</h2>
        <p className="text-gray-700">
          We implement a variety of security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
        <p className="text-gray-700">
          You have the right to access, correct, or delete your personal information that we store. If you wish to exercise any of these rights, please contact us at support@buyzaar.com.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with the updated date. We encourage you to review this policy periodically for any updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="text-gray-700">Email: support@buyzaar.com</p>
      </section>
    </div>
  );
}

export default PrivacyPolicy