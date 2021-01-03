export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Is Brookmas Brookmost? ${(await message({ time: 1, copy: 'Definitely!'}))}`,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (He's the man!!!)`);
  }, time * 1000)
);
