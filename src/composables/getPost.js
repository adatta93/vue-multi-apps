import { ref } from "vue";

export const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await fetch("http://localhost:4000/posts/" + id);
      console.log("res", res);
      if (!res.ok) {
        throw Error("No data available");
      }
      post.value = await res.json();
    } catch (err) {
      console.log(err);
      error.value = err.message;
      let posts = [
        {
          title: "Post 1",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eligendi culpa! Error commodi reprehenderit hic ipsam enim nisi doloribus, quam ratione eum, minus nobis non illo quis ut numquam aliquid similique? Illum cum temporibus rerum, sint id rem veniam consectetur doloremque sequi totam nemo maiores ab corporis itaque. Corporis commodi nemo eius ipsum quibusdam eum rerum, explicabo illo ab aspernatur sunt modi cum? Exercitationem tempore architecto maiores dignissimos temporibus pariatur autem, ratione perferendis tenetur fugiat assumenda nesciunt ullam, sequi quos labore laboriosam mollitia id iste debitis consectetur animi neque! Sequi illum repudiandae minus a soluta perferendis sapiente asperiores repellat voluptas.",
          id: 1,
          tags: ["webdev", "coding", "newss"],
        },
        {
          title: "Post 2",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eligendi culpa! Error commodi reprehenderit hic ipsam enim nisi doloribus, quam ratione eum, minus nobis non illo quis ut numquam aliquid similique? Illum cum temporibus rerum, sint id rem veniam consectetur doloremque sequi totam nemo maiores ab corporis itaque. Corporis commodi nemo eius ipsum quibusdam eum rerum, explicabo illo ab aspernatur sunt modi cum? Exercitationem tempore architecto maiores dignissimos temporibus pariatur autem, ratione perferendis tenetur fugiat assumenda nesciunt ullam, sequi quos labore laboriosam mollitia id iste debitis consectetur animi neque! Sequi illum repudiandae minus a soluta perferendis sapiente asperiores repellat voluptas.",
          id: 2,
          tags: ["css", "coding", "html"],
        },
      ];
      post.value = posts.find((p) => p.id == id);
    }
  };

  return { post, error, load };
};
