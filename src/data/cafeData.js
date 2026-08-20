export const CAFE_DETAILS = {
  name: "CST Chai Station",
  tagline: "Your Daily Spot for Hot Kulhad Chai & Warm Memories",
  description: "Welcome to CST Chai Station, Nagpur's cozy hangout spot near Tata Square, Manewada. Enjoy authentic Kulhad Chai brewed fresh with ginger & cardamom, oven-fresh Bun Maska, cheesy pizzas, spicy maggi, and thick cold shakes.",
  instagramUrl: "https://www.instagram.com/cst_chaistationnagpur/",
  instagramHandle: "@cst_chaistationnagpur",
  mapsUrl: "https://maps.app.goo.gl/jtd8WMsaY3wcr43K7",
  address: "Shop No. G-001/B, Prabha Palace, Tata Square, Manewada - Besa Road, Ayodhya Nagar, Nagpur, Maharashtra 440027",
  phone: "+919876543210",
  hours: "9:00 AM - 10:00 PM Everyday",
  openHour: 9,
  closeHour: 22,
  rating: "5.0",
  reviewsCount: "250+ Happy Customers",
};

export const MENU_CATEGORIES = [
  {
    id: "chai-garam",
    name: "Chai Garam",
    tagline: "Piping hot tea in traditional earthen kulhads & herbal infusions",
    icon: "☕",
    color: "from-amber-100 to-amber-50 border-amber-200 text-amber-900",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    itemCount: 7
  },
  {
    id: "coffee-hot",
    name: "Coffee & Hot Beverages",
    tagline: "Aromatic espressos, hot cocoa & nostalgic Bournvita milk",
    icon: "🥛",
    color: "from-amber-50 to-stone-100 border-amber-200 text-stone-900",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    itemCount: 5
  },
  {
    id: "buns-toast",
    name: "Bun's & Bread on Top",
    tagline: "Soft bakery buns with dollops of butter, jam & garlic toast",
    icon: "🍞",
    color: "from-yellow-100 to-amber-50 border-yellow-200 text-yellow-950",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
    itemCount: 12
  },
  {
    id: "thick-shakes",
    name: "Thick Shakes & Cold Brews",
    tagline: "Decadent Oreo, KitKat, Hazelnut & ice-cream cold coffees",
    icon: "🥤",
    color: "from-amber-100 to-orange-50 border-amber-300 text-orange-950",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    itemCount: 6
  },
  {
    id: "burgers-sandwiches",
    name: "Burgers & Sandwiches",
    tagline: "Crispy grilled paninis, tandoori paneer & cheese overload",
    icon: "🥪",
    color: "from-orange-100 to-amber-50 border-orange-200 text-orange-950",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    itemCount: 7
  },
  {
    id: "pizza",
    name: "Oven-Baked Pizzas",
    tagline: "8-inch thin crust loaded with cheese burst & spicy paneer",
    icon: "🍕",
    color: "from-red-100 to-amber-50 border-red-200 text-red-950",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    itemCount: 8
  },
  {
    id: "maggie-pasta",
    name: "Maggie & Creamy Pasta",
    tagline: "Nagpur's favorite comfort food toss & white/red sauce pasta",
    icon: "🍜",
    color: "from-yellow-50 to-amber-100 border-yellow-300 text-amber-950",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80",
    itemCount: 5
  },
  {
    id: "small-bites",
    name: "Crispy Small Bites",
    tagline: "Golden peri peri fries, cheese balls & hara bhara kababs",
    icon: "🍟",
    color: "from-amber-100 to-stone-100 border-amber-200 text-stone-900",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    itemCount: 6
  },
  {
    id: "coolers",
    name: "Refreshing Coolers & Mojitos",
    tagline: "Chilly iced teas, chilli guava & virgin blue mojito fizz",
    icon: "🍹",
    color: "from-emerald-100 to-teal-50 border-emerald-200 text-teal-950",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    itemCount: 5
  }
];

