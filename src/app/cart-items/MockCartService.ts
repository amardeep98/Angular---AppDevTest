//a mock class for CartService which returns the products added to the cart

export class MockCartService{
    getProducts()
    {
        return [{ 
            id: 3,
            name: 'Devops',
            price: 15,
            quantity: '1',
            status: '4 left',
            description: "this course help us to understand automation testing",
            imgaddress : "https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg"
        },
        {
            id: 2,
            name: 'ANgular',
            price: 10,
            quantity: '1',
            status: '2 left',
            description: "this course help us to understand Development testing",
            imgaddress : "https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg"
        }]
    }
}