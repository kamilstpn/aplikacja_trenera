import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];

const getRandomValue = (array, index) => array[index];
const getRandomAverage = () => faker.datatype.number({ min: 2, max: 50, precision: 1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
    average: getRandomAverage,
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('Olympic Wroclaw'),
    grades: () => [
      {
        subject: 'Występy',
        average: getRandomAverage(),
      },
      {
        subject: 'Bramki',
        average: getRandomAverage(),
      },
      {
        subject: 'Asysty',
        average: getRandomAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
  event: {
    id: primaryKey(faker.datatype.uuid),
    
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
  },
  coach: {
    id: primaryKey(() => '1'),
    name: () => 'Kamil Stępień',
    login: () => 'kamil.stepien@gmail.com',
    password: () => 'test123',
  },
  blockchain:{
    id: primaryKey(() =>'2'),
    data: ()=>'tekst',
    tresc: ()=> 'tresc',
   },
});