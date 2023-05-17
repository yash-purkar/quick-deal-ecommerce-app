import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 1,
    itemName: "Puma",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70",
    description: "A premium quality and stylish T-shirt for men.",
    rating: 4.5,
    reviews: 10,
    size: "L",
    category: "Men",
    oldPrice: 79.99,
    newPrice: 59.99,
    discount: 25,
    isTrending: true,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: true,

  },
  {
    _id: 2,
    itemName: "Biba",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/3/d/i/l-jc22-hd-fs-black-jmc-pckt-jump-cuts-original-imagg3yxfk48y7nt.jpeg?q=70",
    description: "An elegant and fashionable dress for women.",
    rating: 3.2,
    reviews: 5,
    size: "M",
    category: "Women",
    oldPrice: 129.99,
    newPrice: 99.99,
    discount: 23,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: true,
  },
  {
    _id: 3,
    itemName: "Roadster",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/r/l/3/xl-all-amawng-one-nb-nicky-boy-original-imaghyybbjzwqvjn.jpeg?q=70",
    description: "A cozy and warm hoodie for kids.",
    rating: 4.7,
    reviews: 8,
    size: "S",
    category: "Kids",
    oldPrice: 49.99,
    newPrice: 39.99,
    discount: 20,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: false
  },
  {
    _id: 4,
    itemName: "H&M",
    image: "https://rukminim1.flixcart.com/image/612/612/l4zxn680/t-shirt/a/7/c/m-st-colorleaf-navy-smartees-original-imagfs4paqzgkteh.jpeg?q=70",
    description: "A stylish and durable jacket for men.",
    rating: 4.2,
    reviews: 12,
    size: "XL",
    category: "Men",
    oldPrice: 149.99,
    newPrice: 119.99,
    discount: 20,
    isTrending: false,
    inStock: true,
    delivery_time: "4-6 business days",
    fewLeft: true,
  },
  {
    _id: 5,
    itemName: "Bibari",
    image: "https://rukminim1.flixcart.com/image/612/612/l4u7vrk0/t-shirt/9/8/b/xxl-fdsd-try-this-original-imagfn8z3zyhqxzq.jpeg?q=70",
    description: "A comfortable and trendy pair of jeans for women.",
    rating: 4.8,
    reviews: 15,
    size: "M",
    category: "Women",
    oldPrice: 89.99,
    newPrice: 69.99,
    discount: 22,
    isTrending: true,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false
  },
  {
    _id: 6,
    itemName: "U.S. Polo Assn",
    image: "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/shirt/7/s/h/xs-juhg-try-this-original-imagg4wyccyjm3jf.jpeg?q=70",
    description: "A classic and formal shirt for men.",
    rating: 3.9,
    reviews: 6,
    size: "L",
    category: "Men",
    oldPrice: 99.99,
    newPrice: 79.99,
    discount: 20,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: false
  },
  {
    _id: 7,
    itemName: "Ahika",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/x/t/p/xl-546545485-try-this-original-imaghpyxt9kufgza.jpeg?q=70",
    description: "A cozy and stylish sweater for women.",
    rating: 4.1,
    reviews: 9,
    size: "S",
    category: "Women",
    oldPrice: 69.99,
    newPrice: 49.99,
    discount: 29,
    isTrending: false,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: false
  },
  {
    _id: 8,
    itemName: "Wrogn",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/j/j/l-jc22-rn-fs-black-olv-never-jump-cuts-original-imaghcczhpzwkruh.jpeg?q=70",
    description: "Comfortable and breathable shorts for men.",
    rating: 4.6,
    reviews: 11,
    size: "M",
    category: "Men",
    oldPrice: 59.99,
    newPrice: 39.99,
    discount: 33,
    isTrending: true,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: true,
  },
  {
    _id: 9,
    itemName: "Anubhutee",
    image: "https://rukminim1.flixcart.com/image/612/612/l1grgcw0/t-shirt/x/o/5/m-t428hs-tm5p-eyebogler-original-imagdf2egzjxeqgk.jpeg?q=70",
    description: "A stylish and elegant blouse for women.",
    rating: 3.8,
    reviews: 7,
    size: "XL",
    category: "Women",
    oldPrice: 49.99,
    newPrice: 39.99,
    discount: 20,
    isTrending: false,
    inStock: false,
    delivery_time: "3-5 business days",
    fewLeft: true,
  },
  {
    _id: 10,
    itemName: "Nautica",
    image: "https://rukminim1.flixcart.com/image/612/612/l4zxn680/t-shirt/t/z/e/l-t350hs-tb-sm-eyebogler-original-imagfrx6fpgdzt63.jpeg?q=70",
    description: "Stylish and comfortable pants for men.",
    rating: 4.4,
    reviews: 14,
    size: "L",
    category: "Men",
    oldPrice: 79.99,
    newPrice: 59.99,
    discount: 25,
    isTrending: true,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: false
  },
  {
    _id: 11,
    itemName: "Indo Era",
    image: "https://rukminim1.flixcart.com/image/612/612/kzd147k0/t-shirt/q/z/m/m-tsrt-303-reya-original-imagbefyffzh68wj.jpeg?q=70",
    description: "A fashionable and versatile skirt for women.",
    rating: 4.2,
    reviews: 13,
    size: "M",
    category: "Women",
    oldPrice: 69.99,
    newPrice: 49.99,
    discount: 29,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false
  },
  {
    _id: 12,
    itemName: "Cutiekins",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/a/h/a/l-tsrt-301-reya-original-imagfzhqdudhhjzz.jpeg?q=70",
    description: "A comfortable and stylish T-shirt for kids.",
    rating: 3.9,
    reviews: 8,
    size: "S",
    category: "Kids",
    oldPrice: 29.99,
    newPrice: 19.99,
    discount: 33,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: true,
  },
  {
    _id: 13,
    itemName: "BonOrganik",
    image: "https://rukminim1.flixcart.com/image/612/612/kyyqpow0/t-shirt/v/q/0/s-t428hs-dnmg-eyebogler-original-imagb2rxud2ae59t.jpeg?q=70",
    description: "A warm and trendy hoodie for men.",
    rating: 5,
    reviews: 11,
    size: "L",
    category: "Kids",
    oldPrice: 89.99,
    newPrice: 69.99,
    discount: 22,
    isTrending: true,
    inStock: true,
    delivery_time: "2-4 business days",
    fewLeft: false
  },
  {
    _id: 14,
    itemName: "Dennis Lingo",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/u/t/s-st-triangle-black-smartees-original-imaggenhkgzhedgh.jpeg?q=70",
    description: "A stylish and versatile jacket for women.",
    rating: 4.7,
    reviews: 15,
    size: "M",
    category: "Women",
    oldPrice: 149.99,
    newPrice: 119.99,
    discount: 20,
    isTrending: false,
    inStock: true,
    delivery_time: "3-5 business days",
    fewLeft: false
  },
  {
    _id: 15,
    itemName: "H&M",
    image: "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/u/l/t/xxl-bwtblnvmrpolo-pl5-blive-original-imagm7f6pgva4z3r.jpeg?q=70",
    description: "A classic and formal shirt for men.",
    rating: 4.1,
    reviews: 9,
    size: "S",
    category: "Kids",
    oldPrice: 99.99,
    newPrice: 79.99,
    discount: 20,
    isTrending: true,
    inStock: false,
    delivery_time: "2-4 business days",
    fewLeft: true,
  }
];

