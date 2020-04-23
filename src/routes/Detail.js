import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  const { id } = useParams();
  console.log(id);
  console.log(typeof id);
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: Number(id) }, // 값 자체가 String으로 들어와서 Number 타입으로 변환.(API역할을 하는 서버에서 String으로 넘기도록 했나보다)
  });
  if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};
