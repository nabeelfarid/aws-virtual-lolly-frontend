/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLolly = /* GraphQL */ `
  mutation CreateLolly(
    $colorBottom: String!
    $colorMiddle: String!
    $colorTop: String!
    $from: String!
    $message: String!
    $to: String!
  ) {
    createLolly(
      colorBottom: $colorBottom
      colorMiddle: $colorMiddle
      colorTop: $colorTop
      from: $from
      message: $message
      to: $to
    ) {
      colorBottom
      colorMiddle
      colorTop
      from
      id
      message
      to
    }
  }
`;
export const triggerWebsiteRebuild = /* GraphQL */ `
  mutation TriggerWebsiteRebuild {
    triggerWebsiteRebuild
  }
`;
