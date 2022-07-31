import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { HiOutlineSearch, HiStar} from 'react-icons/hi'
import toast, {Toaster} from "react-hot-toast"

import * as SC from '../styles/mainStyle'
import client from '../services/client';
import { IUser, IRepo } from '../interfaces';

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [result, setResult] = useState<IUser>()
  const [repos, setRepos] = useState<IRepo[]>([])
  // const [loading, setLoading] = useState<boolean>(false)

  async function getUser() {
    try {
      const user = await client.get(`/users/${search}`)
      const repos = await client.get<IRepo[]>(`/users/${search}/repos`)
      setResult(user.data)
      setRepos(repos.data)
    }
    catch (err) {
      toast.error("Usuário não encontrado")
      console.log(err)
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      getUser()
    }
  }

  return (
    <SC.Container>
      <Head>
        <title>Github User Search</title>
        <meta name="description" content="Buscar usuários utilizando a api do github" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
      <SC.Main>
        <SC.ContainerInput>
          <SC.Input type={'text'} placeholder='Search username' value={search} onChange={e => setSearch(e.target.value)} onKeyPress={handleKeyPress} />
          <SC.ButtonSearch type='button' onClick={getUser}>
            <HiOutlineSearch size={24} color='#fff' />
          </SC.ButtonSearch>
        </SC.ContainerInput>
        {
          result ?
            <>
              <SC.ContainerInfos>
                <SC.HeadInfos>
                  <SC.BasicInfos>
                    <SC.Avatar>
                      <SC.UserImage
                        src={result?.avatar_url}
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                        priority
                      />
                    </SC.Avatar>
                    <SC.ContainerText>
                      <SC.Name>
                        {result?.name}
                      </SC.Name>
                      <SC.NameText>
                        #{result?.login}
                      </SC.NameText>
                      <SC.NumbersInfos>
                        <SC.TextNumbers>Repositories: <SC.Bold>{result?.public_repos}</SC.Bold></SC.TextNumbers>
                        <SC.TextNumbers>Followers: <SC.Bold>{result?.followers}</SC.Bold></SC.TextNumbers>
                        <SC.TextNumbers>Following: <SC.Bold>{result?.following}</SC.Bold></SC.TextNumbers>
                      </SC.NumbersInfos>
                    </SC.ContainerText>
                  </SC.BasicInfos>
                </SC.HeadInfos>
              </SC.ContainerInfos>
              <SC.ContainerRepos>
                <SC.ContainerTitleRepos>
                  <SC.TitleRepos>Repositories</SC.TitleRepos>
                </SC.ContainerTitleRepos>
                {
                  repos.map((repo, index) => (
                    <Link key={index} href={{
                      pathname: `/${repo.name}`,
                      query: {
                        username: result.login,
                        reponame: repo.name
                      }
                      }}>
                    <SC.CardRepo>
                      <SC.CardRepoHeader>
                        <SC.ContainerRepoTexts>
                          <SC.CardRepoTitle>
                            {repo.name}
                          </SC.CardRepoTitle>
                          <SC.CardRepoDescription>
                            {repo.description}
                          </SC.CardRepoDescription>
                        </SC.ContainerRepoTexts>
                      </SC.CardRepoHeader>
                      <SC.CardRepoFooter>
                        {
                          repo.language ?
                            <SC.CardRepoLanguage>
                              {repo.language}
                            </SC.CardRepoLanguage>
                            : null
                        }
                        {
                          repo.stargazers_count ?
                            <SC.ContainerStars>
                              <HiStar size={20} color='#F4A27E' />
                              <SC.CardRepoStars>
                                {repo.stargazers_count}
                              </SC.CardRepoStars>
                            </SC.ContainerStars>
                            : null
                        }
                      </SC.CardRepoFooter>
                    </SC.CardRepo>
                    </Link>
                  ))
                }
              </SC.ContainerRepos>
            </>
            :
            null
        }
      </SC.Main>
    </SC.Container>
  )
}
