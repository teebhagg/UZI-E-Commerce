import headPhones from "@/app/assets/beats.png";
import SecondaryButton from "../buttons/secondary_buttons";

export default function PrimaryBanner() {
  const testBannerImage = require("../../assets/beats.png");
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div className="px-7 py-6 bg-gradient-to-b sm:bg-gradient-to-r from-indigo-500 to-violet-600 rounded">
          <div className="flex flex-wrap">
            <div className="w-full justify-between md:w-1/2 pt-6 mb-10 md:mb-0">
              <div className="flex flex-col">
                <h3 className="flex flex-wrap gap-3 mb-1 text-2xl font-bold text-white">
                  <span className="text-green-300">Try For Free</span>
                  <span>New Features</span>
                </h3>
                <p className="mb-8 md:mb-16 text-sm font-medium text-indigo-100">
                  No charge for seven days
                </p>
              </div>
              <div className="mt-auto md:mt-28 sm:mt-28">
                <SecondaryButton name="Buy Now" />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <img
                className="mx-auto max-h-80 hover:scale-105 transition"
                src={headPhones.src}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
