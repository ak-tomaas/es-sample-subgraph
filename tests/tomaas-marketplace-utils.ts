import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NFTBought,
  NFTListedForSale,
  NFTsBought,
  NFTsListedForSale,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/TomaasMarketplace/TomaasMarketplace"

export function createNFTBoughtEvent(
  collection: Address,
  tokenId: BigInt,
  price: BigInt
): NFTBought {
  let nftBoughtEvent = changetype<NFTBought>(newMockEvent())

  nftBoughtEvent.parameters = new Array()

  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftBoughtEvent
}

export function createNFTListedForSaleEvent(
  collection: Address,
  tokenId: BigInt,
  price: BigInt
): NFTListedForSale {
  let nftListedForSaleEvent = changetype<NFTListedForSale>(newMockEvent())

  nftListedForSaleEvent.parameters = new Array()

  nftListedForSaleEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  nftListedForSaleEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftListedForSaleEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftListedForSaleEvent
}

export function createNFTsBoughtEvent(
  collection: Address,
  prices: Array<BigInt>,
  tokenIds: Array<BigInt>
): NFTsBought {
  let nfTsBoughtEvent = changetype<NFTsBought>(newMockEvent())

  nfTsBoughtEvent.parameters = new Array()

  nfTsBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  nfTsBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "prices",
      ethereum.Value.fromUnsignedBigIntArray(prices)
    )
  )
  nfTsBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )

  return nfTsBoughtEvent
}

export function createNFTsListedForSaleEvent(
  collection: Address,
  price: BigInt,
  tokenIds: Array<BigInt>
): NFTsListedForSale {
  let nfTsListedForSaleEvent = changetype<NFTsListedForSale>(newMockEvent())

  nfTsListedForSaleEvent.parameters = new Array()

  nfTsListedForSaleEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  nfTsListedForSaleEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  nfTsListedForSaleEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )

  return nfTsListedForSaleEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
