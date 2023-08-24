import { faker } from '@faker-js/faker';


export interface ProductInterface {
    _id: any;
    images: string[];
    name: string;
    price: number;
    description?: string;
    colors?: string[];
    variants?: string[];
    category?: string;
    slug?: string;
  }

 export const generateDummyProducts = (): ProductInterface[] => {
    const dummyProducts: ProductInterface[] = [];
  
    for (let i = 0; i < 20; i++) {
      const dummyProduct: ProductInterface = {
        _id: i+1,
        images: [faker.image.url(), faker.image.url(), faker.image.url(), faker.image.url()],
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        description: faker.lorem.sentence(),
        colors: [faker.color.human(), faker.color.human(), faker.color.human(), faker.color.human()],
        variants: [faker.word.adjective(), faker.word.adjective(), faker.word.adjective(), faker.word.adjective()],
        category: faker.commerce.department(),
        slug: `product_${i}`,
      };
  
      dummyProducts.push(dummyProduct);
    }
  
    return dummyProducts;
  };
