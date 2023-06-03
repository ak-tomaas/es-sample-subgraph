import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  ClaimEarnings as ClaimEarningsEvent,
  ClaimEarningsAllRented as ClaimEarningsAllRentedEvent,
  ClaimEarningsMultiple as ClaimEarningsMultipleEvent,
  MetadataUpdate as MetadataUpdateEvent,
  NewTRN as NewTRNEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  PayOutEarnings as PayOutEarningsEvent,
  PayOutEarningsAllRented as PayOutEarningsAllRentedEvent,
  PayOutEarningsMultiple as PayOutEarningsMultipleEvent,
  Transfer as TransferEvent,
  Unpaused as UnpausedEvent,
  UpdateUser as UpdateUserEvent,
  UpdateUsers as UpdateUsersEvent
} from "../generated/TomaasRWN/TomaasRWN"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  ClaimEarnings,
  ClaimEarningsAllRented,
  ClaimEarningsMultiple,
  MetadataUpdate,
  NewTRN,
  OwnershipTransferred,
  Paused,
  PayOutEarnings,
  PayOutEarningsAllRented,
  PayOutEarningsMultiple,
  Transfer,
  Unpaused,
  UpdateUser,
  UpdateUsers
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBatchMetadataUpdate(
  event: BatchMetadataUpdateEvent
): void {
  let entity = new BatchMetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fromTokenId = event.params._fromTokenId
  entity._toTokenId = event.params._toTokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimEarnings(event: ClaimEarningsEvent): void {
  let entity = new ClaimEarnings(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimEarningsAllRented(
  event: ClaimEarningsAllRentedEvent
): void {
  let entity = new ClaimEarningsAllRented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.count = event.params.count
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimEarningsMultiple(
  event: ClaimEarningsMultipleEvent
): void {
  let entity = new ClaimEarningsMultiple(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tokenIds = event.params.tokenIds
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetadataUpdate(event: MetadataUpdateEvent): void {
  let entity = new MetadataUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewTRN(event: NewTRNEvent): void {
  let entity = new NewTRN(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.acceptedToken = event.params.acceptedToken
  entity.svcStartDate = event.params.svcStartDate
  entity.usefulLife = event.params.usefulLife
  entity.price = event.params.price

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

export function handlePayOutEarnings(event: PayOutEarningsEvent): void {
  let entity = new PayOutEarnings(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.renter = event.params.renter
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.reportUri = event.params.reportUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayOutEarningsAllRented(
  event: PayOutEarningsAllRentedEvent
): void {
  let entity = new PayOutEarningsAllRented(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.renter = event.params.renter
  entity.amount = event.params.amount
  entity.reportUri = event.params.reportUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayOutEarningsMultiple(
  event: PayOutEarningsMultipleEvent
): void {
  let entity = new PayOutEarningsMultiple(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.renter = event.params.renter
  entity.tokenIds = event.params.tokenIds
  entity.amount = event.params.amount
  entity.reportUri = event.params.reportUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

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

export function handleUpdateUser(event: UpdateUserEvent): void {
  let entity = new UpdateUser(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.user = event.params.user
  entity.expires = event.params.expires

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateUsers(event: UpdateUsersEvent): void {
  let entity = new UpdateUsers(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.expires = event.params.expires
  entity.tokenIds = event.params.tokenIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
