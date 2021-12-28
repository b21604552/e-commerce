import GeneralHelper from './GeneralHelper'
import Apple from '../images/Apple.png';
import Default from '../images/Default.png'

describe('General Helper Test', () => {
  test('GeneralHelper.hasProduct Test 1', () => {
    const value = GeneralHelper.hasProduct([0,1,2],0)
    expect(value).toBeTruthy();
  })

  test('GeneralHelper.hasProduct Test 2', () => {
    const value = GeneralHelper.hasProduct([0,1,2],3)
    expect(value).toBeFalsy();
  })

  test('GeneralHelper.hasProduct Test 3', () => {
    const value = GeneralHelper.hasProduct([0,1,2],null)
    expect(value).toBeFalsy();
  })

  test('GeneralHelper.hasProduct Test 4', () => {
    const value = GeneralHelper.hasProduct(null,null)
    expect(value).toBeFalsy();
  })

  test('GeneralHelper.getOrderData Test 1', () => {
    const value = GeneralHelper.getOrderData("0");
    const expectedValue = {
      field: 'discountedPrice',
      type: 'asc',
      id: "0"
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getOrderData Test 2', () => {
    const value = GeneralHelper.getOrderData("1");
    const expectedValue = {
      field: 'discountedPrice',
      type: 'desc',
      id: "1"
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getOrderData Test 3', () => {
    const value = GeneralHelper.getOrderData("2");
    const expectedValue = {
      field: 'title',
      type: 'asc',
      id: "2"
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getOrderData Test 4', () => {
    const value = GeneralHelper.getOrderData("3");
    const expectedValue = {
      field: 'title',
      type: 'desc',
      id: "3"
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getOrderData Test 5', () => {
    const value = GeneralHelper.getOrderData("aa");
    const expectedValue = {
      field: null,
      type: null,
      id: "aa"
    }
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getPageTitle Test 1', () => {
    const value = GeneralHelper.getPageTitle("Apple","Siyah");
    const expectedValue =  'Apple & Siyah İçin Filtrelenmiş Sonuçlar'
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getPageTitle Test 2', () => {
    const value = GeneralHelper.getPageTitle("Apple",null);
    const expectedValue =  'Apple İçin Filtrelenmiş Sonuçlar'
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getPageTitle Test 3', () => {
    const value = GeneralHelper.getPageTitle(null,"Siyah");
    const expectedValue =  'Siyah İçin Filtrelenmiş Sonuçlar'
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getPageTitle Test 4', () => {
    const value = GeneralHelper.getPageTitle(null,null);
    const expectedValue =  'Hoşgeldiniz'
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getImageByKey Test 1', () => {
    const value = GeneralHelper.getImageByKey(null);
    const expectedValue = Default;
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getImageByKey Test 2', () => {
    const value = GeneralHelper.getImageByKey("Nokia");
    const expectedValue = Default;
    expect(value).toStrictEqual(expectedValue);
  })

  test('GeneralHelper.getImageByKey Test 3', () => {
    const value = GeneralHelper.getImageByKey("Apple");
    const expectedValue = Apple;
    expect(value).toStrictEqual(expectedValue);
  })
})