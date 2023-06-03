import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddTLNAddress } from "../generated/schema"
import { AddTLNAddress as AddTLNAddressEvent } from "../generated/TomaasStaking/TomaasStaking"
import { handleAddTLNAddress } from "../src/tomaas-staking"
import { createAddTLNAddressEvent } from "./tomaas-staking-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tlnAddr = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenAddr = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let price = BigInt.fromI32(234)
    let rates = [BigInt.fromI32(234)]
    let newAddTLNAddressEvent = createAddTLNAddressEvent(
      tlnAddr,
      tokenAddr,
      price,
      rates
    )
    handleAddTLNAddress(newAddTLNAddressEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddTLNAddress created and stored", () => {
    assert.entityCount("AddTLNAddress", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddTLNAddress",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tlnAddr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddTLNAddress",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAddr",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddTLNAddress",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "AddTLNAddress",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rates",
      "[234]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
