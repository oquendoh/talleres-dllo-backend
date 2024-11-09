import fs from 'fs/promises';

type UserType = {
	id: number;
	name: string;
	hobbies: Array<string>;
	years: number;
	team: string;
	faction: string;
};

const UserModel = fs.readFile('./data/23-taller-04-datos.json');

export { UserModel, UserType };
