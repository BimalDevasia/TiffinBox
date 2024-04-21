import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/admin/[...nextauth]/route';

export const getAdminSession = async () => {
    const session = await getServerSession(authOptions);
    return session;
};