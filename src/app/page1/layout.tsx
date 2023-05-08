"use client";
import { DynamicContextProvider, DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { DYNAMIC_AUTH_CONFIG } from "../dynamic_config";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { FC, PropsWithChildren } from "react";
import { useAccount } from "wagmi";

const TestContext: FC<PropsWithChildren> = ({
  children,
}) => {
  const { primaryWallet } = useDynamicContext();
  const { address, status } = useAccount({
    onDisconnect: () => console.log("page1 disconnected", primaryWallet)
  });

  return (
    <div>
      {children}
    </div>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  return (
      <>
        <h1>
          page 1 layout
        </h1>

        <Link href='page1'>
          page1
        </Link>

        <Link href='page2'>
          page2
        </Link>


        <div key="page1">
          <DynamicContextProvider settings={{
            ...DYNAMIC_AUTH_CONFIG,
            eventsCallbacks: {
              onLogout: () => console.log('onLogout 1')
            },
          }}>
            <DynamicWagmiConnector>
              <TestContext>
                {children}
              </TestContext>
            </DynamicWagmiConnector>
          </DynamicContextProvider>
        </div>
      </>
  )
}
