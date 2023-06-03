import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/TomaasStaking/TomaasStaking"

export function createAddTLNAddressEvent(
  tlnAddr: Address,
  tokenAddr: Address,
  price: BigInt,
  rates: Array<BigInt>
): AddTLNAddress {
  let addTlnAddressEvent = changetype<AddTLNAddress>(newMockEvent())

  addTlnAddressEvent.parameters = new Array()

  addTlnAddressEvent.parameters.push(
    new ethereum.EventParam("tlnAddr", ethereum.Value.fromAddress(tlnAddr))
  )
  addTlnAddressEvent.parameters.push(
    new ethereum.EventParam("tokenAddr", ethereum.Value.fromAddress(tokenAddr))
  )
  addTlnAddressEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  addTlnAddressEvent.parameters.push(
    new ethereum.EventParam(
      "rates",
      ethereum.Value.fromUnsignedBigIntArray(rates)
    )
  )

  return addTlnAddressEvent
}

export function createAddTRNAddressEvent(
  trnAddr: Address,
  acceptedToken: Address,
  revenueShareRatio: BigInt
): AddTRNAddress {
  let addTrnAddressEvent = changetype<AddTRNAddress>(newMockEvent())

  addTrnAddressEvent.parameters = new Array()

  addTrnAddressEvent.parameters.push(
    new ethereum.EventParam("trnAddr", ethereum.Value.fromAddress(trnAddr))
  )
  addTrnAddressEvent.parameters.push(
    new ethereum.EventParam(
      "acceptedToken",
      ethereum.Value.fromAddress(acceptedToken)
    )
  )
  addTrnAddressEvent.parameters.push(
    new ethereum.EventParam(
      "revenueShareRatio",
      ethereum.Value.fromUnsignedBigInt(revenueShareRatio)
    )
  )

  return addTrnAddressEvent
}

export function createClaimEvent(
  tlnAddr: Address,
  staker: Address,
  amount: BigInt
): Claim {
  let claimEvent = changetype<Claim>(newMockEvent())

  claimEvent.parameters = new Array()

  claimEvent.parameters.push(
    new ethereum.EventParam("tlnAddr", ethereum.Value.fromAddress(tlnAddr))
  )
  claimEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  claimEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimEvent
}

export function createClaimFromTRNsEvent(
  trnAddr: Address,
  amount: BigInt,
  countOfTRNs: BigInt
): ClaimFromTRNs {
  let claimFromTrNsEvent = changetype<ClaimFromTRNs>(newMockEvent())

  claimFromTrNsEvent.parameters = new Array()

  claimFromTrNsEvent.parameters.push(
    new ethereum.EventParam("trnAddr", ethereum.Value.fromAddress(trnAddr))
  )
  claimFromTrNsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimFromTrNsEvent.parameters.push(
    new ethereum.EventParam(
      "countOfTRNs",
      ethereum.Value.fromUnsignedBigInt(countOfTRNs)
    )
  )

  return claimFromTrNsEvent
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

export function createSellTRNsToPoolEvent(
  trnAddr: Address,
  buyer: Address,
  tokenIds: Array<BigInt>
): SellTRNsToPool {
  let sellTrNsToPoolEvent = changetype<SellTRNsToPool>(newMockEvent())

  sellTrNsToPoolEvent.parameters = new Array()

  sellTrNsToPoolEvent.parameters.push(
    new ethereum.EventParam("trnAddr", ethereum.Value.fromAddress(trnAddr))
  )
  sellTrNsToPoolEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  sellTrNsToPoolEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )

  return sellTrNsToPoolEvent
}

export function createStakeTLNsEvent(
  tlnAddr: Address,
  staker: Address,
  tokenIds: Array<BigInt>
): StakeTLNs {
  let stakeTlNsEvent = changetype<StakeTLNs>(newMockEvent())

  stakeTlNsEvent.parameters = new Array()

  stakeTlNsEvent.parameters.push(
    new ethereum.EventParam("tlnAddr", ethereum.Value.fromAddress(tlnAddr))
  )
  stakeTlNsEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  stakeTlNsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )

  return stakeTlNsEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUnstakeTLNsEvent(
  tlnAddr: Address,
  staker: Address,
  tokenId: BigInt
): UnstakeTLNs {
  let unstakeTlNsEvent = changetype<UnstakeTLNs>(newMockEvent())

  unstakeTlNsEvent.parameters = new Array()

  unstakeTlNsEvent.parameters.push(
    new ethereum.EventParam("tlnAddr", ethereum.Value.fromAddress(tlnAddr))
  )
  unstakeTlNsEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  unstakeTlNsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return unstakeTlNsEvent
}
