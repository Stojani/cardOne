import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { CardanoWallet, useWallet } from "@meshsdk/react";
import {
  resolvePlutusScriptAddress,
  Transaction,
  resolvePaymentKeyHash,
  KoiosProvider,
  resolveDataHash,
} from "@meshsdk/core";
import Link from "next/link";
import scriptCbor from "../backend/contract";
import type { PlutusScript } from "@meshsdk/core";

const product = {
  name: "Conference about Artificial Intelligence",
  price: "₳5",
  href: "/product",
  breadcrumbs: [
    { id: 1, name: "Conferences", href: "/collection" },
  ],
  images: [
    { 
      id: 1,
      src: "AIconf.png",
      alt: "Conference about Artificial Intelligence",
    },
    { 
      id: 2,
      src: "/AIplay.png",
      alt: "Conference about Artificial Intelligence",
    },
  ],

  description:
    'Join the conference on all the news about artificial intelligence',
  highlights: [
    "News",
    "Comparison of currently available technologies",
    "Impacts in the working world",
    "Considerations on the future of artificial intelligence",
  ],
  details:
    'Buy a card to gain access to this or another of all our available events',
};
const reviews = { href: "#", average: 5, totalCount: 267 };

enum States {
  init,
  locking,
  lockingConfirming,
  locked,
  unlocking,
  unlockingConfirming,
  unlocked,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {

  const [state, setState] = useState(States.init);

  const { wallet, connected } = useWallet();

  const script: PlutusScript = {
    code: scriptCbor,
    version: "V2",
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link href={breadcrumb.href}>
                    <span className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </span>
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <Link href={product.href}>
                <span className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </span>
              </Link>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[state == States.unlocked ? 1 : 0].src}
              alt={product.images[state == States.unlocked ? 1 : 0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {(
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900 flex items-center">
                <img
                  src="https://cryptologos.cc/logos/cardano-ada-logo.png"
                  alt=""
                  className="block h-8 w-8 flex-shrink-0"
                />
                <span>{product.price}</span>
              </p>

              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10">

                {connected ? (
                  state != States.locking &&
                  state != States.unlocking && (
                    <>
                      {(state == States.init) && (
                        <Lock script={script} setState={setState} state={state} wallet={wallet}/>
                      )}
                      {(state == States.locked) && (
                        <Unlock script={script} setState={setState} state={state} wallet={wallet}/>
                      )}
                    </>
                  )
                ) : (
                  <div className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent text-base font-medium bg-indigo-100">
                    <CardanoWallet />
                  </div>
                )}
                {connected && (
                  <div style={{ display: "block" }}>
                    {(state == States.locking || state == States.unlocking) && (
                      <>Creating transaction...</>
                    )}

                    {(state == States.lockingConfirming ||
                      state == States.unlockingConfirming) && (
                      <>Awaiting transaction confirm...</>
                    )}

                    {(state == States.locked || state == States.unlocked) && (
                      <>Transaction confirmed</>
                    )}
                  </div>
                )}
              </form>
            </div>
          )}

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lock({script, setState, state, wallet}) {

  async function lockAsset() {
    setState(States.locking);
    const scriptAddress = resolvePlutusScriptAddress(script, 0);

    const address = (await wallet.getUsedAddresses())[0];
    const walletKeyhash = resolvePaymentKeyHash(address);

    const tx = new Transaction({ initiator: wallet }).sendLovelace(
      {
        address: scriptAddress,
        datum: {
          value: walletKeyhash,
          inline: true,
        },
      },
      "5000000"
    );

    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await wallet.submitTx(signedTx);

    console.log("lock txHash", txHash);

    if (txHash) {
      const koios = new KoiosProvider("preprod");
      setState(States.lockingConfirming);
      koios.onTxConfirmed(txHash, () => {
        setState(States.locked);
      });
    }
  }

  return (
    <button
      type="button"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => lockAsset()}
      disabled={state == States.lockingConfirming}
    >
      Buy Card
    </button>
  );
}

function Unlock({script, setState, state, wallet}) {

  async function _getAssetUtxo({ scriptAddress, dataHash }) {
    const blockchainProvider = new KoiosProvider("preprod");
    const utxos = await blockchainProvider.fetchAddressUTxOs(
      scriptAddress,
      "lovelace"
    );

    let utxo = utxos.find((utxo: any) => {
      return utxo.output.dataHash == dataHash;
    });

    return utxo;
  }

  async function unlockAsset() {
    setState(States.unlocking);
    const scriptAddress = resolvePlutusScriptAddress(script, 0);

    const address = (await wallet.getUsedAddresses())[0];
    const walletKeyhash = resolvePaymentKeyHash(address);

    //change this address value properly
    const recipientAddr = "addr_test1YYYYYYYYYYYYYYYYYYYYYY";

    const dataHash = resolveDataHash(walletKeyhash);

    const utxo = await _getAssetUtxo({
      scriptAddress: scriptAddress,
      dataHash: dataHash,
    });

    const redeemer = {
      data: "Hello cardOne",
    };

    // create the unlock asset transaction
    const tx = new Transaction({ initiator: wallet })
      .redeemValue({
        value: utxo,
        script: script,
        datum: utxo,
        redeemer: redeemer,
      })
      .sendValue(recipientAddr, utxo)
      .setRequiredSigners([address]);

    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx, true);
    const txHash = await wallet.submitTx(signedTx);

    console.log("unlock txHash", txHash);

    if (txHash) {
      const koios = new KoiosProvider("preprod");
      setState(States.unlockingConfirming);
      koios.onTxConfirmed(txHash, () => {
        setState(States.unlocked);
      });
    }
  }

  return (
    <button
      type="button"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => unlockAsset()}
      disabled={state == States.unlockingConfirming} > Use Card to Join Event
  </button>
  );
}
