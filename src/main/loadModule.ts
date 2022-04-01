import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';
import path from 'path';

const loadModule = async () => {
  const fakeModule = ` export const sayHi = () => 'Hi'`;

  const filePath = path.resolve(__dirname, '.cache/index.js');
  if (!existsSync(filePath)) {
    mkdirSync(path.resolve(__dirname, '.cache'));
    writeFileSync(filePath, fakeModule);
  }

  const module = await import(filePath);
  rmSync(path.resolve(__dirname, '.cache'), { recursive: true });
  return module.sayHi();
};

export default loadModule;
