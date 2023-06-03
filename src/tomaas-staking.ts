import {
  AddTLNAddress as AddTLNAddressEvent,
  AddTRNAddress as AddTRNAddressEvent,
  Claim as ClaimEvent,
  ClaimFromTRNs as ClaimFromTRNsEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  SellTRNsToPool as SellTRNsToPoolEvent,
  StakeTLNs as StakeTLNsEvent,
  Unpaused as UnpausedEvent,
  UnstakeTLNs as UnstakeTLNsEvent
} from "../generated/TomaasStaking/TomaasStaking"
import {
  AddTLNAddress,
  AddTRNAddress,
  Claim,
  ClaimFromTRNs,
  OwnershipTransferred,
  Paused,
  SellTRNsToPool,
  StakeTLNs,
  Unpaused,
  UnstakeTLNs
} from "../generated/schema"

export function handleAddTLNAddress(event: AddTLNAddressEvent): void {
  let entity = new AddTLNAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tlnAddr = event.params.tlnAddr
  entity.tokenAddr = event.params.tokenAddr
  entity.price = event.params.price
  entity.rates = event.params.rates

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddTRNAddress(event: AddTRNAddressEvent): void {
  let entity = new AddTRNAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trnAddr = event.params.trnAddr
  entity.acceptedToken = event.params.acceptedToken
  entity.revenueShareRatio = event.params.revenueShareRatio

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaim(event: ClaimEvent): void {
  let entity = new Claim(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tlnAddr = event.params.tlnAddr
  entity.staker = event.params.staker
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimFromTRNs(event: ClaimFromTRNsEvent): void {
  let entity = new ClaimFromTRNs(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trnAddr = event.params.trnAddr
  entity.amount = event.params.amount
  entity.countOfTRNs = event.params.countOfTRNs

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

export function handleSellTRNsToPool(event: SellTRNsToPoolEvent): void {
  let entity = new SellTRNsToPool(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trnAddr = event.params.trnAddr
  entity.buyer = event.params.buyer
  entity.tokenIds = event.params.tokenIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeTLNs(event: StakeTLNsEvent): void {
  let entity = new StakeTLNs(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tlnAddr = event.params.tlnAddr
  entity.staker = event.params.staker
  entity.tokenIds = event.params.tokenIds

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

export function handleUnstakeTLNs(event: UnstakeTLNsEvent): void {
  let entity = new UnstakeTLNs(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tlnAddr = event.params.tlnAddr
  entity.staker = event.params.staker
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
