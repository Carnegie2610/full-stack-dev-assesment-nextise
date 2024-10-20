import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import CredentialsProvider from "next-auth/providers/credentials";
import { conectToDB } from "./lib/utils";
import { User } from "../src/lib/models";
import bcrypt from "bcrypt";
type Credentials = { username: string; password: string };
const login = async (credentials: Credentials) => {
	try {
		conectToDB();
		const user = await User.findOne({ username: credentials.username });

		if (!user) throw new Error("user not found");

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		if (!isPasswordCorrect) throw new Error("password is incorrect");

		return user;
	} catch (error) {
		console.log(error);
		throw new Error("login failed");
	}
};

export const { signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: "Credentials",
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: "username", type: "text", placeholder: "jsmith" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (err) {
					console.log(err);
					throw new Error("login failed");
				}
			},
		}),
	],
});
