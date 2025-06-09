import { LogoutButton } from '@/components/ui/LogoutButton';
import { getCurrentUser, isAuthenticated } from '@/lib/actions/auth.action';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) redirect("/sign-in");

    const user = await getCurrentUser();

    return (
        <div className="root-layout">
            <nav className="flex justify-between items-center px-6 py-4 shadow">
                {/* Logo section */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Speak Wise Logo" width={38} height={32} />
                    <h2 className="text-primary-100 text-lg font-semibold">SpeakWise</h2>
                </Link>

                <div className="relative group">
                    <button className="focus:outline-none" tabIndex={0}>
                        <Image
                            src={user?.profileImage || '/user-avatar.png'}
                            alt="User Avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </button>

                    <div className="absolute right-0 mt-2 w-52 border border-gray-200 shadow-lg rounded-md opacity-0 pointer-events-none group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity z-10">
                        <div className="px-4 py-2 border-b">
                            <p className="text-sm font-medium truncate">{user?.name}</p>
                            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                        <LogoutButton />
                    </div>
                </div>

            </nav>

            {children}
        </div>

    );
}

export default RootLayout