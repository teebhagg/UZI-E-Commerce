import BannerSkeleton from "./components/skeletons/banner_skeleton";
import ProductCardSkeleton from "./components/skeletons/card_skeleton";

export default function Loading() {
  return (
    <section className="flex-grow">
      <BannerSkeleton/>
      <div className="container mx-auto mb-4 px-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </section>
  );
}
