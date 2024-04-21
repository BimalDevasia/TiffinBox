import NextAuth, { NextAuthOptions, User as NextAuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongoDB from '@/lib/mongodb';
import User from '@/models/userSchema';
import bcrypt from 'bcrypt';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

type CustomSessionStrategy = {
    strategy: 'jwt';
};

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<User | null> {
                try {
                    await connectMongoDB();
                    const { email, password } = credentials as any;
                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new Error('Invalid email or password');
                    }

                    if (user.role !== 'admin') {
                        throw new Error('You are not an admin');
                    }

                    const isPasswordValid = await bcrypt.compare(password, user.password);

                    if (!isPasswordValid) {
                        throw new Error('Invalid email or password');
                    }

                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    };
                } catch (error) {
                    throw new Error('Internal server error');
                }
            },
        }),
    ],
    pages: {
        signIn: '/admin-login',
    },
    session: { strategy: 'jwt' } as CustomSessionStrategy,
    callbacks: {
        async jwt({ token, user }: { token: any; user: User | NextAuthUser }) {
            if (user) {
                token.id = (user as User).id;
                token.role = (user as User).role;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };