import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/TomaasRWN/TomaasRWN"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBatchMetadataUpdateEvent(
  _fromTokenId: BigInt,
  _toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_fromTokenId",
      ethereum.Value.fromUnsignedBigInt(_fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_toTokenId",
      ethereum.Value.fromUnsignedBigInt(_toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createClaimEarningsEvent(
  owner: Address,
  tokenId: BigInt,
  amount: BigInt
): ClaimEarnings {
  let claimEarningsEvent = changetype<ClaimEarnings>(newMockEvent())

  claimEarningsEvent.parameters = new Array()

  claimEarningsEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  claimEarningsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  claimEarningsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimEarningsEvent
}

export function createClaimEarningsAllRentedEvent(
  owner: Address,
  count: BigInt,
  amount: BigInt
): ClaimEarningsAllRented {
  let claimEarningsAllRentedEvent = changetype<ClaimEarningsAllRented>(
    newMockEvent()
  )

  claimEarningsAllRentedEvent.parameters = new Array()

  claimEarningsAllRentedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  claimEarningsAllRentedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  claimEarningsAllRentedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimEarningsAllRentedEvent
}

export function createClaimEarningsMultipleEvent(
  owner: Address,
  tokenIds: Array<BigInt>,
  amount: BigInt
): ClaimEarningsMultiple {
  let claimEarningsMultipleEvent = changetype<ClaimEarningsMultiple>(
    newMockEvent()
  )

  claimEarningsMultipleEvent.parameters = new Array()

  claimEarningsMultipleEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  claimEarningsMultipleEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )
  claimEarningsMultipleEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimEarningsMultipleEvent
}

export function createMetadataUpdateEvent(_tokenId: BigInt): MetadataUpdate {
  let metadataUpdateEvent = changetype<MetadataUpdate>(newMockEvent())

  metadataUpdateEvent.parameters = new Array()

  metadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return metadataUpdateEvent
}

export function createNewTRNEvent(
  name: string,
  acceptedToken: Address,
  svcStartDate: BigInt,
  usefulLife: BigInt,
  price: BigInt
): NewTRN {
  let newTrnEvent = changetype<NewTRN>(newMockEvent())

  newTrnEvent.parameters = new Array()

  newTrnEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  newTrnEvent.parameters.push(
    new ethereum.EventParam(
      "acceptedToken",
      ethereum.Value.fromAddress(acceptedToken)
    )
  )
  newTrnEvent.parameters.push(
    new ethereum.EventParam(
      "svcStartDate",
      ethereum.Value.fromUnsignedBigInt(svcStartDate)
    )
  )
  newTrnEvent.parameters.push(
    new ethereum.EventParam(
      "usefulLife",
      ethereum.Value.fromUnsignedBigInt(usefulLife)
    )
  )
  newTrnEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return newTrnEvent
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

export function createPayOutEarningsEvent(
  renter: Address,
  tokenId: BigInt,
  amount: BigInt,
  reportUri: string
): PayOutEarnings {
  let payOutEarningsEvent = changetype<PayOutEarnings>(newMockEvent())

  payOutEarningsEvent.parameters = new Array()

  payOutEarningsEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  payOutEarningsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  payOutEarningsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  payOutEarningsEvent.parameters.push(
    new ethereum.EventParam("reportUri", ethereum.Value.fromString(reportUri))
  )

  return payOutEarningsEvent
}

export function createPayOutEarningsAllRentedEvent(
  renter: Address,
  amount: BigInt,
  reportUri: string
): PayOutEarningsAllRented {
  let payOutEarningsAllRentedEvent = changetype<PayOutEarningsAllRented>(
    newMockEvent()
  )

  payOutEarningsAllRentedEvent.parameters = new Array()

  payOutEarningsAllRentedEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  payOutEarningsAllRentedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  payOutEarningsAllRentedEvent.parameters.push(
    new ethereum.EventParam("reportUri", ethereum.Value.fromString(reportUri))
  )

  return payOutEarningsAllRentedEvent
}

export function createPayOutEarningsMultipleEvent(
  renter: Address,
  tokenIds: Array<BigInt>,
  amount: BigInt,
  reportUri: string
): PayOutEarningsMultiple {
  let payOutEarningsMultipleEvent = changetype<PayOutEarningsMultiple>(
    newMockEvent()
  )

  payOutEarningsMultipleEvent.parameters = new Array()

  payOutEarningsMultipleEvent.parameters.push(
    new ethereum.EventParam("renter", ethereum.Value.fromAddress(renter))
  )
  payOutEarningsMultipleEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )
  payOutEarningsMultipleEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  payOutEarningsMultipleEvent.parameters.push(
    new ethereum.EventParam("reportUri", ethereum.Value.fromString(reportUri))
  )

  return payOutEarningsMultipleEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpdateUserEvent(
  tokenId: BigInt,
  user: Address,
  expires: BigInt
): UpdateUser {
  let updateUserEvent = changetype<UpdateUser>(newMockEvent())

  updateUserEvent.parameters = new Array()

  updateUserEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  updateUserEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  updateUserEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )

  return updateUserEvent
}

export function createUpdateUsersEvent(
  user: Address,
  expires: BigInt,
  tokenIds: Array<BigInt>
): UpdateUsers {
  let updateUsersEvent = changetype<UpdateUsers>(newMockEvent())

  updateUsersEvent.parameters = new Array()

  updateUsersEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  updateUsersEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )
  updateUsersEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )

  return updateUsersEvent
}
