import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
export const Main = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.form`
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
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`
export const ButtonSearch = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0 4px 4px 0;
  font-size: 1.2rem;
  background-color: #111;
  color: #fff;
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
`
export const Avatar = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 1rem;
  background-color: #ccc;
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

// export const Title = styled.h1`
//   margin: 0;
//   line-height: 1.15;
//   font-size: 4rem;
//   text-align: center;
//   text-decoration: none;

//   a {
//     color: ${({ theme }) => theme.colors.secondary};
//     text-decoration: none;
//     &:hover,
//     :focus,
//     :active {
//       text-decoration: underline;
//     }
//   }
// `

// export const Description = styled.p`
//   text-align: center;
//   line-height: 1.5;
//   font-size: 1.5rem;
// `
// export const CodeTag = styled.code`
//   background: #fafafa;
//   border-radius: 5px;
//   margin: 0 0.75rem;
//   padding: 0.75rem;
//   font-size: 1.1rem;
//   font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
//     Bitstream Vera Sans Mono, Courier New, monospace;
// `
