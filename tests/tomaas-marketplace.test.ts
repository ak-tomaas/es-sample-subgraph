import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { NFTBought } from "../generated/schema"
import { NFTBought as NFTBoughtEvent } from "../generated/TomaasMarketplace/TomaasMarketplace"
import { handleNFTBought } from "../src/tomaas-marketplace"
import { createNFTBoughtEvent } from "./tomaas-marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let collection = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let newNFTBoughtEvent = createNFTBoughtEvent(collection, tokenId, price)
    handleNFTBought(newNFTBoughtEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NFTBought created and stored", () => {
    assert.entityCount("NFTBought", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NFTBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collection",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NFTBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "NFTBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
