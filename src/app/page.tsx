import { Account } from "../components/Account";
import { Balance } from "../components/Balance";
import { ConnectKitButton } from "../components/ConnectKitButton";
import { Connected } from "../components/Connected";
import { JuiceboxProjectOwner } from "../components/JuiceboxProjectOwner";
import { NetworkSwitcher } from "../components/NetworkSwitcher";

export function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        wagmi + ConnectKit + Next.js + juicebox
      </h1>

      <ConnectKitButton />

      <JuiceboxProjectOwner />

      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
      </Connected>
    </>
  );
}

export default Page;
