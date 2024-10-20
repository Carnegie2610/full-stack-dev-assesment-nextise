export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = auth?.user;
			const isOnSpecificPage = ["/", "/trainers", "/homepage"].some((path) =>
				nextUrl.pathname.startsWith(path)
			);
			if (isOnSpecificPage) {
				if (isLoggedIn) return true;
				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL("/", nextUrl));
			}
			return true;
		},
	},
	providers: [],
};
