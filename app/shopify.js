import { shopifyApi, ApiVersion } from '@shopify/shopify-api';

const shopify = shopifyApi({
  apiKey: "815db669c795dbeae0a254d2e521b368",
  apiSecretKey: "97ced60ff6036d17390518887950aecb",
  hostName: 'test-shop-qr-datafetch.myshopify.com',
  apiVersion: ApiVersion.January24, // Use the correct API version
  isEmbeddedApp: false, // Set this to true if using an embedded Shopify app
});

export async function getBestSellingProducts() {
  try {
    const restClient = new shopify.clients.Rest({
      domain: 'test-shop-qr-datafetch.myshopify.com',
      accessToken: '7cd9b576bce48085fcd55f6ad2e5d176',
    });

    const response = await restClient.get({
      path: 'products',
      query: { limit: 5, order: 'sold_quantity desc' },
    });

    return response.body.products;
  } catch (error) {
    console.error('Error fetching best-selling products:', error);
    throw error;
  }
}

export async function getMostValuableCustomers() {
  try {
    const restClient = new shopify.clients.Rest({
      domain: 'test-shop-qr-datafetch.myshopify.com',
      accessToken: '7cd9b576bce48085fcd55f6ad2e5d176',
    });

    const response = await restClient.get({
      path: 'customers',
      query: { limit: 5, order: 'total_spent desc' },
    });

    return response.body.customers;
  } catch (error) {
    console.error('Error fetching most valuable customers:', error);
    throw error;
  }
}