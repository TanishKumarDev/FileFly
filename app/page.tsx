// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Title + Description */}
      <header className="space-y-3 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug text-gray-900">
          Free Unlimited File Converter
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Convert unlimited files—images, audio, and videos—right in your browser with{' '}
          <span className="font-semibold text-blue-600">FileFly</span>. No data stored. Your privacy stays yours, always.
        </p>
      </header>

      {/* Upload Box */}
      <section aria-label="File upload section">
        <Dropzone />
      </section>
    </main>
  );
}
