'use client';

import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';

export default function ClientSessionProvider({ children, session }: PropsWithChildren<{ session: any }>) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}