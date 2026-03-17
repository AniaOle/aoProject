import { test, expect } from '@playwright/test';

test('Test API - POST and GET a new item', async ({ request }) => {

    const responsePOST = await request.post('/api/index.php?endpoint=products', {
        data: {
            "name": "Miecz łańcuchowy",
            "price": 999.99,
            "currency": "PLN"
            }
    });

    expect(responsePOST.status()).toBe(201);
    expect(responsePOST.ok()).toBeTruthy();
    const body = await responsePOST.json();
    // console.log(await body);
    const id = await body.product.id;
    //console.log(`${id}`);

    console.log(`/api/index.php?endpoint=products&id=${id}`);
    const responseGET = await request.get(`/api/index.php?endpoint=products&id=${id}`);

    // Nie zadziała bo to mockup a nie faktyczna aplikacja
    expect(responseGET.status()).toBe(404);
    expect(responseGET.ok()).toBeFalsy();

    console.log(await responseGET.json());
    }
);