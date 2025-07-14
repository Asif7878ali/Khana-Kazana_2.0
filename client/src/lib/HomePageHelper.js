import Image from "next/image";
import { categories } from "./homepageData";
import { featuredDishes } from "./homepageData";
import { testimonials } from "./homepageData";
import Icons from "@/utils/Icons";
import { CategoiesTile, DishesCard } from "@/components/reasuableComponents/Cards";
import { images } from "@/utils/imageConstant";

export function HeroSection() {
    return (
        <section className="relative h-[70vh] flex items-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src={images?.resturantBanner}
                    alt="Restaurant ambiance"
                    className="object-cover w-full h-full"
                    priority={true}
                    height={1000}
                    width={1000}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="container mx-auto px-4 z-10 text-white">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Experience the Authentic Flavors of India
                    </h1>
                    <p className="text-xl mb-8">
                        Discover a culinary journey through the diverse and rich traditions of Indian cuisine
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
                            Order Online
                        </button>
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-rose-500 text-white py-3 px-6 rounded-md font-medium transition-colors">
                            Book a Table
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export function PopularCategories() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">
                        Popular Categories
                    </h2>
                    <p className="text-lg text-gray-600">
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
    )
}

export function FeatureDishes() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">
                        Featured Dishes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our chef&apos;s special selections that you can&apos;t miss
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredDishes.map((dish, index) => (
                        <DishesCard
                          key={dish?.id || index}
                          image={dish?.image}
                          name={dish?.name}
                          price={dish?.price}
                          description={dish?.description}
                          rating={dish?.rating}
                          reviews={dish?.reviews}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export function SpecialOffer() {
    return (
        <section className="py-16 bg-rose-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Special Offer
                        </h2>
                        <h3 className="text-2xl font-semibold text-rose-500 mb-4">
                            20% OFF on Family Combos
                        </h3>
                        <p className="text-lg mb-6 text-gray-600">
                            Enjoy a delightful family feast with our special combo meals. Perfect for gatherings and celebrations!
                        </p>
                        <ul className="mb-8 text-gray-600">
                            <li className="flex items-center mb-2">
                                <span className="text-rose-500 mr-2">✓</span> 4 Main Courses
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-rose-500 mr-2">✓</span> 2 Side Dishes
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-rose-500 mr-2">✓</span> 4 Desserts
                            </li>
                            <li className="flex items-center">
                                <span className="text-rose-500 mr-2">✓</span> 4 Beverages
                            </li>
                        </ul>
                        <button className="bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
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
    )
}

export function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Don&apos;t just take our word for it
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="p-6 rounded-lg bg-gray-50">
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
                                    <h3 className="font-semibold text-gray-800">
                                        {testimonial?.name}
                                    </h3>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i}>
                                                {i < testimonial.rating ? "★" : "☆"}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="italic text-gray-600">
                                &quot;{testimonial.comment}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function CalltoAction() {
    return (
        <section className="py-16 bg-rose-500">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-600">
                    Ready to Experience the Flavors?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
                    Join us for a culinary journey or order online for a delightful meal at home
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white hover:bg-gray-100 text-rose-500 py-3 px-8 rounded-md font-medium transition-colors">
                        Book a Table
                    </button>
                    <button className="bg-transparent hover:bg-rose-600 text-white border-2 border-white py-3 px-8 rounded-md font-medium transition-colors">
                        Order Online
                    </button>
                </div>
            </div>
        </section>
    )
}

export function Features() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-rose-500 text-4xl mb-4 flex justify-center">
                            <Icons.Meal />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Fresh Ingredients
                        </h3>
                        <p className="text-gray-600">
                            We source only the freshest ingredients to ensure authentic flavors in every dish.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-rose-500 text-4xl mb-4 flex justify-center">
                            <Icons.UpComingMeal />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Fast Delivery
                        </h3>
                        <p className="text-gray-600">
                            Our efficient delivery service ensures your food arrives hot and fresh at your doorstep.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-rose-500 text-4xl mb-4 flex justify-center">
                            <Icons.Notification />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            Special Events
                        </h3>
                        <p className="text-gray-600">
                            We cater to special events and celebrations with customized menus and services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}