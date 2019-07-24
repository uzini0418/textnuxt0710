function delay(item) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(item);
      resolve();
    }, 500)
  );
}

async function loop1(array) {
  array.forEach(async item => {
    await delay(item);
  });
  console.log("Done!");
}

loop1([1,2,3]);

//해결

//직렬 처리 (for of / for문 사용)
async function loop2(array) {
  for (const item of array) {
    await delay(item);
  }
  console.log("Done!");
}

//병렬 처리
async function parallel(array) {
  const promises = array.map(item => delay(item));
  await Promise.all(promises);
  console.log("Done!");
}
