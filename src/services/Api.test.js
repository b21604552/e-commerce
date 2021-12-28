import Api from './Api'

describe('Api File Test', () => {

  beforeEach(() => {
    localStorage.setItem('basket', null);
  });

  test('Api.getByPage Test 1', () => {
    const value = Api.getByPage(2,12,{
      title: null,
      color: null,
      brand: null,
      order: null,
      orderField: null,
    });
    const expectedValue = {
      "data": [
        {
          "id": 12,
          "title": "Apple iPhone 11 256GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 424,
          "discountedPrice": 360.4,
          "discount": 15,
          "image": "Apple"
        },
        {
          "id": 13,
          "title": "Apple iPhone 11 256GB",
          "brand": "Apple",
          "color": "Lacivert",
          "price": 424,
          "discountedPrice": 360.4,
          "discount": 15,
          "image": "Apple"
        },
        {
          "id": 14,
          "title": "Apple iPhone 11 256GB",
          "brand": "Apple",
          "color": "Sarı",
          "price": 424,
          "discountedPrice": 360.4,
          "discount": 15,
          "image": "Apple"
        },
        {
          "id": 15,
          "title": "Apple iPhone 11 256GB",
          "brand": "Apple",
          "color": "Beyaz",
          "price": 424,
          "discountedPrice": 360.4,
          "discount": 15,
          "image": "Apple"
        },
        {
          "id": 16,
          "title": "Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Siyah",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Samsung"
        },
        {
          "id": 17,
          "title": "Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Lacivert",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Samsung"
        },
        {
          "id": 18,
          "title": "Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Sarı",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Samsung"
        },
        {
          "id": 19,
          "title": "Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Beyaz",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Samsung"
        },
        {
          "id": 20,
          "title": "Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Siyah",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Samsung"
        },
        {
          "id": 21,
          "title": "Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Lacivert",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Samsung"
        },
        {
          "id": 22,
          "title": "Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Sarı",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Samsung"
        },
        {
          "id": 23,
          "title": "Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Beyaz",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Samsung"
        }
      ],
      "filterOptions": {
        "color": [
          {
            "text": "Siyah",
            "value": 10
          },
          {
            "text": "Lacivert",
            "value": 10
          },
          {
            "text": "Sarı",
            "value": 10
          },
          {
            "text": "Beyaz",
            "value": 10
          }
        ],
        "brand": [
          {
            "text": "Apple",
            "value": 16
          },
          {
            "text": "Samsung",
            "value": 12
          },
          {
            "text": "Xiaomi",
            "value": 4
          },
          {
            "text": "Huawei",
            "value": 4
          },
          {
            "text": "LG",
            "value": 4
          }
        ]
      },
      "pagination": {
        "isPrevEnable": true,
        "isNextEnable": true,
        "currentPage": 2,
        "pages": [
          {
            "key": 1,
            "active": false
          },
          {
            "key": 2,
            "active": true
          },
          {
            "key": 3,
            "active": false
          },
          {
            "key": 4,
            "active": false
          }
        ]
      }
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.getByPage Test 2', () => {
    const value = Api.getByPage(1,12,{
      title: "App",
      color: null,
      brand: null,
      order: null,
      orderField: null,
    });
    const expectedValue = {
      "data": [
        {
          "id": 0,
          "title": "Apple iPhone 11 32GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Apple"
        },
        {
          "id": 1,
          "title": "Apple iPhone 11 32GB",
          "brand": "Apple",
          "color": "Lacivert",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Apple"
        },
        {
          "id": 2,
          "title": "Apple iPhone 11 32GB",
          "brand": "Apple",
          "color": "Sarı",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Apple"
        },
        {
          "id": 3,
          "title": "Apple iPhone 11 32GB",
          "brand": "Apple",
          "color": "Beyaz",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Apple"
        },
        {
          "id": 4,
          "title": "Apple iPhone 11 64GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Apple"
        },
        {
          "id": 5,
          "title": "Apple iPhone 11 64GB",
          "brand": "Apple",
          "color": "Lacivert",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Apple"
        },
        {
          "id": 6,
          "title": "Apple iPhone 11 64GB",
          "brand": "Apple",
          "color": "Sarı",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Apple"
        },
        {
          "id": 7,
          "title": "Apple iPhone 11 64GB",
          "brand": "Apple",
          "color": "Beyaz",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Apple"
        },
        {
          "id": 8,
          "title": "Apple iPhone 11 128GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 324,
          "discountedPrice": 278.64,
          "discount": 14,
          "image": "Apple"
        },
        {
          "id": 9,
          "title": "Apple iPhone 11 128GB",
          "brand": "Apple",
          "color": "Lacivert",
          "price": 324,
          "discountedPrice": 278.64,
          "discount": 14,
          "image": "Apple"
        },
        {
          "id": 10,
          "title": "Apple iPhone 11 128GB",
          "brand": "Apple",
          "color": "Sarı",
          "price": 324,
          "discountedPrice": 278.64,
          "discount": 14,
          "image": "Apple"
        },
        {
          "id": 11,
          "title": "Apple iPhone 11 128GB",
          "brand": "Apple",
          "color": "Beyaz",
          "price": 324,
          "discountedPrice": 278.64,
          "discount": 14,
          "image": "Apple"
        }
      ],
      "filterOptions": {
        "color": [
          {
            "text": "Siyah",
            "value": 4
          },
          {
            "text": "Lacivert",
            "value": 4
          },
          {
            "text": "Sarı",
            "value": 4
          },
          {
            "text": "Beyaz",
            "value": 4
          }
        ],
        "brand": [
          {
            "text": "Apple",
            "value": 16
          },
          {
            "text": "Samsung",
            "value": 0
          },
          {
            "text": "Xiaomi",
            "value": 0
          },
          {
            "text": "Huawei",
            "value": 0
          },
          {
            "text": "LG",
            "value": 0
          }
        ]
      },
      "pagination": {
        "isPrevEnable": false,
        "isNextEnable": true,
        "currentPage": 1,
        "pages": [
          {
            "key": 1,
            "active": true
          },
          {
            "key": 2,
            "active": false
          }
        ]
      }
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.getByPage Test 3', () => {
    const value = Api.getByPage(1,12,{
      title: "App",
      color: "Siyah",
      brand: null,
      order: "asc",
      orderField: "discountedPrice",
    });
    const expectedValue = {
      "data": [
        {
          "id": 0,
          "title": "Apple iPhone 11 32GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Apple"
        },
        {
          "id": 4,
          "title": "Apple iPhone 11 64GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Apple"
        },
        {
          "id": 8,
          "title": "Apple iPhone 11 128GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 324,
          "discountedPrice": 278.64,
          "discount": 14,
          "image": "Apple"
        },
        {
          "id": 12,
          "title": "Apple iPhone 11 256GB",
          "brand": "Apple",
          "color": "Siyah",
          "price": 424,
          "discountedPrice": 360.4,
          "discount": 15,
          "image": "Apple"
        }
      ],
      "filterOptions": {
        "color": [
          {
            "text": "Siyah",
            "value": 4
          },
          {
            "text": "Lacivert",
            "value": 0
          },
          {
            "text": "Sarı",
            "value": 0
          },
          {
            "text": "Beyaz",
            "value": 0
          }
        ],
        "brand": [
          {
            "text": "Apple",
            "value": 4
          },
          {
            "text": "Samsung",
            "value": 0
          },
          {
            "text": "Xiaomi",
            "value": 0
          },
          {
            "text": "Huawei",
            "value": 0
          },
          {
            "text": "LG",
            "value": 0
          }
        ]
      },
      "pagination": {
        "isPrevEnable": false,
        "isNextEnable": false,
        "currentPage": 1,
        "pages": [
          {
            "key": 1,
            "active": true
          }
        ]
      }
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.getByPage Test 4', () => {
    const value = Api.getByPage(1,12,{
      title: null,
      color: "Siyah",
      brand: "Samsung",
      order: "asc",
      orderField: "discountedPrice",
    });
    const expectedValue = {
      "data": [
        {
          "id": 16,
          "title": "Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Siyah",
          "price": 124,
          "discountedPrice": 109.12,
          "discount": 12,
          "image": "Samsung"
        },
        {
          "id": 20,
          "title": "Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Siyah",
          "price": 224,
          "discountedPrice": 194.88,
          "discount": 13,
          "image": "Samsung"
        },
        {
          "id": 24,
          "title": "Samsung Galaxy S21 Ultra 5G 128GB (Samsung Türkiye Garantili)",
          "brand": "Samsung",
          "color": "Siyah",
          "price": 324,
          "discountedPrice": 278.64,
          "discount": 14,
          "image": "Samsung"
        }
      ],
      "filterOptions": {
        "color": [
          {
            "text": "Siyah",
            "value": 3
          },
          {
            "text": "Lacivert",
            "value": 0
          },
          {
            "text": "Sarı",
            "value": 0
          },
          {
            "text": "Beyaz",
            "value": 0
          }
        ],
        "brand": [
          {
            "text": "Apple",
            "value": 0
          },
          {
            "text": "Samsung",
            "value": 3
          },
          {
            "text": "Xiaomi",
            "value": 0
          },
          {
            "text": "Huawei",
            "value": 0
          },
          {
            "text": "LG",
            "value": 0
          }
        ]
      },
      "pagination": {
        "isPrevEnable": false,
        "isNextEnable": false,
        "currentPage": 1,
        "pages": [
          {
            "key": 1,
            "active": true
          }
        ]
      }
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.applyFilter Test 1', () => {
    const filter = {
      "title": null,
      "color": "Lacivert",
      "brand": "Apple",
      "order": null,
      "orderField": null
    }
    const value = Api.applyFilter(filter);
    const expectedValue = [
      {
        "id": 1,
        "title": "Apple iPhone 11 32GB",
        "brand": "Apple",
        "color": "Lacivert",
        "price": 124,
        "discountedPrice": 109.12,
        "discount": 12,
        "image": "Apple"
      },
      {
        "id": 5,
        "title": "Apple iPhone 11 64GB",
        "brand": "Apple",
        "color": "Lacivert",
        "price": 224,
        "discountedPrice": 194.88,
        "discount": 13,
        "image": "Apple"
      },
      {
        "id": 9,
        "title": "Apple iPhone 11 128GB",
        "brand": "Apple",
        "color": "Lacivert",
        "price": 324,
        "discountedPrice": 278.64,
        "discount": 14,
        "image": "Apple"
      },
      {
        "id": 13,
        "title": "Apple iPhone 11 256GB",
        "brand": "Apple",
        "color": "Lacivert",
        "price": 424,
        "discountedPrice": 360.4,
        "discount": 15,
        "image": "Apple"
      }
    ]
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.addProductToBasket Test 1', () => {
    Api.addProductToBasket(2);
    const value = JSON.parse(localStorage.getItem('basket'))
    const expectedValue = [2]
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.addProductToBasket Test 2', () => {
    Api.addProductToBasket(2);
    Api.addProductToBasket(2);
    const value = JSON.parse(localStorage.getItem('basket'))
    const expectedValue = [2]
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.addProductToBasket Test 3', () => {
    Api.addProductToBasket(1);
    const value = JSON.parse(localStorage.getItem('basket'))
    const expectedValue = [1]
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.getProductsInBasket Test 1', () => {
    Api.addProductToBasket(2);
    const value = Api.getProductsInBasket()
    const expectedValue = [
      {
        "id": 2,
        "title": "Apple iPhone 11 32GB",
        "brand": "Apple",
        "color": "Sarı",
        "price": 124,
        "discountedPrice": 109.12,
        "discount": 12,
        "image": "Apple"
      }
    ]
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.getBasket Test 1', () => {
    Api.addProductToBasket(2);
    const value = Api.getBasket()
    const expectedValue = [2]
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.removeProductToBasket Test 1', () => {
    Api.addProductToBasket(2);
    Api.removeProductToBasket(2);
    const value = Api.getBasket()
    const expectedValue = []
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.removeProductToBasket Test 2', () => {
    Api.addProductToBasket(2);
    Api.removeProductToBasket(2);
    const value = Api.getBasket()
    const expectedValue = []
    expect(value).toStrictEqual(expectedValue);
  })

  test('Api.filterOptions Test 1', () => {
    const data = [
      {
        "id": 16,
        "title": "Samsung Galaxy S21 5G 128GB (Samsung Türkiye Garantili)",
        "brand": "Samsung",
        "color": "Siyah",
        "price": 124,
        "discountedPrice": 109.12,
        "discount": 12,
        "image": "Samsung"
      },
      {
        "id": 20,
        "title": "Samsung Galaxy S21 Plus 5G 128GB (Samsung Türkiye Garantili)",
        "brand": "Samsung",
        "color": "Siyah",
        "price": 224,
        "discountedPrice": 194.88,
        "discount": 13,
        "image": "Samsung"
      },
      {
        "id": 24,
        "title": "Samsung Galaxy S21 Ultra 5G 128GB (Samsung Türkiye Garantili)",
        "brand": "Samsung",
        "color": "Siyah",
        "price": 324,
        "discountedPrice": 278.64,
        "discount": 14,
        "image": "Samsung"
      }
    ]
    const value = Api.filterOptions(data, 'color')
    const expectedValue = [
      {
        "text": "Siyah",
        "value": 3
      },
      {
        "text": "Lacivert",
        "value": 0
      },
      {
        "text": "Sarı",
        "value": 0
      },
      {
        "text": "Beyaz",
        "value": 0
      }
    ]
    expect(value).toStrictEqual(expectedValue);
  })
})


