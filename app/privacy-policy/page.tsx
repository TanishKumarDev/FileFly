export default function PrivacyPolicy() {
  return (
    <div className="space-y-8 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto pb-8 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Privacy Policy</h1>

      <p>
        At FileFly, your privacy and data security are our top priorities. Our project is designed to securely convert your files on the client side, 
        so your data never leaves your device unless explicitly sent to our server for processing.
      </p>

      <section>
        <h2 className="text-xl md:text-2xl font-medium mb-2">1. What Data We Handle</h2>
        <p>
          We only handle the files you upload for conversion. The conversion happens primarily on your device to minimize data transfer and 
          reduce privacy risks. Any file data sent to our server is encrypted and used solely for the conversion process.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-medium mb-2">2. How We Protect Your Privacy</h2>
        <p>
          We do not store, sell, or share your files or data with any third parties. Our system is built to limit data exposure and protect against misuse. 
          After conversion, your files and any temporary data are deleted from our servers promptly.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-medium mb-2">3. Client-Side Security</h2>
        <p>
          Most of the file processing happens locally in your browser to keep your data private. This approach prevents unnecessary transmission of sensitive data over the internet.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-medium mb-2">4. Cookies & Tracking</h2>
        <p>
          We use minimal tracking, only for analytics to improve your experience. No personal or file data is tracked or stored.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-medium mb-2">5. Your Control</h2>
        <p>
          You control which files you upload and convert. If you have any concerns about your data privacy, feel free to reach out.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-medium mb-2">6. Contact Us</h2>
        <p>
          Questions or concerns? Contact us at <a href="mailto:tanish.kumar.contact@gmail.com" className="text-indigo-600 underline">tanish.kumar.contact@gmail.com</a>.
        </p>
      </section>

      <p className="mt-6">
        By using FileFly, you trust us with your data privacy. We commit to respecting that trust and keeping your information secure.
      </p>
    </div>
  );
}
