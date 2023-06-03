import {
  AddNewCollection as AddNewCollectionEvent,
  NFTListed as NFTListedEvent,
  NFTUnlisted as NFTUnlistedEvent,
  NFTsListed as NFTsListedEvent,
  NFTsUnlisted as NFTsUnlistedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  RenterRegistered as RenterRegisteredEvent,
  RenterUnregistered as RenterUnregisteredEvent,
  SettlementReportAdded as SettlementReportAddedEvent,
  SettlementReportUpdated as SettlementReportUpdatedEvent,
  Unpaused as UnpausedEvent
} from "../generated/TomaasLending/TomaasLending"
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
} from "../generated/schema"

export function handleAddNewCollection(event: AddNewCollectionEvent): void {
  let entity = new AddNewCollection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.collection = event.params.collection
  entity.tokenAddress = event.params.tokenAddress
  entity.revenueShareRatio = event.params.revenueShareRatio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTListed(event: NFTListedEvent): void {
  let entity = new NFTListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTUnlisted(event: NFTUnlistedEvent): void {
  let entity = new NFTUnlisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTsListed(event: NFTsListedEvent): void {
  let entity = new NFTsListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTsUnlisted(event: NFTsUnlistedEvent): void {
  let entity = new NFTsUnlisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRenterRegistered(event: RenterRegisteredEvent): void {
  let entity = new RenterRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddr = event.params.nftAddr
  entity.renterAddr = event.params.renterAddr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRenterUnregistered(event: RenterUnregisteredEvent): void {
  let entity = new RenterUnregistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddr = event.params.nftAddr
  entity.renterAddr = event.params.renterAddr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlementReportAdded(
  event: SettlementReportAddedEvent
): void {
  let entity = new SettlementReportAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.renter = event.params.renter
  entity.settlementDate = event.params.settlementDate
  entity.reportUri = event.params.reportUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettlementReportUpdated(
  event: SettlementReportUpdatedEvent
): void {
  let entity = new SettlementReportUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.renter = event.params.renter
  entity.settlementDate = event.params.settlementDate
  entity.reportUri = event.params.reportUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
