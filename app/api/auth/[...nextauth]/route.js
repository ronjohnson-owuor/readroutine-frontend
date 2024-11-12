import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import api from '@/helpers/api';

// next auth
const handler = NextAuth({
    secret:process.env.NEXT_PUBLIC_AUTHSECRET,
    providers: [
        Google({
            clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
            clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? ""
        })
    ],

    callbacks:{
        async signIn({user}) {
            const  userDetails = {
                name:user.name,
                email:user.email,
                image:user.image,
                key:process.env.NEXT_PUBLIC_GOOGLE_APP_VERYFIER_KEY

            }

            const response = await api.post("/users-api/google-signin",userDetails);
            if(response.data.proceed){
                user.token = response.data.token;
            }else{
                user.token =null;
                user.message = response.data.message;
            } 
          return true;
        },
        async jwt ({user,token}){
            if(user){
                token.token = user.token;
                token.message = user.message;
            }
            return token;
        },
        async session({ session, token }) {
            session.token = token.token;
            session.message = token.message;
            return session;
          }
        
    }
});

export {handler as GET, handler as POST};