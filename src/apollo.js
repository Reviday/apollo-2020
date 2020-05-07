import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // uri: "https://movieql.now.sh", // 현재는 운영 종료
  uri: "http://localhost:4000", // movieql 레포지토리를 직접 로컬에서 실행. 이 프로젝트를 실행하기 위해서는 movieql도 실행시켜줘야 함.
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked
          },
        });
      },
    },
  },
});

export default client;
