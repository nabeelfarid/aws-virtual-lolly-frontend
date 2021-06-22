/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Lolly = {
  __typename: "Lolly",
  colorBottom: string,
  colorMiddle: string,
  colorTop: string,
  from: string,
  id: string,
  message: string,
  to: string,
};

export type CreateLollyMutationVariables = {
  colorBottom: string,
  colorMiddle: string,
  colorTop: string,
  from: string,
  message: string,
  to: string,
};

export type CreateLollyMutation = {
  createLolly:  {
    __typename: "Lolly",
    colorBottom: string,
    colorMiddle: string,
    colorTop: string,
    from: string,
    id: string,
    message: string,
    to: string,
  },
};

export type TriggerWebsiteRebuildMutation = {
  triggerWebsiteRebuild: boolean,
};

export type GetLolliesQuery = {
  getLollies:  Array< {
    __typename: "Lolly",
    colorBottom: string,
    colorMiddle: string,
    colorTop: string,
    from: string,
    id: string,
    message: string,
    to: string,
  } >,
};

export type GetLollyQueryVariables = {
  id: string,
};

export type GetLollyQuery = {
  getLolly?:  {
    __typename: "Lolly",
    colorBottom: string,
    colorMiddle: string,
    colorTop: string,
    from: string,
    id: string,
    message: string,
    to: string,
  } | null,
};
