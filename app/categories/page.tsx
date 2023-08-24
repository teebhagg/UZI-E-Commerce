"use client"

import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter()
  return (
    <div className="flex-grow">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Categories
          </h1>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="text-base mt-6 font-semibold text-gray-900">
                Work from home accessories
              </p>
            </div>

            <div className="group relative cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="text-base mt-6 font-semibold text-gray-900">
                Journals and note-taking
              </p>
            </div>
            
            <div className="group relative cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="text-base mt-6 font-semibold text-gray-900">
                Daily commute essentials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
