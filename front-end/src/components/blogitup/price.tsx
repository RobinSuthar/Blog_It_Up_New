import { Button } from "../ui/button";
const Pricing = () => {
  return (
    <div className="py-20 px-4 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-5xl  gap-4  md:text-7xl lg:text mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          <h2
            className=" 
font-style: italic mb-6"
          >
            What <span className="text-purple-500">Plans</span> we have
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Basic Plan */}
          <div className="border col-span-2 border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md bg-gray-50 dark:bg-gray-800">
            <h3 className="text-2xl font-semibold">No Email Plan</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">$0 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>✔️ Read Blog</li>
              <li>✔️ Like Blog</li>
              <li>✔️ React BLog</li>
            </ul>
            <Button className="mt-6 w-full" variant="outline">
              Choose Basic
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="border col-span-2 border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-md bg-gray-50 dark:bg-gray-800">
            <h3 className="text-2xl font-semibold">Email Plan</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">$0 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>✔️ Edit & Update Posts</li>
              <li>✔️ Comment & Discussion Threads</li>
              <li>✔️ Media Embeds</li>
              <li>✔️ SEO Optimization</li>
              <li>✔️ Post Analytics</li>
            </ul>
            <Button className="mt-6 w-full" variant="outline">
              Choose Pro
            </Button>
          </div>

          {/* Enterprise Plan */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
