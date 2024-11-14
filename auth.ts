import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import api from "./helpers/api";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        const userDetails = {
          username: user.name,
          email: user.email,
          key: process.env.NEXT_PUBLIC_GOOGLE_APP_VERYFIER_KEY,
        };
        const response = await api.post("/users-api/google-signin", userDetails);
        if (response.data.proceed) {
            user.token = response.data.token;
            user.message = response.data.message;
        } else {
            user.token = null;
            user.message = response.data.message;
        }
        console.log(response.data);
        return true;
      } catch (error) {
        console.log("there was an error: " + error);
        return false;
      }
    },
    async jwt({ user, token }) {
      if (user) {
        token.token = user.token;
        token.message = user.message;
      }
      return token;
    },
    async session({ session, token }) {
      session.token = token.token;
      session.message = token.message;
      return session;
    },
  },
});
