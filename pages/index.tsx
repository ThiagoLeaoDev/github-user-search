import Head from 'next/head'

import { HiOutlineSearch } from 'react-icons/hi'

import * as SC from '../styles/sharedstyles'

export default function Home() {
  return (
    <SC.Container>
      <Head>
        <title>Github User Search</title>
        <meta name="description" content="Search user with Github API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SC.Main>
        <SC.Form onSubmit={() => alert('Searching...')}>
          <SC.Input placeholder='Search username' />
          <SC.ButtonSearch type='submit'>
            <HiOutlineSearch size={24} color='#fff' />
          </SC.ButtonSearch>
        </SC.Form>
        <SC.ContainerInfos>
          <SC.HeadInfos>
            <SC.BasicInfos>
              <SC.Avatar>
                <SC.UserImage
                  src="/example.jpg"
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                  priority
                />
              </SC.Avatar>
              <SC.ContainerText>
                <SC.Name>
                  Thiago Leão
                </SC.Name>
                <SC.NameText>
                  @ThiagoLeaoDev
                </SC.NameText>
                <SC.NumbersInfos>
                  <SC.TextNumbers>Repositories: <SC.Bold>34</SC.Bold></SC.TextNumbers>
                  <SC.TextNumbers>Followers: <SC.Bold>28</SC.Bold></SC.TextNumbers>
                  <SC.TextNumbers>Following: <SC.Bold>35</SC.Bold></SC.TextNumbers>
                </SC.NumbersInfos>
              </SC.ContainerText>
            </SC.BasicInfos>
          </SC.HeadInfos>
        </SC.ContainerInfos>
      </SC.Main>
    </SC.Container>
  )
}
