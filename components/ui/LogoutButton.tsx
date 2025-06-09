'use client';

import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/actions/auth.action';

export const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut();
        router.push('/sign-in');
    };

    return (
        <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
        >
            Sign out
        </button>
    );
};
