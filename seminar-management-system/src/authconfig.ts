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
			if (isOnSpecificPage && !isLoggedIn) {
				// Redirect the user to the login page if they are not logged in
				return Response.redirect(new URL("/login", nextUrl));
			} else if (isLoggedIn && !isOnSpecificPage) {
				// If logged in and accessing another route, redirect them to the homepage
				return Response.redirect(new URL("/", nextUrl));
			}
			return true;
		},
	},
	providers: [],
};
