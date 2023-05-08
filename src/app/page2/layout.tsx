"use client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react"
import Link from "next/link"
import { DYNAMIC_AUTH_CONFIG } from "../dynamic_config";
import { useRouter } from "next/navigation";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  return (
    <>
      <h1>
        page 2 layout
      </h1>

      <Link href='page1'>
        page1
      </Link>

      <Link href='page2'>
        page2
      </Link>

      <DynamicContextProvider settings={{
        ...DYNAMIC_AUTH_CONFIG,

          eventsCallbacks: {
            onLogout: () => console.log('onLogout 2')
          },
      }}>
        <DynamicWagmiConnector>
          {children}
        </DynamicWagmiConnector>
      </DynamicContextProvider>
    </>
  )
}
