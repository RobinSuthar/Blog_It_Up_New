import { Button } from "../ui/button";

export function PricingTable() {
  return (
    <div className="py-20 px-4 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-normal text-neutral-600 dark:text-neutral-400 mb-6 italic">
          What <span className="text-purple-500">Plans</span> we have
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Choose the plan that fits your needs.
        </p>

        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
            {/* Table Header */}
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr className="text-gray-700 dark:text-gray-300 text-lg">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6">Free</th>
                <th className="py-4 px-6">Pro</th>
                <th className="py-4 px-6">Enterprise</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              {/* Public Access */}
              <tr>
                <td className="py-4 px-6 text-left">Public</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
              </tr>

              {/* Private Access */}
              <tr>
                <td className="py-4 px-6 text-left">Private</td>
                <td className="text-center">—</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
              </tr>

              {/* Permissions */}
              <tr>
                <td className="py-4 px-6 text-left">Permissions</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
              </tr>

              {/* Sharing */}
              <tr>
                <td className="py-4 px-6 text-left">Sharing</td>
                <td className="text-center">—</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
              </tr>

              {/* Unlimited Members */}
              <tr>
                <td className="py-4 px-6 text-left">Unlimited Members</td>
                <td className="text-center">—</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
              </tr>

              {/* Extra Security */}
              <tr>
                <td className="py-4 px-6 text-left">Extra Security</td>
                <td className="text-center">—</td>
                <td className="text-center">—</td>
                <td className="text-purple-500 text-center text-2xl">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
