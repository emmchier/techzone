import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing(5)} 0;

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    align-items: flex-start;
  }
`;

export const Filters = styled(Content)`
  margin: 0;

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    flex-direction: column;
  }
`;

export const CategoryFilter = styled(Content)`
  border-right: 2px solid ${({ theme }) => theme.color.neutral.grey300};
  padding-right: ${({ theme }) => theme.spacing(10)};
  margin-right: ${({ theme }) => theme.spacing(10)};

  @media only screen and (${({ theme }) => theme.breakpoints.tabletLandscape}) {
    border-right: none;
    margin: 0;
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;

export const SortFilter = styled(Content)`
  ul {
    display: flexbox;
    overflow-x: scroll;
  }
`;

export const PagerFilter = styled(Content)`
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: space-between;
`;

export const Item = styled.li`
  button {
    width: 100%;
  }
`;
