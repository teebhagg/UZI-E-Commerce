import PrimaryBanner from "../components/banners/primary_banner";
import TertiaryBanner from "../components/banners/tertiary_banner";
import SecondaryBanner from "../components/banners/secondary_banner";

export default function Promotions() {
  return (
    <section className="flex-grow justify-center">
      <div className="container px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className=" text-2xl font-bold text-gray-800 sm:text-5xl ">
          Promotions.
        </h1>
        <SecondaryBanner />
        <PrimaryBanner />
        <SecondaryBanner />
        <TertiaryBanner />
      </div>
    </section>
  );
}
