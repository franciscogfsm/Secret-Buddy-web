export default function PrivacySummary() {
  return (
    <div className="bg-surface p-6 rounded-lg border border-border mb-8">
      <h2 className="text-2xl font-semibold mb-4">Privacy at a Glance</h2>
      <ul className="space-y-3">
        <li className="text-textSecondary">
          Photos auto-delete after 24 hours or after viewing.
        </li>
        <li className="text-textSecondary">We do NOT sell your data.</li>
        <li className="text-textSecondary">
          You can request data access or deletion at thesecretbuddyapp@gmail.com
        </li>
      </ul>
    </div>
  );
}
