import styled from 'styled-components'
import { HiChevronLeft } from 'react-icons/hi'
import { BiGitBranch } from 'react-icons/bi'

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContainerTitle = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
export const IconBack = styled(HiChevronLeft)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`
export const BranchIcon = styled(BiGitBranch)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
`
export const BoxIconTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`
export const Title = styled.p`
  margin-left: 6px;
  font-size: 1.2rem;
  font-weight: 700;
`
export const ContainerBranches = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
`
export const TitleSelect = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`
export const Select = styled.select`
  width: 100%;
  max-width: 200px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.baseTertiary};
  border-radius: 4px;
  padding: 0 10px;
  font-size: 1.2rem;
  outline: none;
  margin-bottom: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
export const SelectOption = styled.option`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.baseTertiary};
  }
`
export const BranchName = styled.p`
  position: relative;
  margin: 0;
  margin-top: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 30px;
  opacity: 0.85;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 1;

    ::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.text};
      opacity: 1;
      border-radius: 4px;
      transition: all 0.1s ease-in-out;
    }
  }
`
export const ContainerCommits = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 24px;
  margin-top: 12px;
`
export const CardCommit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 36px;
  padding-bottom: 14px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`
export const HeaderCardCommit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: ${({ theme }) => theme.colors.secondary};
`
export const CommitTitle = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 30px;
  opacity: 0.85;
`
export const CommitDate = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 30px;
  opacity: 0.85;
  margin-left: 20px;
`