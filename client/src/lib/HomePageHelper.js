import Image from "next/image";
import { categories } from "./homepageData";
import { testimonials } from "./homepageData";
import Icons from "@/utils/Icons";
import { CategoiesTile } from "@/components/reasuableComponents/Cards";
import { images } from "@/utils/imageConstant";
import { Button } from "@/components/reasuableComponents/UI/Button";


export function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center">
      <Image
        src={images?.resturantBanner}
        alt="Restaurant ambiance"
        className="absolute inset-0 w-full h-full object-cover"
        priority={true}
        height={1000}
        width={1000}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 textWhite">
            Experience the Authentic Flavors of India
          </h1>
          <p className="text-xl mb-8 textWhite">
            Discover a culinary journey through the diverse and rich traditions
            of Indian cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="py-3 textWhite">
              Order Online
            </Button>

            <Button
              variant="outline"
              className="textWhite border borderWhite py-3 hover:bgWhite hover:textRose"
            >
              Book a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PopularCategories() {
  return (
    <section className="py-16 bgWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 textgray8">
            Popular Categories
          </h2>
          <p className="text-lg textgray6">
            Explore our diverse menu offerings
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoiesTile
              key={category?.id || index}
              icon={category?.icon}
              name={category?.name}
              count={category?.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export function SpecialOffer() {
  return (
    <section className="py-16 bgRose1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 textgray8">
              Special Offer
            </h2>
            <h3 className="text-2xl font-semibold textRose mb-4">
              20% OFF on Family Combos
            </h3>
            <p className="text-lg mb-6 textgray6">
              Enjoy a delightful family feast with our special combo meals.
              Perfect for gatherings and celebrations!
            </p>
            <ul className="mb-8 textgray6">
              <li className="flex items-center mb-2">
                <span className="textRose mr-2">✓</span> 4 Main Courses
              </li>
              <li className="flex items-center mb-2">
                <span className="textRose mr-2">✓</span> 2 Side Dishes
              </li>
              <li className="flex items-center mb-2">
                <span className="textRose mr-2">✓</span> 4 Desserts
              </li>
              <li className="flex items-center">
                <span className="textRose mr-2">✓</span> 4 Beverages
              </li>
            </ul>
            <button className="bgRose4 hover:bg-rose-500 textWhite cursor-pointer py-3 px-6 rounded-md font-medium transition-colors">
              Order Now
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={images?.salad}
                alt="Family meal"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 bgWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 textgray8">
            What Our Customers Say
          </h2>
          <p className="text-lg textgray6">
            Don&apos;t just take our word for it
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 rounded-lg bgGray1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h3 className="font-semibold textgray8">
                    {testimonial?.name}
                  </h3>
                  <div className="flex textYellow4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic textgray6">
                &quot;{testimonial.comment}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CalltoAction() {
  return (
    <section className="py-16 bgRose1">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 textgray8">
          Ready to Experience the Flavors?
        </h2>
        <p className="text-xl max-w-2xl mx-auto textRose">
          Join us for a culinary journey or order online for a delightful meal
          at home
        </p>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="py-16 bgWhite">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="textRose text-4xl mb-4 flex justify-center">
              <Icons.Meal />
            </div>
            <h3 className="text-xl font-semibold mb-2 textgray8">
              Fresh Ingredients
            </h3>
            <p className="textgray6">
              We source only the freshest ingredients to ensure authentic
              flavors in every dish.
            </p>
          </div>
          <div className="text-center">
            <div className="textRose text-4xl mb-4 flex justify-center">
              <Icons.UpComingMeal />
            </div>
            <h3 className="text-xl font-semibold mb-2 textgray8">
              Fast Delivery
            </h3>
            <p className="textgray6">
              Our efficient delivery service ensures your food arrives hot and
              fresh at your doorstep.
            </p>
          </div>
          <div className="text-center">
            <div className="textRose text-4xl mb-4 flex justify-center">
              <Icons.Notification />
            </div>
            <h3 className="text-xl font-semibold mb-2 textgray8">
              Special Events
            </h3>
            <p className="textgray6">
              We cater to special events and celebrations with customized menus
              and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