export const FULL_MENU = [
  // Chai Garam
  { id: "cg-1", category: "chai-garam", name: "Adrak / Ginger Tea", price: 12, isVeg: true, tag: "Daily Special" },
  { id: "cg-2", category: "chai-garam", name: "Elaichi Tea", price: 15, isVeg: true, tag: "Aromatic" },
  { id: "cg-3", category: "chai-garam", name: "Black Tea", price: 12, isVeg: true, tag: "Light" },
  { id: "cg-4", category: "chai-garam", name: "Kulhad Chai", price: 20, isVeg: true, tag: "🔥 Bestseller" },
  { id: "cg-5", category: "chai-garam", name: "Lemon Tea", price: 20, isVeg: true, tag: "Refreshing" },
  { id: "cg-6", category: "chai-garam", name: "Green Tea", price: 20, isVeg: true, tag: "Healthy" },
  { id: "cg-7", category: "chai-garam", name: "Chocolate Tea", price: 20, isVeg: true, tag: "Kids Favorite" },

  // Coffee / Hot Beverages
  { id: "ch-1", category: "coffee-hot", name: "Black Coffee", price: 15, isVeg: true, tag: "" },
  { id: "ch-2", category: "coffee-hot", name: "Hot Coffee", price: 25, isVeg: true, tag: "Popular" },
  { id: "ch-3", category: "coffee-hot", name: "Chocolate Coffee", price: 35, isVeg: true, tag: "" },
  { id: "ch-4", category: "coffee-hot", name: "Hot Chocolate", price: 40, isVeg: true, tag: "Cozy" },
  { id: "ch-5", category: "coffee-hot", name: "Bourn Vita Milk", price: 30, isVeg: true, tag: "Nostalgic" },

  // Thick Shake
  { id: "ts-1", category: "thick-shakes", name: "Cold Coffee", price: 80, isVeg: true, tag: "Classic" },
  { id: "ts-2", category: "thick-shakes", name: "Cold Coffee with Ice Cream", price: 100, isVeg: true, tag: "⭐ Must Try" },
  { id: "ts-3", category: "thick-shakes", name: "Hazelnut Cold Coffee", price: 120, isVeg: true, tag: "Trending" },
  { id: "ts-4", category: "thick-shakes", name: "Oreo Shake", price: 100, isVeg: true, tag: "Rich" },
  { id: "ts-5", category: "thick-shakes", name: "KitKat Shake", price: 100, isVeg: true, tag: "Crunchy" },
  { id: "ts-6", category: "thick-shakes", name: "Brownie Shake", price: 100, isVeg: true, tag: "Decadent" },

  // Bun's & Bread on Top
  { id: "bt-1", category: "buns-toast", name: "Cream Roll", price: 15, isVeg: true, tag: "" },
  { id: "bt-2", category: "buns-toast", name: "Bun Maska", price: 20, isVeg: true, tag: "🔥 Perfect Chai Combo" },
  { id: "bt-3", category: "buns-toast", name: "Bun Maska Jam", price: 35, isVeg: true, tag: "" },
  { id: "bt-4", category: "buns-toast", name: "Bun Maska Chocolate", price: 35, isVeg: true, tag: "" },
  { id: "bt-5", category: "buns-toast", name: "Cheese Bun Maska", price: 40, isVeg: true, tag: "" },
  { id: "bt-6", category: "buns-toast", name: "Butter Cookies", price: 20, isVeg: true, tag: "" },
  { id: "bt-7", category: "buns-toast", name: "Butter Toast", price: 30, isVeg: true, tag: "" },
  { id: "bt-8", category: "buns-toast", name: "Garlic Butter Toast", price: 50, isVeg: true, tag: "Aromatic" },
  { id: "bt-9", category: "buns-toast", name: "Butter Jam Toast", price: 30, isVeg: true, tag: "" },
  { id: "bt-10", category: "buns-toast", name: "Peanut Butter Toast", price: 35, isVeg: true, tag: "" },
  { id: "bt-11", category: "buns-toast", name: "Cheese Butter Toast", price: 35, isVeg: true, tag: "" },
  { id: "bt-12", category: "buns-toast", name: "Cheese Garlic Butter Toast", price: 70, isVeg: true, tag: "Cheesy" },

  // Burgers / Sandwiches
  { id: "bs-1", category: "burgers-sandwiches", name: "Veg Burger", price: 90, isVeg: true, tag: "" },
  { id: "bs-2", category: "burgers-sandwiches", name: "Paneer Burger", price: 130, isVeg: true, tag: "Loaded" },
  { id: "bs-3", category: "burgers-sandwiches", name: "Cold Sandwich", price: 100, isVeg: true, tag: "" },
  { id: "bs-4", category: "burgers-sandwiches", name: "Veg Grilled Cheese Sandwich", price: 120, isVeg: true, tag: "🔥 Bestseller" },
  { id: "bs-5", category: "burgers-sandwiches", name: "Cheese Corn Sandwich", price: 120, isVeg: true, tag: "" },
  { id: "bs-6", category: "burgers-sandwiches", name: "Mexican Veg Sandwich", price: 150, isVeg: true, tag: "Spicy" },
  { id: "bs-7", category: "burgers-sandwiches", name: "Tandoori Paneer Sandwich", price: 150, isVeg: true, tag: "Special" },

  // Small Bites
  { id: "sb-1", category: "small-bites", name: "French Fries", price: 60, isVeg: true, tag: "Classic" },
  { id: "sb-2", category: "small-bites", name: "Peri Peri Fries", price: 70, isVeg: true, tag: "🔥 Spicy" },
  { id: "sb-3", category: "small-bites", name: "Masala Fries", price: 80, isVeg: true, tag: "" },
  { id: "sb-4", category: "small-bites", name: "Cheesy Fries", price: 100, isVeg: true, tag: "Cheesy" },
  { id: "sb-5", category: "small-bites", name: "Cheese Ball", price: 90, isVeg: true, tag: "Crispy" },
  { id: "sb-6", category: "small-bites", name: "Hara Bhara Kabab", price: 70, isVeg: true, tag: "Healthy Bite" },

  // Pizza
  { id: "pz-1", category: "pizza", name: "Margherita Pizza", price: 90, isVeg: true, tag: "Classic Cheese" },
  { id: "pz-2", category: "pizza", name: "Onion & Capsicum Pizza", price: 100, isVeg: true, tag: "" },
  { id: "pz-3", category: "pizza", name: "Cheese Corn Pizza", price: 120, isVeg: true, tag: "Kid Favorite" },
  { id: "pz-4", category: "pizza", name: "Italian Pizza", price: 130, isVeg: true, tag: "" },
  { id: "pz-5", category: "pizza", name: "Mexican Spiced Pizza", price: 140, isVeg: true, tag: "Zesty" },
  { id: "pz-6", category: "pizza", name: "Spicy Paneer Pizza", price: 150, isVeg: true, tag: "Hot" },
  { id: "pz-7", category: "pizza", name: "Tandoori Paneer Pizza", price: 150, isVeg: true, tag: "Desi Special" },
  { id: "pz-8", category: "pizza", name: "Double Cheese Burst Pizza", price: 150, isVeg: true, tag: "🔥 Overload" },

  // Maggie / Pasta
  { id: "mp-1", category: "maggie-pasta", name: "Masala Maggie", price: 50, isVeg: true, tag: "Nostalgic" },
  { id: "mp-2", category: "maggie-pasta", name: "Veggies Maggie", price: 60, isVeg: true, tag: "" },
  { id: "mp-3", category: "maggie-pasta", name: "Cheese Corn Maggie", price: 80, isVeg: true, tag: "🔥 Bestseller" },
  { id: "mp-4", category: "maggie-pasta", name: "Red Sause Pasta", price: 90, isVeg: true, tag: "Tangy" },
  { id: "mp-5", category: "maggie-pasta", name: "White Sause Pasta", price: 120, isVeg: true, tag: "Creamy" },

  // Refreshing Coolers
  { id: "rc-1", category: "coolers", name: "Lemon Iced Tea", price: 60, isVeg: true, tag: "Chilled" },
  { id: "rc-2", category: "coolers", name: "Peach Iced Tea", price: 60, isVeg: true, tag: "Fruity" },
  { id: "rc-3", category: "coolers", name: "Chilli Guava Mojito", price: 70, isVeg: true, tag: "🌶️ Spicy Punch" },
  { id: "rc-4", category: "coolers", name: "Virgin Mojito", price: 70, isVeg: true, tag: "Classic Mint" },
  { id: "rc-5", category: "coolers", name: "Blue Curacao Mojito", price: 70, isVeg: true, tag: "Vibrant" }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    likes: "428",
    comments: "34",
    caption: "Piping hot Kulhad Chai + Bun Maska = The ultimate CST vibe! ☕✨ Visit us at Tata Square, Nagpur!"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80",
    likes: "612",
    comments: "51",
    caption: "Cheese Corn Maggie at ₹80! Hot, cheesy, and satisfying. Bring your squad today! 🍜🧀"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    likes: "890",
    comments: "72",
    caption: "Thick Cold Coffee with Ice Cream at ₹100! Perfectly chilled for Nagpur evenings 🥤❄️"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    likes: "534",
    comments: "41",
    caption: "Veg Grilled Cheese Sandwich hot off the grill! 🥪 Tag a cheese lover below 👇"
  }
];

export const HIGHLIGHTS = [
  {
    icon: "Coffee",
    title: "Fresh Kulhad Brew",
    description: "Every cup is boiled fresh with cardamom, ginger & served in traditional earthen kulhads."
  },
  {
    icon: "UtensilsCrossed",
    title: "POCKET-FRIENDLY RATES",
    description: "Authentic Chai starting at just ₹12 and Bun Maska at ₹20. Great food at honest prices."
  },
  {
    icon: "Users",
    title: "WARM & COZY HANGOUT",
    description: "The perfect spot at Tata Square, Manewada for friends, college groups & families to chill."
  },
  {
    icon: "Sparkles",
    title: "100% FRESH & HYGIENIC",
    description: "Prepared fresh on order with high-grade dairy, fresh veggies & utmost care."
  }
];
