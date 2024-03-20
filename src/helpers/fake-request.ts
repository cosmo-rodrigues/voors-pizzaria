export const fakeRequest = async (awaitTime: number) => {
  await new Promise((resolve) => setTimeout(resolve, awaitTime));
};
