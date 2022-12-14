const packages = [
  {
    sortOrder: 300,
    maxDimension: 40,
    maxWeight: 2,
    deliveryFee: 30,
    packageFee: 5,
    packageSize: 'MINI',
  },
  {
    sortOrder: 400,
    maxDimension: 60,
    maxWeight: 7,
    deliveryFee: 65,
    packageFee: 10,
    packageSize: 'S',
  },
  {
    sortOrder: 410,
    maxDimension: 75,
    maxWeight: 7,
    deliveryFee: 80,
    packageFee: 15,
    packageSize: 'S+',
  },
  {
    sortOrder: 500,
    maxDimension: 90,
    maxWeight: 10,
    deliveryFee: 90,
    packageFee: 20,
    packageSize: 'M',
  },
  {
    sortOrder: 510,
    maxDimension: 100,
    maxWeight: 15,
    deliveryFee: 130,
    packageFee: 25,
    packageSize: 'M+',
  },
  {
    sortOrder: 600,
    maxDimension: 120,
    maxWeight: 15,
    deliveryFee: 185,
    packageFee: 30,
    packageSize: 'L',
  },
  {
    sortOrder: 700,
    maxDimension: 150,
    maxWeight: 20,
    deliveryFee: 290,
    packageFee: 0,
    packageSize: 'XL',
  },
  {
    sortOrder: 800,
    maxDimension: 280,
    maxWeight: 30,
    deliveryFee: 380,
    packageFee: 0,
    packageSize: 'XL',
  },
];

const province = [
  { value: 10000, label: 'กรุงเทพ' },
  { value: 20000, label: 'เชียงใหม่' },
  { value: 30000, label: 'ญี่ปุ่น' },
  { value: 40000, label: 'จีน' },
  { value: 50000, label: 'ฮาวาย' },
];

export { packages, province };
