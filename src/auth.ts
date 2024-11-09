// import { connectToDatabase } from "@/lib/features";
// import { User } from "@/models/userModel";
import type { NextAuthConfig } from "next-auth";
import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const options: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password)
          throw new CredentialsSignin({ cause: "Invalid email or password" });

        // await connectToDatabase();

        // const user = await User.findOne({ email }).select("+password");

        const user = {
          _id: "1",
          email: "sds",
          password: "sds",
          verified: true,
          name: "sds",
          avatar: "sds",
          createdAt: "sds",
        };

        if (!user)
          throw new CredentialsSignin({ cause: "Invalid email or password" });

        if (!user.password)
          throw new CredentialsSignin({ cause: "Invalid email or password" });

        const isPasswordMatched = true;
        // await bcrypt.compare(password, user.password);

        if (!isPasswordMatched)
          throw new CredentialsSignin({ cause: "Invalid email or password" });

        if (!user.verified)
          throw new CredentialsSignin({ cause: "Please verify your email" });

        return {
          id: user._id,
          email: user.email,
          name: user.name,
          avatar: user.avatar,
          createdAt: user.createdAt,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },

  // callbacks: {
  //   signIn: async ({ user, account }) => {
  //     // if (account?.provider === "google") {
  //     //   try {
  //     //     const { email, name, image, id } = user;

  //     //     // await connectToDatabase();

  //     //     const alreadyUser = await User.findOne({ email });

  //     //     if (!alreadyUser) {
  //     //       await User.create({
  //     //         email,
  //     //         name,
  //     //         avatar: image,
  //     //         googleId: id,
  //     //         verified: true,
  //     //       });
  //     //     }
  //     //   } catch (error) {
  //     //     throw new AuthError("Error while creating user");
  //     //   }
  //     // }

  //     return true;
  //   },
  // },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(options);
