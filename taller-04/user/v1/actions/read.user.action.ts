import { UserModel, UserType } from '../models/user.model';

async function readUsersAction(): Promise<UserType[]> {
	const results = await UserModel;
	const data: UserType[] = JSON.parse(results.toString());

	return data;
}

export default readUsersAction;
