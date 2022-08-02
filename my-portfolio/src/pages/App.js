import "./App.css";
import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import { graphql } from "@octokit/graphql";

function App() {
  const [queryResult, setQuery] = useState(null);

  // TODO: GraphQL 쿼리를 이용해 아고라 스테이츠에 접근하여 1개 이상의 데이터를 조회
  // Issues, Pull requests 등에 접근하여 데이터를 조회
  // 현재 내가 로그인 되어 있는지 확인할 수 있는 쿼리를 짜보기
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token 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`,
    },
  });

  const getRepository = async () => {
    const { repository } = await graphqlWithAuth(`
       {
          repository(name: "agora-states-fe", owner: "codestates-seb") {
            id
            discussions(first: 50) {
              edges {
                node {
                  id
                  title
                  createdAt
                }
              }
            }
          }
      }
    `);
    return repository;
  }
  useEffect(() => {
    const repository = getRepository();
    repository.then(res => {
      const qres = res.discussions.edges.map(el => el.node);
      console.log(qres.map(el=>el.title))
      setQuery(qres.map(el=>el.title))
    });
  },[]);

  return (
    <div>
      GraphQL실습
      <br></br>
      {queryResult}
      <br></br>
      <Button label={"Basic Button"} />
    </div>
  );
}

export default App;
