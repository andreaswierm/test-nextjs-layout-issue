"use client";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react";
import { useDisconnect } from 'wagmi';

const Page = () => {
  const { disconnect } = useDisconnect();

  return (
    <>
    <h1>
      page1
    </h1>

    <DynamicWidget />

    <button onClick={() => disconnect()}>
      Disconnect
    </button>
    </>
  )
}

export default Page;
