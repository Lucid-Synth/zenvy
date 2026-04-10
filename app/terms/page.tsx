import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/*  Back Button */}
        <div className="mb-8">
          <Link
            href="/signin"
            className="text-xs text-zinc-400 hover:text-white transition hover:-translate-x-0.5 inline-block"
          >
            ← Back to Sign In
          </Link>
        </div>

        {/*  Title */}
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Terms & Conditions
        </h1>

        <p className="text-xs text-zinc-500 mb-8">
          Last updated: April 2026
        </p>

        {/* Content */}
        <div className="space-y-7 text-sm text-zinc-400 leading-relaxed">

          <p>
            By accessing or using this service, you agree to these terms. If you do not agree, please discontinue use.
          </p>

          <section>
            <h2 className="text-white font-medium mb-1">
              Use of Service
            </h2>
            <p>
              This service allows you to upload and process images. You agree to use it only for lawful purposes and in compliance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-1">
              User Content
            </h2>
            <p>
              You retain ownership of any images you upload. By using the service, you grant permission to process your content solely for providing functionality.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-1">
              Data & Storage
            </h2>
            <p>
              Files may be processed using third-party infrastructure. We do not guarantee long-term storage and may delete content at any time.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-1">
              Prohibited Use
            </h2>
            <p>
              You agree not to upload unlawful, harmful, or infringing content.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-1">
              Availability
            </h2>
            <p>
              We do not guarantee uninterrupted service. Features may change or be discontinued at any time.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-1">
              Limitation of Liability
            </h2>
            <p>
              This service is provided “as is” without warranties. We are not liable for any damages arising from its use.
            </p>
          </section>

          <section>
            <h2 className="text-white font-medium mb-1">
              Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use means acceptance of the updated terms.
            </p>
          </section>

         
          <div className="pt-6 border-t border-zinc-800 text-xs text-zinc-500">
            <p>Contact: dev.lucidsynth@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  );
}