export default function ({ $axios }, inject) {
  const auth = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });
  auth.setHeader("Authorization", "123");

  inject("authNetwork", auth);
}
