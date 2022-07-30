import { useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Moment from "moment"

import * as SC from "../styles/repoStyle"
import client from '../services/client';
import { IBranch, ICommit } from "../interfaces";

export default function branches() {
  const router = useRouter()
  const { username, reponame } = router.query
  const [commits, setCommits] = useState<ICommit[]>([]);
  const options = { year: "numeric", month: "long", day: "numeric" }

  useEffect(() => {
    const getBranches = async () => {
      const branches = await client.get<IBranch[]>(`/repos/${username}/${reponame}/branches`)
      ///repos/:owner/:repo/commits?sha=branchname
      setBranches(branches.data)
    }
    getBranches()
  }, [])

  async function getCommits(branch: string) {
    const resCommits = await client.get(`/repos/${username}/${reponame}/commits?sha=${branch}`)
    setCommits(resCommits.data)
    console.log(resCommits.data)
  }


  const [branches, setBranches] = useState<IBranch[]>([])
  return (
    <SC.Main>
      <Head>
        <title>Github User Search</title>
        <meta name="description" content="Search user with Github API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SC.ContainerTitle onClick={() => router.back()}>
          <SC.IconBack />
          <SC.BoxIconTitle>
            <SC.BranchIcon />
            <SC.Title>Branches</SC.Title>
          </SC.BoxIconTitle>
        </SC.ContainerTitle>
        <SC.ContainerBranches>
          {branches.map((branch, index) => (
              <SC.BranchName key={index} onClick={ ()=>  getCommits(branch.name)}>
                {branch.name}
              </SC.BranchName>
          ))}
        </SC.ContainerBranches>
        <SC.ContainerCommits>
          {commits.map((commit, index) => (
            <SC.CardCommit key={index}>
              <SC.HeaderCardCommit>
                <SC.CommitTitle>{commit.commit.message}</SC.CommitTitle>
              </SC.HeaderCardCommit>
              <SC.CommitDate>{commit.commit.author.name + " commited on " + Moment(commit.commit.author.date).format("DD MMMM YYYY")}</SC.CommitDate>
            </SC.CardCommit>
          ))}
        </SC.ContainerCommits>
    </SC.Main>
  )
}
