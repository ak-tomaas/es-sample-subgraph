import {
  NFTBought as NFTBoughtEvent,
  NFTListedForSale as NFTListedForSaleEvent,
  NFTsBought as NFTsBoughtEvent,
  NFTsListedForSale as NFTsListedForSaleEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent
} from "../generated/TomaasMarketplace/TomaasMarketplace"
import {
  NFTBought,
  NFTListedForSale,
  NFTsBought,
  NFTsListedForSale,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/schema"

export function handleNFTBought(event: NFTBoughtEvent): void {
  let entity = new NFTBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTListedForSale(event: NFTListedForSaleEvent): void {
  let entity = new NFTListedForSale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTsBought(event: NFTsBoughtEvent): void {
  let entity = new NFTsBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.prices = event.params.prices
  entity.tokenIds = event.params.tokenIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTsListedForSale(event: NFTsListedForSaleEvent): void {
  let entity = new NFTsListedForSale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.price = event.params.price
  entity.tokenIds = event.params.tokenIds

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
