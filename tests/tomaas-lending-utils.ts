import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddNewCollection,
  NFTListed,
  NFTUnlisted,
  NFTsListed,
  NFTsUnlisted,
  OwnershipTransferred,
  Paused,
  RenterRegistered,
  RenterUnregistered,
  SettlementReportAdded,
  SettlementReportUpdated,
  Unpaused
} from "../generated/TomaasLending/TomaasLending"

export function createAddNewCollectionEvent(
  owner: Address,
  collection: Address,
  tokenAddress: Address,
  revenueShareRatio: BigInt
): AddNewCollection {
  let addNewCollectionEvent = changetype<AddNewCollection>(newMockEvent())

  addNewCollectionEvent.parameters = new Array()

  addNewCollectionEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  addNewCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  addNewCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  addNewCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "revenueShareRatio",
      ethereum.Value.fromUnsignedBigInt(revenueShareRatio)
    )
  )

  return addNewCollectionEvent
}

export function createNFTListedEvent(
  nftAddress: Address,
  tokenId: BigInt
): NFTListed {
  let nftListedEvent = changetype<NFTListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftListedEvent
}

export function createNFTUnlistedEvent(
  nftAddress: Address,
  tokenId: BigInt
): NFTUnlisted {
  let nftUnlistedEvent = changetype<NFTUnlisted>(newMockEvent())

  nftUnlistedEvent.parameters = new Array()

  nftUnlistedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nftUnlistedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftUnlistedEvent
}

export function createNFTsListedEvent(
  nftAddress: Address,
  owner: Address
): NFTsListed {
  let nfTsListedEvent = changetype<NFTsListed>(newMockEvent())

  nfTsListedEvent.parameters = new Array()

  nfTsListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nfTsListedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return nfTsListedEvent
}

export function createNFTsUnlistedEvent(
  nftAddress: Address,
  owner: Address
): NFTsUnlisted {
  let nfTsUnlistedEvent = changetype<NFTsUnlisted>(newMockEvent())

  nfTsUnlistedEvent.parameters = new Array()

  nfTsUnlistedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  nfTsUnlistedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return nfTsUnlistedEvent
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

export function createRenterRegisteredEvent(
  nftAddr: Address,
  renterAddr: Address
): RenterRegistered {
  let renterRegisteredEvent = changetype<RenterRegistered>(newMockEvent())

  renterRegisteredEvent.parameters = new Array()

  renterRegisteredEvent.parameters.push(
    new ethereum.EventParam("nftAddr", ethereum.Value.fromAddress(nftAddr))
  )
  renterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "renterAddr",
      ethereum.Value.fromAddress(renterAddr)
    )
  )

  return renterRegisteredEvent
}

export function createRenterUnregisteredEvent(
  nftAddr: Address,
  renterAddr: Address
): RenterUnregistered {
  let renterUnregisteredEvent = changetype<RenterUnregistered>(newMockEvent())

  renterUnregisteredEvent.parameters = new Array()

  renterUnregisteredEvent.parameters.push(
    new ethereum.EventParam("nftAddr", ethereum.Value.fromAddress(nftAddr))
  )
  renterUnregisteredEvent.parameters.push(
    new ethereum.EventParam(
      "renterAddr",
      ethereum.Value.fromAddress(renterAddr)
    )
  )

  return renterUnregisteredEvent
}

export function createSettlementReportAddedEvent(
  nftAddress: Address,
  renter: Address,
  settlementDate: BigInt,
  reportUri: string
): SettlementReportAdded {
  let settlementReportAddedEvent = changetype<SettlementReportAdded>(
    newMockEvent()
  )

  settlementReportAddedEvent.parameters = new Array()

  settlementReportAddedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  settlementReportAddedEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  settlementReportAddedEvent.parameters.push(
    new ethereum.EventParam(
      "settlementDate",
      ethereum.Value.fromUnsignedBigInt(settlementDate)
    )
  )
  settlementReportAddedEvent.parameters.push(
    new ethereum.EventParam("reportUri", ethereum.Value.fromString(reportUri))
  )

  return settlementReportAddedEvent
}

export function createSettlementReportUpdatedEvent(
  nftAddress: Address,
  renter: Address,
  settlementDate: BigInt,
  reportUri: string
): SettlementReportUpdated {
  let settlementReportUpdatedEvent = changetype<SettlementReportUpdated>(
    newMockEvent()
  )

  settlementReportUpdatedEvent.parameters = new Array()

  settlementReportUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  settlementReportUpdatedEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  settlementReportUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "settlementDate",
      ethereum.Value.fromUnsignedBigInt(settlementDate)
    )
  )
  settlementReportUpdatedEvent.parameters.push(
    new ethereum.EventParam("reportUri", ethereum.Value.fromString(reportUri))
  )

  return settlementReportUpdatedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
