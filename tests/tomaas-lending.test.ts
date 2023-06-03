import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AddNewCollection } from "../generated/schema"
import { AddNewCollection as AddNewCollectionEvent } from "../generated/TomaasLending/TomaasLending"
import { handleAddNewCollection } from "../src/tomaas-lending"
import { createAddNewCollectionEvent } from "./tomaas-lending-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let collection = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let revenueShareRatio = BigInt.fromI32(234)
    let newAddNewCollectionEvent = createAddNewCollectionEvent(
      owner,
      collection,
      tokenAddress,
      revenueShareRatio
    )
    handleAddNewCollection(newAddNewCollectionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddNewCollection created and stored", () => {
    assert.entityCount("AddNewCollection", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddNewCollection",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddNewCollection",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collection",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddNewCollection",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddNewCollection",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "revenueShareRatio",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
