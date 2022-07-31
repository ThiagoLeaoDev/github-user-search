import styled from 'styled-components'
import Image from 'next/image'

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
  justify-content: flex-start;
  align-items: center;
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.baseTertiary};
  border-right: none;
  border-radius: 4px 0 0 4px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`
export const ButtonSearch = styled.button`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.base};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.85;
  }
`

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`
export const HeadInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BasicInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const Avatar = styled.div`
  position: relative;
  width: 20vw;
  height: 20vw;
  max-width: 150px;
  max-height: 150px;
  min-width: 86px;
  min-height: 86px;
  border-radius: 50%;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.base};
`
export const UserImage = styled(Image)`
  object-position: top;
  border-radius: 50%;
`

export const ContainerText = styled.div`
  
`
export const Name = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
`
export const NameText = styled.p`
  margin: 8px 0;
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.6;
`
export const NumbersInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2rem;
  flex-wrap: wrap;
`
export const TextNumbers = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.7;
  margin-right: 1rem;
`
export const Bold = styled.span`
  font-weight: 700;
`
export const ContainerRepos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`
export const ContainerTitleRepos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`
export const TitleRepos = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.8;
`
export const CardRepo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.baseSecondary};
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
export const CardRepoHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const ContainerRepoTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const CardRepoTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
export const CardRepoDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.8;
`
export const CardRepoFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const CardRepoLanguage = styled.p`
  margin: 0;
  font-size: 0.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 0.5rem;
  border-radius: 20px;
  margin-right: 16px;
`
export const ContainerStars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
export const CardRepoStars = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.8;
  margin-left: 8px;
  border-radius: 20px;
`

