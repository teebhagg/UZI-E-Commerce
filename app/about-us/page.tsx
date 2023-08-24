export default function AboutUsPage() {
  return (
    <section className="flex-grow">
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h1 className="mb-4 text-2xl font-bold text-gray-800 sm:text-5xl md:mb-6">
            About Us
          </h1>

          <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Welcome to <strong>UZI Express!</strong> We are a passionate team of
            dedicated professionals who have come together to create an
            extraordinary online shopping experience for you. Our mission is to
            provide you with a seamless and enjoyable journey while you explore
            and shop for a wide range of products.
            {/* <br />
            <br />
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is{" "}
            <a
              href="#"
              className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">
              random
            </a>{" "}
            or otherwise generated. It may be used to display a sample of fonts
            or generate text for testing. Filler text is dummy text which has no
            meaning however looks very similar to real text. */}
            <br />
            <br />
            At <strong>UZI Express</strong>, we believe in the power of
            technology and innovation to transform the way people shop. Our
            platform is designed to bring you the best products from around the
            world, carefully curated to meet your needs and exceed your
            expectations. We strive to be your go-to destination for all your
            shopping desires, offering convenience, quality, and exceptional
            customer service.
            <br />
            <br />
            What sets us apart is our commitment to excellence in every aspect
            of your shopping experience. We take pride in offering an extensive
            selection of products across various categories, ensuring there is
            something for everyone. From trendy fashion apparel to cutting-edge
            electronics, from home essentials to unique gifts, we've got you
            covered.
            <br />
            <br />
            To ensure the utmost satisfaction, we collaborate with trusted
            suppliers and brands known for their craftsmanship, reliability, and
            attention to detail. We carefully vet each product to guarantee its
            authenticity, durability, and value. Rest assured, every item you
            find on our platform is chosen with your utmost satisfaction in
            mind.
            <br />
            <br />
            We understand that shopping is not just about the products; it's
            about the overall experience. That's why we have invested heavily in
            creating a user-friendly interface that is intuitive, visually
            appealing, and easy to navigate. Finding your desired items is a
            breeze, and our advanced search and filtering options make your
            journey even more personalized.
            <br />
            <br />
            At <strong>UZI Express</strong>, we prioritize the security and
            privacy of our customers. We utilize the latest encryption
            technology to safeguard your personal information, ensuring a safe
            and secure transaction every time. Your trust is paramount to us,
            and we are committed to maintaining the highest standards of data
            protection.
            <br />
            <br />
            Our dedicated customer support team is always here to assist you.
            Whether you have a question about a product, need help with an
            order, or simply want to provide feedback, we are just a click or a
            call away. We value your feedback as it helps us continuously
            improve our services and cater to your evolving needs.
            <br />
            <br />
            We are more than just an ecommerce platform; we are a community of
            passionate individuals who share a common love for great products
            and delightful shopping experiences. Join us on this journey and be
            a part of our ever-growing family. Sign up, explore, and indulge in
            the joy of online shopping like never before.
            <br />
            <br />
            Thank you for choosing <strong>UZI Express</strong>. We look
            forward to serving you and exceeding your expectations. Happy
            shopping!
            <br />
            <br />
            <br />
            <p className="text-2xl font-bold">
              Sincerely, 
              <br />
              The Founder
            </p>
          </p>

          {/* <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
            <li>This is a section of some simple filler text</li>
            <li>Also known as placeholder text</li>
            <li>It shares some characteristics of a real written text</li>
          </ul>

          <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
            “This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.”
          </blockquote>

          <p className="text-gray-500 sm:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p> */}
        </div>
      </div>
    </section>
  );
}
