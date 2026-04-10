export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">

        <p>
          By accessing or using this service, you agree to these terms. If you do not agree, please discontinue use.
        </p>

        <div>
          <h2 className="font-medium text-zinc-900 dark:text-white mb-1">
            Use of Service
          </h2>
          <p>
            This service allows you to upload and process images. You agree to use it only for lawful purposes and in compliance with all applicable laws.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-zinc-900 dark:text-white mb-1">
            User Content
          </h2>
          <p>
            You retain ownership of any images you upload. By using the service, you grant us permission to process your content solely for providing the requested functionality.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-zinc-900 dark:text-white mb-1">
            Data & Storage
          </h2>
          <p>
            Files may be processed using third-party infrastructure. We do not guarantee long-term storage and reserve the right to delete content at any time.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-zinc-900 dark:text-white mb-1">
            Prohibited Use
          </h2>
          <p>
            You agree not to upload or process content that is unlawful, harmful, abusive, or infringes on intellectual property rights.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-zinc-900 dark:text-white mb-1">
            Availability
          </h2>
          <p>
            We strive to provide a reliable service but do not guarantee uninterrupted or error-free operation. Features may change or be discontinued at any time.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-zinc-900 dark:text-white mb-1">
            Limitation of Liability
          </h2>
          <p>
            The service is provided “as is” without warranties of any kind. We are not responsible for any direct or indirect damages arising from its use.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-zinc-900 dark:text-white mb-1">
            Changes to Terms
          </h2>
          <p>
            We may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.
          </p>
        </div>

        <p className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs">
          Last updated: April 2026
        </p>
      </div>
    </div>
  );
}