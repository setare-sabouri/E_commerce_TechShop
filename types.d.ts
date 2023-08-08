type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}

type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}
type Product = {
    name: string;
    slug: string;
    image: string; 
    price: number; 
    brand: string;
    category: string;
    rating: number; 
    numReviews: number;
    stockStatus: string;
    description: string;
  };
  