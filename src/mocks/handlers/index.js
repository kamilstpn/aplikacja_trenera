import { groups } from 'mocks/handlers/groups';
import { students } from 'mocks/handlers/students';
import { auth } from 'mocks/handlers/auth';
import { blockchain, blockchainadd } from './blockreq';
export const handlers = [...groups, ...students, ...auth,...blockchain,...blockchainadd];