import { images } from "@/utils/imageConstant";


export const categories = [
    { name: "Breakfast", icon: "🍳", count: 42 },
    { name: "Lunch", icon: "🍔", count: 67 },
    { name: "Dinner", icon: "🍝", count: 53 },
    { name: "Desserts", icon: "🍰", count: 28 },
    { name: "Beverages", icon: "🍹", count: 35 },
    { name: "Specials", icon: "✨", count: 12 },
  ];

 export const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      comment: "The flavors at Khana Kazana are absolutely divine! Every dish is a masterpiece of authentic Indian cuisine.",
      rating: 5,
      image: images?.femaleUser1,
    },
    {
      id: 2,
      name: "Rahul Verma",
      comment: "Best biryani in town! The aromatic spices and perfectly cooked rice make it a must-try dish.",
      rating: 5,
      image: images?.maleUser1,
    },
    {
      id: 3,
      name: "Ananya Patel",
      comment: "The ambiance and service are as excellent as the food. A perfect place for family dinners!",
      rating: 4,
      image: images?.femaleUser2,
    },
  ];

 
 export const foodtype = [
  { id: 1, value: "veg", label: "Veg" },
  { id: 2, value: "non-veg", label: "Non-Veg" }, 
  { id: 3, value: "both", label: "Both" }
 ]

 export const cuisine = [
  { id: 1, value: "nIndian", label: "North Indian" },
  { id: 2, value: "chinese", label: "Chinese" }, 
  { id: 3, value: "sIndian", label: "South Indian" }
 ]

 export const DeleviryRadius = [
  {  value: "2", label: "2 km" },
  {  value: "5", label: "5 km" }, 
  {  value: "10", label: "10 km" },
  {  value: "20+", label: "20 km Above" }
 ]

export const securityquestion = [
  { id: 0, value: 'Question_1', label: 'What was the name of your first pet?' },
  { id: 1, value: 'Question_2', label: 'What is your mother\'s name?' },
  { id: 2, value: 'Question_3', label: 'What was the name of your elementary school?' },
  { id: 3, value: 'Question_4', label: 'What was the make and model of your first car?' },
  { id: 4, value: 'Question_5', label: 'What is the name of the street you grew up on?' },
  { id: 5, value: 'Question_6', label: 'What was your favorite food as a child?' },
  { id: 6, value: 'Question_7', label: 'What is the name of your favorite childhood friend?' },
  { id: 7, value: 'Question_8', label: 'What was the name of the first teacher you had a crush on?' },
  { id: 8, value: 'Question_9', label: 'What is your favorite movie?' },
  { id: 9, value: 'Question_10', label: 'What was the destination of your first vacation?' },
  { id: 10, value: 'Question_11', label: 'Who is your favorite actor?' },
  { id: 11, value: 'Question_12', label: 'Who is your favorite actress?' },
];


export const restuarentImageCatogory = [
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'outdoor dining', label : 'Outdoor Dining'},
    { value: 'indoor dining', label : 'Indoor Dining'},
    { value : 'staff' , label : 'Staff'},
    { value : 'food and drink' , label : 'Food and Drink'},
    { value : 'interior' , label : 'Restaurant Interior'}
];

export const genderOption = [
    { id: 1, value: "male", label: "Male" },
    { id: 2, value: "female", label: "Female" },
    { id: 3, value: "other", label: "Other" },
  ];

 export const faqData = [
    {
      question: "What types of Indian cuisine do you offer?",
      answer: "We offer a wide variety of authentic Indian dishes including North Indian classics like Butter Chicken, Biryani, and Naan, South Indian specialties like Dosa and Sambar, street food favorites, and regional delicacies from across India. Our menu features vegetarian, vegan, and gluten-free options."
    },
    {
      question: "Do you offer delivery and takeout services?",
      answer: "Yes! We provide both delivery and takeout services. You can order online through our website or call us directly. Delivery is available within a 5-mile radius, and we also partner with popular delivery apps like DoorDash, Uber Eats, and Grubhub."
    },
    {
      question: "Are your dishes suitable for vegetarians and vegans?",
      answer: "Absolutely! We have an extensive selection of vegetarian dishes, and many can be made vegan upon request. All our vegetarian and vegan options are clearly marked on the menu. We use separate cooking areas and utensils to avoid cross-contamination."
    },
    {
      question: "How spicy are your dishes? Can I customize the spice level?",
      answer: "Our dishes range from mild to very spicy, and we're happy to customize the spice level according to your preference. Just let us know when ordering - we can make it mild, medium, hot, or extra hot. We use a 1-5 scale where 1 is mild and 5 is very spicy."
    },
    {
      question: "Do you cater for special events and parties?",
      answer: "Yes, we offer comprehensive catering services for weddings, corporate events, parties, and special occasions. We can provide buffet-style service, individual meal boxes, or family-style serving. Please contact us at least 48 hours in advance to discuss your catering needs."
    },
    {
      question: "What are your operating hours and reservation policy?",
      answer: "We're open Monday through Sunday from 11:00 AM to 10:00 PM. For dining in, we recommend making reservations, especially for weekends and holidays. You can book a table online, call us, or walk in (subject to availability). We also offer private dining for special occasions."
    },
    {
      question: "Do you accommodate food allergies and dietary restrictions?",
      answer: "Yes, we take food allergies and dietary restrictions very seriously. Please inform us about any allergies when ordering, and our kitchen staff will ensure your meal is prepared safely. We can accommodate most dietary needs including gluten-free, dairy-free, nut-free, and other specific requirements."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, cash, and digital payments like Apple Pay, Google Pay, and PayPal. For online orders, we also accept various digital wallet options for your convenience."
    }
  ]; 